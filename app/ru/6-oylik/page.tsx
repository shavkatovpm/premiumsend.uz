import type { Metadata } from "next";
import AnimatedWave from "../../components/AnimatedWave";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Купить Telegram Premium на 6 месяцев — 235 000 сум",
  description:
    "Купить Telegram Premium на 6 месяцев всего за 235 000 сум. Самый популярный пакет! 39 167 сум в месяц. Оплата в узбекских сумах через UzCard, Humo. Быстрая активация.",
  keywords: [
    "купить Telegram Premium 6 месяцев",
    "Telegram Premium 6 месяцев",
    "Telegram Premium 6 месяцев цена",
    "Telegram Premium 6 месяцев купить",
    "Telegram Premium 235000",
    "Telegram Premium 6 месяцев дешево",
    "Telegram Premium 6 месяцев Узбекистан",
    "Telegram Premium полугодовой",
  ],
  alternates: {
    canonical: "https://premiumsend.uz/ru/6-oylik",
    languages: {
      uz: "https://premiumsend.uz/6-oylik",
      ru: "https://premiumsend.uz/ru/6-oylik",
    },
  },
  openGraph: {
    title: "Купить Telegram Premium на 6 месяцев — 235 000 сум | Самый популярный",
    description:
      "Купите подписку Telegram Premium на 6 месяцев за 235 000 сум. 39 167 сум в месяц — лучшее соотношение цена/качество.",
    url: "https://premiumsend.uz/ru/6-oylik",
  },
};

const features = [
  { icon: "📦", title: "Загрузка файлов до 4 ГБ", desc: "Отправляйте файлы до 4 ГБ вместо обычных 2 ГБ" },
  { icon: "⚡", title: "Скачивание в 2 раза быстрее", desc: "Скачивайте медиа и файлы в два раза быстрее" },
  { icon: "🔇", title: "Каналы без рекламы", desc: "Скрывайте все рекламные сообщения в каналах" },
  { icon: "✨", title: "Премиум-стикеры и эмодзи", desc: "Используйте эксклюзивные анимированные стикеры и эмодзи" },
  { icon: "🌐", title: "Мгновенный перевод", desc: "Переводите сообщения на любой язык одним нажатием" },
  { icon: "👤", title: "Расширенный профиль", desc: "Добавьте форматированный текст и ссылки в свой профиль" },
];

const faqData = [
  {
    q: "Сколько стоит Telegram Premium на 6 месяцев?",
    a: "Стоимость Telegram Premium на 6 месяцев в Premium Send составляет 235 000 сум. Это всего 39 167 сум в месяц — на 33% выгоднее 3-месячного пакета.",
  },
  {
    q: "Почему 6-месячный пакет самый популярный?",
    a: "Telegram Premium на 6 месяцев имеет лучшее соотношение цена/качество. Ежемесячная стоимость на 33% дешевле 3-месячного, и вы пользуетесь Premium полгода, не думая о продлении. Оптимальный выбор по цене и качеству.",
  },
  {
    q: "Можно ли купить 6-месячный Premium в Telegram?",
    a: "Нет, в Telegram нет 6-месячного пакета Premium. Telegram предлагает только 1-месячную и 12-месячную подписку. 6-месячный пакет можно купить только через сервисы вроде Premium Send. В Premium Send можно оплатить в сумах через карты UzCard, Humo. Также можно оплатить переводом на карту бота через Click или Payme.",
  },
];

