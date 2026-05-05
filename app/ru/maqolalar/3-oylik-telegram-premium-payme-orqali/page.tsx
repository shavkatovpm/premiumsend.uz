import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Telegram Premium на 3 месяца через Payme — 175 000 сум за 1-2 минуты",
  description:
    "3-месячный Telegram Premium через Payme за 175 000 сум — @PremiumSendBot, оплата по PIN/Face ID, активация за 5 минут. В Telegram Payme не работает и нет 3-месячного тарифа.",
  keywords: [
    "Telegram Premium на 3 месяца Payme",
    "Telegram Premium через Payme 3 месяца",
    "купить Telegram Premium Payme 3 месяца",
    "3 месяца Premium Payme",
    "Telegram Premium 175000 Payme",
    "Telegram Premium в сумах Payme",
    "PremiumSendBot Payme 3 месяца",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/ru/maqolalar/3-oylik-telegram-premium-payme-orqali",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/3-oylik-telegram-premium-payme-orqali",
      ru: "https://premiumsend.uz/ru/maqolalar/3-oylik-telegram-premium-payme-orqali",
    },
  },
  openGraph: {
    title: "Telegram Premium на 3 месяца через Payme — 175 000 сум",
    description:
      "3-месячный Telegram Premium через Payme за 175 000 сум. @PremiumSendBot — PIN/Face ID, активация за 5 минут.",
    url: "https://premiumsend.uz/ru/maqolalar/3-oylik-telegram-premium-payme-orqali",
    type: "article",
    publishedTime: "2026-05-04",
  },
};

