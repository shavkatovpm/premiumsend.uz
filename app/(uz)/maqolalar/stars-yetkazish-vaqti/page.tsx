import type { Metadata } from "next";
import Link from "next/link";
import { ogBaseUz } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title: "Telegram Stars qancha vaqtda hisobga tushadi? Kelmasa nima qilish kerak",
  description:
    "@premiumsendbot orqali to'langan Telegram Stars odatda bir necha daqiqada akkauntga tushadi. Kechikish sabablari, balansni qayerda tekshirish va Stars kelmasa qadamma-qadam nima qilish kerak.",
  keywords: [
    "stars qancha vaqtda tushadi",
    "telegram stars yetkazish vaqti",
    "stars hisobga tushmadi",
    "stars kelmadi nima qilish kerak",
    "stars kechikdi",
    "premiumsendbot stars kelmadi",
  ],
  alternates: {
    canonical: "https://premiumsend.uz/maqolalar/stars-yetkazish-vaqti",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/stars-yetkazish-vaqti",
      ru: "https://premiumsend.uz/ru/maqolalar/stars-yetkazish-vaqti",
      "x-default": "https://premiumsend.uz/maqolalar/stars-yetkazish-vaqti",
    },
  },
  openGraph: {
    ...ogBaseUz,
    title: "Telegram Stars qancha vaqtda hisobga tushadi? Kelmasa nima qilish kerak",
    description:
      "Odatda bir necha daqiqada. Kechikish sabablari, balansni tekshirish va Stars kelmasa nima qilish kerak — aniq qadamlar.",
    url: "https://premiumsend.uz/maqolalar/stars-yetkazish-vaqti",
    type: "article",
    publishedTime: "2026-09-21",
  },
};

