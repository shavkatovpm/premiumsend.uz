import type { Metadata } from "next";
import AnimatedWave from "../../components/AnimatedWave";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Статьи о Telegram Premium — руководства, цены, новости",
  description:
    "Полезные статьи о Telegram Premium: что такое Premium, как купить, цены, возможности. Полное руководство по покупке Telegram Premium в Узбекистане.",
  keywords: [
    "Telegram Premium статьи",
    "Telegram Premium что это",
    "Telegram Premium возможности",
    "Telegram Premium руководство",
    "Telegram Premium цены",
    "Telegram Premium купить руководство",
  ],
  alternates: {
    canonical: "https://premiumsend.uz/ru/maqolalar",
    languages: {
      uz: "https://premiumsend.uz/maqolalar",
      ru: "https://premiumsend.uz/ru/maqolalar",
    },
  },
  openGraph: {
    title: "Статьи и руководства о Telegram Premium",
    description:
      "Полезные статьи о Telegram Premium, цены, возможности и руководства по покупке.",
    url: "https://premiumsend.uz/ru/maqolalar",
  },
};

const articles = [
  {
    slug: "nega-telegram-premium-app-store-play-market-qimmat",
    title: "Почему Telegram Premium дороже в App Store и Play Market",
    excerpt:
      "В App Store 1 месяц $4.99 (~66 000 сум), в Play ~64 000, у реселлера 59 000 сум. На 12 месяцах разница 25-28% — комиссия Apple/Google 30% уже включена в $4.99, причина в bulk gift механизме.",
    category: "Вопрос-ответ",
    date: "2026-05-08",
  },
  {
    slug: "premiumsend-vs-boshqa-resellerlar",
    title: "PremiumSend vs другие реселлеры Telegram Premium — объективные критерии",
    excerpt:
      "Сравнение реселлеров по 8 универсальным критериям: сайт, оферта, платёжная система, честность. Без конкурентов по имени, объективное руководство — самый дешёвый не всегда лучший.",
    category: "Сравнение",
    date: "2026-05-07",
  },
  {
    slug: "telegram-stars-click-payme-orqali-somda",
    title: "Telegram Stars через Click и перевод на карту в сумах",
    excerpt:
      "Купить Stars через Click или переводом на карту в сумах — StarsJoy.uz от 50 Stars за 12 000 сум, местная карта, без курсовой конвертации. Полное руководство.",
    category: "Руководство",
    date: "2026-05-07",
  },
  {
    slug: "6-oylik-telegram-premium-humo-orqali",
    title: "Telegram Premium на 6 месяцев через Humo",
    excerpt:
      "6-месячный Telegram Premium через карту Humo за 235 000 сум — бот показывает карту и сумму, вы переводите через Humo. В месяц 39 167 сум, на 33% дешевле, чем 1-месячный.",
    category: "Руководство",
    date: "2026-05-07",
  },
  {
    slug: "telegram-premium-stikerlari-emoji-reaksiyalari",
    title: "Telegram Premium стикеры, анимированные эмодзи и premium-реакции",
    excerpt:
      "Premium-стикеры (1000+ пакетов), анимированные эмодзи и premium-реакции — особые функции для Premium-пользователей. Как работают и на каких устройствах — полное руководство.",
    category: "Руководство",
    date: "2026-05-06",
  },
  {
    slug: "telegram-stars-vs-telegram-premium",
    title: "Telegram Stars или Premium: что выбрать",
    excerpt:
      "Разница Stars и Premium: Stars — внутренняя валюта для ботов и каналов, Premium — месячная подписка (4 ГБ файлы, 1000 каналов). В каком случае что нужно — полное сравнение.",
    category: "Сравнение",
    date: "2026-05-05",
  },
  {
    slug: "3-oylik-telegram-premium-payme-orqali",
    title: "Telegram Premium на 3 месяца через Payme",
    excerpt:
      "Активируйте 3-месячный Telegram Premium через Payme за 175 000 сум — @PremiumSendBot, оплата по PIN/Face ID за 1-2 минуты, активация за 5 минут.",
    category: "Руководство",
    date: "2026-05-05",
  },
  {
    slug: "telegram-premium-payme-orqali",
    title: "Telegram Premium через Payme — пошаговое руководство",
    excerpt:
      "Telegram Premium через Payme — от 59 000 до 425 000 сум. Оплата в Payme за 1-2 минуты, активация за 5 минут. Не нужно вводить номер карты — pillar-руководство.",
    category: "Руководство",
    date: "2026-05-05",
  },
  {
    slug: "telegram-stars-ozbekistondan-sotib-olish",
    title: "Как купить Telegram Stars в Узбекистане",
    excerpt:
      "Купить Telegram Stars в Узбекистане в сумах — через StarsJoy.uz от 50 Stars за 12 000 сум, Click и банковской картой. На 17% дешевле App Store, без валюты. Пошагово.",
    category: "Руководство",
    date: "2026-05-05",
  },
  {
    slug: "telegram-premium-xavfsiz-aldovdan-saqlanish",
    title: "Безопасно ли покупать Telegram Premium в Узбекистане? Как не попасться на обман",
    excerpt:
      "7 типичных схем мошенников, 8 признаков надёжного реселлера за 30 секунд и где хранятся данные карты. Практическое руководство, чтобы не потерять деньги.",
    category: "Вопрос-ответ",
    date: "2026-05-05",
  },
  {
    slug: "3-oylik-telegram-premium-click-orqali",
    title: "Telegram Premium на 3 месяца через Click",
    excerpt:
      "Активируйте 3-месячный Telegram Premium через Click за 175 000 сум — @PremiumSendBot, оплата по PIN/Face ID за 1-2 минуты, активация за 5 минут.",
    category: "Руководство",
    date: "2026-05-03",
  },
  {
    slug: "telegram-premium-click-orqali",
    title: "Telegram Premium через Click — самый быстрый локальный способ",
    excerpt:
      "Telegram Premium через Click — от 59 000 до 425 000 сум. Оплата в Click за 1-2 минуты, активация за 5 минут. Не нужно вводить номер карты — общее руководство (pillar).",
    category: "Руководство",
    date: "2026-05-03",
  },
  {
    slug: "3-oylik-telegram-premium-humo-orqali",
    title: "Telegram Premium на 3 месяца через карту Humo",
    excerpt:
      "Активируйте 3-месячный Telegram Premium картой Humo за 175 000 сум — через @PremiumSendBot, оплата в сумах, 5 минут на активацию. В Telegram нет ни Humo, ни 3-месячного тарифа — здесь оба есть.",
    category: "Руководство",
    date: "2026-05-03",
  },
  {
    slug: "telegram-premium-vs-oddiy-telegram",
    title: "Telegram Premium vs обычный Telegram: 15 главных отличий",
    excerpt:
      "Чем Premium отличается от обычной версии? 15 чётких отличий в таблице: файлы 4 ГБ, 1000 каналов, премиум-стикеры, голос→текст и другие. Нужен ли Premium? Честный ответ.",
    category: "Сравнение",
    date: "2026-05-02",
  },
  {
    slug: "telegram-premium-humo-orqali",
    title: "Telegram Premium через карту Humo — пошаговое руководство",
    excerpt:
      "Telegram Premium через карту Humo — от 59 000 до 425 000 сум. @PremiumSendBot, оплата в сумах, активация за 5 минут. Пошаговое руководство и безопасность.",
    category: "Руководство",
    date: "2026-05-02",
  },
  {
    slug: "telegram-premium-qachon-faollashadi",
    title: "Когда активируется Telegram Premium и как считается срок",
    excerpt:
      "Premium активируется через 2-5 минут после оплаты. Срок по календарным месяцам (не 30 дней), с даты активации. Продление, подарок, проблема февраля и решение технических задержек.",
    category: "Вопрос-ответ",
    date: "2026-05-01",
  },
  {
    slug: "telegram-stars-nima",
    title: "Что такое Telegram Stars и где они используются",
    excerpt:
      "Telegram Stars — официальная внутренняя валюта Telegram (с 2024 года). 12+ способов применения: стикеры, донаты, AI-боты, подарки Premium. Из Узбекистана 50 Stars от 12 000 сум, через StarsJoy.uz в сумах.",
    category: "Руководство",
    date: "2026-04-30",
  },
  {
    slug: "telegram-premium-narxlari",
    title: "Цены Telegram Premium 2026: сравнение тарифов 1, 3, 6, 12 месяцев",
    excerpt:
      "Цены Telegram Premium в Узбекистане: 1 месяц — 59 000 сум, 3 месяца — 175 000 сум, 6 месяцев — 235 000 сум, 12 месяцев — 425 000 сум. Анализ самого выгодного тарифа и способов оплаты.",
    category: "Сравнение",
    date: "2026-04-30",
  },
  {
    slug: "telegram-premium-eng-arzon-qayerdan-sotib-olish",
    title: "Где Telegram Premium дешевле всего",
    excerpt:
      "Telegram Premium по самой низкой цене — в Premium Send от 35 417 сум в месяц. Сравнение с App Store, Fragment и реселлерами. Без скрытых комиссий, оплата в сумах.",
    category: "Сравнение",
    date: "2026-04-29",
  },
  {
    slug: "telegram-premium-nima",
    title: "Что такое Telegram Premium и какие возможности даёт в 2026 году",
    excerpt:
      "Telegram Premium — платная версия Telegram. Загрузка файлов до 4 ГБ, без рекламы, 1000 каналов и 20+ функций. В Узбекистане от 59 000 сум через @PremiumSendBot, оплата в сумах. Полное руководство.",
    category: "Руководство",
    date: "2026-04-29",
  },
  {
    slug: "12-oylik-telegram-premium-uzcard-orqali",
    title: "Telegram Premium на 12 месяцев через Uzcard",
    excerpt:
      "Активируйте годовой Telegram Premium через Uzcard в сумах — в @PremiumSendBot за 425 000 сум, на 39% дешевле помесячной. В месяц всего 35 417 сум.",
    category: "Руководство",
    date: "2026-04-17",
  },
  {
    slug: "6-oylik-telegram-premium-uzcard-orqali",
    title: "Telegram Premium на 6 месяцев через Uzcard",
    excerpt:
      "Активируйте 6-месячный Telegram Premium через Uzcard в сумах — в @PremiumSendBot за 235 000 сум, на 33% дешевле помесячной. В Telegram нет 6-месячного пакета.",
    category: "Руководство",
    date: "2026-04-17",
  },
  {
    slug: "3-oylik-telegram-premium-uzcard-orqali",
    title: "Telegram Premium на 3 месяца через Uzcard",
    excerpt:
      "Активируйте 3-месячный Telegram Premium через Uzcard в сумах — в @PremiumSendBot за 175 000 сум, без дополнительной комиссии. Варианты Uzcard P2P, Click и Payme.",
    category: "Руководство",
    date: "2026-04-17",
  },
  {
    slug: "12-oylik-telegram-premium-sovga-qilish",
    title: "Подарить Telegram Premium на 12 месяцев",
    excerpt:
      "Подарите любому человеку 12-месячный Telegram Premium — через @PremiumSendBot за 425 000 сум. Оплата Uzcard, Humo в сумах. Вводите username — Premium активируется.",
    category: "Советы",
    date: "2026-04-08",
  },
  {
    slug: "6-oylik-telegram-premium-olishning-eng-yaxshi-usuli",
    title: "Лучший способ получить Telegram Premium на 6 месяцев",
    excerpt:
      "Все способы сравнены: официальное приложение, Fragment, через знакомых и реселлер-бот. Самый быстрый, удобный и надёжный способ получить 6-месячный Telegram Premium в Узбекистане — @PremiumSendBot.",
    category: "Сравнение",
    date: "2026-04-08",
  },
  {
    slug: "3-oylik-telegram-premium-sovga-qilish",
    title: "Подарить Telegram Premium на 3 месяца",
    excerpt:
      "Подарите другу или близкому 3-месячный Telegram Premium — через @PremiumSendBot за 175 000 сум, картой Uzcard или Humo. Введите username, оплатите — gift активируется автоматически.",
    category: "Руководство",
    date: "2026-04-08",
  },
  {
    slug: "1-oylik-telegram-premium-uzcard-orqali-sotib-olish",
    title: "Купить Telegram Premium на 1 месяц через Uzcard",
    excerpt:
      "Можно ли оплатить Telegram Premium через Uzcard? Да — через @premiumsend_admin за 59 000 сум. Пошаговая инструкция и вопросы безопасности.",
    category: "Руководство",
    date: "2026-04-08",
  },
  {
    slug: "1-oylik-telegram-premium-sotib-olish",
    title: "Купить Telegram Premium на 1 месяц",
    excerpt:
      "Купить Telegram Premium на 1 месяц в Узбекистане — оплата в сумах через UzCard, Humo. Через @premiumsend_admin. Самый доступный вариант — всего 59 000 сум.",
    category: "Руководство",
    date: "2026-04-07",
  },
  {
    slug: "3-oylik-telegram-premium-sotib-olish",
    title: "Купить Telegram Premium на 3 месяца",
    excerpt:
      "Купить Telegram Premium на 3 месяца в Узбекистане — оплата в сумах через UzCard, Humo. Также можно оплатить через Click или Payme переводом на карту. В Telegram нет 3- и 6-месячных пакетов — только через @PremiumSendBot. Пошаговая инструкция.",
    category: "Руководство",
    date: "2026-04-02",
  },
  {
    slug: "6-oylik-telegram-premium-sotib-olish",
    title: "Купить Telegram Premium на 6 месяцев",
    excerpt:
      "Купить Telegram Premium на 6 месяцев в Узбекистане — за 235 000 сум. Оплата в сумах через Uzcard, Humo. В Telegram нет 6-месячного пакета — только через @PremiumSendBot. Почему 6 месяцев — самый разумный выбор?",
    category: "Руководство",
    date: "2026-04-02",
  },
  {
    slug: "12-oylik-telegram-premium-sotib-olish",
    title: "Купить Telegram Premium на 12 месяцев",
    excerpt:
      "Купить Telegram Premium на 12 месяцев в Узбекистане — за 425 000 сум. В месяц всего 35 417 сум — самый выгодный вариант. В Telegram 12-месячный пакет есть, но нужна иностранная карта. В Premium Send оплата в сумах.",
    category: "Руководство",
    date: "2026-04-02",
  },
];

