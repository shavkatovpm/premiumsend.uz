import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Telegram Premium Humo karta orqali sotib olish — qadamma-qadam qo'llanma 2026",
  description:
    "Telegram Premium Humo karta orqali — 59,000 so'mdan 425,000 so'mgacha. @PremiumSendBot da Humo bilan so'mda to'lov, 5 daqiqada faollashish. Bosqichma-bosqich qo'llanma va xavfsizlik.",
  keywords: [
    "Telegram Premium Humo",
    "Humo orqali Telegram Premium",
    "Telegram Premium Humo karta",
    "Humo Telegram Premium sotib olish",
    "Humo bilan Premium",
    "Telegram Premium humo orqali",
    "PremiumSendBot Humo",
  ],
  alternates: {
    canonical: "https://premiumsend.uz/maqolalar/telegram-premium-humo-orqali",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/telegram-premium-humo-orqali",
      ru: "https://premiumsend.uz/ru/maqolalar/telegram-premium-humo-orqali",
    },
  },
  openGraph: {
    title:
      "Telegram Premium Humo karta orqali sotib olish — qadamma-qadam qo'llanma",
    description:
      "Humo karta bilan Telegram Premium so'mda to'lov. 4 ta tarif (1, 3, 6, 12 oylik), 5 daqiqada faollashish, 0% komissiya.",
    url: "https://premiumsend.uz/maqolalar/telegram-premium-humo-orqali",
    type: "article",
    publishedTime: "2026-05-02",
  },
};

