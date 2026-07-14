import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Купить Telegram Premium в сумах (UZS) — без валютной конвертации",
  description:
    "Купите Telegram Premium напрямую в сумах (UZS): Uzcard, Humo, Click, Payme или Visa. Без долларовой конвертации, скрытых курсов и комиссий платформы. 1 месяц 59 000 сум, 12 месяцев 425 000 сум.",
  keywords: [
    "telegram premium в сумах",
    "telegram premium uzs",
    "купить telegram premium в сумах",
    "telegram premium узбекские сумы",
    "telegram premium без конвертации",
    "telegram premium местная карта",
    "telegram premium без курса",
    "telegram premium узбекистан сум",
    "PremiumSendBot",
    "telegram premium uzcard humo click payme",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/ru/maqolalar/telegram-premium-somda-uzs-sotib-olish",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/telegram-premium-somda-uzs-sotib-olish",
      ru: "https://premiumsend.uz/ru/maqolalar/telegram-premium-somda-uzs-sotib-olish",
      "x-default": "https://premiumsend.uz/maqolalar/telegram-premium-somda-uzs-sotib-olish",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title: "Купить Telegram Premium в сумах — без валютной конвертации",
    description:
      "Telegram Premium напрямую в сумах. Без долларовой конвертации, валютного риска и скрытых комиссий. Принимаются Uzcard, Humo, Click, Payme, Visa.",
    url: "https://premiumsend.uz/ru/maqolalar/telegram-premium-somda-uzs-sotib-olish",
    type: "article",
    publishedTime: "2026-05-18",
  },
};

