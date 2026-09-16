import type { Metadata } from "next";
import Link from "next/link";
import { ogBaseUz } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title: "1 dona Telegram Stars necha so'm turadi — App Store narxi bilan solishtirish",
  description:
    "Premium Send'da 1 Stars — 300 so'm. Rasman App Store'da 1000 Stars $19.99 (≈235 so'm/star), Fragment'da ≈165-177 so'm/star — lekin bu narxlarni O'zbekistondan to'g'ridan-to'g'ri to'lab bo'lmaydi. Halol taqqoslash va sabab.",
  keywords: [
    "1 stars necha som",
    "telegram stars narxi som",
    "telegram stars app store narxi",
    "stars narxini taqqoslash",
    "1 star qancha turadi",
  ],
  alternates: {
    canonical: "https://premiumsend.uz/maqolalar/1-stars-necha-som-appstore-taqqoslash",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/1-stars-necha-som-appstore-taqqoslash",
      ru: "https://premiumsend.uz/ru/maqolalar/1-stars-necha-som-appstore-taqqoslash",
      "x-default": "https://premiumsend.uz/maqolalar/1-stars-necha-som-appstore-taqqoslash",
    },
  },
  openGraph: {
    ...ogBaseUz,
    title: "1 dona Telegram Stars necha so'm turadi — App Store narxi bilan solishtirish",
    description:
      "Premium Send'da 1 Stars — 300 so'm. App Store va Fragment'ning rasmiy narxlari bilan halol taqqoslash — raqam va amaliyot farqi.",
    url: "https://premiumsend.uz/maqolalar/1-stars-necha-som-appstore-taqqoslash",
    type: "article",
    publishedTime: "2026-09-16",
  },
};

const PACKAGES = [
  { amount: 50, price: 15000 },
  { amount: 100, price: 30000 },
  { amount: 250, price: 75000 },
  { amount: 500, price: 150000 },
  { amount: 1000, price: 300000, popular: true },
  { amount: 2500, price: 750000 },
  { amount: 5000, price: 1500000 },
];

