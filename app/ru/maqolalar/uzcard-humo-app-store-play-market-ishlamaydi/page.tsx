import type { Metadata } from "next";
import Link from "next/link";
import { ogBaseRu } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title:
    "Почему карта Uzcard/Humo не работает в App Store и Play Market — причина и решение",
  description:
    "В Apple ID или Google Play нельзя добавить Uzcard или Humo как способ оплаты — это не ошибка, а архитектурное ограничение. Причина, какие способы оплаты принимают App Store/Play Market и как купить Telegram Premium в сумах местной картой напрямую.",
  keywords: [
    "uzcard app store не работает",
    "humo play market не работает",
    "uzcard нельзя добавить google play",
    "ошибка способа оплаты app store",
    "play market не принимает карту",
    "telegram premium uzcard humo",
    "app store местная карта",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/ru/maqolalar/uzcard-humo-app-store-play-market-ishlamaydi",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/uzcard-humo-app-store-play-market-ishlamaydi",
      ru: "https://premiumsend.uz/ru/maqolalar/uzcard-humo-app-store-play-market-ishlamaydi",
      "x-default":
        "https://premiumsend.uz/maqolalar/uzcard-humo-app-store-play-market-ishlamaydi",
    },
  },
  openGraph: {
    ...ogBaseRu,
    title:
      "Почему карта Uzcard/Humo не работает в App Store и Play Market",
    description:
      "Uzcard и Humo вообще не добавляются как способ оплаты в App Store/Play Market — причина и прямой способ купить Telegram Premium в сумах.",
    url: "https://premiumsend.uz/ru/maqolalar/uzcard-humo-app-store-play-market-ishlamaydi",
    type: "article",
    publishedTime: "2026-09-06",
  },
};

