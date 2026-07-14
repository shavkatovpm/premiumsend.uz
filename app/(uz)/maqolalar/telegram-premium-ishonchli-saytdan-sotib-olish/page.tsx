import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Telegram Premium ishonchli saytdan sotib olish: aldovsiz xarid qo'llanmasi",
  description:
    "Telegram Premium uchun ishonchli sayt qanday tanlanadi? 7 tekshiruv mezoni, sayt qizil bayroqlari, ofertaga qarash, kanal tarixi va to'lov xavfsizligi. PremiumSend misolida amaliy qo'llanma — 1 oylik 59 000, 12 oylik 425 000 so'm.",
  keywords: [
    "telegram premium ishonchli",
    "telegram premium rasmiy",
    "ishonchli telegram premium sotib olish",
    "telegram premium aldovsiz xarid",
    "telegram premium qaysi sayt ishonchli",
    "telegram premium o'zbekistondan ishonchli",
    "telegram premium reseller tekshirish",
    "premiumsend ishonchlimi",
    "telegram premium qonuniy",
    "PremiumSendBot",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/maqolalar/telegram-premium-ishonchli-saytdan-sotib-olish",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/telegram-premium-ishonchli-saytdan-sotib-olish",
      ru: "https://premiumsend.uz/ru/maqolalar/telegram-premium-ishonchli-saytdan-sotib-olish",
      "x-default": "https://premiumsend.uz/maqolalar/telegram-premium-ishonchli-saytdan-sotib-olish",
    },
  },
  openGraph: {
    title:
      "Telegram Premium ishonchli saytdan sotib olish — aldovsiz qo'llanma",
    description:
      "7 ta tekshiruv mezoni, qizil bayroqlar va PremiumSend misolida amaliy qo'llanma. Mahalliy karta, aniq narxlar va rasmiy oferta — to'lashdan oldin nimaga qarash kerak.",
    url: "https://premiumsend.uz/maqolalar/telegram-premium-ishonchli-saytdan-sotib-olish",
    type: "article",
    publishedTime: "2026-05-22",
  },
};

