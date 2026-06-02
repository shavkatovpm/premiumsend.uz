# Maqola sifat standarti (Article Standard)

Har bir yangi blog maqolasi **chop etilishidan oldin** quyidagi 10 ta mezonning **barchasiga** javob berishi shart. Bu — "definition of done".

## 10 ta mezon

1. **Yangilik / WebSearch** — Maqola yozishdan oldin majburiy WebSearch. Telegram Premium'ning so'nggi funksiyalari, narxlari, 2026 holati. Eskirgan ma'lumot ishlatilmaydi.

2. **Nol yolg'on / faktlik** — Hech qanday to'qima fakt, son yoki imkoniyat yo'q. Tasdiqlab bo'lmaydigan da'vo yozilmaydi. Har bir texnik da'vo rasmiy manbaga (telegram.org, rasmiy blog) tayanadi.

3. **Dublikat yo'q (anti-kannibalizatsiya)** — Yozishdan oldin mavjud maqolalar bilan kalit so'z/intent solishtiriladi. Asosiy kalit so'z hech bir mavjud sahifa bilan ustma-ust tushmaydi. "Sotib olish / narx / [usul] orqali" iboralari asosiy kalit sifatida olinmaydi.

4. **SEO + AEO ideal** — SEO: kalit so'z title + H1 + URL + meta description + birinchi 100 so'zda. AEO: har bir H2 savol shaklida; javob birinchi 1-2 jumlada; TL;DR (QISQACHA JAVOB) blok; taqqoslash jadvallari.

5. **Fakt izchilligi** — Narxlar (59k / 175k / 235k / 425k so'm), bot havolalari (@premiumsendbot, @premiumsend_admin) va `public/llms.txt` bilan bir xil. Bir maqola boshqa sahifadagi faktga zid kelmaydi.

6. **Halollik / E-E-A-T** — PremiumSend Telegram'ning rasmiy hamkori EMASligi, mahalliy reseller ekanligi to'g'ri ko'rsatiladi (`llms.txt` pozitsiyasiga mos).

7. **Ikki til pariteti** — Har maqola UZ + RU. Bir xil mazmun, to'g'ri `canonical` va `hreflang` (uz/ru/x-default).

8. **Strukturali ma'lumot (Schema)** — Har maqolada `Article` + `FAQPage` JSON-LD. `datePublished`/`dateModified`, muallif/tashkilot ko'rsatiladi. Breadcrumb schema.

9. **Ichki bog'lanish (cluster)** — Kamida 3-5 ta tegishli ichki havola (narx sahifalari + tematik klaster). Anchor-text kannibalizatsiya qilmaydi. `sitemap.ts` va `maqolalar` ro'yxatlariga (uz+ru) qo'shiladi.

10. **Dizayn / texnik andoza** — Mavjud komponentlar va Next.js konventsiyalariga (`AGENTS.md` -> `node_modules/next/dist/docs/`) rioya qilinadi. CTA bot havolasi bilan tugaydi.

## Manbalar ustuvorligi (2-mezon uchun)
rasmiy Telegram (telegram.org, t.me/durov, rasmiy blog) -> ishonchli tex-nashrlar -> boshqalar. Tasdiqlanmagan fakt yozilmaydi.

## Blog reja (top 10 yangi mavzu)
1. Telegram Premium muammolari va xatoliklari: savol-javob hub *(birinchi)*
2. Telegram Premium qanday yoqiladi va sozlanadi — to'liq qo'llanma
3. Telegram Business: Premium ichidagi biznes imkoniyatlari
4. Premium obunasini uzaytirish, bekor qilish va qaytarish
5. Kanal egalari va bloggerlar uchun Premium: Boost, statistika, reaksiyalar
6. Telegram Premium sovg'asini qanday qabul qilish va faollashtirish
7. Telegram Premium arziydimi? YouTube Premium, Spotify bilan taqqoslash
8. Telegram Stories (Hikoyalar) va Premium imkoniyatlari
9. Telegram Premium iPhone, Android va kompyuterda — farqlar
10. Telegram Premium 2026: yangi funksiyalar va yil yangilanishlari
