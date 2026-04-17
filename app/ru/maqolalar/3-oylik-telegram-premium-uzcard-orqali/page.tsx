import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Telegram Premium на 3 месяца через Uzcard — 175 000 сум, оплата в сумах",
  description:
    "Telegram Premium на 3 месяца через Uzcard за 175 000 сум — в @PremiumSendBot оплата в сумах, без комиссии. В Telegram Uzcard не работает — здесь работает.",
  keywords: [
    "Telegram Premium на 3 месяца через Uzcard",
    "купить Telegram Premium 3 месяца",
    "Telegram Premium",
    "Telegram Premium 3 месяца цена",
    "Telegram Premium Uzcard",
    "Telegram Premium 175000",
    "Telegram Premium в сумах",
    "PremiumSendBot",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/ru/maqolalar/3-oylik-telegram-premium-uzcard-orqali",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/3-oylik-telegram-premium-uzcard-orqali",
      ru: "https://premiumsend.uz/ru/maqolalar/3-oylik-telegram-premium-uzcard-orqali",
    },
  },
  openGraph: {
    title: "Telegram Premium на 3 месяца через Uzcard — 175 000 сум",
    description:
      "Активируйте Telegram Premium на 3 месяца, оплатив через Uzcard в сумах. Через @PremiumSendBot за 175 000 сум, за несколько минут.",
    url: "https://premiumsend.uz/ru/maqolalar/3-oylik-telegram-premium-uzcard-orqali",
    type: "article",
    publishedTime: "2026-04-17",
  },
};