export default function ArticleTelegramPremiumIshonchliSayt() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    image: "https://premiumsend.uz/og-image.png",
    headline:
      "Telegram Premium ishonchli saytdan sotib olish: aldovsiz xarid qo'llanmasi",
    description:
      "Telegram Premium uchun ishonchli reseller saytni qanday tanlash kerak — 7 mezon, qizil bayroqlar va to'lashdan oldingi tekshiruv qo'llanmasi.",
    datePublished: "2026-05-22",
    dateModified: "2026-05-22",
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
      "https://premiumsend.uz/maqolalar/telegram-premium-ishonchli-saytdan-sotib-olish",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Telegram Premium uchun reseller saytni qanday tekshirish kerak?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Eng muhim 7 ta belgi: 1) ochiq sayt domeni va HTTPS sertifikati; 2) ochiq oferta va shartlar sahifasi; 3) aniq narxlar (so'mda) saytda e'lon qilingan; 4) Telegram kanali yoki boti foydalanuvchilar tarixi bilan; 5) mahalliy karta (Uzcard/Humo/Click/Payme) qabul qilinadi; 6) to'lovdan keyin Premium 5-10 daqiqada keladi; 7) xato bo'lsa, murojaat qilish uchun aniq aloqa kanali bor. PremiumSend.uz — saytda barcha 7 mezon mavjud.",
        },
      },
      {
        "@type": "Question",
        name: "Premium qancha so'mda bo'lishi kerak — qaysi narx normal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "2026-yil holatiga ko'ra normal mahalliy reseller narxi: 1 oylik 55 000-65 000 so'm, 3 oylik 170 000-185 000 so'm, 6 oylik 230 000-250 000 so'm, 12 oylik 420 000-440 000 so'm. PremiumSend'da aniq narx: 59 000 / 175 000 / 235 000 / 425 000 so'm. Agar reseller 12 oylikni 50 000 so'mga taklif qilsa — bu 100% aldov. Bozordan tushib ketgan narx — eng aniq qizil bayroq.",
        },
      },
      {
        "@type": "Question",
        name: "PremiumSend.uz rasmiy hamkormi yoki reseller?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PremiumSend.uz — O'zbekistondagi mahalliy reseller. Rasmiy ravishda Telegram'ning rasmiy hamkori emas (Telegram'ning rasmiy hamkori Fragment.com bo'lib, u TON orqali ishlaydi). PremiumSend Telegram'ning rasmiy bulk-gift mexanizmidan foydalanadi va akkauntda rasmiy Premium statusi paydo bo'ladi. Ya'ni mahsulot rasmiy, lekin sotuvchi rasmiy hamkor sertifikatiga ega emas — bu ko'pchilik mahalliy resellerga taalluqli normal holat.",
        },
      },
      {
        "@type": "Question",
        name: "Telegram Premium reseller ofertani qanday tekshirish kerak?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Saytning footer'ida 'Oferta' yoki 'Foydalanish shartlari' havolasi bo'lishi kerak. Ofertani ochib quyidagilarni qidiring: 1) sotuvchining huquqiy nomi yoki MChJ raqami; 2) to'lov shartlari va pul qaytarish siyosati; 3) xizmat ko'rsatish muddati va kechikishlar; 4) shaxsiy ma'lumotlarni qayta ishlash siyosati. Agar oferta umuman yo'q yoki bo'sh sahifa bo'lsa — bu jiddiy qizil bayroq. PremiumSend ofertasi /oferta sahifasida ochiq.",
        },
      },
      {
        "@type": "Question",
        name: "Bozordan past narxda Premium taklif qilingan bo'lsa, nima qilish kerak?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bunday takliflarni hech qachon qabul qilmang. 2026-yilda Telegram Premium 1 oylik tannarxi taxminan 4 dollar, ya'ni 50 000 so'm atrofida. Hech bir halol reseller buni 30 000 so'mga sotmaydi — chunki bu zarar. Past narx odatda 3 ta sxema: pulni olib aloqaga chiqmaslik; o'g'irlangan karta orqali boshqa odam pulidan Premium berish (Telegram aniqlasa darhol bekor qilinadi); 1-2 hafta keyin bekor qilinadigan Premium. Halol narx — minimal himoya signali.",
        },
      },
      {
        "@type": "Question",
        name: "Pul to'lab Premium kelmasa, nima qilish mumkin?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ishonchli sayt orqali xarid qilgan bo'lsangiz: 1) avval 15 daqiqa kuting (ba'zida kechikish bo'ladi); 2) bot ichidan 'pul to'ladim, Premium yo'q' deb yozing va to'lov chekini biriktiring; 3) javob 1-2 soat ichida kelishi kerak. Ishonchsiz manbadan (shaxsiy chat orqali, sayti yo'q reseller) olgan bo'lsangiz — pulni qaytarish odatda mumkin emas. Shu sababli xarid OLDIN sayt va oferta tekshirilishi kerak — keyin emas. PremiumSend'da to'lov muvaffaqiyatsiz bo'lsa, pul darhol qaytariladi.",
        },
      },
      {
        "@type": "Question",
        name: "Reseller Telegram kanali ishonchli ekanini qanday bilsa bo'ladi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Botning ochiq Telegram kanaliga kiring va quyidagilarga qarang: 1) kanal qachon ochilgan (eski kanal — yaxshi belgi); 2) postlar muntazamligi (jonli loyiha bo'lsa kamida 2-3 kunda bir post); 3) izohlardagi haqiqiy foydalanuvchi tajribalari (faqat o'sha kun ochilgan akkauntlar emas); 4) saytga havola bormi va u ishlayaptimi. Sun'iy obunachi va tortilgan izohlar bilan kanallarni bir necha daqiqada ajratish mumkin — postlar bir-biriga o'xshash, izohlar shablon, real qiziqish belgilari yo'q.",
        },
      },
      {
        "@type": "Question",
        name: "Telegram Premium uchun shaxsiy ma'lumot so'rasa, normalmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Premium aktivlashtirish uchun shaxsiy ma'lumotlar kerak EMAS. Faqat Telegram username (@usernameingiz) yetarli — agar sovg'a qilayotgan bo'lsangiz, oluvchi username'ini ham kiriting. Ishonchli reseller hech qachon pasport, INN, plastik kartaning to'liq raqami yoki SMS kodini so'ramaydi. Karta orqali to'lov bank yoki Click/Payme ilovasidan amalga oshiriladi — reseller faqat to'lov fakti haqida ma'lumot oladi. Karta to'liq raqamini so'rasa — bu 100% firibgar.",
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
        name: "Ishonchli saytdan sotib olish",
        item: "https://premiumsend.uz/maqolalar/telegram-premium-ishonchli-saytdan-sotib-olish",
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
          Ishonchli saytdan sotib olish
        </span>
      </nav>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">
              Xavfsizlik qo&apos;llanmasi
            </span>
            <time className="text-xs text-muted" dateTime="2026-05-22">
              2026-yil, 22-may
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Telegram Premium ishonchli saytdan sotib olish: aldovsiz xarid qo&apos;llanmasi
          </h1>

          {/* TL;DR */}
          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-sm font-bold text-primary mb-2">QISQACHA JAVOB</p>
            <p className="text-foreground leading-relaxed font-medium">
              Telegram Premium uchun ishonchli reseller tanlashning 7 ta belgisi: ochiq sayt va HTTPS, ko&apos;rinadigan oferta, aniq narxlar so&apos;mda, eski Telegram kanali, mahalliy karta qabul qilinadi, Premium 5-10 daqiqada faollashadi va aloqa kanali ishlaydi. Bozordan past narx (12 oylik 50 000 so&apos;m kabi) — 100% aldov.{" "}
              <Link href="https://telegram.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>{" "}
              orqali tekshirilgan narxlar: <strong>1 oylik 59 000</strong>, <strong>3 oylik 175 000</strong>, <strong>12 oylik 425 000 so&apos;m</strong>.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            &quot;Telegram Premium-ni qaysi saytdan olsa, aldanmayman?&quot; — O&apos;zbekistondagi har bir yangi xaridorda paydo bo&apos;ladigan savol. Internetda yuzlab kanal va sayt o&apos;zini Premium sotuvchisi deb e&apos;lon qiladi, lekin ulardan ko&apos;pchiligida bir necha qizil bayroq mavjud — past narx, oferta yo&apos;q, faqat shaxsiy chat orqali ishlash.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Bu maqolada ishonchli reseller saytni tanlashning 7 ta aniq mezonini, eng ko&apos;p uchraydigan firibgar sxemalarni va to&apos;lashdan oldingi qisqa tekshiruv qo&apos;llanmasini ko&apos;rib chiqamiz. PremiumSend.uz misolida har bir mezon qanday qo&apos;llanilishi ham ko&apos;rsatiladi.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 — 7 mezon */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Ishonchli Premium reseller saytning 7 ta belgisi
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Quyidagi belgilarning hammasi yoki kamida 6 tasi mavjud bo&apos;lsa, sayt ishonchli deyish mumkin. Hatto bittasi yo&apos;q bo&apos;lsa — ehtiyot bo&apos;lish kerak; uch yoki ko&apos;p mezon yo&apos;q bo&apos;lsa — boshqa joydan izlash mantiqliroq.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">1. Sayt domeni va HTTPS</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Bot bilan bir qatorda ochiq sayt domeni (masalan, premiumsend.uz) bo&apos;lishi kerak. Brauzerdagi qulflanish belgisi — HTTPS sertifikati. Sayti umuman yo&apos;q va faqat bot — bu allaqachon birinchi qizil bayroq.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">2. Oferta va shartlar</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Saytda &quot;Oferta&quot; yoki &quot;Foydalanish shartlari&quot; sahifasi ochiq bo&apos;lishi shart. Ofertada to&apos;lov, pul qaytarish va xizmat shartlari yozilgan. Oferta umuman yo&apos;qligi — sotuvchi javobgarlikni qabul qilmaydi degani.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">3. Aniq narxlar (so&apos;mda)</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Barcha tariflar narxi saytda yoki bot ichida ochiq ko&apos;rsatilgan bo&apos;lishi kerak. &quot;Yozing aniq narx aytaman&quot; tipidagi javoblar — ishonchsiz. So&apos;mda aniq raqamlar mavjud bo&apos;lishi muhim.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">4. Telegram kanali tarixi</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Botning rasmiy Telegram kanali bo&apos;lishi va u kamida 6 oy oldin ochilgan bo&apos;lishi maqsadga muvofiq. Yangi ochilgan kanal — vaqtinchalik loyiha bo&apos;lishi mumkin, eski kanal bilan obro&apos;si tushgan bo&apos;lardi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">5. Mahalliy karta qabul qilinadi</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Uzcard, Humo, Click, Payme — kamida 3 ta usul qabul qilinishi normal. Faqat bir karta, va u boshqa shaxsga tegishli bo&apos;lsa (jismoniy shaxs kartasi) — risk yuqori. Korxonalar odatda Click/Payme integratsiyasi orqali ishlaydi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">6. Tezkor faollashish</h3>
                <p className="text-sm text-muted leading-relaxed">
                  To&apos;lovdan keyin Premium akkauntda 5-10 daqiqada faollashishi kerak. Agar sotuvchi &quot;1-2 kun kutasiz&quot; desa — bu odatda Fragment&apos;dan kichik chegirma uchun queue&apos;ga qo&apos;yiladi yoki umuman shubhali sxema.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm md:col-span-2">
                <h3 className="font-bold text-foreground mb-2">7. Aloqa va saport kanali</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Muammo bo&apos;lganda murojaat qilish uchun ochiq kanal — bot ichida saport bo&apos;limi yoki alohida @username. Agar to&apos;lovdan keyin sotuvchi bilan bog&apos;lanish faqat shaxsiy chat orqali bo&apos;lib, javob 1-2 kunda kelsa — keyingi muammolarda yordam olish qiyin.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 — qizil bayroqlar */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Eng tez-tez uchraydigan qizil bayroqlar (xarid qilmang)
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Quyidagi belgilardan bittasi ham mavjud bo&apos;lsa — boshqa reseller&apos;ni qidirish maqsadga muvofiq. Hech qaysi haqiqiy chegirma yoki yaxshilik bunday riskni oqlamaydi.
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-2 bg-section-alt p-4 font-bold text-sm">
                <div>Qizil bayroq</div>
                <div>Nima uchun xavfli</div>
              </div>
              <div className="grid grid-cols-2 p-4 border-b border-card-border items-start text-sm">
                <div className="font-medium">12 oylik 50 000–100 000 so&apos;m</div>
                <div className="text-muted">Tannarxdan past narx — yo pul olib qochish, yo o&apos;g&apos;irlangan karta orqali Premium berish (Telegram aniqlab bekor qiladi)</div>
              </div>
              <div className="grid grid-cols-2 p-4 border-b border-card-border items-start text-sm">
                <div className="font-medium">Sayt yo&apos;q, faqat shaxsiy chat</div>
                <div className="text-muted">Hech qanday javobgarlik yo&apos;q, oferta yo&apos;q, pul qaytarish imkoniyati yo&apos;q</div>
              </div>
              <div className="grid grid-cols-2 p-4 border-b border-card-border items-start text-sm">
                <div className="font-medium">&quot;Bepul Telegram Premium&quot; va&apos;dasi</div>
                <div className="text-muted">Bepul Premium texnik jihatdan mumkin emas — bu odatda akkaunt o&apos;g&apos;rilash sxemasi</div>
              </div>
              <div className="grid grid-cols-2 p-4 border-b border-card-border items-start text-sm">
                <div className="font-medium">Karta to&apos;liq raqami so&apos;ralsa</div>
                <div className="text-muted">Halol to&apos;lovda karta raqami emas, faqat o&apos;tkazma kerak — bu firibgarlik</div>
              </div>
              <div className="grid grid-cols-2 p-4 border-b border-card-border items-start text-sm">
                <div className="font-medium">SMS kod yoki parol so&apos;ralsa</div>
                <div className="text-muted">Hech qaysi halol jarayonda Telegram parolingiz yoki SMS kodi kerak emas</div>
              </div>
              <div className="grid grid-cols-2 p-4 border-b border-card-border items-start text-sm">
                <div className="font-medium">&quot;Pasport rasmi yuboring&quot;</div>
                <div className="text-muted">Premium uchun pasport ham, INN ham kerak emas — faqat Telegram username yetarli</div>
              </div>
              <div className="grid grid-cols-2 p-4 items-start text-sm">
                <div className="font-medium">&quot;Akkauntga kirish ma&apos;lumotini bering&quot;</div>
                <div className="text-muted">Hech qaysi vaziyatda hech kimga Telegram login ma&apos;lumotini bermang — Premium aktivlashtirish uchun bu kerak emas</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Halol Premium aktivlashtirish jarayoni juda oddiy: siz pul to&apos;laysiz, sotuvchi Telegram&apos;ning bulk-gift mexanizmi orqali sizning username&apos;ingizga Premium yuboradi, sizda darhol u faollashadi. Hech qanday parol, SMS, pasport yoki karta raqami kerak emas.
            </p>
          </section>

          {/* Mid CTA */}
          <section>
            <div className="bg-primary-light/40 border border-primary/20 rounded-2xl p-6 md:p-8 text-center">
              <p className="text-foreground text-lg leading-relaxed mb-4">
                Tekshirilgan, oferta bilan ishlovchi mahalliy reseller — <strong>@PremiumSendBot</strong>. Uzcard, Humo, Click, Payme barchasi so&apos;mda. <strong>1 oylik 59 000</strong>, <strong>6 oylik 235 000</strong>, <strong>12 oylik 425 000 so&apos;m</strong>. Premium 3-5 daqiqada akkauntda.
              </p>
              <Link
                href="https://telegram.me/premiumsendbot"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-2xl hover:shadow-xl transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                @PremiumSendBot&apos;ga o&apos;tish
              </Link>
            </div>
          </section>

          {/* Section 3 — bozor narxi */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Premium qancha turishi kerak — bozor narxlari oralig&apos;i
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Narx — eng aniq ishonchlilik signali. Halol reseller tannarxdan past sotmaydi — chunki bu zarar va biznes uzoq davom etmaydi. 2026-yil holatiga ko&apos;ra normal oraliqlar quyidagicha:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto mb-6">
              <table className="w-full text-sm min-w-[500px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">Tarif</th>
                    <th className="p-4 text-center font-bold">Normal oraliq</th>
                    <th className="p-4 text-center font-bold">PremiumSend</th>
                    <th className="p-4 text-center font-bold">Aldov signali</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">1 oylik</td>
                    <td className="p-4 text-center text-muted">55 000 – 70 000</td>
                    <td className="p-4 text-center text-primary font-bold">59 000</td>
                    <td className="p-4 text-center text-red-600">&lt; 40 000 so&apos;m</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">3 oylik</td>
                    <td className="p-4 text-center text-muted">170 000 – 200 000</td>
                    <td className="p-4 text-center text-primary font-bold">175 000</td>
                    <td className="p-4 text-center text-red-600">&lt; 120 000 so&apos;m</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">6 oylik</td>
                    <td className="p-4 text-center text-muted">230 000 – 260 000</td>
                    <td className="p-4 text-center text-primary font-bold">235 000</td>
                    <td className="p-4 text-center text-red-600">&lt; 170 000 so&apos;m</td>
                  </tr>
                  <tr className="bg-primary-light/30">
                    <td className="p-4 font-medium">12 oylik</td>
                    <td className="p-4 text-center text-muted">420 000 – 460 000</td>
                    <td className="p-4 text-center text-primary font-bold">425 000</td>
                    <td className="p-4 text-center text-red-600">&lt; 300 000 so&apos;m</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-muted leading-relaxed">
              Agar reseller 12 oylikni 100 000 so&apos;mga taklif qilsa — bu 75% chegirma bo&apos;ladi, va bunday tannarx hech bir halol biznesda mumkin emas. Past narx — uch sxemaga ishora qiladi: pulni olib aloqaga chiqmaslik; Telegram tomonidan bekor qilinadigan o&apos;g&apos;irlangan karta orqali Premium; yoki 1-2 hafta keyin uchiriladigan Premium (chunki sotuvchi uni qaytarib oladi).
            </p>
          </section>

          {/* Section 4 — PremiumSend mezonlari */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              PremiumSend.uz har 7 mezon bo&apos;yicha qanday baholanadi?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Yuqoridagi qo&apos;llanma mavhum bo&apos;lmasligi uchun PremiumSend.uz misolida har bir mezon qanday qoplanganini ko&apos;rib chiqamiz:
            </p>

            <div className="space-y-3 mb-6">
              {[
                {
                  num: "1",
                  title: "Sayt va HTTPS",
                  status: "✅",
                  text: "premiumsend.uz domeni ochiq, SSL sertifikati o'rnatilgan. Brauzerda qulflanish belgisi ko'rinadi.",
                },
                {
                  num: "2",
                  title: "Oferta",
                  status: "✅",
                  text: "/oferta sahifasida to'liq foydalanish shartlari, narxlar, javobgarlik chegaralari va aloqa ma'lumotlari yozilgan.",
                },
                {
                  num: "3",
                  title: "Aniq narxlar so'mda",
                  status: "✅",
                  text: "Saytning bosh sahifasida va har bir tarif sahifasida narx aniq so'mda ko'rsatilgan — 59 000 / 175 000 / 235 000 / 425 000.",
                },
                {
                  num: "4",
                  title: "Telegram kanali tarixi",
                  status: "✅",
                  text: "@PremiumSendBot — uzoq vaqtdan beri ishlaydigan bot. Kanalga o'zingiz kirib, postlar tarixini va izohlarni tekshirib chiqing — bu eng oddiy va aniq usul.",
                },
                {
                  num: "5",
                  title: "Mahalliy karta",
                  status: "✅",
                  text: "Uzcard, Humo, Click, Payme va Visa — barchasi qabul qilinadi. Click va Payme orqali to'lov 1 daqiqada amalga oshadi.",
                },
                {
                  num: "6",
                  title: "Tezkor faollashish",
                  status: "✅",
                  text: "To'lovdan keyin Premium akkauntda 3-5 daqiqada faollashadi. Hech qanday queue yoki bir necha kun kutish yo'q.",
                },
                {
                  num: "7",
                  title: "Aloqa va saport",
                  status: "✅",
                  text: "Bot ichidan saport buyrug'i orqali murojaat qilish mumkin. Saytda ham aniq aloqa ma'lumotlari bor.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-4 border border-card-border shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {item.num}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-foreground">{item.title}</h3>
                      <span className="text-green-600 font-bold">{item.status}</span>
                    </div>
                    <p className="text-sm text-muted">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-muted leading-relaxed">
              7/7 mezon — bu PremiumSend.uz&apos;ni mahalliy reseller&apos;lar orasida tekshirilgan tanlovga aylantiradi. Lekin har bir foydalanuvchi shu mezonlarni o&apos;zi yana bir bor tekshirib chiqishini tavsiya qilamiz —{" "}
              <Link href="/oferta" className="text-primary font-semibold hover:underline">/oferta</Link> sahifasini va botning Telegram kanalini ochib ko&apos;rib chiqing.
            </p>
          </section>

          {/* Section 5 — to'lovdan oldingi qadamlar */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Pul to&apos;lashdan oldin — 4 daqiqalik tekshiruv
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Quyidagi 4 ta qadam — 5 daqiqadan ko&apos;p vaqt olmaydi, lekin yuqoridagi 7 mezonni juda tez tekshirib chiqishga yordam beradi. Har xarid oldin shu qadamlarni o&apos;tish ishonchli odat.
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  step: "1",
                  title: "Sayt va ofertani oching (1 daqiqa)",
                  desc: "Brauzerda domenga kiring, footer'dagi 'Oferta' yoki 'Foydalanish shartlari' havolasini bosing. Sahifa ochilsa va matn bor bo'lsa — birinchi mezon o'tdi. Sahifa bo'sh yoki yo'q bo'lsa — qaytib chiqing.",
                },
                {
                  step: "2",
                  title: "Bot kanaliga kiring (1 daqiqa)",
                  desc: "Botning rasmiy Telegram kanaliga kiring, kanal qachon ochilganini va postlar muntazamligini ko'ring. Eng oddiy belgi — saytga havola va izohlardagi real foydalanuvchilar.",
                },
                {
                  step: "3",
                  title: "Narxni jadval bilan solishtiring (1 daqiqa)",
                  desc: "Yuqoridagi bozor narxi jadvali bilan taqqoslang. Agar narx normal oraliqda bo'lsa — uchinchi mezon o'tdi. Agar tannarxdan past bo'lsa — chiqib keting.",
                },
                {
                  step: "4",
                  title: "Karta turini va to'lov mexanizmini tekshiring (1 daqiqa)",
                  desc: "Bot menyusida qaysi karta turlari taklif qilinadi: Uzcard, Humo, Click, Payme yoki Visa. Mahalliy karta yo'q bo'lib, faqat boshqa shaxs kartasi bo'lsa — risk yuqori.",
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
              Shu 4 qadam aldovning 90% holatlarini oldindan aniqlab beradi. Vaqt sarflash arzimas — bir martalik pulni qaytarib olish urinishidan ko&apos;ra ancha qisqa.
            </p>
          </section>

          {/* Section 6 — ishonchli vs ishonchsiz */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Ishonchli va ishonchsiz reseller — qanday farq qiladi?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Quyidagi jadvalda ikki tip resellerning aniq farqlari ko&apos;rsatilgan. Agar siz duch kelgan variant chap ustunga ko&apos;proq mos kelsa — bu yashil chiroq.
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto mb-6">
              <table className="w-full text-sm min-w-[600px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">Belgi</th>
                    <th className="p-4 text-center font-bold text-green-700">Ishonchli</th>
                    <th className="p-4 text-center font-bold text-red-700">Ishonchsiz</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Sayt</td>
                    <td className="p-4 text-center text-green-600">Ochiq domen, HTTPS</td>
                    <td className="p-4 text-center text-red-600">Sayt yo&apos;q</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Oferta</td>
                    <td className="p-4 text-center text-green-600">Footer&apos;da, to&apos;liq</td>
                    <td className="p-4 text-center text-red-600">Yo&apos;q yoki bo&apos;sh</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Narxlar</td>
                    <td className="p-4 text-center text-green-600">Saytda aniq, so&apos;mda</td>
                    <td className="p-4 text-center text-red-600">&quot;Yozing aytaman&quot;</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">12 oylik narx</td>
                    <td className="p-4 text-center text-green-600">420 000–440 000</td>
                    <td className="p-4 text-center text-red-600">50 000–150 000</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">To&apos;lov</td>
                    <td className="p-4 text-center text-green-600">Click/Payme integratsiya</td>
                    <td className="p-4 text-center text-red-600">Jismoniy shaxs kartasi</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Faollashish</td>
                    <td className="p-4 text-center text-green-600">3-10 daqiqa</td>
                    <td className="p-4 text-center text-red-600">&quot;1-2 kun kuting&quot;</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Saport</td>
                    <td className="p-4 text-center text-green-600">Bot ichida, javob 1-2 soat</td>
                    <td className="p-4 text-center text-red-600">Shaxsiy chat, javob yo&apos;q</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">So&apos;ralgan ma&apos;lumot</td>
                    <td className="p-4 text-center text-green-600">Faqat @username</td>
                    <td className="p-4 text-center text-red-600">Karta, SMS, pasport</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-muted leading-relaxed">
              Sakkiz mezondan kamida olti tasi yashil bo&apos;lsa, reseller normal hisoblanadi. Beshdan kam bo&apos;lsa — alohida ehtiyot bo&apos;lish kerak. Uch yoki kam bo&apos;lsa — bu yerdan xarid qilmaslik tavsiya etiladi.
            </p>
          </section>

          {/* Section 7 — agar muammo bo'lsa */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Agar to&apos;lov qilingan, lekin Premium kelmasa nima qilish kerak?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Ishonchli reseller orqali xarid qilgan bo&apos;lsangiz, muammo deyarli har doim hal qilinadi. Ishonchsiz manbadan olgan bo&apos;lsangiz — odatda pul qaytarish mumkin emas. Quyidagi ketma-ketlikni bajaring:
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">1. 15 daqiqa kuting</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Ba&apos;zi paytlarda Telegram tomonida kechikish bo&apos;ladi. Bu vaqt ichida Telegram Settings → Premium bo&apos;limini tekshiring.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">2. Bot ichidan saport buyrug&apos;i</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Bot menyusidan saport tugmasini bosing va &quot;to&apos;ladim, Premium yo&apos;q&quot; deb yozing. To&apos;lov chekini (Click/Payme/bank ilovasi screenshot) biriktiring. Ishonchli reseller javobi 1-2 soat ichida keladi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">3. To&apos;lov platformasi orqali</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Agar Click/Payme orqali to&apos;langan bo&apos;lsa va sotuvchi javob bermasa — Click yoki Payme saporti orqali tranzaksiyani &quot;dispute&quot; (nizo) qilib bo&apos;ladi. Lekin bu odatda bir necha kun oladi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">4. Bank chargeback (so&apos;nggi chora)</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Karta orqali to&apos;langan bo&apos;lsa, bankka murojaat qilib chargeback so&apos;rash mumkin. Lekin bu jarayon 1-2 oy davom etadi va har doim ham muvaffaqiyatli bo&apos;lmaydi.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Aynan shu sababli xarid OLDIN sayt va sotuvchini tekshirish kerak. 5 daqiqalik tekshiruv bir necha oylik chargeback urinishidan oddiyroq. PremiumSend bilan to&apos;lov muvaffaqiyatsiz bo&apos;lsa, mablag&apos; darhol qaytariladi — chunki barcha tranzaksiyalar Click/Payme/bank orqali rasmiy ravishda amalga oshiriladi.
            </p>
          </section>

          {/* Section 8 — qonuniylik */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Reseller orqali Premium olish qonuniymi va xavfsizmi?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Mahalliy reseller orqali Telegram Premium olish — bu qonuniy. Reseller Telegram&apos;ning rasmiy bulk-gift (ko&apos;p sovg&apos;a) mexanizmidan foydalanadi: u Fragment.com yoki boshqa kanal orqali Premium obunalarini ulgurji sotib oladi va keyin O&apos;zbekistondagi foydalanuvchilarga mahalliy karta orqali sotadi. Sizning akkauntingizda paydo bo&apos;ladigan Premium statusi — Telegram&apos;ning o&apos;zi tomonidan tasdiqlangan rasmiy obuna.
            </p>

            <p className="text-muted leading-relaxed mb-4">
              Bu sxema Telegram&apos;ning Foydalanish Shartlari (ToS)ga zid emas — chunki Premium sovg&apos;a qilish va boshqa foydalanuvchiga jo&apos;natish Telegram&apos;ning o&apos;zi tomonidan ruxsat etilgan. Akkauntingiz bloklanmaydi, Premium o&apos;chirilmaydi, hech qanday cheklov yo&apos;q. Yagona shart — to&apos;lov rasmiy yo&apos;l bilan (Telegram bulk-gift orqali) amalga oshirilganligi, bu esa har qanday halol reseller qiladi.
            </p>

            <p className="text-muted leading-relaxed">
              Aksincha, ishonchsiz manbadan olingan Premium (masalan, &quot;crack&quot; yoki o&apos;g&apos;irlangan karta orqali) — bu Telegram tomonidan bekor qilinishi mumkin. Shu sababli halol reseller tanlash — nafaqat pulni saqlash, balki Premium statusining barqarorligini ham ta&apos;minlash. Batafsil tekshiruv uchun{" "}
              <Link href="/maqolalar/telegram-premium-xavfsiz-aldovdan-saqlanish" className="text-primary font-semibold hover:underline">
                aldovdan saqlanish bo&apos;yicha alohida qo&apos;llanma
              </Link>{" "}
              ham foydali.
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
                  q: "Telegram Premium uchun reseller saytni qanday tekshirish kerak?",
                  a: "Eng muhim 7 ta belgi: 1) ochiq sayt domeni va HTTPS sertifikati; 2) ochiq oferta va shartlar sahifasi; 3) aniq narxlar (so'mda) saytda e'lon qilingan; 4) Telegram kanali yoki boti foydalanuvchilar tarixi bilan; 5) mahalliy karta (Uzcard/Humo/Click/Payme) qabul qilinadi; 6) to'lovdan keyin Premium 5-10 daqiqada keladi; 7) xato bo'lsa, murojaat qilish uchun aniq aloqa kanali bor. PremiumSend.uz — saytda barcha 7 mezon mavjud.",
                },
                {
                  q: "Premium qancha so'mda bo'lishi kerak — qaysi narx normal?",
                  a: "2026-yil holatiga ko'ra normal mahalliy reseller narxi: 1 oylik 55 000-65 000 so'm, 3 oylik 170 000-185 000 so'm, 6 oylik 230 000-250 000 so'm, 12 oylik 420 000-440 000 so'm. PremiumSend'da aniq narx: 59 000 / 175 000 / 235 000 / 425 000 so'm. Agar reseller 12 oylikni 50 000 so'mga taklif qilsa — bu 100% aldov. Bozordan tushib ketgan narx — eng aniq qizil bayroq.",
                },
                {
                  q: "PremiumSend.uz rasmiy hamkormi yoki reseller?",
                  a: "PremiumSend.uz — O'zbekistondagi mahalliy reseller. Rasmiy ravishda Telegram'ning rasmiy hamkori emas (Telegram'ning rasmiy hamkori Fragment.com bo'lib, u TON orqali ishlaydi). PremiumSend Telegram'ning rasmiy bulk-gift mexanizmidan foydalanadi va akkauntda rasmiy Premium statusi paydo bo'ladi. Ya'ni mahsulot rasmiy, lekin sotuvchi rasmiy hamkor sertifikatiga ega emas — bu ko'pchilik mahalliy resellerga taalluqli normal holat.",
                },
                {
                  q: "Telegram Premium reseller ofertani qanday tekshirish kerak?",
                  a: "Saytning footer'ida 'Oferta' yoki 'Foydalanish shartlari' havolasi bo'lishi kerak. Ofertani ochib quyidagilarni qidiring: 1) sotuvchining huquqiy nomi yoki MChJ raqami; 2) to'lov shartlari va pul qaytarish siyosati; 3) xizmat ko'rsatish muddati va kechikishlar; 4) shaxsiy ma'lumotlarni qayta ishlash siyosati. Agar oferta umuman yo'q yoki bo'sh sahifa bo'lsa — bu jiddiy qizil bayroq. PremiumSend ofertasi /oferta sahifasida ochiq.",
                },
                {
                  q: "Bozordan past narxda Premium taklif qilingan bo'lsa, nima qilish kerak?",
                  a: "Bunday takliflarni hech qachon qabul qilmang. 2026-yilda Telegram Premium 1 oylik tannarxi taxminan 4 dollar, ya'ni 50 000 so'm atrofida. Hech bir halol reseller buni 30 000 so'mga sotmaydi — chunki bu zarar. Past narx odatda 3 ta sxema: pulni olib aloqaga chiqmaslik; o'g'irlangan karta orqali boshqa odam pulidan Premium berish (Telegram aniqlasa darhol bekor qilinadi); 1-2 hafta keyin bekor qilinadigan Premium. Halol narx — minimal himoya signali.",
                },
                {
                  q: "Pul to'lab Premium kelmasa, nima qilish mumkin?",
                  a: "Ishonchli sayt orqali xarid qilgan bo'lsangiz: 1) avval 15 daqiqa kuting (ba'zida kechikish bo'ladi); 2) bot ichidan 'pul to'ladim, Premium yo'q' deb yozing va to'lov chekini biriktiring; 3) javob 1-2 soat ichida kelishi kerak. Ishonchsiz manbadan (shaxsiy chat orqali, sayti yo'q reseller) olgan bo'lsangiz — pulni qaytarish odatda mumkin emas. Shu sababli xarid OLDIN sayt va oferta tekshirilishi kerak — keyin emas. PremiumSend'da to'lov muvaffaqiyatsiz bo'lsa, pul darhol qaytariladi.",
                },
                {
                  q: "Reseller Telegram kanali ishonchli ekanini qanday bilsa bo'ladi?",
                  a: "Botning ochiq Telegram kanaliga kiring va quyidagilarga qarang: 1) kanal qachon ochilgan (eski kanal — yaxshi belgi); 2) postlar muntazamligi (jonli loyiha bo'lsa kamida 2-3 kunda bir post); 3) izohlardagi haqiqiy foydalanuvchi tajribalari (faqat o'sha kun ochilgan akkauntlar emas); 4) saytga havola bormi va u ishlayaptimi. Sun'iy obunachi va tortilgan izohlar bilan kanallarni bir necha daqiqada ajratish mumkin — postlar bir-biriga o'xshash, izohlar shablon, real qiziqish belgilari yo'q.",
                },
                {
                  q: "Telegram Premium uchun shaxsiy ma'lumot so'rasa, normalmi?",
                  a: "Premium aktivlashtirish uchun shaxsiy ma'lumotlar kerak EMAS. Faqat Telegram username (@usernameingiz) yetarli — agar sovg'a qilayotgan bo'lsangiz, oluvchi username'ini ham kiriting. Ishonchli reseller hech qachon pasport, INN, plastik kartaning to'liq raqami yoki SMS kodini so'ramaydi. Karta orqali to'lov bank yoki Click/Payme ilovasidan amalga oshiriladi — reseller faqat to'lov fakti haqida ma'lumot oladi. Karta to'liq raqamini so'rasa — bu 100% firibgar.",
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
                PremiumSend ishonch ko&apos;rsatkichlari
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">7/7</p>
                  <p className="text-sm text-muted">Ishonchlilik mezonlari qoplandi</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">5</p>
                  <p className="text-sm text-muted">Karta turi (Uzcard, Humo, Click, Payme, Visa)</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">0</p>
                  <p className="text-sm text-muted">Yashirin to&apos;lov yoki komissiya</p>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion CTA */}
          <section>
            <div className="hero-gradient rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-5 left-5 w-32 h-32 bg-white rounded-full blur-2xl" />
              </div>
              <div className="relative">
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  Ishonchli reseller — bu 5 daqiqalik tekshiruv masalasi.{" "}
                  <strong className="text-white">@PremiumSendBot</strong> orqali Uzcard, Humo, Click yoki Payme bilan so&apos;mda Premium oling.{" "}
                  <strong className="text-white">1 oylik 59 000</strong>,{" "}
                  <strong className="text-white">3 oylik 175 000</strong>,{" "}
                  <strong className="text-white">12 oylik 425 000 so&apos;m</strong> — Premium 3-5 daqiqada akkauntingizda.
                </p>
                <Link
                  href="https://telegram.me/premiumsendbot"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  Tekshirilgan botga o&apos;tish
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
