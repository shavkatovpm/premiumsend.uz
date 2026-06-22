import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Цена Telegram Premium на 3 месяца 2026 — 175 000 сум",
  description:
    "Сколько стоит Telegram Premium на 3 месяца в Узбекистане — 175 000 сум (58 333 в месяц). Выгодно ли, сравнение с 1 и 6 месяцами. Оплата в сумах через @PremiumSendBot.",
  keywords: [
    "цена telegram premium на 3 месяца",
    "сколько стоит телеграм премиум на 3 месяца",
    "telegram premium 3 месяца цена",
    "тг премиум на 3 месяца",
    "телеграм премиум 3 месяца в узбекистане",
    "PremiumSendBot",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/ru/maqolalar/3-oylik-telegram-premium-narxi",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/3-oylik-telegram-premium-narxi",
      ru: "https://premiumsend.uz/ru/maqolalar/3-oylik-telegram-premium-narxi",
      "x-default":
        "https://premiumsend.uz/maqolalar/3-oylik-telegram-premium-narxi",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title: "Цена Telegram Premium на 3 месяца 2026 — 175 000 сум",
    description:
      "Сколько стоит Telegram Premium на 3 месяца в Узбекистане — 175 000 сум (58 333 в месяц). Выгодно ли и сравнение с 1 и 6 месяцами.",
    url: "https://premiumsend.uz/ru/maqolalar/3-oylik-telegram-premium-narxi",
    type: "article",
    publishedTime: "2026-06-22",
  },
};

