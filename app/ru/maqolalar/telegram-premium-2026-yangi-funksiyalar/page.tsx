import type { Metadata } from "next";
import Link from "next/link";
import { ogBaseRu } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title: "Telegram Premium 2026: новые функции и обновления года",
  description:
    "Какие новые функции появились в Telegram Premium в 2026 году: эксклюзивный Rich Text Editor (до 32 768 символов), запрет пересылки в личных чатах и совместные чек-листы. Обзор на основе официального блога Telegram.",
  keywords: [
    "telegram premium 2026",
    "новые функции telegram premium",
    "обновления telegram premium 2026",
    "telegram rich text editor",
    "telegram premium чек-лист",
    "запрет пересылки telegram",
    "обновления telegram premium 2026 года",
  ],
  alternates: {
    canonical: "https://premiumsend.uz/ru/maqolalar/telegram-premium-2026-yangi-funksiyalar",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/telegram-premium-2026-yangi-funksiyalar",
      ru: "https://premiumsend.uz/ru/maqolalar/telegram-premium-2026-yangi-funksiyalar",
      "x-default": "https://premiumsend.uz/maqolalar/telegram-premium-2026-yangi-funksiyalar",
    },
  },
  openGraph: {
    ...ogBaseRu,
    locale: "ru_RU",
    title: "Telegram Premium 2026: новые функции и обновления года",
    description:
      "Rich Text Editor, запрет пересылки и чек-листы — главные новинки Premium в 2026 году, по данным официального блога Telegram.",
    url: "https://premiumsend.uz/ru/maqolalar/telegram-premium-2026-yangi-funksiyalar",
    type: "article",
    publishedTime: "2026-08-23",
  },
};

