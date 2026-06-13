import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Почему Telegram Premium дороже в App Store и Play Market — разбор и дешёвый путь",
  description:
    "В App Store Telegram Premium 1 месяц $4.99 (~66 000 сум), в Play Market ~64 000, у местного реселлера 59 000 сум. На 12-месячном тарифе разница 25-28% — комиссия Apple/Google 30% и механизм bulk gift. Полный разбор.",
  keywords: [
    "telegram premium app store дорого",
    "почему telegram premium дороже app store",
    "telegram premium play market цена",
    "комиссия apple telegram premium",
    "комиссия google telegram premium",
    "telegram premium в сумах дёшево",
    "telegram premium uzs app store",
    "telegram premium цена сравнение",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/ru/maqolalar/nega-telegram-premium-app-store-play-market-qimmat",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/nega-telegram-premium-app-store-play-market-qimmat",
      ru: "https://premiumsend.uz/ru/maqolalar/nega-telegram-premium-app-store-play-market-qimmat",
      "x-default": "https://premiumsend.uz/maqolalar/nega-telegram-premium-app-store-play-market-qimmat",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title:
      "Почему Telegram Premium дороже в App Store и Play Market",
    description:
      "Базовая цена $4.99/мес уже включает 30% комиссию Apple/Google. На 1 месяце разница ~10%, на 12 месяцах — 25-28%. Разбор по причинам.",
    url: "https://premiumsend.uz/ru/maqolalar/nega-telegram-premium-app-store-play-market-qimmat",
    type: "article",
    publishedTime: "2026-05-08",
  },
};

