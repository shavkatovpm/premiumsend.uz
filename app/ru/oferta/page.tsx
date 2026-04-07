import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Публичная оферта",
  description:
    "Публичная оферта сервиса Premium Send. Условия покупки подписки Telegram Premium, порядок оплаты, политика возврата и другие правила.",
  alternates: {
    canonical: "https://premiumsend.uz/ru/oferta",
    languages: {
      uz: "https://premiumsend.uz/oferta",
      ru: "https://premiumsend.uz/ru/oferta",
    },
  },
};

export default function OfertaPageRu() {
  return (
    <>
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-muted">
        <Link href="/ru" className="hover:text-primary">Главная</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">Оферта</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-4">
            Публичная оферта
          </h1>
          <p className="text-muted">Последнее обновление: 5 апреля 2026 г.</p>
        </header>

        <div className="prose prose-lg max-w-none space-y-10 text-foreground/90">
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">&sect; 1. Общие положения</h2>
            <div className="space-y-3 leading-relaxed">
              <p>1.1. Настоящий документ является публичной офертой (далее — &laquo;Оферта&raquo;) сервиса Premium Send (далее — &laquo;Исполнитель&raquo;), определяющей условия приобретения услуги подписки Telegram Premium.</p>
              <p>1.2. Исполнитель осуществляет деятельность через сайт premiumsend.uz и Telegram-бот <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>.</p>
              <p>1.3. Оформление заказа через бот означает полное и безоговорочное принятие (акцепт) условий настоящей Оферты.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">&sect; 2. Предоставляемые услуги</h2>
            <div className="space-y-3 leading-relaxed">
              <p>2.1. Исполнитель предоставляет следующую цифровую услугу:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Подписка Telegram Premium</strong> — активация подписки Telegram Premium сроком на 3, 6 и 12 месяцев.</li>
              </ul>
              <p>2.2. Все услуги предоставляются в цифровом виде, непосредственно на аккаунт Telegram пользователя.</p>
              <p>2.3. Исполнитель оказывает услуги через официальный API Telegram и Fragment. Premium Send действует как независимый реселлер.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">&sect; 3. Порядок оформления и оплаты</h2>
            <div className="space-y-3 leading-relaxed">
              <p>3.1. Заказ оформляется через <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link> в соответствии с инструкциями бота.</p>
              <p>3.2. Оплата принимается следующими способами: Click, пластиковые карты Uzcard и Humo.</p>
              <p>3.3. После успешной оплаты заказ выполняется в течение 5 минут.</p>
              <p>3.4. Цены указаны в узбекских сумах. Цена определяется курсом и тарифом на момент оформления заказа.</p>
              <p>3.5. Исполнитель оставляет за собой право изменять цены без предварительного уведомления.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">&sect; 4. Условия оказания услуг</h2>
            <div className="space-y-3 leading-relaxed">
              <p>4.1. Исполнитель не несёт ответственности за проблемы, возникшие из-за ввода неверного Telegram username или ID пользователем.</p>
              <p>4.2. Исполнитель не несёт ответственности за технические сбои платформы Telegram, изменение правил Telegram или блокировку аккаунта Telegram.</p>
              <p>4.3. Аккаунт Telegram пользователя должен иметь возможность получения Premium. В противном случае заказ может быть не выполнен.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">&sect; 5. Политика возврата (refund)</h2>
            <div className="space-y-3 leading-relaxed">
              <p>5.1. Цифровые продукты после доставки возврату не подлежат.</p>
              <p>5.2. Если оплата прошла успешно, но заказ не выполнен по техническим причинам, пользователь имеет право на полный возврат средств.</p>
              <p>5.3. Запрос на возврат должен быть отправлен в течение 24 часов с момента оплаты через <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>. Необходимо приложить скриншот или подтверждение оплаты.</p>
              <p>5.4. Если заказ доставлен другому лицу из-за ввода неверных данных Telegram пользователем, возврат не производится.</p>
              <p>5.5. После выполнения заказа добровольный отказ пользователя не является основанием для возврата.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">&sect; 6. Обязанности пользователя</h2>
            <div className="space-y-3 leading-relaxed">
              <p>6.1. Пользователь обязан использовать сервис исключительно в законных целях.</p>
              <p>6.2. Использование сервиса в целях мошенничества, спама или причинения вреда другим лицам строго запрещено. Такие пользователи будут заблокированы.</p>
              <p>6.3. Пользователь обязуется соблюдать Условия использования платформы Telegram.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">&sect; 7. Служба поддержки</h2>
            <div className="space-y-3 leading-relaxed">
              <p>7.1. Все обращения и вопросы принимаются через <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>.</p>
              <p>7.2. Ответ на обращения предоставляется в течение 24 часов.</p>
              <p>7.3. Исполнитель оставляет за собой право отказать в обслуживании пользователям, проявляющим грубость, угрозы или неподобающее поведение.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">&sect; 8. Персональные данные и конфиденциальность</h2>
            <div className="space-y-3 leading-relaxed">
              <p>8.1. Исполнитель собирает только минимально необходимые для оказания услуг данные (Telegram ID, username).</p>
              <p>8.2. Персональные данные пользователей не продаются третьим лицам.</p>
              <p>8.3. Платёжные данные обрабатываются платёжными системами. Исполнитель не хранит данные карт.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">&sect; 9. Заключительные положения</h2>
            <div className="space-y-3 leading-relaxed">
              <p>9.1. Исполнитель оставляет за собой право изменять условия настоящей Оферты в любое время. Изменения вступают в силу с момента публикации на сайте premiumsend.uz.</p>
              <p>9.2. Продолжение использования сервиса после изменения условий Оферты считается принятием новых условий.</p>
              <p>9.3. Споры решаются в первую очередь путём переговоров. При недостижении согласия — в судебном порядке в соответствии с законодательством Республики Узбекистан.</p>
              <p>9.4. Если отдельные пункты настоящей Оферты признаны недействительными, остальные пункты сохраняют свою силу.</p>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
