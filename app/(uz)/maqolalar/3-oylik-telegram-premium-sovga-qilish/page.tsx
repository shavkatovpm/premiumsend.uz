import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "3 oylik Telegram Premium sovg'a qilish — do'stga gift yuborish yo'riqnomasi",
  description:
    "3 oylik Telegram Premium sovg'a qilish — 175,000 so'mga, Uzcard/Humo orqali. @PremiumSendBot da username kiriting va gift yuboring.",
  keywords: [
    "3 oylik Telegram Premium sovg'a qilish",
    "telegram premium 3 oylik gift",
    "telegram premium 3 oy sovg'a qilish",
    "telegram premium gift qanday yuboriladi",
    "telegram premium 3 oy narxi",
    "telegram premium boshqa odamga berish",
    "Telegram Premium sovg'a",
    "Telegram Premium gift O'zbekiston",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/maqolalar/3-oylik-telegram-premium-sovga-qilish",
  },
  openGraph: {
    title:
      "3 oylik Telegram Premium sovg'a qilish — do'stga gift yuborish yo'riqnomasi",
    description:
      "Do'stingizga 3 oylik Telegram Premium gift yuboring. @PremiumSendBot orqali Uzcard, Humo bilan so'mda to'lang.",
    url: "https://premiumsend.uz/maqolalar/3-oylik-telegram-premium-sovga-qilish",
    type: "article",
    publishedTime: "2026-04-08",
  },
};

