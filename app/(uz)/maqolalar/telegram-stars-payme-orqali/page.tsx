import type { Metadata } from "next";
import Link from "next/link";
import { ogBaseUz } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title: "Payme orqali Telegram Stars sotib olish — qadamma-qadam",
  description:
    "Payme ilovasi orqali Telegram Stars sotib olish — 300 so'm/star, 50 dan 5000 gacha paketlar. @premiumsendbot orqali PIN/Face ID bilan tez to'lov, bir necha daqiqada yetkazish.",
  keywords: [
    "payme orqali telegram stars",
    "telegram stars payme",
    "payme bilan stars sotib olish",
    "telegram stars payme ilovasi",
    "premiumsendbot payme stars",
  ],
  alternates: {
    canonical: "https://premiumsend.uz/maqolalar/telegram-stars-payme-orqali",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/telegram-stars-payme-orqali",
      ru: "https://premiumsend.uz/ru/maqolalar/telegram-stars-payme-orqali",
      "x-default": "https://premiumsend.uz/maqolalar/telegram-stars-payme-orqali",
    },
  },
  openGraph: {
    ...ogBaseUz,
    title: "Payme orqali Telegram Stars sotib olish — qadamma-qadam",
    description: "Payme ilovasida PIN/Face ID bilan tez to'lov. 300 so'm/star, bir necha daqiqada faollashish.",
    url: "https://premiumsend.uz/maqolalar/telegram-stars-payme-orqali",
    type: "article",
    publishedTime: "2026-09-06",
  },
};

