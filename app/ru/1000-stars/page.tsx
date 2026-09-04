import type { Metadata } from "next";
import AnimatedWave from "../../components/AnimatedWave";
import Link from "next/link";
import { ogBaseRu } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title: "Купить 1000 Telegram Stars — 300 000 сум",
  description:
    "Купить 1000 Telegram Stars — 300 000 сум (300 сум/звезда). Самый популярный пакет — для подарка Premium. Оплата в сумах через @premiumsendbot, доставка за несколько минут.",
  keywords: [
    "купить 1000 stars",
    "1000 stars цена",
    "telegram stars 1000",
    "сколько стоит 1000 stars",
    "1000 stars узбекистан",
    "1000 stars в сумах",
  ],
  alternates: {
    canonical: "https://premiumsend.uz/ru/1000-stars",
    languages: {
      uz: "https://premiumsend.uz/1000-stars",
      ru: "https://premiumsend.uz/ru/1000-stars",
      "x-default": "https://premiumsend.uz/1000-stars",
    },
  },
  openGraph: {
    ...ogBaseRu,
    title: "Купить 1000 Telegram Stars — 300 000 сум",
    description:
      "Купить 1000 Telegram Stars — 300 000 сум (300 сум/звезда). Самый популярный пакет — для подарка Premium. Оплата в сумах через @premiumsendbot, доставка за несколько минут.",
    url: "https://premiumsend.uz/ru/1000-stars",
  },
};

const AMOUNT = 1000;
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

const useCases = [
  {
    "icon": "🎁",
    "title": "Подарок Telegram Premium",
    "desc": "Достаточный резерв для механизма подарка Premium на 6-12 месяцев"
  },
  {
    "icon": "📣",
    "title": "Донаты крупным каналам",
    "desc": "Заметная поддержка для больших каналов и проектов"
  },
  {
    "icon": "🏢",
    "title": "Бизнес-функции",
    "desc": "Для нескольких функций управления бизнес-аккаунтом и каналом"
  },
  {
    "icon": "🎯",
    "title": "Организация розыгрышей",
    "desc": "Резерв для розыгрышей призов среди подписчиков канала"
  }
];

const whyItems = [
  {
    "title": "Самый покупаемый пакет",
    "desc": "Для подарка Telegram Premium на 6 или 12 месяцев обычно нужен именно такой объём"
  },
  {
    "title": "Подходит для крупных проектов",
    "desc": "Удобный резерв для донатов крупным каналам и бизнес-функций"
  },
  {
    "title": "Хороший баланс",
    "desc": "В отличие от малых пакетов, не придётся заказывать повторно"
  }
];

const faqData = [
  {
    "q": "Сколько стоит 1000 Stars?",
    "a": "Цена 1000 Telegram Stars в Premium Send — 300 000 сум (300 сум/звезда, линейный тариф). Оплата в узбекских сумах — картами UzCard, Humo."
  },
  {
    "q": "Для чего нужны 1000 Stars?",
    "a": "Самый популярный пакет — для подарка Premium. Достаточный резерв для механизма подарка Premium на 6-12 месяцев Заметная поддержка для больших каналов и проектов"
  },
  {
    "q": "Как купить 1000 Stars?",
    "a": "Напишите в Telegram @premiumsendbot, выберите пакет 1000 Stars, оплатите в сумах — и через несколько минут Stars будут на вашем аккаунте. Пароль или доступ к аккаунту не требуется."
  },
  {
    "q": "За сколько минут доставляются Stars?",
    "a": "После подтверждения оплаты Stars обычно поступают в течение нескольких минут. Проверить можно в Telegram → Настройки → Stars."
  },
  {
    "q": "Нужна ли иностранная карта для покупки Stars?",
    "a": "Нет. Официальное приложение Telegram требует иностранную карту Visa/Mastercard, а Fragment — крипто-кошелёк. Через Premium Send вы платите обычной картой UzCard или Humo, напрямую в сумах."
  }
];

