import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Подарить 6 месяцев Telegram Premium — полугодовой gift близким",
  description:
    "Подарить 6 месяцев Telegram Premium за 235 000 сум (39 167 в месяц), Uzcard/Humo. В @PremiumSendBot вводите username и отправляете полугодовой Premium gift.",
  keywords: [
    "подарить 6 месяцев Telegram Premium",
    "telegram premium 6 месяцев gift",
    "telegram premium 6 месяцев подарок",
    "полугодовой telegram premium подарок",
    "telegram premium 6 месяцев близким",
    "цена 6 месяцев telegram premium gift",
    "telegram premium gift узбекистан 6 месяцев",
    "PremiumSendBot 6 месяцев gift",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/ru/maqolalar/6-oylik-telegram-premium-sovga-qilish",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/6-oylik-telegram-premium-sovga-qilish",
      ru: "https://premiumsend.uz/ru/maqolalar/6-oylik-telegram-premium-sovga-qilish",
      "x-default": "https://premiumsend.uz/maqolalar/6-oylik-telegram-premium-sovga-qilish",
    },
  },
  openGraph: {
    title:
      "Подарить 6 месяцев Telegram Premium — полугодовой gift",
    description:
      "Подарите близким 6 месяцев Telegram Premium — 235 000 сум, Uzcard/Humo. 180 дней ежедневно напоминающий подарок.",
    url: "https://premiumsend.uz/ru/maqolalar/6-oylik-telegram-premium-sovga-qilish",
    type: "article",
    publishedTime: "2026-05-11",
  },
};

