import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Купить Telegram Stars через Uzcard — путь перевода на карту",
  description:
    "Купить Telegram Stars через Uzcard в сумах — @starsjoybot даёт номер карты и сумму, вы переводите P2P из приложения Uzcard. 50 Stars = 12 000 сум, без валютного риска.",
  keywords: [
    "telegram stars uzcard",
    "купить telegram stars uzcard",
    "telegram stars через uzcard",
    "telegram stars в сумах uzcard",
    "uzcard p2p telegram stars",
    "starsjoy uzcard",
    "телеграм старс узкард",
    "как купить stars с uzcard",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/ru/maqolalar/telegram-stars-uzcard-orqali",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/telegram-stars-uzcard-orqali",
      ru: "https://premiumsend.uz/ru/maqolalar/telegram-stars-uzcard-orqali",
      "x-default": "https://premiumsend.uz/maqolalar/telegram-stars-uzcard-orqali",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title: "Telegram Stars через Uzcard — путь перевода на карту",
    description:
      "Купить Stars через перевод из приложения Uzcard на карту бота. 50 Stars 12 000 сум, без курсовой конвертации, с местной картой.",
    url: "https://premiumsend.uz/ru/maqolalar/telegram-stars-uzcard-orqali",
    type: "article",
    publishedTime: "2026-05-12",
  },
};