export default function SixMonthPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Купить Telegram Premium на 6 месяцев",
    description: "Подписка Telegram Premium на 6 месяцев — самый популярный пакет. Купите в сумах в Узбекистане.",
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
      { "@type": "ListItem", position: 1, name: "Главная", item: "https://premiumsend.uz/ru" },
      { "@type": "ListItem", position: 2, name: "Telegram Premium на 6 месяцев", item: "https://premiumsend.uz/ru/6-oylik" },
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
        <Link href="/ru" className="hover:text-primary">Главная</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">Telegram Premium на 6 месяцев</span>
      </nav>

      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-80 h-80 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 backdrop-blur-sm text-white text-sm font-bold px-4 py-2 rounded-full mb-6">
            Самый популярный пакет
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Купить Telegram
            <br />
            Premium на 6 месяцев
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Всего <span className="text-white font-bold">235 000 сум</span> (~39 167 сум/мес.)
          </p>
          <div className="inline-block bg-white/15 backdrop-blur-sm rounded-xl px-6 py-3 mb-8">
            <p className="text-white/90 text-sm">
              На <span className="text-yellow-300 font-bold">33% выгоднее</span> 3-месячного пакета
            </p>
          </div>
          <div>
            <Link href="https://t.me/premiumsendbot" target="_blank" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
              </svg>
              Купить сейчас
            </Link>
          </div>
        </div>
        <AnimatedWave />
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-4">Что вы получите с Telegram Premium на 6 месяцев?</h2>
          <p className="text-muted text-center mb-12 max-w-2xl mx-auto">Пользуйтесь всеми возможностями Telegram Premium в течение полугода</p>
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
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-12">Почему Telegram Premium на 6 месяцев — <span className="gradient-text">лучший выбор</span>?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gold-light flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V7m0 10v1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-bold mb-2">Лучшее соотношение цена/качество</h3>
              <p className="text-sm text-muted">Всего 39 167 сум в месяц — на 33% дешевле 3-месячного пакета</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gold-light flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-bold mb-2">Полгода спокойствия</h3>
              <p className="text-sm text-muted">6 месяцев не думаете о продлении Telegram Premium</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gold-light flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <h3 className="font-bold mb-2">Самый популярный выбор</h3>
              <p className="text-sm text-muted">Оптимальный по цене и качеству — Telegram Premium на 6 месяцев</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-card-border shadow-sm space-y-4 text-muted leading-relaxed">
            <h2 className="text-2xl font-extrabold text-foreground">Telegram Premium на 6 месяцев — подробная информация</h2>
            <p>
              <strong className="text-foreground">Купить Telegram Premium на 6 месяцев</strong> — оптимальный выбор по соотношению цена/качество. Всего 39 167 сум в месяц — пользуйтесь всеми возможностями Telegram Premium в течение полугода.
            </p>
            <p>
              В мессенджере Telegram доступны только 1-месячная и 12-месячная подписки Premium — 6-месячного пакета нет. Через Premium Send вы можете купить Telegram Premium на 6 месяцев за <strong className="text-foreground">235 000 сум</strong> — оплатив в сумах через карты UzCard, Humo. Также можно оплатить переводом на карту бота через Click или Payme.
            </p>
            <p>
              Другие пакеты: <Link href="/ru/3-oylik" className="text-primary font-semibold hover:underline">Telegram Premium на 3 месяца</Link> (175 000 сум) для пробы, или <Link href="/ru/12-oylik" className="text-primary font-semibold hover:underline">Telegram Premium на 12 месяцев</Link> (425 000 сум) для самой низкой ежемесячной стоимости.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-section-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-12"><span className="gradient-text">Сравнение</span> цен Telegram Premium</h2>
          <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden">
            <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
              <div>Пакет</div><div className="text-center">Цена</div><div className="text-center">В месяц</div><div className="text-center">Экономия</div>
            </div>
            <Link href="/ru/1-oylik" className="grid grid-cols-4 p-4 border-b border-card-border items-center hover:bg-primary-light/10 transition-colors">
              <div className="font-bold">1 месяц</div><div className="text-center font-semibold">59 000</div><div className="text-center text-sm text-muted">59 000</div><div className="text-center text-sm">&mdash;</div>
            </Link>
            <Link href="/ru/3-oylik" className="grid grid-cols-4 p-4 border-b border-card-border items-center hover:bg-primary-light/10 transition-colors">
              <div className="font-bold">3 месяца</div><div className="text-center font-semibold">175 000</div><div className="text-center text-sm text-muted">58 333</div><div className="text-center text-sm text-green-600 font-medium">-1%</div>
            </Link>
            <div className="grid grid-cols-4 p-4 border-b border-card-border bg-primary-light/30 items-center">
              <div className="font-bold text-primary">6 месяцев</div><div className="text-center font-semibold text-primary">235 000</div><div className="text-center text-sm text-primary">39 167</div><div className="text-center text-sm text-green-600 font-medium">-33%</div>
            </div>
            <Link href="/ru/12-oylik" className="grid grid-cols-4 p-4 items-center hover:bg-primary-light/10 transition-colors">
              <div className="font-bold">12 месяцев</div><div className="text-center font-semibold">425 000</div><div className="text-center text-sm text-muted">35 417</div><div className="text-center text-sm text-green-600 font-medium">-39%</div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-12">Telegram Premium на 6 месяцев — <span className="gradient-text">вопросы</span></h2>
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
              <h2 className="text-3xl font-extrabold text-white mb-4">Telegram Premium на 6 месяцев — 235 000 сум</h2>
              <p className="text-white/80 mb-8">Самый популярный пакет — купите Telegram Premium прямо сейчас!</p>
              <Link href="https://t.me/premiumsendbot" target="_blank" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">
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
