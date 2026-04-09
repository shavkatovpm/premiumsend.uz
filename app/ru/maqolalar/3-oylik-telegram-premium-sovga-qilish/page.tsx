import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Подарить Telegram Premium на 3 месяца — другу, близкому, легко и быстро",
  description:
    "Подарить Telegram Premium на 3 месяца — 175 000 сум через Uzcard/Humo. В @PremiumSendBot введите username и отправьте gift.",
  keywords: [
    "подарить Telegram Premium 3 месяца",
    "telegram premium 3 месяца gift",
    "telegram premium подарок",
    "telegram premium gift как отправить",
    "telegram premium 3 месяца цена",
    "telegram premium подарить другому",
    "Telegram Premium подарок Узбекистан",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/ru/maqolalar/3-oylik-telegram-premium-sovga-qilish",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/3-oylik-telegram-premium-sovga-qilish",
      ru: "https://premiumsend.uz/ru/maqolalar/3-oylik-telegram-premium-sovga-qilish",
    },
  },
  openGraph: {
    title:
      "Подарить Telegram Premium на 3 месяца — другу, близкому, легко и быстро",
    description:
      "Подарите другу 3-месячный Telegram Premium gift. Через @PremiumSendBot — оплата в сумах, Uzcard, Humo.",
    url: "https://premiumsend.uz/ru/maqolalar/3-oylik-telegram-premium-sovga-qilish",
    type: "article",
    publishedTime: "2026-04-08",
  },
};

