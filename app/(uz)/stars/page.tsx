import type { Metadata } from "next";
import AnimatedWave from "../../components/AnimatedWave";
import Link from "next/link";
import { ogBaseUz } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title: "Telegram Stars sotib olish — narxlar va paketlar | Premium Send",
  description:
    "Telegram Stars sotib olish O'zbekistonda so'mda — 50 dan 5000 gacha paketlar, 300 so'm/star linear narx. UzCard, Humo orqali to'lov, tez yetkazish.",
  keywords: [
    "telegram stars sotib olish",
    "telegram stars narxi",
    "stars paketlari",
    "telegram stars uzbekistan",
    "telegram stars so'mda",
  ],
  alternates: {
    canonical: "https://premiumsend.uz/stars",
    languages: {
      uz: "https://premiumsend.uz/stars",
      ru: "https://premiumsend.uz/ru/stars",
      "x-default": "https://premiumsend.uz/stars",
    },
  },
  openGraph: {
    ...ogBaseUz,
    title: "Telegram Stars sotib olish — narxlar va paketlar | Premium Send",
    description:
      "Telegram Stars sotib olish O'zbekistonda so'mda — 50 dan 5000 gacha paketlar, 300 so'm/star linear narx. UzCard, Humo orqali to'lov, tez yetkazish.",
    url: "https://premiumsend.uz/stars",
  },
};

const PACKAGES = [
  {
    "amount": 50,
    "price": 15000,
    "popular": false
  },
  {
    "amount": 100,
    "price": 30000,
    "popular": false
  },
  {
    "amount": 250,
    "price": 75000,
    "popular": false
  },
  {
    "amount": 500,
    "price": 150000,
    "popular": false
  },
  {
    "amount": 1000,
    "price": 300000,
    "popular": true
  },
  {
    "amount": 2500,
    "price": 750000,
    "popular": false
  },
  {
    "amount": 5000,
    "price": 1500000,
    "popular": false
  }
];

const localPayments = [
  {
    "title": "So'mda to'lov",
    "desc": "UzCard yoki Humo kartangiz bilan to'lang — xorijiy Visa/Mastercard yoki kripto-hamyon shart emas."
  },
  {
    "title": "Valyuta konvertatsiyasiz",
    "desc": "Narx boshidanoq so'mda ko'rsatiladi — kurs farqi yoki yashirin xarajat yo'q."
  },
  {
    "title": "O'zbekistondan to'g'ridan-to'g'ri",
    "desc": "Telegram rasmiy ilovasi va Fragment mahalliy karta qabul qilmaydi — biz orqali esa oddiy va tez."
  }
];

const faqData = [
  {
    "q": "Telegram Stars narxi qancha?",
    "a": "Premium Send'da Telegram Stars 300 so'm/star linear tarifda sotiladi. 50 Stars — 15,000 so'm, 100 Stars — 30,000 so'm, 1000 Stars — 300,000 so'm. Qaysi paketni tanlasangiz ham bir star narxi o'zgarmaydi."
  },
  {
    "q": "Stars qanday sotib olinadi?",
    "a": "Telegram @premiumsendbot ga yozing, kerakli paketni tanlang, UzCard yoki Humo kartangiz bilan so'mda to'lang. Stars bir necha daqiqada akkauntingizga tushadi."
  },
  {
    "q": "Eng kichik paket qancha?",
    "a": "Eng kichik paket — 50 Stars, narxi 15,000 so'm. Kattaroq miqdor kerak bo'lsa, botda o'zingiz xohlagan sonni ham kiritishingiz mumkin."
  },
  {
    "q": "Stars nima uchun ishlatiladi?",
    "a": "Stiker va premium emoji sotib olish, kanal/bloger'larga donate, AI botlarda premium so'rovlar, mini-app to'lovlari va Telegram Premium sovg'a qilish uchun ishlatiladi."
  }
];

