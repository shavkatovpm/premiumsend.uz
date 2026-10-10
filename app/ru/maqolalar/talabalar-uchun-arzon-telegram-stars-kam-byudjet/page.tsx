import type { Metadata } from "next";
import Link from "next/link";
import { ogBaseRu } from "@/app/shared-metadata";

const PAGE_URL = "https://premiumsend.uz/ru/maqolalar/talabalar-uchun-arzon-telegram-stars-kam-byudjet";
const UZ_URL = "https://premiumsend.uz/maqolalar/talabalar-uchun-arzon-telegram-stars-kam-byudjet";
const TITLE = "Самые дешёвые Telegram Stars для студентов и молодёжи: как купить при маленьком бюджете?";

const META_TITLE = "Дешёвые Telegram Stars для студентов — от 15 000 сум";

export const metadata: Metadata = {
  title: META_TITLE,
  description:
    "Отдельной скидки для студентов нет, но тариф линейный: самый маленький пакет 50 Stars — 15 000 сум, 1 star — 300 сум. На что хватит небольшого бюджета, как сэкономить и как купить с Uzcard/Humo.",
  keywords: [
    "telegram stars для студентов",
    "самые дешёвые telegram stars",
    "telegram stars маленький бюджет",
    "stars за 15 000 сум",
    "telegram stars для молодёжи",
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: {
      uz: UZ_URL,
      ru: PAGE_URL,
      "x-default": UZ_URL,
    },
  },
  openGraph: {
    ...ogBaseRu,
    title: TITLE,
    description:
      "Telegram Stars при маленьком бюджете: 50 Stars — 15 000 сум, линейный тариф 300 сум/star. На что хватит и как сэкономить.",
    url: PAGE_URL,
    type: "article",
    publishedTime: "2026-10-10",
  },
};

const SMALL_PACKAGES = [
  { amount: 50, price: 15000, g15: 3, g25: 2, g50: 1, g100: 0 },
  { amount: 100, price: 30000, g15: 6, g25: 4, g50: 2, g100: 1 },
  { amount: 250, price: 75000, g15: 16, g25: 10, g50: 5, g100: 2 },
];

const SAVING_TIPS = [
  { title: "Берите ровно столько, сколько нужно", desc: "Тариф линейный, поэтому большой пакет не снижает цену одного star. Если сегодня нужно 50 Stars — берите 50 Stars и не замораживайте лишние деньги на балансе." },
  { title: "Сначала узнайте цену", desc: "До покупки Stars проверьте, сколько именно Stars просит бот, подарок или услуга, и выберите ближайший пакет." },
  { title: "Не верьте в «бесплатные Stars»", desc: "Обещания бесплатных Stars, генераторов или слишком низкой цены — главный признак обмана. Пытаясь сэкономить, можно потерять всю сумму." },
  { title: "Переводите точную сумму", desc: "Переводите сумму, которую показал Mini App, без округления и сохраняйте чек — так Stars не задержатся и не придётся платить повторно." },
];

const STEPS = [
  { title: "Откройте @premiumsendbot", desc: "Запустите бота и выберите раздел Stars." },
  { title: "Выберите маленький пакет", desc: "Например 50 Stars — 15 000 сум или 100 Stars — 30 000 сум." },
  { title: "Сделайте перевод с карты", desc: "Mini App покажет номер карты и точную сумму. Перевести можно с карты Uzcard или Humo, в том числе через приложение Click или Payme." },
  { title: "Проверьте Stars", desc: "После обнаружения платежа Stars обычно приходят за несколько минут. Смотрите в Telegram → Настройки → Stars." },
];

