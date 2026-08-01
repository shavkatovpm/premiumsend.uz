import type { Metadata } from "next";
import Link from "next/link";
import { ogBaseRu } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title:
    "Telegram Premium на 12 месяцев через Humo — 425 000 сум, перевод на карту",
  description:
    "12-месячный Telegram Premium через карту Humo за 425 000 сум — @PremiumSendBot показывает карту и сумму, вы переводите через Humo, Premium активируется на 365 дней за 5 минут. В месяц 35 417 сум — самая низкая цена.",
  keywords: [
    "Telegram Premium на 12 месяцев Humo",
    "Telegram Premium через Humo 12 месяцев",
    "годовой Telegram Premium Humo",
    "купить Telegram Premium Humo 12 месяцев",
    "12 месяцев Premium Humo",
    "Telegram Premium 425000 Humo",
    "Telegram Premium в сумах Humo",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/ru/maqolalar/12-oylik-telegram-premium-humo-orqali",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/12-oylik-telegram-premium-humo-orqali",
      ru: "https://premiumsend.uz/ru/maqolalar/12-oylik-telegram-premium-humo-orqali",
      "x-default": "https://premiumsend.uz/maqolalar/12-oylik-telegram-premium-humo-orqali",
    },
  },
  openGraph: {
    ...ogBaseRu,
    locale: "ru_RU",
    title: "Telegram Premium на 12 месяцев через Humo — 425 000 сум",
    description:
      "12-месячный Telegram Premium через карту Humo за 425 000 сум. Бот показывает карту и сумму, вы переводите через Humo. В месяц 35 417 сум.",
    url: "https://premiumsend.uz/ru/maqolalar/12-oylik-telegram-premium-humo-orqali",
    type: "article",
    publishedTime: "2026-05-14",
  },
};

