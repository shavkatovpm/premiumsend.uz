import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Telegram Stars Click va kartaga o'tkazma orqali so'mda — to'liq qo'llanma",
  description:
    "Telegram Stars Click ilovasi va kartaga o'tkazma orqali so'mda sotib olish — StarsJoy.uz da 50 Stars 12 000 so'mdan, mahalliy karta bilan, valyuta konvertatsiyasiz.",
  keywords: [
    "telegram stars click",
    "telegram stars payme",
    "stars so'mda",
    "stars click orqali",
    "stars kartaga o'tkazma",
    "stars uzbekistan so'mda",
    "starsjoy click",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/maqolalar/telegram-stars-click-payme-orqali-somda",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/telegram-stars-click-payme-orqali-somda",
      ru: "https://premiumsend.uz/ru/maqolalar/telegram-stars-click-payme-orqali-somda",
      "x-default": "https://premiumsend.uz/maqolalar/telegram-stars-click-payme-orqali-somda",
    },
  },
  openGraph: {
    title: "Telegram Stars Click va kartaga o'tkazma orqali so'mda",
    description:
      "Stars'ni Click ilovasi yoki kartaga o'tkazma orqali so'mda sotib oling — StarsJoy.uz da 50 Stars 12 000 so'mdan.",
    url: "https://premiumsend.uz/maqolalar/telegram-stars-click-payme-orqali-somda",
    type: "article",
    publishedTime: "2026-05-07",
  },
};

