import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Купить Telegram Premium на 12 месяцев — 425 000 сум, через Uzcard и Humo",
  description:
    "Купить Telegram Premium на 12 месяцев в Узбекистане за 425 000 сум. Оплата в сумах через Uzcard, Humo. В Telegram 12-месячный пакет есть, но только с иностранной картой. В Premium Send оплата в сумах.",
  keywords: [
    "купить Telegram Premium 12 месяцев",
    "Telegram Premium 12 месяцев",
    "Telegram Premium 1 год",
    "Telegram Premium годовой",
    "Telegram Premium Uzcard",
    "Telegram Premium Humo",
    "Telegram Premium Узбекистан",
    "Telegram Premium за сумы",
    "Telegram Premium 425000",
    "Telegram Premium цена",
    "PremiumSendBot",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/ru/maqolalar/12-oylik-telegram-premium-sotib-olish",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/12-oylik-telegram-premium-sotib-olish",
      ru: "https://premiumsend.uz/ru/maqolalar/12-oylik-telegram-premium-sotib-olish",
    },
  },
  openGraph: {
    title: "Купить Telegram Premium на 12 месяцев — 425 000 сум",
    description:
      "Купите 12-месячный Telegram Premium в Узбекистане за сумы. Через Uzcard, Humo за 425 000 сум. Через @PremiumSendBot.",
    url: "https://premiumsend.uz/ru/maqolalar/12-oylik-telegram-premium-sotib-olish",
    type: "article",
    publishedTime: "2026-04-02",
  },
};

