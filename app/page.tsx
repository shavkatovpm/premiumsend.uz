import type { Metadata } from "next";
import PricingCard from "./components/PricingCard";
import AnimatedWave from "./components/AnimatedWave";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Telegram Premium sotib olish — so'mda to'lab oling | Premium Send",
  description:
    "Telegram Premium sotib olish O'zbekistonda so'mda. 3 oylik 175,000 so'm, 6 oylik 235,000 so'm, 12 oylik 425,000 so'm. UzCard, Humo orqali to'lov. Tez aktivatsiya.",
  alternates: {
    canonical: "https://premiumsend.uz",
  },
  openGraph: {
    title: "Telegram Premium sotib olish — so'mda to'lab oling",
    description:
      "Telegram Premium obunasini O'zbekiston so'mida sotib oling. 175,000 so'mdan boshlab. UzCard, Humo.",
    url: "https://premiumsend.uz",
  },
};

const faqData = [
  {
    q: "Telegram Premium nima?",
    a: "Telegram Premium — Telegram messenjerining pullik obunasi bo'lib, u foydalanuvchilarga kengaytirilgan imkoniyatlar beradi: 4 GB fayl yuklash, reklamasiz kanal ko'rish, maxsus stikerlar, emoji va boshqa ko'plab funksiyalar.",
  },
  {
    q: "Telegram Premium narxi qancha?",
    a: "Premium Send da Telegram Premium narxlari: 3 oylik — 175,000 so'm, 6 oylik — 235,000 so'm, 12 oylik — 425,000 so'm. Barcha narxlar O'zbekiston so'mida.",
  },
  {
    q: "Nima uchun Premium Send dan sotib olish kerak?",
    a: "Telegram messenjerida faqat 1 oylik va 12 oylik Premium paketlar mavjud — 3 oylik va 6 oylik paketlar yo'q. Bundan tashqari, to'lov faqat xorijiy karta orqali amalga oshiriladi (Uzcard, Humo ishlamaydi). Premium Send orqali esa O'zbekiston so'mida, UzCard, Humo kartangiz orqali to'lab olishingiz mumkin. Click yoki Payme orqali ham botdagi kartaga o'tkazma qilish mumkin.",
  },
  {
    q: "Telegram Premium qanday sotib olish mumkin?",
    a: "Premium Send orqali Telegram Premium sotib olish juda oson: 1) O'zingizga kerakli muddatni tanlang (3, 6 yoki 12 oy). 2) Telegram bot orqali buyurtma bering. 3) UzCard, Humo yoki boshqa karta orqali so'mda to'lov qiling. 4) Bir necha daqiqada Premium faollashadi.",
  },
  {
    q: "To'lov qanday amalga oshiriladi?",
    a: "To'lov O'zbekiston so'mida amalga oshiriladi. Siz UzCard yoki Humo kartangiz orqali to'lov qilishingiz mumkin. Click yoki Payme orqali ham botdagi kartaga o'tkazma qilish mumkin.",
  },
  {
    q: "Premium qancha vaqtda aktivlashadi?",
    a: "To'lov tasdiqlangandan so'ng, Telegram Premium odatda bir necha daqiqa ichida faollashtiriladi.",
  },
  {
    q: "Bu xavfsizmi?",
    a: "Ha, mutlaqo xavfsiz. Biz rasmiy Telegram Premium gift yordamida obunani faollashtramiz. Sizning akkauntingizga kirish yoki parol so'ralmaydi.",
  },
];

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Telegram Premium sotib olish",
    provider: {
      "@type": "Organization",
      name: "Premium Send",
      url: "https://premiumsend.uz",
    },
    description:
      "O'zbekistonda Telegram Premium obunasini so'mda sotib olish xizmati. 3, 6 va 12 oylik paketlar.",
    areaServed: {
      "@type": "Country",
      name: "Uzbekistan",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Telegram Premium paketlar",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Telegram Premium 3 oylik",
          price: "175000",
          priceCurrency: "UZS",
          url: "https://premiumsend.uz/3-oylik",
        },
        {
          "@type": "Offer",
          name: "Telegram Premium 6 oylik",
          price: "235000",
          priceCurrency: "UZS",
          url: "https://premiumsend.uz/6-oylik",
        },
        {
          "@type": "Offer",
          name: "Telegram Premium 12 oylik",
          price: "425000",
          priceCurrency: "UZS",
          url: "https://premiumsend.uz/12-oylik",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white/90 text-sm px-4 py-2 rounded-full mb-6">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              O&apos;zbekistonda #1 Telegram Premium xizmati
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Telegram Premium
              <br />
              sotib olish
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              <span className="hidden md:inline">Premium Send orqali Telegram Premium obunasini O&apos;zbekiston so&apos;mida, UzCard yoki Humo kartadan to&apos;lab,
              oson va tez sotib oling. 3, 6 yoki 12 oylik paketlar mavjud.</span>
              <span className="md:hidden">3, 6 yoki 12 oylik paketlar mavjud.</span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://t.me/premiumsendbot"
                target="_blank"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                Hozir sotib olish
              </Link>
              <Link
                href="#narxlar"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all text-lg backdrop-blur-sm"
              >
                Narxlarni ko&apos;rish
              </Link>
            </div>
          </div>
        </div>
        <AnimatedWave />
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Nima uchun <span className="gradient-text">Premium Send</span> orqali Telegram Premium sotib olish kerak?
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              O&apos;zbekistonda Telegram Premium olishning eng qulay va ishonchli yo&apos;li
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-card-border shadow-sm card-hover">
              <div className="w-14 h-14 rounded-2xl bg-primary-light flex items-center justify-center mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0088cc" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">So&apos;mda to&apos;lov</h3>
              <p className="text-muted leading-relaxed">
                Dollar yoki kripto kerak emas. O&apos;zbekiston so&apos;mida, UzCard yoki Humo kartangizdan to&apos;lab oling.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-card-border shadow-sm card-hover">
              <div className="w-14 h-14 rounded-2xl bg-gold-light flex items-center justify-center mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Tez va oson</h3>
              <p className="text-muted leading-relaxed">
                Telegram Premium sotib olish va aktivatsiya — bir necha daqiqa. Hech qanday murakkab jarayonsiz.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-card-border shadow-sm card-hover">
              <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Ishonchli xizmat</h3>
              <p className="text-muted leading-relaxed">
                Rasmiy Telegram Premium gift orqali faollashtirish — xavfsiz va ishonchli.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Telegram Premium Features */}
      <section className="py-20 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Telegram Premium <span className="gradient-text">imkoniyatlari</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Telegram Premium obunasi bilan siz quyidagi kengaytirilgan imkoniyatlarga ega bo&apos;lasiz
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "4GB", title: "4 GB fayl yuklash", desc: "Oddiy foydalanuvchilar uchun 2 GB" },
              { icon: "2x", title: "2x tezroq yuklab olish", desc: "Fayllarni ikki baravar tezroq yuklab oling" },
              { icon: "1000+", title: "Cheksiz kanal va guruh", desc: "1000 tagacha kanalga a'zo bo'ling" },
              { icon: "✦", title: "Premium stikerlar", desc: "Maxsus animatsiyali stikerlar to'plami" },
              { icon: "✗", title: "Reklamasiz", desc: "Kanallardagi reklama xabarlarini o'chiring" },
              { icon: "✿", title: "Maxsus emoji", desc: "Premium emojilardan foydalaning" },
              { icon: "✎", title: "Bio'da linklar", desc: "Profilingizga formatlangan matn qo'shing" },
              { icon: "⟐", title: "Tezkor tarjima", desc: "Xabarlarni real vaqtda tarjima qiling" },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-card-border shadow-sm card-hover"
              >
                <div className="text-2xl font-bold text-primary mb-3">{feature.icon}</div>
                <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                <p className="text-sm text-muted">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="narxlar" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Telegram Premium <span className="gradient-text">narxlari</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              O&apos;zingizga qulay muddatni tanlang — barcha narxlar O&apos;zbekiston so&apos;mida
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
            <PricingCard
              months={3}
              price="175,000"
              pricePerMonth="58,333"
              features={[
                "3 oy Telegram Premium",
                "Barcha Premium imkoniyatlar",
                "So'mda to'lov",
                "Tez aktivatsiya",
              ]}
              href="/3-oylik"
            />
            <PricingCard
              months={6}
              price="235,000"
              pricePerMonth="39,167"
              popular={true}
              features={[
                "6 oy Telegram Premium",
                "Barcha Premium imkoniyatlar",
                "So'mda to'lov",
                "Tez aktivatsiya",
                "Eng yaxshi narx/sifat",
              ]}
              href="/6-oylik"
            />
            <PricingCard
              months={12}
              price="425,000"
              pricePerMonth="35,417"
              features={[
                "12 oy Telegram Premium",
                "Barcha Premium imkoniyatlar",
                "So'mda to'lov",
                "Tez aktivatsiya",
                "Eng arzon oylik narx",
              ]}
              href="/12-oylik"
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Telegram Premium qanday <span className="gradient-text">sotib olish</span> mumkin?
            </h2>
            <p className="text-muted text-lg">3 oddiy qadamda Premium oling</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Muddatni tanlang",
                desc: "3, 6 yoki 12 oylik Telegram Premium paketlardan birini tanlang",
              },
              {
                step: "2",
                title: "So'mda to'lov qiling",
                desc: "UzCard yoki Humo kartasi orqali O'zbekiston so'mida to'lang",
              },
              {
                step: "3",
                title: "Premium faollashadi",
                desc: "To'lovdan so'ng Telegram Premium bir necha daqiqada aktivlashadi",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full hero-gradient text-white text-2xl font-bold flex items-center justify-center mx-auto mb-5 shadow-lg shadow-primary/25">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-extrabold text-foreground mb-6 text-center">
              O&apos;zbekistonda Telegram Premium <span className="gradient-text">sotib olish</span>
            </h2>
            <div className="bg-white rounded-2xl p-8 border border-card-border shadow-sm space-y-4 text-muted leading-relaxed">
              <p>
                <strong className="text-foreground">Telegram Premium</strong> — bu Telegram messenjerining pullik obunasi bo&apos;lib, foydalanuvchilarga 4 GB gacha fayl yuklash, 2x tezroq yuklab olish, reklamasiz kanal ko&apos;rish, maxsus Premium stikerlar va emoji, tezkor tarjima va boshqa ko&apos;plab kengaytirilgan imkoniyatlarni beradi.
              </p>
              <p>
                O&apos;zbekistonda Telegram Premium sotib olish uchun odatda xorijiy bank kartasi kerak bo&apos;ladi — Uzcard va Humo kartalar ishlamaydi. Bundan tashqari, Telegram messenjerida faqat 1 oylik va 12 oylik Premium paketlar mavjud — 3 oylik va 6 oylik paketlar yo&apos;q.
              </p>
              <p>
                <strong className="text-foreground">Premium Send</strong> bu muammolarni hal qiladi. Bizning xizmat orqali siz Telegram Premium obunasini O&apos;zbekiston so&apos;mida — UzCard yoki Humo kartangiz bilan sotib olishingiz mumkin. Click yoki Payme orqali ham botdagi kartaga o&apos;tkazma qilish mumkin. 3 oylik paket atigi <strong className="text-foreground">175,000 so&apos;m</strong>, 6 oylik — <strong className="text-foreground">235,000 so&apos;m</strong>, 12 oylik — <strong className="text-foreground">425,000 so&apos;m</strong>.
              </p>
              <p>
                Telegram Premium sotib olish jarayoni juda oddiy: kerakli muddatni tanlaysiz, Telegram bot orqali buyurtma berasiz, so&apos;mda to&apos;lov qilasiz va bir necha daqiqada Premium faollashadi. Xavfsiz va ishonchli — biz rasmiy Telegram Premium gift orqali obunani faollashtiramiz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-section-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Telegram Premium sotib olish — <span className="gradient-text">ko&apos;p beriladigan savollar</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-card-border shadow-sm"
              >
                <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-12">
            Telegram Premium <span className="gradient-text">paketlarni tanlang</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/3-oylik" className="bg-white rounded-2xl p-8 border border-card-border shadow-sm card-hover text-center group">
              <div className="text-4xl font-extrabold text-primary mb-2">3 oy</div>
              <div className="text-2xl font-bold text-foreground mb-1">175,000 so&apos;m</div>
              <p className="text-sm text-muted mb-4">Telegram Premium 3 oylik sotib olish</p>
              <span className="text-primary font-semibold text-sm group-hover:underline">Batafsil →</span>
            </Link>
            <Link href="/6-oylik" className="bg-white rounded-2xl p-8 border-2 border-primary shadow-lg card-hover text-center group relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 shine-badge text-white text-xs font-bold px-3 py-1 rounded-full">Ommabop</div>
              <div className="text-4xl font-extrabold text-primary mb-2">6 oy</div>
              <div className="text-2xl font-bold text-foreground mb-1">235,000 so&apos;m</div>
              <p className="text-sm text-muted mb-4">Telegram Premium 6 oylik sotib olish</p>
              <span className="text-primary font-semibold text-sm group-hover:underline">Batafsil →</span>
            </Link>
            <Link href="/12-oylik" className="bg-white rounded-2xl p-8 border border-card-border shadow-sm card-hover text-center group">
              <div className="text-4xl font-extrabold text-primary mb-2">12 oy</div>
              <div className="text-2xl font-bold text-foreground mb-1">425,000 so&apos;m</div>
              <p className="text-sm text-muted mb-4">Telegram Premium 12 oylik sotib olish</p>
              <span className="text-primary font-semibold text-sm group-hover:underline">Batafsil →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-gradient rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-2xl" />
              <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full blur-2xl" />
            </div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Hoziroq Telegram Premium sotib oling!
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                Atigi 175,000 so&apos;mdan boshlab. So&apos;mda to&apos;lab, bir necha daqiqada aktivlashtiring.
              </p>
              <Link
                href="https://t.me/premiumsendbot"
                target="_blank"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                Telegram orqali sotib olish
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