export default function Article6MonthGiftRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Подарить 6 месяцев Telegram Premium — полугодовой gift близким",
    description:
      "Подарить 6 месяцев Telegram Premium — через @PremiumSendBot отправить другу, члену семьи или коллеге 6 месячный Premium gift за 235 000 сум — полное руководство.",
    datePublished: "2026-05-11",
    dateModified: "2026-05-11",
    author: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    publisher: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    mainEntityOfPage:
      "https://premiumsend.uz/ru/maqolalar/6-oylik-telegram-premium-sovga-qilish",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Можно ли подарить 6 месяцев Telegram Premium?", acceptedAnswer: { "@type": "Answer", text: "Да. Через @PremiumSendBot можно отправить любому пользователю по @username 6 месячный Premium gift. По правилам Telegram 1 месячного gift нет, но 3, 6, 12 месячные полностью поддерживаются. Активируется без согласия получателя и работает 180 дней." } },
      { "@type": "Question", name: "Сколько стоит 6 месячный Telegram Premium gift?", acceptedAnswer: { "@type": "Answer", text: "В Premium Send 6 месячный gift — 235 000 сум (39 167 в месяц). По сравнению с 6 разовой оплатой 1 месячного gift (354 000 сум) экономия 119 000 сум, ~33% дешевле. Оплата через Uzcard, Humo, Click или Payme в сумах." } },
      { "@type": "Question", name: "Как отправить 6 месячный Telegram Premium gift?", acceptedAnswer: { "@type": "Answer", text: "Откройте @PremiumSendBot, выберите 6 месячный тариф, введите Telegram @username получателя подарка, бот покажет карту и сумму 235 000 сум, переведите через Click/Uzcard/Humo на эту карту. За 5 минут Premium gift активируется на аккаунте получателя на 180 дней." } },
      { "@type": "Question", name: "Должен ли получатель согласиться?", acceptedAnswer: { "@type": "Answer", text: "Нет. Telegram Premium gift активируется автоматически, согласие не требуется. Только убедитесь в правильности username — gift отменить нельзя." } },
      { "@type": "Question", name: "Почему 6 месяцев — что отличает от 3 или 12 месяцев?", acceptedAnswer: { "@type": "Answer", text: "6 месяцев — сбалансированная середина для подарка. 3 месяца (175 000) — короткий срок, эффект подарка быстро уходит. 12 месяцев (425 000) — большой бюджет. 6 месяцев 235 000 — полгода ежедневного напоминания о подарке в Telegram, без нагрузки на бюджет. Идеально для дня рождения, нового года или юбилея." } },
      { "@type": "Question", name: "Можно ли отправить 6 месячный gift через официальное приложение Telegram?", acceptedAnswer: { "@type": "Answer", text: "Нет. В официальной gift функции Telegram только 1 и 12 месяцы — 6 месячного gift нет. Также требуется зарубежная карта (Visa/Mastercard). Через @PremiumSendBot же 6 месячный gift доступен с оплатой Uzcard, Humo, Click или Payme в сумах." } },
      { "@type": "Question", name: "Когда придёт получателю?", acceptedAnswer: { "@type": "Answer", text: "После подтверждения платежа за 1-5 минут Premium активируется на аккаунте получателя. Появляется звёздочка рядом с профилем и в течение 180 дней он может пользоваться всеми Premium функциями: 4 ГБ файлы, анимированные эмодзи, Telegram без рекламы, премиум реакции и другое." } },
      { "@type": "Question", name: "Если ввёл неправильный username — деньги вернутся?", acceptedAnswer: { "@type": "Answer", text: "Если Premium ещё не активирован (введённый username не существует в Telegram) — платёж возвращается полностью. Но после активации gift отменить нельзя — деньги не возвращаются. Поэтому перед оплатой проверьте username дважды." } },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: "https://premiumsend.uz/ru" },
      { "@type": "ListItem", position: 2, name: "Статьи", item: "https://premiumsend.uz/ru/maqolalar" },
      { "@type": "ListItem", position: 3, name: "Подарить 6 месяцев Telegram Premium", item: "https://premiumsend.uz/ru/maqolalar/6-oylik-telegram-premium-sovga-qilish" },
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
        <span className="text-foreground font-medium">Подарить 6 месяцев Telegram Premium</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">Руководство</span>
            <time className="text-xs text-muted" dateTime="2026-05-11">11 мая 2026 года</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Подарить 6 месяцев Telegram Premium — близким
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>Краткий ответ:</strong> подарить 6 месяцев Telegram Premium — это отправить на аккаунт друга, члена семьи или коллеги 180 дневную Premium подписку как gift.{" "}
              <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>{" "}
              — выбираете 6 месячный тариф, вводите @username получателя, бот показывает перевод на карту 235 000 сум, оплачиваете через Click/Uzcard/Humo. За 5 минут gift активируется на том аккаунте. <strong>В месяц 39 167 сум</strong> — на 33% дешевле помесячного gift.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Полугодовой подарок — редкость в индустрии подарков. Цветы вянут на следующий день, парфюм заканчивается за месяц, книгу прочитают за неделю и положат в сторону. 6 месячный Telegram Premium gift же используется <strong>180 дней ежедневно</strong> — каждый раз при открытии Telegram напоминает о вашем подарке. Идеально для дня рождения, нового года, юбилея, благодарности коллеге или заботы о родителях.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 — How it works */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Как работает 6 месячный Telegram Premium gift?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Краткий ответ:</strong> вы платите — Premium активируется на 6 месяцев на аккаунте получателя. Достаточно знать username.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Механизм Telegram Premium gift — один пользователь оплачивает, а Premium включается на аккаунте другого. Сам Telegram имеет такую функцию (с 2022 года), но для пользователей Узбекистана она почти не работает: только 1 и 12 месячные варианты, только зарубежные карты. 3, 6 месячные gift и оплата в сумах же доступны через <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>.
            </p>
            <p className="text-muted leading-relaxed">
              В боте — выбираете 6 месячный тариф, вводите @username получателя и платите через Click/Uzcard/Humo. Получатель ничего не делает — при следующем открытии Telegram видит звёздочку рядом с профилем. 180 дней он будет пользоваться 4 ГБ файлами, анимированными эмодзи, премиум стикерами, Telegram без рекламы и другими Premium функциями.
            </p>
          </section>

          {/* Section 2 — Why 6 months */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Почему именно 6 месячный gift логичен?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Краткий ответ:</strong> 6 месяцев — &quot;сбалансированная середина&quot; для подарка: не короткий как 3 месяца, не тяжёлый как 12, эффект подарка сохраняется 180 дней.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Через Premium Send доступны 3, 6 и 12 месячные gift. 1 месячный gift вообще запрещён правилами Telegram. Сравнение для подарка:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Срок</div>
                <div className="text-center">Цена</div>
                <div className="text-center">В месяц</div>
                <div className="text-center">Для подарка</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">3 месяца</div>
                <div className="text-center text-muted">175 000 сум</div>
                <div className="text-center text-muted">58 333 сум</div>
                <div className="text-center text-muted">Короткий, но дешёвый</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm bg-primary-light/30">
                <div className="font-bold text-primary">6 месяцев ⭐</div>
                <div className="text-center text-primary font-medium">235 000 сум</div>
                <div className="text-center text-primary font-medium">39 167 сум</div>
                <div className="text-center text-primary font-medium">Самый сбалансированный</div>
              </div>
              <div className="grid grid-cols-4 p-4 items-center text-sm">
                <div className="font-medium">12 месяцев</div>
                <div className="text-center text-muted">425 000 сум</div>
                <div className="text-center text-muted">35 417 сум</div>
                <div className="text-center text-muted">Самый длинный, дорогой</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">По сравнению с 3 месячным:</strong> 6 месячный всего на 60 000 сум дороже, но <strong>в 2 раза дольше</strong>. На 3 месячном эффект быстро тускнеет — 90 дней не так много. На 6 месячном получатель пол года ежедневно ощущает Premium опыт.
            </p>
            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">По сравнению с 12 месячным:</strong> 12 месячный 425 000 сум — большой бюджет на подарок. 6 месячный 235 000 — почти половина цены, но полугодовой сервис. Если 12 месячный планируете для себя, а на подарок меньший бюджет — 6 месячный закроет задачу.
            </p>
          </section>

          {/* Section 3 — Step by step */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Отправка 6 месячного gift — 6 шагов
            </h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Краткий ответ:</strong> @PremiumSendBot откройте → выберите 6 месячный → введите @username получателя → бот даёт карту и сумму 235 000 сум → переведите через Click/Uzcard/Humo → за 5 минут gift активируется.
              </p>
            </div>

            <div className="space-y-4 mb-6">
              {[
                { step: "1", title: "Откройте @PremiumSendBot в Telegram", desc: "В строке поиска Telegram наберите @PremiumSendBot и откройте бот. Нажмите /start — бот покажет список тарифов." },
                { step: "2", title: "Из меню выберите 6 месячный тариф", desc: "Появятся 4 тарифа: 1, 3, 6, 12 месяцев. \"6 месяцев\" — цена 235 000 сум, в месяц 39 167. Нажмите его как gift — бот спросит username." },
                { step: "3", title: "Введите @username получателя подарка", desc: "Сюда вводите именно username ПОЛУЧАТЕЛЯ подарка (не свой). Начинайте с @. Проверьте дважды — после активации gift отменить нельзя." },
                { step: "4", title: "Бот показывает номер карты и точную сумму", desc: "На экране номер карты (8600 XXXX XXXX XXXX) и ровно 235 000 сум. Также может быть код для проверки." },
                { step: "5", title: "Оплатите через Click, Uzcard, Humo или Payme", desc: "Самые быстрые — Click или Payme (1-2 минуты, PIN/Face ID). Через приложение Uzcard/Humo тоже можно. Переводите ровно 235 000 сум на ту карту." },
                { step: "6", title: "Gift активируется за 5 минут — подарок готов!", desc: "Система автоматически распознаёт платёж. Premium включается на аккаунте получателя на 180 дней, появляется звёздочка рядом с профилем. Telegram не отправляет отдельное уведомление \"пришёл подарок\" — Premium активируется как обычное обновление подписки. Чтобы был сюрприз, напишите получателю отдельно." },
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
              <strong className="text-foreground">Самое важное — на 3-м шаге правильный username.</strong> Это username получателя — не ваш. Если сомневаетесь, спросите получателя напрямую: &quot;Какой у тебя Telegram username?&quot; После активации Premium перенести на другой аккаунт нельзя.
            </p>
          </section>

          {/* Mid CTA */}
          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Подарите близким 6 месяцев Telegram Premium.{" "}
                <strong className="text-white">@PremiumSendBot</strong> — выберите 6 месячный тариф, введите @username получателя, оплатите 235 000 сум. Полугодовой подарок, ежедневно напоминающий.
              </p>
              <Link href="https://t.me/premiumsendbot" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                6 месячный gift — отправить
              </Link>
            </div>
          </section>

          {/* Section 4 — When it makes sense */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              В каких случаях 6 месячный gift идеален?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              6 месячный gift подходит не везде — иногда достаточно 3 месячного, иногда нужен 12 месячный. Но следующие 5 случаев созданы именно для 6 месячного:
            </p>

            <div className="space-y-6 mb-6">
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">🎂 День рождения или юбилей</h3>
                <p className="text-sm text-muted leading-relaxed">
                  30 лет, 25 лет, 18 лет — для памятных дат нужен подарок, который служит дольше цветов или гаджета. 6 месячный Premium 180 дней ежедневно напоминает в Telegram. 3 месячный быстро заканчивается, 12 месячный тяжёл по бюджету — 6 месячный аккурат середина.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">🎁 Новый год или Навруз</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Праздничный подарок 6 месячный — то что нужно: дотягивает до следующего полугодового праздника (от Нового года до Навруза 3 месяца, от Навруза до Дня независимости 5 месяцев). Получатель пол года сохраняет праздничное настроение.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">👨‍👩‍👧 Родителям или близкому члену семьи</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Родители ежедневно пользуются Telegram, читают каналы, обмениваются видео с внуками. Реклама мешает, лимит файла 1 ГБ затрудняет отправку видео. 6 месячный Premium — конкретный знак вашей заботы. 235 000 сум — не дорого, но подарок используется каждый день.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">💼 Коллеге или бизнес партнёру в благодарность</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Большой проект завершён, дедлайн соблюдён, партнёр принёс прибыль вашей компании. Простое &quot;спасибо&quot; не достаточно, дорогой подарок может быть неуместным. 6 месячный Premium — на профессиональном уровне передаёт &quot;я ценю вас&quot;. В бизнес среде очень тонкий и уместный.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">🎓 Студенту или преподавателю</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Брату/сестре студентке, любимому преподавателю, или поздравление с окончанием университета. 6 месяцев — продолжительность семестра или половина учебного года. Премиум каналы, файлы, более быстрый Telegram — реально полезно для студента и преподавателя.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Если не знаете какой срок выбрать и сомневаетесь — 6 месячный всегда безопасный выбор. Чаще всего он подходит лучше, чем 3 или 12 месячный.
            </p>
          </section>

          {/* Section 5 — Telegram official vs bot */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Telegram официальный gift vs @PremiumSendBot
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              В самом Telegram есть gift функция, но для пользователя Узбекистана она почти не работает. Сравнение в таблице:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Особенность</div>
                <div className="text-center">Telegram официальный</div>
                <div className="text-center text-primary">@PremiumSendBot</div>
              </div>
              {[
                { feature: "6 месячный gift", official: "Нет", bot: "Есть — 235 000 сум" },
                { feature: "Uzcard / Humo", official: "Нет", bot: "Есть" },
                { feature: "Click / Payme", official: "Нет", bot: "Есть" },
                { feature: "Оплата в сумах", official: "Нет ($/€)", bot: "Да — 235 000 сум" },
                { feature: "Зарубежная карта обязательна", official: "Да — обязательно", bot: "Нет" },
                { feature: "Помощь на узбекском/русском", official: "Нет", bot: "Да" },
                { feature: "Время активации", official: "Сразу", bot: "1-5 минут" },
              ].map((row, i) => (
                <div key={i} className={`grid grid-cols-3 p-4 items-center text-sm ${i < 6 ? "border-b border-card-border" : ""}`}>
                  <div className="font-medium text-foreground">{row.feature}</div>
                  <div className="text-center text-muted">{row.official}</div>
                  <div className="text-center text-primary font-medium">{row.bot}</div>
                </div>
              ))}
            </div>

            <p className="text-muted leading-relaxed">
              Главное отличие — в официальном приложении Telegram 6 месячного gift вообще нет. Только 1 месячный (с зарубежной картой) и 12 месячный (с зарубежной картой). Местный реселлер — единственный путь.
            </p>
          </section>

          {/* Section 6 — Common questions */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Частые вопросы перед отправкой gift
            </h2>

            <div className="space-y-4 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Как получатель узнаёт, что пришёл gift?</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Telegram в bulk gift механизме <strong>не отправляет отдельное уведомление</strong> типа &quot;вам пришёл gift&quot; — Premium активируется на аккаунте <strong>как обычное обновление подписки</strong> (звёздочка рядом с профилем, в Settings → Premium виден). Telegram не показывает, что это подарок. Поэтому получатель может не заметить — вам нужно <strong>отдельно написать сообщение</strong>: &quot;Я подарил тебе 6 месяцев Premium, открой Telegram, рядом с профилем будет звёздочка&quot;. Сюрприз — хорошо, но получатель не должен остаться без информации.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Username нет — могу ли отправить по номеру?</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Нет. Для Premium gift нужен Telegram <strong>username</strong> (начинается с @). Если у получателя его нет, попросите перед отправкой установить username в Telegram Settings → Username. Это занимает 30 секунд.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">У получателя уже есть Premium — gift пропадёт?</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Нет, Telegram работает умно: новые 6 месяцев добавляются к концу существующей подписки Premium. То есть если текущий Premium заканчивается через 2 месяца, ваши 6 месяцев добавятся, итого 8 месяцев. Подарок не пропадёт.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Telegram покажет, что я отправил gift?</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Нет. Так как gift через местного реселлера, он не отмечается Telegram&apos;ом как &quot;@username отправил вам gift&quot;. Premium активируется в обычном виде. Если вы отдельно напишете — получатель узнает, что от вас.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Частые вопросы</h2>
            <div className="space-y-4">
              {[
                { q: "Можно ли подарить 6 месяцев Telegram Premium?", a: "Да. Через @PremiumSendBot можно отправить 6 месячный gift по @username другого пользователя. По правилам Telegram 1 месячный gift запрещён, но 3, 6, 12 месячные полностью поддерживаются." },
                { q: "Сколько стоит 6 месячный gift?", a: "235 000 сум — 39 167 в месяц. По сравнению с 6-кратной оплатой 1 месячного gift (354 000) экономия 119 000 сум, на 33% дешевле." },
                { q: "Как отправляется?", a: "В @PremiumSendBot выберите 6 месячный → введите @username получателя → бот даёт карту и сумму 235 000 сум → оплатите через Click/Uzcard/Humo. За 5 минут gift активируется." },
                { q: "Должен ли получатель согласиться?", a: "Нет, gift активируется автоматически. Только введите правильный username — gift отменить нельзя." },
                { q: "Есть ли 6 месячный gift в официальном приложении Telegram?", a: "Нет. В Telegram только 1 и 12 месячные gift, только с зарубежной картой. 6 месячный gift и оплата в сумах — через местного реселлера." },
                { q: "Придёт за 5 минут?", a: "Да, после подтверждения платежа в течение 1-5 минут Premium активируется на аккаунте получателя на 180 дней. Появляется звёздочка рядом с профилем." },
                { q: "Если ввёл неправильный username, деньги вернутся?", a: "Если Premium ещё не активирован (username не существует в Telegram) — платёж возвращается. Но после активации gift отменить нельзя." },
                { q: "Узнает ли получатель, что пришёл gift?", a: "Telegram в bulk gift механизме не отправляет уведомление \"вам пришёл gift\" — Premium активируется как обычное обновление подписки (звёздочка рядом с профилем). Telegram не показывает, что это подарок и кто отправил. Получатель может не заметить, поэтому напишите ему отдельно." },
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
              <h3 className="text-lg font-bold text-foreground mb-4 text-center">6 месячный gift — в цифрах</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">235 000</p>
                  <p className="text-sm text-muted">сум, без дополнительной комиссии</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">180 дней</p>
                  <p className="text-sm text-muted">напоминающий подарок</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">~33%</p>
                  <p className="text-sm text-muted">экономия от 6× помесячного gift</p>
                </div>
              </div>
            </div>
          </section>

          {/* Related */}
          <section>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-card-border">
              <h3 className="text-lg font-bold text-foreground mb-4">Подарок и 6 месячный — другие статьи</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/ru/maqolalar/3-oylik-telegram-premium-sovga-qilish" className="text-primary font-semibold hover:underline">Подарить 3 месяца Telegram Premium</Link></li>
                <li><Link href="/ru/maqolalar/12-oylik-telegram-premium-sovga-qilish" className="text-primary font-semibold hover:underline">Подарить 12 месяцев Telegram Premium</Link></li>
                <li><Link href="/ru/maqolalar/6-oylik-telegram-premium-sotib-olish" className="text-primary font-semibold hover:underline">6 месячный Premium — общее руководство</Link></li>
                <li><Link href="/ru/maqolalar/6-oylik-telegram-premium-humo-orqali" className="text-primary font-semibold hover:underline">6 месячный Premium через Humo</Link></li>
                <li><Link href="/ru/maqolalar/6-oylik-telegram-premium-click-orqali" className="text-primary font-semibold hover:underline">6 месячный Premium через Click</Link></li>
                <li><Link href="/ru/maqolalar/telegram-premium-narxlari" className="text-primary font-semibold hover:underline">Цены тарифов Premium (1, 3, 6, 12 месяцев)</Link></li>
              </ul>
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
                  6 месячный Telegram Premium gift — полугодовая служба, ежедневно напоминающий подарок. 235 000 сум, 39 167 в месяц, активация за 5 минут. Идеально для дня рождения, праздника, благодарности коллеге или заботы о родителях.{" "}
                  <strong className="text-white">@PremiumSendBot</strong> — начните в нём.
                </p>
                <Link href="https://t.me/premiumsendbot" target="_blank" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  Отправить 6 месячный gift
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
