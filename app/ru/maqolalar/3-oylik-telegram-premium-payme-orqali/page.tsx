import type { Metadata } from "next";
import Link from "next/link";
import { ogBaseRu } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title:
    "Telegram Premium на 3 месяца через Payme — 175 000 сум, перевод на карту",
  description:
    "3-месячный Telegram Premium через Payme за 175 000 сум — @PremiumSendBot показывает карту и сумму, вы переводите через Payme, Premium активируется за 5 минут. В Telegram нет 3-месячного тарифа.",
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
      "x-default": "https://premiumsend.uz/maqolalar/3-oylik-telegram-premium-payme-orqali",
    },
  },
  openGraph: {
    ...ogBaseRu,
    locale: "ru_RU",
    title: "Telegram Premium на 3 месяца через Payme — 175 000 сум",
    description:
      "3-месячный Telegram Premium через Payme за 175 000 сум. Бот показывает карту и сумму, переводите через Payme, Premium через 5 минут.",
    url: "https://premiumsend.uz/ru/maqolalar/3-oylik-telegram-premium-payme-orqali",
    type: "article",
    publishedTime: "2026-05-05",
  },
};

export default function Article3MonthPaymeRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    image: "https://premiumsend.uz/og-image.png",
    headline:
      "Telegram Premium на 3 месяца через Payme — за 175 000 сум",
    description:
      "Покупка 3-месячного Telegram Premium через Payme — @PremiumSendBot выдаёт карту и сумму, вы переводите, система автоматически определяет.",
    datePublished: "2026-05-05",
    dateModified: "2026-05-05",
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
          text: "В Premium Send 3-месячный Telegram Premium через Payme — 175 000 сум, или 58 333 сум в месяц. Цена одинаковая через Uzcard, Humo и приложение Click. Бот показывает точную сумму и номер карты для P2P-перевода через Payme. Комиссия 0%, курсового риска нет.",
        },
      },
      {
        "@type": "Question",
        name: "Как купить 3-месячный Premium через Payme?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "В @PremiumSendBot выбираете 3-месячный тариф, вводите @username аккаунта-получателя Premium. Бот показывает номер карты и точную сумму 175 000 сум. Через приложение Payme функцией 'Перевод на другую карту' переводите ровно 175 000 сум на эту карту. Система за 1-5 минут определяет платёж и Premium активируется на аккаунте.",
        },
      },
      {
        "@type": "Question",
        name: "Почему важно перевести именно 175 000 сум?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Система определяет платёж по комбинации карты и суммы. Если вы переведёте другую сумму (например 174 000 или 175 500), система не сможет автоматически сопоставить и Premium активируется вручную после обращения в поддержку. Сумма, указанная ботом — ровно 175 000, переведя её, Premium придёт за 5 минут.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли оплатить 3 месяца через Payme в официальном приложении Telegram?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет, по двум причинам. Первая: официальное приложение Telegram не принимает Payme — только Visa, Mastercard, Google Pay, Apple Pay. Вторая: в Telegram нет 3-месячного тарифа — только 1 и 12 месяцев. Для 3-месячного Premium в сумах нужен местный посреднический сервис.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли подарить 3-месячный Premium через Payme?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Когда бот спрашивает username, указываете не свой, а получателя подарка, остальной процесс не меняется: через Payme переводите 175 000 сум на карту, Premium активируется на этом аккаунте. По правилам Telegram 1-месячный подарок невозможен, 3 месяца — самый дешёвый вариант для подарка.",
        },
      },
      {
        "@type": "Question",
        name: "Безопасна ли оплата через Payme?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Payme — официальная платёжная система, лицензированная Центральным банком, по стандарту PCI DSS. Данные карты сохраняются только на сервере Payme, бот их не видит. На каждый P2P-перевод выдаётся PDF-чек. Если Premium не пришёл, оплата возвращается полностью.",
        },
      },
      {
        "@type": "Question",
        name: "Что делать, если нет приложения Payme?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "На указанную ботом карту ровно 175 000 сум можно перевести через любое другое приложение: Click, приложение Uzcard, Humo или приложение банка. Результат тот же — система по сумме и карте определит платёж и активирует Premium. Или скачайте Payme бесплатно из Play Market/App Store за 3-5 минут.",
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

  const howToSchema = {"@context":"https://schema.org","@type":"HowTo","name":"Telegram Premium на 3 месяца через Payme — за 175 000 сум","description":"Пошаговое руководство: Telegram Premium на 3 месяца через Payme — за 175 000 сум","step":[{"@type":"HowToStep","position":1,"name":"Откройте @PremiumSendBot в Telegram","text":"Введите @PremiumSendBot в поиске Telegram. Откройте бот с галочкой подтверждения. Нажмите /start — бот покажет меню."},{"@type":"HowToStep","position":2,"name":"Выберите 3-месячный тариф","text":"Бот покажет 4 тарифа: 1, 3, 6, 12 месяцев. Нажмите «3 месяца». Сразу появится цена: 175 000 сум. Выбор можно отменить."},{"@type":"HowToStep","position":3,"name":"Введите username получателя Premium","text":"Через @ напишите Telegram username. Это ваш аккаунт или того, кому делается подарок. При ошибке Premium активируется на другом аккаунте — вернуть сложно. Проверьте дважды."},{"@type":"HowToStep","position":4,"name":"Бот покажет номер карты и точную сумму","text":"На экране появятся номер карты (8600 XXXX XXXX XXXX) и точная сумма платежа (175 000 сум). Бот может добавить контрольный код в комментарии."},{"@type":"HowToStep","position":5,"name":"Откройте Payme и начните P2P-перевод","text":"Войдите в приложение Payme. Выберите функцию «Перевод на другую карту». Введите номер карты, указанный ботом."},{"@type":"HowToStep","position":6,"name":"Введите ровно 175 000 сум и подтвердите","text":"Сумму вводите ровно 175 000 сум. Даже разница в 100 сум помешает системе автоматически определить платёж. Подтвердите PIN или Face ID."},{"@type":"HowToStep","position":7,"name":"Premium активируется за 5 минут","text":"После подтверждения Payme система за 1-5 минут определит сумму, и Premium активируется на указанном вами аккаунте. Бот пришлёт сообщение, в профиле появится значок Premium."}]};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
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
            <time className="text-xs text-muted" dateTime="2026-05-05">
              5 мая 2026
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Telegram Premium на 3 месяца через Payme
          </h1>

          {/* TL;DR */}
          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>Краткий ответ:</strong> процесс покупки 3-месячного Telegram Premium через Payme — в{" "}
              <Link
                href="https://telegram.me/premiumsendbot"
                target="_blank"
                className="text-primary hover:underline"
              >
                @PremiumSendBot
              </Link>
              {" "}выбираете 3-месячный тариф, бот показывает <strong>номер карты и точную сумму 175 000 сум</strong>, вы через Payme переводите ровно эту сумму на эту карту. Система автоматически определяет платёж и активирует Premium на аккаунте за 5 минут. В месяц 58 333 сум, без комиссии.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Для пользователей Payme 3-месячный Premium — удобная комбинация: Payme — самое распространённое локальное платёжное приложение, 3-месячный тариф — баланс между сроком и бюджетом. Бот выдаёт карту и сумму, вы делаете обычный P2P-перевод через Payme.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            В статье — точная цена 3-месячного Premium через Payme, механизм между ботом и Payme, пошаговый процесс, безопасность и распространённые проблемы. Если приложение Payme готово — Premium на аккаунте через 5 минут.
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
              <strong className="text-foreground">Преимущество Payme:</strong> В приложении Payme ваша карта привязана один раз. При каждом следующем P2P-переводе номер своей карты вводить не нужно — указываете только номер карты получателя и сумму, подтверждаете PIN/Face ID. Для покупки Premium это самый простой путь.
            </p>
            <div className="bg-section-alt rounded-xl p-5 mb-4">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Решение:</strong> @PremiumSendBot для 3-месячного пакета показывает номер карты и сумму 175 000 сум. Вы через Payme переводите эту сумму на эту карту. Система автоматически определяет и Premium активируется. Никаких лишних процессов — обычный P2P-перевод.
              </p>
            </div>
            <p className="text-muted leading-relaxed">
              Большинство пользователей Payme завершают весь процесс за 3-5 минут.
            </p>
          </section>

          {/* Section 2 — Pricing */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              3-месячный Premium через Payme — структура цены
            </h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Цена:</strong> 3-месячный Telegram Premium через Payme — <strong>175 000 сум</strong> (58 333 сум/месяц). Сумма, указанная ботом — ровно столько, никаких дополнительных комиссий. Payme также не берёт комиссию за P2P-перевод. Payme работает с вашей картой Uzcard, Humo или Visa.
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
              3 месяца — &laquo;пробно-бюджетный&raquo; интервал. Чуть дешевле месячного в пересчёте на месяц, без большого платежа за 6 месяцев. Бот для оплаты через Payme запрашивает ровно 175 000 сум.
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
                  href="https://telegram.me/premiumsendbot"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  @PremiumSendBot
                </Link>
                {" "}→ выберите <strong>3 месяца</strong> → введите username → бот выдаст номер карты и сумму 175 000 сум → через Payme переведите эту сумму на эту карту → Premium активируется за 5 минут.
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
                  title: "Бот покажет номер карты и точную сумму",
                  desc: "На экране появятся номер карты (8600 XXXX XXXX XXXX) и точная сумма платежа (175 000 сум). Бот может добавить контрольный код в комментарии.",
                },
                {
                  step: "5",
                  title: "Откройте Payme и начните P2P-перевод",
                  desc: "Войдите в приложение Payme. Выберите функцию «Перевод на другую карту». Введите номер карты, указанный ботом.",
                },
                {
                  step: "6",
                  title: "Введите ровно 175 000 сум и подтвердите",
                  desc: "Сумму вводите ровно 175 000 сум. Даже разница в 100 сум помешает системе автоматически определить платёж. Подтвердите PIN или Face ID.",
                },
                {
                  step: "7",
                  title: "Premium активируется за 5 минут",
                  desc: "После подтверждения Payme система за 1-5 минут определит сумму, и Premium активируется на указанном вами аккаунте. Бот пришлёт сообщение, в профиле появится значок Premium.",
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
              Большинство пользователей завершают весь процесс за 3-5 минут. В течение 3 месяцев повторных платежей не требуется.
            </p>
          </section>

          {/* Mid CTA */}
          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Приложение Payme готово?{" "}
                <strong className="text-white">@PremiumSendBot</strong> — выберите 3-месячный тариф, получите номер карты и сумму 175 000 сум, переведите через Payme. Premium на аккаунте через 5 минут.
              </p>
              <Link
                href="https://telegram.me/premiumsendbot"
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

          {/* Section 4 — Why exact amount */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Почему важно перевести именно 175 000 сум?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Вопрос «как бот находит ваш платёж» обоснован. Механизм построен так:
            </p>
            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li>
                Бот для 3-месячного тарифа показывает точную сумму <strong>175 000 сум</strong> (или с уникальным дополнением для каждого заказа)
              </li>
              <li>
                Система постоянно отслеживает поступления на карту
              </li>
              <li>
                Когда ваш платёж приходит ровно с этой суммой — система сопоставляет его с вашим заказом
              </li>
              <li>
                Premium автоматически активируется на указанном вами @username
              </li>
            </ul>
            <p className="text-muted leading-relaxed mb-4">
              Если вы переведёте другую сумму (174 500 или 175 200 сум), система не сможет автоматически сопоставить. В таком случае вы пишете в поддержку бота, отправляете номер чека Payme и точную сумму — Premium активируется вручную (15-30 минут). Но <strong>ровно 175 000</strong> — самый быстрый автоматический путь.
            </p>
            <div className="bg-section-alt rounded-xl p-5">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Совет:</strong> при копировании суммы из бота в Payme не добавляйте лишних пробелов или точек. Введите чистое число — &laquo;175000&raquo; — Payme автоматически отформатирует его в вид «175 000 сум».
              </p>
            </div>
          </section>

          {/* Section 5 — Comparison */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Для 3 месяцев Payme и другие приложения — что быстрее?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              На указанную ботом карту ровно 175 000 сум для 3-месячного Premium можно перевести через любое приложение. Результат одинаковый — Premium всё равно приходит за 5 минут. Но скорость и удобство различаются:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Приложение</div>
                <div className="text-center">Время перевода</div>
                <div className="text-center">Ввод карты</div>
                <div className="text-center">Подтверждение</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm bg-primary-light/20">
                <div className="font-bold text-primary">Payme ⭐</div>
                <div className="text-center text-green-600 font-bold">
                  1-2 мин
                </div>
                <div className="text-center text-green-600">Нет*</div>
                <div className="text-center">PIN/Face ID</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Приложение Click</div>
                <div className="text-center text-green-600">1-2 мин</div>
                <div className="text-center text-green-600">Нет*</div>
                <div className="text-center">PIN/Face ID</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Приложение Uzcard</div>
                <div className="text-center">2-3 мин</div>
                <div className="text-center">Да</div>
                <div className="text-center">SMS-код</div>
              </div>
              <div className="grid grid-cols-4 p-4 items-center text-sm">
                <div className="font-medium">Приложение банка (общее)</div>
                <div className="text-center">2-3 мин</div>
                <div className="text-center">Да</div>
                <div className="text-center">SMS-код</div>
              </div>
            </div>

            <p className="text-muted text-xs italic mb-4">
              * В приложениях Payme и Click ваша карта уже сохранена — при каждом переводе номер вашей карты не нужно вводить. Но <strong>номер карты получателя</strong> в любом случае придётся ввести (тот, что показал бот).
            </p>

            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Payme и приложение Click</strong> — дают опыт «через приложение»: ваша карта сохранена, вводите номер карты получателя и сумму, подтверждение PIN. У большинства пользователей в Узбекистане установлены оба. Что у вас удобнее, то и выбирайте.
            </p>
            <p className="text-muted leading-relaxed">
              Перевод через приложение Uzcard или Humo — старый способ: ручной ввод карты, ожидание SMS. Если нет Payme или Click, тоже работает.
            </p>
          </section>

          {/* Section 6 — Why 3 months */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Почему пользователю Payme подходит 3-месячный тариф?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Тот, кто пользуется Payme, обычно &laquo;действует быстро&raquo;: коммунальные, такси, мобильная связь — всё в одно-два касания. 3-месячный Premium вписывается в ту же логику: один раз быстро заплатили — 90 дней не вспоминаете.
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
                  desc: "Если делаете подарок — 3 месяца достаточный срок. Через Payme переводите 175 000 сум на карту, вводите username — Premium на этом аккаунте. По правилам Telegram 1-месячного подарка не существует.",
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

          {/* Section 7 — Safety */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Безопасно ли перевести 175 000 сум через Payme?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Payme — официальная платёжная система, лицензированная Центральным банком. Работает по международному стандарту PCI DSS. Миллионы пользователей применяют её ежедневно для коммунальных, такси, мобильной связи и онлайн-покупок. Для Telegram Premium механизм точно такой же — обычный P2P-перевод на указанную ботом карту. Отдельных рисков нет.
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  🔐 Данные карты только на сервере Payme
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Номер карты, пароль и CVV сохраняются только на безопасных серверах Payme. @PremiumSendBot эти данные никогда не видит. Бот видит только факт «на карту поступило 175 000 сум».
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
                  Payme выдаёт PDF-чек на каждый P2P-перевод. Сохраняется в приложении и может быть перезагружен в любой момент. При проблеме поддержка по номеру чека сразу находит платёж.
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
              Покупка 3-месячного Premium через Payme — настолько же безопасна, как ваш обычный P2P-перевод в Payme. Дополнительного технического риска нет.
            </p>
          </section>

          {/* Section 8 — Common issues */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Проблемы при оплате 175 000 сум через Payme
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Большинство P2P-переводов через Payme проходят без проблем — приложение давно отлажено и стабильно. Но иногда могут быть мелкие препятствия:
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  Переведена не та сумма вместо 175 000
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Самая частая причина. <strong>Решение:</strong> отправьте в поддержку бота номер чека Payme и точную сумму, которую вы перевели. За 15-30 минут проводится ручная проверка, Premium активируется или возвращается разница.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  Не хватает денег на балансе Payme
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  На карте, привязанной к Payme, должно быть достаточно средств на 175 000 сум. <strong>Решение:</strong> пополните карту через Payme или выберите другую карту.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  Деньги переведены, а Premium не пришёл
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
                  <strong>Решение:</strong> скачайте Payme бесплатно из Play Market (Android) или App Store (iPhone). Зарегистрируйтесь по номеру телефона (3 минуты), привяжите Uzcard или Humo — далее перевод в одно-два касания. Или переведите на указанную ботом карту через приложение Click, Uzcard или приложение банка — результат тот же.
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
              Большинство проблем решается сразу. Поддержка бота помогает в любой ситуации и предлагает альтернативный путь (Click, приложение Uzcard или банк).
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
                  a: "175 000 сум — 58 333 сум в месяц. Цена одинаковая через Uzcard, Humo и приложение Click. Payme P2P-перевод тоже без комиссии.",
                },
                {
                  q: "Как купить 3-месячный Premium через Payme?",
                  a: "В @PremiumSendBot выберите 3-месячный тариф и введите username. Бот покажет номер карты и точную сумму 175 000 сум. Через Payme функцией «Перевод на другую карту» переведите ровно 175 000 сум на эту карту. За 5 минут Premium на аккаунте.",
                },
                {
                  q: "Есть ли дополнительная комиссия при оплате через Payme?",
                  a: "Нет. Сумма, указанная ботом, 175 000 — вы переводите ровно столько, дополнительно ничего не берётся. Payme также не берёт комиссии за P2P-перевод.",
                },
                {
                  q: "Что если перевести другую сумму?",
                  a: "Система не сможет автоматически сопоставить. В таком случае вы пишете в поддержку бота, отправляете номер чека Payme и точную сумму — Premium активируется вручную за 15-30 минут или возвращается разница. Но ровно 175 000 — всегда быстрее.",
                },
                {
                  q: "Можно ли оплатить 3 месяца через Payme в официальном приложении Telegram?",
                  a: "Нет. Во-первых, Telegram не принимает Payme. Во-вторых, в Telegram нет 3-месячного тарифа — только 1 и 12 месяцев.",
                },
                {
                  q: "Можно ли подарить 3-месячный Premium через Payme?",
                  a: "Да. Бот спрашивает username получателя, вы переводите через Payme 175 000 сум на карту, Premium активируется на этом аккаунте. По правилам Telegram 1-месячный подарок не существует, 3 месяца — самый дешёвый для подарка.",
                },
                {
                  q: "Что делать, если нет приложения Payme?",
                  a: "Скачайте Payme бесплатно из Play Market или App Store (3-5 минут). Или переведите на указанную ботом карту через Click, приложение Uzcard или приложение банка — цена та же 175 000 сум, результат тот же.",
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
                  <p className="text-sm text-muted">P2P-перевод в Payme</p>
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
                  Для пользователей Payme 3-месячный Telegram Premium — удобный локальный путь. 175 000 сум, обычный P2P-перевод через Payme на указанную ботом карту, активация за 5 минут, 90 дней спокойствия.{" "}
                  <strong className="text-white">@PremiumSendBot</strong> — начать в несколько кликов.
                </p>
                <Link
                  href="https://telegram.me/premiumsendbot"
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
