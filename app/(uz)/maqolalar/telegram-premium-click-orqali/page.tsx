import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Telegram Premium Click orqali sotib olish — 1-2 daqiqada, qadamma-qadam",
  description:
    "Telegram Premium Click orqali — 59,000 so'mdan 425,000 so'mgacha. @PremiumSendBot da Click ilovasi bilan 1-2 daqiqada to'lov, 5 daqiqada faollashish. Eng tezkor mahalliy usul.",
  keywords: [
    "Telegram Premium Click",
    "Click orqali Telegram Premium",
    "Telegram Premium Click ilovasi",
    "Click bilan Premium",
    "Click orqali premium sotib olish",
    "Telegram Premium tezkor",
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
      "Telegram Premium Click orqali sotib olish — eng tezkor usul",
    description:
      "Click ilovasi bilan Telegram Premium so'mda to'lov. 4 ta tarif, 1-2 daqiqada to'lov, 5 daqiqada faollashish, 0% komissiya.",
    url: "https://premiumsend.uz/maqolalar/telegram-premium-click-orqali",
    type: "article",
    publishedTime: "2026-05-03",
  },
};

export default function ArticleClickOrqali() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Telegram Premium Click orqali sotib olish — qadamma-qadam qo'llanma",
    description:
      "Telegram Premium ni Click ilovasi orqali O'zbekistonda sotib olish — barcha tariflar, narxlar va bosqichma-bosqich qo'llanma.",
    datePublished: "2026-05-03",
    dateModified: "2026-05-03",
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
          text: "Ha. @PremiumSendBot da Click ilovasi orqali Telegram Premium sotib olish mumkin. Barcha tariflar (1, 3, 6, 12 oylik) qo'llab-quvvatlanadi. To'lov so'mda, komissiyasiz, 1-2 daqiqada Click ilovasida amalga oshadi va 5 daqiqada Premium faollashadi.",
        },
      },
      {
        "@type": "Question",
        name: "Click orqali Telegram Premium qancha turadi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Narxlar Uzcard va Humo bilan bir xil: 1 oylik — 59,000 so'm, 3 oylik — 175,000 so'm, 6 oylik — 235,000 so'm, 12 oylik — 425,000 so'm. To'lov usuli (Uzcard, Humo, Click, Payme) narxga ta'sir qilmaydi. Click ham qo'shimcha komissiya olmaydi.",
        },
      },
      {
        "@type": "Question",
        name: "Click orqali to'lash nega eng tezkor usul?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Click ilovasida kartangiz allaqachon ro'yxatdan o'tgan bo'ladi — har to'lov uchun raqam va parol kiritish kerak emas. Bot taklif qilgan to'lov tugmasiga bossangiz, ilova ochiladi, summa avtomatik to'ldiriladi va siz faqat tasdiqlashingiz kerak. Butun to'lov 1-2 daqiqa ichida tugaydi.",
        },
      },
      {
        "@type": "Question",
        name: "Click ilovasi yo'q bo'lsa ham Premium olish mumkinmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha. @PremiumSendBot da Click bilan birga Uzcard P2P, Humo va Payme variantlari ham mavjud. Agar Click ilovasi yo'q bo'lsa, boshqa usulda to'lashingiz mumkin — narx bir xil qoladi. Click ilovasini Play Market yoki App Store dan bepul yuklash ham 2-3 daqiqa ichida amalga oshadi.",
        },
      },
      {
        "@type": "Question",
        name: "Click orqali to'lash xavfsizmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha. Click — O'zbekistondagi yetakchi to'lov tizimlaridan biri, Markaziy bank tomonidan litsenziyalangan. Karta ma'lumotlari faqat Click ichida saqlanadi, bot ko'rmaydi. Har to'lov uchun chek beriladi. Premium kelmasa, to'langan summa to'liq qaytariladi.",
        },
      },
      {
        "@type": "Question",
        name: "Telegram rasmiy ilovasida Click orqali to'lab bo'ladimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yo'q. Telegram rasmiy ilovasi faqat Visa, Mastercard, Google Pay va Apple Pay qabul qiladi. Click bu tizimda mavjud emas. Mahalliy to'lov uchun @PremiumSendBot kabi mahalliy oraliq xizmat zarur — natija bir xil, lekin to'lov so'mda va mahalliy ilovada amalga oshadi.",
        },
      },
      {
        "@type": "Question",
        name: "Click orqali sovg'a qilish mumkinmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha. 3, 6 va 12 oylik Telegram Premium ni Click bilan to'lab boshqa odamga sovg'a qilish mumkin. Bot username so'raydi, Click bilan to'laysiz — Premium o'sha akkauntda faollashadi. Telegram qoidasi bo'yicha 1 oylik sovg'a mavjud emas.",
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
            <time className="text-xs text-muted" dateTime="2026-05-03">
              2026-yil, 3-may
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Telegram Premium Click orqali sotib olish — eng tezkor mahalliy usul
          </h1>

          {/* TL;DR */}
          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>Qisqacha javob:</strong> Telegram Premium Click orqali sotib olish{" "}
              <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>{" "}
              da amalga oshiriladi. Narxlar: <strong>1 oylik — 59,000 so&apos;m</strong>, <strong>3 oylik — 175,000 so&apos;m</strong>, <strong>6 oylik — 235,000 so&apos;m</strong>, <strong>12 oylik — 425,000 so&apos;m</strong>. Click ilovasida to&apos;lov 1-2 daqiqa, Premium faollashishi 5 daqiqa. Komissiya 0%.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Click — O&apos;zbekistondagi eng keng tarqalgan mobil to&apos;lov tizimi. Karta ulangan ilova orqali har qanday onlayn to&apos;lov bir-ikki bosishda amalga oshadi. Telegram Premium sotib olishda ham Click ayni shu &quot;tez va oson&quot; tajribani saqlab qoladi — ko&apos;p bosqichlar yo&apos;q, har to&apos;lovda karta raqami yozish kerak emas.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Ushbu pillar qo&apos;llanma Click orqali Telegram Premium sotib olishning to&apos;liq jarayonini ochib beradi: nega Click eng tezkor variant, qaysi tariflar mavjud, bosqichma-bosqich yo&apos;riqnoma va eng ko&apos;p uchraydigan savollar.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 — Why Click is special */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Nega Click — Premium uchun eng tezkor mahalliy yo&apos;l?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Click bu — karta emas, <strong>to&apos;lov tizimi</strong>. Asosiy farq aynan shunda. Uzcard va Humo — kartalar (Visa va Mastercard kabi). Click esa ulardan tepada turadigan ilova: siz Click ilovasiga Uzcard yoki Humo kartani bir marta ulaysiz va keyin har to&apos;lovda kartani qaytadan kiritish kerak emas.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Bu Premium sotib olishda muhim afzallik beradi. Aksariyat foydalanuvchilar uchun:
            </p>
            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li><strong className="text-foreground">Karta raqami va CVV yozish kerak emas</strong> — ilova bir marta yodda saqlagan</li>
              <li><strong className="text-foreground">SMS tasdiq o&apos;rniga PIN kod</strong> — tezroq, simsiz</li>
              <li><strong className="text-foreground">Bir bosishda to&apos;lov</strong> — bot havolasini bossangiz, summa avtomatik to&apos;ldiriladi</li>
              <li><strong className="text-foreground">Chek darhol PDF formatida</strong> — saqlash, ulashish oson</li>
            </ul>
            <p className="text-muted leading-relaxed mb-4">
              Telegram rasmiy ilovasida esa Click umuman ishlamaydi — Telegram faqat Visa, Mastercard, Google Pay va Apple Pay qabul qiladi. Click ham, Uzcard ham, Humo ham bu tizimga kiritilmagan. Shuning uchun mahalliy oraliq xizmat zarur.
            </p>
            <div className="bg-section-alt rounded-xl p-5">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Qisqacha:</strong> Telegram Click&apos;ni qabul qilmaydi, lekin Click eng oson va tezkor mahalliy to&apos;lov usuli. @PremiumSendBot bu ikki haqiqatni birlashtiradi — siz Click bilan to&apos;laysiz, xizmat Premium ni faollashtiradi.
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
                <strong>Narxlar:</strong> 4 ta tarif Click bilan ham qabul qilinadi. 1 oylik — <strong>59,000 so&apos;m</strong>, 3 oylik — <strong>175,000 so&apos;m</strong>, 6 oylik — <strong>235,000 so&apos;m</strong>, 12 oylik — <strong>425,000 so&apos;m</strong>. Click qo&apos;shimcha komissiya olmaydi.
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
              Click bilan to&apos;lash narxga umuman ta&apos;sir qilmaydi — yashirin xizmat haqi yo&apos;q, kurs farqi yo&apos;q. Tariflar haqida batafsil:{" "}
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
                ni oching → tarifni tanlang → username kiriting → <strong>Click</strong> ni tanlang → Click ilovasi ochiladi → tasdiqlang → Premium 5 daqiqada faollashadi.
              </p>
            </div>

            <p className="text-muted leading-relaxed mb-6">
              Quyida har bir bosqich batafsil. Click ilovasi telefoningizda o&apos;rnatilgan va karta ulangan bo&apos;lsa — jarayon haqiqatan 3-5 daqiqa ichida tugaydi:
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
                  desc: "Bot 4 ta tarif chiqaradi: 1, 3, 6 va 12 oylik. Sinab ko'rish uchun 1 oylik (59,000) yetadi, doimiy uchun 12 oylik (425,000) eng arzon. Sizga mosini tanlang.",
                },
                {
                  step: "3",
                  title: "Premium kerak akkauntning username'ini kiriting",
                  desc: "@belgisidan keyin Telegram username yozing. Bu o'zingizning yoki sovg'a olayotgan kishining akkaunti. Xato bo'lsa Premium boshqa akkauntda faollashadi — ikki marta tekshiring.",
                },
                {
                  step: "4",
                  title: "To'lov usuli sifatida \"Click\" ni tanlang",
                  desc: "4 ta variant ko'rinadi: Uzcard, Humo, Click, Payme. \"Click\" ni bosing. Bot Click to'lov havolasini yoki QR-kodni jo'natadi.",
                },
                {
                  step: "5",
                  title: "Click ilovasi avtomatik ochiladi",
                  desc: "Havolaga bossangiz, telefon Click ilovasini ochadi va summa avtomatik to'ldiriladi. Karta raqami, parol va CVV kiritish kerak emas — ilovada yodda saqlangan.",
                },
                {
                  step: "6",
                  title: "PIN kod yoki Face ID bilan tasdiqlang",
                  desc: "Click siz oldin o'rnatgan PIN kodi (yoki Face ID/barmoq izi) bilan to'lovni tasdiqlaysiz. SMS tasdiq kerak emas. Bir lahzada to'lov amalga oshadi.",
                },
                {
                  step: "7",
                  title: "Premium 5 daqiqada faollashadi",
                  desc: "To'lov tasdiqlangach, akkauntda Premium avtomatik yoqiladi. Bot xabar yuboradi, profilda Premium belgi paydo bo'ladi. Texnik kechikish bo'lsa — 10-15 daqiqa.",
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
              Aksariyat Click foydalanuvchilari butun jarayonni 3-5 daqiqa ichida yakunlaydi. Premium yoqilgach, tarifning butun davomida hech qanday qayta to&apos;lov so&apos;ralmaydi.
            </p>
          </section>

          {/* Mid CTA */}
          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Click ilovangiz tayyormi?{" "}
                <strong className="text-white">@PremiumSendBot</strong> da 1, 3, 6 yoki 12 oylik Premium ni Click bilan tezda to&apos;lab oling. To&apos;lov — 1-2 daqiqada.
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

          {/* Section 4 — Click vs other methods */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Click vs Uzcard P2P vs Payme: qaysi to&apos;lov usuli qulayroq?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              @PremiumSendBot uch xil to&apos;lov yo&apos;nalishini taklif qiladi: Click, Payme va Uzcard P2P. Narx hammasida bir xil — 175,000 so&apos;m (3 oylik misolida). Lekin tezlik va qulaylik darajasi farq qiladi:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Parametr</div>
                <div className="text-center">Click</div>
                <div className="text-center">Payme</div>
                <div className="text-center">Uzcard P2P</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">To&apos;lov vaqti</div>
                <div className="text-center text-green-600 font-bold">1-2 daqiqa</div>
                <div className="text-center text-green-600 font-bold">1-2 daqiqa</div>
                <div className="text-center">2-3 daqiqa</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Karta raqami yozish</div>
                <div className="text-center text-green-600">Yo&apos;q</div>
                <div className="text-center text-green-600">Yo&apos;q</div>
                <div className="text-center">Ha</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Tasdiq usuli</div>
                <div className="text-center">PIN/Face ID</div>
                <div className="text-center">PIN/Face ID</div>
                <div className="text-center">SMS kod</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Komissiya</div>
                <div className="text-center text-green-600 font-bold">0%</div>
                <div className="text-center text-green-600 font-bold">0%</div>
                <div className="text-center text-green-600 font-bold">0%</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Karta turi</div>
                <div className="text-center">Uzcard, Humo</div>
                <div className="text-center">Uzcard, Humo</div>
                <div className="text-center">Faqat o&apos;sha karta</div>
              </div>
              <div className="grid grid-cols-4 p-4 items-center text-sm">
                <div className="font-medium">Eng yaxshi kim uchun</div>
                <div className="text-center text-muted text-xs">Click ilovasi bor</div>
                <div className="text-center text-muted text-xs">Payme ilovasi bor</div>
                <div className="text-center text-muted text-xs">Bank ilovasi orqali</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Xulosa:</strong> Click va Payme — deyarli teng. Bu ikkalasi bir xil &quot;ilova-orqali&quot; tajribani beradi. Aksariyat O&apos;zbekiston foydalanuvchilarida ikkalasi ham o&apos;rnatilgan. Click — biroz keng tarqalganroq, Payme — biroz tezroq. Qaysisi qulay, shuni tanlang.
            </p>
            <p className="text-muted leading-relaxed">
              Uzcard P2P — eski uslub: kartani qo&apos;lda yozish, SMS kutish. Click yoki Payme bo&apos;lmasa ishlaydi, bo&apos;lsa — ilova tezroq.
            </p>
          </section>

          {/* Section 5 — Safety */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Click orqali to&apos;lash xavfsizmi?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Click — Markaziy bank tomonidan litsenziyalangan rasmiy to&apos;lov tizimi. PCI DSS standartiga muvofiq ishlaydi va millionlab foydalanuvchi uni kommunal to&apos;lovlar, mobil aloqa, internet va shu kabi xizmatlarda ishlatadi. Telegram Premium uchun ham mexanizm bir xil — alohida xavf yo&apos;q.
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">🔐 Karta ma&apos;lumotlari Click serverida</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Karta raqami, parol va CVV faqat Click&apos;ning xavfsiz serverlarida saqlanadi. @PremiumSendBot bu ma&apos;lumotlarni hech qachon ko&apos;rmaydi va ulay olmaydi. Bot faqat &quot;to&apos;lov keldi&quot; faktini ko&apos;radi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">💰 Pul qaytarish kafolati</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Texnik xato tufayli Premium akkauntda yoqilmasa, to&apos;langan summa to&apos;liq qaytariladi. Click ilovasidagi chek raqami orqali qaytarish jarayoni tezkor — bu standart reseller qoidasi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">📋 Click chek — huquqiy hujjat</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Click har to&apos;lov uchun PDF formatida chek beradi. Bu ilovada saqlanadi va istalgan paytda qayta yuklash mumkin. Muammo bo&apos;lsa, qo&apos;llab-quvvatlash chek raqami orqali to&apos;lovni darhol topadi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">🛡️ Ikki bosqichli himoya</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Click — PIN/Face ID + bank balansi tekshiruvi. Bot — username tasdig&apos;i + Premium faollashtirish. Har bosqichda nazorat bor — agar biror joyda muammo bo&apos;lsa, jarayon to&apos;xtaydi va xato xabar beriladi.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Click orqali Premium sotib olish — sizning oddiy Click to&apos;lovingiz bilan bir xil darajada xavfsiz. Qo&apos;shimcha texnik risk yo&apos;q.
            </p>
          </section>

          {/* Section 6 — Common issues */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Click orqali to&apos;lovda uchraydigan muammolar va yechimlar
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Aksariyat Click to&apos;lovlari muammosiz amalga oshadi — chunki ilova uzoq vaqtdan beri sayqallangan va barqaror ishlaydi. Lekin ba&apos;zan bank yoki tarmoq tomondan kichik to&apos;siqlar bo&apos;lishi mumkin:
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Click ilovasida balans yetmaydi</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Eng ko&apos;p uchraydigan sabab. <strong>Yechim:</strong> Click ichida kartani tekshiring — balans yetarli bo&apos;lsa, ilova oddiy ishlaydi. Yetmasa — boshqa karta tanlang yoki ilova orqali kartaga pul to&apos;ldiring.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Click ilovasi havolani ochmadi</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Telefon eski versiyada bo&apos;lishi mumkin yoki Click ilovasi yangilanish kutmoqda. <strong>Yechim:</strong> Click ilovasini Play Market yoki App Store dan yangilang. Yangilangan bo&apos;lsa — bot havolasini qaytadan bosing.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Pul yechildi, lekin Premium kelmadi</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Tizim sal uzoqroq qayta ishlanishi mumkin. <strong>Yechim:</strong> 10-15 daqiqa kuting. Faollashmasa — botdagi qo&apos;llab-quvvatlashga Click chek raqamini yuboring. Manual tekshirishdan so&apos;ng Premium yoqiladi yoki pul qaytariladi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Click ilovasi yo&apos;q — qanday o&apos;rnataman?</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Click ilovasini Play Market (Android) yoki App Store (iPhone) dan bepul yuklang. Telefon raqami bilan ro&apos;yxatdan o&apos;ting (3 daqiqa), Uzcard yoki Humo kartani uling — keyin to&apos;lov bir bosishda. <strong>Yoki:</strong> Click yo&apos;q bo&apos;lsa, botda Payme yoki Uzcard variantiga o&apos;ting.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Click PIN kodini unutdim</h3>
                <p className="text-sm text-muted leading-relaxed">
                  <strong>Yechim:</strong> Click ilovasidagi &quot;PIN kodni tiklash&quot; bo&apos;limidan foydalaning. Telefon raqami orqali tiklash 5 daqiqa ichida bo&apos;ladi. Tiklab, qaytadan to&apos;lashga harakat qiling.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Aksariyat muammolarni darhol hal qilish mumkin. Bot qo&apos;llab-quvvatlashi har vaziyatda yordam beradi va muqobil yo&apos;l (Payme yoki Uzcard P2P) taklif qiladi.
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
                  q: "Telegram Premium Click orqali sotib olish mumkinmi?",
                  a: "Ha. @PremiumSendBot da Click ilovasi orqali Telegram Premium sotib olish mumkin. Barcha tariflar (1, 3, 6, 12 oylik) qo'llab-quvvatlanadi. To'lov so'mda, komissiyasiz, 5 daqiqada Premium faollashadi.",
                },
                {
                  q: "Click orqali Telegram Premium qancha turadi?",
                  a: "Narxlar Uzcard va Humo bilan bir xil: 1 oylik — 59,000 so'm, 3 oylik — 175,000 so'm, 6 oylik — 235,000 so'm, 12 oylik — 425,000 so'm. Click qo'shimcha komissiya olmaydi.",
                },
                {
                  q: "Click orqali to'lash nega tezkorroq?",
                  a: "Click ilovasida kartangiz allaqachon ulangan — har to'lovda raqam, parol va CVV kiritish kerak emas. To'lov 1-2 daqiqada PIN yoki Face ID bilan tasdiqlangan, SMS kutmasdan tugaydi.",
                },
                {
                  q: "Click ilovasi yo'q bo'lsa nima qilish kerak?",
                  a: "Click ilovasini Play Market yoki App Store dan bepul yuklang (3-5 daqiqa). Yoki @PremiumSendBot da Payme yoki Uzcard P2P variantini tanlang — narx bir xil qoladi.",
                },
                {
                  q: "Click orqali to'lash xavfsizmi?",
                  a: "Ha. Click — Markaziy bank tomonidan litsenziyalangan rasmiy to'lov tizimi, PCI DSS standartiga muvofiq. Karta ma'lumotlari faqat Click serverida, bot ko'rmaydi. Premium kelmasa pul qaytariladi.",
                },
                {
                  q: "Telegram rasmiy ilovasida Click bilan to'lab bo'ladimi?",
                  a: "Yo'q. Telegram faqat Visa, Mastercard, Google Pay va Apple Pay qabul qiladi. Click bu tizimda yo'q. Mahalliy to'lov uchun @PremiumSendBot kabi mahalliy oraliq xizmat zarur.",
                },
                {
                  q: "Click orqali sovg'a qilish mumkinmi?",
                  a: "Ha. 3, 6 va 12 oylik Premium ni Click bilan to'lab boshqa odamga sovg'a qilish mumkin. Bot username so'raydi, Click bilan to'laysiz — Premium o'sha akkauntda faollashadi. 1 oylik sovg'a Telegram qoidasi bo'yicha mavjud emas.",
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
                Click orqali Premium — raqamlarda
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">1-2 daq.</p>
                  <p className="text-sm text-muted">to&apos;lov vaqti</p>
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
                Click orqali muddat bo&apos;yicha qo&apos;llanmalar
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-4">
                Click foydalanuvchilari uchun barcha tariflar mavjud. Sizga mos muddatga qarab tanlang:
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/maqolalar/telegram-premium-humo-orqali" className="text-primary font-semibold hover:underline">
                    Humo karta orqali Premium (umumiy taqqoslash uchun)
                  </Link>
                </li>
                <li>
                  <Link href="/maqolalar/telegram-premium-narxlari" className="text-primary font-semibold hover:underline">
                    Telegram Premium narxlari taqqoslash (4 ta tarif)
                  </Link>
                </li>
                <li>
                  <Link href="/maqolalar/telegram-premium-eng-arzon-qayerdan-sotib-olish" className="text-primary font-semibold hover:underline">
                    Telegram Premium eng arzon qayerdan sotib olish
                  </Link>
                </li>
                <li>
                  <Link href="/maqolalar/3-oylik-telegram-premium-uzcard-orqali" className="text-primary font-semibold hover:underline">
                    3 oylik Premium Uzcard orqali (taqqoslash uchun)
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
                  Click ilovangiz tayyormi? Telegram Premium ni mahalliy ilovada eng tezkor yo&apos;l bilan oling. 1, 3, 6 yoki 12 oylik tariflar — so&apos;mda to&apos;lov, 1-2 daqiqada Click ichida tasdiqlash, 5 daqiqada faollashish.{" "}
                  <strong className="text-white">@PremiumSendBot</strong> da bir necha bosishda boshlang.
                </p>
                <Link
                  href="https://t.me/premiumsendbot"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg"
                >
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
