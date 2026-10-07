import type { Metadata } from "next";
import Link from "next/link";
import { ogBaseRu } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title: "Как купить Telegram Stars на Fragment.com — можно ли с Uzcard или Humo?",
  description:
    "На Fragment.com Telegram Stars продаются только за криптовалюту (Gram — бывший Toncoin, USDT, USDC) — Uzcard и Humo не принимаются. Цена — 15 долларов за 1000 Stars, минимум 50 Stars. Что нужно, шаги и отличие от местного реселлера.",
  keywords: [
    "fragment telegram stars",
    "как купить stars на fragment",
    "fragment stars uzcard",
    "fragment stars цена",
    "fragment kyc stars",
    "gram ton stars",
  ],
  alternates: {
    canonical: "https://premiumsend.uz/ru/maqolalar/fragment-com-telegram-stars-qanday-ishlaydi",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/fragment-com-telegram-stars-qanday-ishlaydi",
      ru: "https://premiumsend.uz/ru/maqolalar/fragment-com-telegram-stars-qanday-ishlaydi",
      "x-default": "https://premiumsend.uz/maqolalar/fragment-com-telegram-stars-qanday-ishlaydi",
    },
  },
  openGraph: {
    ...ogBaseRu,
    title: "Как купить Telegram Stars на Fragment.com — можно ли с Uzcard или Humo?",
    description:
      "Только за крипту: Gram, USDT или USDC. Цена, минимум, что нужно и отличие от местного реселлера — в таблице.",
    url: "https://premiumsend.uz/ru/maqolalar/fragment-com-telegram-stars-qanday-ishlaydi",
    type: "article",
    publishedTime: "2026-10-07",
  },
};

const FRAGMENT_PACKAGES = [
  { amount: "50", usd: "0.75" },
  { amount: "100", usd: "1.50" },
  { amount: "500", usd: "7.50" },
  { amount: "1 000", usd: "15" },
  { amount: "10 000", usd: "150" },
];

