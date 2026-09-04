import type { Metadata } from "next";
import Link from "next/link";
import { ogBaseRu } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title:
    "Почему международная карта отклоняет оплату Telegram Premium — причина и решение",
  description:
    "Карта блокируется при международном платеже или выдаёт 'Card declined'? Это не случайность. Несовпадение BIN/страны, код телефона и страна карты, политика банка — технические причины и способ полностью обойти проблему, оплатив в сумах.",
  keywords: [
    "международная карта заблокирована telegram premium",
    "карта отклонена telegram premium",
    "telegram premium карта не работает причина",
    "несовпадение BIN и страны",
    "telegram premium международный платёж",
    "card declined telegram причина",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/ru/maqolalar/nega-xalqaro-karta-telegram-premiumni-rad-etadi",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/nega-xalqaro-karta-telegram-premiumni-rad-etadi",
      ru: "https://premiumsend.uz/ru/maqolalar/nega-xalqaro-karta-telegram-premiumni-rad-etadi",
      "x-default":
        "https://premiumsend.uz/maqolalar/nega-xalqaro-karta-telegram-premiumni-rad-etadi",
    },
  },
  openGraph: {
    ...ogBaseRu,
    title:
      "Почему международная карта отклоняет оплату Telegram Premium — техническая причина и решение",
    description:
      "Блокировка карты почти никогда не означает 'нет денег'. BIN, код телефона и политика банка — 4 основные причины и способ полностью обойти проблему, оплатив в сумах.",
    url: "https://premiumsend.uz/ru/maqolalar/nega-xalqaro-karta-telegram-premiumni-rad-etadi",
    type: "article",
    publishedTime: "2026-09-03",
  },
};