export default function ArticlePremium2026NovostiRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    image: "https://premiumsend.uz/og-image.png",
    headline: "Telegram Premium 2026: новые функции и обновления года",
    description:
      "Обзор новых функций Telegram Premium 2026 года — Rich Text Editor, запрет пересылки и чек-листы — на основе официального блога Telegram.",
    datePublished: "2026-08-23",
    dateModified: "2026-08-23",
    author: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    publisher: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    mainEntityOfPage: "https://premiumsend.uz/ru/maqolalar/telegram-premium-2026-yangi-funksiyalar",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Какие новые функции появились в Telegram Premium в 2026 году?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Два крупных обновления: 14 июля 2026 года — эксклюзивный для Premium Rich Text Editor (текстовый редактор), а 1 марта 2026 года — запрет пересылки в личных чатах. Кроме того, функция совместных чек-листов, добавленная в июле 2025 года, по-прежнему активно используется в 2026 году.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько символов можно написать в Rich Text Editor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "До 32 768 символов. Редактор поддерживает заголовки, таблицы, списки, цитаты, блоки кода и вставку изображений/видео прямо в текст — рассчитан на длинные объявления, инструкции и посты в формате статьи.",
        },
      },
      {
        "@type": "Question",
        name: "Rich Text Editor доступен всем или только Premium-пользователям?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Только Premium-пользователям. В официальном блоге Telegram указано: «Rich Text Editor пока доступен только пользователям Telegram Premium».",
        },
      },
      {
        "@type": "Question",
        name: "Функция запрета пересылки в личных чатах блокирует и скриншоты?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Функция (доступна только Premium, в чатах один на один) ограничивает пересылку и копирование сообщений, а также блокирует создание скриншотов и сохранение медиа.",
        },
      },
      {
        "@type": "Question",
        name: "Нужно ли доплачивать за эти новые функции?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет. Всё входит в стандартную подписку Premium, отдельного тарифа нет. Цены на PremiumSend не изменились: 1 месяц — 59 000 сум, 3 месяца — 175 000, 6 месяцев — 235 000, 12 месяцев — 425 000 сум.",
        },
      },
      {
        "@type": "Question",
        name: "Работают ли эти новые функции в Premium, купленном через PremiumSend?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, полностью работают. PremiumSend выдаёт настоящий Premium-статус через официальный механизм подарка (gift) Telegram — никаких функциональных ограничений нет, всё так же, как при покупке через App Store.",
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
      {
        "@type": "ListItem",
        position: 3,
        name: "Новинки Premium 2026",
        item: "https://premiumsend.uz/ru/maqolalar/telegram-premium-2026-yangi-funksiyalar",
      },
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
        <span className="text-foreground font-medium">Новинки Premium 2026</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">
              Новости
            </span>
            <time className="text-xs text-muted" dateTime="2026-08-23">23 августа 2026</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Telegram Premium 2026: новые функции и обновления года
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-sm font-bold text-primary mb-2">КОРОТКИЙ ОТВЕТ</p>
            <p className="text-foreground leading-relaxed font-medium">
              В 2026 году в Telegram Premium добавили две крупные новинки: <strong>Rich Text Editor</strong> (14 июля, до 32 768 символов форматированного текста) и <strong>запрет пересылки в личных чатах</strong> (1 марта, блокировка форварда и скриншотов). Обе функции доступны только Premium-пользователям и не требуют доплаты — входят в стандартную подписку.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Telegram Premium долгое время ассоциировался в основном с загрузкой файлов до 4 ГБ и просмотром без рекламы, но в течение 2026 года Telegram добавил заметно более серьёзные функции — теперь Premium стал не просто «удобством», а инструментом для создания контента и защиты приватности.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            В этой статье разбираем каждую новую функцию Premium, добавленную в 2026 году: когда она вышла и как работает в Premium, купленном в Узбекистане через PremiumSend — на основе официального блога Telegram.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Какие новые функции появились в Telegram Premium в 2026 году?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              По данным официального блога Telegram (telegram.org/blog), с конца 2025 по август 2026 года в Premium добавили следующие эксклюзивные функции:
            </p>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6 overflow-x-auto">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm min-w-[560px]">
                <div>Функция</div>
                <div>Дата</div>
                <div>Коротко</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border text-sm min-w-[560px]">
                <div className="font-semibold text-foreground">Rich Text Editor</div>
                <div className="text-muted">14 июля 2026</div>
                <div className="text-muted">Заголовки, таблицы, списки, код — до 32 768 символов</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border text-sm min-w-[560px]">
                <div className="font-semibold text-foreground">Запрет пересылки</div>
                <div className="text-muted">1 марта 2026</div>
                <div className="text-muted">Блокировка форварда/скриншотов в личных чатах</div>
              </div>
              <div className="grid grid-cols-3 p-4 text-sm min-w-[560px]">
                <div className="font-semibold text-foreground">Совместные чек-листы</div>
                <div className="text-muted">2025 (активна в 2026)</div>
                <div className="text-muted">Списки задач в группах и личных чатах</div>
              </div>
            </div>
            <p className="text-muted leading-relaxed">
              Помимо этого, основные возможности Premium — 4 ГБ файлы, 1000 каналов, премиум-стикеры и несколько реакций — остаются без изменений. Полный список — в статье{" "}
              <Link href="/ru/maqolalar/telegram-premium-nima" className="text-primary font-semibold hover:underline">
                «Что такое Telegram Premium»
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Rich Text Editor — как работает текстовый редактор Premium?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              В обновлении от 14 июля 2026 года Telegram добавил полноценный текстовый редактор для длинных и структурированных сообщений. Согласно официальному блогу, эта функция <strong>пока доступна только пользователям Premium</strong>.
            </p>
            <ul className="text-muted leading-relaxed space-y-2 list-disc list-inside mb-4">
              <li><strong>Объём</strong> — до 32 768 символов в одном сообщении</li>
              <li><strong>Форматирование</strong> — заголовки, таблицы, списки, цитаты, блоки кода</li>
              <li><strong>Медиа</strong> — вставка изображений и видео прямо в текст</li>
              <li><strong>Интерфейс</strong> — визуальное (WYSIWYG) окно редактирования на мобильном и компьютере</li>
            </ul>
            <p className="text-muted leading-relaxed">
              Функция особенно полезна владельцам каналов и авторам длинных объявлений/инструкций — теперь пост в формате полноценной статьи можно готовить прямо в Telegram, без внешних инструментов вроде Notion или Google Docs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Что такое функция запрета пересылки в личных чатах?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              В обновлении от 1 марта 2026 года Telegram дал Premium-пользователям возможность <strong>полностью отключить пересылку</strong> в чатах один на один. При включении:
            </p>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-2 bg-section-alt p-4 font-bold text-sm">
                <div>Блокируется</div>
                <div>Кому доступно</div>
              </div>
              <div className="grid grid-cols-2 p-4 border-b border-card-border text-sm">
                <div className="text-muted">Пересылка и копирование сообщений</div>
                <div className="text-muted">Включить может только Premium-пользователь</div>
              </div>
              <div className="grid grid-cols-2 p-4 text-sm">
                <div className="text-muted">Скриншоты и сохранение медиа</div>
                <div className="text-muted">Работает только в личных чатах один на один</div>
              </div>
            </div>
            <p className="text-muted leading-relaxed">
              Это дополнительный уровень защиты для конфиденциальных переписок, рабочих переговоров или личного обмена файлами. Одновременно Telegram добавил <strong>теги участников</strong> (member tags) в группах и вход на сайты через «Login with Telegram».
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Работают ли совместные чек-листы в 2026 году?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Да. Чек-листы (списки задач) появились в Premium в июле 2025 года, но и в 2026 году остаются одной из самых востребованных функций. В любом чате (или в Избранном) через меню вложений можно выбрать «Чек-лист» и создать список задач с отмечаемыми пунктами.
            </p>
            <div className="bg-section-alt rounded-xl p-5 mb-4">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Полезно знать:</strong> владелец списка отдельно настраивает, кто может отмечать задачи как выполненные, а кто — добавлять новые пункты. Это делает чек-листы одинаково удобными и для групповых проектов, и для совместных покупок, и для личных дел.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Нужно ли доплачивать за эти новые функции?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Нет. Rich Text Editor, запрет пересылки и чек-листы — всё входит в <strong>стандартную подписку Premium</strong>. Telegram не вводил отдельный «Premium Plus» или более дорогой тариф — цены на 2026 год остаются прежними:
            </p>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-2 bg-section-alt p-4 font-bold text-sm">
                <div>Срок</div>
                <div>Цена (PremiumSend)</div>
              </div>
              <div className="grid grid-cols-2 p-4 border-b border-card-border text-sm">
                <div className="text-muted">1 месяц</div>
                <div className="text-muted">59 000 сум</div>
              </div>
              <div className="grid grid-cols-2 p-4 border-b border-card-border text-sm">
                <div className="text-muted">3 месяца</div>
                <div className="text-muted">175 000 сум</div>
              </div>
              <div className="grid grid-cols-2 p-4 border-b border-card-border text-sm">
                <div className="text-muted">6 месяцев</div>
                <div className="text-muted">235 000 сум</div>
              </div>
              <div className="grid grid-cols-2 p-4 text-sm">
                <div className="text-muted">12 месяцев</div>
                <div className="text-muted">425 000 сум</div>
              </div>
            </div>
            <p className="text-muted leading-relaxed">
              Подробное сравнение тарифов — в статье{" "}
              <Link href="/ru/maqolalar/telegram-premium-narxlari" className="text-primary font-semibold hover:underline">
                «Цены на Telegram Premium 2026»
              </Link>.
            </p>
          </section>

          <section>
            <div className="bg-primary-light/40 border border-primary/20 rounded-2xl p-6 md:p-8 text-center">
              <p className="text-foreground text-lg leading-relaxed mb-4">
                Хотите пользоваться всеми новинками 2026 года? {" "}
                <Link href="https://telegram.me/premiumsendbot" target="_blank" className="text-primary hover:underline font-bold">
                  @PremiumSendBot
                </Link>{" "}
                — оплата в сумах, активация за 5 минут.
              </p>
              <Link
                href="https://telegram.me/premiumsendbot"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-2xl hover:shadow-xl transition-all"
              >
                Купить Premium
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Стоит ли Telegram Premium в 2026 году?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Rich Text Editor и запрет пересылки, добавленные в течение года, ещё сильнее повысили ценность Premium — теперь это не только 4 ГБ файлы и просмотр без рекламы, но и инструмент для создания контента и защиты приватности. Как включить и настроить эти функции — подробно в статье{" "}
              <Link href="/ru/maqolalar/telegram-premium-qanday-yoqiladi-sozlanadi" className="text-primary font-semibold hover:underline">
                «Как включить и настроить Telegram Premium»
              </Link>, а полное сравнение с обычным Telegram — в статье{" "}
              <Link href="/ru/maqolalar/telegram-premium-vs-oddiy-telegram" className="text-primary font-semibold hover:underline">
                «Telegram Premium vs обычный Telegram»
              </Link>.
            </p>
            <p className="text-muted leading-relaxed">
              В Premium, купленном через PremiumSend, все эти новые функции работают точно так же — это настоящий Premium-статус через официальный механизм подарка (gift) Telegram, без каких-либо функциональных отличий от Premium, купленного через App Store или Fragment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Частые вопросы (FAQ)</h2>
            <div className="space-y-4">
              {[
                { q: "Какие новые функции появились в Telegram Premium в 2026 году?", a: "14 июля 2026 — эксклюзивный Rich Text Editor, 1 марта 2026 — запрет пересылки в личных чатах. Функция чек-листов (с июля 2025) тоже активна в 2026 году." },
                { q: "Сколько символов можно написать в Rich Text Editor?", a: "До 32 768 символов. Поддерживаются заголовки, таблицы, списки, цитаты, блоки кода и вставка изображений/видео." },
                { q: "Rich Text Editor доступен всем или только Premium?", a: "Только Premium-пользователям — это прямо указано в официальном блоге Telegram." },
                { q: "Запрет пересылки блокирует и скриншоты?", a: "Да. Ограничивает пересылку/копирование, а также блокирует скриншоты и сохранение медиа (только Premium, в чатах один на один)." },
                { q: "Нужно ли доплачивать за эти новые функции?", a: "Нет, всё входит в стандартную подписку Premium. Цены не изменились: 59 000/175 000/235 000/425 000 сум." },
                { q: "Работают ли эти функции в Premium, купленном через PremiumSend?", a: "Да, полностью — это настоящий Premium-статус Telegram, без функциональных ограничений." },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                  <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="hero-gradient rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-5 left-5 w-32 h-32 bg-white rounded-full blur-2xl" />
              </div>
              <div className="relative">
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  Rich Text Editor, запрет пересылки, чек-листы и ещё 20+ функций — без доплаты. Оформите Premium через PremiumSend в сумах за 5 минут.
                </p>
                <Link
                  href="https://telegram.me/premiumsendbot"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg"
                >
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
