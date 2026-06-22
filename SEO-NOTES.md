# SEO — GSC asosidagi ish daftari

Google Search Console API ulangan. Ma'lumotni qayta olish:

```bash
node scripts/gsc.mjs sites          # tasdiqlangan property'lar
node scripts/gsc.mjs query 90       # so'rovlar (90 kun)
node scripts/gsc.mjs report 90      # to'liq hisobot -> .secrets/gsc-report-90d.json

# Indekslash:
node scripts/gsc.mjs submit-sitemap          # sitemap.xml ni GSC'ga yuborish
node scripts/gsc.mjs sitemaps                # yuborilgan sitemap'lar holati
node scripts/gsc.mjs index <url> [<url>...]  # Indexing API: crawl signali (URL_UPDATED)
node scripts/gsc.mjs inspect <url> [<url>...] # URL holati (indexed / discovered)
```

> Indexing API yoqilgan va service account Owner — to'g'ridan-to'g'ri URL yuborish ishlaydi.
> Yangi yoki yangilangan maqoladan keyin: `submit-sitemap` + shu URL'ni `index` qil.

- Property: `sc-domain:premiumsend.uz`
- Service account: `claude-gsc@cellular-gift-384816.iam.gserviceaccount.com`
- Kalit: `.secrets/gsc-service-account.json` (gitignore'langan, repo'ga TUSHMAYDI)

---

## ✅ #1 — www / non-www dublikati (TUZATILDI 2026-06-22, Vercel API orqali)

**Muammo edi:** Jonli sayt `www.premiumsend.uz`'da ochilardi (apex domen Vercel'da
`www`'ga redirect qilingan edi), lekin butun kod (canonical, sitemap, robots, og:url, schema)
`premiumsend.uz` (non-www)'ni ko'rsatadi. Google bitta sahifani 2–3 xil URL deb indekslab,
signallarni bo'lib yuborardi. Misol — "narxlari" maqolasi: 441 + 436 + 414 imp = ~870
ko'rsatish 3 ga bo'lingan, CTR <1%.

**Bajarildi (Vercel project `prj_0LZJnWKSY7f62FHUp3TaCYSenx3c`):**
- `premiumsend.uz` — redirect olib tashlandi (endi asosiy, 200).
- `www.premiumsend.uz` — `premiumsend.uz`'ga **308** (doimiy) redirect, yo'l saqlanadi.

Tekshirildi: `premiumsend.uz` → 200, `www...` → 308 → non-www. Kod bilan to'liq mos.
1–3 hafta ichida Google signallarni non-www'ga birlashtiradi (GSC'da kuzating).

> Vercel domain redirect'ni o'zgartirish:
> `PATCH /v9/projects/{id}/domains/{domain}` body `{"redirect":"premiumsend.uz","redirectStatusCode":308}`.

---

## ✅ Bajarildi (kod ichida)

GSC 90-kunlik ma'lumotiga asoslangan title/description optimizatsiyasi:

- **UZ bosh sahifa** — sarlavhaga "UzCard, Humo" qo'shildi.
  Sabab: eng katta so'rov `telegram premium sotib olish uzcard` — 464 imp, poz 4.7, CTR 5.6%
  (sarlavhada exact-match yo'q edi).
- **RU bosh sahifa** — sarlavhaga "в Узбекистане — цена" qo'shildi.
  Sabab: `цена телеграм премиум в узбекистане` (poz 5), `сколько стоит...` klasteri — 0 klik edi.

---

## 🟡 Keyingi imkoniyatlar (kuzatuv)

- **Inglizcha "price" talab** kuchli, lekin sayt UZ/RU only: `telegram premium price uzbekistan
  2026` (127 imp, 0 klik), `telegram premium price 2026 uzbekistan`, `...price 1 year...`.
  Variant: narxlari maqolasiga ixcham inglizcha narx jadvali/FAQ qo'shish (lokalizatsiya
  siyosatini buzmasdan).
- **"3 oylik narxi" klasteri** (68+54+45+24 imp, poz 7–8, asosan 0 klik) — /3-oylik va narxlari
  maqolasi www-fix'dan keyin kuzatilsin; kerak bo'lsa kontent kuchaytiriladi.
- **Asosiy money-keyword** `...sotib olish uzcard` poz 4.7 — top-3 ga chiqarish uchun ichki
  havolalar + maqola signalari kuchaytirilsin.
