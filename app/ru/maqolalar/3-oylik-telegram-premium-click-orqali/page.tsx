import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Telegram Premium на 3 месяца через Click — 175 000 сум, перевод на карту",
  description:
    "3-месячный Telegram Premium через Click за 175 000 сум — @PremiumSendBot показывает карту и сумму, вы переводите через Click, Premium за 5 минут. В Telegram нет 3-месячного тарифа.",
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
      "3-месячный Telegram Premium через Click за 175 000 сум. Бот показывает карту и сумму, переводите через Click.",
    url: "https://premiumsend.uz/ru/maqolalar/3-oylik-telegram-premium-click-orqali",
    type: "article",
    publishedTime: "2026-05-05",
  },
};

export default function Article3MonthClickRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Telegram Premium на 3 месяца через Click — за 175 000 сум",
    description:
      "Покупка 3-месячного Telegram Premium через Click — бот выдаёт карту и сумму, вы переводите, система автоматически определяет.",
    datePublished: "2026-05-05",
    dateModified: "2026-05-05",
    author: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    publisher: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    mainEntityOfPage:
      "https://premiumsend.uz/ru/maqolalar/3-oylik-telegram-premium-click-orqali",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Сколько стоит Telegram Premium на 3 месяца через Click?", acceptedAnswer: { "@type": "Answer", text: "В Premium Send 3-месячный Telegram Premium через Click — 175 000 сум, или 58 333 сум в месяц. Цена одинаковая через Uzcard, Humo и Payme. Бот показывает точную сумму и номер карты для P2P-перевода через Click. Комиссия 0%." } },
      { "@type": "Question", name: "Как купить 3-месячный Premium через Click?", acceptedAnswer: { "@type": "Answer", text: "В @PremiumSendBot выбираете 3-месячный тариф, вводите @username получателя. Бот показывает номер карты и точную сумму 175 000 сум. Через Click функцией 'Перевод на другую карту' переводите ровно 175 000 сум на эту карту. Система за 1-5 минут определяет платёж и Premium активируется." } },
      { "@type": "Question", name: "Почему важно перевести именно 175 000 сум?", acceptedAnswer: { "@type": "Answer", text: "Система определяет платёж по комбинации карты и суммы. Если вы переведёте другую сумму, система не сможет автоматически сопоставить и Premium активируется вручную после обращения в поддержку. Сумма, указанная ботом — ровно 175 000." } },
      { "@type": "Question", name: "Можно ли оплатить 3 месяца через Click в официальном приложении Telegram?", acceptedAnswer: { "@type": "Answer", text: "Нет. Во-первых, Telegram не принимает Click — только Visa, Mastercard, Google Pay, Apple Pay. Во-вторых, в Telegram нет 3-месячного тарифа — только 1 и 12 месяцев." } },
      { "@type": "Question", name: "Можно ли подарить 3-месячный Premium через Click?", acceptedAnswer: { "@type": "Answer", text: "Да. Когда бот спрашивает username, указываете не свой, а получателя подарка, остальной процесс не меняется: через Click переводите 175 000 сум на карту, Premium активируется на этом аккаунте." } },
      { "@type": "Question", name: "Безопасна ли оплата через Click?", acceptedAnswer: { "@type": "Answer", text: "Да. Click — официальная платёжная система, лицензированная Центральным банком. Данные карты сохраняются только на сервере Click, бот их не видит. На каждый P2P-перевод выдаётся PDF-чек." } },
      { "@type": "Question", name: "Что делать, если нет приложения Click?", acceptedAnswer: { "@type": "Answer", text: "На указанную ботом карту 175 000 сум можно перевести через любое другое приложение: Payme, приложение Uzcard, Humo или приложение банка. Результат тот же." } },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: "https://premiumsend.uz/ru" },
      { "@type": "ListItem", position: 2, name: "Статьи", item: "https://premiumsend.uz/ru/maqolalar" },
      { "@type": "ListItem", position: 3, name: "Telegram Premium на 3 месяца через Click", item: "https://premiumsend.uz/ru/maqolalar/3-oylik-telegram-premium-click-orqali" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-muted">
        <Link href="/ru" className="hover:text-primary">Главная</Link>
        <span className="mx-2">/</span>
        <Link href="/ru/maqolalar" className="hover:text-primary">Статьи</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">Telegram Premium на 3 месяца через Click</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">Руководство</span>
            <time className="text-xs text-muted" dateTime="2026-05-05">5 мая 2026</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Telegram Premium на 3 месяца через Click
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>Краткий ответ:</strong> процесс покупки 3-месячного Telegram Premium через Click — в{" "}
              <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>{" "}
              выбираете 3-месячный тариф, бот показывает <strong>номер карты и точную сумму 175 000 сум</strong>, вы через Click переводите ровно эту сумму на эту карту. Система автоматически определяет и активирует Premium за 5 минут. В месяц 58 333 сум, без комиссии.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Для пользователей Click 3-месячный Premium — удобная комбинация: Click — самое распространённое локальное платёжное приложение, 3-месячный тариф — баланс между сроком и бюджетом. Бот выдаёт карту и сумму, вы делаете обычный P2P-перевод через Click.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Как работают бот и Click — механизм оплаты</h2>
            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">1. Бот показывает карту и сумму 175 000 сум</h3>
                <p className="text-sm text-muted leading-relaxed">
                  После выбора 3-месячного тарифа и ввода username бот выводит на экран <strong>номер карты</strong> и <strong>точную сумму 175 000 сум</strong>.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">2. Через Click переводите на карту</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Откройте Click, выберите &quot;Перевод на другую карту&quot;. Введите номер карты бота и ровно 175 000 сум. Подтвердите PIN или Face ID — обычный P2P-перевод.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">3. Система автоматически определяет</h3>
                <p className="text-sm text-muted leading-relaxed">
                  После подтверждения Click система за 1-5 минут определяет поступление и Premium активируется на @username.
                </p>
              </div>
            </div>
            <div className="bg-section-alt rounded-xl p-5">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Главный факт:</strong> Click — это инструмент перевода на карту. Бот получает оплату через автоматическое определение поступления на карту. В самом приложении Click нет кнопки &quot;PremiumSend&quot; — вы используете обычный P2P-перевод.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">3-месячный Premium через Click — структура цены</h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Цена:</strong> 3-месячный Telegram Premium через Click — <strong>175 000 сум</strong> (58 333 сум/месяц). Сумма, указанная ботом — точно эта, никаких дополнительных комиссий. Click P2P-перевод тоже без комиссии.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Тариф</div>
                <div className="text-center">Общая цена</div>
                <div className="text-center">В месяц</div>
                <div className="text-center">К 3 мес.</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">1 месяц × 3</div>
                <div className="text-center">177 000 сум</div>
                <div className="text-center">59 000 сум</div>
                <div className="text-center text-muted">+1.1% дороже</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm bg-primary-light/20">
                <div className="font-bold text-primary">3 месяца ⭐</div>
                <div className="text-center font-bold text-primary">175 000 сум</div>
                <div className="text-center font-bold text-primary">58 333 сум</div>
                <div className="text-center text-green-600 font-bold">Базовая</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">6 месяцев</div>
                <div className="text-center">235 000 сум</div>
                <div className="text-center">39 167 сум</div>
                <div className="text-center text-muted">2x срок</div>
              </div>
              <div className="grid grid-cols-4 p-4 items-center text-sm">
                <div className="font-medium">12 месяцев</div>
                <div className="text-center">425 000 сум</div>
                <div className="text-center">35 417 сум</div>
                <div className="text-center text-muted">4x срок</div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Как купить 3-месячный Premium через Click — пошагово</h2>
            <div className="space-y-4 mb-6">
              {[
                { step: "1", title: "Откройте @PremiumSendBot в Telegram", desc: "Введите @PremiumSendBot в поиске Telegram. Откройте бот. Нажмите /start." },
                { step: "2", title: "Выберите 3-месячный тариф", desc: "Бот покажет 4 тарифа. Нажмите «3 месяца» — цена 175 000 сум." },
                { step: "3", title: "Введите username получателя Premium", desc: "Через @ напишите Telegram username. Проверьте дважды." },
                { step: "4", title: "Бот покажет номер карты и сумму", desc: "На экране номер карты и точная сумма 175 000 сум." },
                { step: "5", title: "Откройте Click и начните P2P-перевод", desc: "В Click выберите «Перевод на другую карту». Введите номер карты бота." },
                { step: "6", title: "Введите ровно 175 000 сум и подтвердите", desc: "Сумму вводите ровно 175 000 сум. Подтвердите PIN или Face ID." },
                { step: "7", title: "Premium активируется за 5 минут", desc: "После подтверждения Click система за 1-5 минут определит сумму, и Premium активируется на аккаунте." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{item.step}</div>
                  <div>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Приложение Click готово?{" "}
                <strong className="text-white">@PremiumSendBot</strong> — выберите 3-месячный тариф, получите номер карты и сумму 175 000 сум, переведите через Click.
              </p>
              <Link href="https://t.me/premiumsendbot" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                Начать с Click — 3 месяца
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Почему важно перевести именно 175 000 сум?</h2>
            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li>Бот для 3-месячного тарифа показывает точную сумму <strong>175 000 сум</strong></li>
              <li>Система отслеживает поступления на карту</li>
              <li>Когда платёж приходит ровно с этой суммой — система сопоставляет</li>
              <li>Premium активируется на @username</li>
            </ul>
            <p className="text-muted leading-relaxed">
              Если переведёте другую сумму, обращаетесь в поддержку бота с номером чека Click — Premium активируется вручную (15-30 минут). Но <strong>ровно 175 000</strong> — самый быстрый путь.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Click vs другие приложения для 3 месяцев</h2>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Приложение</div>
                <div className="text-center">Время</div>
                <div className="text-center">Ввод карты</div>
                <div className="text-center">Подтверждение</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm bg-primary-light/20">
                <div className="font-bold text-primary">Click ⭐</div>
                <div className="text-center text-green-600 font-bold">1-2 мин</div>
                <div className="text-center text-green-600">Нет*</div>
                <div className="text-center">PIN/Face ID</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Payme</div>
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
                <div className="font-medium">Приложение банка</div>
                <div className="text-center">2-3 мин</div>
                <div className="text-center">Да</div>
                <div className="text-center">SMS-код</div>
              </div>
            </div>
            <p className="text-muted text-xs italic mb-4">* В Click и Payme ваша карта уже сохранена. Но номер карты получателя в любом случае нужно ввести.</p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Безопасно ли перевести 175 000 сум через Click?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Click — официальная платёжная система, лицензированная Центральным банком. Для Telegram Premium механизм точно такой же — обычный P2P-перевод на указанную карту.
            </p>
            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">🔐 Данные карты только на сервере Click</h3>
                <p className="text-sm text-muted leading-relaxed">Номер, пароль, CVV — только на сервере Click. Бот их не видит.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">💰 Если Premium не пришёл — деньги возвращаются</h3>
                <p className="text-sm text-muted leading-relaxed">При технической ошибке 175 000 сум возвращаются полностью. По номеру чека Click возврат быстрый.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">📋 PDF-чек Click</h3>
                <p className="text-sm text-muted leading-relaxed">Click выдаёт PDF-чек на каждый перевод. При проблеме поддержка по номеру чека сразу находит платёж.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Проблемы при переводе 175 000 сум через Click</h2>
            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Переведена не та сумма</h3>
                <p className="text-sm text-muted leading-relaxed"><strong>Решение:</strong> отправьте в поддержку бота номер чека Click и точную сумму. За 15-30 минут — ручная проверка.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Не хватает баланса в Click</h3>
                <p className="text-sm text-muted leading-relaxed"><strong>Решение:</strong> пополните карту через Click или выберите другую карту.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Деньги переведены, Premium не пришёл</h3>
                <p className="text-sm text-muted leading-relaxed"><strong>Решение:</strong> подождите 10-15 минут. Если не активировалось — отправьте номер чека Click в поддержку бота.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Нет приложения Click</h3>
                <p className="text-sm text-muted leading-relaxed"><strong>Решение:</strong> скачайте Click из Play Market или App Store. Или переведите на указанную карту через Payme, приложение Uzcard или банк.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Часто задаваемые вопросы</h2>
            <div className="space-y-4">
              {[
                { q: "Сколько стоит Telegram Premium на 3 месяца через Click?", a: "175 000 сум — 58 333 сум в месяц. Цена одинаковая через Uzcard, Humo и Payme. Click P2P-перевод тоже без комиссии." },
                { q: "Как купить 3-месячный Premium через Click?", a: "В @PremiumSendBot выберите 3-месячный тариф и введите username. Бот покажет номер карты и сумму 175 000 сум. Через Click переведите ровно 175 000 сум на эту карту. За 5 минут Premium на аккаунте." },
                { q: "Что если перевести другую сумму?", a: "Система не сможет автоматически сопоставить. Обращаетесь в поддержку бота с номером чека Click — Premium активируется вручную за 15-30 минут." },
                { q: "Можно ли оплатить 3 месяца через Click в официальном приложении Telegram?", a: "Нет. Telegram не принимает Click и в Telegram нет 3-месячного тарифа — только 1 и 12 месяцев." },
                { q: "Можно ли подарить 3-месячный Premium через Click?", a: "Да. Бот спрашивает username получателя, вы переводите через Click 175 000 сум на карту, Premium активируется на этом аккаунте." },
                { q: "Безопасно ли платить через Click?", a: "Да. Click — лицензирован Центральным банком. Данные карты только на сервере Click. Если Premium не пришёл — деньги возвращаются." },
                { q: "Что делать, если нет приложения Click?", a: "Скачайте Click из Play Market или App Store. Или переведите на указанную карту через Payme, приложение Uzcard или банк — цена та же 175 000 сум." },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                  <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="bg-section-alt rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-bold text-foreground mb-4 text-center">3 месяца через Click — в цифрах</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">175 000</p>
                  <p className="text-sm text-muted">сум, без дополнительной комиссии</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">1-2 мин</p>
                  <p className="text-sm text-muted">P2P-перевод в Click</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">90 дн</p>
                  <p className="text-sm text-muted">спокойного использования</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-card-border">
              <h3 className="text-lg font-bold text-foreground mb-4">Другие сроки через Click</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/ru/maqolalar/telegram-premium-click-orqali" className="text-primary font-semibold hover:underline">Premium через Click — pillar-руководство</Link></li>
                <li><Link href="/ru/maqolalar/3-oylik-telegram-premium-payme-orqali" className="text-primary font-semibold hover:underline">3 месяца Premium через Payme</Link></li>
                <li><Link href="/ru/maqolalar/3-oylik-telegram-premium-humo-orqali" className="text-primary font-semibold hover:underline">3 месяца Premium через Humo</Link></li>
                <li><Link href="/ru/maqolalar/3-oylik-telegram-premium-sotib-olish" className="text-primary font-semibold hover:underline">3 месяца Premium — общее руководство</Link></li>
              </ul>
            </div>
          </section>

          <section>
            <div className="hero-gradient rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-5 left-5 w-32 h-32 bg-white rounded-full blur-2xl" />
              </div>
              <div className="relative">
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  Приложение Click готово? 3-месячный Telegram Premium через перевод на местную карту. 175 000 сум, обычный P2P-перевод через Click, активация за 5 минут.{" "}
                  <strong className="text-white">@PremiumSendBot</strong> — начать.
                </p>
                <Link href="https://t.me/premiumsendbot" target="_blank" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  Начать с Click — 3 месяца
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