const FAQS = [
  {
    q: "Есть ли скидка на Telegram Stars для студентов?",
    a: "Нет. В Premium Send нет отдельной скидки для студентов — тариф один для всех, 300 сум/star. Но самый маленький пакет стоит всего 15 000 сум, поэтому купить можно и при небольшом бюджете.",
  },
  {
    q: "За какую минимальную сумму можно купить Telegram Stars?",
    a: "За 15 000 сум — это самый маленький пакет, 50 Stars. Следующие пакеты: 100 Stars — 30 000 сум, 250 Stars — 75 000 сум.",
  },
  {
    q: "В маленьком пакете один star выходит дороже?",
    a: "Нет. Тариф линейный: и при 50 Stars, и при 5000 Stars один star стоит 300 сум. Наценки на маленький пакет нет.",
  },
  {
    q: "На что хватит 50 Stars?",
    a: "Например, на три подарка Telegram по 15 Stars или один за 50 Stars. Также их можно потратить на Star-реакцию под постом канала или услугу бота — цену каждый бот устанавливает сам.",
  },
  {
    q: "У меня нет международной карты. Можно купить Stars?",
    a: "Да. В @premiumsendbot оплата в сумах, переводом с карты Uzcard или Humo — Visa, Mastercard или криптокошелёк не нужны.",
  },
  {
    q: "Разве в App Store или на Fragment не дешевле?",
    a: "На бумаге один star выглядит дешевле, но App Store и Google Play требуют международную карту, а Fragment — криптовалюту. Для студента с местной картой эти способы на практике закрыты или требуют дополнительных расходов.",
  },
  {
    q: "Premium Send — официальный партнёр Telegram?",
    a: "Нет. Premium Send — местный реселлер, а не официальный партнёр Telegram. По вопросам и проблемам пишут @premiumsend_admin.",
  },
];

const KEY_FACTS = [
  { k: "Самый маленький пакет", v: "50 Stars — 15 000 сум" },
  { k: "Цена 1 star", v: "300 сум — одинаково в любом пакете" },
  { k: "Скидка для студентов", v: "Нет — цена одна для всех" },
  { k: "Международная карта", v: "Не нужна" },
  { k: "Оплата", v: "Uzcard, Humo, Click, Payme — в сумах" },
  { k: "Доставка", v: "Обычно несколько минут" },
  { k: "Где купить", v: "@premiumsendbot (telegram.me/premiumsendbot)" },
];

const SOURCES = [
  { label: "Блог Telegram — Gifts (5 октября 2024)", href: "https://telegram.org/blog/gifts-verification-platform" },
  { label: "Блог Telegram — Star Reactions и платная подписка", href: "https://telegram.org/blog/superchannels-star-reactions-subscriptions" },
  { label: "Документация Telegram API — Telegram Stars", href: "https://core.telegram.org/api/stars" },
];

const TG_ICON ="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z";

const fmt = (n: number) => n.toLocaleString("en-US").replace(/,/g, " ");

