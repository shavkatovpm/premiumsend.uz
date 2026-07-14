import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Закончилась подписка Telegram Premium — что делать и как продлить",
  description:
    "Когда срок Telegram Premium истекает, аккаунт возвращается к обычному Telegram, данные не теряются. Что отключается, сохраняются ли файлы и как восстановить в сумах через @PremiumSendBot.",
  keywords: [
    "telegram premium закончился",
    "истёк срок telegram premium",
    "telegram premium что делать",
    "продлить telegram premium",
    "восстановить telegram premium",
    "telegram premium заново купить",
    "telegram premium закончился файлы",
    "telegram premium продление",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/ru/maqolalar/telegram-premium-muddati-tugadi-nima-qilish",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/telegram-premium-muddati-tugadi-nima-qilish",
      ru: "https://premiumsend.uz/ru/maqolalar/telegram-premium-muddati-tugadi-nima-qilish",
      "x-default":
        "https://premiumsend.uz/maqolalar/telegram-premium-muddati-tugadi-nima-qilish",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title: "Закончился Telegram Premium — что делать и как продлить",
    description:
      "Что отключается при истечении срока, теряются ли данные и как восстановить в сумах через @PremiumSendBot. Полное руководство.",
    url: "https://premiumsend.uz/ru/maqolalar/telegram-premium-muddati-tugadi-nima-qilish",
    type: "article",
    publishedTime: "2026-06-13",
  },
};

