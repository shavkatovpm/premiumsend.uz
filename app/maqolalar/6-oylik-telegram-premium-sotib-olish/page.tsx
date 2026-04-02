import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "6 oylik Telegram Premium sotib olish — 235,000 so'm, Uzcard va Humo orqali",
  description:
    "6 oylik Telegram Premium sotib olish O'zbekistonda 235,000 so'mga. Uzcard, Humo kartasi orqali so'mda to'lov. Telegramda 6 oylik paket yo'q — faqat @PremiumSendBot orqali. Bosqichma-bosqich yo'riqnoma.",
  keywords: [
    "6 oylik Telegram Premium sotib olish",
    "Telegram Premium 6 oylik",
    "Telegram Premium Uzcard",
    "Telegram Premium Humo",
    "Telegram Premium O'zbekiston",
    "Telegram Premium so'mda",
    "Telegram Premium 235000",
    "Telegram Premium yarim yillik",
    "PremiumSendBot",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/maqolalar/6-oylik-telegram-premium-sotib-olish",
  },
  openGraph: {
    title: "6 oylik Telegram Premium sotib olish — 235,000 so'm",
    description:
      "Telegramda 6 oylik Premium yo'q. @PremiumSendBot orqali Uzcard, Humo bilan 235,000 so'mga sotib oling.",
    url: "https://premiumsend.uz/maqolalar/6-oylik-telegram-premium-sotib-olish",
    type: "article",
    publishedTime: "2026-04-02",
  },
};