export default function ArticleTalabalarUchunArzonStarsRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description:
      "Как студентам и молодёжи купить Telegram Stars при маленьком бюджете: самый маленький пакет, линейный тариф, на что хватит 50–250 Stars и способы экономии.",
    datePublished: "2026-10-10",
    dateModified: "2026-10-10",
    author: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    publisher: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    mainEntityOfPage: PAGE_URL,
    inLanguage: "ru",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: "https://premiumsend.uz/ru" },
      { "@type": "ListItem", position: 2, name: "Статьи", item: "https://premiumsend.uz/ru/maqolalar" },
      { "@type": "ListItem", position: 3, name: "Дешёвые Telegram Stars для студентов", item: PAGE_URL },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Как купить Telegram Stars при маленьком бюджете",
    inLanguage: "ru",
    step: STEPS.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.desc })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-muted">
        <Link href="/ru" className="hover:text-primary">Главная</Link>
        <span className="mx-2">/</span>
        <Link href="/ru/maqolalar" className="hover:text-primary">Статьи</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">Дешёвые Telegram Stars для студентов</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">Руководство по покупке</span>
            <time className="text-xs text-muted" dateTime="2026-10-10">10 октября 2026</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Самые дешёвые Telegram Stars для студентов и молодёжи: как купить при маленьком бюджете?
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-sm font-bold text-primary mb-2">КОРОТКО</p>
            <p className="text-foreground leading-relaxed font-medium">
              Отдельной скидки для студентов нет, но купить Telegram Stars можно и при маленьком бюджете: в{" "}
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="text-primary hover:underline">@premiumsendbot</Link>{" "}
              самый маленький пакет — <strong>50 Stars за 15 000 сум</strong>. Тариф линейный: и в маленьком пакете 1 star стоит 300 сум, без наценки. Оплата в сумах с карты Uzcard или Humo, международная карта не нужна.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Для того, кто живёт на стипендию или карманные деньги, главный вопрос не «где скидка», а «с какой минимальной суммы можно начать». Ниже — цены самых маленьких пакетов, на что их хватает, честные способы сэкономить и шаги покупки.
          </p>

          <div className="bg-white rounded-2xl border border-card-border shadow-sm overflow-x-auto mt-6">
            <table className="w-full text-sm">
              <caption className="text-left text-sm font-bold text-foreground px-4 pt-4 pb-2">Главные факты (октябрь 2026)</caption>
              <tbody>
                {KEY_FACTS.map((f) => (
                  <tr key={f.k} className="border-b border-card-border last:border-b-0">
                    <th scope="row" className="p-4 text-left font-medium text-muted w-2/5">{f.k}</th>
                    <td className="p-4 font-semibold text-foreground">{f.v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Есть ли скидка на Telegram Stars для студентов?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Нет. В Premium Send нет отдельной цены для студентов, школьников или других групп — тариф один для всех, <strong>300 сум/star</strong>. В официальном блоге Telegram объявлений о студенческом тарифе на Stars мы тоже не нашли.
            </p>
            <p className="text-muted leading-relaxed">
              Поэтому осторожнее с ботами и каналами, которые обещают «скидку 50% для студентов» или «бесплатные Stars» — обычно это обман:{" "}
              <Link href="/ru/maqolalar/telegram-stars-xavfsizmi-aldov-belgilari" className="text-primary font-semibold hover:underline">признаки поддельного продавца Stars</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">За какую минимальную сумму можно купить Telegram Stars?</h2>
            <p className="text-muted leading-relaxed mb-4">
              <strong>За 15 000 сум</strong> — это самый маленький пакет, 50 Stars. Наценки на маленький пакет нет: цена одного star такая же, как в пакете на 5000 Stars. В таблице — три самых дешёвых пакета и на сколько подарков Telegram их хватит:
            </p>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto mb-4">
              <table className="w-full text-sm min-w-[620px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">Пакет</th>
                    <th className="p-4 text-left font-bold">Цена</th>
                    <th className="p-4 text-left font-bold">Подарок за 15 Stars</th>
                    <th className="p-4 text-left font-bold">За 25 Stars</th>
                    <th className="p-4 text-left font-bold">За 50 Stars</th>
                    <th className="p-4 text-left font-bold">За 100 Stars</th>
                  </tr>
                </thead>
                <tbody>
                  {SMALL_PACKAGES.map((p) => (
                    <tr key={p.amount} className="border-b border-card-border last:border-b-0">
                      <td className="p-4 font-medium">
                        <Link href={`/ru/${p.amount}-stars`} className="text-primary font-semibold hover:underline">{p.amount} Stars</Link>
                      </td>
                      <td className="p-4">{fmt(p.price)} сум</td>
                      <td className="p-4">{p.g15} шт.</td>
                      <td className="p-4">{p.g25} шт.</td>
                      <td className="p-4">{p.g50} шт.</td>
                      <td className="p-4">{p.g100 > 0 ? `${p.g100} шт.` : "не хватит"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              Обычные подарки Telegram продаются по 15, 25, 50 и 100 Stars (по состоянию на октябрь 2026 года; точную цену проверяйте в приложении). Пакеты побольше —{" "}
              <Link href="/ru/stars" className="text-primary font-semibold hover:underline">все цены на Stars</Link>.
            </p>
          </section>

          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Начните с 15 000 сум — 50 Stars в <strong className="text-white">@premiumsendbot</strong>, с карты Uzcard или Humo.
              </p>
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d={TG_ICON} /></svg>
                Купить 50 Stars
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">На что ещё тратят небольшое количество Stars?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Кроме подарков, 50–250 Stars хватает на мелкие повседневные платежи: Star-реакцию под понравившимся постом канала, открытие платного поста или медиа, оплату услуги бота или мини-приложения. Цену каждый канал и бот устанавливает сам, поэтому сначала узнайте нужную сумму.
            </p>
            <p className="text-muted leading-relaxed">
              Для тех, кто использует AI-ботов в учёбе, есть отдельный расчёт:{" "}
              <Link href="/ru/maqolalar/ai-botlarga-necha-stars-kerak" className="text-primary font-semibold hover:underline">сколько Stars нужно для AI-ботов</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Разве в App Store или на Fragment не дешевле?</h2>
            <p className="text-muted leading-relaxed mb-4">
              На бумаге один star выглядит дешевле, но для студента с местной картой эти способы на практике закрыты или требуют дополнительных расходов. App Store и Google Play не принимают Uzcard и Humo, а Fragment работает только с криптовалютой.
            </p>
            <p className="text-muted leading-relaxed">
              Сравнение в цифрах:{" "}
              <Link href="/ru/maqolalar/1-stars-necha-som-appstore-taqqoslash" className="text-primary font-semibold hover:underline">сколько сумов стоит 1 Stars</Link>. Варианты без международной карты:{" "}
              <Link href="/ru/maqolalar/xorijiy-kartasiz-stars-sotib-olish" className="text-primary font-semibold hover:underline">как купить Stars без иностранной карты</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Как сэкономить при покупке Stars?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Даже без скидки четыре простых правила защищают от лишних расходов:
            </p>
            <div className="space-y-4 mb-4">
              {SAVING_TIPS.map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                  <h3 className="font-bold text-foreground mb-1">{i + 1}. {item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-muted leading-relaxed">
              Если карта принадлежит родителям, делайте перевод с их согласия — чек об оплате остаётся в банковском приложении владельца карты.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Как купить Stars при маленьком бюджете?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Четыре шага, всё внутри бота. Пароль, код входа или данные карты не запрашиваются — перевод вы делаете из своего банковского приложения.
            </p>
            <div className="space-y-4 mb-6">
              {STEPS.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{i + 1}</div>
                  <div>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-foreground leading-relaxed font-medium mb-4">
              Готовы? Начните с 15 000 сум прямо сейчас:{" "}
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="text-primary font-bold hover:underline">открыть @premiumsendbot →</Link>
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Подробно о порядке оплаты:{" "}
              <Link href="/ru/maqolalar/stars-kartaga-otkazma" className="text-primary font-semibold hover:underline">покупка Stars переводом на карту</Link>. Если Stars задерживаются:{" "}
              <Link href="/ru/maqolalar/stars-yetkazish-vaqti" className="text-primary font-semibold hover:underline">за сколько приходят Stars</Link>.
            </p>
            <p className="text-muted leading-relaxed">
              Важно: Premium Send — не официальный партнёр Telegram, а местный реселлер. Если возникла проблема, каждый случай рассматривается отдельно — напишите <strong>@premiumsend_admin</strong> с чеком. Если нужен большой объём для канала или проекта:{" "}
              <Link href="/ru/maqolalar/kanal-va-bloger-uchun-kop-miqdorda-telegram-stars" className="text-primary font-semibold hover:underline">как купить много Stars</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Откуда эти данные?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Утверждения о функциях Telegram опираются на официальные источники; цены взяты из тарифа Premium Send по состоянию на октябрь 2026 года.
            </p>
            <ul className="list-disc list-inside text-muted leading-relaxed space-y-2">
              {SOURCES.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} target="_blank" rel="noopener" className="text-primary hover:underline">{s.label}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Часто задаваемые вопросы (FAQ)</h2>
            <div className="space-y-4">
              {FAQS.map((faq, i) => (
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
                  Без международной карты и при маленьком бюджете — <strong className="text-white">@premiumsendbot</strong>: 50 Stars от <strong className="text-white">15 000 сум</strong>, в сумах, за несколько минут.
                </p>
                <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d={TG_ICON} /></svg>
                  Купить через PremiumSend
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
