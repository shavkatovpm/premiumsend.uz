import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Telegram Premium на 12 месяцев через Uzcard — 425 000 сум, экономия 39%",
  description:
    "Telegram Premium на 12 месяцев через Uzcard за 425 000 сум — @PremiumSendBot, оплата в сумах. В месяц всего 35 417 сум. В Telegram есть, но Uzcard не работает.",
  keywords: [
    "Telegram Premium 12 месяцев через Uzcard",
    "Telegram Premium 12 месяцев",
    "Telegram Premium годовой",
    "Telegram Premium на год",
    "Telegram Premium 12 месяцев цена",
    "Telegram Premium Uzcard",
    "Telegram Premium 425000",
    "PremiumSendBot",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/ru/maqolalar/12-oylik-telegram-premium-uzcard-orqali",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/12-oylik-telegram-premium-uzcard-orqali",
      ru: "https://premiumsend.uz/ru/maqolalar/12-oylik-telegram-premium-uzcard-orqali",
    },
  },
  openGraph: {
    title: "Telegram Premium на 12 месяцев через Uzcard — 425 000 сум",
    description:
      "Годовой Telegram Premium через Uzcard в сумах. @PremiumSendBot за 425 000 сум, на 39% дешевле помесячной оплаты.",
    url: "https://premiumsend.uz/ru/maqolalar/12-oylik-telegram-premium-uzcard-orqali",
    type: "article",
    publishedTime: "2026-04-17",
  },
};

