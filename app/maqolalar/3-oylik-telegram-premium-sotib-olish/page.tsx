import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "3 oylik Telegram Premium sotib olish — O'zbekistonda so'mda, Uzcard va Humo orqali",
  description:
    "3 oylik Telegram Premium sotib olish O'zbekistonda Uzcard, Humo, Click, Payme orqali. Telegramda 3 oylik paket yo'q — faqat @PremiumSendBot orqali. Narxi, imkoniyatlari va bosqichma-bosqich yo'riqnoma.",
  keywords: [
    "3 oylik Telegram Premium sotib olish",
    "Telegram Premium 3 oylik",
    "Telegram Premium Uzcard",
    "Telegram Premium Humo",
    "Telegram Premium O'zbekiston",
    "Telegram Premium so'mda",
    "Telegram Premium narxi",
    "PremiumSendBot",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/maqolalar/3-oylik-telegram-premium-sotib-olish",
  },
  openGraph: {
    title: "3 oylik Telegram Premium sotib olish — O'zbekistonda so'mda",
    description:
      "Telegramda 3 oylik Premium yo'q. @PremiumSendBot orqali Uzcard, Humo bilan so'mda sotib oling.",
    url: "https://premiumsend.uz/maqolalar/3-oylik-telegram-premium-sotib-olish",
    type: "article",
    publishedTime: "2026-04-02",
  },
};