export default function ArticleHumoOrqali() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Telegram Premium Humo karta orqali sotib olish — qadamma-qadam qo'llanma",
    description:
      "Telegram Premium Humo karta bilan O'zbekistonda sotib olish — barcha tariflar, narxlar va bosqichma-bosqich qo'llanma.",
    datePublished: "2026-05-02",
    dateModified: "2026-05-02",
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
      "https://premiumsend.uz/maqolalar/telegram-premium-humo-orqali",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Telegram Premium Humo karta orqali sotib olish mumkinmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha, mumkin. Premium Send da @PremiumSendBot orqali Humo karta bilan to'lab Telegram Premium sotib olish mumkin. Barcha tariflar (1, 3, 6, 12 oylik) qo'llab-quvvatlanadi. To'lov so'mda, komissiyasiz, 5 daqiqada faollashadi.",
        },
      },
      {
        "@type": "Question",
        name: "Humo orqali Telegram Premium qancha turadi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Humo orqali narxlar Uzcard bilan bir xil: 1 oylik — 59,000 so'm, 3 oylik — 175,000 so'm, 6 oylik — 235,000 so'm, 12 oylik — 425,000 so'm. To'lov usuli narxga ta'sir qilmaydi.",
        },
      },
      {
        "@type": "Question",
        name: "Humo karta bilan to'lov xavfsizmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha, xavfsiz. To'lov standart P2P o'tkazma yoki Click/Payme orqali — karta ma'lumotlari saqlanmaydi. Premium kelmasa pul to'liq qaytariladi. Mexanizm Uzcard bilan bir xil darajada xavfsiz.",
        },
      },
      {
        "@type": "Question",
        name: "Humo va Uzcard o'rtasida farq bormi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Premium sotib olish jihatidan farq yo'q — narxlar bir xil, jarayon bir xil, xavfsizlik bir xil. Faqat siz qaysi kartani ko'p ishlatasiz, shuni tanlaysiz. Ba'zi banklar Humo, ba'zilari Uzcard chiqaradi — qaysi sizda bor bo'lsa, shuni ishlating.",
        },
      },
      {
        "@type": "Question",
        name: "Humo orqali to'lab Premium qancha vaqtda faollashadi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To'lov tasdiqlangandan so'ng odatda 2-5 daqiqa ichida Premium avtomatik faollashadi. Texnik kechikish bo'lsa 10-15 daqiqaga cho'zilishi mumkin. Bot qo'llab-quvvatlashi har qanday holatda yordam beradi.",
        },
      },
      {
        "@type": "Question",
        name: "Telegram rasmiy ilovasida Humo bilan to'lab bo'ladimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yo'q. Telegram rasmiy ilovasi faqat Visa, Mastercard, Google Pay va Apple Pay qabul qiladi. Humo va Uzcard bu tizimda ishlamaydi. Mahalliy karta bilan to'lash uchun @PremiumSendBot kabi mahalliy xizmatlar zarur.",
        },
      },
      {
        "@type": "Question",
        name: "Humo orqali sovg'a qilish mumkinmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha. 3, 6 va 12 oylik Telegram Premium ni Humo karta bilan sovg'a qilish mumkin. Username kiritasiz, to'laysiz — Premium o'sha akkauntda faollashadi. Telegram qoidasi bo'yicha 1 oylik sovg'a mavjud emas.",
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
      { "@type": "ListItem", position: 3, name: "Telegram Premium Humo orqali", item: "https://premiumsend.uz/maqolalar/telegram-premium-humo-orqali" },
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
        <span className="text-foreground font-medium">Humo orqali Telegram Premium</span>
      </nav>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">
              Qo&apos;llanma
            </span>
            <time className="text-xs text-muted" dateTime="2026-05-02">
              2026-yil, 2-may
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Telegram Premium Humo karta orqali sotib olish — qadamma-qadam qo&apos;llanma
          </h1>

          {/* TL;DR */}
          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>Qisqacha javob:</strong> Telegram Premium Humo karta orqali sotib olish{" "}
              <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>{" "}
              da amalga oshiriladi. Narxlar: <strong>1 oylik — 59,000 so&apos;m</strong>, <strong>3 oylik — 175,000 so&apos;m</strong>, <strong>6 oylik — 235,000 so&apos;m</strong>, <strong>12 oylik — 425,000 so&apos;m</strong>. To&apos;lov so&apos;mda, komissiyasiz, 5 daqiqada faollashadi.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Humo — O&apos;zbekistonning ikkinchi yirik to&apos;lov tizimi. Uzcard bilan birgalikda mamlakatdagi banklarning aksariyatida ishlaydi. Telegram Premium sotib olishda esa Humo egalari Uzcard egalaridan kam emas — barcha tariflar mavjud, narxlar bir xil, jarayon bir xil.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Ushbu qo&apos;llanma Humo karta orqali Telegram Premium sotib olishning to&apos;liq jarayonini ochib beradi: tariflar va narxlar, bosqichma-bosqich yo&apos;riqnoma, xavfsizlik kafolatlari va eng ko&apos;p uchraydigan savollar.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 — Why Humo */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Nega Humo karta orqali Premium uchun maxsus xizmat kerak?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Telegram rasmiy ilovasi katta xalqaro tizim — Visa, Mastercard, Google Pay, Apple Pay qabul qiladi. Lekin O&apos;zbekistonning milliy to&apos;lov tizimlari — <strong>Humo va Uzcard</strong> — bu xalqaro ekosistemaga kiritilmagan. Humo kartasini Telegramda kiritsangiz, to&apos;lov rad etiladi.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Bu Humo ning texnik kamchiligi emas — Humo O&apos;zbekistonda mukammal ishlaydi. Click, Payme, har qanday mahalliy to&apos;lov shu karta orqali oson amalga oshadi. Muammo Telegramning xalqaro narx siyosatida: ular dollarda taklif qiladi va xorijiy bank tizimlari orqali to&apos;lov oladi.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Yechim:</strong> @PremiumSendBot kabi mahalliy oraliq xizmat. Siz Humo bilan so&apos;mda to&apos;laysiz, xizmat o&apos;z navbatida sizning Telegram akkauntingizda Premium ni faollashtiradi. Siz uchun jarayon oddiy va shaffof.
            </p>

            <div className="bg-section-alt rounded-xl p-5">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Qisqacha:</strong> Humo egalari Telegramda Premium ni to&apos;g&apos;ridan-to&apos;g&apos;ri ololmaydi — chunki Telegram Humo ni qabul qilmaydi. Lekin Premium Send orqali oddiy va xavfsiz sotib olish mumkin. Qo&apos;shimcha karta yoki xorijiy hisob kerak emas.
              </p>
            </div>
          </section>

          {/* Section 2 — Pricing */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Telegram Premium Humo orqali — barcha tariflar narxi
            </h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Narxlar:</strong> 4 ta tarif Humo bilan ham qabul qilinadi. 1 oylik — <strong>59,000 so&apos;m</strong>, 3 oylik — <strong>175,000 so&apos;m</strong>, 6 oylik — <strong>235,000 so&apos;m</strong>, 12 oylik — <strong>425,000 so&apos;m</strong>. Eng tejamkor — yillik tarif (oyiga 35,417 so&apos;m).
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
              Narxlar to&apos;lov usuliga bog&apos;liq emas — Humo, Uzcard, Click, Payme — qaysini tanlasangiz, summa bir xil. Yashirin komissiyalar yo&apos;q. Tariflar haqida batafsil:{" "}
              <Link href="/maqolalar/telegram-premium-narxlari" className="text-primary font-semibold hover:underline">narxlar taqqoslash</Link>.
            </p>
          </section>

          {/* Section 3 — Step by step */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Humo orqali Telegram Premium qanday sotib olinadi? Bosqichma-bosqich
            </h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Qisqa javob:</strong>{" "}
                <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>{" "}
                ni oching → tarifni tanlang → username kiriting → Humo bilan so&apos;mda to&apos;lang → Premium 5 daqiqada faollashadi. Butun jarayon — 5-7 daqiqa.
              </p>
            </div>

            <p className="text-muted leading-relaxed mb-6">
              Quyida har bir bosqich batafsil. Birinchi marta Premium sotib olayotgan bo&apos;lsangiz ham, jarayon oson va aniq:
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  step: "1",
                  title: "Telegramda @PremiumSendBot ni qidiring",
                  desc: "Telegramning yuqori qidiruv qatoriga @PremiumSendBot deb yozing. Tasdiqlangan bot belgisini tekshiring — haqiqiy bot shunday belgi bilan keladi. Oching va /start bosing.",
                },
                {
                  step: "2",
                  title: "Tarifni tanlang",
                  desc: "Bot menyusida 4 ta tarif chiqadi: 1, 3, 6 va 12 oylik. Sinab ko'ryapsizmi — 1 oylik (59,000) yetadi. Doimiy foydalanasizmi — 12 oylik (425,000) eng tejamkor. Balansli — 6 oylik (235,000).",
                },
                {
                  step: "3",
                  title: "Premium kerak akkauntning username ini kiriting",
                  desc: "@belgisidan keyin Telegram username ni yozing. Bu o'zingizning yoki sovg'a olayotganingiz uchun boshqa odam akkaunti. Xato yozmaslik muhim — Premium aynan o'sha akkauntda faollashadi.",
                },
                {
                  step: "4",
                  title: "To'lov usulini tanlang — Humo",
                  desc: "Ekranda 4 ta variant ko'rinadi: Uzcard, Humo, Click, Payme. \"Humo\" ni bosing. Bot keyingi qadam — to'lov usulini tushuntiradi (P2P, Click ilovasi yoki Payme ilovasi orqali).",
                },
                {
                  step: "5",
                  title: "Humo karta bilan to'lang",
                  desc: "Bot taklif qilgan usulda Humo kartangizdan to'lov amalga oshiring. Eng oson yo'l — Click yoki Payme orqali (kartani ulagan bo'lsangiz). Yoki to'g'ridan-to'g'ri Humo P2P o'tkazma. Komissiya 0%.",
                },
                {
                  step: "6",
                  title: "Premium 5 daqiqada faollashadi",
                  desc: "To'lov tasdiqlangach, akkauntda Premium avtomatik yoqiladi. Bot xabar yuboradi. Qo'shimcha tasdiqlash kerak emas. Texnik kechikish bo'lsa 10-15 daqiqaga cho'zilishi mumkin.",
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
              Butun jarayon — 5-7 daqiqa. Premium yoqilgach, tanlangan muddat davomida hech qanday qayta to&apos;lov kerak emas. Muddat tugashiga yaqin yangidan tarif tanlaysiz.
            </p>
          </section>

          {/* Mid CTA */}
          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Humo kartangiz tayyormi?{" "}
                <strong className="text-white">@PremiumSendBot</strong> da 1, 3, 6 yoki 12 oylik Premium ni so&apos;mda to&apos;lab oling. Faollashish — 5 daqiqada.
              </p>
              <Link
                href="https://t.me/premiumsendbot"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                @PremiumSendBot — boshlash
              </Link>
            </div>
          </section>

          {/* Section 4 — Humo vs Uzcard */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Humo va Uzcard: Premium uchun farqi bormi?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Ko&apos;p foydalanuvchilarda ikkala karta ham bor. Yoki tanlash kerak bo&apos;lsa — qaysi biri afzal? Premium sotib olish jihatidan farq juda kichik. Quyida — taqqoslash:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Parametr</div>
                <div className="text-center">Humo</div>
                <div className="text-center">Uzcard</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Premium narxi</div>
                <div className="text-center text-primary font-bold">Bir xil</div>
                <div className="text-center text-primary font-bold">Bir xil</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Click bilan to&apos;lov</div>
                <div className="text-center">✅ Mavjud</div>
                <div className="text-center">✅ Mavjud</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Payme bilan to&apos;lov</div>
                <div className="text-center">✅ Mavjud</div>
                <div className="text-center">✅ Mavjud</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">P2P o&apos;tkazma</div>
                <div className="text-center">✅ Mavjud</div>
                <div className="text-center">✅ Mavjud</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Komissiya</div>
                <div className="text-center text-green-600 font-bold">0%</div>
                <div className="text-center text-green-600 font-bold">0%</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Faollashish vaqti</div>
                <div className="text-center">5 daqiqa</div>
                <div className="text-center">5 daqiqa</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center text-sm">
                <div className="font-medium">Bank qamrovi</div>
                <div className="text-center">Aksariyat banklar</div>
                <div className="text-center">Aksariyat banklar</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Xulosa:</strong> Premium sotib olish nuqtai nazaridan Humo va Uzcard butunlay teng. Qaysi karta sizda bor bo&apos;lsa — shuni ishlating. Ikkalasini birdaniga yoki almashtirib ishlatish ham mumkin.
            </p>

            <p className="text-muted leading-relaxed">
              Uzcard bo&apos;yicha alohida qo&apos;llanmalar:{" "}
              <Link href="/maqolalar/1-oylik-telegram-premium-uzcard-orqali-sotib-olish" className="text-primary font-semibold hover:underline">1 oylik</Link>,{" "}
              <Link href="/maqolalar/3-oylik-telegram-premium-uzcard-orqali" className="text-primary font-semibold hover:underline">3 oylik</Link>,{" "}
              <Link href="/maqolalar/6-oylik-telegram-premium-uzcard-orqali" className="text-primary font-semibold hover:underline">6 oylik</Link>,{" "}
              <Link href="/maqolalar/12-oylik-telegram-premium-uzcard-orqali" className="text-primary font-semibold hover:underline">12 oylik</Link>.
            </p>
          </section>

          {/* Section 5 — Safety */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Humo karta bilan to&apos;lash xavfsizmi?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              To&apos;lov xavfsizligi haqidagi xavotir tabiiy. Humo orqali Premium sotib olishda mexanizm shunday: <strong>siz to&apos;lovni o&apos;zingizning bank ilovangiz ichida amalga oshirasiz</strong>. Bot yoki sayt karta ma&apos;lumotlarini (raqam, parol, SMS kod, CVV) so&apos;ramaydi.
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">🔐 Karta ma&apos;lumotlari saqlanmaydi</h3>
                <p className="text-sm text-muted leading-relaxed">
                  To&apos;lov P2P o&apos;tkazma yoki Click/Payme orqali — har ikkala usulda karta raqami va parolingiz faqat bank tizimida qoladi. @PremiumSendBot bu ma&apos;lumotlarni hech qachon ko&apos;rmaydi yoki saqlamaydi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">💰 Pul qaytarish kafolati</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Texnik sababga ko&apos;ra Premium akkauntda yoqilmasa, to&apos;lov to&apos;liq qaytariladi. Bu standart qoida — har qanday reseller xizmat uchun. Amaliyotda bunday holatlar kam — faollashtirish avtomatik va ishonchli.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">📋 Chek hujjat sifatida</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Humo, Click yoki Payme har o&apos;tkazma uchun aniq chek yaratadi. Bu sizning huquqiy hujjatingiz. Muammo bo&apos;lsa, qo&apos;llab-quvvatlash chek orqali to&apos;lovni aniq topadi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">🛡️ Premium Send sinov vaqti</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Yillar davomida ishlab kelmoqda. Mahalliy bozorda tanilgan — minglab foydalanuvchilar Humo va Uzcard orqali Premium ni muvaffaqiyatli sotib olgan. Ishonch raqamlarda emas, jarayon barqarorligida ko&apos;rinadi.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Qisqacha: Humo orqali Premium to&apos;lash sizning standart bank to&apos;lovingiz darajasida xavfsiz. Qo&apos;shimcha risk yo&apos;q.
            </p>
          </section>

          {/* Section 6 — Common issues */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Humo orqali to&apos;lovda uchraydigan muammolar va yechimlar
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Aksariyat to&apos;lovlar muammosiz amalga oshadi. Lekin ba&apos;zan bank tizimi tomonidan kichik to&apos;siqlar paydo bo&apos;lishi mumkin. Quyida — eng ko&apos;p uchraydigan holatlar:
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Internet to&apos;lov limiti yetmaydi</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Ba&apos;zi banklarda kunlik internet to&apos;lov limiti past — masalan, 200,000 so&apos;m. Agar 425,000 so&apos;m to&apos;lash kerak bo&apos;lsa, limit yetmaydi. <strong>Yechim:</strong> Humo mobil ilovangizdan kunlik internet to&apos;lov limitini vaqtincha oshiring (odatda 1,000,000 so&apos;mgacha).
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">SMS kod kelmaydi</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Tarmoq kechikishi yoki SMS-Informing xizmati o&apos;chirilgan bo&apos;lishi mumkin. <strong>Yechim:</strong> push-notification orqali tasdiqlashga o&apos;ting yoki bank operatoriga qo&apos;ng&apos;iroq qilib SMS xizmatini faollashtiring.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Pul yechildi, lekin Premium yoqilmadi</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Tizim sal uzoqroq qayta ishlanishi mumkin. <strong>Yechim:</strong> 10-15 daqiqa kuting. Agar baribir faollashmasa — botdagi qo&apos;llab-quvvatlashga to&apos;lov chekini yuboring. Manual tekshirishdan so&apos;ng Premium yoqiladi yoki pul qaytariladi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Username noto&apos;g&apos;ri kiritilgan</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Bu eng xavfli xato. Premium siz xohlagan akkauntda emas, boshqasida yoqiladi. <strong>Yechim:</strong> 3-bosqichda username ni ikki marta tekshiring. Xato bo&apos;lsa, darhol botda qo&apos;llab-quvvatlashga murojaat qiling.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Bank operatsiyani rad etadi</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Xavfsizlik tizimi yangi yoki katta o&apos;tkazmalarni vaqtincha bloklashi mumkin. <strong>Yechim:</strong> bankka qo&apos;ng&apos;iroq qilib operatsiyani tasdiqlang yoki boshqa to&apos;lov usuliga (Click/Payme) o&apos;ting.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Aksariyat muammolarni darhol hal qilish mumkin. Bot qo&apos;llab-quvvatlashi har qanday vaziyatda yordam beradi va muqobil yo&apos;l taklif qiladi.
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
                  q: "Telegram Premium Humo karta orqali sotib olish mumkinmi?",
                  a: "Ha, mumkin. @PremiumSendBot orqali Humo karta bilan to'lab Telegram Premium sotib olish mumkin. Barcha tariflar (1, 3, 6, 12 oylik) qo'llab-quvvatlanadi. To'lov so'mda, komissiyasiz, 5 daqiqada faollashadi.",
                },
                {
                  q: "Humo orqali Telegram Premium qancha turadi?",
                  a: "Narxlar Uzcard bilan bir xil: 1 oylik — 59,000 so'm, 3 oylik — 175,000 so'm, 6 oylik — 235,000 so'm, 12 oylik — 425,000 so'm. To'lov usuli narxga ta'sir qilmaydi.",
                },
                {
                  q: "Humo karta bilan to'lov xavfsizmi?",
                  a: "Ha. To'lov standart P2P o'tkazma yoki Click/Payme orqali — karta ma'lumotlari saqlanmaydi. Premium kelmasa pul to'liq qaytariladi. Mexanizm Uzcard bilan bir xil darajada xavfsiz.",
                },
                {
                  q: "Humo va Uzcard o'rtasida farq bormi?",
                  a: "Premium sotib olish jihatidan farq yo'q — narxlar bir xil, jarayon bir xil. Faqat siz qaysi kartani ko'p ishlatasiz, shuni tanlaysiz.",
                },
                {
                  q: "Humo orqali to'lab Premium qancha vaqtda faollashadi?",
                  a: "To'lov tasdiqlangandan so'ng odatda 2-5 daqiqa ichida Premium avtomatik faollashadi. Texnik kechikish bo'lsa 10-15 daqiqaga cho'zilishi mumkin.",
                },
                {
                  q: "Telegram rasmiy ilovasida Humo bilan to'lab bo'ladimi?",
                  a: "Yo'q. Telegram rasmiy ilovasi faqat Visa, Mastercard, Google Pay va Apple Pay qabul qiladi. Humo va Uzcard bu tizimda ishlamaydi. Mahalliy karta uchun @PremiumSendBot kerak.",
                },
                {
                  q: "Humo orqali sovg'a qilish mumkinmi?",
                  a: "Ha. 3, 6 va 12 oylik Premium ni Humo bilan sovg'a qilish mumkin. Username kiritasiz, to'laysiz — Premium o'sha akkauntda faollashadi. Telegram qoidasi bo'yicha 1 oylik sovg'a mavjud emas.",
                },
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
                Humo orqali Premium — raqamlarda
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">59K</p>
                  <p className="text-sm text-muted">eng arzon tarif (1 oylik)</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">5 daq.</p>
                  <p className="text-sm text-muted">faollashish vaqti</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">0%</p>
                  <p className="text-sm text-muted">qo&apos;shimcha komissiya</p>
                </div>
              </div>
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
                  Humo karta egalari uchun Telegram Premium — endi to&apos;sqinliksiz mavjud. 1 oylikdan 12 oylikgacha barcha tariflar, so&apos;mda to&apos;lov, 5 daqiqada faollashish.{" "}
                  <strong className="text-white">@PremiumSendBot</strong> da bir necha bosishda boshlang — sinab ko&apos;ring 1 oylikdan, doimiy foydalanuvchi bo&apos;lsangiz 12 oylikni tanlang.
                </p>
                <Link
                  href="https://t.me/premiumsendbot"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  Humo bilan boshlash
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
