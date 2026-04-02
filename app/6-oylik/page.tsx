import type { Metadata } from "next";
import AnimatedWave from "../components/AnimatedWave";
import Link from "next/link";

export const metadata: Metadata = {
  title: "6 oylik Telegram Premium sotib olish — 235,000 so'm",
  description:
    "6 oylik Telegram Premium sotib olish atigi 235,000 so'mga. Eng ommabop paket! Oyiga 39,167 so'm. O'zbekiston so'mida UzCard, Humo orqali to'lov. Tez aktivatsiya.",
  keywords: [
    "6 oylik Telegram Premium sotib olish",
    "Telegram Premium 6 oylik",
    "Telegram Premium 6 oy narxi",
    "Telegram Premium 6 oylik sotib olish",
    "Telegram Premium 235000",
    "Telegram Premium 6 oylik arzon",
    "Telegram Premium 6 oy Uzbekistan",
    "Telegram Premium yarim yillik",
  ],
  alternates: {
    canonical: "https://premiumsend.uz/6-oylik",
  },
  openGraph: {
    title: "6 oylik Telegram Premium sotib olish — 235,000 so'm | Eng ommabop",
    description:
      "Telegram Premium 6 oylik obunasini 235,000 so'mga sotib oling. Oyiga 39,167 so'm — eng yaxshi narx/sifat.",
    url: "https://premiumsend.uz/6-oylik",
  },
};

const features = [
  { icon: "📦", title: "4 GB fayl yuklash", desc: "Oddiy 2 GB o'rniga 4 GB gacha fayl yuboring" },
  { icon: "⚡", title: "2x tezroq yuklab olish", desc: "Media va fayllarni ikki baravar tezroq yuklab oling" },
  { icon: "🔇", title: "Reklamasiz kanal ko'rish", desc: "Kanallardagi barcha reklama xabarlarini yashiring" },
  { icon: "✨", title: "Premium stikerlar va emoji", desc: "Maxsus animatsiyali stikerlar va emojilardan foydalaning" },
  { icon: "🌐", title: "Tezkor tarjima", desc: "Xabarlarni bir bosish bilan istalgan tilga tarjima qiling" },
  { icon: "👤", title: "Kengaytirilgan profil", desc: "Profilingizga formatlangan matn va linklar qo'shing" },
];

const faqData = [
  {
    q: "6 oylik Telegram Premium narxi qancha?",
    a: "6 oylik Telegram Premium narxi Premium Send da 235,000 so'm. Bu oyiga atigi 39,167 so'm — 3 oylik paketga nisbatan 33% tejamkor.",
  },
  {
    q: "Nima uchun 6 oylik paket eng ommabop?",
    a: "6 oylik Telegram Premium eng yaxshi narx/sifat nisbatiga ega. Oylik narx 3 oylikdan 33% arzon, va yarim yil davomida Premium haqida o'ylamasdan foydalanasiz. Narx va sifat jihatidan eng maqbul tanlov.",
  },
  {
    q: "Telegramda 6 oylik Premium sotib olish mumkinmi?",
    a: "Yo'q, Telegramda 6 oylik Premium paket mavjud emas. Telegram faqat 1 oylik va 12 oylik taklif qiladi. 6 oylik paket faqat Premium Send kabi xizmatlar orqali sotib olish mumkin. Premium Send da esa UzCard, Humo kartasi orqali so'mda to'lash mumkin. Click yoki Payme orqali ham botdagi kartaga o'tkazma qilish mumkin.",
  },
];

