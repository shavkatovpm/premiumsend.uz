import type { Metadata } from "next";
import Link from "next/link";
import { ogBaseRu } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title: "Нет зарубежной карты — как получить Telegram Stars?",
  description:
    "Получить Telegram Stars без зарубежной карты (Visa/Mastercard) можно: 2 из 3 способов — местный реселлер (в сумах) и Fragment (TON) — карту не требуют. Дополнительный вариант: подарок от знакомого за границей. Кому что подходит.",
  keywords: [
    "stars без зарубежной карты",
    "telegram stars без visa",
    "нет международной карты как купить stars",
    "telegram stars без карты",
    "stars без mastercard",
    "можно ли купить stars с uzcard",
  ],
  alternates: {
    canonical: "https://premiumsend.uz/ru/maqolalar/xorijiy-kartasiz-stars-sotib-olish",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/xorijiy-kartasiz-stars-sotib-olish",
      ru: "https://premiumsend.uz/ru/maqolalar/xorijiy-kartasiz-stars-sotib-olish",
      "x-default": "https://premiumsend.uz/maqolalar/xorijiy-kartasiz-stars-sotib-olish",
    },
  },
  openGraph: {
    ...ogBaseRu,
    title: "Нет зарубежной карты — как получить Telegram Stars?",
    description:
      "Способы, которые работают без Visa/Mastercard, и какой из них подходит вам — с таблицей выбора.",
    url: "https://premiumsend.uz/ru/maqolalar/xorijiy-kartasiz-stars-sotib-olish",
    type: "article",
    publishedTime: "2026-09-30",
  },
};

export default function ArticleXorijiyKartasizStarsRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Нет зарубежной карты — как получить Telegram Stars?",
    description:
      "Реальные способы получить Telegram Stars для пользователя без зарубежной карты (Visa/Mastercard): местный реселлер, подарок и Fragment.",
    datePublished: "2026-09-30",
    dateModified: "2026-09-30",
    author: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    publisher: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    mainEntityOfPage: "https://premiumsend.uz/ru/maqolalar/xorijiy-kartasiz-stars-sotib-olish",
    inLanguage: "ru",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Можно ли получить Telegram Stars без зарубежной карты?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Из 3 способов купить Stars международную карту требует только официальное приложение. Два других работают без зарубежной карты: оплата в сумах через местного реселлера (например, @premiumsendbot) и покупка через Fragment за криптовалюту TON. Дополнительный вариант — знакомый с зарубежной картой дарит вам Stars.",
        },
      },
      {
        "@type": "Question",
        name: "Почему в приложении Telegram нельзя купить Stars с Uzcard или Humo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Внутри приложения Telegram продаёт Stars через App Store, Google Play или @PremiumBot. Эти платежи проходят через международные платёжные системы, а Uzcard и Humo — местные сети, поэтому в таких платежах они не принимаются.",
        },
      },
      {
        "@type": "Question",
        name: "Какой способ без зарубежной карты самый простой?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Для большинства — местный реселлер. В @premiumsendbot Mini App показывает номер карты и точную сумму, вы переводите из своего приложения Uzcard, Humo, Click или Payme, Stars зачисляются автоматически. Цена: 300 сумов за звезду, 50 Stars — 15 000 сумов.",
        },
      },
      {
        "@type": "Question",
        name: "Может ли родственник за границей подарить мне Stars?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. В Telegram можно купить Stars в подарок контакту (через раздел Настройки → My Stars). Оплачивает даритель своей картой, вам карта не нужна.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли купить Stars через Fragment без карты?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fragment принимает не карты, а криптовалюту TON. То есть карта не нужна, но нужны TON-кошелёк и опыт покупки TON — для новичка это самый сложный путь.",
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
      { "@type": "ListItem", position: 3, name: "Stars без зарубежной карты", item: "https://premiumsend.uz/ru/maqolalar/xorijiy-kartasiz-stars-sotib-olish" },
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
        <span className="text-foreground font-medium">Stars без зарубежной карты</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">Руководство по оплате</span>
            <time className="text-xs text-muted" dateTime="2026-09-30">30 сентября 2026</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Нет зарубежной карты — как получить Telegram Stars?
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-sm font-bold text-primary mb-2">КРАТКИЙ ОТВЕТ</p>
            <p className="text-foreground leading-relaxed font-medium">
              Да, <strong>получить Stars можно и без зарубежной карты</strong>. Из 3 способов купить Stars международную карту требует только официальное приложение. Два других работают без неё: через местного реселлера в сумах (например,{" "}
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="text-primary hover:underline">@premiumsendbot</Link>,
              с Uzcard/Humo/Click/Payme) и через Fragment за криптовалюту TON. Дополнительный вариант — знакомый за границей дарит вам Stars. Для большинства самый простой — местный реселлер.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Как получить Telegram Stars без зарубежной карты — один из самых частых вопросов в Узбекистане. Без Visa или Mastercard кнопка «Buy Stars» в приложении оплату не проводит. Ниже — почему так происходит и что именно требует каждый способ, для которого карта не нужна.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Почему для покупки Stars в самом Telegram нужна зарубежная карта?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Потому что покупка внутри приложения проходит через международные платёжные системы. Согласно разделу 2 условий Telegram Stars, Stars приобретаются через <strong>встроенные покупки</strong> в приложениях для iOS и Android (App Store / Google Play) и через <strong>@PremiumBot</strong> — это оплата в долларах международной картой.
            </p>
            <p className="text-muted leading-relaxed">
              Uzcard и Humo — местные платёжные сети, поэтому в таких платежах они не принимаются. Подробно о причинах — в статье{" "}
              <Link href="/ru/maqolalar/uzcard-humo-app-store-play-market-ishlamaydi" className="text-primary font-semibold hover:underline">почему Uzcard/Humo не работают в App Store</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Какие способы остаются без зарубежной карты?</h2>
            <p className="text-muted leading-relaxed mb-4">
              2 способа без зарубежной карты, дополнительный вариант с подарком и что требуется для каждого:
            </p>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto mb-4">
              <table className="w-full text-sm min-w-[600px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">Способ</th>
                    <th className="p-4 text-left font-bold">Что нужно от вас</th>
                    <th className="p-4 text-left font-bold">Оплата</th>
                    <th className="p-4 text-left font-bold">Кому подходит</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Местный реселлер</td>
                    <td className="p-4">Карта Uzcard/Humo и банковское приложение</td>
                    <td className="p-4">В сумах, P2P-перевод</td>
                    <td className="p-4">Большинству — самый простой путь</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Fragment.com</td>
                    <td className="p-4">TON-кошелёк и криптовалюта TON</td>
                    <td className="p-4">Криптовалюта TON</td>
                    <td className="p-4">Тем, кто знаком с криптой</td>
                  </tr>
                  <tr className="border-b border-card-border last:border-b-0">
                    <td className="p-4 font-medium">Подарок от знакомого (доп. вариант)</td>
                    <td className="p-4">Знакомый с зарубежной картой</td>
                    <td className="p-4">Даритель платит в официальном приложении</td>
                    <td className="p-4">Тем, у кого родные за границей</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              Полное сравнение всех трёх способов, включая официальное приложение, по цене — в статье{" "}
              <Link href="/ru/maqolalar/stars-sotib-olishning-necha-yoli-bor" className="text-primary font-semibold hover:underline">сравнение способов покупки Stars</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Как получить Stars через местного реселлера без зарубежной карты?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Вам нужна только обычная карта Uzcard или Humo. В @premiumsendbot процесс такой:
            </p>
            <div className="space-y-4 mb-6">
              {[
                { step: "1", title: "Откройте @premiumsendbot", desc: "Откройте бота в Telegram и запустите Mini App внутри него." },
                { step: "2", title: "Выберите количество Stars", desc: "Пакеты от 50 до 5000, 300 сумов за звезду." },
                { step: "3", title: "Переведите на указанную карту", desc: "Mini App показывает номер карты и точную сумму — вы переводите её из своего банковского приложения (Uzcard, Humo, Click, Payme)." },
                { step: "4", title: "Stars зачисляются автоматически", desc: "После определения платежа Stars обычно появляются на аккаунте за несколько минут." },
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
              Подробнее о переводе:{" "}
              <Link href="/ru/maqolalar/stars-kartaga-otkazma" className="text-primary font-semibold hover:underline">покупка Stars переводом на карту</Link>.
              Честно: Premium Send — не официальный партнёр Telegram, а независимый местный реселлер.
            </p>
          </section>

          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Зарубежная карта не нужна — в <strong className="text-white">@premiumsendbot</strong> покупайте в сумах с карты Uzcard, Humo, Click или Payme.
              </p>
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                @premiumsendbot — начать
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Может ли знакомый за границей подарить мне Stars?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Да. В Telegram можно купить Stars <strong>в подарок</strong> контакту — по данным официального блога Telegram, для этого нужно зайти в Настройки → My Stars. Оплачивает даритель своей картой, получателю карта не нужна.
            </p>
            <p className="text-muted leading-relaxed">
              Минус: способ полностью зависит от другого человека, и просить придётся каждый раз. Даритель при этом платит по цене приложения (в долларах) — сколько стоит{" "}
              <Link href="/ru/maqolalar/1-stars-necha-som-appstore-taqqoslash" className="text-primary font-semibold hover:underline">1 Stars в App Store</Link>, мы разбирали отдельно.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Можно ли купить Stars через Fragment без карты?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Технически да: Fragment.com принимает не карты, а <strong>криптовалюту TON</strong>. Но для этого нужно открыть TON-кошелёк, купить TON и перевести его на кошелёк — это отдельный процесс со своими рисками.
            </p>
            <p className="text-muted leading-relaxed">
              Если вы уже работали с криптой, Fragment может быть удобен. Если впервые — ради одного пакета Stars возня с криптовалютой обычно лишнее усложнение.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Решит ли проблему карта Visa узбекского банка?</h2>
            <p className="text-muted leading-relaxed">
              Не всегда. Visa/Mastercard, выпущенная местным банком, тоже иногда отклоняется в App Store или при оплате в Telegram — причины (VPN или несовпадение региона, подтверждение 3D Secure и другие) разобраны в статье{" "}
              <Link href="/ru/maqolalar/nega-xalqaro-karta-telegram-premiumni-rad-etadi" className="text-primary font-semibold hover:underline">почему отклоняется международная карта</Link>.
              То есть оформлять карту только ради Stars — не гарантированное решение.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Какой способ выбрать?</h2>
            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li><strong>Нужно быстро и просто</strong> → местный реселлер, в сумах</li>
              <li><strong>Есть близкий за границей с картой</strong> → подарок</li>
              <li><strong>Уже есть TON-кошелёк</strong> → Fragment</li>
            </ul>
            <p className="text-muted leading-relaxed">
              Цены:{" "}
              <Link href="/ru/stars" className="text-primary font-semibold hover:underline">все пакеты Stars</Link>{" "}
              (300 сумов за звезду), например{" "}
              <Link href="/ru/50-stars" className="text-primary font-semibold hover:underline">50 Stars — 15 000 сумов</Link> или{" "}
              <Link href="/ru/1000-stars" className="text-primary font-semibold hover:underline">1000 Stars — 300 000 сумов</Link>. Сколько ждать после оплаты:{" "}
              <Link href="/ru/maqolalar/stars-yetkazish-vaqti" className="text-primary font-semibold hover:underline">через сколько приходят Stars</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Частые вопросы (FAQ)</h2>
            <div className="space-y-4">
              {[
                { q: "Можно ли получить Telegram Stars без зарубежной карты?", a: "Да. Из 3 способов международную карту требует только официальное приложение; местный реселлер (в сумах) и Fragment (TON) работают без неё. Дополнительный вариант — подарок от знакомого." },
                { q: "Почему в приложении Telegram нельзя купить Stars с Uzcard или Humo?", a: "Покупка в приложении идёт через App Store, Google Play или @PremiumBot по международным платёжным системам — Uzcard и Humo как местные сети там не принимаются." },
                { q: "Какой способ без зарубежной карты самый простой?", a: "Местный реселлер: в @premiumsendbot переводите на карту из Mini App через своё банковское приложение, Stars зачисляются автоматически. 50 Stars — 15 000 сумов." },
                { q: "Может ли родственник за границей подарить мне Stars?", a: "Да, в Telegram можно купить Stars в подарок контакту (Настройки → My Stars). Оплачивает даритель." },
                { q: "Можно ли купить Stars через Fragment без карты?", a: "Да, но нужны криптовалюта TON и TON-кошелёк — для новичка это самый сложный путь." },
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
                  Stars без Visa/Mastercard — через <strong className="text-white">@premiumsendbot</strong> в сумах, 50 Stars <strong className="text-white">от 15 000 сумов</strong>.
                </p>
                <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                  @premiumsendbot — начать
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
