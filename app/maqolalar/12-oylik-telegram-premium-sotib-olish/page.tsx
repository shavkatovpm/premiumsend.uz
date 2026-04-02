import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "12 oylik Telegram Premium sotib olish — 425,000 so'm, Uzcard va Humo orqali",
  description:
    "12 oylik Telegram Premium sotib olish O'zbekistonda 425,000 so'mga. Uzcard, Humo kartasi orqali so'mda to'lov. Telegramda 12 oylik bor, lekin faqat xorijiy karta bilan. Premium Send da so'mda oling.",
  keywords: [
    "12 oylik Telegram Premium sotib olish",
    "Telegram Premium 12 oylik",
    "Telegram Premium 1 yillik",
    "Telegram Premium yillik",
    "Telegram Premium Uzcard",
    "Telegram Premium Humo",
    "Telegram Premium O'zbekiston",
    "Telegram Premium so'mda",
    "Telegram Premium 425000",
    "Telegram Premium narxi",
    "PremiumSendBot",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/maqolalar/12-oylik-telegram-premium-sotib-olish",
  },
  openGraph: {
    title: "12 oylik Telegram Premium sotib olish — 425,000 so'm",
    description:
      "12 oylik Telegram Premium O'zbekistonda so'mda sotib oling. Uzcard, Humo bilan 425,000 so'mga. @PremiumSendBot orqali.",
    url: "https://premiumsend.uz/maqolalar/12-oylik-telegram-premium-sotib-olish",
    type: "article",
    publishedTime: "2026-04-02",
  },
};

