import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Telegram Premium через Click — за 1-2 минуты, пошагово",
  description:
    "Telegram Premium через Click — от 59 000 до 425 000 сум. @PremiumSendBot, оплата через Click за 1-2 минуты, активация Premium за 5 минут. Самый быстрый локальный способ.",
  keywords: [
    "Telegram Premium Click",
    "Telegram Premium через Click",
    "Telegram Premium приложение Click",
    "купить Telegram Premium Click",
    "Telegram Premium быстро",
    "PremiumSendBot Click",
  ],
  alternates: {
    canonical: "https://premiumsend.uz/ru/maqolalar/telegram-premium-click-orqali",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/telegram-premium-click-orqali",
      ru: "https://premiumsend.uz/ru/maqolalar/telegram-premium-click-orqali",
    },
  },
  openGraph: {
    title: "Telegram Premium через Click — самый быстрый способ",
    description:
      "Оплата Telegram Premium в Click в сумах. 4 тарифа, оплата за 1-2 минуты, активация за 5 минут, 0% комиссии.",
    url: "https://premiumsend.uz/ru/maqolalar/telegram-premium-click-orqali",
    type: "article",
    publishedTime: "2026-05-03",
  },
};

export default function ArticleClickOrqaliRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Telegram Premium через Click — пошаговое руководство",
    description:
      "Покупка Telegram Premium через приложение Click в Узбекистане — все тарифы, цены и пошаговая инструкция.",
    datePublished: "2026-05-03",
    dateModified: "2026-05-03",
    author: {
      "@type": "Organization",
      name: "Premium Send",
      url: "https://premiumsend.uz",
    },
    publisher: {
      "@type": "Organization",
      name: "Premium Send",
      url: "https://premiumsend.uz",
    },
    mainEntityOfPage:
      "https://premiumsend.uz/ru/maqolalar/telegram-premium-click-orqali",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Можно ли купить Telegram Premium через Click?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. В @PremiumSendBot можно купить Telegram Premium через приложение Click. Поддерживаются все тарифы (1, 3, 6, 12 месяцев). Оплата в сумах, без комиссии, в Click занимает 1-2 минуты, Premium активируется за 5 минут.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько стоит Telegram Premium через Click?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Цены через Click такие же, как через Uzcard и Humo: 1 месяц — 59 000 сум, 3 месяца — 175 000 сум, 6 месяцев — 235 000 сум, 12 месяцев — 425 000 сум. Способ оплаты не влияет на цену. Click не берёт дополнительной комиссии.",
        },
      },
      {
        "@type": "Question",
        name: "Почему оплата через Click — самый быстрый способ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "В Click ваша карта уже привязана — на каждую оплату не нужно вводить номер и пароль. Нажимаете кнопку оплаты у бота — открывается приложение, сумма заполняется автоматически, остаётся только подтвердить. Оплата занимает 1-2 минуты.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли купить Premium без приложения Click?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. В @PremiumSendBot вместе с Click есть Uzcard P2P, Humo и Payme. Если Click не установлен, выберите другой способ — цена одинаковая. Установить Click из Play Market или App Store бесплатно — занимает 2-3 минуты.",
        },
      },
      {
        "@type": "Question",
        name: "Безопасна ли оплата через Click?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Click — лицензированная Центробанком Узбекистана платёжная система, соответствует стандарту PCI DSS. Данные карты хранятся только в Click, бот их не видит. На каждую оплату выдаётся чек. Если Premium не придёт, оплаченная сумма возвращается полностью.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли оплатить Premium через Click в официальном приложении Telegram?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет. Официальное приложение Telegram принимает только Visa, Mastercard, Google Pay и Apple Pay. Click в этой системе нет. Для местной оплаты нужен сервис вроде @PremiumSendBot — результат тот же, но оплата в сумах через местное приложение.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли подарить Premium через Click?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Premium на 3, 6 или 12 месяцев можно подарить, оплачивая через Click. Бот спросит username — оплачиваете в Click, Premium активируется на этом аккаунте. По правилам Telegram 1-месячный подарок невозможен.",
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
      { "@type": "ListItem", position: 3, name: "Telegram Premium через Click", item: "https://premiumsend.uz/ru/maqolalar/telegram-premium-click-orqali" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-muted">
        <Link href="/ru" className="hover:text-primary">Главная</Link>
        <span className="mx-2">/</span>
        <Link href="/ru/maqolalar" className="hover:text-primary">Статьи</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">Telegram Premium через Click</span>
      </nav>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">
              Руководство
            </span>
            <time className="text-xs text-muted" dateTime="2026-05-03">
              3 мая 2026
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Telegram Premium через Click — самый быстрый локальный способ
          </h1>

          {/* TL;DR */}
          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>Кратко:</strong> Telegram Premium через Click покупается в{" "}
              <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>. Цены: <strong>1 месяц — 59 000 сум</strong>, <strong>3 месяца — 175 000 сум</strong>, <strong>6 месяцев — 235 000 сум</strong>, <strong>12 месяцев — 425 000 сум</strong>. В Click оплата занимает 1-2 минуты, Premium активируется за 5 минут. Комиссия 0%.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Click — самая распространённая мобильная платёжная система Узбекистана. Через приложение с привязанной картой любая онлайн-оплата проходит за пару кликов. При покупке Telegram Premium Click сохраняет тот же опыт &quot;быстро и просто&quot; — нет лишних шагов, не надо вводить номер карты на каждой оплате.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Это руководство раскрывает полный процесс покупки Telegram Premium через Click: почему этот способ самый быстрый, какие тарифы доступны, пошаговая инструкция и часто задаваемые вопросы.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 — Why Click is special */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Почему Click — самый быстрый локальный путь к Premium?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Click — это не карта, а <strong>платёжная система</strong>. Главное отличие именно в этом. Uzcard и Humo — карты (как Visa и Mastercard). Click стоит над ними: в приложение Click один раз привязывается Uzcard или Humo, и потом на каждой оплате вводить карту заново не нужно.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              При покупке Premium это даёт важное преимущество. Для большинства пользователей:
            </p>
            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li><strong className="text-foreground">Не надо вводить номер карты и CVV</strong> — приложение запомнило один раз</li>
              <li><strong className="text-foreground">Вместо SMS-кода — PIN или Face ID</strong> — быстрее, без сети</li>
              <li><strong className="text-foreground">Оплата в один клик</strong> — нажимаете на ссылку бота, сумма заполняется автоматически</li>
              <li><strong className="text-foreground">Чек сразу в PDF</strong> — легко сохранить или отправить</li>
            </ul>
            <p className="text-muted leading-relaxed mb-4">
              В официальном приложении Telegram Click вообще не работает — Telegram принимает только Visa, Mastercard, Google Pay и Apple Pay. Click, Uzcard и Humo в эту систему не включены. Поэтому нужен местный сервис-посредник.
            </p>
            <div className="bg-section-alt rounded-xl p-5">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Кратко:</strong> Telegram не принимает Click, но Click — самый простой и быстрый локальный способ оплаты. @PremiumSendBot объединяет эти две вещи — вы платите через Click, сервис активирует Premium.
              </p>
            </div>
          </section>

          {/* Section 2 — Pricing */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Telegram Premium через Click — все тарифы и цены
            </h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Цены:</strong> 4 тарифа доступны и через Click. 1 месяц — <strong>59 000 сум</strong>, 3 месяца — <strong>175 000 сум</strong>, 6 месяцев — <strong>235 000 сум</strong>, 12 месяцев — <strong>425 000 сум</strong>. Click не берёт дополнительную комиссию.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Тариф</div>
                <div className="text-center">Общая цена</div>
                <div className="text-center">В месяц</div>
                <div className="text-center">Экономия</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">1 месяц</div>
                <div className="text-center">59 000 сум</div>
                <div className="text-center">59 000 сум</div>
                <div className="text-center text-muted">—</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">3 месяца</div>
                <div className="text-center">175 000 сум</div>
                <div className="text-center">58 333 сум</div>
                <div className="text-center text-green-600 font-bold">1%</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">6 месяцев</div>
                <div className="text-center">235 000 сум</div>
                <div className="text-center">39 167 сум</div>
                <div className="text-center text-green-600 font-bold">33%</div>
              </div>
              <div className="grid grid-cols-4 p-4 items-center text-sm bg-primary-light/20">
                <div className="font-bold text-primary">12 месяцев ⭐</div>
                <div className="text-center font-bold text-primary">425 000 сум</div>
                <div className="text-center font-bold text-primary">35 417 сум</div>
                <div className="text-center text-green-600 font-bold">39%</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Оплата через Click никак не влияет на цену — нет скрытых комиссий, нет курсовой разницы. Подробнее о тарифах:{" "}
              <Link href="/ru/maqolalar/telegram-premium-narxlari" className="text-primary font-semibold hover:underline">статья о ценах</Link>.
            </p>
          </section>

          {/* Section 3 — Step by step */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Как купить Telegram Premium через Click — пошагово
            </h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Краткий ответ:</strong> откройте{" "}
                <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>{" "}
                → выберите тариф → введите username → выберите <strong>Click</strong> → откроется приложение Click → подтвердите → Premium активируется за 5 минут.
              </p>
            </div>

            <p className="text-muted leading-relaxed mb-6">
              Ниже — каждый шаг подробно. Если приложение Click установлено и карта привязана, весь процесс занимает 3-5 минут:
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  step: "1",
                  title: "Найдите @PremiumSendBot в Telegram",
                  desc: "Введите @PremiumSendBot в поиске Telegram. Откройте бота с галочкой проверки. Нажмите /start.",
                },
                {
                  step: "2",
                  title: "Выберите тариф",
                  desc: "Бот покажет 4 тарифа: 1, 3, 6, 12 месяцев. Для пробы хватит 1-месячного (59 000), для постоянного использования выгоднее 12-месячный (425 000). Выберите подходящий.",
                },
                {
                  step: "3",
                  title: "Введите username аккаунта для Premium",
                  desc: "После @ напишите username в Telegram. Это ваш аккаунт или того, кому дарите. Если ошибиться — Premium активируется на чужом аккаунте. Проверьте дважды.",
                },
                {
                  step: "4",
                  title: "Выберите способ оплаты — \"Click\"",
                  desc: "Появится 4 варианта: Uzcard, Humo, Click, Payme. Нажмите \"Click\". Бот пришлёт ссылку или QR-код для оплаты в Click.",
                },
                {
                  step: "5",
                  title: "Приложение Click открывается автоматически",
                  desc: "По нажатию ссылки телефон откроет приложение Click и сумма заполнится автоматически. Не нужно вводить номер карты, пароль или CVV — всё хранится в приложении.",
                },
                {
                  step: "6",
                  title: "Подтвердите PIN-кодом или Face ID",
                  desc: "Click подтверждает оплату по PIN-коду (или Face ID/отпечатку). SMS-код не нужен. Оплата проходит за секунду.",
                },
                {
                  step: "7",
                  title: "Premium активируется за 5 минут",
                  desc: "После подтверждения оплаты Premium включается на аккаунте автоматически. Бот пришлёт уведомление, в профиле появится значок Premium. При технической задержке — 10-15 минут.",
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
              Большинство пользователей Click заканчивают весь процесс за 3-5 минут. После активации Premium в течение всего срока тарифа никаких повторных оплат.
            </p>
          </section>

          {/* Mid CTA */}
          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Приложение Click готово?{" "}
                <strong className="text-white">@PremiumSendBot</strong> — оплатите 1, 3, 6 или 12 месяцев Premium через Click быстро. Оплата — за 1-2 минуты.
              </p>
              <Link
                href="https://t.me/premiumsendbot"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                @PremiumSendBot — начать
              </Link>
            </div>
          </section>

          {/* Section 4 — Click vs other methods */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Click vs Uzcard P2P vs Payme: какой способ удобнее?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              @PremiumSendBot предлагает три направления оплаты: Click, Payme и Uzcard P2P. Цена везде одинаковая — 175 000 сум (на примере 3-месячного). Но скорость и удобство отличаются:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Параметр</div>
                <div className="text-center">Click</div>
                <div className="text-center">Payme</div>
                <div className="text-center">Uzcard P2P</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Время оплаты</div>
                <div className="text-center text-green-600 font-bold">1-2 минуты</div>
                <div className="text-center text-green-600 font-bold">1-2 минуты</div>
                <div className="text-center">2-3 минуты</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Ввод номера карты</div>
                <div className="text-center text-green-600">Нет</div>
                <div className="text-center text-green-600">Нет</div>
                <div className="text-center">Да</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Способ подтверждения</div>
                <div className="text-center">PIN/Face ID</div>
                <div className="text-center">PIN/Face ID</div>
                <div className="text-center">SMS-код</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Комиссия</div>
                <div className="text-center text-green-600 font-bold">0%</div>
                <div className="text-center text-green-600 font-bold">0%</div>
                <div className="text-center text-green-600 font-bold">0%</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Тип карты</div>
                <div className="text-center">Uzcard, Humo</div>
                <div className="text-center">Uzcard, Humo</div>
                <div className="text-center">Только эта карта</div>
              </div>
              <div className="grid grid-cols-4 p-4 items-center text-sm">
                <div className="font-medium">Кому подойдёт</div>
                <div className="text-center text-muted text-xs">Установлен Click</div>
                <div className="text-center text-muted text-xs">Установлен Payme</div>
                <div className="text-center text-muted text-xs">Через банковское приложение</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Вывод:</strong> Click и Payme — практически равны. Оба дают одинаковый опыт &quot;через приложение&quot;. У большинства пользователей Узбекистана установлено и то, и другое. Click — чуть распространённее, Payme — чуть быстрее. Какой удобнее, тот и выбирайте.
            </p>
            <p className="text-muted leading-relaxed">
              Uzcard P2P — старый стиль: ручной ввод карты, ожидание SMS. Если нет Click или Payme — работает; если есть — приложение быстрее.
            </p>
          </section>

          {/* Section 5 — Safety */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Безопасна ли оплата через Click?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Click — официальная платёжная система, лицензированная Центральным банком Узбекистана. Соответствует стандарту PCI DSS. Миллионы пользователей применяют его для коммунальных платежей, мобильной связи, интернета. Для Telegram Premium механизм такой же — отдельных рисков нет.
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">🔐 Данные карты — на сервере Click</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Номер карты, пароль и CVV хранятся только на защищённых серверах Click. @PremiumSendBot не имеет доступа к этим данным. Бот видит только факт &quot;оплата получена&quot;.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">💰 Гарантия возврата</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Если Premium не активируется по технической ошибке, оплаченная сумма возвращается полностью. По номеру чека из Click процесс возврата быстрый — это стандартное правило для реселлера.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">📋 Чек Click — юридический документ</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Click выдаёт PDF-чек на каждую оплату. Он хранится в приложении и в любой момент можно перезагрузить. При проблеме поддержка по номеру чека сразу найдёт оплату.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">🛡️ Двухуровневая защита</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Click — PIN/Face ID + проверка банковского баланса. Бот — подтверждение username + активация Premium. На каждом шаге контроль — если где-то проблема, процесс останавливается с понятной ошибкой.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Покупка Premium через Click — настолько же безопасна, как обычная оплата Click. Дополнительного технического риска нет.
            </p>
          </section>

          {/* Section 6 — Common issues */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Проблемы при оплате через Click и их решения
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Большинство оплат Click проходят без проблем — приложение давно отлажено и работает стабильно. Но иногда могут возникнуть мелкие препятствия со стороны банка или сети:
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">В Click не хватает баланса</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Самая частая причина. <strong>Решение:</strong> в Click проверьте карту — если баланса достаточно, приложение работает обычно. Не хватает — выберите другую карту или пополните карту через приложение.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Click не открыл ссылку</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Возможна устаревшая версия телефона или Click ждёт обновления. <strong>Решение:</strong> обновите Click из Play Market или App Store. После обновления нажмите на ссылку бота заново.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Деньги списались, а Premium не пришёл</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Система иногда обрабатывает чуть дольше. <strong>Решение:</strong> подождите 10-15 минут. Если так и не активировалось — отправьте номер чека Click в поддержку бота. После ручной проверки Premium включат, либо вернут деньги.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Нет приложения Click — как установить?</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Скачайте Click из Play Market (Android) или App Store (iPhone) — бесплатно. Зарегистрируйтесь по номеру телефона (3 минуты), привяжите Uzcard или Humo — потом оплата в один клик. <strong>Или:</strong> в боте выберите Payme или Uzcard P2P.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Забыл PIN-код Click</h3>
                <p className="text-sm text-muted leading-relaxed">
                  <strong>Решение:</strong> используйте функцию &quot;Восстановить PIN&quot; в Click. Восстановление по номеру телефона занимает 5 минут. Восстановите и попробуйте оплатить заново.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Большинство проблем решаются сразу. Поддержка бота помогает в любой ситуации и предлагает альтернативу (Payme или Uzcard P2P).
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">
              Часто задаваемые вопросы
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Можно ли купить Telegram Premium через Click?",
                  a: "Да. В @PremiumSendBot можно купить Telegram Premium через приложение Click. Все тарифы (1, 3, 6, 12 месяцев) поддерживаются. Оплата в сумах, без комиссии, Premium активируется за 5 минут.",
                },
                {
                  q: "Сколько стоит Telegram Premium через Click?",
                  a: "Цены такие же, как через Uzcard и Humo: 1 месяц — 59 000 сум, 3 месяца — 175 000 сум, 6 месяцев — 235 000 сум, 12 месяцев — 425 000 сум. Click не берёт дополнительную комиссию.",
                },
                {
                  q: "Почему оплата через Click — самая быстрая?",
                  a: "В Click ваша карта уже привязана — на каждой оплате не нужно вводить номер, пароль и CVV. Оплата проходит за 1-2 минуты по PIN или Face ID, без ожидания SMS.",
                },
                {
                  q: "Что делать, если нет приложения Click?",
                  a: "Скачайте Click из Play Market или App Store бесплатно (3-5 минут). Или выберите Payme или Uzcard P2P в @PremiumSendBot — цена одинаковая.",
                },
                {
                  q: "Безопасна ли оплата через Click?",
                  a: "Да. Click — лицензированная Центробанком платёжная система, соответствует PCI DSS. Данные карты хранятся только в Click, бот не видит. Если Premium не придёт, деньги возвращаются.",
                },
                {
                  q: "Можно ли оплатить через Click в официальном приложении Telegram?",
                  a: "Нет. Telegram принимает только Visa, Mastercard, Google Pay и Apple Pay. Click в этой системе нет. Для местной оплаты нужен сервис вроде @PremiumSendBot.",
                },
                {
                  q: "Можно ли подарить Premium через Click?",
                  a: "Да. Premium на 3, 6 или 12 месяцев можно подарить, оплачивая через Click. Бот спросит username, оплачиваете в Click — Premium активируется на этом аккаунте. По правилам Telegram 1-месячный подарок невозможен.",
                },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                  <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Trust Block */}
          <section>
            <div className="bg-section-alt rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-bold text-foreground mb-4 text-center">
                Premium через Click — в цифрах
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">1-2 мин.</p>
                  <p className="text-sm text-muted">время оплаты</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">5 мин.</p>
                  <p className="text-sm text-muted">активация Premium</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">0%</p>
                  <p className="text-sm text-muted">дополнительной комиссии</p>
                </div>
              </div>
            </div>
          </section>

          {/* Related cluster links */}
          <section>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-card-border">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Руководства по способам оплаты
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-4">
                Все тарифы доступны и для пользователей Click. Выбирайте по сроку:
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/ru/maqolalar/telegram-premium-humo-orqali" className="text-primary font-semibold hover:underline">
                    Premium через карту Humo (для сравнения)
                  </Link>
                </li>
                <li>
                  <Link href="/ru/maqolalar/telegram-premium-narxlari" className="text-primary font-semibold hover:underline">
                    Цены Telegram Premium — сравнение тарифов
                  </Link>
                </li>
                <li>
                  <Link href="/ru/maqolalar/telegram-premium-eng-arzon-qayerdan-sotib-olish" className="text-primary font-semibold hover:underline">
                    Где Telegram Premium дешевле всего
                  </Link>
                </li>
                <li>
                  <Link href="/ru/maqolalar/3-oylik-telegram-premium-uzcard-orqali" className="text-primary font-semibold hover:underline">
                    3-месячный Premium через Uzcard (для сравнения)
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <div className="hero-gradient rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-5 left-5 w-32 h-32 bg-white rounded-full blur-2xl" />
              </div>
              <div className="relative">
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  Приложение Click готово? Получите Telegram Premium самым быстрым локальным путём. 1, 3, 6 или 12 месяцев — оплата в сумах, подтверждение в Click за 1-2 минуты, активация за 5 минут.{" "}
                  <strong className="text-white">@PremiumSendBot</strong> — начните в несколько кликов.
                </p>
                <Link
                  href="https://t.me/premiumsendbot"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
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
