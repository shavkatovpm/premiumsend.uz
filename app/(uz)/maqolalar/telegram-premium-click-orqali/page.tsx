import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Telegram Premium Click orqali sotib olish — kartaga o'tkazma, qadamma-qadam",
  description:
    "Telegram Premium Click ilovasi orqali — 59,000 so'mdan 425,000 so'mgacha. @PremiumSendBot karta va aniq summani ko'rsatadi, Click ilovasidan o'tkazasiz, Premium 5 daqiqada faollashadi.",
  keywords: [
    "Telegram Premium Click",
    "Click orqali Telegram Premium",
    "Telegram Premium Click ilovasi",
    "Click bilan Premium",
    "Click orqali premium sotib olish",
    "Telegram Premium so'mda",
    "PremiumSendBot Click",
  ],
  alternates: {
    canonical: "https://premiumsend.uz/maqolalar/telegram-premium-click-orqali",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/telegram-premium-click-orqali",
      ru: "https://premiumsend.uz/ru/maqolalar/telegram-premium-click-orqali",
    },
  },
  openGraph: {
    title:
      "Telegram Premium Click orqali sotib olish — qadamma-qadam",
    description:
      "Click ilovasi orqali Telegram Premium uchun kartaga o'tkazma. 4 ta tarif, so'mda, komissiyasiz.",
    url: "https://premiumsend.uz/maqolalar/telegram-premium-click-orqali",
    type: "article",
    publishedTime: "2026-05-05",
  },
};

