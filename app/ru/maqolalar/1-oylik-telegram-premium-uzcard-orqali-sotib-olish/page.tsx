import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Купить Telegram Premium на 1 месяц через Uzcard — оплата в сумах",
  description:
    "Можно ли купить Telegram Premium на 1 месяц через Uzcard? Да — через @premiumsend_admin за 59 000 сум. Пошаговая инструкция.",
  keywords: [
    "купить Telegram Premium 1 месяц через Uzcard",
    "Telegram Premium 1 месяц цена Узбекистан",
    "Telegram Premium оплата Uzcard",
    "как купить Telegram Premium",
    "Telegram Premium способы оплаты Узбекистан",
    "Telegram Premium 1 месяц как купить",
    "Telegram Premium Uzcard оплата",
    "оплата Telegram Premium через Uzcard",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/ru/maqolalar/1-oylik-telegram-premium-uzcard-orqali-sotib-olish",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/1-oylik-telegram-premium-uzcard-orqali-sotib-olish",
      ru: "https://premiumsend.uz/ru/maqolalar/1-oylik-telegram-premium-uzcard-orqali-sotib-olish",
    },
  },
  openGraph: {
    title:
      "Купить Telegram Premium на 1 месяц через Uzcard — оплата в сумах",
    description:
      "Как купить Telegram Premium на 1 месяц через Uzcard? Через @premiumsend_admin за 59 000 сум — пошаговая инструкция.",
    url: "https://premiumsend.uz/ru/maqolalar/1-oylik-telegram-premium-uzcard-orqali-sotib-olish",
    type: "article",
    publishedTime: "2026-04-08",
  },
};

export default function ArticlePremiumUzcardRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Купить Telegram Premium на 1 месяц через Uzcard — оплата в сумах",
    description:
      "Можно ли купить Telegram Premium на 1 месяц через Uzcard? Да — через @premiumsend_admin за 59 000 сум.",
    datePublished: "2026-04-08",
    dateModified: "2026-04-08",
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
      "https://premiumsend.uz/ru/maqolalar/1-oylik-telegram-premium-uzcard-orqali-sotib-olish",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Можно ли оплатить Telegram Premium через Uzcard?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "В самом Telegram оплатить через Uzcard нельзя. Но через @premiumsend_admin можно оплатить картой Uzcard в сумах и активировать Premium-подписку.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько стоит Telegram Premium на 1 месяц через Uzcard?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "В Premium Send 1 месяц Telegram Premium стоит 59 000 сум. Оплата через Uzcard в сумах — без конвертации валюты и дополнительных комиссий.",
        },
      },
      {
        "@type": "Question",
        name: "Безопасна ли оплата через Uzcard?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Оплата производится обычным P2P-переводом — данные карты нигде не сохраняются. Premium активируется через официальную функцию Telegram Gift, без доступа к аккаунту.",
        },
      },
      {
        "@type": "Question",
        name: "Когда активируется Premium после оплаты?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "После подтверждения оплаты Premium обычно активируется в течение нескольких минут. Админ начинает процесс сразу после получения подтверждения.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли оплатить картой Humo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, в Premium Send принимаются и Uzcard, и Humo. Также работают платёжные системы Click и Payme — выбирайте удобный вариант.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли купить Premium через Uzcard для другого человека?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Отправьте @premiumsend_admin Telegram username человека, которому нужен Premium — оплатите своей картой Uzcard, а Premium активируется на указанный аккаунт.",
        },
      },
      {
        "@type": "Question",
        name: "Будет ли автоматическое списание после окончания 1 месяца?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет. Premium, купленный через @premiumsend_admin, работает по разовой оплате. После истечения срока подписка не продлевается автоматически и с карты ничего не списывается.",
        },
      },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Как купить Telegram Premium на 1 месяц через Uzcard",
    description:
      "Пошаговая инструкция по покупке Telegram Premium через карту Uzcard в Узбекистане.",
    totalTime: "PT10M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "UZS",
      value: "59000",
    },
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Напишите админу",
        text: "Откройте Telegram, найдите @premiumsend_admin и напишите: «Хочу купить Premium на 1 месяц через Uzcard».",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Укажите username",
        text: "Отправьте Telegram username аккаунта, на который нужно активировать Premium — ваш или чужой.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Выберите способ оплаты",
        text: "Админ отправит номер карты (для P2P-перевода) или ссылку на оплату через Click/Payme.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Переведите 59 000 сум через Uzcard",
        text: "Откройте приложение банка (Kapitalbank, Ipak Yuli, Aloqabank и др.) и переведите 59 000 сум на указанную карту. Или оплатите через ссылку Click/Payme.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Отправьте чек об оплате",
        text: "Отправьте скриншот или чек из банковского приложения админу — это ускорит подтверждение.",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Premium активируется",
        text: "После подтверждения оплаты Premium активируется на указанном аккаунте в течение нескольких минут.",
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
        name: "Купить Telegram Premium на 1 месяц через Uzcard",
        item: "https://premiumsend.uz/ru/maqolalar/1-oylik-telegram-premium-uzcard-orqali-sotib-olish",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
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
          Купить Telegram Premium на 1 месяц через Uzcard
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
            <time className="text-xs text-muted" dateTime="2026-04-08">
              8 апреля 2026
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Купить Telegram Premium на 1 месяц через Uzcard
          </h1>

          {/* AEO Snippet */}
          <div className="bg-primary-light/50 rounded-xl p-5 border border-primary/10 mb-6">
            <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
              Краткий ответ
            </p>
            <p className="text-foreground leading-relaxed font-medium">
              Да, <strong>купить Telegram Premium на 1 месяц через Uzcard</strong> можно — но не напрямую через Telegram.{" "}
              <Link href="https://t.me/premiumsend_admin" target="_blank" className="text-primary hover:underline">
                @premiumsend_admin
              </Link>{" "}
              — напишите, оплатите <strong>59 000 сум</strong> картой Uzcard, и Premium активируется за несколько минут. Иностранная карта не требуется.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Каждый день тысячи пользователей из Узбекистана нажимают кнопку Premium в Telegram и сталкиваются с одной и той же проблемой: оплатить картой Uzcard невозможно. Google Pay не подключён, Apple Pay не работает, иностранной карты у большинства нет. В итоге миллионы пользователей в Узбекистане остаются без доступа к Premium-возможностям.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            В этой статье мы подробно расскажем, можно ли купить Telegram Premium на 1 месяц через Uzcard, как это работает, сколько стоит и насколько это безопасно.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Почему нельзя оплатить Telegram Premium через Uzcard?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Оплата Telegram Premium происходит через само приложение Telegram — на Android через Google Play Billing, на iOS через Apple In-App Purchase. Обе системы принимают только международные карты (Visa, MasterCard) или мобильные кошельки (Google Pay, Apple Pay). Uzcard — национальная платёжная система Узбекистана, не интегрированная с международными провайдерами. Поэтому страница оплаты в Telegram не распознаёт карту Uzcard.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Это не только проблема Telegram — Spotify, YouTube Premium, Netflix и практически все зарубежные цифровые сервисы также не принимают Uzcard. Некоторые пытаются открыть виртуальную иностранную карту, но регистрация, идентификация, конвертация валюты и банковские комиссии делают этот процесс дороже и сложнее, чем сам Premium.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Именно поэтому покупка Telegram Premium через местные сервисы в Узбекистане — самый практичный путь. Вы платите в сумах картой Uzcard, а сервис активирует подписку на вашем аккаунте через официальную функцию Telegram Gift Premium — без иностранной карты и VPN.
            </p>
            <p className="text-muted leading-relaxed">
              В Узбекистане есть несколько подобных сервисов. При выборе надёжного сервиса обратите внимание на: наличие официального сайта, открытые цены, оплату в сумах и активацию через официальную Gift-функцию Telegram. Если сервис соответствует этим критериям — ему можно доверять.
            </p>
          </section>

          {/* Section 2 — Step by Step */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Покупка Telegram Premium через Uzcard: пошаговая инструкция
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Процесс простой и не требует никаких технических знаний. Вы пишете{" "}
              <strong className="text-foreground">@premiumsend_admin</strong> в Telegram, оплачиваете в сумах картой Uzcard, и Premium активируется за несколько минут. Важно: вы не передаёте данные карты и не даёте доступ к аккаунту. Весь процесс основан на обычном P2P-переводе и официальной Gift-функции Telegram.
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  step: "1",
                  title: "Напишите @premiumsend_admin",
                  desc: "Откройте Telegram, найдите @premiumsend_admin и начните диалог. Напишите: «Хочу купить Premium на 1 месяц через Uzcard».",
                },
                {
                  step: "2",
                  title: "Укажите username",
                  desc: "Отправьте Telegram username аккаунта, на который нужно активировать Premium — ваш или другого человека (в подарок).",
                },
                {
                  step: "3",
                  title: "Выберите способ оплаты",
                  desc: "Админ отправит номер карты (для P2P-перевода) или ссылку на оплату через Click/Payme. Карта Uzcard работает с любым банковским приложением.",
                },
                {
                  step: "4",
                  title: "Переведите 59 000 сум через Uzcard",
                  desc: "Откройте приложение банка (Kapitalbank, Ipak Yuli, Aloqabank и др.), перейдите в раздел «Переводы» и отправьте 59 000 сум на указанную карту. Или откройте ссылку Click/Payme и подтвердите оплату.",
                },
                {
                  step: "5",
                  title: "Отправьте чек об оплате",
                  desc: "Отправьте скриншот или чек из банковского приложения админу — это ускорит процесс подтверждения.",
                },
                {
                  step: "6",
                  title: "Premium активируется",
                  desc: "После подтверждения оплаты Premium активируется на указанном аккаунте в течение нескольких минут. В Telegram появится значок Premium и все возможности.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full hero-gradient text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Важно:</strong> после оплаты дождитесь ответа админа — обычно 1–5 минут, в загруженное время до 15 минут. После активации Premium перезапустите приложение Telegram — новые данные подписки отобразятся быстрее.
            </p>

            {/* CTA */}
            <div className="bg-white rounded-2xl p-6 border-2 border-primary/20 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <div>
                <p className="font-bold text-foreground text-lg">Telegram Premium на 1 месяц — 59 000 сум</p>
                <p className="text-sm text-muted">Оплата картой Uzcard в сумах</p>
              </div>
              <Link
                href="https://t.me/premiumsend_admin"
                target="_blank"
                className="px-5 py-2.5 rounded-xl hero-gradient text-white font-semibold text-sm shadow-lg shadow-primary/25 whitespace-nowrap"
              >
                Купить
              </Link>
            </div>
          </section>

          {/* Section 3 — Pricing */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Цена Telegram Premium на 1 месяц и способы оплаты через Uzcard
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Цена Telegram Premium на 1 месяц в Узбекистане может отличаться в зависимости от сервиса — некоторые привязывают цену к курсу доллара и меняют её каждый день. В Premium Send цена указана в сумах — конвертация валюты не требуется, вы видите точную сумму и платите её.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              В таблице ниже — все пакеты, цены и способы оплаты через Uzcard:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Пакет</div>
                <div className="text-center">Цена</div>
                <div className="text-center">В месяц</div>
                <div className="text-center">Оплата Uzcard</div>
              </div>
              <div className="grid grid-cols-4 p-4 bg-primary-light/30 items-center text-sm">
                <div>
                  <Link href="/ru/1-oylik" className="font-bold text-primary hover:underline">1 месяц</Link>
                </div>
                <div className="text-center text-primary font-medium">59 000 сум</div>
                <div className="text-center text-primary font-medium">59 000 сум</div>
                <div className="text-center text-muted text-xs">P2P, Click, Payme</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-t border-card-border items-center text-sm">
                <div>
                  <Link href="/ru/3-oylik" className="font-medium text-foreground hover:text-primary hover:underline">3 месяца</Link>
                </div>
                <div className="text-center text-muted">175 000 сум</div>
                <div className="text-center text-muted">~58 333 сум</div>
                <div className="text-center text-muted text-xs">P2P, Click, Payme</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-t border-card-border items-center text-sm">
                <div>
                  <Link href="/ru/6-oylik" className="font-medium text-foreground hover:text-primary hover:underline">6 месяцев</Link>
                </div>
                <div className="text-center text-muted">235 000 сум</div>
                <div className="text-center text-muted">~39 167 сум</div>
                <div className="text-center text-muted text-xs">P2P, Click, Payme</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-t border-card-border items-center text-sm">
                <div>
                  <Link href="/ru/12-oylik" className="font-medium text-foreground hover:text-primary hover:underline">12 месяцев</Link>
                </div>
                <div className="text-center text-muted">425 000 сум</div>
                <div className="text-center text-muted">~35 417 сум</div>
                <div className="text-center text-muted text-xs">P2P, Click, Payme</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Оплата через Uzcard возможна тремя способами:</strong>
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-lg bg-primary-light text-primary text-xs font-bold flex items-center justify-center flex-shrink-0">1</span>
                <div>
                  <p className="font-bold text-foreground text-sm">P2P-перевод (через банковское приложение)</p>
                  <p className="text-xs text-muted">Откройте приложение банка (Kapitalbank, Ipak Yuli, Aloqabank и др.), перейдите в &laquo;Переводы&raquo; и отправьте деньги на карту, указанную админом.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-lg bg-primary-light text-primary text-xs font-bold flex items-center justify-center flex-shrink-0">2</span>
                <div>
                  <p className="font-bold text-foreground text-sm">Через Click</p>
                  <p className="text-xs text-muted">Админ отправит ссылку для оплаты через Click — откройте, выберите карту Uzcard и подтвердите платёж.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-lg bg-primary-light text-primary text-xs font-bold flex items-center justify-center flex-shrink-0">3</span>
                <div>
                  <p className="font-bold text-foreground text-sm">Через Payme</p>
                  <p className="text-xs text-muted">Аналогично через ссылку Payme — оплатите картой Uzcard. Выбирайте тот способ, который удобнее.</p>
                </div>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Независимо от способа оплаты, цена одинаковая — <strong className="text-foreground">59 000 сум</strong>. Никаких дополнительных комиссий или скрытых платежей.
            </p>
          </section>

          {/* Section 4 — Safety */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Безопасность оплаты через Uzcard
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              При покупке услуг через Telegram вопрос безопасности стоит на первом месте. Разберём, как устроена защита при оплате через @premiumsend_admin:
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-section-alt rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-2">
                  Данные карты не сохраняются
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Вы совершаете обычный P2P-перевод — как если бы отправляли деньги другу. Номер карты, CVC-код и другие конфиденциальные данные никуда не вводятся и не сохраняются. Админ просит только чек об оплате — для подтверждения.
                </p>
              </div>
              <div className="bg-section-alt rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-2">
                  Используется официальная Gift-функция Telegram
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  @premiumsend_admin не запрашивает пароль или доступ к вашему аккаунту. Premium активируется через официальную функцию &laquo;Gift Premium&raquo; — она разработана Telegram и полностью безопасна. Никто не входит в ваш аккаунт.
                </p>
              </div>
              <div className="bg-section-alt rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-2">
                  Нет автоматических списаний — полный контроль
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  При покупке через официальное приложение Telegram включается автопродление и с карты ежемесячно списываются деньги. Через @premiumsend_admin — вы делаете разовый платёж. По окончании срока с карты ничего не списывается. Нужно снова — обращаетесь сами.
                </p>
              </div>
              <div className="bg-section-alt rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-2">
                  Как проверить надёжность?
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  У Premium Send есть официальный сайт —{" "}
                  <Link href="/ru" className="text-primary hover:underline">premiumsend.uz</Link>
                  . Цены указаны открыто, сервис работает давно и обслужил множество пользователей. Если сомневаетесь — начните с пакета на 1 месяц и проверьте качество сервиса.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Итог: оплата через Uzcard безопасна — данные карты не запрашиваются, доступ к аккаунту не требуется, работает система разовой оплаты.
            </p>
          </section>

          {/* Section 5 — Who needs it */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Telegram Premium на 1 месяц через Uzcard — для кого подходит?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Пакет на 1 месяц — самый короткий срок. Но в определённых ситуациях именно 1 месяц — оптимальный выбор:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  Хотите попробовать впервые
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Не уверены, нужен ли вам Premium? За 1 месяц вы протестируете все возможности — без рекламы, файлы до 4 ГБ, быстрый перевод, voice-to-text. Если понравится — в следующий раз выбирайте{" "}
                  <Link href="/ru/maqolalar/3-oylik-telegram-premium-sotib-olish" className="text-primary hover:underline">3 месяца</Link>
                  {" "}или{" "}
                  <Link href="/ru/maqolalar/6-oylik-telegram-premium-sotib-olish" className="text-primary hover:underline">6 месяцев</Link>.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  Краткосрочный проект или мероприятие
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Важная конференция, курс или проект, где нужно отправлять большие файлы, не видеть рекламу и пользоваться быстрым переводом? 1 месяц Premium покроет этот период — без лишних расходов.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  Подарок другу или близкому
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Через @premiumsend_admin можно купить Premium на чужой аккаунт. 1 месяц — недорогой, но полезный цифровой подарок на день рождения или праздник. Оплачиваете своей картой Uzcard — Premium активируется у друга.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  Контроль бюджета
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  59 000 сум — минимальный расход. Разовая оплата, автоматического списания нет. Если через месяц Premium вам не нужен — просто ничего не платите. Без риска.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Если Premium понравится и вы хотите пользоваться дольше — в следующий раз выбирайте{" "}
              <Link href="/ru/6-oylik" className="text-primary font-semibold hover:underline">6 месяцев</Link>
              {" "}или{" "}
              <Link href="/ru/12-oylik" className="text-primary font-semibold hover:underline">12 месяцев</Link>
              {" "} — экономия до 40% в пересчёте на месяц.
            </p>
          </section>

          {/* Section 6 — Uzcard vs Humo */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Uzcard или Humo — какой картой удобнее платить?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              В Узбекистане две основные национальные платёжные системы — Uzcard и Humo. Многие спрашивают: &laquo;Какой картой лучше платить?&raquo; Ответ простой: для покупки Telegram Premium обе работают одинаково.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Uzcard — самая распространённая платёжная система в Узбекистане. Карта Uzcard есть почти у каждого клиента банка, она работает во всех банковских приложениях, Click и Payme. Humo — более новая система, но быстро развивается — карты Humo выпускаются во многих банках и также полностью интегрированы с Click и Payme.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              В Premium Send принимаются обе карты. Процесс оплаты одинаковый: админ отправляет номер карты или ссылку на оплату, вы переводите через банковское приложение. Ни в цене, ни в скорости, ни в безопасности разницы нет — платите той картой, которая у вас есть.
            </p>

            {/* CTA 2 */}
            <div className="bg-white rounded-2xl p-6 border-2 border-primary/20 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <div>
                <p className="font-bold text-foreground text-lg">Uzcard или Humo — без разницы</p>
                <p className="text-sm text-muted">
                  Какая карта удобнее —{" "}
                  <Link href="https://t.me/premiumsend_admin" target="_blank" className="text-primary hover:underline">
                    @premiumsend_admin
                  </Link>{" "}
                  примет обе
                </p>
              </div>
              <Link
                href="https://t.me/premiumsend_admin"
                target="_blank"
                className="px-6 py-3 rounded-xl hero-gradient text-white font-semibold text-sm shadow-lg shadow-primary/25 whitespace-nowrap"
              >
                Купить Premium
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">
              Часто задаваемые вопросы (FAQ)
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Можно ли оплатить Telegram Premium через Uzcard?",
                  a: "В самом Telegram оплатить через Uzcard нельзя. Но через @premiumsend_admin можно оплатить картой Uzcard в сумах и активировать Premium-подписку.",
                },
                {
                  q: "Сколько стоит Telegram Premium на 1 месяц через Uzcard?",
                  a: "В Premium Send 1 месяц Telegram Premium стоит 59 000 сум. Оплата через Uzcard в сумах — без конвертации валюты и дополнительных комиссий.",
                },
                {
                  q: "Безопасна ли оплата через Uzcard?",
                  a: "Да. Оплата производится обычным P2P-переводом — данные карты нигде не сохраняются. Premium активируется через официальную Gift-функцию Telegram.",
                },
                {
                  q: "Когда активируется Premium после оплаты?",
                  a: "После подтверждения оплаты Premium обычно активируется в течение нескольких минут. Админ начинает процесс сразу после получения подтверждения.",
                },
                {
                  q: "Можно ли оплатить картой Humo?",
                  a: "Да, в Premium Send принимаются и Uzcard, и Humo. Также работают Click и Payme — выбирайте удобный вариант.",
                },
                {
                  q: "Можно ли купить Premium через Uzcard для другого человека?",
                  a: "Да. Отправьте @premiumsend_admin Telegram username нужного человека — оплатите своей картой, а Premium активируется на указанный аккаунт.",
                },
                {
                  q: "Будет ли автоматическое списание после окончания 1 месяца?",
                  a: "Нет. Premium, купленный через @premiumsend_admin, работает по разовой оплате. После окончания срока с карты ничего не списывается.",
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 border border-card-border shadow-sm"
                >
                  <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusion CTA */}
          <section>
            <div className="hero-gradient rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-5 left-5 w-32 h-32 bg-white rounded-full blur-2xl" />
              </div>
              <div className="relative">
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  У вас есть карта Uzcard — значит, вы можете купить Telegram Premium. Иностранная карта не нужна, VPN не нужен, сложная регистрация не нужна. Напишите{" "}
                  <strong className="text-white">@premiumsend_admin</strong>, оплатите 59 000 сум и пользуйтесь Premium-возможностями. Весь процесс — 5–10 минут.
                </p>
                <Link
                  href="https://t.me/premiumsend_admin"
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
                  Купить Premium через Uzcard
                </Link>
              </div>
            </div>
          </section>

          {/* Related articles */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">
              Полезные статьи
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/ru/maqolalar/1-oylik-telegram-premium-sotib-olish"
                className="bg-white rounded-xl p-5 border border-card-border shadow-sm card-hover block"
              >
                <p className="font-bold text-foreground text-sm mb-1">Купить Telegram Premium на 1 месяц</p>
                <p className="text-xs text-muted">Общее руководство — все способы оплаты и возможности</p>
              </Link>
              <Link
                href="/ru/maqolalar/3-oylik-telegram-premium-sotib-olish"
                className="bg-white rounded-xl p-5 border border-card-border shadow-sm card-hover block"
              >
                <p className="font-bold text-foreground text-sm mb-1">Купить Telegram Premium на 3 месяца</p>
                <p className="text-xs text-muted">Дешевле в пересчёте на месяц — 175 000 сум</p>
              </Link>
              <Link
                href="/ru/maqolalar/6-oylik-telegram-premium-sotib-olish"
                className="bg-white rounded-xl p-5 border border-card-border shadow-sm card-hover block"
              >
                <p className="font-bold text-foreground text-sm mb-1">Купить Telegram Premium на 6 месяцев</p>
                <p className="text-xs text-muted">Оптимальный выбор — 235 000 сум</p>
              </Link>
              <Link
                href="/ru/maqolalar/12-oylik-telegram-premium-sotib-olish"
                className="bg-white rounded-xl p-5 border border-card-border shadow-sm card-hover block"
              >
                <p className="font-bold text-foreground text-sm mb-1">Купить Telegram Premium на 12 месяцев</p>
                <p className="text-xs text-muted">Самый выгодный вариант — 35 417 сум/мес</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