export default function Article12MonthUzcardRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Telegram Premium на 12 месяцев через Uzcard — в Узбекистане за 425 000 сум",
    description:
      "Telegram Premium на 12 месяцев через Uzcard — @PremiumSendBot за 425 000 сум. Оплата в сумах, экономия 39%.",
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
      "https://premiumsend.uz/ru/maqolalar/12-oylik-telegram-premium-uzcard-orqali",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько стоит Telegram Premium на 12 месяцев через Uzcard?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "В Premium Send цена Telegram Premium на 12 месяцев — 425 000 сум. В месяц всего 35 417 сум — самая низкая месячная цена среди всех пакетов. Оплата через Uzcard в сумах, без комиссий.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько можно сэкономить на 12-месячном пакете по сравнению с 1-месячным?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "1-месячный пакет стоит 59 000 сум — за 12 месяцев отдельно вышло бы 708 000 сум. В 12-месячном пакете 425 000 сум. Разница — 283 000 сум или 39% экономии.",
        },
      },
      {
        "@type": "Question",
        name: "В официальном Telegram есть 12 месяцев — зачем нужен бот?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "12-месячный пакет в Telegram существует, но оплата возможна только через Google Pay, Apple Pay или иностранную карту. Uzcard и Humo в официальной системе не работают. @PremiumSendBot решает именно эту проблему — позволяет платить узбекской картой в сумах.",
        },
      },
      {
        "@type": "Question",
        name: "Безопасно ли платить 425 000 сум через Uzcard?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Оплата проходит стандартным P2P переводом или через Click/Payme — данные карты не сохраняются. Если Premium не придёт — деньги возвращаются. 425 000 сум — больше, чем 1-месячная оплата, но механизм такой же безопасный.",
        },
      },
      {
        "@type": "Question",
        name: "Что делать, если дневной лимит Uzcard не позволяет оплатить 425 000 сум?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Временно увеличьте лимит интернет-платежей в мобильном приложении Uzcard. Или оплатите через Click/Payme — там банковский лимит рассчитывается иначе. Альтернатива — обратитесь в поддержку бота для возможности разделить платёж на части.",
        },
      },
      {
        "@type": "Question",
        name: "Когда активируется Premium после оплаты через Uzcard?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "После подтверждения оплаты Premium активируется автоматически в течение нескольких минут. 365 дней подписка работает непрерывно — без дополнительных подтверждений или продлений.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли оплатить 12 месяцев картой Humo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Вместе с Uzcard принимаются также Humo, Click и Payme. Цена одинаковая — 425 000 сум. Способ оплаты выбираете сами, процесс в каждом случае идентичен.",
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
        name: "Telegram Premium на 12 месяцев через Uzcard",
        item: "https://premiumsend.uz/ru/maqolalar/12-oylik-telegram-premium-uzcard-orqali",
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
          Telegram Premium на 12 месяцев через Uzcard
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
            Telegram Premium на 12 месяцев через Uzcard
          </h1>
          {/* AI/SEO Snippet */}
          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>Telegram Premium на 12 месяцев через Uzcard</strong> можно оплатить через{" "}
              <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>. Цена — <strong>425 000 сум</strong> (35 417 сум в месяц), на 39% дешевле, чем по месяцам. В Telegram 12-месячный пакет есть, но Uzcard не принимается — это единственное локальное решение.
            </p>
          </div>
          <p className="text-lg text-muted leading-relaxed">
            Годовая подписка Telegram Premium — это не просто покупка, это инвестиция в цифровую жизнь. Инструмент, который используется каждый день в течение года, функции, ускоряющие работу, опыт без рекламы. 425 000 сум одним платежом может показаться много, но в пересчёте на месяц — 35 417 сум, дешевле, чем чашка кофе в день.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Проблема двусторонняя. Первая: в официальном приложении Telegram 12-месячный пакет есть, но карта Uzcard не принимается. Вторая: 425 000 сум — сумма, которая может превышать лимиты некоторых банков, и требует дополнительной внимательности при оплате. Эта статья подробно объясняет, как решить обе проблемы, как безопасно оплатить и почему стоит выбрать именно 12-месячный пакет.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              В Telegram есть 12 месяцев — но через Uzcard оплатить нельзя
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Это отличается от других пакетов. 3- и 6-месячные пакеты в официальном Telegram вообще отсутствуют — поэтому реселлер-боты являются единственным вариантом. 12-месячный же есть в самом Telegram, отображается в меню, его можно выбрать. Но при нажатии «Оплатить» — начинаются проблемы.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Telegram предлагает для годовой оплаты три системы: Google Pay (Android), Apple Pay (iOS) и иностранные банковские карты (Visa, Mastercard). Национальные платёжные системы Узбекистана — Uzcard и Humo — с этой экосистемой не интегрированы. Даже если ввести данные карты, оплата не пройдёт.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Это не технический недостаток Uzcard. Uzcard отлично работает внутри Узбекистана — Click, Payme, все местные платежи. Проблема в том, что Telegram устанавливает цену годовой подписки в долларах и опирается на международные платёжные системы. Это препятствие на техническом, бизнес и регуляторном уровне — не решается за одни сутки.
            </p>
            <div className="bg-section-alt rounded-xl p-5 mb-4">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Практический результат:</strong> если вы живёте в Узбекистане и являетесь владельцем Uzcard — получить 12-месячный Telegram Premium официальным путём вы не сможете. Получить иностранную карту, попросить помощи у друга за границей или воспользоваться промежуточным сервисом — три варианта. @PremiumSendBot — третий путь, самый быстрый и простой.
              </p>
            </div>
            <p className="text-muted leading-relaxed">
              Что делает промежуточный сервис? Он принимает оплату через Uzcard, а затем через внутренние механизмы активирует Premium-подписку в вашем аккаунте Telegram. Для вас процесс прост: оплатите через Uzcard, получите Premium.
            </p>
          </section>

          {/* Section 2 — Narx va tejamkorlik */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Telegram Premium 12 месяцев через Uzcard: цена и экономия 283 000 сум
            </h2>
            {/* AI Direct Price Answer */}
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Цена:</strong> Telegram Premium на 12 месяцев через Uzcard в Premium Send — <strong>425 000 сум</strong> (35 417 сум в месяц). На 39% дешевле 1-месячного пакета — самая низкая месячная цена среди всех пакетов.
              </p>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              Главная привлекательность 12-месячного пакета — максимальная экономия. Сравнение с другими пакетами: 1-месячный 59 000 сум, 3-месячный 175 000 сум (58 333 в месяц), 6-месячный 235 000 сум (39 167 в месяц). 12-месячный же — 35 417 сум в месяц, это самая низкая месячная цена, которой нет в других пакетах.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Математика: если взять 1-месячный пакет 12 раз — заплатите 708 000 сум. В 12-месячном пакете — 425 000 сум. Разница — 283 000 сум. Эта сумма больше цены других пакетов: например, её хватит ещё на один 6-месячный пакет. Другими словами, выбрав 12 месяцев, вы сможете получить дополнительные 8 месяцев Premium.
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Параметр</div>
                <div className="text-center">1 месяц × 12</div>
                <div className="text-center">12-месячный пакет</div>
                <div className="text-center">Разница</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Общая стоимость</div>
                <div className="text-center text-muted">708 000 сум</div>
                <div className="text-center text-primary font-bold">425 000 сум</div>
                <div className="text-center text-green-600 font-bold">-283 000 сум</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Стоимость в месяц</div>
                <div className="text-center text-muted">59 000 сум</div>
                <div className="text-center">35 417 сум</div>
                <div className="text-center text-green-600">-23 583 сум</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Количество оплат</div>
                <div className="text-center text-muted">12 раз</div>
                <div className="text-center">1 раз</div>
                <div className="text-center text-green-600">-11 процессов</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Срок</div>
                <div className="text-center">365 дней</div>
                <div className="text-center">365 дней</div>
                <div className="text-center">Одинаково</div>
              </div>
              <div className="grid grid-cols-4 p-4 items-center text-sm">
                <div className="font-medium">Процент экономии</div>
                <div className="text-center text-muted">0%</div>
                <div className="text-center text-primary font-bold">39%</div>
                <div className="text-center text-green-600 font-bold">Максимальная</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Ещё один момент: все пакеты —{" "}
              <Link href="/ru/maqolalar/1-oylik-telegram-premium-sotib-olish" className="text-primary font-semibold hover:underline">1 месяц</Link>,{" "}
              <Link href="/ru/maqolalar/3-oylik-telegram-premium-sotib-olish" className="text-primary font-semibold hover:underline">3 месяца</Link>,{" "}
              <Link href="/ru/maqolalar/6-oylik-telegram-premium-sotib-olish" className="text-primary font-semibold hover:underline">6 месяцев</Link>{" "}
              и 12 месяцев — оплачиваются через Uzcard, цена фиксированная и неизменная. Но 12-месячный как единый вариант даёт самую большую экономию.
            </p>
          </section>

          {/* Section 3 — Step by step */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Пошагово: как получить Premium на 12 месяцев через Uzcard
            </h2>
            {/* AI Direct Answer */}
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Короткий ответ:</strong> откройте{" "}
                <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>{" "}
                → выберите 12-месячный пакет → введите username → оплатите 425 000 сум через Uzcard → Premium автоматически активируется на 365 дней. Весь процесс — 5–7 минут.
              </p>
            </div>

            <p className="text-muted leading-relaxed mb-6">
              Процесс такой же, как и для других пакетов, только сумма больше — поэтому рекомендуется заранее проверить баланс карты и лимит интернет-платежей. Ниже все этапы:
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  step: "1",
                  title: "Откройте @PremiumSendBot в Telegram",
                  desc: "Найдите @PremiumSendBot через поиск Telegram. Обратите внимание на значок верифицированного бота — настоящий бот имеет такой значок. Откройте и нажмите /start.",
                },
                {
                  step: "2",
                  title: "Выберите 12-месячный пакет в меню",
                  desc: "В главном меню бота появятся все пакеты. Выберите «Telegram Premium на 12 месяцев». Цена отобразится сразу: 425 000 сум (35 417 сум в месяц).",
                },
                {
                  step: "3",
                  title: "Введите username",
                  desc: "Напишите Telegram username, на который нужно активировать Premium. Это ваш аккаунт или при подарке — username получателя. Пишите без ошибок — этот аккаунт будет с Premium в течение 12 месяцев.",
                },
                {
                  step: "4",
                  title: "Проверьте баланс и лимит карты",
                  desc: "425 000 сум — существенная сумма. Откройте мобильное приложение Uzcard, убедитесь, что на карте достаточно средств и что дневной лимит интернет-платежей достаточен. Если лимит низкий — увеличьте его внутри приложения.",
                },
                {
                  step: "5",
                  title: "Выберите способ оплаты и оплатите",
                  desc: "Бот предложит выбор между Uzcard, Humo, Click и Payme. Выберите и следуйте инструкциям бота — оплата производится внутри привычного вам приложения.",
                },
                {
                  step: "6",
                  title: "Premium активируется на 365 дней",
                  desc: "После подтверждения оплаты 12-месячный Premium автоматически активируется в аккаунте. В течение следующего года никаких повторных оплат или продлений не требуется — подписка работает непрерывно.",
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
              Весь процесс занимает 5–7 минут. Следующие 365 дней Premium работает без забот. Через год подписка автоматически завершается — это важный момент: никаких автоматических повторных списаний, вы сами выбираете следующий пакет.
            </p>
          </section>

          {/* Section 4 — Bolshaya summa xavfsizligi */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              425 000 сум — большая сумма. Безопасно ли платить через Uzcard?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Главный психологический барьер 12-месячного пакета — кажущийся большим размер суммы. 425 000 сум — для некоторых это значительная часть месячной зарплаты. Вопрос «а если деньги уйдут, а Premium не придёт?» — уместный и нормальный.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              С точки зрения механизма оплаты перевод 425 000 сум ничем не отличается от перевода 59 000 сум. Тот же P2P перевод или оплата через Click/Payme. Данные карты (номер, пароль, SMS-код, CVV) боту не отправляются. Они остаются внутри вашего банковского приложения.
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Большая сумма — но одна оплата</h3>
                <p className="text-sm text-muted leading-relaxed">
                  В 12-месячном пакете вы оплачиваете один раз и тема закрыта на 365 дней. В 1-месячном же — 12 раз действуете с картой, каждый раз — дополнительный маленький риск. На практике одна большая оплата безопаснее, чем 12 маленьких.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Чек оплаты как документ</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Uzcard, Click или Payme создают точный чек для каждого перевода. Чек на 425 000 сум — это ваш юридический документ. При возникновении проблемы поддержка идентифицирует оплату именно по этому чеку.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Гарантия возврата денег</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Если по техническим причинам 12-месячный Premium не активируется в аккаунте — 425 000 сум возвращаются полностью. Это чёткое условие, основной критерий для любого реселлер-сервиса. Большинству пользователей этой гарантией пользоваться не приходится, потому что активация автоматическая и надёжная.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Многие выбирают годовой вариант</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Если много людей уже оплатили 425 000 сум через этот способ — значит система проверена. Premium Send работает уже годы. Доверие видно не в цифрах, а в стабильности процесса.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Кратко: 425 000 сум — большая сумма, но механизм оплаты через Uzcard простой и на уровне безопасности вашей собственной банковской системы. Никакого дополнительного риска.
            </p>
          </section>

          {/* Section 5 — 425k to'lov variantlari */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Как удобно оплатить 425 000 сум: Uzcard, Humo, Click, Payme
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Выбор способа оплаты для крупной суммы имеет особое значение. Все четыре варианта работают, но некоторые практически удобнее:
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Click — самый простой вариант</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Если приложение Click установлено и ваша карта зарегистрирована — 425 000 сум отправите в 2–3 нажатия. Click хорошо адаптирован для крупных сумм — лимиты интернет-платежей обычно мягче, чем банковские.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Payme — аналогично Click</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Payme также подходит для крупных сумм. Если у вас не Click, а Payme — разницы нет. Интерфейс другой, но процесс тот же: выберите карту, введите сумму, подтвердите.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Uzcard P2P — классический способ</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Прямой P2P перевод из мобильного приложения Uzcard. 425 000 сум здесь — обычная сумма, проблемы по размеру нет. Но иногда банки запрашивают дополнительное подтверждение для крупных переводов — это нормальные меры безопасности.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Humo — альтернативная карта</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Uzcard нет, но есть Humo? Не проблема. Humo также принимается, процесс одинаковый. Цена — 425 000 сум, никакой дополнительной разницы нет.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
              <p className="text-foreground text-sm leading-relaxed">
                <strong>Важное предупреждение о дневном лимите:</strong> у некоторых банков дневной лимит интернет-платежей составляет 200 000–500 000 сум. 425 000 сум — на этой границе. Если первая попытка отклонена, временно увеличьте дневной лимит интернет-платежей в мобильном приложении Uzcard (обычно до 1 000 000 сум). Затем попробуйте снова.
              </p>
            </div>

            <p className="text-muted leading-relaxed">
              Практический совет: для первой оплаты на 425 000 сум попробуйте Click или Payme. Они хорошо адаптированы для крупных сумм. Если не получилось — переходите на Uzcard P2P или обращайтесь в поддержку бота.
            </p>
          </section>

          {/* Section 6 — Kimga mos */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Кому подходит 12-месячный пакет? Логика годовой подписки через Uzcard
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              425 000 сум — сумма не для всех. 12-месячный пакет рассчитан на конкретный профиль пользователя. Ниже 4 основных сценария — чтобы распознать себя:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: "Использует Telegram каждый день",
                  desc: "Если Telegram — ваш ежедневный рабочий инструмент (каналы, группы, рабочие чаты) — 12 месяцев вам подходят. При ежедневном использовании 35 417 сум в месяц — это ничто.",
                },
                {
                  title: "Предприниматель или блогер",
                  desc: "Отправка больших файлов, управление несколькими аккаунтами, сбор подписчиков из каналов — Premium заметно облегчает это. Для профессионального пользователя 12 месяцев — это расходы на работу.",
                },
                {
                  title: "Стремится к максимальной экономии",
                  desc: "Если вы уверены, что Premium вам нужен — 12-месячный самый выгодный вариант. Экономия 283 000 сум — это конкретная цифра, реальные деньги.",
                },
                {
                  title: "Планирует бюджет заранее",
                  desc: "Оплатить один раз и закрыть вопрос на год — удобно с финансовой точки зрения. Вместо отслеживания мелких ежемесячных расходов — одна крупная инвестиция.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-muted leading-relaxed mb-4">
              Если вы не узнаёте себя в приведённых профилях — возможно,{" "}
              <Link href="/ru/maqolalar/6-oylik-telegram-premium-sotib-olish" className="text-primary font-semibold hover:underline">6 месяцев (235 000 сум)</Link>{" "}
              или{" "}
              <Link href="/ru/maqolalar/3-oylik-telegram-premium-sotib-olish" className="text-primary font-semibold hover:underline">3 месяца (175 000 сум)</Link>{" "}
              подойдут лучше. Короткая подписка — меньше риска, выше гибкость.
            </p>

            <p className="text-muted leading-relaxed">
              Но если план годовой подписки чёткий —{" "}
              <Link href="/ru/12-oylik" className="text-primary font-semibold hover:underline">подробнее о 12-месячном пакете</Link>{" "}
              или напрямую через{" "}
              <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary font-semibold hover:underline">@PremiumSendBot</Link>{" "}
              с оплатой Uzcard.
            </p>
          </section>

          {/* Section 7 — Muammolar va yechimlar */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Проблемы при оплате 12 месяцев: особенности суммы 425 000 сум
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Большая сумма — больше точек проверки. Uzcard, Click, Payme и банковские системы могут применять дополнительные меры безопасности при оплате 425 000 сум. Ниже самые распространённые ситуации:
            </p>

            <div className="space-y-3 mb-6">
              {[
                {
                  title: "Не хватает лимита интернет-платежей",
                  desc: "Самая частая проблема. У некоторых банков дневной лимит — 200 000–400 000 сум. 425 000 сум может превышать эту границу. Решение: увеличьте дневной лимит интернет-платежей в мобильном приложении Uzcard до 1 000 000 сум и попробуйте снова.",
                },
                {
                  title: "Банк запрашивает дополнительное подтверждение",
                  desc: "С точки зрения безопасности банк может запросить подтверждение крупного перевода через push-уведомление или звонок. Это нормальная работа банковской системы. Подтвердите и оплата продолжится.",
                },
                {
                  title: "Деньги списались, но Premium не активирован",
                  desc: "Крупная сумма может обрабатываться в системе немного дольше. Подождите 10–15 минут. Если всё равно не активируется — отправьте чек оплаты в поддержку бота. После ручной проверки 365-дневный Premium будет активирован или деньги возвращены.",
                },
                {
                  title: "SMS-код не пришёл, оплата остановилась",
                  desc: "Причиной может быть задержка сети или неактивная услуга SMS-Informing. В следующей попытке используйте подтверждение через push-уведомление или позвоните оператору банка для активации SMS-услуги.",
                },
                {
                  title: "Ввели неверный username — 365 дней уйдут впустую",
                  desc: "Это самая опасная ситуация. Если после 12-месячной оплаты Premium активируется на неверный username — годовая подписка на 425 000 сум уйдёт другому человеку. Поэтому в шаге 3 обязательно проверьте username дважды.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-muted leading-relaxed">
              Большинство этих проблем — нормальные меры безопасности со стороны банка. Не паникуйте — поддержка бота поможет в любой ситуации и подскажет, как правильно взаимодействовать с платёжными системами.
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
                  q: "Сколько стоит Telegram Premium на 12 месяцев через Uzcard?",
                  a: "В Premium Send цена — 425 000 сум. В месяц всего 35 417 сум — самая низкая месячная цена среди всех пакетов. Оплата через Uzcard в сумах, без комиссий.",
                },
                {
                  q: "Сколько можно сэкономить по сравнению с 1-месячным пакетом?",
                  a: "1-месячный пакет — 59 000 сум, за 12 месяцев отдельно вышло бы 708 000 сум. В 12-месячном — 425 000 сум. Разница — 283 000 сум или 39% экономии.",
                },
                {
                  q: "В официальном Telegram есть 12 месяцев — зачем нужен бот?",
                  a: "12-месячный пакет в Telegram есть, но оплата только через Google Pay, Apple Pay или иностранную карту. Uzcard и Humo в официальной системе не работают. @PremiumSendBot решает именно эту проблему.",
                },
                {
                  q: "Безопасно ли платить 425 000 сум через Uzcard?",
                  a: "Да. Механизм — простой P2P перевод или оплата Click/Payme. Данные карты не сохраняются. Если Premium не придёт — деньги возвращаются. Уровень безопасности такой же, как при мелких платежах.",
                },
                {
                  q: "Что делать, если дневной лимит Uzcard не позволяет оплатить 425 000 сум?",
                  a: "Временно увеличьте лимит интернет-платежей в мобильном приложении Uzcard. Или оплатите через Click/Payme — там банковский лимит рассчитывается иначе.",
                },
                {
                  q: "Когда активируется Premium после оплаты?",
                  a: "После подтверждения оплаты Premium активируется автоматически в течение нескольких минут. 365 дней подписка работает непрерывно.",
                },
                {
                  q: "Можно ли оплатить 12 месяцев картой Humo?",
                  a: "Да. Вместе с Uzcard принимаются также Humo, Click и Payme. Цена одинаковая — 425 000 сум.",
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
              <h3 className="text-lg font-bold text-foreground mb-4 text-center">12 месяцев Premium — в цифрах</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">425 000</p>
                  <p className="text-sm text-muted">сум, одна оплата</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">39%</p>
                  <p className="text-sm text-muted">экономии к 1-месячному</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">365 дней</p>
                  <p className="text-sm text-muted">непрерывный Premium, без доплат</p>
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
                  Если Telegram — ваш ежедневный инструмент и вы готовы к годовой подписке, 12-месячный пакет — самый выгодный выбор.{" "}
                  <strong className="text-white">@PremiumSendBot</strong> после одной оплаты через Uzcard даёт Premium на 365 дней. Курс доллара, иностранная карта, ежемесячные заботы — ничего из этого не нужно.
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