export default function Article3Month() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "3 oylik Telegram Premium sotib olish — O'zbekistonda so'mda, Uzcard va Humo orqali",
    description:
      "3 oylik Telegram Premium sotib olish O'zbekistonda Uzcard, Humo, Click, Payme orqali. Batafsil qo'llanma.",
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
      "https://premiumsend.uz/maqolalar/3-oylik-telegram-premium-sotib-olish",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "3 oylik Telegram Premium sotib olish uchun xorijiy karta kerakmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yo'q. @PremiumSendBot orqali Uzcard yoki Humo kartasi bilan to'lash mumkin. Click yoki Payme orqali ham kartaga o'tkazma qilish mumkin. Xorijiy karta talab qilinmaydi.",
        },
      },
      {
        "@type": "Question",
        name: "3 oylik Telegram Premium Telegramning rasmiy ilovasida mavjudmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yo'q. Telegram faqat 1 oylik va 12 oylik Premium taklif qiladi. 3 oylik paket mavjud emas — uni faqat Premium Send kabi xizmatlar orqali sotib olish mumkin.",
        },
      },
      {
        "@type": "Question",
        name: "To'lovdan keyin Premium qachon faollashadi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Odatda bir necha daqiqa ichida. Bot to'lovni avtomatik aniqlaydi va Premium yetkazib beradi.",
        },
      },
      {
        "@type": "Question",
        name: "Boshqa odamga 3 oylik Premium olsa bo'ladimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha. Buning uchun faqat o'sha odamning Telegram username'ini kiriting. Premium uning akkauntiga faollashadi.",
        },
      },
      {
        "@type": "Question",
        name: "3 oylik Telegram Premium narxi qancha?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Premium Send da 3 oylik Telegram Premium narxi 175,000 so'm. To'lov O'zbekiston so'mida amalga oshiriladi.",
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
        name: "3 oylik Telegram Premium sotib olish",
        item: "https://premiumsend.uz/maqolalar/3-oylik-telegram-premium-sotib-olish",
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
          3 oylik Telegram Premium sotib olish
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
            <time className="text-xs text-muted" dateTime="2026-04-02">
              2026-yil, 2-aprel
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            3 oylik Telegram Premium sotib olish
          </h1>
          {/* AI/SEO Snippet Definitsiya */}
          <div className="bg-primary-light/50 rounded-xl p-5 border border-primary/10 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>3 oylik Telegram Premium</strong> — bu Telegramning kengaytirilgan obunasi bo&apos;lib, O&apos;zbekistonda <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link> orqali <strong>175,000 so&apos;m</strong>ga, Uzcard va Humo kartasi bilan sotib olish mumkin. Telegram messenjerida 3 oylik paket mavjud emas — uni faqat Premium Send orqali olish mumkin.
            </p>
          </div>
          <p className="text-lg text-muted leading-relaxed">
            Ko&apos;pchilik Telegram Premium olmoqchi bo&apos;lganda bitta muammoga duch keladi:
            Telegramning rasmiy ilovasida to&apos;lov qilish uchun xorijiy karta kerak. Uzcard
            yoki Humo bilan to&apos;g&apos;ridan-to&apos;g&apos;ri to&apos;lab bo&apos;lmaydi. Bundan tashqari, Telegram
            faqat 1 oylik va 12 oylik obuna taklif qiladi — 3 oylik yoki 6 oylik variant yo&apos;q. Aynan
            shu muammo o&apos;zbek foydalanuvchilarni qiyinchiliklarga duchor qiladi.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Ushbu maqolada 3 oylik Telegram Premium sotib olish — O&apos;zbekistonda,
            mahalliy to&apos;lov tizimlari orqali, tez va ishonchli usulda — qanday amalga
            oshirilishini batafsil tushuntiramiz.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              3 oylik Telegram Premium nima va nima uchun kerak?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Telegram Premium — bu Telegramning kengaytirilgan versiyasi bo&apos;lib, oddiy
              foydalanuvchilarga mavjud bo&apos;lmagan imkoniyatlarni ochib beradi. 3 oylik
              obuna esa eng maqbul variant hisoblanadi: bir oylikdan arzonroq, lekin 6
              oylikdek katta investitsiya talab qilmaydi.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              3 oylik Telegram Premium obuna quyidagi imkoniyatlarni beradi:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: "Fayl yuklash hajmi",
                  desc: "Oddiy limitdan 4 GB gacha oshiriladi. Katta video, arxiv yoki hujjatlarni yuborish muammosi yo'qoladi.",
                },
                {
                  title: "Tezkor tarjima",
                  desc: "Xorijiy tillardagi xabarlarni bir tugma bilan o'zbek yoki rus tiliga tarjima qilish mumkin.",
                },
                {
                  title: "Reklama yo'q",
                  desc: "Telegram kanallarida ko'rsatiladigan reklamalar to'liq o'chiriladi.",
                },
                {
                  title: "Maxsus reaksiyalar va stikerlar",
                  desc: "Premium foydalanuvchilar uchun mo'ljallangan eksklyuziv emojilar va animatsiyalar.",
                },
                {
                  title: "Ism rang berish",
                  desc: "Profilingizga maxsus rang va badge qo'shish imkoniyati.",
                },
                {
                  title: "Ko'proq saqlangan xabarlar",
                  desc: "Bookmark qilish limiti oshiriladi.",
                },
                {
                  title: "Tezroq yuklanish",
                  desc: "Kontent Premium serverlari orqali tezroq yuklanadi.",
                },
                {
                  title: "Voice-to-text",
                  desc: "Ovozli xabarlarni avtomatik matn ko'rinishiga o'tkazish.",
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

            <p className="text-muted leading-relaxed mb-4">
              Ko&apos;pchilik foydalanuvchilar 3 oylik variantni tanlaydi, chunki bu vaqt ichida
              Premium imkoniyatlarini to&apos;liq sinab ko&apos;rish va odatlanish uchun yetarli. Bir
              oylik variant esa juda qisqa — Premiumning haqiqiy qiymatini his qilish uchun
              3 oy optimaldir.
            </p>
            <p className="text-muted leading-relaxed">
              O&apos;zbekistonda yoshlar, blogerlar, tadbirkorlar va faol Telegram
              foydalanuvchilari orasida 3 oylik Telegram Premium obuna eng ko&apos;p talab
              qilinadigan variant bo&apos;lib qolmoqda.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Nima uchun Telegramning rasmiy ilovasidan sotib olish qiyin?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Bu savol ko&apos;pchilikni qiziqtiradi. Telegram ilovasi mavjud bo&apos;lsa, nima uchun
              undan to&apos;g&apos;ridan-to&apos;g&apos;ri sotib olmaslik kerak?
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-section-alt rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-2">
                  Birinchi sabab — to&apos;lov tizimi cheklovi
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Telegram rasmiy ilovasi orqali to&apos;lash uchun Google Pay, Apple Pay yoki
                  xorijiy bank kartasi kerak. O&apos;zbekistonning mahalliy kartlari — Uzcard va
                  Humo — bu tizimlar bilan mos kelmaydi. Natijada millionlab o&apos;zbek
                  foydalanuvchisi to&apos;g&apos;ridan-to&apos;g&apos;ri sotib ololmaydi.
                </p>
              </div>
              <div className="bg-section-alt rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-2">
                  Ikkinchi sabab — 3 oylik va 6 oylik paket mavjud emas
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Telegram faqat 1 oylik va 12 oylik obuna taklif qiladi. 3 oylik yoki
                  6 oylik paket mavjud emas. Agar 3 oy olmoqchi bo&apos;lsangiz, har oy
                  alohida to&apos;lashingiz kerak — bu ham qimmatroq, ham noqulay.
                </p>
              </div>
              <div className="bg-section-alt rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-2">
                  Uchinchi sabab — narx kursi muammosi
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Telegram to&apos;lovlari dollar yoki yevro hisobida amalga oshiriladi.
                  O&apos;zbekistonda esa odamlar so&apos;m hisobida ishlaydi. Kurs o&apos;zgarishi va
                  konvertatsiya to&apos;lovlari qo&apos;shimcha xarajat yaratadi.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Aynan shu uchta muammo tufayli O&apos;zbekistonda 3 oylik Telegram Premiumni
              mahalliy bot yoki servislar orqali sotib olish ancha qulay va iqtisodiy
              foydali bo&apos;ladi.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              O&apos;zbekistonda 3 oylik Telegram Premium sotib olish: qayerdan va qanday?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Hozirda O&apos;zbekistonda Telegram Premium sotadigan bir nechta servis mavjud.
              Lekin ularning hammasi ham ishonchli emas — ba&apos;zilari to&apos;lov qabul qilib,
              Premium yubormaydi yoki kech yuboradi.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Ishonchli servisda quyidagi xususiyatlar bo&apos;lishi kerak:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "To'lovdan keyin avtomatik yetkazib berish (qo'lda kutish yo'q)",
                "Uzcard va Humo kartasi orqali to'lov (Click/Payme orqali ham kartaga o'tkazma qilish mumkin)",
                "O'zbek tilida yordam va qo'llab-quvvatlash",
                "3 oylik paket mavjudligi (Telegramning o'zida bu yo'q)",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-muted">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-primary-light rounded-2xl p-6 border border-primary/20">
              <p className="text-foreground leading-relaxed">
                <strong>@PremiumSendBot</strong> — O&apos;zbekiston bozori uchun maxsus
                yaratilgan Telegram bot bo&apos;lib, aynan shu talablarga javob beradi. Bot
                orqali 3 oylik Telegram Premium obunani o&apos;zbek so&apos;mida, Uzcard yoki Humo
                kartasi bilan bir necha daqiqada sotib olish mumkin.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Uzcard va Humo orqali to&apos;lash: bosqichma-bosqich yo&apos;riqnoma
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Quyida @PremiumSendBot orqali 3 oylik Telegram Premium sotib olishning
              to&apos;liq jarayoni keltirilgan:
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  step: "1",
                  title: "Botni oching",
                  desc: "Telegramda @PremiumSendBot ni oching.",
                },
                {
                  step: "2",
                  title: "Botni ishga tushiring",
                  desc: "/start tugmasini bosing.",
                },
                {
                  step: "3",
                  title: "Paketni tanlang",
                  desc: 'Menyu ichidan "3 oylik Premium" variantini tanlang.',
                },
                {
                  step: "4",
                  title: "Username kiriting",
                  desc: "Premium olmoqchi bo'lgan akkauntning Telegram username'ini kiriting (o'zingizniki yoki do'stingizniki bo'lishi mumkin).",
                },
                {
                  step: "5",
                  title: "To'lovni amalga oshiring",
                  desc: "Uzcard yoki Humo kartangiz orqali to'lang. Click yoki Payme orqali ham botdagi kartaga o'tkazma qilishingiz mumkin — bot summani avtomatik aniqlaydi.",
                },
                {
                  step: "6",
                  title: "Premium faollashadi",
                  desc: "To'lov tasdiqlangandan so'ng, Premium obuna avtomatik ravishda ko'rsatilgan akkauntga faollashtiriladi.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full hero-gradient text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
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
              Butun jarayon odatda 5 daqiqadan oshmaydi. To&apos;lov tizimida uzilish
              bo&apos;lmasa, Premium darhol faollashadi.
            </p>

            {/* Oraliq CTA */}
            <div className="bg-white rounded-2xl p-6 border-2 border-primary/20 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-bold text-foreground text-lg">3 oylik Telegram Premium — 175,000 so&apos;m</p>
                <p className="text-sm text-muted">Uzcard, Humo orqali so&apos;mda to&apos;lov</p>
              </div>
              <div className="flex gap-3">
                <Link href="/3-oylik" className="px-5 py-2.5 rounded-xl bg-primary-light text-primary font-semibold text-sm hover:bg-primary hover:text-white transition-all">
                  Batafsil
                </Link>
                <Link href="https://t.me/premiumsendbot" target="_blank" className="px-5 py-2.5 rounded-xl hero-gradient text-white font-semibold text-sm shadow-lg shadow-primary/25">
                  Sotib olish
                </Link>
              </div>
            </div>
          </section>

          {/* Section 5 — Pricing Table */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              3 oylik Telegram Premium narxi: taqqoslash
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              O&apos;zbekistonda 3 oylik Telegram Premium narxi turli servislar va kanallarda
              farq qilishi mumkin. Quyida taxminiy taqqoslash keltirilgan:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Variant</div>
                <div className="text-center">To&apos;lov usuli</div>
                <div className="text-center">Muddat</div>
                <div className="text-center">Narx</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Telegram rasmiy</div>
                <div className="text-center text-muted">Xorijiy karta</div>
                <div className="text-center text-muted">Faqat 1 va 12 oylik</div>
                <div className="text-center text-muted">~$4.99/oy</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Boshqa resellerlar</div>
                <div className="text-center text-muted">Har xil</div>
                <div className="text-center text-muted">1–3 oy</div>
                <div className="text-center text-muted">O&apos;zgaruvchan</div>
              </div>
              <div className="grid grid-cols-4 p-4 bg-primary-light/30 items-center text-sm">
                <div className="font-bold text-primary">@PremiumSendBot</div>
                <div className="text-center text-primary font-medium">
                  Uzcard, Humo
                </div>
                <div className="text-center text-primary font-medium">3 oylik paket</div>
                <div className="text-center text-primary font-medium">175,000 so&apos;m</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              Telegram rasmiy ilovasida 3 oylik variant yo&apos;qligi sababli, agar har oy
              alohida to&apos;lasangiz — 3 oy uchun $14.97 to&apos;laysiz. 3 oylik Telegram Premium
              narxi bo&apos;yicha reseller botlar ko&apos;pincha to&apos;p narxda taklif qiladi, bu esa
              biroz tejamkorroq chiqadi.
            </p>
            <p className="text-muted leading-relaxed">
              Bundan tashqari, mahalliy servislar orqali to&apos;lashda kurs farqi va
              konvertatsiya to&apos;lovlari yo&apos;q — siz aniq belgilangan so&apos;m narxini
              to&apos;laysiz.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              3 oylik Telegram Premium O&apos;zbekistonda: kimlar uchun eng mos?
            </h2>

            <div className="space-y-6 mb-6">
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  Bloger va kontent yaratuvchilar
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Agar Telegram kanalida faolsangiz, Premium sizga katta hajmli fayllarni
                  yuklash, eksklyuziv reaksiyalar va profilingizni ajratib ko&apos;rsatish
                  imkonini beradi. Obunachilarga Premium badge ko&apos;rinishi — bu o&apos;z-o&apos;zidan
                  ishonch belgisi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  Tadbirkorlar va frilanserlar
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Telegram orqali mijozlar bilan muloqot qiluvchilar uchun Voice-to-text
                  funksiyasi va tarjima imkoniyati kunlik vaqtni tejaydi. Katta hujjat va
                  fayllarni yuborish limiti esa ish jarayonini osonlashtiradi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  Faol Telegram foydalanuvchilari
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Agar kuniga bir necha soat Telegramda vaqt o&apos;tkazasangiz — reklama
                  yo&apos;qligi va tezroq yuklanish sifatini sezilarli yaxshilaydi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  Do&apos;sti yoki yaqiniga sovg&apos;a qilmoqchilar
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  @PremiumSendBot orqali o&apos;zganing akkauntiga ham Premium sotib olish
                  mumkin. Bu — tug&apos;ilgan kun yoki bayram uchun ajoyib raqamli sovg&apos;a.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              3 oy — sinab ko&apos;rish uchun ham, doimiy foydalanish uchun ham yetarli muddat.
              Agar Premium imkoniyatlaridan mamnun bo&apos;lsangiz, keyingi safar{" "}
              <Link
                href="/6-oylik"
                className="text-primary font-semibold hover:underline"
              >
                6 oylik
              </Link>{" "}
              yoki{" "}
              <Link
                href="/12-oylik"
                className="text-primary font-semibold hover:underline"
              >
                12 oylik
              </Link>{" "}
              variantga o&apos;tish ham mumkin.
            </p>

            {/* Oraliq CTA 2 */}
            <div className="bg-white rounded-2xl p-6 border-2 border-primary/20 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <div>
                <p className="font-bold text-foreground text-lg">3 oylik Telegram Premium — 175,000 so&apos;m</p>
                <p className="text-sm text-muted">Hoziroq <Link href="/3-oylik" className="text-primary hover:underline">batafsil ma&apos;lumot</Link> yoki to&apos;g&apos;ridan-to&apos;g&apos;ri sotib oling</p>
              </div>
              <Link href="https://t.me/premiumsendbot" target="_blank" className="px-6 py-3 rounded-xl hero-gradient text-white font-semibold text-sm shadow-lg shadow-primary/25 whitespace-nowrap">
                Sotib olish
              </Link>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Ishonchli servisni qanday tanlaymiz: e&apos;tibor bering
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Internetda Telegram Premium sotadigan juda ko&apos;p bot va kanallar mavjud.
              Lekin hammasi ham ishonchli emas. Ba&apos;zi servislar to&apos;lov qabul qilib,
              mahsulot yubormaydi yoki kun bo&apos;yi kuttirib qo&apos;yadi.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Ishonchli servisni tanlashda quyidagilarga e&apos;tibor bering:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Avtomatik yetkazib berish — to'lovdan so'ng Premium darhol faollashishi kerak, qo'lda kutish bo'lmasligi lozim",
                "Aloqa va qo'llab-quvvatlash — muammo chiqsa, tez javob beradigan support bo'lishi shart",
                "Foydalanuvchi sharhlari — bot yoki kanalda real foydalanuvchilar izohlari bo'lsin",
                "Aniq narx — yashirin to'lovlar va kutilmagan qo'shimcha xarajatlar bo'lmasligi kerak",
                "O'zbek tili — o'z tilida muloqot qilish imkoniyati muhim",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-muted">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">@PremiumSendBot</strong> aynan shu
              mezonlarga javob berish uchun yaratilgan. O&apos;zbekiston foydalanuvchilari uchun
              mahalliy to&apos;lov tizimlari, o&apos;zbek tilidagi interfeys va tez yetkazib berish
              — asosiy ustunlik hisoblanadi.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">
              Tez-tez so&apos;raladigan savollar (FAQ)
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "3 oylik Telegram Premium sotib olish uchun xorijiy karta kerakmi?",
                  a: "Yo'q. @PremiumSendBot orqali UzCard, Humo kartasi orqali to'lov qilish mumkin. Click yoki Payme orqali ham botdagi kartaga o'tkazma qilish mumkin. Xorijiy karta talab qilinmaydi.",
                },
                {
                  q: "3 oylik Telegram Premium Telegramning rasmiy ilovasida mavjudmi?",
                  a: "Yo'q. Telegram faqat 1 oylik va 12 oylik Premium taklif qiladi — 3 oylik va 6 oylik paketlar mavjud emas. 3 oylik paket faqat Premium Send kabi reseller xizmatlar orqali sotib olish mumkin.",
                },
                {
                  q: "To'lovdan keyin Premium qachon faollashadi?",
                  a: "Odatda bir necha daqiqa ichida. Avtomatik tizim orqali yetkazib beriladi, qo'lda kutish talab qilinmaydi.",
                },
                {
                  q: "Boshqa odamga — do'stimga yoki oila a'zomga — 3 oylik Premium olsa bo'ladimi?",
                  a: "Ha. Buning uchun faqat o'sha odamning Telegram username'ini kiriting. Premium uning akkauntiga faollashadi.",
                },
                {
                  q: "3 oylik Telegram Premium narxi qancha?",
                  a: "Premium Send da 3 oylik Telegram Premium narxi 175,000 so'm. To'lov O'zbekiston so'mida — Uzcard yoki Humo kartasi orqali amalga oshiriladi.",
                },
                {
                  q: "Premium faollashgandan keyin bekor qilsa bo'ladimi?",
                  a: "Telegram Premium obuna muddati tugagandan so'ng avtomatik to'xtatiladi. Muddat ichida bekor qilish imkoniyati cheklangan — shu sababli xarid qilishdan oldin to'g'ri muddatni tanlash muhim.",
                },
                {
                  q: "Premium Send da qanday paketlar bor?",
                  a: "Premium Send da 3 oylik (175,000 so'm), 6 oylik (235,000 so'm) va 12 oylik (425,000 so'm) Telegram Premium paketlari mavjud. Telegramda 3 va 6 oylik paket yo'q — ularni faqat Premium Send orqali olish mumkin.",
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
            <div className="hero-gradient rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-5 left-5 w-32 h-32 bg-white rounded-full blur-2xl" />
              </div>
              <div className="relative">
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  Agar O&apos;zbekistonda mahalliy to&apos;lov tizimi orqali, tez va ishonchli
                  tarzda 3 oylik Telegram Premium sotib olish kerak bo&apos;lsa —{" "}
                  <strong className="text-white">@PremiumSendBot</strong> bugun uchun eng
                  qulay yechim. Uzcard, Humo, Click yoki Payme orqali bir necha daqiqada
                  buyurtma bering va Premium imkoniyatlaridan bahramand bo&apos;ling.
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
