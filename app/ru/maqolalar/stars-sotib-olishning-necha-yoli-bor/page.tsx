import type { Metadata } from "next";
import Link from "next/link";
import { ogBaseRu } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title:
    "Сколько способов купить Telegram Stars — какой удобен в Узбекистане?",
  description:
    "3 способа купить Telegram Stars: официальное приложение (доллары, международная карта), Fragment.com (TON крипто) и локальный реселлер (в сумах, Uzcard/Humo/Click/Payme). Какой подходит именно вам — полное сравнение.",
  keywords: [
    "где купить telegram stars",
    "способы покупки telegram stars",
    "fragment vs реселлер stars",
    "telegram stars в узбекистане",
    "premiumsendbot stars",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/ru/maqolalar/stars-sotib-olishning-necha-yoli-bor",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/stars-sotib-olishning-necha-yoli-bor",
      ru: "https://premiumsend.uz/ru/maqolalar/stars-sotib-olishning-necha-yoli-bor",
      "x-default":
        "https://premiumsend.uz/maqolalar/stars-sotib-olishning-necha-yoli-bor",
    },
  },
  openGraph: {
    ...ogBaseRu,
    title: "Сколько способов купить Telegram Stars существует?",
    description:
      "3 способа: официальное приложение, Fragment, локальный реселлер. Какой удобен в Узбекистане — сравнение и таблица решения.",
    url: "https://premiumsend.uz/ru/maqolalar/stars-sotib-olishning-necha-yoli-bor",
    type: "article",
    publishedTime: "2026-09-12",
  },
};

const PACKAGES = [
  { amount: 50, price: 15000 },
  { amount: 100, price: 30000 },
  { amount: 500, price: 150000 },
  { amount: 1000, price: 300000, popular: true },
];

