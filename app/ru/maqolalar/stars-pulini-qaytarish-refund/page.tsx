import type { Metadata } from "next";
import Link from "next/link";
import { ogBaseRu } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title: "Возвращают ли деньги за Telegram Stars? Правила возврата и исключения",
  description:
    "Правила возврата Telegram Stars: Telegram не возвращает деньги за ненужную покупку, но если бот не оказал оплаченную услугу, Stars могут вернуть. Что делать, если возникла проблема с оплатой через @premiumsendbot — чёткие шаги.",
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
      "Ненужная покупка — не возвращается. Бот не оказал услугу — Stars могут вернуть. Проблема с оплатой в @premiumsendbot — чёткие шаги.",
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
      "Правила возврата Telegram Stars: официальные условия Telegram, возврат через ботов и шаги при проблеме с оплатой через @premiumsendbot.",
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
          text: "По общему правилу — нет. Согласно условиям Telegram Stars, продажи Stars окончательны, и Telegram не возвращает деньги за ненужные или случайные покупки. Главное исключение: если бот или mini-app не оказал оплаченную услугу, разработчик может вернуть Stars.",
        },
      },
      {
        "@type": "Question",
        name: "Бот списал Stars, но не оказал услугу. Что делать?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Отправьте боту команду /paysupport — по правилам Telegram бот, принимающий Stars, обязан на неё отвечать. Если разработчик отказывает в обоснованном возврате, возьмите ID транзакции в Настройки → Stars и отправьте жалобу в Telegram.",
        },
      },
      {
        "@type": "Question",
        name: "Я перевёл деньги в @premiumsendbot, но Stars не пришли. Вернут ли деньги?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Каждый случай рассматривается отдельно: если платёж найден — Stars выдаются, если нет или произошла ошибка — вопрос решается через @premiumsend_admin. В обращении отправьте чек (скриншот), ваш username в Telegram и количество Stars.",
        },
      },
      {
        "@type": "Question",
        name: "Может ли поддержка Telegram вернуть платёж, сделанный через @premiumsendbot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Нет. Premium Send — не официальный партнёр Telegram, а местный реселлер, поэтому вопросы по платежам нам решаются только через нашу поддержку, а не через поддержку Telegram.",
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
              По общему правилу — <strong>нет</strong>: продажи Telegram Stars окончательны, за ненужную или случайную покупку Telegram деньги не возвращает. Главное исключение: если бот не оказал оплаченную услугу, Stars могут вернуть (через /paysupport). Если вы оплатили в{" "}
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="text-primary hover:underline">@premiumsendbot</Link>, а Stars не пришли — напишите в <strong>@premiumsend_admin</strong> с чеком, ситуация будет рассмотрена отдельно.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Вопрос о возврате денег за Telegram Stars обычно возникает в двух случаях: до покупки («а если что-то пойдёт не так?») и после неудачной покупки. Ниже — официальные правила Telegram, случаи с ботами и что делать, если возникла проблема с оплатой через @premiumsendbot.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Есть ли возврат за Telegram Stars?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Сам Telegram за ненужные покупки деньги не возвращает. В разделе 3 условий Telegram Stars прямо сказано: продажи Stars окончательны, и Telegram <strong>не возвращает деньги за ненужные или случайные покупки</strong>. При удалении аккаунта оставшийся баланс Stars тоже сгорает.
            </p>
            <p className="text-muted leading-relaxed">
              Но это не значит, что «ничего никогда не возвращается» — результат зависит от того, кому и за что вы платили. Таблица ниже собирает основные случаи.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">В каких случаях возвращают деньги или Stars?</h2>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto mb-4">
              <table className="w-full text-sm min-w-[600px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">Ситуация</th>
                    <th className="p-4 text-left font-bold">Что будет?</th>
                    <th className="p-4 text-left font-bold">Куда обращаться</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Купил Stars необдуманно или они не нужны</td>
                    <td className="p-4">Telegram деньги не возвращает</td>
                    <td className="p-4">—</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Бот/mini-app списал Stars, но не оказал услугу</td>
                    <td className="p-4">Stars могут вернуть</td>
                    <td className="p-4">Боту — /paysupport, затем жалоба в Telegram</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Куплено в App Store / Google Play</td>
                    <td className="p-4">Зависит от правил Apple/Google</td>
                    <td className="p-4">Apple или Google</td>
                  </tr>
                  <tr className="border-b border-card-border last:border-b-0">
                    <td className="p-4 font-medium">@premiumsendbot: оплатил, Stars не пришли</td>
                    <td className="p-4">Случай рассматривается отдельно: если платёж найден — Stars выдаются</td>
                    <td className="p-4">@premiumsend_admin, с чеком</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed text-sm">
              Источник: условия Telegram Stars (telegram.org/tos/stars, разделы 3, 3.1 и 3.2).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Бот списал Stars, но не оказал услугу — что делать?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Разработчик бота может вернуть Stars полностью. По правилам Telegram бот, который не смог выполнить покупку, может вернуть Stars без штрафа, а бот, принимающий Stars, обязан отвечать на команду <strong>/paysupport</strong>.
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
              Важно: в этом случае Stars возвращает разработчик бота — независимо от того, где вы купили Stars. Чтобы заранее правильно рассчитать расходы, см. статью{" "}
              <Link href="/ru/maqolalar/ai-botlarga-necha-stars-kerak" className="text-primary font-semibold hover:underline">сколько Stars нужно для AI-ботов</Link>.
            </p>
          </section>

          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Нужны Stars? В <strong className="text-white">@premiumsendbot</strong> — в сумах, переводом с карты Uzcard, Humo, Click или Payme.
              </p>
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                @premiumsendbot — начать
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Оплатил в @premiumsendbot, а Stars не пришли — вернут ли деньги?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Каждый случай рассматривается отдельно: <strong>если платёж найден — Stars выдаются</strong>, если нет или произошла ошибка — вопрос решается через @premiumsend_admin. На практике большинство случаев «Stars не пришли» связаны с простой причиной: банк ещё не завершил перевод или сумма отличалась от показанной в Mini App.
            </p>
            <p className="text-muted leading-relaxed">
              Поэтому сначала выполните шаги из руководства{" "}
              <Link href="/ru/maqolalar/stars-yetkazish-vaqti" className="text-primary font-semibold hover:underline">что делать, если Stars не пришли</Link>, а затем обратитесь в поддержку по порядку ниже.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Как правильно отправить обращение?</h2>
            <div className="space-y-4 mb-6">
              {[
                { step: "1", title: "Сохраните чек", desc: "Сделайте скриншот чека перевода в банковском приложении — чтобы были видны сумма, дата и карта получателя." },
                { step: "2", title: "Напишите в @premiumsend_admin", desc: "Обращайтесь без задержки — так ситуацию проще проверить." },
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
              Важно: Premium Send — не официальный партнёр Telegram, а местный реселлер. Поэтому вопросы по платежам нам решаются не через поддержку Telegram, а именно через нашу поддержку.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Что проверить до покупки, чтобы не было проблем?</h2>
            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li>Переводите сумму <strong>в точности</strong> как в Mini App, копируйте номер карты</li>
              <li>Сохраните чек после перевода</li>
              <li>Заранее посчитайте, сколько Stars нужно, — Telegram не возвращает деньги за ненужные покупки</li>
              <li>Пользуйтесь только официальной ссылкой на @premiumsendbot</li>
            </ul>
            <p className="text-muted leading-relaxed">
              Пакеты:{" "}
              <Link href="/ru/stars" className="text-primary font-semibold hover:underline">все пакеты Stars</Link>{" "}
              (300 сумов за звезду), самый маленький —{" "}
              <Link href="/ru/50-stars" className="text-primary font-semibold hover:underline">50 Stars за 15 000 сумов</Link>. Процесс оплаты:{" "}
              <Link href="/ru/maqolalar/stars-kartaga-otkazma" className="text-primary font-semibold hover:underline">покупка Stars переводом на карту</Link>. Нет зарубежной карты:{" "}
              <Link href="/ru/maqolalar/xorijiy-kartasiz-stars-sotib-olish" className="text-primary font-semibold hover:underline">Stars без зарубежной карты</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Частые вопросы (FAQ)</h2>
            <div className="space-y-4">
              {[
                { q: "Возвращают ли деньги за Telegram Stars?", a: "По общему правилу — нет: Telegram не возвращает деньги за ненужные или случайные покупки. Главное исключение: если бот не оказал оплаченную услугу, Stars могут вернуть." },
                { q: "Бот списал Stars, но не оказал услугу. Что делать?", a: "Отправьте боту /paysupport. При отказе возьмите ID транзакции в Настройки → Stars и пожалуйтесь в Telegram." },
                { q: "Я перевёл деньги в @premiumsendbot, но Stars не пришли. Вернут ли деньги?", a: "Каждый случай рассматривается отдельно: если платёж найден — Stars выдаются, если нет или произошла ошибка — вопрос решается через @premiumsend_admin." },
                { q: "Может ли поддержка Telegram вернуть платёж, сделанный через @premiumsendbot?", a: "Нет — Premium Send местный реселлер, платёжные вопросы решаются только через нашу поддержку." },
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
                  Stars в сумах — через <strong className="text-white">@premiumsendbot</strong>, 50 Stars <strong className="text-white">от 15 000 сумов</strong>, а если возникнут вопросы — поможет @premiumsend_admin.
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
