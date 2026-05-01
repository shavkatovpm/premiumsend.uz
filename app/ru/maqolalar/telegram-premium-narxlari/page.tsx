import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Цены Telegram Premium 2026: сравнение тарифов 1, 3, 6, 12 месяцев",
  description:
    "Цены Telegram Premium в Узбекистане: 1 месяц — 59 000 сум, 3 месяца — 175 000 сум, 6 месяцев — 235 000 сум, 12 месяцев — 425 000 сум. Какой тариф самый выгодный? @PremiumSendBot, оплата в сумах.",
  keywords: [
    "Telegram Premium цена",
    "Telegram Premium цены",
    "Telegram Premium тарифы",
    "Telegram Premium сколько стоит",
    "Telegram Premium 1 месяц цена",
    "Telegram Premium 12 месяцев цена",
    "Telegram Premium сравнение",
    "PremiumSendBot",
  ],
  alternates: {
    canonical: "https://premiumsend.uz/ru/maqolalar/telegram-premium-narxlari",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/telegram-premium-narxlari",
      ru: "https://premiumsend.uz/ru/maqolalar/telegram-premium-narxlari",
    },
  },
  openGraph: {
    title:
      "Цены Telegram Premium 2026: сравнение тарифов 1, 3, 6, 12 месяцев",
    description:
      "Цены Telegram Premium в Узбекистане: от 59 000 до 425 000 сум. Анализ самого выгодного тарифа и способы оплаты.",
    url: "https://premiumsend.uz/ru/maqolalar/telegram-premium-narxlari",
    type: "article",
    publishedTime: "2026-04-30",
  },
};

export default function ArticleTelegramPremiumNarxlariRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Цены Telegram Premium 2026: сравнение тарифов 1, 3, 6, 12 месяцев",
    description:
      "Сравнение цен и тарифов Telegram Premium в Узбекистане. От 1 до 12 месяцев — какой тариф самый выгодный?",
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
      "https://premiumsend.uz/ru/maqolalar/telegram-premium-narxlari",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько стоит Telegram Premium в Узбекистане?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "В Premium Send Telegram Premium на 1 месяц — 59 000 сум, 3 месяца — 175 000 сум, 6 месяцев — 235 000 сум, 12 месяцев — 425 000 сум. Оплата через Uzcard, Humo, Click или Payme в сумах.",
        },
      },
      {
        "@type": "Question",
        name: "Какой тариф Telegram Premium самый выгодный?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Годовой тариф самый выгодный — всего 35 417 сум в месяц. Если покупать 1 месяц 12 раз, выйдет 708 000 сум, а годовой пакет стоит 425 000 сум. Экономия — 39% или 283 000 сум.",
        },
      },
      {
        "@type": "Question",
        name: "В чём разница между 1 месяцем и 12 месяцами?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "1 месяц — 59 000 сум (59 000 в месяц), 12 месяцев — 425 000 сум (35 417 в месяц). Разница в месячной стоимости — 23 583 сум или 39%. В годовом расчёте 1 месяц × 12 на 283 000 сум дороже годового пакета.",
        },
      },
      {
        "@type": "Question",
        name: "Кому подходит 6-месячный тариф?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "6-месячный тариф (235 000 сум, 39 167 в месяц) — самый сбалансированный выбор. Дешевле помесячной на 33%, но без большого обязательства как годовой. Идеально для регулярных пользователей и студенческого семестра.",
        },
      },
      {
        "@type": "Question",
        name: "Чем отличается от официальной цены Telegram?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "В официальном Telegram цена в долларах и нужна иностранная карта (Uzcard, Humo не работают). В Premium Send оплата в сумах местной картой — удобно и без потерь на конвертации. Плюс в Telegram нет 3- и 6-месячных тарифов.",
        },
      },
      {
        "@type": "Question",
        name: "Цены меняются?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Цены не зависят от курса доллара — Premium Send поддерживает фиксированные суммы. Если цена изменится, она сразу обновится на сайте и в @PremiumSendBot. Текущие цены актуальны на апрель 2026 года.",
        },
      },
      {
        "@type": "Question",
        name: "Цена подарка такая же?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, стоимость подарка такая же — 3 месяца 175 000, 6 месяцев 235 000, 12 месяцев 425 000 сум. Только 1-месячный подарок невозможен по правилам Telegram — подарок только на 3, 6 или 12 месяцев.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: "https://premiumsend.uz/ru" },
      { "@type": "ListItem", position: 2, name: "Статьи", item: "https://premiumsend.uz/ru/maqolalar" },
      { "@type": "ListItem", position: 3, name: "Цены Telegram Premium", item: "https://premiumsend.uz/ru/maqolalar/telegram-premium-narxlari" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-muted">
        <Link href="/ru" className="hover:text-primary">Главная</Link>
        <span className="mx-2">/</span>
        <Link href="/ru/maqolalar" className="hover:text-primary">Статьи</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">Цены Telegram Premium</span>
      </nav>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-100 text-purple-700">
              Сравнение
            </span>
            <time className="text-xs text-muted" dateTime="2026-04-30">
              30 апреля 2026
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Цены Telegram Premium 2026: сравнение тарифов 1, 3, 6, 12 месяцев
          </h1>

          {/* TL;DR */}
          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>Кратко:</strong> цены Telegram Premium в Узбекистане в{" "}
              <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>:{" "}
              <strong>1 месяц — 59 000 сум</strong>, <strong>3 месяца — 175 000 сум</strong>, <strong>6 месяцев — 235 000 сум</strong>, <strong>12 месяцев — 425 000 сум</strong>. Самый выгодный — годовой (35 417 сум/мес, экономия 39%). Оплата в сумах через Uzcard/Humo/Click/Payme.
          </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            При покупке Telegram Premium первый вопрос — «какой тариф выбрать?». Есть четыре варианта: 1, 3, 6 и 12 месяцев. У каждого своя цена и месячная стоимость. Выбор зависит не только от цены — важны и срок планируемого использования, бюджет и желание попробовать.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            В этой статье мы подробно сравним четыре тарифа по цене, месячной стоимости, проценту экономии и тому, кому что подходит. В конце — чёткая рекомендация, какой тариф выбрать именно вам.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              4 тарифа Telegram Premium: полная таблица сравнения
            </h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Главные цифры:</strong> цены 4 тарифов — 59 000, 175 000, 235 000 и 425 000 сум. Экономия по сравнению с помесячной: 1%, 33% и 39%. Самая низкая месячная стоимость — у годового (35 417 сум).
              </p>
            </div>

            <p className="text-muted leading-relaxed mb-6">
              Ниже — полное сравнение всех 4 тарифов. По каждому параметру видно, какой показатель у каждого тарифа:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-5 bg-section-alt p-4 font-bold text-sm">
                <div>Параметр</div>
                <div className="text-center">1 мес</div>
                <div className="text-center">3 мес</div>
                <div className="text-center">6 мес</div>
                <div className="text-center bg-primary-light/40 rounded">12 мес ⭐</div>
              </div>
              <div className="grid grid-cols-5 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Общая цена</div>
                <div className="text-center">59 000</div>
                <div className="text-center">175 000</div>
                <div className="text-center">235 000</div>
                <div className="text-center font-bold text-primary bg-primary-light/20">425 000</div>
              </div>
              <div className="grid grid-cols-5 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Цена в месяц</div>
                <div className="text-center">59 000</div>
                <div className="text-center">58 333</div>
                <div className="text-center">39 167</div>
                <div className="text-center font-bold text-primary bg-primary-light/20">35 417</div>
              </div>
              <div className="grid grid-cols-5 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Экономия %</div>
                <div className="text-center text-muted">—</div>
                <div className="text-center text-green-600">1%</div>
                <div className="text-center text-green-600">33%</div>
                <div className="text-center font-bold text-green-600 bg-primary-light/20">39%</div>
              </div>
              <div className="grid grid-cols-5 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Экономия сум</div>
                <div className="text-center text-muted">—</div>
                <div className="text-center text-green-600">2 000</div>
                <div className="text-center text-green-600">119 000</div>
                <div className="text-center font-bold text-green-600 bg-primary-light/20">283 000</div>
              </div>
              <div className="grid grid-cols-5 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Срок</div>
                <div className="text-center">30 дней</div>
                <div className="text-center">90 дней</div>
                <div className="text-center">180 дней</div>
                <div className="text-center bg-primary-light/20">365 дней</div>
              </div>
              <div className="grid grid-cols-5 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Подарок</div>
                <div className="text-center text-muted">❌</div>
                <div className="text-center text-green-600">✅</div>
                <div className="text-center text-green-600">✅</div>
                <div className="text-center text-green-600 bg-primary-light/20">✅</div>
              </div>
              <div className="grid grid-cols-5 p-4 items-center text-sm">
                <div className="font-medium">Рекомендация</div>
                <div className="text-center">⭐</div>
                <div className="text-center">⭐⭐</div>
                <div className="text-center">⭐⭐⭐</div>
                <div className="text-center font-bold bg-primary-light/20">⭐⭐⭐⭐⭐</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Из таблицы видно — от 1 до 12 месяцев месячная стоимость снижается. Но «какой тариф лучший?» не определяется только ценой: важны бюджет, срок использования и желание сначала попробовать.
            </p>
          </section>

          {/* Section 2 — Each tariff */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">
              Каждый тариф подробно: кому подходит и что даёт?
            </h2>

            {/* 1 месяц */}
            <div className="bg-white rounded-2xl p-6 border border-card-border shadow-sm mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground">1 месяц</h3>
                <span className="text-2xl font-extrabold text-primary">59 000 сум</span>
              </div>
              <p className="text-muted text-sm leading-relaxed mb-4">
                <strong className="text-foreground">Самая низкая входная цена.</strong> Для тех, кто хочет попробовать Premium, у кого ограниченный бюджет или временное использование. 59 000 сум в месяц — дешевле обеда.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                <div className="bg-section-alt rounded-lg p-3">
                  <p className="font-bold text-foreground mb-1">✅ Подходит:</p>
                  <p className="text-muted">Попробовать, кратковременная работа, ограниченный бюджет</p>
                </div>
                <div className="bg-section-alt rounded-lg p-3">
                  <p className="font-bold text-foreground mb-1">⚠️ Не подходит:</p>
                  <p className="text-muted">Долгосрочный план, экономия, подарок</p>
                </div>
              </div>
              <Link href="/ru/maqolalar/1-oylik-telegram-premium-sotib-olish" className="text-primary text-sm font-semibold hover:underline">
                Подробнее о тарифе на 1 месяц →
              </Link>
            </div>

            {/* 3 месяца */}
            <div className="bg-white rounded-2xl p-6 border border-card-border shadow-sm mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground">3 месяца</h3>
                <span className="text-2xl font-extrabold text-primary">175 000 сум</span>
              </div>
              <p className="text-muted text-sm leading-relaxed mb-4">
                <strong className="text-foreground">Большой экономии нет, но есть гибкость.</strong> 58 333 сум в месяц — всего на 1% дешевле помесячной. Зато 3 месяца не нужно платить заново. Подходит для подарка.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                <div className="bg-section-alt rounded-lg p-3">
                  <p className="font-bold text-foreground mb-1">✅ Подходит:</p>
                  <p className="text-muted">Сезонная работа (3 мес), подарок, короткие проекты</p>
                </div>
                <div className="bg-section-alt rounded-lg p-3">
                  <p className="font-bold text-foreground mb-1">⚠️ Не подходит:</p>
                  <p className="text-muted">Если нужна максимальная экономия</p>
                </div>
              </div>
              <Link href="/ru/maqolalar/3-oylik-telegram-premium-sotib-olish" className="text-primary text-sm font-semibold hover:underline">
                Подробнее о тарифе на 3 месяца →
              </Link>
            </div>

            {/* 6 месяцев */}
            <div className="bg-white rounded-2xl p-6 border-2 border-primary/30 shadow-md mb-6 relative">
              <div className="absolute -top-3 left-6 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                Самый сбалансированный
              </div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground">6 месяцев</h3>
                <span className="text-2xl font-extrabold text-primary">235 000 сум</span>
              </div>
              <p className="text-muted text-sm leading-relaxed mb-4">
                <strong className="text-foreground">Лучший баланс между ценой и обязательством.</strong> 39 167 сум в месяц — на 33% дешевле помесячной. Полугодовое обязательство — длительно, но без огромной инвестиции как в годовой. Sweet spot для большинства пользователей.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                <div className="bg-section-alt rounded-lg p-3">
                  <p className="font-bold text-foreground mb-1">✅ Подходит:</p>
                  <p className="text-muted">Регулярный пользователь, семестр студента, заметная экономия</p>
                </div>
                <div className="bg-section-alt rounded-lg p-3">
                  <p className="font-bold text-foreground mb-1">⚠️ Не подходит:</p>
                  <p className="text-muted">Для пробы или максимальной годовой экономии</p>
                </div>
              </div>
              <Link href="/ru/maqolalar/6-oylik-telegram-premium-olishning-eng-yaxshi-usuli" className="text-primary text-sm font-semibold hover:underline">
                Подробнее о тарифе на 6 месяцев →
              </Link>
            </div>

            {/* 12 месяцев */}
            <div className="bg-white rounded-2xl p-6 border-2 border-primary shadow-lg mb-6 relative">
              <div className="absolute -top-3 left-6 hero-gradient text-white text-xs font-bold px-3 py-1 rounded-full">
                Максимальная экономия — 39%
              </div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground">12 месяцев</h3>
                <span className="text-2xl font-extrabold text-primary">425 000 сум</span>
              </div>
              <p className="text-muted text-sm leading-relaxed mb-4">
                <strong className="text-foreground">Максимальная экономия. Самая низкая месячная цена.</strong> Всего 35 417 сум в месяц — на 39% дешевле помесячной. Экономия за год — 283 000 сум. Чёткий выбор для тех, кто пользуется Telegram каждый день, для бизнеса и контент-мейкеров.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                <div className="bg-section-alt rounded-lg p-3">
                  <p className="font-bold text-foreground mb-1">✅ Подходит:</p>
                  <p className="text-muted">Ежедневный пользователь, бизнес, блогер, максимальная экономия</p>
                </div>
                <div className="bg-section-alt rounded-lg p-3">
                  <p className="font-bold text-foreground mb-1">⚠️ Не подходит:</p>
                  <p className="text-muted">Если впервые пробуете, бюджет очень ограничен</p>
                </div>
              </div>
              <Link href="/ru/maqolalar/12-oylik-telegram-premium-uzcard-orqali" className="text-primary text-sm font-semibold hover:underline">
                Подробнее о тарифе на 12 месяцев →
              </Link>
            </div>
          </section>

          {/* Mid CTA */}
          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Уже выбрали тариф? В{" "}
                <strong className="text-white">@PremiumSendBot</strong> оплатите Uzcard, Humo, Click или Payme в сумах — Premium активируется за 5 минут.
              </p>
              <Link
                href="https://t.me/premiumsendbot"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                Открыть @PremiumSendBot
              </Link>
            </div>
          </section>

          {/* Section 3 — Saving math */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Какой тариф самый выгодный? Точные цифры
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Слово «экономия» используется часто, но что оно означает? Ниже — точные цифры. Если планируете пользоваться Premium 12 месяцев, сколько обойдётся каждый вариант:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Схема</div>
                <div className="text-center">Итого за 12 мес</div>
                <div className="text-center">Разница с годовым</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">1 мес × 12 раз</div>
                <div className="text-center">708 000 сум</div>
                <div className="text-center text-red-600 font-bold">+283 000 (дороже)</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">3 мес × 4 раза</div>
                <div className="text-center">700 000 сум</div>
                <div className="text-center text-red-600 font-bold">+275 000 (дороже)</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">6 мес × 2 раза</div>
                <div className="text-center">470 000 сум</div>
                <div className="text-center text-orange-500 font-bold">+45 000 (дороже)</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center text-sm bg-primary-light/20">
                <div className="font-bold text-primary">12 мес × 1 раз ⭐</div>
                <div className="text-center font-bold text-primary">425 000 сум</div>
                <div className="text-center text-green-600 font-bold">База (самый дешёвый)</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Вывод:</strong> при использовании Premium на 12 месяцев самый выгодный вариант — годовой тариф. Помесячная оплата обойдётся вам на 283 000 сум дороже. Этих денег хватит на новый 6-месячный пакет.
            </p>
            <p className="text-muted leading-relaxed">
              Если планируете больше 6 месяцев, но меньше 12 — лучше 6-месячный. Меньше 6 месяцев — 1 или 3 месяца.
            </p>
          </section>

          {/* Section 4 — Payment methods */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Как оплатить Telegram Premium?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              В Premium Send оплата проходит четырьмя способами — все локальные, в сумах. Без комиссий и доплат:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">💳 Uzcard</h3>
                <p className="text-sm text-muted">
                  P2P перевод или через Click/Payme. Работает для всех тарифов.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">💳 Humo</h3>
                <p className="text-sm text-muted">
                  Альтернатива Uzcard, процесс одинаковый. Доступна во многих банках.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">📱 Click</h3>
                <p className="text-sm text-muted">
                  Самый быстрый вариант. Если карта подключена — оплата за 30 секунд.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">📱 Payme</h3>
                <p className="text-sm text-muted">
                  Похоже на Click. Простая оплата через приложение Payme.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Точные руководства: через Uzcard —{" "}
              <Link href="/ru/maqolalar/1-oylik-telegram-premium-uzcard-orqali-sotib-olish" className="text-primary font-semibold hover:underline">1 месяц</Link>,{" "}
              <Link href="/ru/maqolalar/3-oylik-telegram-premium-uzcard-orqali" className="text-primary font-semibold hover:underline">3 месяца</Link>,{" "}
              <Link href="/ru/maqolalar/6-oylik-telegram-premium-uzcard-orqali" className="text-primary font-semibold hover:underline">6 месяцев</Link>,{" "}
              <Link href="/ru/maqolalar/12-oylik-telegram-premium-uzcard-orqali" className="text-primary font-semibold hover:underline">12 месяцев</Link>.
            </p>
          </section>

          {/* Section 5 — Decision tree */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Какой тариф выбрать? 30-секундный тест
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Сомневаетесь в выборе тарифа? Ответьте на вопросы ниже — ответ приведёт к подходящему тарифу:
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-section-alt rounded-xl p-5">
                <p className="font-bold text-foreground mb-2">1️⃣ Пробуете Premium впервые?</p>
                <p className="text-sm text-muted">
                  ✅ Да → начните с <strong>1 месяца (59 000)</strong>. Понравится — перейдёте на годовой.<br />
                  ❌ Нет → переходите к следующему вопросу.
                </p>
              </div>
              <div className="bg-section-alt rounded-xl p-5">
                <p className="font-bold text-foreground mb-2">2️⃣ Используете Telegram каждый день?</p>
                <p className="text-sm text-muted">
                  ✅ Да → <strong>12 месяцев (425 000)</strong> — максимальная экономия.<br />
                  ❌ Нет → переходите к следующему вопросу.
                </p>
              </div>
              <div className="bg-section-alt rounded-xl p-5">
                <p className="font-bold text-foreground mb-2">3️⃣ Планируете использовать больше полугода?</p>
                <p className="text-sm text-muted">
                  ✅ Да → <strong>6 месяцев (235 000)</strong> — сбалансированный выбор.<br />
                  ❌ Нет → <strong>3 месяца (175 000)</strong> или подарок.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
              <p className="text-foreground font-bold mb-2">📊 Статистика:</p>
              <p className="text-muted text-sm leading-relaxed">
                Большинство пользователей Premium Send выбирают годовой (40%) и 6-месячный (35%) тарифы. Причина проста — долгосрочная экономия. 1 месяц подходит для первой покупки, но регулярные пользователи переходят на более длинные тарифы.
              </p>
            </div>
          </section>

          {/* Section 6 — Telegram official vs PremiumSend */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Чем отличается от официальных цен Telegram?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              В официальном Telegram тоже есть цены Premium — но они в долларах и нужна иностранная карта. Uzcard и Humo в этой системе не работают. Сравним:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Параметр</div>
                <div className="text-center">Telegram официально</div>
                <div className="text-center">Premium Send</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Валюта</div>
                <div className="text-center text-muted">USD ($)</div>
                <div className="text-center text-primary font-bold">UZS (сум)</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Тип карты</div>
                <div className="text-center text-muted">Visa, MC (иностранные)</div>
                <div className="text-center text-primary font-bold">Uzcard, Humo</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">3 месяца есть?</div>
                <div className="text-center text-red-600">❌ Нет</div>
                <div className="text-center text-green-600 font-bold">✅ Да</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">6 месяцев есть?</div>
                <div className="text-center text-red-600">❌ Нет</div>
                <div className="text-center text-green-600 font-bold">✅ Да</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Потери на конвертации</div>
                <div className="text-center text-red-600">3-5%</div>
                <div className="text-center text-green-600 font-bold">0%</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center text-sm">
                <div className="font-medium">Время активации</div>
                <div className="text-center">Мгновенно</div>
                <div className="text-center">5 минут</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">Главное отличие:</strong> в официальном Telegram есть только 1 и 12 месяцев, а 3 и 6 месяцев отсутствуют. Premium Send предлагает все четыре тарифа — больше гибкости. Плюс местная карта и оплата в сумах без потерь на конвертации.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">
              Часто задаваемые вопросы
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Сколько стоит Telegram Premium в Узбекистане?",
                  a: "В Premium Send 1 месяц — 59 000 сум, 3 месяца — 175 000 сум, 6 месяцев — 235 000 сум, 12 месяцев — 425 000 сум. Оплата через Uzcard, Humo, Click или Payme в сумах.",
                },
                {
                  q: "Какой тариф Telegram Premium самый выгодный?",
                  a: "Годовой — самый выгодный. Всего 35 417 сум в месяц. 1 месяц × 12 раз обойдётся в 708 000 сум, а годовой пакет 425 000 сум. Экономия 39% или 283 000 сум.",
                },
                {
                  q: "В чём разница между 1 месяцем и 12 месяцами?",
                  a: "1 месяц — 59 000 сум (59 000 в месяц), 12 месяцев — 425 000 сум (35 417 в месяц). Разница в месячной стоимости — 23 583 сум или 39%. В годовом расчёте разница 283 000 сум.",
                },
                {
                  q: "Кому подходит 6-месячный тариф?",
                  a: "6 месяцев (235 000 сум, 39 167 в месяц) — самый сбалансированный выбор. На 33% дешевле помесячной, без огромного обязательства как годовой. Идеально для семестра студента, сезонной работы и регулярных пользователей.",
                },
                {
                  q: "Чем отличается от официальной цены Telegram?",
                  a: "В официальном Telegram цена в долларах и нужна иностранная карта — Uzcard, Humo не работают. В Premium Send оплата в сумах местной картой. Плюс в Telegram нет 3- и 6-месячных тарифов.",
                },
                {
                  q: "Цены меняются?",
                  a: "Premium Send поддерживает фиксированные цены в сумах — не зависят от курса доллара. Если цена изменится, обновляется на сайте и в @PremiumSendBot. Текущие цены актуальны на апрель 2026 года.",
                },
                {
                  q: "Цена подарка такая же?",
                  a: "Да — стоимость подарка такая же: 3 месяца 175 000, 6 месяцев 235 000, 12 месяцев 425 000 сум. Только 1-месячный подарок невозможен по правилам Telegram — подарок на 3, 6 или 12 месяцев.",
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
                Цены Telegram Premium — одним взглядом
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">59K</p>
                  <p className="text-sm text-muted">1 месяц</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">175K</p>
                  <p className="text-sm text-muted">3 месяца</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">235K</p>
                  <p className="text-sm text-muted">6 месяцев</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">425K</p>
                  <p className="text-sm text-muted">12 месяцев ⭐</p>
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
                  Главное правило выбора: <strong className="text-white">чем дольше пользуетесь, тем выгоднее</strong>. Пробуете — 1 месяц. Регулярный пользователь — 12 месяцев. В среднем — 6 месяцев.{" "}
                  <strong className="text-white">@PremiumSendBot</strong> — оплата в сумах через Uzcard, Humo, Click или Payme, активация за 5 минут.
                </p>
                <Link
                  href="https://t.me/premiumsendbot"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  Выбрать тариф
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
