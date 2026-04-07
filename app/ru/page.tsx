import type { Metadata } from "next";
import PricingCard from "../components/PricingCard";
import AnimatedWave from "../components/AnimatedWave";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Купить Telegram Premium — оплата в сумах",
  description:
    "Купить Telegram Premium в Узбекистане за сумы. 1 месяц 59 000 сум, 3 месяца 175 000 сум, 6 месяцев 235 000 сум, 12 месяцев 425 000 сум. Оплата UzCard, Humo. Быстрая активация.",
  alternates: {
    canonical: "https://premiumsend.uz/ru",
    languages: {
      uz: "https://premiumsend.uz",
      ru: "https://premiumsend.uz/ru",
    },
  },
  openGraph: {
    title: "Купить Telegram Premium — оплата в сумах",
    description:
      "Купите подписку Telegram Premium в узбекских сумах. От 59 000 сум. UzCard, Humo.",
    url: "https://premiumsend.uz/ru",
  },
};

const faqData = [
  {
    q: "Что такое Telegram Premium?",
    a: "Telegram Premium — это платная подписка мессенджера Telegram, которая даёт расширенные возможности: загрузка файлов до 4 ГБ, просмотр каналов без рекламы, эксклюзивные стикеры, эмодзи и многое другое.",
  },
  {
    q: "Сколько стоит Telegram Premium?",
    a: "Цены в Premium Send: 1 месяц — 59 000 сум, 3 месяца — 175 000 сум, 6 месяцев — 235 000 сум, 12 месяцев — 425 000 сум. Все цены в узбекских сумах.",
  },
  {
    q: "Почему стоит покупать через Premium Send?",
    a: "В Telegram доступны только подписки на 1 и 12 месяцев — пакетов на 3 и 6 месяцев нет. Кроме того, оплата возможна только иностранной картой (Uzcard, Humo не работают). Через Premium Send вы можете оплатить в сумах, картой UzCard или Humo. Также можно перевести через Click или Payme. Доступны пакеты на 1, 3, 6 и 12 месяцев.",
  },
  {
    q: "Как купить Telegram Premium?",
    a: "Через Premium Send это очень просто: 1) Выберите нужный срок (1, 3, 6 или 12 месяцев). 2) Оформите заказ через Telegram-бот. 3) Оплатите в сумах картой UzCard или Humo. 4) Premium активируется за несколько минут.",
  },
  {
    q: "Как происходит оплата?",
    a: "Оплата производится в узбекских сумах. Вы можете оплатить картой UzCard или Humo. Также возможен перевод через Click или Payme.",
  },
  {
    q: "Как быстро активируется Premium?",
    a: "После подтверждения оплаты Telegram Premium обычно активируется в течение нескольких минут.",
  },
  {
    q: "Это безопасно?",
    a: "Да, абсолютно безопасно. Мы активируем подписку через официальный Telegram Premium gift. Доступ к вашему аккаунту или пароль не требуется.",
  },
];

