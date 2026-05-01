import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Telegram Premium narxlari 2026: 1, 3, 6, 12 oylik tariflar taqqoslash",
  description:
    "Telegram Premium narxlari O'zbekistonda: 1 oylik — 59,000 so'm, 3 oylik — 175,000 so'm, 6 oylik — 235,000 so'm, 12 oylik — 425,000 so'm. Eng tejamkor tarif qaysi? @PremiumSendBot da so'mda to'lov.",
  keywords: [
    "Telegram Premium narxi",
    "Telegram Premium narxlari",
    "Telegram Premium tariflari",
    "Telegram Premium qancha turadi",
    "Telegram Premium 1 oylik narxi",
    "Telegram Premium 12 oylik narxi",
    "Telegram Premium taqqoslash",
    "PremiumSendBot",
  ],
  alternates: {
    canonical: "https://premiumsend.uz/maqolalar/telegram-premium-narxlari",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/telegram-premium-narxlari",
      ru: "https://premiumsend.uz/ru/maqolalar/telegram-premium-narxlari",
    },
  },
  openGraph: {
    title:
      "Telegram Premium narxlari 2026: 1, 3, 6, 12 oylik tariflar taqqoslash",
    description:
      "O'zbekistonda Telegram Premium narxlari: 59,000 dan 425,000 so'mgacha. Eng tejamkor tarif tahlili va to'lov usullari.",
    url: "https://premiumsend.uz/maqolalar/telegram-premium-narxlari",
    type: "article",
    publishedTime: "2026-04-30",
  },
};