export default function ArticleUzcardHumoAppStorePlayMarketRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Почему карта Uzcard/Humo не работает в App Store и Play Market — причина и решение",
    description:
      "Техническая причина, по которой Uzcard и Humo нельзя добавить как способ оплаты в Apple ID или Google Play, и способ купить Telegram Premium в сумах местной картой напрямую.",
    datePublished: "2026-09-06",
    dateModified: "2026-09-06",
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
      "https://premiumsend.uz/ru/maqolalar/uzcard-humo-app-store-play-market-ishlamaydi",
    inLanguage: "ru",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Почему я не могу добавить Uzcard или Humo в способы оплаты Apple ID/Google Play?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Apple ID и Google Play принимают в качестве способа оплаты только карты, подключённые к международной сети вроде Visa или Mastercard. Uzcard и Humo — внутренние (домашние) платёжные системы Узбекистана, не подключённые к этим сетям, поэтому в окне добавления карты они технически не отображаются как вариант или введённый номер не принимается. Это не временная ошибка, а постоянное архитектурное ограничение.",
        },
      },
      {
        "@type": "Question",
        name: "Это вина Telegram или Apple/Google?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Telegram здесь вообще ни при чём. При покупке Telegram Premium через App Store или Google Play оплату полностью контролирует Apple или Google — Telegram лишь активирует подписку после поступления денег. Какие карты принимаются, определяет собственная платёжная инфраструктура Apple/Google, Telegram на это не влияет.",
        },
      },
      {
        "@type": "Question",
        name: "Почему Play Market требует только международную карту, даже если мой аккаунт из Узбекистана?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Страна аккаунта Google Play определяет валюту оплаты и цену, но не меняет, какие карты принимаются на уровне сети. Так как Uzcard/Humo не подключены к сети Visa/Mastercard, независимо от страны аккаунта Google Play не может принять их как источник оплаты.",
        },
      },
      {
        "@type": "Question",
        name: "Если добавить иностранную Visa/Mastercard, можно ли купить Premium в App Store/Play Market?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, технически международная карта, подключённая к сети, принимается на уровне сети. Но при этом цена считается в долларах/евро, добавляется валютная конвертация и банковская комиссия, а иногда платёж всё равно отклоняется из-за ограничения банка по cross-border операциям или несовпадения BIN/страны.",
        },
      },
      {
        "@type": "Question",
        name: "Есть ли прямой способ купить Telegram Premium с Uzcard/Humo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да — в обход App Store/Play Market, через местного реселлера вроде PremiumSend. Оплата проходит в собственном официальном приложении Uzcard, Humo, Click или Payme, в сумах, а после подтверждения Premium подключается через официальный механизм bulk-gift Telegram — это настоящая, официальная подписка.",
        },
      },
      {
        "@type": "Question",
        name: "Отличается ли Premium, купленный через реселлера, от купленного в App Store?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет, статус Premium одинаковый — все функции (4 ГБ файлы, без рекламы, анимированный профиль и т.д.) работают полностью. Разница только в этапе оплаты: App Store/Play Market требует международную карту и валютную конвертацию, а реселлер принимает местную карту и сумы.",
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
        name: "Uzcard/Humo не работает в App Store",
        item: "https://premiumsend.uz/ru/maqolalar/uzcard-humo-app-store-play-market-ishlamaydi",
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
          Uzcard/Humo не работает в App Store
        </span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">
              Проблемы с оплатой
            </span>
            <time className="text-xs text-muted" dateTime="2026-09-06">
              6 сентября 2026
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Почему карта Uzcard/Humo не работает в App Store и Play Market —
            причина и решение
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-sm font-bold text-primary mb-2">КОРОТКО</p>
            <p className="text-foreground leading-relaxed font-medium">
              Uzcard и Humo — внутренние платёжные системы Узбекистана, они{" "}
              <strong>не подключены к международной сети</strong> вроде Visa
              или Mastercard. Apple ID и Google Play в качестве способа
              оплаты принимают только карты из этих международных сетей,
              поэтому Uzcard/Humo в окне &laquo;добавить карту&raquo; вообще не
              отображаются как вариант или не принимаются — это не ошибка, а
              техническое ограничение. Прямой способ купить Telegram Premium
              с Uzcard или Humo — обойти App Store/Play Market и оплатить в
              сумах через местного реселлера.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            При попытке добавить номер карты Uzcard или Humo в настройках
            Apple ID система его не распознаёт или отклоняет. В Play Market —
            то же самое: запрашивается только международная Visa/Mastercard.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Это не случайный сбой. Ниже — точная техническая причина, какие
            способы оплаты принимают App Store/Play Market и как купить
            Telegram Premium местной картой.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Почему Uzcard и Humo технически не являются международной
              платёжной системой?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Uzcard (с 2004 года) и Humo — <strong>внутренние (домашние)</strong>{" "}
              карточные системы под контролем Центрального банка Узбекистана.
              Они не подключены к Visa, Mastercard или другим международным
              сетям — то есть транзакция проходит только через внутреннюю
              банковскую инфраструктуру Узбекистана, только в сумах.
            </p>
            <p className="text-muted leading-relaxed">
              Международные магазины вроде App Store и Google Play для приёма
              оплаты должны подтвердить карту <strong>через международную
              сеть</strong>. Так как Uzcard или Humo вообще не подключены к
              этой сети, их система видит эти карты как &laquo;не
              существующие&raquo; — даже если номер карты введён верно.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Какие способы оплаты принимают App Store и Play Market в
              Узбекистане?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Оба магазина для региона аккаунта &laquo;Узбекистан&raquo; принимают
              оплату только через средства, подключённые к международной сети:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto mb-6">
              <table className="w-full text-sm min-w-[560px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">Способ оплаты</th>
                    <th className="p-4 text-left font-bold">Статус в App Store / Play Market</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Международная Visa/Mastercard</td>
                    <td className="p-4 text-muted">
                      Принимается — цена в долларах/евро, с конвертацией и банковской комиссией
                    </td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Uzcard</td>
                    <td className="p-4 text-muted">
                      Не принимается — не подключена к международной сети
                    </td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Humo</td>
                    <td className="p-4 text-muted">
                      Не принимается — не подключена к международной сети
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Click / Payme</td>
                    <td className="p-4 text-muted">
                      Вообще отсутствуют в платёжной системе магазина — принимается только карта
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-muted leading-relaxed">
              Поэтому многие пользователи из Узбекистана, пытаясь купить
              Premium через App Store или Play Market, получают ошибку
              &laquo;не удалось добавить карту&raquo; или &laquo;this payment
              method is not available&raquo;.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Это вина Telegram или Apple/Google?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              При покупке Telegram Premium через App Store или Google Play{" "}
              <strong>оплату полностью контролирует Apple или Google</strong> —
              Telegram лишь активирует подписку после поступления денег. Какие
              карты принимаются, зависит от собственной платёжной
              инфраструктуры Apple/Google, Telegram здесь никак не участвует.
            </p>
            <p className="text-muted leading-relaxed">
              То же самое и при оплате через официальный @PremiumBot — он
              тоже использует международный платёжный процессор, поэтому
              Uzcard/Humo не работают и там. Подробнее — в{" "}
              <Link
                href="/ru/maqolalar/premiumbot-ishlamayapti-premium-qayerdan-sotib-olish"
                className="text-primary font-semibold hover:underline"
              >
                статье «Почему PremiumBot не работает»
              </Link>
              .
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Почему Play Market требует только международную карту, даже
              если аккаунт из Узбекистана?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Здесь смешиваются два разных понятия:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  Страна аккаунта
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Определяет только валюту цены и список доступных в
                  магазине приложений/сервисов.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  Сеть карты
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Определяет техническую возможность приёма оплаты — на это
                  страна аккаунта не влияет.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              То есть даже если аккаунт из Узбекистана, Uzcard/Humo не
              являются международными на уровне сети, поэтому Google Play всё
              равно не предложит и не примет их как источник оплаты.
            </p>
          </section>

          {/* Mid CTA */}
          <section>
            <div className="bg-primary-light/40 border border-primary/20 rounded-2xl p-6 md:p-8 text-center">
              <p className="text-foreground text-lg leading-relaxed mb-4">
                Обойдите App Store/Play Market и оплатите напрямую в сумах
                картой Uzcard или Humo.{" "}
                <strong>@PremiumSendBot</strong> активирует Premium за
                2-10 минут.
              </p>
              <Link
                href="https://telegram.me/premiumsendbot"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-2xl hover:shadow-xl transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                Купить через PremiumSend
              </Link>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Решит ли проблему добавление иностранной Visa/Mastercard?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Частично. Международная карта, подключённая к сети, будет
              принята на уровне сети App Store/Play Market. Но это создаёт
              несколько новых проблем:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Цена считается в долларах или евро — с курсовой разницей может выйти на 5-15% дороже.",
                "Банк может ограничивать международные (cross-border) платежи — тогда оплата всё равно отклонится.",
                "Несовпадение BIN/страны или использование VPN расценивается как риск и может заблокировать транзакцию.",
                "Оформление иностранной карты (если её нет) само по себе требует времени и затрат.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted leading-relaxed">
              Почему международная карта всё равно может быть отклонена —
              подробнее в{" "}
              <Link
                href="/ru/maqolalar/nega-xalqaro-karta-telegram-premiumni-rad-etadi"
                className="text-primary font-semibold hover:underline"
              >
                статье «Почему международная карта отклоняет»
              </Link>
              . О разнице цен App Store/Play Market и реселлера — в{" "}
              <Link
                href="/ru/maqolalar/nega-telegram-premium-app-store-play-market-qimmat"
                className="text-primary font-semibold hover:underline"
              >
                статье «Почему App Store дороже»
              </Link>
              .
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Как работает прямой способ купить Telegram Premium с Uzcard/Humo?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Полностью в обход App Store и Play Market, через местного
              реселлера вроде PremiumSend, оплата проходит в{" "}
              <strong>собственном официальном приложении</strong> Uzcard,
              Humo, Click или Payme, в сумах. Платёжная инфраструктура
              магазина здесь вообще не участвует, поэтому проблема
              несовпадения сети исчезает.
            </p>
            <p className="text-muted leading-relaxed">
              После подтверждения оплаты Premium подключается через
              официальный механизм bulk-gift Telegram — это настоящая,
              официальная подписка, локализован только{" "}
              <strong>этап оплаты</strong>. Подробнее — в{" "}
              <Link
                href="/ru/maqolalar/telegram-premium-somda-uzs-sotib-olish"
                className="text-primary font-semibold hover:underline"
              >
                статье «Покупка в сумах»
              </Link>
              . Цены:{" "}
              <Link href="/ru/1-oylik" className="text-primary hover:underline">
                1 месяц 59 000
              </Link>
              ,{" "}
              <Link href="/ru/3-oylik" className="text-primary hover:underline">
                3 месяца 175 000
              </Link>
              ,{" "}
              <Link href="/ru/6-oylik" className="text-primary hover:underline">
                6 месяцев 235 000
              </Link>
              ,{" "}
              <Link href="/ru/12-oylik" className="text-primary hover:underline">
                12 месяцев 425 000 сум
              </Link>
              .
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Как выбрать реселлера?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              При выборе прямой оплаты Uzcard/Humo важно проверить и самого
              реселлера — боты, запрашивающие данные карты или не имеющие
              оферты/канала связи, могут оказаться мошенническими. Критерии
              проверки и красные флаги — в{" "}
              <Link
                href="/ru/maqolalar/telegram-premium-ishonchli-saytdan-sotib-olish"
                className="text-primary font-semibold hover:underline"
              >
                статье «Покупка на надёжном сайте»
              </Link>
              .
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">
              Часто задаваемые вопросы (FAQ)
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Почему я не могу добавить Uzcard или Humo в способы оплаты Apple ID/Google Play?",
                  a: "Apple ID/Google Play принимают только карты, подключённые к международной сети вроде Visa/Mastercard. Uzcard и Humo — внутренние системы, не подключённые к этим сетям, поэтому не добавляются. Это постоянное техническое ограничение.",
                },
                {
                  q: "Это вина Telegram или Apple/Google?",
                  a: "Telegram здесь ни при чём. Оплату через App Store/Play Market полностью контролирует Apple/Google, Telegram лишь активирует подписку после поступления денег.",
                },
                {
                  q: "Почему Play Market требует только международную карту, даже если аккаунт из Узбекистана?",
                  a: "Страна аккаунта определяет только валюту цены, а не то, какие карты принимаются на уровне сети. Uzcard/Humo не международные, поэтому не принимаются независимо от страны аккаунта.",
                },
                {
                  q: "Если добавить иностранную Visa/Mastercard, можно ли купить Premium в App Store/Play Market?",
                  a: "Да, технически возможно, но цена считается в долларах/евро с конвертацией и комиссией, а иногда платёж всё равно отклоняется из-за ограничения банка или несовпадения BIN.",
                },
                {
                  q: "Есть ли прямой способ купить Telegram Premium с Uzcard/Humo?",
                  a: "Да — через местного реселлера. Оплата проходит в официальном приложении Uzcard/Humo/Click/Payme в сумах, после подтверждения Premium подключается через официальный bulk-gift.",
                },
                {
                  q: "Отличается ли Premium, купленный через реселлера, от купленного в App Store?",
                  a: "Нет, статус Premium одинаковый, все функции работают полностью. Разница только в этапе оплаты — реселлер принимает местную карту и сумы.",
                },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                  <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
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
                  Uzcard/Humo не работают в App Store и Play Market на уровне
                  сети — это неисправимое техническое ограничение. Решение —
                  обойти его:{" "}
                  <strong className="text-white">@PremiumSendBot</strong>, в
                  сумах, местной картой.{" "}
                  <strong className="text-white">1 месяц 59 000</strong>,{" "}
                  <strong className="text-white">12 месяцев 425 000 сум</strong>{" "}
                  — Premium за 2-10 минут.
                </p>
                <Link
                  href="https://telegram.me/premiumsendbot"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
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