export default function Article3MonthPaymeRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Telegram Premium на 3 месяца через Payme — за 175 000 сум",
    description:
      "Покупка 3-месячного Telegram Premium через Payme — @PremiumSendBot за 175 000 сум. Оплата в сумах, в Payme за 1-2 минуты, активация за 5 минут.",
    datePublished: "2026-05-04",
    dateModified: "2026-05-04",
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
      "https://premiumsend.uz/ru/maqolalar/3-oylik-telegram-premium-payme-orqali",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько стоит Telegram Premium на 3 месяца через Payme?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "В Premium Send 3-месячный Telegram Premium через Payme — 175 000 сум, или 58 333 сум в месяц. Цена одинаковая через Uzcard, Humo и Click. Payme не берёт дополнительной комиссии, курсового риска нет.",
        },
      },
      {
        "@type": "Question",
        name: "Через сколько активируется 3-месячный Premium после оплаты Payme?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "В Payme оплата занимает 1-2 минуты (PIN или Face ID). После подтверждения Premium активируется автоматически за 2-5 минут. При технической задержке может занять 10-15 минут.",
        },
      },
      {
        "@type": "Question",
        name: "Есть ли дополнительная комиссия при оплате через Payme?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет. В @PremiumSendBot при оплате через Payme нет скрытых комиссий. Вы платите 175 000 сум — это итоговая сумма. Payme также не берёт комиссии за такие платежи.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли оплатить 3 месяца через Payme в официальном приложении Telegram?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет, по двум причинам. Первая: официальное приложение Telegram не принимает Payme — только Visa, Mastercard, Google Pay, Apple Pay. Вторая: в Telegram нет 3-месячного тарифа — только 1 и 12 месяцев.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли подарить 3-месячный Premium через Payme?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. 3-месячный Premium можно подарить через Payme. Бот спрашивает username — указываете @username получателя, подтверждаете в Payme, Premium активируется на этом аккаунте. По правилам Telegram 1-месячного подарка не существует, 3 месяца — самый дешёвый вариант для подарка.",
        },
      },
      {
        "@type": "Question",
        name: "Безопасна ли оплата через Payme?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Payme — официальная платёжная система, лицензированная Центральным банком, по стандарту PCI DSS. Данные карты только на сервере Payme, бот их не видит. На каждую оплату выдаётся PDF-чек. Если Premium не пришёл, оплата возвращается полностью.",
        },
      },
      {
        "@type": "Question",
        name: "Что делать, если нет приложения Payme?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Два пути. Первый: установите Payme бесплатно из Play Market или App Store (3-5 минут), привяжите карту, потом оплатите. Второй: в @PremiumSendBot выберите Click или Uzcard P2P — цена та же, 175 000 сум.",
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
        name: "Telegram Premium на 3 месяца через Payme",
        item: "https://premiumsend.uz/ru/maqolalar/3-oylik-telegram-premium-payme-orqali",
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
          Telegram Premium на 3 месяца через Payme
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
            <time className="text-xs text-muted" dateTime="2026-05-04">
              4 мая 2026
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Telegram Premium на 3 месяца через Payme
          </h1>

          {/* TL;DR */}
          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>Краткий ответ:</strong> 3-месячный Telegram Premium через приложение Payme можно купить в{" "}
              <Link
                href="https://t.me/premiumsendbot"
                target="_blank"
                className="text-primary hover:underline"
              >
                @PremiumSendBot
              </Link>
              . Цена — <strong>175 000 сум</strong> (58 333 сум/месяц), оплата в сумах, без комиссии. В Payme подтверждение PIN/Face ID — <strong>1-2 минуты</strong>, Premium активируется за <strong>5 минут</strong>. Официальное приложение Telegram не принимает Payme и 3-месячного тарифа там нет.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Для пользователей Payme 3-месячный Premium — удобная комбинация: Payme — распространённое локальное платёжное приложение, 3-месячный тариф — баланс между сроком и бюджетом. Вместе — минимум времени, минимум действий.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            В статье — точная цена 3-месячного Premium через Payme, пошаговый процесс, безопасность и распространённые проблемы. Если приложение Payme готово — Premium на аккаунте через 5 минут.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 — Why */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Почему именно 3 месяца через Payme — &laquo;удобная оплата + сбалансированный срок&raquo;
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Покупка 3-месячного Premium через Payme решает два ограничения и объединяет два преимущества.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Тарифное ограничение:</strong> Официальное приложение Telegram предлагает только 1 и 12-месячные тарифы — пакетов на 3 и 6 месяцев там вообще нет. Чтобы получить срок &laquo;3 месяца&raquo;, нужно обращаться к местному реселлеру.{" "}
              <Link
                href="/ru/maqolalar/telegram-premium-narxlari"
                className="text-primary font-semibold hover:underline"
              >
                Подробнее о тарифах
              </Link>
              .
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Платёжное ограничение:</strong> Telegram не принимает Payme. Нужна Visa, Mastercard, Google Pay или Apple Pay. Локальное приложение Payme — в международной системе оплаты Telegram отсутствует.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Преимущество Payme:</strong> В приложении Payme карта привязывается один раз. При каждом следующем платеже не нужно вводить номер, ждать SMS — подтверждение по PIN или Face ID. Для Premium это особенно удобно: нажали кнопку, приложение открылось, сумма заполнилась автоматически.
            </p>
            <div className="bg-section-alt rounded-xl p-5 mb-4">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Решение:</strong> @PremiumSendBot — принимает оплату через Payme и доставляет 3-месячный пакет, которого нет в официальной системе Telegram. Payme — опыт &laquo;через приложение&raquo;, 3 месяца — &laquo;сбалансированный&raquo; срок. Всё в одном процессе.
              </p>
            </div>
            <p className="text-muted leading-relaxed">
              Большинство пользователей Payme завершают весь процесс за 3-5 минут — старый способ (Uzcard P2P) обычно медленнее.
            </p>
          </section>

          {/* Section 2 — Pricing */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              3-месячный Premium через Payme — структура цены
            </h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Цена:</strong> 3-месячный Telegram Premium через Payme — <strong>175 000 сум</strong> (58 333 сум/месяц). Оплата в сумах, без курсового риска. Payme может быть привязан к Uzcard, Humo или Visa — результат тот же: бот пришлёт ссылку Payme, приложение откроется, вы подтвердите.
              </p>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              175 000 сум — за 3 месяца. Сравнение с месячным тарифом: 59 000 × 3 = 177 000 сум. На 3-месячном — 175 000, минимальная, но ощутимая экономия. Главный выигрыш не в деньгах, а во времени: один раз заплатили — 90 дней ничего не напоминает.
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Тариф</div>
                <div className="text-center">Общая цена</div>
                <div className="text-center">В месяц</div>
                <div className="text-center">К 3 месяцам</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">1 месяц × 3</div>
                <div className="text-center">177 000 сум</div>
                <div className="text-center">59 000 сум</div>
                <div className="text-center text-muted">+1.1% дороже</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm bg-primary-light/20">
                <div className="font-bold text-primary">3 месяца ⭐</div>
                <div className="text-center font-bold text-primary">
                  175 000 сум
                </div>
                <div className="text-center font-bold text-primary">
                  58 333 сум
                </div>
                <div className="text-center text-green-600 font-bold">
                  Базовая
                </div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">6 месяцев</div>
                <div className="text-center">235 000 сум</div>
                <div className="text-center">39 167 сум</div>
                <div className="text-center text-muted">
                  2x срок, 1.34x цена
                </div>
              </div>
              <div className="grid grid-cols-4 p-4 items-center text-sm">
                <div className="font-medium">12 месяцев</div>
                <div className="text-center">425 000 сум</div>
                <div className="text-center">35 417 сум</div>
                <div className="text-center text-muted">
                  4x срок, 2.43x цена
                </div>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              3 месяца — &laquo;пробно-бюджетный&raquo; интервал. Чуть дешевле месячного в пересчёте на месяц, без большого платежа за 6 месяцев. В Payme автозаполненная сумма — 175 000 сум.
            </p>
          </section>

          {/* Section 3 — Step by step */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Как купить 3-месячный Premium через Payme — пошагово
            </h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Краткий ответ:</strong>{" "}
                <Link
                  href="https://t.me/premiumsendbot"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  @PremiumSendBot
                </Link>
                {" "}→ выберите <strong>3 месяца</strong> → введите username → выберите <strong>Payme</strong> → приложение откроется автоматически → подтвердите PIN/Face ID → Premium активируется за 5 минут.
              </p>
            </div>

            <p className="text-muted leading-relaxed mb-6">
              Если приложение Payme установлено и карта привязана, весь процесс занимает 3-5 минут. Вот каждый шаг:
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  step: "1",
                  title: "Откройте @PremiumSendBot в Telegram",
                  desc: "Введите @PremiumSendBot в поиске Telegram. Откройте бот с галочкой подтверждения. Нажмите /start — бот покажет меню.",
                },
                {
                  step: "2",
                  title: "Выберите 3-месячный тариф",
                  desc: "Бот покажет 4 тарифа: 1, 3, 6, 12 месяцев. Нажмите «3 месяца». Сразу появится цена: 175 000 сум. Выбор можно отменить.",
                },
                {
                  step: "3",
                  title: "Введите username получателя Premium",
                  desc: "Через @ напишите Telegram username. Это ваш аккаунт или того, кому делается подарок. При ошибке Premium активируется на другом аккаунте — вернуть сложно. Проверьте дважды.",
                },
                {
                  step: "4",
                  title: "Выберите способ оплаты «Payme»",
                  desc: "На экране 4 варианта: Uzcard, Humo, Click, Payme. Нажмите «Payme». Бот пришлёт ссылку Payme или QR-код.",
                },
                {
                  step: "5",
                  title: "Приложение Payme откроется автоматически",
                  desc: "По клику телефон откроет Payme. Сумма заполнена автоматически — 175 000 сум. Не нужно вводить номер карты, пароль или CVV — всё сохранено в приложении.",
                },
                {
                  step: "6",
                  title: "Подтвердите PIN-кодом или Face ID",
                  desc: "В Payme подтверждаете оплату ранее установленным PIN-кодом (или Face ID/отпечатком). SMS не нужен. Платёж проходит мгновенно, Payme выдаёт PDF-чек.",
                },
                {
                  step: "7",
                  title: "Premium активируется за 5 минут",
                  desc: "После подтверждения Premium автоматически включается на аккаунте. Бот пришлёт сообщение, в профиле появится значок Premium. При технической задержке — 10-15 минут.",
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
              Большинство пользователей Payme завершают весь процесс за 3-5 минут. В течение 3 месяцев повторных платежей не требуется.
            </p>
          </section>

          {/* Mid CTA */}
          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Приложение Payme готово?{" "}
                <strong className="text-white">@PremiumSendBot</strong> — оплатите 3-месячный Telegram Premium за 175 000 сум через Payme. Подтверждение в одно касание.
              </p>
              <Link
                href="https://t.me/premiumsendbot"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                Начать с Payme — 3 месяца
              </Link>
            </div>
          </section>

          {/* Section 4 — Comparison */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Для 3 месяцев Payme vs Click vs Uzcard P2P — что быстрее?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              175 000 сум за 3-месячный Premium можно оплатить 4 способами. Результат одинаковый — Premium всё равно приходит за 5 минут. Но скорость и удобство различаются:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Способ</div>
                <div className="text-center">Время оплаты</div>
                <div className="text-center">Ввод карты</div>
                <div className="text-center">Подтверждение</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm bg-primary-light/20">
                <div className="font-bold text-primary">Payme ⭐</div>
                <div className="text-center text-green-600 font-bold">
                  1-2 мин
                </div>
                <div className="text-center text-green-600">Нет</div>
                <div className="text-center">PIN/Face ID</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Click</div>
                <div className="text-center text-green-600">1-2 мин</div>
                <div className="text-center text-green-600">Нет</div>
                <div className="text-center">PIN/Face ID</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Uzcard P2P</div>
                <div className="text-center">2-3 мин</div>
                <div className="text-center">Да</div>
                <div className="text-center">SMS-код</div>
              </div>
              <div className="grid grid-cols-4 p-4 items-center text-sm">
                <div className="font-medium">Humo P2P</div>
                <div className="text-center">2-3 мин</div>
                <div className="text-center">Да</div>
                <div className="text-center">SMS-код</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Payme и Click</strong> — &laquo;через приложение&raquo;: одно касание, сумма автоматически, подтверждение PIN. У большинства узбекских пользователей оба установлены. Payme — современнее по UI и принимает Visa-карты тоже. Click — чуть шире распространён. Какой удобнее, тот и выбирайте.
            </p>
            <p className="text-muted leading-relaxed">
              Uzcard или Humo P2P — обычный перевод через банковское приложение. Работает, если нет Payme или Click, но шагов больше.
            </p>
          </section>

          {/* Section 5 — Why 3 months for Payme users */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Почему пользователю Payme подходит 3-месячный?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Тот, кто пользуется Payme, обычно &laquo;действует быстро&raquo;: коммунальные, такси, мобильная связь — всё в одно касание. 3-месячный Premium вписывается в ту же логику: один раз быстро заплатили — 90 дней не вспоминаете.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: "Преимущество над 1-месячным",
                  desc: "Каждые 30 дней снова забота об оплате. 3 месяца — заплатили один раз, и 90 дней не думаете. Через Payme быстрее, но всё равно занимает время.",
                },
                {
                  title: "Преимущество над 6-месячным",
                  desc: "235 000 сум за один раз — для многих тяжело. 3 месяца за 175 000 — Payme больше подходит к балансу.",
                },
                {
                  title: "Сезонная потребность",
                  desc: "Экзамен, рабочий проект, поездка — 3 месяца идеально подходят к таким коротко-средним периодам. Через Payme подключаетесь моментально.",
                },
                {
                  title: "Подходит для подарка",
                  desc: "Если делаете подарок — 3 месяца достаточный срок. Через Payme платите, вводите username — Premium на этом аккаунте. По правилам Telegram 1-месячного подарка не существует.",
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
              Ещё важный факт: в официальном приложении Telegram 3-месячного тарифа <strong>вообще нет</strong>. Только 1 и 12 месяцев. Для 3-месячного Premium единственный путь — местный посреднический сервис.{" "}
              <Link
                href="/ru/maqolalar/3-oylik-telegram-premium-sotib-olish"
                className="text-primary font-semibold hover:underline"
              >
                Подробнее о 3-месячном пакете
              </Link>
              {" "}— в отдельной статье.
            </p>
          </section>

          {/* Section 6 — Safety */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Безопасно ли платить 175 000 сум через Payme?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Payme — официальная платёжная система, лицензированная Центральным банком. Работает по международному стандарту PCI DSS. Миллионы пользователей применяют её ежедневно для коммунальных, такси, мобильной связи и онлайн-покупок. Для Telegram Premium механизм точно такой же — отдельных рисков нет.
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  🔐 Данные карты только на сервере Payme
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Номер карты, пароль и CVV хранятся только на безопасных серверах Payme. @PremiumSendBot их никогда не видит. Бот видит только факт «Payme подтвердил оплату».
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  💰 Если Premium не пришёл — деньги возвращаются
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  При технической ошибке, если Premium не активировался — 175 000 сум возвращаются полностью. По номеру чека Payme возврат происходит быстро — стандартное правило реселлера.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  📋 PDF-чек Payme — юридический документ
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Payme выдаёт PDF-чек на каждую оплату. Сохраняется в приложении и может быть перезагружен в любой момент. При проблеме поддержка по номеру чека сразу находит платёж.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  🛡️ Двухступенчатая защита
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Payme — PIN/Face ID + проверка баланса банка. Бот — подтверждение username + активация Premium. На каждом этапе контроль — если где-то проблема, процесс останавливается с понятной ошибкой.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Покупка 3-месячного Premium через Payme — настолько же безопасна, как ваш обычный платёж в Payme. Дополнительного технического риска нет.
            </p>
          </section>

          {/* Section 7 — Common issues */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Проблемы при оплате 175 000 сум через Payme
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Большинство платежей Payme проходят без проблем — приложение давно отлажено и стабильно. Но иногда могут быть мелкие препятствия:
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  Не хватает баланса в Payme
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Самая частая причина. <strong>Решение:</strong> проверьте карту в Payme. Если баланса не хватает на 175 000 сум — пополните или выберите другую карту. Через Payme пополнение карты тоже происходит в одно касание.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  Приложение Payme не открыло ссылку
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Возможно, телефон на старой версии или Payme требует обновления. <strong>Решение:</strong> обновите Payme в Play Market или App Store. После обновления нажмите ссылку бота заново.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  Деньги списались, а Premium не пришёл
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Система может обрабатывать чуть дольше. <strong>Решение:</strong> подождите 10-15 минут. Если не активировалось — отправьте номер чека Payme в поддержку бота. После ручной проверки Premium активируется или деньги возвращаются.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  Нет приложения Payme
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  <strong>Решение:</strong> скачайте Payme бесплатно из Play Market (Android) или App Store (iPhone). Зарегистрируйтесь по номеру телефона (3 минуты), привяжите Uzcard или Humo — далее оплата в одно касание. Или в @PremiumSendBot выберите Click или Uzcard P2P.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  Забыл PIN-код Payme
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  <strong>Решение:</strong> воспользуйтесь разделом «Восстановление PIN» в Payme. Восстановление через номер телефона занимает 5 минут. Восстановите и попробуйте оплатить заново.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Большинство проблем решается сразу. Поддержка бота помогает в любой ситуации и предлагает альтернативный путь (Click или Uzcard P2P).
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
                  q: "Сколько стоит Telegram Premium на 3 месяца через Payme?",
                  a: "175 000 сум — 58 333 сум в месяц. Цена одинаковая через Uzcard, Humo и Click. Payme не берёт дополнительной комиссии.",
                },
                {
                  q: "Через сколько активируется 3-месячный Premium после оплаты Payme?",
                  a: "В Payme оплата 1-2 минуты. После подтверждения Premium активируется автоматически за 2-5 минут. При технической задержке — до 10-15 минут.",
                },
                {
                  q: "Есть ли дополнительная комиссия при оплате через Payme?",
                  a: "Нет. В @PremiumSendBot скрытых комиссий нет. Вы платите 175 000 сум — это итоговая сумма.",
                },
                {
                  q: "Можно ли оплатить 3 месяца через Payme в официальном приложении Telegram?",
                  a: "Нет. Во-первых, Telegram не принимает Payme. Во-вторых, в Telegram нет 3-месячного тарифа — только 1 и 12 месяцев.",
                },
                {
                  q: "Можно ли подарить 3-месячный Premium через Payme?",
                  a: "Да. Бот спрашивает username — указываете @username получателя, подтверждаете в Payme, Premium активируется на этом аккаунте. По правилам Telegram 1-месячного подарка не существует, 3 месяца — самый дешёвый для подарка.",
                },
                {
                  q: "Безопасно ли платить через Payme?",
                  a: "Да. Payme — лицензирован Центральным банком, по стандарту PCI DSS. Данные карты только на сервере Payme, бот их не видит. Если Premium не пришёл — деньги возвращаются.",
                },
                {
                  q: "Что делать, если нет приложения Payme?",
                  a: "Скачайте Payme бесплатно из Play Market или App Store (3-5 минут). Или в @PremiumSendBot выберите Click или Uzcard P2P — цена одинаковая, 175 000 сум.",
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

          {/* Trust Block */}
          <section>
            <div className="bg-section-alt rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-bold text-foreground mb-4 text-center">
                3 месяца через Payme — в цифрах
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">
                    175 000
                  </p>
                  <p className="text-sm text-muted">
                    сум, без дополнительной комиссии
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">1-2 мин</p>
                  <p className="text-sm text-muted">оплата в Payme</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">90 дн</p>
                  <p className="text-sm text-muted">спокойного использования</p>
                </div>
              </div>
            </div>
          </section>

          {/* Related cluster links */}
          <section>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-card-border">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Другие сроки через Payme
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-4">
                Для пользователей Payme доступны все тарифы:
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/ru/maqolalar/telegram-premium-payme-orqali"
                    className="text-primary font-semibold hover:underline"
                  >
                    Premium через Payme — pillar-руководство (все тарифы)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ru/maqolalar/3-oylik-telegram-premium-click-orqali"
                    className="text-primary font-semibold hover:underline"
                  >
                    3 месяца Premium через Click (для сравнения)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ru/maqolalar/3-oylik-telegram-premium-humo-orqali"
                    className="text-primary font-semibold hover:underline"
                  >
                    3 месяца Premium через Humo
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ru/maqolalar/3-oylik-telegram-premium-sotib-olish"
                    className="text-primary font-semibold hover:underline"
                  >
                    3 месяца Premium — общее руководство
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ru/maqolalar/3-oylik-telegram-premium-sovga-qilish"
                    className="text-primary font-semibold hover:underline"
                  >
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
                  Для пользователей Payme 3-месячный Telegram Premium — удобный локальный путь. 175 000 сум, подтверждение PIN в приложении, активация за 5 минут, 90 дней спокойствия.{" "}
                  <strong className="text-white">@PremiumSendBot</strong> — начать в несколько кликов.
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
                  Начать с Payme — 3 месяца
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
