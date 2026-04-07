import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Купить Telegram Premium на 3 месяца — в Узбекистане за сумы, через Uzcard и Humo",
  description:
    "Купить Telegram Premium на 3 месяца в Узбекистане за 175 000 сум. Оплата в сумах через Uzcard, Humo. В Telegram нет 3-месячного пакета — только через @PremiumSendBot. Пошаговая инструкция.",
  keywords: [
    "купить Telegram Premium 3 месяца",
    "Telegram Premium 3 месяца",
    "Telegram Premium Uzcard",
    "Telegram Premium Humo",
    "Telegram Premium Узбекистан",
    "Telegram Premium за сумы",
    "Telegram Premium цена",
    "PremiumSendBot",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/ru/maqolalar/3-oylik-telegram-premium-sotib-olish",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/3-oylik-telegram-premium-sotib-olish",
      ru: "https://premiumsend.uz/ru/maqolalar/3-oylik-telegram-premium-sotib-olish",
    },
  },
  openGraph: {
    title: "Купить Telegram Premium на 3 месяца — в Узбекистане за сумы",
    description:
      "В Telegram нет 3-месячного Premium. Купите через @PremiumSendBot с помощью Uzcard, Humo за сумы.",
    url: "https://premiumsend.uz/ru/maqolalar/3-oylik-telegram-premium-sotib-olish",
    type: "article",
    publishedTime: "2026-04-02",
  },
};