export default function ArticleTelegramPremiumNarxlari() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Telegram Premium narxlari 2026: 1, 3, 6, 12 oylik tariflar taqqoslash",
    description:
      "O'zbekistonda Telegram Premium narxlari va tariflar taqqoslash. 1 oylikdan 12 oylikgacha — qaysi tarif eng tejamkor?",
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
      "https://premiumsend.uz/maqolalar/telegram-premium-narxlari",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Telegram Premium qancha turadi O'zbekistonda?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Premium Send da Telegram Premium 1 oylik — 59,000 so'm, 3 oylik — 175,000 so'm, 6 oylik — 235,000 so'm, 12 oylik — 425,000 so'm. To'lov Uzcard, Humo, Click yoki Payme orqali so'mda amalga oshiriladi.",
        },
      },
      {
        "@type": "Question",
        name: "Telegram Premium qaysi tarifi eng tejamkor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "12 oylik tarif eng tejamkor — oyiga atigi 35,417 so'm. 1 oylikni 12 marta sotib olsangiz 708,000 so'm bo'lardi, 12 oylik paketda esa 425,000 so'm. Tejamkorlik 39% yoki 283,000 so'm.",
        },
      },
      {
        "@type": "Question",
        name: "1 oylik va 12 oylik o'rtasida narx farqi qancha?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "1 oylik — 59,000 so'm (oyiga 59,000), 12 oylik — 425,000 so'm (oyiga 35,417). Oylik xarajatda farq 23,583 so'm yoki 39%. Yillik hisobda 1 oylikni 12 marta olsangiz 708,000 so'm — 12 oylik paketdan 283,000 so'm qimmat.",
        },
      },
      {
        "@type": "Question",
        name: "6 oylik tarif kimga mos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "6 oylik tarif (235,000 so'm, oyiga 39,167) — eng balansli tanlov. Premium ni sinab ko'rmoqchi bo'lganlarga, lekin 1 oylikdan tejamkorlik istaganlar uchun ideal. 1 oylikka nisbatan 33% arzon, lekin 12 oylik kabi katta majburiyat emas.",
        },
      },
      {
        "@type": "Question",
        name: "Telegram rasmiy narxidan nimasi farq qiladi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Telegram rasmiy ilovasida narx dollarda ko'rsatiladi va xorijiy karta talab qiladi (Uzcard, Humo ishlamaydi). Premium Send esa so'mda to'lov, mahalliy karta — qulay va tezkor. Konvertatsiya yo'qotishlari yo'q, narx aniq.",
        },
      },
      {
        "@type": "Question",
        name: "Narxlar o'zgarib turadimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Narxlar dollar kursiga bog'liq emas — Premium Send so'mda fiks narxlarni saqlab kelmoqda. Narx o'zgarsa, sayt va @PremiumSendBot da darhol yangilanadi. Bugungi narxlar 2026-yil aprel holatiga to'g'ri keladi.",
        },
      },
      {
        "@type": "Question",
        name: "Sovg'a tarifi narxi ham shu xilmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha, sovg'a (gift) sifatida olishning narxi xuddi shu — 3 oylik 175,000, 6 oylik 235,000, 12 oylik 425,000 so'm. Faqat 1 oylik sovg'a Telegram qoidasi bo'yicha mumkin emas — sovg'a faqat 3, 6, 12 oylik.",
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
      { "@type": "ListItem", position: 3, name: "Telegram Premium narxlari", item: "https://premiumsend.uz/maqolalar/telegram-premium-narxlari" },
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
        <span className="text-foreground font-medium">Telegram Premium narxlari</span>
      </nav>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-100 text-purple-700">
              Taqqoslash
            </span>
            <time className="text-xs text-muted" dateTime="2026-04-30">
              2026-yil, 30-aprel
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Telegram Premium narxlari 2026: 1, 3, 6, 12 oylik tariflar taqqoslash
          </h1>

          {/* TL;DR */}
          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>Qisqacha javob:</strong> O&apos;zbekistonda Telegram Premium narxlari{" "}
              <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>{" "}
              da: <strong>1 oylik — 59,000 so&apos;m</strong>, <strong>3 oylik — 175,000 so&apos;m</strong>, <strong>6 oylik — 235,000 so&apos;m</strong>, <strong>12 oylik — 425,000 so&apos;m</strong>. Eng tejamkor — 12 oylik (oyiga 35,417 so&apos;m, 39% tejamkorlik). To&apos;lov so&apos;mda, Uzcard/Humo/Click/Payme.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Telegram Premium-ni sotib olishda eng birinchi savol — &quot;qaysi tarifni tanlash kerak?&quot;. To&apos;rt variant bor: 1 oylik, 3 oylik, 6 oylik va 12 oylik. Har birining narxi va oylik xarajati boshqacha. Tanlov shunchaki narxga emas — sizning Premium ni qancha vaqt ishlatmoqchi ekanligingiz, byudjet imkoniyatlari va sinab ko&apos;rish niyatingiz bilan ham bog&apos;liq.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Ushbu maqolada to&apos;rt tarifni narx, oylik xarajat, tejamkorlik foizi va kim uchun mosligi bo&apos;yicha to&apos;liq taqqoslaymiz. Oxirida — qaysi tarif aynan sizga to&apos;g&apos;ri kelishi haqida aniq tavsiya.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 — Full comparison table */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Telegram Premium 4 ta tarifi: to&apos;liq taqqoslash jadvali
            </h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Asosiy raqamlar:</strong> 4 tarifning narxi — 59,000, 175,000, 235,000 va 425,000 so&apos;m. Tejamkorlik foizi 1 oylikka nisbatan: 1%, 33% va 39%. Eng arzon oylik xarajat — 12 oylikda (35,417 so&apos;m).
              </p>
            </div>

            <p className="text-muted leading-relaxed mb-6">
              Quyida — barcha 4 ta tarifning to&apos;liq taqqoslashi. Har bir parametr bo&apos;yicha qaysi tarif qanday ko&apos;rsatkichga ega:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-5 bg-section-alt p-4 font-bold text-sm">
                <div>Parametr</div>
                <div className="text-center">1 oylik</div>
                <div className="text-center">3 oylik</div>
                <div className="text-center">6 oylik</div>
                <div className="text-center bg-primary-light/40 rounded">12 oylik ⭐</div>
              </div>
              <div className="grid grid-cols-5 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Umumiy narx</div>
                <div className="text-center">59,000</div>
                <div className="text-center">175,000</div>
                <div className="text-center">235,000</div>
                <div className="text-center font-bold text-primary bg-primary-light/20">425,000</div>
              </div>
              <div className="grid grid-cols-5 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Oylik narx</div>
                <div className="text-center">59,000</div>
                <div className="text-center">58,333</div>
                <div className="text-center">39,167</div>
                <div className="text-center font-bold text-primary bg-primary-light/20">35,417</div>
              </div>
              <div className="grid grid-cols-5 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Tejamkorlik %</div>
                <div className="text-center text-muted">—</div>
                <div className="text-center text-green-600">1%</div>
                <div className="text-center text-green-600">33%</div>
                <div className="text-center font-bold text-green-600 bg-primary-light/20">39%</div>
              </div>
              <div className="grid grid-cols-5 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Tejamkorlik so&apos;m</div>
                <div className="text-center text-muted">—</div>
                <div className="text-center text-green-600">2,000</div>
                <div className="text-center text-green-600">119,000</div>
                <div className="text-center font-bold text-green-600 bg-primary-light/20">283,000</div>
              </div>
              <div className="grid grid-cols-5 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Muddati</div>
                <div className="text-center">30 kun</div>
                <div className="text-center">90 kun</div>
                <div className="text-center">180 kun</div>
                <div className="text-center bg-primary-light/20">365 kun</div>
              </div>
              <div className="grid grid-cols-5 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Sovg&apos;a qilish</div>
                <div className="text-center text-muted">❌</div>
                <div className="text-center text-green-600">✅</div>
                <div className="text-center text-green-600">✅</div>
                <div className="text-center text-green-600 bg-primary-light/20">✅</div>
              </div>
              <div className="grid grid-cols-5 p-4 items-center text-sm">
                <div className="font-medium">Tavsiya darajasi</div>
                <div className="text-center">⭐</div>
                <div className="text-center">⭐⭐</div>
                <div className="text-center">⭐⭐⭐</div>
                <div className="text-center font-bold bg-primary-light/20">⭐⭐⭐⭐⭐</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Jadvaldan ko&apos;rinib turibdiki — 1 oylikdan 12 oylikgacha o&apos;tganda har oyga to&apos;lash kamayadi. Ammo &quot;qaysi tarif eng yaxshisi?&quot; degan savolga javob faqat narx emas: byudjet, ishlatish davomiyligi va sinab ko&apos;rish niyatingiz ham muhim.
            </p>
          </section>

          {/* Section 2 — Each tariff detailed */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">
              Har bir tarif batafsil: kimga mos va nima beradi?
            </h2>

            {/* 1 oylik */}
            <div className="bg-white rounded-2xl p-6 border border-card-border shadow-sm mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground">1 oylik tarif</h3>
                <span className="text-2xl font-extrabold text-primary">59,000 so&apos;m</span>
              </div>
              <p className="text-muted text-sm leading-relaxed mb-4">
                <strong className="text-foreground">Eng past kirish narxi.</strong> Premium ni sinab ko&apos;rmoqchi bo&apos;lganlar, byudjet kichik bo&apos;lganlar yoki vaqtinchalik foydalanuvchilar uchun. Oyiga 59,000 so&apos;m — tushlikdan ham arzon.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                <div className="bg-section-alt rounded-lg p-3">
                  <p className="font-bold text-foreground mb-1">✅ Mos:</p>
                  <p className="text-muted">Sinab ko&apos;rish, qisqa muddatli ish, byudjet cheklangan</p>
                </div>
                <div className="bg-section-alt rounded-lg p-3">
                  <p className="font-bold text-foreground mb-1">⚠️ Mos emas:</p>
                  <p className="text-muted">Uzoq muddatli reja, tejamkorlik istash, sovg&apos;a qilish</p>
                </div>
              </div>
              <Link href="/maqolalar/1-oylik-telegram-premium-sotib-olish" className="text-primary text-sm font-semibold hover:underline">
                1 oylik haqida batafsil →
              </Link>
            </div>

            {/* 3 oylik */}
            <div className="bg-white rounded-2xl p-6 border border-card-border shadow-sm mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground">3 oylik tarif</h3>
                <span className="text-2xl font-extrabold text-primary">175,000 so&apos;m</span>
              </div>
              <p className="text-muted text-sm leading-relaxed mb-4">
                <strong className="text-foreground">Sezilarli tejamkorlik yo&apos;q, lekin moslashuvchanlik bor.</strong> Oyiga 58,333 so&apos;m — 1 oylikdan atigi 1% arzon. Ammo 3 oy davomida har oy to&apos;lashga ehtiyoj bo&apos;lmaydi. Sovg&apos;a qilish uchun ham mos.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                <div className="bg-section-alt rounded-lg p-3">
                  <p className="font-bold text-foreground mb-1">✅ Mos:</p>
                  <p className="text-muted">Mavsumiy ish (3 oy), sovg&apos;a, qisqa loyihalar</p>
                </div>
                <div className="bg-section-alt rounded-lg p-3">
                  <p className="font-bold text-foreground mb-1">⚠️ Mos emas:</p>
                  <p className="text-muted">Maksimal tejamkorlik kerak bo&apos;lsa</p>
                </div>
              </div>
              <Link href="/maqolalar/3-oylik-telegram-premium-sotib-olish" className="text-primary text-sm font-semibold hover:underline">
                3 oylik haqida batafsil →
              </Link>
            </div>

            {/* 6 oylik */}
            <div className="bg-white rounded-2xl p-6 border-2 border-primary/30 shadow-md mb-6 relative">
              <div className="absolute -top-3 left-6 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                Eng balansli
              </div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground">6 oylik tarif</h3>
                <span className="text-2xl font-extrabold text-primary">235,000 so&apos;m</span>
              </div>
              <p className="text-muted text-sm leading-relaxed mb-4">
                <strong className="text-foreground">Eng balansli variant — narx va majburiyat o&apos;rtasida.</strong> Oyiga 39,167 so&apos;m — 1 oylikdan 33% arzon. Yarim yillik majburiyat — uzoq, lekin 12 oylik kabi katta investitsiya emas. Ko&apos;p foydalanuvchilarning &quot;sweet spot&quot;i.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                <div className="bg-section-alt rounded-lg p-3">
                  <p className="font-bold text-foreground mb-1">✅ Mos:</p>
                  <p className="text-muted">Doimiy foydalanuvchi, talaba semestri, sezilarli tejamkorlik</p>
                </div>
                <div className="bg-section-alt rounded-lg p-3">
                  <p className="font-bold text-foreground mb-1">⚠️ Mos emas:</p>
                  <p className="text-muted">Sinab ko&apos;rish niyatingizda yoki yillik tejamkorlik kerak</p>
                </div>
              </div>
              <Link href="/maqolalar/6-oylik-telegram-premium-olishning-eng-yaxshi-usuli" className="text-primary text-sm font-semibold hover:underline">
                6 oylik haqida batafsil →
              </Link>
            </div>

            {/* 12 oylik */}
            <div className="bg-white rounded-2xl p-6 border-2 border-primary shadow-lg mb-6 relative">
              <div className="absolute -top-3 left-6 hero-gradient text-white text-xs font-bold px-3 py-1 rounded-full">
                Eng tejamkor — 39%
              </div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground">12 oylik tarif</h3>
                <span className="text-2xl font-extrabold text-primary">425,000 so&apos;m</span>
              </div>
              <p className="text-muted text-sm leading-relaxed mb-4">
                <strong className="text-foreground">Maksimal tejamkorlik. Eng past oylik narx.</strong> Oyiga atigi 35,417 so&apos;m — 1 oylikdan 39% arzon. Yiliga 283,000 so&apos;m tejaladi. Telegramni har kun ishlatadigan, biznesda foydalanadigan, kontent yaratuvchilar uchun aniq tanlov.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                <div className="bg-section-alt rounded-lg p-3">
                  <p className="font-bold text-foreground mb-1">✅ Mos:</p>
                  <p className="text-muted">Kundalik foydalanuvchi, biznes, bloger, maksimal tejamkorlik</p>
                </div>
                <div className="bg-section-alt rounded-lg p-3">
                  <p className="font-bold text-foreground mb-1">⚠️ Mos emas:</p>
                  <p className="text-muted">Birinchi marta sinab ko&apos;rsangiz, byudjet juda chegaralangan</p>
                </div>
              </div>
              <Link href="/maqolalar/12-oylik-telegram-premium-uzcard-orqali" className="text-primary text-sm font-semibold hover:underline">
                12 oylik haqida batafsil →
              </Link>
            </div>
          </section>

          {/* Mid CTA */}
          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Tarifni allaqachon tanladingizmi?{" "}
                <strong className="text-white">@PremiumSendBot</strong> da Uzcard, Humo, Click yoki Payme orqali so&apos;mda to&apos;lang — 5 daqiqada Premium faollashadi.
              </p>
              <Link
                href="https://t.me/premiumsendbot"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                @PremiumSendBot orqali boshlash
              </Link>
            </div>
          </section>

          {/* Section 3 — Saving math */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Qaysi tarif eng tejamkor? Aniq raqamlar
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              &quot;Tejamkorlik&quot; degan so&apos;z ko&apos;p ishlatiladi, lekin u nimani anglatadi? Quyida aniq raqamlar — agar Premium ni 12 oy davomida ishlatmoqchi bo&apos;lsangiz, har tarif sizga qancha turadi:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Sxema</div>
                <div className="text-center">12 oy uchun jami</div>
                <div className="text-center">12 oylikka qiyoslab tejamkorlik</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">1 oylik × 12 marta</div>
                <div className="text-center">708,000 so&apos;m</div>
                <div className="text-center text-red-600 font-bold">+283,000 (qimmat)</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">3 oylik × 4 marta</div>
                <div className="text-center">700,000 so&apos;m</div>
                <div className="text-center text-red-600 font-bold">+275,000 (qimmat)</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">6 oylik × 2 marta</div>
                <div className="text-center">470,000 so&apos;m</div>
                <div className="text-center text-orange-500 font-bold">+45,000 (qimmat)</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center text-sm bg-primary-light/20">
                <div className="font-bold text-primary">12 oylik × 1 marta ⭐</div>
                <div className="text-center font-bold text-primary">425,000 so&apos;m</div>
                <div className="text-center text-green-600 font-bold">Asos (eng arzon)</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Xulosa:</strong> agar siz Premium ni 12 oy davomida ishlatmoqchi bo&apos;lsangiz, eng tejamkor variant — 12 oylik tarif. 1 oylikni har oy yangilash sizga 283,000 so&apos;m ortiqcha turadi. Bu — yangi 6 oylik paketga yetadigan summa.
            </p>
            <p className="text-muted leading-relaxed">
              Agar 6 oydan ko&apos;p, 12 oydan kam ishlatmoqchi bo&apos;lsangiz — 6 oylik mantiqiyroq. 6 oydan kam ishlatadigan bo&apos;lsangiz — 1 yoki 3 oylik.
            </p>
          </section>

          {/* Section 4 — Payment methods */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Telegram Premium narxini qanday to&apos;lash mumkin?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Premium Send da to&apos;lov to&apos;rt yo&apos;l bilan amalga oshiriladi — barchasi mahalliy va so&apos;mda. Komissiyasiz, qo&apos;shimcha xarajatsiz:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">💳 Uzcard</h3>
                <p className="text-sm text-muted">
                  P2P o&apos;tkazma yoki Click/Payme orqali. Barcha tariflar uchun ishlaydi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">💳 Humo</h3>
                <p className="text-sm text-muted">
                  Uzcard ga muqobil, jarayoni bir xil. Ko&apos;p banklarda mavjud.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">📱 Click</h3>
                <p className="text-sm text-muted">
                  Eng tezkor variant. Kartani ulagan bo&apos;lsangiz — 30 soniyada to&apos;lov.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">📱 Payme</h3>
                <p className="text-sm text-muted">
                  Click ga o&apos;xshash. Payme ilovasi orqali oddiy to&apos;lov.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Aniq qo&apos;llanmalar: Uzcard orqali —{" "}
              <Link href="/maqolalar/1-oylik-telegram-premium-uzcard-orqali-sotib-olish" className="text-primary font-semibold hover:underline">1 oylik</Link>,{" "}
              <Link href="/maqolalar/3-oylik-telegram-premium-uzcard-orqali" className="text-primary font-semibold hover:underline">3 oylik</Link>,{" "}
              <Link href="/maqolalar/6-oylik-telegram-premium-uzcard-orqali" className="text-primary font-semibold hover:underline">6 oylik</Link>,{" "}
              <Link href="/maqolalar/12-oylik-telegram-premium-uzcard-orqali" className="text-primary font-semibold hover:underline">12 oylik</Link>.
            </p>
          </section>

          {/* Section 5 — Decision tree */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Qaysi tarifni tanlash kerak? 30 soniyalik test
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Tarif tanlashda hayron bo&apos;lyapsizmi? Quyidagi savollarga javob bering — javob to&apos;g&apos;ri tarifga olib boradi:
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-section-alt rounded-xl p-5">
                <p className="font-bold text-foreground mb-2">1️⃣ Premium ni birinchi marta sinab ko&apos;ryapsizmi?</p>
                <p className="text-sm text-muted">
                  ✅ Ha → <strong>1 oylik (59,000)</strong> bilan boshlang. Yoqsa, 12 oylikka o&apos;tasiz.<br />
                  ❌ Yo&apos;q → keyingi savolga o&apos;ting.
                </p>
              </div>
              <div className="bg-section-alt rounded-xl p-5">
                <p className="font-bold text-foreground mb-2">2️⃣ Telegram ni har kuni ishlatadiganlardanmisiz?</p>
                <p className="text-sm text-muted">
                  ✅ Ha → <strong>12 oylik (425,000)</strong> — maksimal tejamkorlik.<br />
                  ❌ Yo&apos;q → keyingi savolga o&apos;ting.
                </p>
              </div>
              <div className="bg-section-alt rounded-xl p-5">
                <p className="font-bold text-foreground mb-2">3️⃣ Yarim yildan ko&apos;p ishlatish niyatingiz bormi?</p>
                <p className="text-sm text-muted">
                  ✅ Ha → <strong>6 oylik (235,000)</strong> — balansli tanlov.<br />
                  ❌ Yo&apos;q → <strong>3 oylik (175,000)</strong> yoki birovga sovg&apos;a.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
              <p className="text-foreground font-bold mb-2">📊 Statistika:</p>
              <p className="text-muted text-sm leading-relaxed">
                Premium Send foydalanuvchilarining ko&apos;pchiligi 12 oylik (40%) va 6 oylik (35%) tariflarini tanlaydi. Sababi oddiy — uzoq muddatli tejamkorlik. 1 oylik birinchi xarid uchun mos, lekin doimiy foydalanuvchilar uzunroq tariflarga o&apos;tadi.
              </p>
            </div>
          </section>

          {/* Section 6 — Telegram official vs PremiumSend */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Telegram rasmiy narxlari bilan farqi qanday?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Telegramning rasmiy ilovasida ham Premium narxlari bor — lekin ular dollarda ko&apos;rsatiladi va xorijiy karta talab qiladi. Uzcard, Humo bu tizimda ishlamaydi. Quyida — taqqoslash:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Parametr</div>
                <div className="text-center">Telegram rasmiy</div>
                <div className="text-center">Premium Send</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Valyuta</div>
                <div className="text-center text-muted">USD ($)</div>
                <div className="text-center text-primary font-bold">UZS (so&apos;m)</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Karta turi</div>
                <div className="text-center text-muted">Visa, MC (xorijiy)</div>
                <div className="text-center text-primary font-bold">Uzcard, Humo</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">3 oylik mavjud?</div>
                <div className="text-center text-red-600">❌ Yo&apos;q</div>
                <div className="text-center text-green-600 font-bold">✅ Bor</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">6 oylik mavjud?</div>
                <div className="text-center text-red-600">❌ Yo&apos;q</div>
                <div className="text-center text-green-600 font-bold">✅ Bor</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Konvertatsiya yo&apos;qotish</div>
                <div className="text-center text-red-600">3-5%</div>
                <div className="text-center text-green-600 font-bold">0%</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center text-sm">
                <div className="font-medium">Faollashish vaqti</div>
                <div className="text-center">Darhol</div>
                <div className="text-center">5 daqiqa</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">Asosiy farq:</strong> Telegram rasmiy ilovasida 1 va 12 oylik bor, lekin 3 va 6 oylik tariflar yo&apos;q. Premium Send to&apos;rt tarifni ham taklif qiladi — siz uchun moslashuvchanlik. Plus mahalliy karta va so&apos;m, konvertatsiya yo&apos;qotishlari yo&apos;q.
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
                  q: "Telegram Premium qancha turadi O'zbekistonda?",
                  a: "Premium Send da 1 oylik — 59,000 so'm, 3 oylik — 175,000 so'm, 6 oylik — 235,000 so'm, 12 oylik — 425,000 so'm. To'lov Uzcard, Humo, Click yoki Payme orqali so'mda.",
                },
                {
                  q: "Telegram Premium qaysi tarifi eng tejamkor?",
                  a: "12 oylik tarif eng tejamkor — oyiga atigi 35,417 so'm. 1 oylikni 12 marta sotib olsangiz 708,000 so'm bo'lardi, 12 oylik paketda esa 425,000 so'm. Tejamkorlik 39% yoki 283,000 so'm.",
                },
                {
                  q: "1 oylik va 12 oylik o'rtasida narx farqi qancha?",
                  a: "1 oylik — 59,000 so'm (oyiga 59,000), 12 oylik — 425,000 so'm (oyiga 35,417). Oylik xarajatda farq 23,583 so'm yoki 39%. Yillik hisobda farq 283,000 so'mga teng.",
                },
                {
                  q: "6 oylik tarif kimga mos?",
                  a: "6 oylik (235,000 so'm, oyiga 39,167) — eng balansli tanlov. 1 oylikdan 33% arzon, lekin 12 oylik kabi katta majburiyat emas. Talaba semestriga, mavsumiy ishlarga, doimiy foydalanuvchilarga mos.",
                },
                {
                  q: "Telegram rasmiy narxidan nimasi farq qiladi?",
                  a: "Telegram rasmiy ilovasida narx dollarda va xorijiy karta talab qiladi — Uzcard, Humo ishlamaydi. Premium Send so'mda to'lov, mahalliy karta. Plus Telegramda 3 va 6 oylik yo'q, Premium Send da to'rt tarif ham bor.",
                },
                {
                  q: "Narxlar o'zgarib turadimi?",
                  a: "Premium Send so'mda fiks narxlarni saqlab kelmoqda — dollar kursiga bog'liq emas. Narx o'zgarsa, sayt va @PremiumSendBot da darhol yangilanadi. Bugungi narxlar 2026-yil aprel holatiga to'g'ri keladi.",
                },
                {
                  q: "Sovg'a qilish narxi ham xuddi shumi?",
                  a: "Ha — sovg'a qilish narxlari xuddi sotib olish bilan teng: 3 oylik 175,000, 6 oylik 235,000, 12 oylik 425,000 so'm. Faqat 1 oylik sovg'a Telegram qoidasi bo'yicha mumkin emas — sovg'a faqat 3, 6, 12 oylik tariflarda.",
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
                Telegram Premium narxlari — bir qarashda
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">59K</p>
                  <p className="text-sm text-muted">1 oylik</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">175K</p>
                  <p className="text-sm text-muted">3 oylik</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">235K</p>
                  <p className="text-sm text-muted">6 oylik</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">425K</p>
                  <p className="text-sm text-muted">12 oylik ⭐</p>
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
                  Tarif tanlashda asosiy qoida: <strong className="text-white">qanchalik uzoq ishlatsangiz, shuncha tejamkor</strong>. Sinab ko&apos;rsangiz — 1 oylik. Doimiy foydalanuvchi bo&apos;lsangiz — 12 oylik. O&apos;rtachada — 6 oylik.{" "}
                  <strong className="text-white">@PremiumSendBot</strong> da Uzcard, Humo, Click yoki Payme orqali so&apos;mda — 5 daqiqada faollashtiring.
                </p>
                <Link
                  href="https://t.me/premiumsendbot"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  Tarifni tanlash
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