export default function Article3MonthGiftRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Подарить Telegram Premium на 3 месяца — другу, близкому, легко и быстро",
    description:
      "Подарить Telegram Premium на 3 месяца — через @PremiumSendBot за 175 000 сум. Пошаговая инструкция.",
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
      "https://premiumsend.uz/ru/maqolalar/3-oylik-telegram-premium-sovga-qilish",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Можно ли подарить Telegram Premium на 3 месяца?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Через @PremiumSendBot введите Telegram username получателя и оплатите. 3-месячный Premium активируется на его аккаунте автоматически.",
        },
      },
      {
        "@type": "Question",
        name: "Как отправить Telegram Premium gift?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Откройте @PremiumSendBot, выберите 3-месячный пакет, введите username получателя и оплатите через Uzcard или Humo. Premium активируется за несколько минут.",
        },
      },
      {
        "@type": "Question",
        name: "Нужно ли согласие получателя для подарка Premium?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет. Telegram Premium gift активируется автоматически. Предварительное согласие получателя не требуется.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько стоит подарить Telegram Premium на 3 месяца?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "В Premium Send 3-месячный Telegram Premium gift стоит 175 000 сум. Оплата через Uzcard или Humo в узбекских сумах.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли отправить 3-месячный gift через официальный Telegram?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет. В официальной функции gift в Telegram доступны только 1-месячный и 12-месячный варианты. 3-месячный gift можно отправить только через сервисы вроде @PremiumSendBot.",
        },
      },
      {
        "@type": "Question",
        name: "Что будет, если у получателя уже есть Premium?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Срок gift добавляется к существующей подписке. То есть 3 месяца прибавятся — ничего не пропадёт.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли ввести номер телефона вместо username?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет. Для отправки gift нужен Telegram username получателя. Отправить по номеру телефона нельзя.",
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
        name: "Подарить Telegram Premium на 3 месяца",
        item: "https://premiumsend.uz/ru/maqolalar/3-oylik-telegram-premium-sovga-qilish",
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
          Подарить Telegram Premium на 3 месяца
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
            <time className="text-xs text-muted" dateTime="2026-04-08">
              8 апреля 2026
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Подарить Telegram Premium на 3 месяца
          </h1>
          {/* AI/SEO Snippet */}
          <div className="bg-primary-light/50 rounded-xl p-5 border border-primary/10 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>Подарить Telegram Premium на 3 месяца</strong> — это отправить 3-месячную Premium-подписку на Telegram-аккаунт друга, родственника или коллеги. Самый простой способ в Узбекистане — через <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>, за <strong>175 000 сум</strong>, оплата картой Uzcard или Humo.
            </p>
          </div>
          <p className="text-lg text-muted leading-relaxed">
            У друга скоро день рождения — цветы купить или опять кружку? Хотите поблагодарить коллегу, но простое &laquo;спасибо&raquo; кажется недостаточным. Ваш ребёнок проводит в Telegram по 3-4 часа в день, но реклама мешает. Знакомая ситуация? Именно в такие моменты подарить 3-месячный Telegram Premium — современное, практичное и запоминающееся решение. В отличие от обычных подарков, этот gift используется каждый день. Когда человек открывает Telegram — он чувствует ваш подарок.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            В этой статье подробно расскажем: откуда, как и почему именно 3-месячный вариант — лучший выбор для подарка. Если хотите купить для себя — читайте нашу статью <Link href="/ru/maqolalar/3-oylik-telegram-premium-sotib-olish" className="text-primary font-semibold hover:underline">Купить Telegram Premium на 3 месяца</Link>.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Что такое Telegram Premium gift и как это работает?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Кратко:</strong> Вы платите — Premium активируется на аккаунте другого человека. Достаточно знать username.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Telegram Premium gift — это возможность подарить Premium-подписку другому пользователю. Вы оплачиваете, а Premium активируется на чужом аккаунте. Этот механизм есть и в самом Telegram, но в очень ограниченном виде: только 1-месячный и 12-месячный вариант, только иностранная карта. Gift-функция работает не во всех странах одинаково — для пользователей Узбекистана она практически недоступна.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Через <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link> процесс значительно проще. Вы заходите в бот, выбираете 3-месячный пакет, вводите username получателя и оплачиваете через Uzcard или Humo. Через несколько минут Premium появляется на аккаунте получателя. Предварительное согласие получателя не требуется — gift активируется автоматически.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Как отправить Telegram Premium gift? Ответ очень прост: знаете username — этого достаточно, остальное бот сделает сам. Это уникальная возможность Telegram, которой нет ни в WhatsApp, ни в других мессенджерах.
            </p>
            <p className="text-muted leading-relaxed">
              Получатель gift увидит в своём Telegram Premium badge, все премиум-функции и 3 месяца без рекламы. Никаких дополнительных настроек или активации не требуется — при открытии Telegram всё уже готово.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Почему именно 3 месяца — лучший вариант для подарка?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Кратко:</strong> 3 месяца — &laquo;золотая середина&raquo; для подарка: 175 000 сум, достаточный срок, приемлемая цена.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Через Premium Send доступны пакеты на <Link href="/ru/1-oylik" className="text-primary font-semibold hover:underline">1 месяц</Link>, 3 месяца, <Link href="/ru/6-oylik" className="text-primary font-semibold hover:underline">6 месяцев</Link> и <Link href="/ru/12-oylik" className="text-primary font-semibold hover:underline">12 месяцев</Link> (в самом Telegram доступны только 1 и 12 месяцев). Но для подарка 3-месячный вариант — оптимальный выбор, и вот почему.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Во-первых, 1 месяц — слишком коротко. Человек не успеет привыкнуть к Premium-возможностям, как подписка закончится — неудовлетворительно и для дарителя, и для получателя. Во-вторых, 12 месяцев стоит 425 000 сум — не у всех бюджет позволяет, тем более на подарок. В-третьих, 6 месяцев хороший вариант, но цена 235 000 сум — заметно дороже.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Именно 3 месяца — это &laquo;золотая середина&raquo;. За 175 000 сум получатель имеет достаточно времени, чтобы полностью прочувствовать все возможности Premium. За три месяца человек привыкает к Premium и потом сам решает — продлевать или нет. Большинство продлевает — потому что за 3 месяца возвращаться к Telegram без Premium уже не хочется.
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Срок</div>
                <div className="text-center">Цена</div>
                <div className="text-center">В месяц</div>
                <div className="text-center">Для подарка</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">
                  <Link href="/ru/1-oylik" className="text-foreground hover:text-primary">1 месяц</Link>
                </div>
                <div className="text-center text-muted">59 000 сум</div>
                <div className="text-center text-muted">59 000 сум</div>
                <div className="text-center text-muted">Слишком коротко</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm bg-primary-light/30">
                <div className="font-bold text-primary">
                  <Link href="/ru/3-oylik" className="text-primary hover:underline">3 месяца</Link>
                </div>
                <div className="text-center text-primary font-medium">175 000 сум</div>
                <div className="text-center text-primary font-medium">58 333 сум</div>
                <div className="text-center text-primary font-medium">Оптимально</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">
                  <Link href="/ru/6-oylik" className="text-foreground hover:text-primary">6 месяцев</Link>
                </div>
                <div className="text-center text-muted">235 000 сум</div>
                <div className="text-center text-muted">39 167 сум</div>
                <div className="text-center text-muted">Дороже</div>
              </div>
              <div className="grid grid-cols-4 p-4 items-center text-sm">
                <div className="font-medium">
                  <Link href="/ru/12-oylik" className="text-foreground hover:text-primary">12 месяцев</Link>
                </div>
                <div className="text-center text-muted">425 000 сум</div>
                <div className="text-center text-muted">35 417 сум</div>
                <div className="text-center text-muted">Большой бюджет</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Как видно из таблицы, подарить Telegram Premium на 3 месяца — самый разумный выбор по соотношению цены и ценности. Достаточный срок для получателя, приемлемая цена для дарителя.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Как подарить Telegram Premium на 3 месяца: пошаговая инструкция
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              <strong className="text-foreground">Кратко:</strong> Откройте @PremiumSendBot &rarr; выберите 3 месяца &rarr; введите username получателя &rarr; оплатите. 5 минут.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Как отправить Telegram Premium gift? Процесс очень простой и занимает не больше 5 минут. Технические знания не нужны — можно сделать со смартфона или компьютера.
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  step: "1",
                  title: "Откройте @PremiumSendBot в Telegram",
                  desc: "В поиске Telegram введите @PremiumSendBot и откройте бот. Или перейдите напрямую по ссылке t.me/premiumsendbot.",
                },
                {
                  step: "2",
                  title: "Нажмите /start",
                  desc: "Отправьте команду /start для запуска бота. Бот покажет список доступных пакетов.",
                },
                {
                  step: "3",
                  title: 'Выберите пакет «3 месяца Premium»',
                  desc: "В меню выберите 3-месячный Telegram Premium. Цена — 175 000 сум.",
                },
                {
                  step: "4",
                  title: "Введите username получателя",
                  desc: "Бот попросит Telegram username. Введите username того, кому хотите подарить (например: @username). Не свой — а именно получателя.",
                },
                {
                  step: "5",
                  title: "Оплатите",
                  desc: "Оплатите картой Uzcard или Humo. Также можно сделать перевод через Click или Payme на карту бота — бот автоматически определит сумму.",
                },
                {
                  step: "6",
                  title: "Gift активирован — друг обрадовался!",
                  desc: "После подтверждения оплаты Premium автоматически активируется на аккаунте получателя. Когда он откроет Telegram — увидит Premium badge и все возможности. Радость от неожиданного подарка — бесценна.",
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

            <p className="text-muted leading-relaxed mb-4">
              Самое важное — на шаге 4 убедитесь, что ввели правильный username. После активации Premium перенести на другой аккаунт невозможно. Если сомневаетесь — попросите получателя прислать свой username.
            </p>
            <p className="text-muted leading-relaxed">
              Весь процесс выполняется с телефона или компьютера. Не нужно идти в магазин, покупать пластиковую карту или проходить сложную регистрацию. Подарить Telegram Premium другому человеку — именно настолько просто.
            </p>

            {/* CTA */}
            <div className="bg-white rounded-2xl p-6 border-2 border-primary/20 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <div>
                <p className="font-bold text-foreground text-lg">3-месячный Premium gift — 175 000 сум</p>
                <p className="text-sm text-muted">Подарите другу прямо сейчас</p>
              </div>
              <div className="flex gap-3">
                <Link href="/ru/3-oylik" className="px-5 py-2.5 rounded-xl bg-primary-light text-primary font-semibold text-sm hover:bg-primary hover:text-white transition-all">
                  Подробнее
                </Link>
                <Link href="https://t.me/premiumsendbot" target="_blank" className="px-5 py-2.5 rounded-xl hero-gradient text-white font-semibold text-sm shadow-lg shadow-primary/25">
                  Отправить gift
                </Link>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Работает ли официальный gift Telegram в Узбекистане?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Кратко:</strong> Официальный gift Telegram в Узбекистане не работает — нужна иностранная карта, 3-месячного варианта нет. Через @PremiumSendBot всё доступно.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              В приложении Telegram есть кнопка &laquo;Gift Premium&raquo; — эта функция существует с 2022 года. Но для пользователей Узбекистана воспользоваться ей практически невозможно. В таблице ниже — наглядное сравнение:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Параметр</div>
                <div className="text-center">Telegram официальный</div>
                <div className="text-center text-primary">@PremiumSendBot</div>
              </div>
              {[
                { feature: "3-месячный gift", official: "Нет", bot: "Есть" },
                { feature: "Uzcard / Humo", official: "Нет", bot: "Есть" },
                { feature: "Click / Payme", official: "Нет", bot: "Есть" },
                { feature: "Оплата в сумах", official: "Нет ($ / €)", bot: "Да — 175 000 сум" },
                { feature: "Иностранная карта", official: "Да — обязательно", bot: "Не нужна" },
                { feature: "Поддержка на узбекском", official: "Нет", bot: "Да" },
                { feature: "Время активации", official: "Мгновенно", bot: "Несколько минут" },
              ].map((row, i) => (
                <div key={i} className={`grid grid-cols-3 p-4 items-center text-sm ${i < 6 ? "border-b border-card-border" : ""}`}>
                  <div className="font-medium text-foreground">{row.feature}</div>
                  <div className="text-center text-muted">{row.official}</div>
                  <div className="text-center text-primary font-medium">{row.bot}</div>
                </div>
              ))}
            </div>

            <p className="text-muted leading-relaxed mb-4">
              Как видите, официальная gift-функция Telegram в условиях Узбекистана фактически не работает. Основных препятствий три:
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-section-alt rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-2">
                  Требуется иностранная карта
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Официальная gift-функция Telegram требует Visa International, Mastercard или Apple Pay/Google Pay. Карты Uzcard и Humo этими платёжными системами не поддерживаются. То есть пользователь из Узбекистана официальным путём gift отправить не может — карта не принимается. В Узбекистане миллионы пользователей Telegram, но у большинства нет иностранной карты.
                </p>
              </div>
              <div className="bg-section-alt rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-2">
                  Нет 3-месячного gift-варианта
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  В официальной gift-функции Telegram доступны только 1-месячный и 12-месячный варианты. 3-месячного и 6-месячного gift нет. Если хотите подарить другу на 3 месяца, придётся отправлять gift каждый месяц отдельно — это и неудобно, и дороже.
                </p>
              </div>
              <div className="bg-section-alt rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-2">
                  Проблема валюты и курса
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Платежи в Telegram проводятся в долларах или евро. Даже если у вас есть иностранная карта, конвертация из сумов добавляет комиссию — реальная сумма может оказаться выше ожидаемой. В @PremiumSendBot цена фиксированная: 175 000 сум, никаких дополнительных расходов.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Именно этот пробел заполняет <strong className="text-foreground">@PremiumSendBot</strong>: оплата в сумах, местные карты и возможность отправить 3-месячный gift — всё в одном месте.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              В каких случаях подарить Telegram Premium на 3 месяца — отличная идея?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Кратко:</strong> День рождения, благодарность коллеге, подарок родным, поддержка блогера, приз в конкурсе — для всех случаев идеально.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Telegram Premium gift — универсальный подарок, но в некоторых ситуациях он особенно уместен и впечатляющ. Вот реальные сценарии — возможно, вы узнаете себя в одном из них.
            </p>

            <div className="space-y-6 mb-6">
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  Подарок на день рождения или праздник
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  У друга Анвара скоро день рождения у его друга Жасура. Цветы — банально, гаджет — дорого, сувенир — завтра окажется на полке. Анвар отправил через @PremiumSendBot 3-месячный Premium gift. Жасур на следующий день открыл Telegram — нет рекламы, специальные эмодзи, Premium badge. 3 месяца каждый день при открытии Telegram он чувствовал подарок друга. Особенно впечатляющий подарок для молодёжи 15–35 лет.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  Благодарность коллеге или партнёру
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Работали вместе над проектом, коллега помог перед дедлайном, бизнес-партнёр поддержал. Простое &laquo;спасибо&raquo; кажется недостаточным. 3-месячный Telegram Premium — недорого (175 000 сум), но внимательно. Коллега каждый день при открытии Telegram чувствует вашу благодарность. В профессиональной среде это очень приятный жест.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  Для семьи — ребёнку, брату, сестре, родителям
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Ваш ребёнок или младший брат активен в Telegram, но не может оплатить Premium. Родители пользуются Telegram, но реклама при чтении каналов раздражает. 3-месячный gift — простой и действенный способ проявить заботу. &laquo;Мама не может нормально читать каналы из-за рекламы&raquo; — эту проблему вы решите за 175 000 сум.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  Поддержка блогера или создателя контента
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Отличный способ поддержать автора любимого Telegram-канала или блогера. Premium badge даёт им авторитет перед подписчиками, а возможность загружать большие файлы повышает качество работы. Это не просто деньги — это показать, что вы цените их труд. Если блогер опубликует об этом — ваше имя тоже прозвучит.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  Приз в конкурсе или розыгрыше
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Проводите конкурс в Telegram-группе или канале? 3-месячный Premium gift — привлекательный и практичный приз для победителей. В отличие от денежного приза, Premium gift отправляется без юридических и технических проблем. Знаете username — за 2 минуты отправите награду.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              В любой ситуации подарить Telegram Premium на 3 месяца — это современный способ показать, что вы думаете о человеке. Просто, быстро и запоминается.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              5 вещей, которые нужно знать перед отправкой gift
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Кратко:</strong> Проверьте правильность username, gift не возвращается, если Premium уже есть — срок прибавляется.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Отправка Telegram Premium gift — простой процесс, но на некоторые вещи стоит обратить внимание заранее. Это убережёт вас от ошибок и сделает опыт подарка приятнее.
            </p>

            <ul className="space-y-3 mb-6">
              {[
                {
                  title: "Проверьте правильность username",
                  desc: "Перед отправкой gift дважды проверьте username получателя. Пишите с символом @. Если ввести неправильный username, Premium активируется на чужом аккаунте и вернуть его нельзя.",
                },
                {
                  title: "У получателя должен быть установлен username в Telegram",
                  desc: "Некоторые люди не устанавливают username в Telegram. В таком случае отправить gift невозможно. Попросите получателя сначала установить username — это дело 30 секунд.",
                },
                {
                  title: "Если уже есть Premium — срок прибавляется",
                  desc: "Если у получателя Premium уже активен, новый gift добавляет срок к существующей подписке. То есть 3 месяца прибавятся — ничего не пропадёт.",
                },
                {
                  title: "Gift не возвращается",
                  desc: "После активации Premium gift отменить или вернуть деньги невозможно. Поэтому перед покупкой проверьте всё внимательно.",
                },
                {
                  title: "Напишите получателю",
                  desc: "Gift активируется автоматически, но получатель может не понять, что произошло. Напишите ему «Открой Telegram, там тебе подарок» — это сделает опыт ещё приятнее.",
                },
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
                  <div>
                    <span className="font-bold text-foreground">{item.title}</span>
                    <p className="text-sm text-muted mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="text-muted leading-relaxed">
              Следуя этим простым правилам, процесс подарка 3-месячного Telegram Premium пройдёт без проблем — и для вас, и для получателя.
            </p>

            {/* CTA 2 */}
            <div className="bg-white rounded-2xl p-6 border-2 border-primary/20 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <div>
                <p className="font-bold text-foreground text-lg">Подарите другу Premium</p>
                <p className="text-sm text-muted">3-месячный gift — 175 000 сум, через Uzcard/Humo</p>
              </div>
              <Link href="https://t.me/premiumsendbot" target="_blank" className="px-6 py-3 rounded-xl hero-gradient text-white font-semibold text-sm shadow-lg shadow-primary/25 whitespace-nowrap">
                Отправить gift
              </Link>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Что почувствует получатель подарка?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Кратко:</strong> 3 месяца без рекламы, быстрее, удобнее — и каждый день напоминание о вашем подарке.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Список технических возможностей есть много где. Мы расскажем иначе — что получатель <em>чувствует каждый день?</em>
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Утром, открывая Telegram</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Первое, что замечает — реклама в каналах исчезла. Новости, статьи, курсы читаются спокойно. Кажется мелочью, но через неделю человек уже не хочет возвращаться к Telegram без Premium.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Когда приходит голосовое сообщение</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Друг прислал 2-минутное голосовое. Раньше нужно было слушать — если рядом люди, нужны наушники. Теперь одно нажатие — и читает в текстовом виде. Voice-to-text — большинство называет &laquo;самой приятной функцией Premium&raquo;.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Когда нужно отправить большой файл</h3>
                <p className="text-sm text-muted leading-relaxed">
                  На работе нужно отправить видео или архив на 3 ГБ. Обычный Telegram — лимит 2 ГБ. Premium — до 4 ГБ. Больше не нужно разбивать файл на части или искать другое приложение.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Когда пишет иностранный друг</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Пришло сообщение на английском или турецком. Одно нажатие — перевод на узбекский или русский готов. Не нужно открывать Google Translate, копировать-вставлять. Real-time перевод экономит время.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Когда смотрят на профиль</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Premium badge и цвет имени — мелочь, но другие это видят. В групповом чате вместо &laquo;кто это?&raquo; — звёздочка Premium отвечает за вас. Психологически это вызывает доверие.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Эти возможности в течение 90 дней кардинально улучшают ежедневный Telegram-опыт получателя. Самое главное — человек каждый день чувствует ваш подарок. Цветы вянут за 3 дня. Premium работает 3 месяца.
            </p>
          </section>

          {/* Social Proof */}
          <section>
            <div className="bg-section-alt rounded-2xl p-6 md:p-8">
              <h3 className="font-bold text-foreground text-lg mb-4 text-center">Что говорят пользователи?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                  <p className="text-sm text-muted leading-relaxed mb-3">
                    &laquo;Отправил gift другу на день рождения — он был в восторге. Теперь сам хочет купить семье.&raquo;
                  </p>
                  <p className="text-xs font-semibold text-foreground">— Азизбек, Ташкент</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                  <p className="text-sm text-muted leading-relaxed mb-3">
                    &laquo;Подарила маме. Теперь читает каналы без рекламы — очень довольна.&raquo;
                  </p>
                  <p className="text-xs font-semibold text-foreground">— Нилуфар, Самарканд</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                  <p className="text-sm text-muted leading-relaxed mb-3">
                    &laquo;Провёл розыгрыш в канале, отправил победителю 3-месячный Premium. Заняло 2 минуты.&raquo;
                  </p>
                  <p className="text-xs font-semibold text-foreground">— Жамшид, Фергана</p>
                </div>
              </div>
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
                  q: "Можно ли подарить Telegram Premium на 3 месяца?",
                  a: "Да. Через @PremiumSendBot введите Telegram username получателя и оплатите. Premium активируется автоматически, согласие получателя не требуется.",
                },
                {
                  q: "Как отправить Telegram Premium gift?",
                  a: "Откройте @PremiumSendBot, выберите 3-месячный пакет, введите username получателя и оплатите через Uzcard или Humo. Premium активируется за несколько минут.",
                },
                {
                  q: "Нужно ли согласие получателя?",
                  a: "Нет. Telegram Premium gift активируется автоматически. Предварительное согласие получателя не требуется.",
                },
                {
                  q: "Сколько стоит 3-месячный Telegram Premium gift?",
                  a: "В Premium Send 3-месячный Telegram Premium gift стоит 175 000 сум. Оплата картой Uzcard или Humo в узбекских сумах.",
                },
                {
                  q: "Можно ли отправить 3-месячный gift через официальный Telegram?",
                  a: "Нет. В официальной gift-функции Telegram доступны только 1-месячный и 12-месячный варианты. 3-месячный gift можно отправить только через сервисы вроде @PremiumSendBot.",
                },
                {
                  q: "Что будет, если у получателя уже есть Premium?",
                  a: "Срок gift добавляется к существующей подписке. 3 месяца прибавятся — ничего не пропадёт.",
                },
                {
                  q: "Можно ли ввести номер телефона вместо username?",
                  a: "Нет. Для отправки gift нужен только Telegram username. Отправить по номеру телефона нельзя. Попросите получателя установить username.",
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

          {/* Cross-sell */}
          <section>
            <div className="bg-section-alt rounded-2xl p-6 md:p-8">
              <h3 className="font-bold text-foreground text-lg mb-2 text-center">Другие варианты</h3>
              <p className="text-sm text-muted text-center mb-6">Выберите другой срок для подарка или купите Premium для себя</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Link href="/ru/maqolalar/1-oylik-telegram-premium-sotib-olish" className="bg-white rounded-xl p-5 border border-card-border shadow-sm text-center hover:border-primary transition-all block">
                  <p className="font-bold text-foreground mb-1">1 месяц Premium</p>
                  <p className="text-xs text-muted">59 000 сум — попробовать</p>
                </Link>
                <Link href="/ru/maqolalar/6-oylik-telegram-premium-sotib-olish" className="bg-white rounded-xl p-5 border border-card-border shadow-sm text-center hover:border-primary transition-all block">
                  <p className="font-bold text-foreground mb-1">6 месяцев Premium</p>
                  <p className="text-xs text-muted">235 000 сум — самый выгодный</p>
                </Link>
                <Link href="/ru/maqolalar/12-oylik-telegram-premium-sotib-olish" className="bg-white rounded-xl p-5 border border-card-border shadow-sm text-center hover:border-primary transition-all block">
                  <p className="font-bold text-foreground mb-1">12 месяцев Premium</p>
                  <p className="text-xs text-muted">425 000 сум — самый дешёвый в месяц</p>
                </Link>
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
                <p className="text-white/90 text-lg leading-relaxed mb-2">
                  Цветы вянут за 3 дня. Шоколад съедается за 3 дня.
                </p>
                <p className="text-white text-xl font-bold leading-relaxed mb-6">
                  Telegram Premium работает 3 месяца и напоминает каждый день.
                </p>
                <p className="text-white/80 leading-relaxed mb-8">
                  Через <strong className="text-white">@PremiumSendBot</strong> за 175 000 сум, картой Uzcard или Humo, за несколько минут отправьте gift. Иностранная карта не нужна. Сложных процессов нет.
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
                  Отправить gift прямо сейчас
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