export default function ArticleAppStorePlayMarketQimmatRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    image: "https://premiumsend.uz/og-image.png",
    headline:
      "Почему Telegram Premium дороже в App Store и Play Market — разбор и дешёвый путь",
    description:
      "Почему в App Store и Play Market Telegram Premium для пользователя из Узбекистана выходит дороже и как сэкономить через местного реселлера — разбор причин.",
    datePublished: "2026-05-08",
    dateModified: "2026-05-08",
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
      "https://premiumsend.uz/ru/maqolalar/nega-telegram-premium-app-store-play-market-qimmat",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Почему Telegram Premium дороже в App Store?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Базовая цена Telegram в App Store — $4.99/мес ($13.99 / $24.99 / $44.99 — 3/6/12 месяцев). 30% комиссия Apple уже включена в эту цену — то есть из $4.99 Apple забирает ~$1.50, Telegram получает ~$3.50. При конвертации в сумы 1 месяц получается ~66 000 сум (у местного реселлера 59 000 сум — разница ~10%). Но на 12-месячном тарифе разница больше: $44.99 ~592 000 сум, у реселлера 425 000 сум — на ~28% дешевле.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько стоит Telegram Premium в Play Market и почему есть разница?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "В Google Play Telegram Premium тоже по базовым $4.99/$13.99/$24.99/$44.99 — в сумах примерно 64 000 / 178 000 / 319 000 / 574 000. Google тоже берёт 15-30% комиссию, и она уже включена в $4.99. Чуть дешевле App Store — потому что региональный курс Play ближе к рыночному. По сравнению с местным реселлером разница на 1 месяце маленькая (~8%), на 12 месяцах — ~26%.",
        },
      },
      {
        "@type": "Question",
        name: "Безопаснее ли платить через App Store и Play?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Через App Store/Play оплата официальная, платёжные данные хранят Apple/Google — это плюс по доверию. Но безопасность только в оплате; функция Premium одинаковая — каким бы способом ни активировали, на сервере Telegram результат тот же. Среди местных реселлеров тоже есть надёжные (сайт + Telegram-бот, оферта, многолетняя работа), но каждого нужно проверять отдельно.",
        },
      },
      {
        "@type": "Question",
        name: "Как местные реселлеры держат цену ниже?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Местные реселлеры получают Premium не как сервис, а как gift в крупном объёме через внутренний bulk-механизм Telegram, где есть скидка за объём. Комиссии Apple/Google 30% на этом пути нет. Поэтому 1 месяц 59 000 сум (~10% дешевле App Store ~66 000), 12 месяцев 425 000 сум (~28% дешевле App Store ~592 000) — чем длиннее тариф, тем выше процент экономии.",
        },
      },
      {
        "@type": "Question",
        name: "Где брать Premium — App Store, Play или местный реселлер?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Выбор зависит от трёх факторов: цена, удобство и способ оплаты. На 1 месяце разница маленькая (5-10%), поэтому если нужно автопродление и есть зарубежная карта — App Store/Play тоже логичны. Но если берёте 6 или 12 месяцев, местный реселлер (235 000 / 425 000 сум) дешевле на ~26-28% — экономия 150 000-170 000 сум в год. Через Premium Send-бота можно оплатить за 5 минут через Click/Payme.",
        },
      },
      {
        "@type": "Question",
        name: "Какова комиссия Apple/Google и как она влияет на цену Premium?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Apple App Store: стандарт 30%, для малых разработчиков 15% (Small Business Program). Google Play: 15% до первого $1 млн оборота, дальше 30%. Telegram — крупная компания, поэтому на обеих платформах 30%. Эта комиссия уже включена в базовую цену $4.99 — то есть Apple/Google забирают ~$1.50 с каждого платежа, Telegram получает ~$3.50. Местный реселлер работает вне этого канала и поэтому без комиссии.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли купить Premium в App Store местной картой?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Технически да, но на практике есть нюансы. Если Apple ID в регионе Узбекистан, цена Premium показывается в сумах и можно платить местной картой (Uzcard/Humo/Visa/MC). Но некоторые банки расценивают это как cross-border платёж и берут 1-3% дополнительно. Через Visa/MC оплата идёт с конвертацией в доллар — из-за курсовой разницы теряется ещё 2-4%.",
        },
      },
      {
        "@type": "Question",
        name: "Цена в App Store/Play vs цена реселлера — какая официальнее?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Оба пути ведут к одинаковому результату — Premium активируется на сервере Telegram, в аккаунте отображается официально (со звёздочкой). Разница только в пути оплаты: через App Store/Play Telegram получает деньги напрямую от Apple/Google, через реселлера — через механизм Stars/gift внутри Telegram. Опыт пользователя и функция Premium не отличаются.",
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
      { "@type": "ListItem", position: 3, name: "Почему в App Store/Play дороже", item: "https://premiumsend.uz/ru/maqolalar/nega-telegram-premium-app-store-play-market-qimmat" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-muted">
        <Link href="/ru" className="hover:text-primary">Главная</Link>
        <span className="mx-2">/</span>
        <Link href="/ru/maqolalar" className="hover:text-primary">Статьи</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">Почему в App Store/Play дороже</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">Вопрос-ответ</span>
            <time className="text-xs text-muted" dateTime="2026-05-08">8 мая 2026 года</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Почему Telegram Premium дороже в App Store и Play Market — полный разбор
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>Краткий ответ:</strong> базовая цена Telegram — <strong>$4.99/мес</strong> ($13.99 / $24.99 / $44.99 — 3/6/12 месяцев). В App Store при конвертации в сумы это <strong>~66 000 сум</strong>, в Play Market <strong>~64 000 сум</strong>, у местного реселлера — <strong>59 000 сум</strong>. На 1 месяце разница небольшая (8-10%), но на <strong>6 и 12 месячных</strong> тарифах у местного реселлера разница достигает <strong>26-28%</strong> (235 000 vs ~329 000; 425 000 vs ~592 000 сум). Причина: 30% комиссия Apple/Google уже включена в $4.99, а местный реселлер работает через механизм bulk gift — без этой комиссии.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Цена Telegram Premium отличается в App Store, Play Market и у местного реселлера. Пользователи часто спрашивают: «почему в моём телефоне выглядит дороже?» — ответ не технологический, а <strong>экономический</strong>: Apple и Google берут комиссию с каждой транзакции, добавляется конвертация валют, межбанковские платежи добавляют свой процент.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            В этой статье подробно разбираем, как складывается цена в каждом из трёх путей оплаты, где какая «доплата» появляется и какой путь самый выгодный и безопасный для пользователя из Узбекистана.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 — Price comparison */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Сравнение цен — App Store, Play Market и местный реселлер
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Состояние на май 2026 года. Базовая цена Telegram: $4.99 (1 мес), $13.99 (3 мес), $24.99 (6 мес), $44.99 (12 мес). Текущий рыночный курс ~12 750 сум/$1:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-5 bg-section-alt p-4 font-bold text-sm">
                <div>Тариф</div>
                <div className="text-center">$ база</div>
                <div className="text-center">App Store (сум)</div>
                <div className="text-center">Play (сум)</div>
                <div className="text-center text-primary">Реселлер</div>
              </div>
              <div className="grid grid-cols-5 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">1 месяц</div>
                <div className="text-center">$4.99</div>
                <div className="text-center">~66 000</div>
                <div className="text-center">~64 000</div>
                <div className="text-center font-bold text-primary">59 000</div>
              </div>
              <div className="grid grid-cols-5 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">3 месяца</div>
                <div className="text-center">$13.99</div>
                <div className="text-center">~184 000</div>
                <div className="text-center">~178 000</div>
                <div className="text-center font-bold text-primary">175 000</div>
              </div>
              <div className="grid grid-cols-5 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">6 месяцев</div>
                <div className="text-center">$24.99</div>
                <div className="text-center">~329 000</div>
                <div className="text-center">~319 000</div>
                <div className="text-center font-bold text-primary">235 000</div>
              </div>
              <div className="grid grid-cols-5 p-4 items-center text-sm bg-primary-light/20">
                <div className="font-bold">12 месяцев</div>
                <div className="text-center">$44.99</div>
                <div className="text-center">~592 000</div>
                <div className="text-center">~574 000</div>
                <div className="text-center font-bold text-primary">425 000</div>
              </div>
            </div>

            <div className="bg-section-alt rounded-xl p-5">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Процент экономии:</strong> на 1 месяце небольшой (~10% App Store, ~8% Play), на 3 месяцах разница совсем маленькая (~5% и ~2%). Зато на <strong>6 месяцах 28% и 26%</strong>, на <strong>12 месяцах 28% и 26%</strong> — на длительных тарифах местный реселлер существенно дешевле. Причина: реселлер получает скидку через bulk gift в большом объёме.
              </p>
            </div>
          </section>

          {/* Section 2 — Why Apple is expensive */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Почему цена в App Store настолько высокая?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Цена App Store «раздувается» в три этапа:
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">1. Комиссия Apple (30%)</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Apple App Store за каждую внутреннюю подписку (in-app subscription) берёт 30% комиссии у разработчика. Это называется «Apple Tax» и применяется одинаково ко всем мобильным приложениям. Telegram как крупная компания не подпадает под Small Business Program (15%). Чтобы остаться в плюсе, Telegram закладывает эти 30% в цену.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">2. Внутренний валютный курс Apple (2-4%)</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Apple применяет свой внутренний курс конвертации доллар→местная валюта для каждой страны. Этот курс обычно на 2-4% выше рыночного («страховка от валютного риска» для Apple). Платит пользователь — но эта разница попадает в финальную цену.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">3. Межбанковский cross-border тариф (1-3%)</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Платёж местной картой (Uzcard/Humo/Visa) в App Store расценивается как зарубежный. Местный банк берёт 1-3% за cross-border, иногда добавляются SMS- или бумажные комиссии.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">Важный нюанс:</strong> Telegram установил $4.99 так, чтобы после удержания Apple/Google 30% комиссии оставался профит. То есть 30% уже заложены в $4.99. Пользователь платит $4.99 → Apple забирает ~$1.50, Telegram получает ~$3.50. Местный реселлер же работает не через канал Apple/Google, а через внутренний механизм gift в Telegram — поэтому «экономит» эту комиссию и даже после своей маржи продаёт дешевле.
            </p>
          </section>

          {/* Mid CTA */}
          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Без комиссии App Store и валютной маржи. <strong className="text-white">@PremiumSendBot</strong> — 1 месяц от 59 000 сум, 3 месяца 175 000, 6 месяцев 235 000, 12 месяцев 425 000 сум. Оплата в сумах, активация за 5 минут.
              </p>
              <Link href="https://t.me/premiumsendbot" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                Открыть Premium в сумах
              </Link>
            </div>
          </section>

          {/* Section 3 — Play vs Apple vs reseller */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Почему в Play Market дешевле, чем в Apple, но дороже, чем у реселлера?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Причины, почему Google Play чуть дешевле Apple:
            </p>

            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li><strong className="text-foreground">Комиссия Google:</strong> до первого $1 млн оборота 15%, дальше 30% (у Apple практически всегда 30%)</li>
              <li><strong className="text-foreground">Пополнение баланса Play:</strong> можно через Click/Payme — это местная карта, без cross-border тарифа</li>
              <li><strong className="text-foreground">Местные gift card:</strong> в крупных магазинах электроники (Texnomart) иногда есть Google Play gift card по фиксированному курсу</li>
            </ul>

            <p className="text-muted leading-relaxed mb-4">
              Но Play тоже дороже местного реселлера на 12-месячном тарифе на ~26% — комиссия Google уже включена в $4.99, и Telegram не меняет базовую цену для Play.
            </p>

            <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
              <h3 className="font-bold text-foreground mb-2">Оплата Click/Payme в Play Market</h3>
              <p className="text-sm text-muted leading-relaxed">
                Технически возможно: через Click или Payme пополняете баланс Play в сумах и покупаете оттуда Premium. Это убирает cross-border тариф, но добавляется комиссия Click/Payme (1-2%), и внутренняя цена Play всё равно выше рыночной.
              </p>
            </div>
          </section>

          {/* Section 4 — Why local resellers are cheaper */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Как местные реселлеры продают дешевле?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Местные реселлеры (например Premium Send) получают Premium не через канал App Store/Play, а через <strong>механизм bulk gift в Telegram</strong>. Это даёт уход от комиссий и скидку за объём:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-2 bg-section-alt p-4 font-bold text-sm">
                <div>Фактор</div>
                <div className="text-center">Влияние</div>
              </div>
              <div className="grid grid-cols-2 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Комиссия Apple/Google 30%</div>
                <div className="text-center text-green-600">Нет (gift-канал)</div>
              </div>
              <div className="grid grid-cols-2 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Скидка за крупный объём</div>
                <div className="text-center text-green-600">~10-20% ниже</div>
              </div>
              <div className="grid grid-cols-2 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Оплата в сумах (нет валютной маржи)</div>
                <div className="text-center text-green-600">Нет</div>
              </div>
              <div className="grid grid-cols-2 p-4 items-center text-sm bg-primary-light/20">
                <div className="font-bold">Маржа самого реселлера</div>
                <div className="text-center font-bold">~5-15% сверху</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              После учёта маржи реселлера итоговая экономия для пользователя: ~10% на 1 месяце, ~26-28% на 6-12 месяцах. Самая большая выгода — на длительных тарифах, где скидка за объём работает в полную силу.
            </p>

            <div className="bg-section-alt rounded-xl p-5">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Уточнение:</strong> такие реселлеры работают не «вне закона» — механизм gift в Telegram официальный. В аккаунте Premium отображается Telegram&apos;ом со звёздочкой, как обычно. Отличается только путь оплаты — через внутренний gift-канал Telegram, а не через Apple/Google.
              </p>
            </div>
          </section>

          {/* Section 5 — When App Store/Play makes sense */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Когда выбор App Store или Play имеет смысл?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Несмотря на то, что местный реселлер дешевле, в некоторых случаях App Store/Play тоже логичны:
            </p>

            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li><strong className="text-foreground">Если оплачиваете зарубежной картой</strong> — цена в долларах оплачивается напрямую, нет валютной маржи и cross-border тарифа</li>
              <li><strong className="text-foreground">Если есть внутренний баланс Apple/Google</strong> — можно оплатить пополненным заранее балансом (например gift card)</li>
              <li><strong className="text-foreground">Если нужно автопродление</strong> — App Store/Play автоматически продлевают подписку без необходимости каждый раз платить вручную</li>
              <li><strong className="text-foreground">Family Sharing внутри Apple/Google</strong> — Premium активируется на одном аккаунте и автоматически доступен 5 членам семьи (только при покупке через App Store/Play)</li>
            </ul>

            <p className="text-muted leading-relaxed">
              Для пользователя из Узбекистана, оплачивающего в сумах и совершающего разовую покупку, местный реселлер всегда выгоднее.
            </p>
          </section>

          {/* Section 6 — Steps to compare */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Как самостоятельно сравнить — 4 шага
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Не нужно верить цифрам в статье — проверьте со своего телефона:
            </p>

            <div className="space-y-4 mb-6">
              {[
                { step: "1", title: "Откройте Telegram", desc: "Settings → Telegram Premium → посмотрите тарифы. На iPhone отображается цена App Store, на Android — Play. Цены — в сумах или долларах." },
                { step: "2", title: "Сравните с местным реселлером", desc: "Напишите @PremiumSendBot → /start → откройте раздел тарифов Premium. Видите конкретные суммы: 1 месяц 59 000, 3 месяца 175 000, 6 месяцев 235 000, 12 месяцев 425 000 сум." },
                { step: "3", title: "Посчитайте разницу", desc: "Вычтите цену местного реселлера из цены Apple/Play. На 1 месяце разница маленькая (~5 000-7 000 сум), на 6 месяцах ~85 000 сум, на 12 месяцах — ~150 000-170 000 сум. Чем длиннее тариф, тем больше процент экономии." },
                { step: "4", title: "Выберите удобный путь", desc: "Принимайте решение по скорости, цене и способу оплаты. Оплата в сумах, экономия 26-28% на 6-12 месяцах, активация за 5 минут — местный реселлер; автопродление и Family Sharing — App Store/Play." },
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
          </section>

          {/* Section 7 — Math example */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Конкретный пример: расчёт по тарифу 12 месяцев
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Сравним два пути для годового Premium:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-2 bg-section-alt p-4 font-bold text-sm">
                <div>Путь</div>
                <div className="text-center">Расчёт</div>
              </div>
              <div className="grid grid-cols-2 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">App Store (1 мес × 12)</div>
                <div className="text-center">$4.99 × 12 = $59.88 → ~792 000 сум</div>
              </div>
              <div className="grid grid-cols-2 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">App Store (12 мес сразу)</div>
                <div className="text-center">$44.99 → ~592 000 сум</div>
              </div>
              <div className="grid grid-cols-2 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Play Market (12 мес)</div>
                <div className="text-center">$44.99 → ~574 000 сум</div>
              </div>
              <div className="grid grid-cols-2 p-4 items-center text-sm bg-primary-light/20">
                <div className="font-bold text-primary">Местный реселлер (12 мес)</div>
                <div className="text-center font-bold text-primary">425 000 сум</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">Экономия в год:</strong> местный реселлер дешевле Apple на ~167 000 сум, дешевле Play на ~149 000 сум. Если оплачивать помесячно (автопродление), за 12 месяцев в Apple набегает ~792 000 сум — на 367 000 сум выше местного реселлера. То есть самая большая выгода — на длительных (6, 12 мес) тарифах.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">
              Частые вопросы
            </h2>
            <div className="space-y-4">
              {[
                { q: "Почему цена в App Store бывает разная?", a: "Если регион Apple ID — Узбекистан, цена в сумах; если регион США — в долларах. Регион зависит от выбора пользователя и платёжной карты. Цена в местном регионе всегда чуть выше зарубежного — из-за валютной маржи Apple." },
                { q: "Где официальная цена Telegram?", a: "На странице telegram.org/premium цены указаны в долларах. Но для покупки пользователь должен пройти через App Store/Play или механизм gift — напрямую Telegram оплату не принимает." },
                { q: "Комиссия Apple всегда 30%?", a: "Apple App Store: стандарт 30%, Small Business Program (годовой оборот до $1 млн) — 15%. Telegram под программу не подпадает. Google Play: первый $1 млн оборота 15%, дальше 30%. У Telegram в Play почти всегда 30%." },
                { q: "Местные реселлеры легальны?", a: "Реселлеры через механизм gift Telegram — не вне закона; Telegram сам разрешил этот механизм. Но регистрация бизнеса и налоговый статус каждый реселлер должен проверять отдельно. Крупные реселлеры вроде Premium Send имеют официальный статус." },
                { q: "Есть ли автопродление у реселлера?", a: "Нет — местные реселлеры оформляют каждый раз вручную. App Store/Play продлевают автоматически, но это палка о двух концах — деньги списываются без вашего подтверждения. Ручной заказ даёт возможность каждый месяц переоценивать необходимость." },
                { q: "Работает ли Family Sharing через реселлера?", a: "Нет — Apple Family Sharing и Google Family работают только при покупке в App Store/Play. Premium через местного реселлера активируется только на одном аккаунте. Но можно оформить gift на членов семьи (3, 6, 12 месяцев) — стоимость на 5 человек = 5 отдельных тарифов." },
                { q: "Если у меня есть баланс App Store, оплата дешевле?", a: "При пополнении баланса через Apple gift card внутренний курс и комиссия Apple всё равно применяются — цена будет такая же, как в App Store. Местные gift card в Узбекистане пока распространены слабо." },
                { q: "Доступны ли Play Market gift card в Узбекистане?", a: "В ограниченном количестве — иногда есть в Texnomart, ASIA и других магазинах электроники. Но цена обычно в долларах, и применяется внутренний курс Play. Прямая оплата в сумах через местного реселлера — самый прозрачный вариант." },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                  <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Trust block */}
          <section>
            <div className="bg-section-alt rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-bold text-foreground mb-4 text-center">
                Местный реселлер vs App Store/Play — в цифрах
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">~28%</p>
                  <p className="text-sm text-muted">экономия от App Store (12 мес)</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">~26%</p>
                  <p className="text-sm text-muted">экономия от Play Market (12 мес)</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">5 мин.</p>
                  <p className="text-sm text-muted">время активации</p>
                </div>
              </div>
            </div>
          </section>

          {/* Related */}
          <section>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-card-border">
              <h3 className="text-lg font-bold text-foreground mb-4">Похожие статьи</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/ru/maqolalar/telegram-premium-narxlari" className="text-primary font-semibold hover:underline">Цены Telegram Premium 2026: 1, 3, 6, 12 месяцев</Link></li>
                <li><Link href="/ru/maqolalar/telegram-premium-eng-arzon-qayerdan-sotib-olish" className="text-primary font-semibold hover:underline">Где купить Premium дешевле всего</Link></li>
                <li><Link href="/ru/maqolalar/telegram-premium-xavfsiz-aldovdan-saqlanish" className="text-primary font-semibold hover:underline">Безопасная покупка Premium: как не нарваться на мошенников</Link></li>
                <li><Link href="/ru/maqolalar/premiumsend-vs-boshqa-resellerlar" className="text-primary font-semibold hover:underline">PremiumSend vs другие реселлеры — объективное сравнение</Link></li>
                <li><Link href="/ru/maqolalar/telegram-premium-payme-orqali" className="text-primary font-semibold hover:underline">Покупка Premium через Payme</Link></li>
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
                  Базовая цена Telegram — $4.99/мес, и комиссия Apple/Google 30% уже включена в неё. Местный реселлер обходит эту комиссию через bulk gift и на 6-12 месячных тарифах даёт <strong>экономию 26-28%</strong>. <strong className="text-white">@PremiumSendBot</strong> — 1 месяц 59 000, 6 месяцев 235 000, 12 месяцев 425 000 сум.
                </p>
                <Link href="https://t.me/premiumsendbot" target="_blank" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  Открыть Premium
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
