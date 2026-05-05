import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Безопасно ли покупать Telegram Premium в Узбекистане? Как не попасться на обман",
  description:
    "Безопасно ли покупать Telegram Premium в Узбекистане? 7 типичных схем мошенников, 8 признаков надёжного реселлера и как работает PremiumSend — честное руководство без преувеличений.",
  keywords: [
    "telegram premium безопасно",
    "telegram premium обман",
    "telegram premium мошенники",
    "надёжный реселлер telegram premium",
    "telegram premium узбекистан безопасно",
    "premium send безопасно",
    "не попасться на обман telegram premium",
    "проверить реселлер telegram premium",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/ru/maqolalar/telegram-premium-xavfsiz-aldovdan-saqlanish",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/telegram-premium-xavfsiz-aldovdan-saqlanish",
      ru: "https://premiumsend.uz/ru/maqolalar/telegram-premium-xavfsiz-aldovdan-saqlanish",
    },
  },
  openGraph: {
    title:
      "Безопасно ли покупать Telegram Premium в Узбекистане? Как не попасться на обман",
    description:
      "7 схем мошенников, 8 признаков надёжного реселлера и пошаговая защита денег. Без преувеличений.",
    url: "https://premiumsend.uz/ru/maqolalar/telegram-premium-xavfsiz-aldovdan-saqlanish",
    type: "article",
    publishedTime: "2026-05-05",
  },
};