export default function ArticleFragmentStarsRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Как купить Telegram Stars на Fragment.com — можно ли с Uzcard или Humo?",
    description:
      "Покупка Telegram Stars через Fragment.com: принимаемые криптовалюты, цена, минимальное количество, шаги, KYC и отличие от местного реселлера.",
    datePublished: "2026-10-07",
    dateModified: "2026-10-07",
    author: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    publisher: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    mainEntityOfPage: "https://premiumsend.uz/ru/maqolalar/fragment-com-telegram-stars-qanday-ishlaydi",
    inLanguage: "ru",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Можно ли купить Telegram Stars на Fragment.com с Uzcard или Humo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет. Fragment не принимает банковские карты — Stars продаются только за криптовалюту: Gram (GRAM, бывший Toncoin), USDT или USDC. Чтобы оплатить в сумах с Uzcard/Humo, нужен местный реселлер, например @premiumsendbot.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько стоят Telegram Stars на Fragment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "По состоянию на октябрь 2026 года на странице Fragment 50 Stars стоят 0,75 доллара, 1000 Stars — 15 долларов, то есть 1 Stars — 0,015 доллара. К этому добавляются расходы на покупку и перевод криптовалюты.",
        },
      },
      {
        "@type": "Question",
        name: "Какое минимальное количество Stars можно купить на Fragment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Минимальная покупка — 50 Stars, максимальная — 10 000 000 Stars. В Premium Send самый маленький пакет тоже 50 Stars (15 000 сумов).",
        },
      },
      {
        "@type": "Question",
        name: "TON и Gram — это одно и то же?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. С 15 июня 2026 года основной токен блокчейна TON переименован из Toncoin (TON) в Gram (GRAM). Сам блокчейн по-прежнему называется The Open Network (TON). «Криптовалюта TON» в старых инструкциях — это нынешний Gram.",
        },
      },
      {
        "@type": "Question",
        name: "Нужен ли KYC (подтверждение личности) для покупки Stars на Fragment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "По сообщениям криптоизданий, с ноября 2024 года Fragment ввёл подтверждение личности для покупок. Кроме того, документы может запросить биржа, на которой вы покупаете криптовалюту. Точное требование видно на самом Fragment в момент покупки.",
        },
      },
      {
        "@type": "Question",
        name: "Что дешевле — Fragment или местный реселлер?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "По номинальной цене дешевле Fragment: 1 Stars — 0,015 доллара. У местного реселлера (Premium Send) 1 Stars — 300 сумов, зато оплата в сумах с местной карты, без криптокошелька и биржи. Если крипта уже есть — удобнее Fragment, если нет — реселлер.",
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
      { "@type": "ListItem", position: 3, name: "Stars на Fragment", item: "https://premiumsend.uz/ru/maqolalar/fragment-com-telegram-stars-qanday-ishlaydi" },
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
        <span className="text-foreground font-medium">Stars на Fragment</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">Руководство</span>
            <time className="text-xs text-muted" dateTime="2026-10-07">7 октября 2026</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Как купить Telegram Stars на Fragment.com — можно ли с Uzcard или Humo?
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-sm font-bold text-primary mb-2">КРАТКИЙ ОТВЕТ</p>
            <p className="text-foreground leading-relaxed font-medium">
              <strong>С Uzcard или Humo — нельзя</strong>: на Fragment.com Telegram Stars продаются только за криптовалюту — Gram (GRAM, бывший Toncoin), USDT или USDC. Понадобятся криптокошелёк, достаточный баланс в нём и подключённый аккаунт Telegram. Цена — 15 долларов за 1000 Stars, минимум 50 Stars. Если крипты нет, проще купить в сумах через{" "}
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="text-primary hover:underline">@premiumsendbot</Link>.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            О покупке Telegram Stars на Fragment.com часто говорят: «это самый дешёвый способ». Отчасти это правда, но ценник показывает не всю картину. Ниже — как работает Fragment, что именно нужно, что изменилось в 2026 году (Toncoin теперь называется Gram) и кому этот способ подходит.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Что такое Fragment.com и как он связан с Telegram Stars?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Fragment — связанная с Telegram платформа, работающая на блокчейне TON. Помимо торговли коллекционными юзернеймами и номерами, на ней продаются Telegram Premium и Telegram Stars. В разделе Stars можно пополнить баланс себе или другому пользователю.
            </p>
            <p className="text-muted leading-relaxed">
              Это один из{" "}
              <Link href="/ru/maqolalar/stars-sotib-olishning-necha-yoli-bor" className="text-primary font-semibold hover:underline">3 способов купить Stars</Link>:
              официальное приложение, Fragment и местный реселлер. Каким бы способом вы ни купили, Stars на аккаунте одинаковые — это официальный баланс Telegram.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Сколько стоят Telegram Stars на Fragment?</h2>
            <p className="text-muted leading-relaxed mb-4">
              1 Stars — 0,015 доллара: 1000 Stars стоят 15 долларов. Цена линейная, минимальная покупка — 50 Stars, максимальная — 10 000 000 Stars. Цифры ниже взяты со страницы Stars на Fragment по состоянию на 7 октября 2026 года.
            </p>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto mb-4">
              <table className="w-full text-sm min-w-[380px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">Количество</th>
                    <th className="p-4 text-left font-bold">Цена на Fragment (USD)</th>
                  </tr>
                </thead>
                <tbody>
                  {FRAGMENT_PACKAGES.map((p) => (
                    <tr key={p.amount} className="border-b border-card-border last:border-b-0">
                      <td className="p-4 font-medium">{p.amount} Stars</td>
                      <td className="p-4">${p.usd}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              Важно: это только сами Stars. Расходы на покупку криптовалюты и её перевод на кошелёк идут отдельно, за транзакцию в блокчейне тоже берётся небольшая комиссия. Сравнение в сумах:{" "}
              <Link href="/ru/maqolalar/1-stars-necha-som-appstore-taqqoslash" className="text-primary font-semibold hover:underline">сколько сумов стоит 1 Stars</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Можно ли оплатить на Fragment картой Uzcard или Humo?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Нет — Fragment вообще не принимает банковские карты, ни местные, ни международные. Оплата идёт только с криптокошелька. По состоянию на октябрь 2026 года на странице Stars указаны такие валюты:
            </p>
            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li><strong>Gram (GRAM)</strong> — основной токен блокчейна TON</li>
              <li><strong>USDT</strong> — в сетях TON, Ethereum и Polygon</li>
              <li><strong>USDC</strong> — в сетях Ethereum, Base и Polygon</li>
            </ul>
            <p className="text-muted leading-relaxed">
              Чтобы не запутаться: <strong>Gram — это прежний Toncoin (TON)</strong>. С 15 июня 2026 года токен переименован из Toncoin в Gram, а сам блокчейн по-прежнему называется The Open Network (TON). Поэтому «криптовалюта TON» в старых инструкциях (в том числе в наших прежних статьях) означает нынешний Gram.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Что нужно для покупки Stars через Fragment?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Четыре вещи: криптокошелёк, средства на нём, аккаунт Telegram и username получателя. Процесс идёт в таком порядке:
            </p>
            <div className="space-y-4 mb-6">
              {[
                { step: "1", title: "Откройте криптокошелёк", desc: "В своём руководстве Fragment приводит в пример кошельки Tonkeeper и MyTonWallet. Секретную фразу кошелька (seed phrase) не сообщайте никому." },
                { step: "2", title: "Купите криптовалюту и переведите на кошелёк", desc: "Gram, USDT или USDC обычно покупают на бирже. По информации Fragment, некоторые биржи могут запросить документ, удостоверяющий личность." },
                { step: "3", title: "Подключите к Fragment кошелёк и Telegram", desc: "На сайте fragment.com вы подключаете кошелёк (TON Connect) и свой аккаунт Telegram." },
                { step: "4", title: "Выберите количество и получателя", desc: "Укажите количество Stars (не меньше 50) и аккаунт, на который они придут, затем подтвердите оплату в кошельке." },
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
            <p className="text-muted leading-relaxed">
              Больше всего времени занимает второй шаг. Если вы раньше не работали с криптой, открытие биржи и кошелька ради одного пакета Stars станет главным препятствием.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Нужен ли KYC для покупки Stars на Fragment?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Будьте готовы к запросу документов. По сообщениям криптоизданий, с ноября 2024 года Fragment ввёл для покупок процедуру подтверждения личности (KYC) — она включает документ и проверку лица.
            </p>
            <p className="text-muted leading-relaxed">
              Независимо от этого, документы обычно запрашивает и биржа, на которой вы покупаете криптовалюту. Точное требование видно на самом Fragment в момент покупки — мы не можем давать гарантии от имени Fragment, поэтому проверяйте условия на самом сайте.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Fragment и местный реселлер: в чём разница?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Результат одинаковый, разница в способе оплаты: Fragment дешевле, но требует крипту; реселлер дороже, но работает в сумах с обычной карты.
            </p>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto mb-4">
              <table className="w-full text-sm min-w-[600px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">Критерий</th>
                    <th className="p-4 text-left font-bold">Fragment.com</th>
                    <th className="p-4 text-left font-bold text-primary">Местный реселлер (@premiumsendbot)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Чем платить</td>
                    <td className="p-4">Gram, USDT, USDC</td>
                    <td className="p-4 font-semibold text-primary">Сумы, перевод с карты на карту</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Uzcard/Humo</td>
                    <td className="p-4">Не принимаются</td>
                    <td className="p-4 font-semibold text-primary">Да (в том числе через приложения Click, Payme)</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Цена 1 Stars</td>
                    <td className="p-4">$0.015 + расходы на крипту</td>
                    <td className="p-4 font-semibold text-primary">300 сумов, фиксированно</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Минимальная покупка</td>
                    <td className="p-4">50 Stars</td>
                    <td className="p-4 font-semibold text-primary">50 Stars (15 000 сумов)</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Что нужно</td>
                    <td className="p-4">Криптокошелёк, биржа, возможен запрос документов</td>
                    <td className="p-4 font-semibold text-primary">Банковское приложение</td>
                  </tr>
                  <tr className="last:border-b-0">
                    <td className="p-4 font-medium">Связь с Telegram</td>
                    <td className="p-4">Платформа, связанная с Telegram</td>
                    <td className="p-4 font-semibold text-primary">Не официальный партнёр, независимый реселлер</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              Полное сравнение всех трёх способов, включая официальное приложение, — в статье{" "}
              <Link href="/ru/maqolalar/stars-sotib-olishning-necha-yoli-bor" className="text-primary font-semibold hover:underline">способы покупки Stars</Link>.
            </p>
          </section>

          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Ни кошелёк, ни биржа не нужны — в <strong className="text-white">@premiumsendbot</strong> покупайте в сумах с карты Uzcard, Humo, Click или Payme.
              </p>
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                @premiumsendbot — начать
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Когда подходит Fragment, а когда реселлер?</h2>
            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li><strong>Крипта уже лежит на кошельке</strong> → Fragment: номинальная цена ниже</li>
              <li><strong>Нужен большой объём и вы умеете работать с криптой</strong> → Fragment: можно купить до 10 000 000 Stars</li>
              <li><strong>С криптой никогда не работали</strong> → реселлер: без кошелька и биржи, за несколько минут</li>
              <li><strong>Есть только карта Uzcard или Humo</strong> → реселлер: Fragment карты не принимает</li>
            </ul>
            <p className="text-muted leading-relaxed">
              В Premium Send{" "}
              <Link href="/ru/stars" className="text-primary font-semibold hover:underline">все пакеты Stars</Link>{" "}
              стоят 300 сумов за звезду: например,{" "}
              <Link href="/ru/50-stars" className="text-primary font-semibold hover:underline">50 Stars — 15 000 сумов</Link> или{" "}
              <Link href="/ru/1000-stars" className="text-primary font-semibold hover:underline">1000 Stars — 300 000 сумов</Link>. Если нет и международной карты:{" "}
              <Link href="/ru/maqolalar/xorijiy-kartasiz-stars-sotib-olish" className="text-primary font-semibold hover:underline">Stars без зарубежной карты</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">На что обратить внимание при работе с Fragment?</h2>
            <p className="text-muted leading-relaxed mb-4">
              На три вещи: адрес сайта, секретную фразу кошелька и получателя. Криптоперевод, в отличие от банковского, нельзя отменить, поэтому ошибка обходится дорого.
            </p>
            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li>Проверьте, что в браузере адрес именно <strong>fragment.com</strong> — не подключайте кошелёк к сайтам с похожим названием</li>
              <li>Не сообщайте секретную фразу кошелька ни сайту, ни боту, ни «сотруднику поддержки»</li>
              <li>Перед подтверждением оплаты ещё раз проверьте аккаунт получателя</li>
            </ul>
            <p className="text-muted leading-relaxed">
              Общий чек-лист для любого продавца:{" "}
              <Link href="/ru/maqolalar/telegram-stars-xavfsizmi-aldov-belgilari" className="text-primary font-semibold hover:underline">безопасно ли покупать Stars и признаки обмана</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Частые вопросы (FAQ)</h2>
            <div className="space-y-4">
              {[
                { q: "Можно ли купить Telegram Stars на Fragment.com с Uzcard или Humo?", a: "Нет. Fragment не принимает карты — только крипту: Gram, USDT или USDC. Для оплаты в сумах нужен местный реселлер." },
                { q: "Сколько стоят Telegram Stars на Fragment?", a: "На октябрь 2026 года 1000 Stars — 15 долларов (1 Stars — 0,015 доллара), плюс расходы на покупку и перевод крипты." },
                { q: "Какое минимальное количество Stars можно купить на Fragment?", a: "Минимум 50 Stars, максимум 10 000 000 Stars." },
                { q: "TON и Gram — это одно и то же?", a: "Да. С 15 июня 2026 года токен Toncoin (TON) называется Gram (GRAM); блокчейн по-прежнему называется TON." },
                { q: "Нужен ли KYC для покупки Stars на Fragment?", a: "По сообщениям криптоизданий, с ноября 2024 года Fragment ввёл подтверждение личности. Точное требование проверяйте на сайте в момент покупки." },
                { q: "Что дешевле — Fragment или местный реселлер?", a: "По номинальной цене дешевле Fragment, но нужна крипта. У реселлера 300 сумов за звезду, в сумах и с местной карты." },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                  <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="hero-gradient rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10"><div className="absolute top-5 left-5 w-32 h-32 bg-white rounded-full blur-2xl" /></div>
              <div className="relative">
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  Stars без крипты — через <strong className="text-white">@premiumsendbot</strong> в сумах, 50 Stars <strong className="text-white">от 15 000 сумов</strong>.
                </p>
                <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                  @premiumsendbot — начать
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