export default function ArticleStarsYetkazishVaqti() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Telegram Stars qancha vaqtda hisobga tushadi? Kelmasa nima qilish kerak",
    description:
      "@premiumsendbot orqali to'langan Telegram Stars'ning akkauntga tushish vaqti, kechikish sabablari va Stars kelmasa bajariladigan qadamlar.",
    datePublished: "2026-09-21",
    dateModified: "2026-09-21",
    author: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    publisher: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    mainEntityOfPage: "https://premiumsend.uz/maqolalar/stars-yetkazish-vaqti",
    inLanguage: "uz",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Telegram Stars qancha vaqtda hisobga tushadi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "@premiumsendbot orqali Stars odatda to'lov aniqlangandan keyin bir necha daqiqada avtomatik akkauntga tushadi. Aniq soniyagacha kafolat berilmaydi: vaqt o'tkazmaning bank tomonidan qancha tez amalga oshishiga bog'liq.",
        },
      },
      {
        "@type": "Question",
        name: "Stars qayerda ko'rinadi va balansni qanday tekshiraman?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Stars balansi Telegram ilovasining Sozlamalar (Settings) bo'limidagi Stars sahifasida ko'rinadi. Ilovani yopib qayta oching yoki yangilang — balans ba'zan darhol yangilanmaydi.",
        },
      },
      {
        "@type": "Question",
        name: "Pul o'tkazdim, lekin Stars kelmadi. Nima qilaman?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Avval bank ilovangizda o'tkazma muvaffaqiyatli bo'lganini va summa Mini App ko'rsatgan bilan aynan bir xil, karta ham to'g'ri ekanini tekshiring. Bir necha daqiqa kuting va Telegram'ni qayta oching. Kelmasa, @premiumsend_admin ga to'lov cheki (skrinshot), Telegram username'ingiz va Stars miqdorini yuboring.",
        },
      },
      {
        "@type": "Question",
        name: "Noto'g'ri summa yoki noto'g'ri kartaga o'tkazsam Stars tushadimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Avtomatik tizim to'lovni Mini App ko'rsatgan aniq summa bo'yicha aniqlaydi, shuning uchun summa mos kelmasa Stars avtomatik tushmasligi mumkin. Bunday holda darhol @premiumsend_admin ga chek bilan murojaat qiling — holat ko'rib chiqiladi.",
        },
      },
      {
        "@type": "Question",
        name: "Stars tushmasa, pulim qaytariladimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Har bir holat alohida ko'rib chiqiladi: to'lov aniqlansa Stars beriladi, aniqlanmasa yoki xato bo'lsa @premiumsend_admin bilan hal qilinadi. Premium Send Telegram'ning rasmiy hamkori emas, mahalliy reseller — shu sabab to'lov masalalari faqat bizning qo'llab-quvvatlash orqali hal qilinadi, Telegram support orqali emas.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Bosh sahifa", item: "https://premiumsend.uz" },
      { "@type": "ListItem", position: 2, name: "Maqolalar", item: "https://premiumsend.uz/maqolalar" },
      { "@type": "ListItem", position: 3, name: "Stars qancha vaqtda tushadi", item: "https://premiumsend.uz/maqolalar/stars-yetkazish-vaqti" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-muted">
        <Link href="/" className="hover:text-primary">Bosh sahifa</Link>
        <span className="mx-2">/</span>
        <Link href="/maqolalar" className="hover:text-primary">Maqolalar</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">Stars qancha vaqtda tushadi</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">Muammolar yechimi</span>
            <time className="text-xs text-muted" dateTime="2026-09-21">2026-yil, 21-sentabr</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Telegram Stars qancha vaqtda hisobga tushadi? Kelmasa nima qilish kerak
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-sm font-bold text-primary mb-2">QISQACHA JAVOB</p>
            <p className="text-foreground leading-relaxed font-medium">
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="text-primary hover:underline">@premiumsendbot</Link>{" "}
              orqali to&apos;langan Stars <strong>odatda bir necha daqiqada</strong> Telegram akkauntingizga avtomatik tushadi. Kelmasa: bank ilovasida o&apos;tkazma bajarilganini va summa aynan Mini App ko&apos;rsatganday ekanini tekshiring, Telegram&apos;ni qayta oching, so&apos;ng chek bilan <strong>@premiumsend_admin</strong> ga yozing.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Stars to&apos;lovdan keyin darhol ko&apos;rinmasa, bu tabiiy xavotir tug&apos;diradi — ayniqsa pul allaqachon o&apos;tkazilgan bo&apos;lsa. Ko&apos;p hollarda sabab oddiy: o&apos;tkazma hali bank tomonidan tugallanmagan yoki balans ilovada yangilanmagan. Quyida nima qancha vaqt olishi, balansni qayerda tekshirish va Stars kelmasa aniq qadamlar keltirilgan.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Stars qancha vaqtda hisobga tushadi?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Jarayon avtomatik: Mini App&apos;da miqdorni tanlaysiz, u karta raqami va aniq summani ko&apos;rsatadi, siz o&apos;z bank ilovangizdan shu kartaga P2P o&apos;tkazma qilasiz. To&apos;lov aniqlangach, Stars <strong>odatda bir necha daqiqada</strong> akkauntga qo&apos;shiladi.
            </p>
            <p className="text-muted leading-relaxed">
              Biz aniq soniya yoki daqiqani va&apos;da qilmaymiz: vaqtning asosiy qismi sizning bankingiz o&apos;tkazmani qanchalik tez bajarishiga bog&apos;liq. Jarayonning o&apos;zi qanday tuzilganini{" "}
              <Link href="/maqolalar/stars-kartaga-otkazma" className="text-primary font-semibold hover:underline">kartaga o&apos;tkazib Stars olish</Link>{" "}
              maqolasida batafsil o&apos;qishingiz mumkin.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Nega Stars kechikishi mumkin?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Eng keng tarqalgan sabablar va ularni qanday tekshirish jadvalda:
            </p>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto mb-4">
              <table className="w-full text-sm min-w-[520px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">Sabab</th>
                    <th className="p-4 text-left font-bold">Qanday tekshirish</th>
                    <th className="p-4 text-left font-bold">Nima qilish kerak</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">O&apos;tkazma bank tomonidan tugallanmagan</td>
                    <td className="p-4">Bank ilovasida tranzaksiya holati va chekni oching</td>
                    <td className="p-4">Holat &quot;muvaffaqiyatli&quot; bo&apos;lguncha kuting</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Summa Mini App ko&apos;rsatganidan farq qiladi</td>
                    <td className="p-4">Chekdagi summani Mini App&apos;dagi bilan solishtiring</td>
                    <td className="p-4">@premiumsend_admin ga chek bilan yozing</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Boshqa kartaga o&apos;tkazilgan</td>
                    <td className="p-4">Chekdagi qabul qiluvchi karta raqamini Mini App&apos;dagi bilan solishtiring</td>
                    <td className="p-4">Darhol @premiumsend_admin ga yozing</td>
                  </tr>
                  <tr className="border-b border-card-border last:border-b-0">
                    <td className="p-4 font-medium">Telegram balansni hali yangilamagan</td>
                    <td className="p-4">Ilovani yopib qayta oching, Stars sahifasini yangilang</td>
                    <td className="p-4">Ilovani yangilang, kerak bo&apos;lsa qayta kiring</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Stars kelganini qayerdan tekshiraman?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Telegram ilovasida <strong>Sozlamalar (Settings)</strong> bo&apos;limidagi Stars sahifasini oching — balans va tranzaksiyalar shu yerda ko&apos;rinadi. Ilova avtomatik yangilanmagan bo&apos;lsa, uni to&apos;liq yopib qayta oching.
            </p>
            <p className="text-muted leading-relaxed">
              Balans oshgan bo&apos;lsa, Stars tayyor: uni{" "}
              <Link href="/maqolalar/ai-botlarga-necha-stars-kerak" className="text-primary font-semibold hover:underline">AI botlar</Link>,
              donat, stikerlar yoki mini-app to&apos;lovlari uchun ishlatishingiz mumkin.
            </p>
          </section>

          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Stars kerakmi? <strong className="text-white">@premiumsendbot</strong>&apos;da so&apos;mda, Uzcard, Humo, Click yoki Payme&apos;dagi kartangizdan o&apos;tkazib oling.
              </p>
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                @premiumsendbot — boshlash
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Stars kelmasa, qadamma-qadam nima qilish kerak?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Shoshilmang va quyidagi tartibda harakat qiling:
            </p>
            <div className="space-y-4 mb-6">
              {[
                { step: "1", title: "Bank ilovasida o'tkazmani tekshiring", desc: "Tranzaksiya muvaffaqiyatli bajarilganmi, pul hisobingizdan yechilganmi — chekni oching." },
                { step: "2", title: "Summa va kartani solishtiring", desc: "Chekdagi summa va qabul qiluvchi karta raqami Mini App ko'rsatganiga aynan mos bo'lishi kerak." },
                { step: "3", title: "Bir necha daqiqa kuting", desc: "Telegram'ni to'liq yoping va qayta oching, Sozlamalar → Stars sahifasini yangilang." },
                { step: "4", title: "@premiumsend_admin ga yozing", desc: "To'lov cheki (skrinshot), Telegram username'ingiz va sotib olmoqchi bo'lgan Stars miqdorini yuboring." },
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
              Muhim: Premium Send Telegram&apos;ning rasmiy hamkori emas, mahalliy reseller. Shu sababli to&apos;lov bo&apos;yicha savollar Telegram support&apos;i emas, aynan bizning qo&apos;llab-quvvatlash orqali hal qilinadi. Umumiy holatda ham tekshiring: rasmiy{" "}
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="text-primary font-semibold hover:underline">@premiumsendbot</Link>{" "}
              havolasidan foydalanganingizga ishonch hosil qiling.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Kelajakda kechikishni qanday kamaytirish mumkin?</h2>
            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li>Summani <strong>aynan</strong> Mini App ko&apos;rsatganday, yaxlitlamasdan o&apos;tkazing</li>
              <li>Karta raqamini nusxa ko&apos;chirib qo&apos;ying, qo&apos;lda yozmang</li>
              <li>O&apos;tkazmadan keyin chekni saqlab qo&apos;ying — muammo bo&apos;lsa kerak bo&apos;ladi</li>
              <li>Telegram ilovasini yangi versiyada ishlating</li>
            </ul>
            <p className="text-muted leading-relaxed">
              Narxlar va paketlar:{" "}
              <Link href="/stars" className="text-primary font-semibold hover:underline">barcha Stars paketlari</Link>{" "}
              (300 so&apos;m/star), masalan{" "}
              <Link href="/50-stars" className="text-primary font-semibold hover:underline">50 Stars — 15 000 so&apos;m</Link> yoki{" "}
              <Link href="/1000-stars" className="text-primary font-semibold hover:underline">1000 Stars — 300 000 so&apos;m</Link>. Qaysi yo&apos;l sizga mosligini{" "}
              <Link href="/maqolalar/stars-sotib-olishning-necha-yoli-bor" className="text-primary font-semibold hover:underline">yo&apos;llar taqqoslashi</Link>{" "}
              maqolasidan bilib oling.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Tez-tez so&apos;raladigan savollar (FAQ)</h2>
            <div className="space-y-4">
              {[
                { q: "Telegram Stars qancha vaqtda hisobga tushadi?", a: "Odatda to'lov aniqlangandan keyin bir necha daqiqada avtomatik tushadi. Aniq soniya kafolatlanmaydi — vaqt bankning o'tkazmani bajarishiga bog'liq." },
                { q: "Stars qayerda ko'rinadi va balansni qanday tekshiraman?", a: "Telegram ilovasidagi Sozlamalar (Settings) bo'limining Stars sahifasida. Ilovani yopib qayta oching." },
                { q: "Pul o'tkazdim, lekin Stars kelmadi. Nima qilaman?", a: "Bank chekini, summa va kartani tekshiring, bir necha daqiqa kuting. Kelmasa chek, username va miqdor bilan @premiumsend_admin ga yozing." },
                { q: "Noto'g'ri summa yoki noto'g'ri kartaga o'tkazsam Stars tushadimi?", a: "Avtomatik tushmasligi mumkin. Darhol @premiumsend_admin ga chek bilan murojaat qiling — holat ko'rib chiqiladi." },
                { q: "Stars tushmasa, pulim qaytariladimi?", a: "Har bir holat alohida ko'rib chiqiladi — @premiumsend_admin bilan hal qilinadi. Premium Send Telegram'ning rasmiy hamkori emas, mahalliy reseller." },
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
                  Stars&apos;ni so&apos;mda oling — <strong className="text-white">@premiumsendbot</strong> orqali 50 Stars <strong className="text-white">15 000 so&apos;mdan</strong>, odatda bir necha daqiqada akkauntingizda.
                </p>
                <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                  @premiumsendbot — boshlash
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
