import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Подарить Telegram Premium на 12 месяцев — в Узбекистане за сумы, по username",
  description:
    "Подарить Telegram Premium на 12 месяцев — через @PremiumSendBot любому человеку за 425 000 сум. Оплата Uzcard, Humo. Вводите username — Premium активируется.",
  keywords: [
    "подарить Telegram Premium 12 месяцев",
    "telegram premium 12 месяцев подарок",
    "telegram premium 1 год подарить",
    "telegram premium 12 месяцев отправить",
    "telegram premium подарок цена 12 месяцев",
    "telegram premium подарить другому человеку",
    "telegram premium подарок Узбекистан",
    "telegram premium gift bot",
    "PremiumSendBot",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/ru/maqolalar/12-oylik-telegram-premium-sovga-qilish",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/12-oylik-telegram-premium-sovga-qilish",
      ru: "https://premiumsend.uz/ru/maqolalar/12-oylik-telegram-premium-sovga-qilish",
    },
  },
  openGraph: {
    title: "Подарить Telegram Premium на 12 месяцев — 425 000 сум",
    description:
      "Подарите любому человеку 12-месячный Telegram Premium. Через @PremiumSendBot, оплата Uzcard, Humo в сумах. Вводите username — Premium активируется.",
    url: "https://premiumsend.uz/ru/maqolalar/12-oylik-telegram-premium-sovga-qilish",
    type: "article",
    publishedTime: "2026-04-08",
  },
};

