import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "О PremiumSend — надёжный сервис Telegram Premium в Узбекистане",
  description:
    "PremiumSend — сервис покупки Telegram Premium в сумах в Узбекистане. Click, Payme, Uzcard и Humo, активация за 5 минут. Честный местный реселлер, независимая услуга.",
  keywords: [
    "о premiumsend",
    "premium send кто",
    "telegram premium надёжный сервис узбекистан",
    "telegram premium реселлер узбекистан",
    "premium send независимый",
    "premiumsend.uz",
  ],
  alternates: {
    canonical: "https://premiumsend.uz/ru/o-nas",
    languages: {
      uz: "https://premiumsend.uz/haqida",
      ru: "https://premiumsend.uz/ru/o-nas",
    },
  },
  openGraph: {
    title: "О PremiumSend — надёжный сервис Telegram Premium",
    description:
      "Покупка Telegram Premium в сумах в Узбекистане — Click, Payme, Uzcard и Humo за 5 минут. Честный местный реселлер.",
    url: "https://premiumsend.uz/ru/o-nas",
    type: "website",
  },
};

export default function AboutPageRu() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Premium Send",
    url: "https://premiumsend.uz",
    description:
      "Покупка Telegram Premium в сумах в Узбекистане — через Click, Payme, Uzcard, Humo и Visa. Местный независимый реселлер.",
    sameAs: ["https://t.me/premiumsendbot"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      url: "https://t.me/premiumsendbot",
      availableLanguage: ["Uzbek", "Russian"],
    },
    areaServed: {
      "@type": "Country",
      name: "Uzbekistan",
    },
  };

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "О PremiumSend",
    url: "https://premiumsend.uz/ru/o-nas",
    description:
      "Кто такой PremiumSend, как работает, какие способы оплаты принимает и почему ему можно доверять.",
    mainEntity: {
      "@type": "Organization",
      name: "Premium Send",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Кто такой PremiumSend?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PremiumSend — независимый реселлер в Узбекистане. Покупает подписку Telegram Premium через официальный механизм gift Telegram и доставляет местным пользователям в сумах. PremiumSend НЕ является официальным партнёром Telegram — это один из нескольких независимых реселлеров в Узбекистане. Доступны тарифы 1, 3, 6 и 12 месяцев.",
        },
      },
      {
        "@type": "Question",
        name: "Является ли PremiumSend официальным партнёром Telegram?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет. Ни один сервис в Узбекистане не является официальным партнёром Telegram. PremiumSend — независимый реселлер. Механизм: мы покупаем Premium через официальную систему gift Telegram и отправляем вам. Это похоже на покупку товара в одном магазине и продажу в другом — законно. Но писать «официальный партнёр Telegram» было бы ложью.",
        },
      },
      {
        "@type": "Question",
        name: "Какие способы оплаты вы принимаете?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "После выбора тарифа бот показывает номер карты и точную сумму. Вы через любое приложение (Click, Payme, приложение Uzcard, Humo, приложение банка или Visa-карта) переводите указанную сумму на эту карту. Система автоматически определяет платёж по комбинации суммы и карты и Premium активируется за 2-5 минут. Всё в сумах — без курсового риска.",
        },
      },
      {
        "@type": "Question",
        name: "Что если Premium не пришёл?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "При технической ошибке Premium активируется вручную, либо деньги возвращаются. Точные условия — на странице /oferta. Для возврата: сохраните номер PDF-чека Click или Payme и обратитесь в поддержку. Технические сбои редки, но не нулевые — ни один реселлер не свободен от таких ситуаций.",
        },
      },
      {
        "@type": "Question",
        name: "Бывают ли технические сбои?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, иногда. Из-за кратковременных задержек на стороне Telegram или нагрузки на серверах Click Premium может активироваться не за 5, а за 10-15 минут. В таких случаях бот сообщает или переходит в ручную активацию. Ни один реселлер не может сказать «100% без сбоев» — кто так пишет, лжёт. Главное — есть механизм решения проблем.",
        },
      },
      {
        "@type": "Question",
        name: "Как проверить связку сайта и бота?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Двумя путями: первый — на сайте указана ссылка на @PremiumSendBot, второй — в сообщениях бота упоминается домен premiumsend.uz. Домен работает по HTTPS, на /oferta прописаны условия возврата. Эти механизмы подтверждают реальность реселлера.",
        },
      },
    ],
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
        name: "О PremiumSend",
        item: "https://premiumsend.uz/ru/o-nas",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-muted">
        <Link href="/ru" className="hover:text-primary">
          Главная
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">О PremiumSend</span>
      </nav>

      {/* Page */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight mb-6">
            О PremiumSend
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-6 border border-primary/20">
            <p className="text-foreground leading-relaxed text-lg font-medium">
              <strong>Коротко:</strong> PremiumSend — независимый реселлер в Узбекистане. Даём возможность купить подписку Telegram Premium с местной картой и в сумах: через Click, Payme, Uzcard, Humo и Visa, тарифы 1-12 месяцев, активация за 5 минут. НЕ являемся официальным партнёром Telegram — механизм опирается на открытую систему gift Telegram.
            </p>
          </div>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 — Mission */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Зачем существует PremiumSend?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              У пользователя из Узбекистана при покупке Telegram Premium есть три преграды:
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  1. Официальное приложение Telegram не принимает местные карты
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Работают только Visa, Mastercard, Google Pay или Apple Pay. Uzcard, Humo, Click и Payme не подключены к системе Telegram.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  2. App Store и Play Market дороже на 30-40%
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  1 месяц в App Store — $5.99 ≈ 78 000 сум, у местного реселлера — 59 000 сум. Плюс требование зарубежной карты и курсовой риск.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  3. Тарифов на 3 и 6 месяцев в Telegram нет
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Официальное приложение Telegram предлагает только 1- и 12-месячные пакеты. Тарифы 3 и 6 месяцев доступны только через реселлеров.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              PremiumSend закрывает эти три преграды: оплата местной картой и через Click, в сумах, полные тарифы 1-12 месяцев. Механизм опирается на официальную систему gift Telegram — законно и прозрачно.
            </p>
          </section>

          {/* Section 2 — Honesty */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Будем честны — что мы делаем и чего не делаем
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Доверие к бренду не строится на лжи. Ниже — открыто заявленная правда о PremiumSend:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  ✅ Мы являемся
                </h3>
                <ul className="text-sm text-muted space-y-2">
                  <li>• Независимым реселлером в Узбекистане</li>
                  <li>• Сервисом, принимающим местные карты и Click</li>
                  <li>• Работающими через официальный механизм gift Telegram</li>
                  <li>• Предлагающими 1, 3, 6, 12-месячные тарифы Premium</li>
                  <li>• Принимающими оплату в сумах (без курсового риска)</li>
                  <li>• Владельцами @PremiumSendBot и premiumsend.uz</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  ❌ Мы НЕ являемся
                </h3>
                <ul className="text-sm text-muted space-y-2">
                  <li>• Официальным партнёром Telegram</li>
                  <li>• Лицензированным государством</li>
                  <li>• Сервисом &laquo;100% без сбоев&raquo; (технические нюансы бывают)</li>
                  <li>• Источником &laquo;бесплатного Premium&raquo; (такого не существует)</li>
                  <li>• Запрашивающим пароль аккаунта (он не нужен)</li>
                  <li>• Делающим Premium бесконечным (это правило Telegram)</li>
                </ul>
              </div>
            </div>

            <div className="bg-section-alt rounded-xl p-5">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Почему мы говорим это открыто?</strong> На рынке есть сервисы, которые пишут &laquo;мы официальные партнёры Telegram&raquo;, &laquo;государственная лицензия&raquo;, &laquo;100% гарантия&raquo;. Эти выражения — ложь и первый признак ненадёжности. Честность — сильный сигнал: если реселлер может показать свои границы, значит, он открыт и в остальном.
              </p>
            </div>
          </section>

          {/* Section 3 — How it works */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Как работает PremiumSend — технический механизм
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Доставка Premium — полностью прозрачный процесс. Шаги:
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  step: "1",
                  title: "Выбор тарифа в @PremiumSendBot",
                  desc: "1, 3, 6 или 12 месяцев. Цена в сумах сразу видна: 59 000, 175 000, 235 000 или 425 000 сум.",
                },
                {
                  step: "2",
                  title: "Указание @username получателя Premium",
                  desc: "Только @username — пароль, логин или SMS-код не нужны. Если делаете подарок — указываете username другого человека.",
                },
                {
                  step: "3",
                  title: "Бот выдаёт номер карты и точную сумму",
                  desc: "После выбора тарифа бот показывает на экране номер карты и точную сумму платежа. Всё в сумах.",
                },
                {
                  step: "4",
                  title: "Перевод на карту через любое приложение",
                  desc: "Через Click, Payme, приложение Uzcard, Humo или приложение банка вы переводите указанную сумму на карту бота. Данные карты сохраняются только на сервере платёжной системы — бот их не видит. Выдаётся PDF-чек.",
                },
                {
                  step: "5",
                  title: "Активация Premium через официальный gift Telegram",
                  desc: "Мы через открытую систему gift Telegram отправляем Premium на ваш username. Никаких заходов в аккаунт или хака.",
                },
                {
                  step: "6",
                  title: "Premium активируется за 2-5 минут",
                  desc: "В вашем профиле появляется значок Premium. При технической задержке — до 10-15 минут.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-muted leading-relaxed">
              Главный факт: PremiumSend никогда не входит в аккаунт и не запрашивает пароль. Так устроен механизм gift Telegram — username достаточно.
            </p>
          </section>

          {/* Section 4 — Products */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Продукты и цены
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Все тарифы в сумах, без скрытых комиссий. Цены актуальны на 2026 год:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Тариф</div>
                <div className="text-center">Цена</div>
                <div className="text-center">В месяц</div>
                <div className="text-center">Страница</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">1 месяц</div>
                <div className="text-center">59 000 сум</div>
                <div className="text-center">59 000 сум</div>
                <div className="text-center">
                  <Link
                    href="/ru/1-oylik"
                    className="text-primary font-semibold hover:underline"
                  >
                    Подробнее
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">3 месяца</div>
                <div className="text-center">175 000 сум</div>
                <div className="text-center">58 333 сум</div>
                <div className="text-center">
                  <Link
                    href="/ru/3-oylik"
                    className="text-primary font-semibold hover:underline"
                  >
                    Подробнее
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">6 месяцев</div>
                <div className="text-center">235 000 сум</div>
                <div className="text-center">39 167 сум</div>
                <div className="text-center">
                  <Link
                    href="/ru/6-oylik"
                    className="text-primary font-semibold hover:underline"
                  >
                    Подробнее
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-4 p-4 items-center text-sm bg-primary-light/20">
                <div className="font-bold text-primary">12 месяцев ⭐</div>
                <div className="text-center font-bold text-primary">
                  425 000 сум
                </div>
                <div className="text-center font-bold text-primary">
                  35 417 сум
                </div>
                <div className="text-center">
                  <Link
                    href="/ru/12-oylik"
                    className="text-primary font-semibold hover:underline"
                  >
                    Подробнее
                  </Link>
                </div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Подарок:</strong> 3, 6 и 12-месячные тарифы можно подарить другому человеку. <strong>1-месячный подарок невозможен</strong> — это правило Telegram (не наше, но обязательное).
            </p>

            <p className="text-muted leading-relaxed">
              Подробнее о ценах и тарифах —{" "}
              <Link
                href="/ru/maqolalar/telegram-premium-narxlari"
                className="text-primary font-semibold hover:underline"
              >
                в статье &laquo;Цены Premium 2026&raquo;
              </Link>
              .
            </p>
          </section>

          {/* Section 5 — Payment methods */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Способы оплаты
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Доступны 5 способов. Все в сумах, все локальные:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: "Приложение Click",
                  desc: "Через Click P2P-перевод на указанную ботом карту. PIN или Face ID за 1-2 минуты. Ваша карта в приложении сохранена, номер вводить не нужно.",
                  link: "/ru/maqolalar/telegram-premium-click-orqali",
                  linkText: "Подробнее о Click",
                },
                {
                  title: "Payme",
                  desc: "Через Payme P2P-перевод на указанную ботом карту. Как Click — за 1-2 минуты по PIN/Face ID.",
                  link: "/ru/maqolalar/telegram-premium-payme-orqali",
                  linkText: "Подробнее о Payme",
                },
                {
                  title: "Uzcard",
                  desc: "P2P-перевод Uzcard. Через приложение банка или USSD. Подтверждение по SMS-коду, 2-3 минуты.",
                  link: "/ru/maqolalar/3-oylik-telegram-premium-uzcard-orqali",
                  linkText: "Подробнее о Uzcard",
                },
                {
                  title: "Humo",
                  desc: "P2P-перевод Humo — механизм как у Uzcard. Через приложение банка или SMS-банк, 2-3 минуты.",
                  link: "/ru/maqolalar/telegram-premium-humo-orqali",
                  linkText: "Подробнее о Humo",
                },
                {
                  title: "Visa",
                  desc: "Можно оплатить картой Visa — зарубежной или местной. Местные Visa-карты тоже принимаются.",
                  link: null,
                  linkText: null,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-5 border border-card-border shadow-sm"
                >
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-2">
                    {item.desc}
                  </p>
                  {item.link && (
                    <Link
                      href={item.link}
                      className="text-xs text-primary font-semibold hover:underline"
                    >
                      → {item.linkText}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <p className="text-muted leading-relaxed">
              Данные карты никогда не попадают на сервер бота — они сохраняются только на сервере платёжной системы (Click, Payme, банк). Этот механизм соответствует международному стандарту PCI DSS.
            </p>
          </section>

          {/* Section 6 — Trust signals */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Почему PremiumSend можно доверять
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Доверие — это не одно слово, а набор механизмов. Ниже — конкретные признаки, которые может проверить любой пользователь:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: "Только официальные платёжные системы",
                  desc: "Бот показывает номер карты и точную сумму, вы переводите через Click, Payme, Uzcard или Humo. Данные карты сохраняются только на сервере платёжной системы — бот их не видит.",
                },
                {
                  title: "PDF-чек на каждую оплату",
                  desc: "Click или Payme выдают PDF-чек. Документ можно перезагрузить и использовать при жалобе.",
                },
                {
                  title: "Запрашиваем только @username",
                  desc: "Для активации Premium нужен только Telegram username — ваш или того, кому делается подарок. Пароль, логин, SMS — не нужны.",
                },
                {
                  title: "Сайт и бот связаны",
                  desc: "Домен premiumsend.uz работает по HTTPS. На сайте — ссылка на @PremiumSendBot, в боте — ссылка на premiumsend.uz.",
                },
                {
                  title: "Страница оферты",
                  desc: "На /oferta прописаны условия возврата, границы ответственности и контакты. Юридический документ.",
                },
                {
                  title: "Тариф и цена заранее",
                  desc: "В меню бота цена указана конкретным числом. При оплате не появляется &laquo;дополнительная комиссия&raquo; или &laquo;спецсбор&raquo;.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-5 border border-card-border shadow-sm"
                >
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-muted leading-relaxed">
              Чтобы отличить мошеннических ботов —{" "}
              <Link
                href="/ru/maqolalar/telegram-premium-xavfsiz-aldovdan-saqlanish"
                className="text-primary font-semibold hover:underline"
              >
                отдельная статья о 8 признаках проверки
              </Link>
              {" "}— универсальные правила для оценки любого реселлера.
            </p>
          </section>

          {/* Section 7 — Errors and refunds */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Что если возникла техническая ошибка?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Честный ответ: технические сбои редки, но не нулевые. Кратковременные задержки на стороне Telegram или нагрузка на местной платёжной системе могут замедлить активацию Premium. В таких случаях:
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  Задержка 10-15 минут
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Бот автоматически отслеживает, и Premium активируется не за 5, а за 10-15 минут. Никаких действий от вас не требуется.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  Ожидание более 30 минут
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Обратитесь в поддержку бота с номером PDF-чека Click/Payme. Ручная активация выполняется в течение 30 минут.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  Невозможно активировать (редко)
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Если из-за временных ограничений Telegram или неправильного username Premium не активируется — деньги возвращаются полностью. Через Click или Payme за 1-3 рабочих дня.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Точные условия возврата —{" "}
              <Link
                href="/ru/oferta"
                className="text-primary font-semibold hover:underline"
              >
                на странице /oferta
              </Link>
              . Это обязательный юридический документ для любого реселлера.
            </p>
          </section>

          {/* Section 8 — Contact */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Контакты и поддержка
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Главный канал связи — Telegram-бот. Сайт — для дополнительной информации и статей.
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-sm p-6 md:p-8 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-foreground mb-2">
                    🤖 Telegram-бот
                  </h3>
                  <p className="text-sm text-muted mb-3">
                    Главный канал заказа. Выбор тарифа, оплата, поддержка — всё в боте.
                  </p>
                  <Link
                    href="https://t.me/premiumsendbot"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                  >
                    @PremiumSendBot →
                  </Link>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">
                    🌐 Сайт
                  </h3>
                  <p className="text-sm text-muted mb-3">
                    Для тарифов, цен, статей и технической информации.
                  </p>
                  <Link
                    href="/ru"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                  >
                    premiumsend.uz →
                  </Link>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">
                    📚 Статьи
                  </h3>
                  <p className="text-sm text-muted mb-3">
                    30+ руководств о Premium — цены, сравнения, безопасность.
                  </p>
                  <Link
                    href="/ru/maqolalar"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                  >
                    /maqolalar →
                  </Link>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">
                    📜 Оферта
                  </h3>
                  <p className="text-sm text-muted mb-3">
                    Возврат средств, ответственность и условия услуги.
                  </p>
                  <Link
                    href="/ru/oferta"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                  >
                    /oferta →
                  </Link>
                </div>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Поддержка работает в боте — на ваш вопрос первый ответ приходит в течение 30 минут — нескольких часов. Работаем по местному времени, на UZ и RU.
            </p>
          </section>

          {/* Conclusion CTA */}
          <section>
            <div className="hero-gradient rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-5 left-5 w-32 h-32 bg-white rounded-full blur-2xl" />
              </div>
              <div className="relative">
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  PremiumSend — местный независимый реселлер. В сумах, с местной картой, по честному механизму.{" "}
                  <strong className="text-white">@PremiumSendBot</strong> — начать можно с 1 месяца за 59 000 сум.
                </p>
                <Link
                  href="https://t.me/premiumsendbot"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  Открыть бот
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
