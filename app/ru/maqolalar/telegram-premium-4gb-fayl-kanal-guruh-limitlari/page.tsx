import type { Metadata } from "next";
import Link from "next/link";
import { ogBaseRu } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title:
    "Telegram Premium: 4 ГБ файл, 1000 каналов и лимиты групп — технические возможности",
  description:
    "Telegram Premium удваивает все лимиты: 4 ГБ на файл, 1000 каналов и групп, 20 папок × 200 чатов, 10 закреплённых чатов. Полная техническая таблица и сравнение с обычным Telegram.",
  keywords: [
    "telegram premium 4 гб",
    "telegram premium лимиты",
    "telegram premium файл",
    "telegram premium 1000 каналов",
    "telegram premium технические возможности",
    "telegram premium папки лимит",
    "telegram premium закреплённый чат",
    "telegram лимит загрузки файлов",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/ru/maqolalar/telegram-premium-4gb-fayl-kanal-guruh-limitlari",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/telegram-premium-4gb-fayl-kanal-guruh-limitlari",
      ru: "https://premiumsend.uz/ru/maqolalar/telegram-premium-4gb-fayl-kanal-guruh-limitlari",
      "x-default": "https://premiumsend.uz/maqolalar/telegram-premium-4gb-fayl-kanal-guruh-limitlari",
    },
  },
  openGraph: {
    ...ogBaseRu,
    locale: "ru_RU",
    title:
      "Telegram Premium 4 ГБ файлы и другие лимиты — полная техническая таблица",
    description:
      "4 ГБ на файл, 1000 каналов, 20 папок, 10 закреплённых чатов — Premium удваивает лимиты обычного Telegram. Точные цифры и сравнение.",
    url: "https://premiumsend.uz/ru/maqolalar/telegram-premium-4gb-fayl-kanal-guruh-limitlari",
    type: "article",
    publishedTime: "2026-05-16",
  },
};