export default function ArticleStarsSotibOlishningNechaYoliBorRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Сколько способов купить Telegram Stars — какой удобен в Узбекистане?",
    description:
      "Сравнение трёх способов покупки Telegram Stars (официальное приложение, Fragment, локальный реселлер) для пользователя из Узбекистана.",
    datePublished: "2026-09-12",
    dateModified: "2026-09-12",
    author: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    publisher: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    mainEntityOfPage:
      "https://premiumsend.uz/ru/maqolalar/stars-sotib-olishning-necha-yoli-bor",
    inLanguage: "ru",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько способов купить Telegram Stars существует?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Три: (1) официальное приложение Telegram (через App Store/Google Play, в долларах, требует международную Visa/Mastercard), (2) Fragment.com (через блокчейн TON, требует крипто-кошелёк), (3) локальный реселлер вроде @premiumsendbot (в сумах, картой Uzcard/Humo/Click/Payme, без конвертации валюты).",
        },
      },
      {
        "@type": "Question",
        name: "Какой способ удобнее всего в Узбекистане?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Если нет международной Visa/Mastercard или TON-кошелька, локальный реселлер (@premiumsendbot) — самый удобный: платите картой Uzcard или Humo напрямую в сумах, без конвертации валюты.",
        },
      },
      {
        "@type": "Question",
        name: "В чём минус покупки Stars через официальное приложение?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Цена считается в долларах или евро, принимаются только международные Visa/Mastercard — карты Uzcard и Humo не подключены к этой системе и не работают.",
        },
      },
      {
        "@type": "Question",
        name: "Что нужно для покупки Stars через Fragment.com?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Крипто-кошелёк TON с достаточным балансом. Для обычного пользователя без опыта работы с криптовалютой это дополнительное препятствие и требует технических знаний.",
        },
      },
      {
        "@type": "Question",
        name: "Stars, купленные через локального реселлера, настоящие?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Локализован только этап оплаты — Stars на вашем балансе являются официальным балансом Telegram, их можно свободно использовать в любом боте, канале или мини-приложении.",
        },
      },
      {
        "@type": "Question",
        name: "Цена в трёх способах отличается?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, существенно — в официальном приложении добавляется комиссия платформы Apple/Google (~30%), на Fragment цена плавающая и зависит от курса TON, у локального реселлера (например, в Premium Send) — фиксированный линейный тариф 300 сум/star без скрытых комиссий.",
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
      { "@type": "ListItem", position: 3, name: "Сколько способов купить Stars", item: "https://premiumsend.uz/ru/maqolalar/stars-sotib-olishning-necha-yoli-bor" },
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
        <span className="text-foreground font-medium">Сколько способов купить Stars</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">Сравнение</span>
            <time className="text-xs text-muted" dateTime="2026-09-12">12 сентября 2026</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Сколько способов купить Telegram Stars — какой удобен в Узбекистане?
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-sm font-bold text-primary mb-2">КОРОТКО</p>
            <p className="text-foreground leading-relaxed font-medium">
              Существует <strong>3 способа</strong> купить Telegram Stars: официальное приложение (App Store/Google Play, в долларах, нужна международная карта), Fragment.com (нужен TON-кошелёк) и локальный реселлер —{" "}
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="text-primary hover:underline">@premiumsendbot</Link>{" "}
              (в сумах, Uzcard/Humo/Click/Payme). Без международной карты или криптовалюты третий способ — самый удобный для Узбекистана.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Все три способа приводят к одному результату — официальному балансу Stars в вашем аккаунте Telegram. Разница только в процессе оплаты: в какой валюте, какой картой и с какими дополнительными препятствиями вы платите.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Способ 1: официальное приложение Telegram (App Store / Google Play)</h2>
            <p className="text-muted leading-relaxed mb-4">
              В самом приложении Telegram есть раздел покупки Stars — но оплата проходит через внутреннюю платёжную систему Apple или Google. Цена считается в долларах или евро, принимаются только международные <strong>Visa/Mastercard</strong> (или через Apple Pay/Google Pay с привязанной международной картой).
            </p>
            <p className="text-muted leading-relaxed">
              Проблема: карты <strong>Uzcard и Humo</strong> в Узбекистане не подключены к международной карточной сети, поэтому этот способ с ними просто не работает. Кроме того, комиссия платформы Apple/Google (~30%) часто уже заложена в цену.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Способ 2: Fragment.com (блокчейн TON)</h2>
            <p className="text-muted leading-relaxed mb-4">
              Fragment — официальная платформа, связанная с Telegram, где Stars покупаются за криптовалюту TON. Для этого нужен крипто-кошелёк (например, Tonkeeper) и достаточный баланс TON в нём.
            </p>
            <p className="text-muted leading-relaxed">
              Для пользователя, знакомого с криптовалютой, это может быть удобно, но для обычного пользователя открытие кошелька, покупка TON и отслеживание курса — дополнительное техническое препятствие и затраты времени.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Способ 3: локальный реселлер (в сумах, местной картой)</h2>
            <p className="text-muted leading-relaxed mb-4">
              Сервис вроде <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="text-primary font-semibold hover:underline">@premiumsendbot</Link> адаптирует этап оплаты под реалии Узбекистана: вы платите картой <strong>Uzcard, Humo, Click или Payme</strong> напрямую в сумах, а сервис зачисляет Stars на ваш аккаунт. Международная карта или криптовалюта не нужны.
            </p>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto mb-4">
              <table className="w-full text-sm min-w-[380px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">Пакет</th>
                    <th className="p-4 text-left font-bold">Цена (сум)</th>
                  </tr>
                </thead>
                <tbody>
                  {PACKAGES.map((p) => (
                    <tr key={p.amount} className={`border-b border-card-border last:border-b-0 ${p.popular ? "bg-primary-light/20" : ""}`}>
                      <td className={`p-4 font-medium ${p.popular ? "text-primary font-bold" : ""}`}>{p.amount} Stars{p.popular ? " ⭐" : ""}</td>
                      <td className="p-4">{p.price.toLocaleString("en-US")} сум</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              300 сум/star, линейный тариф. Все 7 пакетов и полный процесс покупки:{" "}
              <Link href="/ru/maqolalar/telegram-stars-somda-uzs-sotib-olish" className="text-primary font-semibold hover:underline">руководство по покупке Stars в сумах</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Какой способ подходит вам? Таблица решения</h2>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto">
              <table className="w-full text-sm min-w-[560px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">Критерий</th>
                    <th className="p-4 text-left font-bold">Официальное приложение</th>
                    <th className="p-4 text-left font-bold">Fragment</th>
                    <th className="p-4 text-left font-bold text-primary">Локальный реселлер</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Оплата Uzcard/Humo</td>
                    <td className="p-4">Нет</td>
                    <td className="p-4">Нет</td>
                    <td className="p-4 font-semibold text-primary">Да</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Нужна межд. карта/крипто</td>
                    <td className="p-4">Visa/Mastercard</td>
                    <td className="p-4">TON-кошелёк</td>
                    <td className="p-4 font-semibold text-primary">Не нужно</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Валюта цены</td>
                    <td className="p-4">USD/EUR</td>
                    <td className="p-4">TON (плавающая)</td>
                    <td className="p-4 font-semibold text-primary">Сум (фиксированная)</td>
                  </tr>
                  <tr className="last:border-b-0">
                    <td className="p-4 font-medium">Сложность настройки</td>
                    <td className="p-4">Средняя</td>
                    <td className="p-4">Высокая (нужны крипто-знания)</td>
                    <td className="p-4 font-semibold text-primary">Низкая</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <div className="bg-primary-light/40 border border-primary/20 rounded-2xl p-6 md:p-8 text-center">
              <p className="text-foreground text-lg leading-relaxed mb-4">
                Самый простой из трёх способов — через <strong>@premiumsendbot</strong>, в сумах, за несколько минут.
              </p>
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-2xl hover:shadow-xl transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                Купить Stars
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Часто задаваемые вопросы (FAQ)</h2>
            <div className="space-y-4">
              {[
                { q: "Сколько способов купить Telegram Stars существует?", a: "Три: официальное приложение (доллары, международная карта), Fragment.com (TON крипто) и локальный реселлер (в сумах)." },
                { q: "Какой способ удобнее всего в Узбекистане?", a: "Без международной карты или TON-кошелька — локальный реселлер (@premiumsendbot), картой Uzcard/Humo напрямую в сумах." },
                { q: "В чём минус официального приложения?", a: "Цена в долларах, принимаются только международные Visa/Mastercard — Uzcard/Humo не работают." },
                { q: "Что нужно для покупки через Fragment.com?", a: "TON-кошелёк с достаточным балансом — дополнительное техническое препятствие для обычного пользователя." },
                { q: "Stars от локального реселлера настоящие?", a: "Да, локализован только этап оплаты — Stars являются официальным балансом Telegram." },
                { q: "Цена в трёх способах отличается?", a: "Да — комиссия платформы (~30%) в приложении, плавающий курс TON на Fragment, фиксированный тариф у реселлера." },
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
                  Выберите самый простой из трёх способов —{" "}
                  <strong className="text-white">@premiumsendbot</strong>: 50 Stars от <strong className="text-white">15 000 сум</strong>, без международной карты и криптовалюты.
                </p>
                <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
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
