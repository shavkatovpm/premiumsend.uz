import type { Metadata } from "next";
import Link from "next/link";
import { ogBaseRu } from "@/app/shared-metadata";

const slug = "telegram-business-premium-imkoniyatlari";
const uzUrl = `https://premiumsend.uz/maqolalar/${slug}`;
const url = `https://premiumsend.uz/ru/maqolalar/${slug}`;

export const metadata: Metadata = {
  title: "Telegram Business: бизнес-возможности внутри Premium",
  description: "Что такое Telegram Business и как он работает? Настройка часов работы, быстрых ответов, приветствия, сообщения об отсутствии, бизнес-ссылок и чат-ботов.",
  keywords: ["Telegram Business", "что такое Telegram Business", "настройка Telegram Business", "Telegram Premium для бизнеса", "быстрые ответы Telegram"],
  alternates: { canonical: url, languages: { uz: uzUrl, ru: url, "x-default": uzUrl } },
  openGraph: {
    ...ogBaseRu,
    locale: "ru_RU",
    title: "Telegram Business: бизнес-возможности внутри Premium",
    description: "Бизнес-профиль, рабочие часы, автоответы, быстрые ответы, ссылки и чат-боты — практическое руководство.",
    url,
    type: "article",
    publishedTime: "2026-08-26",
  },
};

const features = [
  ["Адрес и часы работы", "Показывает в профиле адрес и статус — открыто или закрыто."],
  ["Стартовая страница", "Добавляет в пустой чат текст, стикер и краткое описание услуг."],
  ["Быстрые ответы", "Отправляет сохранённые тексты и медиа через короткую /команду."],
  ["Приветствие", "Автоматически отправляется новому или вернувшемуся после перерыва клиенту."],
  ["Сообщение об отсутствии", "Автоматически отвечает вне рабочих часов или в заданный период."],
  ["Ссылки для чатов", "Создаёт ссылку t.me с готовым текстом и показывает число нажатий."],
  ["Чат-боты", "Передают подключённому боту обработку выбранных личных чатов и ответов."],
] as const;

const faqs = [
  { q: "Telegram Business — отдельное приложение?", a: "Нет. Он работает в обычном Telegram в разделе Настройки → Telegram Business; отдельное приложение или новый аккаунт не нужны." },
  { q: "Telegram Business входит в Premium?", a: "Да. Инструменты Telegram Business предоставляются пользователям Premium. Telegram может изменить условия в будущем, поэтому актуальная информация внутри приложения имеет приоритет." },
  { q: "Можно добавить фото или файл в быстрый ответ?", a: "Да. Быстрый ответ может хранить несколько сообщений, включая текст, ссылки, стикеры и медиа." },
  { q: "Можно не отправлять автоответ отдельным людям?", a: "Да. Для приветствия и сообщения об отсутствии можно выбрать получателей или исключения." },
  { q: "PremiumSend — официальный партнёр Telegram?", a: "Нет. PremiumSend не является официальным партнёром Telegram; это локальный реселлер, который помогает оплатить Premium местными картами и в сумах." },
] as const;

