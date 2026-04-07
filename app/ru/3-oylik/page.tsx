import type { Metadata } from "next";
import AnimatedWave from "../../components/AnimatedWave";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Купить Telegram Premium на 3 месяца — 175 000 сум",
  description:
    "Купить Telegram Premium на 3 месяца всего за 175 000 сум. Оплата в узбекских сумах через UzCard, Humo. Быстрая активация. В Telegram нет 3-месячного пакета — только в Premium Send.",
  keywords: [
    "купить Telegram Premium 3 месяца",
    "Telegram Premium 3 месяца",
    "Telegram Premium 3 месяца цена",
    "Telegram Premium 3 месяца купить",
    "Telegram Premium 175000",
    "Telegram Premium 3 месяца дешево",
    "Telegram Premium 3 месяца Узбекистан",
  ],
  alternates: {
    canonical: "https://premiumsend.uz/ru/3-oylik",
    languages: {
      uz: "https://premiumsend.uz/3-oylik",
      ru: "https://premiumsend.uz/ru/3-oylik",
    },
  },
  openGraph: {
    title: "Купить Telegram Premium на 3 месяца — 175 000 сум",
    description:
      "Купите подписку Telegram Premium на 3 месяца за 175 000 сум. Оплата в узбекских сумах.",
    url: "https://premiumsend.uz/ru/3-oylik",
  },
};

const features = [
  {
    icon: "📦",
    title: "Загрузка файлов до 4 ГБ",
    desc: "Отправляйте файлы до 4 ГБ вместо обычных 2 ГБ",
  },
  {
    icon: "⚡",
    title: "Скачивание в 2 раза быстрее",
    desc: "Скачивайте медиа и файлы в два раза быстрее",
  },
  {
    icon: "🔇",
    title: "Каналы без рекламы",
    desc: "Скрывайте все рекламные сообщения в каналах",
  },
  {
    icon: "✨",
    title: "Премиум-стикеры и эмодзи",
    desc: "Используйте эксклюзивные анимированные стикеры и эмодзи",
  },
  {
    icon: "🌐",
    title: "Мгновенный перевод",
    desc: "Переводите сообщения на любой язык одним нажатием",
  },
  {
    icon: "👤",
    title: "Расширенный профиль",
    desc: "Добавьте форматированный текст и ссылки в свой профиль",
  },
];

const faqData = [
  {
    q: "Сколько стоит Telegram Premium на 3 месяца?",
    a: "Стоимость Telegram Premium на 3 месяца в Premium Send составляет 175 000 сум. Оплата в узбекских сумах — через карты UzCard, Humo. Также можно оплатить переводом на карту бота через Click или Payme.",
  },
  {
    q: "Можно ли купить 3-месячный Premium в Telegram?",
    a: "Нет, Telegram предлагает только 1-месячную и 12-месячную подписку Premium — 3-месячных и 6-месячных пакетов нет. Купить Telegram Premium на 3 месяца можно только через сервисы вроде Premium Send.",
  },
  {
    q: "Как активируется 3-месячный Premium?",
    a: "После подтверждения оплаты мы отправим вам подарок Telegram Premium, который автоматически активируется в течение нескольких минут. Доступ к вашему аккаунту или пароль не требуется.",
  },
];

