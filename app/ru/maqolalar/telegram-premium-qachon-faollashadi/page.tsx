import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Когда активируется Telegram Premium и как считается срок — полный ответ",
  description:
    "Telegram Premium активируется через 5 минут после оплаты. Срок считается с даты активации, по календарным месяцам (не 30 дней). Продление, подарок, проблема февраля — детально.",
  keywords: [
    "когда активируется telegram premium",
    "telegram premium срок",
    "telegram premium как считается срок",
    "telegram premium активация",
    "telegram premium сколько действует",
    "telegram premium продление",
    "telegram premium подарок активация",
    "telegram premium aktivacia",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/ru/maqolalar/telegram-premium-qachon-faollashadi",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/telegram-premium-qachon-faollashadi",
      ru: "https://premiumsend.uz/ru/maqolalar/telegram-premium-qachon-faollashadi",
      "x-default": "https://premiumsend.uz/maqolalar/telegram-premium-qachon-faollashadi",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title: "Когда активируется Telegram Premium — как считается срок",
    description:
      "Через 5 минут после оплаты, срок по календарным месяцам. Продление, подарок, проблема февраля и решение технических проблем.",
    url: "https://premiumsend.uz/ru/maqolalar/telegram-premium-qachon-faollashadi",
    type: "article",
    publishedTime: "2026-05-01",
  },
};

export default function ArticleQachonFaollashadiRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    image: "https://premiumsend.uz/og-image.png",
    headline:
      "Когда активируется Telegram Premium и как считается срок — полное руководство",
    description:
      "Время активации Telegram Premium, логика расчёта срока, продление, получение подарка и решение технических проблем — полный ответ.",
    datePublished: "2026-05-01",
    dateModified: "2026-05-01",
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
      "https://premiumsend.uz/ru/maqolalar/telegram-premium-qachon-faollashadi",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Когда активируется Telegram Premium после оплаты?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "После подтверждения оплаты через Premium Send Telegram Premium обычно активируется автоматически за 1-5 минут. С учётом подтверждения банка и обработки Telegram самый долгий случай 10-15 минут. Если за 15 минут не пришло — отправьте чек оплаты в поддержку бота.",
        },
      },
      {
        "@type": "Question",
        name: "Срок Premium считается с даты оплаты или с даты активации?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Срок Premium считается с даты активации Telegram, а не с даты оплаты. Поэтому 5-15 минут разницы между оплатой и активацией не входят в срок — вы получаете полный месяц/год.",
        },
      },
      {
        "@type": "Question",
        name: "Срок Premium это 30 дней или календарный месяц?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Срок Telegram Premium считается по календарным месяцам, не 30 дней. Например, активированный 15 января Premium на 1 месяц действует до 15 февраля. Даже если в феврале 28 дней, Telegram автоматически назначает правильную дату (это стандартная логика подписок во всём мире).",
        },
      },
      {
        "@type": "Question",
        name: "Если предыдущий Premium ещё не закончился, когда начнётся новый?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Если предыдущий Premium не закончился, новый купленный срок начинается с даты окончания предыдущего. То есть прибавляется: если осталось 10 дней и купите новый 3-месячный — итого около 100 дней Premium. Никакой срок не теряется.",
        },
      },
      {
        "@type": "Question",
        name: "Когда активируется подарок Premium?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Подаренный Premium активируется в момент принятия получателем. То есть срок Premium считается не с момента отправки, а с момента принятия. Получатель должен нажать на уведомление — в этот момент Premium активируется и срок начинает идти.",
        },
      },
      {
        "@type": "Question",
        name: "Когда заканчивается 12-месячный Premium?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "12-месячный Premium заканчивается ровно через год. Например, активированный 30 апреля 2026 закончится 30 апреля 2027. Не 365 дней, а календарный год — поэтому в високосный год (366 дней) работает на день дольше.",
        },
      },
      {
        "@type": "Question",
        name: "Что делать, если Premium не активируется?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Сначала подождите 10-15 минут (возможна техническая задержка). Затем переоткройте Telegram и проверьте профиль. Если всё ещё не активирован, отправьте в поддержку @PremiumSendBot чек оплаты и Telegram username — будет проверено вручную и быстро решено. Если Premium не приходит — деньги возвращаются полностью.",
        },
      },
      {
        "@type": "Question",
        name: "Возвращаются ли деньги при отмене Premium в середине срока?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет. Premium через Premium Send основан на разовой оплате — нет автопродления, и срок нельзя отменить в середине. Premium работает до конца оплаченного срока и затем автоматически останавливается. Это плюс для большинства пользователей — никаких неожиданных списаний.",
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
        name: "Когда активируется Premium",
        item: "https://premiumsend.uz/ru/maqolalar/telegram-premium-qachon-faollashadi",
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
          Когда активируется Premium
        </span>
      </nav>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">
              Вопрос-ответ
            </span>
            <time className="text-xs text-muted" dateTime="2026-05-01">
              1 мая 2026
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Когда активируется Telegram Premium и как считается срок
          </h1>

          {/* TL;DR */}
          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-sm font-bold text-primary mb-2">КОРОТКИЙ ОТВЕТ</p>
            <p className="text-foreground leading-relaxed font-medium">
              Telegram Premium <strong>активируется автоматически за 1-5 минут</strong> после подтверждения оплаты (максимум 10-15 минут). Срок считается <strong>с даты активации</strong>, по календарным месяцам (не 30 дней). При продлении срок прибавляется к окончанию предыдущего — без потерь. Подарок активируется с момента принятия получателем.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Перед покупкой Premium у пользователей возникают два главных вопроса: &laquo;Когда заработает после оплаты?&raquo; и &laquo;Когда точно закончится срок?&raquo;. На первый взгляд простые вопросы, но ответы не всегда очевидны — потому что время оплаты, время активации, календарный месяц и приём подарка влияют на срок по-разному.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            В этой статье мы разберём все случаи срока Telegram Premium — от оплаты до активации, логику календарного месяца, продление и подарки — с конкретными примерами и датами. В конце есть инструкция, что делать при технических проблемах.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Через сколько активируется Premium после оплаты?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Самый точный ответ: <strong>от 1 до 5 минут</strong>. Это типичное время для большинства пользователей Premium Send. Но в каждом случае есть несколько факторов — подробности ниже:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Этап</div>
                <div className="text-center">Время</div>
                <div className="text-center">Что происходит</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Отправка оплаты</div>
                <div className="text-center text-muted">10-30 секунд</div>
                <div className="text-center text-muted">В приложении Click/Payme/Uzcard</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Подтверждение банка</div>
                <div className="text-center text-muted">30-60 секунд</div>
                <div className="text-center text-muted">SMS, push-уведомление</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Обработка ботом</div>
                <div className="text-center text-muted">10-30 секунд</div>
                <div className="text-center text-muted">@PremiumSendBot подтверждает</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Активация Telegram</div>
                <div className="text-center text-primary font-medium">1-3 минуты</div>
                <div className="text-center text-muted">Основной процесс активации</div>
              </div>
              <div className="grid grid-cols-3 p-4 bg-primary-light/30 items-center text-sm">
                <div className="font-bold text-primary">Итого (типично)</div>
                <div className="text-center font-bold text-primary">2-5 минут</div>
                <div className="text-center text-green-600 font-medium">Premium работает ✓</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              В самом долгом случае процесс может занять 10-15 минут — это обычно связано с загруженностью сети, нерабочим временем или временной задержкой на серверах Telegram. Это тоже нормально и не повод для беспокойства.
            </p>

            <div className="bg-section-alt rounded-xl p-5 mb-4">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Важно:</strong> Независимо от часового пояса, активация работает с одной скоростью. Ночью и в выходные Premium тоже приходит за 5 минут — это автоматическая система, ручная обработка не требуется.
              </p>
            </div>

            <p className="text-muted leading-relaxed">
              Когда в профиле появится значок Premium — Premium заработал. Загрузка файлов до 4 ГБ, отсутствие рекламы и другие функции работают сразу.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Срок Premium считается с даты оплаты или с даты активации?
            </h2>

            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Точный ответ:</strong> срок Premium считается <strong>с даты активации Telegram</strong>, а не с даты оплаты. Разница в 2-15 минут не входит в срок — вы получаете полноценный период.
              </p>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              Это важный нюанс, потому что многие думают &laquo;что бы ни случилось после оплаты, срок должен идти 1 месяц&raquo;. На самом деле система работает в вашу пользу: если после оплаты есть техническая задержка, срок не теряется.
            </p>

            <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm mb-4">
              <p className="text-foreground font-bold mb-2">Пример:</p>
              <p className="text-sm text-muted leading-relaxed">
                Допустим, вы оплатили 1-месячный Premium <strong>30 апреля в 14:00</strong>. Из-за технической задержки Premium активировался <strong>в 14:08</strong>. Срок Premium считается <strong>с 14:08</strong> и закончится <strong>30 мая в 14:08</strong>. Потерянные 8 минут не идут в ущерб срока.
              </p>
            </div>

            <p className="text-muted leading-relaxed">
              Это не требует никаких настроек — Telegram автоматически работает по этой логике. В профиле срок Premium не отображается (уведомление о завершении приходит за 3 дня до конца), но Telegram точно его контролирует.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Срок Premium 30 дней или календарный месяц? Проблема февраля
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Этот вопрос интереснее, чем кажется. Срок Telegram Premium считается по <strong>календарным месяцам</strong>, а не 30 дням. Это стандартная логика подписок во всём мире (Apple, Google, Spotify работают так же).
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Дата начала</div>
                <div className="text-center">Конец 1-месячного</div>
                <div className="text-center">Сколько дней?</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">15 января</div>
                <div className="text-center">15 февраля</div>
                <div className="text-center text-muted">31 день</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">15 февраля</div>
                <div className="text-center">15 марта</div>
                <div className="text-center text-amber-600">28 (29 в високосный)</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">31 января</div>
                <div className="text-center">28 февраля / 1 марта</div>
                <div className="text-center text-amber-600">28-29 дней</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">15 июля</div>
                <div className="text-center">15 августа</div>
                <div className="text-center text-muted">31 день</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center text-sm">
                <div className="font-medium">15 апреля</div>
                <div className="text-center">15 мая</div>
                <div className="text-center text-muted">30 дней</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              Видно: 1-месячный Premium может работать от 28 до 31 дня в зависимости от месяца. Это не чья-то ошибка — так устроен календарь. За год это всё равно 365 дней (366 в високосный) — 12 &laquo;уравненных&raquo; подписок не получится, но в виде календарного года получаете полноценно.
            </p>

            <div className="bg-section-alt rounded-xl p-5 mb-4">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Пример проблемы февраля:</strong> Если купить Premium 31 января, 1-месячный тариф закончится в конце февраля (28 или 29 февраля), потому что в феврале нет 31-го числа. Но в логике Telegram это не проблема: следующий 1-месячный автоматически будет с 28 февраля до 31 марта.
              </p>
            </div>

            <p className="text-muted leading-relaxed">
              Если эта логика кажется непонятной, простой путь: <strong>запомните число начала</strong> и смотрите в следующем месяце на это же число. В 90% случаев это правильно.
            </p>
          </section>

          {/* Mid CTA */}
          <section>
            <div className="bg-primary-light/40 border border-primary/20 rounded-2xl p-6 md:p-8 text-center">
              <p className="text-foreground text-lg leading-relaxed mb-4">
                Premium приходит с гарантией 5 минут — через{" "}
                <Link href="https://telegram.me/premiumsendbot" target="_blank" className="text-primary hover:underline font-bold">
                  @PremiumSendBot
                </Link>{" "}
                в сумах, тарифы от 1 до 12 месяцев.
              </p>
              <Link
                href="https://telegram.me/premiumsendbot"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-2xl hover:shadow-xl transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                Купить Premium
              </Link>
            </div>
          </section>

          {/* Section 4 — Renewal */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Если предыдущий Premium ещё не закончился, когда начнётся новый?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Ещё один важный нюанс. Допустим, у вас уже есть Premium и он заканчивается через 10 дней. Если купите новый 3-месячный Premium — старый срок не теряется, а <strong>новый срок прибавляется к окончанию старого</strong>.
            </p>

            <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm mb-4">
              <p className="text-foreground font-bold mb-2">Конкретный пример:</p>
              <ul className="text-sm text-muted leading-relaxed space-y-2 list-disc list-inside">
                <li>Текущая дата: <strong>20 апреля</strong></li>
                <li>Окончание текущего Premium: <strong>30 апреля</strong> (осталось 10 дней)</li>
                <li>Покупаете новый 3-месячный Premium</li>
                <li>Новый срок начинается не <strong>30 апреля</strong>, а <strong>1 мая</strong></li>
                <li>Новая дата окончания: <strong>1 августа</strong></li>
                <li>Общий срок: <strong>с 20 апреля до 1 августа</strong> = 103 дня</li>
              </ul>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              Почему это важно? Потому что некоторые пользователи думают &laquo;Premium ещё не закончился, если куплю сейчас — деньги пропадут&raquo;. На самом деле ничего не пропадает — можете продлить в любой момент, и срок просто продлится.
            </p>

            <div className="bg-section-alt rounded-xl p-5">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Полезный совет:</strong> Самый выгодный путь — всегда брать 12-месячный Premium (35 417 сум/мес, на 40% дешевле помесячного).{" "}
                <Link href="/ru/maqolalar/12-oylik-telegram-premium-sotib-olish" className="text-primary hover:underline font-medium">
                  Подробнее о 12-месячном Premium
                </Link>{" "}
                — экономия 282 996 сум в год.
              </p>
            </div>
          </section>

          {/* Section 5 — Gift */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Когда активируется подарок Premium?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              При подарке расчёт срока другой — потому что в процессе участвуют двое: отправитель и получатель. Весь процесс:
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  step: "1",
                  title: "Отправитель оплачивает",
                  desc: "Через @PremiumSendBot вы покупаете Premium на конкретный Telegram username. После подтверждения оплаты Telegram переводит подарок в состояние 'готов'.",
                },
                {
                  step: "2",
                  title: "Получатель получает уведомление",
                  desc: "Telegram отправляет получателю сообщение 'Вам подарили Premium'. Это сообщение остаётся открытым в Telegram и не устаревает — получатель может принять в любое время.",
                },
                {
                  step: "3",
                  title: "Получатель принимает подарок",
                  desc: "Когда нажимает кнопку 'Активировать Premium' в уведомлении — Premium запускается. Именно с этого момента начинается срок Premium.",
                },
                {
                  step: "4",
                  title: "Срок начинается с даты принятия",
                  desc: "Если вы отправили подарок 1 мая, а получатель принял 5 мая — Premium начинается с 5 мая и работает до 5 июня (если 3-месячный — до 5 августа). Потерянные 4 дня пропадают и для отправителя, и для получателя.",
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

            <p className="text-muted leading-relaxed mb-4">
              Именно поэтому при подарке стоит сразу предупредить получателя — &laquo;Я отправил тебе Premium, прими&raquo;. Иначе срок будет ждать, а Premium не запустится.
            </p>

            <p className="text-muted leading-relaxed">
              О подарках Premium подробно —{" "}
              <Link href="/ru/maqolalar/3-oylik-telegram-premium-sovga-qilish" className="text-primary font-semibold hover:underline">
                подарок на 3 месяца
              </Link>{" "}
              и{" "}
              <Link href="/ru/maqolalar/12-oylik-telegram-premium-sovga-qilish" className="text-primary font-semibold hover:underline">
                подарок на 12 месяцев
              </Link>. Напоминание: по правилам Telegram 1-месячный подарок невозможен, доступны только 3, 6 и 12-месячные подарки.
            </p>
          </section>

          {/* Section 6 — Troubleshooting */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Что делать, если Premium не активировался?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              В 99% случаев Premium приходит за 5 минут. Но из-за технических проблем — задержки банка, загруженности серверов или ошибки username — иногда бывают задержки. Пошаговая инструкция:
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">1. Подождите 10-15 минут</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Самое простое решение — терпение. При загруженности сети или задержке на серверах Telegram за 15 минут всё придёт. В это время закройте Telegram и откройте заново.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">2. Проверьте профиль</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Зайдите в настройки Telegram и проверьте, есть ли значок Premium в профиле. Иногда Premium активирован, но badge не отображается — перезапуск Telegram решает это.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">3. Перепроверьте username</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Если при заказе ввели неправильный username, Premium мог уйти другому человеку. Посмотрите историю заказов в боте, на какой username отправлен Premium.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">4. Напишите в поддержку бота</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Если предыдущее не помогло, в @PremiumSendBot в разделе &laquo;Поддержка&raquo; отправьте чек оплаты и Telegram username. Оператор проверит вручную и быстро решит. Поддержка отвечает на русском.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">5. Гарантия возврата денег</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Если по техническим причинам Premium не пришёл и проблему не удалось решить — оплаченная сумма возвращается полностью. Эта гарантия официально предоставлена Premium Send.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Большинство пользователей получают Premium за 1-2 минуты. Но если возникла проблема — без паники, в любом случае есть решение. О покупке на надёжном сервисе —{" "}
              <Link href="/ru/maqolalar/telegram-premium-eng-arzon-qayerdan-sotib-olish" className="text-primary font-semibold hover:underline">
                где Telegram Premium дешевле всего
              </Link>.
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
                  q: "Когда активируется Telegram Premium после оплаты?",
                  a: "Через Premium Send Telegram Premium активируется автоматически за 1-5 минут после подтверждения оплаты. Самый долгий случай — 10-15 минут с учётом банка и обработки Telegram. Если за 15 минут не пришло — отправьте чек в поддержку бота.",
                },
                {
                  q: "Срок Premium считается с даты оплаты или с даты активации?",
                  a: "Срок Premium считается с даты активации Telegram, а не с даты оплаты. Разница 5-15 минут не входит в срок — вы получаете полный период.",
                },
                {
                  q: "Срок Premium это 30 дней или календарный месяц?",
                  a: "Срок Telegram Premium считается по календарным месяцам. Например, активированный 15 января Premium на 1 месяц действует до 15 февраля. Даже если в феврале 28 дней, 31 января привязывается к 28 февраля (потому что 31 в феврале нет).",
                },
                {
                  q: "Если предыдущий Premium ещё не закончился, когда начнётся новый?",
                  a: "Новый купленный срок прибавляется к окончанию предыдущего. Если осталось 10 дней и купите 3-месячный — итого около 100 дней Premium. Никакой срок не теряется.",
                },
                {
                  q: "Когда активируется подарок Premium?",
                  a: "Подарок активируется в момент принятия получателем. Срок Premium считается не с момента отправки, а с момента принятия. Предупредите получателя — иначе Premium ждёт.",
                },
                {
                  q: "Когда заканчивается 12-месячный Premium?",
                  a: "12-месячный Premium заканчивается ровно через год. Например, активированный 30 апреля 2026 закончится 30 апреля 2027. В високосный год работает на день дольше.",
                },
                {
                  q: "Что делать, если Premium не активировался?",
                  a: "Подождите 10-15 минут, проверьте профиль, подтвердите правильность username. Если не помогло — отправьте чек в поддержку @PremiumSendBot. Если Premium не приходит — деньги возвращаются полностью.",
                },
                {
                  q: "Возвращаются ли деньги при отмене Premium в середине срока?",
                  a: "Нет. Premium через Premium Send основан на разовой оплате — нет автопродления, и срок нельзя отменить в середине. Premium работает до конца срока, потом автоматически останавливается.",
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
                Срок Premium в цифрах
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">2-5 минут</p>
                  <p className="text-sm text-muted">От оплаты до активации</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">Календарь</p>
                  <p className="text-sm text-muted">28-31 дней по месяцу</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">Гарантия</p>
                  <p className="text-sm text-muted">Не пришло — деньги возвращаются</p>
                </div>
              </div>
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
                  Telegram Premium активируется за <strong className="text-white">2-5 минут</strong>, срок считается по <strong className="text-white">календарным месяцам</strong>. При продлении ничего не теряется, подарок начинается с момента принятия. Premium Send работает с гарантией 5 минут и возвратом денег.
                </p>
                <Link
                  href="https://telegram.me/premiumsendbot"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  Купить Premium
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
