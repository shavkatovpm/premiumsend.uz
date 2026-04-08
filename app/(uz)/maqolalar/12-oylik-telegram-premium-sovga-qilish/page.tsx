import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "12 oylik Telegram Premium sovg'a qilish — O'zbekistonda so'mda, username orqali",
  description:
    "12 oylik Telegram Premium sovg'a qilish — @PremiumSendBot orqali istalgan odamga 425,000 so'mga. Uzcard, Humo bilan so'mda to'lov. Username kiriting — Premium faollashadi.",
  keywords: [
    "12 oylik Telegram Premium sovg'a qilish",
    "telegram premium 12 oylik gift",
    "telegram premium 1 yil sovg'a qilish",
    "telegram premium 12 oy yuborish",
    "telegram premium gift narxi 12 oy",
    "telegram premium boshqa odamga premium berish",
    "telegram premium sovg'a O'zbekiston",
    "telegram premium gift bot",
    "PremiumSendBot",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/maqolalar/12-oylik-telegram-premium-sovga-qilish",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/12-oylik-telegram-premium-sovga-qilish",
    },
  },
  openGraph: {
    title: "12 oylik Telegram Premium sovg'a qilish — 425,000 so'm",
    description:
      "Istalgan odamga 12 oylik Telegram Premium sovg'a qiling. @PremiumSendBot orqali Uzcard, Humo bilan so'mda to'lov. Username kiritasiz — Premium faollashadi.",
    url: "https://premiumsend.uz/maqolalar/12-oylik-telegram-premium-sovga-qilish",
    type: "article",
    publishedTime: "2026-04-08",
  },
};

