import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Проблемы и ошибки Telegram Premium: 12 вопросов-ответов и решения",
  description:
    "Telegram Premium не работает, не активировался, внезапно пропал или функции не работают? Самые частые проблемы и точные решения — оплата, активация, окончание подписки, подарок и синхронизация устройств.",
  keywords: [
    "telegram premium не работает",
    "проблемы telegram premium",
    "telegram premium не активировался",
    "telegram premium пропал",
    "telegram premium ошибка",
    "функции telegram premium не работают",
    "telegram premium закончился",
    "отменить telegram premium",
    "telegram premium не синхронизируется",
    "telegram premium не пришёл",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/ru/maqolalar/telegram-premium-muammolari-xatoliklari",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/telegram-premium-muammolari-xatoliklari",
      ru: "https://premiumsend.uz/ru/maqolalar/telegram-premium-muammolari-xatoliklari",
      "x-default":
        "https://premiumsend.uz/maqolalar/telegram-premium-muammolari-xatoliklari",
    },
  },
  openGraph: {
    title:
      "Проблемы и ошибки Telegram Premium — полное руководство по решениям",
    description:
      "Premium не активировался, пропал или функции не работают? 12 самых частых проблем и точные пошаговые решения.",
    url: "https://premiumsend.uz/ru/maqolalar/telegram-premium-muammolari-xatoliklari",
    type: "article",
    publishedTime: "2026-06-02",
  },
};

export default function ArticleMuammolarXatoliklarRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Проблемы и ошибки Telegram Premium: 12 вопросов-ответов и решения",
    description:
      "Самые частые проблемы с Telegram Premium — неактивация, неработающие функции, окончание подписки, подарок и синхронизация — и их точные решения.",
    datePublished: "2026-06-02",
    dateModified: "2026-06-02",
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
      "https://premiumsend.uz/ru/maqolalar/telegram-premium-muammolari-xatoliklari",
    inLanguage: "ru",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Оплата прошла, но Telegram Premium не активировался — что делать?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Сначала полностью закройте и заново откройте приложение Telegram, затем проверьте Настройки (Settings) → Telegram Premium — Premium обычно активируется за несколько минут, иногда за 5-10 минут. Если через час не активировался: обновите приложение до последней версии, проверьте интернет и перезагрузите устройство. Купившие официально (App Store/Google Play) обращаются в саппорт @PremiumBot с чеком. Если покупали через PremiumSend, отправьте подтверждение оплаты на @premiumsend_admin — вопрос решается быстрее, так как оплата шла местной картой.",
        },
      },
      {
        "@type": "Question",
        name: "Telegram Premium внезапно пропал — почему?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Самая частая причина — закончился срок подписки. По правилам Telegram вы пользуетесь функциями Premium до конца текущего платёжного периода, после чего они отключаются. Если включено автопродление (через App Store/Google Play), но на карте недостаточно средств — продление не происходит и Premium заканчивается. Другая причина: завершённая сессия на другом устройстве или сбой кэша приложения. Сначала проверьте срок действия в Настройки → Telegram Premium.",
        },
      },
      {
        "@type": "Question",
        name: "Какие функции и данные теряются после окончания Premium?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "По официальным правилам Telegram ничего не удаляется — скрывается только то, что превышает бесплатные лимиты: дополнительные username сохраняются, но при наличии более 10 нельзя создать новый; каналы и папки остаются на месте, но нельзя вступать в новые каналы или добавлять чаты в папки; первые 10 папок работают, остальные блокируются; сохранённые GIF свыше 200 скрываются; первые 70 символов в описании профиля видны, остальное скрыто до повторной подписки. После повторной подписки всё возвращается.",
        },
      },
      {
        "@type": "Question",
        name: "Премиум эмодзи, стикеры или загрузка файлов 4 ГБ не работают — как исправить?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "1) Проверьте, активен ли Premium (Настройки → Telegram Premium). 2) Обновите приложение до последней версии — в старых версиях новые функции Premium могут не работать. 3) Полностью закройте и заново откройте Telegram (чтобы форсировать синхронизацию). 4) Функции Premium синхронизируются на всех устройствах автоматически — если не видны на одном, обновите приложение именно на нём. 5) Премиум эмодзи и стикеры видят и обычные пользователи (в статичном виде) — это не ошибка.",
        },
      },
      {
        "@type": "Question",
        name: "Premium есть на одном устройстве, но не отображается на другом — почему?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Telegram Premium привязан ко всему аккаунту и должен синхронизироваться на всех устройствах автоматически. Если не отображается на одном: обновите Telegram на этом устройстве до последней версии, полностью закройте и откройте заново, проверьте интернет. Чаще всего причина — старая версия приложения или задержка синхронизации. Подождите несколько минут и зайдите снова.",
        },
      },
      {
        "@type": "Question",
        name: "Как отменить подписку Telegram Premium или остановить автоплатёж?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Зависит от того, где оформляли подписку: 1) В приложении Telegram — следуйте инструкциям в разделе Настройки → Telegram Premium. 2) Через iPhone (Apple ID) — Настройки устройства → Apple ID → Подписки (Subscriptions). 3) Через Google Play — Play Market → Подписки. После отмены будущие платежи прекращаются, но Premium работает до конца текущего периода. У подписки через реселлера (например PremiumSend) автоплатежа нет вообще — она сама заканчивается по истечении срока.",
        },
      },
      {
        "@type": "Question",
        name: "Подаренный мне Telegram Premium не пришёл или не отображается — что делать?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Подаренный Premium обычно активируется сразу, и в аккаунте появляется значок звёздочки. Если не видно: обновите приложение и откройте заново, проверьте Настройки → Telegram Premium. Отправитель может быть анонимным (по умолчанию), поэтому не видеть, кто подарил — нормально. Если подарок якобы отправлен, но Premium не активировался — попросите отправителя подтвердить, что подарок действительно отправлен и оплата прошла.",
        },
      },
      {
        "@type": "Question",
        name: "Почему оплата не проходит или появляется ошибка 'Card declined'?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Официальный @PremiumBot и App Store не принимают узбекские карты Uzcard/Humo — только международные Visa/Mastercard. Даже с Visa банк может закрыть международные операции, не прийти SMS 3D Secure или появиться ошибка 'Request to payment provider has expired'. Антифрод Telegram отклоняет оплату, если код страны номера телефона и страна выпуска карты не совпадают (например через VPN). Самое простое решение в Узбекистане — реселлер, работающий с Uzcard, Humo, Click или Payme в сумах.",
        },
      },
      {
        "@type": "Question",
        name: "Telegram Premium доступен в Узбекистане или ограничен?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Telegram Premium в Узбекистане доступен — функции работают полностью. Ограничение только на этапе оплаты: официальный бот и магазины приложений не принимают местные карты Uzcard/Humo, а цена в долларах. То есть проблема не в самом Premium, а в способе оплаты. Чтобы купить в сумах местной картой, используют реселлера (например PremiumSend).",
        },
      },
      {
        "@type": "Question",
        name: "Если продлить подписку Premium, с какого момента начнётся срок?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Если текущая подписка ещё не закончилась и вы добавляете новый срок, он обычно добавляется к существующему — то есть новый период начинается после окончания старого, и дни не теряются. Точную ситуацию проверьте по дате в Настройки → Telegram Premium. При продлении через реселлера удобнее активировать новый срок ближе к окончанию текущего или после него.",
        },
      },
      {
        "@type": "Question",
        name: "Что делать, если возникла проблема с Premium, купленным у реселлера?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Premium от надёжного реселлера — тоже официальная подписка Telegram, поэтому решения выше (обновить приложение, переоткрыть, проверить срок) работают одинаково. При вопросах с активацией или сроком сохраните подтверждение оплаты и обратитесь в канал связи реселлера (для PremiumSend — @premiumsend_admin). У надёжного реселлера есть сайт, оферта и канал связи — это главный признак, отличающий его от мошенника.",
        },
      },
      {
        "@type": "Question",
        name: "Как проверить статус Premium?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Откройте Telegram → Настройки (Settings) → Telegram Premium. Там показано, активна ли подписка и срок действия. Если рядом с именем виден значок звёздочки — Premium активен. Значок можно включить/выключить там же, в Настройки → Telegram Premium.",
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
        name: "Проблемы и ошибки Telegram Premium",
        item: "https://premiumsend.uz/ru/maqolalar/telegram-premium-muammolari-xatoliklari",
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
          Проблемы и ошибки Premium
        </span>
      </nav>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">
              Проблемы и решения
            </span>
            <time className="text-xs text-muted" dateTime="2026-06-02">
              2 июня 2026
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Проблемы и ошибки Telegram Premium: 12 вопросов-ответов и решения
          </h1>

          {/* TL;DR */}
          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-sm font-bold text-primary mb-2">КОРОТКО</p>
            <p className="text-foreground leading-relaxed font-medium">
              Большинство проблем с Telegram Premium сводятся к 4 причинам:{" "}
              <strong>оплата не проходит</strong>,{" "}
              <strong>поздняя активация</strong>,{" "}
              <strong>окончание срока подписки</strong> и{" "}
              <strong>старая версия приложения</strong>. В большинстве случаев
              решение простое: обновите приложение, полностью закройте и откройте
              заново, проверьте срок в разделе{" "}
              <em>Настройки → Telegram Premium</em>. Если оплата не проходит в
              Узбекистане — это проблема не Premium, а того, что местная карта не
              работает в международных платежах.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            «Premium не активировался», «внезапно пропал», «не работают эмодзи» —
            это самые частые проблемы пользователей Telegram Premium. Почти все
            они решаются за несколько минут, если знать точную причину.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Ниже мы разбили проблемы по типам и к каждой дали точное пошаговое
            решение. Эта статья — полное руководство по устранению неполадок,
            опирающееся на официальные правила Telegram.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 — Классификация */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              На какие типы делятся проблемы Telegram Premium?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Правильно отнести проблему к категории — самый быстрый путь к
              решению. Проблемы Premium обычно делятся на 5 категорий:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto mb-6">
              <table className="w-full text-sm min-w-[560px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">Категория</th>
                    <th className="p-4 text-left font-bold">Признак</th>
                    <th className="p-4 text-left font-bold">Основное решение</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Оплата</td>
                    <td className="p-4 text-muted">
                      Карта не принимается, ошибка
                    </td>
                    <td className="p-4 text-primary font-medium">
                      Местная карта в сумах (реселлер)
                    </td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Активация</td>
                    <td className="p-4 text-muted">
                      Оплата прошла, Premium не пришёл
                    </td>
                    <td className="p-4 text-primary font-medium">
                      Переоткройте приложение, подождите
                    </td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Функция</td>
                    <td className="p-4 text-muted">
                      Эмодзи, стикеры, 4 ГБ не работают
                    </td>
                    <td className="p-4 text-primary font-medium">
                      Обновите приложение
                    </td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Окончание подписки</td>
                    <td className="p-4 text-muted">Premium внезапно пропал</td>
                    <td className="p-4 text-primary font-medium">
                      Проверьте срок, продлите
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Синхронизация</td>
                    <td className="p-4 text-muted">
                      Есть на одном, нет на другом устройстве
                    </td>
                    <td className="p-4 text-primary font-medium">
                      Обновите и зайдите заново
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-muted leading-relaxed">
              Теперь разберём каждую категорию отдельно — начиная с самой частой.
            </p>
          </section>

          {/* Section 2 — Оплата */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Оплата не проходит или выдаёт ошибку — что делать?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Это самая частая проблема в Узбекистане. Официальный @PremiumBot и
              App Store принимают только международные Visa/Mastercard — Uzcard,
              Humo, Click и Payme не работают. Даже с Visa могут появляться такие
              ошибки:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-2 bg-section-alt p-4 font-bold text-sm">
                <div>Текст ошибки</div>
                <div>Причина</div>
              </div>
              <div className="grid grid-cols-2 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Card declined</div>
                <div className="text-muted">
                  Банк отклонил международный платёж
                </div>
              </div>
              <div className="grid grid-cols-2 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">
                  Payment not supported in your region
                </div>
                <div className="text-muted">Региональное ограничение</div>
              </div>
              <div className="grid grid-cols-2 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">
                  Request to payment provider has expired
                </div>
                <div className="text-muted">
                  Истекло время платёжного провайдера
                </div>
              </div>
              <div className="grid grid-cols-2 p-4 items-center text-sm">
                <div className="font-medium">Authentication failed</div>
                <div className="text-muted">Не пришёл SMS 3D Secure</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Всё это связано со способом оплаты, а не с самим Premium. Самое
              простое решение — реселлер, работающий с Uzcard, Humo, Click или
              Payme в сумах. Полный разбор ошибок оплаты и альтернатив — в{" "}
              <Link
                href="/ru/maqolalar/premiumbot-ishlamayapti-premium-qayerdan-sotib-olish"
                className="text-primary font-semibold hover:underline"
              >
                статье «PremiumBot не работает»
              </Link>
              .
            </p>
          </section>

          {/* Section 3 — Активация */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Оплата прошла, но Premium не активировался — что делать?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Premium обычно активируется за несколько минут. Если задержка,
              выполните шаги по порядку:
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  step: "1",
                  title: "Полностью закройте и откройте приложение",
                  desc: "Закройте Telegram из памяти (через список недавних приложений) и запустите заново — это форсирует синхронизацию.",
                },
                {
                  step: "2",
                  title: "Проверьте Настройки → Telegram Premium",
                  desc: "Если подписка активна и виден срок — Premium подключён. Рядом с профилем должен появиться значок звёздочки.",
                },
                {
                  step: "3",
                  title: "Обновите приложение и проверьте интернет",
                  desc: "Старая версия или слабый интернет задерживают активацию. Обновите через App Store / Play Market.",
                },
                {
                  step: "4",
                  title: "Подождите 5-10 минут, затем обратитесь в саппорт",
                  desc: "Купившие официально прикрепляют чек в саппорт @PremiumBot. Купившие через реселлера отправляют подтверждение оплаты в канал связи.",
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
              Подробнее о том, за сколько обычно активируется Premium — в{" "}
              <Link
                href="/ru/maqolalar/telegram-premium-qachon-faollashadi"
                className="text-primary font-semibold hover:underline"
              >
                статье «Когда активируется Premium»
              </Link>
              .
            </p>
          </section>

          {/* Section 4 — Пропал / закончился */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Telegram Premium внезапно пропал — каковы причины?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Самая частая причина «внезапного исчезновения» Premium — окончание
              срока подписки. По правилам Telegram вы пользуетесь функциями
              Premium <strong>до конца текущего платёжного периода</strong>,
              после чего они отключаются. Возможные причины:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  Срок закончился
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Период подписки завершился и не был продлён. Проверьте дату в
                  Настройки → Telegram Premium.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  Автоплатёж не прошёл
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Включено автопродление через App Store/Google Play, но на карте
                  не хватило средств — подписка не продлилась.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  Старое приложение / сбой кэша
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Premium на самом деле активен, но не отображается из-за старой
                  версии или кэша. Обновите и откройте заново.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  Завершено на другом устройстве
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Если аккаунт на нескольких устройствах, синхронизация может
                  задержаться. Подождите несколько минут и зайдите заново.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Если срок закончился, решение — продление. Через{" "}
              <Link
                href="/ru"
                className="text-primary font-semibold hover:underline"
              >
                PremiumSend
              </Link>{" "}
              в сумах:{" "}
              <Link href="/ru/1-oylik" className="text-primary hover:underline">
                1 месяц 59 000
              </Link>
              ,{" "}
              <Link href="/ru/3-oylik" className="text-primary hover:underline">
                3 месяца 175 000
              </Link>
              ,{" "}
              <Link href="/ru/12-oylik" className="text-primary hover:underline">
                12 месяцев 425 000 сум
              </Link>
              .
            </p>
          </section>

          {/* Section 5 — Что теряется после окончания */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Какие функции теряются после окончания Premium?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              По официальным правилам Telegram{" "}
              <strong>ничего не удаляется полностью</strong> — лишь скрывается то,
              что превышает бесплатный лимит. После повторной подписки всё
              возвращается:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto mb-6">
              <table className="w-full text-sm min-w-[520px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">Элемент</th>
                    <th className="p-4 text-left font-bold">
                      Что происходит после окончания Premium
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Username</td>
                    <td className="p-4 text-muted">
                      Сохраняются, но при наличии более 10 нельзя создать новый
                    </td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Каналы и группы</td>
                    <td className="p-4 text-muted">
                      Остаются на месте, но нельзя вступать в новые каналы
                    </td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Папки</td>
                    <td className="p-4 text-muted">
                      Первые 10 работают, остальные блокируются
                    </td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Сохранённые GIF</td>
                    <td className="p-4 text-muted">Свыше 200 скрываются</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Описание профиля</td>
                    <td className="p-4 text-muted">
                      Первые 70 символов видны, остальное скрыто
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-muted leading-relaxed">
              Полная таблица возможностей и лимитов Premium — в{" "}
              <Link
                href="/ru/maqolalar/telegram-premium-4gb-fayl-kanal-guruh-limitlari"
                className="text-primary font-semibold hover:underline"
              >
                статье о 4 ГБ и лимитах
              </Link>
              .
            </p>
          </section>

          {/* Section 6 — Функции не работают */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Эмодзи, стикеры или загрузка 4 ГБ не работают — как исправить?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Если при активном Premium функции не работают, почти всегда причина
              — <strong>старая версия приложения или задержка синхронизации</strong>.
              Проверьте по порядку:
            </p>

            <ul className="space-y-3 mb-6">
              {[
                "Подтвердите, что Premium ещё активен (Настройки → Telegram Premium).",
                "Обновите приложение до последней версии — новые функции не работают на старой.",
                "Полностью закройте и откройте Telegram (чтобы форсировать синхронизацию).",
                "Если не видно на одном устройстве, обновите приложение именно на нём.",
                "Премиум эмодзи и стикеры видят и обычные пользователи — это не ошибка, так и работает.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-muted leading-relaxed">
              Функции Premium привязаны ко всему аккаунту и синхронизируются на
              всех устройствах автоматически — поэтому в большинстве случаев
              обновление приложения решает проблему.
            </p>
          </section>

          {/* Section 7 — Отмена */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Как отменить подписку или остановить автоплатёж?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Способ отмены зависит от того, где вы оформляли подписку. После
              отмены будущие платежи прекращаются, но Premium работает до конца
              текущего периода:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  В приложении Telegram
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Следуйте инструкциям в разделе Настройки → Telegram Premium.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  iPhone (Apple ID)
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Настройки → Apple ID → Подписки (Subscriptions) → Telegram →
                  отменить.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Google Play</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Play Market → Подписки (Subscriptions) → Telegram → отменить.
                </p>
              </div>
            </div>

            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5">
              <p className="text-foreground leading-relaxed">
                <strong>Примечание:</strong> у подписки через реселлера, такого
                как PremiumSend, автоплатежа <strong>нет вообще</strong> — она
                сама заканчивается по истечении срока. Не нужно отдельно отменять
                или переживать, что «забыл отключить подписку».
              </p>
            </div>
          </section>

          {/* Section 8 — Подарок */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Подаренный мне Premium не пришёл или не отображается — что делать?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Подаренный Premium обычно активируется сразу, и в аккаунте
              появляется значок звёздочки. Если не видно:
            </p>

            <ul className="space-y-3 mb-6">
              {[
                "Обновите приложение и полностью закройте и откройте заново.",
                "Проверьте подписку и срок в Настройки → Telegram Premium.",
                "Отправитель может быть анонимным (по умолчанию) — не видеть, кто подарил, нормально.",
                "Если Premium не активировался, попросите отправителя подтвердить, что подарок отправлен и оплата прошла.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-muted leading-relaxed">
              Полное руководство по отправке Premium в подарок (3, 6 и 12 месяцев)
              — в{" "}
              <Link
                href="/ru/maqolalar/telegram-premium-tugilgan-kun-sovgasi"
                className="text-primary font-semibold hover:underline"
              >
                статье о подарке на день рождения
              </Link>
              .
            </p>
          </section>

          {/* Mid CTA */}
          <section>
            <div className="bg-primary-light/40 border border-primary/20 rounded-2xl p-6 md:p-8 text-center">
              <p className="text-foreground text-lg leading-relaxed mb-4">
                Если проблема в оплате или окончании срока — самое быстрое решение{" "}
                <strong>@PremiumSendBot</strong>. Uzcard, Humo, Click, Payme — всё
                в сумах. Premium активируется за 3-5 минут.
              </p>
              <Link
                href="https://telegram.me/premiumsendbot"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-2xl hover:shadow-xl transition-all"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                Купить через PremiumSend
              </Link>
            </div>
          </section>

          {/* Section 9 — Быстрый чек-лист */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Быстрый чек-лист — что сделать в первую очередь?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Какой бы ни была проблема, эти 5 шагов решают большинство
              неполадок:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-[40px_1fr] gap-0">
                {[
                  "Полностью закройте и откройте приложение",
                  "Обновите приложение до последней версии",
                  "Проверьте срок в Настройки → Telegram Premium",
                  "Проверьте интернет и перезагрузите устройство",
                  "Если проблема в оплате/сроке — продлите через реселлера в сумах",
                ].map((item, i) => (
                  <div key={i} className="contents">
                    <div
                      className={`flex items-center justify-center font-bold text-primary ${
                        i < 4 ? "border-b border-card-border" : ""
                      } py-4`}
                    >
                      {i + 1}
                    </div>
                    <div
                      className={`flex items-center text-sm text-foreground/80 ${
                        i < 4 ? "border-b border-card-border" : ""
                      } py-4 pr-4`}
                    >
                      {item}
                    </div>
                  </div>
                ))}
              </div>
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
                  q: "Оплата прошла, но Telegram Premium не активировался — что делать?",
                  a: "Сначала полностью закройте и откройте приложение, затем проверьте Настройки → Telegram Premium — Premium обычно активируется за несколько минут. Если через час нет: обновите приложение, проверьте интернет, перезагрузите устройство. Купившие официально обращаются в саппорт @PremiumBot с чеком; купившие через PremiumSend отправляют подтверждение оплаты на @premiumsend_admin.",
                },
                {
                  q: "Telegram Premium внезапно пропал — почему?",
                  a: "Самая частая причина — закончился срок подписки. Функции Premium доступны до конца текущего платёжного периода, затем отключаются. Если включён автоплатёж, но на карте не хватило средств — продления не будет. Другая причина — старое приложение или сбой кэша. Проверьте срок в Настройки → Telegram Premium.",
                },
                {
                  q: "Какие функции и данные теряются после окончания Premium?",
                  a: "Ничего не удаляется — скрывается лишь превышение бесплатных лимитов: username сохраняются (при наличии более 10 новый не создать); каналы/папки остаются, но вступать в новые нельзя; первые 10 папок работают; GIF свыше 200 скрываются; первые 70 символов описания видны. После повторной подписки всё возвращается.",
                },
                {
                  q: "Премиум эмодзи, стикеры или 4 ГБ не работают — как исправить?",
                  a: "1) Проверьте активность Premium. 2) Обновите приложение до последней версии. 3) Полностью закройте и откройте Telegram. 4) Если не видно на одном устройстве — обновите приложение на нём. 5) Премиум эмодзи/стикеры видят и обычные пользователи — так и работает.",
                },
                {
                  q: "Premium есть на одном устройстве, но нет на другом — почему?",
                  a: "Premium привязан ко всему аккаунту и должен синхронизироваться автоматически. Если не видно: обновите Telegram на этом устройстве, полностью закройте и откройте заново, проверьте интернет. Чаще всего причина — старая версия или задержка синхронизации.",
                },
                {
                  q: "Как отменить подписку Telegram Premium?",
                  a: "В Telegram: Настройки → Telegram Premium. На iPhone: Настройки → Apple ID → Подписки. В Google Play: Play Market → Подписки. После отмены будущие платежи прекращаются, Premium работает до конца периода. У подписки через реселлера автоплатежа нет — она сама заканчивается.",
                },
                {
                  q: "Подаренный мне Telegram Premium не пришёл — что делать?",
                  a: "Подарок обычно активируется сразу. Если не видно: обновите приложение и откройте заново, проверьте Настройки → Telegram Premium. Отправитель может быть анонимным (по умолчанию). Если Premium не активировался, попросите отправителя подтвердить отправку и оплату.",
                },
                {
                  q: "Почему оплата не проходит или появляется 'Card declined'?",
                  a: "Официальный @PremiumBot и App Store не принимают Uzcard/Humo — только международные Visa/Mastercard. Даже с Visa банк мог закрыть международные операции, не прийти SMS 3D Secure или истечь время провайдера. Самое простое решение в Узбекистане — реселлер с Uzcard, Humo, Click или Payme в сумах.",
                },
                {
                  q: "Telegram Premium доступен в Узбекистане или ограничен?",
                  a: "Premium в Узбекистане работает полностью — ограничение только на этапе оплаты, так как официальный бот и магазины не принимают местные карты и цена в долларах. Проблема не в самом Premium, а в способе оплаты. Чтобы купить в сумах, используют реселлера.",
                },
                {
                  q: "Если продлить подписку, с какого момента начнётся срок?",
                  a: "Если текущая подписка не закончилась, новый срок обычно добавляется к существующему — дни не теряются. Точную ситуацию проверьте по дате в Настройки → Telegram Premium. Через реселлера удобнее активировать новый срок ближе к окончанию текущего.",
                },
                {
                  q: "Что делать, если проблема с Premium от реселлера?",
                  a: "Это тоже официальная подписка Telegram, поэтому решения выше (обновить, переоткрыть, проверить срок) работают одинаково. При вопросах с активацией или сроком сохраните подтверждение оплаты и обратитесь в канал связи реселлера (для PremiumSend — @premiumsend_admin).",
                },
                {
                  q: "Как проверить статус Premium?",
                  a: "Откройте Настройки → Telegram Premium — там видна активность подписки и срок. Если рядом с именем виден значок звёздочки, Premium активен. Значок можно включить/выключить там же.",
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
                  Большинство проблем Telegram Premium решаются обновлением и
                  перезапуском приложения. Если проблема в оплате или окончании
                  срока — продлите в сумах через{" "}
                  <strong className="text-white">@PremiumSendBot</strong>.{" "}
                  <strong className="text-white">1 месяц 59 000</strong>,{" "}
                  <strong className="text-white">12 месяцев 425 000 сум</strong> —
                  Premium за 3-5 минут.
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
