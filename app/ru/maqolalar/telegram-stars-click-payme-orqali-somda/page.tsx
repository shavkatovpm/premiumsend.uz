import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Telegram Stars через Click и перевод на карту в сумах — полное руководство",
  description:
    "Купить Telegram Stars через Click или перевод на карту в сумах — StarsJoy.uz от 50 Stars за 12 000 сум, местная карта, без курсовой конвертации.",
  keywords: [
    "telegram stars click",
    "telegram stars в сумах",
    "stars через click",
    "stars перевод на карту",
    "stars uzbekistan в сумах",
    "starsjoy click",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/ru/maqolalar/telegram-stars-click-payme-orqali-somda",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/telegram-stars-click-payme-orqali-somda",
      ru: "https://premiumsend.uz/ru/maqolalar/telegram-stars-click-payme-orqali-somda",
      "x-default": "https://premiumsend.uz/maqolalar/telegram-stars-click-payme-orqali-somda",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title: "Telegram Stars через Click и перевод на карту в сумах",
    description:
      "Купить Stars через Click или переводом на карту в сумах — StarsJoy.uz от 50 Stars за 12 000 сум.",
    url: "https://premiumsend.uz/ru/maqolalar/telegram-stars-click-payme-orqali-somda",
    type: "article",
    publishedTime: "2026-05-07",
  },
};

