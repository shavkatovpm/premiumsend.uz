import type { Metadata } from "next";
import Link from "next/link";
import { ogBaseUz } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title: "Humo orqali Telegram Stars sotib olish — to'g'ridan-to'g'ri qo'llanma",
  description:
    "Humo karta bilan Telegram Stars sotib olish — 300 so'm/star, 50 dan 5000 gacha paketlar. @premiumsendbot orqali so'mda to'lov, bir necha daqiqada yetkazish, komissiyasiz.",
  keywords: [
    "humo orqali telegram stars",
    "telegram stars humo karta",
    "humo bilan stars sotib olish",
    "telegram stars humo sotib olish",
    "premiumsendbot humo stars",
  ],
  alternates: {
    canonical: "https://premiumsend.uz/maqolalar/telegram-stars-humo-orqali",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/telegram-stars-humo-orqali",
      ru: "https://premiumsend.uz/ru/maqolalar/telegram-stars-humo-orqali",
      "x-default": "https://premiumsend.uz/maqolalar/telegram-stars-humo-orqali",
    },
  },
  openGraph: {
    ...ogBaseUz,
    title: "Humo orqali Telegram Stars sotib olish — to'g'ridan-to'g'ri qo'llanma",
    description:
      "Humo karta bilan so'mda Stars sotib olish. 300 so'm/star, bir necha daqiqada faollashish, komissiyasiz.",
    url: "https://premiumsend.uz/maqolalar/telegram-stars-humo-orqali",
    type: "article",
    publishedTime: "2026-09-06",
  },
};

