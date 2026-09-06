import type { MetadataRoute } from "next";

const baseUrl = "https://premiumsend.uz";

type ArticleEntry = {
  slug: string;
  lastModified: string;
  priority?: number;
};

const articles: ArticleEntry[] = [
  { slug: "telegram-stars-somda-uzs-sotib-olish", lastModified: "2026-09-06", priority: 0.9 },
  { slug: "telegram-stars-humo-orqali", lastModified: "2026-09-06", priority: 0.85 },
  { slug: "telegram-stars-click-orqali", lastModified: "2026-09-06", priority: 0.85 },
  { slug: "telegram-stars-payme-orqali", lastModified: "2026-09-06", priority: 0.85 },
  { slug: "uzcard-humo-app-store-play-market-ishlamaydi", lastModified: "2026-09-06", priority: 0.9 },
  { slug: "nega-xalqaro-karta-telegram-premiumni-rad-etadi", lastModified: "2026-09-03", priority: 0.9 },
  { slug: "telegram-business-premium-imkoniyatlari", lastModified: "2026-08-26", priority: 0.9 },
  { slug: "telegram-premium-2026-yangi-funksiyalar", lastModified: "2026-08-23", priority: 0.9 },
  { slug: "1-oylik-telegram-premium-click-orqali", lastModified: "2026-08-18", priority: 0.85 },
  { slug: "telegram-premium-arziydimi-youtube-spotify-bilan-taqqoslash", lastModified: "2026-07-12", priority: 0.8 },
  { slug: "telegram-premium-qanday-yoqiladi-sozlanadi", lastModified: "2026-07-03", priority: 0.85 },
  { slug: "3-oylik-telegram-premium-narxi", lastModified: "2026-06-22", priority: 0.9 },
  { slug: "telegram-premium-muddati-tugadi-nima-qilish", lastModified: "2026-06-13", priority: 0.9 },
  { slug: "12-oylik-telegram-premium-click-orqali", lastModified: "2026-06-05", priority: 0.85 },
  { slug: "telegram-premium-muammolari-xatoliklari", lastModified: "2026-06-02", priority: 0.9 },
  { slug: "telegram-premium-ishonchli-saytdan-sotib-olish", lastModified: "2026-05-22", priority: 0.9 },
  { slug: "premiumbot-ishlamayapti-premium-qayerdan-sotib-olish", lastModified: "2026-05-21", priority: 0.9 },
  { slug: "telegram-premium-tugilgan-kun-sovgasi", lastModified: "2026-05-19", priority: 0.9 },
  { slug: "telegram-premium-somda-uzs-sotib-olish", lastModified: "2026-05-18", priority: 0.9 },
  { slug: "telegram-premium-4gb-fayl-kanal-guruh-limitlari", lastModified: "2026-05-16", priority: 0.9 },
  { slug: "12-oylik-telegram-premium-humo-orqali", lastModified: "2026-05-14", priority: 0.85 },
  { slug: "telegram-stars-paketlari-narxlari", lastModified: "2026-05-13", priority: 0.9 },
  { slug: "telegram-stars-uzcard-orqali", lastModified: "2026-05-12", priority: 0.85 },
  { slug: "6-oylik-telegram-premium-payme-orqali", lastModified: "2026-05-12", priority: 0.85 },
  { slug: "6-oylik-telegram-premium-sovga-qilish", lastModified: "2026-05-11", priority: 0.85 },
  { slug: "6-oylik-telegram-premium-click-orqali", lastModified: "2026-05-09", priority: 0.85 },
  { slug: "nega-telegram-premium-app-store-play-market-qimmat", lastModified: "2026-05-08", priority: 0.85 },
  { slug: "premiumsend-vs-boshqa-resellerlar", lastModified: "2026-05-07", priority: 0.85 },
  { slug: "telegram-stars-click-payme-orqali-somda", lastModified: "2026-05-07", priority: 0.8 },
  { slug: "6-oylik-telegram-premium-humo-orqali", lastModified: "2026-05-07", priority: 0.85 },
  { slug: "telegram-premium-stikerlari-emoji-reaksiyalari", lastModified: "2026-05-06", priority: 0.85 },
  { slug: "telegram-stars-vs-telegram-premium", lastModified: "2026-05-05", priority: 0.85 },
  { slug: "telegram-premium-xavfsiz-aldovdan-saqlanish", lastModified: "2026-05-05", priority: 0.9 },
  { slug: "telegram-stars-ozbekistondan-sotib-olish", lastModified: "2026-05-05", priority: 0.85 },
  { slug: "telegram-premium-payme-orqali", lastModified: "2026-05-05", priority: 0.9 },
  { slug: "3-oylik-telegram-premium-payme-orqali", lastModified: "2026-05-05", priority: 0.85 },
  { slug: "telegram-premium-click-orqali", lastModified: "2026-05-03", priority: 0.9 },
  { slug: "3-oylik-telegram-premium-click-orqali", lastModified: "2026-05-03", priority: 0.85 },
  { slug: "3-oylik-telegram-premium-humo-orqali", lastModified: "2026-05-03", priority: 0.85 },
  { slug: "telegram-premium-humo-orqali", lastModified: "2026-05-02", priority: 0.9 },
  { slug: "telegram-premium-vs-oddiy-telegram", lastModified: "2026-05-02", priority: 0.9 },
  { slug: "telegram-premium-qachon-faollashadi", lastModified: "2026-05-01", priority: 0.85 },
  { slug: "telegram-premium-narxlari", lastModified: "2026-04-30", priority: 0.9 },
  { slug: "telegram-stars-nima", lastModified: "2026-04-30", priority: 0.9 },
  { slug: "telegram-premium-nima", lastModified: "2026-04-29", priority: 0.9 },
  { slug: "telegram-premium-eng-arzon-qayerdan-sotib-olish", lastModified: "2026-04-29", priority: 0.9 },
  { slug: "12-oylik-telegram-premium-uzcard-orqali", lastModified: "2026-04-17", priority: 0.85 },
  { slug: "6-oylik-telegram-premium-uzcard-orqali", lastModified: "2026-04-17", priority: 0.85 },
  { slug: "3-oylik-telegram-premium-uzcard-orqali", lastModified: "2026-04-17", priority: 0.85 },
  { slug: "1-oylik-telegram-premium-uzcard-orqali-sotib-olish", lastModified: "2026-04-08", priority: 0.85 },
  { slug: "12-oylik-telegram-premium-sovga-qilish", lastModified: "2026-04-08", priority: 0.85 },
  { slug: "6-oylik-telegram-premium-olishning-eng-yaxshi-usuli", lastModified: "2026-04-08", priority: 0.85 },
  { slug: "3-oylik-telegram-premium-sovga-qilish", lastModified: "2026-04-08", priority: 0.85 },
  { slug: "1-oylik-telegram-premium-sotib-olish", lastModified: "2026-04-07", priority: 0.85 },
  { slug: "3-oylik-telegram-premium-sotib-olish", lastModified: "2026-04-02", priority: 0.85 },
  { slug: "6-oylik-telegram-premium-sotib-olish", lastModified: "2026-04-02", priority: 0.85 },
  { slug: "12-oylik-telegram-premium-sotib-olish", lastModified: "2026-04-02", priority: 0.85 },
];

