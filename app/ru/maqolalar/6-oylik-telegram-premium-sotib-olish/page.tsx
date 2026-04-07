import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Купить Telegram Premium на 6 месяцев — 235 000 сум, через Uzcard и Humo",
  description:
    "Купить Telegram Premium на 6 месяцев в Узбекистане за 235 000 сум. Оплата в сумах через Uzcard, Humo. В Telegram нет 6-месячного пакета — только через @PremiumSendBot. Пошаговая инструкция.",
  keywords: [
    "купить Telegram Premium 6 месяцев",
    "Telegram Premium 6 месяцев",
    "Telegram Premium Uzcard",
    "Telegram Premium Humo",
    "Telegram Premium Узбекистан",
    "Telegram Premium за сумы",
    "Telegram Premium 235000",
    "Telegram Premium полугодовой",
    "PremiumSendBot",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/ru/maqolalar/6-oylik-telegram-premium-sotib-olish",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/6-oylik-telegram-premium-sotib-olish",
      ru: "https://premiumsend.uz/ru/maqolalar/6-oylik-telegram-premium-sotib-olish",
    },
  },
  openGraph: {
    title: "Купить Telegram Premium на 6 месяцев — 235 000 сум",
    description:
      "В Telegram нет 6-месячного Premium. Купите через @PremiumSendBot с помощью Uzcard, Humo за 235 000 сум.",
    url: "https://premiumsend.uz/ru/maqolalar/6-oylik-telegram-premium-sotib-olish",
    type: "article",
    publishedTime: "2026-04-02",
  },
};

