import type { Metadata } from "next";
import Link from "next/link";
import { ogBaseUz } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title: "Fragment.com'da Telegram Stars qanday olinadi — Uzcard yoki Humo bilan bo'ladimi?",
  description:
    "Fragment.com'da Telegram Stars faqat kriptovalyutaga sotiladi (Gram — sobiq Toncoin, USDT, USDC) — Uzcard va Humo qabul qilinmaydi. Narxi 1000 Stars uchun 15 dollar, minimal 50 Stars. Nima kerak, qadamlar va mahalliy resellerdan farqi.",
  keywords: [
    "fragment telegram stars",
    "fragment.com stars qanday olinadi",
    "fragment stars uzcard",
    "fragment stars narxi",
    "fragment kyc stars",
    "gram ton stars",
  ],
  alternates: {
    canonical: "https://premiumsend.uz/maqolalar/fragment-com-telegram-stars-qanday-ishlaydi",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/fragment-com-telegram-stars-qanday-ishlaydi",
      ru: "https://premiumsend.uz/ru/maqolalar/fragment-com-telegram-stars-qanday-ishlaydi",
      "x-default": "https://premiumsend.uz/maqolalar/fragment-com-telegram-stars-qanday-ishlaydi",
    },
  },
  openGraph: {
    ...ogBaseUz,
    title: "Fragment.com'da Telegram Stars qanday olinadi — Uzcard yoki Humo bilan bo'ladimi?",
    description:
      "Faqat kripto bilan: Gram, USDT yoki USDC. Narx, minimal miqdor, kerakli narsalar va mahalliy resellerdan farqi — jadvalda.",
    url: "https://premiumsend.uz/maqolalar/fragment-com-telegram-stars-qanday-ishlaydi",
    type: "article",
    publishedTime: "2026-10-07",
  },
};

const FRAGMENT_PACKAGES = [
  { amount: "50", usd: "0.75" },
  { amount: "100", usd: "1.50" },
  { amount: "500", usd: "7.50" },
  { amount: "1 000", usd: "15" },
  { amount: "10 000", usd: "150" },
];