export default function Article12Month() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "12 oylik Telegram Premium sotib olish — O'zbekistonda 425,000 so'mga",
    description:
      "12 oylik Telegram Premium sotib olish O'zbekistonda Uzcard, Humo kartasi orqali 425,000 so'mga. Batafsil qo'llanma.",
    datePublished: "2026-04-02",
    dateModified: "2026-04-02",
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
      "https://premiumsend.uz/maqolalar/12-oylik-telegram-premium-sotib-olish",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "12 oylik Telegram Premium sotib olish uchun xorijiy karta kerakmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yo'q. @PremiumSendBot orqali Uzcard yoki Humo kartasi bilan to'lash mumkin. Click yoki Payme orqali ham kartaga o'tkazma qilish mumkin. Xorijiy karta talab qilinmaydi.",
        },
      },
      {
        "@type": "Question",
        name: "Telegram rasmiy ilovasida 12 oylik Premium mavjudmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Telegramda 12 oylik obuna mavjud, lekin to'lov faqat Google Pay, Apple Pay yoki xorijiy bank kartasi orqali amalga oshiriladi. Uzcard va Humo ishlamaydi. Premium Send orqali esa so'mda, mahalliy karta bilan to'lash mumkin.",
        },
      },
      {
        "@type": "Question",
        name: "12 oylik Telegram Premium qancha vaqtda faollashadi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To'lovdan so'ng odatda bir necha daqiqa ichida faollashadi. Bot to'lovni avtomatik aniqlaydi va Premium yetkazib beradi.",
        },
      },
      {
        "@type": "Question",
        name: "Boshqa odamga 12 oylik Premium sovg'a qilish uchun nima kerak?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Faqat o'sha odamning Telegram username'i kerak. Bot orqali username'ni kiritasiz, to'lovni amalga oshirasiz — Premium to'g'ridan-to'g'ri uning akkauntiga faollashadi.",
        },
      },
      {
        "@type": "Question",
        name: "12 oylik Telegram Premium narxi qancha?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Premium Send da 12 oylik Telegram Premium narxi 425,000 so'm. Oyiga atigi 35,417 so'm — barcha paketlar ichida eng arzon oylik narx.",
        },
      },
      {
        "@type": "Question",
        name: "12 oylik obuna 3 yoki 6 oylikdan qimmatroqmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Umumiy summa kattaroq, lekin oylik hisobda 12 oylik eng arzon. 3 oylik oyiga 58,333 so'm, 6 oylik oyiga 39,167 so'm, 12 oylik oyiga atigi 35,417 so'm.",
        },
      },
      {
        "@type": "Question",
        name: "Premium Send da qanday paketlar bor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Premium Send da 3 oylik (175,000 so'm), 6 oylik (235,000 so'm) va 12 oylik (425,000 so'm) Telegram Premium paketlari mavjud. Telegramda 3 va 6 oylik paket yo'q — ularni faqat Premium Send orqali olish mumkin.",
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
        name: "12 oylik Telegram Premium sotib olish",
        item: "https://premiumsend.uz/maqolalar/12-oylik-telegram-premium-sotib-olish",
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
          12 oylik Telegram Premium sotib olish
        </span>
      </nav>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-100 text-green-700">
              Qo&apos;llanma
            </span>
            <time className="text-xs text-muted" dateTime="2026-04-02">
              2026-yil, 2-aprel
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            12 oylik Telegram Premium sotib olish
          </h1>
          {/* AI/SEO Snippet Definitsiya */}
          <div className="bg-green-50 rounded-xl p-5 border border-green-200 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>12 oylik Telegram Premium</strong> — bu Telegramning kengaytirilgan obunasining eng tejamkor varianti. O&apos;zbekistonda{" "}
              <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>{" "}
              orqali <strong>425,000 so&apos;m</strong>ga (oyiga 35,417 so&apos;m), Uzcard va Humo kartasi bilan sotib olish mumkin. Telegramda 12 oylik bor, lekin faqat xorijiy karta bilan to&apos;lanadi — Premium Send da esa so&apos;mda.
            </p>
          </div>
          <p className="text-lg text-muted leading-relaxed">
            Bir yil davomida Telegram Premiumdan uzluksiz foydalanish — reklama yo&apos;q, cheksiz imkoniyatlar, har oy to&apos;lov tashvishi yo&apos;q. Bu ko&apos;pchilik Telegram foydalanuvchisining orzusi. Lekin O&apos;zbekistonda bu orzuni amalga oshirish uchun to&apos;g&apos;ri yo&apos;lni bilish kerak — chunki Telegramning rasmiy ilovasida to&apos;lov faqat xorijiy karta orqali amalga oshiriladi. Uzcard yoki Humo ishlamaydi.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Ushbu maqolada 12 oylik Telegram Premium sotib olish — O&apos;zbekistonda, mahalliy to&apos;lov tizimlari orqali, xavfsiz va tez — qanday amalga oshirilishini batafsil ko&apos;rib chiqamiz.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              12 oylik Telegram Premium nima uchun eng foydali variant?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Telegram Premium obunalarini tanlashda ko&apos;pchilik narx va muddatni taqqoslaydi. 3 oylik, 6 oylik — bularning hammasi ma&apos;qul. Lekin 12 oylik Telegram Premium yillik obuna — bu shunchaki uzunroq muddat emas, bu butunlay boshqa mantiq.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Agar har oy alohida to&apos;lasangiz — 12 marta to&apos;lov jarayoni, 12 marta tasdiqlash, 12 marta karta topish muammosi. O&apos;zbekistonda bu muammo yanada keskinroq — chunki mahalliy kartalar Telegram rasmiy tizimida ishlamaydi. 12 oylik paket esa bularni bir zarbada hal qiladi.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: "Maksimal tejamkorlik",
                  desc: "Premium Send da 12 oylik 425,000 so'm — oyiga atigi 35,417 so'm. 3 oylikka nisbatan 39% arzon, 6 oylikka nisbatan 10% arzon.",
                },
                {
                  title: "Planlashtirish qulayligi",
                  desc: "Yil boshida bir marta to'lab, butun yilni rejalashtirish mumkin. Tadbirkorlar va blogerlar uchun bu juda muhim.",
                },
                {
                  title: "Uzluksizlik",
                  desc: "Obuna tugash sanasini kuzatmasangiz ham bo'ladi. 12 oy davomida Premium to'xtamaydi.",
                },
                {
                  title: "Sovg'a sifatida eng kuchli",
                  desc: "Birovga 12 oylik Premium sovg'a qilish — bu bir yillik reklamasiz, to'liq imkoniyatli Telegram tajribasi.",
                },
                {
                  title: "Psixologik rahatliq",
                  desc: "\"Yana to'lashim kerakmi?\" degan savol yo'qoladi. Premium shunchaki ishlayveradi — butun yil.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-5 border border-card-border shadow-sm"
                >
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-muted leading-relaxed">
              <Link href="/3-oylik" className="text-primary font-semibold hover:underline">3 oylik variant</Link> sinab ko&apos;rish uchun,{" "}
              <Link href="/6-oylik" className="text-primary font-semibold hover:underline">6 oylik</Link> narx/sifat uchun yaxshi. Lekin agar Premiumni doimiy foydalanish uchun olayotgan bo&apos;lsangiz — 12 oylik eng to&apos;g&apos;ri tanlov.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Telegram rasmiy ilovasida 12 oylik obuna bormi?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              <strong className="text-foreground">Ha, Telegramda 12 oylik obuna mavjud.</strong> Lekin muammo boshqa joyda.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Telegram 1 oylik va 12 oylik obuna taklif qiladi. Biroq to&apos;lov faqat Google Pay, Apple Pay yoki xorijiy bank kartasi orqali amalga oshiriladi. O&apos;zbekistonning mahalliy kartlari — Uzcard va Humo — bu tizimlar bilan ishlamaydi. Ya&apos;ni, 12 oylik obuna Telegramda bor, lekin O&apos;zbekiston foydalanuvchisi uchun to&apos;lov qilish amalda imkonsiz.
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-section-alt rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-2">
                  Muammo — to&apos;lov tizimi ishlamaydi
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Telegram rasmiy ilovasi orqali to&apos;lash uchun Google Pay yoki Apple Pay kerak. Bu tizimlar O&apos;zbekiston mahalliy kartlari — Uzcard va Humo — bilan integratsiyalashmagan. Ya&apos;ni, texnik jihatdan to&apos;lov imkonsiz.
                </p>
              </div>
              <div className="bg-section-alt rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-2">
                  Muammo — narx dollarda
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Telegram to&apos;lovlari dollar hisobida. Dollar kursi o&apos;zgarsa — har safar boshqa summa to&apos;laysiz. Premium Send da esa aniq so&apos;m narxi belgilangan — kurs riski yo&apos;q.
                </p>
              </div>
              <div className="bg-section-alt rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-2">
                  Muammo — 3 va 6 oylik paket yo&apos;q
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Telegramda faqat 1 oylik va 12 oylik bor. Agar 3 yoki 6 oylik kerak bo&apos;lsa — faqat Premium Send kabi servislar orqali olish mumkin.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">Premium Send</strong> bu muammolarni hal qiladi — 12 oylik Telegram Premiumni O&apos;zbekiston so&apos;mida, Uzcard va Humo kartasi bilan, aniq belgilangan narxda sotib olish imkonini beradi.
            </p>
          </section>

          {/* Section 3 — Narx */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              12 oylik Telegram Premium narxi: to&apos;liq tahlil
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              12 oylik Telegram Premium narxi — bu ko&apos;pchilik birinchi navbatda so&apos;raydigan savol. Keling, buni shaffof tarzda ko&apos;rib chiqaylik.
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Parametr</div>
                <div className="text-center">Telegram rasmiy</div>
                <div className="text-center">@PremiumSendBot</div>
                <div className="text-center">Ustunlik</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">12 oylik</div>
                <div className="text-center text-muted">Bor, lekin xorijiy karta</div>
                <div className="text-center text-primary font-medium">Bor, so&apos;mda</div>
                <div className="text-center text-green-600 font-medium">Mahalliy karta</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">3 va 6 oylik</div>
                <div className="text-center text-muted">Yo&apos;q</div>
                <div className="text-center text-primary font-medium">Bor</div>
                <div className="text-center text-green-600 font-medium">Qo&apos;shimcha tanlov</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">To&apos;lov</div>
                <div className="text-center text-muted">Google/Apple Pay</div>
                <div className="text-center text-primary font-medium">Uzcard, Humo</div>
                <div className="text-center text-green-600 font-medium">O&apos;zbek kartasi</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Narx</div>
                <div className="text-center text-muted">~$59.88/yil ($)</div>
                <div className="text-center text-primary font-bold">425,000 so&apos;m</div>
                <div className="text-center text-green-600 font-medium">Aniq, so&apos;mda</div>
              </div>
              <div className="grid grid-cols-4 p-4 items-center text-sm">
                <div className="font-medium">Kurs riski</div>
                <div className="text-center text-muted">Bor</div>
                <div className="text-center text-primary font-medium">Yo&apos;q</div>
                <div className="text-center text-green-600 font-medium">Barqaror narx</div>
              </div>
            </div>

            {/* Paketlar taqqoslash */}
            <h3 className="text-xl font-bold text-foreground mb-4">Premium Send paketlari taqqoslash:</h3>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Paket</div>
                <div className="text-center">Narx</div>
                <div className="text-center">Oylik</div>
                <div className="text-center">Tejamkorlik</div>
              </div>
              <Link href="/3-oylik" className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm hover:bg-primary-light/10 transition-colors">
                <div className="font-medium">3 oylik</div>
                <div className="text-center">175,000 so&apos;m</div>
                <div className="text-center text-muted">58,333</div>
                <div className="text-center">—</div>
              </Link>
              <Link href="/6-oylik" className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm hover:bg-primary-light/10 transition-colors">
                <div className="font-medium">6 oylik</div>
                <div className="text-center">235,000 so&apos;m</div>
                <div className="text-center text-muted">39,167</div>
                <div className="text-center text-green-600">-33%</div>
              </Link>
              <div className="grid grid-cols-4 p-4 bg-green-50 items-center text-sm">
                <div className="font-bold text-green-700">12 oylik</div>
                <div className="text-center font-bold text-green-700">425,000 so&apos;m</div>
                <div className="text-center text-green-700">35,417</div>
                <div className="text-center text-green-600 font-bold">-39%</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              12 oylik paketda oyiga atigi <strong className="text-foreground">35,417 so&apos;m</strong> to&apos;lanadi — barcha paketlar ichida eng arzon oylik narx. Kurs riski yo&apos;q — aniq belgilangan so&apos;m narxini to&apos;laysiz.
            </p>
          </section>

          {/* Section 4 — Step by step */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              O&apos;zbekistonda 12 oylik Telegram Premium sotib olish: bosqichma-bosqich
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Jarayon oddiy va 5-7 daqiqadan oshmaydi. Quyida @PremiumSendBot orqali 12 oylik Telegram Premium sotib olishning to&apos;liq yo&apos;riqnomasi:
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  step: "1",
                  title: "Botni oching",
                  desc: "Telegramda @PremiumSendBot ni toping va oching. Bot to'g'ridan-to'g'ri Telegram ichida ishlaydi — qo'shimcha ilova yuklab olish shart emas.",
                },
                {
                  step: "2",
                  title: "Ishga tushiring",
                  desc: "/start tugmasini bosing. Bot o'zbek tilida salomlashadi va asosiy menyu ochiladi.",
                },
                {
                  step: "3",
                  title: "12 oylik paketni tanlang",
                  desc: "Menyu ichidan \"12 oylik Premium\" variantini tanlang. Narx o'zbek so'mida ko'rsatiladi — dollar konvertatsiyasi yo'q.",
                },
                {
                  step: "4",
                  title: "Akkauntni kiriting",
                  desc: "Premium faollashtirilishi kerak bo'lgan Telegram akkauntning username'ini kiriting. O'zingizniki yoki sovg'a qilmoqchi bo'lgan odamning akkaunt bo'lishi mumkin.",
                },
                {
                  step: "5",
                  title: "To'lovni amalga oshiring",
                  desc: "Uzcard yoki Humo kartangiz orqali to'lang. Click yoki Payme orqali ham botdagi kartaga o'tkazma qilishingiz mumkin — bot summani avtomatik aniqlaydi.",
                },
                {
                  step: "6",
                  title: "Premium faollashadi",
                  desc: "To'lov tasdiqlangandan so'ng, 12 oylik Telegram Premium obuna avtomatik ravishda faollashtiriladi. Odatda bir necha daqiqa ichida sodir bo'ladi.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-muted leading-relaxed mb-6">
              Jarayon davomida savol yoki muammo bo&apos;lsa — botdagi qo&apos;llab-quvvatlash xizmati o&apos;zbek tilida yordam beradi.
            </p>

            {/* Oraliq CTA */}
            <div className="bg-white rounded-2xl p-6 border-2 border-green-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-bold text-foreground text-lg">12 oylik Telegram Premium — 425,000 so&apos;m</p>
                <p className="text-sm text-muted">Oyiga 35,417 so&apos;m — eng arzon variant</p>
              </div>
              <div className="flex gap-3">
                <Link href="/12-oylik" className="px-5 py-2.5 rounded-xl bg-green-100 text-green-700 font-semibold text-sm hover:bg-green-600 hover:text-white transition-all">
                  Batafsil
                </Link>
                <Link href="https://t.me/premiumsendbot" target="_blank" className="px-5 py-2.5 rounded-xl bg-green-600 text-white font-semibold text-sm shadow-lg shadow-green-600/25">
                  Sotib olish
                </Link>
              </div>
            </div>
          </section>

          {/* Section 5 — Imkoniyatlar */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              12 oylik Telegram Premium imkoniyatlari: bir yil davomida nima olasiz?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Telegram Premium yillik obuna — bu Telegramning butunlay boshqa versiyasi. 12 oy davomida quyidagi imkoniyatlardan to&apos;liq foydalanasiz:
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Fayl va media</h3>
                <ul className="text-sm text-muted space-y-1">
                  <li>Oddiy 2 GB o&apos;rniga 4 GB gacha fayl yuborish</li>
                  <li>Katta video, arxiv, loyiha fayllari — hech qanday limit muammosi yo&apos;q</li>
                  <li>Mediani siqmasdan yuborish imkoniyati</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Interfeys va qulay funksiyalar</h3>
                <ul className="text-sm text-muted space-y-1">
                  <li>Voice-to-text — ovozli xabarlarni avtomatik matn shaklida o&apos;qish</li>
                  <li>Tezkor tarjima — xorijiy tillardagi xabarlarni bir tugma bilan tarjima qilish</li>
                  <li>Cheksiz pinned xabarlar — guruh va kanallarda ko&apos;proq xabar pin qilish</li>
                  <li>Tezkor navigatsiya — uzoq suhbatlarda qidirish va o&apos;tish osonlashadi</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Vizual va shaxsiylashtirish</h3>
                <ul className="text-sm text-muted space-y-1">
                  <li>Eksklyuziv stikerlar va emojilar — faqat Premium foydalanuvchilar uchun</li>
                  <li>Animatsiyali reaksiyalar — maxsus animatsiyalar</li>
                  <li>Profil badge — Premium foydalanuvchi ekanligi ko&apos;rsatiladi</li>
                  <li>Ism rangi — profilingizga maxsus rang berish</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Xavfsizlik va maxfiylik</h3>
                <ul className="text-sm text-muted space-y-1">
                  <li>Reklama yo&apos;q — Telegram kanallaridagi reklamalar to&apos;liq o&apos;chiriladi</li>
                  <li>Bir qurilmada ko&apos;proq Telegram akkaunt</li>
                </ul>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Bu imkoniyatlarning barchasi 12 oy davomida uzluksiz ishlaydi. Obuna yangilash yoki to&apos;lov haqida o&apos;ylashning hojati yo&apos;q — bir yil davomida xotirjam foydalanasiz.
            </p>
          </section>

          {/* Section 6 — Sovg'a */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              12 oylik Telegram Premium kimga sovg&apos;a qilish mumkin?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              @PremiumSendBot orqali istalgan Telegram foydalanuvchisiga 12 oylik Premium sovg&apos;a qilish mumkin. Buning uchun faqat o&apos;sha odamning Telegram username&apos;i kerak — telefon raqami yoki boshqa ma&apos;lumot talab qilinmaydi.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { title: "Do'stingizga", desc: "Tug'ilgan kun yoki bayram sovg'asi sifatida. Bir yillik reklamasiz Telegram — haqiqatan esda qoladigan sovg'a." },
                { title: "Hamkasbingizga", desc: "Telegram orqali ko'p muloqot qilsangiz, Premium hamkasblarga ish jarayonini osonlashtiradi." },
                { title: "Oila a'zolaringizga", desc: "Ota-onangiz yoki aka-ukangizga texnologik sovg'a sifatida." },
                { title: "Mijozingizga", desc: "Premium mijozlarga VIP sovg'a sifatida brendingizni mustahkamlash uchun." },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-muted leading-relaxed">
              Sovg&apos;a jarayoni oddiy: botda 12 oylik paketni tanlaysiz, o&apos;sha odamning username&apos;ini kiritasiz, to&apos;lovni amalga oshirasiz — Premium to&apos;g&apos;ridan-to&apos;g&apos;ri uning akkauntiga faollashadi.
            </p>

            {/* Oraliq CTA 2 */}
            <div className="bg-white rounded-2xl p-6 border-2 border-green-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <div>
                <p className="font-bold text-foreground text-lg">12 oylik Telegram Premium — 425,000 so&apos;m</p>
                <p className="text-sm text-muted">Hoziroq <Link href="/12-oylik" className="text-primary hover:underline">batafsil ma&apos;lumot</Link> yoki to&apos;g&apos;ridan-to&apos;g&apos;ri sotib oling</p>
              </div>
              <Link href="https://t.me/premiumsendbot" target="_blank" className="px-6 py-3 rounded-xl bg-green-600 text-white font-semibold text-sm shadow-lg shadow-green-600/25 whitespace-nowrap">
                Sotib olish
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">
              Tez-tez so&apos;raladigan savollar (FAQ)
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "12 oylik Telegram Premium sotib olish uchun xorijiy karta kerakmi?",
                  a: "Yo'q. @PremiumSendBot orqali Uzcard yoki Humo kartasi bilan to'lash mumkin. Click yoki Payme orqali ham botdagi kartaga o'tkazma qilish mumkin. Xorijiy karta talab qilinmaydi.",
                },
                {
                  q: "Telegram rasmiy ilovasida 12 oylik Premium mavjudmi?",
                  a: "Ha, Telegramda 12 oylik obuna mavjud. Lekin to'lov faqat Google Pay, Apple Pay yoki xorijiy bank kartasi orqali amalga oshiriladi. Uzcard va Humo ishlamaydi. Premium Send orqali esa so'mda, mahalliy karta bilan to'lash mumkin.",
                },
                {
                  q: "12 oylik Telegram Premium qancha vaqtda faollashadi?",
                  a: "To'lovdan so'ng odatda bir necha daqiqa ichida faollashadi. Akkauntingizda Premium badge paydo bo'lishi — faollashtirish muvaffaqiyatli bo'lganining belgisi.",
                },
                {
                  q: "Boshqa odamga 12 oylik Premium sovg'a qilish uchun nima kerak?",
                  a: "Faqat o'sha odamning Telegram username'i kerak. Bot orqali username'ni kiritasiz, to'lovni amalga oshirasiz — Premium to'g'ridan-to'g'ri uning akkauntiga faollashadi.",
                },
                {
                  q: "12 oylik Telegram Premium narxi qancha?",
                  a: "Premium Send da 12 oylik Telegram Premium narxi 425,000 so'm. Oyiga atigi 35,417 so'm — barcha paketlar ichida eng arzon oylik narx.",
                },
                {
                  q: "12 oylik obuna tugaganda nima bo'ladi?",
                  a: "12 oy tugagandan so'ng obuna avtomatik to'xtatiladi. Akkaunt oddiy Telegram rejimiga qaytadi. Davom etmoqchi bo'lsangiz, yangi obuna sotib olishingiz kerak.",
                },
                {
                  q: "Premium Send da qanday paketlar bor?",
                  a: "3 oylik (175,000 so'm), 6 oylik (235,000 so'm) va 12 oylik (425,000 so'm). Telegramda 3 va 6 oylik paket yo'q — ularni faqat Premium Send orqali olish mumkin.",
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

          {/* Conclusion */}
          <section>
            <div className="bg-green-600 rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-5 left-5 w-32 h-32 bg-white rounded-full blur-2xl" />
              </div>
              <div className="relative">
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  Agar O&apos;zbekistonda mahalliy karta orqali, bir marta to&apos;lab, bir yil davomida xotirjam foydalanish uchun 12 oylik Telegram Premium sotib olish kerak bo&apos;lsa —{" "}
                  <strong className="text-white">@PremiumSendBot</strong> bugun uchun eng qulay va ishonchli yechim. Uzcard va Humo kartasi orqali bir necha daqiqada buyurtma bering va Telegram Premium yillik obuna imkoniyatlaridan to&apos;liq bahramand bo&apos;ling.
                </p>
                <Link
                  href="https://t.me/premiumsendbot"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-600 font-bold rounded-2xl hover:shadow-2xl transition-all text-lg"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  @PremiumSendBot ga o&apos;tish
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
