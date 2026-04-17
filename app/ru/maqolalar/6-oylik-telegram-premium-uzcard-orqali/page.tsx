import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Telegram Premium на 6 месяцев через Uzcard — 235 000 сум, экономия 33%",
  description:
    "Telegram Premium на 6 месяцев через Uzcard за 235 000 сум — в @PremiumSendBot оплата в сумах. На 33% дешевле помесячной. В Telegram нет 6-месячного пакета — только здесь.",
  keywords: [
    "Telegram Premium на 6 месяцев через Uzcard",
    "купить Telegram Premium 6 месяцев",
    "Telegram Premium 6 месяцев",
    "Telegram Premium 6 месяцев цена",
    "Telegram Premium Uzcard",
    "Telegram Premium 235000",
    "Telegram Premium в сумах",
    "PremiumSendBot",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/ru/maqolalar/6-oylik-telegram-premium-uzcard-orqali",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/6-oylik-telegram-premium-uzcard-orqali",
      ru: "https://premiumsend.uz/ru/maqolalar/6-oylik-telegram-premium-uzcard-orqali",
    },
  },
  openGraph: {
    title: "Telegram Premium на 6 месяцев через Uzcard — 235 000 сум",
    description:
      "Активируйте Telegram Premium на 6 месяцев через Uzcard в сумах. В @PremiumSendBot за 235 000 сум, на 33% дешевле помесячной.",
    url: "https://premiumsend.uz/ru/maqolalar/6-oylik-telegram-premium-uzcard-orqali",
    type: "article",
    publishedTime: "2026-04-17",
  },
};

