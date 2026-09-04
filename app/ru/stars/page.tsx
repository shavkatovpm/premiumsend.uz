import type { Metadata } from "next";
import AnimatedWave from "../../components/AnimatedWave";
import Link from "next/link";
import { ogBaseRu } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title: "Купить Telegram Stars — цены и пакеты | Premium Send",
  description:
    "Купить Telegram Stars в Узбекистане в сумах — пакеты от 50 до 5000, линейная цена 300 сум/звезда. Оплата UzCard, Humo, быстрая доставка.",
  keywords: [
    "купить telegram stars",
    "telegram stars цена",
    "пакеты stars",
    "telegram stars узбекистан",
    "telegram stars в сумах",
  ],
  alternates: {
    canonical: "https://premiumsend.uz/ru/stars",
    languages: {
      uz: "https://premiumsend.uz/stars",
      ru: "https://premiumsend.uz/ru/stars",
      "x-default": "https://premiumsend.uz/stars",
    },
  },
  openGraph: {
    ...ogBaseRu,
    title: "Купить Telegram Stars — цены и пакеты | Premium Send",
    description:
      "Купить Telegram Stars в Узбекистане в сумах — пакеты от 50 до 5000, линейная цена 300 сум/звезда. Оплата UzCard, Humo, быстрая доставка.",
    url: "https://premiumsend.uz/ru/stars",
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
    "title": "Оплата в сумах",
    "desc": "Оплатите картой UzCard или Humo — не нужна иностранная Visa/Mastercard или крипто-кошелёк."
  },
  {
    "title": "Без конвертации валюты",
    "desc": "Цена сразу указана в сумах — нет курсовой разницы или скрытых расходов."
  },
  {
    "title": "Напрямую из Узбекистана",
    "desc": "Официальное приложение Telegram и Fragment не принимают местную карту — через нас это просто и быстро."
  }
];

const faqData = [
  {
    "q": "Сколько стоят Telegram Stars?",
    "a": "В Premium Send Telegram Stars продаются по линейному тарифу 300 сум/звезда. 50 Stars — 15 000 сум, 100 Stars — 30 000 сум, 1000 Stars — 300 000 сум. Цена звезды не меняется независимо от пакета."
  },
  {
    "q": "Как купить Stars?",
    "a": "Напишите в Telegram @premiumsendbot, выберите нужный пакет, оплатите в сумах картой UzCard или Humo. Stars поступят на аккаунт за несколько минут."
  },
  {
    "q": "Какой самый маленький пакет?",
    "a": "Самый маленький пакет — 50 Stars за 15 000 сум. Если нужно больше — в боте можно указать любое количество."
  },
  {
    "q": "Для чего используются Stars?",
    "a": "Для покупки стикеров и премиум-эмодзи, донатов каналам и блогерам, премиум-запросов в AI-ботах, платежей в мини-приложениях и подарков Telegram Premium."
  }
];

export default function StarsHubPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "50 Telegram Stars", url: "https://premiumsend.uz/ru/50-stars" },
      { "@type": "ListItem", position: 2, name: "100 Telegram Stars", url: "https://premiumsend.uz/ru/100-stars" },
      { "@type": "ListItem", position: 3, name: "250 Telegram Stars", url: "https://premiumsend.uz/ru/250-stars" },
      { "@type": "ListItem", position: 4, name: "500 Telegram Stars", url: "https://premiumsend.uz/ru/500-stars" },
      { "@type": "ListItem", position: 5, name: "1000 Telegram Stars", url: "https://premiumsend.uz/ru/1000-stars" },
      { "@type": "ListItem", position: 6, name: "2500 Telegram Stars", url: "https://premiumsend.uz/ru/2500-stars" },
      { "@type": "ListItem", position: 7, name: "5000 Telegram Stars", url: "https://premiumsend.uz/ru/5000-stars" },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: "https://premiumsend.uz/ru" },
      { "@type": "ListItem", position: 2, name: "Stars", item: "https://premiumsend.uz/ru/stars" },
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
        <Link href="/ru/" className="hover:text-primary">Главная</Link>
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
          <p className="text-xl text-white/80 mb-2">В узбекских сумах, картой UzCard/Humo. Линейная цена 300 сум/звезда, быстрая доставка.</p>
          <p className="text-xs text-white/60 mb-8">Актуально на сентябрь 2026</p>
          <Link href="https://telegram.me/premiumsendbot" target="_blank" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
            Открыть бота
          </Link>
        </div>
        <AnimatedWave />
      </section>

      {/* AEO direct-answer box */}
      <section className="py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20">
            <p className="text-sm leading-relaxed text-foreground">
              <strong>Короткий ответ:</strong> В Premium Send Telegram Stars продаются по линейному тарифу <strong>300 сум/звезда</strong> — от 50 Stars (15 000 сум) до 5000 Stars (1 500 000 сум). Оплатите в сумах через @premiumsendbot — Stars поступят на аккаунт за несколько минут.
            </p>
          </div>
        </div>
      </section>

      {/* Local payment advantage */}
      <section className="py-16 bg-section-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-foreground text-center mb-10">Почему покупать через Premium Send?</h2>
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
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-4">Все пакеты Stars</h2>
          <p className="text-muted text-center mb-12 max-w-2xl mx-auto">Линейная цена 300 сум/звезда — цена звезды не меняется независимо от пакета</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {PACKAGES.map((p) => (
              <Link
                key={p.amount}
                href={`/ru/${p.amount}-stars`}
                className={`bg-white rounded-2xl p-6 border card-hover text-center relative ${p.popular ? "border-2 border-primary shadow-lg" : "border-card-border shadow-sm"}`}
              >
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="shine-badge text-white text-xs font-bold px-3 py-1 rounded-full">Самый популярный</span>
                  </div>
                )}
                <div className="text-3xl mb-2">⭐</div>
                <div className="text-lg font-bold text-foreground mb-1">{p.amount} Stars</div>
                <div className="text-2xl font-extrabold text-primary mb-1">{p.price.toLocaleString("en-US").replace(/,/g, " ")}</div>
                <div className="text-xs text-muted">сум</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-section-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-12">Вопросы и ответы</h2>
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
          <p>Нужен ещё и Telegram Premium? Посмотрите <Link href="/ru/6-oylik" className="text-primary font-semibold hover:underline">пакеты и цены Premium</Link>.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-gradient rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10"><div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-2xl" /></div>
            <div className="relative">
              <h2 className="text-3xl font-extrabold text-white mb-4">Telegram Stars — от 15 000 сум</h2>
              <p className="text-white/80 mb-8">Оформите заказ прямо сейчас — Stars поступят на аккаунт за несколько минут</p>
              <Link href="https://telegram.me/premiumsendbot" target="_blank" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                Купить через Telegram
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