export default function ArticleStarsPaymeOrqali() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Payme orqali Telegram Stars sotib olish — qadamma-qadam",
    description: "Payme ilovasi orqali O'zbekistonda Telegram Stars sotib olish — narxlar, jarayon va xavfsizlik.",
    datePublished: "2026-09-06",
    dateModified: "2026-09-06",
    author: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    publisher: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    mainEntityOfPage: "https://premiumsend.uz/maqolalar/telegram-stars-payme-orqali",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Payme orqali Telegram Stars sotib olish",
    description: "Bosqichma-bosqich: Payme ilovasi orqali Telegram Stars sotib olish",
    step: [
      { "@type": "HowToStep", position: 1, name: "@premiumsendbot ni oching", text: "Telegram qidiruvida @premiumsendbot deb yozing, /start bosing." },
      { "@type": "HowToStep", position: 2, name: "Stars paketini tanlang", text: "50 dan 5000 gacha paketlardan birini tanlang yoki o'zingiz xohlagan sonni kiriting." },
      { "@type": "HowToStep", position: 3, name: "To'lov usulida Payme'ni tanlang", text: "Ko'rsatilgan variantlar orasidan Payme'ni bosing." },
      { "@type": "HowToStep", position: 4, name: "Payme ilovasida PIN/Face ID bilan to'lang", text: "Payme ilovasi ochiladi, summa avtomatik ko'rsatiladi, PIN yoki Face ID bilan tasdiqlaysiz." },
      { "@type": "HowToStep", position: 5, name: "Stars bir necha daqiqada tushadi", text: "To'lov tasdiqlangach, Stars Telegram akkauntingizga avtomatik qo'shiladi." },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Payme orqali Telegram Stars sotib olish mumkinmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha. @premiumsendbot orqali Payme ilovasi bilan Stars so'mda sotib olinadi. Barcha paketlar qo'llab-quvvatlanadi, to'lov 1-2 daqiqada, PIN yoki Face ID bilan.",
        },
      },
      {
        "@type": "Question",
        name: "Payme orqali Stars narxi boshqa usullardan farq qiladimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yo'q. Narx to'lov usuliga bog'liq emas — 300 so'm/star, Uzcard, Humo, Click uchun ham bir xil.",
        },
      },
      {
        "@type": "Question",
        name: "Payme orqali to'lash uchun kartani ilovaga ulash kerakmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha, Uzcard yoki Humo kartangizni Payme ilovasiga oldindan ulagan bo'lishingiz kerak. Ulanmagan bo'lsa, ilova ichida bir necha daqiqada qo'shish mumkin.",
        },
      },
      {
        "@type": "Question",
        name: "Payme orqali to'lov xavfsizmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha. To'lov Payme'ning o'z rasmiy ilovasida amalga oshadi, tasdiqlash PIN yoki Face ID orqali — karta raqami botga hech qachon kiritilmaydi.",
        },
      },
      {
        "@type": "Question",
        name: "Payme orqali to'lab Stars qancha vaqtda keladi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Odatda bir necha daqiqada. Payme orqali to'lov tez usullardan biri, chunki tasdiqlash darhol amalga oshadi.",
        },
      },
      {
        "@type": "Question",
        name: "Payme ilovam bo'lmasa nima qilaman?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Uzcard, Humo P2P o'tkazma yoki Click'dan foydalanishingiz mumkin, narx va jarayon bir xil.",
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
      { "@type": "ListItem", position: 3, name: "Payme orqali Telegram Stars", item: "https://premiumsend.uz/maqolalar/telegram-stars-payme-orqali" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-muted">
        <Link href="/" className="hover:text-primary">Bosh sahifa</Link>
        <span className="mx-2">/</span>
        <Link href="/maqolalar" className="hover:text-primary">Maqolalar</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">Payme orqali Telegram Stars</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">Qo&apos;llanma</span>
            <time className="text-xs text-muted" dateTime="2026-09-06">2026-yil, 6-sentabr</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Payme orqali Telegram Stars sotib olish — qadamma-qadam
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-sm font-bold text-primary mb-2">QISQACHA JAVOB</p>
            <p className="text-foreground leading-relaxed font-medium">
              Payme ilovasi orqali Telegram Stars{" "}
              <Link href="https://telegram.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@premiumsendbot</Link>{" "}
              da sotib olinadi. Narx — <strong>300 so&apos;m/star</strong> (50 Stars = 15 000 so&apos;m). To&apos;lov Payme ilovasida PIN yoki Face ID bilan 1-2 daqiqada, Stars bir necha daqiqada akkauntga tushadi.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Payme — O&apos;zbekistondagi eng katta mobil to&apos;lov ilovalaridan biri. Telegram Stars sotib olishda Payme orqali to&apos;lov tez va oddiy — kartani oldindan ulagan bo&apos;lsangiz, bir necha bosishda tugaydi.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Quyida — Payme orqali Stars sotib olishning to&apos;liq jarayoni: narxlar, bosqichma-bosqich qo&apos;llanma va xavfsizlik.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Nega Payme orqali Stars uchun maxsus xizmat kerak?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Telegram Stars rasmiy ravishda Telegram ilovasi (xalqaro Visa/Mastercard) yoki Fragment.com (TON kripto) orqali sotib olinadi. Payme — O&apos;zbekiston ichidagi to&apos;lov ilovasi, xalqaro karta network&apos;iga ham, TON blokcheyniga ham to&apos;g&apos;ridan-to&apos;g&apos;ri ulanmagan.
            </p>
            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">Yechim:</strong> @premiumsendbot orqali siz Payme bilan so&apos;mda to&apos;laysiz, xizmat Stars&apos;ni akkauntingizga rasmiy mexanizm orqali ulaydi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Payme orqali Stars — barcha paketlar narxi</h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Narx:</strong> 300 so&apos;m/star — Payme, Uzcard, Humo, Click uchun bir xil. 50 Stars — <strong>15 000 so&apos;m</strong>, 500 Stars — <strong>150 000 so&apos;m</strong>, 1000 Stars — <strong>300 000 so&apos;m</strong> (eng ommabop).
              </p>
            </div>
            <p className="text-muted leading-relaxed">
              To&apos;liq narx jadvali:{" "}
              <Link href="/stars" className="text-primary font-semibold hover:underline">Stars sahifasida</Link>. Umumiy qo&apos;llanma:{" "}
              <Link href="/maqolalar/telegram-stars-somda-uzs-sotib-olish" className="text-primary font-semibold hover:underline">&quot;Stars&apos;ni so&apos;mda sotib olish&quot;</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Payme orqali Stars qanday sotib olinadi? Bosqichma-bosqich</h2>
            <div className="space-y-4 mb-6">
              {[
                { step: "1", title: "@premiumsendbot ni oching", desc: "Telegram qidiruvida @premiumsendbot deb yozing, /start bosing." },
                { step: "2", title: "Stars paketini tanlang", desc: "50 dan 5000 gacha paketlardan birini tanlang yoki o'zingiz xohlagan sonni kiriting." },
                { step: "3", title: "To'lov usulida Payme'ni tanlang", desc: "Ko'rsatilgan variantlar orasidan Payme'ni bosing." },
                { step: "4", title: "Payme ilovasida PIN/Face ID bilan to'lang", desc: "Payme ilovasi ochiladi, summa avtomatik ko'rsatiladi, PIN yoki Face ID bilan tasdiqlang." },
                { step: "5", title: "Stars bir necha daqiqada tushadi", desc: "To'lov tasdiqlangach, Stars Telegram → Sozlamalar → Stars bo'limida ko'rinadi." },
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
              Kartangiz Payme ilovasiga ulanmagan bo&apos;lsa, ilova ichida Uzcard yoki Humo kartani bir necha daqiqada qo&apos;shishingiz mumkin.
            </p>
          </section>

          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Payme ilovangiz tayyormi? <strong className="text-white">@premiumsendbot</strong> da Stars&apos;ni PIN/Face ID bilan 1-2 daqiqada to&apos;lab oling.
              </p>
              <Link href="https://telegram.me/premiumsendbot" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                @premiumsendbot — boshlash
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Payme orqali to&apos;lov xavfsizmi?</h2>
            <p className="text-muted leading-relaxed mb-4">
              To&apos;lov to&apos;liq Payme&apos;ning o&apos;z rasmiy ilovasi ichida amalga oshadi — tasdiqlash PIN yoki Face ID orqali. Bot karta raqami, CVV yoki PIN kodni hech qachon so&apos;ramaydi va saqlamaydi. Texnik sabab bilan Stars kelmasa, to&apos;lov to&apos;liq qaytariladi.
            </p>
            <p className="text-muted leading-relaxed">
              Umumiy reseller tekshirish mezonlari:{" "}
              <Link href="/maqolalar/telegram-premium-ishonchli-saytdan-sotib-olish" className="text-primary font-semibold hover:underline">&quot;Ishonchli saytdan sotib olish&quot;</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Tez-tez so&apos;raladigan savollar (FAQ)</h2>
            <div className="space-y-4">
              {[
                { q: "Payme orqali Telegram Stars sotib olish mumkinmi?", a: "Ha, @premiumsendbot orqali, barcha paketlar, to'lov 1-2 daqiqada PIN/Face ID bilan." },
                { q: "Payme orqali Stars narxi boshqa usullardan farq qiladimi?", a: "Yo'q, 300 so'm/star barcha to'lov usullari uchun bir xil." },
                { q: "Payme orqali to'lash uchun kartani ilovaga ulash kerakmi?", a: "Ha, Uzcard/Humo kartangizni Payme'ga ulashingiz kerak — ulanmagan bo'lsa ilova ichida qo'shish mumkin." },
                { q: "Payme orqali to'lov xavfsizmi?", a: "Ha, to'lov Payme'ning rasmiy ilovasida, PIN/Face ID bilan tasdiqlanadi, karta raqami botga kiritilmaydi." },
                { q: "Payme orqali to'lab Stars qancha vaqtda keladi?", a: "Odatda bir necha daqiqada." },
                { q: "Payme ilovam bo'lmasa nima qilaman?", a: "Uzcard, Humo P2P yoki Click'dan foydalanishingiz mumkin, narx bir xil." },
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
                  Payme orqali Telegram Stars — tez va oddiy.{" "}
                  <strong className="text-white">@premiumsendbot</strong> da 50 Stars <strong className="text-white">15 000 so&apos;mdan</strong>, PIN/Face ID bilan bir necha daqiqada.
                </p>
                <Link href="https://telegram.me/premiumsendbot" target="_blank" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                  Payme bilan boshlash
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