export default function Article3MonthGift() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "3 oylik Telegram Premium sovg'a qilish — do'stga gift yuborish yo'riqnomasi",
    description:
      "3 oylik Telegram Premium sovg'a qilish — @PremiumSendBot orqali do'stingiz yoki yaqiningizga 175,000 so'mga gift yuboring. Bosqichma-bosqich yo'riqnoma.",
    datePublished: "2026-04-08",
    dateModified: "2026-04-08",
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
      "https://premiumsend.uz/maqolalar/3-oylik-telegram-premium-sovga-qilish",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "3 oylik Telegram Premium sovg'a qilish mumkinmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha. @PremiumSendBot orqali istalgan odamning Telegram username'ini kiritib, unga 3 oylik Premium gift yuborish mumkin. Qabul qiluvchining roziligisiz ham faollashadi.",
        },
      },
      {
        "@type": "Question",
        name: "Telegram Premium gift qanday yuboriladi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "@PremiumSendBot ni oching, 3 oylik paketni tanlang, sovg'a oluvchining username'ini kiriting va Uzcard yoki Humo orqali to'lang. Premium bir necha daqiqada uning akkauntiga faollashadi.",
        },
      },
      {
        "@type": "Question",
        name: "Telegram Premium sovg'a qilish uchun qabul qiluvchi rozi bo'lishi kerakmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yo'q. Telegram Premium gift sifatida yuborilganda, qabul qiluvchiga avtomatik faollashadi. Uning oldindan rozilik berishi shart emas.",
        },
      },
      {
        "@type": "Question",
        name: "3 oylik Telegram Premium gift narxi qancha?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Premium Send da 3 oylik Telegram Premium gift narxi 175,000 so'm. To'lov Uzcard yoki Humo kartasi orqali O'zbekiston so'mida amalga oshiriladi.",
        },
      },
      {
        "@type": "Question",
        name: "Telegramning rasmiy ilovasida 3 oylik gift yuborsa bo'ladimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yo'q. Telegramning rasmiy gift funksiyasida faqat 1 oylik va 12 oylik variant mavjud, 3 oylik gift yo'q. Bundan tashqari, to'lov uchun xorijiy karta kerak. @PremiumSendBot orqali esa 3 oylik giftni so'mda yuborish mumkin.",
        },
      },
      {
        "@type": "Question",
        name: "Sovg'a oluvchi Premiumdan voz kechsa, pul qaytariladimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Telegram Premium gift sifatida faollashgandan keyin bekor qilish va pul qaytarish imkoniyati yo'q. Shuning uchun gift yuborishdan oldin to'g'ri username kiritganingizga ishonch hosil qiling.",
        },
      },
      {
        "@type": "Question",
        name: "Gift yuborishda username o'rniga telefon raqam kiritsa bo'ladimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yo'q. @PremiumSendBot orqali gift yuborish uchun qabul qiluvchining Telegram username'i kerak. Telefon raqam orqali yuborib bo'lmaydi.",
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
        name: "3 oylik Telegram Premium sovg'a qilish",
        item: "https://premiumsend.uz/maqolalar/3-oylik-telegram-premium-sovga-qilish",
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
          3 oylik Telegram Premium sovg&apos;a qilish
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
            <time className="text-xs text-muted" dateTime="2026-04-08">
              2026-yil, 8-aprel
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            3 oylik Telegram Premium sovg&apos;a qilish
          </h1>
          {/* AI/SEO Snippet */}
          <div className="bg-primary-light/50 rounded-xl p-5 border border-primary/10 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>3 oylik Telegram Premium sovg&apos;a qilish</strong> — bu do&apos;stingiz, oila a&apos;zongiz yoki hamkasbingizning Telegram akkauntiga 3 oylik Premium obunani gift sifatida yuborish. O&apos;zbekistonda buning eng oson yo&apos;li — <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link> orqali, <strong>175,000 so&apos;m</strong>ga, Uzcard yoki Humo kartasi bilan to&apos;lab yuborish.
            </p>
          </div>
          <p className="text-lg text-muted leading-relaxed">
            Do&apos;stingizning tug&apos;ilgan kuni yaqinlashyapti — gul olasizmi, yana bir piyola? Hamkasbingizga rahmat aytmoqchisiz, lekin oddiy &quot;rahmat&quot; yetarli tuyulmaydi. Farzandingiz Telegramda kuniga 3-4 soat o&apos;tkazadi, lekin reklama bezovta qiladi. Tanish vaziyatmi? Aynan shunday paytlarda 3 oylik Telegram Premium sovg&apos;a qilish — zamonaviy, amaliy va esda qolarli yechim. Klassik sovg&apos;alardan farqli o&apos;laroq, bu gift har kuni ishlatiladi. Odam Telegramni ochganda — sizning sovg&apos;angizni his qiladi.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Ushbu maqolada batafsil tushuntiramiz: qayerdan, qanday va nima uchun aynan 3 oylik variant eng mos sovg&apos;a tanlov ekanini. Agar o&apos;zingiz uchun olmoqchi bo&apos;lsangiz — <Link href="/maqolalar/3-oylik-telegram-premium-sotib-olish" className="text-primary font-semibold hover:underline">3 oylik Telegram Premium sotib olish</Link> maqolamizni o&apos;qing.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Telegram Premium gift nima va u qanday ishlaydi?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Qisqa javob:</strong> Siz to&apos;laysiz — Premium boshqa odamning akkauntida faollashadi. Username bilsangiz bas.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Telegram Premium gift — bu bir foydalanuvchining boshqa odamning akkauntiga Premium obuna sovg&apos;a qilish imkoniyati. Siz to&apos;lovni amalga oshirasiz, lekin Premium boshqa odamning akkauntida faollashadi. Bu mexanizm Telegramning o&apos;zida ham mavjud, lekin juda cheklangan: faqat 1 oylik va 12 oylik variant, faqat xorijiy karta. Gift funksiyasi barcha mamlakatlarda bir xil ishlamaydi — O&apos;zbekiston foydalanuvchilari uchun bu deyarli amalda emas.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link> orqali esa jarayon ancha sodda. Botga kirasiz, 3 oylik paketni tanlaysiz, sovg&apos;a oluvchining username&apos;ini kiritasiz va Uzcard yoki Humo orqali to&apos;laysiz. Bir necha daqiqadan so&apos;ng Premium o&apos;sha odamning akkauntida paydo bo&apos;ladi. Qabul qiluvchining oldindan rozilik berishi yoki biror narsa qilishi shart emas — gift avtomatik faollashadi.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Telegram premium gift qanday yuboriladi degan savolga javob aslida juda oddiy: username bilsangiz bas, qolganini bot o&apos;zi hal qiladi. Bu aynan WhatsApp&apos;da yoki boshqa messenjerlarda mavjud bo&apos;lmagan imkoniyat — Telegramning o&apos;ziga xos afzalligi.
            </p>
            <p className="text-muted leading-relaxed">
              Gift olgan odam o&apos;z Telegram ilovasida Premium badge&apos;ni, barcha premium funksiyalarni va 3 oy davomida reklamasiz tajribani oladi. Hech qanday qo&apos;shimcha sozlash yoki aktivatsiya talab qilinmaydi — Telegramni ochganda hammasi tayyor.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Nima uchun aynan 3 oylik Telegram Premium sovg&apos;a qilish mos?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Qisqa javob:</strong> 3 oylik — sovg&apos;a uchun &quot;oltin o&apos;rta&quot;: 175,000 so&apos;m, yetarli muddat, byudjetga mos.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Premium Send orqali <Link href="/1-oylik" className="text-primary font-semibold hover:underline">1 oylik</Link>, 3 oylik, <Link href="/6-oylik" className="text-primary font-semibold hover:underline">6 oylik</Link> va <Link href="/12-oylik" className="text-primary font-semibold hover:underline">12 oylik</Link> variantlar mavjud (Telegramning o&apos;zida faqat 1 va 12 oylik bor). Lekin sovg&apos;a sifatida 3 oylik variant eng maqbul tanlov hisoblanadi — va buning aniq sabablari bor.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Birinchidan, 1 oylik gift juda qisqa. Odam Premium imkoniyatlariga odatlanib ulgurmay, obuna tugab qoladi — bu sovg&apos;a qiluvchi uchun ham, oluvchi uchun ham kam qoniqarli. Ikkinchidan, 12 oylik variant 425,000 so&apos;m talab qiladi — hammaning ham byudjeti bunga yetmaydi, ayniqsa sovg&apos;a uchun. Uchinchidan, 6 oylik variant yaxshi, lekin narxi 235,000 so&apos;m — sezilarli darajada qimmatroq.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Aynan 3 oylik variant — bu &quot;oltin o&apos;rta&quot;. 175,000 so&apos;m narxda qabul qiluvchi Premiumning barcha imkoniyatlarini to&apos;liq his qilish uchun yetarli vaqt oladi. Uch oy davomida odam Premiumga odatlanadi, uning qulayligini his qiladi va keyin o&apos;zi davom ettirish yoki ettirilmasligini hal qiladi. Ko&apos;pchilik davom ettiradi — chunki 3 oyda odam Premiumsiz Telegramga qaytishni xohlamay qoladi.
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Muddat</div>
                <div className="text-center">Narx</div>
                <div className="text-center">Oyiga</div>
                <div className="text-center">Sovg&apos;a uchun</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">
                  <Link href="/1-oylik" className="text-foreground hover:text-primary">1 oylik</Link>
                </div>
                <div className="text-center text-muted">59,000 so&apos;m</div>
                <div className="text-center text-muted">59,000 so&apos;m</div>
                <div className="text-center text-muted">Juda qisqa</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm bg-primary-light/30">
                <div className="font-bold text-primary">
                  <Link href="/3-oylik" className="text-primary hover:underline">3 oylik</Link>
                </div>
                <div className="text-center text-primary font-medium">175,000 so&apos;m</div>
                <div className="text-center text-primary font-medium">58,333 so&apos;m</div>
                <div className="text-center text-primary font-medium">Eng mos</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">
                  <Link href="/6-oylik" className="text-foreground hover:text-primary">6 oylik</Link>
                </div>
                <div className="text-center text-muted">235,000 so&apos;m</div>
                <div className="text-center text-muted">39,167 so&apos;m</div>
                <div className="text-center text-muted">Qimmatroq</div>
              </div>
              <div className="grid grid-cols-4 p-4 items-center text-sm">
                <div className="font-medium">
                  <Link href="/12-oylik" className="text-foreground hover:text-primary">12 oylik</Link>
                </div>
                <div className="text-center text-muted">425,000 so&apos;m</div>
                <div className="text-center text-muted">35,417 so&apos;m</div>
                <div className="text-center text-muted">Katta byudjet</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Jadvaldan ko&apos;rinib turibdiki, 3 oylik Telegram Premium sovg&apos;a qilish — narx va sifat nisbatida eng aqlli tanlov. Sovg&apos;a oluvchi uchun yetarli muddat, sovg&apos;a qiluvchi uchun esa byudjetga mos narx.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              3 oylik Telegram Premium sovg&apos;a qilish: bosqichma-bosqich yo&apos;riqnoma
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              <strong className="text-foreground">Qisqa javob:</strong> @PremiumSendBot ni oching → 3 oylik tanlang → oluvchi username&apos;ini kiriting → to&apos;lang. 5 daqiqa.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Telegram premium gift qanday yuboriladi? Jarayon juda oddiy va 5 daqiqadan oshmaydi. Texnik bilim talab qilinmaydi — smartfon yoki kompyuterdan bajarish mumkin.
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  step: "1",
                  title: "Telegramda @PremiumSendBot ni oching",
                  desc: "Telegram ilovasida qidiruv maydoniga @PremiumSendBot deb yozing va botni oching. Yoki to'g'ridan-to'g'ri t.me/premiumsendbot havolasiga o'ting.",
                },
                {
                  step: "2",
                  title: "/start tugmasini bosing",
                  desc: "Botni ishga tushirish uchun /start buyrug'ini yuboring. Bot sizga paketlar ro'yxatini ko'rsatadi.",
                },
                {
                  step: "3",
                  title: '"3 oylik Premium" paketini tanlang',
                  desc: "Menyu ichidan 3 oylik Telegram Premium variantini tanlang. Narx — 175,000 so'm.",
                },
                {
                  step: "4",
                  title: "Sovg'a oluvchining username'ini kiriting",
                  desc: "Bot sizdan Telegram username so'raydi. Bu yerga sovg'a qilmoqchi bo'lgan odamning username'ini kiriting (masalan: @username). O'zingizning emas — o'sha odamning username'ini yozasiz.",
                },
                {
                  step: "5",
                  title: "To'lovni amalga oshiring",
                  desc: "Uzcard yoki Humo kartangiz orqali to'lang. Click yoki Payme orqali ham botdagi kartaga o'tkazma qilishingiz mumkin — bot summani avtomatik aniqlaydi.",
                },
                {
                  step: "6",
                  title: "Gift faollashadi — do'stingiz sevindi!",
                  desc: "To'lov tasdiqlangandan so'ng, Premium sovg'a oluvchining akkauntida avtomatik faollashadi. U Telegramni ochganda Premium badge va barcha imkoniyatlarni ko'radi — kutilmagan sovg'aning zavqi boshqacha bo'ladi.",
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

            <p className="text-muted leading-relaxed mb-4">
              Eng muhimi — 4-qadamda to&apos;g&apos;ri username kiritganingizga ishonch hosil qiling. Premium bir marta faollashgandan keyin boshqa akkauntga o&apos;tkazib bo&apos;lmaydi. Agar shubhangiz bo&apos;lsa, oluvchidan username&apos;ini so&apos;rab oling.
            </p>
            <p className="text-muted leading-relaxed">
              Butun jarayon telefon yoki kompyuterdan bajariladi. Hech qanday do&apos;konga borish, plastik karta sotib olish yoki murakkab ro&apos;yxatdan o&apos;tish kerak emas. Telegram premium boshqa odamga berish — aynan shunchalik oson.
            </p>

            {/* Oraliq CTA */}
            <div className="bg-white rounded-2xl p-6 border-2 border-primary/20 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <div>
                <p className="font-bold text-foreground text-lg">3 oylik Premium gift — 175,000 so&apos;m</p>
                <p className="text-sm text-muted">Do&apos;stingizga hoziroq sovg&apos;a qiling</p>
              </div>
              <div className="flex gap-3">
                <Link href="/3-oylik" className="px-5 py-2.5 rounded-xl bg-primary-light text-primary font-semibold text-sm hover:bg-primary hover:text-white transition-all">
                  Batafsil
                </Link>
                <Link href="https://t.me/premiumsendbot" target="_blank" className="px-5 py-2.5 rounded-xl hero-gradient text-white font-semibold text-sm shadow-lg shadow-primary/25">
                  Gift yuborish
                </Link>
              </div>
            </div>
          </section>

          {/* Section 4 — Rasmiy gift vs PremiumSendBot */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Telegramning rasmiy gifti O&apos;zbekistonda ishlaydimi?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Qisqa javob:</strong> Telegramning rasmiy gifti O&apos;zbekistonda ishlamaydi — xorijiy karta kerak, 3 oylik variant yo&apos;q. @PremiumSendBot da esa hammasi ishlaydi.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Telegram ilovasida aslida &quot;Gift Premium&quot; tugmasi mavjud — bu funksiya 2022-yildan beri bor. Lekin O&apos;zbekiston foydalanuvchilari uchun bu funksiyadan foydalanish deyarli imkonsiz. Quyidagi jadvalda farqni aniq ko&apos;rasiz:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Xususiyat</div>
                <div className="text-center">Telegram rasmiy</div>
                <div className="text-center text-primary">@PremiumSendBot</div>
              </div>
              {[
                { feature: "3 oylik gift", official: "Yo'q", bot: "Bor" },
                { feature: "Uzcard / Humo", official: "Yo'q", bot: "Bor" },
                { feature: "Click / Payme", official: "Yo'q", bot: "Bor" },
                { feature: "So'mda to'lov", official: "Yo'q ($ / €)", bot: "Ha — 175,000 so'm" },
                { feature: "Xorijiy karta talab", official: "Ha — shart", bot: "Yo'q" },
                { feature: "O'zbek tilida yordam", official: "Yo'q", bot: "Ha" },
                { feature: "Faollashish vaqti", official: "Darhol", bot: "Bir necha daqiqa" },
              ].map((row, i) => (
                <div key={i} className={`grid grid-cols-3 p-4 items-center text-sm ${i < 6 ? "border-b border-card-border" : ""}`}>
                  <div className="font-medium text-foreground">{row.feature}</div>
                  <div className="text-center text-muted">{row.official}</div>
                  <div className="text-center text-primary font-medium">{row.bot}</div>
                </div>
              ))}
            </div>

            <p className="text-muted leading-relaxed mb-4">
              Ko&apos;rinib turibdiki, Telegramning rasmiy gift funksiyasi O&apos;zbekiston sharoitida amalda ishlamaydi. Asosiy to&apos;siqlar uchta:
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-section-alt rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-2">
                  Xorijiy karta talabi
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Telegram rasmiy gift funksiyasi Visa International, Mastercard yoki Apple Pay/Google Pay talab qiladi. Uzcard va Humo kartalariga bu to&apos;lov tizimlarida qo&apos;llab-quvvatlash yo&apos;q. Ya&apos;ni O&apos;zbekistonlik foydalanuvchi rasmiy yo&apos;l bilan gift yubora olmaydi — karta qabul qilinmaydi. O&apos;zbekistonda millionlab Telegram foydalanuvchisi bor, lekin aksariyatining xorijiy kartasi yo&apos;q.
                </p>
              </div>
              <div className="bg-section-alt rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-2">
                  3 oylik gift varianti yo&apos;q
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Telegramning rasmiy gift funksiyasida faqat 1 oylik va 12 oylik variant mavjud. 3 oylik yoki 6 oylik gift yo&apos;q. Agar do&apos;stingizga 3 oy uchun sovg&apos;a qilmoqchi bo&apos;lsangiz, har oy alohida gift yuborishingiz kerak — bu ham noqulay, ham qimmatroq chiqadi.
                </p>
              </div>
              <div className="bg-section-alt rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-2">
                  Valyuta va kurs muammosi
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Telegramda to&apos;lovlar dollar yoki yevro hisobida. Hatto xorijiy kartangiz bo&apos;lsa ham, so&apos;mdan dollarga konvertatsiya to&apos;lovlari qo&apos;shiladi — haqiqiy summa kutilganidan yuqori chiqishi mumkin. @PremiumSendBot da esa narx aniq belgilangan: 175,000 so&apos;m, ortiqcha xarajat yo&apos;q.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Aynan shu bo&apos;shliqni <strong className="text-foreground">@PremiumSendBot</strong> to&apos;ldiradi: so&apos;mda to&apos;lov, mahalliy kartalar va 3 oylik gift imkoniyati — hammasini bir joyda.
            </p>
          </section>

          {/* Section 5 — Emotsional stsenariylar */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Qanday holatlarda 3 oylik Telegram Premium sovg&apos;a qilish mantiqiy?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Qisqa javob:</strong> Tug&apos;ilgan kun, bayram, minnatdorchilik, bloger qo&apos;llab-quvvatlash, tanlov mukofoti — barchasi uchun ideal.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Telegram Premium gift — universal sovg&apos;a, lekin ba&apos;zi holatlarda u ayniqsa o&apos;rinli va ta&apos;sirli bo&apos;ladi. Quyida haqiqiy vaziyatlarni keltiramiz — balki siz ham o&apos;zingizni ulardan birida toparsiz.
            </p>

            <div className="space-y-6 mb-6">
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  Tug&apos;ilgan kun yoki bayram sovg&apos;asi
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Anvarning do&apos;sti Jasurning tug&apos;ilgan kuni yaqinlashdi. Gul — eskirgan, gadget — qimmat, souvenir — ertaga javonga qo&apos;yiladi. Anvar @PremiumSendBot orqali 3 oylik Premium gift yubordi. Jasur ertasi kuni Telegramni ochdi — reklama yo&apos;q, maxsus emojilar, Premium badge. 3 oy davomida har kuni Telegramni ochganda do&apos;stining sovg&apos;asini his qildi. Ayniqsa 15–35 yoshdagi yoshlar uchun bu juda ta&apos;sirli sovg&apos;a.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  Hamkasbga yoki sherikka minnatdorchilik
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Loyihada birga ishlaganingiz odam, dedlayn oldidan yordam bergan hamkasbingiz yoki biznes sherigingiz bor. Oddiy &quot;rahmat&quot; yetarli emas deb his qilasiz. 3 oylik Telegram Premium — qimmat emas (175,000 so&apos;m), lekin e&apos;tiborli. Hamkasbingiz har kuni Telegramni ochganda — sizning qadrlaganingizni sezadi. Professional muhitda bu juda yoqimli imo-ishora.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  Oila a&apos;zosiga — farzand, uka, opa, ota-onaga
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Farzandingiz yoki ukangiz Telegramda faol, lekin Premium uchun to&apos;lay olmaydi. Ota-onangiz Telegramdan foydalanadi, lekin kanal o&apos;qiyotganda reklama bezovta qiladi. 3 oylik gift — bu oila ichidagi g&apos;amxo&apos;rlikni ko&apos;rsatishning oddiy va samarali yo&apos;li. &quot;Onam Telegram kanallarini reklama bezovta qilib o&apos;qiy olmaydi&quot; degan muammoni siz 175,000 so&apos;m bilan hal qilasiz.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  Bloger yoki kontent yaratuvchiga qo&apos;llab-quvvatlash
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Sevimli Telegram kanali muallifi yoki blogerni qo&apos;llab-quvvatlashning ajoyib yo&apos;li. Premium badge ularga obunachillar oldida ishonch beradi, katta fayllar yuklash imkoniyati esa ish sifatini oshiradi. Bu — pul tashlash emas, balki ularning mehnatini qadrlaganingizni ko&apos;rsatish. Bloger buni e&apos;lon qilsa — sizning ismingiz ham tilga olinadi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  Tanlov yoki musobaqa g&apos;olibi uchun mukofot
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Telegram guruh yoki kanalda tanlov o&apos;tkazyapsizmi? 3 oylik Premium gift — g&apos;oliblar uchun jozibali va amaliy mukofot. Pul mukofotidan farqli o&apos;laroq, Premium gift qonuniy va texnik jihatdan muammosiz yuboriladi. Username bilsangiz bas — 2 daqiqada mukofotni yuborasiz.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Qaysi vaziyatda bo&apos;lmasin, 3 oylik Telegram Premium sovg&apos;a qilish — bu odam haqida o&apos;ylaganingizni ko&apos;rsatishning zamonaviy usuli. Oddiy, tez va esda qolarli.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Gift yuborishdan oldin bilishingiz kerak bo&apos;lgan 5 narsa
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Qisqa javob:</strong> Username to&apos;g&apos;riligini tekshiring, gift qaytarilmaydi, allaqachon Premium bo&apos;lsa muddat qo&apos;shiladi.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Telegram Premium gift yuborish oddiy jarayon, lekin ba&apos;zi narsalarga oldindan e&apos;tibor berish muhim. Bu sizni xatolardan saqlaydi va sovg&apos;a tajribangizni yaxshilaydi.
            </p>

            <ul className="space-y-3 mb-6">
              {[
                {
                  title: "Username to'g'riligini tekshiring",
                  desc: "Gift yuborishdan oldin qabul qiluvchining username'ini ikki marta tekshiring. @ belgisi bilan to'g'ri yozing. Xato username kiritilsa, Premium boshqa odamga faollashadi va uni qaytarib bo'lmaydi.",
                },
                {
                  title: "Qabul qiluvchining Telegram akkauntida username bo'lishi shart",
                  desc: "Ba'zi odamlar Telegramda username o'rnatmagan bo'lishi mumkin. Bu holda gift yuborib bo'lmaydi. Oluvchidan avval username o'rnatishini so'rang — bu 30 soniya ish.",
                },
                {
                  title: "Allaqachon Premium bo'lsa — muddat qo'shiladi",
                  desc: "Agar qabul qiluvchida Premium allaqachon faol bo'lsa, yangi gift muddati mavjud obuna oxiriga qo'shiladi. Ya'ni 3 oy qo'shimcha bo'ladi — hech narsa yo'qolmaydi.",
                },
                {
                  title: "Gift qaytarilmaydi",
                  desc: "Premium gift faollashgandan keyin bekor qilish yoki pul qaytarish imkoniyati yo'q. Shuning uchun xarid qilishdan oldin hamma narsani tekshirib oling.",
                },
                {
                  title: "Sovg'a oluvchiga xabar yuboring",
                  desc: "Gift avtomatik faollashadi, lekin oluvchi nima bo'lganini tushunmasligi mumkin. \"Telegramni och, senga sovg'a bor\" deb yozing — bu sovg'a tajribasini yanada yoqimli qiladi.",
                },
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
                  <div>
                    <span className="font-bold text-foreground">{item.title}</span>
                    <p className="text-sm text-muted mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="text-muted leading-relaxed">
              Bu oddiy qoidalarga rioya qilsangiz, 3 oylik Telegram Premium sovg&apos;a qilish jarayoni muammosiz va yoqimli bo&apos;ladi — ham siz uchun, ham oluvchi uchun.
            </p>

            {/* Oraliq CTA 2 */}
            <div className="bg-white rounded-2xl p-6 border-2 border-primary/20 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <div>
                <p className="font-bold text-foreground text-lg">Do&apos;stingizga Premium sovg&apos;a qiling</p>
                <p className="text-sm text-muted">3 oylik gift — 175,000 so&apos;m, Uzcard/Humo orqali</p>
              </div>
              <Link href="https://t.me/premiumsendbot" target="_blank" className="px-6 py-3 rounded-xl hero-gradient text-white font-semibold text-sm shadow-lg shadow-primary/25 whitespace-nowrap">
                Gift yuborish
              </Link>
            </div>
          </section>

          {/* Section 7 — Emotsional tajriba */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Sovg&apos;a oluvchi nimani his qiladi?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Qisqa javob:</strong> 3 oy davomida reklamasiz, tezroq, qulayroq Telegram — har kuni sizning sovg&apos;angizni eslab turadi.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Texnik imkoniyatlar ro&apos;yxati juda ko&apos;p joyda bor. Biz boshqacha gapiramiz — sovg&apos;a oluvchi <em>har kuni nimani his qiladi?</em>
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Ertalab Telegramni ochganda</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Birinchi sezadigan narsa — kanallardagi reklamalar yo&apos;qolgan. Yangiliklar, maqolalar, kurslarni tinch holda o&apos;qiydi. Bu kichik o&apos;zgarishdek tuyuladi, lekin bir hafta ichida odam Premiumsiz Telegramga qaytishni xohlamay qoladi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Ovozli xabar kelganda</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Do&apos;sti 2 daqiqalik ovozli xabar yubordi. Ilgari tinglash kerak edi — yonida odam bo&apos;lsa, quloqlik kerak edi. Endi esa bir tugma bosadi — matn ko&apos;rinishida o&apos;qiydi. Voice-to-text — ko&apos;pchilik &quot;eng yoqimli Premium funksiya&quot; deb baholaydi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Katta fayl yuborish kerak bo&apos;lganda</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Ishda 3 GB&apos;lik video yoki arxiv yuborish kerak. Oddiy Telegram — 2 GB limit. Premium — 4 GB gacha. Endi fayl bo&apos;lib-bo&apos;lib yuborish yoki boshqa ilova qidirish shart emas.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Chet ellik do&apos;sti yozganda</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Ingliz yoki turk tilida xabar keldi. Bir tugma — o&apos;zbek yoki rus tilida tarjimasi tayyor. Google Translate ochish, nusxalash-joylash shart emas. Real-time tarjima vaqtni tejaydi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Profiliga qaraganda</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Premium badge va rang — kichik narsa, lekin boshqalar buni ko&apos;radi. Guruh chatda &quot;bu kim?&quot; degan savolga o&apos;rniga Premium yulduzchasi javob beradi. Bu psixologik jihatdan ishonch uyg&apos;otadi.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Bu imkoniyatlar 90 kun davomida sovg&apos;a oluvchining har kunlik Telegram tajribasini tubdan yaxshilaydi. Eng muhimi — odam har kuni sizning sovg&apos;angizni his qiladi. Gul 3 kunda so&apos;liydi. Premium — 3 oy ishlaydi.
            </p>
          </section>

          {/* Social Proof */}
          <section>
            <div className="bg-section-alt rounded-2xl p-6 md:p-8">
              <h3 className="font-bold text-foreground text-lg mb-4 text-center">Foydalanuvchilar nima deydi?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                  <p className="text-sm text-muted leading-relaxed mb-3">
                    &quot;Do&apos;stimning tug&apos;ilgan kuniga gift yubordim — u juda hayron bo&apos;ldi. Endi o&apos;zi ham oilasiga olmoqchi.&quot;
                  </p>
                  <p className="text-xs font-semibold text-foreground">— Azizbek, Toshkent</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                  <p className="text-sm text-muted leading-relaxed mb-3">
                    &quot;Onamga sovg&apos;a qildim. Endi kanallarni reklamasiz o&apos;qiyapti — juda xursand.&quot;
                  </p>
                  <p className="text-xs font-semibold text-foreground">— Nilufar, Samarqand</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                  <p className="text-sm text-muted leading-relaxed mb-3">
                    &quot;Kanalda tanlov o&apos;tkazdim, g&apos;olibga 3 oylik Premium yubordim. 2 daqiqada hal bo&apos;ldi.&quot;
                  </p>
                  <p className="text-xs font-semibold text-foreground">— Jamshid, Farg&apos;ona</p>
                </div>
              </div>
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
                  q: "3 oylik Telegram Premium sovg'a qilish mumkinmi?",
                  a: "Ha. @PremiumSendBot orqali istalgan odamning Telegram username'ini kiritib, unga 3 oylik Premium gift yuborish mumkin. Qabul qiluvchining oldindan rozilik berishi shart emas.",
                },
                {
                  q: "Telegram Premium gift qanday yuboriladi?",
                  a: "@PremiumSendBot ni oching, 3 oylik paketni tanlang, sovg'a oluvchining username'ini kiriting va Uzcard yoki Humo orqali to'lang. Premium bir necha daqiqada uning akkauntiga faollashadi.",
                },
                {
                  q: "Qabul qiluvchi rozi bo'lishi kerakmi?",
                  a: "Yo'q. Telegram Premium gift sifatida yuborilganda, qabul qiluvchiga avtomatik faollashadi. Uning oldindan rozi bo'lishi shart emas.",
                },
                {
                  q: "3 oylik Telegram Premium gift narxi qancha?",
                  a: "Premium Send da 3 oylik Telegram Premium gift narxi 175,000 so'm. To'lov Uzcard yoki Humo kartasi orqali O'zbekiston so'mida amalga oshiriladi.",
                },
                {
                  q: "Telegramning rasmiy ilovasida 3 oylik gift yuborsa bo'ladimi?",
                  a: "Yo'q. Telegramning rasmiy gift funksiyasida faqat 1 oylik va 12 oylik variant bor. 3 oylik gift faqat @PremiumSendBot kabi servislar orqali yuboriladi.",
                },
                {
                  q: "Sovg'a oluvchi allaqachon Premium bo'lsa nima bo'ladi?",
                  a: "Gift muddati mavjud obuna oxiriga qo'shiladi. Ya'ni 3 oy qo'shimcha bo'ladi — hech narsa yo'qolmaydi.",
                },
                {
                  q: "Username o'rniga telefon raqam kiritsa bo'ladimi?",
                  a: "Yo'q. Gift yuborish uchun faqat Telegram username kerak. Telefon raqam orqali yuborib bo'lmaydi. Oluvchidan username o'rnatishini so'rang.",
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

          {/* Cross-sell */}
          <section>
            <div className="bg-section-alt rounded-2xl p-6 md:p-8">
              <h3 className="font-bold text-foreground text-lg mb-2 text-center">Boshqa variantlar ham bor</h3>
              <p className="text-sm text-muted text-center mb-6">Sovg&apos;a uchun boshqa muddatni tanlang yoki o&apos;zingiz uchun Premium oling</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Link href="/maqolalar/1-oylik-telegram-premium-sotib-olish" className="bg-white rounded-xl p-5 border border-card-border shadow-sm text-center hover:border-primary transition-all block">
                  <p className="font-bold text-foreground mb-1">1 oylik Premium</p>
                  <p className="text-xs text-muted">59,000 so&apos;m — sinab ko&apos;rish uchun</p>
                </Link>
                <Link href="/maqolalar/6-oylik-telegram-premium-sotib-olish" className="bg-white rounded-xl p-5 border border-card-border shadow-sm text-center hover:border-primary transition-all block">
                  <p className="font-bold text-foreground mb-1">6 oylik Premium</p>
                  <p className="text-xs text-muted">235,000 so&apos;m — eng tejamkor</p>
                </Link>
                <Link href="/maqolalar/12-oylik-telegram-premium-sotib-olish" className="bg-white rounded-xl p-5 border border-card-border shadow-sm text-center hover:border-primary transition-all block">
                  <p className="font-bold text-foreground mb-1">12 oylik Premium</p>
                  <p className="text-xs text-muted">425,000 so&apos;m — eng arzon oylik</p>
                </Link>
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
                <p className="text-white/90 text-lg leading-relaxed mb-2">
                  Gul 3 kunda so&apos;liydi. Shokolad 3 kunda yeyiladi.
                </p>
                <p className="text-white text-xl font-bold leading-relaxed mb-6">
                  Telegram Premium — 3 oy ishlaydi va har kuni eslatadi.
                </p>
                <p className="text-white/80 leading-relaxed mb-8">
                  <strong className="text-white">@PremiumSendBot</strong> orqali 175,000 so&apos;mga, Uzcard yoki Humo bilan, bir necha daqiqada gift yuboring. Xorijiy karta kerak emas. Murakkab jarayon yo&apos;q.
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
                  Hoziroq gift yuborish
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
