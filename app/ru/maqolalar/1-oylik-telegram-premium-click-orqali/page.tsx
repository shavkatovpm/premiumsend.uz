import type { Metadata } from "next";
import Link from "next/link";
import { ogBaseRu } from "@/app/shared-metadata";

const url = "https://premiumsend.uz/ru/maqolalar/1-oylik-telegram-premium-click-orqali";
const uzUrl = "https://premiumsend.uz/maqolalar/1-oylik-telegram-premium-click-orqali";

export const metadata: Metadata = {
  title: "Telegram Premium на 1 месяц через Click — 59 000 сум",
  description: "Как купить Telegram Premium на 1 месяц через Click за 59 000 сум: @PremiumSendBot, точные шаги оплаты, безопасность и активация за 2–10 минут.",
  keywords: ["Telegram Premium на 1 месяц через Click", "Telegram Premium Click 1 месяц", "Premium за 59000 сум", "оплатить Telegram Premium Click"],
  alternates: { canonical: url, languages: { uz: uzUrl, ru: url, "x-default": uzUrl } },
  openGraph: { ...ogBaseRu, title: "Telegram Premium на 1 месяц через Click — 59 000 сум", description: "Оплата месячного Premium через Click в сумах и активация за 2–10 минут.", url, type: "article", publishedTime: "2026-08-18" },
};

const faqs = [
  { q: "Сколько стоит Telegram Premium на 1 месяц через Click?", a: "В PremiumSend Telegram Premium на 1 месяц стоит 59 000 сум. Оплата проводится в узбекских сумах через Click." },
  { q: "Когда активируется Premium после оплаты через Click?", a: "После подтверждения оплаты Premium обычно активируется на указанном аккаунте Telegram в течение 2–10 минут." },
  { q: "Нужен ли пароль Telegram для оплаты через Click?", a: "Нет. PremiumSend не запрашивает пароль Telegram или код из SMS. Достаточно следовать инструкциям бота." },
  { q: "Можно ли отправить месячный Premium как подарок?", a: "Официальное меню Gift Premium поддерживает подарки только на 3, 6 и 12 месяцев. Тариф на 1 месяц не является официальным подарочным пакетом; заказ оформляется отдельно для нужного аккаунта." },
  { q: "PremiumSend — официальный партнёр Telegram?", a: "Нет. PremiumSend не является официальным партнёром Telegram — это локальный реселлер, принимающий местные способы оплаты в Узбекистане." },
];

const steps = [
  { position: 1, name: "Откройте бот", text: "Откройте @PremiumSendBot в Telegram и нажмите Start." },
  { position: 2, name: "Выберите тариф", text: "Выберите тариф на 1 месяц стоимостью 59 000 сум." },
  { position: 3, name: "Введите данные заказа", text: "Без ошибок укажите запрошенные ботом данные аккаунта Telegram." },
  { position: 4, name: "Оплатите через Click", text: "Сверьте реквизиты и сумму в боте, затем подтвердите платёж в приложении Click." },
  { position: 5, name: "Дождитесь активации", text: "После подтверждения оплаты Premium обычно активируется за 2–10 минут." },
];