export default function Article1StarsNechaSomAppstoreTaqqoslash() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "1 dona Telegram Stars necha so'm turadi — App Store narxi bilan solishtirish",
    description:
      "Premium Send, App Store va Fragment'dagi 1 dona Telegram Stars narxining halol taqqoslashi — raqamlar va amaliy foydalanish farqi.",
    datePublished: "2026-09-16",
    dateModified: "2026-09-16",
    author: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    publisher: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    mainEntityOfPage: "https://premiumsend.uz/maqolalar/1-stars-necha-som-appstore-taqqoslash",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "1 dona Telegram Stars necha so'm turadi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Premium Send'da 1 dona Stars — 300 so'm (chiziqli tarif, qaysi paket tanlansa ham bir xil). 50 Stars — 15 000 so'm, 1000 Stars — 300 000 so'm.",
        },
      },
      {
        "@type": "Question",
        name: "App Store'da 1 Stars rasman qancha turadi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AQSh App Store'ida 1000 Stars $19.99 turadi, ya'ni bitta Stars taxminan $0.02 — joriy kursda (~11 770 so'm/$) bu ~235 so'm/star ga to'g'ri keladi. Lekin bu narxni O'zbekistondan Uzcard yoki Humo bilan to'g'ridan-to'g'ri to'lab bo'lmaydi.",
        },
      },
      {
        "@type": "Question",
        name: "Nega Premium Send narxi App Store'nikidan yuqoriroq ko'rinadi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Chunki App Store'ning $19.99/1000 narxi xalqaro Visa/Mastercard va App Store'ning rasmiy infratuzilmasi ustidan hisoblangan — O'zbekistonda Uzcard/Humo bilan bu narxni to'lab bo'lmaydi. Amalda foydalanish uchun xorijiy karta yoki boshqa davlat Apple ID kerak bo'ladi, bu esa qo'shimcha qiyinchilik va xarajat qo'shadi. Premium Send narxi (300 so'm) — mahalliy karta bilan to'g'ridan-to'g'ri, qo'shimcha to'siqsiz ishlaydigan narx.",
        },
      },
      {
        "@type": "Question",
        name: "Fragment.com orqali arzonroq sotib olsam bo'ladimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rasman ha — Fragment'da 1 Stars taxminan $0.014-0.015 (~165-177 so'm) turadi, bu eng arzon rasmiy yo'l. Lekin to'lov faqat TON kriptovalyutasida qabul qilinadi — avval TON sotib olish, kripto-hamyon ochish va TON tarmog'ida operatsiya qilish kerak bo'ladi, bu ko'pchilik uchun amalda qulay emas.",
        },
      },
      {
        "@type": "Question",
        name: "Telegram Stars narxi vaqt o'tishi bilan o'zgaradimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Premium Send'da 300 so'm/star barqaror. App Store va Fragment'dagi rasmiy narx esa valyuta kursi va do'kon siyosatiga qarab o'zgarishi mumkin, chunki ular dollar/TON asosida belgilanadi.",
        },
      },
      {
        "@type": "Question",
        name: "O'zbekistonlik uchun qaysi yo'l amaliy jihatdan eng qulay?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mahalliy karta bilan so'mda to'lash — chunki boshqa ikkala rasmiy yo'l ham qo'shimcha to'siqqa ega: App Store xorijiy karta/Apple ID talab qiladi, Fragment esa TON kriptovalyutasi bilan ishlashni biladi.",
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
      { "@type": "ListItem", position: 3, name: "1 Stars necha so'm — App Store bilan taqqoslash", item: "https://premiumsend.uz/maqolalar/1-stars-necha-som-appstore-taqqoslash" },
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
        <span className="text-foreground font-medium">1 Stars necha so&apos;m — App Store taqqoslash</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">Narxlar qo&apos;llanmasi</span>
            <time className="text-xs text-muted" dateTime="2026-09-16">2026-yil, 16-sentabr</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            1 dona Telegram Stars necha so&apos;m turadi — App Store narxi bilan solishtirish
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-sm font-bold text-primary mb-2">QISQACHA JAVOB</p>
            <p className="text-foreground leading-relaxed font-medium">
              Premium Send&apos;da 1 dona Stars — <strong>300 so&apos;m</strong> (chiziqli tarif). Rasman AQSh App Store&apos;ida 1000 Stars <strong>$19.99</strong> turadi (~1 star ≈ 235 so&apos;m joriy kursda) — lekin bu narxni O&apos;zbekistondan Uzcard yoki Humo bilan to&apos;g&apos;ridan-to&apos;g&apos;ri to&apos;lab bo&apos;lmaydi, xorijiy karta yoki boshqa davlat Apple ID kerak bo&apos;ladi. Shu sababli raqamlarni emas, amalda kim uchun qaysi yo&apos;l ishlashini solishtirish muhimroq.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            &quot;1 Stars qancha turadi&quot; degan savolga bitta to&apos;g&apos;ri javob yo&apos;q — narx qayerdan sotib olinishiga qarab farq qiladi. Quyida uchta rasmiy manba (Premium Send, App Store, Fragment.com) narxini halol solishtiramiz va nega bu raqamlarni to&apos;g&apos;ridan-to&apos;g&apos;ri qiyoslash chalg&apos;itishi mumkinligini tushuntiramiz.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Premium Send&apos;da 1 Stars narxi qancha?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Barcha paketlar bir xil <strong>300 so&apos;m/star</strong> chiziqli tarifda hisoblanadi — qaysi miqdorni tanlasangiz ham bir star bahosi o&apos;zgarmaydi:
            </p>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto mb-4">
              <table className="w-full text-sm min-w-[420px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">Paket</th>
                    <th className="p-4 text-left font-bold">Narx (so&apos;m)</th>
                  </tr>
                </thead>
                <tbody>
                  {PACKAGES.map((p) => (
                    <tr key={p.amount} className={`border-b border-card-border last:border-b-0 ${p.popular ? "bg-primary-light/20" : ""}`}>
                      <td className={`p-4 font-medium ${p.popular ? "text-primary font-bold" : ""}`}>{p.amount} Stars{p.popular ? " ⭐ (eng ommabop)" : ""}</td>
                      <td className="p-4">{p.price.toLocaleString("en-US")} so&apos;m</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              To&apos;liq narx jadvali:{" "}
              <Link href="/stars" className="text-primary hover:underline">Stars sahifasida</Link>. To&apos;lov Uzcard, Humo, Click yoki Payme bilan so&apos;mda, @premiumsendbot orqali.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">App Store&apos;da 1 Stars rasman qancha turadi?</h2>
            <p className="text-muted leading-relaxed mb-4">
              AQSh App Store&apos;ida do&apos;kon ichida ko&apos;rsatiladigan rasmiy narx: 1000 Stars — <strong>$19.99</strong>, ya&apos;ni bitta Stars taxminan <strong>$0.02</strong>. Joriy USD/UZS kursida (~11 770 so&apos;m/$, 2026-yil sentyabr holatiga ko&apos;ra) bu taxminan <strong>235 so&apos;m/star</strong>ga to&apos;g&apos;ri keladi.
            </p>
            <p className="text-muted leading-relaxed">
              Bu narxga Apple/Google&apos;ning 30% do&apos;kon komissiyasi allaqachon kiritilgan — narx global tarzda Telegram tomonidan belgilanadi, mamlakat bo&apos;yicha bir oz farq qilishi mumkin.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Nega bu ikkalasini &quot;adolatli&quot; solishtirish qiyin?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Raqam jihatidan App Store&apos;ning $0.02/star (~235 so&apos;m) narxi Premium Send&apos;ning 300 so&apos;m/star narxidan pastroq ko&apos;rinadi. Lekin bu solishtirish to&apos;liq emas — chunki O&apos;zbekistonlik foydalanuvchi bu narxni amalda to&apos;lay olmaydi:
            </p>
            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li>Uzcard va Humo Apple ID yoki Google Play hisob-kitob usuli sifatida umuman <strong>qo&apos;shilmaydi</strong> — batafsil:{" "}
                <Link href="/maqolalar/uzcard-humo-app-store-play-market-ishlamaydi" className="text-primary hover:underline">nega Uzcard/Humo App Store/Play Market&apos;da ishlamaydi</Link>
              </li>
              <li>To&apos;lash uchun xorijiy (masalan xalqaro Visa/Mastercard) karta yoki boshqa davlatga tegishli Apple ID kerak bo&apos;ladi</li>
              <li>Xorijiy karta yo&apos;q bo&apos;lsa, uni ochish yoki topish ko&apos;pchilik uchun amalda qiyin yoki imkonsiz</li>
              <li>Xorijiy karta bilan to&apos;lasa ham, bank tomonidan qo&apos;shimcha konvertatsiya/xalqaro tranzaksiya komissiyasi olinishi mumkin</li>
            </ul>
            <p className="text-muted leading-relaxed">
              Ya&apos;ni App Store&apos;dagi &quot;qog&apos;ozdagi&quot; narx arzon ko&apos;rinsa-da, uni O&apos;zbekistondan mahalliy vositalar bilan to&apos;g&apos;ridan-to&apos;g&apos;ri to&apos;lab bo&apos;lmaydi — bu narx solishtirishni emas, &quot;to&apos;lay olaman yoki yo&apos;qmi&quot; degan savolni birinchi o&apos;ringa qo&apos;yadi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Fragment.com orqali narxi qancha?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Fragment.com — Telegram&apos;ning rasmiy TON-kripto bozori, u yerda Stars eng arzon rasmiy narxda sotiladi: taxminan <strong>$0.014-0.015/star</strong> (joriy kursda ~165-177 so&apos;m/star). Lekin to&apos;lov faqat TON kriptovalyutasida qabul qilinadi.
            </p>
            <p className="text-muted leading-relaxed">
              Bu yo&apos;ldan foydalanish uchun avval TON sotib olish, kripto-hamyon (masalan TON Wallet) ochish va tarmoqda operatsiyani tushunish kerak — texnik jihatdan tayyor bo&apos;lmagan foydalanuvchi uchun bu qo&apos;shimcha to&apos;siq.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Uch manbani taqqoslash</h2>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto mb-4">
              <table className="w-full text-sm min-w-[560px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">Manba</th>
                    <th className="p-4 text-left font-bold">1 Stars narxi</th>
                    <th className="p-4 text-left font-bold">To&apos;lov usuli</th>
                    <th className="p-4 text-left font-bold">O&apos;zbekistondan amalda ishlaydimi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-card-border bg-primary-light/20">
                    <td className="p-4 font-bold text-primary">Premium Send</td>
                    <td className="p-4 font-bold text-primary">300 so&apos;m</td>
                    <td className="p-4">Uzcard/Humo/Click/Payme, so&apos;mda</td>
                    <td className="p-4">✅ Ha, to&apos;g&apos;ridan-to&apos;g&apos;ri</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">App Store (rasmiy, AQSh do&apos;koni)</td>
                    <td className="p-4">~235 so&apos;m ($0.02)</td>
                    <td className="p-4">Faqat xalqaro Visa/Mastercard</td>
                    <td className="p-4">❌ Yo&apos;q — mahalliy karta rad etiladi</td>
                  </tr>
                  <tr className="last:border-b-0">
                    <td className="p-4 font-medium">Fragment.com (rasmiy)</td>
                    <td className="p-4">~165-177 so&apos;m ($0.014-0.015)</td>
                    <td className="p-4">TON kriptovalyuta</td>
                    <td className="p-4">❌ To&apos;g&apos;ridan-to&apos;g&apos;ri yo&apos;q — kripto-hamyon kerak</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Qo&apos;shimcha to&apos;siqsiz, so&apos;mda Stars sotib oling — <strong className="text-white">@premiumsendbot</strong> orqali bir necha daqiqada.
              </p>
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                Stars sotib olish
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Xulosa — raqam va amaliyot farqi</h2>
            <p className="text-muted leading-relaxed mb-4">
              Sof raqam jihatidan App Store va Fragment&apos;ning rasmiy narxlari &quot;qog&apos;ozda&quot; arzonroq ko&apos;rinadi. Lekin ikkalasi ham O&apos;zbekistonlik foydalanuvchi uchun qo&apos;shimcha to&apos;siq bilan keladi: App Store xorijiy karta/Apple ID, Fragment esa TON kriptovalyuta talab qiladi. Premium Send&apos;ning 300 so&apos;m/star narxi — mahalliy karta bilan, so&apos;mda, hech qanday qo&apos;shimcha vositasiz to&apos;g&apos;ridan-to&apos;g&apos;ri ishlaydigan yagona variant.
            </p>
            <p className="text-muted leading-relaxed">
              Uchta yo&apos;lning to&apos;liq taqqoslashi (qaysi holatda qaysi biri mos):{" "}
              <Link href="/maqolalar/stars-sotib-olishning-necha-yoli-bor" className="text-primary font-semibold hover:underline">&quot;Stars sotib olishning nechta yo&apos;li bor&quot;</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Tez-tez so&apos;raladigan savollar (FAQ)</h2>
            <div className="space-y-4">
              {[
                { q: "1 dona Telegram Stars necha so'm turadi?", a: "Premium Send'da 1 dona Stars — 300 so'm, chiziqli tarif." },
                { q: "App Store'da 1 Stars rasman qancha turadi?", a: "AQSh do'konida 1000 Stars $19.99, ya'ni ~$0.02/star (~235 so'm), lekin O'zbekistondan to'g'ridan-to'g'ri to'lab bo'lmaydi." },
                { q: "Nega Premium Send narxi App Store'nikidan yuqoriroq ko'rinadi?", a: "App Store narxi xalqaro karta talab qiladi va O'zbekistondan bevosita to'lanmaydi — amalda foydalanish narxdan muhimroq." },
                { q: "Fragment orqali arzonroq sotib olsam bo'ladimi?", a: "Rasman ha, lekin TON kriptovalyuta va kripto-hamyon kerak bo'ladi." },
                { q: "Telegram Stars narxi vaqt o'tishi bilan o'zgaradimi?", a: "Premium Send'da barqaror, App Store/Fragment narxi valyuta kursiga qarab o'zgarishi mumkin." },
                { q: "O'zbekistonlik uchun qaysi yo'l eng amaliy?", a: "Mahalliy karta bilan so'mda to'lash — boshqa ikkala yo'l qo'shimcha to'siqqa ega." },
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
                  Xorijiy karta yoki kriptosiz — <strong className="text-white">@premiumsendbot</strong> orqali 50 Stars <strong className="text-white">15 000 so&apos;mdan</strong>, so&apos;mda, bir necha daqiqada.
                </p>
                <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                  PremiumSend orqali olish
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
