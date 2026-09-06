import type { Metadata } from "next";
import Link from "next/link";
import { ogBaseRu } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title: "Купить Telegram Stars через Click — пошагово",
  description:
    "Купить Telegram Stars через приложение Click — 300 сум/star, пакеты от 50 до 5000. Быстрая оплата через @premiumsendbot с PIN/Face ID, зачисление за несколько минут.",
  keywords: [
    "telegram stars через click",
    "купить stars click",
    "telegram stars click приложение",
    "premiumsendbot click stars",
  ],
  alternates: {
    canonical: "https://premiumsend.uz/ru/maqolalar/telegram-stars-click-orqali",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/telegram-stars-click-orqali",
      ru: "https://premiumsend.uz/ru/maqolalar/telegram-stars-click-orqali",
      "x-default": "https://premiumsend.uz/maqolalar/telegram-stars-click-orqali",
    },
  },
  openGraph: {
    ...ogBaseRu,
    title: "Купить Telegram Stars через Click — пошагово",
    description: "Быстрая оплата в приложении Click с PIN/Face ID. 300 сум/star, зачисление за несколько минут.",
    url: "https://premiumsend.uz/ru/maqolalar/telegram-stars-click-orqali",
    type: "article",
    publishedTime: "2026-09-06",
  },
};

export default function ArticleStarsClickOrqaliRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Купить Telegram Stars через Click — пошагово",
    description: "Как купить Telegram Stars через приложение Click в Узбекистане — цены, процесс и безопасность.",
    datePublished: "2026-09-06",
    dateModified: "2026-09-06",
    author: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    publisher: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    mainEntityOfPage: "https://premiumsend.uz/ru/maqolalar/telegram-stars-click-orqali",
    inLanguage: "ru",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Купить Telegram Stars через Click",
    description: "Пошагово: покупка Telegram Stars через приложение Click",
    step: [
      { "@type": "HowToStep", position: 1, name: "Откройте @premiumsendbot", text: "В поиске Telegram введите @premiumsendbot, нажмите /start." },
      { "@type": "HowToStep", position: 2, name: "Выберите пакет Stars", text: "Пакет от 50 до 5000 или введите нужное количество." },
      { "@type": "HowToStep", position: 3, name: "Выберите способ оплаты — Click", text: "Среди предложенных вариантов нажмите Click." },
      { "@type": "HowToStep", position: 4, name: "Оплатите в приложении Click с PIN/Face ID", text: "Откроется приложение Click, сумма подставится автоматически, подтвердите PIN-кодом или Face ID." },
      { "@type": "HowToStep", position: 5, name: "Stars поступают за несколько минут", text: "После подтверждения оплаты Stars автоматически зачисляются." },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Можно ли купить Telegram Stars через Click?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Через @premiumsendbot Stars покупаются через приложение Click в сумах. Поддерживаются все пакеты, оплата за 1-2 минуты с PIN или Face ID.",
        },
      },
      {
        "@type": "Question",
        name: "Цена Stars через Click отличается от других способов?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет. Цена не зависит от способа оплаты — 300 сум/star одинаково для Uzcard, Humo, Click, Payme.",
        },
      },
      {
        "@type": "Question",
        name: "Нужно ли привязывать карту к приложению Click?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, карта Uzcard или Humo должна быть заранее привязана к приложению Click. Если не привязана, добавить её можно прямо в приложении за пару минут.",
        },
      },
      {
        "@type": "Question",
        name: "Безопасна ли оплата через Click?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Оплата проходит в официальном приложении Click, подтверждение через PIN или Face ID — номер карты в бот никогда не вводится.",
        },
      },
      {
        "@type": "Question",
        name: "Через сколько приходят Stars после оплаты Click?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Обычно за несколько минут. Click — один из самых быстрых способов оплаты, так как подтверждение происходит мгновенно.",
        },
      },
      {
        "@type": "Question",
        name: "Что делать, если нет приложения Click?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Можно использовать Uzcard, P2P-перевод Humo или Payme — цена и процесс одинаковы.",
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
      { "@type": "ListItem", position: 3, name: "Telegram Stars через Click", item: "https://premiumsend.uz/ru/maqolalar/telegram-stars-click-orqali" },
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
        <span className="text-foreground font-medium">Telegram Stars через Click</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">Руководство</span>
            <time className="text-xs text-muted" dateTime="2026-09-06">6 сентября 2026</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Купить Telegram Stars через Click — пошагово
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-sm font-bold text-primary mb-2">КОРОТКО</p>
            <p className="text-foreground leading-relaxed font-medium">
              Telegram Stars через приложение Click покупаются в{" "}
              <Link href="https://telegram.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@premiumsendbot</Link>.
              Цена — <strong>300 сум/star</strong> (50 Stars = 15 000 сум). Оплата в приложении Click с PIN или Face ID за 1-2 минуты, Stars поступают за несколько минут.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Click — одно из самых популярных мобильных платёжных приложений Узбекистана. При покупке Telegram Stars оплата через Click — один из самых быстрых способов: если карта уже привязана, всё занимает пару нажатий.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Ниже — полный процесс покупки Stars через Click: цены, пошаговое руководство и безопасность.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Почему для Stars через Click нужен отдельный сервис?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Telegram Stars официально продаются через приложение Telegram (международная Visa/Mastercard) или Fragment.com (криптовалюта TON). Click — платёжное приложение внутри Узбекистана, напрямую не подключённое ни к международной карточной сети, ни к блокчейну TON.
            </p>
            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">Решение:</strong> через @premiumsendbot вы платите Click в сумах, а сервис подключает Stars к вашему аккаунту через официальный механизм.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Цена Stars через Click — все пакеты</h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Цена:</strong> 300 сум/star — одинаково для Click, Uzcard, Humo, Payme. 50 Stars — <strong>15 000 сум</strong>, 500 Stars — <strong>150 000 сум</strong>, 1000 Stars — <strong>300 000 сум</strong> (самый популярный).
              </p>
            </div>
            <p className="text-muted leading-relaxed">
              Полная таблица цен — на{" "}
              <Link href="/ru/stars" className="text-primary font-semibold hover:underline">странице Stars</Link>. Общее руководство:{" "}
              <Link href="/ru/maqolalar/telegram-stars-somda-uzs-sotib-olish" className="text-primary font-semibold hover:underline">«Купить Stars в сумах»</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Как купить Stars через Click? Пошагово</h2>
            <div className="space-y-4 mb-6">
              {[
                { step: "1", title: "Откройте @premiumsendbot", desc: "В поиске Telegram введите @premiumsendbot, нажмите /start." },
                { step: "2", title: "Выберите пакет Stars", desc: "Пакет от 50 до 5000 или введите нужное количество." },
                { step: "3", title: "Выберите способ оплаты — Click", desc: "Среди предложенных вариантов нажмите Click." },
                { step: "4", title: "Оплатите в Click с PIN/Face ID", desc: "Откроется приложение Click, сумма подставится автоматически, подтвердите PIN или Face ID." },
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
            <p className="text-muted leading-relaxed">
              Если карта не привязана к Click, добавить Uzcard или Humo можно прямо в приложении за пару минут.
            </p>
          </section>

          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Приложение Click готово? В <strong className="text-white">@premiumsendbot</strong> оплатите Stars с PIN/Face ID за 1-2 минуты.
              </p>
              <Link href="https://telegram.me/premiumsendbot" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                Начать с @premiumsendbot
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Безопасна ли оплата через Click?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Оплата полностью проходит внутри официального приложения Click — подтверждение PIN-кодом или Face ID. Бот никогда не запрашивает и не сохраняет номер карты, CVV или PIN. Если по технической причине Stars не поступят, оплата возвращается полностью.
            </p>
            <p className="text-muted leading-relaxed">
              Общие критерии проверки реселлера:{" "}
              <Link href="/ru/maqolalar/telegram-premium-ishonchli-saytdan-sotib-olish" className="text-primary font-semibold hover:underline">«Покупка на надёжном сайте»</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Часто задаваемые вопросы (FAQ)</h2>
            <div className="space-y-4">
              {[
                { q: "Можно ли купить Telegram Stars через Click?", a: "Да, через @premiumsendbot, все пакеты, оплата за 1-2 минуты с PIN/Face ID." },
                { q: "Цена Stars через Click отличается от других способов?", a: "Нет, 300 сум/star одинаково для всех способов оплаты." },
                { q: "Нужно ли привязывать карту к приложению Click?", a: "Да, карту нужно привязать заранее — либо добавить прямо в приложении." },
                { q: "Безопасна ли оплата через Click?", a: "Да, оплата в официальном приложении Click, номер карты в бот не вводится." },
                { q: "Через сколько приходят Stars после оплаты Click?", a: "Обычно за несколько минут — один из самых быстрых способов." },
                { q: "Что делать, если нет приложения Click?", a: "Можно использовать Uzcard, Humo P2P или Payme, цена одинакова." },
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
                  Telegram Stars через Click — один из самых быстрых способов.{" "}
                  <strong className="text-white">@premiumsendbot</strong>: 50 Stars от <strong className="text-white">15 000 сум</strong>, с PIN/Face ID за несколько минут.
                </p>
                <Link href="https://telegram.me/premiumsendbot" target="_blank" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                  Начать с Click
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