export default function Stars1000Page() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Купить 1000 Telegram Stars — 300 000 сум",
    description: "Telegram Stars — 1000 штук, купите в Узбекистане в сумах",
    image: "https://premiumsend.uz/og-image.png",
    sku: "STARS-" + AMOUNT,
    offers: {
      "@type": "Offer",
      price: "300000",
      priceCurrency: "UZS",
      priceValidUntil: "2026-12-03",
      availability: "https://schema.org/InStock",
      url: "https://premiumsend.uz/ru/1000-stars",
      seller: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: "https://premiumsend.uz/ru" },
      { "@type": "ListItem", position: 2, name: "Stars", item: "https://premiumsend.uz/ru/stars" },
      { "@type": "ListItem", position: 3, name: "1000 Telegram Stars", item: "https://premiumsend.uz/ru/1000-stars" },
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
        <Link href="/ru/" className="hover:text-primary">Главная</Link>
        <span className="mx-2">/</span>
        <Link href="/ru/stars" className="hover:text-primary">Stars</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">1000 Telegram Stars</span>
      </nav>

      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-80 h-80 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white/90 text-sm px-4 py-2 rounded-full mb-6">Пакет 1000 Stars</div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Купить 1000<br />Telegram Stars</h1>
          <p className="text-xl text-white/80 mb-2">Всего <span className="text-white font-bold">300 000 сум</span></p>
          <p className="text-xs text-white/60 mb-8">Актуально на сентябрь 2026</p>
          <Link href="https://telegram.me/premiumsendbot" target="_blank" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
            Купить сейчас
          </Link>
        </div>
        <AnimatedWave />
      </section>

      {/* AEO direct-answer box */}
      <section className="py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20">
            <p className="text-sm leading-relaxed text-foreground">
              <strong>Короткий ответ:</strong> Цена 1000 Telegram Stars в Premium Send — <strong>300 000 сум</strong> (300 сум/звезда). самый популярный пакет — для подарка Premium. Оплатите в сумах через @premiumsendbot — Stars поступят на аккаунт за несколько минут.
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

      {/* Use cases */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-4">Что можно сделать с 1000 Stars?</h2>
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
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-12">Почему именно 1000 Stars?</h2>
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
            <h2 className="text-2xl font-extrabold text-foreground">1000 Telegram Stars — подробная информация</h2>
            <p><strong className="text-foreground">Купить 1000 Telegram Stars</strong> — самый популярный пакет — для подарка Premium. Через Premium Send вы можете купить Stars в узбекских сумах, картой UzCard или Humo.</p>
            <p>Цена 1000 Stars — 300 000 сум (300 сум/звезда). Все пакеты Stars в Premium Send рассчитываются по единому линейному тарифу 300 сум/звезда — цена звезды не меняется независимо от размера пакета. После оплаты Stars поступают на аккаунт в течение нескольких минут.</p>
            <p>Главная причина выбрать 1000 Stars: для подарка Telegram Premium на 6 или 12 месяцев обычно нужен именно такой объём.</p>
            <p>Нужен другой объём? Посмотрите также пакеты <Link href="/ru/50-stars" className="text-primary font-semibold hover:underline">50 Stars</Link> (15 000 сум), <Link href="/ru/100-stars" className="text-primary font-semibold hover:underline">100 Stars</Link> (30 000 сум), <Link href="/ru/250-stars" className="text-primary font-semibold hover:underline">250 Stars</Link> (75 000 сум) — цена всегда рассчитывается по ставке 300 сум/звезда.</p>
            <p className="text-sm">Нужен ещё и Telegram Premium? Посмотрите <Link href="/ru/6-oylik" className="text-primary font-semibold hover:underline">пакеты и цены Premium</Link>.</p>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-section-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-12">Цены на пакеты Stars</h2>
          <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden">
            <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm"><div>Paket</div><div className="text-center">Цена (сум)</div><div className="text-center">сум/звезда</div></div>
            {PACKAGES.map((p) => {
              const isCurrent = p.amount === AMOUNT;
              const rowClass = isCurrent
                ? "grid grid-cols-3 p-4 border-b border-card-border bg-primary-light/30 items-center last:border-b-0"
                : "grid grid-cols-3 p-4 border-b border-card-border items-center hover:bg-primary-light/10 transition-colors last:border-b-0";
              const inner = (
                <>
                  <div className={`font-bold ${isCurrent ? "text-primary" : ""}`}>{p.amount} Stars{p.popular ? " ⭐" : ""}</div>
                  <div className="text-center font-semibold">{p.price.toLocaleString("en-US").replace(/,/g, " ")}</div>
                  <div className="text-center text-sm text-muted">300</div>
                </>
              );
              return isCurrent ? (
                <div key={p.amount} className={rowClass}>{inner}</div>
              ) : (
                <Link key={p.amount} href={`/ru/${p.amount}-stars`} className={rowClass}>{inner}</Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-12">1000 Stars — вопросы</h2>
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
              <h2 className="text-3xl font-extrabold text-white mb-4">1000 Telegram Stars — 300 000 сум</h2>
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