export default function Article3MonthUzcardRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Telegram Premium на 3 месяца через Uzcard — в Узбекистане за 175 000 сум",
    description:
      "Купить Telegram Premium на 3 месяца через Uzcard — в @PremiumSendBot за 175 000 сум. Оплата в сумах, без комиссии.",
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
      "https://premiumsend.uz/ru/maqolalar/3-oylik-telegram-premium-uzcard-orqali",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько стоит Telegram Premium на 3 месяца через Uzcard?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "В Premium Send цена Telegram Premium на 3 месяца — 175 000 сум. В месяц 58 333 сум. Оплата через Uzcard в сумах — без конвертации валюты или дополнительных комиссий.",
        },
      },
      {
        "@type": "Question",
        name: "Есть ли скрытые комиссии при оплате через Uzcard?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет. При оплате через Uzcard в @PremiumSendBot никаких скрытых комиссий нет. Вы платите 175 000 сум — без дополнительных расходов.",
        },
      },
      {
        "@type": "Question",
        name: "Когда активируется 3-месячный Premium после оплаты через Uzcard?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "После подтверждения оплаты Premium обычно активируется автоматически за несколько минут. Долгого ожидания не требуется.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли оплатить через Uzcard в официальном приложении Telegram?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет. Официальная платёжная система Telegram работает только с Google Pay, Apple Pay или иностранными Visa/Mastercard. Uzcard в официальном приложении Telegram не принимается. @PremiumSendBot решает эту проблему.",
        },
      },
      {
        "@type": "Question",
        name: "Безопасна ли оплата через Uzcard?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Оплата происходит через обычный P2P-перевод или Click/Payme — данные карты, пароль или SMS-код нигде не сохраняются. Если Premium не активируется — деньги возвращаются.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли получить 3-месячный Premium через карту Humo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Наряду с Uzcard принимаются Humo, Click и Payme. Выбираете удобный способ — цена одинаковая 175 000 сум.",
        },
      },
      {
        "@type": "Question",
        name: "Что делать, если оплата через Uzcard не проходит?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Если оплата отклонена, в первую очередь проверьте баланс карты и активность SMS-Informing. Если проблема сохраняется — обратитесь в службу поддержки в боте, ответят на узбекском языке.",
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
        name: "Telegram Premium на 3 месяца через Uzcard",
        item: "https://premiumsend.uz/ru/maqolalar/3-oylik-telegram-premium-uzcard-orqali",
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
          Telegram Premium на 3 месяца через Uzcard
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
            Telegram Premium на 3 месяца через Uzcard
          </h1>
          {/* AI/SEO Snippet */}
          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              Покупка <strong>Telegram Premium на 3 месяца через Uzcard</strong> в Узбекистане осуществляется через{" "}
              <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>.{" "}
              Цена — <strong>175 000 сум</strong> (58 333 сум в месяц). Оплата через Uzcard в сумах, без комиссии. В официальном приложении Telegram Uzcard не принимается — это единственный практичный путь.
            </p>
          </div>
          <p className="text-lg text-muted leading-relaxed">
            Самая распространённая банковская карта в Узбекистане — это Uzcard. Зарплатные карты, стипендии, ежедневные платежи — большинство проходит через эту систему. Но при покупке Telegram Premium Uzcard выдаёт ошибку &laquo;Платёж не выполнен&raquo;. В официальном приложении эта карта не принимается — и многие останавливаются на этом этапе.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Решение есть — но какой путь надёжный? Какой сервис правильно работает с Uzcard? В этой статье подробно объясним, как купить Telegram Premium на 3 месяца через Uzcard, цену и процесс.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Почему официальное приложение Telegram не принимает Uzcard?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Этот вопрос интересует многих. Uzcard — самая распространённая платёжная система в Узбекистане, но при покупке Telegram Premium она не работает. Причина — на техническом и бизнес-уровне.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Telegram — международная платформа, и платежи проводятся через международные платёжные системы. В официальном приложении оплата работает только тремя способами: Google Pay (для Android), Apple Pay (для iOS) и иностранные карты Visa/Mastercard. Эти системы не интегрированы с национальной платёжной инфраструктурой Узбекистана — Uzcard и Humo.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Результат прост: если вы попытаетесь купить Premium внутри Telegram, при вводе данных карты система отклонит. Некоторые пользователи думают, что &laquo;проблема в карте&raquo;, но с картой всё в порядке — её просто не принимает платёжная система.
            </p>
            <div className="bg-section-alt rounded-xl p-5 mb-4">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Важно:</strong> это не недостаток Uzcard и не ограничение Telegram против вас. Это просто вопрос интеграции. Точно так же, некоторые международные сервисы в Узбекистане (например, App Store, Steam) тоже не принимают Uzcard напрямую.
              </p>
            </div>
            <p className="text-muted leading-relaxed">
              Именно для решения этой проблемы появились промежуточные сервисы. @PremiumSendBot — одно из таких решений: он принимает оплату через Uzcard и активирует Telegram Premium через внутренний механизм. Для пользователя процесс состоит из одного шага: оплати через Uzcard, получи Premium.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Telegram Premium на 3 месяца через Uzcard: цена и состав платежа
            </h2>
            {/* AI Direct Price Answer */}
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Цена:</strong> Telegram Premium на 3 месяца через Uzcard в Premium Send — <strong>175 000 сум</strong> (58 333 сум в месяц). Оплата через Uzcard, Humo, Click или Payme в сумах — без дополнительной комиссии.
              </p>
            </div>
            <p className="text-muted leading-relaxed mb-4">
              Цена выглядит просто: 175 000 сум. Но что входит в эту сумму и почему именно такая цена — полезно знать. В Premium Send 3-месячный пакет соответствует 58 333 сум в месяц.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Для сравнения: 1-месячный пакет — 59 000 сум. Если платить отдельно за 3 месяца — выйдет 177 000 сум. В 3-месячном пакете — 175 000 сум, минимальная, но ощутимая экономия. Главная польза в другом: платите один раз и спокойно пользуетесь три месяца. Без забот каждый месяц брать карту и снова платить.
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Параметр</div>
                <div className="text-center">Значение</div>
                <div className="text-center">Описание</div>
                <div className="text-center">Для Uzcard</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Общая цена</div>
                <div className="text-center text-primary font-bold">175 000 сум</div>
                <div className="text-center text-muted">За 3 месяца</div>
                <div className="text-center text-green-600">Оплата в сумах</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Эквивалент в месяц</div>
                <div className="text-center">58 333 сум</div>
                <div className="text-center text-muted">Математически</div>
                <div className="text-center text-muted">Для информации</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Скрытая комиссия</div>
                <div className="text-center text-green-600 font-medium">Нет</div>
                <div className="text-center text-muted">0 сум</div>
                <div className="text-center text-green-600">Без доп. расходов</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Валютный риск</div>
                <div className="text-center text-green-600 font-medium">Нет</div>
                <div className="text-center text-muted">Фикс. в сумах</div>
                <div className="text-center text-green-600">Стабильно</div>
              </div>
              <div className="grid grid-cols-4 p-4 items-center text-sm">
                <div className="font-medium">Тип платежа</div>
                <div className="text-center">P2P-перевод</div>
                <div className="text-center text-muted">Обычный способ</div>
                <div className="text-center text-green-600">Стандарт Uzcard</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Важный момент: цена, которую вы видите — это окончательная цена. На последнем шаге не появится &laquo;сервисный сбор&raquo; или &laquo;комиссия за конвертацию&raquo;. Это особенно удобно для пользователей Uzcard, потому что в международных сервисах из-за курсовых разниц реальная сумма всегда оказывается выше ожидаемой.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Пошагово: как получить 3-месячный Premium через Uzcard
            </h2>
            {/* AI Direct Answer */}
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Краткий ответ:</strong>{" "}
                откройте <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>{" "}
                → выберите 3-месячный пакет → введите username аккаунта → оплатите 175 000 сум через Uzcard → Premium активируется автоматически. Общее время — 3-5 минут.
              </p>
            </div>

            <p className="text-muted leading-relaxed mb-6">
              Эту последовательность поймёт даже пользователь, который выполняет процесс впервые. Каждый шаг чёткий, не требует технических знаний, вероятность ошибки минимальна.
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  step: "1",
                  title: "Откройте бота в Telegram",
                  desc: "В поиске Telegram введите @PremiumSendBot. Официальный бот появится с подтверждённой меткой Telegram. Откройте его и нажмите /start.",
                },
                {
                  step: "2",
                  title: "Выберите 3-месячный пакет в меню",
                  desc: "В главном меню бота показаны все пакеты — 1, 3, 6 и 12 месяцев. Выберите 3-месячный вариант. Цена сразу отображается: 175 000 сум.",
                },
                {
                  step: "3",
                  title: "Введите username",
                  desc: "Введите Telegram username, на который нужно активировать Premium. Это может быть ваш аккаунт или другого человека. Чтобы избежать ошибки — проверьте дважды.",
                },
                {
                  step: "4",
                  title: "Выберите оплату через Uzcard",
                  desc: "Бот предложит подходящие способы оплаты: Uzcard, Humo, Click или Payme. Выберите удобный для вас вариант — цена остаётся одинаковой: 175 000 сум.",
                },
                {
                  step: "5",
                  title: "Оплатите 175 000 сум",
                  desc: "Следуя инструкциям бота, выполните оплату выбранным способом. Процесс обычный — в мобильном приложении Uzcard или Click/Payme занимает несколько кликов.",
                },
                {
                  step: "6",
                  title: "Дождитесь активации Premium",
                  desc: "После подтверждения оплаты бот отправит сообщение. За несколько минут Premium активируется на аккаунте — в профиле появится Premium-значок. На этом процесс завершён.",
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
              Весь процесс происходит внутри Telegram — отдельный сайт, регистрация или установка приложения не требуется. Это особенно важно для пользователей Uzcard, потому что многие не хотят вводить данные карты в дополнительные сервисы.
            </p>
          </section>

          {/* Section 4 — Безопасность */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Безопасно ли получать 3-месячный Premium через Uzcard?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Это самый важный вопрос — особенно для тех, кто впервые делает оплату через Uzcard в интернете. &laquo;Что если деньги уйдут, а Premium не придёт?&raquo;, &laquo;Куда уйдут данные моей карты?&raquo; — это нормальные опасения.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              На самом деле оплата через @PremiumSendBot не отличается от обычных платежей, которые вы совершаете каждый день. Это P2P-перевод или платёж через Click/Payme — то есть вы просто отправляете деньги с одной карты на другую. Номер карты, CVV-код, SMS-подтверждение боту или другому лицу не передаются.
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Данные карты нигде не сохраняются</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Оплата происходит внутри вашего банковского приложения (Uzcard mobile, Click, Payme). Бот видит только входящий платёж — не номер карты, пароль или SMS-коды.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Чек об оплате остаётся у вас</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Приложение Uzcard или Click/Payme выдаёт чек на каждый перевод. Это документ для вас — если возникнет техническая проблема, с этим чеком обратитесь в поддержку.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Если Premium не пришёл — деньги вернут</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Если по техническим причинам 3-месячный Premium не активируется на ваш аккаунт, оплаченная сумма возвращается полностью. Бот основан на надёжном механизме активации — случаи возврата редки, но гарантия есть.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Поддержка на узбекском языке</h3>
                <p className="text-sm text-muted leading-relaxed">
                  По любому вопросу или проблеме обращаетесь в поддержку внутри бота. Живой оператор отвечает на узбекском языке — приложение для перевода не нужно.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              С точки зрения безопасности можно сказать: купить 3-месячный Telegram Premium через Uzcard — это так же безопасно, как перевести деньги другу. Дополнительного риска нет, потому что данные карты вообще не передаются. Большинство пользователей Premium Send выбирают этот способ именно за его простоту — нет технических сложностей, обычный перевод с карты на карту.
            </p>
          </section>

          {/* Section 5 — Uzcard vs Click vs Payme */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Uzcard, Click и Payme: какой способ удобнее для 3-месячного?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              @PremiumSendBot принимает три основных способа оплаты: Uzcard напрямую, Click и Payme. Цена во всех способах одинаковая — 175 000 сум. Разница в удобстве. Ниже практическое сравнение:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Способ</div>
                <div className="text-center">Скорость</div>
                <div className="text-center">Удобство</div>
                <div className="text-center">Для кого</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Uzcard P2P</div>
                <div className="text-center text-green-600">2-3 минуты</div>
                <div className="text-center">Среднее</div>
                <div className="text-center text-muted">Только Uzcard</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Click</div>
                <div className="text-center text-green-600">1-2 минуты</div>
                <div className="text-center text-green-600">Высокое</div>
                <div className="text-center text-muted">Есть Click</div>
              </div>
              <div className="grid grid-cols-4 p-4 items-center text-sm">
                <div className="font-medium">Payme</div>
                <div className="text-center text-green-600">1-2 минуты</div>
                <div className="text-center text-green-600">Высокое</div>
                <div className="text-center text-muted">Есть Payme</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              Практический совет: если на телефоне установлено приложение Click или Payme, это самый быстрый вариант. Причина — в приложении ваша карта уже зарегистрирована и оплата выполняется в несколько кликов. Uzcard P2P требует больше шагов: открыть приложение, выбрать карту, ввести номер.
            </p>
            <p className="text-muted leading-relaxed">
              Важный момент: Click и Payme — независимые платёжные системы, но они принимают карты Uzcard и Humo. Независимо от выбранного способа, деньги списываются именно с вашей Uzcard. Поэтому ответ на вопрос &laquo;3-месячный Premium через Uzcard&raquo; найдётся во всех трёх способах.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Почему именно 3-месячный пакет? Преимущество перед 1, 6 или 12-месячным
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              В Premium Send четыре основных пакета: <Link href="/ru/maqolalar/1-oylik-telegram-premium-uzcard-orqali-sotib-olish" className="text-primary font-semibold hover:underline">1 месяц</Link> (59 000 сум), 3 месяца (175 000 сум), <Link href="/ru/maqolalar/6-oylik-telegram-premium-sotib-olish" className="text-primary font-semibold hover:underline">6 месяцев</Link> (235 000 сум) и <Link href="/ru/maqolalar/12-oylik-telegram-premium-sotib-olish" className="text-primary font-semibold hover:underline">12 месяцев</Link> (425 000 сум). Именно 3-месячный находится в интересной позиции — он подходит во всех направлениях.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              1-месячный — хорош для пробы, но 30 дней проходят быстро и снова надо платить. 6 и 12-месячные — дешевле (в месячном расчёте), но требуют сразу крупной суммы. 3-месячный — посередине: и бюджет небольшой, и срок длинный. <Link href="/ru/maqolalar/3-oylik-telegram-premium-sotib-olish" className="text-primary font-semibold hover:underline">Подробнее о 3-месячном пакете</Link> — в отдельной статье.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: "Бюджетный баланс",
                  desc: "175 000 сум — для большинства приемлемая сумма как разовый расход. 1 месяц (59 000) очень мало, 12 месяцев (425 000) сложно платить сразу. 3 месяца — умеренно.",
                },
                {
                  title: "Сезонное использование",
                  desc: "Проект на работе, период экзаменов, праздники — у многих есть конкретные периоды, когда Premium нужен. 3 месяца как раз подходят к таким периодам.",
                },
                {
                  title: "Период изучения подписки",
                  desc: "1 месяц — короткое время для полной проверки возможностей Premium. За 3 месяца человек точно поймёт, нужен ли ему Premium на самом деле.",
                },
                {
                  title: "Подходит и для подарка",
                  desc: "Если дарите кому-то — 3 месяцев достаточно. 1 месяц мало, 12 месяцев иногда чрезмерно. 3 месяца — сбалансированный выбор.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-muted leading-relaxed mb-4">
              Ещё один важный факт: в официальном приложении Telegram 3- и 6-месячных пакетов вообще нет — только 1- и 12-месячные. То есть купить 3-месячный пакет через официальную систему Telegram невозможно. В этом направлении сервисы вроде @PremiumSendBot — единственный вариант, и именно поэтому 3-месячный пакет имеет особую ценность.
            </p>
            <p className="text-muted leading-relaxed">
              Если 3-месячный вариант вам подходит —{" "}
              <Link href="/ru/3-oylik" className="text-primary font-semibold hover:underline">подробнее о пакете здесь</Link>{" "}
              или напрямую через{" "}
              <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary font-semibold hover:underline">@PremiumSendBot</Link>{" "}
              можно заказать через Uzcard.
            </p>
          </section>

          {/* Section 7 — Проблемы и решения */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Проблемы при оплате через Uzcard и их решения
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Хотя процесс простой, иногда возможны технические или банковские проблемы. Ниже самые частые случаи и их конкретные решения. Если оплата не проходит, сначала просмотрите этот список:
            </p>

            <div className="space-y-3 mb-6">
              {[
                {
                  title: "Ошибка «Платёж отклонён»",
                  desc: "Самая частая причина — недостаточно средств на карте или не активна услуга SMS-Informing. Проверьте баланс и подключите услугу SMS-подтверждения у банковского оператора.",
                },
                {
                  title: "Платёж прошёл, но Premium не пришёл",
                  desc: "Обычно это временная задержка. Подождите 5-10 минут. Если всё же не активируется — отправьте чек об оплате в поддержку внутри бота. Они проверят вручную и решат проблему.",
                },
                {
                  title: "На карте установлен лимит",
                  desc: "Некоторые банки устанавливают суточный лимит на интернет-платежи. Через мобильное приложение Uzcard временно увеличьте лимит интернет-платежей — после этого оплата пройдёт.",
                },
                {
                  title: "Введён неверный username",
                  desc: "Если вы неверно ввели username другого человека и совершили оплату — сразу напишите в поддержку. Если активация ещё не произошла, можно исправить.",
                },
                {
                  title: "Не работает приложение Click/Payme",
                  desc: "Если оплата через Click или Payme не работает — переходите на прямой Uzcard P2P-перевод. Бот даст вам номер карты, оплачиваете через своё мобильное приложение.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-muted leading-relaxed">
              Большинство пользователей успешно совершают оплату с первого раза. Но если возникнет проблема — не паникуйте. Поддержка бота на узбекском языке отвечает быстро, в любой ситуации найдётся решение.
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
                  q: "Сколько стоит Telegram Premium на 3 месяца через Uzcard?",
                  a: "В Premium Send цена 175 000 сум. Оплата через Uzcard в сумах — без конвертации валюты или дополнительной комиссии.",
                },
                {
                  q: "Есть ли скрытые комиссии при оплате через Uzcard?",
                  a: "Нет. При оплате через Uzcard никаких скрытых комиссий нет. Вы платите 175 000 сум — без дополнительных расходов.",
                },
                {
                  q: "Когда активируется 3-месячный Premium после оплаты через Uzcard?",
                  a: "После подтверждения оплаты Premium обычно активируется автоматически за несколько минут. Долгого ожидания не требуется.",
                },
                {
                  q: "Можно ли оплатить через Uzcard в официальном приложении Telegram?",
                  a: "Нет. Официальная система Telegram не принимает Uzcard. Работают только Google Pay, Apple Pay или иностранные Visa/Mastercard. @PremiumSendBot решает эту проблему.",
                },
                {
                  q: "Безопасна ли оплата через Uzcard?",
                  a: "Да. Оплата происходит через обычный P2P-перевод или Click/Payme — данные карты, пароль или SMS-код нигде не сохраняются. Если Premium не пришёл — деньги возвращаются.",
                },
                {
                  q: "Можно ли получить 3-месячный Premium через карту Humo?",
                  a: "Да. Наряду с Uzcard принимаются Humo, Click и Payme. Цена одинаковая — 175 000 сум.",
                },
                {
                  q: "Что делать, если оплата через Uzcard не проходит?",
                  a: "Сначала проверьте баланс карты и активность SMS-Informing. Если проблема сохраняется — обратитесь в поддержку в боте, ответят на узбекском языке.",
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
              <h3 className="text-lg font-bold text-foreground mb-4 text-center">Premium Send для пользователей Uzcard</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">175 000</p>
                  <p className="text-sm text-muted">сум, без доп. комиссий</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">3-5 минут</p>
                  <p className="text-sm text-muted">От оплаты до активации</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">Гарантия</p>
                  <p className="text-sm text-muted">Если Premium не пришёл — возврат</p>
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
                  Если у вас есть Uzcard и хотите получить Telegram Premium в сумах — 3-месячный пакет самый удобный вариант по балансу бюджета и срока.{" "}
                  <strong className="text-white">@PremiumSendBot</strong> делает это за несколько минут, за 175 000 сум, без дополнительной комиссии.
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