export default function ArticleStarsHumoOrqali() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Humo orqali Telegram Stars sotib olish — to'g'ridan-to'g'ri qo'llanma",
    description: "Humo karta bilan O'zbekistonda Telegram Stars sotib olish — narxlar, to'lov jarayoni va xavfsizlik.",
    datePublished: "2026-09-06",
    dateModified: "2026-09-06",
    author: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    publisher: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    mainEntityOfPage: "https://premiumsend.uz/maqolalar/telegram-stars-humo-orqali",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Humo orqali Telegram Stars sotib olish",
    description: "Bosqichma-bosqich: Humo karta bilan Telegram Stars sotib olish",
    step: [
      { "@type": "HowToStep", position: 1, name: "@premiumsendbot ni oching", text: "Telegram qidiruvida @premiumsendbot deb yozing, /start bosing." },
      { "@type": "HowToStep", position: 2, name: "Stars paketini tanlang", text: "50 dan 5000 gacha paketlardan birini tanlang yoki o'zingiz xohlagan sonni kiriting." },
      { "@type": "HowToStep", position: 3, name: "To'lov usulida Humo'ni tanlang", text: "Ko'rsatilgan variantlar orasidan Humo'ni bosing." },
      { "@type": "HowToStep", position: 4, name: "Humo karta bilan to'lang", text: "Humo mobil ilovasi, Click yoki Payme orqali ko'rsatilgan summani to'lang." },
      { "@type": "HowToStep", position: 5, name: "Stars bir necha daqiqada tushadi", text: "To'lov tasdiqlangach, Stars Telegram akkauntingizga avtomatik qo'shiladi." },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Humo karta bilan Telegram Stars sotib olish mumkinmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha. @premiumsendbot orqali Humo karta bilan Stars so'mda sotib olinadi. Barcha paketlar (50 dan 5000 gacha) qo'llab-quvvatlanadi, to'lov komissiyasiz, bir necha daqiqada akkauntga tushadi.",
        },
      },
      {
        "@type": "Question",
        name: "Humo orqali Stars narxi Uzcard'dan farq qiladimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yo'q. Narx to'lov usuliga bog'liq emas — 300 so'm/star, barcha kartalar uchun bir xil. 50 Stars — 15 000 so'm, 1000 Stars — 300 000 so'm.",
        },
      },
      {
        "@type": "Question",
        name: "Telegram rasmiy ilovasida Humo bilan Stars sotib olsa bo'ladimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yo'q. Telegram rasmiy ilovasi Stars uchun faqat xalqaro Visa/Mastercard qabul qiladi. Humo O'zbekistonning ichki to'lov tizimi bo'lgani uchun bu network'ga ulanmagan — shu sababli @premiumsendbot kabi mahalliy xizmat kerak.",
        },
      },
      {
        "@type": "Question",
        name: "Humo karta bilan to'lov xavfsizmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha. To'lov Humo'ning o'z rasmiy ilovasi, Click yoki Payme orqali amalga oshadi — karta raqami yoki parol botga kiritilmaydi va saqlanmaydi.",
        },
      },
      {
        "@type": "Question",
        name: "Humo orqali to'lab Stars qancha vaqtda keladi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To'lov tasdiqlangandan so'ng odatda bir necha daqiqa ichida Stars akkauntga tushadi. Texnik kechikish bo'lsa, bot qo'llab-quvvatlashi yordam beradi.",
        },
      },
      {
        "@type": "Question",
        name: "Katta miqdorda Stars kerak bo'lsa Humo bilan to'lash mumkinmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha, tayyor paketlardan tashqari botda o'zingiz xohlagan miqdorni kiritish mumkin, Humo kunlik internet to'lov limitidan oshmasa. Limit yetmasa, bank ilovasidan vaqtincha oshirish kifoya.",
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
      { "@type": "ListItem", position: 3, name: "Humo orqali Telegram Stars", item: "https://premiumsend.uz/maqolalar/telegram-stars-humo-orqali" },
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
        <span className="text-foreground font-medium">Humo orqali Telegram Stars</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">Qo&apos;llanma</span>
            <time className="text-xs text-muted" dateTime="2026-09-06">2026-yil, 6-sentabr</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Humo orqali Telegram Stars sotib olish — to&apos;g&apos;ridan-to&apos;g&apos;ri qo&apos;llanma
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-sm font-bold text-primary mb-2">QISQACHA JAVOB</p>
            <p className="text-foreground leading-relaxed font-medium">
              Humo karta orqali Telegram Stars{" "}
              <Link href="https://telegram.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@premiumsendbot</Link>{" "}
              da sotib olinadi. Narx — <strong>300 so&apos;m/star</strong> (50 Stars = 15 000 so&apos;m, 1000 Stars = 300 000 so&apos;m), Uzcard bilan bir xil. To&apos;lov so&apos;mda, komissiyasiz, bir necha daqiqada akkauntga tushadi.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Humo — O&apos;zbekistonning ikkinchi yirik milliy to&apos;lov tizimi. Telegram Stars sotib olishda Humo egalari uchun ham barcha paketlar mavjud — narxi, jarayoni va xavfsizligi Uzcard bilan bir xil.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Quyida — Humo karta orqali Stars sotib olishning to&apos;liq jarayoni: nega alohida xizmat kerak, narxlar, bosqichma-bosqich qo&apos;llanma va xavfsizlik.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Nega Humo bilan Stars uchun maxsus xizmat kerak?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Telegram Stars rasmiy ravishda Telegram ilovasi (xalqaro Visa/Mastercard orqali) yoki Fragment.com (TON kripto orqali) da sotib olinadi. Humo — O&apos;zbekistonning ichki to&apos;lov tizimi, na xalqaro karta network&apos;iga, na TON blokcheyniga ulanmagan, shuning uchun bu ikkala rasmiy kanalda ham to&apos;g&apos;ridan-to&apos;g&apos;ri ishlamaydi.
            </p>
            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">Yechim:</strong> @premiumsendbot kabi mahalliy xizmat — siz Humo bilan so&apos;mda to&apos;laysiz, xizmat Stars&apos;ni akkauntingizga ulaydi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Humo orqali Stars — barcha paketlar narxi</h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Narx:</strong> 300 so&apos;m/star — Humo, Uzcard, Click, Payme uchun bir xil. 50 Stars — <strong>15 000 so&apos;m</strong>, 100 Stars — <strong>30 000 so&apos;m</strong>, 500 Stars — <strong>150 000 so&apos;m</strong>, 1000 Stars — <strong>300 000 so&apos;m</strong> (eng ommabop).
              </p>
            </div>
            <p className="text-muted leading-relaxed">
              To&apos;liq narx jadvali va katta paketlar (2500, 5000):{" "}
              <Link href="/stars" className="text-primary font-semibold hover:underline">Stars sahifasida</Link>. Umumiy so&apos;mda sotib olish qo&apos;llanmasi:{" "}
              <Link href="/maqolalar/telegram-stars-somda-uzs-sotib-olish" className="text-primary font-semibold hover:underline">&quot;Stars&apos;ni so&apos;mda sotib olish&quot;</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Humo orqali Stars qanday sotib olinadi? Bosqichma-bosqich</h2>
            <div className="space-y-4 mb-6">
              {[
                { step: "1", title: "@premiumsendbot ni oching", desc: "Telegram qidiruvida @premiumsendbot deb yozing, /start bosing." },
                { step: "2", title: "Stars paketini tanlang", desc: "50 dan 5000 gacha paketlardan birini tanlang yoki o'zingiz xohlagan sonni kiriting." },
                { step: "3", title: "To'lov usulida Humo'ni tanlang", desc: "Ko'rsatilgan variantlar orasidan Humo'ni bosing." },
                { step: "4", title: "Humo karta bilan to'lang", desc: "Humo mobil ilovasi, Click yoki Payme orqali ko'rsatilgan summani to'lang. Komissiya yo'q." },
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
          </section>

          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Humo kartangiz tayyormi? <strong className="text-white">@premiumsendbot</strong> da Stars&apos;ni so&apos;mda to&apos;lab oling. Bir necha daqiqada akkauntga tushadi.
              </p>
              <Link href="https://telegram.me/premiumsendbot" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                @premiumsendbot — boshlash
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Humo va Uzcard: Stars uchun farqi bormi?</h2>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Parametr</div>
                <div className="text-center">Humo</div>
                <div className="text-center">Uzcard</div>
              </div>
              {[
                ["Stars narxi", "Bir xil (300 so'm/star)", "Bir xil (300 so'm/star)"],
                ["Click bilan to'lov", "✅ Mavjud", "✅ Mavjud"],
                ["Payme bilan to'lov", "✅ Mavjud", "✅ Mavjud"],
                ["Komissiya", "0%", "0%"],
                ["Faollashish vaqti", "Bir necha daqiqa", "Bir necha daqiqa"],
              ].map(([param, humo, uzcard], i, arr) => (
                <div key={param} className={`grid grid-cols-3 p-4 items-center text-sm ${i < arr.length - 1 ? "border-b border-card-border" : ""}`}>
                  <div className="font-medium">{param}</div>
                  <div className="text-center">{humo}</div>
                  <div className="text-center">{uzcard}</div>
                </div>
              ))}
            </div>
            <p className="text-muted leading-relaxed">
              Farq yo&apos;q — qaysi kartangiz bo&apos;lsa, shuni ishlating. Uzcard bo&apos;yicha qo&apos;llanma:{" "}
              <Link href="/maqolalar/telegram-stars-uzcard-orqali" className="text-primary font-semibold hover:underline">&quot;Uzcard orqali Telegram Stars&quot;</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Humo bilan to&apos;lash xavfsizmi?</h2>
            <p className="text-muted leading-relaxed mb-4">
              To&apos;lov mexanizmi shunday: siz to&apos;lovni <strong>o&apos;zingizning Humo ilovangiz ichida</strong> amalga oshirasiz. Bot karta raqami, parol yoki SMS kodni hech qachon so&apos;ramaydi va saqlamaydi. Texnik sabab bilan Stars kelmasa, to&apos;lov to&apos;liq qaytariladi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Tez-tez so&apos;raladigan savollar (FAQ)</h2>
            <div className="space-y-4">
              {[
                { q: "Humo karta bilan Telegram Stars sotib olish mumkinmi?", a: "Ha. @premiumsendbot orqali Humo bilan Stars so'mda sotib olinadi, barcha paketlar qo'llab-quvvatlanadi, komissiyasiz." },
                { q: "Humo orqali Stars narxi Uzcard'dan farq qiladimi?", a: "Yo'q, 300 so'm/star barcha kartalar uchun bir xil." },
                { q: "Telegram rasmiy ilovasida Humo bilan Stars sotib olsa bo'ladimi?", a: "Yo'q, rasmiy ilova faqat xalqaro Visa/Mastercard qabul qiladi. Humo uchun @premiumsendbot kerak." },
                { q: "Humo karta bilan to'lov xavfsizmi?", a: "Ha, to'lov Humo'ning o'z ilovasi orqali amalga oshadi, karta ma'lumotlari botga kiritilmaydi." },
                { q: "Humo orqali to'lab Stars qancha vaqtda keladi?", a: "Odatda bir necha daqiqada. Kechiksa, bot qo'llab-quvvatlashi yordam beradi." },
                { q: "Katta miqdorda Stars kerak bo'lsa Humo bilan to'lash mumkinmi?", a: "Ha, botda istalgan miqdorni kiritish mumkin, kunlik limit yetarli bo'lsa." },
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
                  Humo karta egalari uchun Telegram Stars — endi to&apos;sqinliksiz. <strong className="text-white">@premiumsendbot</strong> da 50 Stars <strong className="text-white">15 000 so&apos;mdan</strong>, bir necha daqiqada.
                </p>
                <Link href="https://telegram.me/premiumsendbot" target="_blank" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                  Humo bilan boshlash
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