export default function ThreeMonthPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Купить Telegram Premium на 3 месяца",
    description: "Подписка Telegram Premium на 3 месяца — купите в сумах в Узбекистане",
    offers: {
      "@type": "Offer",
      price: "175000",
      priceCurrency: "UZS",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Premium Send",
        url: "https://premiumsend.uz",
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Главная",
        item: "https://premiumsend.uz/ru",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Telegram Premium на 3 месяца",
        item: "https://premiumsend.uz/ru/3-oylik",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-muted">
        <Link href="/ru" className="hover:text-primary">Главная</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">Telegram Premium на 3 месяца</span>
      </nav>

      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-80 h-80 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white/90 text-sm px-4 py-2 rounded-full mb-6">
            Пакет на 3 месяца
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Купить Telegram
            <br />
            Premium на 3 месяца
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Всего <span className="text-white font-bold">175 000 сум</span> (~58 333 сум/мес.)
          </p>
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
        </div>
        <AnimatedWave />
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-4">
            Что вы получите с Telegram Premium на 3 месяца?
          </h2>
          <p className="text-muted text-center mb-12 max-w-2xl mx-auto">
            Пользуйтесь всеми расширенными возможностями подписки Telegram Premium в течение 3 месяцев
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-card-border shadow-sm card-hover flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why 3 months */}
      <section className="py-20 bg-section-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-12">
            Почему стоит <span className="gradient-text">купить</span> Telegram Premium на 3 месяца?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0088cc" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Идеально для пробы</h3>
              <p className="text-sm text-muted">Если хотите попробовать возможности Telegram Premium, 3-месячный пакет — самый удобный выбор</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0088cc" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V7m0 10v1" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Доступная начальная цена</h3>
              <p className="text-sm text-muted">Всего 175 000 сум — попробуйте Telegram Premium без больших затрат</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0088cc" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Нет в Telegram</h3>
              <p className="text-sm text-muted">В мессенджере Telegram нельзя купить подписку на 3 месяца — только в Premium Send</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-card-border shadow-sm space-y-4 text-muted leading-relaxed">
            <h2 className="text-2xl font-extrabold text-foreground">Telegram Premium на 3 месяца — подробная информация</h2>
            <p>
              <strong className="text-foreground">Купить Telegram Premium на 3 месяца</strong> — это самый удобный способ попробовать возможности Premium. Telegram предлагает только 1-месячную и 12-месячную подписку Premium — 3-месячных и 6-месячных пакетов нет. Поэтому этот пакет можно купить только через платформы вроде Premium Send.
            </p>
            <p>
              Стоимость Telegram Premium на 3 месяца всего <strong className="text-foreground">175 000 сум</strong> (примерно 58 333 сум в месяц). Оплата в узбекских сумах — через карты UzCard, Humo. Также можно оплатить переводом на карту бота через Click или Payme. После оплаты Premium активируется в течение нескольких минут.
            </p>
            <p>
              Если вы хотите оформить Telegram Premium на более длительный срок, ознакомьтесь с пакетами <Link href="/ru/6-oylik" className="text-primary font-semibold hover:underline">Telegram Premium на 6 месяцев</Link> (235 000 сум) или <Link href="/ru/12-oylik" className="text-primary font-semibold hover:underline">Telegram Premium на 12 месяцев</Link> (425 000 сум) — ежемесячная стоимость значительно ниже.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-section-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-12">
            <span className="gradient-text">Сравнение</span> цен Telegram Premium
          </h2>
          <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden">
            <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
              <div>Пакет</div>
              <div className="text-center">Цена</div>
              <div className="text-center">В месяц</div>
              <div className="text-center">Экономия</div>
            </div>
            <Link href="/ru/1-oylik" className="grid grid-cols-4 p-4 border-b border-card-border items-center hover:bg-primary-light/10 transition-colors">
              <div className="font-bold">1 месяц</div>
              <div className="text-center font-semibold">59 000</div>
              <div className="text-center text-sm text-muted">59 000</div>
              <div className="text-center text-sm">&mdash;</div>
            </Link>
            <div className="grid grid-cols-4 p-4 border-b border-card-border bg-primary-light/30 items-center">
              <div className="font-bold text-primary">3 месяца</div>
              <div className="text-center font-semibold">175 000</div>
              <div className="text-center text-sm text-muted">58 333</div>
              <div className="text-center text-sm text-green-600 font-medium">-1%</div>
            </div>
            <Link href="/ru/6-oylik" className="grid grid-cols-4 p-4 border-b border-card-border items-center hover:bg-primary-light/10 transition-colors">
              <div className="font-bold">6 месяцев</div>
              <div className="text-center font-semibold">235 000</div>
              <div className="text-center text-sm text-muted">39 167</div>
              <div className="text-center text-sm text-green-600 font-medium">-33%</div>
            </Link>
            <Link href="/ru/12-oylik" className="grid grid-cols-4 p-4 items-center hover:bg-primary-light/10 transition-colors">
              <div className="font-bold">12 месяцев</div>
              <div className="text-center font-semibold">425 000</div>
              <div className="text-center text-sm text-muted">35 417</div>
              <div className="text-center text-sm text-green-600 font-medium">-39%</div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-12">
            Telegram Premium на 3 месяца — <span className="gradient-text">вопросы</span>
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-gradient rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-2xl" />
            </div>
            <div className="relative">
              <h2 className="text-3xl font-extrabold text-white mb-4">
                Telegram Premium на 3 месяца — 175 000 сум
              </h2>
              <p className="text-white/80 mb-8">
                Оформите заказ прямо сейчас и активируйте Telegram Premium за несколько минут
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