export default function Article12MonthGiftRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Подарить Telegram Premium на 12 месяцев — в Узбекистане за сумы, по username",
    description:
      "Подарить Telegram Premium на 12 месяцев — любому человеку через @PremiumSendBot за 425 000 сум. Оплата Uzcard, Humo в сумах.",
    datePublished: "2026-04-08",
    dateModified: "2026-04-08",
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
      "https://premiumsend.uz/ru/maqolalar/12-oylik-telegram-premium-sovga-qilish",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Что нужно для того, чтобы подарить 12-месячный Telegram Premium?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Только Telegram username получателя. В @PremiumSendBot выбираете 12-месячный пакет, вводите username, оплачиваете через Uzcard или Humo — Premium активируется автоматически.",
        },
      },
      {
        "@type": "Question",
        name: "Узнает ли человек, кто подарил ему Premium?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Через бот Premium активируется напрямую на аккаунте — отдельного уведомления не приходит. Если хотите сообщить, что это подарок, напишите человеку сами.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько стоит подарить 12-месячный Telegram Premium?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "В Premium Send стоимость подарка 12-месячного Telegram Premium — 425 000 сум. Всего 35 417 сум в месяц — самый выгодный пакет.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли вернуть подаренный Premium?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет. После активации Premium отменить или вернуть нельзя. Поэтому внимательно проверяйте username перед оплатой.",
        },
      },
      {
        "@type": "Question",
        name: "Нужна ли иностранная карта для подарка Telegram Premium в Узбекистане?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет. Через @PremiumSendBot можно оплатить картой Uzcard или Humo в сумах. Также работают Click и Payme. Иностранная карта не требуется.",
        },
      },
      {
        "@type": "Question",
        name: "Нужен ли номер телефона получателя подарка?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет. Нужен только Telegram username. Номер телефона, пароль или другие личные данные не требуются.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько времени занимает подарок 12-месячного Telegram Premium?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Весь процесс занимает не более 5 минут. Выбираете пакет в боте, вводите username, оплачиваете — Premium активируется в течение нескольких минут.",
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
        name: "Подарить Telegram Premium на 12 месяцев",
        item: "https://premiumsend.uz/ru/maqolalar/12-oylik-telegram-premium-sovga-qilish",
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
          Подарить Telegram Premium на 12 месяцев
        </span>
      </nav>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gold-light text-amber-700">
              Советы
            </span>
            <time className="text-xs text-muted" dateTime="2026-04-08">
              8 апреля 2026
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Подарить Telegram Premium на 12 месяцев
          </h1>
          {/* AI/SEO Snippet */}
          <div className="bg-amber-50 rounded-xl p-5 border border-amber-200 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>Подарить Telegram Premium на 12 месяцев</strong> — это возможность преподнести любому пользователю Telegram годовую Premium-подписку. В Узбекистане через{" "}
              <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>{" "}
              за <strong>425 000 сум</strong>, картой Uzcard или Humo, просто введя username. Иностранная карта не нужна.
            </p>
          </div>
          <p className="text-lg text-muted leading-relaxed">
            У друга скоро день рождения. Или вы хотите поблагодарить коллегу. Может, хотите подарить члену семьи что-то по-настоящему полезное, чем он будет пользоваться каждый день. Классические подарки — цветы, сладости, подарочные карты — забываются через несколько дней. А подарить 12-месячный Telegram Premium — это подарок, который приносит пользу каждый день в течение года.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Проблема в том, что в Узбекистане подарить Telegram Premium не так просто. Официальная функция подарка в Telegram требует иностранные платёжные системы — Uzcard и Humo не работают. В этой статье мы подробно разберём самый удобный способ подарить 12-месячный Telegram Premium, цены и пошаговый процесс.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Почему стоит подарить именно 12-месячный Telegram Premium?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              При выборе подарка в виде Telegram Premium большинство сначала сомневается в выборе срока. 1 месяц, 3 месяца, 6 месяцев или 12 месяцев — какой вариант лучше для подарка? Ответ прост: если вы хотите, чтобы ваш подарок запомнился и приносил пользу долгое время — 12 месяцев — самый верный выбор.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              1-месячный Premium в подарок — это приятный жест, но через месяц подписка закончится и человек вернётся к обычному Telegram. 3 месяца чуть дольше, но всё равно быстро заканчивается. 6 месяцев — хороший средний вариант. Но 12 месяцев — это совершенно другой уровень. Получатель подарка целый год каждый день пользуется Premium-возможностями. Каждый раз, когда открывает Telegram — без рекламы, с расширенными функциями — вспоминает ваш подарок.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Кроме того, 12-месячный пакет самый выгодный финансово. В Premium Send стоимость 12-месячного Telegram Premium — 425 000 сум, всего 35 417 сум в месяц. Для сравнения: 1-месячный пакет стоит 59 000 сум, то есть за 12 отдельных месяцев вышло бы 708 000 сум. С 12-месячным пакетом экономия составляет 283 000 сум — почти 40%.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: "Целый год пользы",
                  desc: "Получатель подарка 365 дней пользуется Premium-возможностями — это подарок, который обновляется каждый день.",
                },
                {
                  title: "Самая выгодная цена",
                  desc: "35 417 сум в месяц — на 40% дешевле, чем 1-месячный пакет. Экономите деньги, дарите большую ценность.",
                },
                {
                  title: "Никаких забот с оплатой",
                  desc: "Получатель ничего не платит. Активируется один раз — работает целый год.",
                },
                {
                  title: "Запоминающийся подарок",
                  desc: "Обычные подарки забываются. Telegram Premium используется каждый день — каждый раз напоминает о вас.",
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
              Итог: если хотите подарить что-то ценное, практичное и запоминающееся — 12-месячный Telegram Premium — самый сильный вариант. Это не просто подписка, а годовой цифровой опыт в подарок.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Как подарить 12-месячный Telegram Premium: пошагово
            </h2>
            {/* AI Direct Answer Block */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Короткий ответ:</strong> Откройте{" "}
                <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>{" "}
                в Telegram &rarr; выберите 12-месячный пакет &rarr; введите username получателя &rarr; оплатите 425 000 сум через Uzcard или Humo &rarr; Premium активируется автоматически. Весь процесс — 5 минут.
              </p>
            </div>

            <p className="text-muted leading-relaxed mb-6">
              Процесс подарка 12-месячного Telegram Premium в Узбекистане простой и занимает не более 5 минут. Не нужен номер телефона, пароль или другие личные данные получателя — достаточно только Telegram username. Вот полная инструкция:
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  step: "1",
                  title: "Откройте @PremiumSendBot в Telegram",
                  desc: "Найдите @PremiumSendBot через поиск в Telegram и откройте его. Бот работает прямо внутри Telegram — не нужно устанавливать дополнительные приложения или регистрироваться.",
                },
                {
                  step: "2",
                  title: "Нажмите /start",
                  desc: "Бот приветствует вас и открывает главное меню. В меню доступны пакеты, цены и раздел помощи.",
                },
                {
                  step: "3",
                  title: "Выберите 12-месячный Premium пакет",
                  desc: "В меню выберите «12-месячный Premium». Цена указана в сумах — 425 000 сум. Никакой конвертации долларов или скрытых платежей.",
                },
                {
                  step: "4",
                  title: "Введите username получателя",
                  desc: "Введите Telegram username аккаунта, на который нужно активировать Premium. Это не ваш аккаунт — а аккаунт человека, которому дарите. Проверьте внимательно — после активации изменить нельзя.",
                },
                {
                  step: "5",
                  title: "Оплатите через Uzcard или Humo",
                  desc: "Произведите оплату картой. Также можно перевести через Click или Payme. Бот автоматически определяет сумму и подтверждает оплату.",
                },
                {
                  step: "6",
                  title: "Premium активируется автоматически",
                  desc: "После подтверждения оплаты 12-месячный Telegram Premium активируется напрямую на аккаунте получателя. Обычно это происходит в течение нескольких минут.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
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
              Весь процесс происходит внутри Telegram — не нужно переходить на другой сайт или регистрироваться. Получатель подарка ничего не делает — Premium просто появляется на его аккаунте автоматически. Самое удобное в этом процессе то, что человек, которому вы дарите, может даже не знать заранее — Premium просто появится и будет работать.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Подарить 12-месячный Telegram Premium: официальный gift vs @PremiumSendBot
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              В Telegram есть официальная функция подарка Premium — через кнопку &laquo;Gift Premium&raquo; в чате. Но для пользователей из Узбекистана эта функция фактически не работает. Причина: оплата возможна только через Google Pay, Apple Pay или иностранную карту Visa/Mastercard. Карты Uzcard и Humo не принимаются.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Кроме того, в официальной функции подарка Telegram цены указаны в долларах и меняются в зависимости от курса. Для пользователей из Узбекистана это неудобно — заранее узнать точную сумму сложно.
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Параметр</div>
                <div className="text-center">Официальный gift Telegram</div>
                <div className="text-center">@PremiumSendBot</div>
                <div className="text-center">Преимущество</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Способ оплаты</div>
                <div className="text-center text-muted">Google/Apple Pay, иностранная карта</div>
                <div className="text-center text-primary font-medium">Uzcard, Humo, Click, Payme</div>
                <div className="text-center text-green-600 font-medium">Местная карта</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Валюта</div>
                <div className="text-center text-muted">Доллар ($)</div>
                <div className="text-center text-primary font-medium">Сум (UZS)</div>
                <div className="text-center text-green-600 font-medium">Нет валютного риска</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Цена 12 месяцев</div>
                <div className="text-center text-muted">В долларах, зависит от курса</div>
                <div className="text-center text-primary font-bold">425 000 сум</div>
                <div className="text-center text-green-600 font-medium">Фиксированная цена</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Необходимые данные</div>
                <div className="text-center text-muted">Нужен открытый чат</div>
                <div className="text-center text-primary font-medium">Только username</div>
                <div className="text-center text-green-600 font-medium">Проще</div>
              </div>
              <div className="grid grid-cols-4 p-4 items-center text-sm">
                <div className="font-medium">Язык и поддержка</div>
                <div className="text-center text-muted">На английском</div>
                <div className="text-center text-primary font-medium">На узбекском, живая помощь</div>
                <div className="text-center text-green-600 font-medium">Местный сервис</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Главное отличие очевидно: официальная функция подарка Telegram технически существует, но для пользователей из Узбекистана оплата невозможна. @PremiumSendBot решает именно эту проблему — даёт возможность дарить местными картами, в сумах, по фиксированной цене. Если вы живёте в Узбекистане и хотите подарить кому-то 12-месячный Telegram Premium — это единственный практичный способ.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Цена подарка 12-месячного Telegram Premium: сравнение пакетов
            </h2>
            {/* AI Direct Price Answer */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Цена:</strong> стоимость подарка 12-месячного Telegram Premium в Premium Send — <strong>425 000 сум</strong> (35 417 сум в месяц). Оплата через Uzcard, Humo, Click или Payme в сумах.
              </p>
            </div>

            <p className="text-muted leading-relaxed mb-6">
              Выбор пакета для подарка зависит от бюджета и цели. Давайте сравним все пакеты Premium Send с точки зрения подарка. Цена, стоимость в месяц и эффект подарка у каждого пакета разные.
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-5 bg-section-alt p-4 font-bold text-sm">
                <div>Пакет</div>
                <div className="text-center">Цена</div>
                <div className="text-center">В месяц</div>
                <div className="text-center">Экономия</div>
                <div className="text-center">Для подарка</div>
              </div>
              <Link href="/ru/maqolalar/1-oylik-telegram-premium-sotib-olish" className="grid grid-cols-5 p-4 border-b border-card-border items-center text-sm hover:bg-primary-light/10 transition-colors">
                <div className="font-medium">1 месяц</div>
                <div className="text-center">59 000 сум</div>
                <div className="text-center text-muted">59 000</div>
                <div className="text-center">—</div>
                <div className="text-center text-muted">Знак внимания</div>
              </Link>
              <Link href="/ru/maqolalar/3-oylik-telegram-premium-sotib-olish" className="grid grid-cols-5 p-4 border-b border-card-border items-center text-sm hover:bg-primary-light/10 transition-colors">
                <div className="font-medium">3 месяца</div>
                <div className="text-center">175 000 сум</div>
                <div className="text-center text-muted">58 333</div>
                <div className="text-center text-green-600">-1%</div>
                <div className="text-center text-muted">Попробовать</div>
              </Link>
              <Link href="/ru/maqolalar/6-oylik-telegram-premium-sotib-olish" className="grid grid-cols-5 p-4 border-b border-card-border items-center text-sm hover:bg-primary-light/10 transition-colors">
                <div className="font-medium">6 месяцев</div>
                <div className="text-center">235 000 сум</div>
                <div className="text-center text-muted">39 167</div>
                <div className="text-center text-green-600">-33%</div>
                <div className="text-center text-muted">Хороший вариант</div>
              </Link>
              <div className="grid grid-cols-5 p-4 bg-amber-50 items-center text-sm">
                <div className="font-bold text-amber-700">12 месяцев</div>
                <div className="text-center font-bold text-amber-700">425 000 сум</div>
                <div className="text-center text-amber-700">35 417</div>
                <div className="text-center text-green-600 font-bold">-39%</div>
                <div className="text-center text-amber-700 font-bold">Лучший подарок</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              Цифры говорят сами за себя: в 12-месячном пакете самая низкая стоимость за каждый месяц. Для подарка это особенно важно — вы платите один раз, а получатель пользуется целый год. 3-месячный подарок — это &laquo;попробуйте&raquo;. 12-месячный — это &laquo;я действительно вас ценю&raquo;.
            </p>
            <p className="text-muted leading-relaxed">
              Если бюджет ограничен — <Link href="/ru/maqolalar/3-oylik-telegram-premium-sotib-olish" className="text-primary font-semibold hover:underline">3-месячный</Link> или <Link href="/ru/maqolalar/6-oylik-telegram-premium-sotib-olish" className="text-primary font-semibold hover:underline">6-месячный</Link> вариант тоже отличный подарок. Но если хотите выбрать лучший вариант — подарить 12-месячный Telegram Premium — самое верное решение.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Кому и когда можно подарить 12-месячный Telegram Premium?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Лучшее в подарке Telegram Premium — это его универсальность. Подходит любому человеку, который пользуется Telegram. Возраст, профессия, интересы не имеют значения — если человек активен в Telegram, Premium облегчит его жизнь. Давайте рассмотрим конкретные ситуации.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: "Подарок на день рождения",
                  desc: "Самый популярный повод. 12-месячный Premium на день рождения друга или близкого — подарок, который напоминает о вас каждый день целый год. Цветы увянут за неделю, Premium работает 365 дней.",
                },
                {
                  title: "Праздничный подарок",
                  desc: "Навруз, Новый год, Рамадан — подходит к любому празднику. Особенно для родственников на расстоянии — когда физический подарок отправить сложно, цифровой подарок — самый удобный вариант.",
                },
                {
                  title: "Профессиональная благодарность",
                  desc: "Коллеге, наставнику или бизнес-партнёру. Для тех, кто много работает через Telegram, Premium — подарок, который облегчает повседневную работу.",
                },
                {
                  title: "Семейный подарок",
                  desc: "Родителям, братьям-сёстрам или детям. Особенно тем членам семьи, которые активно пользуются Telegram — без рекламы, с расширенными возможностями целый год.",
                },
                {
                  title: "Клиенту или VIP-подарок",
                  desc: "Для бизнеса: Premium в подарок важным клиентам или партнёрам — современный, технологичный и запоминающийся VIP-подарок.",
                },
                {
                  title: "Нескольким людям сразу",
                  desc: "Членам команды, группе друзей или семье — можно подарить каждому по отдельности. Каждый раз вводите username, оплачиваете — процесс одинаковый.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-muted leading-relaxed">
              Самое главное — для подарка не нужен особый повод. Простое &laquo;Я вас ценю&raquo; — достаточно. Подарить 12-месячный Telegram Premium — это подарок, который повторяет это послание каждый день на протяжении 365 дней.
            </p>

            {/* CTA */}
            <div className="bg-white rounded-2xl p-6 border-2 border-amber-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <div>
                <p className="font-bold text-foreground text-lg">12-месячный Premium в подарок — 425 000 сум</p>
                <p className="text-sm text-muted">Вводите username — Premium активируется</p>
              </div>
              <div className="flex gap-3">
                <Link href="/ru/12-oylik" className="px-5 py-2.5 rounded-xl bg-amber-100 text-amber-700 font-semibold text-sm hover:bg-amber-500 hover:text-white transition-all">
                  Подробнее
                </Link>
                <Link href="https://t.me/premiumsendbot" target="_blank" className="px-5 py-2.5 rounded-xl bg-amber-500 text-white font-semibold text-sm shadow-lg shadow-amber-500/25">
                  Подарить
                </Link>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Что почувствует получатель 12-месячного Telegram Premium?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              В подарке самое важное — опыт получателя. Не список функций и цифры, а что человек ощущает в повседневной жизни. Давайте посмотрим глазами получателя — что меняется с первого дня после активации Premium?
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Первый день: &laquo;Реклама исчезла!&raquo;</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Самое первое и самое заметное изменение — реклама в Telegram-каналах полностью исчезает. Для тех, кто подписан на много каналов, это огромная разница. На следующий день открывает каналы — чистая, безрекламная лента. Это ощущение повторяется каждый день в течение года.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Первая неделя: &laquo;Это очень удобно&raquo;</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Расшифровка голосовых сообщений в текст, отправка файлов до 4 ГБ, быстрый перевод — эти функции поначалу кажутся &laquo;дополнительными&raquo;. Но за неделю человек к ним привыкает, и без них Telegram уже кажется неудобным. Особенно для тех, кто много использует Telegram по работе.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Первый месяц: &laquo;Спасибо за подарок&raquo;</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Premium-бейдж на профиле, эксклюзивные стикеры и эмодзи — с ними человек выделяется в Telegram. В разговорах с друзьями и коллегами начинается &laquo;У тебя есть Premium? Откуда?&raquo;. В этот момент ваш подарок снова вспоминается — и это длится не месяц, а целый год.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">В течение 12 месяцев: &laquo;Без Premium уже сложно&raquo;</h3>
                <p className="text-sm text-muted leading-relaxed">
                  За год человек настолько привыкает к Premium-возможностям, что когда подписка подходит к концу, он сам захочет продлить. Это показывает самую сильную сторону подарка — вы дарите не просто 12 месяцев, а привычку постоянного использования.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Именно поэтому подарить 12-месячный Telegram Premium отличается от обычного подарка. Цветы увянут, сладости закончатся — а Premium показывает свой эффект каждый день на протяжении 365 дней. Получатель вспоминает вас каждый раз, когда открывает Telegram.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Что нужно знать перед тем, как подарить 12-месячный Telegram Premium
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Процесс подарка простой, но знание нескольких важных моментов убережёт от проблем и сделает опыт ещё лучше. Эти советы основаны на практическом опыте:
            </p>

            <div className="space-y-3 mb-6">
              {[
                {
                  title: "Проверьте username дважды",
                  desc: "Самый важный шаг. После активации Premium перенести на другой аккаунт или вернуть нельзя. Одна ошибка в букве — подарок уйдёт не тому человеку. Скопируйте username или подтвердите с человеком.",
                },
                {
                  title: "Проверьте, есть ли у получателя Premium",
                  desc: "Если у человека уже есть Premium-подписка — лучше проверить заранее. Срок может продлиться, но для точной информации обратитесь в поддержку бота. Чтобы не сделать двойную оплату — будьте внимательны.",
                },
                {
                  title: "Сообщите, что это подарок",
                  desc: "При активации через бот человек не получает уведомления — Premium просто появляется. Если хотите сказать, что это подарок — напишите человеку отдельное сообщение. Это усилит эффект подарка.",
                },
                {
                  title: "Сохраните чек оплаты",
                  desc: "Бот выдаёт чек после подтверждения оплаты. Сохраните его — если возникнет техническая проблема, он понадобится при обращении в поддержку.",
                },
                {
                  title: "Оплата безопасна — данные карты не сохраняются",
                  desc: "Оплата через Premium Send — это обычный перевод с карты на карту или платёж через Click/Payme. Номер вашей карты, пароль и личные данные нигде не сохраняются. Оплатили, а Premium не пришёл — деньги возвращаются.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-muted leading-relaxed">
              Эти советы кажутся простыми, но на практике уберегают от многих проблем. Особенно если дарите впервые — внимательно прочитайте список выше. Процесс — 5 минут, а результат длится целый год.
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
                  q: "Что нужно для того, чтобы подарить 12-месячный Telegram Premium?",
                  a: "Только Telegram username получателя. В @PremiumSendBot выбираете 12-месячный пакет, вводите username, оплачиваете через Uzcard или Humo — Premium активируется автоматически.",
                },
                {
                  q: "Узнает ли человек, кто подарил ему Premium?",
                  a: "Через бот Premium активируется напрямую на аккаунте — отдельного уведомления не приходит. Если хотите сообщить, что это подарок, напишите человеку сами.",
                },
                {
                  q: "Сколько стоит подарить 12-месячный Telegram Premium?",
                  a: "В Premium Send стоимость подарка — 425 000 сум. Всего 35 417 сум в месяц — самый выгодный пакет.",
                },
                {
                  q: "Можно ли вернуть подаренный Premium?",
                  a: "Нет. После активации Premium отменить или вернуть нельзя. Поэтому внимательно проверяйте username.",
                },
                {
                  q: "Нужна ли иностранная карта для подарка Telegram Premium в Узбекистане?",
                  a: "Нет. Через @PremiumSendBot можно оплатить картой Uzcard или Humo в сумах. Также работают Click и Payme.",
                },
                {
                  q: "Нужен ли номер телефона получателя?",
                  a: "Нет. Нужен только Telegram username. Номер телефона, пароль или другие личные данные не требуются.",
                },
                {
                  q: "Сколько времени занимает подарок 12-месячного Telegram Premium?",
                  a: "Весь процесс — не более 5 минут. Выбираете пакет, вводите username, оплачиваете — Premium активируется в течение нескольких минут.",
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

          {/* Brand Trust Block */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Почему именно через Premium Send?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              В Узбекистане есть несколько вариантов покупки или подарка Telegram Premium. Но Premium Send чётко отличается от остальных — и эти отличия особенно важны, когда вы дарите.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm text-center">
                <p className="text-2xl font-extrabold text-primary mb-1">5 минут</p>
                <p className="text-sm text-muted">От заказа до активации. После подтверждения оплаты — Premium включается автоматически</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm text-center">
                <p className="text-2xl font-extrabold text-primary mb-1">В сумах</p>
                <p className="text-sm text-muted">Uzcard, Humo, Click, Payme. Никакой конвертации долларов и скрытых комиссий</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm text-center">
                <p className="text-2xl font-extrabold text-primary mb-1">На узбекском</p>
                <p className="text-sm text-muted">Интерфейс бота и поддержка полностью на узбекском языке</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm text-center">
                <p className="text-2xl font-extrabold text-primary mb-1">Гарантия</p>
                <p className="text-sm text-muted">Оплатили, а Premium не пришёл — деньги возвращаются. Чек оплаты сохраняется у вас</p>
              </div>
            </div>
            <p className="text-muted leading-relaxed">
              Premium Send — это специализированный сервис для Telegram Premium в Узбекистане. Не просто &laquo;перепродажа&raquo;, а удобная, понятная и безопасная система для узбекского пользователя. Когда вы дарите, это особенно важно — вы доверяете не только свои деньги, но и впечатление получателя подарка надёжному сервису.
            </p>
          </section>

          {/* Conclusion */}
          <section>
            <div className="bg-amber-500 rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-5 left-5 w-32 h-32 bg-white rounded-full blur-2xl" />
              </div>
              <div className="relative">
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  Подарить 12-месячный Telegram Premium — это не просто подписка, это годовой цифровой опыт в подарок. Хотите сделать другу, члену семьи или коллеге самый полезный и запоминающийся подарок —{" "}
                  <strong className="text-white">@PremiumSendBot</strong> прямо сейчас, за 425 000 сум, картой Uzcard или Humo.
                </p>
                <Link
                  href="https://t.me/premiumsendbot"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-amber-600 font-bold rounded-2xl hover:shadow-2xl transition-all text-lg"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  Подарить сейчас
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
