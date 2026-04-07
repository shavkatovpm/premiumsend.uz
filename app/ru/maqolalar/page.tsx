import type { Metadata } from "next";
import AnimatedWave from "../../components/AnimatedWave";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Статьи о Telegram Premium — руководства, цены, новости",
  description:
    "Полезные статьи о Telegram Premium: что такое Premium, как купить, цены, возможности. Полное руководство по покупке Telegram Premium в Узбекистане.",
  keywords: [
    "Telegram Premium статьи",
    "Telegram Premium что это",
    "Telegram Premium возможности",
    "Telegram Premium руководство",
    "Telegram Premium цены",
    "Telegram Premium купить руководство",
  ],
  alternates: {
    canonical: "https://premiumsend.uz/ru/maqolalar",
    languages: {
      uz: "https://premiumsend.uz/maqolalar",
      ru: "https://premiumsend.uz/ru/maqolalar",
    },
  },
  openGraph: {
    title: "Статьи и руководства о Telegram Premium",
    description:
      "Полезные статьи о Telegram Premium, цены, возможности и руководства по покупке.",
    url: "https://premiumsend.uz/ru/maqolalar",
  },
};

const articles = [
  {
    slug: "1-oylik-telegram-premium-sotib-olish",
    title: "Купить Telegram Premium на 1 месяц",
    excerpt:
      "Купить Telegram Premium на 1 месяц в Узбекистане — оплата в сумах через UzCard, Humo. Через @premiumsend_admin. Самый доступный вариант — всего 59 000 сум.",
    category: "Руководство",
    date: "2026-04-07",
  },
  {
    slug: "3-oylik-telegram-premium-sotib-olish",
    title: "Купить Telegram Premium на 3 месяца",
    excerpt:
      "Купить Telegram Premium на 3 месяца в Узбекистане — оплата в сумах через UzCard, Humo. Также можно оплатить через Click или Payme переводом на карту. В Telegram нет 3- и 6-месячных пакетов — только через @PremiumSendBot. Пошаговая инструкция.",
    category: "Руководство",
    date: "2026-04-02",
  },
  {
    slug: "6-oylik-telegram-premium-sotib-olish",
    title: "Купить Telegram Premium на 6 месяцев",
    excerpt:
      "Купить Telegram Premium на 6 месяцев в Узбекистане — за 235 000 сум. Оплата в сумах через Uzcard, Humo. В Telegram нет 6-месячного пакета — только через @PremiumSendBot. Почему 6 месяцев — самый разумный выбор?",
    category: "Руководство",
    date: "2026-04-02",
  },
  {
    slug: "12-oylik-telegram-premium-sotib-olish",
    title: "Купить Telegram Premium на 12 месяцев",
    excerpt:
      "Купить Telegram Premium на 12 месяцев в Узбекистане — за 425 000 сум. В месяц всего 35 417 сум — самый выгодный вариант. В Telegram 12-месячный пакет есть, но нужна иностранная карта. В Premium Send оплата в сумах.",
    category: "Руководство",
    date: "2026-04-02",
  },
];

const categoryColors: Record<string, string> = {
  "Руководство": "bg-primary-light text-primary",
  Цены: "bg-green-100 text-green-700",
  Сравнение: "bg-purple-100 text-purple-700",
  Советы: "bg-gold-light text-amber-700",
  Новости: "bg-blue-100 text-blue-700",
};

export default function ArticlesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: "https://premiumsend.uz/ru" },
      { "@type": "ListItem", position: 2, name: "Статьи", item: "https://premiumsend.uz/ru/maqolalar" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-muted">
        <Link href="/ru" className="hover:text-primary">Главная</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">Статьи</span>
      </nav>

      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-80 h-80 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Статьи о Telegram Premium
          </h1>
          <p className="text-xl text-white/80">
            Возможности, цены и руководства по покупке Telegram Premium
          </p>
        </div>
        <AnimatedWave />
      </section>

      {/* Articles */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/ru/maqolalar/${article.slug}`}
                className="bg-white rounded-2xl p-8 border border-card-border shadow-sm card-hover block"
              >
                <article>
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        categoryColors[article.category] || "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {article.category}
                    </span>
                    <time className="text-xs text-muted" dateTime={article.date}>
                      {article.date}
                    </time>
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-3 leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <span className="text-primary text-sm font-semibold">
                    Читать далее &rarr;
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-20 bg-section-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-foreground mb-8">
            <span className="gradient-text">Купить</span> Telegram Premium
          </h2>
          <p className="text-muted mb-10 max-w-2xl mx-auto">
            Прочитали статьи? Теперь купите Telegram Premium — от 59 000 сум, оплата в сумах.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            <Link href="/ru/1-oylik" className="px-6 py-3 rounded-xl bg-white border border-card-border shadow-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-all">
              1 месяц — 59 000 сум
            </Link>
            <Link href="/ru/3-oylik" className="px-6 py-3 rounded-xl bg-white border border-card-border shadow-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-all">
              3 месяца — 175 000 сум
            </Link>
            <Link href="/ru/6-oylik" className="px-6 py-3 rounded-xl hero-gradient text-white font-semibold shadow-lg shadow-primary/25">
              6 месяцев — 235 000 сум
            </Link>
            <Link href="/ru/12-oylik" className="px-6 py-3 rounded-xl bg-white border border-card-border shadow-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-all">
              12 месяцев — 425 000 сум
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-gradient rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-2xl" />
            </div>
            <div className="relative">
              <h2 className="text-3xl font-extrabold text-white mb-4">
                Готовы купить Telegram Premium?
              </h2>
              <p className="text-white/80 mb-8">
                От 175 000 сум. Оплатите в сумах и активируйте за несколько минут.
              </p>
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
