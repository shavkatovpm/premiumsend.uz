import type { Metadata } from "next";
import Link from "next/link";
import { ogBaseRu } from "@/app/shared-metadata";

const PAGE_URL = "https://premiumsend.uz/ru/maqolalar/kanal-va-bloger-uchun-kop-miqdorda-telegram-stars";
const UZ_URL = "https://premiumsend.uz/maqolalar/kanal-va-bloger-uchun-kop-miqdorda-telegram-stars";
const TITLE = "Как владельцу канала и блогеру купить много Telegram Stars (оптом)?";

const META_TITLE = "Telegram Stars оптом: 2500–5000 Stars для канала и блогера";

export const metadata: Metadata = {
  title: META_TITLE,
  description:
    "Оптовой скидки нет — в Premium Send тариф линейный: 2500 Stars — 750 000 сум, 5000 Stars — 1 500 000 сум (300 сум/star). Зачем каналу и блогеру много Stars, на что их хватит и как купить.",
  keywords: [
    "telegram stars оптом",
    "много telegram stars",
    "telegram stars для канала",
    "stars для блогера",
    "telegram stars для бизнеса",
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
      "Много Stars для канала и блогера: линейный тариф 300 сум/star, на что хватит 2500 и 5000 Stars, как купить.",
    url: PAGE_URL,
    type: "article",
    publishedTime: "2026-10-10",
  },
};

const BULK_PACKAGES = [
  { amount: 1000, price: 300000, href: "/ru/1000-stars" },
  { amount: 2500, price: 750000, href: "/ru/2500-stars" },
  { amount: 5000, price: 1500000, href: "/ru/5000-stars" },
];

const USES = [
  { use: "Обычный подарок Telegram (приз в конкурсе, благодарность подписчику)", cost: "15–100 Stars", from2500: "25–166 шт.", from5000: "50–333 шт." },
  { use: "Подарить Telegram Premium на 3 месяца за Stars", cost: "1000 Stars", from2500: "2 шт.", from5000: "5 шт." },
  { use: "Подарить Telegram Premium на 6 месяцев за Stars", cost: "1500 Stars", from2500: "1 шт.", from5000: "3 шт." },
  { use: "Подарить Telegram Premium на 12 месяцев за Stars", cost: "2500 Stars", from2500: "1 шт.", from5000: "2 шт." },
];

const PREMIUM_COMPARE = [
  { term: "3 месяца", stars: 1000, viaStars: 300000, direct: 175000, href: "/ru/3-oylik" },
  { term: "6 месяцев", stars: 1500, viaStars: 450000, direct: 235000, href: "/ru/6-oylik" },
  { term: "12 месяцев", stars: 2500, viaStars: 750000, direct: 425000, href: "/ru/12-oylik" },
];

const STEPS = [
  { title: "Откройте @premiumsendbot", desc: "Запустите бота и выберите раздел Stars. Бот находится только по этой ссылке: telegram.me/premiumsendbot." },
  { title: "Выберите количество", desc: "Отметьте нужный пакет — например 2500 или 5000 Stars. Цена сразу показывается в сумах." },
  { title: "Сделайте перевод на карту", desc: "Mini App покажет номер карты и точную сумму. Вы переводите её из своего банковского приложения (с карты Uzcard, Humo, через Click или Payme)." },
  { title: "Stars поступают на баланс", desc: "После обнаружения платежа Stars обычно зачисляются на ваш аккаунт Telegram за несколько минут. Проверить можно в Настройки → Stars." },
];