export default function SixMonthPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "6 oylik Telegram Premium sotib olish",
    description: "Telegram Premium 6 oylik obunasi — eng ommabop paket. O'zbekistonda so'mda sotib oling.",
    offers: {
      "@type": "Offer",
      price: "235000",
      priceCurrency: "UZS",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Bosh sahifa", item: "https://premiumsend.uz" },
      { "@type": "ListItem", position: 2, name: "6 oylik Telegram Premium", item: "https://premiumsend.uz/6-oylik" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-muted">
        <Link href="/" className="hover:text-primary">Bosh sahifa</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">6 oylik Telegram Premium</span>
      </nav>

      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-80 h-80 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 backdrop-blur-sm text-white text-sm font-bold px-4 py-2 rounded-full mb-6">
            Eng ommabop paket
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            6 oylik Telegram
            <br />
            Premium sotib olish
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Atigi <span className="text-white font-bold">235,000 so&apos;m</span> (oyiga ~39,167 so&apos;m)
          </p>
          <div className="inline-block bg-white/15 backdrop-blur-sm rounded-xl px-6 py-3 mb-8">
            <p className="text-white/90 text-sm">
              3 oylikka nisbatan <span className="text-yellow-300 font-bold">33% tejamkor</span>
            </p>
          </div>
          <div>
            <Link href="https://t.me/premiumsendbot" target="_blank" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
              </svg>
              Hozir sotib olish
            </Link>
          </div>
        </div>
        <AnimatedWave />
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-4">6 oylik Telegram Premium bilan nima olasiz?</h2>
          <p className="text-muted text-center mb-12 max-w-2xl mx-auto">Yarim yil davomida Telegram Premium ning barcha imkoniyatlaridan foydalaning</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-card-border shadow-sm card-hover flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why 6 months */}
      <section className="py-20 bg-section-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-12">Nima uchun 6 oylik Telegram Premium <span className="gradient-text">eng yaxshi tanlov</span>?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gold-light flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V7m0 10v1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-bold mb-2">Eng yaxshi narx/sifat</h3>
              <p className="text-sm text-muted">Oyiga atigi 39,167 so&apos;m — 3 oylikka nisbatan 33% arzon</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gold-light flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-bold mb-2">Yarim yil xotirjamlik</h3>
              <p className="text-sm text-muted">6 oy davomida Telegram Premium haqida o&apos;ylamaysiz</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gold-light flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <h3 className="font-bold mb-2">Eng ommabop tanlov</h3>
              <p className="text-sm text-muted">Narx va sifat jihatidan eng maqbul — 6 oylik Telegram Premium</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-card-border shadow-sm space-y-4 text-muted leading-relaxed">
            <h2 className="text-2xl font-extrabold text-foreground">6 oylik Telegram Premium — batafsil ma&apos;lumot</h2>
            <p>
              <strong className="text-foreground">6 oylik Telegram Premium sotib olish</strong> — narx va sifat jihatidan eng maqbul tanlov. Oyiga atigi 39,167 so&apos;mga Telegram Premium ning barcha imkoniyatlaridan yarim yil davomida foydalaning.
            </p>
            <p>
              Telegram messenjerida faqat 1 oylik va 12 oylik Premium paketlar mavjud — 6 oylik paket yo&apos;q. Premium Send orqali siz 6 oylik Telegram Premiumni <strong className="text-foreground">235,000 so&apos;m</strong>ga — UzCard, Humo kartangiz orqali so&apos;mda to&apos;lab sotib olishingiz mumkin. Click yoki Payme orqali ham botdagi kartaga o&apos;tkazma qilish mumkin.
            </p>
            <p>
              Boshqa paketlar: <Link href="/3-oylik" className="text-primary font-semibold hover:underline">3 oylik Telegram Premium</Link> (175,000 so&apos;m) sinab ko&apos;rish uchun, yoki <Link href="/12-oylik" className="text-primary font-semibold hover:underline">12 oylik Telegram Premium</Link> (425,000 so&apos;m) eng arzon oylik narx uchun.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-section-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-12">Telegram Premium narxlari <span className="gradient-text">taqqoslash</span></h2>
          <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden">
            <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
              <div>Paket</div><div className="text-center">Narx</div><div className="text-center">Oylik</div><div className="text-center">Tejamkorlik</div>
            </div>
            <Link href="/3-oylik" className="grid grid-cols-4 p-4 border-b border-card-border items-center hover:bg-primary-light/10 transition-colors">
              <div className="font-bold">3 oylik</div><div className="text-center font-semibold">175,000</div><div className="text-center text-sm text-muted">58,333</div><div className="text-center text-sm">—</div>
            </Link>
            <div className="grid grid-cols-4 p-4 border-b border-card-border bg-primary-light/30 items-center">
              <div className="font-bold text-primary">6 oylik</div><div className="text-center font-semibold text-primary">235,000</div><div className="text-center text-sm text-primary">39,167</div><div className="text-center text-sm text-green-600 font-medium">-33%</div>
            </div>
            <Link href="/12-oylik" className="grid grid-cols-4 p-4 items-center hover:bg-primary-light/10 transition-colors">
              <div className="font-bold">12 oylik</div><div className="text-center font-semibold">425,000</div><div className="text-center text-sm text-muted">35,417</div><div className="text-center text-sm text-green-600 font-medium">-39%</div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-12">6 oylik Telegram Premium — <span className="gradient-text">savollar</span></h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-gradient rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10"><div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-2xl" /></div>
            <div className="relative">
              <h2 className="text-3xl font-extrabold text-white mb-4">6 oylik Telegram Premium — 235,000 so&apos;m</h2>
              <p className="text-white/80 mb-8">Eng ommabop paket — hoziroq Telegram Premium sotib oling!</p>
              <Link href="https://t.me/premiumsendbot" target="_blank" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                Telegram orqali sotib olish
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
