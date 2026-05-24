import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Telegram Premium Payme orqali sotib olish — kartaga o'tkazma, qadamma-qadam",
  description:
    "Telegram Premium Payme orqali — 59,000 so'mdan 425,000 so'mgacha. @PremiumSendBot ko'rsatgan kartaga Payme'dan aniq summa o'tkazasiz, tizim avtomatik aniqlaydi va Premium 5 daqiqada faollashadi.",
  keywords: [
    "Telegram Premium Payme",
    "Payme orqali Telegram Premium",
    "Telegram Premium Payme bilan to'lash",
    "Payme bilan Premium",
    "Payme orqali premium sotib olish",
    "Telegram Premium so'mda Payme",
    "PremiumSendBot Payme",
  ],
  alternates: {
    canonical: "https://premiumsend.uz/maqolalar/telegram-premium-payme-orqali",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/telegram-premium-payme-orqali",
      ru: "https://premiumsend.uz/ru/maqolalar/telegram-premium-payme-orqali",
      "x-default": "https://premiumsend.uz/maqolalar/telegram-premium-payme-orqali",
    },
  },
  openGraph: {
    title: "Telegram Premium Payme orqali sotib olish — qadamma-qadam",
    description:
      "Bot ko'rsatgan kartaga Payme orqali aniq summa o'tkazasiz, Premium 5 daqiqada akkauntda. 4 ta tarif, so'mda, komissiyasiz.",
    url: "https://premiumsend.uz/maqolalar/telegram-premium-payme-orqali",
    type: "article",
    publishedTime: "2026-05-05",
  },
};

