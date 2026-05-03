import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Telegram Premium на 3 месяца через Click — 175 000 сум за 1-2 минуты",
  description:
    "3-месячный Telegram Premium через Click за 175 000 сум — @PremiumSendBot, оплата по PIN/Face ID, активация за 5 минут. В Telegram Click не работает и нет 3-месячного тарифа.",
  keywords: [
    "Telegram Premium на 3 месяца Click",
    "Telegram Premium через Click 3 месяца",
    "купить Telegram Premium Click 3 месяца",
    "3 месяца Premium Click",
    "Telegram Premium 175000 Click",
    "Telegram Premium в сумах Click",
    "PremiumSendBot Click 3 месяца",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/ru/maqolalar/3-oylik-telegram-premium-click-orqali",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/3-oylik-telegram-premium-click-orqali",
      ru: "https://premiumsend.uz/ru/maqolalar/3-oylik-telegram-premium-click-orqali",
    },
  },
  openGraph: {
    title: "Telegram Premium на 3 месяца через Click — 175 000 сум",
    description:
      "3-месячный Telegram Premium через Click за 175 000 сум. @PremiumSendBot — PIN/Face ID, активация за 5 минут.",
    url: "https://premiumsend.uz/ru/maqolalar/3-oylik-telegram-premium-click-orqali",
    type: "article",
    publishedTime: "2026-05-03",
  },
};

