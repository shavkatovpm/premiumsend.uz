import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Telegram Premium самый дешёвый — где купить от 35 417 сум в месяц",
  description:
    "Где Telegram Premium дешевле всего в Узбекистане — в Premium Send от 35 417 сум в месяц. Сравнение с App Store, Fragment и реселлерами, оплата в сумах без скрытых комиссий.",
  keywords: [
    "telegram premium дешево",
    "самый дешёвый telegram premium",
    "telegram premium цена",
    "где купить telegram premium",
    "telegram premium узбекистан цена",
    "telegram premium в сумах",
    "telegram premium сравнение",
    "telegram premium дешевле всего",
    "PremiumSendBot",
    "telegram premium недорого",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/ru/maqolalar/telegram-premium-eng-arzon-qayerdan-sotib-olish",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/telegram-premium-eng-arzon-qayerdan-sotib-olish",
      ru: "https://premiumsend.uz/ru/maqolalar/telegram-premium-eng-arzon-qayerdan-sotib-olish",
    },
  },
  openGraph: {
    title: "Telegram Premium самый дешёвый — от 35 417 сум в месяц",
    description:
      "Telegram Premium по самой низкой цене — сравнение App Store, Fragment и реселлеров. В Premium Send от 35 417 сум в месяц, оплата в сумах, без скрытых комиссий.",
    url: "https://premiumsend.uz/ru/maqolalar/telegram-premium-eng-arzon-qayerdan-sotib-olish",
    type: "article",
    publishedTime: "2026-04-29",
  },
};

