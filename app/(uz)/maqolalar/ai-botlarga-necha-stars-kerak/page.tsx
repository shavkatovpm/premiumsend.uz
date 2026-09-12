import type { Metadata } from "next";
import Link from "next/link";
import { ogBaseUz } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title:
    "AI botlarga so'rov yuborish uchun necha Telegram Stars kerak bo'ladi?",
  description:
    "Telegram'dagi AI botlar (ChatGPT, Claude va boshqalar) uchun Stars narxi botdan-botga farq qiladi — yagona rasmiy tarif yo'q. Necha Stars zaxira qilish kerakligini hisoblash va @premiumsendbot orqali so'mda sotib olish.",
  keywords: [
    "ai botlarga stars",
    "telegram ai bot stars narxi",
    "necha stars kerak",
    "telegram stars ai chatbot",
    "chatgpt telegram stars",
    "premiumsendbot stars",
  ],
  alternates: {
    canonical: "https://premiumsend.uz/maqolalar/ai-botlarga-necha-stars-kerak",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/ai-botlarga-necha-stars-kerak",
      ru: "https://premiumsend.uz/ru/maqolalar/ai-botlarga-necha-stars-kerak",
      "x-default": "https://premiumsend.uz/maqolalar/ai-botlarga-necha-stars-kerak",
    },
  },
  openGraph: {
    ...ogBaseUz,
    title: "AI botlarga so'rov yuborish uchun necha Stars kerak bo'ladi?",
    description:
      "Yagona rasmiy tarif yo'q — har bir bot o'z narxini belgilaydi. Necha Stars zaxira qilish kerakligini hisoblash va @premiumsendbot orqali sotib olish.",
    url: "https://premiumsend.uz/maqolalar/ai-botlarga-necha-stars-kerak",
    type: "article",
    publishedTime: "2026-09-12",
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

export default function ArticleAiBotlargaNechaStarsKerak() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "AI botlarga so'rov yuborish uchun necha Telegram Stars kerak bo'ladi?",
    description:
      "Telegram'dagi AI botlar uchun Stars narxi qanday belgilanadi, yagona tarif nega yo'q va necha Stars zaxira qilish kerakligini qanday hisoblash mumkin.",
    datePublished: "2026-09-12",
    dateModified: "2026-09-12",
    author: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    publisher: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    mainEntityOfPage:
      "https://premiumsend.uz/maqolalar/ai-botlarga-necha-stars-kerak",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "AI botga bitta so'rov uchun necha Stars kerak?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yagona javob yo'q — Telegram bot egalariga Stars narxini o'zlari belgilash imkonini beradi (Bot API'dagi sendInvoice, XTR valyutasi orqali). Amaliyotda oddiy matnli so'rovlar uchun ko'pincha 5-20 Stars, rasm/video generatsiya yoki murakkab funksiyalar uchun 50-200 Stars atrofida narx qo'yiladi, lekin bu aniq botning o'ziga bog'liq.",
        },
      },
      {
        "@type": "Question",
        name: "Nega Telegram AI botlar uchun rasmiy standart narx belgilamagan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Telegram Stars — bot va mini-ilovalar uchun umumiy to'lov infratuzilmasi, xuddi App Store'dagi in-app xarid kabi. Telegram faqat to'lov mexanizmini (Stars sotib olish, botga o'tkazish) ta'minlaydi, narxni esa har bir bot dasturchisi o'z xarajati va funksiyasi qiymatidan kelib chiqib o'zi belgilaydi.",
        },
      },
      {
        "@type": "Question",
        name: "10-20 ta AI so'rov uchun qancha Stars zaxira qilish tavsiya etiladi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Agar bot bir so'rov uchun o'rtacha 10-20 Stars olsa, 10-20 ta so'rov uchun taxminan 100-400 Stars yetarli bo'ladi. Premium Send'da 100 Stars — 30 000 so'm, 500 Stars — 150 000 so'm. Aniq son foydalanayotgan botingizning narxiga bog'liq — botning o'z narx ro'yxatini (odatda /price yoki sozlamalar bo'limida) tekshiring.",
        },
      },
      {
        "@type": "Question",
        name: "Stars tugab qolsa AI bot ishlashni to'xtatadimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha, ko'pchilik pullik AI bot va mini-ilovalar balans yetarli bo'lmasa yangi so'rovni qabul qilmaydi yoki qayta to'lov so'raydi. Oldindan yetarlicha Stars sotib olib qo'yish so'rov jarayonida to'xtab qolishning oldini oladi.",
        },
      },
      {
        "@type": "Question",
        name: "Telegram Stars'ni AI botlar uchun O'zbekistonda qanday sotib olish mumkin?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "@premiumsendbot orqali — Uzcard, Humo, Click yoki Payme kartangiz bilan so'mda, valyuta konvertatsiyasiz. 50 dan 5000 gacha tayyor paketlar mavjud, to'lovdan keyin Stars bir necha daqiqada Telegram akkauntingizga tushadi va istalgan botda ishlatiladi.",
        },
      },
      {
        "@type": "Question",
        name: "Bitta botda sotib olingan Stars boshqa AI botda ham ishlaydimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha. Stars — Telegram akkauntingizning umumiy balansi, u qayerdan sotib olinganidan qat'i nazar bir xil. Uni istalgan botga, kanalga yoki mini-ilovaga alohida-alohida sarflashingiz mumkin — bitta \"AI bot uchun Stars\" degan alohida turi yo'q.",
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
      { "@type": "ListItem", position: 3, name: "AI botlarga necha Stars kerak", item: "https://premiumsend.uz/maqolalar/ai-botlarga-necha-stars-kerak" },
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
        <span className="text-foreground font-medium">AI botlarga necha Stars kerak</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">Foydalanish qo&apos;llanmasi</span>
            <time className="text-xs text-muted" dateTime="2026-09-12">2026-yil, 12-sentabr</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            AI botlarga so&apos;rov yuborish uchun necha Telegram Stars kerak bo&apos;ladi?
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-sm font-bold text-primary mb-2">QISQACHA JAVOB</p>
            <p className="text-foreground leading-relaxed font-medium">
              Yagona rasmiy tarif <strong>yo&apos;q</strong> — Telegram bot dasturchilariga Stars narxini o&apos;zlari belgilash imkonini beradi. Amaliyotda oddiy matnli AI so&apos;rov uchun ko&apos;pincha <strong>5-20 Stars</strong>, murakkabroq funksiyalar (rasm generatsiya, uzoq tahlil) uchun <strong>50-200 Stars</strong> atrofida narx qo&apos;yiladi — lekin bu aniq foydalanayotgan botingizga bog&apos;liq. Stars&apos;ni <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="text-primary hover:underline">@premiumsendbot</Link> orqali so&apos;mda, Uzcard/Humo/Click/Payme bilan oldindan zaxira qilib qo&apos;yish mumkin.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            2024-yildan beri Telegram Stars bot va mini-ilovalar uchun umumiy ichki valyutaga aylandi — shu jumladan ChatGPT, Claude va boshqa AI-asosidagi botlarni ham ko&apos;pchilik dasturchi shu orqali pullik qilmoqda. Lekin &quot;bitta so&apos;rov qancha Stars turadi&quot; degan savolga bitta universal javob yo&apos;q, chunki narxni Telegram emas, balki har bir bot egasi o&apos;zi belgilaydi.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Nega AI botlar uchun yagona standart narx yo&apos;q?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Telegram Stars — bu App Store&apos;dagi in-app xaridga o&apos;xshash umumiy to&apos;lov infratuzilmasi. Telegram Bot API&apos;da dasturchilar <code>sendInvoice</code> funksiyasi va <code>XTR</code> (Stars) valyutasi orqali o&apos;z botiga istalgan narxni o&apos;rnatishlari mumkin. Telegram bu jarayonda faqat to&apos;lovni amalga oshiradi (Stars sotib olish, foydalanuvchidan botga o&apos;tkazish) — qancha Stars so&apos;rash kerakligini belgilamaydi.
            </p>
            <p className="text-muted leading-relaxed">
              Shu sababli narx to&apos;liq bot egasining qo&apos;lida: u AI modelning o&apos;ziga to&apos;lanadigan xarajatni, so&apos;rov murakkabligini va o&apos;z foyda marjasini hisobga olib narx belgilaydi. Ikkita AI bot bir xil funksiyani taklif qilsa ham, ularning Stars narxi butunlay boshqacha bo&apos;lishi mumkin.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">AI bot so&apos;rovlari uchun odatiy Stars narxi qancha?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Bu — Telegram tomonidan belgilangan rasmiy tarif emas, balki bozordagi AI botlar amaliyotida ko&apos;p uchraydigan taxminiy oraliqlar:
            </p>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto mb-4">
              <table className="w-full text-sm min-w-[420px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">Funksiya turi</th>
                    <th className="p-4 text-left font-bold">Taxminiy narx</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Oddiy matnli savol-javob</td>
                    <td className="p-4">5-20 Stars / so&apos;rov</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Rasm yoki video generatsiya</td>
                    <td className="p-4">50-200 Stars / natija</td>
                  </tr>
                  <tr className="border-b border-card-border last:border-b-0">
                    <td className="p-4 font-medium">Oylik cheklovsiz obuna (funksiya ochish)</td>
                    <td className="p-4">200+ Stars / oy</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              Foydalanayotgan botingizning aniq narxini bilish uchun botning o&apos;zidagi narxlar bo&apos;limini (odatda <code>/price</code> buyrug&apos;i yoki sozlamalar menyusi) tekshiring — yuqoridagi raqamlar faqat mo&apos;ljal uchun.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Necha Stars zaxira qilish kerak — amaliy hisob-kitob</h2>
            <p className="text-muted leading-relaxed mb-4">
              Agar bot bir so&apos;rov uchun o&apos;rtacha 10-20 Stars olsa:
            </p>
            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li><strong>10 ta so&apos;rov</strong> — taxminan 100-200 Stars (Premium Send&apos;da 100 Stars = 30 000 so&apos;m)</li>
              <li><strong>50 ta so&apos;rov</strong> — taxminan 500-1000 Stars (500 Stars = 150 000 so&apos;m, 1000 Stars = 300 000 so&apos;m)</li>
              <li><strong>Muntazam, kunlik foydalanish</strong> — 2500-5000 Stars zaxirasi (750 000 - 1 500 000 so&apos;m) bir necha oylik ishlatishga yetishi mumkin</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              Barcha paketlar Premium Send&apos;da bir xil <strong>300 so&apos;m/star</strong> chiziqli tarifda hisoblanadi — qaysi miqdorni tanlasangiz ham bir star bahosi o&apos;zgarmaydi:
            </p>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto mb-6">
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
              Har bir paketning alohida sahifasi:{" "}
              <Link href="/50-stars" className="text-primary hover:underline">50</Link>,{" "}
              <Link href="/100-stars" className="text-primary hover:underline">100</Link>,{" "}
              <Link href="/250-stars" className="text-primary hover:underline">250</Link>,{" "}
              <Link href="/500-stars" className="text-primary hover:underline">500</Link>,{" "}
              <Link href="/1000-stars" className="text-primary hover:underline">1000</Link>,{" "}
              <Link href="/2500-stars" className="text-primary hover:underline">2500</Link>,{" "}
              <Link href="/5000-stars" className="text-primary hover:underline">5000 Stars</Link>.
            </p>
          </section>

          <section>
            <div className="bg-primary-light/40 border border-primary/20 rounded-2xl p-6 md:p-8 text-center">
              <p className="text-foreground text-lg leading-relaxed mb-4">
                AI botlar uchun Stars zaxirasini oldindan to&apos;ldiring — <strong>@premiumsendbot</strong> orqali so&apos;mda, bir necha daqiqada.
              </p>
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-2xl hover:shadow-xl transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                Stars sotib olish
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Stars tugab qolsa nima bo&apos;ladi?</h2>
            <p className="text-muted leading-relaxed">
              Ko&apos;pchilik pullik AI bot va mini-ilova balans yetarli bo&apos;lmasa yangi so&apos;rovni bajarmaydi yoki darhol qayta to&apos;lov so&apos;raydi — suhbat yo&apos;qolmaydi, faqat keyingi so&apos;rov uchun to&apos;lov talab qilinadi. Shu sababli faol foydalanadigan bo&apos;lsangiz, oldindan bir oz zaxira bilan Stars sotib olib qo&apos;yish qulayroq — har safar kichik miqdorda to&apos;lashdan ko&apos;ra.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Stars&apos;ni qayerdan sotib olsa bo&apos;ladi?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Telegram Stars — akkauntingizning umumiy balansi, qayerdan sotib olinganidan qat&apos;i nazar bir xil ishlaydi. Uni istalgan AI bot, kanal yoki mini-ilovada alohida-alohida sarflash mumkin. O&apos;zbekistonda eng qulay yo&apos;l — <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="text-primary font-semibold hover:underline">@premiumsendbot</Link>: Uzcard, Humo, Click yoki Payme kartangiz bilan to&apos;g&apos;ridan-to&apos;g&apos;ri so&apos;mda, xorijiy karta yoki kriptovalyutasiz.
            </p>
            <p className="text-muted leading-relaxed">
              To&apos;liq xarid jarayoni va barcha to&apos;lov usullari haqida:{" "}
              <Link href="/maqolalar/telegram-stars-somda-uzs-sotib-olish" className="text-primary font-semibold hover:underline">Stars&apos;ni so&apos;mda sotib olish qo&apos;llanmasi</Link>,{" "}
              <Link href="/maqolalar/telegram-stars-humo-orqali" className="text-primary font-semibold hover:underline">Humo</Link>,{" "}
              <Link href="/maqolalar/telegram-stars-click-orqali" className="text-primary font-semibold hover:underline">Click</Link>,{" "}
              <Link href="/maqolalar/telegram-stars-payme-orqali" className="text-primary font-semibold hover:underline">Payme</Link> orqali.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Tez-tez so&apos;raladigan savollar (FAQ)</h2>
            <div className="space-y-4">
              {[
                { q: "AI botga bitta so'rov uchun necha Stars kerak?", a: "Yagona javob yo'q — har bir bot narxni o'zi belgilaydi. Oddiy matnli so'rov uchun ko'pincha 5-20 Stars, rasm/video generatsiya uchun 50-200 Stars atrofida." },
                { q: "Nega Telegram AI botlar uchun rasmiy standart narx belgilamagan?", a: "Telegram faqat to'lov infratuzilmasini (sendInvoice, XTR valyutasi) taqdim etadi, narxni har bir bot dasturchisi o'zi belgilaydi." },
                { q: "10-20 ta AI so'rov uchun qancha Stars zaxira qilish tavsiya etiladi?", a: "O'rtacha 10-20 Stars/so'rov hisobida 10-20 ta so'rov uchun 100-400 Stars yetarli bo'lishi mumkin — aniq son botning narxiga bog'liq." },
                { q: "Stars tugab qolsa AI bot ishlashni to'xtatadimi?", a: "Ha, ko'pchilik bot balans yetmasa yangi so'rovni bajarmaydi yoki qayta to'lov so'raydi." },
                { q: "Telegram Stars'ni AI botlar uchun O'zbekistonda qanday sotib olish mumkin?", a: "@premiumsendbot orqali — Uzcard, Humo, Click yoki Payme bilan so'mda, bir necha daqiqada." },
                { q: "Bitta botda sotib olingan Stars boshqa AI botda ham ishlaydimi?", a: "Ha, Stars — akkauntingizning umumiy balansi, istalgan botga sarflash mumkin." },
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
                  AI botlar, mini-ilovalar va boshqa Stars talab qiladigan funksiyalar uchun —{" "}
                  <strong className="text-white">@premiumsendbot</strong> orqali 50 Stars <strong className="text-white">15 000 so&apos;mdan</strong> boshlab, bir necha daqiqada akkauntingizda.
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