export default function TelegramBusinessArticleRu() {
  const articleSchema = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "Telegram Business: бизнес-возможности внутри Premium",
    description: metadata.description, image: "https://premiumsend.uz/og-image.png",
    datePublished: "2026-08-26", dateModified: "2026-08-26",
    author: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    publisher: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    mainEntityOfPage: url,
  };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: "https://premiumsend.uz/ru" },
      { "@type": "ListItem", position: 2, name: "Статьи", item: "https://premiumsend.uz/ru/maqolalar" },
      { "@type": "ListItem", position: 3, name: "Telegram Business", item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-muted">
        <Link href="/ru" className="hover:text-primary">Главная</Link><span className="mx-2">/</span>
        <Link href="/ru/maqolalar" className="hover:text-primary">Статьи</Link><span className="mx-2">/</span>
        <span className="text-foreground font-medium">Telegram Business</span>
      </nav>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4"><span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">Бизнес-руководство</span><time className="text-xs text-muted" dateTime="2026-08-26">26 августа 2026</time></div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">Telegram Business: бизнес-возможности внутри Premium</h1>
          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6"><p className="text-sm font-bold text-primary mb-2">КОРОТКИЙ ОТВЕТ</p><p className="text-foreground leading-relaxed font-medium">Telegram Business превращает личный аккаунт в инструмент общения с клиентами. С Premium можно указать часы работы и адрес, использовать быстрые ответы, приветствие и сообщение об отсутствии, бизнес-ссылки и чат-ботов.</p></div>
          <p className="text-lg text-muted leading-relaxed">Telegram Business не заменяет полноценную CRM, но помогает небольшому бизнесу быстрее отвечать на типовые вопросы и не оставлять клиента без ответа вне рабочего времени.</p>
        </header>
        <div className="prose prose-lg max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Что такое Telegram Business и кому он нужен?</h2>
            <p className="text-muted leading-relaxed mb-4">Это набор функций, который добавляет личному аккаунту бизнес-профиль и автоматизацию. Клиенты пишут вам в обычный личный чат, а вы используете в нём шаблоны и автоматические сообщения.</p>
            <p className="text-muted leading-relaxed mb-4">Список функций проверен по <Link href="https://telegram.org/blog/telegram-business" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">официальному анонсу Telegram Business</Link>.</p>
            <p className="text-muted leading-relaxed">Он особенно полезен магазинам, мастерам, консультантам, авторам курсов и администраторам, принимающим заказы в Telegram. Полный обзор подписки есть в статье <Link href="/ru/maqolalar/telegram-premium-nima" className="text-primary font-semibold hover:underline">«Что такое Telegram Premium»</Link>.</p>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Какие возможности есть в Telegram Business?</h2>
            <p className="text-muted leading-relaxed mb-5">Основные инструменты:</p>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden">{features.map(([name, description], index) => <div key={name} className={`p-4 sm:grid sm:grid-cols-[180px_1fr] sm:gap-5 text-sm ${index < features.length - 1 ? "border-b border-card-border" : ""}`}><div className="font-bold text-foreground mb-1 sm:mb-0">{name}</div><div className="text-muted">{description}</div></div>)}</div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Как включить Telegram Business?</h2>
            <p className="text-muted leading-relaxed mb-5">Обновите Telegram и выполните четыре шага:</p>
            <ol className="space-y-4">{[
              ["Откройте настройки", "Перейдите в Telegram → Настройки → Telegram Business."],
              ["Заполните профиль", "Укажите адрес, рабочие дни и часы; при необходимости настройте стартовую страницу."],
              ["Подготовьте ответы", "Создайте быстрые ответы на частые вопросы и приветствие для новых клиентов."],
              ["Проверьте автоматизацию", "Напишите с другого аккаунта и проверьте расписание, текст и исключения."],
            ].map(([title, text], index) => <li key={title} className="flex gap-4"><span className="w-9 h-9 flex-shrink-0 rounded-full bg-primary text-white font-bold flex items-center justify-center">{index + 1}</span><div><h3 className="font-bold text-foreground">{title}</h3><p className="text-muted text-sm">{text}</p></div></li>)}</ol>
            <p className="text-muted leading-relaxed mt-5">Названия пунктов могут немного отличаться в зависимости от языка и версии приложения. Если раздела нет, обновите Telegram из официального магазина и проверьте Premium. Общая инструкция: <Link href="/ru/maqolalar/telegram-premium-qanday-yoqiladi-sozlanadi" className="text-primary font-semibold hover:underline">как включить и настроить Premium</Link>.</p>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Чем быстрые ответы отличаются от автоматических?</h2>
            <p className="text-muted leading-relaxed mb-5">Быстрый ответ выбирает и отправляет оператор, а приветствие и сообщение об отсутствии уходят автоматически при выполнении заданного условия.</p>
            <div className="overflow-x-auto rounded-2xl border border-card-border shadow-lg">
              <div className="min-w-[620px] grid grid-cols-3 bg-section-alt p-4 font-bold text-sm"><div>Инструмент</div><div>Когда отправляется?</div><div>Пример</div></div>
              <div className="min-w-[620px] grid grid-cols-3 p-4 border-t border-card-border text-sm"><div className="font-semibold">Быстрый ответ</div><div className="text-muted">После выбора /команды</div><div className="text-muted">Цены и условия доставки</div></div>
              <div className="min-w-[620px] grid grid-cols-3 p-4 border-t border-card-border text-sm"><div className="font-semibold">Приветствие</div><div className="text-muted">Когда пишет новый клиент</div><div className="text-muted">«Здравствуйте! Чем помочь?»</div></div>
              <div className="min-w-[620px] grid grid-cols-3 p-4 border-t border-card-border text-sm"><div className="font-semibold">Сообщение об отсутствии</div><div className="text-muted">Вне рабочих часов</div><div className="text-muted">«Ответим в 09:00»</div></div>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Как безопасно подключить бизнес-бота?</h2>
            <p className="text-muted leading-relaxed mb-4">Подключайте бота только от доверенного разработчика и открывайте ему лишь необходимые чаты. Бизнес-бот может видеть сообщения в пределах разрешений и выполнять действия от вашего имени.</p>
            <div className="bg-section-alt rounded-xl p-5"><p className="text-muted text-sm leading-relaxed"><strong className="text-foreground">Безопасность:</strong> проверьте разрешения, сначала испытайте бота в тестовом чате и отключите, если он больше не нужен. Не передавайте боту код входа Telegram, пароль двухэтапной проверки или данные карты.</p></div>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Нужен ли отдельный тариф для Telegram Business?</h2>
            <p className="text-muted leading-relaxed mb-4">Нет, в текущей модели Telegram инструменты Business входят в Premium. Цены PremiumSend: 1 месяц — 59 000, 3 месяца — 175 000, 6 месяцев — 235 000, 12 месяцев — 425 000 сумов.</p>
            <p className="text-muted leading-relaxed">PremiumSend не является официальным партнёром Telegram — это локальный реселлер. Сравните <Link href="/ru/maqolalar/telegram-premium-narxlari" className="text-primary font-semibold hover:underline">цены Telegram Premium</Link> и прочитайте <Link href="/ru/maqolalar/telegram-premium-xavfsiz-aldovdan-saqlanish" className="text-primary font-semibold hover:underline">руководство по безопасной покупке</Link>.</p>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Частые вопросы о Telegram Business</h2>
            <div className="space-y-4">{faqs.map(({ q, a }) => <div key={q} className="bg-white rounded-xl p-6 border border-card-border shadow-sm"><h3 className="font-bold text-foreground mb-2">{q}</h3><p className="text-muted text-sm leading-relaxed">{a}</p></div>)}</div>
          </section>
          <section><div className="hero-gradient rounded-2xl p-8 md:p-10 text-center relative overflow-hidden"><div className="relative"><p className="text-white/90 text-lg leading-relaxed mb-6">Активируйте Premium с оплатой в сумах, чтобы настроить инструменты Telegram Business.</p><Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener noreferrer" className="inline-flex px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">Купить через @PremiumSendBot</Link></div></div></section>
        </div>
      </article>
    </>
  );
}
