#!/usr/bin/env node
// Google Search Console API client — no external deps (Node 18+ crypto + fetch).
// Auth: service-account JWT (RS256) -> OAuth2 access token -> Webmasters v3 API.
//
// Usage:
//   node scripts/gsc.mjs sites                       # list verified properties
//   node scripts/gsc.mjs query [days] [siteUrl]      # search analytics (default 90 days)
//   node scripts/gsc.mjs report [days] [siteUrl]     # full SEO opportunity report -> JSON file
//
// Credentials read from .secrets/gsc-service-account.json (gitignored).

import { readFileSync, writeFileSync } from "node:fs";
import { createSign } from "node:crypto";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const KEY_PATH = join(ROOT, ".secrets", "gsc-service-account.json");
const SCOPE_RO = "https://www.googleapis.com/auth/webmasters.readonly";
const SCOPE_RW = "https://www.googleapis.com/auth/webmasters";
const SCOPE_INDEXING = "https://www.googleapis.com/auth/indexing";

const b64url = (buf) =>
  Buffer.from(buf).toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");

async function getAccessToken(scope = SCOPE_RO) {
  const key = JSON.parse(readFileSync(KEY_PATH, "utf8"));
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claim = b64url(
    JSON.stringify({
      iss: key.client_email,
      scope,
      aud: "https://oauth2.googleapis.com/token",
      iat: now,
      exp: now + 3600,
    })
  );
  const signer = createSign("RSA-SHA256");
  signer.update(`${header}.${claim}`);
  const signature = b64url(signer.sign(key.private_key));
  const jwt = `${header}.${claim}.${signature}`;

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(`Token error: ${JSON.stringify(data)}`);
  return data.access_token;
}

async function api(path, token, body) {
  const res = await fetch(`https://www.googleapis.com/webmasters/v3/${path}`, {
    method: body ? "POST" : "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(`API error (${path}): ${JSON.stringify(data)}`);
  return data;
}

async function listSites(token) {
  const data = await api("sites", token);
  return (data.siteEntry || []).map((s) => s.siteUrl);
}

// Raw call to any absolute Google API URL (used for inspection/indexing hosts).
async function apiAbs(url, token, { method = "POST", body } = {}) {
  const res = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  let data;
  try { data = text ? JSON.parse(text) : {}; } catch { data = { raw: text }; }
  return { ok: res.ok, status: res.status, data };
}

async function submitSitemap(token, siteUrl, feedpath) {
  const res = await fetch(
    `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/sitemaps/${encodeURIComponent(feedpath)}`,
    { method: "PUT", headers: { Authorization: `Bearer ${token}` } }
  );
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`Sitemap submit failed (${res.status}): ${t}`);
  }
  return true;
}

async function listSitemaps(token, siteUrl) {
  const data = await api(`sites/${encodeURIComponent(siteUrl)}/sitemaps`, token);
  return data.sitemap || [];
}

async function resolveSite(token, arg) {
  if (arg) return arg;
  const sites = await listSites(token);
  // Prefer domain property or the premiumsend one.
  const pick =
    sites.find((s) => s.includes("premiumsend")) || sites[0];
  if (!pick) throw new Error("No verified sites for this service account.");
  return pick;
}

function dateRange(days) {
  const end = new Date();
  const start = new Date();
  start.setDate(end.getDate() - days);
  const fmt = (d) => d.toISOString().slice(0, 10);
  return { startDate: fmt(start), endDate: fmt(end) };
}

async function searchAnalytics(token, siteUrl, days, dimensions, rowLimit = 1000) {
  const { startDate, endDate } = dateRange(days);
  const data = await api(
    `sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`,
    token,
    { startDate, endDate, dimensions, rowLimit, dataState: "all" }
  );
  return data.rows || [];
}

function fmtRows(rows, keys) {
  return rows.map((r) => {
    const o = {};
    keys.forEach((k, i) => (o[k] = r.keys[i]));
    o.clicks = r.clicks;
    o.impressions = r.impressions;
    o.ctr = +(r.ctr * 100).toFixed(2);
    o.position = +r.position.toFixed(1);
    return o;
  });
}