export default function ArticleLimitsRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    image: "https://premiumsend.uz/og-image.png",
    headline:
      "Telegram Premium: 4 ГБ файл, 1000 каналов и лимиты групп — технические возможности",
    description:
      "Все технические лимиты Telegram Premium: 4 ГБ файлы, 1000 каналов, 20 папок × 200 чатов, 10 закреплённых чатов. Сравнение с обычным Telegram и практические примеры.",
    datePublished: "2026-05-16",
    dateModified: "2026-05-16",
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
      "https://premiumsend.uz/ru/maqolalar/telegram-premium-4gb-fayl-kanal-guruh-limitlari",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько ГБ можно загрузить с Telegram Premium?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Premium пользователь загружает файлы до 4 ГБ. В обычном Telegram лимит 2 ГБ. Количество таких загрузок не ограничено — можно отправлять сколько угодно 4 ГБ файлов. Тип файла не важен: видео, архив, ISO, документ.",
        },
      },
      {
        "@type": "Question",
        name: "На сколько каналов и групп можно подписаться одновременно?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Обычный пользователь — 500 каналов и групп вместе. Premium — 1000. Это общий лимит для каналов и групп. После активации Premium лимит расширяется автоматически, старые подписки сохраняются.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько папок можно создать в Telegram?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Обычный — 10 папок по 100 чатов, Premium — 20 папок по 200 чатов. В Premium ещё есть общие папки (shareable folder) — отправляете другу ссылку и он одной кнопкой подписывается на все каналы/группы из вашей папки.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько закреплённых чатов в Premium?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "В обычном списке чатов закрепляется 5, в Premium — 10. В папке: обычный 5, Premium 10. В Избранном (Saved Messages) лимит закреплений тоже выше. Это удобно — самые активные чаты всегда наверху.",
        },
      },
      {
        "@type": "Question",
        name: "Premium увеличивает количество аккаунтов?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. На одном устройстве обычный Telegram держит 3 аккаунта, Premium — 4. Удобно для людей, у которых рабочий и личный номер на одном телефоне — не нужно выходить-входить.",
        },
      },
      {
        "@type": "Question",
        name: "Скорость загрузки в Premium действительно безлимитная?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да — у Premium снят throttling (искусственное замедление). Обычный пользователь при загрузке больших файлов получает ограничение скорости со стороны Telegram. У Premium его нет — канал интернета используется полностью. 4 ГБ фильм на канале 100 Мбит загружается за ~5 минут.",
        },
      },
      {
        "@type": "Question",
        name: "Какой лимит у Избранного (Saved Messages)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Количество сообщений в Избранном не ограничено в обоих случаях. Но файл туда в Premium можно положить до 4 ГБ, в обычном — 2 ГБ. Premium-пользователи часто используют Saved Messages как личное облачное хранилище.",
        },
      },
      {
        "@type": "Question",
        name: "Публичный username в Premium без ограничений?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Один основной username доступен и обычному, и Premium. Но в Premium можно привязать дополнительные collectible username, купленные на fragment.com. Для каналов/групп публичная ссылка работает без Premium — это бесплатно для всех.",
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
      { "@type": "ListItem", position: 3, name: "Premium 4 ГБ файлы и лимиты", item: "https://premiumsend.uz/ru/maqolalar/telegram-premium-4gb-fayl-kanal-guruh-limitlari" },
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
        <span className="text-foreground font-medium">Premium 4 ГБ файлы и лимиты</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">Техническое руководство</span>
            <time className="text-xs text-muted" dateTime="2026-05-16">16 мая 2026</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Telegram Premium: 4 ГБ файл, 1000 каналов и лимиты групп — технические возможности
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>Кратко:</strong> Telegram Premium <strong>удваивает почти все лимиты</strong> обычного аккаунта: один файл до <strong>4 ГБ</strong> (обычный 2 ГБ), подписка на <strong>1000 каналов/групп</strong> (обычный 500), <strong>20 папок × 200 чатов</strong> (обычный 10 × 100), <strong>10 закреплённых чатов</strong> (обычный 5), <strong>4 аккаунта</strong> на одном устройстве (обычный 3). Скорость загрузки — без ограничений.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Telegram Premium — это не только анимированные эмодзи и стикеры. Главная техническая выгода — снятие невидимых лимитов обычного аккаунта. Не получалось отправить большой файл и приходилось переходить в WhatsApp, список каналов забился до 500 и невозможно подписаться на новый интересный, не хватило папок — все эти проблемы в Premium отсутствуют.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            В этой статье — <strong>все технические лимиты Premium</strong> с точными цифрами: файлы, каналы, папки, закрепления, аккаунты, скорость, длина биографии и т.д. С таблицей-сравнением рядом с обычным Telegram.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Big comparison table */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Лимиты Premium и обычного Telegram — полная таблица
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Таблица составлена по официальной документации Telegram. После активации Premium все значения меняются автоматически — переустанавливать аккаунт не нужно.
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Параметр</div>
                <div className="text-center">Обычный Telegram</div>
                <div className="text-center">Premium</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Максимальный размер файла</div>
                <div className="text-center">2 ГБ</div>
                <div className="text-center text-primary font-bold">4 ГБ</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Подписка на каналы/группы</div>
                <div className="text-center">500</div>
                <div className="text-center text-primary font-bold">1000</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Количество папок</div>
                <div className="text-center">10</div>
                <div className="text-center text-primary font-bold">20</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Чатов в одной папке</div>
                <div className="text-center">100</div>
                <div className="text-center text-primary font-bold">200</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Закреплённых чатов</div>
                <div className="text-center">5</div>
                <div className="text-center text-primary font-bold">10</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Аккаунтов на устройстве</div>
                <div className="text-center">3</div>
                <div className="text-center text-primary font-bold">4</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Публичных ссылок</div>
                <div className="text-center">10</div>
                <div className="text-center text-primary font-bold">20</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Сохранённых GIF</div>
                <div className="text-center">200</div>
                <div className="text-center text-primary font-bold">400</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Избранных стикеров</div>
                <div className="text-center">5</div>
                <div className="text-center text-primary font-bold">10</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Длина биографии</div>
                <div className="text-center">70 символов</div>
                <div className="text-center text-primary font-bold">140 символов</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Длина названия канала</div>
                <div className="text-center">128</div>
                <div className="text-center text-primary font-bold">256</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Скорость загрузки</div>
                <div className="text-center">Ограничена</div>
                <div className="text-center text-primary font-bold">Без ограничений</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center text-sm">
                <div className="font-medium">Транскрипция голосовых</div>
                <div className="text-center text-red-600">Нет</div>
                <div className="text-center text-green-600 font-bold">Без лимита</div>
              </div>
            </div>

            <p className="text-muted text-sm leading-relaxed">
              <strong className="text-foreground">Источник:</strong> Telegram FAQ и официальная страница Premium (telegram.org/premium). Данные на 2026 год.
            </p>
          </section>

          {/* Section 2 — 4GB files */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              4 ГБ на файл — что это даёт и кому нужно?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Telegram в отличие от других мессенджеров изначально принимал большие файлы. В обычном WhatsApp лимит 100 МБ, в Viber 200 МБ — а в Telegram даже обычный пользователь грузит до <strong>2 ГБ</strong>. Premium делает эту границу <strong>4 ГБ</strong>.
            </p>

            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Когда нужно 4 ГБ:</strong>
            </p>
            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li><strong>HD фильм (1080p, 90 минут)</strong> — в среднем 2.5&ndash;4 ГБ. С лимитом 2 ГБ нужно сжимать, с 4 ГБ — отправляется в оригинале.</li>
              <li><strong>4K видео</strong> — 10-минутное 4K весит 3&ndash;5 ГБ. Снятый на телефон клип отправляется без переконвертации.</li>
              <li><strong>Windows ISO образ</strong> — 4&ndash;5 ГБ. Передать другу дистрибутив ОС через Telegram вместо облака.</li>
              <li><strong>Проект Photoshop/Premiere</strong> — PSD/PRPROJ + ассеты на 2&ndash;4 ГБ. Для дизайнеров и монтажёров — ежедневный сценарий.</li>
              <li><strong>Архив бэкапа</strong> — полугодовой ZIP/RAR телефона или компьютера может доходить до 3&ndash;4 ГБ.</li>
              <li><strong>Учебные материалы</strong> — курсовые видео, сборники лекций, архивы e-book.</li>
            </ul>

            <div className="bg-section-alt rounded-xl p-5">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Технический момент:</strong> Скорость интернета на загрузку 4 ГБ влияет только на время — на медленном соединении тоже грузится, просто дольше. Telegram передаёт файл частями по 1 МБ, поэтому при разрыве связи загрузка продолжается с того же места.
              </p>
            </div>
          </section>

          {/* Section 3 — 1000 channels */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              1000 каналов и групп — для журналистов, маркетологов и студентов
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Обычный аккаунт держит 500 каналов и групп. Среднему пользователю хватает, но для следующих профессий — мало:
            </p>

            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li><strong>Журналисты и контент-мейкеры</strong> — региональные, отраслевые, языковые каналы плюс мониторинг конкурентов быстро забивают 500.</li>
              <li><strong>Маркетологи и SMM</strong> — клиентские каналы, конкурентный анализ, отраслевые каналы, рабочие группы.</li>
              <li><strong>Студенты и школьники</strong> — групповые чаты класса, каналы лекций, чаты курсов, библиотечные каналы.</li>
              <li><strong>Предприниматели</strong> — продуктовые каналы, оптовые группы, чаты партнёров, клиентские группы.</li>
              <li><strong>Геймеры и контент-потребители</strong> — meme-каналы, фан-зоны, гайды, продавцы золота.</li>
            </ul>

            <p className="text-muted leading-relaxed">
              Premium — <strong>1000 подписок</strong>. Этого хватает почти на любую активность. Плюс Premium даёт <strong>20 папок × 200 чатов</strong> — то есть 4000 чатов раскладываются по логическим категориям (в обычном 1000).
            </p>
          </section>

          {/* Mid CTA */}
          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Проблемы с лимитами уходят с Premium: 4 ГБ файлы, 1000 каналов, 20 папок, 10 закреплённых чатов.{" "}
                <strong className="text-white">@PremiumSendBot</strong> — 3 месяца от 175 000 сум, 6 месяцев 235 000 сум, 12 месяцев 425 000 сум. В сумах, активация за 5 минут.
              </p>
              <Link href="https://telegram.me/premiumsendbot" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                Снять лимиты
              </Link>
            </div>
          </section>

          {/* Section 4 — Folders */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              20 папок и ссылки на общие папки
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Папка (folder) — инструмент категоризации чатов. Пример: «Работа», «Семья», «Новости», «Боты». В обычном аккаунте 10 папок по 100 чатов — итого 1000 чатов в системе. В Premium: <strong>20 папок × 200 чатов = 4000</strong>.
            </p>

            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Особая функция Premium:</strong> общая папка (shareable folder). Набор каналов и групп из вашей папки можно отправить другому человеку одной ссылкой. Он переходит — и подписывается на все каналы одной кнопкой.
            </p>

            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li><strong>Пример 1:</strong> Новому сотруднику добавить рабочие каналы компании одним кликом.</li>
              <li><strong>Пример 2:</strong> Студента подключить к чатам класса + каналам объявлений преподавателя одновременно.</li>
              <li><strong>Пример 3:</strong> Клиенту — пакет отраслевых новостей (10 каналов) одной ссылкой.</li>
            </ul>

            <p className="text-muted leading-relaxed">
              Premium нужен только <strong>создателю</strong> папки. Тот, кто переходит по ссылке, может подписаться без Premium.
            </p>
          </section>

          {/* Section 5 — Speed & translation */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Безлимитная скорость и транскрипция голосовых
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              <strong>Невидимые, но ежедневно полезные</strong> функции Premium:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">⚡ Безлимитная загрузка</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Обычный пользователь при скачивании файла больше 2 ГБ получает дросселирование скорости до 1&ndash;2 МБ/с. В Premium throttle снят — канал интернета используется полностью. 4 ГБ фильм на канале 100 Мбит — ~5 минут.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">🎙️ Голосовое в текст</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Premium-пользователь конвертирует любое голосовое сообщение в текст одной кнопкой. Без лимита, многоязычная (узбекский язык добавлен в 2026). На совещании не услышали голосовое — прочитали.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">🌐 Перевод в реальном времени</h3>
                <p className="text-sm text-muted leading-relaxed">
                  В Premium под сообщением автоматически появляется кнопка «Translate». Одно касание — сообщение переведено на выбранный язык (50+ языков). В обычном аккаунте перевод доступен только в некоторых чатах.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">🚫 Без рекламы</h3>
                <p className="text-sm text-muted leading-relaxed">
                  В Premium аккаунте не отображаются спонсорские объявления внутри каналов. Лента чистая — только то, на что вы подписаны.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 — Practical use cases */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Кому лимит реально нужен?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Типы пользователей и их главная польза от Premium:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Кто</div>
                <div className="text-center">Главная проблема лимита</div>
                <div className="text-center">Польза Premium</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-start text-sm">
                <div className="font-medium">Видеомонтажёр</div>
                <div className="text-center text-muted">2 ГБ — HD клип не отправить</div>
                <div className="text-center text-primary">4 ГБ, безлимитная скорость</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-start text-sm">
                <div className="font-medium">SMM/маркетолог</div>
                <div className="text-center text-muted">Лимит 500 каналов, мало папок</div>
                <div className="text-center text-primary">1000 каналов, 20 папок</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-start text-sm">
                <div className="font-medium">Преподаватель</div>
                <div className="text-center text-muted">Голосовые лекции в текст</div>
                <div className="text-center text-primary">Транскрипция без лимита</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-start text-sm">
                <div className="font-medium">Предприниматель</div>
                <div className="text-center text-muted">Чаты клиентов не разложены</div>
                <div className="text-center text-primary">4 аккаунта, 20 папок</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-start text-sm">
                <div className="font-medium">Студент</div>
                <div className="text-center text-muted">Курсовые видео не качаются (скорость низкая)</div>
                <div className="text-center text-primary">Безлимитная загрузка</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-start text-sm">
                <div className="font-medium">Обычный пользователь</div>
                <div className="text-center text-muted">Реклама, мелкие лимиты</div>
                <div className="text-center text-primary">Без рекламы, удобно</div>
              </div>
            </div>
          </section>

          {/* Section 7 — How to check current usage */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Как проверить ваши текущие лимиты?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Чтобы понять, насколько ваш аккаунт близок к лимиту:
            </p>

            <div className="space-y-4 mb-6">
              {[
                { step: "1", title: "Settings → Telegram Premium", desc: "Откройте в настройках раздел 'Telegram Premium'. Там показано текущее состояние лимитов и что изменится после активации." },
                { step: "2", title: "Посмотрите список чатов", desc: "Если под основным списком видно 'Chats: 487 / 500' — вы близки к лимиту. После Premium цифра сразу станет '/1000'." },
                { step: "3", title: "Уведомление при отправке файла", desc: "При попытке отправить файл больше 2 ГБ Telegram показывает 'File too large, get Telegram Premium'. Это явный знак, что вы уперлись в лимит." },
                { step: "4", title: "При добавлении папки", desc: "При создании 11-й папки появится 'You have reached the limit of 10 folders. Get Telegram Premium for up to 20 folders'." },
                { step: "5", title: "Скорость скачивания", desc: "Если на большом файле скорость падает до 1 МБ/с — это throttling Telegram. В Premium его нет." },
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
          </section>

          {/* Section 8 — Premium open */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Когда лимиты расширяются после активации Premium?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Сразу после активации Premium все лимиты расширяются одновременно. Переустанавливать Telegram или перезаходить не нужно. В настройках появляется отметка «Telegram Premium», рядом с именем — звёздочка (⭐).
            </p>

            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Купить из Узбекистана — самый простой способ:</strong>
            </p>
            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li><strong>3 месяца:</strong> 175 000 сум (58 333 в месяц)</li>
              <li><strong>6 месяцев:</strong> 235 000 сум (39 167 в месяц) — самый популярный тариф</li>
              <li><strong>12 месяцев:</strong> 425 000 сум (35 417 в месяц) — самая низкая цена за месяц</li>
            </ul>

            <p className="text-muted leading-relaxed">
              Оплата: Uzcard, Humo, Click, Payme или Visa. @PremiumSendBot даёт номер карты и точную сумму — вы переводите, через 5 минут Premium активирован. Подробнее:{" "}
              <Link href="/ru/maqolalar/telegram-premium-narxlari" className="text-primary font-semibold hover:underline">
                Сравнение цен Premium
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
                { q: "Сколько ГБ можно загрузить с Telegram Premium?", a: "До 4 ГБ на один файл. В обычном Telegram — 2 ГБ. Количество загрузок не ограничено." },
                { q: "На сколько каналов и групп можно подписаться?", a: "Обычный — 500, Premium — 1000. Это общий лимит для каналов и групп." },
                { q: "Сколько папок можно создать в Telegram?", a: "Обычный — 10 папок по 100 чатов, Premium — 20 папок по 200 чатов. В Premium также есть общие папки." },
                { q: "Сколько закреплённых чатов в Premium?", a: "Обычный — 5, Premium — 10. То же соотношение в папках." },
                { q: "Premium увеличивает количество аккаунтов?", a: "Да. Обычный — 3 аккаунта, Premium — 4 на одном устройстве. Удобно для рабочего и личного номера." },
                { q: "Скорость загрузки в Premium действительно без ограничений?", a: "Да — throttling снят. Обычный аккаунт при больших файлах получает замедление, у Premium его нет." },
                { q: "Какой лимит у Избранного (Saved Messages)?", a: "Количество сообщений не ограничено в обоих. Но файл в Premium можно положить до 4 ГБ, в обычном — 2 ГБ." },
                { q: "Premium 4 ГБ файл может ли скачать обычный человек?", a: "Да. Обычный пользователь скачивает и смотрит 4 ГБ файл, отправленный Premium-пользователем. Только сам он не может отправить файл больше 2 ГБ." },
                { q: "Когда лимит расширится — сразу после активации Premium?", a: "Да, мгновенно. Telegram не нужно переустанавливать. В настройках Premium активен и все цифры меняются автоматически." },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                  <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Trust block */}
          <section>
            <div className="bg-section-alt rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-bold text-foreground mb-4 text-center">
                Лимиты Premium — основные цифры
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">4 ГБ</p>
                  <p className="text-sm text-muted">размер одного файла</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">1000</p>
                  <p className="text-sm text-muted">каналов/групп</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">20</p>
                  <p className="text-sm text-muted">папок × 200 чатов</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">4</p>
                  <p className="text-sm text-muted">аккаунта в одном приложении</p>
                </div>
              </div>
            </div>
          </section>

          {/* Related */}
          <section>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-card-border">
              <h3 className="text-lg font-bold text-foreground mb-4">Связанные статьи</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/ru/maqolalar/telegram-premium-nima" className="text-primary font-semibold hover:underline">Что такое Telegram Premium — полное руководство</Link></li>
                <li><Link href="/ru/maqolalar/telegram-premium-vs-oddiy-telegram" className="text-primary font-semibold hover:underline">Premium vs обычный Telegram: 15 отличий</Link></li>
                <li><Link href="/ru/maqolalar/telegram-premium-stikerlari-emoji-reaksiyalari" className="text-primary font-semibold hover:underline">Premium стикеры, эмодзи и реакции</Link></li>
                <li><Link href="/ru/maqolalar/telegram-premium-narxlari" className="text-primary font-semibold hover:underline">Цены Premium: 1, 3, 6, 12 месяцев</Link></li>
                <li><Link href="/ru/maqolalar/6-oylik-telegram-premium-olishning-eng-yaxshi-usuli" className="text-primary font-semibold hover:underline">Лучший способ купить 6 месяцев Premium</Link></li>
              </ul>
            </div>
          </section>

          {/* Conclusion CTA */}
          <section>
            <div className="hero-gradient rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-5 left-5 w-32 h-32 bg-white rounded-full blur-2xl" />
              </div>
              <div className="relative">
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  4 ГБ файлы, 1000 каналов, 20 папок, безлимитная скорость — Premium активируется и всё работает сразу.{" "}
                  <strong className="text-white">@PremiumSendBot</strong> — 3 месяца от 175 000 сум, 6 месяцев 235 000 сум, 12 месяцев 425 000 сум. Оплата в сумах, активация за 5 минут.
                </p>
                <Link href="https://telegram.me/premiumsendbot" target="_blank" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  Начать активацию Premium
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
