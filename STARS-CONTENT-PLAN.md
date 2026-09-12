# Telegram Stars — GEO/AEO Content Plan (query-to-page xaritasi)

> Holat: **2026-09-12** — bu reja `CONTENT-PLAN.md`dagi eski Stars A-F klaster tuzilishidan mustaqil, alohida reja. Mavzu-klaster o'rniga har bir qator **aynan bir savol/AI so'roviga** javob beruvchi bitta sahifani belgilaydi.
> Sifat mezonlari baribir `ARTICLE-STANDARD.md` (10 mezon) dan olinadi — bu fayl faqat **qaysi sahifalar yozilishi va qanday tartibda** ekanini belgilaydi.
> Eslatma: mavjud 6 ta eski Stars maqolasi (`telegram-stars-nima`, `telegram-stars-paketlari-narxlari`, `telegram-stars-uzcard-orqali`, `telegram-stars-click-payme-orqali-somda`, `telegram-stars-ozbekistondan-sotib-olish`, `telegram-stars-vs-telegram-premium`) hozircha **tegilmaydi** — ular hali ham eski narx (240 so'm/star) va `@starsjoybot`/StarsJoy.uz'ga CTA qiladi. Foydalanuvchi ko'rsatmasi bilan bu reja doirasida ular o'zgartirilmaydi; faqat yangi yoziladigan sahifalar to'g'ri botga (@premiumsendbot) CTA qiladi.

**Belgilar:** ✅ chop etilgan (UZ+RU) · ⬜ navbatda

---

## 🔒 Narx jadvali — barcha yangi Stars maqolalar uchun yagona manba

| Paket | Narx (UZS) | Izoh |
|---|---|---|
| 50 Stars | 15 000 so'm | minimal, sticker/kichik tip uchun |
| 100 Stars | 30 000 so'm | |
| 250 Stars | 75 000 so'm | |
| 500 Stars | 150 000 so'm | |
| 1000 Stars | 300 000 so'm | eng ommabop |
| 2500 Stars | 750 000 so'm | |
| 5000 Stars | 1 500 000 so'm | ko'p miqdorda / biznes |

Tarif: **300 so'm/star, chiziqli** (qaysi paket tanlansa ham 1 star narxi bir xil). To'lov usullari: Uzcard, Humo, Click, Payme — hammasi so'mda, konvertatsiyasiz. Manba: `public/llms.txt`, `/stars`, `/50-stars`…`/5000-stars`.

**Majburiy qoida:** shu rejadagi har bir yangi maqola, istisnosiz, **@premiumsendbot**ga (https://premiumsend.uz/stars) CTA bilan tugaydi. Boshqa hech qanday bot yoki domenga havola berilmaydi.

---

## Tier 1 — Xarid tayyor (transactional, eng yuqori ustuvorlik, birinchi yoziladi)

| # | Query (foydalanuvchi/AI savoli) | Slug g'oyasi | Holat | Izoh |
|---|---|---|---|---|
| 1.1 | Telegram Stars qayerdan sotib olsam bo'ladi O'zbekistonda | `stars-sotib-olish-ozbekiston` | ⬜ | Pillar/hub — `telegram-stars-ozbekistondan-sotib-olish` mavjud, lekin eski botga CTA qiladi; bu yangi sahifa mustaqil yoziladi, eskisiga tegilmaydi |
| 1.2 | 50 stars qancha turadi va qanday olish mumkin | `50-stars-narxi-va-xarid` | ⬜ | → `/50-stars`ga ichki havola |
| 1.3 | 100 stars qancha turadi | `100-stars-narxi-va-xarid` | ⬜ | → `/100-stars` |
| 1.4 | 250 stars qancha turadi | `250-stars-narxi-va-xarid` | ⬜ | → `/250-stars` |
| 1.5 | 500 stars qancha turadi | `500-stars-narxi-va-xarid` | ⬜ | → `/500-stars` |
| 1.6 | 1000 stars qancha turadi — eng ommabop | `1000-stars-narxi-va-xarid` | ⬜ | → `/1000-stars` |
| 1.7 | 2500 stars qancha turadi | `2500-stars-narxi-va-xarid` | ⬜ | → `/2500-stars` |
| 1.8 | 5000 stars qancha turadi, optom narx | `5000-stars-narxi-va-xarid` | ⬜ | → `/5000-stars` |
| 1.9 | Uzcard bilan stars sotib olsam bo'ladimi | `stars-uzcard-orqali-xarid` | ⬜ | Yangi, mustaqil sahifa — mavjud `telegram-stars-uzcard-orqali`ga tegilmaydi, dublikat nazorati yozishda hisobga olinadi |
| 1.10 | Humo bilan stars sotib olsam bo'ladimi | — | ✅ | Mavjud (`telegram-stars-humo-orqali`, P2) — to'g'ri botga CTA qiladi, qayta yozilmaydi |
| 1.11 | Click orqali stars sotib olsam bo'ladimi | — | ✅ | Mavjud (`telegram-stars-click-orqali`, P3) — to'g'ri |
| 1.12 | Payme orqali stars sotib olsam bo'ladimi | — | ✅ | Mavjud (`telegram-stars-payme-orqali`, P4) — to'g'ri |
| 1.13 | Kartaga to'g'ridan-to'g'ri o'tkazib stars olish mumkinmi | `stars-kartaga-otkazma` | ⬜ | Bank P2P umumiy qo'llanma |

## Tier 2 — Qaror oldi (commercial investigation)

| # | Query | Slug g'oyasi | Holat |
|---|---|---|---|
| 2.1 | 1 stars necha so'm — App Store bilan solishtirsa | `1-stars-necha-som-appstore-taqqoslash` | ⬜ |
| 2.2 | Stars sotib olish xavfsizmi, aldamaydimi | `stars-xavfsizmi-royxatdan-otish` | ⬜ |
| 2.3 | Xorijiy karta yo'q, stars qanday olsam bo'ladi | `xorijiy-kartasiz-stars-sotib-olish` | ⬜ |
| 2.4 | Stars qancha vaqtda hisobga tushadi | `stars-yetkazish-vaqti` | ⬜ |
| 2.5 | Stars puli qaytariladimi, refund bormi | `stars-pulini-qaytarish-refund` | ⬜ |
| 2.6 | Fragment orqali olish bilan reseller orqali olish farqi nima | `fragment-vs-mahalliy-reseller-stars` | ⬜ |

## Tier 3 — Foydalanish stsenariysi (AEO uchun eng yuqori qiymatli)

| # | Query | Slug g'oyasi | Holat |
|---|---|---|---|
| 3.1 | AI botga so'rov yuborish uchun necha stars kerak | `ai-botlarga-stars-sorash` | ⬜ |
| 3.2 | Kanal/blogerga stars orqali donat qanday yuboriladi | `kanalga-stars-donat-yuborish` | ⬜ |
| 3.3 | Boshqa odamga stars sovg'a qilish qanday ishlaydi | `stars-sovga-qilish` | ⬜ |
| 3.4 | Stars orqali obuna (paid subscription) uchun to'lov qanday | `stars-orqali-obuna-tolovi` | ⬜ |

## Tier 4 — Ishonch/brend (E-E-A-T)

| # | Query | Slug g'oyasi | Holat |
|---|---|---|---|
| 4.1 | PremiumSend ishonchlimi, sharhlar | `premiumsend-ishonchlimi-sharhlar` | ⬜ |
| 4.2 | Stars sotuvchisi aldoq ekanini qanday bilsam bo'ladi | `stars-aldov-belgilari` | ⬜ |

---

## Yozish tartibi

1. Tier 1 to'liq tugagach (1.1–1.13) — bu bosqichda saytning barcha 7 denominatsiya sahifasi va asosiy to'lov usullari sahifadan-sahifaga ichki havola bilan bog'lanadi.
2. Tier 2 → Tier 3 → Tier 4, shu tartibda, boshqa ko'rsatma bo'lmaguncha.
3. Har bir yangi maqola yozilgach: shu jadvaldagi qatorni ✅ ga o'tkazing, commit prefiksi `Stars-GEO #<tier>.<raqam>: ...`.
4. Har bir maqola `ARTICLE-STANDARD.md`ning 10 mezoniga (WebSearch, fakt tozaligi, dublikat yo'qligi, SEO+AEO, fakt izchilligi, E-E-A-T, UZ+RU parity, schema, ichki havola, dizayn) to'liq javob berishi shart, va **@premiumsendbot**ga CTA bilan tugaydi.
5. Eski 6 ta Stars maqolasi (`@starsjoybot` muammosi) — bu reja doirasida qo'lga tegilmaydi; alohida vazifa sifatida qoladi.
