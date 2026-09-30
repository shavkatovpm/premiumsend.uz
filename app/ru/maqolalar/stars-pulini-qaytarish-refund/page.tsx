import type { Metadata } from "next";
import Link from "next/link";
import { ogBaseRu } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title: "Возвращают ли деньги за Telegram Stars? Правила возврата и исключения",
  description:
    "Правила возврата Telegram Stars: за ненужную покупку деньги не возвращают, но если бот не оказал услугу — Stars вернут, а в @premiumsendbot при прошедшей оплате без зачисления Stars — полный возврат. Когда возвращают, а когда нет — в таблице.",
  keywords: [
    "возврат telegram stars",
    "вернут ли деньги за stars",
    "telegram stars refund",
    "как вернуть stars",
    "бот не возвращает stars",
    "возврат денег за звёзды telegram",
  ],
  alternates: {
    canonical: "https://premiumsend.uz/ru/maqolalar/stars-pulini-qaytarish-refund",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/stars-pulini-qaytarish-refund",
      ru: "https://premiumsend.uz/ru/maqolalar/stars-pulini-qaytarish-refund",
      "x-default": "https://premiumsend.uz/maqolalar/stars-pulini-qaytarish-refund",
    },
  },
  openGraph: {
    ...ogBaseRu,
    title: "Возвращают ли деньги за Telegram Stars? Правила возврата и исключения",
    description:
      "Ненужная покупка — не возвращается. Бот не оказал услугу или оплата прошла без зачисления Stars — возвращается. Все случаи в таблице.",
    url: "https://premiumsend.uz/ru/maqolalar/stars-pulini-qaytarish-refund",
    type: "article",
    publishedTime: "2026-09-30",
  },
};

