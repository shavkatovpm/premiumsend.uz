import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Telegram Premium через Payme — пошаговая покупка за 1-2 минуты",
  description:
    "Telegram Premium через Payme — от 59 000 до 425 000 сум. @PremiumSendBot, оплата по PIN/Face ID за 1-2 минуты, активация за 5 минут. Без комиссии, местная карта.",
  keywords: [
    "Telegram Premium Payme",
    "Telegram Premium через Payme",
    "купить Telegram Premium Payme",
    "Premium с Payme",
    "Telegram Premium в сумах Payme",
    "PremiumSendBot Payme",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/ru/maqolalar/telegram-premium-payme-orqali",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/telegram-premium-payme-orqali",
      ru: "https://premiumsend.uz/ru/maqolalar/telegram-premium-payme-orqali",
    },
  },
  openGraph: {
    title: "Telegram Premium через Payme — пошаговое руководство",
    description:
      "Через приложение Payme в сумах. 4 тарифа, оплата за 1-2 минуты, активация за 5 минут, 0% комиссии.",
    url: "https://premiumsend.uz/ru/maqolalar/telegram-premium-payme-orqali",
    type: "article",
    publishedTime: "2026-05-05",
  },
};

export default function ArticlePaymePillarRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Telegram Premium через Payme — пошаговое руководство по покупке",
    description:
      "Покупка Telegram Premium через приложение Payme в Узбекистане — все тарифы, цены и пошаговая инструкция.",
    datePublished: "2026-05-05",
    dateModified: "2026-05-05",
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
      "https://premiumsend.uz/ru/maqolalar/telegram-premium-payme-orqali",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Можно ли купить Telegram Premium через Payme?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. В @PremiumSendBot можно купить Telegram Premium через приложение Payme. Поддерживаются все тарифы (1, 3, 6, 12 месяцев). Оплата в сумах, без комиссии, в Payme занимает 1-2 минуты, Premium активируется за 5 минут.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько стоит Telegram Premium через Payme?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Цены такие же, как через другие способы оплаты: 1 месяц — 59 000 сум, 3 месяца — 175 000 сум, 6 месяцев — 235 000 сум, 12 месяцев — 425 000 сум. Способ оплаты (Uzcard, Humo, Click, Payme) на цену не влияет. Payme также не берёт дополнительной комиссии.",
        },
      },
      {
        "@type": "Question",
        name: "Payme или Click — что удобнее?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Оба практически равны. Payme — современнее по UI, многие используют его для коммунальных и такси. Click — чуть шире распространён. Технический механизм, скорость (1-2 минуты), цена (одинаковая) и безопасность (PCI DSS) — всё равное. Какое приложение у вас готово, то и выбирайте.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли купить Premium без приложения Payme?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. В @PremiumSendBot вместе с Payme доступны Click, Uzcard P2P, Humo и Visa. Если нет Payme, можно оплатить иначе — цена и срок Premium не изменятся. Установить Payme из Play Market или App Store бесплатно занимает 3-5 минут.",
        },
      },
      {
        "@type": "Question",
        name: "Безопасно ли платить через Payme?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Payme — официальная платёжная система, лицензированная Центральным банком Узбекистана, работает по международному стандарту PCI DSS. Данные карты сохраняются только на сервере Payme, бот их не видит. На каждую оплату выдаётся PDF-чек. Если Premium не пришёл, оплата возвращается полностью.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли оплатить через Payme в официальном приложении Telegram?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет. Официальное приложение Telegram принимает только Visa, Mastercard, Google Pay и Apple Pay. Payme в эту систему не подключён — это локальное приложение. Чтобы заплатить через Payme в Telegram, нужен местный посреднический сервис (например, @PremiumSendBot).",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли подарить Premium через Payme?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. 3, 6 и 12-месячные Telegram Premium можно подарить через Payme. Бот спрашивает username, вы оплачиваете через Payme — Premium активируется на этом аккаунте. По правилам Telegram 1-месячного подарка не существует — самый дешёвый подарок 3 месяца (175 000 сум).",
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
        name: "Telegram Premium через Payme",
        item: "https://premiumsend.uz/ru/maqolalar/telegram-premium-payme-orqali",
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
          Telegram Premium через Payme
        </span>
      </nav>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">
              Руководство
            </span>
            <time className="text-xs text-muted" dateTime="2026-05-05">
              5 мая 2026
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Telegram Premium через Payme — пошаговое руководство
          </h1>

          {/* TL;DR */}
          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>Краткий ответ:</strong> Купить Telegram Premium через Payme можно в{" "}
              <Link
                href="https://t.me/premiumsendbot"
                target="_blank"
                className="text-primary hover:underline"
              >
                @PremiumSendBot
              </Link>
              . Цены: <strong>1 месяц — 59 000 сум</strong>,{" "}
              <strong>3 месяца — 175 000 сум</strong>,{" "}
              <strong>6 месяцев — 235 000 сум</strong>,{" "}
              <strong>12 месяцев — 425 000 сум</strong>. В приложении Payme оплата 1-2 минуты, Premium активируется за 5 минут. Комиссия 0%.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Payme — одна из самых распространённых мобильных платёжных систем в Узбекистане. Через приложение с привязанной картой любой онлайн-платёж проходит за два касания. Покупка Telegram Premium сохраняет тот же опыт «быстро и просто» — никаких лишних шагов, не нужно вводить номер карты при каждой оплате.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Это pillar-руководство раскрывает весь процесс покупки Telegram Premium через Payme: чем удобен Payme, какие тарифы доступны, пошаговая инструкция, безопасность и часто задаваемые вопросы.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 — Why Payme */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Почему Payme — удобный локальный путь для Premium?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Payme — это не карта, а <strong>платёжная система и мобильное приложение</strong>. Главное отличие именно в этом: Uzcard и Humo — это карты (как Visa и Mastercard). Payme же — приложение поверх них: вы один раз привязываете Uzcard или Humo к Payme и потом не вводите карту при каждой оплате.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Это даёт важное преимущество при покупке Premium. Для большинства пользователей:
            </p>
            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li>
                <strong className="text-foreground">Не нужно вводить номер карты и CVV</strong> — приложение помнит данные
              </li>
              <li>
                <strong className="text-foreground">Вместо SMS — PIN или Face ID</strong> — быстрее, без ожидания
              </li>
              <li>
                <strong className="text-foreground">Оплата в одно касание</strong> — нажали ссылку бота, сумма заполнилась автоматически
              </li>
              <li>
                <strong className="text-foreground">PDF-чек сразу</strong> — легко сохранить и переслать
              </li>
              <li>
                <strong className="text-foreground">Современный UI</strong> — дизайн Payme многим пользователям понятен сразу
              </li>
            </ul>
            <p className="text-muted leading-relaxed mb-4">
              А в официальном приложении Telegram Payme не работает вообще — Telegram принимает только Visa, Mastercard, Google Pay и Apple Pay. Ни Payme, ни Click, ни Uzcard, ни Humo в эту систему не подключены. Поэтому нужен локальный посреднический сервис.
            </p>
            <div className="bg-section-alt rounded-xl p-5">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Коротко:</strong> Telegram не принимает Payme, но Payme — удобная и распространённая местная платёжная система. @PremiumSendBot объединяет эти два факта: вы платите через Payme, сервис активирует Premium.
              </p>
            </div>
          </section>

          {/* Section 2 — Pricing */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Telegram Premium через Payme — цены всех тарифов
            </h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Цены:</strong> через Payme принимаются все 4 тарифа. 1 месяц — <strong>59 000 сум</strong>, 3 месяца — <strong>175 000 сум</strong>, 6 месяцев — <strong>235 000 сум</strong>, 12 месяцев — <strong>425 000 сум</strong>. Payme не берёт дополнительной комиссии.
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
                <div className="text-center font-bold text-primary">
                  425 000 сум
                </div>
                <div className="text-center font-bold text-primary">
                  35 417 сум
                </div>
                <div className="text-center text-green-600 font-bold">39%</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Оплата через Payme никак не влияет на цену — нет скрытых сборов или курсовой разницы. Подробнее о тарифах:{" "}
              <Link
                href="/ru/maqolalar/telegram-premium-narxlari"
                className="text-primary font-semibold hover:underline"
              >
                сравнение тарифов
              </Link>
              .
            </p>
          </section>

          {/* Section 3 — Step by step */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Как купить Telegram Premium через Payme? Пошагово
            </h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Краткий ответ:</strong>{" "}
                <Link
                  href="https://t.me/premiumsendbot"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  @PremiumSendBot
                </Link>
                {" "}→ выбрать тариф → ввести username → выбрать <strong>Payme</strong> → откроется приложение Payme → подтвердить → Premium активируется за 5 минут.
              </p>
            </div>

            <p className="text-muted leading-relaxed mb-6">
              Каждый шаг подробно. Если приложение Payme установлено и карта привязана, весь процесс занимает 3-5 минут:
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  step: "1",
                  title: "Найдите @PremiumSendBot в Telegram",
                  desc: "Введите @PremiumSendBot в поиске Telegram. С галочкой подтверждения откроется официальный бот. Откройте и нажмите /start.",
                },
                {
                  step: "2",
                  title: "Выберите тариф",
                  desc: "Бот покажет 4 тарифа: 1, 3, 6 и 12 месяцев. Для пробы достаточно 1 месяца (59 000), для постоянного использования 12 месяцев (425 000) — самый выгодный.",
                },
                {
                  step: "3",
                  title: "Введите username получателя Premium",
                  desc: "Через @ напишите Telegram username. Это ваш аккаунт или того, кому делается подарок. При ошибке Premium активируется на другом аккаунте — проверьте дважды.",
                },
                {
                  step: "4",
                  title: "Выберите способ оплаты «Payme»",
                  desc: "Появятся 4 варианта: Uzcard, Humo, Click, Payme. Нажмите «Payme». Бот пришлёт ссылку или QR-код для оплаты.",
                },
                {
                  step: "5",
                  title: "Приложение Payme откроется автоматически",
                  desc: "После клика по ссылке телефон откроет приложение Payme и автоматически заполнит сумму. Не нужно вводить номер карты, пароль или CVV — всё сохранено в приложении.",
                },
                {
                  step: "6",
                  title: "Подтвердите PIN-кодом или Face ID",
                  desc: "В Payme подтверждаете оплату ранее установленным PIN-кодом (или Face ID/отпечатком). SMS-подтверждение не нужно. Платёж проходит мгновенно.",
                },
                {
                  step: "7",
                  title: "Premium активируется за 5 минут",
                  desc: "После подтверждения оплаты Premium автоматически включается на аккаунте. Бот пришлёт сообщение, в профиле появится значок Premium. При технической задержке — 10-15 минут.",
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
              Большинство пользователей Payme завершают весь процесс за 3-5 минут. После активации Premium повторных платежей в течение всего срока не требуется.
            </p>
          </section>

          {/* Mid CTA */}
          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Приложение Payme готово?{" "}
                <strong className="text-white">@PremiumSendBot</strong> — оплатите 1, 3, 6 или 12 месяцев Premium через Payme быстро. Платёж за 1-2 минуты.
              </p>
              <Link
                href="https://t.me/premiumsendbot"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                @PremiumSendBot — начать
              </Link>
            </div>
          </section>

          {/* Section 4 — Payme vs Click vs Uzcard */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Payme vs Click vs Uzcard P2P — какой способ удобнее?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              @PremiumSendBot предлагает четыре направления оплаты: Payme, Click, Uzcard P2P и Humo. Цена везде одинаковая — 175 000 сум (на примере 3 месяцев). Но скорость и удобство различаются:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Параметр</div>
                <div className="text-center">Payme</div>
                <div className="text-center">Click</div>
                <div className="text-center">Uzcard P2P</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Время оплаты</div>
                <div className="text-center text-green-600 font-bold">
                  1-2 мин
                </div>
                <div className="text-center text-green-600 font-bold">
                  1-2 мин
                </div>
                <div className="text-center">2-3 мин</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Ввод номера карты</div>
                <div className="text-center text-green-600">Нет</div>
                <div className="text-center text-green-600">Нет</div>
                <div className="text-center">Да</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Подтверждение</div>
                <div className="text-center">PIN/Face ID</div>
                <div className="text-center">PIN/Face ID</div>
                <div className="text-center">SMS-код</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Комиссия</div>
                <div className="text-center text-green-600 font-bold">0%</div>
                <div className="text-center text-green-600 font-bold">0%</div>
                <div className="text-center text-green-600 font-bold">0%</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Тип карты</div>
                <div className="text-center">Uzcard, Humo, Visa</div>
                <div className="text-center">Uzcard, Humo</div>
                <div className="text-center">Только эта карта</div>
              </div>
              <div className="grid grid-cols-4 p-4 items-center text-sm">
                <div className="font-medium">Кому подходит</div>
                <div className="text-center text-muted text-xs">
                  Есть Payme
                </div>
                <div className="text-center text-muted text-xs">
                  Есть Click
                </div>
                <div className="text-center text-muted text-xs">
                  Через приложение банка
                </div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Вывод:</strong> Payme и Click — почти равны. Оба дают опыт «через приложение». У большинства узбекских пользователей оба установлены. Payme — современнее по UI и принимает Visa-карты тоже. Click — чуть шире распространён. Что у вас готово, то и выбирайте —{" "}
              <Link
                href="/ru/maqolalar/telegram-premium-click-orqali"
                className="text-primary font-semibold hover:underline"
              >
                pillar-руководство Click
              </Link>
              .
            </p>
            <p className="text-muted leading-relaxed">
              Uzcard P2P — старый способ: ручной ввод карты, ожидание SMS. Работает, если нет Payme или Click, но приложения быстрее.
            </p>
          </section>

          {/* Section 5 — Safety */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Безопасно ли платить через Payme?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Payme — официальная платёжная система, лицензированная Центральным банком. Работает по стандарту PCI DSS, и миллионы пользователей применяют её ежедневно для коммунальных, такси, мобильной связи и онлайн-покупок. Для Telegram Premium механизм точно такой же — отдельных рисков нет.
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  🔐 Данные карты — на сервере Payme
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Номер карты, пароль и CVV хранятся только на безопасных серверах Payme. @PremiumSendBot их никогда не видит и не может получить. Бот видит только факт «оплата получена».
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  💰 Гарантия возврата
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  При технической ошибке, если Premium не активировался — оплата возвращается полностью. По номеру чека Payme возврат происходит быстро — стандартное правило реселлера.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  📋 PDF-чек Payme — юридический документ
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Payme выдаёт PDF-чек на каждую оплату. Он сохраняется в приложении и может быть перезагружен в любой момент. При проблеме поддержка по номеру чека сразу находит платёж.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  🛡️ Двухступенчатая защита
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Payme — PIN/Face ID + проверка баланса банка. Бот — подтверждение username + активация Premium. На каждом этапе контроль — если где-то проблема, процесс останавливается и выдаётся понятная ошибка.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Покупка Premium через Payme — настолько же безопасна, как ваш обычный платёж в Payme. Дополнительного технического риска нет. О механизмах выбора надёжного реселлера —{" "}
              <Link
                href="/ru/maqolalar/telegram-premium-xavfsiz-aldovdan-saqlanish"
                className="text-primary font-semibold hover:underline"
              >
                руководство по безопасности
              </Link>
              .
            </p>
          </section>

          {/* Section 6 — Common issues */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Проблемы при оплате через Payme и решения
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Большинство платежей Payme проходят без проблем — приложение давно отлажено и стабильно. Но иногда со стороны банка или сети могут быть мелкие препятствия:
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  Не хватает баланса в Payme
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Самая частая причина. <strong>Решение:</strong> проверьте карту в Payme — если баланс есть, приложение работает обычно. Если нет — выберите другую карту или пополните через Payme.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  Приложение Payme не открыло ссылку
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Возможно, телефон на старой версии или Payme требует обновления. <strong>Решение:</strong> обновите Payme в Play Market или App Store. После обновления нажмите ссылку бота заново.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  Деньги списались, но Premium не пришёл
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Система может обрабатывать чуть дольше. <strong>Решение:</strong> подождите 10-15 минут. Если не активировалось — отправьте номер чека Payme в поддержку бота. После ручной проверки Premium активируется или деньги возвращаются.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  Нет приложения Payme — как установить?
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Скачайте Payme бесплатно из Play Market (Android) или App Store (iPhone). Зарегистрируйтесь по номеру телефона (3 минуты), привяжите Uzcard или Humo — далее оплата в одно касание. <strong>Или:</strong> если Payme нет, переключитесь на Click или Uzcard в боте.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  Забыл PIN-код Payme
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  <strong>Решение:</strong> воспользуйтесь разделом «Восстановление PIN» в Payme. Восстановление через номер телефона занимает 5 минут. Восстановите и попробуйте оплатить заново.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Большинство проблем решается сразу. Поддержка бота помогает в любой ситуации и предлагает альтернативный путь (Click или Uzcard P2P).
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
                  q: "Можно ли купить Telegram Premium через Payme?",
                  a: "Да. В @PremiumSendBot Telegram Premium можно купить через Payme. Все тарифы (1, 3, 6, 12 месяцев) поддерживаются. Оплата в сумах, без комиссии, Premium активируется за 5 минут.",
                },
                {
                  q: "Сколько стоит Telegram Premium через Payme?",
                  a: "Цены такие же, как через другие способы оплаты: 1 месяц — 59 000 сум, 3 месяца — 175 000 сум, 6 месяцев — 235 000 сум, 12 месяцев — 425 000 сум. Payme не берёт дополнительной комиссии.",
                },
                {
                  q: "Payme или Click — что быстрее?",
                  a: "Оба подтверждаются за 1-2 минуты по PIN/Face ID. Техническая скорость равная. Payme — современнее по UI, удобен для большинства. Click — чуть шире распространён. Что установлено у вас, то и выбирайте.",
                },
                {
                  q: "Что делать, если нет приложения Payme?",
                  a: "Скачайте Payme бесплатно из Play Market или App Store (3-5 минут). Или в @PremiumSendBot выберите Click или Uzcard P2P — цена та же.",
                },
                {
                  q: "Безопасно ли платить через Payme?",
                  a: "Да. Payme — официальная платёжная система, лицензированная Центральным банком, по стандарту PCI DSS. Данные карты только на сервере Payme, бот их не видит. Если Premium не пришёл — деньги возвращаются.",
                },
                {
                  q: "Можно ли оплатить через Payme в официальном приложении Telegram?",
                  a: "Нет. Telegram принимает только Visa, Mastercard, Google Pay и Apple Pay. Payme там нет. Для локальной оплаты нужен посреднический сервис — например, @PremiumSendBot.",
                },
                {
                  q: "Можно ли подарить Premium через Payme?",
                  a: "Да. 3, 6 и 12-месячный Premium можно подарить через Payme. Бот спрашивает username, вы платите через Payme — Premium активируется на этом аккаунте. По правилам Telegram 1-месячного подарка не бывает.",
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
                Premium через Payme — в цифрах
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">1-2 мин</p>
                  <p className="text-sm text-muted">время оплаты</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">5 мин</p>
                  <p className="text-sm text-muted">активация Premium</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">0%</p>
                  <p className="text-sm text-muted">дополнительная комиссия</p>
                </div>
              </div>
            </div>
          </section>

          {/* Related cluster links */}
          <section>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-card-border">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Руководства по тарифам через Payme
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-4">
                Для пользователей Payme доступны все тарифы. Выберите подходящий срок:
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/ru/maqolalar/3-oylik-telegram-premium-payme-orqali"
                    className="text-primary font-semibold hover:underline"
                  >
                    3 месяца Premium через Payme (175 000 сум)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ru/maqolalar/telegram-premium-click-orqali"
                    className="text-primary font-semibold hover:underline"
                  >
                    Premium через Click (для сравнения)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ru/maqolalar/telegram-premium-humo-orqali"
                    className="text-primary font-semibold hover:underline"
                  >
                    Premium через карту Humo
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ru/maqolalar/telegram-premium-narxlari"
                    className="text-primary font-semibold hover:underline"
                  >
                    Сравнение цен Telegram Premium (4 тарифа)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ru/maqolalar/telegram-premium-eng-arzon-qayerdan-sotib-olish"
                    className="text-primary font-semibold hover:underline"
                  >
                    Где Telegram Premium дешевле всего
                  </Link>
                </li>
              </ul>
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
                  Приложение Payme готово? Оплатите Telegram Premium удобным локальным путём. 1, 3, 6 или 12 месяцев — в сумах, подтверждение в Payme за 1-2 минуты, активация за 5 минут.{" "}
                  <strong className="text-white">@PremiumSendBot</strong> — начать в несколько кликов.
                </p>
                <Link
                  href="https://t.me/premiumsendbot"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  Начать с Payme
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