export default function Article6Month() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "6 oylik Telegram Premium sotib olish — O'zbekistonda 235,000 so'mga",
    description:
      "6 oylik Telegram Premium sotib olish O'zbekistonda Uzcard, Humo kartasi orqali 235,000 so'mga. Batafsil qo'llanma.",
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
      "https://premiumsend.uz/maqolalar/6-oylik-telegram-premium-sotib-olish",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "6 oylik Telegram Premium sotib olish uchun Visa karta kerakmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yo'q. @PremiumSendBot orqali Uzcard yoki Humo kartasi bilan to'lash mumkin. Click yoki Payme orqali ham kartaga o'tkazma qilish mumkin. Visa talab qilinmaydi.",
        },
      },
      {
        "@type": "Question",
        name: "Telegram rasmiy ilovasida 6 oylik Premium mavjudmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yo'q. Telegram faqat 1 oylik va 12 oylik obuna taklif qiladi. 6 oylik paket mavjud emas — uni faqat Premium Send kabi xizmatlar orqali sotib olish mumkin.",
        },
      },
      {
        "@type": "Question",
        name: "6 oylik Premium faollashgandan keyin qancha vaqtda ko'rinadi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Odatda to'lovdan so'ng bir necha daqiqa ichida faollashadi. Bot to'lovni avtomatik aniqlaydi va Premium yetkazib beradi.",
        },
      },
      {
        "@type": "Question",
        name: "Boshqa odamga 6 oylik Premium sovg'a qilsam bo'ladimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha. Buning uchun o'sha odamning Telegram username'ini kiriting. Premium to'g'ridan-to'g'ri uning akkauntiga faollashadi.",
        },
      },
      {
        "@type": "Question",
        name: "6 oylik Telegram Premium so'mda qancha turadi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Premium Send da 6 oylik Telegram Premium narxi 235,000 so'm. To'lov O'zbekiston so'mida amalga oshiriladi.",
        },
      },
      {
        "@type": "Question",
        name: "Premium obuna muddati tugaganda nima bo'ladi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "6 oy tugagandan so'ng obuna avtomatik to'xtatiladi. Akkaunt oddiy Telegram rejimiga qaytadi. Davom etmoqchi bo'lsangiz, yangi obuna sotib olishingiz kerak.",
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
        name: "6 oylik Telegram Premium sotib olish",
        item: "https://premiumsend.uz/maqolalar/6-oylik-telegram-premium-sotib-olish",
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
          6 oylik Telegram Premium sotib olish
        </span>
      </nav>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gold-light text-amber-700">
              Qo&apos;llanma
            </span>
            <time className="text-xs text-muted" dateTime="2026-04-02">
              2026-yil, 2-aprel
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            6 oylik Telegram Premium sotib olish
          </h1>
          {/* AI/SEO Snippet Definitsiya */}
          <div className="bg-gold-light/50 rounded-xl p-5 border border-gold/20 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>6 oylik Telegram Premium</strong> — bu Telegramning kengaytirilgan obunasi bo&apos;lib, O&apos;zbekistonda{" "}
              <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>{" "}
              orqali <strong>235,000 so&apos;m</strong>ga, Uzcard va Humo kartasi bilan sotib olish mumkin. Telegram messenjerida 6 oylik paket mavjud emas — uni faqat Premium Send orqali olish mumkin.
            </p>
          </div>
          <p className="text-lg text-muted leading-relaxed">
            Tasavvur qiling: har oy Telegram Premium uchun alohida to&apos;lov qilasiz, har safar karta topasiz, har safar konvertatsiya muammosi bilan kurashasiz. Bu — O&apos;zbekistondagi ko&apos;pchilik Telegram foydalanuvchisining kundalik haqiqati. Holbuki, bir marta to&apos;lab, 6 oy davomida xotirjam foydalanish mumkin bo&apos;lsa-chi?
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Aynan shu sababdan 6 oylik Telegram Premium sotib olish so&apos;rovi O&apos;zbekistonda tobora ko&apos;proq qidirilmoqda. Ushbu maqolada 6 oylik Telegram Premium obunani O&apos;zbekistonda — Uzcard va Humo kartasi orqali — qanday sotib olish mumkinligini batafsil tushuntiramiz.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Nima uchun aynan 6 oylik variant — eng aqlli tanlov?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Telegram Premium olishda odamlar ko&apos;pincha ikkita savol bilan qoladi: &ldquo;Qaysi muddatni olayin?&rdquo; va &ldquo;Qancha to&apos;lasam arzonroq chiqadi?&rdquo; Javob ko&apos;p hollarda bir xil: 6 oylik variant — maqbullik va tejamkorlik o&apos;rtasidagi eng muvozanatli nuqta.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Telegram faqat 1 oylik va 12 oylik obuna taklif qiladi. Agar har oy alohida to&apos;lasangiz, 6 oy uchun 6 marta to&apos;lov qilasiz. Har safar to&apos;lov jarayoni, tasdiqlash, karta muammolari — bularning barchasi vaqt va nerv sarflaydi. 6 oylik to&apos;p paket esa bu muammolarni bir zarbada hal qiladi.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: "Tejamkorlik",
                  desc: "6 oylik paket oylik narxga nisbatan arzonroq chiqadi. Premium Send da 6 oylik 235,000 so'm — oyiga atigi 39,167 so'm.",
                },
                {
                  title: "Rahatliq",
                  desc: "6 oy davomida Premium haqida o'ylashning hojati yo'q. Obuna tugash sanasini kuzatmasangiz ham bo'ladi.",
                },
                {
                  title: "Uzluksiz tajriba",
                  desc: "Premium imkoniyatlaridan 6 oy davomida to'liq foydalanasiz — reklamalar yo'q, katta fayllar, maxsus emojilar va boshqa barcha funksiyalar.",
                },
                {
                  title: "Sovg'a sifatida ideal",
                  desc: "Yaqiningizga 6 oylik Premium sovg'a qilsangiz — bu oddiy sovg'a emas, yarim yillik qimmatli tajriba.",
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
              <Link href="/3-oylik" className="text-primary font-semibold hover:underline">3 oylik variant</Link> sinab ko&apos;rish uchun yaxshi bo&apos;lsa, 6 oylik Telegram Premium — doimiy foydalanuvchilar uchun optimal.{" "}
              <Link href="/12-oylik" className="text-primary font-semibold hover:underline">12 oylik</Link> esa maksimal tejamkorlik istovchilar uchun. O&apos;zbekistonda ayniqsa blogerlar, onlayn tadbirkorlar va faol Telegram foydalanuvchilari orasida 6 oylik variant eng ko&apos;p talab qilinadigan paketga aylanib bormoqda.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Telegram rasmiy ilovasida 6 oylik obuna bormi?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Bu savolga to&apos;g&apos;ridan-to&apos;g&apos;ri javob: <strong className="text-foreground">Yo&apos;q.</strong>
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Telegram faqat 1 oylik va 12 oylik obuna taklif qiladi. 3 oylik va 6 oylik paketlar rasmiy ilovada mavjud emas. Bu Telegramning hozirgi biznes modelidagi cheklov bo&apos;lib, foydalanuvchilarni har oy qayta to&apos;lovga undaydi.
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-section-alt rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-2">
                  Birinchi muammo — 6 oylik paket yo&apos;q
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Agar 6 oy olmoqchi bo&apos;lsangiz, Telegram sizga bu imkoniyatni bermaydi. Faqat 1 oylik va 12 oylik bor — o&apos;rtasida variant yo&apos;q.
                </p>
              </div>
              <div className="bg-section-alt rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-2">
                  Ikkinchi muammo — to&apos;lov tizimi
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Telegram rasmiy ilovasi orqali to&apos;lash uchun Google Pay yoki Apple Pay kerak. Bu tizimlar O&apos;zbekistonning mahalliy kartlari — Uzcard va Humo — bilan ishlamaydi. Ya&apos;ni, rasmiy yo&apos;l orqali O&apos;zbekiston foydalanuvchisi uchun Premium olish amalda imkonsizga yaqin.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Mana shu ikki muammoni hal qilish uchun maxsus reseller servislar paydo bo&apos;lgan. 6 oylik Telegram Premium sotib olish aynan shu servislar orqali amalga oshiriladi — va bu mutlaqo qonuniy hamda xavfsiz jarayon.
            </p>
          </section>

          {/* Section 3 — Step by step */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              O&apos;zbekistonda 6 oylik Telegram Premium sotib olish: bosqichma-bosqich yo&apos;riqnoma
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Quyida @PremiumSendBot orqali 6 oylik Telegram Premium sotib olishning to&apos;liq jarayoni keltirilgan. Jarayon oddiy va 5 daqiqadan oshmaydi.
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  step: "1",
                  title: "Botni oching",
                  desc: "Telegramda @PremiumSendBot ni toping va oching. Bu — O'zbekiston foydalanuvchilari uchun mo'ljallangan maxsus bot.",
                },
                {
                  step: "2",
                  title: "Botni ishga tushiring",
                  desc: "/start tugmasini bosing. Bot o'zbek tilida salomlashadi va menyu taqdim etadi.",
                },
                {
                  step: "3",
                  title: "Paketni tanlang",
                  desc: 'Menyu ichidan "6 oylik Premium" variantini tanlang. Narx o\'zbek so\'mida ko\'rsatiladi — dollar konvertatsiyasi yo\'q.',
                },
                {
                  step: "4",
                  title: "Akkauntni kiriting",
                  desc: "Premium faollashtirilishi kerak bo'lgan Telegram akkauntning username'ini kiriting. Bu o'zingizniki yoki do'stingizniki bo'lishi mumkin.",
                },
                {
                  step: "5",
                  title: "To'lovni amalga oshiring",
                  desc: "Uzcard yoki Humo kartangiz orqali to'lang. Click yoki Payme orqali ham botdagi kartaga o'tkazma qilishingiz mumkin — bot summani avtomatik aniqlaydi.",
                },
                {
                  step: "6",
                  title: "Premium faollashadi",
                  desc: "To'lov tasdiqlangandan so'ng, 6 oylik Telegram Premium obuna avtomatik ravishda belgilangan akkauntga faollashtiriladi. Odatda bu bir necha daqiqa ichida sodir bo'ladi.",
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
              Jarayon davomida muammo yuzaga kelsa, botdagi qo&apos;llab-quvvatlash xizmati o&apos;zbek tilida yordam beradi.
            </p>

            {/* Oraliq CTA */}
            <div className="bg-white rounded-2xl p-6 border-2 border-primary/20 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-bold text-foreground text-lg">6 oylik Telegram Premium — 235,000 so&apos;m</p>
                <p className="text-sm text-muted">Uzcard, Humo orqali so&apos;mda to&apos;lov</p>
              </div>
              <div className="flex gap-3">
                <Link href="/6-oylik" className="px-5 py-2.5 rounded-xl bg-primary-light text-primary font-semibold text-sm hover:bg-primary hover:text-white transition-all">
                  Batafsil
                </Link>
                <Link href="https://t.me/premiumsendbot" target="_blank" className="px-5 py-2.5 rounded-xl hero-gradient text-white font-semibold text-sm shadow-lg shadow-primary/25">
                  Sotib olish
                </Link>
              </div>
            </div>
          </section>

          {/* Section 4 — Narx taqqoslash */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              6 oylik Telegram Premium narxi: taqqoslash
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              6 oylik Telegram Premium sotib olish so&apos;mda — bu ko&apos;pchilik uchun eng muhim savol. Narx masalasida bir nechta muhim nuansni tushunish kerak.
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Parametr</div>
                <div className="text-center">Telegram rasmiy</div>
                <div className="text-center">@PremiumSendBot</div>
                <div className="text-center">Farq</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Muddat</div>
                <div className="text-center text-muted">Faqat 1 va 12 oylik</div>
                <div className="text-center text-primary font-medium">6 oylik paket</div>
                <div className="text-center text-green-600 font-medium">6 oylik mavjud</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">To&apos;lov</div>
                <div className="text-center text-muted">Xorijiy karta</div>
                <div className="text-center text-primary font-medium">Uzcard, Humo</div>
                <div className="text-center text-green-600 font-medium">Mahalliy karta</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Til</div>
                <div className="text-center text-muted">Ingliz/Rus</div>
                <div className="text-center text-primary font-medium">O&apos;zbek</div>
                <div className="text-center text-green-600 font-medium">O&apos;zbek tili</div>
              </div>
              <div className="grid grid-cols-4 p-4 items-center text-sm">
                <div className="font-medium">Narx</div>
                <div className="text-center text-muted">~$4.99/oy ($29.94)</div>
                <div className="text-center text-primary font-bold">235,000 so&apos;m</div>
                <div className="text-center text-green-600 font-medium">So&apos;mda, aniq</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              Telegram rasmiy ilovasida 6 oylik variant yo&apos;qligi sababli, agar har oy alohida to&apos;lasangiz — 6 oy uchun $29.94 to&apos;laysiz. Bundan tashqari, har oylik to&apos;lovda kurs farqi va konvertatsiya to&apos;lovlari qo&apos;shimcha xarajat yaratadi.
            </p>
            <p className="text-muted leading-relaxed">
              Premium Send orqali esa aniq belgilangan <strong className="text-foreground">235,000 so&apos;m</strong> to&apos;laysiz — kurs farqi va konvertatsiya to&apos;lovlari yo&apos;q.
            </p>
          </section>

          {/* Section 5 — Uzcard/Humo */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              6 oylik Telegram Premium Uzcard va Humo orqali: bu qanday ishlaydi?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Ko&apos;pchilik bir savol bilan qoladi: &ldquo;Uzcard yoki Humo orqali to&apos;lasam, Premium haqiqatan faollashadimi?&rdquo; Javob: <strong className="text-foreground">Ha, to&apos;liq faollashadi.</strong>
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Reseller servislar Telegram bilan maxsus shartnoma asosida ishlaydi. Foydalanuvchi mahalliy karta orqali to&apos;laganda, servis o&apos;z hisob raqami orqali Telegramga to&apos;lovni amalga oshiradi va Premiumni belgilangan akkauntga faollashtiradi. Bu — vositachilik mexanizmi bo&apos;lib, butunlay qonuniy.
            </p>

            <div className="bg-section-alt rounded-xl p-6 mb-6">
              <h3 className="font-bold text-foreground mb-3">Uzcard orqali to&apos;lash jarayoni:</h3>
              <ul className="space-y-2">
                {[
                  "Uzcard raqamingizni kiriting yoki QR kodni skaner qiling",
                  "SMS tasdiqlash kodi bilan operatsiyani tasdiqlang",
                  "To'lov o'tgandan so'ng bot sizga tasdiqlash xabarini yuboradi",
                  "Premium bir necha daqiqa ichida faollashadi",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-muted text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-muted leading-relaxed">
              Humo orqali ham xuddi shunday ishlaydi — farq yo&apos;q. Ikkalasi ham bir xil tezlik va ishonchlilik bilan ishlaydi. Click yoki Payme orqali ham botdagi kartaga o&apos;tkazma qilish mumkin — bot summani avtomatik aniqlaydi.
            </p>
          </section>

          {/* Section 6 — Kimlar uchun */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Kimlar uchun 6 oylik Telegram Premium eng mos?
            </h2>

            <div className="space-y-6 mb-6">
              {[
                {
                  title: "Telegram kanal egalari va blogerlar",
                  desc: "Agar o'z kanalingiz bo'lsa va har kuni kontent chiqarsangiz — Premium sizning professional imidjingiz uchun muhim. Premium badge, maxsus reaksiyalar va katta hajmli kontent yuklash imkoniyati — bularning barchasi kanal sifatini oshiradi. 6 oy — bu kontent strategiyasini ishlab chiqib, natijani ko'rishga yetarli vaqt.",
                },
                {
                  title: "Onlayn tadbirkorlar va frilanserlar",
                  desc: "Telegram orqali mijozlar bilan ishlasangiz, Premium sizga bir nechta qo'shimcha afzallik beradi: ovozli xabarlarni matn shaklida o'qish, tezkor tarjima, va katta hujjatlarni yuborish. Bu funksiyalar kuniga bir necha soat vaqt tejashi mumkin.",
                },
                {
                  title: "Faol foydalanuvchilar",
                  desc: "Agar Telegramda kuniga 3-4 soat yoki undan ko'p vaqt o'tkazasangiz — reklamalar yo'qligi va tezroq yuklanish sifatni sezilarli yaxshilaydi. 6 oylik obuna esa bu qulay muhitni uzoq muddatga ta'minlaydi.",
                },
                {
                  title: "Do'st yoki yaqinga sovg'a qilmoqchilar",
                  desc: "6 oylik Premium — bu oddiy sovg'a emas. Yarim yillik reklamasiz, to'liq imkoniyatli Telegram tajribasi. Tug'ilgan kun, bayram yoki shunchaki e'tibor belgisi sifatida juda qimmatli.",
                },
                {
                  title: "Talabalar va yoshlar",
                  desc: "Telegram Premiumning Voice-to-text funksiyasi ma'ruza va darslarni ovozli yozib olish va matn shaklida saqlash uchun juda qulay. 6 oy — bir o'quv semestriga to'g'ri keladi.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Oraliq CTA 2 */}
            <div className="bg-white rounded-2xl p-6 border-2 border-primary/20 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-bold text-foreground text-lg">6 oylik Telegram Premium — 235,000 so&apos;m</p>
                <p className="text-sm text-muted">Hoziroq <Link href="/6-oylik" className="text-primary hover:underline">batafsil ma&apos;lumot</Link> yoki to&apos;g&apos;ridan-to&apos;g&apos;ri sotib oling</p>
              </div>
              <Link href="https://t.me/premiumsendbot" target="_blank" className="px-6 py-3 rounded-xl hero-gradient text-white font-semibold text-sm shadow-lg shadow-primary/25 whitespace-nowrap">
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
                  q: "6 oylik Telegram Premium sotib olish uchun Visa karta kerakmi?",
                  a: "Yo'q. @PremiumSendBot orqali Uzcard yoki Humo kartasi bilan to'lash mumkin. Click yoki Payme orqali ham botdagi kartaga o'tkazma qilish mumkin. Visa talab qilinmaydi.",
                },
                {
                  q: "Telegram rasmiy ilovasida 6 oylik Premium mavjudmi?",
                  a: "Yo'q. Telegram faqat 1 oylik va 12 oylik obuna taklif qiladi. 6 oylik paket mavjud emas — uni faqat Premium Send kabi xizmatlar orqali sotib olish mumkin.",
                },
                {
                  q: "6 oylik Premium faollashgandan keyin qancha vaqtda ko'rinadi?",
                  a: "Odatda to'lovdan so'ng bir necha daqiqa ichida faollashadi. Ba'zi hollarda 15-30 daqiqa ketishi mumkin, lekin bu kamdan-kam uchraydi.",
                },
                {
                  q: "Boshqa odamga — do'stimga yoki oila a'zomga — 6 oylik Premium sovg'a qilsam bo'ladimi?",
                  a: "Ha. Buning uchun o'sha odamning Telegram username'ini kiriting. Premium to'g'ridan-to'g'ri uning akkauntiga faollashadi.",
                },
                {
                  q: "6 oylik Telegram Premium so'mda qancha turadi?",
                  a: "Premium Send da 6 oylik Telegram Premium narxi 235,000 so'm. To'lov O'zbekiston so'mida — Uzcard yoki Humo kartasi orqali amalga oshiriladi.",
                },
                {
                  q: "Premium obuna muddati tugaganda nima bo'ladi?",
                  a: "6 oy tugagandan so'ng obuna avtomatik to'xtatiladi. Akkaunt oddiy Telegram rejimiga qaytadi. Davom etmoqchi bo'lsangiz, yangi obuna sotib olishingiz kerak.",
                },
                {
                  q: "Premium Send da boshqa paketlar ham bormi?",
                  a: "Ha. 3 oylik (175,000 so'm) va 12 oylik (425,000 so'm) paketlar ham mavjud. Telegramda 3 va 6 oylik paket yo'q — ularni faqat Premium Send orqali olish mumkin.",
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
                  Agar O&apos;zbekistonda mahalliy karta orqali, keraksiz muammolarsiz 6 oylik Telegram Premium sotib olish kerak bo&apos;lsa —{" "}
                  <strong className="text-white">@PremiumSendBot</strong> bugun uchun eng qulay va ishonchli yechim. Uzcard va Humo kartasi orqali bir necha daqiqada buyurtma bering va 6 oy davomida Premium imkoniyatlaridan to&apos;liq bahramand bo&apos;ling.
                </p>
                <Link
                  href="https://t.me/premiumsendbot"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg"
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
