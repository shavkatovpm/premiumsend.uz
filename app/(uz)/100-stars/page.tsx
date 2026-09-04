import type { Metadata } from "next";
import AnimatedWave from "../../components/AnimatedWave";
import Link from "next/link";
import { ogBaseUz } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title: "100 Telegram Stars sotib olish — 30,000 so'm",
  description:
    "100 Telegram Stars — 30,000 so'm (300 so'm/star). O'rtacha donate va bot funksiyalari uchun. @premiumsendbot orqali so'mda to'lab, bir necha daqiqada oling.",
  keywords: [
    "100 stars sotib olish",
    "100 stars narxi",
    "telegram stars 100",
    "100 stars qancha turadi",
    "100 stars uzbekistan",
    "100 stars so'mda",
    "telegram 100 stars narxi",
  ],
  alternates: {
    canonical: "https://premiumsend.uz/100-stars",
    languages: {
      uz: "https://premiumsend.uz/100-stars",
      ru: "https://premiumsend.uz/ru/100-stars",
      "x-default": "https://premiumsend.uz/100-stars",
    },
  },
  openGraph: {
    ...ogBaseUz,
    title: "100 Telegram Stars sotib olish — 30,000 so'm",
    description:
      "100 Telegram Stars — 30,000 so'm (300 so'm/star). O'rtacha donate va bot funksiyalari uchun. @premiumsendbot orqali so'mda to'lab, bir necha daqiqada oling.",
    url: "https://premiumsend.uz/100-stars",
  },
};

const AMOUNT = 100;
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

const useCases = [
  {
    "icon": "📣",
    "title": "Kanal/bloger donate",
    "desc": "Yoqqan kontent yaratuvchiga sezilarli qo'llab-quvvatlov yuborish"
  },
  {
    "icon": "🎮",
    "title": "Mini-app to'lovlari",
    "desc": "Telegram ichidagi o'yin va marketplace'larda ichki xaridlar"
  },
  {
    "icon": "🎨",
    "title": "Bir nechta stiker paketi",
    "desc": "Bir nechta premium stiker yoki emoji to'plamini birga olish"
  },
  {
    "icon": "🤖",
    "title": "AI bot obunasi",
    "desc": "Premium AI botlarda ko'proq so'rov va tezroq javob uchun"
  }
];

const whyItems = [
  {
    "title": "Universal miqdor",
    "desc": "Ko'pchilik bot va kanal funksiyalari uchun yetarli darajada"
  },
  {
    "title": "Bir nechta maqsad",
    "desc": "Donate, stiker va mini-app to'lovlarini bitta paketda birlashtirish mumkin"
  },
  {
    "title": "Bulk chegirmasiz shaffof narx",
    "desc": "300 so'm/star — 50 Stars paketi bilan bir xil stavka"
  }
];

const faqData = [
  {
    "q": "100 Stars narxi qancha?",
    "a": "100 Telegram Stars narxi Premium Send da 30,000 so'm (300 so'm/star, linear tarif). To'lov O'zbekiston so'mida — UzCard, Humo kartasi orqali amalga oshiriladi."
  },
  {
    "q": "100 Stars nima uchun kerak bo'ladi?",
    "a": "O'rtacha donate va bot funksiyalari uchun. Yoqqan kontent yaratuvchiga sezilarli qo'llab-quvvatlov yuborish Telegram ichidagi o'yin va marketplace'larda ichki xaridlar"
  },
  {
    "q": "100 Stars qanday sotib olish mumkin?",
    "a": "Telegram @premiumsendbot ga yozing, 100 Stars paketini tanlang, so'mda to'lov qiling va bir necha daqiqada Stars akkauntingizga tushadi. Hech qanday parol yoki akkauntga kirish talab qilinmaydi."
  },
  {
    "q": "Stars necha daqiqada yetkaziladi?",
    "a": "To'lov tasdiqlangandan so'ng Stars odatda bir necha daqiqada akkauntingizga o'tkaziladi. Telegram → Sozlamalar → Stars bo'limida ko'rishingiz mumkin."
  }
];

