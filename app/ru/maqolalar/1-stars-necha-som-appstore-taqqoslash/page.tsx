import type { Metadata } from "next";
import Link from "next/link";
import { ogBaseRu } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title: "Сколько стоит 1 Telegram Stars в сумах — сравнение с ценой App Store",
  description:
    "В Premium Send 1 Stars — 300 сум. Официально в App Store 1000 Stars стоит $19.99 (≈235 сум/star), во Fragment ≈165-177 сум/star — но эти цены нельзя оплатить напрямую из Узбекистана. Честное сравнение и причина.",
  keywords: [
    "1 stars сколько сум",
    "цена telegram stars в сумах",
    "telegram stars цена app store",
    "сравнение цены stars",
    "сколько стоит 1 star",
  ],
  alternates: {
    canonical: "https://premiumsend.uz/ru/maqolalar/1-stars-necha-som-appstore-taqqoslash",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/1-stars-necha-som-appstore-taqqoslash",
      ru: "https://premiumsend.uz/ru/maqolalar/1-stars-necha-som-appstore-taqqoslash",
      "x-default": "https://premiumsend.uz/maqolalar/1-stars-necha-som-appstore-taqqoslash",
    },
  },
  openGraph: {
    ...ogBaseRu,
    title: "Сколько стоит 1 Telegram Stars в сумах — сравнение с ценой App Store",
    description:
      "В Premium Send 1 Stars — 300 сум. Честное сравнение с официальными ценами App Store и Fragment — разница между цифрой и практикой.",
    url: "https://premiumsend.uz/ru/maqolalar/1-stars-necha-som-appstore-taqqoslash",
    type: "article",
    publishedTime: "2026-09-16",
  },
};

const PACKAGES = [
  { amount: 50, price: 15000 },
  { amount: 100, price: 30000 },
  { amount: 250, price: 75000 },
  { amount: 500, price: 150000 },
  { amount: 1000, price: 300000, popular: true },
  { amount: 2500, price: 750000 },
  { amount: 5000, price: 1500000 },
];

