import type { Metadata } from "next";
import Link from "next/link";
import { ogBaseUz } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title:
    "Telegram Stars sotib olishning nechta yo'li bor — O'zbekistonda qaysi biri qulay?",
  description:
    "Telegram Stars sotib olishning 3 ta yo'li: rasmiy ilova (dollar, xalqaro karta), Fragment.com (TON kripto) va mahalliy reseller (so'mda, Uzcard/Humo/Click/Payme). Qaysi biri kimga mos — to'liq taqqoslash.",
  keywords: [
    "telegram stars qayerdan sotib olish",
    "telegram stars yollari",
    "stars sotib olish usullari",
    "fragment vs reseller stars",
    "telegram stars ozbekistonda",
    "premiumsendbot stars",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/maqolalar/stars-sotib-olishning-necha-yoli-bor",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/stars-sotib-olishning-necha-yoli-bor",
      ru: "https://premiumsend.uz/ru/maqolalar/stars-sotib-olishning-necha-yoli-bor",
      "x-default":
        "https://premiumsend.uz/maqolalar/stars-sotib-olishning-necha-yoli-bor",
    },
  },
  openGraph: {
    ...ogBaseUz,
    title: "Telegram Stars sotib olishning nechta yo'li bor?",
    description:
      "3 ta yo'l: rasmiy ilova, Fragment, mahalliy reseller. O'zbekistonda qaysi biri qulay — to'liq taqqoslash va qaror jadvali.",
    url: "https://premiumsend.uz/maqolalar/stars-sotib-olishning-necha-yoli-bor",
    type: "article",
    publishedTime: "2026-09-12",
  },
};

const PACKAGES = [
  { amount: 50, price: 15000 },
  { amount: 100, price: 30000 },
  { amount: 500, price: 150000 },
  { amount: 1000, price: 300000, popular: true },
];

