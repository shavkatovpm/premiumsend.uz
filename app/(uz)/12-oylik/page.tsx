import type { Metadata } from "next";
import AnimatedWave from "../../components/AnimatedWave";
import Link from "next/link";

export const metadata: Metadata = {
  title: "12 oylik Telegram Premium sotib olish — 425,000 so'm",
  description:
    "12 oylik (1 yillik) Telegram Premium sotib olish atigi 425,000 so'mga. Oyiga 35,417 so'm — eng arzon oylik narx! O'zbekiston so'mida UzCard, Humo orqali to'lov.",
  keywords: [
    "12 oylik Telegram Premium sotib olish",
    "Telegram Premium 12 oylik",
    "Telegram Premium 1 yillik",
    "Telegram Premium yillik narxi",
    "Telegram Premium 12 oylik sotib olish",
    "Telegram Premium 425000",
    "Telegram Premium yillik sotib olish",
    "Telegram Premium 12 oy Uzbekistan",
  ],
  alternates: {
    canonical: "https://premiumsend.uz/12-oylik",
  },
  openGraph: {
    title: "12 oylik Telegram Premium sotib olish — 425,000 so'm | Eng arzon",
    description:
      "Telegram Premium 1 yillik obunasini 425,000 so'mga sotib oling. Oyiga 35,417 so'm — eng arzon oylik narx.",
    url: "https://premiumsend.uz/12-oylik",
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
    q: "12 oylik Telegram Premium narxi qancha?",
    a: "12 oylik (1 yillik) Telegram Premium narxi Premium Send da 425,000 so'm. Bu oyiga atigi 35,417 so'm — barcha paketlar ichida eng arzon oylik narx.",
  },
  {
    q: "12 oylik Telegram Premium sotib olish qanchalik tejamkor?",
    a: "12 oylik paket 3 oylikka nisbatan 39% tejamkor. Agar 3 oylikni 4 marta sotib olsangiz, 700,000 so'm bo'ladi. 12 oylik faqat 425,000 so'm — 275,000 so'm tejaysiz.",
  },
  {
    q: "12 oylik Premium qanday faollashtiriladi?",
    a: "To'lov tasdiqlangandan so'ng, biz sizga Telegram Premium gift yuboramiz va u bir necha daqiqada avtomatik faollashadi. Butun yil davomida Premium ishlaydi.",
  },
];