export default function Article1StarsNechaSomAppstoreTaqqoslashRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Сколько стоит 1 Telegram Stars в сумах — сравнение с ценой App Store",
    description:
      "Честное сравнение цены 1 Telegram Stars в Premium Send, App Store и Fragment — цифры и разница в практическом использовании.",
    datePublished: "2026-09-16",
    dateModified: "2026-09-16",
    author: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    publisher: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    mainEntityOfPage: "https://premiumsend.uz/ru/maqolalar/1-stars-necha-som-appstore-taqqoslash",
    inLanguage: "ru",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько стоит 1 Telegram Stars в сумах?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "В Premium Send 1 Stars стоит 300 сум (единый линейный тариф для любого пакета). 50 Stars — 15 000 сум, 1000 Stars — 300 000 сум.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько официально стоит 1 Stars в App Store?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "В американском App Store 1000 Stars стоит $19.99, то есть один Stars примерно $0.02 — по текущему курсу (~11 770 сум/$) это около 235 сум/star. Но эту цену нельзя напрямую оплатить из Узбекистана картой Uzcard или Humo.",
        },
      },
      {
        "@type": "Question",
        name: "Почему цена Premium Send кажется выше, чем в App Store?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Потому что цена App Store $19.99/1000 рассчитана для международных Visa/Mastercard и официальной инфраструктуры App Store — в Узбекистане её нельзя оплатить картой Uzcard/Humo. На практике нужна иностранная карта или Apple ID другой страны, что добавляет сложности и расходов. Цена Premium Send (300 сум) — это цена, которая реально работает напрямую с местной картой, без дополнительных барьеров.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли купить дешевле через Fragment.com?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Официально да — на Fragment 1 Stars стоит примерно $0.014-0.015 (~165-177 сум), это самый дешёвый официальный вариант. Но оплата принимается только криптовалютой TON — сначала нужно купить TON, открыть крипто-кошелёк и разобраться с операциями в сети, что неудобно для большинства пользователей.",
        },
      },
      {
        "@type": "Question",
        name: "Меняется ли цена Telegram Stars со временем?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "В Premium Send цена 300 сум/star стабильна. Официальная цена в App Store и Fragment может меняться в зависимости от курса валют и политики магазина, так как она привязана к доллару/TON.",
        },
      },
      {
        "@type": "Question",
        name: "Какой способ практичнее всего для жителя Узбекистана?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Оплата местной картой в сумах — потому что оба официальных способа имеют дополнительный барьер: App Store требует иностранную карту/Apple ID, Fragment — умение работать с криптовалютой TON.",
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
      { "@type": "ListItem", position: 3, name: "1 Stars в сумах — сравнение с App Store", item: "https://premiumsend.uz/ru/maqolalar/1-stars-necha-som-appstore-taqqoslash" },
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
        <span className="text-foreground font-medium">1 Stars в сумах — сравнение с App Store</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">Руководство по ценам</span>
            <time className="text-xs text-muted" dateTime="2026-09-16">16 сентября 2026</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Сколько стоит 1 Telegram Stars в сумах — сравнение с ценой App Store
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-sm font-bold text-primary mb-2">КОРОТКО</p>
            <p className="text-foreground leading-relaxed font-medium">
              В Premium Send 1 Stars — <strong>300 сум</strong> (линейный тариф). Официально в американском App Store 1000 Stars стоит <strong>$19.99</strong> (~1 star ≈ 235 сум по текущему курсу) — но эту цену нельзя напрямую оплатить из Узбекистана картой Uzcard или Humo, нужна иностранная карта или Apple ID другой страны. Поэтому важнее сравнивать не цифры, а что реально работает для кого.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            На вопрос «сколько стоит 1 Stars» нет единого ответа — цена зависит от того, где вы покупаете. Ниже — честное сравнение цен трёх официальных источников (Premium Send, App Store, Fragment.com) и объяснение, почему прямое сравнение цифр может ввести в заблуждение.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Сколько стоит 1 Stars в Premium Send?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Все пакеты рассчитываются по единому тарифу <strong>300 сум/star</strong> — цена за star одинакова для любого количества:
            </p>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto mb-4">
              <table className="w-full text-sm min-w-[420px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">Пакет</th>
                    <th className="p-4 text-left font-bold">Цена (сум)</th>
                  </tr>
                </thead>
                <tbody>
                  {PACKAGES.map((p) => (
                    <tr key={p.amount} className={`border-b border-card-border last:border-b-0 ${p.popular ? "bg-primary-light/20" : ""}`}>
                      <td className={`p-4 font-medium ${p.popular ? "text-primary font-bold" : ""}`}>{p.amount} Stars{p.popular ? " ⭐ (самый популярный)" : ""}</td>
                      <td className="p-4">{p.price.toLocaleString("en-US")} сум</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              Полная таблица цен — на{" "}
              <Link href="/ru/stars" className="text-primary hover:underline">странице Stars</Link>. Оплата картой Uzcard, Humo, Click или Payme в сумах, через @premiumsendbot.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Сколько официально стоит 1 Stars в App Store?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Официальная цена, указанная внутри американского App Store: 1000 Stars — <strong>$19.99</strong>, то есть один Stars примерно <strong>$0.02</strong>. По текущему курсу USD/UZS (~11 770 сум/$, по состоянию на сентябрь 2026) это около <strong>235 сум/star</strong>.
            </p>
            <p className="text-muted leading-relaxed">
              В эту цену уже включена 30% комиссия магазина Apple/Google — цена устанавливается Telegram глобально и может немного отличаться по странам.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Почему эти цены сложно сравнивать «на равных»?</h2>
            <p className="text-muted leading-relaxed mb-4">
              По цифрам цена App Store $0.02/star (~235 сум) выглядит ниже, чем 300 сум/star у Premium Send. Но это сравнение неполное — потому что пользователь из Узбекистана не может реально заплатить эту цену:
            </p>
            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li>Uzcard и Humo вообще <strong>не добавляются</strong> как способ оплаты в Apple ID или Google Play — подробнее:{" "}
                <Link href="/ru/maqolalar/uzcard-humo-app-store-play-market-ishlamaydi" className="text-primary hover:underline">почему Uzcard/Humo не работают в App Store/Play Market</Link>
              </li>
              <li>Для оплаты нужна иностранная (международная Visa/Mastercard) карта или Apple ID другой страны</li>
              <li>Получить иностранную карту для большинства людей на практике сложно или невозможно</li>
              <li>Даже с иностранной картой банк может списать дополнительную комиссию за конвертацию/международную транзакцию</li>
            </ul>
            <p className="text-muted leading-relaxed">
              То есть «бумажная» цена App Store кажется дешевле, но напрямую оплатить её из Узбекистана местными средствами нельзя — поэтому на первый план выходит не сравнение цифр, а вопрос «смогу ли я вообще заплатить».
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Сколько стоит через Fragment.com?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Fragment.com — официальный TON-криптомаркет Telegram, где Stars продаются по самой низкой официальной цене: примерно <strong>$0.014-0.015/star</strong> (по текущему курсу ~165-177 сум/star). Но оплата принимается только криптовалютой TON.
            </p>
            <p className="text-muted leading-relaxed">
              Чтобы воспользоваться этим способом, сначала нужно купить TON, открыть крипто-кошелёк (например TON Wallet) и разобраться с операциями в сети — для технически неподготовленного пользователя это дополнительный барьер.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Сравнение трёх источников</h2>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto mb-4">
              <table className="w-full text-sm min-w-[560px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">Источник</th>
                    <th className="p-4 text-left font-bold">Цена 1 Stars</th>
                    <th className="p-4 text-left font-bold">Способ оплаты</th>
                    <th className="p-4 text-left font-bold">Работает ли из Узбекистана</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-card-border bg-primary-light/20">
                    <td className="p-4 font-bold text-primary">Premium Send</td>
                    <td className="p-4 font-bold text-primary">300 сум</td>
                    <td className="p-4">Uzcard/Humo/Click/Payme, в сумах</td>
                    <td className="p-4">✅ Да, напрямую</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">App Store (официально, магазин США)</td>
                    <td className="p-4">~235 сум ($0.02)</td>
                    <td className="p-4">Только международные Visa/Mastercard</td>
                    <td className="p-4">❌ Нет — местная карта отклоняется</td>
                  </tr>
                  <tr className="last:border-b-0">
                    <td className="p-4 font-medium">Fragment.com (официально)</td>
                    <td className="p-4">~165-177 сум ($0.014-0.015)</td>
                    <td className="p-4">Криптовалюта TON</td>
                    <td className="p-4">❌ Не напрямую — нужен крипто-кошелёк</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Покупайте Stars в сумах, без лишних барьеров — <strong className="text-white">@premiumsendbot</strong>, за несколько минут.
              </p>
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                Купить Stars
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Итог — разница между цифрой и практикой</h2>
            <p className="text-muted leading-relaxed mb-4">
              По чистым цифрам официальные цены App Store и Fragment выглядят дешевле «на бумаге». Но оба варианта требуют дополнительный барьер для пользователя из Узбекистана: App Store — иностранную карту/Apple ID, Fragment — криптовалюту TON. Цена Premium Send (300 сум/star) — это единственный вариант, который работает напрямую местной картой, в сумах, без дополнительных инструментов.
            </p>
            <p className="text-muted leading-relaxed">
              Полное сравнение всех трёх способов (какой подходит в какой ситуации):{" "}
              <Link href="/ru/maqolalar/stars-sotib-olishning-necha-yoli-bor" className="text-primary font-semibold hover:underline">«Сколько способов купить Telegram Stars»</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Часто задаваемые вопросы (FAQ)</h2>
            <div className="space-y-4">
              {[
                { q: "Сколько стоит 1 Telegram Stars в сумах?", a: "В Premium Send 1 Stars — 300 сум, линейный тариф." },
                { q: "Сколько официально стоит 1 Stars в App Store?", a: "В американском магазине 1000 Stars — $19.99, то есть ~$0.02/star (~235 сум), но напрямую из Узбекистана не оплатить." },
                { q: "Почему цена Premium Send кажется выше, чем в App Store?", a: "Цена App Store требует международную карту и напрямую не оплачивается из Узбекистана — практическая доступность важнее цифры." },
                { q: "Можно ли купить дешевле через Fragment?", a: "Официально да, но нужна криптовалюта TON и крипто-кошелёк." },
                { q: "Меняется ли цена Telegram Stars со временем?", a: "В Premium Send стабильна, у App Store/Fragment может меняться с курсом валют." },
                { q: "Какой способ практичнее для жителя Узбекистана?", a: "Оплата местной картой в сумах — у других способов есть дополнительный барьер." },
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
                  Без иностранной карты и без криптовалюты — <strong className="text-white">@premiumsendbot</strong>: 50 Stars от <strong className="text-white">15 000 сум</strong>, в сумах, за несколько минут.
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