export default function ArticleClickOrqali() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Telegram Premium Click orqali sotib olish — qadamma-qadam qo'llanma",
    description:
      "Telegram Premium ni Click ilovasi orqali O'zbekistonda sotib olish — bot ko'rsatgan kartaga Click'dan o'tkazma, barcha tariflar va narxlar.",
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
      "https://premiumsend.uz/maqolalar/telegram-premium-click-orqali",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Telegram Premium Click orqali sotib olish mumkinmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha. @PremiumSendBot da tarif tanlaganingizdan keyin bot karta raqami va aniq to'lov summasini ko'rsatadi. Siz Click ilovasidan o'sha kartaga ko'rsatilgan summani o'tkazasiz. Tizim avtomatik aniqlab, Premium ni 5 daqiqada akkauntga yoqadi. Barcha tariflar (1, 3, 6, 12 oylik) qo'llab-quvvatlanadi.",
        },
      },
      {
        "@type": "Question",
        name: "Click orqali Telegram Premium qancha turadi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Narxlar boshqa to'lov usullari bilan bir xil: 1 oylik — 59,000 so'm, 3 oylik — 175,000 so'm, 6 oylik — 235,000 so'm, 12 oylik — 425,000 so'm. To'lov usuli (Click, Payme, Uzcard, Humo, bank ilovasi orqali kartaga o'tkazma) narxga ta'sir qilmaydi. Click qo'shimcha komissiya olmaydi.",
        },
      },
      {
        "@type": "Question",
        name: "Click orqali to'lash qanday ishlaydi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mexanizm oddiy: bot tarif va username asosida sizga karta raqami va aniq summa beradi. Siz Click ilovasini ochasiz, 'Boshqa kartaga o'tkazma' funksiyasini tanlaysiz, ko'rsatilgan kartaga aynan o'sha summani o'tkazasiz. Click PIN/Face ID bilan tasdiqlaydi. Tizim 1-5 daqiqada to'lovni aniqlab, Premium siz bergan @username'da faollashtiradi.",
        },
      },
      {
        "@type": "Question",
        name: "Aynan ko'rsatilgan summani o'tkazish nega muhim?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tizim to'lovni karta va summa kombinatsiyasi orqali aniqlaydi. Agar boshqa summa o'tkazsangiz, tizim avtomatik moslay olmaydi va Premium qo'lda yoqilishi uchun qo'llab-quvvatlashga murojaat qilish kerak bo'ladi. Botda ko'rsatilgan summani aynan o'tkazish — eng tezkor yo'l.",
        },
      },
      {
        "@type": "Question",
        name: "Click ilovasi yo'q bo'lsa Premium olish mumkinmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha. Click — bu shunchaki kartaga pul o'tkazish vositasi. Boshqa istalgan ilovadan (Payme, Uzcard ilovasi, Humo, bank ilovasi) ham bot ko'rsatgan kartaga o'sha summani o'tkazsangiz, natija bir xil — tizim aniqlaydi va Premium o'tadi.",
        },
      },
      {
        "@type": "Question",
        name: "Click orqali to'lash xavfsizmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha. Click — Markaziy bank tomonidan litsenziyalangan rasmiy to'lov tizimi. Karta ma'lumotlari faqat Click ilovasida saqlanadi, bot ko'rmaydi. Har P2P o'tkazma uchun PDF chek beriladi. Premium kelmasa to'langan summa to'liq qaytariladi.",
        },
      },
      {
        "@type": "Question",
        name: "Telegram rasmiy ilovasida Click orqali to'lab bo'ladimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yo'q. Telegram rasmiy ilovasi faqat Visa, Mastercard, Google Pay va Apple Pay qabul qiladi. Click bu tizimda mavjud emas. Mahalliy to'lov uchun @PremiumSendBot kabi mahalliy oraliq xizmat zarur — siz Click'dan kartaga o'tkazasiz, tizim Telegram'ga Premium gift jo'natadi.",
        },
      },
      {
        "@type": "Question",
        name: "Click orqali sovg'a qilish mumkinmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha. 3, 6 va 12 oylik Telegram Premium ni Click orqali to'lab boshqa odamga sovg'a qilish mumkin. Bot username so'raydi, Click'dan kartaga summa o'tkazasiz, Premium o'sha akkauntda faollashadi. Telegram qoidasi bo'yicha 1 oylik sovg'a mavjud emas.",
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
      { "@type": "ListItem", position: 3, name: "Telegram Premium Click orqali", item: "https://premiumsend.uz/maqolalar/telegram-premium-click-orqali" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-muted">
        <Link href="/" className="hover:text-primary">Bosh sahifa</Link>
        <span className="mx-2">/</span>
        <Link href="/maqolalar" className="hover:text-primary">Maqolalar</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">Click orqali Telegram Premium</span>
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
            Telegram Premium Click orqali sotib olish — qadamma-qadam qo&apos;llanma
          </h1>

          {/* TL;DR */}
          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>Qisqacha javob:</strong> Telegram Premium Click ilovasi orqali sotib olish jarayoni —{" "}
              <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>{" "}
              da tarifni tanlaysiz, bot sizga <strong>karta raqami va aniq summani</strong> ko&apos;rsatadi, siz Click ilovasidan shu kartaga o&apos;sha summani o&apos;tkazasiz. Tizim avtomatik aniqlab, Premium ni 5 daqiqada akkauntga yoqadi. Narxlar: <strong>1 oylik — 59,000 so&apos;m</strong>, <strong>3 oylik — 175,000</strong>, <strong>6 oylik — 235,000</strong>, <strong>12 oylik — 425,000 so&apos;m</strong>. Komissiya 0%.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Click — O&apos;zbekistondagi eng keng tarqalgan mobil to&apos;lov ilovalaridan biri. Karta ulangan ilova orqali har qanday onlayn to&apos;lov yoki boshqa kartaga o&apos;tkazma bir-ikki bosishda amalga oshadi. Telegram Premium sotib olishda Click aynan shu &quot;kartaga o&apos;tkazma&quot; funksiyasini ishlatadi.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Ushbu pillar qo&apos;llanma Click ilovasi orqali Telegram Premium sotib olishning to&apos;liq jarayonini ochib beradi: bot va Click o&apos;rtasidagi mexanizm, qaysi tariflar mavjud, bosqichma-bosqich yo&apos;riqnoma, xavfsizlik va eng ko&apos;p uchraydigan savollar.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 — Mechanism */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Bot va Click qanday ishlaydi — to&apos;lov mexanizmi
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Mexanizmni tushunib olish, qolgan jarayon o&apos;ziga oydinlashtiradi. Quyidagi sxema oddiy va shaffof:
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">1. Bot karta va summani ko&apos;rsatadi</h3>
                <p className="text-sm text-muted leading-relaxed">
                  @PremiumSendBot da tarif (1, 3, 6 yoki 12 oylik) va Premium kerak akkaunt username&apos;ini kiritganingizdan so&apos;ng, bot ekranda <strong>karta raqami</strong> va <strong>aniq to&apos;lov summasi</strong>ni chiqaradi. Masalan: 175 000 so&apos;m va 8600 0000 0000 0000 raqamli karta.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">2. Click ilovasidan kartaga o&apos;tkazasiz</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Click ilovasini ochib, &quot;Boshqa kartaga o&apos;tkazma&quot; (yoki &quot;P2P o&apos;tkazma&quot;) funksiyasini tanlang. Bot ko&apos;rsatgan karta raqamini va <strong>aynan o&apos;sha summani</strong> kiriting. Click PIN yoki Face ID bilan tasdiqlashni so&apos;raydi — odatdagi P2P o&apos;tkazmadek.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">3. Tizim to&apos;lovni avtomatik aniqlaydi</h3>
                <p className="text-sm text-muted leading-relaxed">
                  To&apos;lov tasdiqlangach, tizim 1-5 daqiqa ichida tushgan summani aniqlaydi (karta va aynan ko&apos;rsatilgan summa kombinatsiyasi orqali). Sizdan hech qanday qo&apos;shimcha harakat talab qilinmaydi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">4. Premium akkauntga avtomatik yoqiladi</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Tizim siz bergan @username&apos;ga Telegram&apos;ning rasmiy gift mexanizmi orqali Premium ni yuboradi. Bot xabar yuboradi, profilda Premium belgi paydo bo&apos;ladi. Texnik kechikish bo&apos;lsa 10-15 daqiqaga cho&apos;zilishi mumkin.
                </p>
              </div>
            </div>

            <div className="bg-section-alt rounded-xl p-5">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Asosiy fakt:</strong> Click — bu kartaga pul o&apos;tkazish vositasi. Bot to&apos;lovni Click ichidan emas, balki <strong>kartaga tushgan summani avtomatik aniqlash</strong> orqali oladi. Shuning uchun Click ilovasi ichida &quot;PremiumSend&quot; tugmasi yo&apos;q — siz odatdagi P2P o&apos;tkazmani ishlatasiz.
              </p>
            </div>
          </section>

          {/* Section 2 — Pricing */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Telegram Premium Click orqali — barcha tariflar narxi
            </h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Narxlar:</strong> 1 oylik — <strong>59,000 so&apos;m</strong>, 3 oylik — <strong>175,000 so&apos;m</strong>, 6 oylik — <strong>235,000 so&apos;m</strong>, 12 oylik — <strong>425,000 so&apos;m</strong>. Bot ko&apos;rsatgan summa aynan shu — qo&apos;shimcha komissiya yo&apos;q. Click P2P o&apos;tkazma ham komissiyasiz.
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
                <div className="text-center font-bold text-primary">425,000 so&apos;m</div>
                <div className="text-center font-bold text-primary">35,417 so&apos;m</div>
                <div className="text-center text-green-600 font-bold">39%</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Bot ko&apos;rsatgan summani Click&apos;ga aynan kiritish muhim — chunki tizim to&apos;lovni summa va karta kombinatsiyasi orqali aniqlaydi. Tariflar haqida batafsil:{" "}
              <Link href="/maqolalar/telegram-premium-narxlari" className="text-primary font-semibold hover:underline">narxlar taqqoslash maqolasi</Link>.
            </p>
          </section>

          {/* Section 3 — Step by step */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Click orqali Telegram Premium qanday sotib olinadi? Bosqichma-bosqich
            </h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Qisqa javob:</strong>{" "}
                <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>{" "}
                ni oching → tarifni tanlang → username kiriting → bot karta va summani beradi → Click ilovasidan kartaga aynan shu summani o&apos;tkazasiz → Premium 5 daqiqada faollashadi.
              </p>
            </div>

            <p className="text-muted leading-relaxed mb-6">
              Quyida har bir bosqich batafsil. Click ilovasi telefoningizda o&apos;rnatilgan va karta ulangan bo&apos;lsa — jarayon haqiqatan 3-5 daqiqa ichida tugaydi:
            </p>

            <div className="space-y-4 mb-6">
              {[
                { step: "1", title: "Telegramda @PremiumSendBot ni qidiring", desc: "Telegram qidiruv qatoriga @PremiumSendBot deb yozing. Tasdiqlangan belgi bilan rasmiy bot chiqadi. Oching va /start tugmasini bosing." },
                { step: "2", title: "Tarifni tanlang", desc: "Bot 4 ta tarif chiqaradi: 1, 3, 6 va 12 oylik. Sinash uchun 1 oylik (59,000) yetadi, doimiy uchun 12 oylik (425,000) eng arzon." },
                { step: "3", title: "Premium kerak akkaunt username'ini kiriting", desc: "@belgisidan keyin Telegram username yozing. Bu o'zingizning yoki sovg'a olayotgan kishining akkaunti. Xato bo'lsa Premium boshqa akkauntda faollashadi — ikki marta tekshiring." },
                { step: "4", title: "Bot karta raqami va summani ko'rsatadi", desc: "Ekranda karta raqami va aniq to'lov summasi chiqadi. Bot izoh sifatida tekshiruv kodi ham berishi mumkin." },
                { step: "5", title: "Click ilovasini oching va P2P o'tkazma boshlang", desc: "Click ilovasiga kiring. \"Boshqa kartaga o'tkazma\" funksiyasini tanlang. Bot ko'rsatgan karta raqamini kiriting." },
                { step: "6", title: "Aynan ko'rsatilgan summani kiriting va tasdiqlang", desc: "Summani aynan bot ko'rsatgan miqdorda kiriting. 100 so'm farq ham tizimga to'lovni avtomatik aniqlashga to'sqinlik qiladi. PIN yoki Face ID bilan tasdiqlang." },
                { step: "7", title: "Premium 5 daqiqada faollashadi", desc: "Click to'lovni tasdiqlangach, tizim 1-5 daqiqada summani aniqlaydi va Premium siz bergan akkauntda yoqiladi." },
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
              Aksariyat Click foydalanuvchilari butun jarayonni 3-5 daqiqa ichida yakunlaydi. Premium yoqilgach, tarifning butun davomida hech qanday qayta to&apos;lov so&apos;ralmaydi.
            </p>
          </section>

          {/* Mid CTA */}
          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Click ilovangiz tayyormi?{" "}
                <strong className="text-white">@PremiumSendBot</strong> da tarif tanlang, karta raqami va summani olib, Click&apos;dan o&apos;tkazing. Premium 5 daqiqada akkauntda.
              </p>
              <Link href="https://t.me/premiumsendbot" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                @PremiumSendBot — boshlash
              </Link>
            </div>
          </section>

          {/* Section 4 — Why exact amount */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Nima uchun aynan ko&apos;rsatilgan summani o&apos;tkazish kerak?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Bot to&apos;lovingizni qanday topadi degan savol asosli. Mexanizm shunday qurilgan:
            </p>
            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li>Bot har buyurtma uchun <strong>aniq summa</strong> generatsiya qiladi</li>
              <li>Tizim kartaga tushgan to&apos;lovlarni doimo kuzatib turadi</li>
              <li>Sizning to&apos;lovingiz aynan o&apos;sha summada tushganida — tizim uni sizning buyurtmangiz bilan moslaydi</li>
              <li>Premium siz bergan @username&apos;ga avtomatik yoqiladi</li>
            </ul>
            <p className="text-muted leading-relaxed">
              Agar siz boshqa summani o&apos;tkazsangiz, tizim avtomatik moslay olmaydi. Bunday hollarda bot qo&apos;llab-quvvatlashga murojaat qilib, Click chek raqamini yuborasiz va Premium qo&apos;lda yoqiladi (15-30 daqiqa). Lekin <strong>aynan ko&apos;rsatilgan summa</strong> — tezkor avtomatik yo&apos;l.
            </p>
          </section>

          {/* Section 5 — Click vs other apps */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Click va boshqa ilovalar — qaysi biri qulayroq?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Bot ko&apos;rsatgan kartaga o&apos;tkazmani siz <strong>istalgan ilova</strong> orqali amalga oshirishingiz mumkin. Natija bir xil:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Ilova</div>
                <div className="text-center">O&apos;tkazma vaqti</div>
                <div className="text-center">Karta yozish</div>
                <div className="text-center">Tasdiq</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm bg-primary-light/20">
                <div className="font-bold text-primary">Click</div>
                <div className="text-center text-green-600 font-bold">1-2 daqiqa</div>
                <div className="text-center text-green-600">Yo&apos;q*</div>
                <div className="text-center">PIN/Face ID</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Payme</div>
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
              * Click va Payme ilovalarida o&apos;z karta saqlangan bo&apos;ladi — har o&apos;tkazmada raqamingizni yozish kerak emas. Lekin <strong>qabul qiluvchi karta raqamini</strong> har holda kiritishga to&apos;g&apos;ri keladi.
            </p>

            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">Xulosa:</strong> Click va Payme — eng tezkor variantlar. Aksariyat foydalanuvchilarda ikkalasi ham o&apos;rnatilgan. Sizda qaysi qulay bo&apos;lsa, shuni tanlang —{" "}
              <Link href="/maqolalar/telegram-premium-payme-orqali" className="text-primary font-semibold hover:underline">Payme pillar qo&apos;llanma</Link>.
            </p>
          </section>

          {/* Section 6 — Safety */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Click orqali to&apos;lash xavfsizmi?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Click — Markaziy bank tomonidan litsenziyalangan rasmiy to&apos;lov tizimi. Millionlab foydalanuvchi uni kommunal to&apos;lovlar, mobil aloqa va shu kabi xizmatlarda ishlatadi. Telegram Premium uchun mexanizm bir xil — alohida xavf yo&apos;q.
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">🔐 Karta ma&apos;lumotlari Click serverida</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Karta raqami, parol va CVV faqat Click&apos;ning xavfsiz serverlarida saqlanadi. Bot bu ma&apos;lumotlarni hech qachon ko&apos;rmaydi. Bot faqat &quot;kartaga shu summa kelgan&quot; faktini ko&apos;radi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">💰 Pul qaytarish kafolati</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Texnik xato tufayli Premium akkauntda yoqilmasa, to&apos;langan summa to&apos;liq qaytariladi. Click chek raqami orqali qaytarish jarayoni tezkor.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">📋 Click PDF chek — huquqiy hujjat</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Click har P2P o&apos;tkazma uchun PDF formatida chek beradi. Muammo bo&apos;lsa, qo&apos;llab-quvvatlash chek raqami orqali to&apos;lovni darhol topadi.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Click orqali Premium sotib olish — sizning oddiy Click P2P o&apos;tkazmangiz bilan bir xil darajada xavfsiz. Ishonchli reseller&apos;ni tanlash haqida —{" "}
              <Link href="/maqolalar/telegram-premium-xavfsiz-aldovdan-saqlanish" className="text-primary font-semibold hover:underline">xavfsizlik qo&apos;llanmasi</Link>.
            </p>
          </section>

          {/* Section 7 — Common issues */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Click orqali to&apos;lovda uchraydigan muammolar
            </h2>
            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Aniq summa o&apos;rniga noto&apos;g&apos;ri summa o&apos;tkazildi</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Eng ko&apos;p uchraydigan sabab. <strong>Yechim:</strong> botdagi qo&apos;llab-quvvatlashga Click chek raqamini va o&apos;tkazgan aniq summangizni yuboring. 15-30 daqiqada qo&apos;lda tekshiruv bo&apos;lib, Premium yoqiladi yoki farqi qaytariladi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Click ilovasida balans yetmaydi</h3>
                <p className="text-sm text-muted leading-relaxed">
                  <strong>Yechim:</strong> Click ichida kartani tekshiring. Balansni to&apos;ldiring yoki boshqa kartani tanlang.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Pul yechildi, lekin Premium kelmadi</h3>
                <p className="text-sm text-muted leading-relaxed">
                  <strong>Yechim:</strong> 10-15 daqiqa kuting. Faollashmasa — botdagi qo&apos;llab-quvvatlashga Click chek raqamini yuboring. Manual tekshirishdan so&apos;ng Premium yoqiladi yoki pul qaytariladi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Click ilovasi yo&apos;q</h3>
                <p className="text-sm text-muted leading-relaxed">
                  <strong>Yechim:</strong> Click ilovasini Play Market yoki App Store dan bepul yuklang. Yoki bot ko&apos;rsatgan kartaga Payme, Uzcard ilovasi yoki bank ilovasi orqali ham o&apos;tkazsangiz natija bir xil.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">
              Tez-tez so&apos;raladigan savollar
            </h2>
            <div className="space-y-4">
              {[
                { q: "Telegram Premium Click orqali sotib olish mumkinmi?", a: "Ha. Bot karta va summani ko'rsatadi, siz Click ilovasidan o'sha kartaga summani o'tkazasiz. Tizim avtomatik aniqlaydi va Premium 5 daqiqada faollashadi." },
                { q: "Click orqali Telegram Premium qancha turadi?", a: "1 oylik — 59,000, 3 oylik — 175,000, 6 oylik — 235,000, 12 oylik — 425,000 so'm. Click qo'shimcha komissiya olmaydi." },
                { q: "Tizim to'lovni qanday aniqlaydi?", a: "Bot har buyurtma uchun aniq summa beradi. Tizim kartaga tushgan to'lovlarni kuzatib, summa va karta kombinatsiyasi bo'yicha buyurtmangizni topadi." },
                { q: "Click ilovasi yo'q bo'lsa nima qilish kerak?", a: "Click ilovasini Play Market yoki App Store dan bepul yuklang. Yoki bot ko'rsatgan kartaga Payme, Uzcard ilovasi yoki bank ilovasi orqali o'tkazing." },
                { q: "Click orqali to'lash xavfsizmi?", a: "Ha. Click — Markaziy bank litsenziyali. Karta ma'lumotlari faqat Click serverida, bot ko'rmaydi. Premium kelmasa pul qaytariladi." },
                { q: "Telegram rasmiy ilovasida Click bilan to'lab bo'ladimi?", a: "Yo'q. Telegram faqat Visa, Mastercard, Google Pay va Apple Pay qabul qiladi. Click bu tizimda yo'q." },
                { q: "Click orqali sovg'a qilish mumkinmi?", a: "Ha. 3, 6 va 12 oylik Premium ni Click bilan to'lab boshqa odamga sovg'a qilish mumkin. Bot username so'raydi, Click'dan kartaga summa o'tkazasiz, Premium o'sha akkauntda faollashadi." },
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
              <h3 className="text-lg font-bold text-foreground mb-4 text-center">
                Click orqali Premium — raqamlarda
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">1-2 daq.</p>
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
              <h3 className="text-lg font-bold text-foreground mb-4">Click orqali muddat bo&apos;yicha qo&apos;llanmalar</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/maqolalar/3-oylik-telegram-premium-click-orqali" className="text-primary font-semibold hover:underline">3 oylik Premium Click orqali (175,000 so&apos;m)</Link></li>
                <li><Link href="/maqolalar/telegram-premium-payme-orqali" className="text-primary font-semibold hover:underline">Payme orqali Premium (taqqoslash uchun)</Link></li>
                <li><Link href="/maqolalar/telegram-premium-humo-orqali" className="text-primary font-semibold hover:underline">Humo karta orqali Premium</Link></li>
                <li><Link href="/maqolalar/telegram-premium-narxlari" className="text-primary font-semibold hover:underline">Telegram Premium narxlari taqqoslash</Link></li>
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
                  Click ilovangiz tayyormi? Telegram Premium ni mahalliy karta o&apos;tkazma orqali oling. So&apos;mda, bot ko&apos;rsatgan kartaga Click&apos;dan aniq summa, 5 daqiqada faollashish.{" "}
                  <strong className="text-white">@PremiumSendBot</strong> da bir necha bosishda boshlang.
                </p>
                <Link href="https://t.me/premiumsendbot" target="_blank" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  Click bilan boshlash
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