export default function ArticleSrokIstekRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    image: "https://premiumsend.uz/og-image.png",
    headline:
      "Закончилась подписка Telegram Premium — что делать и как продлить",
    description:
      "Когда срок Telegram Premium истекает, аккаунт возвращается к обычному Telegram, данные не теряются. Что отключается и как восстановить в сумах.",
    datePublished: "2026-06-13",
    dateModified: "2026-06-13",
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
      "https://premiumsend.uz/ru/maqolalar/telegram-premium-muddati-tugadi-nima-qilish",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Что происходит, когда срок Telegram Premium истекает?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "После истечения срока аккаунт автоматически возвращается к обычному (бесплатному) Telegram. Premium-функции отключаются: пропадает звёздочка рядом с именем, нельзя отправлять премиум-стикеры и анимированные эмодзи, лимит файла снижается с 4 ГБ до 2 ГБ, реакции и папки возвращаются к обычным значениям. При этом ни один чат, канал или файл не удаляется.",
        },
      },
      {
        "@type": "Question",
        name: "Теряются ли чаты, файлы или каналы при истечении Premium?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет. Все сообщения, чаты, файлы и подписки остаются на месте. Даже отправленные во время Premium файлы по 4 ГБ сохраняются и доступны для скачивания. Лимит 2 ГБ действует только при отправке новых файлов. Если вы были подписаны более чем на 500 каналов, все они остаются — ограничение касается только новых подписок.",
        },
      },
      {
        "@type": "Question",
        name: "Почему Premium закончился сам — я же оплачивал?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Premium через Premium Send основан на разовой оплате — без автопродления. То есть оплаченный срок (1, 3, 6 или 12 месяцев) заканчивается, при этом ничего не списывается автоматически, но и Premium сам не продлевается. Это плюс: с карты не уходят неожиданные платежи. Чтобы продолжить, вы покупаете снова.",
        },
      },
      {
        "@type": "Question",
        name: "Как восстановить или продлить Telegram Premium?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Откройте @PremiumSendBot, выберите пакет (1, 3, 6 или 12 месяцев), укажите username и оплатите в сумах через Uzcard, Humo, Click или Payme. Premium снова активируется за 5 минут. Цены: 1 месяц 59 000, 3 месяца 175 000, 6 месяцев 235 000, 12 месяцев 425 000 сум.",
        },
      },
      {
        "@type": "Question",
        name: "Если продлить до истечения срока, сгорят ли оставшиеся дни?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Не сгорят. Если текущий Premium ещё не закончился, новый срок начинается с даты окончания предыдущего — то есть прибавляется. Например, осталось 8 дней и вы берёте 6 месяцев — суммарно Premium работает около 188 дней. Ни один день не теряется, поэтому продлевать заранее безопасно.",
        },
      },
      {
        "@type": "Question",
        name: "Приходит ли предупреждение перед окончанием Premium?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Telegram обычно показывает напоминание в настройках за несколько дней до окончания. Но поскольку Premium Send не продлевает подписку автоматически, официальное push-уведомление может не прийти. Чтобы узнать точную дату, откройте Telegram → Настройки → Telegram Premium — там указана дата окончания.",
        },
      },
      {
        "@type": "Question",
        name: "Пропадут ли мои премиум-стикеры и эмодзи после окончания?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Наборы стикеров и эмодзи остаются в аккаунте, но без Premium вы не сможете отправлять их премиум-часть в новых сообщениях. Отправленные ранее видны в чатах. Когда Premium вернётся, всё снова заработает — переустанавливать не нужно.",
        },
      },
      {
        "@type": "Question",
        name: "Где проверить, что срок истёк?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "В приложении Telegram зайдите в Настройки (Settings) → Telegram Premium. Если Premium активен, показывается дата окончания. Если нет — появляется предложение купить. Отсутствие звёздочки рядом с именем также означает, что Premium закончился.",
        },
      },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Восстановить истёкший Telegram Premium через @PremiumSendBot",
    description:
      "Пошаговое руководство по повторной активации истёкшего Telegram Premium в Узбекистане в сумах.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Проверьте дату окончания",
        text: "Зайдите в Telegram → Настройки → Telegram Premium. Убедитесь, что Premium неактивен, и посмотрите, с какого дня он отключился.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Откройте @PremiumSendBot",
        text: "Найдите @PremiumSendBot в поиске Telegram и нажмите /start. Бот покажет меню тарифов.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Выберите пакет",
        text: "1, 3, 6 или 12 месяцев. Для постоянного использования 12 месяцев выгоднее всего — 35 417 сум в месяц.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Укажите username",
        text: "Введите username аккаунта, для которого нужно восстановить Premium — обычно это ваш аккаунт.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Оплатите в сумах",
        text: "Оплатите через Uzcard, Humo, Click или Payme в сумах. Без конвертации валюты и дополнительной комиссии.",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Premium вернётся за 5 минут",
        text: "После подтверждения оплаты Premium активируется автоматически. Звёздочка, 4 ГБ и другие функции возвращаются.",
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
        name: "Закончился Premium",
        item: "https://premiumsend.uz/ru/maqolalar/telegram-premium-muddati-tugadi-nima-qilish",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
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
        <span className="text-foreground font-medium">Закончился Premium</span>
      </nav>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-700">
              Вопрос-ответ
            </span>
            <time className="text-xs text-muted" dateTime="2026-06-13">
              13 июня 2026
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Закончилась подписка Telegram Premium — что делать?
          </h1>

          {/* TL;DR */}
          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>Короткий ответ:</strong> когда срок Premium истекает,
              аккаунт автоматически возвращается к обычному Telegram —{" "}
              <strong>ни один чат, файл или канал не удаляется</strong>,
              отключаются только премиум-возможности. Чтобы продолжить,
              восстановите через{" "}
              <Link
                href="https://telegram.me/premiumsendbot"
                target="_blank"
                className="text-primary hover:underline"
              >
                @PremiumSendBot
              </Link>{" "}
              от <strong>59 000 сум</strong> — Premium активируется заново за 5
              минут.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Однажды вы открываете Telegram — а звёздочки рядом с именем нет,
            большой файл не отправляется, премиум-стикеры не работают. Не
            паникуйте: это признак того, что срок Premium истёк, с аккаунтом
            ничего не случилось. Ниже разберём, что именно меняется, в
            безопасности ли ваши данные и как быстрее всего восстановить
            подписку.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Что именно происходит, когда срок Premium истекает?
            </h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Главное:</strong> аккаунт возвращается к обычному
                Telegram, но <strong>никакие данные не теряются</strong>. Чаты,
                каналы, файлы, настройки — всё остаётся. Отключаются только
                возможности, которые добавлял Premium.
              </p>
            </div>

            <p className="text-muted leading-relaxed mb-6">
              Premium — это «отметка» на вашем аккаунте. Когда срок выходит,
              Telegram снимает её, и серверы снова видят вас как обычного
              пользователя. Вот что меняется:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Функция</div>
                <div className="text-center">С Premium</div>
                <div className="text-center">После окончания</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Макс. размер файла</div>
                <div className="text-center text-primary font-bold">4 ГБ</div>
                <div className="text-center text-muted">2 ГБ</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Звёздочка в профиле</div>
                <div className="text-center text-primary font-bold">Есть</div>
                <div className="text-center text-muted">Нет</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Премиум-стикеры / эмодзи</div>
                <div className="text-center text-primary font-bold">✅</div>
                <div className="text-center text-muted">❌ (видны)</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Лимит каналов / групп</div>
                <div className="text-center text-primary font-bold">1000</div>
                <div className="text-center text-muted">500*</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Каналы без рекламы</div>
                <div className="text-center text-primary font-bold">✅</div>
                <div className="text-center text-muted">Реклама вернётся</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center text-sm">
                <div className="font-medium">Голос → текст, перевод</div>
                <div className="text-center text-primary font-bold">Полный</div>
                <div className="text-center text-muted">Ограничен</div>
              </div>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              * Если вы подписаны более чем на 500 каналов, все они остаются —
              ограничение касается только добавления новых каналов.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Потеряются ли мои файлы и данные?
            </h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Нет.</strong> Telegram облачный — ваши данные хранятся на
                сервере и не зависят от статуса Premium. Даже отправленные во
                время Premium файлы по 4 ГБ потом можно спокойно скачать.
              </p>
            </div>
            <p className="text-muted leading-relaxed mb-4">
              Единственная разница — при отправке <strong>нового</strong>
              контента. После окончания новый файл не должен превышать 2 ГБ,
              новые премиум-стикеры отправить нельзя, а лимиты папок и аккаунтов
              возвращаются к обычным. Но это не влияет на прошлое — старые большие
              файлы, ваши папки и структура из 20 папок остаются видимыми (хотя
              редактирование сверх 10 папок может быть ограничено).
            </p>
            <p className="text-muted leading-relaxed">
              Подробнее о возможностях Premium — в статьях{" "}
              <Link
                href="/ru/maqolalar/telegram-premium-4gb-fayl-kanal-guruh-limitlari"
                className="text-primary font-semibold hover:underline"
              >
                4 ГБ файлы и лимиты
              </Link>{" "}
              и{" "}
              <Link
                href="/ru/maqolalar/telegram-premium-vs-oddiy-telegram"
                className="text-primary font-semibold hover:underline"
              >
                Premium против обычного Telegram
              </Link>
              .
            </p>
          </section>

          {/* Mid CTA */}
          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Хотите снова включить Premium? Самый быстрый способ — через{" "}
                <strong className="text-white">@PremiumSendBot</strong> оплатить в
                сумах и активировать за 5 минут. От 59 000 сум за 1 месяц.
              </p>
              <Link
                href="https://telegram.me/premiumsendbot"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                @PremiumSendBot — восстановить Premium
              </Link>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Почему Premium закончился сам?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Premium через Premium Send основан на <strong>разовой оплате</strong> —
              без автопродления (auto-renew). То есть выбранный срок (1, 3, 6 или
              12 месяцев) заканчивается, Premium сам останавливается, и для
              продолжения вы покупаете заново.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Для большинства это на самом деле <strong>преимущество</strong>: с
              карты не списываются неожиданные деньги, нет проблемы «забытой
              подписки». Вы каждый раз сами решаете — продолжать или нет.
            </p>
            <p className="text-muted leading-relaxed">
              Чтобы заранее знать дату окончания: <strong>Telegram → Настройки →
              Telegram Premium</strong> — там указана точная дата. Поставьте
              напоминание или продлите за день-два до окончания.
            </p>
          </section>

          {/* Section 4 — How to restore */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Как восстановить Telegram Premium? 6 шагов
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Восстановление такое же простое, как первая покупка — всего
              несколько минут. Пошагово:
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  step: "1",
                  title: "Проверьте дату окончания",
                  desc: "В Telegram → Настройки → Telegram Premium посмотрите, что Premium отключился и с какого дня.",
                },
                {
                  step: "2",
                  title: "Откройте @PremiumSendBot",
                  desc: "Найдите бота в поиске Telegram, нажмите /start. Появится меню тарифов.",
                },
                {
                  step: "3",
                  title: "Выберите пакет",
                  desc: "1, 3, 6 или 12 месяцев. При постоянном использовании 12 месяцев выгоднее всего (35 417 сум в месяц).",
                },
                {
                  step: "4",
                  title: "Укажите username",
                  desc: "Аккаунт, для которого восстанавливаем Premium — обычно ваш. Введите правильно, со знаком @.",
                },
                {
                  step: "5",
                  title: "Оплатите через Uzcard / Humo / Click / Payme",
                  desc: "В сумах, местной картой. Без конвертации валюты и комиссии.",
                },
                {
                  step: "6",
                  title: "Premium вернётся за 5 минут",
                  desc: "После подтверждения оплаты звёздочка, 4 ГБ и все функции включаются автоматически.",
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
              Подробные руководства по способам оплаты:{" "}
              <Link
                href="/ru/maqolalar/telegram-premium-payme-orqali"
                className="text-primary font-semibold hover:underline"
              >
                через Payme
              </Link>
              ,{" "}
              <Link
                href="/ru/maqolalar/telegram-premium-click-orqali"
                className="text-primary font-semibold hover:underline"
              >
                через Click
              </Link>{" "}
              и{" "}
              <Link
                href="/ru/maqolalar/telegram-premium-humo-orqali"
                className="text-primary font-semibold hover:underline"
              >
                через Humo
              </Link>
              .
            </p>
          </section>

          {/* Section 5 — renew before expiry */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Если продлить до окончания, сгорят ли оставшиеся дни?
            </h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Нет, не сгорят.</strong> Если текущий Premium ещё не
                закончился, новый срок начинается с даты окончания предыдущего —
                то есть <strong>прибавляется</strong>. Ни один день не теряется.
              </p>
            </div>
            <p className="text-muted leading-relaxed mb-4">
              Например, если у вас осталось 8 дней и вы берёте 6 месяцев —
              суммарно Premium работает около <strong>188 дней</strong> без
              перерыва. Поэтому не обязательно ждать окончания: продлить за
              день-два заранее безопасно и удобно — Premium не отключится ни на
              секунду.
            </p>
            <p className="text-muted leading-relaxed">
              Сравнить тарифы и выбрать удобный поможет статья{" "}
              <Link
                href="/ru/maqolalar/telegram-premium-narxlari"
                className="text-primary font-semibold hover:underline"
              >
                Цены Telegram Premium 2026
              </Link>
              .
            </p>
          </section>

          {/* Section 6 — narxlar table */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Сколько стоит восстановление? Цены
            </h2>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Пакет</div>
                <div className="text-center">Цена</div>
                <div className="text-center">В месяц</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">1 месяц</div>
                <div className="text-center">59 000 сум</div>
                <div className="text-center text-muted">59 000 сум</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">3 месяца</div>
                <div className="text-center">175 000 сум</div>
                <div className="text-center text-muted">58 333 сум</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">6 месяцев</div>
                <div className="text-center">235 000 сум</div>
                <div className="text-center text-muted">39 167 сум</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center text-sm bg-primary-light/20">
                <div className="font-bold text-primary">12 месяцев ⭐</div>
                <div className="text-center font-bold text-primary">
                  425 000 сум
                </div>
                <div className="text-center font-bold text-primary">
                  35 417 сум
                </div>
              </div>
            </div>
            <p className="text-muted leading-relaxed">
              Если не хотите каждый раз заниматься восстановлением, 12 месяцев —
              самый разумный вариант: разовая оплата и 365 дней спокойствия. О
              самом дешёвом и надёжном способе читайте в статье{" "}
              <Link
                href="/ru/maqolalar/telegram-premium-eng-arzon-qayerdan-sotib-olish"
                className="text-primary font-semibold hover:underline"
              >
                где купить дешевле всего
              </Link>
              .
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
                  q: "Что происходит, когда Premium истекает?",
                  a: "Аккаунт автоматически возвращается к обычному Telegram: пропадает звёздочка, лимит файла снижается до 2 ГБ, нельзя отправлять премиум-стикеры и эмодзи. Но чаты, каналы и файлы не удаляются.",
                },
                {
                  q: "Теряются ли мои файлы при окончании Premium?",
                  a: "Нет. Telegram облачный — все данные сохраняются. Отправленные во время Premium файлы по 4 ГБ тоже можно скачать. Лимит 2 ГБ действует только при отправке новых файлов.",
                },
                {
                  q: "Почему Premium закончился сам?",
                  a: "Premium через Premium Send основан на разовой оплате — без автопродления. После окончания срока для продолжения нужно купить заново. Это плюс: нет неожиданных списаний.",
                },
                {
                  q: "Как восстановить Premium?",
                  a: "Откройте @PremiumSendBot, выберите пакет, укажите username и оплатите в сумах через Uzcard/Humo/Click/Payme. Активируется за 5 минут. 1 месяц 59 000, 12 месяцев 425 000 сум.",
                },
                {
                  q: "Если продлить до окончания, сгорят ли дни?",
                  a: "Нет. Новый срок начинается с даты окончания предыдущего — прибавляется. Например, 8 дней + 6 месяцев = около 188 дней Premium. Ни один день не теряется.",
                },
                {
                  q: "Где проверить, что срок истёк?",
                  a: "В Telegram → Настройки → Telegram Premium. Если активен — показана дата окончания, если нет — предложение купить. Отсутствие звёздочки рядом с именем тоже признак.",
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
                  Окончание срока Premium — это не проблема. Ваши данные в
                  безопасности, аккаунт на месте. Если хотите продолжить, через{" "}
                  <strong className="text-white">@PremiumSendBot</strong> оплатите
                  в сумах картой Uzcard, Humo, Click или Payme — Premium вернётся
                  за 5 минут. От 59 000 сум за месяц, а на 12 месяцев — всего
                  35 417 сум в месяц.
                </p>
                <Link
                  href="https://telegram.me/premiumsendbot"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  @PremiumSendBot — восстановить сейчас
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