const FAQS = [
  {
    q: "Будет ли скидка, если купить много Telegram Stars (оптом)?",
    a: "Нет. В Premium Send тариф линейный: и при 50 Stars, и при 5000 Stars один star стоит 300 сум. Оптовой скидки нет, но и наценки на маленькие пакеты тоже нет.",
  },
  {
    q: "Какой пакет самый большой и сколько он стоит?",
    a: "Самый большой пакет — 5000 Stars за 1 500 000 сум. 2500 Stars — 750 000 сум, 1000 Stars — 300 000 сум.",
  },
  {
    q: "Что делать, если нужно больше 5000 Stars?",
    a: "Можно оформить заказ несколько раз. Если есть вопросы по большому объёму, до покупки напишите @premiumsend_admin.",
  },
  {
    q: "Купленные Stars добавятся к доходу моего канала?",
    a: "Нет. Купленные Stars поступают на баланс вашего личного аккаунта и предназначены для трат. Доход канала — это Stars, которые присылают подписчики (Star-реакции, платные посты, платная подписка).",
  },
  {
    q: "Можно ли провести официальный Giveaway на Stars с баланса?",
    a: "Официальный Star Giveaway оплачивается отдельно и заранее в разделе Boosts настроек канала — в документации Telegram API это отдельный тип покупки, не пополнение баланса. Stars с баланса можно потратить на подарки победителям.",
  },
  {
    q: "Стоит ли покупать Stars, чтобы дарить Premium?",
    a: "Обычно нет. Premium на 3 месяца за Stars стоит 1000 Stars, то есть 300 000 сум, а напрямую в Premium Send 3 месяца Premium — 175 000 сум. Для подарка Premium дешевле брать сам Premium.",
  },
  {
    q: "Premium Send — официальный партнёр Telegram?",
    a: "Нет. Premium Send — местный реселлер, а не официальный партнёр Telegram. Вопросы по оплате решаются через @premiumsend_admin.",
  },
];

const KEY_FACTS = [
  { k: "Цена 1 star", v: "300 сум — одинаково в любом пакете" },
  { k: "2500 Stars", v: "750 000 сум" },
  { k: "5000 Stars (самый большой пакет)", v: "1 500 000 сум" },
  { k: "Оптовая скидка", v: "Нет — тариф линейный" },
  { k: "Оплата", v: "Uzcard, Humo, Click, Payme — в сумах" },
  { k: "Доставка", v: "Обычно несколько минут" },
  { k: "Где купить", v: "@premiumsendbot (telegram.me/premiumsendbot)" },
];

const SOURCES = [
  { label: "Блог Telegram — Star Giveaways (6 сентября 2024)", href: "https://telegram.org/blog/star-giveaways-iv-in-browser" },
  { label: "Блог Telegram — Star Reactions и платная подписка", href: "https://telegram.org/blog/superchannels-star-reactions-subscriptions" },
  { label: "Блог Telegram — Gifts (5 октября 2024)", href: "https://telegram.org/blog/gifts-verification-platform" },
  { label: "Документация Telegram API — Telegram Stars", href: "https://core.telegram.org/api/stars" },
];

const TG_ICON ="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z";

const fmt = (n: number) => n.toLocaleString("en-US").replace(/,/g, " ");

