import type { Metadata } from "next";
import Link from "next/link";
import { ogBaseRu } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title:
    "Купить Telegram Stars в сумах (UZS) — полное руководство без конвертации валюты",
  description:
    "Купить Telegram Stars в Узбекистане напрямую в сумах — Uzcard/Humo/Click/Payme. 300 сум/star линейная цена, пакеты от 50 до 5000, доставка за несколько минут через @premiumsendbot.",
  keywords: [
    "купить telegram stars в сумах",
    "telegram stars uzs",
    "telegram stars в узбекистане",
    "цена telegram stars в сумах",
    "telegram stars uzcard humo click payme",
    "premiumsendbot stars",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/ru/maqolalar/telegram-stars-somda-uzs-sotib-olish",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/telegram-stars-somda-uzs-sotib-olish",
      ru: "https://premiumsend.uz/ru/maqolalar/telegram-stars-somda-uzs-sotib-olish",
      "x-default":
        "https://premiumsend.uz/maqolalar/telegram-stars-somda-uzs-sotib-olish",
    },
  },
  openGraph: {
    ...ogBaseRu,
    title: "Купить Telegram Stars в сумах (UZS) — полное руководство",
    description:
      "300 сум/star линейная цена, Uzcard/Humo/Click/Payme, без конвертации валюты. Stars за несколько минут через @premiumsendbot.",
    url: "https://premiumsend.uz/ru/maqolalar/telegram-stars-somda-uzs-sotib-olish",
    type: "article",
    publishedTime: "2026-09-06",
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

export default function ArticleStarsSomdaUzsSotibOlishRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Купить Telegram Stars в сумах (UZS) — полное руководство без конвертации валюты",
    description:
      "Как купить Telegram Stars напрямую в сумах местной картой в Узбекистане — цены, способы оплаты и пошаговое руководство.",
    datePublished: "2026-09-06",
    dateModified: "2026-09-06",
    author: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    publisher: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    mainEntityOfPage:
      "https://premiumsend.uz/ru/maqolalar/telegram-stars-somda-uzs-sotib-olish",
    inLanguage: "ru",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Купить Telegram Stars в сумах",
    description: "Пошагово: как купить Telegram Stars в сумах в Узбекистане",
    step: [
      { "@type": "HowToStep", position: 1, name: "Откройте @premiumsendbot", text: "В поиске Telegram введите @premiumsendbot, нажмите /start." },
      { "@type": "HowToStep", position: 2, name: "Откройте Mini App внутри бота", text: "Через кнопку в меню бота откроется Mini App (веб-приложение)." },
      { "@type": "HowToStep", position: 3, name: "Выберите количество Stars", text: "Выберите готовый пакет от 50 до 5000 или введите нужное количество." },
      { "@type": "HowToStep", position: 4, name: "Переведите сумму на указанную карту", text: "Mini App покажет номер карты и точную сумму. Переведите именно эту сумму на эту карту через своё банковское приложение (Uzcard, Humo, Click или Payme)." },
      { "@type": "HowToStep", position: 5, name: "Stars начисляются автоматически", text: "После поступления оплаты Stars за несколько минут автоматически зачисляются в аккаунт." },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Можно ли купить Telegram Stars в Узбекистане в сумах?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Официальное приложение Telegram принимает для Stars только международные Visa/Mastercard (цена в долларах), Fragment требует TON-кошелёк. Через @premiumsendbot Stars покупаются напрямую в сумах, картой Uzcard, Humo, Click или Payme — без валютной конвертации.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько стоит 1 Telegram Star в сумах?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "В Premium Send 1 Star стоит 300 сум — линейный тариф, цена за star одинакова для любого пакета. 50 Stars — 15 000 сум, 1000 Stars — 300 000 сум.",
        },
      },
      {
        "@type": "Question",
        name: "Какие пакеты доступны?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "50, 100, 250, 500, 1000 (самый популярный), 2500 и 5000 Stars готовыми пакетами, либо любое количество на выбор в боте.",
        },
      },
      {
        "@type": "Question",
        name: "Как проходит оплата — безопасны ли данные карты?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "После выбора количества Mini App показывает номер карты и точную сумму. Вы переводите эту сумму на эту карту через своё банковское приложение (Uzcard, Humo, Click или Payme) — номер вашей карты или пароль в бот никогда не вводятся и не запрашиваются.",
        },
      },
      {
        "@type": "Question",
        name: "Где Stars появятся после покупки?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "После подтверждения оплаты Stars за несколько минут появляются в разделе Настройки → Telegram Stars в приложении Telegram.",
        },
      },
      {
        "@type": "Question",
        name: "Это настоящие, официальные Telegram Stars?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Локализован только этап оплаты — Stars на вашем балансе являются официальным балансом Telegram, их можно использовать в любом боте, канале или мини-приложении.",
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
      { "@type": "ListItem", position: 3, name: "Купить Stars в сумах", item: "https://premiumsend.uz/ru/maqolalar/telegram-stars-somda-uzs-sotib-olish" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-muted">
        <Link href="/ru" className="hover:text-primary">Главная</Link>
        <span className="mx-2">/</span>
        <Link href="/ru/maqolalar" className="hover:text-primary">Статьи</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">Купить Stars в сумах</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">Руководство по оплате</span>
            <time className="text-xs text-muted" dateTime="2026-09-06">6 сентября 2026</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Купить Telegram Stars в сумах (UZS) — полное руководство без конвертации валюты
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-sm font-bold text-primary mb-2">КОРОТКО</p>
            <p className="text-foreground leading-relaxed font-medium">
              Telegram Stars можно купить в Узбекистане напрямую <strong>в сумах</strong> —{" "}
              <Link href="https://telegram.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@premiumsendbot</Link>{" "}
              принимает Uzcard, Humo, Click или Payme. Цена — <strong>300 сум/star</strong> (50 Stars = 15 000 сум, 1000 Stars = 300 000 сум), без валютной конвертации и без иностранной карты. После оплаты Stars поступают за несколько минут.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            При покупке Stars через официальное приложение Telegram цена считается в долларах и требуется международная Visa/Mastercard. Через Fragment.com нужна криптовалюта TON. Для многих пользователей из Узбекистана оба варианта — лишнее препятствие.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Ниже — полный процесс покупки Stars напрямую в сумах местной картой: цены, способы оплаты и пошаговое руководство.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Почему для оплаты Stars в сумах нужен отдельный сервис?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Telegram Stars продаются через два официальных канала: <strong>само приложение Telegram</strong> (через платёжную инфраструктуру App Store/Google Play) и <strong>Fragment.com</strong> (через блокчейн TON). Оба — международные системы: первый считает в долларах/евро и требует международную карту (Visa/Mastercard), второй требует криптокошелёк и токен TON.
            </p>
            <p className="text-muted leading-relaxed">
              Uzcard и Humo — внутренние платёжные системы Узбекистана, не подключённые ни к международной карточной сети, ни к блокчейну TON. Поэтому через оба официальных канала напрямую местной картой оплатить нельзя. Решение — местный сервис вроде @premiumsendbot: вы платите в сумах, сервис подключает Stars к вашему аккаунту.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Цена Telegram Stars в сумах — все пакеты</h2>
            <p className="text-muted leading-relaxed mb-6">
              Цена <strong>300 сум/star</strong> — линейный тариф, то есть цена за star одинакова для любого пакета:
            </p>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto mb-6">
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
              Если нужно больше — в боте можно ввести любое количество на выбор. Отдельная страница для каждого пакета:{" "}
              <Link href="/ru/50-stars" className="text-primary hover:underline">50</Link>,{" "}
              <Link href="/ru/100-stars" className="text-primary hover:underline">100</Link>,{" "}
              <Link href="/ru/250-stars" className="text-primary hover:underline">250</Link>,{" "}
              <Link href="/ru/500-stars" className="text-primary hover:underline">500</Link>,{" "}
              <Link href="/ru/1000-stars" className="text-primary hover:underline">1000</Link>,{" "}
              <Link href="/ru/2500-stars" className="text-primary hover:underline">2500</Link>,{" "}
              <Link href="/ru/5000-stars" className="text-primary hover:underline">5000 Stars</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Как работает оплата в сумах? Пошагово</h2>
            <div className="space-y-4 mb-6">
              {[
                { step: "1", title: "Откройте @premiumsendbot", desc: "В поиске Telegram введите @premiumsendbot, нажмите /start." },
                { step: "2", title: "Откройте Mini App внутри бота", desc: "Через кнопку в меню бота откроется Mini App (веб-приложение)." },
                { step: "3", title: "Выберите количество Stars", desc: "Готовый пакет от 50 до 5000 или введите нужное количество." },
                { step: "4", title: "Переведите сумму на указанную карту", desc: "Mini App покажет номер карты и точную сумму. Переведите её через своё банковское приложение (Uzcard, Humo, Click или Payme)." },
                { step: "5", title: "Stars начисляются автоматически", desc: "После поступления оплаты Stars за несколько минут появятся в Telegram → Настройки → Stars." },
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
              Отдельные руководства по способу оплаты:{" "}
              <Link href="/ru/maqolalar/telegram-stars-uzcard-orqali" className="text-primary font-semibold hover:underline">Uzcard</Link>,{" "}
              <Link href="/ru/maqolalar/telegram-stars-humo-orqali" className="text-primary font-semibold hover:underline">Humo</Link>,{" "}
              <Link href="/ru/maqolalar/telegram-stars-click-orqali" className="text-primary font-semibold hover:underline">Click</Link>,{" "}
              <Link href="/ru/maqolalar/telegram-stars-payme-orqali" className="text-primary font-semibold hover:underline">Payme</Link>.
            </p>
          </section>

          <section>
            <div className="bg-primary-light/40 border border-primary/20 rounded-2xl p-6 md:p-8 text-center">
              <p className="text-foreground text-lg leading-relaxed mb-4">
                Без иностранной карты и криптовалюты, напрямую в сумах. <strong>@premiumsendbot</strong> зачисляет Stars за несколько минут.
              </p>
              <Link href="https://telegram.me/premiumsendbot" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-2xl hover:shadow-xl transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                Купить через PremiumSend
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Безопасны ли данные моей карты?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Mini App только показывает номер карты и точную сумму. Деньги вы переводите <strong>через своё банковское приложение</strong> (Uzcard, Humo, Click или Payme) — номер карты, CVV или пароль никогда не вводятся в бот или Mini App и не сохраняются.
            </p>
            <p className="text-muted leading-relaxed">
              Общие критерии проверки реселлера (оферта, канал связи, отзывы) — в{" "}
              <Link href="/ru/maqolalar/telegram-premium-ishonchli-saytdan-sotib-olish" className="text-primary font-semibold hover:underline">статье «Покупка на надёжном сайте»</Link>{" "}
              — критерии одинаковы для Premium и Stars.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Часто задаваемые вопросы (FAQ)</h2>
            <div className="space-y-4">
              {[
                { q: "Можно ли купить Telegram Stars в Узбекистане в сумах?", a: "Да. Через @premiumsendbot Stars покупаются напрямую в сумах, картой Uzcard/Humo/Click/Payme — без валютной конвертации." },
                { q: "Сколько стоит 1 Telegram Star в сумах?", a: "300 сум — линейный тариф, цена одинакова для любого пакета. 50 Stars = 15 000 сум, 1000 Stars = 300 000 сум." },
                { q: "Какие пакеты доступны?", a: "50, 100, 250, 500, 1000 (самый популярный), 2500, 5000 Stars или любое количество на выбор в боте." },
                { q: "Как проходит оплата — безопасны ли данные карты?", a: "Mini App показывает номер карты и сумму, вы переводите через своё банковское приложение — данные карты в бот не вводятся и не сохраняются." },
                { q: "Где Stars появятся после покупки?", a: "За несколько минут в Telegram → Настройки → Stars." },
                { q: "Это настоящие, официальные Telegram Stars?", a: "Да, локализован только этап оплаты — Stars являются официальным балансом Telegram." },
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
                  Telegram Stars — теперь без иностранной карты и криптовалюты, напрямую в сумах.{" "}
                  <strong className="text-white">@premiumsendbot</strong>: 50 Stars от <strong className="text-white">15 000 сум</strong>, за несколько минут на вашем балансе.
                </p>
                <Link href="https://telegram.me/premiumsendbot" target="_blank" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">
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