export default function ArticleXalqaroKartaRadEtadiRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Почему международная карта отклоняет оплату Telegram Premium — причина и решение",
    description:
      "Технические причины, по которым международная карта может быть отклонена при оплате Telegram Premium (несовпадение BIN, код телефона, политика банка), и способ полностью обойти эту проблему через локальную оплату в сумах.",
    datePublished: "2026-09-03",
    dateModified: "2026-09-03",
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
      "https://premiumsend.uz/ru/maqolalar/nega-xalqaro-karta-telegram-premiumni-rad-etadi",
    inLanguage: "ru",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Что такое BIN и почему он блокирует платёж?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BIN (Bank Identification Number) — первые 6-8 цифр номера карты, определяющие банк и страну выпуска. Многие международные платёжные системы автоматически блокируют или дополнительно проверяют транзакции с BIN определённых стран — это не персональное решение, а общее правило для целого диапазона BIN, поэтому платёж может быть отклонён даже при достаточном балансе.",
        },
      },
      {
        "@type": "Question",
        name: "Мой номер телефона и карта из одной страны, почему всё равно отклоняет?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Если используется VPN или приложение установлено в другом регионе, система сравнивает IP-адрес, код телефона и страну карты. Если они не совпадают, это расценивается как дополнительный фактор риска, и платёж часто отклоняется автоматически, даже если все данные введены верно.",
        },
      },
      {
        "@type": "Question",
        name: "У меня Visa или Mastercard, почему всё равно 'Card declined'?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Членства в международной сети недостаточно — сам банк может ограничивать трансграничные транзакции, карта может не поддерживать рекуррентные платежи, или предыдущие неудачные попытки уже отметили транзакцию как рискованную. Всё это решается банком и платёжным процессором, независимо от баланса карты.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли оплатить напрямую международным платежом через Uzcard или Humo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет — Uzcard и Humo являются внутренними (домашними) платёжными системами Узбекистана и не подключены к международным сетям вроде Visa или Mastercard. Поэтому они технически не могут принять официальный международный платёжный запрос Telegram — это не ошибка, а архитектурное ограничение.",
        },
      },
      {
        "@type": "Question",
        name: "Как оплата через реселлера полностью обходит эту проблему?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Оплата через реселлера, например PremiumSend, проходит как внутренняя транзакция Uzcard, Humo, Click или Payme в пределах Узбекистана — сверка BIN/страны и международная антифрод-проверка вообще не задействуются, так как транзакция не пересекает границу. После подтверждения оплаты Premium подключается через официальный механизм bulk-gift Telegram — это настоящая, официальная подписка, локализован только этап оплаты.",
        },
      },
      {
        "@type": "Question",
        name: "Безопасно ли вводить данные карты в бот реселлера?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Надёжный реселлер никогда не запрашивает номер карты, CVV или пароль внутри бота — оплата проходит через собственное официальное приложение Click, Payme, Uzcard или Humo, а бот лишь показывает сумму и реквизиты. Данные карты нигде не сохраняются.",
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
        name: "Почему международная карта отклоняет",
        item: "https://premiumsend.uz/ru/maqolalar/nega-xalqaro-karta-telegram-premiumni-rad-etadi",
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
          Почему международная карта отклоняет
        </span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">
              Проблемы с оплатой
            </span>
            <time className="text-xs text-muted" dateTime="2026-09-03">
              3 сентября 2026
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Почему международная карта отклоняет оплату Telegram Premium —
            причина и решение
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-sm font-bold text-primary mb-2">КОРОТКО</p>
            <p className="text-foreground leading-relaxed font-medium">
              Блокировка карты почти никогда не означает &laquo;нет
              денег&raquo;. 4 основные причины:{" "}
              <strong>несовпадение BIN/страны</strong>,{" "}
              <strong>разница кода телефона и страны карты</strong> (особенно
              при VPN),{" "}
              <strong>сам банк закрыл международные платежи</strong> и{" "}
              <strong>Uzcard/Humo не подключены к международной сети</strong>.
              Всё это — технические ограничения платёжной системы, не связанные
              с самим Premium. Решение — локальная оплата в сумах, которая
              вообще не пересекает международную границу.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            «Card declined», «Payment not supported in your region»,
            «Authentication failed» — всё это сводится к одному корню:
            международные платёжные системы очень осторожно проверяют
            трансграничные транзакции.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Ниже — как работает эта проверка, какие факторы блокируют платёж и
            самый простой способ из Узбекистана полностью обойти эту проблему.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Как международные платёжные системы проверяют карту?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Первые 6-8 цифр номера карты — это{" "}
              <strong>BIN (Bank Identification Number)</strong>, который
              указывает банк и страну выпуска. Международные платёжные
              процессоры для защиты от мошенничества автоматически блокируют
              или дополнительно проверяют транзакции с BIN определённых стран
              — это правило для целого диапазона BIN, а не решение против вас
              лично.
            </p>
            <p className="text-muted leading-relaxed">
              Дополнительно система сравнивает IP-адрес, код номера телефона и
              страну выпуска карты. Если они не совпадают (например, при
              использовании VPN), это расценивается как фактор риска, и платёж
              часто отклоняется сразу — даже при достаточном балансе.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Какие факторы блокируют карту при оплате Telegram/App Store?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Оплата Telegram Premium проходит через App Store, Google Play
              или международный платёжный процессор — то есть применяются
              стандартные правила карточной индустрии. Самые частые
              блокирующие факторы:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto mb-6">
              <table className="w-full text-sm min-w-[560px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">Фактор</th>
                    <th className="p-4 text-left font-bold">Почему блокирует</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Фильтр BIN/страны</td>
                    <td className="p-4 text-muted">
                      Общая блокировка или доп. проверка для BIN определённых стран
                    </td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Несовпадение IP/кода телефона</td>
                    <td className="p-4 text-muted">
                      VPN или другой регион приложения расценивается как доп. риск
                    </td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Ограничение банка по cross-border</td>
                    <td className="p-4 text-muted">
                      Банк мог полностью закрыть международные транзакции
                    </td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Не поддерживается recurring-платёж</td>
                    <td className="p-4 text-muted">
                      Некоторые карты не рассчитаны на автоматические подписки
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Предыдущая неудачная попытка</td>
                    <td className="p-4 text-muted">
                      Подряд отклонённые попытки помечаются как фактор риска
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-muted leading-relaxed">
              Практический список кодов ошибок и быстрые шаги устранения — в{" "}
              <Link
                href="/ru/maqolalar/telegram-premium-muammolari-xatoliklari"
                className="text-primary font-semibold hover:underline"
              >
                статье «Проблемы и ошибки Premium»
              </Link>
              , а здесь мы разбираем именно <strong>почему</strong> так
              происходит.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Почему Uzcard и Humo вообще не работают в международных платежах?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Uzcard и Humo — <strong>внутренние (домашние)</strong> платёжные
              системы Узбекистана. Они не подключены к международным сетям
              вроде Visa или Mastercard, поэтому по своей природе работают
              только внутри Узбекистана. Это не ошибка и не сбой банка, а
              архитектурное ограничение: международный платёжный запрос
              технически не доходит до них на уровне сети.
            </p>
            <p className="text-muted leading-relaxed">
              Поэтому в окне оплаты официального @PremiumBot или App
              Store/Google Play выбрать Uzcard или Humo невозможно — только
              международные Visa/Mastercard. Подробное сравнение — в{" "}
              <Link
                href="/ru/maqolalar/premiumbot-ishlamayapti-premium-qayerdan-sotib-olish"
                className="text-primary font-semibold hover:underline"
              >
                статье «PremiumBot не работает»
              </Link>
              .
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              У меня Visa или Mastercard, почему всё равно отклоняет?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Членства в международной сети недостаточно. Даже с Visa/Mastercard
              платёж может быть отклонён по следующим причинам:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  Банк сам ограничил
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Многие банки по умолчанию держат международные транзакции
                  закрытыми — клиент должен отдельно их открыть.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  Не пришёл 3D Secure
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  SMS или push-подтверждение задержалось или не пришло —
                  платёж отменяется с ошибкой «Authentication failed».
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  Recurring billing не поддерживается
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Подписка списывается повторно как автоплатёж — некоторые
                  карты отклоняют это с первой попытки.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  Повышенный балл риска
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Несколько неудачных попыток подряд помечают транзакцию как
                  «подозрительную» и блокируют последующие попытки.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Ничего из этого не связано с самим Premium — все решения
              принимаются банком/процессором в цепочке платежа.
            </p>
          </section>

          {/* Mid CTA */}
          <section>
            <div className="bg-primary-light/40 border border-primary/20 rounded-2xl p-6 md:p-8 text-center">
              <p className="text-foreground text-lg leading-relaxed mb-4">
                Единственный способ вообще не пересекать международную
                границу — локальная оплата.{" "}
                <strong>@PremiumSendBot</strong> принимает Uzcard, Humo, Click
                или Payme в сумах — проверка BIN и антифрод не задействуются.
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
              Как оплата через реселлера полностью обходит эту проблему?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Оплата через местного реселлера, например PremiumSend, проходит
              как <strong>внутренняя</strong> транзакция Uzcard, Humo, Click
              или Payme в пределах Узбекистана. При этом:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Сверка BIN/страны вообще не задействуется — транзакция не пересекает границу.",
                "Исчезает проблема несовпадения кода телефона и страны карты — обе стороны в Узбекистане.",
                "Ограничение банка по cross-border не срабатывает, так как это не международный платёж.",
                "Оплата проходит в собственном официальном приложении Click/Payme/Uzcard/Humo — номер карты в бот не вводится.",
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

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Как выбрать реселлера, если решил пойти этим путём?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              При выборе локальной оплаты важно проверить и самого реселлера —
              боты, запрашивающие данные карты или не имеющие оферты/канала
              связи, могут оказаться мошенническими. Полные критерии проверки
              и красные флаги — в{" "}
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
                  q: "Что такое BIN и почему он блокирует платёж?",
                  a: "BIN — первые 6-8 цифр номера карты, определяющие банк и страну выпуска. Платёжные системы автоматически блокируют или проверяют транзакции с BIN определённых стран — это общее правило, не персональное решение.",
                },
                {
                  q: "Мой номер телефона и карта из одной страны, почему всё равно отклоняет?",
                  a: "При VPN или другом регионе приложения система сравнивает IP, код телефона и страну карты. Несовпадение расценивается как риск, и платёж часто отклоняется автоматически.",
                },
                {
                  q: "У меня Visa или Mastercard, почему всё равно 'Card declined'?",
                  a: "Членства в сети недостаточно — банк может ограничивать cross-border платежи, карта не поддерживать recurring billing, или предыдущие неудачные попытки уже пометили транзакцию как рискованную.",
                },
                {
                  q: "Можно ли оплатить напрямую через Uzcard или Humo?",
                  a: "Нет — это внутренние платёжные системы Узбекистана, не подключённые к Visa/Mastercard. Технически они не могут принять международный платёжный запрос Telegram.",
                },
                {
                  q: "Как оплата через реселлера полностью обходит эту проблему?",
                  a: "Оплата проходит как внутренняя транзакция Uzcard/Humo/Click/Payme в пределах Узбекистана — сверка BIN и антифрод-проверка не задействуются. После оплаты Premium подключается через официальный bulk-gift.",
                },
                {
                  q: "Безопасно ли вводить данные карты в бот реселлера?",
                  a: "Надёжный реселлер не запрашивает номер карты или CVV в боте — оплата идёт через официальное приложение Click/Payme/Uzcard/Humo, бот лишь показывает сумму и реквизиты.",
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
                  Блокировка карты — техническая, системная проблема, которую
                  вы не можете исправить. Решение — обойти её:{" "}
                  <strong className="text-white">@PremiumSendBot</strong>, в
                  сумах, местной картой.{" "}
                  <strong className="text-white">1 месяц 59 000</strong>,{" "}
                  <strong className="text-white">12 месяцев 425 000 сум</strong>{" "}
                  — Premium за 3-5 минут.
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