export default function ArticleStarsSotibOlishningNechaYoliBor() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Telegram Stars sotib olishning nechta yo'li bor — O'zbekistonda qaysi biri qulay?",
    description:
      "Telegram Stars sotib olishning 3 ta yo'lini (rasmiy ilova, Fragment, mahalliy reseller) taqqoslab, O'zbekistondagi foydalanuvchi uchun eng mos variantni ko'rsatish.",
    datePublished: "2026-09-12",
    dateModified: "2026-09-12",
    author: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    publisher: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    mainEntityOfPage:
      "https://premiumsend.uz/maqolalar/stars-sotib-olishning-necha-yoli-bor",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Telegram Stars sotib olishning nechta yo'li bor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Uchta: (1) Telegram'ning rasmiy ilovasi (App Store/Google Play orqali, dollarda, xalqaro Visa/Mastercard talab qiladi), (2) Fragment.com (TON blokcheyni orqali, kripto-hamyon talab qiladi), (3) mahalliy reseller kabi @premiumsendbot (so'mda, Uzcard/Humo/Click/Payme kartangiz bilan, valyuta konvertatsiyasiz).",
        },
      },
      {
        "@type": "Question",
        name: "O'zbekistonda qaysi yo'l eng qulay?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Xalqaro Visa/Mastercard yoki TON kripto-hamyoningiz bo'lmasa, mahalliy reseller (@premiumsendbot) eng qulay — Uzcard yoki Humo kartangiz bilan to'g'ridan-to'g'ri so'mda to'laysiz, valyuta konvertatsiyasi yo'q.",
        },
      },
      {
        "@type": "Question",
        name: "Rasmiy Telegram ilovasidan Stars sotib olishning kamchiligi nima?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Narx dollar yoki evroda hisoblanadi va faqat xalqaro Visa/Mastercard qabul qilinadi — O'zbekistonning Uzcard va Humo kartalari bu tizimga ulanmagan, shuning uchun ular bilan to'lab bo'lmaydi.",
        },
      },
      {
        "@type": "Question",
        name: "Fragment.com orqali Stars sotib olish uchun nima kerak?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TON kriptovalyuta hamyoni va unda yetarli TON balansi kerak. Kripto bilan ishlamaydigan oddiy foydalanuvchi uchun bu qo'shimcha to'siq va texnik bilim talab qiladi.",
        },
      },
      {
        "@type": "Question",
        name: "Mahalliy reseller orqali sotib olingan Stars rasmiymi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha. Faqat to'lov bosqichi mahalliylashtirilgan — akkauntingizga tushgan Stars Telegram'ning o'z rasmiy balansi bo'lib, uni istalgan bot, kanal yoki mini-ilovada erkin ishlatishingiz mumkin.",
        },
      },
      {
        "@type": "Question",
        name: "Uch yo'lning narxi bir-biridan farq qiladimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha, sezilarli darajada — rasmiy ilovada Apple/Google'ning ~30% platforma komissiyasi narxga qo'shiladi, Fragment TON kursiga bog'liq suzuvchi narxda ishlaydi, mahalliy reseller esa (masalan Premium Send'da) 300 so'm/star qat'iy chiziqli tarifda, qo'shimcha komissiyasiz.",
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
      { "@type": "ListItem", position: 3, name: "Stars sotib olishning necha yo'li bor", item: "https://premiumsend.uz/maqolalar/stars-sotib-olishning-necha-yoli-bor" },
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
        <span className="text-foreground font-medium">Stars sotib olishning necha yo&apos;li bor</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">Taqqoslash</span>
            <time className="text-xs text-muted" dateTime="2026-09-12">2026-yil, 12-sentabr</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Telegram Stars sotib olishning nechta yo&apos;li bor — O&apos;zbekistonda qaysi biri qulay?
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-sm font-bold text-primary mb-2">QISQACHA JAVOB</p>
            <p className="text-foreground leading-relaxed font-medium">
              Telegram Stars sotib olishning <strong>3 ta yo&apos;li</strong> bor: rasmiy ilova (App Store/Google Play, dollarda, xalqaro karta kerak), Fragment.com (TON kripto-hamyon kerak) va mahalliy reseller —{" "}
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="text-primary hover:underline">@premiumsendbot</Link>{" "}
              kabi (so&apos;mda, Uzcard/Humo/Click/Payme). Xalqaro karta yoki kriptongiz bo&apos;lmasa, uchinchi yo&apos;l O&apos;zbekiston uchun eng qulay.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Uchala yo&apos;l ham bir xil natijaga — akkauntingizdagi rasmiy Telegram Stars balansiga — olib keladi. Farq faqat to&apos;lov jarayonida: qaysi valyuta, qaysi karta va qancha qo&apos;shimcha to&apos;siq bilan to&apos;lashingizda.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">1-yo&apos;l: Telegram rasmiy ilovasi (App Store / Google Play)</h2>
            <p className="text-muted leading-relaxed mb-4">
              Telegram ilovasining o&apos;zida Stars sotib olish bo&apos;limi bor — lekin to&apos;lov Apple yoki Google&apos;ning ichki to&apos;lov tizimi orqali o&apos;tadi. Narx dollar yoki evroda hisoblanadi va faqat xalqaro <strong>Visa/Mastercard</strong> qabul qilinadi (yoki Apple Pay/Google Pay orqali ulangan xalqaro karta).
            </p>
            <p className="text-muted leading-relaxed">
              Muammo: O&apos;zbekistonning <strong>Uzcard va Humo</strong> kartalari xalqaro karta tarmog&apos;iga ulanmagan, shuning uchun bu yo&apos;l ular bilan umuman ishlamaydi. Bundan tashqari, Apple/Google&apos;ning ~30% platforma komissiyasi ko&apos;pincha narxga qo&apos;shilib ketadi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">2-yo&apos;l: Fragment.com (TON blokcheyn)</h2>
            <p className="text-muted leading-relaxed mb-4">
              Fragment — Telegram bilan bog&apos;liq rasmiy platforma, unda Stars TON kriptovalyutasiga sotib olinadi. Bu yo&apos;l uchun TON kripto-hamyoni (masalan Tonkeeper) va unda yetarli TON balansi kerak.
            </p>
            <p className="text-muted leading-relaxed">
              Kripto bilan ishlagan foydalanuvchi uchun bu qulay bo&apos;lishi mumkin, lekin oddiy foydalanuvchi uchun hamyon ochish, TON sotib olish va kurs o&apos;zgarishini kuzatish — qo&apos;shimcha texnik to&apos;siq va vaqt talab qiladi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">3-yo&apos;l: Mahalliy reseller (so&apos;mda, mahalliy karta)</h2>
            <p className="text-muted leading-relaxed mb-4">
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="text-primary font-semibold hover:underline">@premiumsendbot</Link> kabi mahalliy xizmat to&apos;lov bosqichini O&apos;zbekiston sharoitiga moslaydi: siz <strong>Uzcard, Humo, Click yoki Payme</strong> kartangiz bilan to&apos;g&apos;ridan-to&apos;g&apos;ri so&apos;mda to&apos;laysiz, xizmat esa Stars&apos;ni akkauntingizga ulaydi. Xalqaro karta yoki kriptovalyuta shart emas.
            </p>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto mb-4">
              <table className="w-full text-sm min-w-[380px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">Paket</th>
                    <th className="p-4 text-left font-bold">Narx (so&apos;m)</th>
                  </tr>
                </thead>
                <tbody>
                  {PACKAGES.map((p) => (
                    <tr key={p.amount} className={`border-b border-card-border last:border-b-0 ${p.popular ? "bg-primary-light/20" : ""}`}>
                      <td className={`p-4 font-medium ${p.popular ? "text-primary font-bold" : ""}`}>{p.amount} Stars{p.popular ? " ⭐" : ""}</td>
                      <td className="p-4">{p.price.toLocaleString("en-US")} so&apos;m</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              300 so&apos;m/star, chiziqli tarif. Barcha 7 paket va to&apos;liq xarid jarayoni:{" "}
              <Link href="/maqolalar/telegram-stars-somda-uzs-sotib-olish" className="text-primary font-semibold hover:underline">Stars&apos;ni so&apos;mda sotib olish qo&apos;llanmasi</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Qaysi biri sizga mos? Qaror jadvali</h2>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto">
              <table className="w-full text-sm min-w-[560px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">Mezon</th>
                    <th className="p-4 text-left font-bold">Rasmiy ilova</th>
                    <th className="p-4 text-left font-bold">Fragment</th>
                    <th className="p-4 text-left font-bold text-primary">Mahalliy reseller</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Uzcard/Humo bilan to&apos;lash</td>
                    <td className="p-4">Yo&apos;q</td>
                    <td className="p-4">Yo&apos;q</td>
                    <td className="p-4 font-semibold text-primary">Ha</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Xalqaro karta/kripto talabi</td>
                    <td className="p-4">Visa/Mastercard</td>
                    <td className="p-4">TON hamyon</td>
                    <td className="p-4 font-semibold text-primary">Kerak emas</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Narx valyutasi</td>
                    <td className="p-4">USD/EUR</td>
                    <td className="p-4">TON (suzuvchi)</td>
                    <td className="p-4 font-semibold text-primary">So&apos;m (qat&apos;iy)</td>
                  </tr>
                  <tr className="last:border-b-0">
                    <td className="p-4 font-medium">Sozlash murakkabligi</td>
                    <td className="p-4">O&apos;rtacha</td>
                    <td className="p-4">Yuqori (kripto bilim)</td>
                    <td className="p-4 font-semibold text-primary">Past</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <div className="bg-primary-light/40 border border-primary/20 rounded-2xl p-6 md:p-8 text-center">
              <p className="text-foreground text-lg leading-relaxed mb-4">
                Xalqaro karta yoki kriptosiz, eng oddiy yo&apos;l — <strong>@premiumsendbot</strong> orqali so&apos;mda, bir necha daqiqada.
              </p>
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-2xl hover:shadow-xl transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                Stars sotib olish
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Tez-tez so&apos;raladigan savollar (FAQ)</h2>
            <div className="space-y-4">
              {[
                { q: "Telegram Stars sotib olishning nechta yo'li bor?", a: "Uchta: rasmiy ilova (dollar, xalqaro karta), Fragment.com (TON kripto) va mahalliy reseller (so'mda, mahalliy karta)." },
                { q: "O'zbekistonda qaysi yo'l eng qulay?", a: "Xalqaro karta yoki kripto hamyoningiz bo'lmasa, mahalliy reseller (@premiumsendbot) — Uzcard/Humo bilan to'g'ridan-to'g'ri so'mda." },
                { q: "Rasmiy Telegram ilovasidan Stars sotib olishning kamchiligi nima?", a: "Narx dollarda, faqat xalqaro Visa/Mastercard qabul qilinadi — Uzcard/Humo ishlamaydi." },
                { q: "Fragment.com orqali Stars sotib olish uchun nima kerak?", a: "TON kripto-hamyoni va unda yetarli TON balansi — oddiy foydalanuvchi uchun qo'shimcha texnik to'siq." },
                { q: "Mahalliy reseller orqali sotib olingan Stars rasmiymi?", a: "Ha, faqat to'lov bosqichi mahalliylashtirilgan — Stars Telegram'ning o'z rasmiy balansi." },
                { q: "Uch yo'lning narxi bir-biridan farq qiladimi?", a: "Ha — rasmiy ilovada ~30% platforma komissiyasi, Fragment TON kursiga bog'liq, mahalliy reseller esa qat'iy so'm tarifida (masalan 300 so'm/star)." },
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
                  Uch yo&apos;ldan eng oddiyini tanlang —{" "}
                  <strong className="text-white">@premiumsendbot</strong> orqali 50 Stars <strong className="text-white">15 000 so&apos;mdan</strong>, xalqaro karta yoki kriptosiz.
                </p>
                <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                  PremiumSend orqali olish
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