// "haqida" (uz) maps to "o-nas" (ru); all other root slugs are identical between locales.
const rootPages: Array<{ uzPath: string; ruPath: string; lastModified: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
  { uzPath: "", ruPath: "/ru", lastModified: "2026-05-22", priority: 1, changeFrequency: "weekly" },
  { uzPath: "/1-oylik", ruPath: "/ru/1-oylik", lastModified: "2026-05-22", priority: 0.9, changeFrequency: "monthly" },
  { uzPath: "/3-oylik", ruPath: "/ru/3-oylik", lastModified: "2026-05-22", priority: 0.9, changeFrequency: "monthly" },
  { uzPath: "/6-oylik", ruPath: "/ru/6-oylik", lastModified: "2026-05-22", priority: 0.9, changeFrequency: "monthly" },
  { uzPath: "/12-oylik", ruPath: "/ru/12-oylik", lastModified: "2026-05-22", priority: 0.9, changeFrequency: "monthly" },
  { uzPath: "/stars", ruPath: "/ru/stars", lastModified: "2026-09-04", priority: 0.9, changeFrequency: "monthly" },
  { uzPath: "/50-stars", ruPath: "/ru/50-stars", lastModified: "2026-09-04", priority: 0.85, changeFrequency: "monthly" },
  { uzPath: "/100-stars", ruPath: "/ru/100-stars", lastModified: "2026-09-04", priority: 0.85, changeFrequency: "monthly" },
  { uzPath: "/250-stars", ruPath: "/ru/250-stars", lastModified: "2026-09-04", priority: 0.85, changeFrequency: "monthly" },
  { uzPath: "/500-stars", ruPath: "/ru/500-stars", lastModified: "2026-09-04", priority: 0.85, changeFrequency: "monthly" },
  { uzPath: "/1000-stars", ruPath: "/ru/1000-stars", lastModified: "2026-09-04", priority: 0.85, changeFrequency: "monthly" },
  { uzPath: "/2500-stars", ruPath: "/ru/2500-stars", lastModified: "2026-09-04", priority: 0.85, changeFrequency: "monthly" },
  { uzPath: "/5000-stars", ruPath: "/ru/5000-stars", lastModified: "2026-09-04", priority: 0.85, changeFrequency: "monthly" },
  { uzPath: "/maqolalar", ruPath: "/ru/maqolalar", lastModified: "2026-05-22", priority: 0.8, changeFrequency: "weekly" },
  { uzPath: "/haqida", ruPath: "/ru/o-nas", lastModified: "2026-05-05", priority: 0.8, changeFrequency: "monthly" },
  { uzPath: "/oferta", ruPath: "/ru/oferta", lastModified: "2026-04-05", priority: 0.5, changeFrequency: "yearly" },
];

function buildAlternateLanguages(uzUrl: string, ruUrl: string) {
  return {
    uz: uzUrl,
    ru: ruUrl,
    "x-default": uzUrl,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of rootPages) {
    const uzUrl = `${baseUrl}${page.uzPath || "/"}`.replace(/\/$/, "") || baseUrl;
    const ruUrl = `${baseUrl}${page.ruPath}`;
    const alternates = { languages: buildAlternateLanguages(uzUrl, ruUrl) };
    const lastModified = new Date(page.lastModified);

    entries.push({
      url: uzUrl,
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates,
    });

    entries.push({
      url: ruUrl,
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: Math.max(page.priority - 0.1, 0.4),
      alternates,
    });
  }

  for (const article of articles) {
    const uzUrl = `${baseUrl}/maqolalar/${article.slug}`;
    const ruUrl = `${baseUrl}/ru/maqolalar/${article.slug}`;
    const alternates = { languages: buildAlternateLanguages(uzUrl, ruUrl) };
    const lastModified = new Date(article.lastModified);
    const priority = article.priority ?? 0.8;

    entries.push({
      url: uzUrl,
      lastModified,
      changeFrequency: "monthly",
      priority,
      alternates,
    });

    entries.push({
      url: ruUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: Math.max(priority - 0.05, 0.4),
      alternates,
    });
  }

  return entries;
}