export default function StarsHubPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "50 Telegram Stars", url: "https://premiumsend.uz/50-stars" },
      { "@type": "ListItem", position: 2, name: "100 Telegram Stars", url: "https://premiumsend.uz/100-stars" },
      { "@type": "ListItem", position: 3, name: "250 Telegram Stars", url: "https://premiumsend.uz/250-stars" },
      { "@type": "ListItem", position: 4, name: "500 Telegram Stars", url: "https://premiumsend.uz/500-stars" },
      { "@type": "ListItem", position: 5, name: "1000 Telegram Stars", url: "https://premiumsend.uz/1000-stars" },
      { "@type": "ListItem", position: 6, name: "2500 Telegram Stars", url: "https://premiumsend.uz/2500-stars" },
      { "@type": "ListItem", position: 7, name: "5000 Telegram Stars", url: "https://premiumsend.uz/5000-stars" },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Bosh sahifa", item: "https://premiumsend.uz" },
      { "@type": "ListItem", position: 2, name: "Stars", item: "https://premiumsend.uz/stars" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-muted">
        <Link href="/" className="hover:text-primary">Bosh sahifa</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">Stars</span>
      </nav>

      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-80 h-80 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Telegram Stars</h1>
          <p className="text-xl text-white/80 mb-2">O&apos;zbekiston so&apos;mida, UzCard/Humo kartangiz bilan. 300 so&apos;m/star linear narx, tez yetkazish.</p>
          <p className="text-xs text-white/60 mb-8">Narxlar 2026-yil sentyabr holatiga ko&apos;ra to&apos;g&apos;ri</p>
          <Link href="https://telegram.me/premiumsendbot" target="_blank" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
            Botni ochish
          </Link>
        </div>
        <AnimatedWave />
      </section>

      {/* AEO direct-answer box */}
      <section className="py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20">
            <p className="text-sm leading-relaxed text-foreground">
              <strong>Qisqacha javob:</strong> Premium Send&apos;da Telegram Stars <strong>300 so&apos;m/star</strong> linear tarifda sotiladi — 50 Stars (15,000 so&apos;m) dan 5000 Stars (1,500,000 so&apos;m) gacha. @premiumsendbot orqali so&apos;mda to&apos;lab, bir necha daqiqada akkauntingizga tushadi.
            </p>
          </div>
        </div>
      </section>

      {/* Local payment advantage */}
      <section className="py-16 bg-section-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-foreground text-center mb-10">Nega Premium Send orqali sotib olish kerak?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {localPayments.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0088cc" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V7m0 10v1" /></svg>
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing grid */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-4">Barcha Stars paketlari</h2>
          <p className="text-muted text-center mb-12 max-w-2xl mx-auto">300 so&apos;m/star linear narx — qaysi paketni tanlasangiz ham bir star bahosi o&apos;zgarmaydi</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {PACKAGES.map((p) => (
              <Link
                key={p.amount}
                href={`/${p.amount}-stars`}
                className={`bg-white rounded-2xl p-6 border card-hover text-center relative ${p.popular ? "border-2 border-primary shadow-lg" : "border-card-border shadow-sm"}`}
              >
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="shine-badge text-white text-xs font-bold px-3 py-1 rounded-full">Eng ommabop</span>
                  </div>
                )}
                <div className="text-3xl mb-2">⭐</div>
                <div className="text-lg font-bold text-foreground mb-1">{p.amount} Stars</div>
                <div className="text-2xl font-extrabold text-primary mb-1">{p.price.toLocaleString("en-US")}</div>
                <div className="text-xs text-muted">so&apos;m</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-section-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-12">Savol-javoblar</h2>
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

      {/* Cross-sell */}
      <section className="py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-muted">
          <p>Telegram Premium ham kerakmi? <Link href="/6-oylik" className="text-primary font-semibold hover:underline">Premium paketlari va narxlarini</Link> ko&apos;rib chiqing.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-gradient rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10"><div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-2xl" /></div>
            <div className="relative">
              <h2 className="text-3xl font-extrabold text-white mb-4">Telegram Stars — 15,000 so&apos;mdan boshlab</h2>
              <p className="text-white/80 mb-8">Hoziroq buyurtma bering va bir necha daqiqada Stars akkauntingizga tushsin</p>
              <Link href="https://telegram.me/premiumsendbot" target="_blank" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">
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