export default function ArticleFragmentStars() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Fragment.com'da Telegram Stars qanday olinadi — Uzcard yoki Humo bilan bo'ladimi?",
    description:
      "Fragment.com orqali Telegram Stars olish: qabul qilinadigan kriptovalyutalar, narx, minimal miqdor, kerakli qadamlar, KYC va mahalliy reseller bilan farqi.",
    datePublished: "2026-10-07",
    dateModified: "2026-10-07",
    author: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    publisher: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    mainEntityOfPage: "https://premiumsend.uz/maqolalar/fragment-com-telegram-stars-qanday-ishlaydi",
    inLanguage: "uz",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Fragment.com'da Uzcard yoki Humo bilan Telegram Stars olsa bo'ladimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yo'q. Fragment bank kartalarini qabul qilmaydi — Stars faqat kriptovalyutaga sotiladi: Gram (GRAM, sobiq Toncoin), USDT yoki USDC. Uzcard/Humo bilan so'mda to'lash uchun mahalliy reseller kerak, masalan @premiumsendbot.",
        },
      },
      {
        "@type": "Question",
        name: "Fragment'da Telegram Stars narxi qancha?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "2026-yil oktabr holatiga Fragment sahifasida 50 Stars — 0,75 dollar, 1000 Stars — 15 dollar, ya'ni 1 Stars 0,015 dollar. Bunga kriptovalyutani sotib olish va o'tkazish xarajatlari qo'shiladi.",
        },
      },
      {
        "@type": "Question",
        name: "Fragment'da eng kam nechta Stars olish mumkin?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Minimal xarid — 50 Stars, maksimal — 10 000 000 Stars. Premium Send'da ham eng kichik paket 50 Stars (15 000 so'm).",
        },
      },
      {
        "@type": "Question",
        name: "TON va Gram — bir xil narsami?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha. 2026-yil 15-iyundan TON blokcheynining asosiy tokeni Toncoin (TON) nomidan Gram (GRAM) nomiga o'tdi. Blokcheynning o'zi avvalgidek The Open Network (TON) deb ataladi. Eski qo'llanmalardagi 'TON kriptovalyutasi' — hozirgi Gram.",
        },
      },
      {
        "@type": "Question",
        name: "Fragment'da Stars olish uchun KYC (shaxsni tasdiqlash) kerakmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kripto-nashrlar xabariga ko'ra, Fragment 2024-yil noyabridan xaridlar uchun shaxsni tasdiqlashni joriy qilgan. Bundan tashqari, kriptovalyutani sotib oladigan birja ham hujjat so'rashi mumkin. Aniq talab xarid paytida Fragment'ning o'zida ko'rinadi.",
        },
      },
      {
        "@type": "Question",
        name: "Fragment arzonroqmi yoki mahalliy reseller?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nominal narxda Fragment arzonroq: 1 Stars 0,015 dollar. Mahalliy resellerda (Premium Send) 1 Stars 300 so'm, lekin to'lov so'mda, mahalliy kartadan, kripto-hamyon va birjasiz. Kriptongiz tayyor bo'lsa Fragment, bo'lmasa reseller qulayroq.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Bosh sahifa", item: "https://premiumsend.uz" },
      { "@type": "ListItem", position: 2, name: "Maqolalar", item: "https://premiumsend.uz/maqolalar" },
      { "@type": "ListItem", position: 3, name: "Fragment'da Stars", item: "https://premiumsend.uz/maqolalar/fragment-com-telegram-stars-qanday-ishlaydi" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-muted">
        <Link href="/" className="hover:text-primary">Bosh sahifa</Link>
        <span className="mx-2">/</span>
        <Link href="/maqolalar" className="hover:text-primary">Maqolalar</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">Fragment&apos;da Stars</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">Qo&apos;llanma</span>
            <time className="text-xs text-muted" dateTime="2026-10-07">2026-yil, 7-oktabr</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Fragment.com&apos;da Telegram Stars qanday olinadi — Uzcard yoki Humo bilan bo&apos;ladimi?
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-sm font-bold text-primary mb-2">QISQACHA JAVOB</p>
            <p className="text-foreground leading-relaxed font-medium">
              <strong>Uzcard yoki Humo bilan bo&apos;lmaydi</strong>: Fragment.com&apos;da Telegram Stars faqat kriptovalyutaga sotiladi — Gram (GRAM, sobiq Toncoin), USDT yoki USDC. Kerak bo&apos;ladi: kripto-hamyon, unda yetarli mablag&apos; va Telegram akkauntni ulash. Narx — 1000 Stars uchun 15 dollar, minimal 50 Stars. Kriptongiz bo&apos;lmasa, so&apos;mda{" "}
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="text-primary hover:underline">@premiumsendbot</Link>{" "}
              orqali olish osonroq.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Fragment.com&apos;da Telegram Stars olish haqida ko&apos;p eshitiladi: &quot;eng arzon yo&apos;l shu&quot;. Bu qisman to&apos;g&apos;ri, lekin narx yorlig&apos;i butun manzarani ko&apos;rsatmaydi. Quyida Fragment qanday ishlashi, aynan nima kerakligi, 2026-yildagi o&apos;zgarishlar (Toncoin endi Gram deb ataladi) va bu yo&apos;l kimga mos kelishi yozilgan.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Fragment.com nima va Telegram Stars bilan qanday bog&apos;liq?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Fragment — Telegram bilan bog&apos;liq, TON blokcheynida ishlaydigan platforma. Unda kolleksion username&apos;lar va raqamlar savdosi bilan birga Telegram Premium va Telegram Stars ham sotiladi. Stars bo&apos;limida balansni o&apos;zingizga yoki boshqa foydalanuvchiga to&apos;ldirish mumkin.
            </p>
            <p className="text-muted leading-relaxed">
              Bu Stars olishning{" "}
              <Link href="/maqolalar/stars-sotib-olishning-necha-yoli-bor" className="text-primary font-semibold hover:underline">3 ta yo&apos;lidan</Link>{" "}
              biri: rasmiy ilova, Fragment va mahalliy reseller. Qaysi yo&apos;l bilan olinmasin, akkauntga tushgan Stars bir xil — Telegram&apos;ning rasmiy balansi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Fragment&apos;da Telegram Stars narxi qancha?</h2>
            <p className="text-muted leading-relaxed mb-4">
              1 Stars — 0,015 dollar: 1000 Stars 15 dollar turadi. Narx chiziqli, minimal xarid 50 Stars, maksimal 10 000 000 Stars. Quyidagi raqamlar 2026-yil 7-oktabr holatiga Fragment&apos;ning Stars sahifasidan olingan.
            </p>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto mb-4">
              <table className="w-full text-sm min-w-[380px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">Miqdor</th>
                    <th className="p-4 text-left font-bold">Fragment&apos;dagi narx (USD)</th>
                  </tr>
                </thead>
                <tbody>
                  {FRAGMENT_PACKAGES.map((p) => (
                    <tr key={p.amount} className="border-b border-card-border last:border-b-0">
                      <td className="p-4 font-medium">{p.amount} Stars</td>
                      <td className="p-4">${p.usd}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              Muhim: bu — faqat Stars&apos;ning o&apos;zi. Kriptovalyutani sotib olish va hamyonga o&apos;tkazish xarajatlari alohida, blokcheyn tranzaksiyasi uchun ham kichik to&apos;lov olinadi. So&apos;mdagi taqqoslash:{" "}
              <Link href="/maqolalar/1-stars-necha-som-appstore-taqqoslash" className="text-primary font-semibold hover:underline">1 Stars necha so&apos;m turadi</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Fragment&apos;da Uzcard yoki Humo bilan to&apos;lasa bo&apos;ladimi?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Yo&apos;q — Fragment bank kartalarini umuman qabul qilmaydi, na mahalliy, na xalqaro. To&apos;lov faqat kripto-hamyondan o&apos;tadi. 2026-yil oktabr holatiga Stars sahifasida quyidagi valyutalar ko&apos;rsatilgan:
            </p>
            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li><strong>Gram (GRAM)</strong> — TON blokcheynining asosiy tokeni</li>
              <li><strong>USDT</strong> — TON, Ethereum va Polygon tarmoqlarida</li>
              <li><strong>USDC</strong> — Ethereum, Base va Polygon tarmoqlarida</li>
            </ul>
            <p className="text-muted leading-relaxed">
              Chalkashmaslik uchun: <strong>Gram — bu avvalgi Toncoin (TON)</strong>. 2026-yil 15-iyundan token nomi Toncoin&apos;dan Gram&apos;ga o&apos;zgardi, blokcheynning o&apos;zi esa avvalgidek The Open Network (TON) deb ataladi. Shuning uchun eski qo&apos;llanmalardagi (jumladan bizning avvalgi maqolalarimizdagi) &quot;TON kriptovalyutasi&quot; iborasi hozirgi Gram&apos;ni anglatadi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Fragment orqali Stars olish uchun nima kerak?</h2>
            <p className="text-muted leading-relaxed mb-4">
              To&apos;rt narsa: kripto-hamyon, undagi mablag&apos;, Telegram akkaunt va qabul qiluvchining username&apos;i. Jarayon quyidagi tartibda boradi:
            </p>
            <div className="space-y-4 mb-6">
              {[
                { step: "1", title: "Kripto-hamyon oching", desc: "Fragment o'z qo'llanmasida Tonkeeper va MyTonWallet hamyonlarini misol keltiradi. Hamyonning maxfiy so'zlarini (seed phrase) hech kimga bermang." },
                { step: "2", title: "Kriptovalyuta sotib olib, hamyonga o'tkazing", desc: "Gram, USDT yoki USDC odatda birjada sotib olinadi. Fragment ma'lumotiga ko'ra, ayrim birjalar shaxsni tasdiqlovchi hujjat so'rashi mumkin." },
                { step: "3", title: "Fragment'ga hamyon va Telegram'ni ulang", desc: "fragment.com saytida hamyonni (TON Connect) va Telegram akkauntingizni ulaysiz." },
                { step: "4", title: "Miqdor va qabul qiluvchini tanlang", desc: "Stars miqdorini (kamida 50) va Stars tushadigan akkauntni tanlab, to'lovni hamyonda tasdiqlaysiz." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{item.step}</div>
                  <div>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-muted leading-relaxed">
              Eng ko&apos;p vaqt oladigan qadam — ikkinchisi. Kripto bilan ilgari ishlamagan bo&apos;lsangiz, bitta Stars paketi uchun birja va hamyon ochish asosiy to&apos;siq bo&apos;ladi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Fragment&apos;da Stars olish uchun KYC kerakmi?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Hujjat so&apos;ralishiga tayyor turing. Kripto-nashrlar xabariga ko&apos;ra, Fragment 2024-yil noyabridan xaridlar uchun shaxsni tasdiqlash (KYC) tartibini joriy qilgan — unga hujjat va yuzni tasdiqlash kiradi.
            </p>
            <p className="text-muted leading-relaxed">
              Bundan mustaqil ravishda, kriptovalyutani sotib oladigan birja ham odatda hujjat so&apos;raydi. Aniq talab xarid paytida Fragment&apos;ning o&apos;zida ko&apos;rinadi — biz Fragment nomidan kafolat bera olmaymiz, shuning uchun shartlarni saytning o&apos;zida tekshiring.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Fragment va mahalliy reseller: farqi nimada?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Natija bir xil, farq to&apos;lov yo&apos;lida: Fragment arzonroq, lekin kripto talab qiladi; reseller qimmatroq, lekin oddiy kartadan so&apos;mda ishlaydi.
            </p>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto mb-4">
              <table className="w-full text-sm min-w-[600px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">Mezon</th>
                    <th className="p-4 text-left font-bold">Fragment.com</th>
                    <th className="p-4 text-left font-bold text-primary">Mahalliy reseller (@premiumsendbot)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">To&apos;lov vositasi</td>
                    <td className="p-4">Gram, USDT, USDC</td>
                    <td className="p-4 font-semibold text-primary">So&apos;m, kartadan kartaga o&apos;tkazma</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Uzcard/Humo</td>
                    <td className="p-4">Qabul qilinmaydi</td>
                    <td className="p-4 font-semibold text-primary">Ha (Click, Payme ilovalari orqali ham)</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">1 Stars narxi</td>
                    <td className="p-4">$0.015 + kripto xarajatlari</td>
                    <td className="p-4 font-semibold text-primary">300 so&apos;m, qat&apos;iy</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Minimal xarid</td>
                    <td className="p-4">50 Stars</td>
                    <td className="p-4 font-semibold text-primary">50 Stars (15 000 so&apos;m)</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Nima kerak</td>
                    <td className="p-4">Kripto-hamyon, birja, hujjat so&apos;ralishi mumkin</td>
                    <td className="p-4 font-semibold text-primary">Bank ilovasi</td>
                  </tr>
                  <tr className="last:border-b-0">
                    <td className="p-4 font-medium">Telegram bilan aloqasi</td>
                    <td className="p-4">Telegram bilan bog&apos;liq platforma</td>
                    <td className="p-4 font-semibold text-primary">Rasmiy hamkor emas, mustaqil reseller</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              Rasmiy ilovani ham qo&apos;shib, uchala yo&apos;lning to&apos;liq taqqoslashi{" "}
              <Link href="/maqolalar/stars-sotib-olishning-necha-yoli-bor" className="text-primary font-semibold hover:underline">Stars olish yo&apos;llari</Link>{" "}
              maqolasida.
            </p>
          </section>

          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Hamyon ham, birja ham shart emas — <strong className="text-white">@premiumsendbot</strong>&apos;da Uzcard, Humo, Click yoki Payme&apos;dagi kartangizdan so&apos;mda oling.
              </p>
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                @premiumsendbot — boshlash
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Qaysi holatda Fragment, qaysi holatda reseller mos?</h2>
            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li><strong>Hamyoningizda kripto allaqachon bor</strong> → Fragment: nominal narxi pastroq</li>
              <li><strong>Katta miqdor kerak va kripto bilan ishlay olasiz</strong> → Fragment: 10 000 000 Stars&apos;gacha olish mumkin</li>
              <li><strong>Kripto bilan hech ishlamagansiz</strong> → reseller: hamyon va birjasiz, bir necha daqiqada</li>
              <li><strong>Faqat Uzcard yoki Humo kartangiz bor</strong> → reseller: Fragment kartani qabul qilmaydi</li>
            </ul>
            <p className="text-muted leading-relaxed">
              Premium Send&apos;da{" "}
              <Link href="/stars" className="text-primary font-semibold hover:underline">barcha Stars paketlari</Link>{" "}
              300 so&apos;m/star: masalan{" "}
              <Link href="/50-stars" className="text-primary font-semibold hover:underline">50 Stars — 15 000 so&apos;m</Link> yoki{" "}
              <Link href="/1000-stars" className="text-primary font-semibold hover:underline">1000 Stars — 300 000 so&apos;m</Link>. Xalqaro kartangiz ham bo&apos;lmasa:{" "}
              <Link href="/maqolalar/xorijiy-kartasiz-stars-sotib-olish" className="text-primary font-semibold hover:underline">xorijiy kartasiz Stars olish</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Fragment&apos;dan foydalanishda nimaga ehtiyot bo&apos;lish kerak?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Uch narsaga: sayt manzili, hamyonning maxfiy so&apos;zlari va qabul qiluvchi. Kripto o&apos;tkazmasi bank o&apos;tkazmasidan farqli ravishda ortga qaytarilmaydi, shuning uchun xato qimmatga tushadi.
            </p>
            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li>Brauzerda manzil aynan <strong>fragment.com</strong> ekanini tekshiring — o&apos;xshash nomli saytlarga hamyon ulamang</li>
              <li>Hamyonning maxfiy so&apos;zlarini hech bir sayt, bot yoki &quot;qo&apos;llab-quvvatlash xodimi&quot;ga bermang</li>
              <li>To&apos;lovni tasdiqlashdan oldin qabul qiluvchi akkauntni qayta tekshiring</li>
            </ul>
            <p className="text-muted leading-relaxed">
              Har qanday sotuvchi uchun umumiy tekshirish ro&apos;yxati:{" "}
              <Link href="/maqolalar/telegram-stars-xavfsizmi-aldov-belgilari" className="text-primary font-semibold hover:underline">Stars sotib olish xavfsizmi va aldov belgilari</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Tez-tez so&apos;raladigan savollar (FAQ)</h2>
            <div className="space-y-4">
              {[
                { q: "Fragment.com'da Uzcard yoki Humo bilan Telegram Stars olsa bo'ladimi?", a: "Yo'q. Fragment kartalarni qabul qilmaydi — faqat kripto: Gram, USDT yoki USDC. So'mda to'lash uchun mahalliy reseller kerak." },
                { q: "Fragment'da Telegram Stars narxi qancha?", a: "2026-yil oktabr holatiga 1000 Stars — 15 dollar (1 Stars 0,015 dollar), bunga kripto sotib olish va o'tkazish xarajatlari qo'shiladi." },
                { q: "Fragment'da eng kam nechta Stars olish mumkin?", a: "Minimal 50 Stars, maksimal 10 000 000 Stars." },
                { q: "TON va Gram — bir xil narsami?", a: "Ha. 2026-yil 15-iyundan Toncoin (TON) tokeni Gram (GRAM) deb ataladi; blokcheyn nomi TON bo'lib qolgan." },
                { q: "Fragment'da Stars olish uchun KYC kerakmi?", a: "Kripto-nashrlar xabariga ko'ra, 2024-yil noyabridan Fragment shaxsni tasdiqlashni joriy qilgan. Aniq talabni xarid paytida saytning o'zida tekshiring." },
                { q: "Fragment arzonroqmi yoki mahalliy reseller?", a: "Nominal narxda Fragment arzonroq, lekin kripto talab qiladi. Reseller 300 so'm/star, so'mda va mahalliy kartadan." },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                  <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="hero-gradient rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10"><div className="absolute top-5 left-5 w-32 h-32 bg-white rounded-full blur-2xl" /></div>
              <div className="relative">
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  Kriptosiz Stars — <strong className="text-white">@premiumsendbot</strong> orqali so&apos;mda, 50 Stars <strong className="text-white">15 000 so&apos;mdan</strong>.
                </p>
                <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                  @premiumsendbot — boshlash
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
