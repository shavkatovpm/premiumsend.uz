import type { Metadata } from "next";
import Link from "next/link";
import { ogBaseRu } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title: "Безопасно ли покупать Telegram Stars? Признаки обмана и чек-лист проверки",
  description:
    "Безопасно ли покупать Telegram Stars: да, если продавец не просит код входа, пароль или данные карты. 6 признаков поддельного продавца Stars, чек-лист проверки сервиса и что делать, если вас обманули.",
  keywords: [
    "безопасно ли покупать telegram stars",
    "telegram stars безопасность",
    "stars признаки обмана",
    "поддельный продавец stars",
    "stars мошенничество",
    "бесплатные stars обман",
  ],
  alternates: {
    canonical: "https://premiumsend.uz/ru/maqolalar/telegram-stars-xavfsizmi-aldov-belgilari",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/telegram-stars-xavfsizmi-aldov-belgilari",
      ru: "https://premiumsend.uz/ru/maqolalar/telegram-stars-xavfsizmi-aldov-belgilari",
      "x-default": "https://premiumsend.uz/maqolalar/telegram-stars-xavfsizmi-aldov-belgilari",
    },
  },
  openGraph: {
    ...ogBaseRu,
    title: "Безопасно ли покупать Telegram Stars? Признаки обмана и чек-лист проверки",
    description:
      "Риск не в самих Stars, а в выборе продавца. 6 признаков поддельного продавца и чек-лист перед покупкой.",
    url: "https://premiumsend.uz/ru/maqolalar/telegram-stars-xavfsizmi-aldov-belgilari",
    type: "article",
    publishedTime: "2026-10-07",
  },
};

export default function ArticleStarsXavfsizmiRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Безопасно ли покупать Telegram Stars? Признаки обмана и чек-лист проверки",
    description:
      "Реальные риски при покупке Telegram Stars, 6 признаков поддельного продавца, чек-лист проверки надёжного сервиса и шаги на случай обмана.",
    datePublished: "2026-10-07",
    dateModified: "2026-10-07",
    author: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    publisher: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    mainEntityOfPage: "https://premiumsend.uz/ru/maqolalar/telegram-stars-xavfsizmi-aldov-belgilari",
    inLanguage: "ru",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Безопасно ли покупать Telegram Stars?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, если продавец не просит у вас код входа в Telegram, пароль или данные карты. Сами Stars — официальная внутренняя валюта Telegram: риск не в продукте, а в выборе продавца. Любой продавец, который просит код входа, — признак обмана.",
        },
      },
      {
        "@type": "Question",
        name: "Как понять, что продавец Stars — мошенник?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "6 основных признаков: просит код входа или пароль Telegram; обещает бесплатные Stars или генератор; просит номер карты, CVV или код из SMS; пишет вам первым и предлагает оплатить вне бота; username похож на известного бота, но отличается буквой; цена неправдоподобно низкая.",
        },
      },
      {
        "@type": "Question",
        name: "Бот или сайт с бесплатными Telegram Stars — это правда?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет. По условиям Telegram Stars их приобретают через встроенные покупки в приложении и через @PremiumBot — способа под названием «генератор» не существует. Сайты и боты, которые обещают бесплатные Stars и просят код входа или номер телефона, используются для кражи аккаунтов.",
        },
      },
      {
        "@type": "Question",
        name: "Какие данные просит @premiumsendbot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "В Mini App вы выбираете количество Stars, он показывает номер карты и точную сумму, перевод вы делаете в своём банковском приложении. Код входа в Telegram, пароль, номер вашей карты, CVV и код из SMS не запрашиваются.",
        },
      },
      {
        "@type": "Question",
        name: "Stars, купленные у местного реселлера, настоящие?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Локализован только этап оплаты — Stars на аккаунте являются официальным балансом Telegram. Проверить можно в Telegram: Настройки → My Stars.",
        },
      },
      {
        "@type": "Question",
        name: "Я сообщил код входа поддельному продавцу. Что делать?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Сразу откройте в Telegram Настройки → Устройства и завершите чужие сеансы, затем включите двухэтапную аутентификацию (пароль). Если переводили деньги — сохраните чек и обратитесь в банк, а на поддельного бота или аккаунт отправьте жалобу в Telegram.",
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
      { "@type": "ListItem", position: 3, name: "Безопасность покупки Stars", item: "https://premiumsend.uz/ru/maqolalar/telegram-stars-xavfsizmi-aldov-belgilari" },
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
        <span className="text-foreground font-medium">Безопасность покупки Stars</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">Руководство по безопасности</span>
            <time className="text-xs text-muted" dateTime="2026-10-07">7 октября 2026</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Безопасно ли покупать Telegram Stars? Признаки обмана и чек-лист проверки
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-sm font-bold text-primary mb-2">КРАТКИЙ ОТВЕТ</p>
            <p className="text-foreground leading-relaxed font-medium">
              <strong>Да, безопасно</strong> — если продавец не просит у вас код входа в Telegram, пароль или данные карты. Сами Stars — официальная внутренняя валюта Telegram; риск не в продукте, а в выборе продавца. Любой бот, который просит код входа или обещает «бесплатные Stars», — обман. В{" "}
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="text-primary hover:underline">@premiumsendbot</Link>{" "}
              Mini App показывает только карту и сумму, а перевод вы делаете в своём банковском приложении.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Вопрос, безопасно ли покупать Telegram Stars, обычно возникает за минуту до оплаты: «а если деньги уйдут, а Stars не придут?» или «не украдут ли мой аккаунт?». Ниже — где именно находится риск, 6 признаков поддельного продавца и чек-лист, который занимает 2 минуты перед покупкой.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Где именно риск при покупке Telegram Stars?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Риск не в Stars, а на этапе оплаты и в продавце. Существует{" "}
              <Link href="/ru/maqolalar/stars-sotib-olishning-necha-yoli-bor" className="text-primary font-semibold hover:underline">3 способа купить Stars</Link>,
              и в каждом от вас требуют разное — значит, и осторожность нужна в разных местах.
            </p>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto">
              <table className="w-full text-sm min-w-[600px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">Способ</th>
                    <th className="p-4 text-left font-bold">Что от вас требуется</th>
                    <th className="p-4 text-left font-bold">На что обратить внимание</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Официальное приложение (App Store / Google Play)</td>
                    <td className="p-4">Международная Visa/Mastercard</td>
                    <td className="p-4">Оплата идёт через Apple или Google — главное препятствие не риск, а требование к карте</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Fragment.com</td>
                    <td className="p-4">Криптокошелёк и криптовалюта</td>
                    <td className="p-4">Проверить, что адрес сайта именно fragment.com; криптоперевод нельзя отменить</td>
                  </tr>
                  <tr className="border-b border-card-border last:border-b-0">
                    <td className="p-4 font-medium">Местный реселлер</td>
                    <td className="p-4">Перевод в сумах с местной карты</td>
                    <td className="p-4">Подлинность продавца — именно об этом 6 признаков ниже</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Как понять, что продавец Stars — мошенник?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Если встретился хотя бы один из 6 признаков — не платите. Самый надёжный — первый: честному продавцу для отправки Stars не нужен доступ к вашему аккаунту.
            </p>
            <div className="space-y-4 mb-4">
              {[
                { step: "1", title: "Просит код входа или пароль Telegram", desc: "В официальном FAQ Telegram сказано: коды входа нельзя сообщать никому, включая другие сервисы и приложения. Продавец, который просит код, не продаёт Stars — он хочет получить ваш аккаунт." },
                { step: "2", title: "Обещает бесплатные Stars или «генератор»", desc: "По условиям Telegram Stars их приобретают через встроенные покупки в приложении и через @PremiumBot. Сайта или бота, который «генерирует» бесплатные Stars, не существует." },
                { step: "3", title: "Просит номер вашей карты, CVV или код из SMS", desc: "При переводе с карты на карту вы видите только карту получателя. Если требуют написать данные своей карты в чат или на незнакомом сайте — остановитесь." },
                { step: "4", title: "Пишет первым и предлагает оплатить вне бота", desc: "Личное сообщение от «админа» или «менеджера» с текстом «переведите на эту карту» — распространённая схема. Реквизиты берите только внутри бота самого сервиса." },
                { step: "5", title: "Username похож на известного бота, но отличается", desc: "Лишняя буква, подчёркивание или цифра — признак подделки. Заходите в бота не через поиск, а по ссылке с официального сайта сервиса." },
                { step: "6", title: "Цена неправдоподобно низкая", desc: "Для сравнения: на Fragment.com 1000 Stars стоят 15 долларов (октябрь 2026). Предложение в несколько раз дешевле должно вызывать вопросы." },
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
            <p className="text-muted leading-relaxed text-sm">
              Источник: FAQ Telegram (telegram.org/faq, раздел о кодах входа) и условия Telegram Stars (telegram.org/tos/stars, раздел 2).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Как проверить продавца Stars перед покупкой?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Ответьте на 5 вопросов — это занимает около 2 минут. Если на все ответ «да», риск заметно ниже.
            </p>
            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li><strong>Сайт и бот ссылаются друг на друга?</strong> На сайте должен быть адрес бота, в боте — адрес сайта</li>
              <li><strong>Цена указана открыто?</strong> Стоимость каждого пакета должна быть видна до оплаты, а не «договоримся в личке»</li>
              <li><strong>Канал связи один и понятный?</strong> Заранее узнайте, кому писать при проблеме</li>
              <li><strong>Как сервис себя называет?</strong> Если местный сервис называет себя «официальным партнёром Telegram» — это настораживающий признак</li>
              <li><strong>Можно ли начать с малого пакета?</strong> Первую покупку сделайте самым маленьким пакетом и проверьте весь процесс</li>
            </ul>
            <p className="text-muted leading-relaxed">
              Эти правила так же работают и для Premium — схемы обмана там разобраны в статье{" "}
              <Link href="/ru/maqolalar/telegram-premium-xavfsiz-aldovdan-saqlanish" className="text-primary font-semibold hover:underline">как не попасться на обман при покупке Telegram Premium</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Что @premiumsendbot просит у вас, а что — нет?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Нужно только выбрать количество Stars и сделать перевод на указанную карту. Mini App показывает номер карты и точную сумму, а перевод вы выполняете и проверяете сами в своём банковском приложении (Uzcard, Humo, Click или Payme).
            </p>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto mb-4">
              <table className="w-full text-sm min-w-[480px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">Запрашивается</th>
                    <th className="p-4 text-left font-bold">Не запрашивается</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-card-border">
                    <td className="p-4">Количество Stars (от 50 до 5000)</td>
                    <td className="p-4">Код входа или пароль Telegram</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4">Перевод точной суммы на карту, показанную в Mini App</td>
                    <td className="p-4">Номер вашей карты, CVV или срок действия</td>
                  </tr>
                  <tr className="border-b border-card-border last:border-b-0">
                    <td className="p-4">—</td>
                    <td className="p-4">Код из SMS от банка</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              Честно: Premium Send — не официальный партнёр Telegram, а независимый местный реселлер. Поддержка — только через <strong>@premiumsend_admin</strong>; при проблеме с оплатой каждый случай рассматривается отдельно. Подробнее о механизме перевода:{" "}
              <Link href="/ru/maqolalar/stars-kartaga-otkazma" className="text-primary font-semibold hover:underline">покупка Stars переводом на карту</Link>.
            </p>
          </section>

          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Ни код входа, ни данные карты не нужны — в <strong className="text-white">@premiumsendbot</strong> 50 Stars от 15 000 сумов, самый маленький пакет для пробы.
              </p>
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                @premiumsendbot — начать
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Как проверить, что Stars от реселлера настоящие?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Посмотрите баланс в самом Telegram: <strong>Настройки → My Stars</strong>. Появившиеся там Stars — официальный баланс Telegram, их можно тратить в любом боте, канале или мини-приложении. Реселлер локализует только этап оплаты.
            </p>
            <p className="text-muted leading-relaxed">
              Если продавец говорит «Stars пришли», а баланс в My Stars не изменился — Stars не пришли. Причины задержки и дальнейшие шаги:{" "}
              <Link href="/ru/maqolalar/stars-yetkazish-vaqti" className="text-primary font-semibold hover:underline">через сколько приходят Stars</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Что делать, если меня обманули?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Сначала защитите аккаунт, затем деньги. Порядок важен: если вы сообщили код входа, счёт идёт на минуты.
            </p>
            <div className="space-y-4 mb-4">
              {[
                { step: "1", title: "Завершите чужие сеансы", desc: "В Telegram откройте Настройки → Устройства и закройте все сеансы, которые вам не принадлежат." },
                { step: "2", title: "Включите двухэтапную аутентификацию", desc: "По данным FAQ Telegram, после включения для входа нужен не только код из SMS, но и пароль." },
                { step: "3", title: "Сохраните чек и обратитесь в банк", desc: "Сделайте скриншот чека перевода и напишите в поддержку своего банка или платёжного приложения." },
                { step: "4", title: "Отправьте жалобу в Telegram", desc: "В профиле поддельного бота или аккаунта используйте кнопку «Пожаловаться». Если кто-то действует от вашего имени, FAQ Telegram советует написать в @NoToScam." },
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
              В каких случаях сам Telegram возвращает и не возвращает деньги за Stars:{" "}
              <Link href="/ru/maqolalar/stars-pulini-qaytarish-refund" className="text-primary font-semibold hover:underline">правила возврата Stars</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Как безопасно сделать первую покупку?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Начните с самого маленького пакета и проследите весь процесс сами. На небольшой сумме вы увидите, как работают оплата, зачисление и поддержка, а затем перейдёте к пакету побольше.
            </p>
            <p className="text-muted leading-relaxed">
              В Premium Send цена одинакова для{" "}
              <Link href="/ru/stars" className="text-primary font-semibold hover:underline">всех пакетов Stars</Link>{" "}
              — 300 сумов за звезду: самый маленький —{" "}
              <Link href="/ru/50-stars" className="text-primary font-semibold hover:underline">50 Stars — 15 000 сумов</Link>, самый популярный —{" "}
              <Link href="/ru/1000-stars" className="text-primary font-semibold hover:underline">1000 Stars — 300 000 сумов</Link>. Если думаете о покупке за криптовалюту:{" "}
              <Link href="/ru/maqolalar/fragment-com-telegram-stars-qanday-ishlaydi" className="text-primary font-semibold hover:underline">как купить Stars на Fragment.com</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Частые вопросы (FAQ)</h2>
            <div className="space-y-4">
              {[
                { q: "Безопасно ли покупать Telegram Stars?", a: "Да, если продавец не просит код входа, пароль или данные карты. Риск не в Stars, а в выборе продавца." },
                { q: "Как понять, что продавец Stars — мошенник?", a: "Просит код входа или данные карты, обещает бесплатные Stars, пишет первым, username похож на известный, но отличается, или цена неправдоподобно низкая." },
                { q: "Бот или сайт с бесплатными Telegram Stars — это правда?", a: "Нет. В условиях Stars такого способа нет — подобные предложения используются для кражи аккаунтов." },
                { q: "Какие данные просит @premiumsendbot?", a: "Только количество Stars. Mini App показывает карту и сумму, перевод вы делаете в своём банковском приложении — код входа, пароль и данные карты не запрашиваются." },
                { q: "Stars, купленные у местного реселлера, настоящие?", a: "Да, это официальный баланс Telegram. Проверьте в Настройки → My Stars." },
                { q: "Я сообщил код входа поддельному продавцу. Что делать?", a: "Завершите чужие сеансы в Настройки → Устройства, включите двухэтапную аутентификацию, а если переводили деньги — обратитесь в банк с чеком." },
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
                  Покупайте Stars безопасно — через <strong className="text-white">@premiumsendbot</strong> в сумах, 50 Stars <strong className="text-white">от 15 000 сумов</strong>, с вопросами поможет @premiumsend_admin.
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
