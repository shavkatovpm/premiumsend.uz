import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Как купить Telegram Stars в Узбекистане — в сумах, за 5 минут",
  description:
    "Купить Telegram Stars в Узбекистане в сумах — через StarsJoy.uz от 50 Stars за 12 000 сум, оплата Click и банковской картой. На 17% дешевле App Store, без курсовых рисков.",
  keywords: [
    "купить telegram stars узбекистан",
    "telegram stars в сумах",
    "stars в узбекистане",
    "stars через click",
    "starsjoy",
    "starsjoybot",
    "купить stars онлайн",
    "telegram stars uzbekistan",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/ru/maqolalar/telegram-stars-ozbekistondan-sotib-olish",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/telegram-stars-ozbekistondan-sotib-olish",
      ru: "https://premiumsend.uz/ru/maqolalar/telegram-stars-ozbekistondan-sotib-olish",
      "x-default": "https://premiumsend.uz/maqolalar/telegram-stars-ozbekistondan-sotib-olish",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title: "Как купить Telegram Stars в Узбекистане — в сумах, за 5 минут",
    description:
      "Через StarsJoy.uz от 50 Stars за 12 000 сум, через Click и карту. На 17% дешевле App Store, без валюты.",
    url: "https://premiumsend.uz/ru/maqolalar/telegram-stars-ozbekistondan-sotib-olish",
    type: "article",
    publishedTime: "2026-05-05",
  },
};