export default function Article1MonthClickRu() {
  const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: "Telegram Premium на 1 месяц через Click", description: metadata.description, image: "https://premiumsend.uz/og-image.png", datePublished: "2026-08-18", dateModified: "2026-08-18", author: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" }, publisher: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" }, mainEntityOfPage: url };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Главная", item: "https://premiumsend.uz/ru" }, { "@type": "ListItem", position: 2, name: "Статьи", item: "https://premiumsend.uz/ru/maqolalar" }, { "@type": "ListItem", position: 3, name: "Premium на 1 месяц через Click", item: url }] };
  const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", name: "Как купить Telegram Premium на 1 месяц через Click", step: steps.map((item) => ({ "@type": "HowToStep", ...item })) };

  return <>
    {[articleSchema, faqSchema, breadcrumbSchema, howToSchema].map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
    <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-muted"><Link href="/ru" className="hover:text-primary">Главная</Link><span className="mx-2">/</span><Link href="/ru/maqolalar" className="hover:text-primary">Статьи</Link><span className="mx-2">/</span><span className="text-foreground font-medium">Premium на 1 месяц через Click</span></nav>
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4"><span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">Руководство</span><time className="text-xs text-muted" dateTime="2026-08-18">18 августа 2026</time></div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">Telegram Premium на 1 месяц через Click</h1>
        <div className="bg-primary-light/50 rounded-xl p-5 border border-primary/10 mb-6"><p className="text-foreground leading-relaxed font-medium"><strong>Краткий ответ:</strong> Telegram Premium на 1 месяц можно купить через Click за <strong>59 000 сум</strong>. Выберите тариф в{" "}<Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@PremiumSendBot</Link>,{" "}проверьте данные платежа и подтвердите его в Click. Premium обычно активируется за 2–10 минут.</p></div>
        <p className="text-lg text-muted leading-relaxed">Это руководство посвящено только оплате через Click. PremiumSend не является официальным партнёром Telegram — это локальный реселлер, позволяющий платить в сумах.</p>
      </header>
      <div className="prose prose-lg max-w-none space-y-12">
        <section>
          <h2 className="text-2xl font-extrabold text-foreground mb-4">Сколько стоит Premium на 1 месяц через Click?</h2>
          <p className="text-muted leading-relaxed mb-5"><strong className="text-foreground">Цена — 59 000 сум.</strong> Короткий тариф подходит тем, кто хочет попробовать Premium без длительного периода.</p>
          <div className="overflow-x-auto rounded-xl border border-card-border"><table className="w-full text-sm"><thead className="bg-section-alt text-foreground"><tr><th className="text-left p-4">Тариф</th><th className="text-left p-4">Цена</th><th className="text-left p-4">Для кого?</th></tr></thead><tbody><tr className="border-t border-card-border bg-primary-light/20"><td className="p-4 font-bold">1 месяц</td><td className="p-4 font-bold text-primary">59 000 сум</td><td className="p-4">Попробовать Premium</td></tr><tr className="border-t border-card-border"><td className="p-4">3 месяца</td><td className="p-4">175 000 сум</td><td className="p-4">Средний срок</td></tr><tr className="border-t border-card-border"><td className="p-4">6 месяцев</td><td className="p-4">235 000 сум</td><td className="p-4">Экономный вариант</td></tr><tr className="border-t border-card-border"><td className="p-4">12 месяцев</td><td className="p-4">425 000 сум</td><td className="p-4">Минимальная цена за месяц</td></tr></tbody></table></div>
        </section>
        <section>
          <h2 className="text-2xl font-extrabold text-foreground mb-4">Как купить месячный Premium через Click?</h2>
          <p className="text-muted leading-relaxed mb-6">Процесс состоит из пяти шагов: открыть бот, выбрать тариф, проверить аккаунт, оплатить через Click и дождаться активации.</p>
          <div className="space-y-4">{steps.map((item) => <div key={item.position} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-card-border shadow-sm"><span className="w-9 h-9 rounded-full bg-primary text-white font-bold flex items-center justify-center flex-shrink-0">{item.position}</span><div><h3 className="font-bold text-foreground mb-1">{item.name}</h3><p className="text-sm text-muted leading-relaxed">{item.text}</p></div></div>)}</div>
        </section>
        <section>
          <h2 className="text-2xl font-extrabold text-foreground mb-4">Что проверить перед оплатой?</h2>
          <p className="text-muted leading-relaxed mb-5">Перед подтверждением сверьте имя бота, тариф, сумму и аккаунт получателя. Никому не передавайте пароль Telegram или код из SMS.</p>
          <div className="grid sm:grid-cols-2 gap-4"><div className="bg-section-alt rounded-xl p-5"><h3 className="font-bold text-foreground mb-2">Правильно</h3><ul className="text-sm text-muted space-y-2"><li>• Открывать только @PremiumSendBot</li><li>• Сверять сумму с заказом</li><li>• Сохранить чек до активации</li></ul></div><div className="bg-red-50 rounded-xl p-5 border border-red-100"><h3 className="font-bold text-foreground mb-2">Никогда не сообщайте</h3><ul className="text-sm text-muted space-y-2"><li>• Пароль Telegram</li><li>• Код SMS или 2FA</li><li>• PIN-код карты</li></ul></div></div>
        </section>
        <section><h2 className="text-2xl font-extrabold text-foreground mb-4">Можно ли подарить тариф на 1 месяц?</h2><p className="text-muted leading-relaxed">По официальной информации Telegram, меню Gift Premium предлагает предоплаченные подарки на 3, 6 и 12 месяцев. <strong className="text-foreground">Официального подарочного пакета на 1 месяц нет.</strong> Поэтому месячный заказ оформляется отдельно для нужного аккаунта, а не как подарочная ссылка. Для подарка используйте{" "}<Link href="/ru/maqolalar/3-oylik-telegram-premium-sovga-qilish" className="text-primary font-semibold hover:underline">вариант на 3 месяца</Link>.</p></section>
        <section><h2 className="text-2xl font-extrabold text-foreground mb-4">Какие вопросы задают чаще всего?</h2><div className="space-y-4">{faqs.map(({ q, a }) => <div key={q} className="bg-white rounded-xl p-5 border border-card-border"><h3 className="font-bold text-foreground mb-2">{q}</h3><p className="text-sm text-muted leading-relaxed">{a}</p></div>)}</div></section>
        <section><h2 className="text-2xl font-extrabold text-foreground mb-4">Что прочитать дальше?</h2><ul className="space-y-2 text-sm"><li><Link href="/ru/maqolalar/telegram-premium-click-orqali" className="text-primary font-semibold hover:underline">Все тарифы Premium через Click</Link></li><li><Link href="/ru/maqolalar/1-oylik-telegram-premium-sotib-olish" className="text-primary font-semibold hover:underline">Общее руководство по тарифу на 1 месяц</Link></li><li><Link href="/ru/maqolalar/telegram-premium-narxlari" className="text-primary font-semibold hover:underline">Сравнение тарифов и цен</Link></li><li><Link href="/ru/maqolalar/telegram-premium-qachon-faollashadi" className="text-primary font-semibold hover:underline">Когда активируется Premium?</Link></li></ul></section>
        <section><div className="hero-gradient rounded-2xl p-8 md:p-10 text-center"><h2 className="text-2xl font-extrabold text-white mb-3">Готовы купить месячный Premium через Click?</h2><p className="text-white/90 mb-6">59 000 сум, местная оплата и активация обычно за 2–10 минут.</p><Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener noreferrer" className="inline-flex px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all">Открыть @PremiumSendBot</Link></div></section>
      </div>
    </article>
  </>;
}