export default function TwelveMonthPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "12 oylik Telegram Premium sotib olish",
    description: "Telegram Premium 12 oylik (1 yillik) obunasi — eng arzon oylik narx. O'zbekistonda so'mda sotib oling.",
    offers: {
      "@type": "Offer",
      price: "425000",
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
      { "@type": "ListItem", position: 2, name: "12 oylik Telegram Premium", item: "https://premiumsend.uz/12-oylik" },
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
        <span className="text-foreground font-medium">12 oylik Telegram Premium</span>
      </nav>

      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-80 h-80 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative text-center">
          <div className="inline-flex items-center gap-2 bg-green-400/20 backdrop-blur-sm text-white text-sm font-bold px-4 py-2 rounded-full mb-6">
            Eng arzon oylik narx
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            12 oylik Telegram
            <br />
            Premium sotib olish
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Atigi <span className="text-white font-bold">425,000 so&apos;m</span> (oyiga ~35,417 so&apos;m)
          </p>
          <div className="inline-block bg-white/15 backdrop-blur-sm rounded-xl px-6 py-3 mb-8">
            <p className="text-white/90 text-sm">
              3 oylikka nisbatan <span className="text-green-300 font-bold">39% tejamkor</span>
            </p>
          </div>
          <div>
            <Link href="https://t.me/premiumsendbot" target="_blank" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
              Hozir sotib olish
            </Link>
          </div>
        </div>
        <AnimatedWave />
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-4">1 yillik Telegram Premium bilan nima olasiz?</h2>
          <p className="text-muted text-center mb-12 max-w-2xl mx-auto">Butun bir yil davomida Telegram Premium ning barcha imkoniyatlaridan foydalaning</p>
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

      {/* Why 12 months */}
      <section className="py-20 bg-section-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-12">Nima uchun 12 oylik Telegram Premium <span className="gradient-text">sotib olish</span> kerak?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V7m0 10v1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-bold mb-2">Eng arzon oylik narx</h3>
              <p className="text-sm text-muted">Oyiga atigi 35,417 so&apos;m — barcha Telegram Premium paketlar ichida eng arzon</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-bold mb-2">1 yil xotirjamlik</h3>
              <p className="text-sm text-muted">Butun yil davomida Telegram Premium haqida o&apos;ylamaysiz</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-bold mb-2">39% tejamkorlik</h3>
              <p className="text-sm text-muted">3 oylik paketga nisbatan 275,000 so&apos;m tejab qolasiz</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-card-border shadow-sm space-y-4 text-muted leading-relaxed">
            <h2 className="text-2xl font-extrabold text-foreground">12 oylik Telegram Premium — batafsil ma&apos;lumot</h2>
            <p>
              <strong className="text-foreground">12 oylik Telegram Premium sotib olish</strong> — eng tejamkor variant. Bir yilga Premium obuna atigi <strong className="text-foreground">425,000 so&apos;m</strong>, bu oyiga 35,417 so&apos;mni tashkil etadi. Agar 3 oylik paketni 4 marta sotib olsangiz 700,000 so&apos;m ketadi — 12 oylik bilan 275,000 so&apos;m tejaysiz.
            </p>
            <p>
              Premium Send orqali 12 oylik Telegram Premium sotib olish oson — UzCard, Humo kartasi bilan O&apos;zbekiston so&apos;mida to&apos;lab, bir necha daqiqada aktivlashtiring. Click yoki Payme orqali ham botdagi kartaga o&apos;tkazma qilish mumkin. Butun yil davomida barcha Premium imkoniyatlardan foydalaning.
            </p>
            <p>
              Qisqaroq muddat kerakmi? <Link href="/3-oylik" className="text-primary font-semibold hover:underline">3 oylik Telegram Premium</Link> (175,000 so&apos;m) sinab ko&apos;rish uchun yoki <Link href="/6-oylik" className="text-primary font-semibold hover:underline">6 oylik Telegram Premium</Link> (235,000 so&apos;m) eng yaxshi narx/sifat uchun.
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
            <Link href="/1-oylik" className="grid grid-cols-4 p-4 border-b border-card-border items-center hover:bg-primary-light/10 transition-colors">
              <div className="font-bold">1 oylik</div><div className="text-center font-semibold">59,000</div><div className="text-center text-sm text-muted">59,000</div><div className="text-center text-sm">&mdash;</div>
            </Link>
            <Link href="/3-oylik" className="grid grid-cols-4 p-4 border-b border-card-border items-center hover:bg-primary-light/10 transition-colors">
              <div className="font-bold">3 oylik</div><div className="text-center font-semibold">175,000</div><div className="text-center text-sm text-muted">58,333</div><div className="text-center text-sm text-green-600 font-medium">-1%</div>
            </Link>
            <Link href="/6-oylik" className="grid grid-cols-4 p-4 border-b border-card-border items-center hover:bg-primary-light/10 transition-colors">
              <div className="font-bold">6 oylik</div><div className="text-center font-semibold">235,000</div><div className="text-center text-sm text-muted">39,167</div><div className="text-center text-sm text-green-600 font-medium">-33%</div>
            </Link>
            <div className="grid grid-cols-4 p-4 bg-green-50 items-center">
              <div className="font-bold text-green-700">12 oylik</div><div className="text-center font-semibold text-green-700">425,000</div><div className="text-center text-sm text-green-700">35,417</div><div className="text-center text-sm text-green-600 font-bold">-39%</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-12">12 oylik Telegram Premium — <span className="gradient-text">savollar</span></h2>
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
              <h2 className="text-3xl font-extrabold text-white mb-4">12 oylik Telegram Premium — 425,000 so&apos;m</h2>
              <p className="text-white/80 mb-8">Eng arzon oylik narx — butun yilga Telegram Premium!</p>
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