export default function Article6MonthUzcardRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Telegram Premium на 6 месяцев через Uzcard — в Узбекистане за 235 000 сум",
    description:
      "Купить Telegram Premium на 6 месяцев через Uzcard — в @PremiumSendBot за 235 000 сум. Оплата в сумах, экономия 33%.",
    datePublished: "2026-04-17",
    dateModified: "2026-04-17",
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
      "https://premiumsend.uz/ru/maqolalar/6-oylik-telegram-premium-uzcard-orqali",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько стоит Telegram Premium на 6 месяцев через Uzcard?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "В Premium Send цена Telegram Premium на 6 месяцев — 235 000 сум. В месяц 39 167 сум. Оплата через Uzcard в сумах — без дополнительной комиссии или валютного риска.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько экономии в 6-месячном пакете?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "1-месячный пакет — 59 000 сум. Если брать отдельно за 6 месяцев — выйдет 354 000 сум. В 6-месячном пакете — 235 000 сум. Разница — 119 000 сум, экономия 33%.",
        },
      },
      {
        "@type": "Question",
        name: "Есть ли 6-месячный пакет в официальном приложении Telegram?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет. В официальной системе Telegram доступны только 1-месячный и 12-месячный пакеты. 6-месячный вариант можно получить только через промежуточные сервисы, такие как @PremiumSendBot.",
        },
      },
      {
        "@type": "Question",
        name: "Через сколько активируется 6-месячный Premium после оплаты через Uzcard?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "После подтверждения оплаты Premium обычно активируется автоматически за несколько минут. Появление Premium-значка в аккаунте — признак успешного завершения процесса.",
        },
      },
      {
        "@type": "Question",
        name: "Безопасна ли оплата 235 000 сум через Uzcard?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Оплата происходит через обычный P2P-перевод или Click/Payme. Номер карты, пароль или SMS-код нигде не сохраняются. Если Premium не пришёл — деньги возвращаются.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли получить 6-месячный Premium через карту Humo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Наряду с Uzcard принимаются Humo, Click и Payme. Цена одинаковая — 235 000 сум, способ оплаты на ваш выбор.",
        },
      },
      {
        "@type": "Question",
        name: "Что делать, если оплата через Uzcard отклонена?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Сначала проверьте баланс карты, услугу SMS-Informing и суточный лимит интернет-платежей. Если проблема сохраняется, поддержка в боте поможет на узбекском языке.",
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
        name: "Telegram Premium на 6 месяцев через Uzcard",
        item: "https://premiumsend.uz/ru/maqolalar/6-oylik-telegram-premium-uzcard-orqali",
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
          Telegram Premium на 6 месяцев через Uzcard
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
            <time className="text-xs text-muted" dateTime="2026-04-17">
              17 апреля 2026
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Telegram Premium на 6 месяцев через Uzcard
          </h1>
          {/* AI/SEO Snippet */}
          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              Покупка <strong>Telegram Premium на 6 месяцев через Uzcard</strong> в Узбекистане осуществляется через{" "}
              <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>.{" "}
              Цена — <strong>235 000 сум</strong> (39 167 сум в месяц). Экономия 33% по сравнению с 1-месячным. В Telegram нет 6-месячного пакета — только через эти сервисы.
            </p>
          </div>
          <p className="text-lg text-muted leading-relaxed">
            Каждый месяц обновлять подписку Telegram Premium — это занимает несколько минут. Но каждый месяц приходит одна и та же мысль: &laquo;опять платёж&raquo;, &laquo;опять искать карту&raquo;, &laquo;опять ждать код&raquo;. За полгода это повторяется 6 раз. Годовая оплата же сразу требует крупной суммы. Между ними идеальный вариант — 6-месячный пакет. Платите один раз, спокойно пользуетесь полгода.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Проблема же классическая: официальное приложение Telegram не принимает Uzcard, и 6-месячного пакета вообще нет в официальном списке. В этой статье подробно расскажем, как получить 6-месячный Telegram Premium через Uzcard, за сколько и почему именно этот пакет стоит выбрать.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Почему в официальном приложении Telegram нет 6-месячного и не работает Uzcard?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Эти два вопроса логично рассмотреть вместе, потому что они связаны. Многие пользователи, заходя в Telegram и нажимая &laquo;Купить Premium&raquo;, видят только два варианта: 1-месячный и 12-месячный. 3- и 6-месячные пакеты вообще не появляются в официальном списке.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Причина — в бизнес-модели Telegram. Официальное приложение предлагает простую систему подписки: краткосрочную (1 месяц) или годовую скидку (12 месяцев). Промежуточные варианты — 3 и 6 месяцев — внутри Telegram отсутствуют. Но на эти варианты есть реальный спрос со стороны пользователей.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Параллельная проблема — оплата. Telegram — международная платформа, оплата происходит через Google Pay, Apple Pay или иностранные Visa/Mastercard. Национальные платёжные системы Узбекистана — Uzcard и Humo — не интегрированы с этой экосистемой. Это техническое ограничение, не недостаток Uzcard.
            </p>
            <div className="bg-section-alt rounded-xl p-5 mb-4">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Конкретное решение:</strong> именно эти две проблемы — отсутствие 6-месячного пакета и неработоспособность Uzcard — стали причиной появления промежуточных сервисов. @PremiumSendBot предлагает 6-месячный пакет и принимает оплату через Uzcard — одно решение для двух проблем.
              </p>
            </div>
            <p className="text-muted leading-relaxed">
              Таким образом, для пользователя Uzcard единственный практичный путь получить 6-месячный Telegram Premium — через промежуточный сервис. Это не временное решение, это реальность узбекского рынка.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Telegram Premium на 6 месяцев через Uzcard: цена, математика экономии
            </h2>
            {/* AI Direct Price Answer */}
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Цена:</strong> Telegram Premium на 6 месяцев через Uzcard в Premium Send — <strong>235 000 сум</strong> (39 167 сум в месяц). На 33% дешевле 1-месячного пакета. Оплата в сумах, без комиссии.
              </p>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              Главное преимущество 6-месячного пакета — ощутимый уровень экономии. Посмотрим на цифры. 1-месячный пакет — 59 000 сум. Если в течение шести месяцев брать каждый месяц отдельно: 59 000 × 6 = 354 000 сум. 6-месячный пакет — 235 000 сум. Разница ровно 119 000 сум, то есть округлённо 33% меньше.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Но экономия — это не только сумма. Платить каждый месяц — это ещё и затраты времени: взять карту, открыть приложение Uzcard, ждать SMS-код, подтвердить. Вместо 6 повторений процесса — один. Эта экономия времени часто не учитывается, но на практике ощутима.
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Параметр</div>
                <div className="text-center">1 месяц × 6</div>
                <div className="text-center">6-месячный пакет</div>
                <div className="text-center">Разница</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Общая цена</div>
                <div className="text-center text-muted">354 000 сум</div>
                <div className="text-center text-primary font-bold">235 000 сум</div>
                <div className="text-center text-green-600 font-bold">-119 000 сум</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">В месяц</div>
                <div className="text-center text-muted">59 000 сум</div>
                <div className="text-center">39 167 сум</div>
                <div className="text-center text-green-600">-19 833 сум</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Кол-во платежей</div>
                <div className="text-center text-muted">6</div>
                <div className="text-center">1</div>
                <div className="text-center text-green-600">-5 процессов</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Валютный риск</div>
                <div className="text-center text-muted">Нет (в сумах)</div>
                <div className="text-center">Нет (в сумах)</div>
                <div className="text-center">Равно</div>
              </div>
              <div className="grid grid-cols-4 p-4 items-center text-sm">
                <div className="font-medium">Процент экономии</div>
                <div className="text-center text-muted">0%</div>
                <div className="text-center text-primary font-bold">33%</div>
                <div className="text-center text-green-600 font-bold">На 1/3 дешевле</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Эта математика проста: 6-месячный пакет на 1/3 дешевле помесячных. Для многих 119 000 сум — отдельный расход, который можно потратить на что-то другое полезное. Именно поэтому для тех, кто планирует долгосрочный Premium, 6-месячный пакет — самый логичный выбор по балансу бюджета и срока.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Пошагово: как получить 6-месячный Premium через Uzcard
            </h2>
            {/* AI Direct Answer */}
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Краткий ответ:</strong>{" "}
                откройте <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>{" "}
                → выберите 6-месячный пакет → введите username → оплатите 235 000 сум через Uzcard → Premium активируется автоматически. Процесс — 3-5 минут.
              </p>
            </div>

            <p className="text-muted leading-relaxed mb-6">
              Процесс одинаков для 3-месячного или 1-месячного пакета. Только при выборе пакета отметите вариант &laquo;6 месяцев&raquo; и сумма оплаты составит 235 000 сум. Все шаги ниже:
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  step: "1",
                  title: "Найдите @PremiumSendBot в Telegram",
                  desc: "Введите @PremiumSendBot в поиске Telegram и откройте официального бота. Бот работает внутри приложения Telegram — внешний сайт или дополнительное приложение не нужно.",
                },
                {
                  step: "2",
                  title: "Запустите",
                  desc: "Нажмите /start. Бот поприветствует на узбекском языке и откроется главное меню: пакеты, цены, разделы помощи.",
                },
                {
                  step: "3",
                  title: "Выберите 6-месячный пакет",
                  desc: "В меню отметьте «6-месячный Premium». Цена сразу отображается — 235 000 сум. Эквивалент в месяц — 39 167 сум.",
                },
                {
                  step: "4",
                  title: "Введите аккаунт",
                  desc: "Введите Telegram username, на который нужно активировать Premium. Это может быть ваш или другого человека. Чтобы избежать ошибки в написании — внимательно проверьте.",
                },
                {
                  step: "5",
                  title: "Выберите способ оплаты",
                  desc: "Бот предложит варианты оплаты: Uzcard, Humo, Click или Payme. Выберите удобный способ. Цена одинакова во всех способах: 235 000 сум.",
                },
                {
                  step: "6",
                  title: "Совершите оплату",
                  desc: "Следуя инструкциям бота, оплатите 235 000 сум. Через мобильное приложение Uzcard, Click или Payme — процесс занимает несколько минут. После подтверждения Premium активируется автоматически.",
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
              Весь процесс — 3-5 минут. В течение следующих 6 месяцев не будет никаких проблем с оплатой: Premium работает автоматически, продление не нужно. По истечении 180 дней подписка возвращается в обычный режим Telegram, и вы можете выбрать следующий пакет.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Безопасно ли получать 6-месячный Premium через Uzcard?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              235 000 сум — сумма больше, чем 1-месячный пакет. Один из самых частых вопросов от пользователей: &laquo;безопасно ли платить такую сумму в интернете?&raquo;. Ответ однозначен: да, но нужно понимать механизм.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Оплата через @PremiumSendBot — это стандартный P2P-перевод или платёж через Click/Payme. То есть вы отправляете деньги с карты на другую карту или сервис — точно так же, как переводите деньги другу. Данные вашей карты (номер, CVV, пароль, SMS-код) нигде не сохраняются.
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Данные карты не передаются боту</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Оплата происходит внутри вашего мобильного приложения Uzcard или Click/Payme. Бот видит только входящий платёж и подтверждает его. Номер карты, срок действия, CVV-код — ничего из этого не передаётся боту.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Чек об оплате остаётся</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Uzcard, Click или Payme автоматически выдают чек на каждый перевод. Этот документ хранится у вас — если возникнет техническая проблема, через него обратитесь в поддержку.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Если Premium не пришёл — деньги вернут</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Если по техническим причинам 6-месячный Premium не активируется на аккаунте, оплаченные 235 000 сум возвращаются полностью. Это заявленная гарантия, существует механизм отмены однажды совершённого перевода.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Долгосрочная подписка — единый платёж</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Преимущество 6-месячного пакета по безопасности в том, что одной оплатой вы безопасно проводите следующие 180 дней. Каждый месяц новая оплата, новое подтверждение, потенциальные технические проблемы — всё это исключается.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Фактически, 6-месячный пакет с точки зрения безопасности даже лучше 1-месячного — потому что вы избавляетесь от повторения краткосрочных платежей. Каждая дополнительная оплата — это дополнительная точка риска. В 6-месячном таких точек — всего одна.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Uzcard, Humo, Click, Payme: каким способом удобнее оплатить 235 000 сум?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              @PremiumSendBot принимает четыре способа оплаты. У каждого свои преимущества, но для 6-месячного пакета есть несколько практических соображений:
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Click или Payme — самый быстрый</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Если на телефоне установлено приложение Click или Payme и ваша карта там зарегистрирована — это самый быстрый способ. В 2-3 клика отправляется 235 000 сум. Большинство пользователей выбирают именно это.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Uzcard P2P — классический вариант</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Прямой P2P-перевод из мобильного приложения Uzcard. Требует 4-5 шагов: открыть приложение, выбрать карту, ввести номер, сумму, подтвердить. Чуть длиннее, но надёжно.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Humo — альтернативная карта</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Если у вас нет Uzcard, но есть Humo — она тоже принимается. Цена, процесс и безопасность одинаковы. Для пользователей Humo нет отдельных ограничений.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Вопрос суточного лимита для 235 000 сум</h3>
                <p className="text-sm text-muted leading-relaxed">
                  В некоторых банках установлен суточный лимит на интернет-платежи — например, 300 000 сум. 235 000 сум входит в этот лимит, но если суточный лимит меньше, его можно временно увеличить через мобильное приложение Uzcard.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Практический совет: если оплачиваете впервые — начните через Click или Payme. Они упрощают процесс, и вероятность успеха выше. Uzcard P2P — для повторных пользователей, кто уже привык к приложению.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Почему именно 6-месячный — преимущество перед 1, 3 или 12-месячным
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              В Premium Send четыре пакета — <Link href="/ru/maqolalar/1-oylik-telegram-premium-uzcard-orqali-sotib-olish" className="text-primary font-semibold hover:underline">1 месяц</Link> (59 000 сум), <Link href="/ru/maqolalar/3-oylik-telegram-premium-uzcard-orqali" className="text-primary font-semibold hover:underline">3 месяца</Link> (175 000 сум), 6 месяцев (235 000 сум) и <Link href="/ru/maqolalar/12-oylik-telegram-premium-sotib-olish" className="text-primary font-semibold hover:underline">12 месяцев</Link> (425 000 сум). Каждый — оптимален для своей ситуации. 6-месячный — самый сбалансированный выбор.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              На практике 6 месяцев — достаточно длительный срок. С прохождением 1 месяца не успеваешь полностью протестировать возможности Premium. 3 месяца — хорошо для начала использования. За 6 месяцев такие функции, как voice-to-text, файлы 4 ГБ, быстрый перевод, успевают стать частью вашего ежедневного рабочего процесса.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: "Баланс бюджета и срока",
                  desc: "235 000 сум — приемлемая сумма как разовый расход для большинства. 12 месяцев (425 000) много, 3 месяца (175 000) быстро заканчиваются. 6 месяцев — посередине.",
                },
                {
                  title: "Реальная экономия",
                  desc: "На 33% дешевле 1-месячного — это ощутимая разница. 3-месячный экономит всего 1%, 12-месячный — 40%. 6-месячный — между ними, но без обязательств на 12 месяцев.",
                },
                {
                  title: "Без обязательств на год",
                  desc: "12 месяцев — это годовое обязательство. Для некоторых это много. 6 месяцев — срок, подходящий для важных проектов, периода экзаменов или сезонных работ.",
                },
                {
                  title: "Достаточно для формирования привычки",
                  desc: "Возможности Premium — voice-to-text, быстрый перевод, файлы 4 ГБ, лента без рекламы — за 6 месяцев действительно используете и оцените.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-muted leading-relaxed">
              Дополнительный факт: 6-месячный пакет подробно проанализирован в <Link href="/ru/maqolalar/6-oylik-telegram-premium-olishning-eng-yaxshi-usuli" className="text-primary font-semibold hover:underline">статье-сравнении</Link>. Если хотите сравнить 6-месячный пакет с разными сервисами — та статья будет полезна.
            </p>

            <p className="text-muted leading-relaxed mt-4">
              Если разовый расход на покрытие полугода соответствует вашим планам —{" "}
              <Link href="/ru/6-oylik" className="text-primary font-semibold hover:underline">подробнее о 6-месячном пакете</Link>{" "}
              или напрямую через{" "}
              <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary font-semibold hover:underline">@PremiumSendBot</Link>{" "}
              можно начать с Uzcard.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Проблемы при оплате 6-месячного Premium и их решения
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              235 000 сум — в 4 раза больше 1-месячного платежа. Поэтому в некоторых банках при оплате этой суммой могут быть дополнительные проверки. Ниже реальные случаи и пути их решения:
            </p>

            <div className="space-y-3 mb-6">
              {[
                {
                  title: "Малый суточный лимит интернет-платежей",
                  desc: "Некоторые банки устанавливают суточный лимит в 200 000 сум на интернет-платежи. 235 000 сум превышает этот лимит. Решение: через мобильное приложение Uzcard временно увеличьте суточный лимит интернет-платежей или оплатите через Click/Payme — там лимит банка работает иначе.",
                },
                {
                  title: "SMS-код не приходит",
                  desc: "Если SMS-код для подтверждения оплаты не приходит — проблема с сетью или не подключена услуга SMS-Informing. Снова подайте заявление в банке на номер телефона или перейдите на подтверждение через push-уведомление.",
                },
                {
                  title: "Платёж отклонён, деньги с карты не списались",
                  desc: "Это нормальная ситуация — оплата не прошла, карта в безопасности. Перед следующей попыткой проверьте баланс, срок действия карты и SMS-сервис. Несписанные деньги остаются на карте.",
                },
                {
                  title: "Платёж прошёл, но Premium не пришёл",
                  desc: "Подождите 5-10 минут. Если всё же не активируется — отправьте чек об оплате в поддержку внутри бота. Вручную проверят и обеспечат активацию Premium или возврат денег.",
                },
                {
                  title: "Введён неверный username",
                  desc: "Если оплата прошла, но Premium не активирован — сразу напишите в поддержку. Если процесс ещё не завершён, можно перевести на правильный username.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-muted leading-relaxed">
              Большинство пользователей успешно совершают 6-месячную оплату с первого раза. Но если возникнет проблема — поддержка бота на узбекском языке обычно отвечает в течение 10 минут.
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
                  q: "Сколько стоит Telegram Premium на 6 месяцев через Uzcard?",
                  a: "В Premium Send цена 235 000 сум. В месяц 39 167 сум. Оплата через Uzcard в сумах — без дополнительной комиссии или валютного риска.",
                },
                {
                  q: "Сколько экономии в 6-месячном пакете?",
                  a: "1-месячный пакет 59 000 сум — за 6 месяцев отдельно вышло бы 354 000 сум. В 6-месячном пакете — 235 000 сум. Разница — 119 000 сум, экономия 33%.",
                },
                {
                  q: "Есть ли 6-месячный пакет в официальном приложении Telegram?",
                  a: "Нет. В официальной системе Telegram доступны только 1- и 12-месячные пакеты. 6-месячный вариант можно получить только через промежуточные сервисы, такие как @PremiumSendBot.",
                },
                {
                  q: "Через сколько активируется 6-месячный Premium после оплаты через Uzcard?",
                  a: "После подтверждения оплаты Premium обычно активируется автоматически за несколько минут. В аккаунте появится Premium-значок.",
                },
                {
                  q: "Безопасна ли оплата 235 000 сум через Uzcard?",
                  a: "Да. Оплата происходит через обычный P2P-перевод или Click/Payme. Данные карты не сохраняются. Если Premium не пришёл — деньги возвращаются.",
                },
                {
                  q: "Можно ли получить 6-месячный Premium через карту Humo?",
                  a: "Да. Наряду с Uzcard принимаются Humo, Click и Payme. Цена одинакова — 235 000 сум.",
                },
                {
                  q: "Что делать, если оплата через Uzcard отклонена?",
                  a: "Проверьте баланс карты, услугу SMS-Informing и суточный лимит интернет-платежей. Если проблема сохраняется, поддержка в боте поможет на узбекском языке.",
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
              <h3 className="text-lg font-bold text-foreground mb-4 text-center">6-месячный Premium — в цифрах</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">235 000</p>
                  <p className="text-sm text-muted">сум, разовая оплата</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">33%</p>
                  <p className="text-sm text-muted">Экономия по сравнению с 1-месячным</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">180 дней</p>
                  <p className="text-sm text-muted">Непрерывный Premium-опыт</p>
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
                  Если устали от ежемесячных платежей и ваш бюджет позволяет 235 000 сум — 6-месячный пакет самый логичный выбор.{" "}
                  <strong className="text-white">@PremiumSendBot</strong> после одной оплаты через Uzcard даёт возможность спокойно провести следующие полгода.
                </p>
                <Link
                  href="https://t.me/premiumsendbot"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  Перейти в бота
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
