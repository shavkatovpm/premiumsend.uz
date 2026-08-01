import type { Metadata } from "next";
import Link from "next/link";
import { ogBaseRu } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title:
    "Telegram Premium на 3 месяца через Humo — 175 000 сум, пошагово",
  description:
    "3-месячный Telegram Premium картой Humo за 175 000 сум — @PremiumSendBot, оплата в сумах, без комиссии, активация за 5 минут. В Telegram Humo не работает — здесь работает.",
  keywords: [
    "Telegram Premium на 3 месяца Humo",
    "Telegram Premium через Humo 3 месяца",
    "купить Telegram Premium Humo",
    "3 месяца Premium Humo",
    "Telegram Premium 175000 Humo",
    "Telegram Premium в сумах Humo",
    "PremiumSendBot Humo",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/ru/maqolalar/3-oylik-telegram-premium-humo-orqali",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/3-oylik-telegram-premium-humo-orqali",
      ru: "https://premiumsend.uz/ru/maqolalar/3-oylik-telegram-premium-humo-orqali",
      "x-default": "https://premiumsend.uz/maqolalar/3-oylik-telegram-premium-humo-orqali",
    },
  },
  openGraph: {
    ...ogBaseRu,
    locale: "ru_RU",
    title: "Telegram Premium на 3 месяца через Humo — 175 000 сум",
    description:
      "3-месячный Telegram Premium картой Humo в сумах. @PremiumSendBot — 175 000 сум, активация за 5 минут.",
    url: "https://premiumsend.uz/ru/maqolalar/3-oylik-telegram-premium-humo-orqali",
    type: "article",
    publishedTime: "2026-05-03",
  },
};

