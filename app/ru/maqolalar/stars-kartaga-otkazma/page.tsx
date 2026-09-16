import type { Metadata } from "next";
import Link from "next/link";
import { ogBaseRu } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title: "Можно ли купить Telegram Stars, переведя деньги напрямую на карту?",
  description:
    "Да — это основной способ покупки Stars через @premiumsendbot. Mini App показывает карту и сумму, вы делаете P2P-перевод. Как это работает, безопасно ли это, и пошаговое руководство для Uzcard/Humo/Click/Payme.",
  keywords: [
    "купить stars переводом на карту",
    "telegram stars перевод на карту",
    "stars через карту p2p",
    "p2p перевод stars",
    "premiumsendbot карта",
  ],
  alternates: {
    canonical: "https://premiumsend.uz/ru/maqolalar/stars-kartaga-otkazma",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/stars-kartaga-otkazma",
      ru: "https://premiumsend.uz/ru/maqolalar/stars-kartaga-otkazma",
      "x-default": "https://premiumsend.uz/maqolalar/stars-kartaga-otkazma",
    },
  },
  openGraph: {
    ...ogBaseRu,
    title: "Можно ли купить Telegram Stars, переведя деньги напрямую на карту?",
    description:
      "Да — Mini App показывает карту и сумму, вы делаете P2P-перевод, Stars зачисляются автоматически. Безопасность и пошаговое руководство.",
    url: "https://premiumsend.uz/ru/maqolalar/stars-kartaga-otkazma",
    type: "article",
    publishedTime: "2026-09-16",
  },
};

export default function ArticleStarsKartagaOtkazmaRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Можно ли купить Telegram Stars, переведя деньги напрямую на карту?",
    description:
      "Как работает механизм покупки Telegram Stars через P2P-перевод на карту, насколько это безопасно и пошаговый процесс.",
    datePublished: "2026-09-16",
    dateModified: "2026-09-16",
    author: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    publisher: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    mainEntityOfPage: "https://premiumsend.uz/ru/maqolalar/stars-kartaga-otkazma",
    inLanguage: "ru",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Купить Telegram Stars переводом на карту",
    description: "Пошагово: покупка Telegram Stars через P2P-перевод на номер карты",
    step: [
      { "@type": "HowToStep", position: 1, name: "Откройте @premiumsendbot", text: "В поиске Telegram введите @premiumsendbot, нажмите /start." },
      { "@type": "HowToStep", position: 2, name: "Откройте Mini App", text: "Через кнопку в меню бота откроется Mini App." },
      { "@type": "HowToStep", position: 3, name: "Выберите количество Stars", text: "Пакет от 50 до 5000 или введите нужное количество." },
      { "@type": "HowToStep", position: 4, name: "Переведите на указанную карту", text: "Mini App покажет номер карты и точную сумму. Переведите её через своё банковское приложение (Uzcard, Humo, Click или Payme) на указанную карту." },
      { "@type": "HowToStep", position: 5, name: "Stars начисляются автоматически", text: "После поступления оплаты Stars автоматически зачисляются на ваш аккаунт за несколько минут." },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Можно ли купить Telegram Stars, переведя деньги напрямую на карту?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Mini App в @premiumsendbot показывает номер карты и точную сумму, вы переводите её через своё банковское приложение (Uzcard, Humo, Click или Payme), а Stars автоматически зачисляются на аккаунт за несколько минут.",
        },
      },
      {
        "@type": "Question",
        name: "Не опасно ли переводить деньги на незнакомый номер карты?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Если вы входите через официальную ссылку @premiumsendbot — не опасно: указанная карта принадлежит самому сервису. Mini App никогда не запрашивает номер вашей карты или пароль, только показывает карту получателя и сумму. Для защиты от мошенничества используйте только официальную ссылку бота и точно сверяйте сумму.",
        },
      },
      {
        "@type": "Question",
        name: "Почему в официальном приложении Telegram нельзя купить Stars переводом на карту?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Официальное приложение Telegram принимает для Stars только международные Visa/Mastercard (или TON через Fragment.com). Uzcard и Humo — внутренние платёжные системы Узбекистана, не подключённые ни к одной из этих сетей, поэтому нужен сервис на основе локального P2P-перевода.",
        },
      },
      {
        "@type": "Question",
        name: "С какими картами (Uzcard, Humo, Click, Payme) это работает?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Со всеми. Через какое приложение вы переводите на указанную карту — Uzcard, Humo, Click или Payme — не важно, цена и процесс одинаковы.",
        },
      },
      {
        "@type": "Question",
        name: "Через сколько приходят Stars после перевода?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Обычно за несколько минут после подтверждения оплаты. При технической задержке поможет поддержка бота.",
        },
      },
      {
        "@type": "Question",
        name: "Что будет, если перевести неправильную сумму?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Рекомендуется переводить точную сумму, указанную в Mini App — при несовпадении автоматическая система может не распознать платёж. В этом случае обратитесь в поддержку бота, проблема решается.",
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
      { "@type": "ListItem", position: 3, name: "Stars переводом на карту", item: "https://premiumsend.uz/ru/maqolalar/stars-kartaga-otkazma" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-muted">
        <Link href="/ru" className="hover:text-primary">Главная</Link>
        <span className="mx-2">/</span>
        <Link href="/ru/maqolalar" className="hover:text-primary">Статьи</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">Stars переводом на карту</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">Руководство по оплате</span>
            <time className="text-xs text-muted" dateTime="2026-09-16">16 сентября 2026</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Можно ли купить Telegram Stars, переведя деньги напрямую на карту?
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-sm font-bold text-primary mb-2">КОРОТКО</p>
            <p className="text-foreground leading-relaxed font-medium">
              <strong>Да, можно</strong> — и это основной способ покупки Stars через{" "}
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="text-primary hover:underline">@premiumsendbot</Link>:
              Mini App показывает номер карты и точную сумму, вы переводите её через своё банковское приложение (Uzcard, Humo, Click или Payme) — P2P-переводом, а Stars автоматически зачисляются на аккаунт за несколько минут.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Официально Telegram принимает для Stars только международные Visa/Mastercard или TON-криптовалюту через Fragment.com — Uzcard и Humo не подключены ни к одной из этих сетей. Поэтому практичный способ купить Stars в Узбекистане — сервис на основе локального перевода карта-на-карту (P2P). Многие, впервые видя этот процесс, сомневаются: «зачем переводить деньги на номер карты, не опасно ли это?» — ниже полный ответ.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Как работает покупка Stars переводом на карту?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Механизм прост: вы не вводите платёжные данные в боте, наоборот — сервис показывает вам свою собственную расчётную карту, и вы переводите на неё через своё банковское приложение обычным P2P-переводом (карта-на-карту) — так же, как переводите деньги другу.
            </p>
            <p className="text-muted leading-relaxed">
              Это не merchant-checkout с подтверждением PIN/Face ID, как в Click или Payme, и в боте нет меню «выберите способ оплаты». Фразы «через Uzcard», «через Humo», «через Click» просто означают, через какое личное приложение вы совершаете P2P-перевод — а не отдельную интеграцию сервиса.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Это безопасно? Зачем нужен перевод на номер карты?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Переводить деньги на незнакомый номер карты — это ситуация, где обычно стоит быть осторожным, и это правильная интуиция. Но здесь речь не о случайном человеке: если вы входите через официальную ссылку{" "}
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="text-primary font-semibold hover:underline">@premiumsendbot</Link>,
              указанная карта — собственная расчётная карта сервиса.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Основные правила безопасности:
            </p>
            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li>Mini App никогда <strong>не запрашивает</strong> номер вашей карты, CVC-код или пароль от банка — только показывает карту получателя</li>
              <li>Перевод вы совершаете полностью <strong>внутри своего банковского приложения</strong>, сами всё проверяя</li>
              <li>Входите только через официальную ссылку бота (@premiumsendbot) — не доверяйте сообщениям от третьих лиц с «переведите на эту карту»</li>
              <li>Переводите точную сумму, указанную в Mini App, без изменений</li>
            </ul>
            <p className="text-muted leading-relaxed">
              Это техническая необходимость из-за того, что карты Узбекистана не подключены к международным платёжным системам — та же причина, по которой{" "}
              <Link href="/ru/maqolalar/uzcard-humo-app-store-play-market-ishlamaydi" className="text-primary hover:underline">Uzcard/Humo не работают в App Store/Play Market</Link>{" "}
              и{" "}
              <Link href="/ru/maqolalar/nega-xalqaro-karta-telegram-premiumni-rad-etadi" className="text-primary hover:underline">международная карта отклоняет платёж Telegram</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">С какими картами это работает?</h2>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto mb-4">
              <table className="w-full text-sm min-w-[420px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">Карта / приложение</th>
                    <th className="p-4 text-left font-bold">Работает через P2P-перевод</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Uzcard</td>
                    <td className="p-4">✅ Да</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Humo</td>
                    <td className="p-4">✅ Да</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Click (перевод через приложение)</td>
                    <td className="p-4">✅ Да</td>
                  </tr>
                  <tr className="border-b border-card-border last:border-b-0">
                    <td className="p-4 font-medium">Payme (перевод через приложение)</td>
                    <td className="p-4">✅ Да</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              Цена и процесс одинаковы независимо от того, каким приложением вы пользуетесь. Подробное руководство по каждому:{" "}
              <Link href="/ru/maqolalar/telegram-stars-humo-orqali" className="text-primary font-semibold hover:underline">Humo</Link>,{" "}
              <Link href="/ru/maqolalar/telegram-stars-click-orqali" className="text-primary font-semibold hover:underline">Click</Link>,{" "}
              <Link href="/ru/maqolalar/telegram-stars-payme-orqali" className="text-primary font-semibold hover:underline">Payme</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Пошагово: покупка Stars переводом на карту</h2>
            <div className="space-y-4 mb-6">
              {[
                { step: "1", title: "Откройте @premiumsendbot", desc: "В поиске Telegram введите @premiumsendbot, нажмите /start." },
                { step: "2", title: "Откройте Mini App", desc: "Через кнопку в меню бота откроется Mini App." },
                { step: "3", title: "Выберите количество Stars", desc: "Пакет от 50 до 5000 или введите нужное количество." },
                { step: "4", title: "Переведите на указанную карту", desc: "Mini App покажет номер карты и точную сумму. Переведите её через своё банковское приложение (Uzcard, Humo, Click или Payme)." },
                { step: "5", title: "Stars начисляются автоматически", desc: "После поступления оплаты — в Telegram → Настройки → Stars за несколько минут." },
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
                Карта готова? В <strong className="text-white">@premiumsendbot</strong> оплатите Stars в сумах, переводом напрямую на карту.
              </p>
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                Начать через @premiumsendbot
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Это то же самое, что официальные способы Telegram?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Нет, это третий, отдельный способ. Всего есть 3 способа купить Telegram Stars: официальное приложение (международная Visa/Mastercard, в долларах), Fragment.com (TON-криптовалюта) и локальный реселлер через P2P-перевод на карту (в сумах, без иностранной карты или крипты). Полное сравнение всех трёх:{" "}
              <Link href="/ru/maqolalar/stars-sotib-olishning-necha-yoli-bor" className="text-primary font-semibold hover:underline">«Сколько способов купить Telegram Stars»</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Часто задаваемые вопросы (FAQ)</h2>
            <div className="space-y-4">
              {[
                { q: "Можно ли купить Telegram Stars, переведя деньги напрямую на карту?", a: "Да. Mini App показывает карту и сумму, вы делаете P2P-перевод через своё банковское приложение, Stars зачисляются автоматически." },
                { q: "Не опасно ли переводить деньги на незнакомый номер карты?", a: "Через официальную ссылку @premiumsendbot не опасно — карта принадлежит сервису, данные карты или пароль у вас не запрашиваются." },
                { q: "Почему в официальном приложении Telegram нельзя купить Stars переводом на карту?", a: "Официальное приложение принимает только международные Visa/Mastercard или TON, Uzcard/Humo не подключены к этим сетям." },
                { q: "С какими картами (Uzcard, Humo, Click, Payme) это работает?", a: "Со всеми — цена и процесс одинаковы." },
                { q: "Через сколько приходят Stars после перевода?", a: "Обычно за несколько минут." },
                { q: "Что будет, если перевести неправильную сумму?", a: "Обратитесь в поддержку бота — проблема решается." },
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
              <div className="absolute inset-0 opacity-10"><div className="absolute top-5 left-5 w-32 h-32 bg-white rounded-full blur-2xl" /></div>
              <div className="relative">
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  Покупайте Stars переводом на карту, в сумах — <strong className="text-white">@premiumsendbot</strong>: 50 Stars от <strong className="text-white">15 000 сум</strong>, за несколько минут.
                </p>
                <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                  Начать переводом на карту
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