export default function ArticleSafeBuyRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Безопасно ли покупать Telegram Premium в Узбекистане? Как не попасться на обман",
    description:
      "7 типичных схем мошенников, 8 признаков надёжного реселлера и механизм безопасной оплаты — честное руководство.",
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
      "https://premiumsend.uz/ru/maqolalar/telegram-premium-xavfsiz-aldovdan-saqlanish",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Безопасно ли покупать Telegram Premium в Узбекистане?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Покупка через местного реселлера технически безопасна, если оплата идёт через установленные платёжные системы (Click, Payme, Uzcard), используется официальный механизм Telegram gift, а у вас не запрашивают пароль и SMS-код от карты. Главный риск — не в платёжной системе, а в выборе продавца. По 8 признакам ниже надёжного реселлера можно отличить за 30 секунд.",
        },
      },
      {
        "@type": "Question",
        name: "Как работают мошеннические боты?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "7 типичных схем: 1) Принимают деньги — бот исчезает, 2) Поддельная страница оплаты крадёт данные карты, 3) Перенаправляют на @admin, который просит перевод напрямую, 4) Просят логин в аккаунт под видом «бесплатного Premium», 5) Обещают 12 месяцев — дают 1 месяц, 6) Несуществующие промокоды, 7) Поддельная «техподдержка» требует доплату. Главная защита — официальная платёжная система и PDF-чек.",
        },
      },
      {
        "@type": "Question",
        name: "Как отличить надёжного реселлера?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "8 признаков: оплата через официальное приложение Click или Payme, PDF-чек, запрос только @username (НЕ пароль/SMS), бот существует давно и не менял имя, цена показана заранее и не растёт, сайт и Telegram-бот связаны, поддержка отвечает в течение 30 минут, на странице оферты прописаны условия возврата. Если совпадают 6 и более признаков — безопасно. 4 и меньше — не покупайте.",
        },
      },
      {
        "@type": "Question",
        name: "Является ли @PremiumSendBot официальным партнёром Telegram?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет. PremiumSend НЕ является официальным партнёром Telegram — это независимый реселлер в Узбекистане, который покупает Premium через официальный механизм Telegram gift и отправляет на ваш аккаунт. Ни один реселлер в Узбекистане не является «официальным партнёром Telegram» — если кто-то так пишет, это ложь. Но быть реселлером законно: это похоже на покупку товара в одном магазине и продажу в другом.",
        },
      },
      {
        "@type": "Question",
        name: "Безопасны ли мои данные карты?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Если оплата идёт через Click, Payme или приложение банка — да. Номер карты, пароль и CVV сохраняются только на сервере платёжной системы. Бот их не видит. Главное правило: ни один официальный бот не запрашивает полный номер карты и CVV напрямую. Если запрашивает — сразу выходите, это фишинг.",
        },
      },
      {
        "@type": "Question",
        name: "Деньги ушли, что делать?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Первое: сохраните номер PDF-чека. Второе: обратитесь в поддержку бота с номером чека — при технической ошибке деньги возвращают за 1-3 рабочих дня. Третье: если бот не отвечает, подайте жалобу через приложение Click или Payme — платёжная система проведёт проверку. Четвёртое: если это фишинг — заблокируйте карту в банке и напишите заявление в полицию.",
        },
      },
      {
        "@type": "Question",
        name: "Безопаснее ли покупать через App Store или Play Market?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Платёжная система Apple и Google безопасна, но для пользователя из Узбекистана это создаёт несколько проблем: нужна зарубежная карта, цена выше на 30-40% (1 месяц в App Store ~$5.99 ≈ 78 000 сум, у местного реселлера 59 000 сум), курсовые риски и валютная операция. Технически официальный путь чуть выше по уровню безопасности, но по соотношению цена-удобство местный надёжный реселлер — рациональный вариант.",
        },
      },
      {
        "@type": "Question",
        name: "С какого тарифа начать, если никогда не покупал Premium?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Начните с 1 месяца — 59 000 сум. Это минимальная инвестиция для теста реселлера. Технически весь процесс (оплата, активация, поддержка) работает так же, как в 6- или 12-месячных тарифах. Если в течение месяца сервис устроит, переходите на 6 месяцев (235 000) или 12 месяцев (425 000) — выходит 39 167 или 35 417 сум в месяц.",
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
        name: "Безопасно ли покупать Premium в Узбекистане",
        item: "https://premiumsend.uz/ru/maqolalar/telegram-premium-xavfsiz-aldovdan-saqlanish",
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
          Безопасно ли покупать Premium в Узбекистане
        </span>
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
            Безопасно ли покупать Telegram Premium в Узбекистане? Как не попасться на обман
          </h1>

          {/* TL;DR */}
          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>Краткий ответ:</strong> Покупка у местного реселлера технически безопасна — если оплата идёт через Click, Payme или банковскую карту в официальных системах, бот не запрашивает пароль карты и SMS-код, нужен только <strong>@username Telegram</strong> и выдаётся PDF-чек. Главный риск — не в платёжном механизме, а в <strong>выборе продавца</strong>. По <strong>8 признакам</strong> ниже надёжного реселлера можно отличить за 30 секунд.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Telegram Premium в Узбекистане — это рынок. На первый взгляд всё выглядит одинаково: бот, цена, «активация за 5 минут». Но среди продавцов есть и реальные реселлеры, и боты, которые забирают деньги и исчезают. Разница видна, когда задаёте правильные вопросы и смотрите на платёжный механизм.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            В статье — как работают мошеннические схемы, признаки надёжного реселлера и что делать, если деньги пропали. Ничего преувеличенного — только технические механизмы и честные правила.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 — Honest answer */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Безопасно ли покупать Telegram Premium в Узбекистане?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Короткий ответ: <strong className="text-foreground">да — если выбран правильный реселлер</strong>. Полный ответ распадается на три пункта.
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">1. Безопасен ли механизм оплаты?</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Click, Payme, Uzcard P2P, Humo P2P — лицензированные Центробанком системы, соответствующие стандарту PCI DSS. Данные вашей карты вообще не попадают на сервер бота — они хранятся только на сервере платёжной системы. Этот механизм <strong>технически безопасен</strong>.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">2. Premium доставляется законным путём?</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Реселлер использует <strong>официальный механизм Telegram gift</strong>, чтобы отправить Premium на указанный вами @username. Не нужно ни паролей аккаунта, ни хака, ни модов. Это похоже на покупку товара в одном магазине и продажу в другом.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">3. Где же главный риск?</h3>
                <p className="text-sm text-muted leading-relaxed">
                  В выборе продавца. На рынке вместе с настоящими реселлерами работают и мошеннические боты. Они забирают деньги и не выдают Premium либо выдают не тот тариф. Ниже — как их отличить с помощью 7 типичных схем и 8 признаков проверки.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Ещё одна важная честность: <strong className="text-foreground">PremiumSend НЕ является официальным партнёром Telegram</strong> — мы один из независимых реселлеров в Узбекистане. Ни одна услуга в Узбекистане не «официальный партнёр Telegram». Если кто-то так пишет — это первый признак лжи.
            </p>
          </section>

          {/* Section 2 — 7 fraud schemes */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Как работают мошеннические сервисы — 7 типичных схем
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Эти схемы зафиксированы в Узбекистане и других рынках СНГ уже несколько лет. Если хоть одна сработает — сразу остановите процесс и сохраните деньги.
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">1. «Заплатил → бот пропал»</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Самая простая схема. Принимают деньги, Premium не отправляют, потом удаляют бота или блокируют вас. <strong>Признак:</strong> бот существует 1-2 месяца, страницы оферты нет, сайта нет. <strong>Защита:</strong> платить только через Click/Payme — при наличии чека деньги возвращают.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">2. Поддельная страница оплаты (фишинг)</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Бот ведёт на страницу, похожую на Click или Payme. Крадёт номер карты, пароль и SMS-код, опустошает карту. <strong>Признак:</strong> URL не <code>click.uz</code> (например, <code>klick-uz.com</code>), нет HTTPS-замка. <strong>Защита:</strong> только официальные приложения (Click, Payme), проверяйте URL в браузере.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">3. Перевод на @admin</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Внутри бота кнопка «Написать в поддержку» ведёт к @admin. @admin — обычный человек, мошенник. Он просит перевод напрямую на карту. <strong>Признак:</strong> в боте нет встроенной платёжной системы, только «напишите админу». <strong>Защита:</strong> никогда не платите напрямую частному админу карточным переводом.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">4. «Бесплатный Premium» с запросом входа в аккаунт</h3>
                <p className="text-sm text-muted leading-relaxed">
                  «Войдите для получения 1 года Premium бесплатно» — поддельная страница запрашивает код входа Telegram. Аккаунт угоняют. <strong>Признак:</strong> «бесплатный Premium» — такого в Telegram не существует. <strong>Защита:</strong> никогда не передавайте код входа Telegram никому, даже «техподдержке Telegram».
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">5. Обещали 12 месяцев — пришёл 1 месяц</h3>
                <p className="text-sm text-muted leading-relaxed">
                  «425 000 сум за 12 месяцев» — обещание. После оплаты активируется 1 месяц, остальное «отправим позже». <strong>Признак:</strong> в оферте тариф не прописан явно. <strong>Защита:</strong> проверьте срок Premium в профиле Telegram (Настройки → Premium → срок). Не совпадает — жалоба через номер чека Click.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">6. Несуществующие промокоды</h3>
                <p className="text-sm text-muted leading-relaxed">
                  «Введите PROMO50 и получите 50% скидку — 30 000 сум за 1 месяц!» — подделка. Платите, но потом объясняют, что это «специальный тариф» (которого нет) и отказывают. <strong>Признак:</strong> реальная скидка на узбекском рынке не бывает ниже базового 1-месячного тарифа. <strong>Защита:</strong> избегайте подозрительно низких цен — если цена ниже разумной, что-то скрыто.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">7. Фейковая «поддержка» требует доплату</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Premium не пришёл — обращаетесь, «поддержка» просит «технический сбор 50 000 сум, и мы решим прямо сейчас». Берут новые деньги и снова исчезают. <strong>Признак:</strong> настоящий реселлер никогда не берёт «комиссию» за решение проблемы. <strong>Защита:</strong> при таком требовании сразу пишите жалобу оператору Click/Payme.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Все 7 схем предотвращаются одним принципом: <strong className="text-foreground">платите только через официальную платёжную систему, только с PDF-чеком, только у реселлера со страницей оферты.</strong>
            </p>
          </section>

          {/* Section 3 — 8 trust signals */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Как отличить надёжного реселлера Telegram Premium? 8 признаков
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Эти 8 признаков можно проверить за 1-2 минуты при первом обращении. <strong>6 и более совпадений</strong> — безопасно. <strong>4 и менее</strong> — ищите другого продавца.
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-12 bg-section-alt p-4 font-bold text-sm">
                <div className="col-span-1">#</div>
                <div className="col-span-5">Признак</div>
                <div className="col-span-6">Как проверить</div>
              </div>
              {[
                {
                  n: "1",
                  signal: "Бот показывает номер карты и точную сумму",
                  check: "Вы переводите через Click, Payme или приложение банка напрямую на эту карту. Никаких лишних 'страниц оплаты' или подозрительных ссылок",
                },
                {
                  n: "2",
                  signal: "Выдаётся PDF-чек",
                  check: "После оплаты Click/Payme выдаёт PDF-чек. Бот тоже сохраняет номер чека в сообщении",
                },
                {
                  n: "3",
                  signal: "Запрашивают только @username (НЕ пароль/SMS)",
                  check: "Реселлеру для активации Premium нужен только ваш Telegram @username. Пароль, SMS-код, логин — не нужны",
                },
                {
                  n: "4",
                  signal: "Username бота не менялся",
                  check: "Бот существует больше года, последние 6 месяцев имя не меняли — историю смены имени можно посмотреть в Telegram",
                },
                {
                  n: "5",
                  signal: "Цена показана заранее, не растёт",
                  check: "В меню тарифов цена указана конкретным числом. Во время оплаты не появляется «дополнительная комиссия» или «спецсбор»",
                },
                {
                  n: "6",
                  signal: "Сайт и Telegram-бот связаны",
                  check: "На сайте есть ссылка на бота, в боте — ссылка на сайт. Домен существует и работает по HTTPS",
                },
                {
                  n: "7",
                  signal: "Поддержка отвечает в течение 30 минут",
                  check: "На первый вопрос приходит конкретный ответ. Не автоматический шаблон, а ответ по существу темы",
                },
                {
                  n: "8",
                  signal: "На странице оферты прописаны условия возврата",
                  check: "На /oferta чётко прописано, в каких случаях возможен возврат денег. Это юридический документ",
                },
              ].map((row) => (
                <div
                  key={row.n}
                  className="grid grid-cols-12 p-4 border-b border-card-border items-start text-sm"
                >
                  <div className="col-span-1 font-bold text-primary">{row.n}</div>
                  <div className="col-span-5 font-semibold text-foreground">
                    {row.signal}
                  </div>
                  <div className="col-span-6 text-muted">{row.check}</div>
                </div>
              ))}
            </div>

            <div className="bg-section-alt rounded-xl p-5 mb-4">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Быстрый тест:</strong> напишите реселлеру вопрос — <em>«Какая платёжная система используется и выдаётся ли PDF-чек?»</em>. Если конкретный ответ (Click/Payme + PDF) не приходит, вопрос отбрасывается или направляют к админу — это уже плохой признак.
              </p>
            </div>

            <p className="text-muted leading-relaxed">
              <Link
                href="/ru/oferta"
                className="text-primary font-semibold hover:underline"
              >
                Страница оферты PremiumSend
              </Link>
              {" "}— здесь прописаны условия возврата, границы ответственности и контакты. Эта страница обязательна для любого реселлера и является признаком реальности услуги.
            </p>
          </section>

          {/* Mid CTA */}
          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Вы прошли по 8 признакам выше.{" "}
                <strong className="text-white">@PremiumSendBot</strong>{" "}
                — оплата через Click и Payme, PDF-чек, нужен только @username. 1 месяц 59 000, 3 месяца 175 000, 6 месяцев 235 000, 12 месяцев 425 000 сум.
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
                Открыть Premium Send бот
              </Link>
            </div>
          </section>

          {/* Section 4 — Technical safety */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Куда отправляются мои данные карты? Технический разбор
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Это самый частый вопрос. Механизм работает так:
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  step: "1",
                  title: "Бот выдаёт номер карты и точную сумму",
                  desc: "Бот на основе тарифа показывает на экране номер карты и сумму платежа. Бот не видит и не запрашивает никаких данных карты.",
                },
                {
                  step: "2",
                  title: "Через Click/Payme/банковское приложение переводите на карту",
                  desc: "Вы из любого приложения (Click, Payme, Uzcard, Humo, банковское приложение) переводите указанную сумму на карту бота через P2P. Данные карты сохраняются только на сервере платёжной системы, зашифрованы по PCI DSS.",
                },
                {
                  step: "3",
                  title: "Система автоматически определяет поступление на карту",
                  desc: "После подтверждения система определяет поступившую сумму (по комбинации карты и точно указанной суммы). Бот не видит номер вашей карты или личных данных.",
                },
                {
                  step: "4",
                  title: "Бот отправляет Premium на указанный @username",
                  desc: "Через официальный механизм gift Telegram Premium активируется на аккаунте. В ваш аккаунт никто не входит — внутренняя система Telegram делает работу.",
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

            <div className="bg-section-alt rounded-xl p-5">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Главный факт:</strong> ни один официальный бот никогда не запрашивает <strong>полный номер карты, пароль или CVV</strong> напрямую. Если запрашивает — выходите, блокируйте карту в банке. Это фишинг.
              </p>
            </div>
          </section>

          {/* Section 5 — App Store comparison */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              App Store или Play Market — «официальнее» и безопаснее?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Платёжная система Apple и Google — одна из самых безопасных в мире, это правда. Но для пользователя из Узбекистана она создаёт несколько практических проблем:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Критерий</div>
                <div className="text-center">App Store / Play Market</div>
                <div className="text-center">Местный надёжный реселлер</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Техническая безопасность</div>
                <div className="text-center text-green-600">Высокая (Apple/Google)</div>
                <div className="text-center text-green-600">Высокая (Click/Payme)</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Тип карты</div>
                <div className="text-center text-red-600">Зарубежная (Visa/MC)</div>
                <div className="text-center text-green-600">Местная (Uzcard/Humo)</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Цена 1 месяца</div>
                <div className="text-center text-red-600">~78 000 сум ($5.99)</div>
                <div className="text-center text-green-600 font-bold">59 000 сум</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Курсовой риск</div>
                <div className="text-center text-red-600">Есть (USD)</div>
                <div className="text-center text-green-600">Нет (в сумах)</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Тарифы 3 и 6 месяцев</div>
                <div className="text-center text-red-600">Нет</div>
                <div className="text-center text-green-600">Есть</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center text-sm">
                <div className="font-medium">Поддержка на узбекском/русском</div>
                <div className="text-center text-red-600">Нет</div>
                <div className="text-center text-green-600">Есть</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Вывод:</strong> если у вас есть Visa/Mastercard и возможность платить за рубеж — официальный путь Apple/Google технически чуть безопаснее. Но по соотношению цена-удобство местный надёжный реселлер (подтверждённый по 8 признакам выше) — рациональный вариант. Уровень технической безопасности почти равный, а цена ниже на 25-30%.
            </p>
            <p className="text-muted leading-relaxed">
              <Link
                href="/ru/maqolalar/telegram-premium-eng-arzon-qayerdan-sotib-olish"
                className="text-primary font-semibold hover:underline"
              >
                Отдельная статья со сравнением цен App Store, Fragment и местных реселлеров
              </Link>{" "}
              — там все каналы покупки разбиты по цене и удобству в цифрах.
            </p>
          </section>

          {/* Section 6 — What if you got scammed */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Деньги ушли, а Premium не пришёл — что делать?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Возможны два сценария: <strong>(а)</strong> у настоящего реселлера техническая ошибка — обычная ситуация, решается за 1-3 рабочих дня, <strong>(б)</strong> мошенник — это фишинг и порядок действий другой. Пошаговый план:
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Шаг 1: сохраните номер PDF-чека</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Click или Payme автоматически выдают PDF-чек после оплаты. Там номер чека, дата, сумма, получатель. <strong>Это главный документ</strong> — все следующие шаги опираются на этот номер.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Шаг 2: напишите в поддержку бота</h3>
                <p className="text-sm text-muted leading-relaxed">
                  В боте есть кнопка «Поддержка». Обратитесь, указав номер чека и дату оплаты. <strong>Настоящий реселлер</strong> отвечает в течение 30 минут — нескольких часов: либо активирует Premium вручную, либо возвращает деньги за 1-3 рабочих дня. <strong>Мошеннический бот</strong> не отвечает или просит новую оплату — это схема №7 (выше).
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Шаг 3: жалоба оператору Click или Payme</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Если бот не отвечает в течение 24 часов или не решает проблему — в приложении Click/Payme в разделе «История» нажмите на платёж и выберите «Жалоба». Номер чека прикрепится автоматически. Оператор проверит получателя и при возможности вернёт деньги.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Шаг 4: если карту украли — в банк</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Если на фишинговой странице вы ввели полный номер карты и CVV — сразу позвоните в банк и <strong>заблокируйте карту</strong>. Выпустите новую. Перенесите все привязанные подписки на новую карту.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Шаг 5: заявление в полицию (при крупной сумме)</h3>
                <p className="text-sm text-muted leading-relaxed">
                  При крупной сумме (например, 425 000 сум и выше) напишите заявление в районную полицию. Понадобится чек, история платежей и скриншот переписки с ботом. Существует отдел киберпреступлений — они работают с фишинговыми ботами.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Лучшая защита — <strong>мягкое тестирование</strong>: в первый раз у нового реселлера начните с 1 месяца за 59 000 сум. Если всё работает корректно, переходите на больший тариф. Это стандартная практика — любой реселлер относится к этому с пониманием.
            </p>
          </section>

          {/* Section 7 — How PremiumSend works */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Как работает PremiumSend и почему ему можно доверять?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Те 8 признаков выше — универсальные, применимы к любому реселлеру. PremiumSend построен по тем же критериям:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: "Только официальные платёжные системы",
                  desc: "Бот показывает номер карты и точную сумму, вы переводите через Click, Payme, Uzcard или Humo. Данные карты сохраняются только на сервере платёжной системы — бот их не видит.",
                },
                {
                  title: "PDF-чек на каждую оплату",
                  desc: "Click или Payme выдают PDF-чек после завершения оплаты. Этот документ можно перезагрузить в любой момент.",
                },
                {
                  title: "Запрашивается только @username",
                  desc: "Для активации Premium нужен только Telegram username — ваш или того, кому делается подарок. Никаких паролей, логинов или SMS-кодов.",
                },
                {
                  title: "Страница оферты",
                  desc: "На /oferta прописаны условия возврата, ответственность и контакты. Это юридический документ.",
                },
                {
                  title: "Сайт и бот связаны",
                  desc: "На сайте ссылка на @PremiumSendBot, в боте — ссылка на premiumsend.uz. Домен работает по HTTPS.",
                },
                {
                  title: "Тариф и цена показаны заранее",
                  desc: "1 месяц — 59 000 сум, 3 месяца — 175 000, 6 месяцев — 235 000, 12 месяцев — 425 000. Скрытых комиссий нет.",
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

            <div className="bg-section-alt rounded-xl p-5 mb-4">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Будем честными:</strong> технические сбои редко, но случаются (кратковременные задержки на стороне Telegram, нагрузки на сервере Click). В таких случаях бот просит подождать 5-10 минут или активирует вручную. Ни один реселлер не может сказать «100% без сбоев» — если кто-то так пишет, это ложь.
              </p>
            </div>

            <p className="text-muted leading-relaxed">
              <Link
                href="/ru/maqolalar/telegram-premium-narxlari"
                className="text-primary font-semibold hover:underline"
              >
                Сравнение тарифов
              </Link>
              {" · "}
              <Link
                href="/ru/maqolalar/telegram-premium-humo-orqali"
                className="text-primary font-semibold hover:underline"
              >
                Как работает оплата через Humo
              </Link>
              {" · "}
              <Link
                href="/ru/oferta"
                className="text-primary font-semibold hover:underline"
              >
                Оферта
              </Link>
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
                  q: "Безопасно ли покупать Telegram Premium в Узбекистане?",
                  a: "Покупка через местного реселлера технически безопасна, если оплата идёт через Click или Payme, запрашивается только username и выдаётся PDF-чек. Главный риск — не в платёжном механизме, а в выборе продавца. По 8 признакам можно отличить надёжного реселлера.",
                },
                {
                  q: "Является ли @PremiumSendBot официальным партнёром Telegram?",
                  a: "Нет. PremiumSend НЕ является официальным партнёром Telegram — это один из независимых реселлеров в Узбекистане. Ни одна услуга в Узбекистане не «официальный партнёр Telegram». Быть реселлером законно — механизм опирается на официальную систему gift Telegram.",
                },
                {
                  q: "Нужно ли никогда не давать пароль карты и CVV?",
                  a: "Верно, никогда. Официальные платёжные системы (Click, Payme, банковское приложение) запрашивают пароль через своё официальное приложение — это безопасно. Но никакой Premium-реселлер, бот или «поддержка» не имеют права запрашивать полный номер, пароль и CVV напрямую.",
                },
                {
                  q: "Возвращаются ли деньги, если Premium не пришёл?",
                  a: "При технической ошибке Premium активируется вручную или деньги возвращаются полностью. Но условия есть: должен быть сохранён номер чека, процесс активации должен быть начат, пользователь не должен был указать неправильный username. Точные условия — на странице /oferta.",
                },
                {
                  q: "Что делать, если попался мошеннику?",
                  a: "Первое: сохраните номер PDF-чека. Второе: подайте жалобу через приложение Click или Payme (История → платёж → Жалоба). Платёжная система проводит проверку получателя. Третье: при крупной сумме — заявление в полицию (отдел киберпреступлений).",
                },
                {
                  q: "На сколько дороже в App Store?",
                  a: "1 месяц в App Store — $5.99, около 78 000 сум. У местного надёжного реселлера — 59 000 сум. Разница ~32%. Плюс требование зарубежной карты и курсовой риск. App Store чуть выше по технической безопасности, но по соотношению цена-удобство местный путь рациональнее для большинства.",
                },
                {
                  q: "С какого тарифа начать тестирование?",
                  a: "С 1 месяца — 59 000 сум. Минимальная инвестиция для полного теста реселлера. Технический процесс (оплата, активация, поддержка) работает точно так же, как в 6- или 12-месячном тарифе. Если в течение месяца сервис устроит — переходите на 6 или 12 месяцев.",
                },
                {
                  q: "Что если я ввёл неправильный username — Premium уйдёт другому?",
                  a: "Да — механизм gift Telegram опирается на введённый @username. Если username введён неверно, Premium активируется на другом аккаунте, и вернуть его технически сложно. Поэтому бот просит дважды подтвердить username. Проверка перед отправкой — самый важный шаг.",
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
                Быстрая проверка — за 30 секунд
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">8/8</p>
                  <p className="text-sm text-muted">
                    совпадений — полностью безопасно
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">≥ 6/8</p>
                  <p className="text-sm text-muted">приемлемо</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-red-600">≤ 4/8</p>
                  <p className="text-sm text-muted">не покупайте, ищите другого</p>
                </div>
              </div>
            </div>
          </section>

          {/* Related cluster links */}
          <section>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-card-border">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Связанные статьи
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/ru/maqolalar/telegram-premium-eng-arzon-qayerdan-sotib-olish"
                    className="text-primary font-semibold hover:underline"
                  >
                    Где Telegram Premium дешевле всего — сравнение каналов
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
                    href="/ru/maqolalar/telegram-premium-humo-orqali"
                    className="text-primary font-semibold hover:underline"
                  >
                    Telegram Premium через Humo — механизм оплаты
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ru/maqolalar/telegram-premium-click-orqali"
                    className="text-primary font-semibold hover:underline"
                  >
                    Telegram Premium через Click — самый быстрый локальный способ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ru/maqolalar/telegram-premium-qachon-faollashadi"
                    className="text-primary font-semibold hover:underline"
                  >
                    Когда активируется Premium и как считается срок
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
                  Безопасная покупка Telegram Premium в Узбекистане — это правильный выбор продавца. Проверьте 8 признаков за пару минут.{" "}
                  <strong className="text-white">@PremiumSendBot</strong> — оплата через Click и Payme, PDF-чек, запрашивается только username. Для теста достаточно 1 месяца за 59 000 сум.
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
                  Открыть Premium Send бот
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