export default function Article3MonthHumoRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    image: "https://premiumsend.uz/og-image.png",
    headline:
      "Telegram Premium на 3 месяца через карту Humo — за 175 000 сум",
    description:
      "Покупка 3-месячного Telegram Premium через Humo — @PremiumSendBot за 175 000 сум. Оплата в сумах, активация за 5 минут, без комиссии.",
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
      "https://premiumsend.uz/ru/maqolalar/3-oylik-telegram-premium-humo-orqali",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько стоит Telegram Premium на 3 месяца через Humo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "В Premium Send 3-месячный Telegram Premium через Humo стоит 175 000 сум — это 58 333 сум в месяц. Цена одинаковая при оплате через Uzcard, Click и Payme. Без скрытой комиссии, без курсового риска.",
        },
      },
      {
        "@type": "Question",
        name: "Через сколько активируется 3-месячный Premium после оплаты Humo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Обычно через 2-5 минут после подтверждения оплаты Premium активируется автоматически. При технической задержке может занять 10-15 минут. Бот пришлёт уведомление, дополнительные действия не требуются.",
        },
      },
      {
        "@type": "Question",
        name: "Есть ли дополнительная комиссия при оплате картой Humo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет. В @PremiumSendBot при оплате Humo нет скрытых комиссий. Вы платите 175 000 сум — это итоговая сумма. Со стороны банка обычно P2P-перевод тоже бесплатный.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли оплатить 3 месяца через Humo в официальном приложении Telegram?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет, по двум причинам. Первая: официальное приложение Telegram вообще не принимает Humo и Uzcard — только Visa, Mastercard, Google Pay, Apple Pay. Вторая: в официальном приложении нет 3-месячного тарифа — есть только 1 и 12 месяцев.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли подарить 3-месячный Premium через Humo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. 3-месячный Premium можно подарить картой Humo. Бот спросит username — введёте @username получателя, оплатите, Premium активируется на этом аккаунте. По правилам Telegram 1-месячный подарок невозможен, поэтому 3-месячный — самый недорогой вариант для подарка.",
        },
      },
      {
        "@type": "Question",
        name: "Безопасна ли оплата через Humo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Оплату вы проводите внутри своего приложения Humo, Click или Payme — номер карты, пароль, SMS-код или CVV боту не передаются. Банк выдаёт чек на каждый перевод. Если Premium не придёт, оплаченная сумма возвращается полностью.",
        },
      },
      {
        "@type": "Question",
        name: "Есть ли разница, если оплачу Humo вместо Uzcard?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Для покупки Premium разницы нет — цена одинаковая 175 000 сум, процесс одинаковый, время активации одинаковое 5 минут. Используйте ту карту, которая у вас есть. Большинство банков Узбекистана выпускают и Humo, и Uzcard.",
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
        name: "Telegram Premium на 3 месяца через Humo",
        item: "https://premiumsend.uz/ru/maqolalar/3-oylik-telegram-premium-humo-orqali",
      },
    ],
  };

  const howToSchema = {"@context":"https://schema.org","@type":"HowTo","name":"Telegram Premium на 3 месяца через карту Humo — за 175 000 сум","description":"Пошаговое руководство: Telegram Premium на 3 месяца через карту Humo — за 175 000 сум","step":[{"@type":"HowToStep","position":1,"name":"Откройте @PremiumSendBot в Telegram","text":"Введите @PremiumSendBot в поиске Telegram. Откройте официального бота с галочкой проверки. Нажмите /start — бот покажет меню."},{"@type":"HowToStep","position":2,"name":"Выберите тариф на 3 месяца","text":"Бот покажет 4 тарифа: 1, 3, 6, 12 месяцев. Нажмите \"3 месяца\". Цена сразу видна: 175 000 сум. Можно вернуться и поменять."},{"@type":"HowToStep","position":3,"name":"Введите username аккаунта для Premium","text":"После @ напишите Telegram username. Это ваш аккаунт или того, кому дарите. Если username неверный — Premium активируется на чужом аккаунте. Проверьте дважды."},{"@type":"HowToStep","position":4,"name":"Выберите способ оплаты — \"Humo\"","text":"На экране 4 варианта: Uzcard, Humo, Click, Payme. Нажмите \"Humo\". Бот предложит способ: P2P-перевод или через Click/Payme (если карта Humo привязана)."},{"@type":"HowToStep","position":5,"name":"Оплатите 175 000 сум картой Humo","text":"Самый быстрый путь — через приложение Click или Payme (если карта привязана — в один клик). Или прямой P2P-перевод Humo. Комиссия 0%."},{"@type":"HowToStep","position":6,"name":"Premium активируется за 5 минут","text":"После подтверждения оплаты Premium включается в аккаунте автоматически. В профиле появляется значок Premium. Бот пришлёт уведомление. Дополнительно ничего нажимать не нужно."}]};

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
          Telegram Premium на 3 месяца через Humo
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
            Telegram Premium на 3 месяца через карту Humo
          </h1>

          {/* TL;DR */}
          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>Кратко:</strong> 3-месячный Telegram Premium картой Humo покупается через{" "}
              <Link href="https://telegram.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>. Цена — <strong>175 000 сум</strong> (58 333 сум в месяц), оплата в сумах, без комиссии. Активация — <strong>5 минут</strong>. Официальное приложение Telegram не принимает Humo, и тарифа на 3 месяца там вообще нет.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            У держателей Humo два барьера: официальное приложение Telegram не принимает Humo, и тариф на 3 месяца стоит между 1 и 12 — а в официальном приложении 3-месячного варианта вообще нет. В итоге, чтобы взять Premium именно на 3 месяца, держателю Humo нужен местный сервис-посредник.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            В этой статье — точная цена 3-месячного Premium через Humo, пошаговый процесс, безопасность и решение типичных проблем. К концу — за 5 минут активируете Premium.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Почему именно 3 месяца через Humo — два ограничения, одно решение
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Покупка 3-месячного Premium через Humo упирается в два ограничения: <strong>ограничение карты</strong> и <strong>ограничение тарифа</strong>. Оба решаются одновременно через местный сервис-посредник.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Ограничение карты:</strong> официальное приложение Telegram работает в международных платёжных системах — Visa, Mastercard, Google Pay, Apple Pay. Локальные системы вроде Humo и Uzcard в этой интеграции отсутствуют. Введёте Humo в Telegram — оплата будет отклонена.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Ограничение тарифа:</strong> в официальном приложении Telegram доступны только тарифы на 1 и 12 месяцев. Пакеты на 3 и 6 месяцев — как видно в <Link href="/ru/maqolalar/telegram-premium-narxlari" className="text-primary font-semibold hover:underline">статье о ценах</Link> — в официальной системе отсутствуют. Их можно взять через Fragment или местного реселлера.
            </p>
            <div className="bg-section-alt rounded-xl p-5 mb-4">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Решение:</strong> @PremiumSendBot — принимает оплату Humo, доставляет 3-месячный пакет, которого нет в официальной системе Telegram. Два ограничения — один шаг.
              </p>
            </div>
            <p className="text-muted leading-relaxed">
              Именно поэтому комбинация &quot;3 месяца + Humo&quot; имеет особую ценность: для держателей Humo это единственный практический вариант среднего срока. Дольше месяца, но без обязательства на год.
            </p>
          </section>

          {/* Section 2 — Pricing */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              3-месячный Premium через Humo — структура цены
            </h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Цена:</strong> 3-месячный Telegram Premium через Humo — <strong>175 000 сум</strong> (58 333 сум в месяц). Оплата в сумах, без курсового риска. Humo, Uzcard, Click и Payme — сумма одинаковая при любом способе.
              </p>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              Цена выглядит просто: 175 000 сум. Если брать 1-месячный по отдельности — выйдет 59 000 × 3 = 177 000 сум. В 3-месячном — 175 000 сум: минимальная, но заметная экономия. Главный выигрыш не в деньгах — во времени. Платите один раз, 3 месяца ничто не напоминает о продлении.
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
              Из таблицы видно: 3-месячный — в зоне &quot;проба-бюджет&quot;. Чуть дешевле помесячной в пересчёте, без большого разового платежа за 6 месяцев. Сбалансированный выбор для сезонного или пробного использования.
            </p>
          </section>

          {/* Section 3 — Step by step */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Как купить 3-месячный Premium через Humo — пошагово
            </h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Краткий ответ:</strong> откройте{" "}
                <Link href="https://telegram.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>{" "}
                → выберите <strong>3 месяца</strong> → введите username → выберите <strong>Humo</strong> → оплатите 175 000 сум → Premium активируется за 5 минут.
              </p>
            </div>

            <p className="text-muted leading-relaxed mb-6">
              Этот процесс понятен даже тем, кто покупает в первый раз. Технических знаний не нужно — на каждом шаге бот подсказывает:
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  step: "1",
                  title: "Откройте @PremiumSendBot в Telegram",
                  desc: "Введите @PremiumSendBot в поиске Telegram. Откройте официального бота с галочкой проверки. Нажмите /start — бот покажет меню.",
                },
                {
                  step: "2",
                  title: "Выберите тариф на 3 месяца",
                  desc: "Бот покажет 4 тарифа: 1, 3, 6, 12 месяцев. Нажмите \"3 месяца\". Цена сразу видна: 175 000 сум. Можно вернуться и поменять.",
                },
                {
                  step: "3",
                  title: "Введите username аккаунта для Premium",
                  desc: "После @ напишите Telegram username. Это ваш аккаунт или того, кому дарите. Если username неверный — Premium активируется на чужом аккаунте. Проверьте дважды.",
                },
                {
                  step: "4",
                  title: "Выберите способ оплаты — \"Humo\"",
                  desc: "На экране 4 варианта: Uzcard, Humo, Click, Payme. Нажмите \"Humo\". Бот предложит способ: P2P-перевод или через Click/Payme (если карта Humo привязана).",
                },
                {
                  step: "5",
                  title: "Оплатите 175 000 сум картой Humo",
                  desc: "Самый быстрый путь — через приложение Click или Payme (если карта привязана — в один клик). Или прямой P2P-перевод Humo. Комиссия 0%.",
                },
                {
                  step: "6",
                  title: "Premium активируется за 5 минут",
                  desc: "После подтверждения оплаты Premium включается в аккаунте автоматически. В профиле появляется значок Premium. Бот пришлёт уведомление. Дополнительно ничего нажимать не нужно.",
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
              Весь процесс — 5-7 минут. Всё происходит внутри Telegram, отдельный сайт или приложение не нужны. В течение 3 месяцев никаких повторных платежей.
            </p>
          </section>

          {/* Mid CTA */}
          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Карта Humo готова?{" "}
                <strong className="text-white">@PremiumSendBot</strong> — оплатите 3-месячный Telegram Premium за 175 000 сум в сумах. Активация за 5 минут.
              </p>
              <Link
                href="https://telegram.me/premiumsendbot"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                Начать с Humo на 3 месяца
              </Link>
            </div>
          </section>

          {/* Section 4 — Humo payment options */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Три способа оплаты через Humo — какой удобнее?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Держатели Humo могут оплатить 175 000 сум тремя способами. Результат одинаковый — Premium придёт за 5 минут. Но удобство отличается:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Способ</div>
                <div className="text-center">Скорость</div>
                <div className="text-center">Удобство</div>
                <div className="text-center">Кому подойдёт</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Click</div>
                <div className="text-center text-green-600">1-2 минуты</div>
                <div className="text-center text-green-600 font-bold">Высокое</div>
                <div className="text-center text-muted">Установлен Click</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Payme</div>
                <div className="text-center text-green-600">1-2 минуты</div>
                <div className="text-center text-green-600 font-bold">Высокое</div>
                <div className="text-center text-muted">Установлен Payme</div>
              </div>
              <div className="grid grid-cols-4 p-4 items-center text-sm">
                <div className="font-medium">Humo P2P</div>
                <div className="text-center">2-3 минуты</div>
                <div className="text-center">Среднее</div>
                <div className="text-center text-muted">Только банковское приложение Humo</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Практический совет:</strong> если на телефоне установлен Click или Payme — оплатите через них. В приложении карта Humo уже зарегистрирована, оплата проходит в несколько кликов. P2P-перевод требует чуть больше шагов: открыть банковское приложение, выбрать карту, ввести номер.
            </p>
            <p className="text-muted leading-relaxed">
              Важное уточнение: Click и Payme — независимые платёжные системы, но в них можно привязать карту Humo. Каким бы способом вы ни платили, деньги списываются именно с вашей карты Humo. На вопрос &quot;оплатить через Humo&quot; все три способа дают ответ.
            </p>
          </section>

          {/* Section 5 — Why 3 months */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Почему 3-месячный тариф — &quot;золотая середина&quot; для держателей Humo?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              В Premium Send 4 тарифа: <Link href="/ru/maqolalar/1-oylik-telegram-premium-uzcard-orqali-sotib-olish" className="text-primary font-semibold hover:underline">1 месяц</Link> (59 000), 3 месяца (175 000), 6 месяцев (235 000), 12 месяцев (425 000). 3-месячный находится посередине — сбалансирован и по бюджету, и по сроку.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: "Преимущество над 1 месяцем",
                  desc: "30 дней пролетают быстро, и снова приходится беспокоиться об оплате. 3 месяца — заплатили один раз, 90 дней спокойствия. Никаких напоминаний.",
                },
                {
                  title: "Преимущество над 6 месяцами",
                  desc: "Выложить 235 000 сум разово — не для всех легко. 3 месяца за 175 000 сум — разовый платёж, но на 60 000 сум меньше. Заметная разница.",
                },
                {
                  title: "Идеально для сезонного использования",
                  desc: "Сессия, рабочий проект, отпуск — 3 месяца как раз подходят к таким коротко-средним периодам.",
                },
                {
                  title: "Подходит и для подарка",
                  desc: "Если дарите — 3 месяца не выглядят мелочно и это заметный срок. 1 месяц кажется маленьким, 12 — лишний расход.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-muted leading-relaxed">
              Ещё важный факт: в официальном приложении Telegram 3-месячного тарифа <strong>нет вообще</strong>. Только 1 и 12 месяцев. Значит, держатель Humo, желающий взять Premium именно на 3 месяца — единственный путь идёт через местный сервис. <Link href="/ru/maqolalar/3-oylik-telegram-premium-sotib-olish" className="text-primary font-semibold hover:underline">Подробнее о 3-месячном пакете</Link> в отдельной статье.
            </p>
          </section>

          {/* Section 6 — Safety */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Безопасна ли оплата через Humo? Точный механизм
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Для того, кто впервые платит 175 000 сум через Humo в интернете, это самый важный вопрос. Механизм действительно простой: <strong>оплату вы проводите внутри своего банковского или платёжного приложения</strong>. Бот не запрашивает и не видит номер вашей карты, пароль, SMS-код или CVV.
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">🔐 Данные карты боту не видны</h3>
                <p className="text-sm text-muted leading-relaxed">
                  P2P-перевод или Click/Payme — в обоих случаях номер карты Humo и пароль остаются только в банковской системе. @PremiumSendBot не имеет доступа к этим данным. Бот видит только факт &quot;оплата получена&quot;.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">💰 Если Premium не пришёл — деньги возвращаются</h3>
                <p className="text-sm text-muted leading-relaxed">
                  При технической ошибке, если Premium не активируется на аккаунте, 175 000 сум возвращаются полностью. Это стандартное правило для любого реселлерского сервиса. На практике такие случаи редки — активация работает по автоматическому механизму.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">📋 Чек — ваш юридический документ</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Humo, Click или Payme выдают чёткий чек на каждый перевод (PDF или в приложении). Это ваш юридический документ. При проблеме поддержка по номеру чека сразу найдёт оплату.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">🛡️ Поддержка на русском и узбекском</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Любой вопрос или проблему пишите в поддержку прямо в боте. Живой ответ приходит на русском или узбекском — переводчик не нужен.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Кратко: оплата 175 000 сум через Humo — настолько же безопасна, как перевод другу. Дополнительного технического риска нет, потому что данные карты вообще не передаются боту. Для держателей Humo это удобно именно из-за этой простоты.
            </p>
          </section>

          {/* Section 7 — Common issues */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Проблемы при оплате 175 000 сум через Humo и их решения
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Большинство оплат проходят без проблем. Но иногда могут возникнуть препятствия со стороны банка или сети. Ниже — самые частые ситуации и точные решения:
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Не хватает лимита на интернет-платежи</h3>
                <p className="text-sm text-muted leading-relaxed">
                  В некоторых банках дневной лимит на интернет-платежи установлен низким (например, 100 000 сум). Для перевода 175 000 сум лимита не хватит. <strong>Решение:</strong> в мобильном приложении Humo временно повысьте лимит на интернет-платежи — обычно до 1 000 000 сум в несколько кликов.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Не приходит SMS-код подтверждения</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Возможна задержка сети или отключена услуга SMS-Informing. <strong>Решение:</strong> переключитесь на подтверждение через push-уведомление (если приложение Humo это поддерживает) или позвоните оператору банка для активации SMS-услуги.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Деньги списались, а Premium не пришёл</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Система иногда обрабатывает чуть дольше. <strong>Решение:</strong> подождите 10-15 минут. Если так и не активировалось — отправьте чек об оплате в поддержку бота. После ручной проверки Premium включат, либо вернут деньги.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Username введён неправильно</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Это самая опасная ошибка. Premium активируется не на вашем, а на чужом аккаунте, и вернуть сложно. <strong>Решение:</strong> на шаге 3 проверьте username дважды и только после этого платите. Если ошиблись — сразу пишите в поддержку: если активация ещё не произошла, можно исправить.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Банк временно блокирует операцию</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Система безопасности иногда блокирует новые или крупные переводы. <strong>Решение:</strong> позвоните оператору банка для подтверждения операции или переключитесь на другой способ оплаты (Click/Payme) — в большинстве случаев проходит сразу.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Большинство проблем решаются сразу. Поддержка бота помогает в любой ситуации и предлагает альтернативный путь.
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
                  q: "Сколько стоит Telegram Premium на 3 месяца через Humo?",
                  a: "175 000 сум — 58 333 сум в месяц. Цена одинаковая через Uzcard, Click и Payme. Без скрытой комиссии, без курсового риска.",
                },
                {
                  q: "Через сколько активируется 3-месячный Premium после Humo?",
                  a: "Обычно через 2-5 минут после подтверждения. При технической задержке до 10-15 минут. Бот пришлёт уведомление, дополнительные действия не нужны.",
                },
                {
                  q: "Есть ли дополнительная комиссия при оплате Humo?",
                  a: "Нет. В @PremiumSendBot при оплате Humo нет скрытых комиссий. Вы платите 175 000 сум — это итоговая сумма.",
                },
                {
                  q: "Можно ли оплатить 3 месяца через Humo в официальном приложении Telegram?",
                  a: "Нет. Во-первых, Telegram не принимает Humo. Во-вторых, в Telegram нет тарифа на 3 месяца — только 1 и 12.",
                },
                {
                  q: "Можно ли подарить 3-месячный Premium через Humo?",
                  a: "Да. Бот спросит username — введёте @username получателя, оплатите, Premium активируется на этом аккаунте. По правилам Telegram 1-месячный подарок невозможен, 3-месячный — самый недорогой вариант для подарка.",
                },
                {
                  q: "Безопасна ли оплата через Humo?",
                  a: "Да. Данные карты боту не передаются — оплату проводите внутри банковского приложения. Если Premium не придёт, оплаченная сумма возвращается полностью.",
                },
                {
                  q: "Есть ли разница, если оплачу Humo вместо Uzcard?",
                  a: "Для покупки Premium разницы нет — цена, процесс и время одинаковые. Используйте ту карту, которая у вас есть.",
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
                3 месяца через Humo — в цифрах
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">175 000</p>
                  <p className="text-sm text-muted">сум, без скрытых комиссий</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">5 мин.</p>
                  <p className="text-sm text-muted">время активации</p>
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
                Другие сроки через Humo
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-4">
                Для держателей Humo доступны все тарифы — выбирайте подходящий по сроку:
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/ru/maqolalar/telegram-premium-humo-orqali" className="text-primary font-semibold hover:underline">
                    Premium через Humo — общее руководство (все тарифы)
                  </Link>
                </li>
                <li>
                  <Link href="/ru/maqolalar/3-oylik-telegram-premium-uzcard-orqali" className="text-primary font-semibold hover:underline">
                    3-месячный Premium через Uzcard (для сравнения)
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
                  Для держателей Humo 3-месячный Telegram Premium — теперь доступен. 175 000 сум, оплата в сумах, активация за 5 минут, 90 дней спокойного использования.{" "}
                  <strong className="text-white">@PremiumSendBot</strong> — начните в несколько кликов.
                </p>
                <Link
                  href="https://telegram.me/premiumsendbot"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  Начать с Humo на 3 месяца
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