export default function Article3Month() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Купить Telegram Premium на 3 месяца — в Узбекистане за сумы, через Uzcard и Humo",
    description:
      "Купить Telegram Premium на 3 месяца в Узбекистане за 175 000 сум. Оплата в сумах через Uzcard, Humo. Подробное руководство.",
    datePublished: "2026-04-02",
    dateModified: "2026-04-02",
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
      "https://premiumsend.uz/ru/maqolalar/3-oylik-telegram-premium-sotib-olish",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Нужна ли иностранная карта для покупки 3-месячного Telegram Premium?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет. Через @PremiumSendBot можно оплатить картой Uzcard или Humo. Также можно сделать перевод через Click или Payme на карту бота. Иностранная карта не требуется.",
        },
      },
      {
        "@type": "Question",
        name: "Есть ли 3-месячный Telegram Premium в официальном приложении Telegram?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет. Telegram предлагает только 1-месячную и 12-месячную подписку Premium. 3-месячного пакета нет — его можно купить только через сервисы вроде Premium Send.",
        },
      },
      {
        "@type": "Question",
        name: "Когда активируется Premium после оплаты?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Обычно в течение нескольких минут. Бот автоматически определяет оплату и доставляет Premium.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли купить 3-месячный Premium для другого человека?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Для этого достаточно ввести Telegram username этого человека. Premium активируется на его аккаунте.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько стоит 3-месячный Telegram Premium?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "В Premium Send 3-месячный Telegram Premium стоит 175 000 сум. Оплата производится в узбекских сумах.",
        },
      },
      {
        "@type": "Question",
        name: "Какие пакеты есть в Premium Send?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "В Premium Send есть 3-месячный (175 000 сум), 6-месячный (235 000 сум) и 12-месячный (425 000 сум) пакеты Telegram Premium. В Telegram нет 3- и 6-месячных пакетов — их можно купить только через Premium Send.",
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
        name: "Купить Telegram Premium на 3 месяца",
        item: "https://premiumsend.uz/ru/maqolalar/3-oylik-telegram-premium-sotib-olish",
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
          Купить Telegram Premium на 3 месяца
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
            <time className="text-xs text-muted" dateTime="2026-04-02">
              2 апреля 2026 г.
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Купить Telegram Premium на 3 месяца
          </h1>
          {/* AI/SEO Snippet Definition */}
          <div className="bg-primary-light/50 rounded-xl p-5 border border-primary/10 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>3-месячный Telegram Premium</strong> — это расширенная подписка Telegram, которую в Узбекистане можно купить через <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link> за <strong>175 000 сум</strong>, оплатив картой Uzcard или Humo. В мессенджере Telegram 3-месячного пакета нет — его можно купить только через Premium Send.
            </p>
          </div>
          <p className="text-lg text-muted leading-relaxed">
            Большинство пользователей, желающих купить Telegram Premium, сталкиваются с одной проблемой:
            для оплаты в официальном приложении Telegram нужна иностранная карта. Оплатить напрямую
            картой Uzcard или Humo невозможно. Кроме того, Telegram
            предлагает только 1-месячную и 12-месячную подписку — 3-месячного или 6-месячного варианта нет. Именно
            эта проблема создаёт трудности для узбекских пользователей.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            В этой статье мы подробно объясним, как купить 3-месячный Telegram Premium в Узбекистане —
            через местные платёжные системы, быстро и надёжно.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Что такое 3-месячный Telegram Premium и зачем он нужен?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Telegram Premium — это расширенная версия Telegram, которая открывает возможности,
              недоступные обычным пользователям. 3-месячная
              подписка — оптимальный вариант: дешевле помесячной, но не требует таких больших
              вложений, как 6-месячная.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              3-месячная подписка Telegram Premium предоставляет следующие возможности:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: "Размер загружаемых файлов",
                  desc: "Увеличен до 4 ГБ вместо стандартного лимита. Проблема отправки больших видео, архивов и документов исчезает.",
                },
                {
                  title: "Быстрый перевод",
                  desc: "Сообщения на иностранных языках можно перевести на узбекский или русский одним нажатием.",
                },
                {
                  title: "Без рекламы",
                  desc: "Реклама в Telegram-каналах полностью отключается.",
                },
                {
                  title: "Эксклюзивные реакции и стикеры",
                  desc: "Уникальные эмодзи и анимации, доступные только Premium-пользователям.",
                },
                {
                  title: "Цвет имени",
                  desc: "Возможность добавить специальный цвет и значок к вашему профилю.",
                },
                {
                  title: "Больше сохранённых сообщений",
                  desc: "Лимит закладок увеличен.",
                },
                {
                  title: "Быстрая загрузка",
                  desc: "Контент загружается быстрее через Premium-серверы.",
                },
                {
                  title: "Voice-to-text",
                  desc: "Автоматическое преобразование голосовых сообщений в текст.",
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

            <p className="text-muted leading-relaxed mb-4">
              Большинство пользователей выбирают 3-месячный вариант, потому что этого времени достаточно,
              чтобы полностью испробовать и привыкнуть к возможностям Premium. Месячный вариант слишком короткий —
              3 месяца оптимальны для того, чтобы по-настоящему оценить Premium.
            </p>
            <p className="text-muted leading-relaxed">
              В Узбекистане 3-месячная подписка Telegram Premium остаётся самым востребованным вариантом
              среди молодёжи, блогеров, предпринимателей и активных пользователей Telegram.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Почему сложно купить через официальное приложение Telegram?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Этот вопрос интересует многих. Если приложение Telegram есть, почему бы
              не купить напрямую через него?
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-section-alt rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-2">
                  Первая причина — ограничение платёжной системы
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Для оплаты через официальное приложение Telegram нужен Google Pay, Apple Pay или
                  иностранная банковская карта. Местные карты Узбекистана — Uzcard и
                  Humo — не совместимы с этими системами. В результате миллионы узбекских
                  пользователей не могут купить напрямую.
                </p>
              </div>
              <div className="bg-section-alt rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-2">
                  Вторая причина — нет 3-месячного и 6-месячного пакета
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Telegram предлагает только 1-месячную и 12-месячную подписку. 3-месячного и
                  6-месячного пакета нет. Если хотите на 3 месяца, придётся платить
                  каждый месяц отдельно — это и дороже, и неудобно.
                </p>
              </div>
              <div className="bg-section-alt rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-2">
                  Третья причина — проблема курса валют
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Оплата в Telegram производится в долларах или евро.
                  В Узбекистане же люди работают в сумах. Изменение курса и
                  комиссия за конвертацию создают дополнительные расходы.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Именно из-за этих трёх проблем в Узбекистане покупать 3-месячный Telegram Premium
              через местный бот или сервис гораздо удобнее и экономически выгоднее.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Купить 3-месячный Telegram Premium в Узбекистане: где и как?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              На данный момент в Узбекистане есть несколько сервисов, продающих Telegram Premium.
              Но не все из них надёжные — некоторые принимают оплату, но
              не отправляют Premium или отправляют с задержкой.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Надёжный сервис должен обладать следующими характеристиками:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Автоматическая доставка после оплаты (без ручного ожидания)",
                "Оплата картой Uzcard и Humo (также можно перевести через Click/Payme на карту бота)",
                "Поддержка на узбекском языке",
                "Наличие 3-месячного пакета (в самом Telegram его нет)",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-muted">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-primary-light rounded-2xl p-6 border border-primary/20">
              <p className="text-foreground leading-relaxed">
                <strong>@PremiumSendBot</strong> — это Telegram-бот, специально
                созданный для рынка Узбекистана, который отвечает именно этим требованиям. Через бот
                можно купить 3-месячную подписку Telegram Premium за узбекские сумы, картой Uzcard или Humo,
                за несколько минут.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Оплата через Uzcard и Humo: пошаговая инструкция
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Ниже приведён полный процесс покупки 3-месячного Telegram Premium через @PremiumSendBot:
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  step: "1",
                  title: "Откройте бота",
                  desc: "Откройте @PremiumSendBot в Telegram.",
                },
                {
                  step: "2",
                  title: "Запустите бота",
                  desc: "Нажмите кнопку /start.",
                },
                {
                  step: "3",
                  title: "Выберите пакет",
                  desc: "В меню выберите вариант «3-месячный Premium».",
                },
                {
                  step: "4",
                  title: "Введите username",
                  desc: "Введите Telegram username аккаунта, на который хотите получить Premium (можно свой или друга).",
                },
                {
                  step: "5",
                  title: "Произведите оплату",
                  desc: "Оплатите картой Uzcard или Humo. Также можно перевести через Click или Payme на карту бота — бот автоматически определит сумму.",
                },
                {
                  step: "6",
                  title: "Premium активирован",
                  desc: "После подтверждения оплаты Premium-подписка автоматически активируется на указанном аккаунте.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full hero-gradient text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-muted leading-relaxed mb-6">
              Весь процесс обычно занимает не более 5 минут. Если в платёжной системе нет сбоев,
              Premium активируется мгновенно.
            </p>

            {/* Промежуточный CTA */}
            <div className="bg-white rounded-2xl p-6 border-2 border-primary/20 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-bold text-foreground text-lg">3-месячный Telegram Premium — 175 000 сум</p>
                <p className="text-sm text-muted">Оплата в сумах через Uzcard, Humo</p>
              </div>
              <div className="flex gap-3">
                <Link href="/ru/3-oylik" className="px-5 py-2.5 rounded-xl bg-primary-light text-primary font-semibold text-sm hover:bg-primary hover:text-white transition-all">
                  Подробнее
                </Link>
                <Link href="https://t.me/premiumsendbot" target="_blank" className="px-5 py-2.5 rounded-xl hero-gradient text-white font-semibold text-sm shadow-lg shadow-primary/25">
                  Купить
                </Link>
              </div>
            </div>
          </section>

          {/* Section 5 — Pricing Table */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Цена 3-месячного Telegram Premium: сравнение
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Цена 3-месячного Telegram Premium в Узбекистане может отличаться на разных сервисах и каналах.
              Ниже приведено примерное сравнение:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Вариант</div>
                <div className="text-center">Способ оплаты</div>
                <div className="text-center">Срок</div>
                <div className="text-center">Цена</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Telegram официальный</div>
                <div className="text-center text-muted">Иностранная карта</div>
                <div className="text-center text-muted">Только 1 и 12 мес.</div>
                <div className="text-center text-muted">~$4.99/мес.</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Другие реселлеры</div>
                <div className="text-center text-muted">Разные</div>
                <div className="text-center text-muted">1–3 мес.</div>
                <div className="text-center text-muted">Варьируется</div>
              </div>
              <div className="grid grid-cols-4 p-4 bg-primary-light/30 items-center text-sm">
                <div className="font-bold text-primary">@PremiumSendBot</div>
                <div className="text-center text-primary font-medium">
                  Uzcard, Humo
                </div>
                <div className="text-center text-primary font-medium">3-месячный пакет</div>
                <div className="text-center text-primary font-medium">175 000 сум</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              Поскольку в официальном приложении Telegram нет 3-месячного варианта, если платить
              каждый месяц отдельно — за 3 месяца выйдет $14.97. Реселлер-боты часто предлагают
              оптовую цену на 3-месячный Telegram Premium, что немного экономичнее.
            </p>
            <p className="text-muted leading-relaxed">
              Кроме того, при оплате через местные сервисы нет разницы курсов и
              комиссии за конвертацию — вы платите точно установленную цену в сумах.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              3-месячный Telegram Premium в Узбекистане: для кого подходит лучше всего?
            </h2>

            <div className="space-y-6 mb-6">
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  Блогеры и создатели контента
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Если вы активны в Telegram-канале, Premium позволяет загружать файлы большого размера,
                  использовать эксклюзивные реакции и выделять свой профиль.
                  Значок Premium для подписчиков — это само по себе знак доверия.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  Предприниматели и фрилансеры
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Для тех, кто общается с клиентами через Telegram, функция Voice-to-text
                  и возможность перевода экономят ежедневное время. Увеличенный лимит
                  на отправку файлов и документов упрощает рабочий процесс.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  Активные пользователи Telegram
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Если вы проводите в Telegram несколько часов в день — отсутствие рекламы
                  и более быстрая загрузка заметно улучшают качество использования.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  Те, кто хочет сделать подарок другу или близкому
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Через @PremiumSendBot можно купить Premium на чужой аккаунт.
                  Это отличный цифровой подарок на день рождения или праздник.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              3 месяца — достаточный срок как для пробного использования, так и для постоянного. Если вам понравятся возможности Premium, в следующий раз можно перейти на{" "}
              <Link
                href="/ru/6-oylik"
                className="text-primary font-semibold hover:underline"
              >
                6-месячный
              </Link>{" "}
              или{" "}
              <Link
                href="/ru/12-oylik"
                className="text-primary font-semibold hover:underline"
              >
                12-месячный
              </Link>{" "}
              вариант.
            </p>

            {/* Промежуточный CTA 2 */}
            <div className="bg-white rounded-2xl p-6 border-2 border-primary/20 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <div>
                <p className="font-bold text-foreground text-lg">3-месячный Telegram Premium — 175 000 сум</p>
                <p className="text-sm text-muted">Сейчас <Link href="/ru/3-oylik" className="text-primary hover:underline">подробнее</Link> или купите напрямую</p>
              </div>
              <Link href="https://t.me/premiumsendbot" target="_blank" className="px-6 py-3 rounded-xl hero-gradient text-white font-semibold text-sm shadow-lg shadow-primary/25 whitespace-nowrap">
                Купить
              </Link>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Как выбрать надёжный сервис: на что обратить внимание
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              В интернете множество ботов и каналов, продающих Telegram Premium.
              Но не все из них надёжные. Некоторые сервисы принимают оплату, но
              не отправляют продукт или заставляют ждать целый день.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              При выборе надёжного сервиса обращайте внимание на следующее:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Автоматическая доставка — после оплаты Premium должен активироваться сразу, без ручного ожидания",
                "Связь и поддержка — при возникновении проблем должна быть быстрая служба поддержки",
                "Отзывы пользователей — наличие реальных отзывов пользователей в боте или канале",
                "Точная цена — без скрытых платежей и неожиданных дополнительных расходов",
                "Узбекский язык — возможность общения на родном языке",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-muted">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">@PremiumSendBot</strong> создан именно для соответствия
              этим критериям. Местные платёжные системы для пользователей Узбекистана, интерфейс на узбекском языке и быстрая доставка
              — главные преимущества.
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
                  q: "Нужна ли иностранная карта для покупки 3-месячного Telegram Premium?",
                  a: "Нет. Через @PremiumSendBot можно оплатить картой UzCard или Humo. Также можно перевести через Click или Payme на карту бота. Иностранная карта не требуется.",
                },
                {
                  q: "Есть ли 3-месячный Telegram Premium в официальном приложении Telegram?",
                  a: "Нет. Telegram предлагает только 1-месячную и 12-месячную подписку Premium — 3-месячного и 6-месячного пакетов нет. 3-месячный пакет можно купить только через реселлер-сервисы вроде Premium Send.",
                },
                {
                  q: "Когда активируется Premium после оплаты?",
                  a: "Обычно в течение нескольких минут. Доставка осуществляется автоматической системой, ручного ожидания не требуется.",
                },
                {
                  q: "Можно ли купить 3-месячный Premium для другого человека — друга или члена семьи?",
                  a: "Да. Для этого достаточно ввести Telegram username этого человека. Premium активируется на его аккаунте.",
                },
                {
                  q: "Сколько стоит 3-месячный Telegram Premium?",
                  a: "В Premium Send 3-месячный Telegram Premium стоит 175 000 сум. Оплата в узбекских сумах — картой Uzcard или Humo.",
                },
                {
                  q: "Можно ли отменить Premium после активации?",
                  a: "Подписка Telegram Premium автоматически прекращается по истечении срока. Возможность отмены в течение срока ограничена — поэтому важно выбрать правильный срок перед покупкой.",
                },
                {
                  q: "Какие пакеты есть в Premium Send?",
                  a: "В Premium Send есть 3-месячный (175 000 сум), 6-месячный (235 000 сум) и 12-месячный (425 000 сум) пакеты Telegram Premium. В Telegram нет 3- и 6-месячных пакетов — их можно купить только через Premium Send.",
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

          {/* Conclusion */}
          <section>
            <div className="hero-gradient rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-5 left-5 w-32 h-32 bg-white rounded-full blur-2xl" />
              </div>
              <div className="relative">
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  Если вам нужно купить 3-месячный Telegram Premium в Узбекистане через местную
                  платёжную систему, быстро и надёжно —{" "}
                  <strong className="text-white">@PremiumSendBot</strong> — лучшее решение на сегодня. Оформите заказ через Uzcard, Humo, Click или Payme за несколько минут
                  и наслаждайтесь возможностями Premium.
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
                  Перейти в @PremiumSendBot
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