export default function ArticleStarsPaymentRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    image: "https://premiumsend.uz/og-image.png",
    headline: "Telegram Stars через Click и перевод на карту в сумах — полное руководство",
    description: "Покупка Telegram Stars через Click и переводом на карту в сумах — пошаговое руководство.",
    datePublished: "2026-05-07",
    dateModified: "2026-05-07",
    author: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    publisher: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    mainEntityOfPage: "https://premiumsend.uz/ru/maqolalar/telegram-stars-click-payme-orqali-somda",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Можно ли купить Telegram Stars через Click в сумах?", acceptedAnswer: { "@type": "Answer", text: "Да. StarsJoy.uz (@starsjoybot) принимает оплату через приложение Click. В меню бота выбираете количество Stars (минимум 50 = 12 000 сум), затем выбираете путь Click или перевод на карту. Оплата в сумах — без курсовой конвертации. Stars поступают за 1-5 минут." } },
      { "@type": "Question", name: "Как купить Stars переводом на карту?", acceptedAnswer: { "@type": "Answer", text: "В @starsjoybot выбираете количество Stars, бот показывает данные платежа (номер карты и точную сумму). Вы из любого приложения (Uzcard, Humo, банковское приложение или Click/Payme с привязанной картой) переводите эту сумму на карту. Система определяет и Stars поступают на аккаунт." } },
      { "@type": "Question", name: "Цены Stars через Click и перевод на карту одинаковые?", acceptedAnswer: { "@type": "Answer", text: "Да. Способ оплаты (Click, перевод на карту) на цену Stars не влияет. 50 Stars 12 000 сум, 100 Stars 24 000, 250 Stars 60 000, 500 Stars 120 000, 1000 Stars 240 000 сум — одинаково в обоих путях. Линейный расчёт: 1 Star ≈ 240 сум." } },
      { "@type": "Question", name: "Если нет приложения Click, как купить Stars?", acceptedAnswer: { "@type": "Answer", text: "Выбирайте путь перевод на карту — это работает и без Click. Бот показывает номер карты и сумму, вы переводите через Uzcard, Humo, Payme или приложение банка. Или установите Click из Play Market/App Store бесплатно (3-5 минут)." } },
      { "@type": "Question", name: "Какова разница с App Store?", acceptedAnswer: { "@type": "Answer", text: "В App Store 1 Star ≈ 290 сум, по местному пути 240 сум — разница 17%. Плюс App Store требует зарубежную карту (Visa/Mastercard) и есть курсовой риск. Местный Click или перевод на карту в сумах — оптимальный вариант." } },
      { "@type": "Question", name: "За сколько Stars поступают на аккаунт?", acceptedAnswer: { "@type": "Answer", text: "После подтверждения оплаты Stars автоматически поступают за 1-5 минут. Через Click 1-2 минуты, через перевод на карту 2-5 минут. При технической задержке может занять 10-15 минут." } },
      { "@type": "Question", name: "Безопасна ли оплата через Click и перевод на карту?", acceptedAnswer: { "@type": "Answer", text: "Да. Click — официальная платёжная система, лицензированная Центральным банком. P2P-перевод через карту тоже идёт через сервер банка и так же безопасен. Данные карты в обоих случаях вообще не попадают на сервер бота. На каждый платёж выдаётся PDF-чек." } },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: "https://premiumsend.uz/ru" },
      { "@type": "ListItem", position: 2, name: "Статьи", item: "https://premiumsend.uz/ru/maqolalar" },
      { "@type": "ListItem", position: 3, name: "Stars через Click и перевод на карту", item: "https://premiumsend.uz/ru/maqolalar/telegram-stars-click-payme-orqali-somda" },
    ],
  };

  const howToSchema = {"@context":"https://schema.org","@type":"HowTo","name":"Telegram Stars через Click и перевод на карту в сумах — полное руководство","description":"Пошаговое руководство: Telegram Stars через Click и перевод на карту в сумах — полное руководство","step":[{"@type":"HowToStep","position":1,"name":"Откройте @starsjoybot в Telegram","text":"Введите @starsjoybot в поиске Telegram, откройте бот. Нажмите /start — откроется меню (UZ и RU)."},{"@type":"HowToStep","position":2,"name":"Выберите количество Stars","text":"Бот предлагает готовые пакеты или возможность ввести произвольное количество. Цена в сумах сразу видна."},{"@type":"HowToStep","position":3,"name":"Выберите путь оплаты: Click или перевод на карту","text":"Если приложение Click установлено — выбирайте Click, путь быстрее. Если нет — перевод на карту (Uzcard, Humo, приложение банка)."},{"@type":"HowToStep","position":4,"name":"Путь Click: оплата в приложении Click","text":"Через Click платёж подтверждается. PIN/Face ID за 1-2 минуты."},{"@type":"HowToStep","position":5,"name":"Путь перевода на карту: бот выдаёт карту и сумму","text":"Бот показывает номер карты и точную сумму. Вы через приложение Uzcard, Humo или Click/Payme с привязанной картой переводите эту сумму. Сумма — точно та."},{"@type":"HowToStep","position":6,"name":"Stars поступают на аккаунт за 1-5 минут","text":"После подтверждения Stars автоматически появляются. Telegram → Настройки → Stars — увидите баланс."}]};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-muted">
        <Link href="/ru" className="hover:text-primary">Главная</Link>
        <span className="mx-2">/</span>
        <Link href="/ru/maqolalar" className="hover:text-primary">Статьи</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">Stars через Click и перевод на карту</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">Руководство</span>
            <time className="text-xs text-muted" dateTime="2026-05-07">7 мая 2026</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Telegram Stars через Click и перевод на карту в сумах
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>Краткий ответ:</strong> из Узбекистана Telegram Stars можно купить через приложение Click или переводом на карту <strong>в сумах</strong> — через{" "}
              <Link href="https://t.me/starsjoybot" target="_blank" className="text-primary hover:underline">@starsjoybot</Link>{" "}
              (StarsJoy.uz). <strong>50 Stars от 12 000 сум</strong>, без курсовой конвертации. В Click быстро (1-2 минуты) или с банковской карты Uzcard/Humo переводом — результат одинаковый, Stars поступают за 1-5 минут.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Telegram Stars запущены в 2024 году, это внутренняя валюта для услуг в ботах и каналах. Из Узбекистана самый удобный путь — через местную карту в сумах. App Store требует зарубежную карту и на 17% дороже. StarsJoy.uz даёт два быстрых пути: Click или перевод на карту.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Два пути оплаты — Click и перевод на карту</h2>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Путь</div>
                <div className="text-center">Время</div>
                <div className="text-center">Использование</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm bg-primary-light/20">
                <div className="font-bold text-primary">Приложение Click</div>
                <div className="text-center text-green-600 font-bold">1-2 минуты</div>
                <div className="text-center text-muted text-xs">Click установлен</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center text-sm">
                <div className="font-medium">Перевод на карту (Uzcard, Humo)</div>
                <div className="text-center">2-5 минут</div>
                <div className="text-center text-muted text-xs">Приложение банка</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Оба в сумах</strong> — без курсовой конвертации. Цены одинаковые. Stars поступают за 1-5 минут. Главное отличие — какое приложение вам удобнее.
            </p>

            <div className="bg-section-alt rounded-xl p-5">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Технический механизм:</strong> StarsJoy показывает детали платежа после выбора количества Stars в боте. На пути Click переходите в Click и оплачиваете. На пути перевода на карту бот показывает номер карты и точную сумму, вы переводите из любого приложения. Система определяет по сумме и карте и зачисляет Stars.
              </p>
            </div>
          </section>

          {/* Section 2 — Pricing */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Пакеты Stars и цены (одинаковые для Click и перевода)</h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Линейный расчёт:</strong> 1 Star = 240 сум. Минимальный пакет — 50 Stars (12 000 сум). Способ оплаты на цену не влияет.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Пакет</div>
                <div className="text-center">Цена (сум)</div>
                <div className="text-center">Типичное использование</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm bg-primary-light/20">
                <div className="font-bold text-primary">50 Stars (минимум)</div>
                <div className="text-center font-bold text-primary">12 000 сум</div>
                <div className="text-center text-muted">Tip, стикер, тест</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">100 Stars</div>
                <div className="text-center">24 000 сум</div>
                <div className="text-center text-muted">Функция бота, мелкий donate</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">250 Stars</div>
                <div className="text-center">60 000 сум</div>
                <div className="text-center text-muted">Средний donate</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">500 Stars</div>
                <div className="text-center">120 000 сум</div>
                <div className="text-center text-muted">Около Premium 3 мес. gift</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">1000 Stars</div>
                <div className="text-center">240 000 сум</div>
                <div className="text-center text-muted">Premium 6-12 мес. gift</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center text-sm">
                <div className="font-medium">2500-5000 Stars</div>
                <div className="text-center">600 000 - 1 200 000 сум</div>
                <div className="text-center text-muted">Крупный donate, business</div>
              </div>
            </div>
          </section>

          {/* Section 3 — Step by step */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Покупка Stars — пошагово</h2>
            <div className="space-y-4 mb-6">
              {[
                { step: "1", title: "Откройте @starsjoybot в Telegram", desc: "Введите @starsjoybot в поиске Telegram, откройте бот. Нажмите /start — откроется меню (UZ и RU)." },
                { step: "2", title: "Выберите количество Stars", desc: "Бот предлагает готовые пакеты или возможность ввести произвольное количество. Цена в сумах сразу видна." },
                { step: "3", title: "Выберите путь оплаты: Click или перевод на карту", desc: "Если приложение Click установлено — выбирайте Click, путь быстрее. Если нет — перевод на карту (Uzcard, Humo, приложение банка)." },
                { step: "4", title: "Путь Click: оплата в приложении Click", desc: "Через Click платёж подтверждается. PIN/Face ID за 1-2 минуты." },
                { step: "5", title: "Путь перевода на карту: бот выдаёт карту и сумму", desc: "Бот показывает номер карты и точную сумму. Вы через приложение Uzcard, Humo или Click/Payme с привязанной картой переводите эту сумму. Сумма — точно та." },
                { step: "6", title: "Stars поступают на аккаунт за 1-5 минут", desc: "После подтверждения Stars автоматически появляются. Telegram → Настройки → Stars — увидите баланс." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{item.step}</div>
                  <div>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Mid CTA */}
          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Для покупки Stars откройте{" "}
                <strong className="text-white">@starsjoybot</strong>. От 50 Stars за 12 000 сум, через Click или перевод на карту — за 1-5 минут.
              </p>
              <Link href="https://t.me/starsjoybot" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                StarsJoy бот — начать
              </Link>
            </div>
          </section>

          {/* Section 4 — Click vs card */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Click и перевод на карту — что быстрее?</h2>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Критерий</div>
                <div className="text-center">Приложение Click</div>
                <div className="text-center">Перевод на карту</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Время</div>
                <div className="text-center text-green-600 font-bold">1-2 минуты</div>
                <div className="text-center">2-5 минут</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Ввод карты</div>
                <div className="text-center text-green-600">Нет (сохранена)</div>
                <div className="text-center">Да (карта получателя)</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Подтверждение</div>
                <div className="text-center">PIN/Face ID</div>
                <div className="text-center">PIN/SMS-код</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Нужное приложение</div>
                <div className="text-center">Click</div>
                <div className="text-center">Банк или Click/Payme</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center text-sm">
                <div className="font-medium">Комиссия</div>
                <div className="text-center text-green-600 font-bold">0%</div>
                <div className="text-center text-green-600 font-bold">0%</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">Вывод:</strong> если Click готов — это самый быстрый путь. Иначе перевод на карту так же удобен (большинство пользователей пользуются банковским приложением).
            </p>
          </section>

          {/* Section 5 — Local vs App Store */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Местный путь vs App Store / официальное приложение Telegram</h2>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Критерий</div>
                <div className="text-center">Местный (Click/карта)</div>
                <div className="text-center">App Store / Telegram</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Цена 1 Star</div>
                <div className="text-center text-green-600 font-bold">~240 сум</div>
                <div className="text-center text-red-600">~290 сум</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Тип карты</div>
                <div className="text-center text-green-600">Местная (Uzcard, Humo)</div>
                <div className="text-center text-red-600">Visa / Mastercard</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Валюта</div>
                <div className="text-center text-green-600 font-bold">Сум</div>
                <div className="text-center text-red-600">USD</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Курсовой риск</div>
                <div className="text-center text-green-600">Нет</div>
                <div className="text-center text-red-600">Есть</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center text-sm">
                <div className="font-medium">Поддержка UZ/RU</div>
                <div className="text-center text-green-600">Есть</div>
                <div className="text-center text-red-600">Нет</div>
              </div>
            </div>
            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">Вывод:</strong> местный путь (Click или перевод на карту) — на 17% дешевле, нужна только местная карта, нет курсового риска.
            </p>
          </section>

          {/* Section 6 — Safety */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Безопасна ли оплата через Click и перевод на карту?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Да. Click — лицензирован Центральным банком, по стандарту PCI DSS. Перевод на карту тоже идёт через сервер банка и так же безопасен.
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">🔐 Данные карты только на сервере платёжной системы</h3>
                <p className="text-sm text-muted leading-relaxed">Бот вообще не видит номер карты, пароль и CVV. Они хранятся только на сервере Click или банка.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">📋 PDF-чек на каждую оплату</h3>
                <p className="text-sm text-muted leading-relaxed">Click и банк выдают PDF-чек. Хранится в приложении и при проблеме поддержка по номеру чека сразу находит платёж.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">💰 Если Stars не пришли — деньги возвращаются</h3>
                <p className="text-sm text-muted leading-relaxed">При технической ошибке оплата возвращается полностью. Это стандартное правило реселлера.</p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              О защите от мошеннических ботов —{" "}
              <Link href="/ru/maqolalar/telegram-premium-xavfsiz-aldovdan-saqlanish" className="text-primary font-semibold hover:underline">руководство по безопасности</Link>{" "}
              (для Premium, но также применимо к Stars).
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Часто задаваемые вопросы</h2>
            <div className="space-y-4">
              {[
                { q: "Можно ли купить Telegram Stars через Click в сумах?", a: "Да. StarsJoy.uz (@starsjoybot) принимает оплату через Click. Выбираете Stars, подтверждаете в Click. В сумах — без курсовой конвертации." },
                { q: "Как купить Stars переводом на карту?", a: "Бот показывает номер карты и точную сумму, вы из любого приложения (Uzcard, Humo, банк) переводите эту сумму на карту. Система определяет и Stars поступают." },
                { q: "Цены Stars через Click и перевод одинаковые?", a: "Да. Способ оплаты на цену не влияет. 50 Stars 12 000 сум, 1 Star ≈ 240 сум — одинаково на обоих путях." },
                { q: "Если нет приложения Click, как купить Stars?", a: "Выбирайте перевод на карту — это работает и без Click. Или установите Click из Play Market/App Store бесплатно (3-5 минут)." },
                { q: "Какова разница с App Store?", a: "В App Store 1 Star ≈ 290 сум, по местному 240 — разница 17%. Плюс зарубежная карта и курсовой риск. Местный путь предпочтительнее." },
                { q: "За сколько Stars поступают?", a: "Через Click 1-2 минуты, переводом на карту 2-5 минут. При технической задержке — до 10-15 минут." },
                { q: "Безопасна ли оплата?", a: "Да. Click — лицензирован Центральным банком. Перевод на карту через банк тоже безопасен. Данные карты вообще не попадают на сервер бота." },
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
              <h3 className="text-lg font-bold text-foreground mb-4 text-center">Stars Click или перевод на карту — в цифрах</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">240</p>
                  <p className="text-sm text-muted">сум / Star</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">1-5 мин</p>
                  <p className="text-sm text-muted">поступление</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">17%</p>
                  <p className="text-sm text-muted">дешевле, чем App Store</p>
                </div>
              </div>
            </div>
          </section>

          {/* Related */}
          <section>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-card-border">
              <h3 className="text-lg font-bold text-foreground mb-4">Связанные статьи</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/ru/maqolalar/telegram-stars-ozbekistondan-sotib-olish" className="text-primary font-semibold hover:underline">Как купить Stars в Узбекистане (общее)</Link></li>
                <li><Link href="/ru/maqolalar/telegram-stars-nima" className="text-primary font-semibold hover:underline">Что такое Telegram Stars и где они применяются</Link></li>
                <li><Link href="/ru/maqolalar/telegram-stars-vs-telegram-premium" className="text-primary font-semibold hover:underline">Stars или Premium: что выбрать</Link></li>
                <li><Link href="/ru/maqolalar/telegram-premium-xavfsiz-aldovdan-saqlanish" className="text-primary font-semibold hover:underline">Защита от мошеннических ботов</Link></li>
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
                  Click или перевод на карту — два быстрых пути, оба в сумах, оба безопасны. Что вам удобнее, то и выбирайте.{" "}
                  <strong className="text-white">@starsjoybot</strong> — от 50 Stars за 12 000 сум.
                </p>
                <Link href="https://t.me/starsjoybot" target="_blank" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  Открыть StarsJoy бот
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
