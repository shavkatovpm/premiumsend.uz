import type { Metadata } from "next";
import Link from "next/link";
import { ogBaseRu } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title: "Купить Telegram Stars через Humo — прямое руководство",
  description:
    "Купить Telegram Stars картой Humo — 300 сум/star, пакеты от 50 до 5000. Оплата в сумах через @premiumsendbot, доставка за несколько минут, без комиссии.",
  keywords: [
    "telegram stars через humo",
    "купить stars humo картой",
    "telegram stars humo оплата",
    "premiumsendbot humo stars",
  ],
  alternates: {
    canonical: "https://premiumsend.uz/ru/maqolalar/telegram-stars-humo-orqali",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/telegram-stars-humo-orqali",
      ru: "https://premiumsend.uz/ru/maqolalar/telegram-stars-humo-orqali",
      "x-default": "https://premiumsend.uz/maqolalar/telegram-stars-humo-orqali",
    },
  },
  openGraph: {
    ...ogBaseRu,
    title: "Купить Telegram Stars через Humo — прямое руководство",
    description: "Оплата Stars картой Humo в сумах. 300 сум/star, активация за несколько минут, без комиссии.",
    url: "https://premiumsend.uz/ru/maqolalar/telegram-stars-humo-orqali",
    type: "article",
    publishedTime: "2026-09-06",
  },
};

export default function ArticleStarsHumoOrqaliRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Купить Telegram Stars через Humo — прямое руководство",
    description: "Как купить Telegram Stars картой Humo в Узбекистане — цены, процесс оплаты и безопасность.",
    datePublished: "2026-09-06",
    dateModified: "2026-09-06",
    author: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    publisher: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    mainEntityOfPage: "https://premiumsend.uz/ru/maqolalar/telegram-stars-humo-orqali",
    inLanguage: "ru",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Купить Telegram Stars через Humo",
    description: "Пошагово: покупка Telegram Stars картой Humo",
    step: [
      { "@type": "HowToStep", position: 1, name: "Откройте @premiumsendbot", text: "В поиске Telegram введите @premiumsendbot, нажмите /start." },
      { "@type": "HowToStep", position: 2, name: "Выберите пакет Stars", text: "Пакет от 50 до 5000 или введите нужное количество." },
      { "@type": "HowToStep", position: 3, name: "Выберите способ оплаты — Humo", text: "Среди предложенных вариантов нажмите Humo." },
      { "@type": "HowToStep", position: 4, name: "Оплатите картой Humo", text: "Оплатите через приложение Humo, Click или Payme." },
      { "@type": "HowToStep", position: 5, name: "Stars поступают за несколько минут", text: "После подтверждения оплаты Stars автоматически зачисляются." },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Можно ли купить Telegram Stars картой Humo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Через @premiumsendbot Stars покупаются картой Humo в сумах. Поддерживаются все пакеты (от 50 до 5000), без комиссии, зачисление за несколько минут.",
        },
      },
      {
        "@type": "Question",
        name: "Цена Stars через Humo отличается от Uzcard?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет. Цена не зависит от способа оплаты — 300 сум/star одинаково для всех карт. 50 Stars — 15 000 сум, 1000 Stars — 300 000 сум.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли купить Stars картой Humo в официальном приложении Telegram?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет. Официальное приложение Telegram принимает для Stars только международные Visa/Mastercard. Humo — внутренняя платёжная система Узбекистана, не подключённая к этой сети, поэтому нужен местный сервис вроде @premiumsendbot.",
        },
      },
      {
        "@type": "Question",
        name: "Безопасна ли оплата картой Humo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Оплата проходит в собственном официальном приложении Humo, Click или Payme — номер карты или пароль в бот не вводятся и не сохраняются.",
        },
      },
      {
        "@type": "Question",
        name: "Через сколько приходят Stars после оплаты Humo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Обычно за несколько минут после подтверждения оплаты. При технической задержке поможет поддержка бота.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли оплатить Humo большое количество Stars?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, в боте можно ввести любое количество, если это не превышает дневной лимит интернет-платежей Humo. При нехватке лимита его можно временно увеличить в приложении банка.",
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
      { "@type": "ListItem", position: 3, name: "Telegram Stars через Humo", item: "https://premiumsend.uz/ru/maqolalar/telegram-stars-humo-orqali" },
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
        <span className="text-foreground font-medium">Telegram Stars через Humo</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">Руководство</span>
            <time className="text-xs text-muted" dateTime="2026-09-06">6 сентября 2026</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Купить Telegram Stars через Humo — прямое руководство
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-sm font-bold text-primary mb-2">КОРОТКО</p>
            <p className="text-foreground leading-relaxed font-medium">
              Telegram Stars картой Humo покупаются через{" "}
              <Link href="https://telegram.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@premiumsendbot</Link>.
              Цена — <strong>300 сум/star</strong> (50 Stars = 15 000 сум, 1000 Stars = 300 000 сум), как и с Uzcard. Оплата в сумах, без комиссии, зачисление за несколько минут.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Humo — вторая по величине национальная платёжная система Узбекистана. При покупке Telegram Stars владельцы Humo ничем не уступают владельцам Uzcard — доступны все пакеты, цена, процесс и безопасность идентичны.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Ниже — полный процесс покупки Stars картой Humo: зачем нужен отдельный сервис, цены, пошаговое руководство и безопасность.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Почему для Stars с Humo нужен отдельный сервис?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Telegram Stars официально продаются через приложение Telegram (международная Visa/Mastercard) или Fragment.com (криптовалюта TON). Humo — внутренняя платёжная система Узбекистана, не подключённая ни к международной карточной сети, ни к блокчейну TON, поэтому напрямую в обоих официальных каналах не работает.
            </p>
            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">Решение:</strong> местный сервис вроде @premiumsendbot — вы платите Humo в сумах, сервис подключает Stars к вашему аккаунту.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Цена Stars через Humo — все пакеты</h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Цена:</strong> 300 сум/star — одинаково для Humo, Uzcard, Click, Payme. 50 Stars — <strong>15 000 сум</strong>, 100 Stars — <strong>30 000 сум</strong>, 500 Stars — <strong>150 000 сум</strong>, 1000 Stars — <strong>300 000 сум</strong> (самый популярный).
              </p>
            </div>
            <p className="text-muted leading-relaxed">
              Полная таблица цен и крупные пакеты (2500, 5000) — на{" "}
              <Link href="/ru/stars" className="text-primary font-semibold hover:underline">странице Stars</Link>. Общее руководство по оплате в сумах:{" "}
              <Link href="/ru/maqolalar/telegram-stars-somda-uzs-sotib-olish" className="text-primary font-semibold hover:underline">«Купить Stars в сумах»</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Как купить Stars через Humo? Пошагово</h2>
            <div className="space-y-4 mb-6">
              {[
                { step: "1", title: "Откройте @premiumsendbot", desc: "В поиске Telegram введите @premiumsendbot, нажмите /start." },
                { step: "2", title: "Выберите пакет Stars", desc: "Пакет от 50 до 5000 или введите нужное количество." },
                { step: "3", title: "Выберите способ оплаты — Humo", desc: "Среди предложенных вариантов нажмите Humo." },
                { step: "4", title: "Оплатите картой Humo", desc: "Через приложение Humo, Click или Payme. Без комиссии." },
                { step: "5", title: "Stars поступают за несколько минут", desc: "После подтверждения оплаты — в Telegram → Настройки → Stars." },
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

          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Карта Humo готова? В <strong className="text-white">@premiumsendbot</strong> оплатите Stars в сумах — зачисление за несколько минут.
              </p>
              <Link href="https://telegram.me/premiumsendbot" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                Начать с @premiumsendbot
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Humo и Uzcard: есть ли разница для Stars?</h2>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Параметр</div>
                <div className="text-center">Humo</div>
                <div className="text-center">Uzcard</div>
              </div>
              {[
                ["Цена Stars", "Одинаковая (300 сум/star)", "Одинаковая (300 сум/star)"],
                ["Оплата через Click", "✅ Есть", "✅ Есть"],
                ["Оплата через Payme", "✅ Есть", "✅ Есть"],
                ["Комиссия", "0%", "0%"],
                ["Время зачисления", "Несколько минут", "Несколько минут"],
              ].map(([param, humo, uzcard], i, arr) => (
                <div key={param} className={`grid grid-cols-3 p-4 items-center text-sm ${i < arr.length - 1 ? "border-b border-card-border" : ""}`}>
                  <div className="font-medium">{param}</div>
                  <div className="text-center">{humo}</div>
                  <div className="text-center">{uzcard}</div>
                </div>
              ))}
            </div>
            <p className="text-muted leading-relaxed">
              Разницы нет — используйте ту карту, что у вас есть. Руководство по Uzcard:{" "}
              <Link href="/ru/maqolalar/telegram-stars-uzcard-orqali" className="text-primary font-semibold hover:underline">«Telegram Stars через Uzcard»</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Безопасна ли оплата картой Humo?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Механизм оплаты такой: вы совершаете платёж <strong>внутри собственного приложения Humo</strong>. Бот никогда не запрашивает и не сохраняет номер карты, пароль или SMS-код. Если Stars не поступят по технической причине, оплата возвращается полностью.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Часто задаваемые вопросы (FAQ)</h2>
            <div className="space-y-4">
              {[
                { q: "Можно ли купить Telegram Stars картой Humo?", a: "Да, через @premiumsendbot, все пакеты, без комиссии, за несколько минут." },
                { q: "Цена Stars через Humo отличается от Uzcard?", a: "Нет, 300 сум/star одинаково для всех карт." },
                { q: "Можно ли купить Stars картой Humo в официальном приложении Telegram?", a: "Нет, официальное приложение принимает только международные Visa/Mastercard." },
                { q: "Безопасна ли оплата картой Humo?", a: "Да, оплата проходит в официальном приложении Humo, данные карты в бот не вводятся." },
                { q: "Через сколько приходят Stars после оплаты Humo?", a: "Обычно за несколько минут." },
                { q: "Можно ли оплатить Humo большое количество Stars?", a: "Да, если это не превышает дневной лимит интернет-платежей." },
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
                  Для владельцев Humo Telegram Stars теперь без препятствий. <strong className="text-white">@premiumsendbot</strong>: 50 Stars от <strong className="text-white">15 000 сум</strong>, за несколько минут.
                </p>
                <Link href="https://telegram.me/premiumsendbot" target="_blank" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                  Начать с Humo
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