export default function ArticleStarsRefundRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Возвращают ли деньги за Telegram Stars? Правила возврата и исключения",
    description:
      "Правила возврата Telegram Stars: официальные условия Telegram, возврат через ботов и порядок возврата для платежей через @premiumsendbot.",
    datePublished: "2026-09-30",
    dateModified: "2026-09-30",
    author: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    publisher: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    mainEntityOfPage: "https://premiumsend.uz/ru/maqolalar/stars-pulini-qaytarish-refund",
    inLanguage: "ru",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Возвращают ли деньги за Telegram Stars?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "По общему правилу — нет. Согласно условиям Telegram Stars, продажи Stars окончательны, и Telegram не возвращает деньги за ненужные или случайные покупки. Исключения: если бот или mini-app не оказал купленную услугу, разработчик возвращает Stars; если в @premiumsendbot оплата прошла, но Stars не зачислились по технической причине, производится полный возврат.",
        },
      },
      {
        "@type": "Question",
        name: "Бот списал Stars, но не оказал услугу. Что делать?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Отправьте боту команду /paysupport — по правилам Telegram каждый бот, принимающий Stars, обязан на неё отвечать. Если разработчик отказывает в обоснованном возврате, возьмите ID транзакции в Настройки → Stars и отправьте жалобу в Telegram.",
        },
      },
      {
        "@type": "Question",
        name: "Я перевёл деньги в @premiumsendbot, но Stars не пришли. Вернут ли деньги?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да. Согласно пункту 5.2 оферты Premium Send, если оплата прошла успешно, но заказ не выполнен по техническим причинам, вы имеете право на полный возврат. Отправьте запрос в течение 24 часов после оплаты с чеком (скриншотом).",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли вернуть деньги, если Stars пришли, а я передумал?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет. По оферте цифровой продукт после доставки возврату не подлежит, а добровольный отказ после выполнения заказа не является основанием для возврата.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли вернуть Stars, купленные в App Store или Google Play?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Такая покупка также подчиняется условиям Apple или Google, поэтому запрос на возврат рассматривается по их правилам. По условиям Telegram, подавая такой запрос, вы соглашаетесь, что Telegram передаст необходимые данные платёжной системе.",
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
      { "@type": "ListItem", position: 3, name: "Возврат Stars", item: "https://premiumsend.uz/ru/maqolalar/stars-pulini-qaytarish-refund" },
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
        <span className="text-foreground font-medium">Возврат Stars</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">Решение проблем</span>
            <time className="text-xs text-muted" dateTime="2026-09-30">30 сентября 2026</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Возвращают ли деньги за Telegram Stars? Правила возврата и исключения
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-sm font-bold text-primary mb-2">КРАТКИЙ ОТВЕТ</p>
            <p className="text-foreground leading-relaxed font-medium">
              По общему правилу — <strong>нет</strong>: продажи Telegram Stars окончательны, за ненужную или случайную покупку деньги не возвращают. Есть два важных исключения: если бот не оказал оплаченную услугу, Stars возвращаются (через /paysupport), а если в{" "}
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="text-primary hover:underline">@premiumsendbot</Link>{" "}
              оплата прошла, но Stars не зачислились по технической причине — <strong>полный возврат</strong> (в течение 24 часов, с чеком).
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Вопрос о возврате денег за Telegram Stars обычно возникает в двух случаях: до покупки («а если что-то пойдёт не так?») и после неудачной покупки. Ниже — официальные правила Telegram, случаи с ботами и точный порядок для платежей через @premiumsendbot.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Есть ли возврат за Telegram Stars?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Сам Telegram за ненужные покупки деньги не возвращает. В разделе 3 условий Telegram Stars прямо сказано: продажи Stars окончательны, и Telegram <strong>не возвращает деньги за ненужные или случайные покупки</strong>. При удалении аккаунта оставшийся баланс Stars тоже сгорает.
            </p>
            <p className="text-muted leading-relaxed">
              Но это не значит, что «ничего никогда не возвращается» — всё зависит от того, через кого и за что вы платили. Таблица ниже собирает все основные случаи.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">В каких случаях возвращают деньги или Stars?</h2>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto mb-4">
              <table className="w-full text-sm min-w-[600px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">Ситуация</th>
                    <th className="p-4 text-left font-bold">Вернут?</th>
                    <th className="p-4 text-left font-bold">Куда обращаться</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Купил Stars необдуманно или они не нужны</td>
                    <td className="p-4">Нет</td>
                    <td className="p-4">—</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Бот/mini-app списал Stars, но не оказал услугу</td>
                    <td className="p-4">Да, Stars могут вернуть</td>
                    <td className="p-4">Боту — /paysupport, затем жалоба в Telegram</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Куплено в App Store / Google Play</td>
                    <td className="p-4">Зависит от правил Apple/Google</td>
                    <td className="p-4">Apple или Google</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">@premiumsendbot: оплатил, Stars не пришли по технической причине</td>
                    <td className="p-4">Да, полностью</td>
                    <td className="p-4">Поддержка Premium Send, в течение 24 часов</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">@premiumsendbot: Stars пришли, потом передумал</td>
                    <td className="p-4">Нет</td>
                    <td className="p-4">—</td>
                  </tr>
                  <tr className="border-b border-card-border last:border-b-0">
                    <td className="p-4 font-medium">Указан неверный username, Stars ушли другому</td>
                    <td className="p-4">Нет</td>
                    <td className="p-4">—</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed text-sm">
              Источники: условия Telegram Stars (разделы 3, 3.1, 3.2) и{" "}
              <Link href="/ru/oferta" className="text-primary font-semibold hover:underline">публичная оферта</Link> Premium Send (раздел 5).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Бот списал Stars, но не оказал услугу — что делать?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Разработчик бота может вернуть Stars полностью. По правилам Telegram бот, который не смог выполнить покупку, может вернуть Stars без штрафа, а каждый бот, принимающий Stars, обязан отвечать на команду <strong>/paysupport</strong>.
            </p>
            <div className="space-y-4 mb-6">
              {[
                { step: "1", title: "Отправьте боту /paysupport", desc: "Коротко опишите, что вы купили и что не получили." },
                { step: "2", title: "Найдите ID транзакции", desc: "В Telegram откройте Настройки → Stars и нужный платёж в истории покупок." },
                { step: "3", title: "Если отказали — подайте жалобу", desc: "Если разработчик отказывает в обоснованном возврате, по условиям Telegram можно отправить жалобу по этой транзакции." },
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
              Важно: в этом случае Stars возвращает разработчик бота — независимо от того, где вы купили Stars (App Store, Fragment или реселлер). Чтобы заранее правильно рассчитать расходы, см. статью{" "}
              <Link href="/ru/maqolalar/ai-botlarga-necha-stars-kerak" className="text-primary font-semibold hover:underline">сколько Stars нужно для AI-ботов</Link>.
            </p>
          </section>

          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Покупайте с понятными правилами возврата — в <strong className="text-white">@premiumsendbot</strong> Stars в сумах, с карты Uzcard, Humo, Click или Payme.
              </p>
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                @premiumsendbot — начать
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Когда возвращают деньги при покупке через @premiumsendbot?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Если оплата прошла, но Stars не зачислились из-за технического сбоя, вы можете потребовать <strong>полный возврат</strong>. Раздел 5{" "}
              <Link href="/ru/oferta" className="text-primary font-semibold hover:underline">оферты</Link>{" "}
              Premium Send устанавливает для цифровых продуктов такие правила:
            </p>
            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li>Цифровой продукт после доставки <strong>возврату не подлежит</strong> (5.1)</li>
              <li>Если оплата прошла, но заказ не выполнен по техническим причинам — право на <strong>полный возврат</strong> (5.2)</li>
              <li>Запрос отправляется <strong>в течение 24 часов</strong> после оплаты, со скриншотом или подтверждением оплаты (5.3)</li>
              <li>Если из-за неверных данных Telegram заказ доставлен другому лицу — возврата нет (5.4)</li>
              <li>Добровольный отказ после выполнения заказа не является основанием для возврата (5.5)</li>
            </ul>
            <p className="text-muted leading-relaxed">
              На практике большинство случаев «Stars не пришли» решаются без возврата: обычно перевод ещё не завершён банком или сумма отличалась от показанной в Mini App. Сначала выполните шаги из руководства{" "}
              <Link href="/ru/maqolalar/stars-yetkazish-vaqti" className="text-primary font-semibold hover:underline">что делать, если Stars не пришли</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Как отправить запрос на возврат?</h2>
            <div className="space-y-4 mb-6">
              {[
                { step: "1", title: "Сохраните чек", desc: "Сделайте скриншот чека перевода в банковском приложении — чтобы были видны сумма, дата и карта получателя." },
                { step: "2", title: "Напишите в течение 24 часов", desc: "Обратитесь через @premiumsendbot или @premiumsend_admin." },
                { step: "3", title: "Дайте полные данные", desc: "Отправьте чек, ваш username в Telegram и сколько Stars вы покупали." },
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
              Честно: Premium Send — не официальный партнёр Telegram, а независимый местный реселлер. Поэтому возврат по платежу, сделанному нам, решает только наша поддержка, а не поддержка Telegram.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Что проверить до покупки, чтобы возврат не понадобился?</h2>
            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li>Переводите сумму <strong>в точности</strong> как в Mini App, копируйте номер карты</li>
              <li>Проверьте username в Telegram — ошибка в username не является основанием для возврата</li>
              <li>Заранее посчитайте, сколько Stars нужно; в первый раз начните с небольшого пакета</li>
              <li>Пользуйтесь только официальной ссылкой на @premiumsendbot</li>
            </ul>
            <p className="text-muted leading-relaxed">
              Пакеты:{" "}
              <Link href="/ru/stars" className="text-primary font-semibold hover:underline">все пакеты Stars</Link>{" "}
              (300 сумов за звезду), самый маленький —{" "}
              <Link href="/ru/50-stars" className="text-primary font-semibold hover:underline">50 Stars за 15 000 сумов</Link>. Процесс оплаты:{" "}
              <Link href="/ru/maqolalar/stars-kartaga-otkazma" className="text-primary font-semibold hover:underline">покупка Stars переводом на карту</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Частые вопросы (FAQ)</h2>
            <div className="space-y-4">
              {[
                { q: "Возвращают ли деньги за Telegram Stars?", a: "По общему правилу — нет: Telegram не возвращает деньги за ненужные или случайные покупки. Исключения: если бот не оказал услугу, Stars вернут; если в @premiumsendbot оплата прошла, а Stars не пришли по технической причине — полный возврат." },
                { q: "Бот списал Stars, но не оказал услугу. Что делать?", a: "Отправьте боту /paysupport. При отказе возьмите ID транзакции в Настройки → Stars и пожалуйтесь в Telegram." },
                { q: "Я перевёл деньги в @premiumsendbot, но Stars не пришли. Вернут ли деньги?", a: "Да, при техническом сбое — полный возврат (оферта 5.2). Отправьте запрос в течение 24 часов с чеком." },
                { q: "Можно ли вернуть деньги, если Stars пришли, а я передумал?", a: "Нет — доставленный цифровой продукт возврату не подлежит (оферта 5.1, 5.5)." },
                { q: "Можно ли вернуть Stars, купленные в App Store или Google Play?", a: "Это зависит от правил Apple или Google — запрос рассматривается в их порядке." },
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
                  Stars в сумах — через <strong className="text-white">@premiumsendbot</strong>, 50 Stars <strong className="text-white">от 15 000 сумов</strong>, с правом на полный возврат при техническом сбое.
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