const categoryColors: Record<string, string> = {
  "Руководство": "bg-primary-light text-primary",
  Цены: "bg-green-100 text-green-700",
  Сравнение: "bg-purple-100 text-purple-700",
  Советы: "bg-gold-light text-amber-700",
  Новости: "bg-blue-100 text-blue-700",
  "Вопрос-ответ": "bg-blue-100 text-blue-700",
};

export default function ArticlesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: "https://premiumsend.uz/ru" },
      { "@type": "ListItem", position: 2, name: "Статьи", item: "https://premiumsend.uz/ru/maqolalar" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-muted">
        <Link href="/ru" className="hover:text-primary">Главная</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">Статьи</span>
      </nav>

      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-80 h-80 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Статьи о Telegram Premium
          </h1>
          <p className="text-xl text-white/80">
            Возможности, цены и руководства по покупке Telegram Premium
          </p>
        </div>
        <AnimatedWave />
      </section>

      {/* Articles */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/ru/maqolalar/${article.slug}`}
                className="bg-white rounded-2xl p-8 border border-card-border shadow-sm card-hover block"
              >
                <article>
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        categoryColors[article.category] || "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {article.category}
                    </span>
                    <time className="text-xs text-muted" dateTime={article.date}>
                      {article.date}
                    </time>
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-3 leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <span className="text-primary text-sm font-semibold">
                    Читать далее &rarr;
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-20 bg-section-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-foreground mb-8">
            <span className="gradient-text">Купить</span> Telegram Premium
          </h2>
          <p className="text-muted mb-10 max-w-2xl mx-auto">
            Прочитали статьи? Теперь купите Telegram Premium — от 59 000 сум, оплата в сумах.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            <Link href="/ru/1-oylik" className="px-6 py-3 rounded-xl bg-white border border-card-border shadow-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-all">
              1 месяц — 59 000 сум
            </Link>
            <Link href="/ru/3-oylik" className="px-6 py-3 rounded-xl bg-white border border-card-border shadow-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-all">
              3 месяца — 175 000 сум
            </Link>
            <Link href="/ru/6-oylik" className="px-6 py-3 rounded-xl hero-gradient text-white font-semibold shadow-lg shadow-primary/25">
              6 месяцев — 235 000 сум
            </Link>
            <Link href="/ru/12-oylik" className="px-6 py-3 rounded-xl bg-white border border-card-border shadow-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-all">
              12 месяцев — 425 000 сум
            </Link>
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
                Готовы купить Telegram Premium?
              </h2>
              <p className="text-white/80 mb-8">
                От 175 000 сум. Оплатите в сумах и активируйте за несколько минут.
              </p>
              <Link href="https://t.me/premiumsendbot" target="_blank" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                Купить через Telegram
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
