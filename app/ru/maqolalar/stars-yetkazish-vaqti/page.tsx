import type { Metadata } from "next";
import Link from "next/link";
import { ogBaseRu } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title: "Через сколько Telegram Stars приходят на аккаунт? Что делать, если не пришли",
  description:
    "Stars, оплаченные через @premiumsendbot, обычно поступают на аккаунт за несколько минут. Причины задержки, где проверить баланс и что делать по шагам, если Stars не пришли.",
  keywords: [
    "через сколько приходят stars",
    "telegram stars время зачисления",
    "stars не пришли",
    "stars не зачислились что делать",
    "задержка stars",
    "premiumsendbot stars не пришли",
  ],
  alternates: {
    canonical: "https://premiumsend.uz/ru/maqolalar/stars-yetkazish-vaqti",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/stars-yetkazish-vaqti",
      ru: "https://premiumsend.uz/ru/maqolalar/stars-yetkazish-vaqti",
      "x-default": "https://premiumsend.uz/maqolalar/stars-yetkazish-vaqti",
    },
  },
  openGraph: {
    ...ogBaseRu,
    title: "Через сколько Telegram Stars приходят на аккаунт? Что делать, если не пришли",
    description:
      "Обычно за несколько минут. Причины задержки, проверка баланса и чёткие шаги, если Stars не пришли.",
    url: "https://premiumsend.uz/ru/maqolalar/stars-yetkazish-vaqti",
    type: "article",
    publishedTime: "2026-09-21",
  },
};

