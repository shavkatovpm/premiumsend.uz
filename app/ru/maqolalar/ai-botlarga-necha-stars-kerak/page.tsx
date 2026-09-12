import type { Metadata } from "next";
import Link from "next/link";
import { ogBaseRu } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title:
    "Сколько Telegram Stars нужно для запроса к AI-боту?",
  description:
    "Цена Stars для AI-ботов в Telegram (ChatGPT, Claude и другие) отличается от бота к боту — единого официального тарифа нет. Как посчитать нужный запас Stars и купить их в сумах через @premiumsendbot.",
  keywords: [
    "stars для ai ботов",
    "цена telegram stars ai бот",
    "сколько stars нужно",
    "telegram stars chatgpt",
    "chatgpt telegram stars",
    "premiumsendbot stars",
  ],
  alternates: {
    canonical: "https://premiumsend.uz/ru/maqolalar/ai-botlarga-necha-stars-kerak",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/ai-botlarga-necha-stars-kerak",
      ru: "https://premiumsend.uz/ru/maqolalar/ai-botlarga-necha-stars-kerak",
      "x-default": "https://premiumsend.uz/maqolalar/ai-botlarga-necha-stars-kerak",
    },
  },
  openGraph: {
    ...ogBaseRu,
    title: "Сколько Telegram Stars нужно для запроса к AI-боту?",
    description:
      "Единого тарифа нет — каждый бот сам устанавливает цену. Как посчитать нужный запас Stars и купить их через @premiumsendbot.",
    url: "https://premiumsend.uz/ru/maqolalar/ai-botlarga-necha-stars-kerak",
    type: "article",
    publishedTime: "2026-09-12",
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

export default function ArticleAiBotlargaNechaStarsKerakRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Сколько Telegram Stars нужно для запроса к AI-боту?",
    description:
      "Как AI-боты в Telegram устанавливают цену в Stars, почему нет единого тарифа и как посчитать нужный запас Stars.",
    datePublished: "2026-09-12",
    dateModified: "2026-09-12",
    author: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    publisher: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    mainEntityOfPage:
      "https://premiumsend.uz/ru/maqolalar/ai-botlarga-necha-stars-kerak",
    inLanguage: "ru",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько Stars нужно для одного запроса к AI-боту?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Единого ответа нет — Telegram позволяет владельцам ботов самим устанавливать цену в Stars (через sendInvoice и валюту XTR в Bot API). На практике за простой текстовый запрос обычно берут 5-20 Stars, за генерацию изображения или сложную функцию — 50-200 Stars, но точная цена зависит от конкретного бота.",
        },
      },
      {
        "@type": "Question",
        name: "Почему Telegram не установил официальную стандартную цену для AI-ботов?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Telegram Stars — это общая платёжная инфраструктура для ботов и мини-приложений, похожая на встроенные покупки в App Store. Telegram обеспечивает только сам платёж (покупку и перевод Stars боту), а цену каждый разработчик бота устанавливает сам, исходя из своих затрат на AI-модель и ценности функции.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько Stars запасти на 10-20 AI-запросов?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "При среднем расходе 10-20 Stars за запрос на 10-20 запросов обычно хватает 100-400 Stars. В Premium Send 100 Stars стоит 30 000 сум, 500 Stars — 150 000 сум. Точное число зависит от цены конкретного бота — проверьте его прайс (обычно команда /price или раздел настроек).",
        },
      },
      {
        "@type": "Question",
        name: "Перестанет ли AI-бот работать, если Stars закончатся?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, большинство платных AI-ботов и мини-приложений не выполнят новый запрос при недостаточном балансе или сразу попросят пополнить его.",
        },
      },
      {
        "@type": "Question",
        name: "Как купить Telegram Stars для AI-ботов в Узбекистане?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Через @premiumsendbot — картой Uzcard, Humo, Click или Payme, в сумах, без конвертации валюты. Доступны готовые пакеты от 50 до 5000 Stars, после оплаты Stars поступают на аккаунт за несколько минут и работают в любом боте.",
        },
      },
      {
        "@type": "Question",
        name: "Работают ли купленные Stars в другом AI-боте?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Stars — это общий баланс вашего аккаунта Telegram, он одинаков независимо от того, где куплен. Тратить его можно в любом боте, канале или мини-приложении — отдельного вида «Stars для AI-ботов» не существует.",
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
      { "@type": "ListItem", position: 3, name: "Сколько Stars нужно для AI-ботов", item: "https://premiumsend.uz/ru/maqolalar/ai-botlarga-necha-stars-kerak" },
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
        <span className="text-foreground font-medium">Сколько Stars нужно для AI-ботов</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">Руководство по использованию</span>
            <time className="text-xs text-muted" dateTime="2026-09-12">12 сентября 2026</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Сколько Telegram Stars нужно для запроса к AI-боту?
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-sm font-bold text-primary mb-2">КОРОТКО</p>
            <p className="text-foreground leading-relaxed font-medium">
              Единого официального тарифа <strong>нет</strong> — Telegram позволяет разработчикам ботов самим устанавливать цену в Stars. На практике простой текстовый AI-запрос обычно стоит <strong>5-20 Stars</strong>, более сложные функции (генерация изображений, длинный анализ) — <strong>50-200 Stars</strong>, но точная цена зависит от конкретного бота. Купить Stars впрок можно через{" "}
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="text-primary hover:underline">@premiumsendbot</Link> — в сумах, картой Uzcard/Humo/Click/Payme.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            С 2024 года Telegram Stars стали общей внутренней валютой для ботов и мини-приложений — в том числе многие разработчики AI-ботов на базе ChatGPT, Claude и других моделей используют именно её для монетизации. Но на вопрос «сколько стоит один запрос» нет единого ответа: цену устанавливает не Telegram, а владелец конкретного бота.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Почему у AI-ботов нет единой стандартной цены?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Telegram Stars — это платёжная инфраструктура, похожая на встроенные покупки в App Store. В Bot API разработчики могут установить любую цену для своего бота через функцию <code>sendInvoice</code> и валюту <code>XTR</code> (Stars). Telegram в этом процессе только проводит платёж (покупка Stars, перевод их боту) — сколько Stars запросить за услугу, не регулирует.
            </p>
            <p className="text-muted leading-relaxed">
              Поэтому цена полностью в руках владельца бота: он учитывает стоимость самой AI-модели, сложность запроса и свою маржу. Два AI-бота с одинаковой функцией могут запрашивать совершенно разное количество Stars.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Типичная цена Stars для AI-запросов</h2>
            <p className="text-muted leading-relaxed mb-4">
              Это не официальный тариф Telegram, а ориентировочные диапазоны, часто встречающиеся на практике у AI-ботов:
            </p>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto mb-4">
              <table className="w-full text-sm min-w-[420px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">Тип функции</th>
                    <th className="p-4 text-left font-bold">Ориентировочная цена</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Простой текстовый вопрос-ответ</td>
                    <td className="p-4">5-20 Stars / запрос</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Генерация изображения или видео</td>
                    <td className="p-4">50-200 Stars / результат</td>
                  </tr>
                  <tr className="border-b border-card-border last:border-b-0">
                    <td className="p-4 font-medium">Месячная безлимитная подписка</td>
                    <td className="p-4">от 200 Stars / месяц</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              Точную цену вашего бота смотрите в самом боте (обычно команда <code>/price</code> или раздел настроек) — цифры выше приведены только для ориентира.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Сколько Stars запасти — практический расчёт</h2>
            <p className="text-muted leading-relaxed mb-4">
              Если бот в среднем берёт 10-20 Stars за запрос:
            </p>
            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li><strong>10 запросов</strong> — примерно 100-200 Stars (в Premium Send 100 Stars = 30 000 сум)</li>
              <li><strong>50 запросов</strong> — примерно 500-1000 Stars (500 Stars = 150 000 сум, 1000 Stars = 300 000 сум)</li>
              <li><strong>Регулярное ежедневное использование</strong> — запас 2500-5000 Stars (750 000-1 500 000 сум) может хватить на несколько месяцев</li>
            </ul>
            <p className="text-muted leading-relaxed mb-6">
              Все пакеты в Premium Send рассчитываются по единому тарифу <strong>300 сум/star</strong> — цена за star одинакова для любого количества:
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
              Отдельная страница для каждого пакета:{" "}
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
            <div className="bg-primary-light/40 border border-primary/20 rounded-2xl p-6 md:p-8 text-center">
              <p className="text-foreground text-lg leading-relaxed mb-4">
                Пополните запас Stars для AI-ботов заранее — через <strong>@premiumsendbot</strong>, в сумах, за несколько минут.
              </p>
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-2xl hover:shadow-xl transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                Купить Stars
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Что будет, если Stars закончатся?</h2>
            <p className="text-muted leading-relaxed">
              Большинство платных AI-ботов и мини-приложений не выполнят новый запрос при недостаточном балансе или сразу предложат пополнить его — переписка не теряется, но следующий запрос требует оплаты. Если пользуетесь ботом активно, удобнее купить Stars с небольшим запасом заранее, чем платить маленькими суммами каждый раз.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Где купить Telegram Stars?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Telegram Stars — это общий баланс вашего аккаунта, он работает одинаково независимо от того, где куплен. Тратить его можно в любом AI-боте, канале или мини-приложении по отдельности. В Узбекистане удобнее всего через{" "}
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="text-primary font-semibold hover:underline">@premiumsendbot</Link>: картой Uzcard, Humo, Click или Payme, напрямую в сумах, без иностранной карты или криптовалюты.
            </p>
            <p className="text-muted leading-relaxed">
              Полный процесс покупки и все способы оплаты:{" "}
              <Link href="/ru/maqolalar/telegram-stars-somda-uzs-sotib-olish" className="text-primary font-semibold hover:underline">руководство по покупке Stars в сумах</Link>,{" "}
              <Link href="/ru/maqolalar/telegram-stars-humo-orqali" className="text-primary font-semibold hover:underline">Humo</Link>,{" "}
              <Link href="/ru/maqolalar/telegram-stars-click-orqali" className="text-primary font-semibold hover:underline">Click</Link>,{" "}
              <Link href="/ru/maqolalar/telegram-stars-payme-orqali" className="text-primary font-semibold hover:underline">Payme</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Часто задаваемые вопросы (FAQ)</h2>
            <div className="space-y-4">
              {[
                { q: "Сколько Stars нужно для одного запроса к AI-боту?", a: "Единого ответа нет — каждый бот сам устанавливает цену. За простой текстовый запрос обычно 5-20 Stars, за генерацию изображения — 50-200 Stars." },
                { q: "Почему у Telegram нет официальной стандартной цены для AI-ботов?", a: "Telegram предоставляет только платёжную инфраструктуру (sendInvoice, валюта XTR), цену устанавливает разработчик каждого бота." },
                { q: "Сколько Stars запасти на 10-20 AI-запросов?", a: "При 10-20 Stars за запрос на 10-20 запросов обычно хватает 100-400 Stars — точное число зависит от цены бота." },
                { q: "Перестанет ли AI-бот работать, если Stars закончатся?", a: "Да, большинство ботов не выполнят новый запрос при недостаточном балансе или попросят пополнить его." },
                { q: "Как купить Telegram Stars для AI-ботов в Узбекистане?", a: "Через @premiumsendbot — картой Uzcard, Humo, Click или Payme, в сумах, за несколько минут." },
                { q: "Работают ли купленные Stars в другом AI-боте?", a: "Да, Stars — общий баланс аккаунта, тратить можно в любом боте." },
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
                  Для AI-ботов, мини-приложений и других функций, требующих Stars —{" "}
                  <strong className="text-white">@premiumsendbot</strong>: 50 Stars от <strong className="text-white">15 000 сум</strong>, за несколько минут на вашем балансе.
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