export default function Article3MesyatsaTsenaRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    image: "https://premiumsend.uz/og-image.png",
    headline: "Цена Telegram Premium на 3 месяца 2026 — 175 000 сум",
    description:
      "Сколько стоит Telegram Premium на 3 месяца в Узбекистане: 175 000 сум (58 333 в месяц). Разбор цены, сравнение с 1 и 6 месяцами и кому подходит.",
    datePublished: "2026-06-22",
    dateModified: "2026-06-22",
    inLanguage: "ru",
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
      "https://premiumsend.uz/ru/maqolalar/3-oylik-telegram-premium-narxi",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "ru",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько стоит Telegram Premium на 3 месяца?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Цена Telegram Premium на 3 месяца в Premium Send — 175 000 сум, то есть 58 333 сум в месяц. Оплата в сумах через Uzcard, Humo, Click или Payme. Это полная подписка Premium на 90 дней.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько это выходит в месяц?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "175 000 сум делим на 3 месяца — получается 58 333 сум в месяц. Это почти столько же, сколько тариф на 1 месяц (59 000), всего на 1% дешевле. Выгода 3 месяцев не в цене, а в удобстве и возможности подарка.",
        },
      },
      {
        "@type": "Question",
        name: "3 месяца выгоднее, чем 1 месяц?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Незначительно. 1 месяц трижды — 177 000 сум, пакет на 3 месяца — 175 000 сум, разница всего 2 000 сум. Главное преимущество 3 месяцев: не нужно платить каждый месяц и можно подарить.",
        },
      },
      {
        "@type": "Question",
        name: "Цена зависит от курса доллара?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет. Premium Send держит фиксированную цену 175 000 сум. В официальном приложении Telegram цена в долларах и есть потери на конвертации, а здесь — чисто в сумах, без курсового риска.",
        },
      },
      {
        "@type": "Question",
        name: "Есть ли тариф на 3 месяца в самом Telegram?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет. В официальном приложении Telegram есть только 1 месяц и 12 месяцев — тарифов на 3 и 6 месяцев нет. 3 месяца доступны только через реселлеров вроде Premium Send.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько стоит подарить Premium на 3 месяца?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Цена подарка такая же, как при покупке — 175 000 сум. По правилам Telegram подарок возможен только на 3, 6 и 12 месяцев (1 месяц подарить нельзя), поэтому 3 месяца — самый бюджетный вариант подарка.",
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
      { "@type": "ListItem", position: 3, name: "Цена на 3 месяца", item: "https://premiumsend.uz/ru/maqolalar/3-oylik-telegram-premium-narxi" },
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
        <span className="text-foreground font-medium">Цена на 3 месяца</span>
      </nav>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-100 text-green-700">
              Цены
            </span>
            <time className="text-xs text-muted" dateTime="2026-06-22">
              22 июня 2026
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Цена Telegram Premium на 3 месяца 2026 — 175 000 сум
          </h1>

          {/* TL;DR */}
          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>Краткий ответ:</strong> цена Telegram Premium на 3 месяца в{" "}
              <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>{" "}
              — <strong>175 000 сум</strong>, то есть <strong>58 333 сум в месяц</strong>. Оплата в сумах: Uzcard, Humo, Click или Payme. Полный Premium на 90 дней. Цена почти как у месячного тарифа, но платить каждый месяц не нужно и можно подарить.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            &quot;Сколько стоит Telegram Premium на 3 месяца?&quot; — один из самых частых вопросов. Ответ короткий: 175 000 сум. Но за этой цифрой есть нюансы — сколько выходит в месяц, выгоднее ли это месячного тарифа и когда вообще стоит брать именно 3 месяца. Разберём всё на конкретных числах.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Сколько стоит Telegram Premium на 3 месяца?
            </h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Цена Telegram Premium на 3 месяца — 175 000 сум.</strong> Это полная подписка на 90 дней, что в месячном пересчёте составляет 58 333 сум. Цена фиксированная в сумах — без конвертации доллара и скрытых комиссий.
              </p>
            </div>
            <p className="text-muted leading-relaxed mb-4">
              Тариф на 3 месяца — это промежуточный вариант. 1 месяц (59 000) слишком короткий, а 6 или 12 месяцев — долгое обязательство. 3 месяца для многих чуть длиннее, чем &quot;попробовать&quot;, но без привязки к годовой подписке. 90 дней вы пользуетесь всеми функциями Premium: файлы 4 ГБ, каналы без рекламы, премиум-стикеры и другое.
            </p>
            <p className="text-muted leading-relaxed">
              Полный список цен и сравнение всех тарифов смотрите в статье{" "}
              <Link href="/ru/maqolalar/telegram-premium-narxlari" className="text-primary font-semibold hover:underline">Цены на Telegram Premium</Link>.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              175 000 сум — сколько это в месяц?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Проще всего понять цену, разделив её на месяцы. 175 000 сум за 3 месяца — это 58 333 сум в месяц. Сравним 3 месяца с другими тарифами по месячной цене:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Тариф</div>
                <div className="text-center">Общая цена</div>
                <div className="text-center">В месяц</div>
                <div className="text-center">Срок</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">1 месяц</div>
                <div className="text-center">59 000</div>
                <div className="text-center">59 000</div>
                <div className="text-center">30 дней</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm bg-primary-light/20">
                <div className="font-bold text-primary">3 месяца ⭐</div>
                <div className="text-center font-bold text-primary">175 000</div>
                <div className="text-center font-bold text-primary">58 333</div>
                <div className="text-center">90 дней</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">6 месяцев</div>
                <div className="text-center">235 000</div>
                <div className="text-center text-green-600">39 167</div>
                <div className="text-center">180 дней</div>
              </div>
              <div className="grid grid-cols-4 p-4 items-center text-sm">
                <div className="font-medium">12 месяцев</div>
                <div className="text-center">425 000</div>
                <div className="text-center text-green-600">35 417</div>
                <div className="text-center">365 дней</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Из таблицы видно: месячная цена 3 месяцев (58 333) почти равна месячному тарифу. Причина проста — скидка на 3 месяца минимальная. Настоящая экономия начинается на 6 и 12 месяцах, где месячная цена падает до 39 167 и 35 417 сум.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              3 месяца выгоднее, чем 1 месяц?
            </h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Короткий ответ: почти нет.</strong> 1 месяц трижды — 177 000 сум, пакет на 3 месяца — 175 000 сум, разница всего 2 000 сум (1%). Преимущество 3 месяцев не в цене, а в удобстве: не забудете про оплату и сможете подарить.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Схема (на 3 месяца)</div>
                <div className="text-center">Итого</div>
                <div className="text-center">Результат</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">1 месяц × 3 раза</div>
                <div className="text-center">177 000 сум</div>
                <div className="text-center text-orange-500 font-bold">+2 000 (дороже)</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center text-sm bg-primary-light/20">
                <div className="font-bold text-primary">3 месяца × 1 раз ⭐</div>
                <div className="text-center font-bold text-primary">175 000 сум</div>
                <div className="text-center text-green-600 font-bold">Дешевле + удобнее</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              Значит, 3 месяца берут не ради экономии. Главные плюсы:
            </p>
            <ul className="space-y-2 text-muted leading-relaxed mb-4">
              <li>✅ <strong className="text-foreground">Одна оплата</strong> — 3 месяца не нужно платить заново и помнить о сроке.</li>
              <li>✅ <strong className="text-foreground">Можно подарить</strong> — 1 месяц подарить в Telegram нельзя, а 3 месяца — самый бюджетный вариант подарка.</li>
              <li>✅ <strong className="text-foreground">Идеально для сезона</strong> — проект или период экзаменов на один квартал (3 месяца).</li>
            </ul>
            <p className="text-muted leading-relaxed">
              Если ваша цель — максимальная экономия, логичнее{" "}
              <Link href="/ru/6-oylik" className="text-primary font-semibold hover:underline">6 месяцев (235 000)</Link>{" "}
              или{" "}
              <Link href="/ru/12-oylik" className="text-primary font-semibold hover:underline">12 месяцев (425 000)</Link>{" "}
              — там месячная цена заметно ниже.
            </p>
          </section>

          {/* Mid CTA */}
          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Выбрали тариф на 3 месяца?{" "}
                <strong className="text-white">@PremiumSendBot</strong> — оплатите 175 000 сум через Uzcard, Humo, Click или Payme, и Premium на 90 дней активируется за 5 минут.
              </p>
              <Link
                href="https://t.me/premiumsendbot"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                Купить Premium на 3 месяца
              </Link>
            </div>
          </section>

          {/* Section 4 — Payment */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Как оплатить Premium на 3 месяца?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              175 000 сум можно оплатить четырьмя местными способами — все в сумах, без дополнительной комиссии:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">💳 Uzcard</h3>
                <p className="text-sm text-muted">P2P-перевод. Бот присылает номер карты и сумму.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">💳 Humo</h3>
                <p className="text-sm text-muted">Альтернатива Uzcard, процесс такой же.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">📱 Click</h3>
                <p className="text-sm text-muted">Самый быстрый — 30 секунд, если карта привязана.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">📱 Payme</h3>
                <p className="text-sm text-muted">Через приложение Payme с PIN/Face ID.</p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Пошаговые инструкции по каждому способу:{" "}
              <Link href="/ru/maqolalar/3-oylik-telegram-premium-uzcard-orqali" className="text-primary font-semibold hover:underline">Uzcard</Link>,{" "}
              <Link href="/ru/maqolalar/3-oylik-telegram-premium-humo-orqali" className="text-primary font-semibold hover:underline">Humo</Link>,{" "}
              <Link href="/ru/maqolalar/3-oylik-telegram-premium-click-orqali" className="text-primary font-semibold hover:underline">Click</Link>,{" "}
              <Link href="/ru/maqolalar/3-oylik-telegram-premium-payme-orqali" className="text-primary font-semibold hover:underline">Payme</Link>. Общий процесс — в{" "}
              <Link href="/ru/maqolalar/3-oylik-telegram-premium-sotib-olish" className="text-primary font-semibold hover:underline">инструкции покупки на 3 месяца</Link>.
            </p>
          </section>

          {/* Section 5 — Who is it for */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Кому подходит тариф на 3 месяца?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Поскольку по цене 3 месяца почти равны месячному, выбор зависит от потребности. Вот когда 3 месяца — то, что нужно:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-section-alt rounded-xl p-5">
                <p className="font-bold text-foreground mb-2">✅ 3 месяца подходят, если:</p>
                <ul className="text-sm text-muted space-y-1">
                  <li>• Не хотите забывать про оплату каждый месяц</li>
                  <li>• Хотите сделать самый бюджетный подарок</li>
                  <li>• Premium нужен на квартал (проект, экзамены)</li>
                  <li>• Пока не готовы к годовой подписке</li>
                </ul>
              </div>
              <div className="bg-section-alt rounded-xl p-5">
                <p className="font-bold text-foreground mb-2">⚠️ Другой тариф лучше, если:</p>
                <ul className="text-sm text-muted space-y-1">
                  <li>• Хотите просто попробовать → 1 месяц (59 000)</li>
                  <li>• Нужна максимальная экономия → 12 месяцев (35 417/мес)</li>
                  <li>• Вы постоянный пользователь → 6 или 12 месяцев</li>
                </ul>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Чтобы понять, какой тариф подходит именно вам, посмотрите{" "}
              <Link href="/ru/maqolalar/telegram-premium-narxlari" className="text-primary font-semibold hover:underline">полное сравнение тарифов и тест выбора за 30 секунд</Link>.
            </p>
          </section>

          {/* Section 6 — Gift */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Сколько стоит подарить Premium на 3 месяца?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Цена подарка Premium на 3 месяца такая же, как при покупке — <strong className="text-foreground">175 000 сум</strong>. По правилам Telegram подарок (gift) возможен только на 3, 6 и 12 месяцев; 1 месяц подарить нельзя. Поэтому 3 месяца — самый бюджетный вариант подарка.
            </p>
            <p className="text-muted leading-relaxed">
              Чтобы подарить, в @PremiumSendBot вы вводите username получателя и оплачиваете — Premium активируется на его аккаунте. Подробнее:{" "}
              <Link href="/ru/maqolalar/3-oylik-telegram-premium-sovga-qilish" className="text-primary font-semibold hover:underline">подарить Telegram Premium на 3 месяца</Link>.
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
                  q: "Сколько стоит Telegram Premium на 3 месяца?",
                  a: "Цена в Premium Send — 175 000 сум, то есть 58 333 сум в месяц. Оплата в сумах через Uzcard, Humo, Click или Payme. Полная подписка Premium на 90 дней.",
                },
                {
                  q: "Сколько это выходит в месяц?",
                  a: "175 000 сум делим на 3 — получается 58 333 сум в месяц. Это почти как месячный тариф (59 000), всего на 1% дешевле. Выгода 3 месяцев не в цене, а в удобстве и подарке.",
                },
                {
                  q: "3 месяца выгоднее, чем 1 месяц?",
                  a: "Незначительно. 1 месяц трижды — 177 000 сум, пакет на 3 месяца — 175 000 сум, разница всего 2 000 сум. Главное преимущество: не нужно платить каждый месяц и можно подарить.",
                },
                {
                  q: "Цена зависит от курса доллара?",
                  a: "Нет. Premium Send держит фиксированную цену 175 000 сум. В официальном Telegram цена в долларах с потерями на конвертации, а здесь — чисто в сумах, без курсового риска.",
                },
                {
                  q: "Есть ли тариф на 3 месяца в самом Telegram?",
                  a: "Нет. В официальном приложении есть только 1 и 12 месяцев. Тарифы на 3 и 6 месяцев доступны только через реселлеров вроде Premium Send.",
                },
                {
                  q: "Сколько стоит подарить Premium на 3 месяца?",
                  a: "Цена подарка такая же — 175 000 сум. Подарок возможен только на 3, 6 и 12 месяцев (1 месяц нельзя), поэтому 3 месяца — самый бюджетный вариант подарка.",
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
                  Telegram Premium на 3 месяца — <strong className="text-white">175 000 сум</strong> (58 333 в месяц). Выигрыш не в цене, а в удобстве: одна оплата, 90 дней Premium без забот и, при желании, подарок.{" "}
                  <strong className="text-white">@PremiumSendBot</strong> — оплата в сумах через Uzcard, Humo, Click или Payme, активация за 5 минут.
                </p>
                <Link
                  href="https://t.me/premiumsendbot"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  Купить Premium на 3 месяца
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