export default function Article12Month() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Купить Telegram Premium на 12 месяцев — в Узбекистане за 425 000 сум",
    description:
      "Купить Telegram Premium на 12 месяцев в Узбекистане через Uzcard, Humo за 425 000 сум. Подробное руководство.",
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
      "https://premiumsend.uz/ru/maqolalar/12-oylik-telegram-premium-sotib-olish",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Нужна ли иностранная карта для покупки 12-месячного Telegram Premium?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет. Через @PremiumSendBot можно оплатить картой Uzcard или Humo. Также можно перевести через Click или Payme на карту бота. Иностранная карта не требуется.",
        },
      },
      {
        "@type": "Question",
        name: "Есть ли 12-месячный Premium в официальном приложении Telegram?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "В Telegram есть 12-месячная подписка, но оплата производится только через Google Pay, Apple Pay или иностранную банковскую карту. Uzcard и Humo не работают. Через Premium Send можно оплатить в сумах местной картой.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько времени занимает активация 12-месячного Telegram Premium?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "После оплаты обычно активируется в течение нескольких минут. Бот автоматически определяет оплату и доставляет Premium.",
        },
      },
      {
        "@type": "Question",
        name: "Что нужно для того, чтобы подарить 12-месячный Premium другому человеку?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нужен только Telegram username этого человека. Через бота вводите username, производите оплату — Premium активируется непосредственно на его аккаунте.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько стоит 12-месячный Telegram Premium?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "В Premium Send 12-месячный Telegram Premium стоит 425 000 сум. Всего 35 417 сум в месяц — самая низкая месячная цена среди всех пакетов.",
        },
      },
      {
        "@type": "Question",
        name: "12-месячная подписка дороже 3- или 6-месячной?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Общая сумма больше, но в пересчёте на месяц 12-месячная подписка самая дешёвая. 3-месячная — 58 333 сум/мес., 6-месячная — 39 167 сум/мес., 12-месячная — всего 35 417 сум/мес.",
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
        name: "Купить Telegram Premium на 12 месяцев",
        item: "https://premiumsend.uz/ru/maqolalar/12-oylik-telegram-premium-sotib-olish",
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
          Купить Telegram Premium на 12 месяцев
        </span>
      </nav>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-100 text-green-700">
              Руководство
            </span>
            <time className="text-xs text-muted" dateTime="2026-04-02">
              2 апреля 2026 г.
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Купить Telegram Premium на 12 месяцев
          </h1>
          {/* AI/SEO Snippet Definition */}
          <div className="bg-green-50 rounded-xl p-5 border border-green-200 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>12-месячный Telegram Premium</strong> — это самый экономичный вариант расширенной подписки Telegram. В Узбекистане можно купить через{" "}
              <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>{" "}
              за <strong>425 000 сум</strong> (35 417 сум в месяц), оплатив картой Uzcard или Humo. В Telegram 12-месячный пакет есть, но оплачивается только иностранной картой — в Premium Send оплата в сумах.
            </p>
          </div>
          <p className="text-lg text-muted leading-relaxed">
            Целый год пользоваться Telegram Premium без перерыва — без рекламы, с безграничными возможностями, без ежемесячных хлопот с оплатой. Это мечта многих пользователей Telegram. Но чтобы воплотить эту мечту в Узбекистане, нужно знать правильный путь — потому что в официальном приложении Telegram оплата возможна только иностранной картой. Uzcard и Humo не работают.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            В этой статье мы подробно рассмотрим, как купить 12-месячный Telegram Premium в Узбекистане — через местные платёжные системы, безопасно и быстро.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Почему 12-месячный Telegram Premium — самый выгодный вариант?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              При выборе подписки Telegram Premium большинство сравнивает цену и срок. 3-месячный, 6-месячный — все они подходят. Но 12-месячная годовая подписка Telegram Premium — это не просто более длительный срок, это совсем другая логика.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Если платить каждый месяц отдельно — 12 раз процесс оплаты, 12 раз подтверждение, 12 раз проблема с поиском карты. В Узбекистане эта проблема ещё острее — потому что местные карты не работают в официальной системе Telegram. 12-месячный пакет решает всё это одним разом.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: "Максимальная экономия",
                  desc: "В Premium Send 12 месяцев стоит 425 000 сум — всего 35 417 сум в месяц. На 39% дешевле 3-месячного, на 10% дешевле 6-месячного.",
                },
                {
                  title: "Удобство планирования",
                  desc: "Оплатите один раз в начале года и планируйте весь год. Для предпринимателей и блогеров это очень важно.",
                },
                {
                  title: "Непрерывность",
                  desc: "Не нужно следить за датой окончания подписки. В течение 12 месяцев Premium не прекращается.",
                },
                {
                  title: "Лучший подарок",
                  desc: "Подарить кому-то 12-месячный Premium — это целый год без рекламы, с полными возможностями Telegram.",
                },
                {
                  title: "Психологический комфорт",
                  desc: "Вопрос «Мне снова платить?» исчезает. Premium просто работает — весь год.",
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
              <Link href="/ru/3-oylik" className="text-primary font-semibold hover:underline">3-месячный вариант</Link> хорош для пробного использования,{" "}
              <Link href="/ru/6-oylik" className="text-primary font-semibold hover:underline">6-месячный</Link> — для баланса цены и качества. Но если вы покупаете Premium для постоянного использования — 12-месячный — самый правильный выбор.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Есть ли 12-месячная подписка в официальном приложении Telegram?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              <strong className="text-foreground">Да, в Telegram есть 12-месячная подписка.</strong> Но проблема в другом.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Telegram предлагает 1-месячную и 12-месячную подписку. Однако оплата возможна только через Google Pay, Apple Pay или иностранную банковскую карту. Местные карты Узбекистана — Uzcard и Humo — не работают с этими системами. То есть 12-месячная подписка в Telegram есть, но для пользователя из Узбекистана оплатить её практически невозможно.
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-section-alt rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-2">
                  Проблема — платёжная система не работает
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Для оплаты через официальное приложение Telegram нужен Google Pay или Apple Pay. Эти системы не интегрированы с местными картами Узбекистана — Uzcard и Humo. То есть оплата технически невозможна.
                </p>
              </div>
              <div className="bg-section-alt rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-2">
                  Проблема — цена в долларах
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Оплата в Telegram производится в долларах. Если курс доллара изменится — каждый раз платите другую сумму. В Premium Send установлена точная цена в сумах — нет валютного риска.
                </p>
              </div>
              <div className="bg-section-alt rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-2">
                  Проблема — нет 3- и 6-месячных пакетов
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  В Telegram есть только 1-месячный и 12-месячный. Если нужен 3- или 6-месячный — можно купить только через сервисы вроде Premium Send.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">Premium Send</strong> решает эти проблемы — позволяет купить 12-месячный Telegram Premium за узбекские сумы, картой Uzcard или Humo, по точно установленной цене.
            </p>
          </section>

          {/* Section 3 — Price */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Цена 12-месячного Telegram Premium: полный анализ
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Цена 12-месячного Telegram Premium — это вопрос, который большинство задаёт в первую очередь. Давайте рассмотрим его прозрачно.
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Параметр</div>
                <div className="text-center">Telegram официальный</div>
                <div className="text-center">@PremiumSendBot</div>
                <div className="text-center">Преимущество</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">12 месяцев</div>
                <div className="text-center text-muted">Есть, но иностр. карта</div>
                <div className="text-center text-primary font-medium">Есть, за сумы</div>
                <div className="text-center text-green-600 font-medium">Местная карта</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">3 и 6 мес.</div>
                <div className="text-center text-muted">Нет</div>
                <div className="text-center text-primary font-medium">Есть</div>
                <div className="text-center text-green-600 font-medium">Доп. выбор</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Оплата</div>
                <div className="text-center text-muted">Google/Apple Pay</div>
                <div className="text-center text-primary font-medium">Uzcard, Humo</div>
                <div className="text-center text-green-600 font-medium">Узб. карта</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Цена</div>
                <div className="text-center text-muted">~$59.88/год ($)</div>
                <div className="text-center text-primary font-bold">425 000 сум</div>
                <div className="text-center text-green-600 font-medium">Точно, в сумах</div>
              </div>
              <div className="grid grid-cols-4 p-4 items-center text-sm">
                <div className="font-medium">Валютный риск</div>
                <div className="text-center text-muted">Есть</div>
                <div className="text-center text-primary font-medium">Нет</div>
                <div className="text-center text-green-600 font-medium">Стабильная цена</div>
              </div>
            </div>

            {/* Package comparison */}
            <h3 className="text-xl font-bold text-foreground mb-4">Сравнение пакетов Premium Send:</h3>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Пакет</div>
                <div className="text-center">Цена</div>
                <div className="text-center">В месяц</div>
                <div className="text-center">Экономия</div>
              </div>
              <Link href="/ru/3-oylik" className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm hover:bg-primary-light/10 transition-colors">
                <div className="font-medium">3 месяца</div>
                <div className="text-center">175 000 сум</div>
                <div className="text-center text-muted">58 333</div>
                <div className="text-center">&mdash;</div>
              </Link>
              <Link href="/ru/6-oylik" className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm hover:bg-primary-light/10 transition-colors">
                <div className="font-medium">6 месяцев</div>
                <div className="text-center">235 000 сум</div>
                <div className="text-center text-muted">39 167</div>
                <div className="text-center text-green-600">-33%</div>
              </Link>
              <div className="grid grid-cols-4 p-4 bg-green-50 items-center text-sm">
                <div className="font-bold text-green-700">12 месяцев</div>
                <div className="text-center font-bold text-green-700">425 000 сум</div>
                <div className="text-center text-green-700">35 417</div>
                <div className="text-center text-green-600 font-bold">-39%</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              В 12-месячном пакете ежемесячная стоимость составляет всего <strong className="text-foreground">35 417 сум</strong> — самая низкая месячная цена среди всех пакетов. Нет валютного риска — вы платите точно установленную цену в сумах.
            </p>
          </section>

          {/* Section 4 — Step by step */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Купить 12-месячный Telegram Premium в Узбекистане: пошагово
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Процесс простой и занимает не более 5-7 минут. Ниже полная инструкция по покупке 12-месячного Telegram Premium через @PremiumSendBot:
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  step: "1",
                  title: "Откройте бота",
                  desc: "Найдите и откройте @PremiumSendBot в Telegram. Бот работает прямо внутри Telegram — скачивать дополнительное приложение не нужно.",
                },
                {
                  step: "2",
                  title: "Запустите",
                  desc: "Нажмите кнопку /start. Бот поприветствует на узбекском языке и откроет главное меню.",
                },
                {
                  step: "3",
                  title: "Выберите 12-месячный пакет",
                  desc: "В меню выберите вариант «12-месячный Premium». Цена указана в узбекских сумах — без конвертации в доллары.",
                },
                {
                  step: "4",
                  title: "Введите аккаунт",
                  desc: "Введите Telegram username аккаунта, на который нужно активировать Premium. Это может быть ваш аккаунт или аккаунт человека, которому хотите сделать подарок.",
                },
                {
                  step: "5",
                  title: "Произведите оплату",
                  desc: "Оплатите картой Uzcard или Humo. Также можно перевести через Click или Payme на карту бота — бот автоматически определит сумму.",
                },
                {
                  step: "6",
                  title: "Premium активирован",
                  desc: "После подтверждения оплаты 12-месячная подписка Telegram Premium автоматически активируется. Обычно это происходит в течение нескольких минут.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
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
              Если в процессе возникнут вопросы или проблемы — служба поддержки бота поможет на узбекском языке.
            </p>

            {/* Промежуточный CTA */}
            <div className="bg-white rounded-2xl p-6 border-2 border-green-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-bold text-foreground text-lg">12-месячный Telegram Premium — 425 000 сум</p>
                <p className="text-sm text-muted">35 417 сум в месяц — самый выгодный вариант</p>
              </div>
              <div className="flex gap-3">
                <Link href="/ru/12-oylik" className="px-5 py-2.5 rounded-xl bg-green-100 text-green-700 font-semibold text-sm hover:bg-green-600 hover:text-white transition-all">
                  Подробнее
                </Link>
                <Link href="https://t.me/premiumsendbot" target="_blank" className="px-5 py-2.5 rounded-xl bg-green-600 text-white font-semibold text-sm shadow-lg shadow-green-600/25">
                  Купить
                </Link>
              </div>
            </div>
          </section>

          {/* Section 5 — Features */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Возможности 12-месячного Telegram Premium: что вы получаете на год?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Годовая подписка Telegram Premium — это совершенно другая версия Telegram. В течение 12 месяцев вы получаете полный доступ к следующим возможностям:
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Файлы и медиа</h3>
                <ul className="text-sm text-muted space-y-1">
                  <li>Отправка файлов до 4 ГБ вместо обычных 2 ГБ</li>
                  <li>Большие видео, архивы, проектные файлы — никаких проблем с лимитом</li>
                  <li>Возможность отправки медиа без сжатия</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Интерфейс и удобные функции</h3>
                <ul className="text-sm text-muted space-y-1">
                  <li>Voice-to-text — автоматическое чтение голосовых сообщений в текстовом виде</li>
                  <li>Быстрый перевод — перевод сообщений на иностранных языках одним нажатием</li>
                  <li>Неограниченные закреплённые сообщения — больше закреплённых сообщений в группах и каналах</li>
                  <li>Быстрая навигация — упрощённый поиск и переход в длинных чатах</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Визуальное оформление и персонализация</h3>
                <ul className="text-sm text-muted space-y-1">
                  <li>Эксклюзивные стикеры и эмодзи — только для Premium-пользователей</li>
                  <li>Анимированные реакции — специальные анимации</li>
                  <li>Значок профиля — отображение статуса Premium-пользователя</li>
                  <li>Цвет имени — добавление специального цвета к профилю</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Безопасность и конфиденциальность</h3>
                <ul className="text-sm text-muted space-y-1">
                  <li>Без рекламы — реклама в Telegram-каналах полностью отключается</li>
                  <li>Больше аккаунтов Telegram на одном устройстве</li>
                </ul>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Все эти возможности работают непрерывно в течение 12 месяцев. Не нужно думать об обновлении подписки или оплате — пользуйтесь спокойно целый год.
            </p>
          </section>

          {/* Section 6 — Gift */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Кому можно подарить 12-месячный Telegram Premium?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Через @PremiumSendBot можно подарить 12-месячный Premium любому пользователю Telegram. Для этого нужен только Telegram username этого человека — номер телефона или другая информация не требуется.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { title: "Другу", desc: "В качестве подарка на день рождения или праздник. Год без рекламы в Telegram — подарок, который действительно запомнится." },
                { title: "Коллеге", desc: "Если вы много общаетесь через Telegram, Premium облегчит рабочий процесс коллегам." },
                { title: "Членам семьи", desc: "Родителям или братьям/сёстрам в качестве технологичного подарка." },
                { title: "Клиенту", desc: "Как VIP-подарок клиентам для укрепления вашего бренда." },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-muted leading-relaxed">
              Процесс подарка простой: в боте выбираете 12-месячный пакет, вводите username этого человека, производите оплату — Premium активируется непосредственно на его аккаунте.
            </p>

            {/* Промежуточный CTA 2 */}
            <div className="bg-white rounded-2xl p-6 border-2 border-green-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <div>
                <p className="font-bold text-foreground text-lg">12-месячный Telegram Premium — 425 000 сум</p>
                <p className="text-sm text-muted">Сейчас <Link href="/ru/12-oylik" className="text-primary hover:underline">подробнее</Link> или купите напрямую</p>
              </div>
              <Link href="https://t.me/premiumsendbot" target="_blank" className="px-6 py-3 rounded-xl bg-green-600 text-white font-semibold text-sm shadow-lg shadow-green-600/25 whitespace-nowrap">
                Купить
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">
              Часто задаваемые вопросы (FAQ)
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Нужна ли иностранная карта для покупки 12-месячного Telegram Premium?",
                  a: "Нет. Через @PremiumSendBot можно оплатить картой Uzcard или Humo. Также можно перевести через Click или Payme на карту бота. Иностранная карта не требуется.",
                },
                {
                  q: "Есть ли 12-месячный Premium в официальном приложении Telegram?",
                  a: "Да, в Telegram есть 12-месячная подписка. Но оплата производится только через Google Pay, Apple Pay или иностранную банковскую карту. Uzcard и Humo не работают. Через Premium Send можно оплатить в сумах местной картой.",
                },
                {
                  q: "Сколько времени занимает активация 12-месячного Telegram Premium?",
                  a: "После оплаты обычно активируется в течение нескольких минут. Появление значка Premium на вашем аккаунте — признак успешной активации.",
                },
                {
                  q: "Что нужно для того, чтобы подарить 12-месячный Premium другому человеку?",
                  a: "Нужен только Telegram username этого человека. Через бота вводите username, производите оплату — Premium активируется непосредственно на его аккаунте.",
                },
                {
                  q: "Сколько стоит 12-месячный Telegram Premium?",
                  a: "В Premium Send 12-месячный Telegram Premium стоит 425 000 сум. Всего 35 417 сум в месяц — самая низкая месячная цена среди всех пакетов.",
                },
                {
                  q: "Что происходит по окончании 12-месячной подписки?",
                  a: "По истечении 12 месяцев подписка автоматически прекращается. Аккаунт возвращается в обычный режим Telegram. Если хотите продолжить, нужно купить новую подписку.",
                },
                {
                  q: "Какие пакеты есть в Premium Send?",
                  a: "3-месячный (175 000 сум), 6-месячный (235 000 сум) и 12-месячный (425 000 сум). В Telegram нет 3- и 6-месячных пакетов — их можно купить только через Premium Send.",
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
            <div className="bg-green-600 rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-5 left-5 w-32 h-32 bg-white rounded-full blur-2xl" />
              </div>
              <div className="relative">
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  Если вам нужно купить 12-месячный Telegram Premium в Узбекистане через местную карту, оплатить один раз и спокойно пользоваться целый год —{" "}
                  <strong className="text-white">@PremiumSendBot</strong> — самое удобное и надёжное решение на сегодня. Оформите заказ через Uzcard или Humo за несколько минут и наслаждайтесь всеми возможностями годовой подписки Telegram Premium.
                </p>
                <Link
                  href="https://t.me/premiumsendbot"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-600 font-bold rounded-2xl hover:shadow-2xl transition-all text-lg"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
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