export default function Article3MonthClickRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Telegram Premium на 3 месяца через Click — за 175 000 сум",
    description:
      "Покупка 3-месячного Telegram Premium через Click — @PremiumSendBot за 175 000 сум. Оплата в сумах, в Click за 1-2 минуты, активация за 5 минут.",
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
      "https://premiumsend.uz/ru/maqolalar/3-oylik-telegram-premium-click-orqali",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько стоит Telegram Premium на 3 месяца через Click?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "В Premium Send 3-месячный Telegram Premium через Click — 175 000 сум, или 58 333 сум в месяц. Цена одинаковая через Uzcard, Humo и Payme. Click не берёт дополнительной комиссии, курсового риска нет.",
        },
      },
      {
        "@type": "Question",
        name: "Через сколько активируется 3-месячный Premium после оплаты Click?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "В Click оплата занимает 1-2 минуты (PIN или Face ID). После подтверждения Premium активируется автоматически за 2-5 минут. При технической задержке может занять 10-15 минут.",
        },
      },
      {
        "@type": "Question",
        name: "Есть ли дополнительная комиссия при оплате через Click?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет. В @PremiumSendBot при оплате через Click нет скрытых комиссий. Вы платите 175 000 сум — это итоговая сумма. Click также не берёт комиссии за такие платежи.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли оплатить 3 месяца через Click в официальном приложении Telegram?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет, по двум причинам. Первая: официальное приложение Telegram не принимает Click — только Visa, Mastercard, Google Pay, Apple Pay. Вторая: в Telegram нет 3-месячного тарифа — только 1 и 12 месяцев.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли подарить 3-месячный Premium через Click?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. 3-месячный Premium можно подарить, оплачивая через Click. Бот спросит username — введёте @username получателя, подтвердите оплату в Click, Premium активируется на этом аккаунте. По правилам Telegram 1-месячный подарок невозможен, поэтому 3-месячный — самый недорогой вариант для подарка.",
        },
      },
      {
        "@type": "Question",
        name: "Безопасна ли оплата через Click?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Click — лицензированная Центробанком Узбекистана платёжная система, соответствует PCI DSS. Данные карты хранятся только на серверах Click, бот не видит. На каждую оплату выдаётся PDF-чек. Если Premium не придёт, оплаченная сумма возвращается полностью.",
        },
      },
      {
        "@type": "Question",
        name: "Как купить 3-месячный Premium, если нет приложения Click?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Два варианта. Первый: скачайте Click из Play Market или App Store бесплатно (3-5 минут), привяжите карту, потом оплатите. Второй: в @PremiumSendBot выберите Payme или Uzcard P2P — цена одинаковая 175 000 сум.",
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
        name: "Telegram Premium на 3 месяца через Click",
        item: "https://premiumsend.uz/ru/maqolalar/3-oylik-telegram-premium-click-orqali",
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
          Telegram Premium на 3 месяца через Click
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
            <time className="text-xs text-muted" dateTime="2026-05-03">
              3 мая 2026
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Telegram Premium на 3 месяца через Click
          </h1>

          {/* TL;DR */}
          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>Кратко:</strong> 3-месячный Telegram Premium через приложение Click покупается в{" "}
              <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>. Цена — <strong>175 000 сум</strong> (58 333 сум в месяц), оплата в сумах, без комиссии. В Click оплата по PIN/Face ID за <strong>1-2 минуты</strong>, Premium активируется за <strong>5 минут</strong>. Официальное приложение Telegram не принимает Click, и тарифа на 3 месяца там нет.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Для пользователей Click 3-месячный Premium — особенно удобная комбинация: Click — самый быстрый локальный способ оплаты, 3 месяца — баланс между сроком и бюджетом. Вместе — минимум времени, минимум действий.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            В этой статье — точная цена 3-месячного Premium через Click, пошаговый процесс, безопасность и решение типичных проблем. Если приложение Click готово — Premium активируется за 5 минут.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Почему именно 3 месяца через Click — &quot;быстрая оплата + сбалансированный срок&quot;
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Покупка 3-месячного Premium через Click решает два ограничения и объединяет два преимущества.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Ограничение тарифа:</strong> в официальном приложении Telegram доступны только тарифы на 1 и 12 месяцев — 3- и 6-месячные пакеты там вообще отсутствуют. Значит, чтобы взять &quot;3 месяца&quot;, нужно идти к местному реселлеру. <Link href="/ru/maqolalar/telegram-premium-narxlari" className="text-primary font-semibold hover:underline">Подробнее о тарифах</Link>.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Ограничение оплаты:</strong> Telegram не принимает Click. Нужны Visa, Mastercard, Google Pay или Apple Pay. Локальное приложение Click не входит в международную платёжную систему Telegram.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Преимущество Click:</strong> в приложении Click карта привязывается один раз. На каждой следующей оплате не нужно вводить номер, ждать SMS — подтверждение по PIN или Face ID. Для покупки Premium это особенно удобно: нажимаете на кнопку, открывается приложение, сумма заполняется автоматически.
            </p>
            <div className="bg-section-alt rounded-xl p-5 mb-4">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Решение:</strong> @PremiumSendBot принимает оплату через Click и доставляет 3-месячный пакет, которого нет в официальной системе Telegram. Click — опыт &quot;быстро нажал&quot;, 3 месяца — &quot;сбалансированный&quot; срок. Оба в одном процессе.
              </p>
            </div>
            <p className="text-muted leading-relaxed">
              Пользователи Click обычно завершают весь процесс за 3-5 минут — ни один другой способ оплаты не даёт такой скорости.
            </p>
          </section>

          {/* Section 2 — Pricing */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              3-месячный Premium через Click — структура цены
            </h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Цена:</strong> 3-месячный Telegram Premium через Click — <strong>175 000 сум</strong> (58 333 сум в месяц). Оплата в сумах, без курсового риска. Click привязан к Uzcard или Humo, но результат одинаковый: бот отправляет ссылку Click, приложение открывается, вы подтверждаете.
              </p>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              175 000 сум — за 3 месяца. Сравнение с помесячными: 59 000 × 3 = 177 000 сум. В 3-месячном — 175 000 сум: минимальная, но заметная экономия. Главный выигрыш не в деньгах, а во времени: один раз заплатили, 90 дней ничто не напоминает.
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Тариф</div>
                <div className="text-center">Общая цена</div>
                <div className="text-center">В месяц</div>
                <div className="text-center">Относительно 3 мес</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">1 мес × 3</div>
                <div className="text-center">177 000 сум</div>
                <div className="text-center">59 000 сум</div>
                <div className="text-center text-muted">+1.1% дороже</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm bg-primary-light/20">
                <div className="font-bold text-primary">3 месяца ⭐</div>
                <div className="text-center font-bold text-primary">175 000 сум</div>
                <div className="text-center font-bold text-primary">58 333 сум</div>
                <div className="text-center text-green-600 font-bold">Базовый</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">6 месяцев</div>
                <div className="text-center">235 000 сум</div>
                <div className="text-center">39 167 сум</div>
                <div className="text-center text-muted">2x срок, 1.34x цена</div>
              </div>
              <div className="grid grid-cols-4 p-4 items-center text-sm">
                <div className="font-medium">12 месяцев</div>
                <div className="text-center">425 000 сум</div>
                <div className="text-center">35 417 сум</div>
                <div className="text-center text-muted">4x срок, 2.43x цена</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              3-месячный — в зоне &quot;проба-бюджет&quot;. Чуть дешевле помесячной в пересчёте, без большого разового платежа за 6 месяцев. Click автоматически заполняет именно эту сумму — 175 000 сум.
            </p>
          </section>

          {/* Section 3 — Step by step */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Как купить 3-месячный Premium через Click — пошагово
            </h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Краткий ответ:</strong> откройте{" "}
                <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>{" "}
                → выберите <strong>3 месяца</strong> → введите username → выберите <strong>Click</strong> → приложение откроется автоматически → подтвердите PIN/Face ID → Premium активируется за 5 минут.
              </p>
            </div>

            <p className="text-muted leading-relaxed mb-6">
              Если Click установлен и карта привязана — весь процесс занимает 3-5 минут. Каждый шаг подробно:
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  step: "1",
                  title: "Откройте @PremiumSendBot в Telegram",
                  desc: "Введите @PremiumSendBot в поиске Telegram. Откройте бота с галочкой проверки. Нажмите /start — бот покажет меню.",
                },
                {
                  step: "2",
                  title: "Выберите тариф на 3 месяца",
                  desc: "Бот покажет 4 тарифа: 1, 3, 6, 12 месяцев. Нажмите \"3 месяца\". Цена сразу видна: 175 000 сум. Можно вернуться и поменять выбор.",
                },
                {
                  step: "3",
                  title: "Введите username аккаунта для Premium",
                  desc: "После @ напишите Telegram username. Это ваш аккаунт или того, кому дарите. Если ошибиться — Premium активируется на чужом аккаунте, вернуть сложно. Проверьте дважды.",
                },
                {
                  step: "4",
                  title: "Выберите способ оплаты — \"Click\"",
                  desc: "На экране 4 варианта: Uzcard, Humo, Click, Payme. Нажмите \"Click\". Бот пришлёт ссылку или QR-код для оплаты в Click.",
                },
                {
                  step: "5",
                  title: "Приложение Click откроется автоматически",
                  desc: "По нажатию ссылки телефон откроет Click. Сумма заполнена автоматически — 175 000 сум. Не нужно вводить номер карты, пароль или CVV — данные сохранены в приложении.",
                },
                {
                  step: "6",
                  title: "Подтвердите PIN-кодом или Face ID",
                  desc: "Click подтверждает оплату по PIN-коду (или Face ID/отпечатку). SMS-код не нужен. Оплата проходит за секунду, Click выдаёт PDF-чек.",
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
              Большинство пользователей Click заканчивают весь процесс за 3-5 минут. В течение 3 месяцев никаких повторных платежей.
            </p>
          </section>

          {/* Mid CTA */}
          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Приложение Click готово?{" "}
                <strong className="text-white">@PremiumSendBot</strong> — оплатите 3-месячный Telegram Premium через Click за 175 000 сум. Подтверждение — в один клик.
              </p>
              <Link
                href="https://t.me/premiumsendbot"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                Начать с Click на 3 месяца
              </Link>
            </div>
          </section>

          {/* Section 4 — Click vs alternatives */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Click vs Payme vs Uzcard P2P для 3 месяцев — что быстрее?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              175 000 сум за 3-месячный Premium можно оплатить четырьмя способами. Результат одинаковый — Premium придёт за 5 минут. Но скорость и удобство отличаются:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Способ</div>
                <div className="text-center">Время оплаты</div>
                <div className="text-center">Ввод карты</div>
                <div className="text-center">Подтверждение</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm bg-primary-light/20">
                <div className="font-bold text-primary">Click ⭐</div>
                <div className="text-center text-green-600 font-bold">1-2 минуты</div>
                <div className="text-center text-green-600">Нет</div>
                <div className="text-center">PIN/Face ID</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Payme</div>
                <div className="text-center text-green-600">1-2 минуты</div>
                <div className="text-center text-green-600">Нет</div>
                <div className="text-center">PIN/Face ID</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Uzcard P2P</div>
                <div className="text-center">2-3 минуты</div>
                <div className="text-center">Да</div>
                <div className="text-center">SMS-код</div>
              </div>
              <div className="grid grid-cols-4 p-4 items-center text-sm">
                <div className="font-medium">Humo P2P</div>
                <div className="text-center">2-3 минуты</div>
                <div className="text-center">Да</div>
                <div className="text-center">SMS-код</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Click и Payme</strong> дают опыт &quot;через приложение&quot;: открывается в один клик, сумма автоматически, подтверждение PIN. У большинства пользователей оба установлены. Click чуть распространённее, Payme чуть быстрее. Какой удобнее, тот и выбирайте.
            </p>
            <p className="text-muted leading-relaxed">
              Uzcard или Humo P2P — обычный перевод через банковское приложение. Если нет Click или Payme — работает, но требует пару дополнительных шагов.
            </p>
          </section>

          {/* Section 5 — Why 3 months for Click users */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Почему 3-месячный тариф подходит пользователю Click?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Тот, кто пользуется Click, обычно &quot;действует быстро&quot;: коммуналка, мобильная связь, транспорт — всё в приложении в один клик. 3-месячный Premium вписывается в эту же логику: один раз быстро оплатили, 90 дней не думаете об этом.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: "Преимущество над 1 месяцем",
                  desc: "Каждые 30 дней снова забота об оплате. 3 месяца — заплатили один раз, 90 дней внимания не нужно. С Click быстрее, но всё равно время уходит.",
                },
                {
                  title: "Преимущество над 6 месяцами",
                  desc: "Выложить 235 000 сум разово — для многих тяжело. 3 месяца за 175 000 сум — больше подходит балансу карты в Click.",
                },
                {
                  title: "Сезонная необходимость",
                  desc: "Сессия, рабочий проект, путешествие — 3 месяца как раз подходят к таким коротко-средним периодам. С Click моментально подключаетесь.",
                },
                {
                  title: "Подходит для подарка",
                  desc: "Если дарите — 3 месяца достаточный срок. Оплачиваете в Click, вводите username — Premium на этом аккаунте. По правилам Telegram 1-месячный подарок невозможен.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-muted leading-relaxed">
              Ещё важный факт: в официальном приложении Telegram 3-месячного тарифа <strong>нет вообще</strong>. Только 1 и 12 месяцев. Значит, для 3-месячного Premium — единственный путь идёт через местный сервис. <Link href="/ru/maqolalar/3-oylik-telegram-premium-sotib-olish" className="text-primary font-semibold hover:underline">Подробнее о 3-месячном пакете</Link> в отдельной статье.
            </p>
          </section>

          {/* Section 6 — Safety */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Безопасна ли оплата 175 000 сум через Click?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Click — официальная платёжная система, лицензированная Центральным банком Узбекистана. Соответствует международному стандарту безопасности PCI DSS. Миллионы пользователей применяют Click ежедневно для коммунальных платежей, мобильной связи, онлайн-покупок. Для Telegram Premium механизм такой же — отдельных рисков нет.
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">🔐 Данные карты только на сервере Click</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Номер карты, пароль и CVV хранятся только на защищённых серверах Click. @PremiumSendBot не имеет доступа к этим данным. Бот видит только факт &quot;оплата успешна&quot; от Click.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">💰 Если Premium не пришёл — деньги возвращаются</h3>
                <p className="text-sm text-muted leading-relaxed">
                  При технической ошибке, если Premium не активируется, 175 000 сум возвращаются полностью. По номеру чека Click процесс возврата быстрый — это стандартное правило для реселлера.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">📋 PDF-чек Click — юридический документ</h3>
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
              Покупка 3-месячного Premium через Click — настолько же безопасна, как обычная оплата Click. Дополнительного технического риска нет.
            </p>
          </section>

          {/* Section 7 — Common issues */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Проблемы при оплате 175 000 сум через Click и решения
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Большинство оплат Click проходят без проблем — приложение давно отлажено и стабильно. Но иногда возникают мелкие препятствия:
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">В Click не хватает баланса</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Самая частая причина. <strong>Решение:</strong> в Click проверьте карту. Если баланса не хватает на 175 000 сум — пополните карту или выберите другую. Пополнить карту в Click тоже в один клик.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Click не открыл ссылку</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Возможна устаревшая версия телефона или приложения. <strong>Решение:</strong> обновите Click из Play Market или App Store. После обновления нажмите на ссылку бота заново.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Деньги списались, а Premium не пришёл</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Система иногда обрабатывает чуть дольше. <strong>Решение:</strong> подождите 10-15 минут. Если так и не активировалось — отправьте номер чека Click в поддержку бота. После ручной проверки Premium включат, либо вернут деньги.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Нет приложения Click</h3>
                <p className="text-sm text-muted leading-relaxed">
                  <strong>Решение:</strong> скачайте Click из Play Market (Android) или App Store (iPhone) бесплатно. Зарегистрируйтесь по номеру телефона (3 минуты), привяжите Uzcard или Humo — потом оплата в один клик. Или в @PremiumSendBot выберите Payme или Uzcard P2P.
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
                  q: "Сколько стоит Telegram Premium на 3 месяца через Click?",
                  a: "175 000 сум — 58 333 сум в месяц. Цена одинаковая через Uzcard, Humo и Payme. Click не берёт дополнительной комиссии.",
                },
                {
                  q: "Через сколько активируется 3-месячный Premium после Click?",
                  a: "В Click оплата 1-2 минуты. После подтверждения Premium активируется автоматически за 2-5 минут. При технической задержке до 10-15 минут.",
                },
                {
                  q: "Есть ли дополнительная комиссия при оплате через Click?",
                  a: "Нет. В @PremiumSendBot при оплате через Click нет скрытых комиссий. Вы платите 175 000 сум — это итоговая сумма.",
                },
                {
                  q: "Можно ли оплатить через Click в официальном приложении Telegram?",
                  a: "Нет. Во-первых, Telegram не принимает Click. Во-вторых, в Telegram нет тарифа на 3 месяца — только 1 и 12.",
                },
                {
                  q: "Можно ли подарить 3-месячный Premium через Click?",
                  a: "Да. Бот спросит username — введёте @username получателя, подтвердите оплату в Click, Premium активируется на этом аккаунте. По правилам Telegram 1-месячный подарок невозможен, 3-месячный — самый недорогой вариант для подарка.",
                },
                {
                  q: "Безопасна ли оплата через Click?",
                  a: "Да. Click — лицензированная Центробанком платёжная система, соответствует PCI DSS. Данные карты только в Click, бот не видит. Если Premium не придёт, деньги возвращаются.",
                },
                {
                  q: "Что делать, если нет приложения Click?",
                  a: "Скачайте Click из Play Market или App Store бесплатно (3-5 минут). Или в @PremiumSendBot выберите Payme или Uzcard P2P — цена одинаковая 175 000 сум.",
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
                3 месяца через Click — в цифрах
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">175 000</p>
                  <p className="text-sm text-muted">сум, без скрытых комиссий</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">1-2 мин.</p>
                  <p className="text-sm text-muted">оплата в Click</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">90 дней</p>
                  <p className="text-sm text-muted">спокойного использования</p>
                </div>
              </div>
            </div>
          </section>

          {/* Related cluster links */}
          <section>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-card-border">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Другие сроки через Click
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-4">
                Для пользователей Click доступны все тарифы:
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/ru/maqolalar/telegram-premium-click-orqali" className="text-primary font-semibold hover:underline">
                    Premium через Click — общее руководство (все тарифы)
                  </Link>
                </li>
                <li>
                  <Link href="/ru/maqolalar/3-oylik-telegram-premium-uzcard-orqali" className="text-primary font-semibold hover:underline">
                    3-месячный Premium через Uzcard (для сравнения)
                  </Link>
                </li>
                <li>
                  <Link href="/ru/maqolalar/3-oylik-telegram-premium-humo-orqali" className="text-primary font-semibold hover:underline">
                    3-месячный Premium через Humo
                  </Link>
                </li>
                <li>
                  <Link href="/ru/maqolalar/3-oylik-telegram-premium-sotib-olish" className="text-primary font-semibold hover:underline">
                    3-месячный Premium — общее руководство
                  </Link>
                </li>
                <li>
                  <Link href="/ru/maqolalar/3-oylik-telegram-premium-sovga-qilish" className="text-primary font-semibold hover:underline">
                    Подарить 3-месячный Premium
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
                  Для пользователей Click 3-месячный Telegram Premium — самый быстрый локальный путь. 175 000 сум, подтверждение PIN в приложении, активация за 5 минут, 90 дней спокойного использования.{" "}
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
                  Начать с Click на 3 месяца
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
