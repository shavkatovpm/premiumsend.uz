import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Telegram Premium через Click — перевод на карту, пошаговое руководство",
  description:
    "Telegram Premium через приложение Click — от 59 000 до 425 000 сум. @PremiumSendBot показывает карту и точную сумму, вы переводите через Click, Premium активируется за 5 минут.",
  keywords: [
    "Telegram Premium Click",
    "Telegram Premium через Click",
    "купить Telegram Premium Click",
    "Premium с Click",
    "Telegram Premium в сумах Click",
    "PremiumSendBot Click",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/ru/maqolalar/telegram-premium-click-orqali",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/telegram-premium-click-orqali",
      ru: "https://premiumsend.uz/ru/maqolalar/telegram-premium-click-orqali",
      "x-default": "https://premiumsend.uz/maqolalar/telegram-premium-click-orqali",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title: "Telegram Premium через Click — пошаговое руководство",
    description:
      "Бот показывает карту и точную сумму, вы переводите через Click, Premium через 5 минут на аккаунте. 4 тарифа, в сумах, без комиссии.",
    url: "https://premiumsend.uz/ru/maqolalar/telegram-premium-click-orqali",
    type: "article",
    publishedTime: "2026-05-05",
  },
};

export default function ArticleClickOrqaliRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    image: "https://premiumsend.uz/og-image.png",
    headline:
      "Telegram Premium через Click — пошаговое руководство по покупке",
    description:
      "Покупка Telegram Premium через приложение Click в Узбекистане — бот показывает карту и сумму, вы переводите, система автоматически определяет.",
    datePublished: "2026-05-05",
    dateModified: "2026-05-03",
    author: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    publisher: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    mainEntityOfPage:
      "https://premiumsend.uz/ru/maqolalar/telegram-premium-click-orqali",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Можно ли купить Telegram Premium через Click?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. После выбора тарифа в @PremiumSendBot бот показывает номер карты и точную сумму. Вы через приложение Click переводите указанную сумму на эту карту. Система автоматически определяет платёж и активирует Premium за 5 минут. Все тарифы (1, 3, 6, 12 месяцев) поддерживаются.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько стоит Telegram Premium через Click?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Цены такие же, как через другие способы оплаты: 1 месяц — 59 000 сум, 3 месяца — 175 000 сум, 6 месяцев — 235 000 сум, 12 месяцев — 425 000 сум. Способ оплаты (Click, Payme, Uzcard, Humo, приложение банка) на цену не влияет. Click не берёт дополнительной комиссии.",
        },
      },
      {
        "@type": "Question",
        name: "Как работает оплата через Click?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Механизм простой: на основе тарифа и username бот выдаёт вам номер карты + точную сумму. Вы открываете Click, выбираете 'Перевод на другую карту', указываете сумму на ту карту. После подтверждения Click система за 1-5 минут определяет платёж (по сумме и карте) и Premium автоматически активируется на @username.",
        },
      },
      {
        "@type": "Question",
        name: "Почему важно перевести именно указанную сумму?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Система определяет платёж по комбинации суммы и карты. Если переведёте другую сумму, система не сможет автоматически сопоставить, и Premium активируется вручную после обращения в поддержку. Перевод именно указанной суммы — самый быстрый путь.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли купить Premium без приложения Click?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Click — это просто инструмент для перевода на карту. Из любого другого приложения (Payme, Uzcard, Humo, приложение банка) если переведёте указанную сумму на карту бота, результат тот же — система определит и Premium активируется.",
        },
      },
      {
        "@type": "Question",
        name: "Безопасно ли платить через Click?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Click — официальная платёжная система, лицензированная Центральным банком. Данные карты сохраняются только на сервере Click, бот их не видит. На каждый P2P-перевод выдаётся PDF-чек. Если Premium не пришёл, оплата возвращается полностью.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли оплатить через Click в официальном приложении Telegram?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет. Официальное приложение Telegram принимает только Visa, Mastercard, Google Pay и Apple Pay. Click в эту систему не подключён. Чтобы заплатить через Click, нужен местный посреднический сервис (например, @PremiumSendBot) — вы переводите через Click на карту, система отправляет Premium в Telegram через gift-механизм.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: "https://premiumsend.uz/ru" },
      { "@type": "ListItem", position: 2, name: "Статьи", item: "https://premiumsend.uz/ru/maqolalar" },
      { "@type": "ListItem", position: 3, name: "Telegram Premium через Click", item: "https://premiumsend.uz/ru/maqolalar/telegram-premium-click-orqali" },
    ],
  };

  const howToSchema = {"@context":"https://schema.org","@type":"HowTo","name":"Telegram Premium через Click — пошаговое руководство по покупке","description":"Пошаговое руководство: Telegram Premium через Click — пошаговое руководство по покупке","step":[{"@type":"HowToStep","position":1,"name":"Найдите @PremiumSendBot в Telegram","text":"Введите @PremiumSendBot в поиске Telegram. Откроется официальный бот. Нажмите /start."},{"@type":"HowToStep","position":2,"name":"Выберите тариф","text":"Бот покажет 4 тарифа: 1, 3, 6 и 12 месяцев. Для пробы достаточно 1 месяца, для постоянного использования 12 месяцев — самый выгодный."},{"@type":"HowToStep","position":3,"name":"Введите username получателя Premium","text":"Через @ напишите Telegram username. Это ваш аккаунт или того, кому делается подарок. Проверьте дважды."},{"@type":"HowToStep","position":4,"name":"Бот покажет номер карты и сумму","text":"На экране появятся номер карты и точная сумма платежа. Бот может добавить контрольный код в комментарии."},{"@type":"HowToStep","position":5,"name":"Откройте Click и начните P2P-перевод","text":"Войдите в приложение Click. Выберите «Перевод на другую карту». Введите номер карты, указанный ботом."},{"@type":"HowToStep","position":6,"name":"Введите именно указанную сумму и подтвердите","text":"Сумму вводите точно в указанном размере. Даже 100 сум разницы помешает автоматическому определению. Подтвердите PIN или Face ID."},{"@type":"HowToStep","position":7,"name":"Premium активируется за 5 минут","text":"После подтверждения Click система за 1-5 минут определит сумму, и Premium активируется на указанном аккаунте."}]};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-muted">
        <Link href="/ru" className="hover:text-primary">Главная</Link>
        <span className="mx-2">/</span>
        <Link href="/ru/maqolalar" className="hover:text-primary">Статьи</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">Telegram Premium через Click</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">Руководство</span>
            <time className="text-xs text-muted" dateTime="2026-05-05">5 мая 2026</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Telegram Premium через Click — пошаговое руководство
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>Краткий ответ:</strong> процесс покупки Telegram Premium через Click — в{" "}
              <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>{" "}
              выбираете тариф, бот показывает <strong>номер карты и точную сумму</strong>, вы через приложение Click переводите эту сумму на эту карту. Система автоматически определяет платёж и активирует Premium за 5 минут. Цены: <strong>1 месяц — 59 000 сум</strong>, <strong>3 месяца — 175 000</strong>, <strong>6 месяцев — 235 000</strong>, <strong>12 месяцев — 425 000 сум</strong>. Комиссия 0%.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Click — одно из самых распространённых мобильных платёжных приложений в Узбекистане. Через приложение с привязанной картой коммунальные платежи, мобильная связь, переводы на другие карты выполняются в одно-два касания. При покупке Telegram Premium через Click используется именно функция «перевод на карту».
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Это pillar-руководство раскрывает весь процесс покупки Telegram Premium через Click: механизм между ботом и Click, какие тарифы доступны, пошаговая инструкция, безопасность и часто задаваемые вопросы.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 — Mechanism */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Как работают бот и Click — механизм оплаты</h2>
            <p className="text-muted leading-relaxed mb-4">
              Понимание механизма проясняет всё остальное. Схема простая и прозрачная:
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">1. Бот показывает карту и сумму</h3>
                <p className="text-sm text-muted leading-relaxed">
                  После выбора тарифа в @PremiumSendBot и ввода username аккаунта-получателя Premium, бот выводит на экран <strong>номер карты</strong> и <strong>точную сумму платежа</strong>. Например: 175 000 сум и карта 8600 0000 0000 0000.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">2. Через Click переводите на карту</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Откройте Click, выберите функцию «Перевод на другую карту» (или «P2P-перевод»). Введите номер карты, указанный ботом, и <strong>именно ту сумму</strong>. Click запросит подтверждение PIN или Face ID — как при обычном P2P-переводе.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">3. Система автоматически определяет платёж</h3>
                <p className="text-sm text-muted leading-relaxed">
                  После подтверждения Click система за 1-5 минут определяет поступившую сумму. От вас не требуется никаких дополнительных действий.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">4. Premium активируется на аккаунте</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Система отправляет Premium на указанный @username через официальный gift-механизм Telegram. Бот пришлёт сообщение, в профиле появится значок Premium.
                </p>
              </div>
            </div>

            <div className="bg-section-alt rounded-xl p-5">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Главный факт:</strong> Click — это инструмент для перевода денег на карту. Бот получает оплату через <strong>автоматическое определение поступления на карту</strong>. Поэтому в самом приложении Click нет кнопки «PremiumSend» — вы используете обычный P2P-перевод.
              </p>
            </div>
          </section>

          {/* Section 2 — Pricing */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Telegram Premium через Click — цены тарифов</h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Цены:</strong> 1 месяц — <strong>59 000 сум</strong>, 3 месяца — <strong>175 000 сум</strong>, 6 месяцев — <strong>235 000 сум</strong>, 12 месяцев — <strong>425 000 сум</strong>. Сумма, указанная ботом — точно эта, никаких дополнительных комиссий.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Тариф</div>
                <div className="text-center">Общая цена</div>
                <div className="text-center">В месяц</div>
                <div className="text-center">Экономия</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">1 месяц</div>
                <div className="text-center">59 000 сум</div>
                <div className="text-center">59 000 сум</div>
                <div className="text-center text-muted">—</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">3 месяца</div>
                <div className="text-center">175 000 сум</div>
                <div className="text-center">58 333 сум</div>
                <div className="text-center text-green-600 font-bold">1%</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">6 месяцев</div>
                <div className="text-center">235 000 сум</div>
                <div className="text-center">39 167 сум</div>
                <div className="text-center text-green-600 font-bold">33%</div>
              </div>
              <div className="grid grid-cols-4 p-4 items-center text-sm bg-primary-light/20">
                <div className="font-bold text-primary">12 месяцев ⭐</div>
                <div className="text-center font-bold text-primary">425 000 сум</div>
                <div className="text-center font-bold text-primary">35 417 сум</div>
                <div className="text-center text-green-600 font-bold">39%</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Важно ввести в Click именно сумму, указанную ботом — система определяет платёж по комбинации суммы и карты. Подробнее:{" "}
              <Link href="/ru/maqolalar/telegram-premium-narxlari" className="text-primary font-semibold hover:underline">сравнение тарифов</Link>.
            </p>
          </section>

          {/* Section 3 — Step by step */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Как купить Telegram Premium через Click — пошагово</h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Краткий ответ:</strong>{" "}
                <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>{" "}
                → выберите тариф → введите username → бот выдаст номер карты и сумму → через Click переведите эту сумму на карту → Premium активируется за 5 минут.
              </p>
            </div>

            <div className="space-y-4 mb-6">
              {[
                { step: "1", title: "Найдите @PremiumSendBot в Telegram", desc: "Введите @PremiumSendBot в поиске Telegram. Откроется официальный бот. Нажмите /start." },
                { step: "2", title: "Выберите тариф", desc: "Бот покажет 4 тарифа: 1, 3, 6 и 12 месяцев. Для пробы достаточно 1 месяца, для постоянного использования 12 месяцев — самый выгодный." },
                { step: "3", title: "Введите username получателя Premium", desc: "Через @ напишите Telegram username. Это ваш аккаунт или того, кому делается подарок. Проверьте дважды." },
                { step: "4", title: "Бот покажет номер карты и сумму", desc: "На экране появятся номер карты и точная сумма платежа. Бот может добавить контрольный код в комментарии." },
                { step: "5", title: "Откройте Click и начните P2P-перевод", desc: "Войдите в приложение Click. Выберите «Перевод на другую карту». Введите номер карты, указанный ботом." },
                { step: "6", title: "Введите именно указанную сумму и подтвердите", desc: "Сумму вводите точно в указанном размере. Даже 100 сум разницы помешает автоматическому определению. Подтвердите PIN или Face ID." },
                { step: "7", title: "Premium активируется за 5 минут", desc: "После подтверждения Click система за 1-5 минут определит сумму, и Premium активируется на указанном аккаунте." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{item.step}</div>
                  <div>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Mid CTA */}
          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Приложение Click готово?{" "}
                <strong className="text-white">@PremiumSendBot</strong> — выберите тариф, получите карту и сумму, переведите через Click. Premium через 5 минут.
              </p>
              <Link href="https://t.me/premiumsendbot" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                @PremiumSendBot — начать
              </Link>
            </div>
          </section>

          {/* Section 4 — Why exact amount */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Почему важно перевести именно указанную сумму?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Вопрос «как бот находит ваш платёж» обоснован. Механизм построен так:
            </p>
            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li>Бот для каждого заказа генерирует <strong>точную сумму</strong></li>
              <li>Система постоянно отслеживает поступления на карту</li>
              <li>Когда платёж приходит ровно с этой суммой — система сопоставляет с заказом</li>
              <li>Premium автоматически активируется на @username</li>
            </ul>
            <p className="text-muted leading-relaxed">
              Если переведёте другую сумму, обращаетесь в поддержку бота с номером чека Click — Premium активируется вручную (15-30 минут). Но <strong>именно указанная сумма</strong> — самый быстрый путь.
            </p>
          </section>

          {/* Section 5 — Click vs other apps */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Click и другие приложения — какое удобнее?</h2>
            <p className="text-muted leading-relaxed mb-6">
              Перевод на карту, указанную ботом, можно выполнить через <strong>любое приложение</strong>. Результат одинаковый:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Приложение</div>
                <div className="text-center">Время</div>
                <div className="text-center">Ввод карты</div>
                <div className="text-center">Подтверждение</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm bg-primary-light/20">
                <div className="font-bold text-primary">Click</div>
                <div className="text-center text-green-600 font-bold">1-2 мин</div>
                <div className="text-center text-green-600">Нет*</div>
                <div className="text-center">PIN/Face ID</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Payme</div>
                <div className="text-center text-green-600">1-2 мин</div>
                <div className="text-center text-green-600">Нет*</div>
                <div className="text-center">PIN/Face ID</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Приложение Uzcard / SMS-банк</div>
                <div className="text-center">2-3 мин</div>
                <div className="text-center">Да</div>
                <div className="text-center">SMS-код</div>
              </div>
              <div className="grid grid-cols-4 p-4 items-center text-sm">
                <div className="font-medium">Приложение банка (общее)</div>
                <div className="text-center">2-3 мин</div>
                <div className="text-center">Да</div>
                <div className="text-center">SMS-код</div>
              </div>
            </div>

            <p className="text-muted text-xs italic mb-4">
              * В Click и Payme ваша карта уже сохранена. Но <strong>номер карты получателя</strong> в любом случае придётся ввести.
            </p>

            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">Вывод:</strong> Click и Payme — самые быстрые варианты. У большинства пользователей в Узбекистане установлены оба. Что у вас удобнее, то и выбирайте —{" "}
              <Link href="/ru/maqolalar/telegram-premium-payme-orqali" className="text-primary font-semibold hover:underline">pillar-руководство Payme</Link>.
            </p>
          </section>

          {/* Section 6 — Safety */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Безопасно ли платить через Click?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Click — официальная платёжная система, лицензированная Центральным банком. Миллионы пользователей применяют её ежедневно. Для Telegram Premium механизм точно такой же — отдельных рисков нет.
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">🔐 Данные карты на сервере Click</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Номер карты, пароль и CVV сохраняются только на сервере Click. Бот эти данные никогда не видит.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">💰 Гарантия возврата</h3>
                <p className="text-sm text-muted leading-relaxed">
                  При технической ошибке оплата возвращается полностью. По номеру чека Click возврат происходит быстро.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">📋 PDF-чек Click — юридический документ</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Click выдаёт PDF-чек на каждый перевод. При проблеме поддержка по номеру чека сразу находит платёж.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Покупка Premium через Click — настолько же безопасна, как обычный P2P-перевод. О выборе надёжного реселлера —{" "}
              <Link href="/ru/maqolalar/telegram-premium-xavfsiz-aldovdan-saqlanish" className="text-primary font-semibold hover:underline">руководство по безопасности</Link>.
            </p>
          </section>

          {/* Section 7 — Common issues */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Проблемы при оплате через Click</h2>
            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Переведена не та сумма</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Самая частая причина. <strong>Решение:</strong> отправьте в поддержку бота номер чека Click и точную сумму. За 15-30 минут проводится ручная проверка.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Не хватает баланса в Click</h3>
                <p className="text-sm text-muted leading-relaxed">
                  <strong>Решение:</strong> проверьте карту в Click, пополните баланс или выберите другую карту.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Деньги списались, Premium не пришёл</h3>
                <p className="text-sm text-muted leading-relaxed">
                  <strong>Решение:</strong> подождите 10-15 минут. Если не активировалось — отправьте номер чека Click в поддержку бота.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Нет приложения Click</h3>
                <p className="text-sm text-muted leading-relaxed">
                  <strong>Решение:</strong> скачайте Click из Play Market или App Store. Или переведите на указанную карту через Payme, приложение Uzcard или приложение банка.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Часто задаваемые вопросы</h2>
            <div className="space-y-4">
              {[
                { q: "Можно ли купить Telegram Premium через Click?", a: "Да. Бот показывает карту и сумму, вы через Click переводите указанную сумму на эту карту. Система автоматически определяет и Premium активируется за 5 минут." },
                { q: "Сколько стоит Telegram Premium через Click?", a: "1 месяц — 59 000 сум, 3 месяца — 175 000 сум, 6 месяцев — 235 000 сум, 12 месяцев — 425 000 сум. Click не берёт дополнительной комиссии." },
                { q: "Как система определяет платёж?", a: "Бот для каждого заказа генерирует точную сумму. Система отслеживает поступления на карту и по комбинации суммы и карты находит ваш заказ." },
                { q: "Что делать, если нет приложения Click?", a: "Скачайте Click из Play Market или App Store. Или переведите на указанную карту через Payme, приложение Uzcard или приложение банка — результат тот же." },
                { q: "Безопасно ли платить через Click?", a: "Да. Click — лицензирован Центральным банком. Данные карты только на сервере Click, бот их не видит. Если Premium не пришёл — деньги возвращаются." },
                { q: "Можно ли оплатить через Click в официальном приложении Telegram?", a: "Нет. Telegram принимает только Visa, Mastercard, Google Pay и Apple Pay. Click там нет." },
                { q: "Можно ли подарить Premium через Click?", a: "Да. 3, 6 и 12-месячный Premium можно подарить: бот спрашивает username получателя, вы переводите через Click на карту, Premium активируется на этом аккаунте." },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                  <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Trust Block */}
          <section>
            <div className="bg-section-alt rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-bold text-foreground mb-4 text-center">Premium через Click — в цифрах</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">1-2 мин</p>
                  <p className="text-sm text-muted">время перевода</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">5 мин</p>
                  <p className="text-sm text-muted">активация Premium</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">0%</p>
                  <p className="text-sm text-muted">дополнительная комиссия</p>
                </div>
              </div>
            </div>
          </section>

          {/* Related */}
          <section>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-card-border">
              <h3 className="text-lg font-bold text-foreground mb-4">Руководства по тарифам через Click</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/ru/maqolalar/3-oylik-telegram-premium-click-orqali" className="text-primary font-semibold hover:underline">3 месяца Premium через Click (175 000 сум)</Link></li>
                <li><Link href="/ru/maqolalar/telegram-premium-payme-orqali" className="text-primary font-semibold hover:underline">Premium через Payme (для сравнения)</Link></li>
                <li><Link href="/ru/maqolalar/telegram-premium-humo-orqali" className="text-primary font-semibold hover:underline">Premium через карту Humo</Link></li>
                <li><Link href="/ru/maqolalar/telegram-premium-narxlari" className="text-primary font-semibold hover:underline">Сравнение цен Telegram Premium</Link></li>
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
                  Приложение Click готово? Купите Telegram Premium через перевод на местную карту. В сумах, на указанную ботом карту, активация за 5 минут.{" "}
                  <strong className="text-white">@PremiumSendBot</strong> — начать.
                </p>
                <Link href="https://t.me/premiumsendbot" target="_blank" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  Начать с Click
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
