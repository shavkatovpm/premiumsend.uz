import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Telegram Premium qachon faollashadi va muddat qanday hisoblanadi — to'liq javob",
  description:
    "Telegram Premium to'lovdan keyin 5 daqiqada faollashadi. Muddat to'lov sanasidan, sovg'a qabul qilingan kundan. 30 kun emas, kalendar oy. Yangilash, sovg'a, fevral muammosi haqida.",
  keywords: [
    "telegram premium qachon faollashadi",
    "telegram premium muddati",
    "telegram premium muddat hisoblanishi",
    "telegram premium faollashishi",
    "telegram premium qancha vaqt",
    "telegram premium yangilash",
    "telegram premium sovga faollashadi",
    "telegram premium aktivlashishi",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/maqolalar/telegram-premium-qachon-faollashadi",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/telegram-premium-qachon-faollashadi",
      ru: "https://premiumsend.uz/ru/maqolalar/telegram-premium-qachon-faollashadi",
    },
  },
  openGraph: {
    title: "Telegram Premium qachon faollashadi — muddat qanday hisoblanadi",
    description:
      "To'lovdan keyin 5 daqiqa, muddat kalendar oy bo'yicha. Yangilash, sovg'a, fevral muammosi va faollashmagan holatlar uchun yechim.",
    url: "https://premiumsend.uz/maqolalar/telegram-premium-qachon-faollashadi",
    type: "article",
    publishedTime: "2026-04-30",
  },
};