export default function ArticleStarsYetkazishVaqtiRu() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Через сколько Telegram Stars приходят на аккаунт? Что делать, если не пришли",
    description:
      "Время зачисления Telegram Stars, оплаченных через @premiumsendbot, причины задержки и шаги, если Stars не пришли.",
    datePublished: "2026-09-21",
    dateModified: "2026-09-21",
    author: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    publisher: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    mainEntityOfPage: "https://premiumsend.uz/ru/maqolalar/stars-yetkazish-vaqti",
    inLanguage: "ru",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Через сколько Telegram Stars приходят на аккаунт?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Через @premiumsendbot Stars обычно автоматически поступают на аккаунт за несколько минут после определения платежа. Точное время до секунды не гарантируется: оно зависит от того, как быстро банк выполнит перевод.",
        },
      },
      {
        "@type": "Question",
        name: "Где видны Stars и как проверить баланс?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Баланс Stars отображается на странице Stars в разделе «Настройки» (Settings) приложения Telegram. Закройте и заново откройте приложение — баланс иногда обновляется не сразу.",
        },
      },
      {
        "@type": "Question",
        name: "Я перевёл деньги, но Stars не пришли. Что делать?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Сначала проверьте в банковском приложении, что перевод выполнен, а сумма и карта в точности совпадают с показанными в Mini App. Подождите несколько минут и перезапустите Telegram. Если Stars всё ещё нет — отправьте в @premiumsend_admin чек (скриншот), ваш username в Telegram и количество Stars.",
        },
      },
      {
        "@type": "Question",
        name: "Придут ли Stars, если я перевёл неверную сумму или на другую карту?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Автоматическая система определяет платёж по точной сумме из Mini App, поэтому при несовпадении Stars могут не поступить автоматически. В этом случае сразу напишите в @premiumsend_admin с чеком — ситуация будет рассмотрена.",
        },
      },
      {
        "@type": "Question",
        name: "Вернут ли деньги, если Stars не пришли?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Каждый случай рассматривается отдельно: если платёж найден — Stars выдаются, если нет или произошла ошибка — вопрос решается через @premiumsend_admin. Premium Send — не официальный партнёр Telegram, а местный реселлер, поэтому платёжные вопросы решаются только через нашу поддержку, а не через поддержку Telegram.",
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
      { "@type": "ListItem", position: 3, name: "Через сколько приходят Stars", item: "https://premiumsend.uz/ru/maqolalar/stars-yetkazish-vaqti" },
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
        <span className="text-foreground font-medium">Через сколько приходят Stars</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">Решение проблем</span>
            <time className="text-xs text-muted" dateTime="2026-09-21">21 сентября 2026</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Через сколько Telegram Stars приходят на аккаунт? Что делать, если не пришли
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-sm font-bold text-primary mb-2">КРАТКИЙ ОТВЕТ</p>
            <p className="text-foreground leading-relaxed font-medium">
              Stars, оплаченные через{" "}
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="text-primary hover:underline">@premiumsendbot</Link>,{" "}
              <strong>обычно приходят за несколько минут</strong> и автоматически зачисляются на ваш аккаунт Telegram. Если нет: проверьте в банковском приложении, что перевод выполнен и сумма в точности такая, как в Mini App, перезапустите Telegram и затем напишите в <strong>@premiumsend_admin</strong> с чеком.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Когда Stars не видны сразу после оплаты, это вызывает тревогу — особенно если деньги уже переведены. Чаще всего причина проста: банк ещё не завершил перевод или баланс в приложении не обновился. Ниже — что сколько занимает, где проверить баланс и чёткие шаги на случай, если Stars не пришли.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Через сколько Stars приходят на аккаунт?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Процесс автоматический: в Mini App вы выбираете количество, он показывает номер карты и точную сумму, вы делаете P2P-перевод на эту карту из своего банковского приложения. После того как платёж определён, Stars <strong>обычно зачисляются за несколько минут</strong>.
            </p>
            <p className="text-muted leading-relaxed">
              Мы не обещаем точное количество секунд или минут: значительная часть времени зависит от того, как быстро ваш банк выполнит перевод. Как устроен сам процесс, подробно описано в статье{" "}
              <Link href="/ru/maqolalar/stars-kartaga-otkazma" className="text-primary font-semibold hover:underline">покупка Stars переводом на карту</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Почему Stars могут задержаться?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Самые частые причины и способы проверки:
            </p>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto mb-4">
              <table className="w-full text-sm min-w-[520px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">Причина</th>
                    <th className="p-4 text-left font-bold">Как проверить</th>
                    <th className="p-4 text-left font-bold">Что делать</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Перевод не завершён банком</td>
                    <td className="p-4">Откройте статус транзакции и чек в банковском приложении</td>
                    <td className="p-4">Дождитесь статуса «успешно»</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Сумма отличается от указанной в Mini App</td>
                    <td className="p-4">Сравните сумму в чеке с суммой в Mini App</td>
                    <td className="p-4">Напишите в @premiumsend_admin с чеком</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Перевод сделан на другую карту</td>
                    <td className="p-4">Сравните номер карты получателя в чеке с номером в Mini App</td>
                    <td className="p-4">Сразу напишите в @premiumsend_admin</td>
                  </tr>
                  <tr className="border-b border-card-border last:border-b-0">
                    <td className="p-4 font-medium">Telegram ещё не обновил баланс</td>
                    <td className="p-4">Полностью закройте и заново откройте приложение, обновите страницу Stars</td>
                    <td className="p-4">Обновите приложение, при необходимости войдите заново</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Где проверить, что Stars пришли?</h2>
            <p className="text-muted leading-relaxed mb-4">
              В приложении Telegram откройте раздел <strong>«Настройки» (Settings)</strong> и страницу Stars — там отображаются баланс и транзакции. Если данные не обновились, полностью закройте приложение и откройте снова.
            </p>
            <p className="text-muted leading-relaxed">
              Если баланс вырос, Stars готовы: их можно потратить на{" "}
              <Link href="/ru/maqolalar/ai-botlarga-necha-stars-kerak" className="text-primary font-semibold hover:underline">AI-ботов</Link>,
              донаты, стикеры или оплату в мини-приложениях.
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
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Что делать по шагам, если Stars не пришли?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Не торопитесь и действуйте в таком порядке:
            </p>
            <div className="space-y-4 mb-6">
              {[
                { step: "1", title: "Проверьте перевод в банковском приложении", desc: "Транзакция выполнена успешно, деньги списаны — откройте чек." },
                { step: "2", title: "Сверьте сумму и карту", desc: "Сумма в чеке и номер карты получателя должны в точности совпадать с показанными в Mini App." },
                { step: "3", title: "Подождите несколько минут", desc: "Полностью закройте и заново откройте Telegram, обновите страницу Настройки → Stars." },
                { step: "4", title: "Напишите в @premiumsend_admin", desc: "Отправьте чек об оплате (скриншот), ваш username в Telegram и количество Stars, которое вы покупали." },
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
              Важно: Premium Send — не официальный партнёр Telegram, а местный реселлер. Поэтому платёжные вопросы решаются через нашу поддержку, а не через поддержку Telegram. Также убедитесь, что вы пользовались официальной ссылкой{" "}
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="text-primary font-semibold hover:underline">@premiumsendbot</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Как избежать задержек в будущем?</h2>
            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li>Переводите сумму <strong>в точности</strong> такую, как показывает Mini App, без округления</li>
              <li>Копируйте номер карты, а не вводите вручную</li>
              <li>Сохраняйте чек после перевода — он пригодится, если возникнет проблема</li>
              <li>Используйте актуальную версию Telegram</li>
            </ul>
            <p className="text-muted leading-relaxed">
              Цены и пакеты:{" "}
              <Link href="/ru/stars" className="text-primary font-semibold hover:underline">все пакеты Stars</Link>{" "}
              (300 сум за звезду), например{" "}
              <Link href="/ru/50-stars" className="text-primary font-semibold hover:underline">50 Stars — 15 000 сум</Link> или{" "}
              <Link href="/ru/1000-stars" className="text-primary font-semibold hover:underline">1000 Stars — 300 000 сум</Link>. Какой способ подходит именно вам, читайте в{" "}
              <Link href="/ru/maqolalar/stars-sotib-olishning-necha-yoli-bor" className="text-primary font-semibold hover:underline">сравнении способов покупки</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Часто задаваемые вопросы (FAQ)</h2>
            <div className="space-y-4">
              {[
                { q: "Через сколько Telegram Stars приходят на аккаунт?", a: "Обычно за несколько минут после определения платежа, автоматически. Точное время до секунды не гарантируется — оно зависит от скорости выполнения перевода банком." },
                { q: "Где видны Stars и как проверить баланс?", a: "На странице Stars в разделе «Настройки» (Settings) приложения Telegram. Закройте и заново откройте приложение." },
                { q: "Я перевёл деньги, но Stars не пришли. Что делать?", a: "Проверьте чек, сумму и карту, подождите несколько минут. Если Stars нет — напишите в @premiumsend_admin с чеком, username и количеством." },
                { q: "Придут ли Stars, если я перевёл неверную сумму или на другую карту?", a: "Автоматически могут не прийти. Сразу напишите в @premiumsend_admin с чеком — ситуация будет рассмотрена." },
                { q: "Вернут ли деньги, если Stars не пришли?", a: "Каждый случай рассматривается отдельно — решается через @premiumsend_admin. Premium Send — не официальный партнёр Telegram, а местный реселлер." },
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
                  Покупайте Stars в сумах — через <strong className="text-white">@premiumsendbot</strong> 50 Stars <strong className="text-white">от 15 000 сум</strong>, обычно на аккаунте за несколько минут.
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