export default function Article12MonthGift() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "12 oylik Telegram Premium sovg'a qilish — O'zbekistonda so'mda, username orqali",
    description:
      "12 oylik Telegram Premium sovg'a qilish — istalgan odamga @PremiumSendBot orqali 425,000 so'mga. Uzcard, Humo bilan so'mda to'lov.",
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
      "https://premiumsend.uz/maqolalar/12-oylik-telegram-premium-sovga-qilish",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "12 oylik Telegram Premium sovg'a qilish uchun nima kerak?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Faqat sovg'a oluvchining Telegram username'i kerak. @PremiumSendBot da 12 oylik paketni tanlaysiz, username kiritasiz, Uzcard yoki Humo orqali to'laysiz — Premium avtomatik faollashadi.",
        },
      },
      {
        "@type": "Question",
        name: "Telegram Premium sovg'a qilsam, o'sha odam biladi kimdan kelganini?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bot orqali Premium to'g'ridan-to'g'ri akkauntga faollashadi — alohida bildirishnoma kelmaydi. Agar sovg'a ekanini aytmoqchi bo'lsangiz, odamga o'zingiz xabar yozing.",
        },
      },
      {
        "@type": "Question",
        name: "12 oylik Telegram Premium sovg'a qilish narxi qancha?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Premium Send da 12 oylik Telegram Premium sovg'a narxi 425,000 so'm. Oyiga atigi 35,417 so'm — barcha paketlar ichida eng tejamkor variant.",
        },
      },
      {
        "@type": "Question",
        name: "Sovg'a qilingan Premium qaytarib bo'ladimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yo'q. Premium faollashtirilgandan keyin uni bekor qilish yoki qaytarish mumkin emas. Shuning uchun username'ni diqqat bilan tekshirib kiriting.",
        },
      },
      {
        "@type": "Question",
        name: "O'zbekistonda Telegram Premium sovg'a qilish uchun xorijiy karta kerakmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yo'q. @PremiumSendBot orqali Uzcard yoki Humo kartasi bilan so'mda to'lab sovg'a qilish mumkin. Click va Payme ham ishlaydi. Xorijiy karta talab qilinmaydi.",
        },
      },
      {
        "@type": "Question",
        name: "Sovg'a oluvchining telefon raqami kerakmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yo'q. Faqat Telegram username kerak. Telefon raqami, parol yoki boshqa shaxsiy ma'lumot talab qilinmaydi.",
        },
      },
      {
        "@type": "Question",
        name: "12 oylik Telegram Premium sovg'a qilish qancha vaqt oladi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Butun jarayon 5 daqiqadan oshmaydi. Bot orqali paket tanlaysiz, username kiritasiz, to'laysiz — Premium bir necha daqiqa ichida faollashadi.",
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
        name: "12 oylik Telegram Premium sovg'a qilish",
        item: "https://premiumsend.uz/maqolalar/12-oylik-telegram-premium-sovga-qilish",
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
          12 oylik Telegram Premium sovg&apos;a qilish
        </span>
      </nav>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gold-light text-amber-700">
              Maslahat
            </span>
            <time className="text-xs text-muted" dateTime="2026-04-08">
              2026-yil, 8-aprel
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            12 oylik Telegram Premium sovg&apos;a qilish
          </h1>
          {/* AI/SEO Snippet */}
          <div className="bg-amber-50 rounded-xl p-5 border border-amber-200 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>12 oylik Telegram Premium sovg&apos;a qilish</strong> — bu istalgan Telegram foydalanuvchisiga bir yillik Premium obunani hadya qilish imkoniyati. O&apos;zbekistonda{" "}
              <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>{" "}
              orqali <strong>425,000 so&apos;m</strong>ga, Uzcard va Humo kartasi bilan, faqat username kiritib sovg&apos;a qilish mumkin. Xorijiy karta talab qilinmaydi.
            </p>
          </div>
          <p className="text-lg text-muted leading-relaxed">
            Do&apos;stingizning tug&apos;ilgan kuni yaqinlashyapti. Yoki hamkasbingizga minnatdorchilik bildirmoqchisiz. Balki oila a&apos;zongizga oddiy narsa emas, haqiqatan foydali va har kuni ishlaydigan sovg&apos;a qilmoqchisiz. Klassik sovg&apos;alar — gullar, shirinliklar, sovg&apos;a kartalari — bir necha kunda esdan chiqadi. Lekin 12 oylik Telegram Premium sovg&apos;a qilish — bu bir yil davomida har kuni foyda beradigan hadya.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Muammo shundaki, O&apos;zbekistonda Telegram Premium sovg&apos;a qilish oddiy emas. Telegramning rasmiy gift funksiyasi xorijiy to&apos;lov tizimlarini talab qiladi — Uzcard va Humo ishlamaydi. Ushbu maqolada 12 oylik Telegram Premium sovg&apos;a qilishning eng qulay yo&apos;lini, narxlarini va bosqichma-bosqich jarayonini batafsil ko&apos;rib chiqamiz.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 — Nima uchun aynan 12 oylik? */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Nima uchun aynan 12 oylik Telegram Premium sovg&apos;a qilish kerak?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Telegram Premium sovg&apos;a qilishda ko&apos;pchilik birinchi navbatda muddatni tanlashda ikkilanadi. 1 oylik, 3 oylik, 6 oylik yoki 12 oylik — qaysi biri sovg&apos;a uchun eng mos? Javob oddiy: agar sovg&apos;angiz haqiqatan esda qolishini va uzoq muddat foyda berishini istasangiz — 12 oylik eng to&apos;g&apos;ri tanlov.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              1 oylik Premium sovg&apos;a — bu yaxshi imo-ishora, lekin bir oydan keyin obuna tugaydi va odam yana oddiy Telegram rejimiga qaytadi. 3 oylik biroz uzunroq, lekin baribir tez tugaydi. 6 oylik — yaxshi o&apos;rta variant. Lekin 12 oylik — bu butunlay boshqa daraja. Sovg&apos;a olgan odam bir yil davomida har kuni Premium imkoniyatlaridan foydalanadi. Har safar Telegramni ochganda — reklamasiz, kengaytirilgan funksiyalar bilan — sizning sovg&apos;angizni eslaydi.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Bundan tashqari, 12 oylik paket moliyaviy jihatdan ham eng foydali. Premium Send da 12 oylik Telegram Premium narxi 425,000 so&apos;m — oyiga atigi 35,417 so&apos;m. Taqqoslash uchun: 1 oylik paket 59,000 so&apos;m, ya&apos;ni 12 oy alohida olsangiz 708,000 so&apos;m bo&apos;lardi. 12 oylik paketda 283,000 so&apos;m tejaladi — bu 40% ga yaqin tejamkorlik.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: "Bir yillik qiymat",
                  desc: "Sovg'a olgan odam 365 kun davomida Premium imkoniyatlaridan foydalanadi — bu har kuni yangilanadigan sovg'a.",
                },
                {
                  title: "Eng tejamkor narx",
                  desc: "Oyiga 35,417 so'm — 1 oylik paketga nisbatan 40% arzon. Pul tejab, katta qiymat berasiz.",
                },
                {
                  title: "To'lov tashvishi yo'q",
                  desc: "Sovg'a oluvchi hech narsa to'lamaydi. Bir marta faollashadi — bir yil ishlaydi.",
                },
                {
                  title: "Esda qoladigan hadya",
                  desc: "Oddiy sovg'alar unutiladi. Telegram Premium esa har kuni ishlatiladi — har safar sizni eslatadi.",
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
              Xulosa: agar sovg&apos;angiz qimmatbaho, amaliy va uzoq muddat esda qoladigan bo&apos;lishini istasangiz — 12 oylik Telegram Premium eng kuchli variant. Bu shunchaki obuna emas, bu bir yillik raqamli tajriba sovg&apos;asi.
            </p>
          </section>

          {/* Section 2 — Qanday sovg'a qilish mumkin */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              12 oylik Telegram Premium qanday sovg&apos;a qilish mumkin: bosqichma-bosqich
            </h2>
            {/* AI Direct Answer Block */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Qisqa javob:</strong> Telegramda{" "}
                <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>{" "}
                ni oching → 12 oylik paketni tanlang → sovg&apos;a oluvchining username&apos;ini kiriting → Uzcard yoki Humo orqali 425,000 so&apos;m to&apos;lang → Premium avtomatik faollashadi. Butun jarayon 5 daqiqa.
              </p>
            </div>

            <p className="text-muted leading-relaxed mb-6">
              O&apos;zbekistonda 12 oylik Telegram Premium sovg&apos;a qilish jarayoni oddiy va 5 daqiqadan oshmaydi. Buning uchun sovg&apos;a oluvchining telefon raqami, paroli yoki boshqa shaxsiy ma&apos;lumotlari kerak emas — faqat Telegram username&apos;i yetarli. Quyida to&apos;liq yo&apos;riqnoma:
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  step: "1",
                  title: "Telegramda @PremiumSendBot ni oching",
                  desc: "Telegram ilovasida qidiruv orqali @PremiumSendBot ni toping va oching. Bot to'g'ridan-to'g'ri Telegram ichida ishlaydi — hech qanday qo'shimcha ilova yoki ro'yxatdan o'tish talab qilinmaydi.",
                },
                {
                  step: "2",
                  title: "/start tugmasini bosing",
                  desc: "Bot o'zbek tilida salomlashadi va asosiy menyu ochiladi. Menyuda paketlar, narxlar va yordam bo'limlari mavjud.",
                },
                {
                  step: "3",
                  title: "12 oylik Premium paketini tanlang",
                  desc: "Menyu ichidan \"12 oylik Premium\" variantini tanlang. Narx aniq so'mda ko'rsatiladi — 425,000 so'm. Dollar konvertatsiyasi yoki yashirin to'lovlar yo'q.",
                },
                {
                  step: "4",
                  title: "Sovg'a oluvchining username'ini kiriting",
                  desc: "Premium faollashtirilishi kerak bo'lgan Telegram akkauntning username'ini kiriting. Bu sizning akkauntingiz emas — sovg'a qilmoqchi bo'lgan odamning username'i. Diqqat bilan tekshiring — faollashtirilgandan keyin o'zgartirish mumkin emas.",
                },
                {
                  step: "5",
                  title: "Uzcard yoki Humo orqali to'lang",
                  desc: "Kartangiz orqali to'lovni amalga oshiring. Click yoki Payme orqali ham o'tkazma qilishingiz mumkin. Bot summani avtomatik aniqlaydi va tasdiqlaydi.",
                },
                {
                  step: "6",
                  title: "Premium avtomatik faollashadi",
                  desc: "To'lov tasdiqlangandan so'ng, 12 oylik Telegram Premium to'g'ridan-to'g'ri sovg'a oluvchining akkauntiga faollashtiriladi. Odatda bir necha daqiqa ichida sodir bo'ladi.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
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
              Butun jarayon Telegram ichida sodir bo&apos;ladi — boshqa saytga o&apos;tish yoki ro&apos;yxatdan o&apos;tish shart emas. Sovg&apos;a oluvchi esa hech narsa qilmaydi — Premium uning akkauntiga avtomatik kelib tushadi. Bu jarayonning eng qulay tomoni shundaki, siz sovg&apos;a qilayotgan odam hatto xabardor bo&apos;lmaydi — Premium shunchaki paydo bo&apos;ladi va ishlayveradi.
            </p>
          </section>

          {/* Section 3 — Telegramda rasmiy gift vs PremiumSendBot */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              12 oylik Telegram Premium sovg&apos;a qilish: rasmiy gift va @PremiumSendBot farqi
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Telegramda rasmiy Premium gift funksiyasi mavjud — suhbat ichida &quot;Gift Premium&quot; tugmasi orqali. Lekin bu funksiya O&apos;zbekiston foydalanuvchilari uchun amalda ishlamaydi. Sababi: to&apos;lov faqat Google Pay, Apple Pay yoki xorijiy Visa/Mastercard orqali amalga oshiriladi. Uzcard va Humo kartalari qabul qilinmaydi.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Bundan tashqari, Telegramning rasmiy gift funksiyasida narxlar dollar hisobida va kurs o&apos;zgarishiga qarab har safar boshqacha bo&apos;ladi. Bu O&apos;zbekiston foydalanuvchisi uchun noqulay — aniq summani oldindan bilish qiyin.
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Parametr</div>
                <div className="text-center">Telegram rasmiy gift</div>
                <div className="text-center">@PremiumSendBot</div>
                <div className="text-center">Ustunlik</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">To&apos;lov usuli</div>
                <div className="text-center text-muted">Google/Apple Pay, xorijiy karta</div>
                <div className="text-center text-primary font-medium">Uzcard, Humo, Click, Payme</div>
                <div className="text-center text-green-600 font-medium">Mahalliy karta</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Valyuta</div>
                <div className="text-center text-muted">Dollar ($)</div>
                <div className="text-center text-primary font-medium">So&apos;m (UZS)</div>
                <div className="text-center text-green-600 font-medium">Kurs riski yo&apos;q</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">12 oylik narx</div>
                <div className="text-center text-muted">Dollar hisobida, kursga qarab o&apos;zgaradi</div>
                <div className="text-center text-primary font-bold">425,000 so&apos;m</div>
                <div className="text-center text-green-600 font-medium">Aniq, o&apos;zgarmas narx</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Kerakli ma&apos;lumot</div>
                <div className="text-center text-muted">Suhbatingiz ochiq bo&apos;lishi kerak</div>
                <div className="text-center text-primary font-medium">Faqat username</div>
                <div className="text-center text-green-600 font-medium">Osonroq</div>
              </div>
              <div className="grid grid-cols-4 p-4 items-center text-sm">
                <div className="font-medium">Til va qo&apos;llab-quvvatlash</div>
                <div className="text-center text-muted">Ingliz tilida</div>
                <div className="text-center text-primary font-medium">O&apos;zbek tilida, jonli yordam</div>
                <div className="text-center text-green-600 font-medium">Mahalliy xizmat</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Asosiy farq aniq: Telegram rasmiy gift funksiyasi texnik jihatdan mavjud, lekin O&apos;zbekiston foydalanuvchisi uchun to&apos;lov imkonsiz. @PremiumSendBot esa aynan shu muammoni hal qiladi — mahalliy kartalar bilan, so&apos;mda, aniq narxda sovg&apos;a qilish imkonini beradi. Agar O&apos;zbekistonda yashab, birovga 12 oylik Telegram Premium sovg&apos;a qilmoqchi bo&apos;lsangiz — bu yagona amaliy yo&apos;l.
            </p>
          </section>

          {/* Section 4 — Narx tahlili */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              12 oylik Telegram Premium sovg&apos;a narxi: paketlar taqqoslash
            </h2>
            {/* AI Direct Price Answer */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Narx:</strong> 12 oylik Telegram Premium sovg&apos;a narxi Premium Send da <strong>425,000 so&apos;m</strong> (oyiga 35,417 so&apos;m). To&apos;lov Uzcard, Humo, Click yoki Payme orqali so&apos;mda amalga oshiriladi.
              </p>
            </div>

            <p className="text-muted leading-relaxed mb-6">
              Sovg&apos;a uchun qaysi paketni tanlash — bu byudjet va maqsadga bog&apos;liq. Keling, Premium Send dagi barcha paketlarni sovg&apos;a nuqtai nazaridan taqqoslab ko&apos;raylik. Har bir paketning narxi, oylik qiymati va sovg&apos;a sifatidagi ta&apos;siri boshqacha.
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-5 bg-section-alt p-4 font-bold text-sm">
                <div>Paket</div>
                <div className="text-center">Narx</div>
                <div className="text-center">Oylik</div>
                <div className="text-center">Tejamkorlik</div>
                <div className="text-center">Sovg&apos;a uchun</div>
              </div>
              <Link href="/maqolalar/1-oylik-telegram-premium-sotib-olish" className="grid grid-cols-5 p-4 border-b border-card-border items-center text-sm hover:bg-primary-light/10 transition-colors">
                <div className="font-medium">1 oylik</div>
                <div className="text-center">59,000 so&apos;m</div>
                <div className="text-center text-muted">59,000</div>
                <div className="text-center">—</div>
                <div className="text-center text-muted">Imo-ishora</div>
              </Link>
              <Link href="/maqolalar/3-oylik-telegram-premium-sotib-olish" className="grid grid-cols-5 p-4 border-b border-card-border items-center text-sm hover:bg-primary-light/10 transition-colors">
                <div className="font-medium">3 oylik</div>
                <div className="text-center">175,000 so&apos;m</div>
                <div className="text-center text-muted">58,333</div>
                <div className="text-center text-green-600">-1%</div>
                <div className="text-center text-muted">Sinab ko&apos;rish</div>
              </Link>
              <Link href="/maqolalar/6-oylik-telegram-premium-sotib-olish" className="grid grid-cols-5 p-4 border-b border-card-border items-center text-sm hover:bg-primary-light/10 transition-colors">
                <div className="font-medium">6 oylik</div>
                <div className="text-center">235,000 so&apos;m</div>
                <div className="text-center text-muted">39,167</div>
                <div className="text-center text-green-600">-33%</div>
                <div className="text-center text-muted">Yaxshi variant</div>
              </Link>
              <div className="grid grid-cols-5 p-4 bg-amber-50 items-center text-sm">
                <div className="font-bold text-amber-700">12 oylik</div>
                <div className="text-center font-bold text-amber-700">425,000 so&apos;m</div>
                <div className="text-center text-amber-700">35,417</div>
                <div className="text-center text-green-600 font-bold">-39%</div>
                <div className="text-center text-amber-700 font-bold">Eng kuchli sovg&apos;a</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              Raqamlar o&apos;zi gapiradi: 12 oylik paketda har bir oy uchun eng kam pul to&apos;lanadi. Sovg&apos;a uchun bu ayniqsa muhim — chunki siz bir marta to&apos;laysiz, lekin sovg&apos;a oluvchi bir yil davomida foydalanadi. 3 oylik sovg&apos;a — bu &quot;sinab ko&apos;ring&quot; degan ma&apos;no beradi. 12 oylik sovg&apos;a esa &quot;men sizga haqiqatan qadrlashimni ko&apos;rsatmoqchiman&quot; degan xabar.
            </p>
            <p className="text-muted leading-relaxed">
              Agar byudjetingiz cheklangan bo&apos;lsa — <Link href="/maqolalar/3-oylik-telegram-premium-sotib-olish" className="text-primary font-semibold hover:underline">3 oylik</Link> yoki <Link href="/maqolalar/6-oylik-telegram-premium-sotib-olish" className="text-primary font-semibold hover:underline">6 oylik</Link> variant ham ajoyib sovg&apos;a bo&apos;ladi. Lekin agar eng yaxshi variantni tanlashni istasangiz — 12 oylik Telegram Premium sovg&apos;a qilish eng to&apos;g&apos;ri qaror.
            </p>
          </section>

          {/* Section 5 — Kimga sovg'a qilish mumkin */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              12 oylik Telegram Premium kimga va qachon sovg&apos;a qilish mumkin?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Telegram Premium sovg&apos;a qilishning eng yaxshi tomoni — bu universal sovg&apos;a. Telegramdan foydalanadigan har qanday odamga mos keladi. Yoshi, kasbi, qiziqishlari ahamiyatsiz — agar odam Telegramda faol bo&apos;lsa, Premium uning hayotini yengillashtiradi. Keling, aniq vaziyatlarni ko&apos;rib chiqaylik.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: "Tug'ilgan kun sovg'asi",
                  desc: "Eng ommabop sabab. Do'stingiz yoki yaqiningizning tug'ilgan kuniga 12 oylik Premium — bu bir yil davomida har kuni eslatadigan sovg'a. Gul bir haftada so'liydi, Premium 365 kun ishlaydi.",
                },
                {
                  title: "Bayram hadyasi",
                  desc: "Navro'z, Yangi yil, Ramazon bayrami — har qanday bayramga mos keladi. Ayniqsa uzoqdagi qarindoshlarga — jismoniy sovg'a yuborish qiyin bo'lganda, raqamli sovg'a eng qulay variant.",
                },
                {
                  title: "Professional minnatdorchilik",
                  desc: "Hamkasbingiz, mentorngiz yoki biznes sherigingizga. Telegram orqali ko'p ishlaydiganlar uchun Premium — bu kundalik ishni osonlashtiradigan sovg'a.",
                },
                {
                  title: "Oilaviy sovg'a",
                  desc: "Ota-onangiz, aka-ukangiz yoki farzandingizga. Ayniqsa Telegram ko'p ishlatadigan oila a'zolariga — reklamasiz, kengaytirilgan imkoniyatlar bilan yil bo'yi foydalanishsin.",
                },
                {
                  title: "Mijoz yoki VIP sovg'a",
                  desc: "Biznes uchun: muhim mijozlarga yoki hamkorlarga Premium sovg'a — bu zamonaviy, texnologik va esda qoladigan VIP hadya.",
                },
                {
                  title: "Bir nechta odamga birdan",
                  desc: "Jamoa a'zolariga, guruh do'stlariga yoki oilaga — har biriga alohida sovg'a qilish mumkin. Har safar username kiritib, to'lovni amalga oshirasiz — jarayon bir xil.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-muted leading-relaxed">
              Eng muhimi — sovg&apos;a qilish uchun maxsus sabab kerak emas. &quot;Men sizni qadrlayman&quot; degan oddiy xabar ham yetarli. 12 oylik Telegram Premium sovg&apos;a qilish — bu o&apos;sha xabarni 365 kun davomida har kuni aytib turadigan hadya.
            </p>

            {/* Oraliq CTA */}
            <div className="bg-white rounded-2xl p-6 border-2 border-amber-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <div>
                <p className="font-bold text-foreground text-lg">12 oylik Premium sovg&apos;a — 425,000 so&apos;m</p>
                <p className="text-sm text-muted">Username kiritasiz — Premium faollashadi</p>
              </div>
              <div className="flex gap-3">
                <Link href="/12-oylik" className="px-5 py-2.5 rounded-xl bg-amber-100 text-amber-700 font-semibold text-sm hover:bg-amber-500 hover:text-white transition-all">
                  Batafsil
                </Link>
                <Link href="https://t.me/premiumsendbot" target="_blank" className="px-5 py-2.5 rounded-xl bg-amber-500 text-white font-semibold text-sm shadow-lg shadow-amber-500/25">
                  Sovg&apos;a qilish
                </Link>
              </div>
            </div>
          </section>

          {/* Section 6 — Sovg'a oluvchi nimani his qiladi */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              12 oylik Telegram Premium sovg&apos;a olgan odam nimani his qiladi?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Sovg&apos;a qilishda eng muhim narsa — oluvchining tajribasi. Raqamlar va funksiyalar ro&apos;yxati emas, balki odam kundalik hayotida nimani sezishi muhim. Keling, sovg&apos;a oluvchining ko&apos;zi bilan qaraylik — Premium faollashgan birinchi kundan boshlab nima o&apos;zgaradi?
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Birinchi kun: &quot;Reklama yo&apos;qoldi!&quot;</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Eng birinchi va eng sezilarli o&apos;zgarish — Telegram kanallaridagi reklamalar butunlay yo&apos;qoladi. Ko&apos;p kanallarga obuna bo&apos;lgan odam uchun bu katta farq. Ertasi kuni kanallarni ochganda — toza, reklamasiz feed. Bu his bir yil davomida har kuni takrorlanadi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Birinchi hafta: &quot;Bu juda qulay ekan&quot;</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Ovozli xabarlarni matnga aylantirish, 4 GB gacha fayl yuborish, tezkor tarjima — bu funksiyalar dastlab &quot;qo&apos;shimcha&quot; ko&apos;rinadi. Lekin bir hafta ichida odam bularga o&apos;rganib qoladi va endi ularsiz Telegram noqulay tuyiladi. Ayniqsa ishda Telegram ko&apos;p ishlatadigan odamlar uchun bu kundalik qulaylik.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Birinchi oy: &quot;Sovg&apos;a uchun rahmat&quot;</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Profildagi Premium badge, maxsus stikerlar va emojilar — bular bilan odam Telegram ichida ajralib turadi. Do&apos;stlari va hamkasblari bilan suhbatda &quot;senda Premium bormi? Qayerdan olding?&quot; degan savollar boshlanadi. Bu paytda sovg&apos;angiz yana esga olinadi — va bu bir oy emas, bir yil davom etadi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">12 oy davomida: &quot;Endi Premiumsiz qiyin&quot;</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Yil davomida odam Premium imkoniyatlariga shunchalik o&apos;rganib qoladiki, obuna tugash vaqti kelganda o&apos;zi uzaytirishni xohlaydi. Bu sovg&apos;aning eng kuchli tomonini ko&apos;rsatadi — siz faqat 12 oylik tajriba emas, balki doimiy foydalanish odatini sovg&apos;a qilasiz.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Aynan shuning uchun 12 oylik Telegram Premium sovg&apos;a qilish oddiy sovg&apos;adan farq qiladi. Gul so&apos;liydi, shirinlik tugaydi — lekin Premium 365 kun davomida har kuni o&apos;z ta&apos;sirini ko&apos;rsatadi. Sovg&apos;a oluvchi sizni har safar Telegramni ochganda eslaydi.
            </p>
          </section>

          {/* Section 7 — Muhim maslahatlar */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              12 oylik Telegram Premium sovg&apos;a qilishdan oldin bilish kerak bo&apos;lgan narsalar
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Sovg&apos;a qilish jarayoni oddiy, lekin bir nechta muhim nuqtalarni bilish — muammolardan saqlaydi va tajribani yanada yaxshilaydi. Quyidagi maslahatlar amaliy tajribaga asoslangan:
            </p>

            <div className="space-y-3 mb-6">
              {[
                {
                  title: "Username'ni ikki marta tekshiring",
                  desc: "Eng muhim qadam. Premium faollashtirilgandan keyin uni boshqa akkauntga o'tkazish yoki qaytarish mumkin emas. Yozishda bitta harf xatosi — sovg'a noto'g'ri odamga ketishi mumkin. Username'ni copy-paste qiling yoki odam bilan tasdiqlab oling.",
                },
                {
                  title: "Sovg'a oluvchida Premium borligini tekshiring",
                  desc: "Agar odam allaqachon Premium obunaga ega bo'lsa — oldindan tekshirish yaxshi. Mavjud obuna muddati uzayishi mumkin, lekin aniq bilish uchun botdagi qo'llab-quvvatlash xizmatiga murojaat qiling. Bilmasdan ikkilangan to'lov qilmaslik uchun ehtiyot bo'ling.",
                },
                {
                  title: "Sovg'a sifatida ayting",
                  desc: "Bot orqali Premium faollashtirilganda odam hech qanday xabar olmaydi — Premium shunchaki paydo bo'ladi. Agar sovg'a ekanini aytmoqchi bo'lsangiz — odamga alohida xabar yozib qo'ying. Bu sovg'aning ta'sirini oshiradi.",
                },
                {
                  title: "To'lov chekini saqlang",
                  desc: "Bot to'lov tasdiqlangandan keyin chek beradi. Buni saqlang — agar texnik muammo bo'lsa, qo'llab-quvvatlash xizmatiga murojaat qilganingizda kerak bo'lishi mumkin.",
                },
                {
                  title: "To'lov xavfsiz — karta ma'lumotlari saqlanmaydi",
                  desc: "Premium Send orqali to'lov — bu oddiy kartadan kartaga o'tkazma yoki Click/Payme to'lovi. Karta raqamingiz, parolingiz yoki shaxsiy ma'lumotlaringiz hech qayerga saqlanmaydi. To'lab, Premium kelmasa — pul qaytariladi.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-muted leading-relaxed">
              Bu maslahatlar oddiy ko&apos;rinadi, lekin amalda ko&apos;p muammolardan saqlaydi. Ayniqsa birinchi marta sovg&apos;a qilayotgan bo&apos;lsangiz — yuqoridagi ro&apos;yxatni diqqat bilan o&apos;qib chiqing. Jarayon 5 daqiqa, lekin natijasi bir yil davom etadi.
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
                  q: "12 oylik Telegram Premium sovg'a qilish uchun nima kerak?",
                  a: "Faqat sovg'a oluvchining Telegram username'i kerak. @PremiumSendBot da 12 oylik paketni tanlaysiz, username kiritasiz, Uzcard yoki Humo orqali to'laysiz — Premium avtomatik faollashadi.",
                },
                {
                  q: "Telegram Premium sovg'a qilsam, o'sha odam biladi kimdan kelganini?",
                  a: "Bot orqali Premium to'g'ridan-to'g'ri akkauntga faollashadi — alohida bildirishnoma kelmaydi. Agar sovg'a ekanini aytmoqchi bo'lsangiz, odamga o'zingiz xabar yozing.",
                },
                {
                  q: "12 oylik Telegram Premium sovg'a narxi qancha?",
                  a: "Premium Send da 12 oylik Telegram Premium sovg'a narxi 425,000 so'm. Oyiga atigi 35,417 so'm — barcha paketlar ichida eng tejamkor variant.",
                },
                {
                  q: "Sovg'a qilingan Premium qaytarib bo'ladimi?",
                  a: "Yo'q. Premium faollashtirilgandan keyin uni bekor qilish yoki qaytarish mumkin emas. Shuning uchun username'ni diqqat bilan tekshiring.",
                },
                {
                  q: "O'zbekistonda Telegram Premium sovg'a qilish uchun xorijiy karta kerakmi?",
                  a: "Yo'q. @PremiumSendBot orqali Uzcard yoki Humo kartasi bilan so'mda to'lab sovg'a qilish mumkin. Click va Payme ham ishlaydi.",
                },
                {
                  q: "Sovg'a oluvchining telefon raqami kerakmi?",
                  a: "Yo'q. Faqat Telegram username kerak. Telefon raqami, parol yoki boshqa shaxsiy ma'lumot talab qilinmaydi.",
                },
                {
                  q: "12 oylik Telegram Premium sovg'a qilish qancha vaqt oladi?",
                  a: "Butun jarayon 5 daqiqadan oshmaydi. Bot orqali paket tanlaysiz, username kiritasiz, to'laysiz — Premium bir necha daqiqa ichida faollashadi.",
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

          {/* Brand Trust Block */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Nima uchun aynan Premium Send orqali sovg&apos;a qilish kerak?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              O&apos;zbekistonda Telegram Premium sotib olish yoki sovg&apos;a qilish xizmati taklif qiladigan bir nechta variant bor. Lekin Premium Send boshqalardan aniq farq qiladi — va bu farqlar aynan sovg&apos;a qilayotgan odam uchun muhim.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm text-center">
                <p className="text-2xl font-extrabold text-primary mb-1">5 daqiqa</p>
                <p className="text-sm text-muted">Buyurtmadan faollashgacha. To&apos;lov tasdiqlangach — Premium avtomatik yoqiladi</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm text-center">
                <p className="text-2xl font-extrabold text-primary mb-1">So&apos;mda</p>
                <p className="text-sm text-muted">Uzcard, Humo, Click, Payme. Dollar konvertatsiyasi yoki yashirin komissiya yo&apos;q</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm text-center">
                <p className="text-2xl font-extrabold text-primary mb-1">O&apos;zbek tilida</p>
                <p className="text-sm text-muted">Bot interfeysi va qo&apos;llab-quvvatlash xizmati to&apos;liq o&apos;zbek tilida ishlaydi</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm text-center">
                <p className="text-2xl font-extrabold text-primary mb-1">Kafolat</p>
                <p className="text-sm text-muted">To&apos;lov qilib, Premium kelmasa — pulingiz qaytariladi. To&apos;lov cheki sizda saqlanadi</p>
              </div>
            </div>
            <p className="text-muted leading-relaxed">
              Premium Send — bu O&apos;zbekistondagi Telegram Premium uchun mo&apos;ljallangan maxsus xizmat. Oddiy &quot;reseller&quot; emas — o&apos;zbek foydalanuvchisi uchun qulay, tushunarli va xavfsiz tizim. Sovg&apos;a qilayotganingizda bu ayniqsa muhim — chunki siz nafaqat pulni, balki sovg&apos;a oluvchining tajribasini ham ishonchli qo&apos;llarga topshirasiz.
            </p>
          </section>

          {/* Conclusion */}
          <section>
            <div className="bg-amber-500 rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-5 left-5 w-32 h-32 bg-white rounded-full blur-2xl" />
              </div>
              <div className="relative">
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  12 oylik Telegram Premium sovg&apos;a qilish — bu shunchaki obuna emas, bu bir yillik raqamli tajriba hadya qilish. Do&apos;stingiz, oila a&apos;zongiz yoki hamkasbingizga eng foydali va esda qoladigan sovg&apos;a berishni istasangiz —{" "}
                  <strong className="text-white">@PremiumSendBot</strong> orqali bugunoq 425,000 so&apos;mga, Uzcard yoki Humo kartasi bilan sovg&apos;a qiling.
                </p>
                <Link
                  href="https://t.me/premiumsendbot"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-amber-600 font-bold rounded-2xl hover:shadow-2xl transition-all text-lg"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  Hozir sovg&apos;a qilish
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