export default function ArticleSomdaUzsRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    image: "https://premiumsend.uz/og-image.png",
    headline:
      "Купить Telegram Premium в сумах (UZS) — без валютной конвертации",
    description:
      "Покупка Telegram Premium напрямую в сумах (UZS) — в отличие от долларового App Store и криптовалютного Fragment. Местная карта без валютного риска.",
    datePublished: "2026-05-18",
    dateModified: "2026-05-18",
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
      "https://premiumsend.uz/ru/maqolalar/telegram-premium-somda-uzs-sotib-olish",
    inLanguage: "ru",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Можно ли купить Telegram Premium только в сумах (UZS)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Premium Send (@PremiumSendBot) предлагает Telegram Premium напрямую в сумах: 1 месяц 59 000 сум, 3 месяца 175 000 сум, 6 месяцев 235 000 сум, 12 месяцев 425 000 сум. Никакая конвертация доллара или рубля не требуется — оплачиваете в сумах с местной карты.",
        },
      },
      {
        "@type": "Question",
        name: "Почему в App Store и Google Play Premium показывается в долларах?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "App Store и Google Play работают в глобальной системе цен. В магазине Узбекистана цена выходит в долларах или конвертированной по банковскому курсу. Банковский курс конвертации обычно на 5-12% выше официального курса ЦБ — то есть та же подписка автоматически становится дороже.",
        },
      },
      {
        "@type": "Question",
        name: "Есть ли скрытая разница курса в Premium Send?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет. В Premium Send цена объявлена в сумах, и при оплате списывается именно эта сумма. Никакая валютная конвертация, разница курса или 'сервисный сбор' не добавляются. С карты 59 000 сум — в боте тоже 59 000 сум.",
        },
      },
      {
        "@type": "Question",
        name: "Какие карты в сумах принимаются?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Uzcard, Humo, Click, Payme и Visa. Все работают в сумах. Uzcard и Humo — самые распространённые, выпускаются в каждом банке. Если установлены приложения Click или Payme, оплата проходит ещё быстрее. Visa — даже международная карта, но местная сумовая Visa в Premium Send принимается в сумах.",
        },
      },
      {
        "@type": "Question",
        name: "Если курс доллара вырастет, изменится ли цена Premium Send?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Если вы оплатили 12 месячный пакет в сумах, в течение следующих 365 дней никакое изменение курса вас не коснётся. Цены сайта установлены Premium Send в узбекских сумах — после разовой оплаты услуга работает полностью до конца года.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли купить Premium на Fragment в сумах?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет. Fragment.com — официальная торговая площадка Telegram — принимает только криптовалюту TON или международные карты (Visa/Mastercard). Узбекские Uzcard, Humo, Click, Payme на Fragment не работают. Поэтому для местного пользователя покупка в сумах возможна только через локальные сервисы вроде Premium Send.",
        },
      },
      {
        "@type": "Question",
        name: "Как купить Premium, если карта в долларах?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Premium Send рассчитан на сумовые карты. Если ваша карта в долларовом счёте, банк автоматически конвертирует в сумы во время оплаты — это создаёт дополнительную разницу конвертации. Самый дешёвый путь — оплата через сумовый Uzcard, Humo или сумовую Visa.",
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
        name: "Купить Telegram Premium в сумах",
        item: "https://premiumsend.uz/ru/maqolalar/telegram-premium-somda-uzs-sotib-olish",
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
          Telegram Premium в сумах
        </span>
      </nav>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">
              Руководство по оплате
            </span>
            <time className="text-xs text-muted" dateTime="2026-05-18">
              18 мая 2026
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Купить Telegram Premium в сумах (UZS) — без валютной конвертации
          </h1>

          {/* TL;DR */}
          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-sm font-bold text-primary mb-2">КОРОТКО</p>
            <p className="text-foreground leading-relaxed font-medium">
              Чтобы купить Telegram Premium <strong>только в сумах (UZS)</strong>, откройте{" "}
              <Link href="https://telegram.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>:{" "}
              <strong>1 месяц 59 000 сум</strong>, <strong>3 месяца 175 000</strong>,{" "}
              <strong>6 месяцев 235 000</strong>, <strong>12 месяцев 425 000 сум</strong>. Оплата через Uzcard, Humo, Click, Payme или Visa — без долларовой конвертации, валютного риска и комиссии платформы.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Поиск Telegram Premium в Узбекистане почти всегда упирается в одну проблему: в официальном приложении цена в долларах, на Fragment требуется криптовалюта TON, а App Store добавляет собственный курс конвертации. В итоге между объявленной ценой и реально списанной с карты суммой возникает разница в 10-15%.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            В этой статье покажем, как купить Telegram Premium <strong>напрямую в сумах</strong> — без какой-либо валютной конвертации, валютного риска и скрытых комиссий. Цены актуальны на май 2026 года.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 — Почему сум важен */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Почему оплата в сумах имеет значение?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              На первый взгляд вопрос «какая разница, в какой валюте платить?» кажется простым — с карты всё равно спишутся сумы. Но на практике на каждом этапе конвертации теряется небольшой процент. Эти проценты складываются и заметно повышают месячную цену.
            </p>

            <div className="bg-section-alt rounded-xl p-5 mb-4">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Пример:</strong> цена Telegram Premium 1 месяц в App Store — $4.99. По официальному курсу ЦБ это примерно 62 000 сум. Но Apple и банк добавляют свою маржу конвертации — в итоге с карты списывается 70 000-78 000 сум. В Premium Send напрямую <strong>59 000 сум</strong> — первое и итоговое число одинаковы.
              </p>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              Оплата в сумах даёт три больших преимущества:
            </p>

            <ul className="list-disc list-inside space-y-2 text-muted mb-4">
              <li><strong className="text-foreground">Точная цена:</strong> объявленная сумма = списанная сумма.</li>
              <li><strong className="text-foreground">Нет валютного риска:</strong> вне зависимости от того, доллар сегодня 12 600 или 13 200, цена Premium остаётся прежней.</li>
              <li><strong className="text-foreground">Никаких комиссий:</strong> банк или платформа не могут добавить свою «маржу конвертации».</li>
            </ul>

            <p className="text-muted leading-relaxed">
              Premium Send построен именно на этих трёх принципах: все тарифы указаны в сумах, оплата тоже в сумах. Это самый естественный и самый дешёвый путь для пользователя из Узбекистана.
            </p>
          </section>

          {/* Section 2 — Точные сумовые цены */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Сколько стоит Telegram Premium в сумах? (точные цены)
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Ниже все тарифы Premium Send в сумах. Цены прямые — не «конвертированные из долларов»:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Срок</div>
                <div className="text-center">Итого в сумах</div>
                <div className="text-center">В месяц</div>
                <div className="text-center">Статус</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">1 месяц</div>
                <div className="text-center font-bold">59 000 сум</div>
                <div className="text-center">59 000 сум</div>
                <div className="text-center text-muted">Разово</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">3 месяца</div>
                <div className="text-center font-bold">175 000 сум</div>
                <div className="text-center">58 333 сум</div>
                <div className="text-center text-green-600">Короткий срок</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">6 месяцев</div>
                <div className="text-center font-bold">235 000 сум</div>
                <div className="text-center text-amber-600">39 167 сум</div>
                <div className="text-center text-green-600">Экономия 33%</div>
              </div>
              <div className="grid grid-cols-4 p-4 bg-primary-light/30 items-center text-sm">
                <div className="font-bold text-primary">12 месяцев ⭐</div>
                <div className="text-center font-bold text-primary">425 000 сум</div>
                <div className="text-center font-bold text-primary">35 417 сум</div>
                <div className="text-center font-bold text-green-600">Экономия 40%</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              Все четыре тарифа указаны точным числом в сумах. Нет никаких дополнительных расчётов вида «$4.99 по банковскому курсу...».{" "}
              <Link href="/ru/maqolalar/telegram-premium-narxlari" className="text-primary font-semibold hover:underline">
                Сравнение тарифов
              </Link>{" "}
              описывает преимущества каждого срока подробно.
            </p>

            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5">
              <p className="text-foreground leading-relaxed">
                <strong>Напоминание:</strong> эти цены в сумах — разовый платёж. Автоматического продления (auto-renewal) нет — когда срок Premium заканчивается, если вы не оплатите снова, ничего не списывается. Это принципиально отличается от модели подписки в App Store/Google Play.
              </p>
            </div>
          </section>

          {/* Section 3 — Откуда берётся разница конвертации */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Откуда берётся разница конвертации и сколько она составляет?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              На других каналах цена Premium указана в долларах или криптовалюте. Прежде чем с карты спишутся сумы, проходит несколько уровней, и каждый берёт небольшой процент:
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Уровень 1: банковский курс конвертации</h3>
                <p className="text-sm text-muted leading-relaxed">
                  При оплате банк применяет свой «курс продажи» — обычно на 3-5% выше официального курса ЦБ. То есть оплата в $5 по официальному курсу — это 62 000 сум, но с карты спишется 64 500-65 100 сум.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Уровень 2: комиссия международной платёжной системы</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Visa и Mastercard при переводе платежа иностранному продавцу берут 1-3% международной комиссии. Некоторые банки указывают это отдельной строкой, другие включают в цену — в любом случае эти деньги уходят с карты клиента.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Уровень 3: комиссия платформы (App Store/Play)</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Apple и Google берут с продажи 15-30%, и эта комиссия включена Telegram в свою цену. Поэтому цена в App Store начинается выше официальной цены Telegram.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Уровень 4: конвертация крипты (для Fragment)</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Fragment.com — официальная торговая площадка Telegram, но требует TON или международную карту. Сумовые Uzcard, Humo, Click, Payme на Fragment не работают — для местного пользователя этот канал практически закрыт.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Premium Send не проходит ни через один из этих четырёх уровней: цена указана в сумах, оплата принимается в сумах, работает с местной картой. Поэтому итоговая цена равна объявленной.{" "}
              <Link href="/ru/maqolalar/nega-telegram-premium-app-store-play-market-qimmat" className="text-primary font-semibold hover:underline">
                Почему Premium дороже в App Store
              </Link>{" "}
              — отдельный разбор.
            </p>
          </section>

          {/* Mid CTA */}
          <section>
            <div className="bg-primary-light/40 border border-primary/20 rounded-2xl p-6 md:p-8 text-center">
              <p className="text-foreground text-lg leading-relaxed mb-4">
                Telegram Premium в сумах — <strong>3 месяца 175 000</strong>, <strong>6 месяцев 235 000</strong>,{" "}
                <strong>12 месяцев 425 000 сум</strong>. Никакого доллара или крипты не требуется.
              </p>
              <Link
                href="https://telegram.me/premiumsendbot"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-2xl hover:shadow-xl transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                Выбрать тариф в сумах в боте
              </Link>
            </div>
          </section>

          {/* Section 4 — Сравнение каналов */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Какие каналы принимают оплату в сумах?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Есть четыре основных способа купить Telegram Premium из Узбекистана, но отношение к оплате в сумах у них разное:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Канал</div>
                <div className="text-center">Валюта цены</div>
                <div className="text-center">Сумовая карта</div>
                <div className="text-center">Конвертация</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">App Store (iOS)</div>
                <div className="text-center text-red-600">USD</div>
                <div className="text-center text-red-600">Зарубежная</div>
                <div className="text-center text-red-600">+15-20%</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Google Play</div>
                <div className="text-center text-red-600">USD</div>
                <div className="text-center text-red-600">Зарубежная</div>
                <div className="text-center text-red-600">+12-18%</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Fragment.com</div>
                <div className="text-center text-red-600">TON / USD</div>
                <div className="text-center text-red-600">Не принимает</div>
                <div className="text-center text-red-600">Курс крипты</div>
              </div>
              <div className="grid grid-cols-4 p-4 bg-primary-light/30 items-center text-sm">
                <div className="font-bold text-primary">Premium Send</div>
                <div className="text-center text-primary font-bold">UZS (сум)</div>
                <div className="text-center text-green-600 font-medium">Все</div>
                <div className="text-center text-green-600 font-medium">0%</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              <strong>Важное замечание:</strong> Fragment — официальная торговая площадка Telegram, принимающая криптовалюту TON или международные Visa/Mastercard. Это не подходит для Uzcard, Humo, Click и Payme в Узбекистане — карту подключить не получится, поэтому для местного пользователя Fragment не является практичным путём.
            </p>
            <p className="text-muted leading-relaxed">
              Premium Send заполняет именно этот пробел: принимается любая сумовая карта или платёжное приложение, выпущенное в Узбекистане, и цена тоже сразу в сумах.
            </p>
          </section>

          {/* Section 5 — Способы оплаты в сумах */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Способы оплаты в сумах: какой картой можно платить?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Premium Send принимает пять основных способов оплаты — все в сумах. Не важно, в каком банке выпущена карта, лишь бы счёт был сумовой:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Способ оплаты</div>
                <div className="text-center">Скорость</div>
                <div className="text-center">Для кого удобно</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Uzcard</div>
                <div className="text-center text-green-600">2-3 минуты</div>
                <div className="text-center text-muted">Самая распространённая</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Humo</div>
                <div className="text-center text-green-600">2-3 минуты</div>
                <div className="text-center text-muted">Зарплатные карты</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Click</div>
                <div className="text-center text-green-600">1-2 минуты</div>
                <div className="text-center text-muted">Пользователи Click</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Payme</div>
                <div className="text-center text-green-600">1-2 минуты</div>
                <div className="text-center text-muted">Пользователи Payme</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center text-sm">
                <div className="font-medium">Visa (сумовая)</div>
                <div className="text-center text-green-600">2-3 минуты</div>
                <div className="text-center text-muted">Владельцы международных карт</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              И скорость, и цена практически одинаковы. Выбор способа оплаты — чисто вопрос удобства, в зависимости от того, какое приложение установлено на телефоне.{" "}
              <Link href="/ru/maqolalar/telegram-premium-humo-orqali" className="text-primary font-semibold hover:underline">
                Оплата через Humo
              </Link>,{" "}
              <Link href="/ru/maqolalar/telegram-premium-click-orqali" className="text-primary font-semibold hover:underline">
                оплата через Click
              </Link>{" "}
              и{" "}
              <Link href="/ru/maqolalar/telegram-premium-payme-orqali" className="text-primary font-semibold hover:underline">
                оплата через Payme
              </Link>{" "}
              подробно описаны в отдельных руководствах.
            </p>
          </section>

          {/* Section 6 — Пошагово */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Пошагово: как оплатить в сумах?
            </h2>

            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Коротко:</strong> откройте{" "}
                <Link href="https://telegram.me/premiumsendbot" target="_blank" className="text-primary hover:underline">
                  @PremiumSendBot
                </Link>{" "}
                → выберите срок → введите свой username → переведите указанную сумму с сумовой карты → Premium активируется за 3-5 минут. Общее время: 5 минут.
              </p>
            </div>

            <p className="text-muted leading-relaxed mb-6">
              Пять шагов ниже — полный процесс покупки в сумах. Ни на одном этапе не требуются доллары, крипта или зарубежная карта:
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  step: "1",
                  title: "Выберите срок в боте",
                  desc: "Напишите @PremiumSendBot в поиске Telegram и откройте бот. Нажмите /start — появится список тарифов 1, 3, 6 и 12 месяцев. Цены сразу в сумах: 59 000, 175 000, 235 000, 425 000.",
                },
                {
                  step: "2",
                  title: "Укажите, на какой username активировать Premium",
                  desc: "Введите @username аккаунта Telegram, для которого нужен Premium. Если для себя — свой username, если в подарок — username получателя (по правилам Telegram 1 месяц нельзя подарить, только 3, 6, 12 месяцев).",
                },
                {
                  step: "3",
                  title: "Выберите способ оплаты в сумах",
                  desc: "Выберите один из Uzcard, Humo, Click, Payme или Visa. Бот выдаст номер карты и точную сумму в сумах — например, '425 000 сум. Карта: 8600 XXXX XXXX XXXX'. Без дополнительных комиссий.",
                },
                {
                  step: "4",
                  title: "Переведите в сумах из приложения карты",
                  desc: "Если Uzcard или Humo — P2P перевод из мобильного приложения. Если Click/Payme — оплата из соответствующего приложения. Переводите в сумах, сумма списывается с карты ровно объявленным числом.",
                },
                {
                  step: "5",
                  title: "Premium активируется за 3-5 минут",
                  desc: "После подтверждения оплаты бот автоматически активирует Premium. В профиле указанного username появится значок Premium и все возможности заработают сразу.",
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
              Самый важный шаг — третий. Сумма на экране бота и списываемая с карты сумма всегда равны. Если при оплате показывается другая цифра (например, банк начинает считать в долларах) — это значит, ваша карта в долларовом счёте. Перейдите на сумовую карту.
            </p>
          </section>

          {/* Section 7 — Защита от валютного риска */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Если курс доллара изменится, какой будет цена Premium?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Этот вопрос особенно важен для долгосрочных тарифов. Если вы оплатили 12 месячный Premium в сумах, в следующем году услуга работает полностью независимо от того, что происходит:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Если доллар вырастет</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Если курс доллара поднимется с 13 200 до 14 000 — цена в App Store автоматически подорожает (так как привязана к доллару). Ваша же оплата 12 месяцев на 425 000 сум остаётся прежней, никакая дополнительная сумма не взимается.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Если доллар упадёт</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Наоборот, если доллар снизится — ничего не возвращается, так как вы платили в сумах и валютной операции не было. Но взамен вы получаете точность и спокойствие.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Если изменится курс ЦБ</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Тарифы Premium Send не привязаны к официальному курсу ЦБ. Цены установлены в сумах независимо — сайт может обновить прайс, но это не повлияет на вашу заранее оплаченную подписку.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Влияние инфляции</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Инфляция за 12 месяцев может быть любой. Но разовая оплата долгосрочного пакета в сумах — это шаг впереди инфляции. Экономия 282 996 сум в год прилагается.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Поэтому долгосрочный пакет в сумах — это не только «самый дешёвый путь», но и «самый стабильный». Вы становитесь независимы от будущих движений курса, а услуга полностью гарантирована.{" "}
              <Link href="/ru/maqolalar/12-oylik-telegram-premium-sotib-olish" className="text-primary font-semibold hover:underline">
                Руководство по 12 месячному Premium
              </Link>{" "}
              подробнее на эту тему.
            </p>
          </section>

          {/* Section 8 — Подарок в сумах */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Можно ли подарить Premium тоже в сумах?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Да — через Premium Send подарок (gift) также оформляется напрямую в сумах. Никакой валютной конвертации, и сумма, которую вы оплатили, переходит на аккаунт получателя как Premium без потерь.
            </p>

            <div className="bg-section-alt rounded-xl p-5 mb-4">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Важно:</strong> по официальному правилу Telegram 1 месяц Premium подарить нельзя — это ограничение установлено самим Telegram. Доступные варианты подарка:{" "}
                <Link href="/ru/maqolalar/3-oylik-telegram-premium-sovga-qilish" className="text-primary hover:underline">3 месяца (175 000 сум)</Link>,{" "}
                <Link href="/ru/maqolalar/6-oylik-telegram-premium-sovga-qilish" className="text-primary hover:underline">6 месяцев (235 000 сум)</Link>,{" "}
                или <Link href="/ru/maqolalar/12-oylik-telegram-premium-sovga-qilish" className="text-primary hover:underline">12 месяцев (425 000 сум)</Link>.
              </p>
            </div>

            <p className="text-muted leading-relaxed">
              Процесс подарка почти не отличается от покупки для себя: в боте выбираете срок, но в качестве username указываете @username получателя. Остальные шаги оплаты одинаковы — в сумах через Uzcard, Humo, Click или Payme.
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
                  q: "Можно ли купить Telegram Premium только в сумах (UZS)?",
                  a: "Да. Premium Send (@PremiumSendBot) предлагает Telegram Premium напрямую в сумах: 1 месяц 59 000 сум, 3 месяца 175 000 сум, 6 месяцев 235 000 сум, 12 месяцев 425 000 сум. Никакая конвертация доллара или рубля не требуется — оплачиваете в сумах с местной карты.",
                },
                {
                  q: "Почему в App Store и Google Play Premium показывается в долларах?",
                  a: "App Store и Google Play работают в глобальной системе цен. В магазине Узбекистана цена выходит в долларах или конвертированной по банковскому курсу. Банковский курс конвертации обычно на 5-12% выше официального курса ЦБ — то есть та же подписка автоматически становится дороже.",
                },
                {
                  q: "Есть ли скрытая разница курса в Premium Send?",
                  a: "Нет. В Premium Send цена объявлена в сумах, и при оплате списывается именно эта сумма. Никакая валютная конвертация, разница курса или 'сервисный сбор' не добавляются. С карты 59 000 сум — в боте тоже 59 000 сум.",
                },
                {
                  q: "Какие карты в сумах принимаются?",
                  a: "Uzcard, Humo, Click, Payme и Visa. Все работают в сумах. Uzcard и Humo — самые распространённые, выпускаются в каждом банке. Если установлены приложения Click или Payme, оплата проходит ещё быстрее. Visa — даже международная карта, но местная сумовая Visa в Premium Send принимается в сумах.",
                },
                {
                  q: "Если курс доллара вырастет, изменится ли цена Premium Send?",
                  a: "Если вы оплатили 12 месячный пакет в сумах, в течение следующих 365 дней никакое изменение курса вас не коснётся. Цены сайта установлены Premium Send в узбекских сумах — после разовой оплаты услуга работает полностью до конца года.",
                },
                {
                  q: "Можно ли купить Premium на Fragment в сумах?",
                  a: "Нет. Fragment.com — официальная торговая площадка Telegram — принимает только криптовалюту TON или международные карты (Visa/Mastercard). Узбекские Uzcard, Humo, Click, Payme на Fragment не работают. Поэтому для местного пользователя покупка в сумах возможна только через локальные сервисы вроде Premium Send.",
                },
                {
                  q: "Как купить Premium, если карта в долларах?",
                  a: "Premium Send рассчитан на сумовые карты. Если ваша карта в долларовом счёте, банк автоматически конвертирует в сумы во время оплаты — это создаёт дополнительную разницу конвертации. Самый дешёвый путь — оплата через сумовый Uzcard, Humo или сумовую Visa.",
                },
                {
                  q: "Можно ли подарить Premium тоже в сумах?",
                  a: "Да. Процесс подарка не отличается от покупки для себя: цена в сумах, оплата в сумах. Просто в качестве username указываете @username получателя. Напоминание: по правилу Telegram 1 месячный подарок недоступен — только 3, 6 и 12 месячные тарифы.",
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
                Premium Send: покупка в сумах в цифрах
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">100%</p>
                  <p className="text-sm text-muted">Оплата в сумах, без курса</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">5</p>
                  <p className="text-sm text-muted">Сумовых способов оплаты</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">0%</p>
                  <p className="text-sm text-muted">Комиссия конвертации</p>
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
                  Telegram Premium в сумах — напрямую через{" "}
                  <strong className="text-white">@PremiumSendBot</strong>. Нет доллара, крипты и валютного риска.{" "}
                  <strong className="text-white">3 месяца 175 000</strong>,{" "}
                  <strong className="text-white">6 месяцев 235 000</strong>,{" "}
                  <strong className="text-white">12 месяцев 425 000 сум</strong>.
                </p>
                <Link
                  href="https://telegram.me/premiumsendbot"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  Купить Premium в сумах
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