export default function Article6Month() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Купить Telegram Premium на 6 месяцев — в Узбекистане за 235 000 сум",
    description:
      "Купить Telegram Premium на 6 месяцев в Узбекистане через Uzcard, Humo за 235 000 сум. Подробное руководство.",
    datePublished: "2026-04-02",
    dateModified: "2026-04-02",
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
      "https://premiumsend.uz/ru/maqolalar/6-oylik-telegram-premium-sotib-olish",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Нужна ли карта Visa для покупки 6-месячного Telegram Premium?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет. Через @PremiumSendBot можно оплатить картой Uzcard или Humo. Также можно перевести через Click или Payme на карту бота. Visa не требуется.",
        },
      },
      {
        "@type": "Question",
        name: "Есть ли 6-месячный Premium в официальном приложении Telegram?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет. Telegram предлагает только 1-месячную и 12-месячную подписку. 6-месячного пакета нет — его можно купить только через сервисы вроде Premium Send.",
        },
      },
      {
        "@type": "Question",
        name: "Через сколько времени после активации 6-месячный Premium станет виден?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Обычно активируется в течение нескольких минут после оплаты. Бот автоматически определяет оплату и доставляет Premium.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли подарить 6-месячный Premium другому человеку?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Для этого введите Telegram username этого человека. Premium активируется непосредственно на его аккаунте.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько стоит 6-месячный Telegram Premium в сумах?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "В Premium Send 6-месячный Telegram Premium стоит 235 000 сум. Оплата производится в узбекских сумах.",
        },
      },
      {
        "@type": "Question",
        name: "Что происходит по окончании срока подписки Premium?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "По истечении 6 месяцев подписка автоматически прекращается. Аккаунт возвращается в обычный режим Telegram. Если хотите продолжить, нужно купить новую подписку.",
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
        name: "Купить Telegram Premium на 6 месяцев",
        item: "https://premiumsend.uz/ru/maqolalar/6-oylik-telegram-premium-sotib-olish",
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
          Купить Telegram Premium на 6 месяцев
        </span>
      </nav>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gold-light text-amber-700">
              Руководство
            </span>
            <time className="text-xs text-muted" dateTime="2026-04-02">
              2 апреля 2026 г.
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Купить Telegram Premium на 6 месяцев
          </h1>
          {/* AI/SEO Snippet Definition */}
          <div className="bg-gold-light/50 rounded-xl p-5 border border-gold/20 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>6-месячный Telegram Premium</strong> — это расширенная подписка Telegram, которую в Узбекистане можно купить через{" "}
              <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>{" "}
              за <strong>235 000 сум</strong>, оплатив картой Uzcard или Humo. В мессенджере Telegram 6-месячного пакета нет — его можно купить только через Premium Send.
            </p>
          </div>
          <p className="text-lg text-muted leading-relaxed">
            Представьте: каждый месяц вы отдельно платите за Telegram Premium, каждый раз ищете карту, каждый раз боретесь с проблемой конвертации. Это повседневная реальность большинства пользователей Telegram в Узбекистане. А что если можно оплатить один раз и спокойно пользоваться 6 месяцев?
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Именно поэтому запрос на покупку 6-месячного Telegram Premium в Узбекистане всё чаще растёт. В этой статье мы подробно объясним, как купить 6-месячную подписку Telegram Premium в Узбекистане — через Uzcard и Humo.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Почему именно 6-месячный вариант — самый разумный выбор?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              При покупке Telegram Premium люди часто задаются двумя вопросами: &laquo;На какой срок выбрать?&raquo; и &laquo;Как заплатить дешевле?&raquo; Ответ часто один и тот же: 6-месячный вариант — это оптимальный баланс между удобством и экономией.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Telegram предлагает только 1-месячную и 12-месячную подписку. Если платить каждый месяц отдельно, за 6 месяцев придётся совершить 6 платежей. Каждый раз процесс оплаты, подтверждение, проблемы с картой — всё это отнимает время и нервы. 6-месячный оптовый пакет решает эту проблему одним разом.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: "Экономия",
                  desc: "6-месячный пакет дешевле помесячной оплаты. В Premium Send 6 месяцев стоит 235 000 сум — всего 39 167 сум в месяц.",
                },
                {
                  title: "Удобство",
                  desc: "В течение 6 месяцев не нужно думать о Premium. Можно даже не следить за датой окончания подписки.",
                },
                {
                  title: "Непрерывный опыт",
                  desc: "Полный доступ ко всем возможностям Premium в течение 6 месяцев — без рекламы, большие файлы, эксклюзивные эмодзи и все остальные функции.",
                },
                {
                  title: "Идеально в качестве подарка",
                  desc: "Если подарите близкому человеку 6-месячный Premium — это не просто подарок, а полугодовой ценный опыт.",
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
              <Link href="/ru/3-oylik" className="text-primary font-semibold hover:underline">3-месячный вариант</Link> хорош для пробного использования, а 6-месячный Telegram Premium — оптимален для постоянных пользователей.{" "}
              <Link href="/ru/12-oylik" className="text-primary font-semibold hover:underline">12-месячный</Link> — для тех, кто хочет максимальной экономии. В Узбекистане особенно среди блогеров, онлайн-предпринимателей и активных пользователей Telegram 6-месячный вариант становится самым востребованным пакетом.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Есть ли 6-месячная подписка в официальном приложении Telegram?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Прямой ответ на этот вопрос: <strong className="text-foreground">Нет.</strong>
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Telegram предлагает только 1-месячную и 12-месячную подписку. 3-месячных и 6-месячных пакетов в официальном приложении нет. Это ограничение текущей бизнес-модели Telegram, которое побуждает пользователей платить каждый месяц заново.
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-section-alt rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-2">
                  Первая проблема — нет 6-месячного пакета
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Если хотите на 6 месяцев, Telegram не предоставляет такой возможности. Есть только 1-месячный и 12-месячный — промежуточного варианта нет.
                </p>
              </div>
              <div className="bg-section-alt rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-2">
                  Вторая проблема — платёжная система
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Для оплаты через официальное приложение Telegram нужен Google Pay или Apple Pay. Эти системы не работают с местными картами Узбекистана — Uzcard и Humo. То есть для пользователя из Узбекистана купить Premium официальным путём практически невозможно.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Для решения этих двух проблем появились специальные реселлер-сервисы. Покупка 6-месячного Telegram Premium осуществляется именно через эти сервисы — и это абсолютно легальный и безопасный процесс.
            </p>
          </section>

          {/* Section 3 — Step by step */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Купить 6-месячный Telegram Premium в Узбекистане: пошаговая инструкция
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Ниже приведён полный процесс покупки 6-месячного Telegram Premium через @PremiumSendBot. Процесс простой и занимает не более 5 минут.
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  step: "1",
                  title: "Откройте бота",
                  desc: "Найдите и откройте @PremiumSendBot в Telegram. Это специальный бот для пользователей Узбекистана.",
                },
                {
                  step: "2",
                  title: "Запустите бота",
                  desc: "Нажмите кнопку /start. Бот поприветствует на узбекском языке и предложит меню.",
                },
                {
                  step: "3",
                  title: "Выберите пакет",
                  desc: "В меню выберите вариант «6-месячный Premium». Цена указана в узбекских сумах — без конвертации в доллары.",
                },
                {
                  step: "4",
                  title: "Введите аккаунт",
                  desc: "Введите Telegram username аккаунта, на который нужно активировать Premium. Это может быть ваш аккаунт или аккаунт друга.",
                },
                {
                  step: "5",
                  title: "Произведите оплату",
                  desc: "Оплатите картой Uzcard или Humo. Также можно перевести через Click или Payme на карту бота — бот автоматически определит сумму.",
                },
                {
                  step: "6",
                  title: "Premium активирован",
                  desc: "После подтверждения оплаты 6-месячная подписка Telegram Premium автоматически активируется на указанном аккаунте. Обычно это происходит в течение нескольких минут.",
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

            <p className="text-muted leading-relaxed mb-6">
              Если в процессе возникнут проблемы, служба поддержки бота поможет на узбекском языке.
            </p>

            {/* Промежуточный CTA */}
            <div className="bg-white rounded-2xl p-6 border-2 border-primary/20 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-bold text-foreground text-lg">6-месячный Telegram Premium — 235 000 сум</p>
                <p className="text-sm text-muted">Оплата в сумах через Uzcard, Humo</p>
              </div>
              <div className="flex gap-3">
                <Link href="/ru/6-oylik" className="px-5 py-2.5 rounded-xl bg-primary-light text-primary font-semibold text-sm hover:bg-primary hover:text-white transition-all">
                  Подробнее
                </Link>
                <Link href="https://t.me/premiumsendbot" target="_blank" className="px-5 py-2.5 rounded-xl hero-gradient text-white font-semibold text-sm shadow-lg shadow-primary/25">
                  Купить
                </Link>
              </div>
            </div>
          </section>

          {/* Section 4 — Price comparison */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Цена 6-месячного Telegram Premium: сравнение
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Купить 6-месячный Telegram Premium за сумы — это самый важный вопрос для большинства. В вопросе цены нужно понимать несколько важных нюансов.
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Параметр</div>
                <div className="text-center">Telegram официальный</div>
                <div className="text-center">@PremiumSendBot</div>
                <div className="text-center">Разница</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Срок</div>
                <div className="text-center text-muted">Только 1 и 12 мес.</div>
                <div className="text-center text-primary font-medium">6-месячный пакет</div>
                <div className="text-center text-green-600 font-medium">6 мес. доступно</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Оплата</div>
                <div className="text-center text-muted">Иностранная карта</div>
                <div className="text-center text-primary font-medium">Uzcard, Humo</div>
                <div className="text-center text-green-600 font-medium">Местная карта</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Язык</div>
                <div className="text-center text-muted">Англ./Рус.</div>
                <div className="text-center text-primary font-medium">Узбекский</div>
                <div className="text-center text-green-600 font-medium">Узбекский язык</div>
              </div>
              <div className="grid grid-cols-4 p-4 items-center text-sm">
                <div className="font-medium">Цена</div>
                <div className="text-center text-muted">~$4.99/мес. ($29.94)</div>
                <div className="text-center text-primary font-bold">235 000 сум</div>
                <div className="text-center text-green-600 font-medium">В сумах, точно</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              Поскольку в официальном приложении Telegram нет 6-месячного варианта, если платить каждый месяц отдельно — за 6 месяцев выйдет $29.94. Кроме того, при ежемесячной оплате разница курсов и комиссия за конвертацию создают дополнительные расходы.
            </p>
            <p className="text-muted leading-relaxed">
              Через Premium Send вы платите точно установленную сумму — <strong className="text-foreground">235 000 сум</strong> — без разницы курсов и комиссии за конвертацию.
            </p>
          </section>

          {/* Section 5 — Uzcard/Humo */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              6-месячный Telegram Premium через Uzcard и Humo: как это работает?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              У многих возникает вопрос: &laquo;Если оплачу через Uzcard или Humo, Premium действительно активируется?&raquo; Ответ: <strong className="text-foreground">Да, полностью активируется.</strong>
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Реселлер-сервисы работают с Telegram на основе специального соглашения. Когда пользователь оплачивает местной картой, сервис производит оплату Telegram через свой счёт и активирует Premium на указанном аккаунте. Это посреднический механизм, который полностью легален.
            </p>

            <div className="bg-section-alt rounded-xl p-6 mb-6">
              <h3 className="font-bold text-foreground mb-3">Процесс оплаты через Uzcard:</h3>
              <ul className="space-y-2">
                {[
                  "Введите номер карты Uzcard или отсканируйте QR-код",
                  "Подтвердите операцию кодом из SMS",
                  "После прохождения оплаты бот отправит вам подтверждение",
                  "Premium активируется в течение нескольких минут",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-muted text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-muted leading-relaxed">
              Через Humo работает точно так же — разницы нет. Обе карты работают с одинаковой скоростью и надёжностью. Также можно перевести через Click или Payme на карту бота — бот автоматически определит сумму.
            </p>
          </section>

          {/* Section 6 — For whom */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Для кого 6-месячный Telegram Premium подходит лучше всего?
            </h2>

            <div className="space-y-6 mb-6">
              {[
                {
                  title: "Владельцы Telegram-каналов и блогеры",
                  desc: "Если у вас свой канал и вы выпускаете контент каждый день — Premium важен для вашего профессионального имиджа. Значок Premium, эксклюзивные реакции и возможность загружать контент большого объёма — всё это повышает качество канала. 6 месяцев — достаточное время, чтобы разработать контент-стратегию и увидеть результаты.",
                },
                {
                  title: "Онлайн-предприниматели и фрилансеры",
                  desc: "Если работаете с клиентами через Telegram, Premium даёт несколько дополнительных преимуществ: чтение голосовых сообщений в текстовом виде, быстрый перевод и отправка больших документов. Эти функции могут экономить несколько часов в день.",
                },
                {
                  title: "Активные пользователи",
                  desc: "Если проводите в Telegram 3-4 часа и более в день — отсутствие рекламы и более быстрая загрузка заметно улучшают качество. 6-месячная подписка обеспечивает эту комфортную среду на длительный срок.",
                },
                {
                  title: "Те, кто хочет сделать подарок другу или близкому",
                  desc: "6-месячный Premium — это не обычный подарок. Полгода без рекламы, с полными возможностями Telegram. Как подарок на день рождения, праздник или просто знак внимания — очень ценно.",
                },
                {
                  title: "Студенты и молодёжь",
                  desc: "Функция Voice-to-text в Telegram Premium очень удобна для записи лекций и занятий голосом и сохранения в текстовом виде. 6 месяцев — это как раз один учебный семестр.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Промежуточный CTA 2 */}
            <div className="bg-white rounded-2xl p-6 border-2 border-primary/20 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-bold text-foreground text-lg">6-месячный Telegram Premium — 235 000 сум</p>
                <p className="text-sm text-muted">Сейчас <Link href="/ru/6-oylik" className="text-primary hover:underline">подробнее</Link> или купите напрямую</p>
              </div>
              <Link href="https://t.me/premiumsendbot" target="_blank" className="px-6 py-3 rounded-xl hero-gradient text-white font-semibold text-sm shadow-lg shadow-primary/25 whitespace-nowrap">
                Купить
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
                  q: "Нужна ли карта Visa для покупки 6-месячного Telegram Premium?",
                  a: "Нет. Через @PremiumSendBot можно оплатить картой Uzcard или Humo. Также можно перевести через Click или Payme на карту бота. Visa не требуется.",
                },
                {
                  q: "Есть ли 6-месячный Premium в официальном приложении Telegram?",
                  a: "Нет. Telegram предлагает только 1-месячную и 12-месячную подписку. 6-месячного пакета нет — его можно купить только через сервисы вроде Premium Send.",
                },
                {
                  q: "Через сколько времени после активации 6-месячный Premium станет виден?",
                  a: "Обычно активируется в течение нескольких минут после оплаты. В редких случаях может занять 15-30 минут, но это случается крайне редко.",
                },
                {
                  q: "Можно ли подарить 6-месячный Premium другому человеку — другу или члену семьи?",
                  a: "Да. Для этого введите Telegram username этого человека. Premium активируется непосредственно на его аккаунте.",
                },
                {
                  q: "Сколько стоит 6-месячный Telegram Premium в сумах?",
                  a: "В Premium Send 6-месячный Telegram Premium стоит 235 000 сум. Оплата в узбекских сумах — картой Uzcard или Humo.",
                },
                {
                  q: "Что происходит по окончании срока подписки Premium?",
                  a: "По истечении 6 месяцев подписка автоматически прекращается. Аккаунт возвращается в обычный режим Telegram. Если хотите продолжить, нужно купить новую подписку.",
                },
                {
                  q: "Есть ли другие пакеты в Premium Send?",
                  a: "Да. Есть 3-месячный (175 000 сум) и 12-месячный (425 000 сум) пакеты. В Telegram нет 3- и 6-месячных пакетов — их можно купить только через Premium Send.",
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

          {/* Conclusion */}
          <section>
            <div className="hero-gradient rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-5 left-5 w-32 h-32 bg-white rounded-full blur-2xl" />
              </div>
              <div className="relative">
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  Если вам нужно купить 6-месячный Telegram Premium в Узбекистане через местную карту, без лишних проблем —{" "}
                  <strong className="text-white">@PremiumSendBot</strong> — самое удобное и надёжное решение на сегодня. Оформите заказ через Uzcard или Humo за несколько минут и наслаждайтесь возможностями Premium в течение 6 месяцев.
                </p>
                <Link
                  href="https://t.me/premiumsendbot"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  Перейти в @PremiumSendBot
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
