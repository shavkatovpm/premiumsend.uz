import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Купить Telegram Premium на 1 месяц — в Узбекистане за сумы, через Uzcard и Humo",
  description:
    "Купить Telegram Premium на 1 месяц в Узбекистане за 59 000 сум. Оплата через Uzcard, Humo. Через @premiumsend_admin. Пошаговая инструкция.",
  keywords: [
    "купить Telegram Premium 1 месяц",
    "Telegram Premium 1 месяц цена в сумах",
    "Telegram Premium Uzcard купить",
    "Telegram Premium Humo купить",
    "Telegram Premium Узбекистан",
    "Telegram Premium за сумы",
    "Telegram Premium 1 month Uzbekistan buy",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/ru/maqolalar/1-oylik-telegram-premium-sotib-olish",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/1-oylik-telegram-premium-sotib-olish",
      ru: "https://premiumsend.uz/ru/maqolalar/1-oylik-telegram-premium-sotib-olish",
    },
  },
  openGraph: {
    title: "Купить Telegram Premium на 1 месяц — в Узбекистане за сумы",
    description:
      "Через @premiumsend_admin купите 1-месячный Telegram Premium за сумы через Uzcard, Humo.",
    url: "https://premiumsend.uz/ru/maqolalar/1-oylik-telegram-premium-sotib-olish",
    type: "article",
    publishedTime: "2026-04-07",
  },
};