export default function ArticleStarsUzcardRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    image: "https://premiumsend.uz/og-image.png",
    headline: "Купить Telegram Stars через Uzcard — путь перевода на карту",
    description:
      "Купить Telegram Stars через карту Uzcard — @starsjoybot показывает карту и сумму, вы из приложения Uzcard переводите P2P на эту карту, Stars приходят за несколько минут.",
    datePublished: "2026-05-12",
    dateModified: "2026-05-12",
    author: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    publisher: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    mainEntityOfPage:
      "https://premiumsend.uz/ru/maqolalar/telegram-stars-uzcard-orqali",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Как купить Telegram Stars через Uzcard?", acceptedAnswer: { "@type": "Answer", text: "Откройте @starsjoybot, выберите количество Stars (например 50, 100, 250, 1000), из путей оплаты выберите 'Перевод на карту'. Бот покажет номер карты и точную сумму. Откройте приложение банка Uzcard, через функцию 'Перевод на другую карту' переведите указанную ботом сумму на эту карту. Система распознаёт и Stars поступают на аккаунт за 1-5 минут." } },
      { "@type": "Question", name: "Есть ли отдельная кнопка Uzcard?", acceptedAnswer: { "@type": "Answer", text: "Нет. В боте StarsJoy нет отдельной кнопки 'Uzcard' — только два основных пути: Click (с PIN/Face ID, быстрее) и Перевод на карту (P2P, универсальный). При оплате через Uzcard вы используете второй путь — переводите через приложение Uzcard на карту бота. То есть Uzcard используется, но без специальной интеграции — обычный P2P." } },
      { "@type": "Question", name: "Сколько стоят Stars через Uzcard?", acceptedAnswer: { "@type": "Answer", text: "В StarsJoy.uz Stars по линейной цене 240 сум/star: 50 Stars 12 000 сум, 100 Stars 24 000, 250 Stars 60 000, 500 Stars 120 000, 1000 Stars 240 000, 2500 Stars 600 000, 5000 Stars 1 200 000 сум. Через Uzcard оплата по тем же ценам — дополнительной комиссии нет." } },
      { "@type": "Question", name: "Можно ли купить Stars через официальное приложение Telegram картой Uzcard?", acceptedAnswer: { "@type": "Answer", text: "Нет. Официальное приложение Telegram не принимает P2P переводы Uzcard или Click/Payme — только Visa/Mastercard или Apple/Google Pay. Для покупки Stars в сумах через Uzcard нужен местный посредник (StarsJoy.uz)." } },
      { "@type": "Question", name: "Что делать, если на балансе Uzcard недостаточно?", acceptedAnswer: { "@type": "Answer", text: "В приложении Uzcard проверьте баланс заранее. Если недостаточно — пополните карту или переведите с другой карты (Humo, банковская). Карта бота работает по комбинации суммы и карты — с какой карты вы перевели не важно, главное чтобы пришла точно указанная сумма." } },
      { "@type": "Question", name: "Uzcard или Click для покупки Stars — что быстрее?", acceptedAnswer: { "@type": "Answer", text: "Click быстрее (1-2 минуты, PIN/Face ID). Приложение Uzcard занимает 2-3 минуты и может потребовать SMS код подтверждения. Но время прихода Stars на аккаунт одинаковое — 1-5 минут. Если у вас нет приложения Click — Uzcard или любая другая карта тоже хорошо работают." } },
      { "@type": "Question", name: "Безопасен ли Uzcard P2P перевод?", acceptedAnswer: { "@type": "Answer", text: "Да. Uzcard P2P перевод — официальный механизм с лицензией Центробанка. Данные карты хранятся на сервере Uzcard, бот StarsJoy не видит — видит только факт 'на карту пришла сумма'. На каждый P2P перевод выдаётся чек, если Stars не пришли — деньги возвращаются." } },
      { "@type": "Question", name: "Можно ли купить Stars через App Store/Fragment с Uzcard?", acceptedAnswer: { "@type": "Answer", text: "App Store: частично поддерживает Uzcard (если Apple ID в регионе Узбекистан), но цена Stars выше — ~290 сум/star (в StarsJoy 240). Fragment: принимает только зарубежные карты или TON криптовалюту, Uzcard использовать нельзя. Для оплаты в сумах напрямую с Uzcard местный путь (StarsJoy + Uzcard P2P) — самый удобный способ." } },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: "https://premiumsend.uz/ru" },
      { "@type": "ListItem", position: 2, name: "Статьи", item: "https://premiumsend.uz/ru/maqolalar" },
      { "@type": "ListItem", position: 3, name: "Telegram Stars через Uzcard", item: "https://premiumsend.uz/ru/maqolalar/telegram-stars-uzcard-orqali" },
    ],
  };

  const howToSchema = {"@context":"https://schema.org","@type":"HowTo","name":"Купить Telegram Stars через Uzcard — путь перевода на карту","description":"Пошаговое руководство: Купить Telegram Stars через Uzcard — путь перевода на карту","step":[{"@type":"HowToStep","position":1,"name":"Откройте @starsjoybot в Telegram","text":"В строке поиска наберите @starsjoybot и откройте бот. Нажмите /start — бот выведет меню."},{"@type":"HowToStep","position":2,"name":"Выберите количество Stars","text":"Из меню нажмите нужный пакет: 50, 100, 250, 500, 1000, 2500, 5000 Stars. Или введите своё количество (минимум 50 Stars)."},{"@type":"HowToStep","position":3,"name":"В качестве пути оплаты выберите \"Перевод на карту\"","text":"Бот даёт два пути: Click (PIN/Face ID, быстрее) и Перевод на карту (P2P, универсальный). Для оплаты через Uzcard выберите второй путь."},{"@type":"HowToStep","position":4,"name":"Бот показывает номер карты и точную сумму","text":"На экране номер карты (8600 XXXX XXXX XXXX) и точная сумма (например 12 000 сум за 50 Stars). Нужно перевести именно эту сумму."},{"@type":"HowToStep","position":5,"name":"Откройте приложение Uzcard и начните P2P перевод","text":"Зайдите в приложение банка Uzcard. Выберите \"Перевод на другую карту\". Введите указанный ботом номер карты."},{"@type":"HowToStep","position":6,"name":"Введите сумму и подтвердите","text":"Введите ровно указанную ботом сумму (например 12 000). Подтвердите SMS кодом или PIN. Stars поступят на ваш аккаунт за 1-5 минут."}]};

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
        <span className="text-foreground font-medium">Telegram Stars через Uzcard</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">Руководство</span>
            <time className="text-xs text-muted" dateTime="2026-05-12">12 мая 2026 года</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Купить Telegram Stars через Uzcard
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>Краткий ответ:</strong> процесс покупки Telegram Stars через карту Uzcard —{" "}
              <a href="https://t.me/starsjoybot" target="_blank" rel="noopener" className="text-primary hover:underline">@starsjoybot</a>{" "}
              откройте, выберите количество Stars (например <strong>50 Stars = 12 000 сум</strong>), путь <strong>&quot;Перевод на карту&quot;</strong>, бот покажет номер карты и точную сумму, из приложения банка Uzcard сделайте P2P перевод на эту карту. Stars поступят на аккаунт за 1-5 минут. Оплата в сумах, без курсовой конвертации.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Uzcard — самая распространённая платёжная карта в Узбекистане. Для Telegram Stars же на официальных путях (App Store, Fragment) оплачивать через Uzcard сложно — курсовой риск, проблемы непринятия. Через местного реселлера StarsJoy.uz (<a href="https://t.me/starsjoybot" target="_blank" rel="noopener" className="text-primary hover:underline">@starsjoybot</a>) же вы можете купить Stars напрямую через P2P перевод с вашей карты Uzcard — в сумах, с местной картой, без курсовой конвертации.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 — Mechanism */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Как работает покупка Stars через Uzcard?</h2>
            <p className="text-muted leading-relaxed mb-4">
              В боте StarsJoy <strong>нет</strong> отдельной кнопки &quot;Uzcard&quot;. Вместо этого бот предлагает два универсальных пути: <strong>Click</strong> (с PIN/Face ID быстрее) и <strong>Перевод на карту</strong> (P2P, универсальный). Для оплаты через Uzcard выбирается второй путь — вы из приложения банка Uzcard делаете обычный P2P перевод на карту бота.
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">1. Бот показывает карту и точную сумму</h3>
                <p className="text-sm text-muted leading-relaxed">
                  После выбора количества Stars и пути &quot;Перевод на карту&quot; бот выводит номер карты и точную сумму на экран.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">2. Делаете P2P перевод из приложения Uzcard</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Откройте приложение банка Uzcard, выберите &quot;Перевод на другую карту&quot;. Введите указанный ботом номер карты и переведите ровно указанную сумму. Подтвердите SMS кодом или PIN.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">3. Система автоматически распознаёт</h3>
                <p className="text-sm text-muted leading-relaxed">
                  После подтверждения платежа система за 1-5 минут распознаёт сумму и Stars поступают на ваш Telegram аккаунт.
                </p>
              </div>
            </div>

            <div className="bg-section-alt rounded-xl p-5">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Главный факт:</strong> P2P перевод Uzcard — стандартный механизм в экосистеме Uzcard. Бот получает платёж не изнутри Uzcard, а через <strong>автоматическое распознавание поступившей на карту суммы</strong>. То есть вы с вашей карты Uzcard делаете обычный перевод на карту бота — больше ничего.
              </p>
            </div>
          </section>

          {/* Section 2 — Pricing */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Цены Stars через Uzcard — все пакеты</h2>
            <p className="text-muted leading-relaxed mb-4">
              В StarsJoy.uz Stars по линейной цене 240 сум/star. При оплате через Uzcard — те же цены, дополнительной комиссии нет:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Stars</div>
                <div className="text-center">Цена (сум)</div>
                <div className="text-center">Типичное использование</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">50 Stars (минимум)</div>
                <div className="text-center">12 000</div>
                <div className="text-center text-muted text-xs">Маленький tip, sticker</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">100 Stars</div>
                <div className="text-center">24 000</div>
                <div className="text-center text-muted text-xs">Функция бота, donate</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">250 Stars</div>
                <div className="text-center">60 000</div>
                <div className="text-center text-muted text-xs">Средний donate</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">500 Stars</div>
                <div className="text-center">120 000</div>
                <div className="text-center text-muted text-xs">Premium 3 мес gift</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm bg-primary-light/20">
                <div className="font-bold">1000 Stars ⭐</div>
                <div className="text-center font-bold">240 000</div>
                <div className="text-center text-muted text-xs">Premium 6-12 мес gift</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">2500 Stars</div>
                <div className="text-center">600 000</div>
                <div className="text-center text-muted text-xs">Крупный donate</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center text-sm">
                <div className="font-medium">5000 Stars</div>
                <div className="text-center">1 200 000</div>
                <div className="text-center text-muted text-xs">Business / max</div>
              </div>
            </div>

            <div className="bg-section-alt rounded-xl p-5">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Сравнение с App Store:</strong> App Store ~290 сум/star (с курсовой маржей). В StarsJoy.uz через Uzcard P2P — 240 сум/star, <strong>~17% дешевле</strong>, без валютного риска, с местной картой.
              </p>
            </div>
          </section>

          {/* Section 3 — Step by step */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Покупка Stars через Uzcard — 6 шагов</h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Краткий ответ:</strong>{" "}
                <a href="https://t.me/starsjoybot" target="_blank" rel="noopener" className="text-primary hover:underline">@starsjoybot</a>{" "}
                откройте → выберите количество Stars → путь &quot;Перевод на карту&quot; → бот даст карту и сумму → переведите P2P из Uzcard → Stars на аккаунте за 5 минут.
              </p>
            </div>

            <div className="space-y-4 mb-6">
              {[
                { step: "1", title: "Откройте @starsjoybot в Telegram", desc: "В строке поиска наберите @starsjoybot и откройте бот. Нажмите /start — бот выведет меню." },
                { step: "2", title: "Выберите количество Stars", desc: "Из меню нажмите нужный пакет: 50, 100, 250, 500, 1000, 2500, 5000 Stars. Или введите своё количество (минимум 50 Stars)." },
                { step: "3", title: "В качестве пути оплаты выберите \"Перевод на карту\"", desc: "Бот даёт два пути: Click (PIN/Face ID, быстрее) и Перевод на карту (P2P, универсальный). Для оплаты через Uzcard выберите второй путь." },
                { step: "4", title: "Бот показывает номер карты и точную сумму", desc: "На экране номер карты (8600 XXXX XXXX XXXX) и точная сумма (например 12 000 сум за 50 Stars). Нужно перевести именно эту сумму." },
                { step: "5", title: "Откройте приложение Uzcard и начните P2P перевод", desc: "Зайдите в приложение банка Uzcard. Выберите \"Перевод на другую карту\". Введите указанный ботом номер карты." },
                { step: "6", title: "Введите сумму и подтвердите", desc: "Введите ровно указанную ботом сумму (например 12 000). Подтвердите SMS кодом или PIN. Stars поступят на ваш аккаунт за 1-5 минут." },
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
                Есть карта Uzcard? <strong className="text-white">@starsjoybot</strong> откройте, выберите количество Stars, путь &quot;Перевод на карту&quot;. Из приложения Uzcard простой P2P перевод — Stars на аккаунте за 5 минут.
              </p>
              <a href="https://t.me/starsjoybot" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                Купить Stars с Uzcard — начать
              </a>
            </div>
          </section>

          {/* Section 4 — Why no Uzcard button */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Почему нет отдельной кнопки &quot;Uzcard&quot;?</h2>
            <p className="text-muted leading-relaxed mb-4">
              В боте StarsJoy нет специальной кнопки с интеграцией &quot;Uzcard&quot;. Это — намеренно выбранный дизайн:
            </p>
            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li><strong className="text-foreground">Универсальный подход:</strong> через путь &quot;Перевод на карту&quot; можно использовать Uzcard, Humo, Visa, Mastercard, банковскую карту — все. При специальной интеграции принимался бы только один тип карты.</li>
              <li><strong className="text-foreground">Простой механизм:</strong> бот даёт номер карты и сумму, вы делаете обычный P2P перевод. Никакой API интеграции — работает с любого приложения банка.</li>
              <li><strong className="text-foreground">Налоги и лицензии проще:</strong> для Click/Payme официальная интеграция сложна по налогам и лицензированию. P2P перевод — простой и прозрачный путь.</li>
            </ul>
            <p className="text-muted leading-relaxed">
              Результат: вы можете через карту Uzcard, через Humo, даже через Visa/Mastercard одинаково по пути &quot;Перевод на карту&quot; перевести сумму на карту бота. Технически разницы нет.
            </p>
          </section>

          {/* Section 5 — Comparison */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Stars через Uzcard vs другие пути</h2>
            <p className="text-muted leading-relaxed mb-6">
              Есть четыре основных пути покупки Stars. Таблица сравнивает цену, время и тип карты:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Путь</div>
                <div className="text-center">Цена (50 Stars)</div>
                <div className="text-center">Принимает Uzcard</div>
                <div className="text-center">Время</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm bg-primary-light/20">
                <div className="font-bold text-primary">StarsJoy + Uzcard P2P ⭐</div>
                <div className="text-center font-bold text-primary">12 000 сум</div>
                <div className="text-center text-green-600 font-bold">Да</div>
                <div className="text-center text-green-600">2-5 минут</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">StarsJoy + Click</div>
                <div className="text-center">12 000 сум</div>
                <div className="text-center text-green-600">Косвенно*</div>
                <div className="text-center text-green-600">1-3 минуты</div>
              </div>
              <div className="grid grid-cols-4 p-4 items-center text-sm">
                <div className="font-medium">App Store</div>
                <div className="text-center">~14 500 сум</div>
                <div className="text-center text-yellow-600">Частично</div>
                <div className="text-center">Сразу</div>
              </div>
            </div>

            <p className="text-muted text-xs italic mb-4">
              * Если ваша карта Uzcard привязана к Click, то путь Click косвенно делает оплату с Uzcard.
            </p>

            <p className="text-muted leading-relaxed">
              Путь Uzcard P2P — самый удобный способ работы с вашей картой Uzcard — прямой перевод с карты на карту бота, без чтения промежуточных курсов. Путь App Store на ~20% дороже. Fragment вообще не принимает Uzcard и требует зарубежную карту или TON.
            </p>
          </section>

          {/* Section 6 — Common issues */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Частые проблемы при покупке Stars через Uzcard</h2>
            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Перевели неверную сумму</h3>
                <p className="text-sm text-muted leading-relaxed">
                  <strong>Решение:</strong> в поддержку StarsJoy отправьте номер чека Uzcard и переведённую сумму. Ручная проверка за 15-30 минут — Stars активируются или излишек возвращается.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Моя карта Uzcard мультивалютная — с какого баланса переводит?</h3>
                <p className="text-sm text-muted leading-relaxed">
                  <strong>Решение:</strong> при переводе в приложении Uzcard проверьте, что &quot;с сумового баланса&quot;. Если переведёте с долларового или евро баланса — будет конвертация и сумма не совпадёт.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">SMS код не пришёл</h3>
                <p className="text-sm text-muted leading-relaxed">
                  <strong>Решение:</strong> приложение Uzcard и SMS работают с любым оператором Узбекистана (Beeline, Ucell, Mobiuz, UMS). Если не пришёл, подождите 1-2 минуты или проверьте правильность номера телефона, привязанного к карте в офисе Uzcard.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Деньги переведены, Stars не пришли</h3>
                <p className="text-sm text-muted leading-relaxed">
                  <strong>Решение:</strong> подождите 10-15 минут. Если не активировались, отправьте боту номер чека Uzcard. После ручной проверки Stars активируются или деньги возвращаются.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Частые вопросы</h2>
            <div className="space-y-4">
              {[
                { q: "Как купить Telegram Stars через Uzcard?", a: "В @starsjoybot выберите количество Stars, путь \"Перевод на карту\", бот даёт карту и сумму, из приложения Uzcard сделайте P2P перевод на эту карту. Stars на аккаунте за 5 минут." },
                { q: "Есть ли Uzcard как отдельная кнопка?", a: "Нет. Бот предлагает два пути: Click и Перевод на карту. Для оплаты через Uzcard выбираете второй путь и делаете P2P перевод из приложения Uzcard." },
                { q: "Сколько стоят 50 Stars?", a: "50 Stars через Uzcard — 12 000 сум (StarsJoy.uz, 240 сум/star). В App Store ~14 500 сум — местный P2P на ~17% дешевле и работает напрямую с Uzcard." },
                { q: "Безопасен ли Uzcard P2P?", a: "Да. Uzcard лицензирован Центробанком. Данные карты на сервере Uzcard, бот их не видит. Выдаётся чек, если Stars не пришли — деньги возвращаются." },
                { q: "Можно ли купить Stars через официальное приложение Telegram с Uzcard?", a: "Нет. Telegram не принимает Uzcard P2P — только Visa/Mastercard или Apple/Google Pay. Для оплаты в сумах с Uzcard нужен местный реселлер." },
                { q: "Click vs Uzcard P2P — что лучше?", a: "Click быстрее (1-3 минуты, PIN/Face ID) и удобнее. Uzcard P2P 2-5 минут, с подтверждением SMS кодом. Время прихода Stars одинаковое. Выбирайте удобный для вас." },
                { q: "Что делать, если нет приложения Uzcard?", a: "Скачайте приложение Uzcard из Play Market или App Store. Или переведите на указанную ботом карту через приложение другого банка — результат тот же, система распознаёт платёж по сумме и карте." },
                { q: "Если Stars не пришли, кто отвечает?", a: "Реселлер StarsJoy.uz — по номеру чека проверяет и активирует Stars или возвращает деньги. P2P перевод Uzcard — официальная операция, гарантированная Uzcard." },
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
              <h3 className="text-lg font-bold text-foreground mb-4 text-center">Stars через Uzcard — в цифрах</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">240</p>
                  <p className="text-sm text-muted">сум/star (StarsJoy)</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">~17-20%</p>
                  <p className="text-sm text-muted">дешевле App Store</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">2-5 мин.</p>
                  <p className="text-sm text-muted">Stars на аккаунте</p>
                </div>
              </div>
            </div>
          </section>

          {/* Related */}
          <section>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-card-border">
              <h3 className="text-lg font-bold text-foreground mb-4">Другие статьи о Stars</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/ru/maqolalar/telegram-stars-nima" className="text-primary font-semibold hover:underline">Что такое Telegram Stars и где используются</Link></li>
                <li><Link href="/ru/maqolalar/telegram-stars-ozbekistondan-sotib-olish" className="text-primary font-semibold hover:underline">Купить Telegram Stars из Узбекистана</Link></li>
                <li><Link href="/ru/maqolalar/telegram-stars-click-payme-orqali-somda" className="text-primary font-semibold hover:underline">Stars через Click и перевод на карту в сумах</Link></li>
                <li><Link href="/ru/maqolalar/telegram-stars-vs-telegram-premium" className="text-primary font-semibold hover:underline">Stars vs Premium: что выбрать</Link></li>
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
                  Покупка Telegram Stars через карту Uzcard — самый дешёвый и правильный местный путь. 240 сум/star, без курсовой конвертации, простой P2P перевод, Stars на аккаунте за 2-5 минут.{" "}
                  <strong className="text-white">@starsjoybot</strong> — начните в нём.
                </p>
                <a href="https://t.me/starsjoybot" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  Купить Stars с Uzcard
                </a>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