export default function Article12MonthHumoRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    image: "https://premiumsend.uz/og-image.png",
    headline: "Telegram Premium на 12 месяцев через Humo — за 425 000 сум",
    description:
      "Покупка 12-месячного Telegram Premium через Humo — бот показывает карту и сумму, вы переводите, система автоматически определяет, Premium активируется на 365 дней.",
    datePublished: "2026-05-14",
    dateModified: "2026-05-14",
    author: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    publisher: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    mainEntityOfPage: "https://premiumsend.uz/ru/maqolalar/12-oylik-telegram-premium-humo-orqali",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Сколько стоит Telegram Premium на 12 месяцев через Humo?", acceptedAnswer: { "@type": "Answer", text: "В Premium Send 12-месячный Telegram Premium через Humo — 425 000 сум, или 35 417 сум в месяц. Цена одинаковая через Uzcard, Click и Payme. По сравнению с 12 раз по 1 месяцу (708 000 сум) — на 39% дешевле, экономия 23 583 сум в месяц. Комиссия 0%, курсового риска нет." } },
      { "@type": "Question", name: "Как купить 12-месячный Premium через Humo?", acceptedAnswer: { "@type": "Answer", text: "В @PremiumSendBot выбираете 12-месячный тариф, вводите @username получателя Premium. Бот показывает номер карты и точную сумму 425 000 сум. С вашей карты Humo (через приложение банка, SMS-банк или Click/Payme где привязана карта Humo) переводите ровно 425 000 сум на эту карту. Система за 1-5 минут определяет платёж, Premium активируется на 365 дней." } },
      { "@type": "Question", name: "Почему важно перевести именно 425 000 сум?", acceptedAnswer: { "@type": "Answer", text: "Система определяет платёж по комбинации карты и суммы. При другой сумме автоматическое сопоставление не сработает — Premium активируется вручную после обращения в поддержку с номером чека Humo. Точно 425 000 — самый быстрый путь." } },
      { "@type": "Question", name: "В Telegram есть 12 месяцев, зачем бот через Humo?", acceptedAnswer: { "@type": "Answer", text: "В Telegram 12-месячный тариф есть (в отличие от 3 и 6 месяцев), но оплата только через Google Pay, Apple Pay или зарубежные карты. Telegram вообще не принимает Humo. Значит владелец Humo не может оплатить годовой Premium в официальном приложении — это единственное препятствие. @PremiumSendBot решает именно это: через P2P-перевод с Humo на карту в сумах активирует 12 месяцев Premium." } },
      { "@type": "Question", name: "425 000 сум — большая сумма. Безопасна ли оплата через Humo?", acceptedAnswer: { "@type": "Answer", text: "Да. Humo — лицензирована Центральным банком. Механизм: карта-к-карте P2P-перевод, бот не видит данных карты. Банк выдаёт PDF-чек на каждый перевод. 425 000 сум — большая сумма, но уровень безопасности тот же, что и при 59 000 сум. Если Premium не пришёл, деньги возвращаются полностью." } },
      { "@type": "Question", name: "Что если дневной лимит Humo меньше 425 000 сум?", acceptedAnswer: { "@type": "Answer", text: "В большинстве банков дневной лимит интернет-оплат 200 000-500 000 сум. Владелец Humo может в приложении своего банка временно повысить дневной лимит интернет-оплат до 1 000 000 сум (обычно за 1 минуту). Или через Click/Payme, где привязана карта Humo — там лимит считается иначе." } },
      { "@type": "Question", name: "Можно ли подарить 12-месячный Premium через Humo?", acceptedAnswer: { "@type": "Answer", text: "Да. Когда бот спрашивает username, указываете аккаунт получателя, остальной процесс не меняется: с Humo переводите 425 000 сум на карту, Premium активируется на этом аккаунте на 365 дней. Это самый длительный и ценный подарок Telegram Premium — идеально для дня рождения, свадьбы, Нового года или диплома." } },
      { "@type": "Question", name: "Когда Premium активируется после оплаты?", acceptedAnswer: { "@type": "Answer", text: "P2P-перевод Humo подтверждается банком за 1-3 минуты. Затем система за 1-5 минут определяет сумму, и Premium на указанном @username активируется на 365 дней автоматически. Бот присылает сообщение. Следующий год никакой повторной оплаты или продления не требуется." } },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: "https://premiumsend.uz/ru" },
      { "@type": "ListItem", position: 2, name: "Статьи", item: "https://premiumsend.uz/ru/maqolalar" },
      { "@type": "ListItem", position: 3, name: "Telegram Premium на 12 месяцев через Humo", item: "https://premiumsend.uz/ru/maqolalar/12-oylik-telegram-premium-humo-orqali" },
    ],
  };

  const howToSchema = {"@context":"https://schema.org","@type":"HowTo","name":"Telegram Premium на 12 месяцев через Humo — за 425 000 сум","description":"Пошаговое руководство: Telegram Premium на 12 месяцев через Humo — за 425 000 сум","step":[{"@type":"HowToStep","position":1,"name":"Откройте @PremiumSendBot в Telegram","text":"Введите @PremiumSendBot в поиске. Откройте бот с галочкой верификации. Нажмите /start."},{"@type":"HowToStep","position":2,"name":"Выберите 12-месячный тариф","text":"Бот покажет 4 тарифа: 1, 3, 6, 12 месяцев. Нажмите «12 месяцев» — цена 425 000 сум, в месяц 35 417."},{"@type":"HowToStep","position":3,"name":"Введите username получателя Premium","text":"Через @ напишите Telegram username. 12 месяцев этот аккаунт будет Premium — проверьте username очень внимательно дважды."},{"@type":"HowToStep","position":4,"name":"Проверьте баланс и дневной лимит Humo","text":"425 000 сум — большая сумма. Откройте приложение Humo, убедитесь в достаточном балансе и дневном лимите интернет-оплат. Если лимит низкий — повысьте до 1 000 000 сум в приложении (1 минута)."},{"@type":"HowToStep","position":5,"name":"Бот покажет номер карты и точную сумму","text":"На экране номер карты (8600 XXXX XXXX XXXX) и сумма ровно 425 000 сум. Бот может также дать проверочный код в комментарии."},{"@type":"HowToStep","position":6,"name":"Сделайте P2P-перевод через Humo","text":"С Humo на указанную карту переведите 425 000 сум. Через приложение банка, выпустившего Humo (Asakabank, Hamkorbank, НБУ, Trustbank, Kapitalbank и другие), SMS-банк, или Click/Payme если карта Humo привязана."},{"@type":"HowToStep","position":7,"name":"Подтверждение (PIN/SMS-код)","text":"В зависимости от приложения — PIN, Face ID или SMS-код. На большие суммы банк может запросить дополнительное подтверждение через push — это нормальная мера безопасности."},{"@type":"HowToStep","position":8,"name":"Premium активируется за 5 минут","text":"После подтверждения банком система за 1-5 минут определит сумму, и Premium активируется на 365 дней на указанном аккаунте. Бот пришлёт сообщение. Следующий год никакой повторной оплаты или продления."}]};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-muted">
        <Link href="/ru" className="hover:text-primary">Главная</Link>
        <span className="mx-2">/</span>
        <Link href="/ru/maqolalar" className="hover:text-primary">Статьи</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">Telegram Premium на 12 месяцев через Humo</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">Руководство</span>
            <time className="text-xs text-muted" dateTime="2026-05-14">14 мая 2026</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Telegram Premium на 12 месяцев через Humo
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>Краткий ответ:</strong> процесс покупки 12-месячного Telegram Premium через Humo — в{" "}
              <Link href="https://telegram.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>{" "}
              выбираете 12-месячный тариф, бот показывает <strong>номер карты и точную сумму 425 000 сум</strong>, вы с карты Humo переводите ровно эту сумму на эту карту. Система автоматически определяет и активирует Premium на 365 дней. В месяц 35 417 сум — самая низкая месячная цена среди всех тарифов.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            12-месячный Premium — самый экономный вариант. Один раз заплатили — целый год все возможности Telegram открыты. По сравнению с 12 раз по 1 месяцу на 39% дешевле, в месяц 35 417 сум — меньше стоимости ежедневного кофе. Humo — одна из самых распространённых национальных платёжных систем Узбекистана, наравне с Uzcard.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            В этой статье — точная цена 12-месячного Premium через Humo, механизм P2P-перевода между ботом и Humo, пошаговый процесс, решение проблемы дневного лимита, и почему 12-месячный тариф самый экономный вариант.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 — В Telegram есть, но Humo не принимается */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              В Telegram 12 месяцев есть — но через Humo не оплатить
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              12-месячный тариф отличается от других сроков. 3 и 6 месяцев в официальном приложении Telegram <strong>отсутствуют вообще</strong> — поэтому реселлерские боты единственный вариант. 12 месяцев же в Telegram есть, в меню появляется вариант «Годовой», его можно выбрать. Но при нажатии «Оплатить» начинаются проблемы.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Telegram принимает для годовой оплаты три системы: Google Pay (Android), Apple Pay (iOS) и зарубежные банковские карты (Visa, Mastercard). Национальные платёжные системы Узбекистана — <strong>Humo и Uzcard</strong> — не интегрированы с этой экосистемой. Даже если введёте данные карты Humo, платёж не подтвердится.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Это не техническая проблема Humo. Humo прекрасно работает внутри Узбекистана — межбанковские P2P, Click, Payme, коммунальные платежи. Проблема в том, что Telegram устанавливает годовую цену в долларах и опирается на международные платёжные системы. Значит владелец Humo не может купить годовой Premium через официальное приложение — это барьер на техническом и регуляторном уровне.
            </p>
            <div className="bg-section-alt rounded-xl p-5 mb-4">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Практический итог:</strong> если у вас карта Humo и нужен 12-месячный Premium — три пути. Первый: попросить друга за границей оплатить Visa. Второй: открыть зарубежную карту (много документов, время). Третий: @PremiumSendBot — оплата в сумах через P2P-перевод с Humo, активация за 5 минут.
              </p>
            </div>
            <p className="text-muted leading-relaxed">
              Что делает посреднический сервис? Принимает оплату через Humo переводом на карту, затем внутренними механизмами активирует годовой Premium на вашем аккаунте Telegram. Для вас процесс простой: переведите с Humo и получите 365 дней Premium.
            </p>
          </section>

          {/* Section 2 — Pricing */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              12 месяцев Premium через Humo — цена и экономия 283 000 сум
            </h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Цена:</strong> 12-месячный Telegram Premium через Humo — <strong>425 000 сум</strong> (35 417 сум/месяц). Сумма, указанная ботом — точно эта, никаких дополнительных комиссий. P2P-перевод Humo тоже без комиссии.
              </p>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              Главная привлекательность 12-месячного пакета — максимальная экономия. Если оплачивать 1-месячный 12 раз — вы заплатите 708 000 сум. В 12-месячном пакете — 425 000 сум. Разница — <strong>283 000 сум</strong>. Эта сумма больше, чем стоимость 6-месячного пакета (235 000). Другими словами, выбрав 12 месяцев, вы получаете больше 7 месяцев Premium бесплатно.
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Тариф</div>
                <div className="text-center">Общая цена</div>
                <div className="text-center">В месяц</div>
                <div className="text-center">К 12 мес.</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">1 месяц × 12</div>
                <div className="text-center">708 000 сум</div>
                <div className="text-center">59 000 сум</div>
                <div className="text-center text-red-600">+67% дороже</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">3 месяца × 4</div>
                <div className="text-center">700 000 сум</div>
                <div className="text-center">58 333 сум</div>
                <div className="text-center text-red-600">+65% дороже</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">6 месяцев × 2</div>
                <div className="text-center">470 000 сум</div>
                <div className="text-center">39 167 сум</div>
                <div className="text-center text-red-600">+11% дороже</div>
              </div>
              <div className="grid grid-cols-4 p-4 items-center text-sm bg-primary-light/20">
                <div className="font-bold text-primary">12 месяцев ⭐</div>
                <div className="text-center font-bold text-primary">425 000 сум</div>
                <div className="text-center font-bold text-primary">35 417 сум</div>
                <div className="text-center text-green-600 font-bold">Самый экономный</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              12-месячный тариф — <strong>самая низкая месячная цена</strong>. Другие пакеты не могут с ним сравниться: месячная цена 6-месячного — 39 167, у 12-месячного — 35 417. То есть каждый месяц Premium в 12-месячном на 10% дешевле, плюс целый год без необходимости думать об оплате.
            </p>
          </section>

          {/* Section 3 — Step by step */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Как купить 12-месячный Premium через Humo — пошагово
            </h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Краткий ответ:</strong>{" "}
                <Link href="https://telegram.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>{" "}
                откройте → выберите 12-месячный тариф → введите username → бот даст карту и сумму 425 000 сум → с Humo переведите ровно 425 000 сум на эту карту → Premium активируется на 365 дней за 5 минут.
              </p>
            </div>

            <div className="space-y-4 mb-6">
              {[
                { step: "1", title: "Откройте @PremiumSendBot в Telegram", desc: "Введите @PremiumSendBot в поиске. Откройте бот с галочкой верификации. Нажмите /start." },
                { step: "2", title: "Выберите 12-месячный тариф", desc: "Бот покажет 4 тарифа: 1, 3, 6, 12 месяцев. Нажмите «12 месяцев» — цена 425 000 сум, в месяц 35 417." },
                { step: "3", title: "Введите username получателя Premium", desc: "Через @ напишите Telegram username. 12 месяцев этот аккаунт будет Premium — проверьте username очень внимательно дважды." },
                { step: "4", title: "Проверьте баланс и дневной лимит Humo", desc: "425 000 сум — большая сумма. Откройте приложение Humo, убедитесь в достаточном балансе и дневном лимите интернет-оплат. Если лимит низкий — повысьте до 1 000 000 сум в приложении (1 минута)." },
                { step: "5", title: "Бот покажет номер карты и точную сумму", desc: "На экране номер карты (8600 XXXX XXXX XXXX) и сумма ровно 425 000 сум. Бот может также дать проверочный код в комментарии." },
                { step: "6", title: "Сделайте P2P-перевод через Humo", desc: "С Humo на указанную карту переведите 425 000 сум. Через приложение банка, выпустившего Humo (Asakabank, Hamkorbank, НБУ, Trustbank, Kapitalbank и другие), SMS-банк, или Click/Payme если карта Humo привязана." },
                { step: "7", title: "Подтверждение (PIN/SMS-код)", desc: "В зависимости от приложения — PIN, Face ID или SMS-код. На большие суммы банк может запросить дополнительное подтверждение через push — это нормальная мера безопасности." },
                { step: "8", title: "Premium активируется за 5 минут", desc: "После подтверждения банком система за 1-5 минут определит сумму, и Premium активируется на 365 дней на указанном аккаунте. Бот пришлёт сообщение. Следующий год никакой повторной оплаты или продления." },
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

            <p className="text-muted leading-relaxed">
              Весь процесс — 5-7 минут. Через год подписка автоматически заканчивается — это важный момент: никакой автоматической повторной оплаты, вы сами выбираете следующий пакет.
            </p>
          </section>

          {/* Mid CTA */}
          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Карта Humo готова?{" "}
                <strong className="text-white">@PremiumSendBot</strong> — выберите 12-месячный тариф, получите карту и сумму 425 000 сум, переведите через Humo. Premium 365 дней без забот.
              </p>
              <Link href="https://telegram.me/premiumsendbot" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                Начать с Humo — 12 месяцев
              </Link>
            </div>
          </section>

          {/* Section 4 — Why exact amount */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Почему важно перевести именно 425 000 сум?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Вопрос как бот находит ваш платёж — обоснованный, особенно для большой суммы. Механизм такой:
            </p>
            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li>Бот для 12-месячного тарифа показывает точную сумму <strong>425 000 сум</strong></li>
              <li>Система отслеживает поступления на карту</li>
              <li>Когда платёж приходит ровно с этой суммой — система сопоставляет с заказом</li>
              <li>Premium активируется на указанном @username на 365 дней</li>
            </ul>
            <p className="text-muted leading-relaxed">
              Если переведёте другую сумму (например, 425 500 или 424 000), обращаетесь в поддержку с номером чека Humo — Premium активируется вручную за 15-30 минут или возвращается разница. Точно 425 000 — самый быстрый автоматический путь. При вводе суммы в банковском приложении будьте внимательны.
            </p>
          </section>

          {/* Section 5 — Why 12 months */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Почему 12-месячный тариф — самый разумный выбор
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { title: "Самая низкая месячная цена", desc: "35 417 сум/месяц — на 40% ниже 1-месячного, на 10% дешевле 6-месячного. Экономия 283 000 сум в год — это больше стоимости 6-месячного пакета." },
                { title: "Один раз заплатить и забыть на год", desc: "Никакой заботы об оплате каждый месяц, через 3 или 6 месяцев. 365 дней Premium непрерывно. Минимум внимания." },
                { title: "Нет авто-продления", desc: "Подписка Telegram, оформленная через Apple Pay или Google Pay, продлевается автоматически — каждый год с карты списываются деньги. Через PremiumSend — нет. Через год подписка заканчивается автоматически, вы сами решаете." },
                { title: "Самый ценный подарок", desc: "365-дневный Premium — целый год сервиса для близкого друга, члена семьи, партнёра. 12 месяцев в подарок — комплексный и запоминающийся знак внимания." },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-muted leading-relaxed">
              12-месячный тариф подходит не всем — если вы уверены в необходимости Premium и бюджет позволяет, это самый разумный вариант.{" "}
              <Link href="/ru/maqolalar/12-oylik-telegram-premium-sotib-olish" className="text-primary font-semibold hover:underline">Общее руководство по 12-месячному Premium</Link>{" "}
              рассматривает другие способы оплаты.
            </p>
          </section>

          {/* Section 6 — Humo limit problem */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Что делать, если дневной лимит Humo меньше 425 000 сум?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Самая частая практическая проблема. У многих банков для карты Humo дневной лимит интернет-оплат по умолчанию <strong>200 000-500 000 сум</strong>. 425 000 — как раз на этой границе. В некоторых случаях первая попытка отклоняется банком.
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">1️⃣ Повысить лимит — самый правильный путь</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Откройте мобильное приложение банка, выпустившего Humo (Asakabank, Hamkorbank, НБУ, Trustbank, Kapitalbank и другие банки-эмитенты Humo). «Карты» → выбрать карту → «Лимиты» или «Настройки». Временно повысьте лимит интернет-оплат до 1 000 000 сум. В большинстве банков это срабатывает сразу.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">2️⃣ Через Click или Payme — альтернатива</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Если ваша Humo привязана к Click или Payme, оплачивайте через них. У Click и Payme лимиты считаются банком иначе — обычно до 1-2 млн сум стандартного ограничения нет.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">3️⃣ Звонок в банк — если предыдущее не помогает</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Позвоните в call-центр банка с просьбой «повысить лимит интернет-оплат на один день». По паспортным данным и деталям карты подтвердят, лимит поднимется сразу.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">⚠️ Можно ли оплатить двумя частями?</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Нет. Система бота ждёт оплату точно 425 000 сум. 200 000 + 225 000 — это два отдельных платежа, ни один не привяжется к заказу. Обратитесь в поддержку бота заранее — предложат ручное решение.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7 — Safety */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              425 000 сум — большая сумма. Безопасна ли оплата через Humo?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Основной психологический барьер 12-месячного пакета — большой размер суммы. «Если деньги уйдут, а Premium не придёт?» — обоснованный и нормальный вопрос. С точки зрения механизма перевод 425 000 сум не отличается от 59 000 сум — точно такой же P2P-перевод.
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">🔐 Данные карты на сервере банка</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Номер карты Humo, пароль и CVV сохраняются только на сервере банка. Бот никогда их не видит — бот видит только факт «на карту поступило 425 000 сум».
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">📋 PDF-чек банка — правовой документ</h3>
                <p className="text-sm text-muted leading-relaxed">
                  На каждый P2P-перевод банк выдаёт PDF-чек. Чек на 425 000 сум — ваш правовой документ. При проблеме поддержка по номеру чека сразу находит платёж.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">💰 Если Premium не придёт — деньги вернутся</h3>
                <p className="text-sm text-muted leading-relaxed">
                  При технической ошибке 425 000 сум возвращаются полностью. По номеру чека Humo процесс возврата быстрый — в банковской стороне 1-3 рабочих дня.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">🛡️ Один большой платёж — безопаснее 12 маленьких</h3>
                <p className="text-sm text-muted leading-relaxed">
                  В 1-месячном вы 12 раз делаете действия с картой — каждый раз риск фишинга или ошибки. В 12-месячном один платёж и вопрос закрыт. Статистически меньше действий = меньше риска.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              О выборе надёжного реселлера —{" "}
              <Link href="/ru/maqolalar/telegram-premium-xavfsiz-aldovdan-saqlanish" className="text-primary font-semibold hover:underline">руководство по безопасности</Link>.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Часто задаваемые вопросы</h2>
            <div className="space-y-4">
              {[
                { q: "Сколько стоит Telegram Premium на 12 месяцев через Humo?", a: "425 000 сум — 35 417 сум в месяц. Самая низкая месячная цена среди всех тарифов. Через Uzcard, Click и Payme — та же цена. Humo не берёт дополнительной комиссии." },
                { q: "Как купить 12-месячный Premium через Humo?", a: "В @PremiumSendBot выберите 12-месячный тариф, введите username. Бот покажет карту и сумму 425 000 сум. С Humo переведите ровно 425 000 сум. За 5 минут Premium на 365 дней." },
                { q: "Что если перевести другую сумму?", a: "Система не сможет автоматически сопоставить. Обращаетесь в поддержку с номером чека Humo — Premium активируется вручную за 15-30 минут или возвращается разница. Точно 425 000 всегда быстрее." },
                { q: "В Telegram есть 12 месяцев, зачем покупать через бот?", a: "В Telegram 12 месяцев есть, но оплата только через Google Pay, Apple Pay или зарубежные карты. Humo и Uzcard в официальном приложении не принимаются. Бот — единственный путь оплаты в сумах." },
                { q: "Что если дневной лимит Humo меньше нужной суммы?", a: "В приложении банка повысьте дневной лимит интернет-оплат до 1 000 000 сум (1 минута). Или через Click/Payme если карта Humo привязана — там лимит считается иначе." },
                { q: "Можно ли подарить 12-месячный Premium?", a: "Да. Бот спрашивает username получателя, с Humo переводите 425 000 сум на карту, Premium активируется на этом аккаунте на 365 дней. Годовой ценный подарок — самый крупный Premium-gift." },
                { q: "После 12-месячной оплаты будет авто-продление?", a: "Нет. Через PremiumSend 12 месяцев — разовая оплата. Через год подписка заканчивается автоматически, никакой повторной оплаты или продления не запрашивается. Подписка Telegram через Apple Pay/Google Pay может продлеваться автоматически — здесь контроль у вас." },
                { q: "Безопасно ли платить через Humo?", a: "Да. Humo лицензирована Центральным банком. Данные карты только на сервере банка, бот их не видит. Если Premium не придёт — деньги возвращаются. Один большой платёж статистически безопаснее 12 маленьких." },
                { q: "12 месяцев или 6 месяцев — что выгоднее?", a: "12 месяцев — 35 417 сум/месяц, на 10% дешевле 6-месячного (39 167). Плюс 365 дней без забот о повторной оплате. Но 425 000 сум нужно собрать сразу — если бюджет позволяет, самый экономный вариант." },
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
              <h3 className="text-lg font-bold text-foreground mb-4 text-center">12 месяцев через Humo — в цифрах</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">425 000</p>
                  <p className="text-sm text-muted">сум, без дополнительной комиссии</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">39%</p>
                  <p className="text-sm text-muted">дешевле, чем 1-месячный</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">365 дн</p>
                  <p className="text-sm text-muted">непрерывный Premium</p>
                </div>
              </div>
            </div>
          </section>

          {/* Related */}
          <section>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-card-border">
              <h3 className="text-lg font-bold text-foreground mb-4">Другие сроки через Humo</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/ru/maqolalar/telegram-premium-humo-orqali" className="text-primary font-semibold hover:underline">Premium через Humo — pillar-руководство</Link></li>
                <li><Link href="/ru/maqolalar/3-oylik-telegram-premium-humo-orqali" className="text-primary font-semibold hover:underline">3 месяца Premium через Humo (175 000 сум)</Link></li>
                <li><Link href="/ru/maqolalar/6-oylik-telegram-premium-humo-orqali" className="text-primary font-semibold hover:underline">6 месяцев Premium через Humo (235 000 сум)</Link></li>
                <li><Link href="/ru/maqolalar/12-oylik-telegram-premium-sotib-olish" className="text-primary font-semibold hover:underline">12 месяцев Premium — общее руководство</Link></li>
                <li><Link href="/ru/maqolalar/12-oylik-telegram-premium-click-orqali" className="text-primary font-semibold hover:underline">12 месяцев Premium через Click</Link></li>
                <li><Link href="/ru/maqolalar/12-oylik-telegram-premium-uzcard-orqali" className="text-primary font-semibold hover:underline">12 месяцев Premium через Uzcard</Link></li>
                <li><Link href="/ru/maqolalar/telegram-premium-narxlari" className="text-primary font-semibold hover:underline">Сравнение цен Telegram Premium</Link></li>
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
                  12-месячный Telegram Premium через Humo — 425 000 сум, 35 417 в месяц (самая низкая месячная цена). Обычный P2P-перевод через Humo на указанную ботом карту, активация за 5 минут, 365 дней без забот.{" "}
                  <strong className="text-white">@PremiumSendBot</strong> — начать.
                </p>
                <Link href="https://telegram.me/premiumsendbot" target="_blank" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  Начать с Humo — 12 месяцев
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