export default function ArticleKanalBlogerKopMiqdordaStarsRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description:
      "Много Telegram Stars для владельца канала и блогера: линейный тариф, на что хватает больших пакетов, чего нельзя сделать купленными Stars и шаги покупки.",
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
      { "@type": "ListItem", position: 3, name: "Много Stars для канала и блогера", item: PAGE_URL },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Как купить большое количество Telegram Stars",
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
        <span className="text-foreground font-medium">Много Stars для канала и блогера</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">Руководство для бизнеса</span>
            <time className="text-xs text-muted" dateTime="2026-10-10">10 октября 2026</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Как владельцу канала и блогеру купить много Telegram Stars (оптом)?
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-sm font-bold text-primary mb-2">КОРОТКО</p>
            <p className="text-foreground leading-relaxed font-medium">
              Много Telegram Stars покупают в сумах через{" "}
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="text-primary hover:underline">@premiumsendbot</Link>:{" "}
              <strong>2500 Stars — 750 000 сум</strong>, <strong>5000 Stars — 1 500 000 сум</strong>. Оптовой скидки нет — тариф линейный, при любом количестве 1 star стоит 300 сум. Оплата переводом с карты Uzcard или Humo, Stars обычно поступают на баланс за несколько минут.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Тому, кто ведёт канал или блог, 50–100 Stars мало: призы для конкурсов, подарки подписчикам и услуги ботов быстро требуют тысяч Stars. Ниже — цены больших пакетов, на что их реально хватает, чего нельзя сделать купленными Stars и шаги покупки.
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
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Есть ли оптовая скидка при покупке большого количества Stars?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Нет. В Premium Send все пакеты считаются по единому линейному тарифу <strong>300 сум/star</strong>. Большой пакет не делает star дешевле, но и на маленький пакет наценки нет — поэтому бюджет легко посчитать заранее.
            </p>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto mb-4">
              <table className="w-full text-sm min-w-[420px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">Пакет</th>
                    <th className="p-4 text-left font-bold">Цена</th>
                    <th className="p-4 text-left font-bold">1 star</th>
                  </tr>
                </thead>
                <tbody>
                  {BULK_PACKAGES.map((p) => (
                    <tr key={p.amount} className="border-b border-card-border last:border-b-0">
                      <td className="p-4 font-medium">
                        <Link href={p.href} className="text-primary font-semibold hover:underline">{p.amount} Stars</Link>
                      </td>
                      <td className="p-4">{fmt(p.price)} сум</td>
                      <td className="p-4">300 сум</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              Самый большой пакет — 5000 Stars. Если нужно больше, заказ можно оформить несколько раз; по вопросам большого объёма до покупки напишите <strong>@premiumsend_admin</strong>. Все пакеты — на{" "}
              <Link href="/ru/stars" className="text-primary font-semibold hover:underline">странице цен на Stars</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Зачем владельцу канала и блогеру много Stars?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Купленные Stars — это баланс, который <strong>тратят</strong>. Владельцы каналов в основном используют его, чтобы дарить подарки подписчикам, награждать победителей конкурсов и оплачивать услуги ботов и мини-приложений. В таблице — на что хватит 2500 и 5000 Stars:
            </p>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto mb-4">
              <table className="w-full text-sm min-w-[600px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">Цель</th>
                    <th className="p-4 text-left font-bold">Цена за штуку</th>
                    <th className="p-4 text-left font-bold">2500 Stars</th>
                    <th className="p-4 text-left font-bold">5000 Stars</th>
                  </tr>
                </thead>
                <tbody>
                  {USES.map((u) => (
                    <tr key={u.use} className="border-b border-card-border last:border-b-0">
                      <td className="p-4 font-medium">{u.use}</td>
                      <td className="p-4">{u.cost}</td>
                      <td className="p-4">{u.from2500}</td>
                      <td className="p-4">{u.from5000}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed mb-4">
              По данным официального блога Telegram, чтобы отправить подарок, нужно открыть профиль пользователя и выбрать в меню <strong>Send a Gift</strong>; получатель может показать подарок в профиле или обменять его на Stars. Обычные подарки продаются по 15, 25, 50 и 100 Stars (по состоянию на октябрь 2026 года; точную цену проверяйте в приложении).
            </p>
            <p className="text-muted leading-relaxed">
              Кроме того, Stars уходят на Star-реакции под постами других каналов, открытие платных постов и услуги ботов — о том,{" "}
              <Link href="/ru/maqolalar/ai-botlarga-necha-stars-kerak" className="text-primary font-semibold hover:underline">сколько Stars нужно для AI-ботов</Link>, мы писали отдельно.
            </p>
          </section>

          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Нужны Stars для конкурса или акции? В <strong className="text-white">@premiumsendbot</strong> 2500 Stars — 750 000 сум, 5000 Stars — 1 500 000 сум.
              </p>
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d={TG_ICON} /></svg>
                Заказать Stars
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Чего нельзя сделать купленными Stars?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Купленные Stars — не доход канала, и ими не оплачивается официальный Giveaway. Эти две вещи стоит знать до покупки, иначе Stars могут не подойти для задуманной цели.
            </p>
            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li>
                <strong>Это не доход канала.</strong> Канал получает Stars от подписчиков: через Star-реакции, платные посты и платную подписку. По данным блога Telegram, 100% Stars от Star-реакций получает владелец канала. Stars, которые вы купили сами, остаются на вашем личном балансе.
              </li>
              <li>
                <strong>Официальный Star Giveaway оплачивается отдельно.</strong> Он запускается в Настройки канала → Статистика → Boosts и оплачивается заранее. В документации Telegram API оплата розыгрыша указана как отдельный тип покупки, не пополнение баланса. А Stars с баланса можно потратить на подарки победителям вручную.
              </li>
            </ul>
            <p className="text-muted leading-relaxed">
              Возврат денег — отдельная тема: подробно в статье{" "}
              <Link href="/ru/maqolalar/stars-pulini-qaytarish-refund" className="text-primary font-semibold hover:underline">о правилах возврата за Stars</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Стоит ли покупать Stars, чтобы дарить Premium?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Обычно нет — дешевле взять сам Premium. По документации Telegram, подарить Premium за Stars стоит 1000 Stars за 3 месяца, 1500 за 6 и 2500 за 12 месяцев. При тарифе 300 сум/star это выходит дороже, чем Premium напрямую в Premium Send:
            </p>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto mb-4">
              <table className="w-full text-sm min-w-[560px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">Срок</th>
                    <th className="p-4 text-left font-bold">За Stars</th>
                    <th className="p-4 text-left font-bold">В сумах (300 сум/star)</th>
                    <th className="p-4 text-left font-bold">Premium напрямую</th>
                  </tr>
                </thead>
                <tbody>
                  {PREMIUM_COMPARE.map((r) => (
                    <tr key={r.term} className="border-b border-card-border last:border-b-0">
                      <td className="p-4 font-medium">{r.term}</td>
                      <td className="p-4">{r.stars} Stars</td>
                      <td className="p-4">{fmt(r.viaStars)} сум</td>
                      <td className="p-4">
                        <Link href={r.href} className="text-primary font-bold hover:underline">{fmt(r.direct)} сум</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              Поэтому, если призом будет Premium, дарите сам Premium, а не Stars —{" "}
              <Link href="/ru/maqolalar/3-oylik-telegram-premium-sovga-qilish" className="text-primary font-semibold hover:underline">руководство, как подарить Premium на 3 месяца</Link>. А Stars — правильный выбор именно для подарков, реакций и услуг ботов.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Как купить большое количество Stars?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Процесс такой же, как для маленького пакета: четыре шага внутри бота. Пароль, код входа или данные карты не запрашиваются — вы только делаете перевод из своего банковского приложения.
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
              Готовы? Начните заказ прямо сейчас:{" "}
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="text-primary font-bold hover:underline">открыть @premiumsendbot →</Link>
            </p>
            <p className="text-muted leading-relaxed">
              Подробно о порядке оплаты:{" "}
              <Link href="/ru/maqolalar/stars-kartaga-otkazma" className="text-primary font-semibold hover:underline">покупка Stars переводом на карту</Link>. Что делать, если Stars задерживаются:{" "}
              <Link href="/ru/maqolalar/stars-yetkazish-vaqti" className="text-primary font-semibold hover:underline">за сколько приходят Stars</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">На что обратить внимание при переводе крупной суммы?</h2>
            <p className="text-muted leading-relaxed mb-4">
              При крупной сумме ошибка обходится дорого, поэтому до перевода проверьте четыре вещи:
            </p>
            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li><strong>Лимит банка.</strong> Заранее посмотрите разовый и дневной лимит переводов в банковском приложении — если 1 500 000 сум превышает лимит, перевод не пройдёт.</li>
              <li><strong>Точная сумма.</strong> Переводите ровно ту сумму, которую показал Mini App, без округления, а номер карты копируйте, а не набирайте вручную.</li>
              <li><strong>Чек.</strong> Сохраните чек перевода — он пригодится и для отчётности, и для обращения, если возникнет проблема.</li>
              <li><strong>Правильный бот.</strong> Работайте только с @premiumsendbot; не переводите деньги «продавцам», которые написали вам первыми —{" "}
                <Link href="/ru/maqolalar/telegram-stars-xavfsizmi-aldov-belgilari" className="text-primary hover:underline">список признаков обмана</Link>.
              </li>
            </ul>
            <p className="text-muted leading-relaxed">
              Важно: Premium Send — не официальный партнёр Telegram, а местный реселлер. Если возникла проблема с оплатой, каждый случай рассматривается отдельно — напишите <strong>@premiumsend_admin</strong> с чеком. Если хотите начать с небольшого бюджета:{" "}
              <Link href="/ru/maqolalar/talabalar-uchun-arzon-telegram-stars-kam-byudjet" className="text-primary font-semibold hover:underline">Stars при маленьком бюджете</Link>.
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
                  Stars для вашего канала и проекта — через <strong className="text-white">@premiumsendbot</strong> в сумах, 5000 Stars за <strong className="text-white">1 500 000 сум</strong>, за несколько минут.
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