export default function HomeRu() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Купить Telegram Premium",
    provider: {
      "@type": "Organization",
      name: "Premium Send",
      url: "https://premiumsend.uz",
    },
    description:
      "Сервис покупки подписки Telegram Premium в узбекских сумах. Пакеты на 1, 3, 6 и 12 месяцев.",
    areaServed: {
      "@type": "Country",
      name: "Uzbekistan",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Пакеты Telegram Premium",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Telegram Premium 1 месяц",
          price: "59000",
          priceCurrency: "UZS",
          url: "https://premiumsend.uz/ru/1-oylik",
        },
        {
          "@type": "Offer",
          name: "Telegram Premium 3 месяца",
          price: "175000",
          priceCurrency: "UZS",
          url: "https://premiumsend.uz/ru/3-oylik",
        },
        {
          "@type": "Offer",
          name: "Telegram Premium 6 месяцев",
          price: "235000",
          priceCurrency: "UZS",
          url: "https://premiumsend.uz/ru/6-oylik",
        },
        {
          "@type": "Offer",
          name: "Telegram Premium 12 месяцев",
          price: "425000",
          priceCurrency: "UZS",
          url: "https://premiumsend.uz/ru/12-oylik",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white/90 text-sm px-4 py-2 rounded-full mb-6">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              Сервис №1 в Узбекистане по Telegram Premium
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Купить Telegram
              <br />
              Premium
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              <span className="hidden md:inline">Покупайте подписку Telegram Premium в узбекских сумах, оплачивая картой UzCard или Humo — быстро и легко. Пакеты на 1, 3, 6 или 12 месяцев.</span>
              <span className="md:hidden">Пакеты на 1, 3, 6 или 12 месяцев.</span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://t.me/premiumsendbot"
                target="_blank"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                Купить сейчас
              </Link>
              <Link
                href="#prices"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all text-lg backdrop-blur-sm"
              >
                Смотреть цены
              </Link>
            </div>
          </div>
        </div>
        <AnimatedWave />
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Почему <span className="gradient-text">Premium Send</span>?
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Самый удобный и надёжный способ купить Telegram Premium в Узбекистане
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-card-border shadow-sm card-hover">
              <div className="w-14 h-14 rounded-2xl bg-primary-light flex items-center justify-center mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0088cc" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Оплата в сумах</h3>
              <p className="text-muted leading-relaxed">
                Не нужны доллары или криптовалюта. Оплачивайте в узбекских сумах картой UzCard или Humo.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-card-border shadow-sm card-hover">
              <div className="w-14 h-14 rounded-2xl bg-gold-light flex items-center justify-center mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Быстро и просто</h3>
              <p className="text-muted leading-relaxed">
                Покупка и активация Telegram Premium — за несколько минут. Без сложных процедур.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-card-border shadow-sm card-hover">
              <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Надёжный сервис</h3>
              <p className="text-muted leading-relaxed">
                Активация через официальный Telegram Premium gift — безопасно и надёжно.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Telegram Premium Features */}
      <section className="py-20 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Возможности <span className="gradient-text">Telegram Premium</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              С подпиской Telegram Premium вы получаете расширенные возможности
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "4GB", title: "Загрузка файлов до 4 ГБ", desc: "Для обычных пользователей — 2 ГБ" },
              { icon: "2x", title: "2x быстрее скачивание", desc: "Скачивайте файлы в два раза быстрее" },
              { icon: "1000+", title: "Безлимит каналов и групп", desc: "Подписка до 1000 каналов" },
              { icon: "✦", title: "Premium стикеры", desc: "Эксклюзивные анимированные стикеры" },
              { icon: "✗", title: "Без рекламы", desc: "Отключите рекламу в каналах" },
              { icon: "✿", title: "Эксклюзивные эмодзи", desc: "Используйте Premium эмодзи" },
              { icon: "✎", title: "Ссылки в био", desc: "Добавьте форматированный текст в профиль" },
              { icon: "⟐", title: "Быстрый перевод", desc: "Переводите сообщения в реальном времени" },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-card-border shadow-sm card-hover"
              >
                <div className="text-2xl font-bold text-primary mb-3">{feature.icon}</div>
                <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                <p className="text-sm text-muted">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="prices" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              <span className="gradient-text">Цены</span> на Telegram Premium
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Выберите удобный срок — все цены в узбекских сумах
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto items-center">
            <PricingCard
              months={1}
              price="59,000"
              pricePerMonth="59,000"
              locale="ru"
              features={[
                "1 месяц Telegram Premium",
                "Все Premium возможности",
                "Оплата в сумах",
                "Быстрая активация",
              ]}
              href="/ru/1-oylik"
            />
            <PricingCard
              months={3}
              price="175,000"
              pricePerMonth="58,333"
              locale="ru"
              features={[
                "3 месяца Telegram Premium",
                "Все Premium возможности",
                "Оплата в сумах",
                "Быстрая активация",
              ]}
              href="/ru/3-oylik"
            />
            <PricingCard
              months={6}
              price="235,000"
              pricePerMonth="39,167"
              popular={true}
              locale="ru"
              features={[
                "6 месяцев Telegram Premium",
                "Все Premium возможности",
                "Оплата в сумах",
                "Быстрая активация",
                "Лучшее соотношение цена/качество",
              ]}
              href="/ru/6-oylik"
            />
            <PricingCard
              months={12}
              price="425,000"
              pricePerMonth="35,417"
              locale="ru"
              features={[
                "12 месяцев Telegram Premium",
                "Все Premium возможности",
                "Оплата в сумах",
                "Быстрая активация",
                "Самая низкая цена за месяц",
              ]}
              href="/ru/12-oylik"
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Как <span className="gradient-text">купить</span> Telegram Premium?
            </h2>
            <p className="text-muted text-lg">3 простых шага</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Выберите срок",
                desc: "Выберите один из пакетов Telegram Premium: 1, 3, 6 или 12 месяцев",
              },
              {
                step: "2",
                title: "Оплатите в сумах",
                desc: "Оплатите картой UzCard или Humo в узбекских сумах",
              },
              {
                step: "3",
                title: "Premium активирован",
                desc: "После оплаты Telegram Premium активируется за несколько минут",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full hero-gradient text-white text-2xl font-bold flex items-center justify-center mx-auto mb-5 shadow-lg shadow-primary/25">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-extrabold text-foreground mb-6 text-center">
              <span className="gradient-text">Купить</span> Telegram Premium в Узбекистане
            </h2>
            <div className="bg-white rounded-2xl p-8 border border-card-border shadow-sm space-y-4 text-muted leading-relaxed">
              <p>
                <strong className="text-foreground">Telegram Premium</strong> — это платная подписка мессенджера Telegram, которая даёт пользователям загрузку файлов до 4 ГБ, скачивание в 2 раза быстрее, просмотр каналов без рекламы, эксклюзивные Premium стикеры и эмодзи, мгновенный перевод и многие другие расширенные возможности.
              </p>
              <p>
                Для покупки Telegram Premium в Узбекистане обычно требуется иностранная банковская карта — карты Uzcard и Humo не работают. Кроме того, в мессенджере Telegram доступны только пакеты на 1 и 12 месяцев — пакетов на 3 и 6 месяцев нет.
              </p>
              <p>
                <strong className="text-foreground">Premium Send</strong> решает эти проблемы. С помощью нашего сервиса вы можете купить подписку Telegram Premium в узбекских сумах — картой UzCard или Humo. Также можно перевести через Click или Payme. Пакет на 1 месяц всего <strong className="text-foreground">59 000 сум</strong>, 3 месяца — <strong className="text-foreground">175 000 сум</strong>, 6 месяцев — <strong className="text-foreground">235 000 сум</strong>, 12 месяцев — <strong className="text-foreground">425 000 сум</strong>.
              </p>
              <p>
                Процесс покупки Telegram Premium очень простой: выбираете нужный срок, оформляете заказ через Telegram-бот, оплачиваете в сумах — и Premium активируется за несколько минут. Безопасно и надёжно — мы активируем подписку через официальный Telegram Premium gift.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-section-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              <span className="gradient-text">Часто задаваемые вопросы</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-card-border shadow-sm"
              >
                <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-12">
            Выберите <span className="gradient-text">пакет</span> Telegram Premium
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/ru/1-oylik" className="bg-white rounded-2xl p-8 border border-card-border shadow-sm card-hover text-center group">
              <div className="text-4xl font-extrabold text-primary mb-2">1 мес.</div>
              <div className="text-2xl font-bold text-foreground mb-1">59 000 сум</div>
              <p className="text-sm text-muted mb-4">Купить Telegram Premium на 1 месяц</p>
              <span className="text-primary font-semibold text-sm group-hover:underline">Подробнее →</span>
            </Link>
            <Link href="/ru/3-oylik" className="bg-white rounded-2xl p-8 border border-card-border shadow-sm card-hover text-center group">
              <div className="text-4xl font-extrabold text-primary mb-2">3 мес.</div>
              <div className="text-2xl font-bold text-foreground mb-1">175 000 сум</div>
              <p className="text-sm text-muted mb-4">Купить Telegram Premium на 3 месяца</p>
              <span className="text-primary font-semibold text-sm group-hover:underline">Подробнее →</span>
            </Link>
            <Link href="/ru/6-oylik" className="bg-white rounded-2xl p-8 border-2 border-primary shadow-lg card-hover text-center group relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 shine-badge text-white text-xs font-bold px-3 py-1 rounded-full">Популярный</div>
              <div className="text-4xl font-extrabold text-primary mb-2">6 мес.</div>
              <div className="text-2xl font-bold text-foreground mb-1">235 000 сум</div>
              <p className="text-sm text-muted mb-4">Купить Telegram Premium на 6 месяцев</p>
              <span className="text-primary font-semibold text-sm group-hover:underline">Подробнее →</span>
            </Link>
            <Link href="/ru/12-oylik" className="bg-white rounded-2xl p-8 border border-card-border shadow-sm card-hover text-center group">
              <div className="text-4xl font-extrabold text-primary mb-2">12 мес.</div>
              <div className="text-2xl font-bold text-foreground mb-1">425 000 сум</div>
              <p className="text-sm text-muted mb-4">Купить Telegram Premium на 12 месяцев</p>
              <span className="text-primary font-semibold text-sm group-hover:underline">Подробнее →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-gradient rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-2xl" />
              <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full blur-2xl" />
            </div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Купите Telegram Premium прямо сейчас!
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                Всего от 59 000 сум. Оплатите в сумах и активируйте за несколько минут.
              </p>
              <Link
                href="https://t.me/premiumsendbot"
                target="_blank"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                Купить через Telegram
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
