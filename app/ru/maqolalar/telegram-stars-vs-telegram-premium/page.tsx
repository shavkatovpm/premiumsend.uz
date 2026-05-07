import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Telegram Stars или Premium: что выбрать — полное сравнение",
  description:
    "Разница Telegram Stars и Premium: Stars — внутренняя валюта для ботов и каналов, Premium — месячная подписка (4 ГБ файлы, 1000 каналов). Когда какой нужен — точный ответ.",
  keywords: [
    "telegram stars vs premium",
    "разница stars и premium",
    "stars или premium",
    "telegram stars premium отличие",
    "что такое stars premium",
    "premium или stars что лучше",
    "telegram внутренняя валюта подписка",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/ru/maqolalar/telegram-stars-vs-telegram-premium",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/telegram-stars-vs-telegram-premium",
      ru: "https://premiumsend.uz/ru/maqolalar/telegram-stars-vs-telegram-premium",
    },
  },
  openGraph: {
    title: "Telegram Stars или Premium: что выбрать",
    description:
      "Когда и для кого нужны Stars и Premium — полное сравнение, цены и сценарии использования.",
    url: "https://premiumsend.uz/ru/maqolalar/telegram-stars-vs-telegram-premium",
    type: "article",
    publishedTime: "2026-05-05",
  },
};

export default function ArticleStarsVsPremiumRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Telegram Stars или Premium: что выбрать — полное сравнение",
    description:
      "Различия Stars и Premium, когда какой нужен и как использовать вместе — полное сравнение.",
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
      "https://premiumsend.uz/ru/maqolalar/telegram-stars-vs-telegram-premium",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "В чём разница Telegram Stars и Premium?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Stars — внутренняя валюта Telegram (с 2024 года) для оплаты услуг в ботах и каналах: стикеры, donate, AI-функции, подарок Premium. Premium — месячная подписка (файлы 4 ГБ, 1000 каналов, 20+ функций, без рекламы). Stars — разовая покупка для каждого случая, Premium — постоянная подписка. Это отдельные продукты, часто используемые вместе.",
        },
      },
      {
        "@type": "Question",
        name: "Когда нужны Stars?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Основные сценарии для Stars: 1) больше запросов в AI-боты (ChatGPT, Midjourney), 2) покупка premium-стикеров и эмодзи, 3) donate любимым каналам и блогерам, 4) разблокировка premium-контента (закрытая группа, курс), 5) покупки в Mini App-играх, 6) разовый подарок Premium. Stars от 50 — за 12 000 сум через StarsJoy.uz.",
        },
      },
      {
        "@type": "Question",
        name: "Когда нужен Premium?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Основные сценарии для Premium: 1) загрузка файлов до 4 ГБ (вместо 2), 2) разблокировка лимита 1000 каналов и папок (вместо 500), 3) анимированный аватар и premium-стикеры, 4) автоматический Voice-to-text, 5) отсутствие рекламы, 6) Translate, эмодзи-статус, premium-реакции. Premium 1 месяц — от 59 000 сум через Premium Send.",
        },
      },
      {
        "@type": "Question",
        name: "Что дешевле — Stars или Premium?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Это неверный вопрос — это разные продукты. Stars — разовая покупка (50 Stars от 12 000 сум), Premium — месячная подписка (от 59 000 сум). Сравнивайте по цели: для разовой мелкой покупки (стикер, donate) — Stars дешевле. Для 4 ГБ файлов, 1000 каналов и premium-функций на месяц — Premium быстрее окупается. Часто используются вместе.",
        },
      },
      {
        "@type": "Question",
        name: "Выгодно ли дарить Premium через Stars?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Технически да, но финансово часто дороже. На 3-месячный Premium gift нужно ~1000 Stars (240 000 сум), напрямую через Premium Send в сумах — 175 000. Разница ~37%. Подарок через Stars имеет смысл только в отдельных случаях: если Stars уже куплены и не использованы, или хотите получить AI-функции и подарок одним пакетом.",
        },
      },
      {
        "@type": "Question",
        name: "Истекает ли срок Stars, как у Premium?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет. Stars остаются на аккаунте бессрочно — после покупки лежат на балансе сколько угодно. Неиспользованные не пропадают (но и обратно в сумы не обмениваются). Premium же — подписка с сроком: после 1, 3, 6 или 12 месяцев заканчивается, и нужно платить заново. Это главное механическое отличие.",
        },
      },
      {
        "@type": "Question",
        name: "Выгодно ли покупать Stars и Premium вместе?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, если оба соответствуют разным потребностям. Premium — для ежедневного использования: большие файлы, много каналов, premium-стикеры. Stars — периодически: AI-боты, donate авторам, mini app-покупки. Один не влияет на другой. Premium-пользователь часто тратит 100-500 Stars в месяц.",
        },
      },
      {
        "@type": "Question",
        name: "Где покупать Stars и Premium?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "В Узбекистане местной картой и в сумах: Stars — через StarsJoy.uz (@starsjoybot), от 50 Stars за 12 000 сум. Premium — через Premium Send (@PremiumSendBot), 1 месяц от 59 000 сум. Это отдельные сервисы, каждый специализируется на своём продукте. В App Store и официальном приложении Telegram тоже доступно, но требуется зарубежная карта и цена выше на 17-30%.",
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
        name: "Stars или Premium",
        item: "https://premiumsend.uz/ru/maqolalar/telegram-stars-vs-telegram-premium",
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
        <span className="text-foreground font-medium">Stars или Premium</span>
      </nav>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-700">
              Вопрос-ответ
            </span>
            <time className="text-xs text-muted" dateTime="2026-05-05">
              5 мая 2026
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Telegram Stars или Premium: что выбрать
          </h1>

          {/* TL;DR */}
          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>Краткий ответ:</strong> <strong>Stars</strong> — внутренняя валюта Telegram, для <strong>разовых покупок</strong> в ботах и каналах (стикеры, donate, AI-функции, подарок Premium). 50 Stars от 12 000 сум, лежат на балансе бессрочно. <strong>Premium</strong> — <strong>месячная подписка</strong>: файлы 4 ГБ, 1000 каналов, premium-функции и без рекламы. 1 месяц от 59 000 сум. Это разные продукты, часто используемые вместе — один не заменяет другой.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            С 2024 года Telegram запустил валюту Stars. Эта новость породила путаницу: «Заменят ли Stars подписку Premium? Что нужно? Может ли понадобиться оба сразу?» На самом деле это совершенно разные продукты — каждый со своей задачей.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            В статье — точные различия Stars и Premium, когда какой нужен, сравнение цен и стратегия совместного использования. К концу статьи вам станет понятно, какой продукт (или оба) подходит именно вам.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 — Core difference */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Stars и Premium: главные отличия
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Лучше всего представить их как разные продукты — например, «баланс на телефоне» и «пакет мобильного интернета». Используются вместе, но каждый — для своей задачи:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Параметр</div>
                <div className="text-center">Telegram Stars</div>
                <div className="text-center">Telegram Premium</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Тип</div>
                <div className="text-center">Внутренняя валюта</div>
                <div className="text-center">Месячная подписка</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Модель оплаты</div>
                <div className="text-center">Разовая покупка</div>
                <div className="text-center">Периодическая</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Срок</div>
                <div className="text-center text-green-600">Бессрочно</div>
                <div className="text-center">1, 3, 6, 12 мес.</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Минимум</div>
                <div className="text-center">12 000 сум (50 Stars)</div>
                <div className="text-center">59 000 сум (1 мес.)</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Главная цель</div>
                <div className="text-center">Услуги ботов и каналов</div>
                <div className="text-center">Функции аккаунта</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Пример использования</div>
                <div className="text-center text-muted text-xs">
                  AI-бот, стикер, donate
                </div>
                <div className="text-center text-muted text-xs">
                  Файл 4 ГБ, 1000 каналов
                </div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center text-sm">
                <div className="font-medium">Год запуска</div>
                <div className="text-center">2024</div>
                <div className="text-center">2022</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Главный факт: <strong className="text-foreground">Stars не заменяют Premium</strong>. Возможность загружать файлы 4 ГБ через Stars не получить — это функция Premium. И наоборот: пользователь Premium тоже покупает Stars для AI-функций ботов. Они дополняют друг друга.
            </p>
          </section>

          {/* Section 2 — When Stars are needed */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Когда нужны Stars? 6 практических сценариев
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Главная задача Stars — микроплатежи в экосистеме ботов и каналов. В этих сценариях нужны именно Stars:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: "🤖 AI-функции ботов",
                  desc: "ChatGPT, Midjourney, Claude и другие AI-боты позволяют через Stars делать больше запросов или генераций. 50-200 Stars хватает для среднего использования.",
                },
                {
                  title: "💎 Premium-стикеры и эмодзи",
                  desc: "Анимированные стикеры и пакеты эмодзи обычно стоят 50-200 Stars. Разовая покупка, остаётся в аккаунте навсегда.",
                },
                {
                  title: "❤️ Donate каналам",
                  desc: "Любимому каналу или блогеру можно отправить 50, 100, 500 или больше Stars — новый способ поддержки авторов.",
                },
                {
                  title: "📺 Premium-контент",
                  desc: "Некоторые каналы предлагают платный контент за Stars: курс, закрытая группа, эксклюзивный пост.",
                },
                {
                  title: "📱 Покупки в Mini App",
                  desc: "В Telegram Mini App (игры, магазины) Stars постепенно становятся главной валютой для внутренних покупок.",
                },
                {
                  title: "🎁 Разовый подарок Premium",
                  desc: "Через Stars можно подарить Premium другому пользователю. 1000-2500 Stars в зависимости от тарифа Premium.",
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
              <strong className="text-foreground">Особенность Stars:</strong> каждая покупка отдельная — вы тратите ровно нужное количество на конкретную функцию. Срок не истекает, но неиспользованный остаток обратно в сумы не обменять.
            </p>
            <p className="text-muted leading-relaxed mt-3">
              <Link
                href="/ru/maqolalar/telegram-stars-ozbekistondan-sotib-olish"
                className="text-primary font-semibold hover:underline"
              >
                Полное руководство по покупке Stars
              </Link>
              {" "}— пошагово, цены и безопасность.
            </p>
          </section>

          {/* Section 3 — When Premium is needed */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Когда нужен Premium? 6 главных функций
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Premium — расширенный режим аккаунта Telegram. Эти функции доступны только в Premium-подписке:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: "📁 Файлы до 4 ГБ",
                  desc: "В обычном аккаунте лимит 2 ГБ. Premium увеличивает до 4 ГБ — для целых фильмов, больших архивов, raw-видео.",
                },
                {
                  title: "📚 1000 каналов и папок",
                  desc: "В обычном аккаунте лимит 500 каналов. Premium удваивает — для бизнеса, работы и личных каналов в раздельном порядке.",
                },
                {
                  title: "🎨 Premium-стикеры и анимация",
                  desc: "Специальные анимированные стикеры и premium-эмодзи только для Premium-пользователей. Аватар тоже может быть анимированным.",
                },
                {
                  title: "🎙️ Voice-to-text автоматически",
                  desc: "Автоматическое преобразование голосового или видеосообщения в текст. При длинных сообщениях экономит много времени.",
                },
                {
                  title: "🚫 Без рекламы",
                  desc: "В публичных каналах не показывается реклама. Спокойное чтение и полное внимание.",
                },
                {
                  title: "✨ Другие premium-функции",
                  desc: "Эмодзи-статус в профиле, скрытый бейдж, premium-реакции, видеть кто реагировал в группе, Translate и ещё 15+ функций.",
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
              <strong className="text-foreground">Особенность Premium:</strong> постоянный набор функций. Подписка действует на весь срок и работает каждый день — когда вы загружаете файлы, читаете каналы или общаетесь.
            </p>
            <p className="text-muted leading-relaxed mt-3">
              <Link
                href="/ru/maqolalar/telegram-premium-vs-oddiy-telegram"
                className="text-primary font-semibold hover:underline"
              >
                15 отличий Premium от обычного Telegram
              </Link>
              {" "}— подробно в отдельной статье.
            </p>
          </section>

          {/* Mid CTA — dual */}
          <section>
            <div className="bg-section-alt rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-bold text-foreground mb-4 text-center">
                Что вам нужно конкретно?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-5 border border-card-border">
                  <h4 className="font-bold text-foreground mb-2">
                    AI-боты, стикеры, donate?
                  </h4>
                  <p className="text-sm text-muted mb-3">
                    Нужны Stars. От 50 Stars за 12 000 сум,{" "}
                    <strong>StarsJoy.uz</strong> в сумах.
                  </p>
                  <Link
                    href="https://t.me/starsjoybot"
                    target="_blank"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:shadow-lg transition-all"
                  >
                    @starsjoybot →
                  </Link>
                </div>
                <div className="bg-white rounded-xl p-5 border border-card-border">
                  <h4 className="font-bold text-foreground mb-2">
                    Файлы 4 ГБ, 1000 каналов, premium-функции?
                  </h4>
                  <p className="text-sm text-muted mb-3">
                    Нужен Premium. От 59 000 сум за месяц,{" "}
                    <strong>Premium Send</strong> в сумах.
                  </p>
                  <Link
                    href="https://t.me/premiumsendbot"
                    target="_blank"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:shadow-lg transition-all"
                  >
                    @PremiumSendBot →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 — Price comparison */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Сравнение цен — что дешевле?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Это неверный вопрос — это разные продукты. Но пользователям часто нужно сравнить — в таблице ниже порядок цен каждого:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Продукт</div>
                <div className="text-center">Минимальная цена</div>
                <div className="text-center">Полезен для</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">50 Stars</div>
                <div className="text-center">12 000 сум</div>
                <div className="text-center text-muted text-xs">
                  Тест AI, стикер
                </div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">100 Stars</div>
                <div className="text-center">24 000 сум</div>
                <div className="text-center text-muted text-xs">
                  Мелкий donate, premium-эмодзи
                </div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">500 Stars</div>
                <div className="text-center">120 000 сум</div>
                <div className="text-center text-muted text-xs">
                  AI-бот 1-2 мес., donate
                </div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm bg-primary-light/20">
                <div className="font-bold text-primary">Premium 1 мес.</div>
                <div className="text-center font-bold text-primary">
                  59 000 сум
                </div>
                <div className="text-center text-muted text-xs">
                  Для пробы
                </div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Premium 3 мес.</div>
                <div className="text-center">175 000 сум</div>
                <div className="text-center text-muted text-xs">
                  Сезонная потребность
                </div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Premium 6 мес.</div>
                <div className="text-center">235 000 сум</div>
                <div className="text-center text-muted text-xs">
                  Полугодовое использование
                </div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center text-sm bg-primary-light/20">
                <div className="font-bold text-primary">Premium 12 мес. ⭐</div>
                <div className="text-center font-bold text-primary">
                  425 000 сум
                </div>
                <div className="text-center text-muted text-xs">
                  Самый выгодный (35 417/мес.)
                </div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Заметка:</strong> Stars — линейная цена 240 сум/star. В App Store и Play Market и Stars, и Premium на 17-30% дороже. Местная карта не работает, есть курсовой риск.
            </p>
            <p className="text-muted leading-relaxed">
              Реальный пример: если вы Premium-пользователь и ещё покупаете 200 Stars в месяц (для AI-функций), месячные расходы 35 417 + 48 000 = ~83 417 сум. За 12 месяцев — ~1 000 000 сум. Это реальный объём полного пакета Premium + Stars.
            </p>
          </section>

          {/* Section 5 — Together strategy */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Стратегия совместного использования Stars и Premium
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Большинство активных пользователей Telegram используют оба продукта. Каждый выполняет свою задачу:
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  📅 Premium — для ежедневного использования
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Каждый день: загружаете файлы 4 ГБ, открываете 1000 каналов, пользуетесь premium-функциями. 12-месячный тариф самый выгодный — 35 417 сум/месяц.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  🎯 Stars — периодически
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Когда возникает конкретная необходимость: 100 Stars для AI-бота, 50 Stars для donate, 200 Stars для пакета premium-стикеров. Средний пользователь тратит 100-500 Stars в месяц.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  🔄 Не влияют друг на друга
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Срок Premium не влияет на баланс Stars и наоборот. Если Premium закончится, купленные Stars остаются на аккаунте и используются в следующих покупках.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  💡 Стратегическая покупка
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Сначала Premium 1 месяц (59 000 сум) — для пробы. Если устроит, переходите на 6 или 12 месяцев. Stars отдельно — когда понадобится. Это самый рациональный финансовый путь.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              <Link
                href="/ru/maqolalar/telegram-premium-narxlari"
                className="text-primary font-semibold hover:underline"
              >
                Сравнение цен Premium
              </Link>
              {" "}— какой тариф выгоднее, с подробным расчётом.
            </p>
          </section>

          {/* Section 6 — Where to buy */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Где покупать — из Узбекистана
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Из Узбекистана и Stars, и Premium можно купить местной картой и в сумах. Главные каналы — отдельные сервисы, каждый специализируется на своём продукте:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  ⭐ Купить Stars
                </h3>
                <p className="text-sm text-muted mb-2">
                  <strong>Сервис:</strong> StarsJoy.uz
                </p>
                <p className="text-sm text-muted mb-2">
                  <strong>Бот:</strong> @starsjoybot
                </p>
                <p className="text-sm text-muted mb-2">
                  <strong>Цена:</strong> 50 Stars от 12 000 сум
                </p>
                <p className="text-sm text-muted mb-3">
                  <strong>Оплата:</strong> Click и карта
                </p>
                <Link
                  href="https://t.me/starsjoybot"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary-light text-primary text-sm font-bold rounded-lg hover:shadow-lg transition-all"
                >
                  Открыть бот →
                </Link>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  💎 Купить Premium
                </h3>
                <p className="text-sm text-muted mb-2">
                  <strong>Сервис:</strong> Premium Send
                </p>
                <p className="text-sm text-muted mb-2">
                  <strong>Бот:</strong> @PremiumSendBot
                </p>
                <p className="text-sm text-muted mb-2">
                  <strong>Цена:</strong> 1 месяц от 59 000 сум
                </p>
                <p className="text-sm text-muted mb-3">
                  <strong>Оплата:</strong> Click, Payme, Uzcard, Humo
                </p>
                <Link
                  href="https://t.me/premiumsendbot"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary-light text-primary text-sm font-bold rounded-lg hover:shadow-lg transition-all"
                >
                  Открыть бот →
                </Link>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">App Store/Play Market</strong> — альтернатива, но требуется зарубежная карта и цена выше на 17-30%. В официальном приложении Telegram тоже можно купить, но местная карта не работает. Местные реселлеры — самый рациональный вариант для Узбекистана.
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
                  q: "Заменяют ли Stars Premium?",
                  a: "Нет. Stars — внутренняя валюта для ботов и каналов, Premium — расширенный режим аккаунта. Файлы 4 ГБ, 1000 каналов и premium-функции через Stars не получить — это функции Premium.",
                },
                {
                  q: "Что дешевле — Stars или Premium?",
                  a: "Это неверный вопрос — разные продукты. Stars от 50 за 12 000 сум (разово). Premium от 59 000 сум (месячно). Сравнивайте по цели — или возьмите оба сразу.",
                },
                {
                  q: "Истекает ли срок Stars?",
                  a: "Нет. Stars остаются на аккаунте бессрочно. После покупки лежат на балансе сколько угодно. Неиспользованные Stars нельзя обменять обратно на сумы, но они не пропадают.",
                },
                {
                  q: "Stars даются автоматически с Premium?",
                  a: "Нет. Premium-подписка отдельно — Stars покупаются тоже отдельно. Но Premium-пользователи могут пользоваться некоторыми premium-реакциями и эмодзи бесплатно (без покупки Stars).",
                },
                {
                  q: "Выгодно ли дарить Premium через Stars?",
                  a: "Технически да, но финансово дороже. На 3-месячный Premium gift нужно ~1000 Stars (240 000 сум), напрямую — 175 000 сум. Подарок через Stars имеет смысл только в отдельных случаях.",
                },
                {
                  q: "С чего начать тестирование впервые?",
                  a: "Зависит от потребности. Для AI-функций — 50 Stars (12 000). Для файлов 4 ГБ, многих каналов — Premium 1 месяц (59 000). Если не знаете, что нужно конкретно, общая рекомендация — начать с Premium 1 месяц.",
                },
                {
                  q: "Останутся ли Stars при смене аккаунта?",
                  a: "Stars привязаны к аккаунту Telegram. Если аккаунт изменён (номер телефона), Stars остаются с этим аккаунтом. Premium тоже привязан к аккаунту.",
                },
                {
                  q: "Где дешевле покупать — Premium или Stars?",
                  a: "Из Узбекистана для обоих местные реселлеры дешевле: Stars через StarsJoy.uz (240 сум/star), Premium через Premium Send (1 месяц 59 000 сум). App Store и официальное приложение Telegram на 17-30% дороже плюс требование зарубежной карты.",
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

          {/* Quick decision block */}
          <section>
            <div className="bg-section-alt rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-bold text-foreground mb-4 text-center">
                Решение за 30 секунд — что вам нужно?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary mb-2">
                    Stars
                  </p>
                  <p className="text-sm text-muted">
                    AI-бот, стикер, donate, mini app, разовая покупка
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary mb-2">
                    Premium
                  </p>
                  <p className="text-sm text-muted">
                    Файлы 4 ГБ, много каналов, premium-функции, ежедневное использование
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
                    href="/ru/maqolalar/telegram-stars-ozbekistondan-sotib-olish"
                    className="text-primary font-semibold hover:underline"
                  >
                    Как купить Stars в Узбекистане
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ru/maqolalar/telegram-premium-vs-oddiy-telegram"
                    className="text-primary font-semibold hover:underline"
                  >
                    Premium vs обычный Telegram: 15 отличий
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ru/maqolalar/telegram-premium-narxlari"
                    className="text-primary font-semibold hover:underline"
                  >
                    Цены Telegram Premium 2026: тарифы 1, 3, 6, 12 месяцев
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ru/maqolalar/telegram-premium-nima"
                    className="text-primary font-semibold hover:underline"
                  >
                    Что такое Telegram Premium и его возможности
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          {/* Conclusion - Dual CTA */}
          <section>
            <div className="hero-gradient rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-5 left-5 w-32 h-32 bg-white rounded-full blur-2xl" />
              </div>
              <div className="relative">
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  Stars и Premium — оба продукта доступны из Узбекистана в сумах через местную карту. Определите, что нужно конкретно вам, и начните с правильного канала.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="https://t.me/starsjoybot"
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all"
                  >
                    ⭐ Stars — @starsjoybot
                  </Link>
                  <Link
                    href="https://t.me/premiumsendbot"
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all"
                  >
                    💎 Premium — @PremiumSendBot
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