export default function ArticleStarsPaymentUz() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Telegram Stars Click va kartaga o'tkazma orqali so'mda — to'liq qo'llanma",
    description:
      "O'zbekistondan Telegram Stars Click va kartaga o'tkazma orqali so'mda sotib olish — qadamma-qadam qo'llanma.",
    datePublished: "2026-05-07",
    dateModified: "2026-05-07",
    author: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    publisher: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    mainEntityOfPage: "https://premiumsend.uz/maqolalar/telegram-stars-click-payme-orqali-somda",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Telegram Stars'ni Click orqali so'mda sotib olish mumkinmi?", acceptedAnswer: { "@type": "Answer", text: "Ha. StarsJoy.uz (@starsjoybot) Click ilovasi orqali to'lovni qabul qiladi. Bot menyuda Stars miqdorini tanlaysiz (minimum 50 Stars = 12 000 so'm), keyin Click yoki kartaga o'tkazma yo'lini tanlaysiz. To'lov so'mda — kurs konvertatsiyasi yo'q. Stars 1-5 daqiqada akkauntga tushadi." } },
      { "@type": "Question", name: "Kartaga o'tkazma orqali Stars qanday olinadi?", acceptedAnswer: { "@type": "Answer", text: "@starsjoybot da Stars miqdorini tanlaysiz, bot to'lov tafsilotlarini ko'rsatadi (karta raqami va aniq summa). Siz istalgan ilovadan (Uzcard, Humo, bank ilovasi yoki Click/Payme ichida ulangan kartangiz orqali) shu kartaga summani o'tkazasiz. Tizim aniqlaydi va Stars akkauntga tushadi." } },
      { "@type": "Question", name: "Stars narxlari Click va kartaga o'tkazmada bir xilmi?", acceptedAnswer: { "@type": "Answer", text: "Ha. To'lov usuli (Click, kartaga o'tkazma) Stars narxiga ta'sir qilmaydi. 50 Stars 12 000 so'm, 100 Stars 24 000, 250 Stars 60 000, 500 Stars 120 000, 1000 Stars 240 000 so'm — har ikki yo'lda bir xil narx. Linear hisob: 1 Star ≈ 240 so'm." } },
      { "@type": "Question", name: "Click ilovasi yo'q bo'lsa Stars qanday olinadi?", aceptedAnswer: { "@type": "Answer", text: "Kartaga o'tkazma yo'lini tanlang — bu Click yo'qligida ham ishlaydi. Bot karta raqami va aniq summani ko'rsatadi, siz Uzcard, Humo, Payme yoki bank ilovasi orqali shu kartaga o'tkazasiz. Yoki Click ilovasini Play Market/App Store dan bepul yuklang (3-5 daqiqa) va o'rnating." } },
      { "@type": "Question", name: "App Store narxi bilan farqi qancha?", acceptedAnswer: { "@type": "Answer", text: "App Store'da 1 Star ≈ 290 so'm, mahalliy yo'lda 240 so'm — farq 17%. Plus App Store xorijiy karta talab qiladi (Visa/Mastercard) va kurs riski bor. Mahalliy Click yoki kartaga o'tkazma orqali so'mda — eng oqilona variant." } },
      { "@type": "Question", name: "Stars qancha vaqtda akkauntga tushadi?", acceptedAnswer: { "@type": "Answer", text: "To'lov tasdiqlangach Stars 1-5 daqiqada akkauntga avtomatik tushadi. Click bilan 1-2 daqiqa, kartaga o'tkazma bilan 2-5 daqiqa. Texnik kechikish bo'lsa 10-15 daqiqaga cho'zilishi mumkin." } },
      { "@type": "Question", name: "Click va kartaga o'tkazma orqali to'lov xavfsizmi?", acceptedAnswer: { "@type": "Answer", text: "Ha. Click — Markaziy bank tomonidan litsenziyalangan rasmiy to'lov tizimi. Karta orqali P2P o'tkazma ham bank serveri orqali xavfsiz. Ikkalasida ham karta ma'lumotlari bot serveriga umuman tushmaydi. Har to'lovda PDF chek beriladi." } },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Bosh sahifa", item: "https://premiumsend.uz" },
      { "@type": "ListItem", position: 2, name: "Maqolalar", item: "https://premiumsend.uz/maqolalar" },
      { "@type": "ListItem", position: 3, name: "Stars Click va kartaga o'tkazma", item: "https://premiumsend.uz/maqolalar/telegram-stars-click-payme-orqali-somda" },
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
        <span className="text-foreground font-medium">Stars Click va kartaga o&apos;tkazma orqali so&apos;mda</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">Qo&apos;llanma</span>
            <time className="text-xs text-muted" dateTime="2026-05-07">2026-yil, 7-may</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Telegram Stars Click va kartaga o&apos;tkazma orqali so&apos;mda
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>Qisqacha javob:</strong> O&apos;zbekistondan Telegram Stars'ni Click ilovasi yoki kartaga o&apos;tkazma orqali <strong>so&apos;mda</strong> sotib olish mumkin —{" "}
              <Link href="https://t.me/starsjoybot" target="_blank" className="text-primary hover:underline">@starsjoybot</Link>{" "}
              (StarsJoy.uz) orqali. <strong>50 Stars 12 000 so&apos;mdan</strong>, hech qanday kurs konvertatsiyasi yo&apos;q. Click ilovasida tezkor (1-2 daqiqada) yoki Uzcard/Humo bank ilovasidan kartaga o&apos;tkazma — natija bir xil, Stars 1-5 daqiqada akkauntda.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Telegram Stars 2024-yilda joriy etilgan, bot va kanallardagi xizmatlar uchun ichki valyuta. O&apos;zbekistonda eng qulay yo&apos;l — mahalliy karta orqali so&apos;mda olish. App Store xorijiy karta talab qiladi va 17% qimmat. StarsJoy.uz mahalliy yo&apos;l: Click yoki kartaga o&apos;tkazma — ikki tezkor variant.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Ushbu maqolada: ikki to&apos;lov yo&apos;li (Click va kartaga o&apos;tkazma) qanday ishlaydi, qaysi paketlar mavjud, qadamma-qadam jarayoni, narx taqqoslash va xavfsizlik.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 — Two paths */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Ikki to&apos;lov yo&apos;li — Click va kartaga o&apos;tkazma
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              StarsJoy.uz Stars to&apos;lovini ikki yo&apos;l orqali qabul qiladi:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Yo&apos;l</div>
                <div className="text-center">Vaqt</div>
                <div className="text-center">Foydalanish</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm bg-primary-light/20">
                <div className="font-bold text-primary">Click ilovasi</div>
                <div className="text-center text-green-600 font-bold">1-2 daqiqa</div>
                <div className="text-center text-muted text-xs">Click ilovasi telefonda bor</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center text-sm">
                <div className="font-medium">Kartaga o&apos;tkazma (Uzcard, Humo)</div>
                <div className="text-center">2-5 daqiqa</div>
                <div className="text-center text-muted text-xs">Bank ilovasi yoki SMS-bank</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Ikkalasi ham so&apos;mda</strong> — kurs konvertatsiyasi yo&apos;q. Narxlar bir xil. Stars 1-5 daqiqada akkauntga tushadi. Eng asosiy farq — qaysi ilova sizga qulay.
            </p>

            <div className="bg-section-alt rounded-xl p-5">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Texnik mexanizm:</strong> StarsJoy bot menyuda Stars miqdorini tanlaganingizdan keyin to&apos;lov tafsilotlarini ko&apos;rsatadi. Click yo&apos;lida Click ilovasiga o&apos;tasiz va to&apos;laysiz. Kartaga o&apos;tkazma yo&apos;lida bot karta raqami va aniq summani ko&apos;rsatadi, siz istalgan ilovadan kartaga o&apos;tkazasiz. Tizim summa va karta orqali aniqlaydi va Stars beradi.
              </p>
            </div>
          </section>

          {/* Section 2 — Pricing */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Stars paketlari va narxlar (Click ham, kartaga o&apos;tkazma ham bir xil)
            </h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Linear hisob:</strong> 1 Star = 240 so&apos;m. Minimum paket — 50 Stars (12 000 so&apos;m). To&apos;lov usuli narxga ta&apos;sir qilmaydi.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Paket</div>
                <div className="text-center">Narx (so&apos;m)</div>
                <div className="text-center">Tipik foydalanish</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm bg-primary-light/20">
                <div className="font-bold text-primary">50 Stars (minimum)</div>
                <div className="text-center font-bold text-primary">12 000 so&apos;m</div>
                <div className="text-center text-muted">Tip, sticker, sinov</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">100 Stars</div>
                <div className="text-center">24 000 so&apos;m</div>
                <div className="text-center text-muted">Bot funksiyasi, kichik donate</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">250 Stars</div>
                <div className="text-center">60 000 so&apos;m</div>
                <div className="text-center text-muted">O&apos;rtacha donate</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">500 Stars</div>
                <div className="text-center">120 000 so&apos;m</div>
                <div className="text-center text-muted">Premium 3 oy gift atrofida</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">1000 Stars</div>
                <div className="text-center">240 000 so&apos;m</div>
                <div className="text-center text-muted">Premium 6-12 oy gift</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center text-sm">
                <div className="font-medium">2500-5000 Stars</div>
                <div className="text-center">600 000 - 1 200 000 so&apos;m</div>
                <div className="text-center text-muted">Yirik donate, business</div>
              </div>
            </div>
          </section>

          {/* Section 3 — Step by step */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Stars sotib olish — qadamma-qadam
            </h2>

            <div className="space-y-4 mb-6">
              {[
                { step: "1", title: "Telegramda @starsjoybot ni oching", desc: "Telegram qidiruv qatoriga @starsjoybot deb yozing va botni oching. /start tugmasini bosing — bot menyusi (UZ va RU) ochiladi." },
                { step: "2", title: "Stars miqdorini tanlang", desc: "Bot tayyor paketlar (50, 100, 250, 500, 1000, 2500, 5000 Stars) yoki o'z miqdoringizni kiritish imkonini beradi. Narx so'mda darhol ko'rinadi." },
                { step: "3", title: "To'lov yo'lini tanlang: Click yoki kartaga o'tkazma", desc: "Click ilovasi mavjud bo'lsa — Click ni tanlang, jarayon tezroq. Bo'lmasa — kartaga o'tkazma (Uzcard, Humo, bank ilovasi)." },
                { step: "4", title: "Click yo'li: Click ilovasida to'lash", desc: "Click ilovasi orqali to'lov tasdiqlanadi. PIN/Face ID bilan 1-2 daqiqada amalga oshadi." },
                { step: "5", title: "Kartaga o'tkazma yo'li: bot karta raqami va summani beradi", desc: "Bot karta raqami va aniq summani ko'rsatadi. Siz Uzcard, Humo bank ilovasi yoki Click/Payme ichida ulangan kartangiz orqali shu kartaga o'tkazasiz. Aynan ko'rsatilgan summa muhim." },
                { step: "6", title: "Stars 1-5 daqiqada akkauntga tushadi", desc: "To'lov tasdiqlangach Stars avtomatik akkauntda paydo bo'ladi. Telegram → Settings → Stars bo'limida ko'rishingiz mumkin." },
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
              Click yo&apos;li — eng tez (3-5 daqiqada). Kartaga o&apos;tkazma — Click bo&apos;lmaganda muqobil yo&apos;l, biroz uzunroq lekin natija bir xil.
            </p>
          </section>

          {/* Mid CTA — StarsJoy */}
          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Stars sotib olish uchun{" "}
                <strong className="text-white">@starsjoybot</strong> ni oching. 50 Stars 12 000 so&apos;mdan boshlanadi, Click yoki kartaga o&apos;tkazma — 1-5 daqiqada akkauntda.
              </p>
              <Link href="https://t.me/starsjoybot" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                StarsJoy bot — boshlash
              </Link>
            </div>
          </section>

          {/* Section 4 — Click vs card transfer */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Click va kartaga o&apos;tkazma — qaysi tez?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Ikki yo&apos;l ham so&apos;mda va aynan bir xil narxda. Farq — qulaylik va tezlikda:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Mezon</div>
                <div className="text-center">Click ilovasi</div>
                <div className="text-center">Kartaga o&apos;tkazma</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Vaqt</div>
                <div className="text-center text-green-600 font-bold">1-2 daqiqa</div>
                <div className="text-center">2-5 daqiqa</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Karta yozish</div>
                <div className="text-center text-green-600">Yo&apos;q (saqlangan)</div>
                <div className="text-center">Ha (qabul qiluvchi karta)</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Tasdiq</div>
                <div className="text-center">PIN/Face ID</div>
                <div className="text-center">PIN/SMS-kod</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Kerak ilova</div>
                <div className="text-center">Click</div>
                <div className="text-center">Bank ilovasi yoki Click/Payme</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center text-sm">
                <div className="font-medium">Komissiya</div>
                <div className="text-center text-green-600 font-bold">0%</div>
                <div className="text-center text-green-600 font-bold">0%</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">Xulosa:</strong> Click ilovasi tayyor bo&apos;lsa — bu eng tez yo&apos;l. Aks holda, kartaga o&apos;tkazma ham xuddi shunday qulay (Click ilovasi bo&apos;lmaganlarning aksariyat o&apos;ziga ulangan bank ilovasini ishlatadi).
            </p>
          </section>

          {/* Section 5 — Comparison with App Store */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Mahalliy yo&apos;l vs App Store / Telegram rasmiy ilovasi
            </h2>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Mezon</div>
                <div className="text-center">Mahalliy (Click/karta)</div>
                <div className="text-center">App Store / Telegram rasmiy</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">1 Star narxi</div>
                <div className="text-center text-green-600 font-bold">~240 so&apos;m</div>
                <div className="text-center text-red-600">~290 so&apos;m</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Karta turi</div>
                <div className="text-center text-green-600">Mahalliy (Uzcard, Humo)</div>
                <div className="text-center text-red-600">Visa / Mastercard</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Valyuta</div>
                <div className="text-center text-green-600 font-bold">So&apos;m</div>
                <div className="text-center text-red-600">USD</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Kurs riski</div>
                <div className="text-center text-green-600">Yo&apos;q</div>
                <div className="text-center text-red-600">Bor</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center text-sm">
                <div className="font-medium">Qo&apos;llab-quvvatlash UZ/RU</div>
                <div className="text-center text-green-600">Bor</div>
                <div className="text-center text-red-600">Yo&apos;q</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">Xulosa:</strong> mahalliy yo&apos;l (Click yoki kartaga o&apos;tkazma) — 17% arzonroq, mahalliy karta yetadi, kurs riski yo&apos;q. Texnik xavfsizlik — har ikkalasi yuqori. O&apos;zbekistonliklar uchun mahalliy yo&apos;l — eng oqilona variant.
            </p>
          </section>

          {/* Section 6 — Safety */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Click va kartaga o&apos;tkazma orqali to&apos;lash xavfsizmi?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Ha. Click — Markaziy bank litsenziyali, PCI DSS standartiga muvofiq. Kartaga o&apos;tkazma ham bank serveridan o&apos;tadi va xuddi shunday xavfsiz.
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">🔐 Karta ma&apos;lumotlari faqat to&apos;lov tizimi serverida</h3>
                <p className="text-sm text-muted leading-relaxed">Bot karta raqami, parol va CVV ni umuman ko&apos;rmaydi. Ular faqat Click yoki bank serverida saqlanadi.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">📋 PDF chek har to&apos;lovda</h3>
                <p className="text-sm text-muted leading-relaxed">Click va bank ham PDF chek beradi. Bu ilovada saqlanadi va har qanday muammo bo&apos;lsa qo&apos;llab-quvvatlash chek raqami orqali tekshiradi.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">💰 Stars kelmasa pul qaytariladi</h3>
                <p className="text-sm text-muted leading-relaxed">Texnik xato bo&apos;lsa to&apos;langan summa to&apos;liq qaytariladi. Bu standart reseller qoidasi.</p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Aldovchi botlardan saqlanish haqida —{" "}
              <Link href="/maqolalar/telegram-premium-xavfsiz-aldovdan-saqlanish" className="text-primary font-semibold hover:underline">xavfsizlik qo&apos;llanmasi</Link>{" "}
              (Premium uchun yozilgan, lekin Stars'ga ham mos).
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Tez-tez so&apos;raladigan savollar</h2>
            <div className="space-y-4">
              {[
                { q: "Telegram Stars'ni Click orqali so'mda sotib olish mumkinmi?", a: "Ha. StarsJoy.uz (@starsjoybot) Click ilovasi orqali to'lovni qabul qiladi. Stars miqdorini tanlaysiz, Click ilovasida tasdiqlaysiz. So'mda — kurs konvertatsiyasi yo'q." },
                { q: "Kartaga o'tkazma orqali Stars qanday olinadi?", a: "Bot karta raqami va aniq summani ko'rsatadi, siz istalgan ilovadan (Uzcard, Humo, bank ilovasi) shu kartaga summani o'tkazasiz. Tizim aniqlaydi va Stars akkauntga tushadi." },
                { q: "Stars narxlari Click va kartaga o'tkazmada bir xilmi?", a: "Ha. To'lov usuli narxga ta'sir qilmaydi. 50 Stars 12 000 so'm, 1 Star ≈ 240 so'm — har ikki yo'lda bir xil." },
                { q: "Click ilovasi yo'q bo'lsa Stars qanday olinadi?", a: "Kartaga o'tkazma yo'lini tanlang — bu ham mavjud. Yoki Click ilovasini Play Market/App Store dan bepul yuklang (3-5 daqiqa)." },
                { q: "App Store narxi bilan farqi qancha?", a: "App Store'da 1 Star ≈ 290 so'm, mahalliy 240 so'm — farq 17%. Plus xorijiy karta talabi va kurs riski. Mahalliy yo'l afzal." },
                { q: "Stars qancha vaqtda akkauntga tushadi?", a: "Click bilan 1-2 daqiqa, kartaga o'tkazma bilan 2-5 daqiqa. Texnik kechikish bo'lsa 10-15 daqiqaga cho'zilishi mumkin." },
                { q: "To'lov xavfsizmi?", a: "Ha. Click — Markaziy bank litsenziyali. Kartaga o'tkazma ham bank serveri orqali xavfsiz. Karta ma'lumotlari bot serveriga umuman tushmaydi." },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                  <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Trust Block */}
          <section>
            <div className="bg-section-alt rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-bold text-foreground mb-4 text-center">Stars Click yoki kartaga o&apos;tkazma — raqamlarda</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">240</p>
                  <p className="text-sm text-muted">so&apos;m / Star</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">1-5 daq.</p>
                  <p className="text-sm text-muted">akkauntga tushish</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">17%</p>
                  <p className="text-sm text-muted">App Store dan arzon</p>
                </div>
              </div>
            </div>
          </section>

          {/* Related */}
          <section>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-card-border">
              <h3 className="text-lg font-bold text-foreground mb-4">Bog&apos;liq maqolalar</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/maqolalar/telegram-stars-ozbekistondan-sotib-olish" className="text-primary font-semibold hover:underline">Stars O&apos;zbekistondan qanday sotib olinadi (umumiy)</Link></li>
                <li><Link href="/maqolalar/telegram-stars-nima" className="text-primary font-semibold hover:underline">Telegram Stars nima va qayerda ishlatiladi</Link></li>
                <li><Link href="/maqolalar/telegram-stars-vs-telegram-premium" className="text-primary font-semibold hover:underline">Stars vs Premium: qaysini tanlash</Link></li>
                <li><Link href="/maqolalar/telegram-premium-xavfsiz-aldovdan-saqlanish" className="text-primary font-semibold hover:underline">Aldovchi botlardan saqlanish</Link></li>
              </ul>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <div className="hero-gradient rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-5 left-5 w-32 h-32 bg-white rounded-full blur-2xl" />
              </div>
              <div className="relative">
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  Click yoki kartaga o&apos;tkazma — ikki tezkor yo&apos;l, ikkalasi ham so&apos;mda, ikkalasi ham xavfsiz. Sizga qaysi qulay bo&apos;lsa, shuni tanlang.{" "}
                  <strong className="text-white">@starsjoybot</strong> da 50 Stars 12 000 so&apos;mdan boshlanadi.
                </p>
                <Link href="https://t.me/starsjoybot" target="_blank" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  StarsJoy botini ochish
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