export default function ArticleQachonFaollashadi() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Telegram Premium qachon faollashadi va muddat qanday hisoblanadi — to'liq qo'llanma",
    description:
      "Telegram Premium faollashish vaqti, muddat hisoblash mantiqi, yangilash, sovg'a qabul qilish va texnik muammolarni hal qilish bo'yicha to'liq javob.",
    datePublished: "2026-04-30",
    dateModified: "2026-04-30",
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
      "https://premiumsend.uz/maqolalar/telegram-premium-qachon-faollashadi",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Telegram Premium to'lovdan keyin qachon faollashadi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Premium Send orqali to'lov tasdiqlangach, Telegram Premium odatda 1-5 daqiqada avtomatik faollashtiriladi. To'lov banki tasdiqi va Telegram tomonidan ishlov berishini hisobga olganda eng uzoq holat 10-15 daqiqa. Agar 15 daqiqadan keyin ham kelmasa — botdagi qo'llab-quvvatlashga to'lov chekini yuboring.",
        },
      },
      {
        "@type": "Question",
        name: "Premium muddati to'lov kunidan boshlanadimi yoki faollashish kunidan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Premium muddati Telegram tomonidan faollashtirilgan kundan boshlanadi, to'lov sanasidan emas. Shuning uchun to'lov bilan faollashish o'rtasidagi 5-15 daqiqa farq muddatga kirmaydi — siz to'liq oy/yil oladi.",
        },
      },
      {
        "@type": "Question",
        name: "Premium muddati 30 kun yoki kalendar oymi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Telegram Premium muddati kalendar oy bo'yicha hisoblanadi, 30 kun emas. Masalan, 15-yanvarda faollashtirilgan 1 oylik Premium 15-fevralgacha ishlaydi. Fevral 28-kunlik bo'lsa ham, Telegram avtomatik to'g'ri sanani belgilaydi (bu butun dunyo bo'yicha standart obuna mantiqi).",
        },
      },
      {
        "@type": "Question",
        name: "Avvalgi Premium tugamagan bo'lsa, yangisi qachondan boshlanadi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Agar avvalgi Premium hali tugamagan bo'lsa, yangi sotib olingan muddat avvalgisining tugashi sanasidan boshlanadi. Ya'ni qo'shiladi: agar 10 kun qolgan bo'lsa va 3 oylik yangi olsangiz — jami 100 kun atrofida Premium ishlaydi. Hech qanday muddat yo'qotilmaydi.",
        },
      },
      {
        "@type": "Question",
        name: "Sovg'a qilingan Premium qachon faollashadi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sovg'a qilingan Premium qabul qiluvchi tomonidan qabul qilingan zahoti faollashtiriladi. Ya'ni Premium muddati sovg'a yuborilgan vaqtdan emas, qabul qilingan vaqtdan boshlanadi. Qabul qiluvchi notifikatsiyani bossin — shu daqiqada Premium ishlaydi va shu sanadan muddat hisoblanadi.",
        },
      },
      {
        "@type": "Question",
        name: "12 oylik Premium qachon tugaydi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "12 oylik Premium aniq bir yildan keyin tugaydi. Masalan, 2026-yil 30-aprelda faollashtirilgan bo'lsa, 2027-yil 30-aprelda tugaydi. 365 kun emas, kalendar bir yil — shuning uchun kabisa yili (366 kun) bo'lsa ham bir kun ko'p ishlaydi.",
        },
      },
      {
        "@type": "Question",
        name: "Premium faollashmasa nima qilish kerak?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Birinchi navbatda 10-15 daqiqa kuting (texnik kechikish bo'lishi mumkin). Keyin Telegram'ni qaytadan oching va profilingizni tekshiring. Agar baribir faollashmagan bo'lsa, @PremiumSendBot dagi qo'llab-quvvatlashga to'lov chekini va Telegram username'ingizni yuboring — manualda tekshiriladi va tezda hal qilinadi. Premium kelmasa pul to'liq qaytariladi.",
        },
      },
      {
        "@type": "Question",
        name: "Premium muddati o'rtasida bekor qilsa pul qaytariladimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yo'q. Premium Send orqali sotib olingan Premium bir martalik to'lovga asoslangan — avtomatik yangilanish yo'q va muddat o'rtasida bekor qilinmaydi. Premium siz to'lagan muddat oxirigacha ishlaydi va keyin avtomatik to'xtaydi. Bu ko'pchilik foydalanuvchi uchun afzallik — kutilmagan to'lovlar yo'q.",
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
        name: "Telegram Premium qachon faollashadi",
        item: "https://premiumsend.uz/maqolalar/telegram-premium-qachon-faollashadi",
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
          Premium qachon faollashadi
        </span>
      </nav>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">
              Savol-javob
            </span>
            <time className="text-xs text-muted" dateTime="2026-04-30">
              2026-yil, 30-aprel
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Telegram Premium qachon faollashadi va muddat qanday hisoblanadi
          </h1>

          {/* TL;DR */}
          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-sm font-bold text-primary mb-2">QISQACHA JAVOB</p>
            <p className="text-foreground leading-relaxed font-medium">
              Telegram Premium <strong>to&apos;lov tasdiqlangach 1-5 daqiqada</strong> avtomatik faollashtiriladi (eng uzoq 10-15 daqiqa). Muddat <strong>faollashtirilgan kundan</strong>, kalendar oy bo&apos;yicha hisoblanadi (30 kun emas). Yangilash holatida muddat avvalgisining tugashidan boshlab qo&apos;shiladi — yo&apos;qotish yo&apos;q. Sovg&apos;a esa qabul qiluvchi qabul qilgan kundan boshlanadi.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Premium sotib olishdan oldin foydalanuvchilar berishi tabiiy bo&apos;lgan ikkita asosiy savol bor: &quot;Pul to&apos;laganimdan keyin qachon ishlay boshlaydi?&quot; va &quot;Muddat aniq qachon tugaydi?&quot;. Tashqi qaraganda sodda savollar, lekin javoblari unchalik tushunarli emas — chunki to&apos;lov vaqti, faollashish vaqti, kalendar oy va sovg&apos;a qabul qilish — bularning har biri muddatga turlicha ta&apos;sir qiladi.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Bu maqolada Telegram Premium muddati bilan bog&apos;liq barcha holatlarni — to&apos;lovdan faollashishgacha, kalendar oy mantiqi, yangilash va sovg&apos;a — aniq misollar va sanalar bilan tushuntiramiz. Maqola oxirida texnik muammolar paydo bo&apos;lsa nima qilish kerakligi haqida ham yo&apos;riqnoma bor.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 — Faollashish vaqti */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Premium to&apos;lovdan keyin qancha vaqtda faollashadi?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Eng aniq javob: <strong>1 daqiqadan 5 daqiqagacha</strong>. Bu Premium Send foydalanuvchilarining katta qismida ko&apos;riladigan tipik vaqt. Lekin har holatda bir nechta omillar ta&apos;sir qiladi — quyida ularning batafsili:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Bosqich</div>
                <div className="text-center">Vaqt</div>
                <div className="text-center">Nima sodir bo&apos;ladi</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">To&apos;lov yuborish</div>
                <div className="text-center text-muted">10-30 soniya</div>
                <div className="text-center text-muted">Click/Payme/Uzcard ilovasida</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Bank tasdig&apos;i</div>
                <div className="text-center text-muted">30-60 soniya</div>
                <div className="text-center text-muted">SMS, push notification</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Bot tomonidan ishlov</div>
                <div className="text-center text-muted">10-30 soniya</div>
                <div className="text-center text-muted">@PremiumSendBot tasdiqlaydi</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Telegram faollashtirishi</div>
                <div className="text-center text-primary font-medium">1-3 daqiqa</div>
                <div className="text-center text-muted">Asosiy faollashish jarayoni</div>
              </div>
              <div className="grid grid-cols-3 p-4 bg-primary-light/30 items-center text-sm">
                <div className="font-bold text-primary">Jami (tipik)</div>
                <div className="text-center font-bold text-primary">2-5 daqiqa</div>
                <div className="text-center text-green-600 font-medium">Premium ishlaydi ✓</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              Eng uzoq holatda jarayon 10-15 daqiqa davom etishi mumkin — bu odatda to&apos;lov vaqtidagi tarmoq tirbandligi, ish soatidan tashqari payt yoki Telegram serverlarida vaqtinchalik kechikish bilan bog&apos;liq. Bu ham normal va xavotir uchun sabab emas.
            </p>

            <div className="bg-section-alt rounded-xl p-5 mb-4">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Muhim:</strong> Telegram qaysi vaqt zonasida bo&apos;lishingizdan qat&apos;i nazar, faollashish jarayoni bir xil tezlikda ishlaydi. Tunda yoki dam olish kunlarida ham 5 daqiqa ichida Premium keladi — bu avtomatik tizim, qo&apos;l bilan ishlov berishni talab qilmaydi.
              </p>
            </div>

            <p className="text-muted leading-relaxed">
              Profilingizda Premium belgisi paydo bo&apos;lganda — Premium ishlay boshlagan deb hisoblang. 4 GB fayl yuklash, reklamasiz tajriba va boshqa imkoniyatlar darhol ishlaydi.
            </p>
          </section>

          {/* Section 2 — Muddat hisoblash */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Premium muddati to&apos;lov kunidan boshlanadimi yoki faollashish kunidan?
            </h2>

            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Aniq javob:</strong> Premium muddati <strong>Telegram tomonidan faollashtirilgan kundan</strong> boshlanadi. To&apos;lov bilan faollashish o&apos;rtasidagi 2-15 daqiqa farq muddatga kirmaydi — siz to&apos;laqonli muddat olasiz.
              </p>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              Bu muhim nuans, chunki ko&apos;p foydalanuvchilar &quot;to&apos;lovni qilganimdan keyin nima bo&apos;lsa ham 1 oy ishlasin&quot; deb o&apos;ylaydi. Aslida tizim sizning foydangizga ishlaydi: agar to&apos;lovdan keyin texnik kechikish bo&apos;lsa, muddat siz uchun yo&apos;qolmaydi.
            </p>

            <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm mb-4">
              <p className="text-foreground font-bold mb-2">Misol bilan tushuntirish:</p>
              <p className="text-sm text-muted leading-relaxed">
                Aytaylik, siz <strong>30-aprel soat 14:00 da</strong> 1 oylik Premium uchun to&apos;ladingiz. Texnik kechikish tufayli Premium <strong>14:08 da</strong> faollashdi. Premium muddati <strong>14:08 dan</strong> boshlab hisoblanadi va <strong>30-may soat 14:08 da</strong> tugaydi. Yo&apos;qolgan 8 daqiqa siz uchun muddat zarariga kirmaydi.
              </p>
            </div>

            <p className="text-muted leading-relaxed">
              Bu hech qanday qo&apos;shimcha sozlash talab qilmaydi — Telegram avtomatik shu mantiq bilan ishlaydi. Profilingizda Premium muddati ko&apos;rinmaydi (Premium tugashi haqida xabar tugashga 3 kun qolganda chiqadi), lekin u aniq Telegram tomonidan ushlab turiladi.
            </p>
          </section>

          {/* Section 3 — Kalendar oy */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Premium muddati 30 kun yoki kalendar oymi? Fevral muammosi
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Bu savol oddiy ko&apos;rinishdan ham qiziqarliroq. Telegram Premium muddati <strong>kalendar oy bo&apos;yicha</strong> hisoblanadi, 30 kun emas. Bu butun dunyo bo&apos;yicha standart obuna mantiqi (Apple, Google, Spotify ham xuddi shunday).
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Boshlanish sanasi</div>
                <div className="text-center">1 oylik tugashi</div>
                <div className="text-center">Necha kun?</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">15 yanvar</div>
                <div className="text-center">15 fevral</div>
                <div className="text-center text-muted">31 kun</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">15 fevral</div>
                <div className="text-center">15 mart</div>
                <div className="text-center text-amber-600">28 (yoki 29 kabisada)</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">31 yanvar</div>
                <div className="text-center">28 fevral / 1 mart</div>
                <div className="text-center text-amber-600">28-29 kun</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">15 iyul</div>
                <div className="text-center">15 avgust</div>
                <div className="text-center text-muted">31 kun</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center text-sm">
                <div className="font-medium">15 aprel</div>
                <div className="text-center">15 may</div>
                <div className="text-center text-muted">30 kun</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              Ko&apos;rinib turibdi: 1 oylik Premium qaysi oyda boshlanganligiga qarab 28 dan 31 kungacha ishlashi mumkin. Bu hech kimning xatosi emas — kalendar shunday tuzilgan. Yiliga jami 365 kun (kabisa yilida 366) — bu sizga 12 ta &quot;tenglashgan&quot; obuna emas, balki kalendar yili shaklida beriladi.
            </p>

            <div className="bg-section-alt rounded-xl p-5 mb-4">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Fevral muammosi misoli:</strong> Agar 31-yanvarda Premium olsangiz, 1 oylik tarif fevralning oxiriga (28 yoki 29-fevral) tugaydi — chunki fevralda 31 raqami yo&apos;q. Lekin bu Telegram mantiqida muammo emas: keyingi 1 oylik avtomatik 28-fevraldan boshlab 31-martgacha bo&apos;ladi.
              </p>
            </div>

            <p className="text-muted leading-relaxed">
              Agar bu mantiq sizga noaniq tuyulsa, sodda yo&apos;l: shunchaki <strong>boshlangan kun raqamini yodda tuting</strong> va keyingi oyda shu raqamga qarang. 90% holatda bu to&apos;g&apos;ri keladi.
            </p>
          </section>

          {/* Mid CTA */}
          <section>
            <div className="bg-primary-light/40 border border-primary/20 rounded-2xl p-6 md:p-8 text-center">
              <p className="text-foreground text-lg leading-relaxed mb-4">
                Premium 5 daqiqa kafolat bilan keladi —{" "}
                <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline font-bold">
                  @PremiumSendBot
                </Link>{" "}
                orqali so&apos;mda to&apos;lov, 1 oydan 12 oygacha tariflar.
              </p>
              <Link
                href="https://t.me/premiumsendbot"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-2xl hover:shadow-xl transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                Premium sotib olish
              </Link>
            </div>
          </section>

          {/* Section 4 — Yangilash */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Avvalgi Premium tugamagan bo&apos;lsa, yangisi qachondan boshlanadi?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Bu yana bir muhim nuans. Aytaylik, sizda hozir Premium bor va u 10 kun ichida tugaydi. Yangi 3 oylik Premium sotib olsangiz — eski muddat yo&apos;qolmaydi, balki <strong>yangi muddat eskisining tugashidan boshlab qo&apos;shiladi</strong>.
            </p>

            <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm mb-4">
              <p className="text-foreground font-bold mb-2">Aniq misol:</p>
              <ul className="text-sm text-muted leading-relaxed space-y-2 list-disc list-inside">
                <li>Hozirgi sana: <strong>20-aprel</strong></li>
                <li>Avvalgi Premium tugashi: <strong>30-aprel</strong> (10 kun qoldi)</li>
                <li>Yangi 3 oylik Premium sotib olasiz</li>
                <li>Yangi muddat <strong>30-apreldan</strong> emas, <strong>1-mayidan</strong> boshlanadi</li>
                <li>Yangi tugash sanasi: <strong>1-avgust</strong></li>
                <li>Jami muddat: <strong>20-apreldan 1-avgustgacha</strong> = 103 kun</li>
              </ul>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              Bu mantiq nima uchun muhim? Chunki ba&apos;zi foydalanuvchilar &quot;Premium hali tugamadi, hozir olsam pulim yo&apos;qoladi&quot; deb o&apos;ylaydi. Aslida hech narsa yo&apos;qolmaydi — har qanday vaqtda yangilashingiz mumkin va muddat shunchaki cho&apos;ziladi.
            </p>

            <div className="bg-section-alt rounded-xl p-5">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Foydali maslahat:</strong> Eng arzon yondashuv — har doim 12 oylik Premium olish (oyiga 35 417 so&apos;m, 1 oylikdan 40% arzon).{" "}
                <Link href="/maqolalar/12-oylik-telegram-premium-sotib-olish" className="text-primary hover:underline font-medium">
                  12 oylik Premium haqida batafsil
                </Link>{" "}
                — yiliga 282 996 so&apos;m tejam.
              </p>
            </div>
          </section>

          {/* Section 5 — Sovg'a */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Sovg&apos;a qilingan Premium qachon faollashadi?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Sovg&apos;a holatida muddat hisobi boshqacha — chunki ikki kishi ishtirok etadi: yuboruvchi va qabul qiluvchi. Quyida butun jarayon:
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  step: "1",
                  title: "Yuboruvchi to'lovni amalga oshiradi",
                  desc: "Siz @PremiumSendBot orqali aniq Telegram username uchun Premium sotib olasiz. To'lov tasdiqlangach, Telegram tomonidan sovg'a 'tayyor' holatga keltiriladi.",
                },
                {
                  step: "2",
                  title: "Qabul qiluvchi notifikatsiya oladi",
                  desc: "Telegram qabul qiluvchiga 'Sizga Premium sovg'a qilingan' degan xabar yuboradi. Bu xabar Telegramda ochiq turadi va eskirmaydi — qabul qiluvchi xohlagan vaqtda qabul qila oladi.",
                },
                {
                  step: "3",
                  title: "Qabul qiluvchi sovg'ani qabul qiladi",
                  desc: "Notifikatsiyada 'Premium-ni faollashtirish' tugmasini bosgan zahoti — Premium ishga tushadi. Aynan shu daqiqa Premium muddati boshlanadi.",
                },
                {
                  step: "4",
                  title: "Muddat qabul kunidan boshlanadi",
                  desc: "Agar siz 1-mayda sovg'a yubordingiz, lekin qabul qiluvchi 5-mayda qabul qildi — Premium 5-maydan boshlanadi va 5-iyungacha (3 oylik bo'lsa, 5-avgustgacha) ishlaydi. Yo'qotilgan 4 kun siz uchun ham, qabul qiluvchi uchun ham yo'qoladi.",
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

            <p className="text-muted leading-relaxed mb-4">
              Aynan shu sababli sovg&apos;a qilayotganda qabul qiluvchini darhol ogohlantirish kerak — &quot;Sizga Premium yuborganman, qabul qil&quot; deb. Aks holda muddat tekin tursa ham, qabul qilish davom etmasa Premium boshlanmaydi.
            </p>

            <p className="text-muted leading-relaxed">
              Premium sovg&apos;a qilish haqida batafsil —{" "}
              <Link href="/maqolalar/3-oylik-telegram-premium-sovga-qilish" className="text-primary font-semibold hover:underline">
                3 oylik sovg&apos;a
              </Link>{" "}
              va{" "}
              <Link href="/maqolalar/12-oylik-telegram-premium-sovga-qilish" className="text-primary font-semibold hover:underline">
                12 oylik sovg&apos;a
              </Link>{" "}
              qo&apos;llanmalari. Eslatma: Telegram qoidasiga ko&apos;ra 1 oylik sovg&apos;a mavjud emas, faqat 3, 6 va 12 oylik sovg&apos;a qilish mumkin.
            </p>
          </section>

          {/* Section 6 — Faollashmasa */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Premium faollashmagan bo&apos;lsa nima qilish kerak?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              99% holatda Premium 5 daqiqada keladi. Lekin texnik muammolar — bank kechikishi, server tirbandligi yoki noto&apos;g&apos;ri username — natijasida ba&apos;zan kechikishlar bo&apos;ladi. Quyida tartibli ko&apos;rsatma:
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">1. 10-15 daqiqa kuting</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Eng oddiy yechim — sabr. Tarmoq tirbandligi yoki Telegram serverlarida kechikish bo&apos;lsa, 15 daqiqa ichida o&apos;zi keladi. Bu vaqtda Telegram&apos;ni yopib qaytadan oching.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">2. Profilingizni tekshiring</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Telegram sozlamalariga kirib, profilingizda Premium belgisi bor-yo&apos;qligini ko&apos;ring. Ba&apos;zan Premium faollashgan, lekin badge ko&apos;rinmaydi — Telegram&apos;ni qaytadan ishga tushirish muammoni hal qiladi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">3. Username&apos;ni qayta tekshiring</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Buyurtma berishda noto&apos;g&apos;ri username kiritilgan bo&apos;lsa, Premium boshqa odamga yuborilgan bo&apos;lishi mumkin. Bot ichida buyurtma tarixini ko&apos;rib, qaysi username&apos;ga yuborilganligini tekshiring.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">4. Botdagi qo&apos;llab-quvvatlashga yozing</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Yuqoridagilar yordam bermasa, @PremiumSendBot ichidagi &quot;Qo&apos;llab-quvvatlash&quot; bo&apos;limiga to&apos;lov chekini va Telegram username&apos;ingizni yuboring. O&apos;zbek tilida operator manualda tekshiradi va tezkor hal qiladi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">5. Pul qaytarish kafolati</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Agar texnik sabablarga ko&apos;ra Premium kelmasa va muammo hal qilinmasa — to&apos;langan summa to&apos;liq qaytariladi. Bu kafolat Premium Send tomonidan rasman taqdim etilgan.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Ko&apos;pchilik foydalanuvchilar 1-2 daqiqada Premium oladi. Lekin agar muammo bo&apos;lsa — panika bo&apos;lmang, har holatda yechim topiladi. Ishonchli xizmatdan xarid haqida{" "}
              <Link href="/maqolalar/telegram-premium-eng-arzon-qayerdan-sotib-olish" className="text-primary font-semibold hover:underline">
                Telegram Premium eng arzon qayerdan sotib olish
              </Link>{" "}
              maqolasida ham yozilgan.
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
                  q: "Telegram Premium to'lovdan keyin qachon faollashadi?",
                  a: "Premium Send orqali to'lov tasdiqlangach, Telegram Premium odatda 1-5 daqiqada avtomatik faollashtiriladi. To'lov banki tasdiqi va Telegram tomonidan ishlov berishini hisobga olganda eng uzoq holat 10-15 daqiqa. Agar 15 daqiqadan keyin ham kelmasa — botdagi qo'llab-quvvatlashga to'lov chekini yuboring.",
                },
                {
                  q: "Premium muddati to'lov kunidan boshlanadimi yoki faollashish kunidan?",
                  a: "Premium muddati Telegram tomonidan faollashtirilgan kundan boshlanadi, to'lov sanasidan emas. To'lov bilan faollashish o'rtasidagi 5-15 daqiqa farq muddatga kirmaydi.",
                },
                {
                  q: "Premium muddati 30 kun yoki kalendar oymi?",
                  a: "Telegram Premium muddati kalendar oy bo'yicha hisoblanadi. Masalan, 15-yanvarda faollashtirilgan 1 oylik Premium 15-fevralgacha ishlaydi. Fevral 28-kun bo'lsa ham, 31-yanvar 28-fevralgacha to'g'ri keladi (chunki fevralda 31 yo'q).",
                },
                {
                  q: "Avvalgi Premium tugamagan bo'lsa, yangisi qachondan boshlanadi?",
                  a: "Yangi sotib olingan muddat avvalgisining tugashi sanasidan boshlanadi va qo'shiladi. Agar 10 kun qolgan bo'lsa va 3 oylik yangi olsangiz — jami 100 kun atrofida Premium ishlaydi. Hech qanday muddat yo'qotilmaydi.",
                },
                {
                  q: "Sovg'a qilingan Premium qachon faollashadi?",
                  a: "Sovg'a qabul qiluvchi tomonidan qabul qilingan zahoti faollashtiriladi. Premium muddati sovg'a yuborilgan emas, qabul qilingan kundan boshlanadi. Qabul qiluvchini ogohlantiring — aks holda Premium kutib turaveradi.",
                },
                {
                  q: "12 oylik Premium qachon tugaydi?",
                  a: "12 oylik Premium aniq bir yildan keyin tugaydi. Masalan, 30-aprel 2026-da faollashtirilgan bo'lsa, 30-aprel 2027-da tugaydi. Kabisa yili bo'lsa ham bir kun ko'p ishlaydi.",
                },
                {
                  q: "Premium faollashmasa nima qilish kerak?",
                  a: "10-15 daqiqa kuting, profilingizni tekshiring, username to'g'riligini tasdiqlang. Yordam bermasa @PremiumSendBot dagi qo'llab-quvvatlashga to'lov chekini yuboring — manualda tekshiriladi va tez hal qilinadi. Premium kelmasa pul to'liq qaytariladi.",
                },
                {
                  q: "Premium muddati o'rtasida bekor qilsa pul qaytariladimi?",
                  a: "Yo'q. Premium Send orqali sotib olingan Premium bir martalik to'lovga asoslangan — avtomatik yangilanish yo'q va muddat o'rtasida bekor qilinmaydi. Premium siz to'lagan muddat oxirigacha ishlaydi, keyin avtomatik to'xtaydi.",
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
                Premium muddati raqamlarda
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">2-5 daqiqa</p>
                  <p className="text-sm text-muted">To&apos;lovdan faollashishgacha</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">Kalendar oy</p>
                  <p className="text-sm text-muted">28-31 kun, oyga qarab</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">Kafolat</p>
                  <p className="text-sm text-muted">Kelmasa pul qaytariladi</p>
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
                  Telegram Premium <strong className="text-white">2-5 daqiqada</strong> faollashadi va muddat <strong className="text-white">kalendar oy</strong> bo&apos;yicha hisoblanadi. Yangilashda yo&apos;qotish yo&apos;q, sovg&apos;a qabul qilingan kundan boshlanadi. Premium Send 5 daqiqa kafolat va pul qaytarish bilan ishlaydi.
                </p>
                <Link
                  href="https://t.me/premiumsendbot"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  Premium sotib olish
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
