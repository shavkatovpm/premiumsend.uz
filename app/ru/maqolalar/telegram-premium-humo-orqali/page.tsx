import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Telegram Premium через карту Humo — пошаговое руководство 2026",
  description:
    "Telegram Premium через карту Humo — от 59 000 до 425 000 сум. @PremiumSendBot, оплата в сумах, активация за 5 минут. Пошаговое руководство и безопасность.",
  keywords: [
    "Telegram Premium Humo",
    "Telegram Premium через Humo",
    "Telegram Premium карта Humo",
    "Humo Telegram Premium",
    "купить Telegram Premium Humo",
    "PremiumSendBot Humo",
  ],
  alternates: {
    canonical: "https://premiumsend.uz/ru/maqolalar/telegram-premium-humo-orqali",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/telegram-premium-humo-orqali",
      ru: "https://premiumsend.uz/ru/maqolalar/telegram-premium-humo-orqali",
      "x-default": "https://premiumsend.uz/maqolalar/telegram-premium-humo-orqali",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title:
      "Telegram Premium через карту Humo — пошаговое руководство",
    description:
      "Оплата Telegram Premium картой Humo в сумах. 4 тарифа (1, 3, 6, 12 месяцев), активация за 5 минут, 0% комиссии.",
    url: "https://premiumsend.uz/ru/maqolalar/telegram-premium-humo-orqali",
    type: "article",
    publishedTime: "2026-05-02",
  },
};

export default function ArticleHumoOrqaliRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    image: "https://premiumsend.uz/og-image.png",
    headline:
      "Telegram Premium через карту Humo — пошаговое руководство",
    description:
      "Покупка Telegram Premium картой Humo в Узбекистане — все тарифы, цены и пошаговая инструкция.",
    datePublished: "2026-05-02",
    dateModified: "2026-05-02",
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
      "https://premiumsend.uz/ru/maqolalar/telegram-premium-humo-orqali",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Можно ли купить Telegram Premium через карту Humo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, можно. В Premium Send через @PremiumSendBot можно купить Telegram Premium с оплатой картой Humo. Поддерживаются все тарифы (1, 3, 6, 12 месяцев). Оплата в сумах, без комиссии, активация за 5 минут.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько стоит Telegram Premium через Humo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Цены через Humo такие же, как через Uzcard: 1 месяц — 59 000 сум, 3 месяца — 175 000 сум, 6 месяцев — 235 000 сум, 12 месяцев — 425 000 сум. Способ оплаты не влияет на цену.",
        },
      },
      {
        "@type": "Question",
        name: "Безопасна ли оплата картой Humo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, безопасна. Оплата проходит стандартным P2P переводом или через Click/Payme — данные карты не сохраняются. Если Premium не придёт, деньги возвращаются полностью. Механизм такой же безопасный, как с Uzcard.",
        },
      },
      {
        "@type": "Question",
        name: "Есть ли разница между Humo и Uzcard?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Для покупки Premium разницы нет — цены, процесс и безопасность одинаковые. Просто используйте ту карту, которая у вас есть. Некоторые банки выпускают Humo, другие — Uzcard.",
        },
      },
      {
        "@type": "Question",
        name: "Через сколько активируется Premium после оплаты Humo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Обычно через 2-5 минут после подтверждения оплаты Premium активируется автоматически. При технической задержке может занять 10-15 минут. Поддержка бота поможет в любой ситуации.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли оплатить Telegram Premium картой Humo в официальном приложении?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет. Официальное приложение Telegram принимает только Visa, Mastercard, Google Pay и Apple Pay. Humo и Uzcard в этой системе не работают. Для оплаты местной картой нужны сервисы вроде @PremiumSendBot.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли подарить Premium через Humo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Можно подарить Telegram Premium на 3, 6 или 12 месяцев картой Humo. Вводите username, оплачиваете — Premium активируется на этом аккаунте. По правилам Telegram 1-месячный подарок невозможен.",
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
      { "@type": "ListItem", position: 3, name: "Telegram Premium через Humo", item: "https://premiumsend.uz/ru/maqolalar/telegram-premium-humo-orqali" },
    ],
  };

  const howToSchema = {"@context":"https://schema.org","@type":"HowTo","name":"Telegram Premium через карту Humo — пошаговое руководство","description":"Пошаговое руководство: Telegram Premium через карту Humo — пошаговое руководство","step":[{"@type":"HowToStep","position":1,"name":"Найдите @PremiumSendBot в Telegram","text":"В верхней строке поиска Telegram наберите @PremiumSendBot. Проверьте значок верифицированного бота — настоящий бот имеет такой значок. Откройте и нажмите /start."},{"@type":"HowToStep","position":2,"name":"Выберите тариф","text":"В меню бота 4 тарифа: 1, 3, 6 и 12 месяцев. Пробуете — 1 месяц (59 000) подойдёт. Постоянный пользователь — 12 месяцев (425 000) самый выгодный. Сбалансированный — 6 месяцев (235 000)."},{"@type":"HowToStep","position":3,"name":"Введите username аккаунта","text":"После @ напишите Telegram username. Это ваш аккаунт или того, кому делаете подарок. Важно не ошибиться — Premium активируется именно на этом аккаунте."},{"@type":"HowToStep","position":4,"name":"Выберите способ оплаты — Humo","text":"На экране 4 варианта: Uzcard, Humo, Click, Payme. Нажмите \"Humo\". Бот объяснит следующий шаг — способ оплаты (P2P, Click или Payme)."},{"@type":"HowToStep","position":5,"name":"Оплатите картой Humo","text":"Выполните оплату способом, который предложил бот. Самый простой — через Click или Payme (если карта подключена). Или прямой P2P перевод Humo. Комиссия 0%."},{"@type":"HowToStep","position":6,"name":"Premium активируется за 5 минут","text":"После подтверждения оплаты Premium включается на аккаунте автоматически. Бот пришлёт уведомление. Дополнительных подтверждений не нужно. При технической задержке может занять 10-15 минут."}]};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-muted">
        <Link href="/ru" className="hover:text-primary">Главная</Link>
        <span className="mx-2">/</span>
        <Link href="/ru/maqolalar" className="hover:text-primary">Статьи</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">Telegram Premium через Humo</span>
      </nav>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">
              Руководство
            </span>
            <time className="text-xs text-muted" dateTime="2026-05-02">
              2 мая 2026
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Telegram Premium через карту Humo — пошаговое руководство
          </h1>

          {/* TL;DR */}
          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>Кратко:</strong> покупка Telegram Premium картой Humo проходит через{" "}
              <Link href="https://telegram.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>. Цены: <strong>1 месяц — 59 000 сум</strong>, <strong>3 месяца — 175 000 сум</strong>, <strong>6 месяцев — 235 000 сум</strong>, <strong>12 месяцев — 425 000 сум</strong>. Оплата в сумах, без комиссии, активация за 5 минут.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Humo — вторая по величине платёжная система Узбекистана. Вместе с Uzcard работает в большинстве банков страны. Для покупки Telegram Premium держатели Humo не уступают пользователям Uzcard — все тарифы доступны, цены одинаковые, процесс идентичный.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Это руководство раскрывает полный процесс покупки Telegram Premium картой Humo: тарифы и цены, пошаговая инструкция, гарантии безопасности и часто задаваемые вопросы.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Почему для оплаты Premium картой Humo нужен отдельный сервис?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Официальное приложение Telegram — большая международная система: принимает Visa, Mastercard, Google Pay, Apple Pay. Но национальные платёжные системы Узбекистана — <strong>Humo и Uzcard</strong> — не интегрированы в эту экосистему. Если ввести карту Humo в Telegram, оплата будет отклонена.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Это не технический недостаток Humo — карта прекрасно работает в Узбекистане. Click, Payme, любые местные оплаты проходят без проблем. Проблема в международной ценовой политике Telegram: цены в долларах, оплата через зарубежные банковские системы.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Решение:</strong> местный посредник вроде @PremiumSendBot. Вы оплачиваете Humo в сумах, сервис активирует Premium в вашем Telegram аккаунте. Для вас процесс простой и прозрачный.
            </p>

            <div className="bg-section-alt rounded-xl p-5">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Кратко:</strong> держатели Humo не могут получить Premium напрямую через Telegram — потому что Telegram не принимает Humo. Но через Premium Send это легко и безопасно. Дополнительная карта или зарубежный счёт не нужны.
              </p>
            </div>
          </section>

          {/* Section 2 — Pricing */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Telegram Premium через Humo — цены всех тарифов
            </h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Цены:</strong> 4 тарифа доступны при оплате Humo. 1 месяц — <strong>59 000 сум</strong>, 3 месяца — <strong>175 000 сум</strong>, 6 месяцев — <strong>235 000 сум</strong>, 12 месяцев — <strong>425 000 сум</strong>. Самый выгодный — годовой (35 417 сум в месяц).
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Тариф</div>
                <div className="text-center">Общая цена</div>
                <div className="text-center">В месяц</div>
                <div className="text-center">Экономия</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">1 месяц</div>
                <div className="text-center">59 000 сум</div>
                <div className="text-center">59 000 сум</div>
                <div className="text-center text-muted">—</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">3 месяца</div>
                <div className="text-center">175 000 сум</div>
                <div className="text-center">58 333 сум</div>
                <div className="text-center text-green-600 font-bold">1%</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">6 месяцев</div>
                <div className="text-center">235 000 сум</div>
                <div className="text-center">39 167 сум</div>
                <div className="text-center text-green-600 font-bold">33%</div>
              </div>
              <div className="grid grid-cols-4 p-4 items-center text-sm bg-primary-light/20">
                <div className="font-bold text-primary">12 месяцев ⭐</div>
                <div className="text-center font-bold text-primary">425 000 сум</div>
                <div className="text-center font-bold text-primary">35 417 сум</div>
                <div className="text-center text-green-600 font-bold">39%</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Цены не зависят от способа оплаты — Humo, Uzcard, Click, Payme — сумма одинаковая. Скрытых комиссий нет. Подробнее о тарифах:{" "}
              <Link href="/ru/maqolalar/telegram-premium-narxlari" className="text-primary font-semibold hover:underline">сравнение цен</Link>.
            </p>
          </section>

          {/* Section 3 — Steps */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Как купить Telegram Premium через Humo? Пошагово
            </h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Кратко:</strong> откройте{" "}
                <Link href="https://telegram.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>{" "}
                → выберите тариф → введите username → оплатите Humo в сумах → Premium активируется за 5 минут. Весь процесс — 5-7 минут.
              </p>
            </div>

            <p className="text-muted leading-relaxed mb-6">
              Подробно о каждом шаге. Даже если покупаете Premium впервые, процесс простой и понятный:
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  step: "1",
                  title: "Найдите @PremiumSendBot в Telegram",
                  desc: "В верхней строке поиска Telegram наберите @PremiumSendBot. Проверьте значок верифицированного бота — настоящий бот имеет такой значок. Откройте и нажмите /start.",
                },
                {
                  step: "2",
                  title: "Выберите тариф",
                  desc: "В меню бота 4 тарифа: 1, 3, 6 и 12 месяцев. Пробуете — 1 месяц (59 000) подойдёт. Постоянный пользователь — 12 месяцев (425 000) самый выгодный. Сбалансированный — 6 месяцев (235 000).",
                },
                {
                  step: "3",
                  title: "Введите username аккаунта",
                  desc: "После @ напишите Telegram username. Это ваш аккаунт или того, кому делаете подарок. Важно не ошибиться — Premium активируется именно на этом аккаунте.",
                },
                {
                  step: "4",
                  title: "Выберите способ оплаты — Humo",
                  desc: "На экране 4 варианта: Uzcard, Humo, Click, Payme. Нажмите \"Humo\". Бот объяснит следующий шаг — способ оплаты (P2P, Click или Payme).",
                },
                {
                  step: "5",
                  title: "Оплатите картой Humo",
                  desc: "Выполните оплату способом, который предложил бот. Самый простой — через Click или Payme (если карта подключена). Или прямой P2P перевод Humo. Комиссия 0%.",
                },
                {
                  step: "6",
                  title: "Premium активируется за 5 минут",
                  desc: "После подтверждения оплаты Premium включается на аккаунте автоматически. Бот пришлёт уведомление. Дополнительных подтверждений не нужно. При технической задержке может занять 10-15 минут.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-muted leading-relaxed">
              Весь процесс — 5-7 минут. После активации Premium в течение выбранного срока никаких повторных оплат не требуется. К концу срока выбираете новый тариф.
            </p>
          </section>

          {/* Mid CTA */}
          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Карта Humo готова?{" "}
                <strong className="text-white">@PremiumSendBot</strong> — оплатите 1, 3, 6 или 12 месяцев Premium в сумах. Активация за 5 минут.
              </p>
              <Link
                href="https://telegram.me/premiumsendbot"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                @PremiumSendBot — начать
              </Link>
            </div>
          </section>

          {/* Section 4 — Humo vs Uzcard */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Humo и Uzcard: есть ли разница для Premium?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              У многих пользователей есть обе карты. Или нужно выбрать — какая лучше? С точки зрения покупки Premium разница минимальна. Сравнение:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Параметр</div>
                <div className="text-center">Humo</div>
                <div className="text-center">Uzcard</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Цена Premium</div>
                <div className="text-center text-primary font-bold">Одинаковая</div>
                <div className="text-center text-primary font-bold">Одинаковая</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Оплата через Click</div>
                <div className="text-center">✅ Есть</div>
                <div className="text-center">✅ Есть</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Оплата через Payme</div>
                <div className="text-center">✅ Есть</div>
                <div className="text-center">✅ Есть</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">P2P перевод</div>
                <div className="text-center">✅ Есть</div>
                <div className="text-center">✅ Есть</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Комиссия</div>
                <div className="text-center text-green-600 font-bold">0%</div>
                <div className="text-center text-green-600 font-bold">0%</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Время активации</div>
                <div className="text-center">5 минут</div>
                <div className="text-center">5 минут</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center text-sm">
                <div className="font-medium">Покрытие банков</div>
                <div className="text-center">Большинство</div>
                <div className="text-center">Большинство</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Вывод:</strong> с точки зрения покупки Premium Humo и Uzcard полностью равны. Используйте ту карту, которая у вас есть. Можно использовать обе или менять.
            </p>

            <p className="text-muted leading-relaxed">
              Отдельные руководства по Uzcard:{" "}
              <Link href="/ru/maqolalar/1-oylik-telegram-premium-uzcard-orqali-sotib-olish" className="text-primary font-semibold hover:underline">1 месяц</Link>,{" "}
              <Link href="/ru/maqolalar/3-oylik-telegram-premium-uzcard-orqali" className="text-primary font-semibold hover:underline">3 месяца</Link>,{" "}
              <Link href="/ru/maqolalar/6-oylik-telegram-premium-uzcard-orqali" className="text-primary font-semibold hover:underline">6 месяцев</Link>,{" "}
              <Link href="/ru/maqolalar/12-oylik-telegram-premium-uzcard-orqali" className="text-primary font-semibold hover:underline">12 месяцев</Link>.
            </p>
          </section>

          {/* Section 5 — Safety */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Безопасна ли оплата картой Humo?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Беспокойство о безопасности оплаты — естественное. Механизм покупки Premium через Humo: <strong>оплата проходит внутри вашего банковского приложения</strong>. Бот или сайт не запрашивают данные карты (номер, пароль, SMS код, CVV).
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">🔐 Данные карты не сохраняются</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Оплата через P2P или Click/Payme — в обоих случаях номер карты и пароль остаются только в банковской системе. @PremiumSendBot никогда не видит и не сохраняет эти данные.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">💰 Гарантия возврата</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Если Premium не активируется по техническим причинам, оплата возвращается полностью. Это стандартное правило для любого реселлер-сервиса. На практике такие случаи редки — активация автоматическая и надёжная.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">📋 Чек как документ</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Humo, Click или Payme создают чёткий чек на каждый перевод. Это ваш юридический документ. При проблеме поддержка точно идентифицирует оплату по чеку.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">🛡️ Premium Send проверен временем</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Сервис работает много лет. Известен на местном рынке — тысячи пользователей успешно купили Premium через Humo и Uzcard. Доверие проявляется в стабильности процесса.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Кратко: оплата Premium через Humo безопасна на уровне ваших обычных банковских переводов. Дополнительного риска нет.
            </p>
          </section>

          {/* Section 6 — Issues */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Проблемы при оплате Humo и решения
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Большинство оплат проходят без проблем. Но иногда банковская система может создать небольшие препятствия. Самые частые ситуации:
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Не хватает лимита интернет-оплат</h3>
                <p className="text-sm text-muted leading-relaxed">
                  В некоторых банках суточный лимит интернет-оплат низкий — например, 200 000 сум. Для оплаты 425 000 сум лимита не хватит. <strong>Решение:</strong> в мобильном приложении Humo временно увеличьте суточный лимит интернет-оплат (обычно до 1 000 000 сум).
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Не приходит SMS код</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Может быть задержка сети или отключена SMS-Informing. <strong>Решение:</strong> переключитесь на push-уведомления для подтверждения, или позвоните банку и активируйте SMS-сервис.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Деньги списались, Premium не активировался</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Система может обрабатывать дольше обычного. <strong>Решение:</strong> подождите 10-15 минут. Если Premium всё ещё не активирован — отправьте чек оплаты в поддержку бота. После ручной проверки Premium включится или деньги вернутся.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Username введён неправильно</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Самая опасная ошибка. Premium активируется не на вашем, а на другом аккаунте. <strong>Решение:</strong> на шаге 3 проверяйте username дважды. При ошибке немедленно обратитесь в поддержку.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Банк отклоняет операцию</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Система безопасности может временно блокировать новые или крупные переводы. <strong>Решение:</strong> позвоните банку для подтверждения операции или переключитесь на другой способ оплаты (Click/Payme).
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Большинство проблем решается мгновенно. Поддержка бота помогает в любой ситуации и предлагает альтернативные варианты.
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
                  q: "Можно ли купить Telegram Premium через карту Humo?",
                  a: "Да, можно. В Premium Send через @PremiumSendBot можно купить Telegram Premium с оплатой картой Humo. Все тарифы (1, 3, 6, 12 месяцев). Оплата в сумах, без комиссии, активация за 5 минут.",
                },
                {
                  q: "Сколько стоит Telegram Premium через Humo?",
                  a: "Цены такие же, как через Uzcard: 1 месяц — 59 000 сум, 3 месяца — 175 000 сум, 6 месяцев — 235 000 сум, 12 месяцев — 425 000 сум. Способ оплаты не влияет на цену.",
                },
                {
                  q: "Безопасна ли оплата картой Humo?",
                  a: "Да. Оплата проходит стандартным P2P или через Click/Payme — данные карты не сохраняются. Если Premium не придёт, деньги возвращаются полностью. Механизм такой же, как с Uzcard.",
                },
                {
                  q: "Есть ли разница между Humo и Uzcard?",
                  a: "Для покупки Premium разницы нет — цены, процесс одинаковые. Используйте ту карту, которая у вас есть.",
                },
                {
                  q: "Через сколько активируется Premium после оплаты Humo?",
                  a: "Обычно через 2-5 минут после подтверждения оплаты Premium активируется автоматически. При технической задержке может занять 10-15 минут.",
                },
                {
                  q: "Можно ли оплатить картой Humo в официальном Telegram?",
                  a: "Нет. Официальный Telegram принимает только Visa, Mastercard, Google Pay и Apple Pay. Humo и Uzcard в этой системе не работают. Для местной карты нужен @PremiumSendBot.",
                },
                {
                  q: "Можно ли подарить Premium через Humo?",
                  a: "Да. Можно подарить Premium на 3, 6 или 12 месяцев картой Humo. Вводите username, оплачиваете — Premium активируется на этом аккаунте. По правилам Telegram 1-месячный подарок невозможен.",
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
                Premium через Humo — в цифрах
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">59K</p>
                  <p className="text-sm text-muted">самый дешёвый тариф (1 мес)</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">5 мин</p>
                  <p className="text-sm text-muted">время активации</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">0%</p>
                  <p className="text-sm text-muted">дополнительная комиссия</p>
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
                  Для держателей карты Humo Telegram Premium теперь доступен без препятствий. Все тарифы от 1 до 12 месяцев, оплата в сумах, активация за 5 минут.{" "}
                  <strong className="text-white">@PremiumSendBot</strong> — начните в несколько кликов. Пробуете — 1 месяц, постоянный пользователь — 12 месяцев.
                </p>
                <Link
                  href="https://telegram.me/premiumsendbot"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  Начать с Humo
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