export default function ArticleEngArzonRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Telegram Premium самый дешёвый — в Узбекистане от 35 417 сум в месяц",
    description:
      "Где купить Telegram Premium дешевле всего — сравнение всех каналов (App Store, Fragment, реселлер-боты, Premium Send) с точным расчётом цены.",
    datePublished: "2026-04-29",
    dateModified: "2026-04-29",
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
      "https://premiumsend.uz/ru/maqolalar/telegram-premium-eng-arzon-qayerdan-sotib-olish",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Где Telegram Premium можно купить дешевле всего?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "В Узбекистане Telegram Premium дешевле всего через Premium Send (@PremiumSendBot). 12-месячный пакет — 425 000 сум, в месяц 35 417 сум. Это примерно на 30-40% дешевле, чем в App Store и Play Market, потому что нет валютной конвертации и комиссий платформ.",
        },
      },
      {
        "@type": "Question",
        name: "Почему в App Store Telegram Premium дороже?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "App Store и Google Play добавляют свою комиссию 15-30%, а курс конвертации с доллара на сум там выше официального банковского. В итоге один и тот же 1-месячный Premium в App Store обходится в 75 000-90 000 сум, а в Premium Send — 59 000 сум.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько стоит Telegram Premium на год?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "В Premium Send 12-месячный Telegram Premium — 425 000 сум. В пересчёте на месяц это 35 417 сум — на 40% дешевле помесячного тарифа. Один платёж и 12 месяцев спокойного пользования.",
        },
      },
      {
        "@type": "Question",
        name: "Какой тариф самый выгодный?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "По цене за месяц самый выгодный — 12-месячный пакет (35 417 сум/мес). По разовому платежу самый маленький — 1-месячный (59 000 сум). Если планируете пользоваться долго — 12-месячный тариф математически выгоднее всего.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли получить Telegram Premium бесплатно?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет. Telegram официально не выдаёт Premium бесплатно. Все предложения 'бесплатный Premium' в интернете — мошенничество: они используются для кражи аккаунтов, взлома карт или рассылки спама. Самый дешёвый и безопасный путь — через Premium Send в сумах от 59 000.",
        },
      },
      {
        "@type": "Question",
        name: "Почему цена в Premium Send такая низкая?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Premium Send работает напрямую через официальный механизм подарков Telegram и убирает комиссию платформ (App Store/Google Play 15-30%) и потери от валютной конвертации. Поэтому конечная цена для пользователя на 30-40% ниже.",
        },
      },
      {
        "@type": "Question",
        name: "Какой способ оплаты самый дешёвый?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "В Premium Send Uzcard, Humo, Click, Payme и Visa — цена одинаковая на любом способе оплаты. Никаких скрытых комиссий, никакой валютной конвертации. Оплата локальной картой в сумах — самый дешёвый и быстрый путь.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Главная",
        item: "https://premiumsend.uz/ru",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Статьи",
        item: "https://premiumsend.uz/ru/maqolalar",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Где Telegram Premium дешевле всего",
        item: "https://premiumsend.uz/ru/maqolalar/telegram-premium-eng-arzon-qayerdan-sotib-olish",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-muted">
        <Link href="/ru" className="hover:text-primary">
          Главная
        </Link>
        <span className="mx-2">/</span>
        <Link href="/ru/maqolalar" className="hover:text-primary">
          Статьи
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">
          Где Telegram Premium дешевле всего
        </span>
      </nav>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">
              Сравнение
            </span>
            <time className="text-xs text-muted" dateTime="2026-04-29">
              29 апреля 2026
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Где Telegram Premium дешевле всего: сравнение цен и каналов
          </h1>

          {/* TL;DR — AI/AEO snippet */}
          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-sm font-bold text-primary mb-2">КОРОТКИЙ ОТВЕТ</p>
            <p className="text-foreground leading-relaxed font-medium">
              В Узбекистане <strong>Telegram Premium дешевле всего</strong> через{" "}
              <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>{" "}
              — <strong>1 месяц 59 000 сум</strong>, в пересчёте на месяц самый выгодный{" "}
              <strong>12-месячный пакет — 35 417 сум/мес</strong> (425 000 сум). На 30-40% дешевле, чем в App Store и Play Market, без валютной конвертации и скрытых комиссий, оплата в сумах.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Telegram Premium ежегодно покупают миллионы людей, но в Узбекистане это сложнее, чем просто &laquo;нажать кнопку и оплатить&raquo;. Официальное приложение требует иностранную карту, App Store добавляет комиссию, курс доллара колеблется. В итоге одна и та же подписка может стоить от 30 000 до 100 000 сум в разных местах.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            В этой статье мы сравним все доступные каналы — App Store, Google Play, Fragment, реселлер-боты и Premium Send — в одной таблице с точными цифрами, чтобы показать самый дешёвый вариант. Без скрытых комиссий и будущих доплат.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 — Что такое "самый дешёвый" */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Что значит &laquo;самый дешёвый&raquo; — три уровня цены
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              На первый взгляд &laquo;дешёвый&raquo; — это просто маленькая цифра. Но в контексте Telegram Premium это многослойное понятие. Одна и та же подписка может выглядеть как 60 000 сум в одном месте и 75 000 сум в другом, но при оплате разница достигает 30 000 сум.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              На самом деле &laquo;самая дешёвая&raquo; цена состоит из трёх компонентов: <strong>заявленная цена</strong> (на сайте или в приложении), <strong>скрытые расходы</strong> (комиссии, курсовая разница, мелкие платежи) и <strong>цена времени</strong> (ожидание, решение проблем). Реально дешёвый вариант выигрывает по всем трём параметрам.
            </p>

            <div className="bg-section-alt rounded-xl p-5 mb-4">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Например:</strong> в App Store 1 месяц Telegram Premium на витрине стоит около 6 долларов — по курсу это 75 000-78 000 сум. Но при оплате добавляется реальный курс конвертации банка, и сумма уходит за 80 000 сум. В Premium Send — 59 000 сум, и это окончательная цена, без доплат.
              </p>
            </div>

            <p className="text-muted leading-relaxed">
              Поэтому, чтобы ответить на вопрос &laquo;где дешевле?&raquo;, нужно знать реальную итоговую цену каждого канала — именно такое сравнение в этой статье.
            </p>
          </section>

          {/* Section 2 — Сравнение каналов */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Где купить Telegram Premium дешевле всего? (таблица сравнения)
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Ниже — все практичные каналы покупки Telegram Premium из Узбекистана и их реальная итоговая цена. Цены актуальны на апрель 2026 года для тарифа на 1 месяц:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Канал</div>
                <div className="text-center">Цена 1 мес.</div>
                <div className="text-center">Оплата</div>
                <div className="text-center">Статус</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">App Store (iOS)</div>
                <div className="text-center text-red-600 font-bold">~78 000 сум</div>
                <div className="text-center text-muted">Иностр. карта</div>
                <div className="text-center text-red-600">+30% комиссия</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Google Play</div>
                <div className="text-center text-red-600 font-bold">~75 000 сум</div>
                <div className="text-center text-muted">Иностр. карта</div>
                <div className="text-center text-red-600">+25% комиссия</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Fragment.com</div>
                <div className="text-center text-amber-600 font-bold">~63 000 сум</div>
                <div className="text-center text-muted">TON / Crypto</div>
                <div className="text-center text-amber-600">Курсовой риск</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Другие реселлер-боты</div>
                <div className="text-center text-muted">65 000-72 000</div>
                <div className="text-center text-muted">Карта</div>
                <div className="text-center text-muted">Разное</div>
              </div>
              <div className="grid grid-cols-4 p-4 bg-primary-light/30 items-center text-sm">
                <div className="font-bold text-primary">Premium Send</div>
                <div className="text-center text-primary font-bold">59 000 сум</div>
                <div className="text-center text-green-600 font-medium">Uzcard, Humo, Click, Payme, Visa</div>
                <div className="text-center text-green-600 font-medium">Самый дешёвый ✓</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              Из таблицы видно: один и тот же продукт — Telegram Premium на 1 месяц — в разных каналах различается до 19 000 сум. Эта разница не случайна: она состоит из комиссии платформы (Apple, Google), валютной маржи и наценок сервиса.
            </p>
            <p className="text-muted leading-relaxed">
              Premium Send даёт самую низкую цену именно потому, что убирает эти промежуточные слои: прямая оплата в сумах, без комиссий, локальной картой. Подробнее о сравнении каналов — в статье про{" "}
              <Link href="/ru/maqolalar/6-oylik-telegram-premium-olishning-eng-yaxshi-usuli" className="text-primary font-semibold hover:underline">
                лучший способ получить Premium на 6 месяцев
              </Link>.
            </p>
          </section>

          {/* Section 3 — Тарифы */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Сколько стоит месяц подписки в тарифах 1, 3, 6 и 12 месяцев?
            </h2>

            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Короткий расчёт:</strong> 1 месяц Premium — 59 000 сум/мес. 12-месячный пакет — всего 35 417 сум/мес. На длинном тарифе вы экономите по 23 583 сум на каждый месяц — в год это 282 996 сум разницы.
              </p>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              В Premium Send четыре тарифа, но цена за месяц у них сильно разная. Чем длиннее тариф — тем меньше месячная цена. Таблица показывает это точно:
            </p>

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
                <div className="text-center text-green-600">~1%</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">6 месяцев</div>
                <div className="text-center">235 000 сум</div>
                <div className="text-center text-amber-600 font-medium">39 167 сум</div>
                <div className="text-center text-green-600 font-medium">33%</div>
              </div>
              <div className="grid grid-cols-4 p-4 bg-primary-light/30 items-center text-sm">
                <div className="font-bold text-primary">12 месяцев ⭐</div>
                <div className="text-center font-bold text-primary">425 000 сум</div>
                <div className="text-center font-bold text-primary">35 417 сум</div>
                <div className="text-center font-bold text-green-600">40%</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              Логика расчёта простая: если Premium нужен на короткий срок (попробовать, для конкретного проекта) —{" "}
              <Link href="/ru/maqolalar/1-oylik-telegram-premium-sotib-olish" className="text-primary font-semibold hover:underline">
                1-месячный тариф
              </Link>{" "}
              — самый маленький разовый расход. Но для длительного использования 12-месячный пакет однозначно выгоднее: год спокойного пользования и почти 24 000 сум экономии в месяц.
            </p>

            <p className="text-muted leading-relaxed">
              Важный момент: 6 и 12-месячные пакеты в официальном приложении Telegram{" "}
              <Link href="/ru/maqolalar/telegram-premium-nima" className="text-primary font-semibold hover:underline">
                вообще не существуют
              </Link>{" "}
              — Apple и Google работают только с месячной и годовой подпиской, и из-за курса App Store их цена ещё выше. Premium Send предлагает все четыре тарифа в сумах.
            </p>
          </section>

          {/* Section 4 — Почему 12 месяцев */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Почему 12-месячный пакет считается самым выгодным
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Правило &laquo;самый дешёвый — это самая маленькая цифра&raquo; здесь не работает. Если вы пользуетесь Telegram каждый день и Premium-функции вам нужны, считать стоит по году.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Экономия 282 996 сум в год</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Если каждый месяц брать тариф на 1 месяц, за год потратите 708 000 сум. В 12-месячном пакете — 425 000 сум. Разница очевидна: 282 996 сум.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Один платёж — год спокойствия</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Каждый месяц доставать карту и заново оплачивать — это время и внимание. На годовом тарифе платите один раз и потом весь год не думаете об этом.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Защита от курсовых колебаний</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Курс доллара меняется в течение года. Если оплатили в сумах один раз, любые изменения курса в следующие 12 месяцев вас не касаются.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Идеальный подарок</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Близкому человеку 12 месяцев Premium —{" "}
                  <Link href="/ru/maqolalar/12-oylik-telegram-premium-sovga-qilish" className="text-primary hover:underline">
                    подарок
                  </Link>{" "}
                  на год ежедневной маленькой радости. По 35 417 сум/мес это очень доступно.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Но 12-месячный пакет не всегда правильный выбор. Если Premium нужен на короткое время (например, проект на 2-3 месяца) или для пробы —{" "}
              <Link href="/ru/maqolalar/3-oylik-telegram-premium-sotib-olish" className="text-primary font-semibold hover:underline">
                3-месячный
              </Link>{" "}
              или{" "}
              <Link href="/ru/maqolalar/6-oylik-telegram-premium-sotib-olish" className="text-primary font-semibold hover:underline">
                6-месячный
              </Link>{" "}
              тарифы логичнее. Самый дешёвый — это тот, что соответствует вашей реальной длительности использования.
            </p>
          </section>

          {/* Mid CTA */}
          <section>
            <div className="bg-primary-light/40 border border-primary/20 rounded-2xl p-6 md:p-8 text-center">
              <p className="text-foreground text-lg leading-relaxed mb-4">
                Самый дешёвый Telegram Premium — напрямую от{" "}
                <strong>59 000 сум за 1 месяц</strong> или <strong>425 000 сум за 12 месяцев</strong> (35 417 сум/мес).
              </p>
              <Link
                href="https://t.me/premiumsendbot"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-2xl hover:shadow-xl transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                Перейти в бот и выбрать тариф
              </Link>
            </div>
          </section>

          {/* Section 5 — Step by step */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Пошагово: как купить самый дешёвый Premium
            </h2>

            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Короткий ответ:</strong> откройте{" "}
                <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">
                  @PremiumSendBot
                </Link>{" "}
                → выберите подходящий тариф (надолго — 12 месяцев) → введите username → оплатите Uzcard/Humo/Click/Payme в сумах → Premium активируется за 3-5 минут. Всего: 5 минут.
              </p>
            </div>

            <p className="text-muted leading-relaxed mb-6">
              Пять шагов ниже — чтобы получить самый дешёвый вариант без ошибок и быстро. Технических знаний не требуется, каждый шаг понятен:
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  step: "1",
                  title: "Определите длительность использования",
                  desc: "Решите, сколько месяцев вы будете пользоваться Premium. 1-2 месяца — тариф на 1 месяц (59 000 сум). 3-5 месяцев — 3-месячный (175 000). 6-12 месяцев — самый выгодный 12-месячный пакет (425 000, в месяц 35 417 сум).",
                },
                {
                  step: "2",
                  title: "Откройте @PremiumSendBot в Telegram",
                  desc: "В поиске Telegram наберите @PremiumSendBot. Появится официальный бот со значком. Нажмите /start — откроется меню со всеми тарифами.",
                },
                {
                  step: "3",
                  title: "Выберите подходящий тариф",
                  desc: "В меню выберите нужный срок. Самый низкий месячный — 12 месяцев (35 417 сум/мес). Самый маленький разовый платёж — 1 месяц (59 000 сум). Если хотите подарить — 3, 6 или 12 месяцев (1-месячный подарок по правилам Telegram невозможен).",
                },
                {
                  step: "4",
                  title: "Введите username и оплатите",
                  desc: "Введите Telegram username аккаунта, на который активируется Premium. Затем выберите способ оплаты: Uzcard, Humo, Click, Payme или Visa. Цена одинаковая на всех способах — без доплат.",
                },
                {
                  step: "5",
                  title: "За 3-5 минут Premium активен",
                  desc: "После подтверждения оплаты бот автоматически активирует Premium. В вашем профиле появится значок Premium и все функции сразу заработают. Если будет техническая задержка — поддержка в боте отвечает на русском.",
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
          </section>

          {/* Section 6 — Способы оплаты */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Способы оплаты: какой картой быстрее и дешевле?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Premium Send принимает все основные платёжные системы. Главное — независимо от того, каким способом вы оплатите, цена остаётся одинаковой: 1 месяц 59 000 сум, 12 месяцев 425 000 сум. Никаких скрытых комиссий или валютной разницы.
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Способ оплаты</div>
                <div className="text-center">Скорость</div>
                <div className="text-center">Кому подходит</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Uzcard</div>
                <div className="text-center text-green-600">2-3 минуты</div>
                <div className="text-center text-muted">Самая распространённая, есть у всех</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Humo</div>
                <div className="text-center text-green-600">2-3 минуты</div>
                <div className="text-center text-muted">Владельцы новых зарплатных карт</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Click</div>
                <div className="text-center text-green-600">1-2 минуты</div>
                <div className="text-center text-muted">У кого установлено приложение Click</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Payme</div>
                <div className="text-center text-green-600">1-2 минуты</div>
                <div className="text-center text-muted">У кого установлено приложение Payme</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center text-sm">
                <div className="font-medium">Visa</div>
                <div className="text-center text-green-600">2-3 минуты</div>
                <div className="text-center text-muted">У кого международная карта</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Практический совет: если у вас в телефоне установлено приложение Click или Payme — это самый быстрый вариант, потому что карта уже сохранена и оплата проходит в несколько касаний. Подробнее про оплату через{" "}
              <Link href="/ru/maqolalar/3-oylik-telegram-premium-uzcard-orqali" className="text-primary font-semibold hover:underline">
                Uzcard
              </Link>{" "}
              и другие способы — в отдельных руководствах.
            </p>
          </section>

          {/* Section 7 — Скрытые расходы */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Как избежать скрытых расходов?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              При покупке Telegram Premium есть каналы, которые выглядят &laquo;дёшево&raquo;, но в итоге стоят дороже. Самые частые скрытые расходы и как их избежать:
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Комиссия валютной конвертации</h3>
                <p className="text-sm text-muted leading-relaxed">
                  App Store, Google Play и иностранные реселлеры считают цену в долларах не по банковскому курсу, а по своему &laquo;внутреннему курсу&raquo;. Это обычно на 5-12% дороже. Решение: используйте сервис, принимающий оплату в сумах.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Комиссия платформы (Apple/Google)</h3>
                <p className="text-sm text-muted leading-relaxed">
                  При оплате из приложений iOS и Android Apple или Google берут 15-30% комиссию, и она включена в цену. Решение: оплачивайте через Telegram-бот напрямую — нет платформы, нет и комиссии.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Сервисный сбор (&laquo;processing fee&raquo;)</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Некоторые реселлер-боты пишут &laquo;65 000 сум&raquo; на старте, а в конце добавляют &laquo;сервисный сбор 5 000 сум&raquo;. Решение: пользуйтесь сервисом, где цена не меняется на протяжении всего процесса. В Premium Send заявленная цена — окончательная.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Автопродление (скрытая подписка)</h3>
                <p className="text-sm text-muted leading-relaxed">
                  App Store и Google Play автоматически продлевают подписку. Если забудете отменить, каждый месяц снимается новая сумма. Решение: в Premium Send каждая оплата разовая — без автопродления, после окончания срока подписка автоматически останавливается.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Главное преимущество Premium Send — простая и прозрачная цена. Сколько написано — столько и заплатите; сколько заплатили — столько Premium и работает. Никаких скрытых элементов.
            </p>
          </section>

          {/* Section 8 — Бесплатные варианты */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              &laquo;Бесплатный Telegram Premium&raquo; — это опасное мошенничество
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              В интернете много объявлений &laquo;Бесплатный Telegram Premium&raquo;, &laquo;Premium hack&raquo;, &laquo;mod APK&raquo;. Ни одно из них не работает — Telegram не выдаёт Premium бесплатно, а технический &laquo;hack&raquo; невозможен. За такими ссылками стоит другое:
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-red-200 shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Кража аккаунта (фишинг)</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Сайт &laquo;бесплатного Premium&raquo; просит логин и пароль. Если ввести — аккаунт украдут. Premium не придёт, аккаунт окажется у других.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-red-200 shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Взлом данных карты</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Под предлогом &laquo;подтверждения карты&raquo; просят 1 000 сум &laquo;тестовый платёж&raquo;. После ввода данных снимают всю остальную сумму.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-red-200 shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Вирусы в mod APK</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Скачанные APK &laquo;Telegram Premium MOD&raquo; читают пароли, SMS и банковские приложения на телефоне. Разовая &laquo;экономия&raquo; заканчивается опустошением банковского счёта.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Самый дешёвый реальный вариант — Premium Send за 59 000 сум за 1 месяц. Это цена одной чашки кофе в день — но без риска для аккаунта и карты. Подробнее о покупке на надёжной платформе — в{" "}
              <Link href="/ru/maqolalar/telegram-premium-nima" className="text-primary font-semibold hover:underline">
                руководстве по Telegram Premium
              </Link>.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">
              Часто задаваемые вопросы (FAQ)
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Где Telegram Premium можно купить дешевле всего?",
                  a: "В Узбекистане Telegram Premium дешевле всего через Premium Send (@PremiumSendBot). 12-месячный пакет — 425 000 сум, в месяц 35 417 сум. Это примерно на 30-40% дешевле, чем в App Store и Play Market, потому что нет валютной конвертации и комиссий платформ.",
                },
                {
                  q: "Почему в App Store Telegram Premium дороже?",
                  a: "App Store и Google Play добавляют свою комиссию 15-30%, а курс конвертации с доллара на сум там выше официального банковского. В итоге один и тот же 1-месячный Premium в App Store обходится в 75 000-90 000 сум, а в Premium Send — 59 000 сум.",
                },
                {
                  q: "Сколько стоит Telegram Premium на год?",
                  a: "В Premium Send 12-месячный Telegram Premium — 425 000 сум. В пересчёте на месяц это 35 417 сум — на 40% дешевле помесячного тарифа. Один платёж и 12 месяцев спокойного пользования.",
                },
                {
                  q: "Какой тариф самый выгодный?",
                  a: "По цене за месяц самый выгодный — 12-месячный пакет (35 417 сум/мес). По разовому платежу самый маленький — 1-месячный (59 000 сум). Если планируете пользоваться долго — 12-месячный тариф математически выгоднее всего.",
                },
                {
                  q: "Можно ли получить Telegram Premium бесплатно?",
                  a: "Нет. Telegram официально не выдаёт Premium бесплатно. Все предложения 'бесплатный Premium' в интернете — мошенничество: они используются для кражи аккаунтов, взлома карт или рассылки спама. Самый дешёвый и безопасный путь — через Premium Send в сумах от 59 000.",
                },
                {
                  q: "Почему цена в Premium Send такая низкая?",
                  a: "Premium Send работает напрямую через официальный механизм подарков Telegram и убирает комиссию платформ (App Store/Google Play 15-30%) и потери от валютной конвертации. Поэтому конечная цена для пользователя на 30-40% ниже.",
                },
                {
                  q: "Какой способ оплаты самый дешёвый?",
                  a: "В Premium Send Uzcard, Humo, Click, Payme и Visa — цена одинаковая на любом способе оплаты. Никаких скрытых комиссий, никакой валютной конвертации. Оплата локальной картой в сумах — самый дешёвый и быстрый путь.",
                },
                {
                  q: "Какой самый дешёвый вариант для подарка?",
                  a: "Для подарка самый маленький разовый платёж — 3 месяца (175 000 сум). Самый выгодный — 12 месяцев (425 000 сум): дарите на год, в месяц это всего 35 417 сум. Важно: по правилам Telegram 1-месячный подарок невозможен, доступны только 3, 6 и 12-месячные подарки.",
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 border border-card-border shadow-sm"
                >
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
                Premium Send — самый дешёвый путь в цифрах
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">35 417</p>
                  <p className="text-sm text-muted">сум/мес (в 12-месячном пакете)</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">40%</p>
                  <p className="text-sm text-muted">дешевле, чем в App Store</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">5 минут</p>
                  <p className="text-sm text-muted">от оплаты до активации</p>
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
                  В Узбекистане Telegram Premium дешевле всего через{" "}
                  <strong className="text-white">@PremiumSendBot</strong> — 1 месяц{" "}
                  <strong className="text-white">59 000 сум</strong>, 12 месяцев{" "}
                  <strong className="text-white">по 35 417 сум/мес</strong>. Оплата в сумах, без скрытых комиссий, активация за 5 минут.
                </p>
                <Link
                  href="https://t.me/premiumsendbot"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  Купить по самой низкой цене
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