export default function Article1Month() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Купить Telegram Premium на 1 месяц — в Узбекистане за сумы, через Uzcard и Humo",
    description:
      "Купить Telegram Premium на 1 месяц в Узбекистане за 59 000 сум. Пошаговая инструкция.",
    datePublished: "2026-04-07",
    dateModified: "2026-04-07",
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
      "https://premiumsend.uz/ru/maqolalar/1-oylik-telegram-premium-sotib-olish",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько стоит Telegram Premium на 1 месяц?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "В Premium Send стоимость Telegram Premium на 1 месяц составляет 59 000 сум. Оплата в узбекских сумах — через Uzcard, Humo. Также можно оплатить через Click или Payme.",
        },
      },
      {
        "@type": "Question",
        name: "Нужна ли иностранная карта для покупки 1-месячного Telegram Premium?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет. Через @premiumsend_admin можно оплатить картой Uzcard или Humo в сумах. Также принимаются Click и Payme. Иностранная карта не требуется.",
        },
      },
      {
        "@type": "Question",
        name: "Когда активируется Premium после оплаты?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Обычно в течение нескольких минут. После подтверждения оплаты отправляется Premium gift, который активируется автоматически.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли купить 1-месячный Premium для другого человека?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Достаточно указать Telegram username этого человека. Premium активируется на его аккаунте.",
        },
      },
      {
        "@type": "Question",
        name: "Безопасно ли покупать через Premium Send?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, полностью безопасно. Premium Send активирует подписку через официальный механизм Telegram Premium gift. Доступ к аккаунту или пароль не запрашиваются.",
        },
      },
      {
        "@type": "Question",
        name: "Какие пакеты есть в Premium Send?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "В Premium Send доступны: 1 месяц (59 000 сум), 3 месяца (175 000 сум), 6 месяцев (235 000 сум) и 12 месяцев (425 000 сум).",
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
        name: "Статьи",
        item: "https://premiumsend.uz/ru/maqolalar",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Купить Telegram Premium на 1 месяц",
        item: "https://premiumsend.uz/ru/maqolalar/1-oylik-telegram-premium-sotib-olish",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
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
        <Link href="/ru/maqolalar" className="hover:text-primary">
          Статьи
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">
          Купить Telegram Premium на 1 месяц
        </span>
      </nav>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">
              Руководство
            </span>
            <time className="text-xs text-muted" dateTime="2026-04-07">
              7 апреля 2026
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Купить Telegram Premium на 1 месяц
          </h1>
          {/* AI/SEO Snippet */}
          <div className="bg-primary-light/50 rounded-xl p-5 border border-primary/10 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>1-месячный Telegram Premium</strong> можно купить в Узбекистане через <Link href="https://t.me/premiumsend_admin" target="_blank" className="text-primary hover:underline">@premiumsend_admin</Link> за <strong>59 000 сум</strong>, оплатив картой Uzcard или Humo. Иностранная карта не нужна — оплата в сумах, активация за несколько минут.
            </p>
          </div>
          <p className="text-lg text-muted leading-relaxed">
            Реклама в каналах мешает читать контент? Лимит на файлы в 2 ГБ не даёт отправить видео? Или вы просто хотите попробовать Telegram Premium, но не можете оплатить из-за отсутствия иностранной карты? С этой проблемой сталкиваются миллионы пользователей Telegram в Узбекистане.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            В этой статье мы подробно расскажем, как купить Telegram Premium на 1 месяц в Узбекистане — за сумы, через Uzcard и Humo, быстро и безопасно.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Как купить 1-месячный Telegram Premium в Узбекистане?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Самый простой и надёжный способ <strong className="text-foreground">купить Telegram Premium на 1 месяц</strong> в Узбекистане — через сервис Premium Send. В самом Telegram 1-месячная подписка есть, но оплатить её можно только иностранной картой — Google Pay, Apple Pay или Visa/MasterCard. Карты Uzcard и Humo не принимаются.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Для большинства пользователей в Узбекистане это серьёзное препятствие, ведь основные платёжные средства в стране — Uzcard и Humo. Premium Send решает именно эту проблему: вы платите в сумах местной картой, а мы отправляем вам Telegram Premium gift.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Процесс максимально простой: напишите <Link href="https://t.me/premiumsend_admin" target="_blank" className="text-primary hover:underline">@premiumsend_admin</Link> в Telegram, выберите 1-месячный пакет, оплатите и получите Premium за несколько минут. Никакие пароли или доступ к аккаунту не требуются — это полностью безопасный процесс.
            </p>
            <div className="bg-section-alt rounded-xl p-6 mb-4">
              <h3 className="font-bold text-foreground mb-3">
                Кратко: что нужно для покупки 1-месячного Telegram Premium?
              </h3>
              <ul className="space-y-2 text-muted text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">1.</span>
                  <span>Телефон с установленным Telegram</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">2.</span>
                  <span>Карта Uzcard или Humo (также принимаются Click, Payme)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">3.</span>
                  <span>59 000 сум — стоимость 1-месячного Premium</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Стоимость и способы оплаты 1-месячного Telegram Premium
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Стоимость Telegram Premium на 1 месяц</strong> в Premium Send — <strong className="text-foreground">59 000 сум</strong>. Это самый доступный вариант — чтобы попробовать Telegram Premium, не нужно тратить большую сумму.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Для сравнения: в самом Telegram 1-месячная подписка стоит около $3.99, что по текущему курсу составляет примерно 51 000–52 000 сум. Но оплатить её можно только иностранной картой. Premium Send убирает это препятствие и предоставляет удобные способы оплаты.
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Способ оплаты</div>
                <div className="text-center">Поддерживается</div>
                <div className="text-center">Примечание</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center">
                <div className="font-semibold text-foreground">Uzcard</div>
                <div className="text-center text-green-600 font-bold">Да</div>
                <div className="text-center text-sm text-muted">Напрямую</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center">
                <div className="font-semibold text-foreground">Humo</div>
                <div className="text-center text-green-600 font-bold">Да</div>
                <div className="text-center text-sm text-muted">Напрямую</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center">
                <div className="font-semibold text-foreground">Click</div>
                <div className="text-center text-green-600 font-bold">Да</div>
                <div className="text-center text-sm text-muted">Перевод на карту</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center">
                <div className="font-semibold text-foreground">Payme</div>
                <div className="text-center text-green-600 font-bold">Да</div>
                <div className="text-center text-sm text-muted">Перевод на карту</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              Если вы планируете использовать Premium дольше, ознакомьтесь с другими пакетами — ежемесячная стоимость будет ниже:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-4">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Пакет</div>
                <div className="text-center">Цена</div>
                <div className="text-center">В месяц</div>
                <div className="text-center">Экономия</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border bg-primary-light/30 items-center">
                <div className="font-bold text-primary">1 месяц</div>
                <div className="text-center font-semibold">59 000</div>
                <div className="text-center text-sm text-muted">59 000</div>
                <div className="text-center text-sm">&mdash;</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center">
                <div className="font-bold">3 месяца</div>
                <div className="text-center font-semibold">175 000</div>
                <div className="text-center text-sm text-muted">58 333</div>
                <div className="text-center text-sm text-green-600 font-medium">-1%</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center">
                <div className="font-bold">6 месяцев</div>
                <div className="text-center font-semibold">235 000</div>
                <div className="text-center text-sm text-muted">39 167</div>
                <div className="text-center text-sm text-green-600 font-medium">-34%</div>
              </div>
              <div className="grid grid-cols-4 p-4 items-center">
                <div className="font-bold">12 месяцев</div>
                <div className="text-center font-semibold">425 000</div>
                <div className="text-center text-sm text-muted">35 417</div>
                <div className="text-center text-sm text-green-600 font-medium">-40%</div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Пошаговая инструкция: покупка через @premiumsend_admin
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Весь процесс занимает всего 3–5 минут. Ниже каждый шаг описан подробно:
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full hero-gradient text-white text-lg font-bold flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Напишите @premiumsend_admin в Telegram</h3>
                    <p className="text-sm text-muted leading-relaxed">
                      Откройте Telegram и напишите <Link href="https://t.me/premiumsend_admin" target="_blank" className="text-primary hover:underline">@premiumsend_admin</Link>. Достаточно написать &laquo;Хочу Premium на 1 месяц&raquo;. Админ отправит вам инструкцию по оплате.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full hero-gradient text-white text-lg font-bold flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Оплатите 59 000 сум</h3>
                    <p className="text-sm text-muted leading-relaxed">
                      Переведите оплату по реквизитам, которые пришлёт админ. Можно оплатить напрямую с Uzcard или Humo. Также принимаются переводы через Click или Payme. Отправьте скриншот чека.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full hero-gradient text-white text-lg font-bold flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Telegram Premium активируется</h3>
                    <p className="text-sm text-muted leading-relaxed">
                      После подтверждения оплаты вам будет отправлен Telegram Premium gift. Он активируется автоматически — в течение нескольких минут. Доступ к аккаунту или пароль не запрашиваются.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Весь процесс — от написания сообщения до активации Premium — обычно занимает 5–10 минут. Это быстрее и удобнее, чем через официальное приложение Telegram, поскольку не нужно искать иностранную карту или использовать VPN.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Какие возможности открывает 1-месячный Telegram Premium?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Подписка Telegram Premium — это не просто &laquo;звёздочка&raquo; рядом с именем. Это реальные функциональные возможности, которые заметно улучшают ваш опыт использования Telegram. В течение 1 месяца вы получаете полный доступ ко всем функциям:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: "Загрузка файлов до 4 ГБ",
                  desc: "Обычный лимит — 2 ГБ. С Premium вы без проблем отправляете большие видео, архивы и документы.",
                },
                {
                  title: "Мгновенный перевод",
                  desc: "Переводите сообщения на любой язык одним нажатием — в реальном времени.",
                },
                {
                  title: "Каналы без рекламы",
                  desc: "Все рекламные сообщения в каналах Telegram полностью скрываются.",
                },
                {
                  title: "Премиум-стикеры и эмодзи",
                  desc: "Эксклюзивные анимированные стикеры и реакции, доступные только Premium-пользователям.",
                },
                {
                  title: "Голосовое сообщение в текст",
                  desc: "Автоматическое преобразование голосовых сообщений в текст для удобного чтения.",
                },
                {
                  title: "Ускоренная загрузка",
                  desc: "Медиа и файлы загружаются через Premium-серверы в два раза быстрее.",
                },
                {
                  title: "Расширенный профиль",
                  desc: "Добавьте особый цвет, значок и форматированный текст в свой профиль.",
                },
                {
                  title: "Больше каналов",
                  desc: "Подписывайтесь на до 1000 каналов — обычный лимит составляет 500.",
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
              Все эти функции полностью доступны в течение 1-месячной подписки — без каких-либо ограничений. Функционал 1-месячного и 12-месячного Premium абсолютно одинаковый.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              1 месяц или более длительный срок — что выбрать?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Этот вопрос волнует многих. У каждого пакета свои преимущества, и правильный выбор зависит от ваших потребностей.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              <strong className="text-foreground">1-месячный пакет</strong> — лучший выбор в следующих случаях:
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-section-alt rounded-xl p-5">
                <h3 className="font-bold text-foreground mb-1">Хотите попробовать впервые</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Действительно ли вам нужен Telegram Premium? 1 месяца достаточно, чтобы это выяснить. 59 000 сум — это не большой риск, но достаточно, чтобы полностью оценить все возможности.
                </p>
              </div>
              <div className="bg-section-alt rounded-xl p-5">
                <h3 className="font-bold text-foreground mb-1">Ограниченный бюджет</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Нет возможности заплатить 175 000 или 235 000 сум сразу? 1-месячный пакет — самый доступный вариант, всего 59 000 сум. Если понравится — можно перейти на более длительный срок.
                </p>
              </div>
              <div className="bg-section-alt rounded-xl p-5">
                <h3 className="font-bold text-foreground mb-1">Временная потребность</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Например, нужно отправить большие файлы или на определённый период смотреть каналы без рекламы. В таком случае 1-месячный пакет — самый целесообразный.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Если вы планируете пользоваться Premium длительное время, рассмотрите <Link href="/ru/3-oylik" className="text-primary font-semibold hover:underline">3-месячный</Link> (175 000 сум), <Link href="/ru/6-oylik" className="text-primary font-semibold hover:underline">6-месячный</Link> (235 000 сум) или <Link href="/ru/12-oylik" className="text-primary font-semibold hover:underline">12-месячный</Link> (425 000 сум) пакеты — ежемесячная стоимость будет значительно ниже.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Безопасно ли покупать через Premium Send?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Этот вопрос закономерен — при использовании онлайн-сервисов важно думать о безопасности. Объясняем, как работает Premium Send:
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Официальный механизм Telegram gift</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Premium Send не входит в ваш аккаунт. Мы используем официальную функцию Telegram &laquo;Premium gift&raquo; — это безопасный способ, предоставленный самим Telegram. Вы указываете только свой username.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Пароль и код не запрашиваются</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Мы никогда не просим ваш пароль от Telegram, SMS-код или код двухфакторной аутентификации. Если какой-либо сервис запрашивает эти данные — это мошенничество.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Быстрый и прозрачный процесс</h3>
                <p className="text-sm text-muted leading-relaxed">
                  После оплаты Premium активируется за несколько минут. Процесс прозрачный — вы видите каждый этап.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Premium Send — это самый надёжный сервис покупки Telegram Premium в Узбекистане. Тысячи пользователей уже успешно воспользовались нашим сервисом. Если у вас есть вопросы, смело пишите <Link href="https://t.me/premiumsend_admin" target="_blank" className="text-primary hover:underline">@premiumsend_admin</Link>.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">
              Купить Telegram Premium на 1 месяц — часто задаваемые вопросы
            </h2>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Сколько стоит Telegram Premium на 1 месяц?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  В Premium Send стоимость Telegram Premium на 1 месяц составляет 59 000 сум. Оплата в узбекских сумах — через Uzcard, Humo. Также можно оплатить через Click или Payme.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Нужна ли иностранная карта?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Нет. Через <Link href="https://t.me/premiumsend_admin" target="_blank" className="text-primary hover:underline">@premiumsend_admin</Link> можно оплатить картой Uzcard или Humo в сумах. Иностранная карта не требуется.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Когда активируется Premium после оплаты?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Обычно в течение нескольких минут. После подтверждения оплаты отправляется Premium gift, который активируется автоматически.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Можно ли купить Premium для другого человека?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Да. Достаточно указать Telegram username этого человека. Premium активируется на его аккаунте.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Безопасно ли это?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Да, полностью безопасно. Premium Send активирует подписку через официальный механизм Telegram Premium gift. Доступ к аккаунту или пароль не запрашиваются.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Какие пакеты есть в Premium Send?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  В Premium Send доступны: 1 месяц (59 000 сум), 3 месяца (175 000 сум), 6 месяцев (235 000 сум) и 12 месяцев (425 000 сум).
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section>
            <div className="hero-gradient rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-2xl" />
              </div>
              <div className="relative">
                <h2 className="text-3xl font-extrabold text-white mb-4">
                  Telegram Premium на 1 месяц — 59 000 сум
                </h2>
                <p className="text-white/80 mb-4">
                  Избавьтесь от рекламы, лимитов на файлы и других ограничений в Telegram.
                  <br />
                  Напишите <Link href="https://t.me/premiumsend_admin" target="_blank" className="text-white underline font-semibold">@premiumsend_admin</Link> прямо сейчас и активируйте Premium за несколько минут.
                </p>
                <p className="text-white/60 text-sm mb-8">
                  Uzcard, Humo, Click, Payme — все способы оплаты принимаются.
                </p>
                <Link
                  href="https://t.me/premiumsend_admin"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  Написать @premiumsend_admin
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>

      {/* Related */}
      <section className="py-20 bg-section-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-foreground mb-8">
            Другие <span className="gradient-text">пакеты</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
    </>
  );
}