export default function ArticlePaymePillarUz() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Telegram Premium Payme orqali sotib olish — qadamma-qadam qo'llanma",
    description:
      "Telegram Premium ni Payme orqali O'zbekistonda sotib olish — bot ko'rsatgan kartaga Payme'dan o'tkazasiz, tizim avtomatik aniqlaydi.",
    datePublished: "2026-05-05",
    dateModified: "2026-05-05",
    author: {
      "@type": "Organization",
      name: "Premium Send",
      url: "https://premiumsend.uz",
    },
    publisher: {
      "@type": "Organization",
      name: "Premium Send",
      url: "https://premiumsend.uz",
    },
    mainEntityOfPage:
      "https://premiumsend.uz/maqolalar/telegram-premium-payme-orqali",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Telegram Premium Payme orqali sotib olish mumkinmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha. @PremiumSendBot tarif tanlaganingizdan keyin karta raqami va aniq summani ko'rsatadi. Siz Payme ilovasidan o'sha kartaga ko'rsatilgan summani o'tkazasiz. Tizim to'lovni avtomatik aniqlab, Premium ni 5 daqiqada akkauntga yoqadi. Barcha tariflar (1, 3, 6, 12 oylik) qo'llab-quvvatlanadi, narx so'mda, komissiyasiz.",
        },
      },
      {
        "@type": "Question",
        name: "Payme orqali Telegram Premium qancha turadi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Narxlar boshqa to'lov usullari bilan bir xil: 1 oylik — 59,000 so'm, 3 oylik — 175,000 so'm, 6 oylik — 235,000 so'm, 12 oylik — 425,000 so'm. To'lov usuli (Payme, Uzcard, Humo, Click ilovasi yoki bank ilovasi orqali kartaga o'tkazma) narxga ta'sir qilmaydi. Yashirin komissiya yo'q.",
        },
      },
      {
        "@type": "Question",
        name: "Payme orqali to'lash qanday ishlaydi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mexanizm oddiy: bot tarif va username asosida sizga karta raqami + aniq summa beradi. Siz Payme ilovasini ochasiz, 'Boshqa kartaga o'tkazma' ni tanlaysiz, ko'rsatilgan kartaga aniq summani o'tkazasiz. Payme tasdiqlashidan so'ng tizim 1-5 daqiqa ichida to'lovni aniqlaydi (summa va karta orqali) va Premium siz bergan @username'da avtomatik faollashadi.",
        },
      },
      {
        "@type": "Question",
        name: "Aynan ko'rsatilgan summani o'tkazish nega muhim?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tizim to'lovni summa va karta kombinatsiyasi orqali aniqlaydi. Agar siz boshqa summa o'tkazsangiz, tizim avtomatik aniqlay olmaydi va Premium qo'lda yoqilishi uchun qo'llab-quvvatlashga murojaat qilish kerak bo'ladi. Botda ko'rsatilgan summani aynan o'tkazish — eng tezkor yo'l.",
        },
      },
      {
        "@type": "Question",
        name: "Payme ilovasi yo'q bo'lsa ham Premium olish mumkinmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha. Payme — bu shunchaki kartaga pul o'tkazish vositasi. Boshqa har qanday ilovadan (Uzcard, Humo, Click ilovasi yoki bank ilovasi) ham bot ko'rsatgan kartaga o'sha summani o'tkazsangiz, natija bir xil — tizim aniqlaydi va Premium o'tadi. Payme — qulayligi va keng tarqalganligi uchun ko'pchilik tomonidan tanlanadi.",
        },
      },
      {
        "@type": "Question",
        name: "Payme orqali to'lash xavfsizmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha. Payme — Markaziy bank tomonidan litsenziyalangan rasmiy to'lov tizimi, PCI DSS xalqaro xavfsizlik standartiga muvofiq ishlaydi. Karta ma'lumotlari (raqam, parol, CVV) faqat Payme serverida saqlanadi, bot ko'rmaydi. Har o'tkazma uchun Payme'da PDF chek beriladi. Texnik muammo bo'lsa chek raqami orqali tekshiruv tezkor.",
        },
      },
      {
        "@type": "Question",
        name: "Telegram rasmiy ilovasida Payme orqali to'lab bo'ladimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yo'q. Telegram rasmiy ilovasi faqat Visa, Mastercard, Google Pay va Apple Pay qabul qiladi. Payme bu tizimga ulanmagan. So'mda va Payme orqali Premium olish uchun mahalliy oraliq xizmat (masalan, @PremiumSendBot) zarur — siz Payme'dan kartaga o'tkazasiz, tizim Telegram'ga Premium gift jo'natadi.",
        },
      },
      {
        "@type": "Question",
        name: "Payme orqali sovg'a qilish mumkinmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha. 3, 6 va 12 oylik Telegram Premium ni Payme orqali to'lab boshqa odamga sovg'a qilish mumkin. Bot oddiy: o'zingizning emas, sovg'a qilayotgan kishining @username'ini kiritasiz, qolgan jarayon bir xil — Payme'dan kartaga o'tkazasiz, Premium o'sha akkauntda faollashadi. Telegram qoidasi bo'yicha 1 oylik sovg'a mavjud emas — eng arzon sovg'a 3 oylik (175,000 so'm).",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Bosh sahifa",
        item: "https://premiumsend.uz",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Maqolalar",
        item: "https://premiumsend.uz/maqolalar",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Telegram Premium Payme orqali",
        item: "https://premiumsend.uz/maqolalar/telegram-premium-payme-orqali",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-muted">
        <Link href="/" className="hover:text-primary">
          Bosh sahifa
        </Link>
        <span className="mx-2">/</span>
        <Link href="/maqolalar" className="hover:text-primary">
          Maqolalar
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">
          Payme orqali Telegram Premium
        </span>
      </nav>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">
              Qo&apos;llanma
            </span>
            <time className="text-xs text-muted" dateTime="2026-05-05">
              2026-yil, 5-may
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Telegram Premium Payme orqali sotib olish — qadamma-qadam qo&apos;llanma
          </h1>

          {/* TL;DR */}
          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>Qisqacha javob:</strong> Telegram Premium Payme orqali sotib olish jarayoni —{" "}
              <Link
                href="https://t.me/premiumsendbot"
                target="_blank"
                className="text-primary hover:underline"
              >
                @PremiumSendBot
              </Link>
              {" "}da tarifni tanlaysiz, bot sizga <strong>karta raqami va aniq summani</strong> ko&apos;rsatadi, siz Payme ilovasidan shu kartaga o&apos;sha summani o&apos;tkazasiz. Tizim to&apos;lovni avtomatik aniqlab, Premium ni siz bergan akkauntga 5 daqiqada faollashtiradi. Narxlar: <strong>1 oylik — 59,000 so&apos;m</strong>, <strong>3 oylik — 175,000</strong>, <strong>6 oylik — 235,000</strong>, <strong>12 oylik — 425,000 so&apos;m</strong>. Komissiya 0%, kurs riski yo&apos;q.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Payme — O&apos;zbekistonda eng keng tarqalgan mobil to&apos;lov ilovalaridan biri. Karta ulangan ilova orqali kommunal to&apos;lovlar, taksi, mobil aloqa va boshqa xizmatlarga to&apos;lash hamda boshqa kartalarga o&apos;tkazma qilish bir-ikki bosishda amalga oshadi. Telegram Premium sotib olishda Payme aynan shu &quot;kartaga o&apos;tkazma&quot; funksiyasini ishlatadi.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Ushbu pillar qo&apos;llanma Payme orqali Telegram Premium sotib olishning to&apos;liq jarayonini ochib beradi: bot va Payme o&apos;rtasidagi mexanizm, qaysi tariflar mavjud, bosqichma-bosqich yo&apos;riqnoma, xavfsizlik va eng ko&apos;p uchraydigan savollar.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 — How payment mechanism works */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Bot va Payme qanday ishlaydi — to&apos;lov mexanizmi
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Mexanizmni tushunib olish, qolgan jarayon o&apos;ziga oydinlashtiradi. Quyidagi sxema oddiy va shaffof:
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  1. Bot karta va summani ko&apos;rsatadi
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  @PremiumSendBot da tarif (1, 3, 6 yoki 12 oylik) va Premium kerak akkauntning username&apos;ini kiritganingizdan so&apos;ng, bot ekranda <strong>karta raqami</strong> va <strong>aniq to&apos;lov summasi</strong>ni chiqaradi. Masalan: 175 000 so&apos;m va 8600 0000 0000 0000 raqamli karta.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  2. Payme ilovasidan kartaga o&apos;tkazasiz
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Payme ilovasini ochib, &quot;Boshqa kartaga o&apos;tkazma&quot; (yoki &quot;P2P o&apos;tkazma&quot;) funksiyasini tanlang. Bot ko&apos;rsatgan karta raqamini va <strong>aynan o&apos;sha summani</strong> kiriting. Payme PIN yoki Face ID bilan tasdiqlashni so&apos;raydi — odatdagi P2P o&apos;tkazmadek.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  3. Tizim to&apos;lovni avtomatik aniqlaydi
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  To&apos;lov tasdiqlangach, tizim 1-5 daqiqa ichida tushgan summani aniqlaydi (karta va aynan ko&apos;rsatilgan summa kombinatsiyasi orqali). Sizdan hech qanday qo&apos;shimcha harakat talab qilinmaydi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  4. Premium akkauntga avtomatik yoqiladi
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Tizim siz bergan @username&apos;ga Telegram&apos;ning rasmiy gift mexanizmi orqali Premium ni yuboradi. Bot xabar yuboradi, profilda Premium belgi paydo bo&apos;ladi. Texnik kechikish bo&apos;lsa 10-15 daqiqaga cho&apos;zilishi mumkin.
                </p>
              </div>
            </div>

            <div className="bg-section-alt rounded-xl p-5">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Asosiy fakt:</strong> Payme — bu kartaga pul o&apos;tkazish vositasi. Bot to&apos;lovni Payme ichidan emas, balki <strong>kartaga tushgan summani avtomatik aniqlash</strong> orqali oladi. Shuning uchun Payme ilovasi ichida &quot;PremiumSend&quot; tugmasi yo&apos;q — siz odatdagi P2P o&apos;tkazmani ishlatasiz.
              </p>
            </div>
          </section>

          {/* Section 2 — Pricing */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Telegram Premium Payme orqali — barcha tariflar narxi
            </h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Narxlar:</strong> 4 ta tarif Payme orqali ham qabul qilinadi. 1 oylik — <strong>59,000 so&apos;m</strong>, 3 oylik — <strong>175,000 so&apos;m</strong>, 6 oylik — <strong>235,000 so&apos;m</strong>, 12 oylik — <strong>425,000 so&apos;m</strong>. Bot ko&apos;rsatgan summa aynan shu — qo&apos;shimcha komissiya yo&apos;q. Payme P2P o&apos;tkazma uchun ham komissiya olmaydi (oddiy karta-kartaga o&apos;tkazmada).
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Tarif</div>
                <div className="text-center">Umumiy narx</div>
                <div className="text-center">Oyiga</div>
                <div className="text-center">Tejamkorlik</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">1 oylik</div>
                <div className="text-center">59,000 so&apos;m</div>
                <div className="text-center">59,000 so&apos;m</div>
                <div className="text-center text-muted">—</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">3 oylik</div>
                <div className="text-center">175,000 so&apos;m</div>
                <div className="text-center">58,333 so&apos;m</div>
                <div className="text-center text-green-600 font-bold">1%</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">6 oylik</div>
                <div className="text-center">235,000 so&apos;m</div>
                <div className="text-center">39,167 so&apos;m</div>
                <div className="text-center text-green-600 font-bold">33%</div>
              </div>
              <div className="grid grid-cols-4 p-4 items-center text-sm bg-primary-light/20">
                <div className="font-bold text-primary">12 oylik ⭐</div>
                <div className="text-center font-bold text-primary">
                  425,000 so&apos;m
                </div>
                <div className="text-center font-bold text-primary">
                  35,417 so&apos;m
                </div>
                <div className="text-center text-green-600 font-bold">39%</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Bot ko&apos;rsatgan summani Payme&apos;ga aynan kiritish muhim — chunki tizim to&apos;lovni summa va karta kombinatsiyasi orqali aniqlaydi. Tariflar haqida batafsil:{" "}
              <Link
                href="/maqolalar/telegram-premium-narxlari"
                className="text-primary font-semibold hover:underline"
              >
                narxlar taqqoslash maqolasi
              </Link>
              .
            </p>
          </section>

          {/* Section 3 — Step by step */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Payme orqali Telegram Premium qanday sotib olinadi? Bosqichma-bosqich
            </h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Qisqa javob:</strong>{" "}
                <Link
                  href="https://t.me/premiumsendbot"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  @PremiumSendBot
                </Link>
                {" "}ni oching → tarifni tanlang → username kiriting → bot karta raqami va summani beradi → Payme ilovasidan kartaga aynan shu summani o&apos;tkazasiz → Premium 5 daqiqada faollashadi.
              </p>
            </div>

            <p className="text-muted leading-relaxed mb-6">
              Quyida har bir bosqich batafsil. Payme ilovasi telefoningizda o&apos;rnatilgan va karta ulangan bo&apos;lsa — jarayon haqiqatan 3-5 daqiqa ichida tugaydi:
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  step: "1",
                  title: "Telegramda @PremiumSendBot ni qidiring",
                  desc: "Telegram qidiruv qatoriga @PremiumSendBot deb yozing. Tasdiqlangan belgi bilan rasmiy bot chiqadi. Oching va /start tugmasini bosing.",
                },
                {
                  step: "2",
                  title: "Tarifni tanlang",
                  desc: "Bot 4 ta tarif chiqaradi: 1, 3, 6 va 12 oylik. Sinash uchun 1 oylik (59,000) yetadi, doimiy uchun 12 oylik (425,000) eng arzon. Sizga mosini tanlang.",
                },
                {
                  step: "3",
                  title: "Premium kerak akkaunt username'ini kiriting",
                  desc: "@belgisidan keyin Telegram username yozing. Bu o'zingizning yoki sovg'a olayotgan kishining akkaunti. Xato bo'lsa Premium boshqa akkauntda faollashadi — ikki marta tekshiring.",
                },
                {
                  step: "4",
                  title: "Bot karta raqami va summani ko'rsatadi",
                  desc: "Ekranda karta raqami (masalan, 8600 XXXX XXXX XXXX) va aniq to'lov summasi (masalan, 175 000 so'm) chiqadi. Bot izoh sifatida tekshiruv kodi ham berishi mumkin — uni ham eslab tursangiz foyda.",
                },
                {
                  step: "5",
                  title: "Payme ilovasini oching va P2P o'tkazma boshlang",
                  desc: "Payme ilovasiga kiring. \"Boshqa kartaga o'tkazma\" (yoki shunga o'xshash) funksiyasini tanlang. Karta raqamini bot ko'rsatgan raqam bilan to'ldiring.",
                },
                {
                  step: "6",
                  title: "Aynan ko'rsatilgan summani kiriting va tasdiqlang",
                  desc: "Summani aynan bot ko'rsatgan miqdorda kiriting. 100 so'm farq ham tizimga to'lovni avtomatik aniqlashga to'sqinlik qiladi. PIN yoki Face ID bilan tasdiqlang.",
                },
                {
                  step: "7",
                  title: "Premium 5 daqiqada faollashadi",
                  desc: "To'lov Payme tomonidan tasdiqlangach, tizim 1-5 daqiqa ichida summani aniqlaydi va Premium siz bergan akkauntda yoqiladi. Bot xabar yuboradi, profilda Premium belgi paydo bo'ladi.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-muted leading-relaxed">
              Aksariyat foydalanuvchilar butun jarayonni 3-5 daqiqada yakunlaydi. Premium yoqilgach, tarifning butun davomida hech qanday qayta to&apos;lov so&apos;ralmaydi.
            </p>
          </section>

          {/* Mid CTA */}
          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Payme ilovangiz tayyormi?{" "}
                <strong className="text-white">@PremiumSendBot</strong> da tarif tanlang, karta raqami va summa olib, Payme&apos;dan o&apos;tkazing. Premium 5 daqiqada akkauntda.
              </p>
              <Link
                href="https://t.me/premiumsendbot"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                @PremiumSendBot — boshlash
              </Link>
            </div>
          </section>

          {/* Section 4 — Why exact amount matters */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Nima uchun aynan ko&apos;rsatilgan summani o&apos;tkazish kerak?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Bot to&apos;lovingizni qanday topadi degan savol asosli. Mexanizm shunday qurilgan:
            </p>
            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li>
                Bot har buyurtma uchun <strong>aniq summa</strong> generatsiya qiladi — tarif narxi yoki uning ustiga unik so&apos;m qo&apos;shilishi mumkin
              </li>
              <li>
                Tizim kartaga tushgan to&apos;lovlarni doimo kuzatib turadi
              </li>
              <li>
                Sizning to&apos;lovingiz aynan o&apos;sha summada tushganida — tizim uni sizning buyurtmangiz bilan moslaydi
              </li>
              <li>
                Premium siz bergan @username&apos;ga avtomatik yoqiladi
              </li>
            </ul>
            <p className="text-muted leading-relaxed mb-4">
              Agar siz boshqa summani o&apos;tkazsangiz, tizim avtomatik moslay olmaydi. Bunday hollarda bot qo&apos;llab-quvvatlashga murojaat qilib, Payme chek raqamini yuborasiz va Premium qo&apos;lda yoqiladi (15-30 daqiqa). Lekin <strong>aynan ko&apos;rsatilgan summa</strong> — tezkor avtomatik yo&apos;l.
            </p>
            <div className="bg-section-alt rounded-xl p-5">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Maslahat:</strong> bot ko&apos;rsatgan summani Payme&apos;ga ko&apos;chirib qo&apos;yganda qo&apos;shimcha bo&apos;sh joy yoki nuqta qo&apos;shilmasin. Toza raqamni kiriting — Payme avtomatik tarzda &quot;X so&apos;m&quot; ko&apos;rinishida formatlaydi.
              </p>
            </div>
          </section>

          {/* Section 5 — Payme vs other apps */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Payme va boshqa ilovalar — qaysi biri qulayroq?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Bot ko&apos;rsatgan kartaga o&apos;tkazmani siz <strong>istalgan ilova</strong> orqali amalga oshirishingiz mumkin. Natija bir xil — Premium baribir 5 daqiqada keladi. Lekin tezlik va qulaylik darajasi farq qiladi:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Ilova</div>
                <div className="text-center">O&apos;tkazma vaqti</div>
                <div className="text-center">Karta yozish</div>
                <div className="text-center">Tasdiq</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm bg-primary-light/20">
                <div className="font-bold text-primary">Payme</div>
                <div className="text-center text-green-600 font-bold">
                  1-2 daqiqa
                </div>
                <div className="text-center text-green-600">Yo&apos;q*</div>
                <div className="text-center">PIN/Face ID</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Click ilovasi</div>
                <div className="text-center text-green-600">1-2 daqiqa</div>
                <div className="text-center text-green-600">Yo&apos;q*</div>
                <div className="text-center">PIN/Face ID</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Uzcard ilovasi / SMS-bank</div>
                <div className="text-center">2-3 daqiqa</div>
                <div className="text-center">Ha</div>
                <div className="text-center">SMS kod</div>
              </div>
              <div className="grid grid-cols-4 p-4 items-center text-sm">
                <div className="font-medium">Bank ilovasi (umumiy)</div>
                <div className="text-center">2-3 daqiqa</div>
                <div className="text-center">Ha</div>
                <div className="text-center">SMS kod</div>
              </div>
            </div>

            <p className="text-muted text-xs italic mb-4">
              * Payme va Click ilovalarida o&apos;z karta saqlangan bo&apos;ladi — har o&apos;tkazmada kartangiz raqamini yozish kerak emas. Lekin <strong>qabul qiluvchi karta raqamini</strong> har holda kiritishga to&apos;g&apos;ri keladi (bot ko&apos;rsatgan raqam).
            </p>

            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Xulosa:</strong> Payme va Click ilovasi — eng tezkor variantlar, chunki o&apos;z karta saqlangan va PIN/Face ID bilan tasdiqlash bor. Aksariyat O&apos;zbekiston foydalanuvchilarida ikkalasi ham o&apos;rnatilgan. Sizda qaysi tayyor bo&apos;lsa, shuni tanlang.
            </p>
            <p className="text-muted leading-relaxed">
              Uzcard yoki Humo bank ilovasi orqali o&apos;tkazma — eski uslub: kartani yozish, SMS kutish. Payme yoki Click bo&apos;lmasa ishlaydi.
            </p>
          </section>

          {/* Section 6 — Safety */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Payme orqali to&apos;lash xavfsizmi?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Payme — Markaziy bank tomonidan litsenziyalangan rasmiy to&apos;lov tizimi. PCI DSS xalqaro xavfsizlik standartiga muvofiq ishlaydi. Millionlab foydalanuvchi uni kommunal to&apos;lovlar, taksi, mobil aloqa va onlayn xaridlarda kunlik foydalanadi. Telegram Premium uchun mexanizm bir xil — alohida xavf yo&apos;q.
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  🔐 Karta ma&apos;lumotlari Payme serverida
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Karta raqami, parol va CVV faqat Payme&apos;ning xavfsiz serverlarida saqlanadi. @PremiumSendBot bu ma&apos;lumotlarni hech qachon ko&apos;rmaydi va ko&apos;ra olmaydi. Bot faqat &quot;kartaga shu summa kelgan&quot; faktini ko&apos;radi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  💰 Pul qaytarish kafolati
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Texnik xato tufayli Premium akkauntda yoqilmasa, to&apos;langan summa to&apos;liq qaytariladi. Payme chek raqami orqali qaytarish jarayoni tezkor — bu standart reseller qoidasi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  📋 Payme PDF chek — huquqiy hujjat
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Payme har o&apos;tkazma uchun PDF formatida chek beradi. Bu ilovada saqlanadi va istalgan paytda qayta yuklash mumkin. Muammo bo&apos;lsa, qo&apos;llab-quvvatlash chek raqami orqali to&apos;lovni darhol topadi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  🛡️ Ikki bosqichli himoya
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Payme — PIN/Face ID + bank balansi tekshiruvi. Bot — username tasdig&apos;i + Premium faollashtirish. Har bosqichda nazorat — biror joyda muammo bo&apos;lsa jarayon to&apos;xtaydi va tushunarli xato xabari beriladi.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Payme orqali Premium sotib olish — sizning oddiy Payme P2P o&apos;tkazmangiz bilan bir xil darajada xavfsiz. Qo&apos;shimcha texnik risk yo&apos;q. Ishonchli reseller&apos;ni tanlash mexanizmlari haqida —{" "}
              <Link
                href="/maqolalar/telegram-premium-xavfsiz-aldovdan-saqlanish"
                className="text-primary font-semibold hover:underline"
              >
                xavfsizlik qo&apos;llanmasi
              </Link>
              .
            </p>
          </section>

          {/* Section 7 — Common issues */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Payme orqali to&apos;lovda uchraydigan muammolar va yechimlar
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Aksariyat Payme orqali to&apos;lovlar muammosiz amalga oshadi. Lekin ba&apos;zan kichik to&apos;siqlar bo&apos;lishi mumkin:
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  Aniq ko&apos;rsatilgan summa o&apos;rniga noto&apos;g&apos;ri summa o&apos;tkazildi
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Eng ko&apos;p uchraydigan sabab. <strong>Yechim:</strong> botdagi qo&apos;llab-quvvatlashga Payme chek raqamini va aniq o&apos;tkazgan summangizni yuboring. 15-30 daqiqada qo&apos;lda tekshiruv bo&apos;lib, Premium yoqiladi yoki farqi qaytariladi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  Payme balansida pul yetmadi
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Payme&apos;ga ulangan kartada balans yetarli bo&apos;lishi kerak. <strong>Yechim:</strong> Payme orqali kartani to&apos;ldiring yoki boshqa kartani tanlang.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  Pul o&apos;tkazildi, lekin Premium 15 daqiqada kelmadi
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Tizim sal uzoqroq qayta ishlanishi mumkin. <strong>Yechim:</strong> 15-20 daqiqa kuting. Faollashmasa — botdagi qo&apos;llab-quvvatlashga Payme chek raqamini yuboring. Manual tekshirishdan so&apos;ng Premium yoqiladi yoki pul qaytariladi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  Payme ilovasi yo&apos;q
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  <strong>Yechim:</strong> Payme ilovasini Play Market (Android) yoki App Store (iPhone) dan bepul yuklang. Telefon raqami bilan ro&apos;yxatdan o&apos;ting (3 daqiqa), Uzcard yoki Humo kartani uling — keyin to&apos;lov bir-ikki bosishda. Yoki bot ko&apos;rsatgan kartaga boshqa ilova (Click ilovasi, Uzcard, bank ilovasi) orqali o&apos;tkazing — natija bir xil.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  Payme PIN kodini unutdim
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  <strong>Yechim:</strong> Payme ilovasidagi &quot;PIN kodni tiklash&quot; bo&apos;limidan foydalaning. Telefon raqami orqali tiklash 5 daqiqa ichida bo&apos;ladi. Tiklab, qaytadan to&apos;lashga harakat qiling.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Aksariyat muammolarni darhol hal qilish mumkin. Bot qo&apos;llab-quvvatlashi har vaziyatda yordam beradi va muqobil yo&apos;l (boshqa ilova orqali o&apos;tkazma) taklif qiladi.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">
              Tez-tez so&apos;raladigan savollar
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Telegram Premium Payme orqali sotib olish mumkinmi?",
                  a: "Ha. @PremiumSendBot da tarif tanlaganingizdan keyin bot karta raqami va aniq summani ko'rsatadi. Siz Payme ilovasidan o'sha kartaga ko'rsatilgan summani o'tkazasiz. Tizim avtomatik aniqlaydi va Premium 5 daqiqada faollashadi.",
                },
                {
                  q: "Payme orqali Telegram Premium qancha turadi?",
                  a: "Narxlar boshqa to'lov usullari bilan bir xil: 1 oylik — 59,000 so'm, 3 oylik — 175,000 so'm, 6 oylik — 235,000 so'm, 12 oylik — 425,000 so'm. Yashirin komissiya yo'q.",
                },
                {
                  q: "Tizim to'lovni qanday aniqlaydi?",
                  a: "Bot har buyurtma uchun aniq summa beradi. Tizim kartaga tushgan to'lovlarni kuzatib, summa va karta kombinatsiyasi bo'yicha sizning buyurtmangizni topadi. Aynan ko'rsatilgan summani o'tkazish — eng tezkor avtomatik yo'l.",
                },
                {
                  q: "Boshqa summa o'tkazsam nima bo'ladi?",
                  a: "Tizim avtomatik moslay olmaydi. Bunday holatda bot qo'llab-quvvatlashga Payme chek raqamini va o'tkazgan aniq summangizni yuborasiz — Premium qo'lda 15-30 daqiqada yoqiladi. Lekin aynan ko'rsatilgan summani o'tkazish — har doim tezroq.",
                },
                {
                  q: "Payme ilovasi yo'q bo'lsa nima qilish kerak?",
                  a: "Payme ilovasini Play Market yoki App Store dan bepul yuklang (3-5 daqiqa). Yoki bot ko'rsatgan kartaga Click ilovasi, Uzcard ilovasi yoki bank ilovasi orqali o'tkazing — natija bir xil bo'ladi.",
                },
                {
                  q: "Payme orqali to'lash xavfsizmi?",
                  a: "Ha. Payme — Markaziy bank litsenziyali, PCI DSS standartiga muvofiq. Karta ma'lumotlari faqat Payme serverida, bot ko'rmaydi. Premium kelmasa pul qaytariladi.",
                },
                {
                  q: "Payme orqali sovg'a qilish mumkinmi?",
                  a: "Ha. 3, 6 va 12 oylik Premium ni sovg'a qilish mumkin: bot username so'raydi (sovg'a oluvchining), siz Payme'dan kartaga o'tkazasiz, Premium o'sha akkauntda faollashadi. 1 oylik sovg'a Telegram qoidasi bo'yicha mavjud emas.",
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 border border-card-border shadow-sm"
                >
                  <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Trust Block */}
          <section>
            <div className="bg-section-alt rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-bold text-foreground mb-4 text-center">
                Payme orqali Premium — raqamlarda
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">
                    1-2 daq.
                  </p>
                  <p className="text-sm text-muted">o&apos;tkazma vaqti</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">5 daq.</p>
                  <p className="text-sm text-muted">Premium faollashish</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">0%</p>
                  <p className="text-sm text-muted">qo&apos;shimcha komissiya</p>
                </div>
              </div>
            </div>
          </section>

          {/* Related cluster links */}
          <section>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-card-border">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Payme orqali muddat bo&apos;yicha qo&apos;llanmalar
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-4">
                Barcha tariflar mavjud. Sizga mos muddatga qarab tanlang:
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/maqolalar/3-oylik-telegram-premium-payme-orqali"
                    className="text-primary font-semibold hover:underline"
                  >
                    3 oylik Premium Payme orqali (175,000 so&apos;m)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/maqolalar/telegram-premium-humo-orqali"
                    className="text-primary font-semibold hover:underline"
                  >
                    Humo karta orqali Premium
                  </Link>
                </li>
                <li>
                  <Link
                    href="/maqolalar/telegram-premium-narxlari"
                    className="text-primary font-semibold hover:underline"
                  >
                    Telegram Premium narxlari taqqoslash (4 ta tarif)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/maqolalar/telegram-premium-eng-arzon-qayerdan-sotib-olish"
                    className="text-primary font-semibold hover:underline"
                  >
                    Telegram Premium eng arzon qayerdan sotib olish
                  </Link>
                </li>
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
                  Payme ilovangiz tayyormi? Telegram Premium ni mahalliy karta o&apos;tkazma orqali oling. 1, 3, 6 yoki 12 oylik tariflar — so&apos;mda, bot ko&apos;rsatgan kartaga Payme&apos;dan aniq summa, 5 daqiqada faollashish.{" "}
                  <strong className="text-white">@PremiumSendBot</strong> da boshlang.
                </p>
                <Link
                  href="https://t.me/premiumsendbot"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  Payme bilan boshlash
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