export default function Stars100Page() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "100 Telegram Stars sotib olish — 30,000 so'm",
    description: "Telegram Stars — 100 dona, O'zbekistonda so'mda sotib oling",
    image: "https://premiumsend.uz/og-image.png",
    sku: "STARS-" + AMOUNT,
    offers: {
      "@type": "Offer",
      price: "30000",
      priceCurrency: "UZS",
      priceValidUntil: "2026-12-03",
      availability: "https://schema.org/InStock",
      url: "https://premiumsend.uz/100-stars",
      seller: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Bosh sahifa", item: "https://premiumsend.uz" },
      { "@type": "ListItem", position: 2, name: "Stars", item: "https://premiumsend.uz/stars" },
      { "@type": "ListItem", position: 3, name: "100 Telegram Stars", item: "https://premiumsend.uz/100-stars" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
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
        <Link href="/stars" className="hover:text-primary">Stars</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">100 Telegram Stars</span>
      </nav>

      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-80 h-80 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white/90 text-sm px-4 py-2 rounded-full mb-6">100 Stars paketi</div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">100 Telegram Stars<br />sotib olish</h1>
          <p className="text-xl text-white/80 mb-2">Atigi <span className="text-white font-bold">30,000 so&apos;m</span></p>
          <p className="text-xs text-white/60 mb-8">Narxlar 2026-yil sentyabr holatiga ko&apos;ra to&apos;g&apos;ri</p>
          <Link href="https://telegram.me/premiumsendbot" target="_blank" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
            Hozir sotib olish
          </Link>
        </div>
        <AnimatedWave />
      </section>

      {/* AEO direct-answer box */}
      <section className="py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20">
            <p className="text-sm leading-relaxed text-foreground">
              <strong>Qisqacha javob:</strong> 100 Telegram Stars narxi Premium Send&apos;da <strong>30,000 so&apos;m</strong> (300 so&apos;m/star). O&apos;rtacha donate va bot funksiyalari uchun. @premiumsendbot orqali so&apos;mda to&apos;lab, bir necha daqiqada akkauntingizga Stars tushadi.
            </p>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-4">100 Stars bilan nima qilsa bo&apos;ladi?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((feature, index) => (
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

      {/* Why this amount */}
      <section className="py-20 bg-section-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-12">Nima uchun aynan 100 Stars?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyItems.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0088cc" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-card-border shadow-sm space-y-4 text-muted leading-relaxed">
            <h2 className="text-2xl font-extrabold text-foreground">100 Telegram Stars — batafsil ma&apos;lumot</h2>
            <p><strong className="text-foreground">100 Telegram Stars sotib olish</strong> — o&apos;rtacha donate va bot funksiyalari uchun. Premium Send orqali Stars&apos;ni O&apos;zbekiston so&apos;mida, UzCard yoki Humo kartangiz bilan sotib olishingiz mumkin.</p>
            <p>100 Stars narxi 30,000 so&apos;m (300 so&apos;m/star). Barcha Stars paketlari Premium Send&apos;da bir xil 300 so&apos;m/star linear tarifda hisoblanadi — qaysi paketni tanlasangiz ham bir star bahosi o&apos;zgarmaydi. To&apos;lovdan so&apos;ng Stars bir necha daqiqada akkauntingizga o&apos;tkaziladi.</p>
            <p>100 Stars tanlashning asosiy sababi: ko&apos;pchilik bot va kanal funksiyalari uchun yetarli darajada.</p>
            <p>Boshqa miqdorlar kerakmi? <Link href="/50-stars" className="text-primary font-semibold hover:underline">50 Stars</Link> (15,000 so&apos;m), <Link href="/250-stars" className="text-primary font-semibold hover:underline">250 Stars</Link> (75,000 so&apos;m), <Link href="/500-stars" className="text-primary font-semibold hover:underline">500 Stars</Link> (150,000 so&apos;m) paketlarini ham ko&apos;rib chiqing — narx har doim 300 so&apos;m/star stavkasida hisoblanadi.</p>
            <p className="text-sm">Telegram Premium ham kerakmi? <Link href="/6-oylik" className="text-primary font-semibold hover:underline">Premium paketlari va narxlarini</Link> ko&apos;rib chiqing.</p>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-section-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-12">Stars paketlari narxlari</h2>
          <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden">
            <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm"><div>Paket</div><div className="text-center">Narx (so&apos;m)</div><div className="text-center">so&apos;m/star</div></div>
            {PACKAGES.map((p) => {
              const isCurrent = p.amount === AMOUNT;
              const rowClass = isCurrent
                ? "grid grid-cols-3 p-4 border-b border-card-border bg-primary-light/30 items-center last:border-b-0"
                : "grid grid-cols-3 p-4 border-b border-card-border items-center hover:bg-primary-light/10 transition-colors last:border-b-0";
              const inner = (
                <>
                  <div className={`font-bold ${isCurrent ? "text-primary" : ""}`}>{p.amount} Stars{p.popular ? " ⭐" : ""}</div>
                  <div className="text-center font-semibold">{p.price.toLocaleString("en-US")}</div>
                  <div className="text-center text-sm text-muted">300</div>
                </>
              );
              return isCurrent ? (
                <div key={p.amount} className={rowClass}>{inner}</div>
              ) : (
                <Link key={p.amount} href={`/${p.amount}-stars`} className={rowClass}>{inner}</Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-12">100 Stars — savollar</h2>
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
              <h2 className="text-3xl font-extrabold text-white mb-4">100 Telegram Stars — 30,000 so&apos;m</h2>
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