export default function ArticleStarsBuyRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    image: "https://premiumsend.uz/og-image.png",
    headline:
      "Как купить Telegram Stars в Узбекистане — в сумах, за 5 минут",
    description:
      "Пошаговое руководство по покупке Telegram Stars из Узбекистана: цены, способы оплаты, сравнение каналов и безопасность.",
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
      "https://premiumsend.uz/ru/maqolalar/telegram-stars-ozbekistondan-sotib-olish",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Как купить Telegram Stars в Узбекистане?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Самый простой путь — через локальный сервис StarsJoy.uz. Откройте в Telegram бот @starsjoybot, нажмите /start, выберите в меню раздел Stars, укажите нужное количество (минимум 50 Stars = 12 000 сум) и оплатите через Click или переводом на банковскую карту. Через несколько минут Stars поступят на аккаунт. Не нужна зарубежная карта или валютная конвертация.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько стоят Telegram Stars в Узбекистане?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "В местных сервисах 1 Star ≈ 240 сум. Минимальный пакет 50 Stars — 12 000 сум. Большие пакеты: 100 Stars 24 000, 250 Stars 60 000, 500 Stars 120 000, 1000 Stars 240 000, 2500 Stars 600 000, 5000 Stars 1 200 000 сум. В App Store ~290 сум/star, во Fragment ~260 сум/star — местный путь дешевле на 17-21%.",
        },
      },
      {
        "@type": "Question",
        name: "Какие способы оплаты доступны для Stars?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "В StarsJoy.uz два основных пути: Click (по PIN/Face ID за 1-2 минуты) и перевод на банковскую карту через Uzcard или Humo. Всё в сумах — без курсового риска. Официальное приложение Telegram не принимает локальные карты и Click — нужны Visa/Mastercard или Google/Apple Pay.",
        },
      },
      {
        "@type": "Question",
        name: "За сколько Stars поступают на аккаунт?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "После подтверждения оплаты Stars автоматически зачисляются за 1-5 минут. Click и перевод на карту обычно срабатывают мгновенно. При технической задержке может занять 10-15 минут. Stars не имеют срока действия — лежат на балансе сколько угодно.",
        },
      },
      {
        "@type": "Question",
        name: "Чем отличается покупка через App Store или официальное приложение Telegram?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "App Store/Play Market требуют зарубежную карту (Visa, Mastercard), цена в валюте (1 Star ≈ $0.0199), есть курсовой риск. Официальное приложение Telegram — те же ограничения. Местный путь — оплата в сумах через Click или Uzcard/Humo, цена на 17% дешевле. Техническая безопасность одинаково высокая, но по цене и удобству местный путь предпочтительнее.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли подарить Premium через Stars?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. С 2024 года через Stars можно дарить Premium. Но обычно это дороже: для 3-месячного Premium gift нужно ~1000 Stars (240 000 сум), для 6 месяцев ~1500, для 12 месяцев ~2500. Если цель — только подарить Premium, прямая покупка в сумах часто выгоднее: 3 месяца 175 000, 6 месяцев 235 000, 12 месяцев 425 000 сум.",
        },
      },
      {
        "@type": "Question",
        name: "Какие риски при покупке Stars?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Главный риск — выбор недобросовестного продавца. Мошеннические боты забирают деньги и не дают Stars. Защита: оплата только через официальную платёжную систему (Click/Payme), наличие PDF-чека, связка сайт-бот. Сама платёжная система (Click, перевод на карту) — лицензирована Центробанком и безопасна. Главная осторожность — в выборе бота.",
        },
      },
      {
        "@type": "Question",
        name: "С какого пакета начать тестирование?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "50 Stars (12 000 сум) — минимальный пакет, идеально для теста. На эту сумму можно проверить весь процесс (бот, оплата, активация). Если всё устроит, в следующий раз купите 250 или 500 Stars — при большом пакете цена за каждый Star остаётся той же (линейная), просто меньше операций.",
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
        name: "Как купить Telegram Stars в Узбекистане",
        item: "https://premiumsend.uz/ru/maqolalar/telegram-stars-ozbekistondan-sotib-olish",
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
          Как купить Telegram Stars в Узбекистане
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
            Как купить Telegram Stars в Узбекистане
          </h1>

          {/* TL;DR */}
          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>Краткий ответ:</strong> Самый удобный способ купить Telegram Stars в Узбекистане — через{" "}
              <Link
                href="https://telegram.me/starsjoybot"
                target="_blank"
                className="text-primary hover:underline"
              >
                @starsjoybot
              </Link>{" "}
              в локальном сервисе{" "}
              <Link
                href="https://starsjoy.uz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                StarsJoy.uz
              </Link>
              . От <strong>50 Stars за 12 000 сум</strong> (1 Star ≈ 240 сум), оплата через Click или переводом на банковскую карту. В сумах, без курсового риска. Stars поступают за 1-5 минут. На ~17% дешевле, чем в App Store и официальном приложении Telegram.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Telegram Stars — внутренняя валюта, введённая в 2024 году. Ими оплачивают стикеры, AI-функции ботов, donate и подарки Premium. Главный вопрос для пользователя из Узбекистана — &laquo;где взять, сколько стоит и безопасно ли?&raquo;. В статье — все ответы с цифрами.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Официальное приложение Telegram не принимает местные карты — нужны Visa, Mastercard или Google/Apple Pay. App Store и Play Market — те же ограничения, плюс цена выше на 17%. Местные реселлеры закрывают этот пробел: оплата в сумах, локальная карта и Click без валюты.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 — Quick answer */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Как купить Telegram Stars в Узбекистане?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Краткий ответ — в несколько кликов. Полный процесс выглядит так:
            </p>

            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                Откройте в Telegram{" "}
                <Link
                  href="https://telegram.me/starsjoybot"
                  target="_blank"
                  className="text-primary font-bold hover:underline"
                >
                  @starsjoybot
                </Link>
                {" "}→ нажмите <strong>/start</strong> → выберите в меню{" "}
                <strong>Stars</strong> → укажите нужное количество (минимум{" "}
                <strong>50 Stars = 12 000 сум</strong>) → оплатите через{" "}
                <strong>Click</strong> или <strong>переводом на карту</strong>. Stars поступят на аккаунт за несколько минут.
              </p>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              StarsJoy.uz — локальный узбекистанский сервис, работает с 2024 года и является одним из основных местных каналов продажи Stars. Сайт на UZ и RU, поддержка по местному времени. Технический механизм: бот через официальную систему top-up Telegram переводит Stars напрямую на ваш аккаунт. Пароль аккаунта при этом не требуется.
            </p>

            <p className="text-muted leading-relaxed">
              Другие каналы (App Store, официальное приложение Telegram, Fragment) тоже доступны, но из Узбекистана пользоваться ими технически и финансово сложнее. Ниже — сравнение всех каналов.
            </p>
          </section>

          {/* Section 2 — Pricing */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Сколько стоят Telegram Stars в Узбекистане? Пакеты и цены
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              У местных реселлеров цена линейная — стоимость 1 Star одинаковая независимо от размера пакета. В StarsJoy.uz 1 Star = 240 сум. Состав пакетов:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Пакет</div>
                <div className="text-center">Цена (сум)</div>
                <div className="text-center">Типичное использование</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm bg-primary-light/20">
                <div className="font-bold text-primary">50 Stars (минимум)</div>
                <div className="text-center font-bold text-primary">
                  12 000 сум
                </div>
                <div className="text-center text-muted">
                  Маленький tip, стикер, тест
                </div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">100 Stars</div>
                <div className="text-center">24 000 сум</div>
                <div className="text-center text-muted">
                  Функция бота, мелкий donate
                </div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">250 Stars</div>
                <div className="text-center">60 000 сум</div>
                <div className="text-center text-muted">Средний donate</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">500 Stars</div>
                <div className="text-center">120 000 сум</div>
                <div className="text-center text-muted">
                  Около Premium 3 мес. gift
                </div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">1000 Stars</div>
                <div className="text-center">240 000 сум</div>
                <div className="text-center text-muted">
                  Premium 6-12 мес. gift
                </div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">2500 Stars</div>
                <div className="text-center">600 000 сум</div>
                <div className="text-center text-muted">Крупный donate</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center text-sm">
                <div className="font-medium">5000 Stars</div>
                <div className="text-center">1 200 000 сум</div>
                <div className="text-center text-muted">Business / max</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Заметка:</strong> StarsJoy может предлагать скидки на крупные пакеты — точные цены смотрите в меню бота. Цифры выше — линейная базовая цена.
            </p>

            <p className="text-muted leading-relaxed">
              Для теста — 50 Stars, минимальный порог входа. 240 сум/star — разовый платёж, лежит на балансе сколько угодно.
            </p>
          </section>

          {/* Section 3 — Step by step */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Покупка Stars — пошагово
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Если вы покупаете впервые, весь процесс занимает 3-5 минут. Подготовьте Click или карту для перевода.
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  step: "1",
                  title: "Откройте @starsjoybot в Telegram",
                  desc: "Введите @starsjoybot в поиске Telegram и откройте бот. Нажмите /start — откроется меню (на UZ и RU).",
                },
                {
                  step: "2",
                  title: "Выберите раздел \"Stars\" в меню",
                  desc: "Бот предлагает несколько продуктов: Stars, Premium, Gifts. Нажмите кнопку \"Stars\" — откроется список пакетов.",
                },
                {
                  step: "3",
                  title: "Выберите готовый пакет или укажите количество",
                  desc: "Готовые пакеты (50, 100, 250, 500, 1000, 2500, 5000 Stars) или произвольное число. Цена в сумах появляется сразу — без курсовой конвертации.",
                },
                {
                  step: "4",
                  title: "Подтвердите аккаунт получателя Stars",
                  desc: "Бот автоматически определяет ваш Telegram username. Если делаете подарок — указываете @username получателя. Механизм Stars Top Up Telegram работает на основе этого username.",
                },
                {
                  step: "5",
                  title: "Выберите способ оплаты: Click или перевод на карту",
                  desc: "Через Click — по PIN/Face ID за 1-2 минуты. Переводом — Uzcard/Humo P2P, подтверждение по SMS-коду. В обоих случаях оплата в сумах, Click быстрее.",
                },
                {
                  step: "6",
                  title: "Stars поступают на аккаунт за 1-5 минут",
                  desc: "После подтверждения оплаты Stars автоматически добавляются на баланс. Видны в Telegram → Настройки → Stars. При технической задержке — до 10-15 минут.",
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
              Большинство пользователей завершают весь процесс за 3-5 минут. При повторной покупке процесс ускоряется — бот запоминает данные.
            </p>
          </section>

          {/* Mid CTA */}
          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                50 Stars от 12 000 сум.{" "}
                <strong className="text-white">@starsjoybot</strong> — Click и карта в сумах, на аккаунте через 5 минут. Для теста минимального пакета достаточно.
              </p>
              <Link
                href="https://telegram.me/starsjoybot"
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
                Открыть StarsJoy бот
              </Link>
            </div>
          </section>

          {/* Section 4 — Channel comparison */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Где покупать Stars — сравнение каналов
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Из Узбекистана для покупки Stars доступны 4 основных канала. Сравните по цене, удобству и требованиям к карте:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-5 bg-section-alt p-4 font-bold text-sm">
                <div>Канал</div>
                <div className="text-center">Цена 1 Star</div>
                <div className="text-center">Тип карты</div>
                <div className="text-center">Валюта</div>
                <div className="text-center">Скорость</div>
              </div>
              <div className="grid grid-cols-5 p-4 border-b border-card-border items-center text-sm bg-primary-light/20">
                <div className="font-bold text-primary">StarsJoy ⭐</div>
                <div className="text-center font-bold text-primary">
                  ~240 сум
                </div>
                <div className="text-center text-green-600">
                  Местная (Click, Uzcard, Humo)
                </div>
                <div className="text-center text-green-600 font-bold">
                  Сум
                </div>
                <div className="text-center">5 мин.</div>
              </div>
              <div className="grid grid-cols-5 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">App Store / Play Market</div>
                <div className="text-center text-red-600">~290 сум</div>
                <div className="text-center text-red-600">
                  Visa / Mastercard
                </div>
                <div className="text-center text-red-600">USD</div>
                <div className="text-center">Сразу</div>
              </div>
              <div className="grid grid-cols-5 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Fragment.com</div>
                <div className="text-center">~260 сум</div>
                <div className="text-center text-red-600">
                  Crypto / зарубежная карта
                </div>
                <div className="text-center text-red-600">USD/Crypto</div>
                <div className="text-center">5-15 мин.</div>
              </div>
              <div className="grid grid-cols-5 p-4 items-center text-sm">
                <div className="font-medium">Официальное прил. Telegram</div>
                <div className="text-center text-red-600">~290 сум</div>
                <div className="text-center text-red-600">
                  Visa, Google/Apple Pay
                </div>
                <div className="text-center text-red-600">USD</div>
                <div className="text-center">Сразу</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Локальный путь (StarsJoy)</strong> — цена на 17-21% дешевле, достаточно местной карты, без курсового риска. App Store и официальное приложение Telegram требуют зарубежную карту и оплату в USD. Fragment требует дополнительных технических знаний (крипто-кошелёк, иностранная поддержка).
            </p>

            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">Техническая безопасность</strong> — высокая во всех 4 каналах. Click и Apple Pay/Google Pay работают по одинаковому стандарту PCI DSS. Главное отличие — в цене, валюте и способе оплаты.
            </p>
          </section>

          {/* Section 5 — Where Stars are used */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Для чего используют Stars?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Перед покупкой Stars полезно понимать, где они применяются. Основные сценарии в 2026 году:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: "🤖 AI-функции ботов",
                  desc: "ChatGPT, Midjourney и другие AI-боты позволяют через Stars сделать больше запросов или сгенерировать больше изображений. 50-100 Stars хватает для старта.",
                },
                {
                  title: "💎 Premium-стикеры и эмодзи",
                  desc: "Анимированные стикеры и пакеты премиум-эмодзи обычно стоят 50-200 Stars. Разовая покупка, остаётся в аккаунте навсегда.",
                },
                {
                  title: "❤️ Donate авторам каналов",
                  desc: "Любимому каналу или блогеру можно отправить 50, 100 или 500 Stars — новый способ поддержки.",
                },
                {
                  title: "🎁 Подарок Premium",
                  desc: "Через 1000-2500 Stars можно подарить Premium другому человеку. Но в сумах прямая покупка чаще выгоднее.",
                },
                {
                  title: "📺 Premium-контент",
                  desc: "Некоторые каналы предлагают платный контент за Stars (курсы, закрытые группы, эксклюзивные посты).",
                },
                {
                  title: "📱 Mini App платежи",
                  desc: "В Telegram Mini App (игры, магазины) Stars становятся основной валютой для внутренних покупок.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-5 border border-card-border shadow-sm"
                >
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-muted leading-relaxed">
              Stars лежат на балансе аккаунта без срока. Покупайте точно столько, сколько нужно для конкретной функции — лишние Stars нельзя обратно обменять на сумы.
            </p>
          </section>

          {/* Section 6 — Safety */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Безопасность при покупке Stars
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Платёжный механизм (Click, перевод на карту) — лицензирован Центробанком. Технически безопасен. Главная осторожность — в выборе продавца:
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  ✅ Оплата через официальное приложение Click или Payme
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Данные карты сохраняются только на сервере платёжной системы — бот их не видит. Никогда не передавайте пароль и CVV напрямую боту.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  ✅ PDF-чек
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Click и Payme выдают PDF-чек на каждую оплату. Этот документ можно перезагрузить и использовать при жалобе.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  ✅ Бот связан с сайтом
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Домен StarsJoy.uz и @starsjoybot связаны, сайт работает по HTTPS. Это подтверждает реальность реселлера.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  ❌ Избегайте обещаний &laquo;бесплатных Stars&raquo;
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Никаким официальным путём Stars нельзя получить бесплатно. Боты, обещающие &laquo;бесплатные Stars&raquo; — это фишинг. Никогда не передавайте пароль аккаунта никому.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Правила защиты от мошенников одинаковы и для Premium, и для Stars — механизмы безопасности похожи.{" "}
              <Link
                href="/ru/maqolalar/telegram-premium-xavfsiz-aldovdan-saqlanish"
                className="text-primary font-semibold hover:underline"
              >
                Отдельная статья о защите от мошеннических ботов
              </Link>{" "}
              — 7 схем и 8 признаков проверки.
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
                  q: "Как купить Telegram Stars в Узбекистане?",
                  a: "Через @starsjoybot. Нажмите /start, выберите Stars, укажите количество и оплатите через Click или картой. Минимум 50 Stars 12 000 сум. Поступают за несколько минут.",
                },
                {
                  q: "Сколько стоят Telegram Stars?",
                  a: "1 Star ≈ 240 сум (местная линейная цена). Пакеты: 50 Stars 12 000, 100 Stars 24 000, 250 Stars 60 000, 500 Stars 120 000, 1000 Stars 240 000 сум. App Store ~290 сум/star, Fragment ~260 сум/star.",
                },
                {
                  q: "Можно ли оплатить местной картой?",
                  a: "Да, в StarsJoy.uz работают Click и переводы на банковские карты (Uzcard, Humo). Официальное приложение Telegram и App Store не принимают местные карты — только Visa/Mastercard.",
                },
                {
                  q: "За сколько Stars поступают на аккаунт?",
                  a: "За 1-5 минут после подтверждения оплаты, автоматически. При технической задержке — до 10-15 минут.",
                },
                {
                  q: "Истекает ли срок Stars?",
                  a: "Нет. Stars лежат на балансе бессрочно. Но неиспользованные Stars нельзя обменять обратно на сумы — покупайте только нужное количество.",
                },
                {
                  q: "Подарить Premium через Stars дешевле?",
                  a: "Нет, чаще дороже. Для 3-месячного Premium gift нужно ~1000 Stars (240 000 сум), напрямую в сумах — 175 000. Stars выгодны для функций ботов и каналов, не для подарка Premium.",
                },
                {
                  q: "Чем отличается покупка через App Store?",
                  a: "App Store требует зарубежную карту (Visa/Mastercard), цена в USD на 17-21% выше, есть курсовой риск. Местный путь — в сумах, местной картой, дешевле. Техническая безопасность одинаково высокая.",
                },
                {
                  q: "С какого пакета начать тестирование?",
                  a: "50 Stars (12 000 сум) — минимальный пакет, идеален для теста. На эту сумму проверите весь процесс, потом купите больший пакет.",
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
                Stars из Узбекистана — в цифрах
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">50</p>
                  <p className="text-sm text-muted">
                    минимум Stars (12 000 сум)
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">240</p>
                  <p className="text-sm text-muted">сум / Star (линейно)</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">17%</p>
                  <p className="text-sm text-muted">
                    дешевле, чем App Store
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Related */}
          <section>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-card-border">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Связанные статьи
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/ru/maqolalar/telegram-stars-nima"
                    className="text-primary font-semibold hover:underline"
                  >
                    Что такое Telegram Stars и где они применяются
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ru/maqolalar/telegram-premium-xavfsiz-aldovdan-saqlanish"
                    className="text-primary font-semibold hover:underline"
                  >
                    Защита от мошеннических ботов — 8 признаков
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ru/maqolalar/telegram-premium-narxlari"
                    className="text-primary font-semibold hover:underline"
                  >
                    Цены Telegram Premium 2026 — если нужен Premium
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ru/maqolalar/telegram-premium-eng-arzon-qayerdan-sotib-olish"
                    className="text-primary font-semibold hover:underline"
                  >
                    Где Premium дешевле всего
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
                  Купить Telegram Stars в Узбекистане в сумах — местной картой и через Click, на 17% дешевле App Store.{" "}
                  <strong className="text-white">@starsjoybot</strong> — от 50 Stars за 12 000 сум. Для теста этого пакета достаточно.
                </p>
                <Link
                  href="https://telegram.me/starsjoybot"
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