async function main() {
  const rest = process.argv.slice(2);
  const [cmd = "report", daysArg, siteArg] = rest;
  const days = Number(daysArg) || 90;

  // --- Indexing / sitemap commands (own scopes, handled before RO token) ---

  if (cmd === "submit-sitemap") {
    const token = await getAccessToken(SCOPE_RW);
    const siteUrl = await resolveSite(token, siteArg);
    const feed = process.argv[3] && process.argv[3].startsWith("http")
      ? process.argv[3]
      : "https://premiumsend.uz/sitemap.xml";
    await submitSitemap(token, siteUrl, feed);
    console.log(`✅ Sitemap submitted: ${feed}  (property: ${siteUrl})`);
    const list = await listSitemaps(token, siteUrl);
    console.log(JSON.stringify(list, null, 2));
    return;
  }

  if (cmd === "sitemaps") {
    const token = await getAccessToken(SCOPE_RW);
    const siteUrl = await resolveSite(token, siteArg);
    console.log(JSON.stringify(await listSitemaps(token, siteUrl), null, 2));
    return;
  }

  if (cmd === "inspect") {
    const token = await getAccessToken(SCOPE_RO);
    const siteUrl = await resolveSite(token, null);
    const urls = rest.slice(1).filter((u) => u.startsWith("http"));
    for (const u of urls) {
      const r = await apiAbs(
        "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect",
        token,
        { body: { inspectionUrl: u, siteUrl } }
      );
      const res = r.data?.inspectionResult?.indexStatusResult || {};
      console.log(`\n${u}`);
      console.log(`  verdict:   ${res.verdict || r.status}`);
      console.log(`  coverage:  ${res.coverageState || "-"}`);
      console.log(`  crawledAs: ${res.crawledAs || "-"}  lastCrawl: ${res.lastCrawlTime || "-"}`);
      if (!r.ok) console.log(`  error: ${JSON.stringify(r.data)}`);
    }
    return;
  }

  if (cmd === "index") {
    const token = await getAccessToken(SCOPE_INDEXING);
    const urls = rest.slice(1).filter((u) => u.startsWith("http"));
    for (const u of urls) {
      const r = await apiAbs(
        "https://indexing.googleapis.com/v3/urlNotifications:publish",
        token,
        { body: { url: u, type: "URL_UPDATED" } }
      );
      console.log(`${r.ok ? "✅" : "❌ " + r.status}  ${u}${r.ok ? "" : "  " + JSON.stringify(r.data)}`);
    }
    return;
  }

  const token = await getAccessToken(SCOPE_RO);

  if (cmd === "sites") {
    const sites = await listSites(token);
    console.log(JSON.stringify(sites, null, 2));
    return;
  }

  const siteUrl = await resolveSite(token, siteArg);
  console.error(`# Site: ${siteUrl}  |  last ${days} days`);

  if (cmd === "query") {
    const queries = fmtRows(await searchAnalytics(token, siteUrl, days, ["query"]), ["query"]);
    console.log(JSON.stringify(queries, null, 2));
    return;
  }

  if (cmd === "report") {
    const [queries, pages, qp] = await Promise.all([
      searchAnalytics(token, siteUrl, days, ["query"]),
      searchAnalytics(token, siteUrl, days, ["page"]),
      searchAnalytics(token, siteUrl, days, ["page", "query"]),
    ]);
    const report = {
      site: siteUrl,
      range: dateRange(days),
      totals: {
        clicks: queries.reduce((a, r) => a + r.clicks, 0),
        impressions: queries.reduce((a, r) => a + r.impressions, 0),
      },
      queries: fmtRows(queries, ["query"]),
      pages: fmtRows(pages, ["page"]),
      pageQueries: fmtRows(qp, ["page", "query"]),
    };
    const out = join(ROOT, ".secrets", `gsc-report-${days}d.json`);
    writeFileSync(out, JSON.stringify(report, null, 2));
    console.error(`# Wrote ${out}`);
    console.error(
      `# Totals: ${report.totals.clicks} clicks, ${report.totals.impressions} impressions, ${report.queries.length} queries, ${report.pages.length} pages`
    );
    return;
  }

  throw new Error(`Unknown command: ${cmd}`);
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
