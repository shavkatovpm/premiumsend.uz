import type { Metadata } from "next";
import Link from "next/link";
import { ogBaseUz } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title: "Xorijiy karta yo'q — Telegram Stars'ni qanday olsam bo'ladi?",
  description:
    "Xorijiy (Visa/Mastercard) kartasiz Telegram Stars olish mumkin: 3 ta yo'ldan 2 tasi — mahalliy reseller (so'mda) va Fragment (TON) — karta talab qilmaydi. Qo'shimcha variant: chet eldagi tanishdan sovg'a. Qaysi biri kimga mos.",
  keywords: [
    "xorijiy kartasiz stars",
    "visa kartasiz telegram stars",
    "xalqaro karta yo'q stars qanday olish",
    "telegram stars kartasiz",
    "mastercard kartasiz stars olish",
    "uzcard bilan stars olish mumkinmi",
  ],
  alternates: {
    canonical: "https://premiumsend.uz/maqolalar/xorijiy-kartasiz-stars-sotib-olish",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/xorijiy-kartasiz-stars-sotib-olish",
      ru: "https://premiumsend.uz/ru/maqolalar/xorijiy-kartasiz-stars-sotib-olish",
      "x-default": "https://premiumsend.uz/maqolalar/xorijiy-kartasiz-stars-sotib-olish",
    },
  },
  openGraph: {
    ...ogBaseUz,
    title: "Xorijiy karta yo'q — Telegram Stars'ni qanday olsam bo'ladi?",
    description:
      "Visa/Mastercard'siz ishlaydigan yo'llar va qaysi biri sizga mosligi — qaror jadvali bilan.",
    url: "https://premiumsend.uz/maqolalar/xorijiy-kartasiz-stars-sotib-olish",
    type: "article",
    publishedTime: "2026-09-30",
  },
};

export default function ArticleXorijiyKartasizStars() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Xorijiy karta yo'q — Telegram Stars'ni qanday olsam bo'ladi?",
    description:
      "Xorijiy (Visa/Mastercard) kartasi bo'lmagan foydalanuvchi uchun Telegram Stars olishning real yo'llari: mahalliy reseller, sovg'a va Fragment.",
    datePublished: "2026-09-30",
    dateModified: "2026-09-30",
    author: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    publisher: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    mainEntityOfPage: "https://premiumsend.uz/maqolalar/xorijiy-kartasiz-stars-sotib-olish",
    inLanguage: "uz",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Xorijiy kartasiz Telegram Stars olsa bo'ladimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha. Stars olishning 3 ta yo'lidan faqat rasmiy ilova xalqaro karta talab qiladi. Qolgan ikkitasi xorijiy kartasiz ishlaydi: mahalliy reseller orqali so'mda to'lash (masalan, @premiumsendbot) va Fragment orqali TON kriptovalyutasi bilan olish. Qo'shimcha variant — xorijiy kartasi bor tanishingiz sizga Stars sovg'a qilishi.",
        },
      },
      {
        "@type": "Question",
        name: "Nega Uzcard yoki Humo bilan Telegram ilovasida Stars olib bo'lmaydi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Telegram Stars'ni ilova ichida App Store, Google Play yoki @PremiumBot orqali sotadi. Bu to'lovlar xalqaro to'lov tizimlari orqali o'tadi, Uzcard va Humo esa mahalliy tarmoqlar — ular bu to'lovlarda qabul qilinmaydi.",
        },
      },
      {
        "@type": "Question",
        name: "Xorijiy kartasiz eng oson yo'l qaysi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ko'pchilik uchun — mahalliy reseller. @premiumsendbot'da Mini App karta raqami va aniq summani ko'rsatadi, siz Uzcard, Humo, Click yoki Payme ilovangizdan o'tkazasiz, Stars avtomatik tushadi. Narx: 300 so'm/star, 50 Stars — 15 000 so'm.",
        },
      },
      {
        "@type": "Question",
        name: "Chet eldagi qarindoshim menga Stars sovg'a qila oladimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha. Telegram'da Stars'ni kontaktlarga sovg'a sifatida sotib olish mumkin (Sozlamalar → My Stars bo'limi orqali). Bunda to'lovni sovg'a qiluvchi o'z kartasi bilan qiladi, sizga karta kerak emas.",
        },
      },
      {
        "@type": "Question",
        name: "Fragment orqali kartasiz Stars olsa bo'ladimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fragment karta emas, TON kriptovalyutasini qabul qiladi. Ya'ni karta kerak emas, lekin TON hamyoni va TON sotib olish tajribasi kerak — bu yangi boshlovchi uchun eng murakkab yo'l.",
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
      { "@type": "ListItem", position: 3, name: "Xorijiy kartasiz Stars", item: "https://premiumsend.uz/maqolalar/xorijiy-kartasiz-stars-sotib-olish" },
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
        <span className="text-foreground font-medium">Xorijiy kartasiz Stars</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">To&apos;lov qo&apos;llanmasi</span>
            <time className="text-xs text-muted" dateTime="2026-09-30">2026-yil, 30-sentabr</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Xorijiy karta yo&apos;q — Telegram Stars&apos;ni qanday olsam bo&apos;ladi?
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-sm font-bold text-primary mb-2">QISQACHA JAVOB</p>
            <p className="text-foreground leading-relaxed font-medium">
              Ha, <strong>xorijiy kartasiz ham Stars olish mumkin</strong>. Stars olishning 3 ta yo&apos;lidan faqat rasmiy ilova xalqaro karta talab qiladi. Qolgan ikkitasi kartasiz ishlaydi: mahalliy reseller orqali so&apos;mda (masalan,{" "}
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="text-primary hover:underline">@premiumsendbot</Link>,
              Uzcard/Humo/Click/Payme bilan) va Fragment orqali TON kripto bilan. Qo&apos;shimcha variant — chet eldagi tanishingiz sizga Stars sovg&apos;a qilishi. Ko&apos;pchilik uchun eng osoni — mahalliy reseller.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Xorijiy kartasiz Telegram Stars olish — O&apos;zbekistonda eng ko&apos;p beriladigan savollardan biri. Visa yoki Mastercard bo&apos;lmasa, ilovadagi &quot;Buy Stars&quot; tugmasi to&apos;lovni o&apos;tkazmaydi. Quyida nima uchun shunday ekani va karta talab qilmaydigan har bir yo&apos;l nimani talab qilishi aniq yozilgan.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Nega Telegram&apos;ning o&apos;zida Stars olish uchun xorijiy karta kerak?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Chunki ilova ichidagi xarid xalqaro to&apos;lov tizimlari orqali o&apos;tadi. Telegram Stars shartlarining 2-bandiga ko&apos;ra, Stars iOS va Android ilovalarida <strong>in-app xarid</strong> (App Store / Google Play) va <strong>@PremiumBot</strong> orqali olinadi — bular dollarda, xalqaro karta bilan ishlaydi.
            </p>
            <p className="text-muted leading-relaxed">
              Uzcard va Humo — mahalliy to&apos;lov tarmoqlari, shuning uchun bu to&apos;lovlarda qabul qilinmaydi. Batafsil sababini{" "}
              <Link href="/maqolalar/uzcard-humo-app-store-play-market-ishlamaydi" className="text-primary font-semibold hover:underline">Uzcard/Humo nega App Store&apos;da ishlamaydi</Link>{" "}
              maqolasida o&apos;qing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Xorijiy kartasiz qaysi yo&apos;llar qoladi?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Xorijiy karta talab qilmaydigan 2 ta yo&apos;l, qo&apos;shimcha sovg&apos;a varianti va har biri uchun nima kerakligi:
            </p>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto mb-4">
              <table className="w-full text-sm min-w-[600px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">Yo&apos;l</th>
                    <th className="p-4 text-left font-bold">Sizdan nima kerak</th>
                    <th className="p-4 text-left font-bold">To&apos;lov</th>
                    <th className="p-4 text-left font-bold">Kimga mos</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Mahalliy reseller</td>
                    <td className="p-4">Uzcard/Humo karta va bank ilovasi</td>
                    <td className="p-4">So&apos;mda, P2P o&apos;tkazma</td>
                    <td className="p-4">Ko&apos;pchilik — eng oddiy yo&apos;l</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Fragment.com</td>
                    <td className="p-4">TON hamyoni va TON kripto</td>
                    <td className="p-4">TON kriptovalyutasi</td>
                    <td className="p-4">Kripto bilan tanishlar</td>
                  </tr>
                  <tr className="border-b border-card-border last:border-b-0">
                    <td className="p-4 font-medium">Tanishdan sovg&apos;a (qo&apos;shimcha variant)</td>
                    <td className="p-4">Xorijiy kartasi bor tanish</td>
                    <td className="p-4">Sovg&apos;a qiluvchi rasmiy ilovada to&apos;laydi</td>
                    <td className="p-4">Chet elda qarindoshi borlar</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              Rasmiy ilovani ham qo&apos;shib, uchala yo&apos;lning narxi bo&apos;yicha to&apos;liq taqqoslash{" "}
              <Link href="/maqolalar/stars-sotib-olishning-necha-yoli-bor" className="text-primary font-semibold hover:underline">Stars olish yo&apos;llari taqqoslashi</Link>{" "}
              maqolasida.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Mahalliy reseller orqali kartasiz qanday olinadi?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Sizga faqat oddiy Uzcard yoki Humo karta kerak. @premiumsendbot&apos;da jarayon quyidagicha:
            </p>
            <div className="space-y-4 mb-6">
              {[
                { step: "1", title: "@premiumsendbot'ni oching", desc: "Telegram'da botni oching va ichidagi Mini App'ni ishga tushiring." },
                { step: "2", title: "Stars miqdorini tanlang", desc: "50 dan 5000 gacha paketlar, 300 so'm/star." },
                { step: "3", title: "Ko'rsatilgan kartaga o'tkazing", desc: "Mini App karta raqami va aniq summani ko'rsatadi — o'z bank ilovangizdan (Uzcard, Humo, Click, Payme) shu summani o'tkazasiz." },
                { step: "4", title: "Stars avtomatik tushadi", desc: "To'lov aniqlangach, Stars odatda bir necha daqiqada akkauntingizda bo'ladi." },
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
              O&apos;tkazma jarayoni batafsil:{" "}
              <Link href="/maqolalar/stars-kartaga-otkazma" className="text-primary font-semibold hover:underline">kartaga o&apos;tkazib Stars olish</Link>.
              Halollik uchun: Premium Send Telegram&apos;ning rasmiy hamkori emas, mustaqil mahalliy reseller.
            </p>
          </section>

          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Xorijiy karta shart emas — <strong className="text-white">@premiumsendbot</strong>&apos;da Uzcard, Humo, Click yoki Payme&apos;dagi kartangizdan so&apos;mda oling.
              </p>
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                @premiumsendbot — boshlash
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Chet eldagi tanishim menga Stars sovg&apos;a qila oladimi?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Ha. Telegram&apos;da Stars&apos;ni kontaktlarga <strong>sovg&apos;a sifatida</strong> sotib olish mumkin — Telegram rasmiy blogiga ko&apos;ra, buning uchun Sozlamalar → My Stars bo&apos;limiga kiriladi. To&apos;lovni sovg&apos;a qiluvchi o&apos;z kartasi bilan qiladi, qabul qiluvchiga karta kerak emas.
            </p>
            <p className="text-muted leading-relaxed">
              Kamchiligi: bu yo&apos;l to&apos;liq boshqa odamga bog&apos;liq va uni har safar so&apos;rash kerak. Sovg&apos;a qiluvchi ham ilova narxida (dollar hisobida) to&apos;laydi —{" "}
              <Link href="/maqolalar/1-stars-necha-som-appstore-taqqoslash" className="text-primary font-semibold hover:underline">1 Stars App Store&apos;da qancha turishi</Link>{" "}
              haqida alohida yozganmiz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Fragment orqali kartasiz olsa bo&apos;ladimi?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Texnik jihatdan ha: Fragment.com karta emas, <strong>TON kriptovalyutasini</strong> qabul qiladi. Lekin buning uchun TON hamyoni ochish, TON sotib olish va uni hamyonga o&apos;tkazish kerak — bu alohida jarayon va o&apos;z xavf-xatarlari bor.
            </p>
            <p className="text-muted leading-relaxed">
              Kripto bilan ishlagan bo&apos;lsangiz, Fragment qulay bo&apos;lishi mumkin. Birinchi marta bo&apos;lsa, bitta Stars paketi uchun kripto bilan shug&apos;ullanish ko&apos;pincha ortiqcha murakkablik.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">O&apos;zbek bankidan Visa karta ochsam muammo hal bo&apos;ladimi?</h2>
            <p className="text-muted leading-relaxed">
              Har doim emas. Mahalliy bank chiqargan Visa/Mastercard ham ba&apos;zan App Store yoki Telegram to&apos;lovida rad etiladi — sabablari (VPN yoki mintaqa nomuvofiqligi, 3D Secure tasdig&apos;i va boshqalar){" "}
              <Link href="/maqolalar/nega-xalqaro-karta-telegram-premiumni-rad-etadi" className="text-primary font-semibold hover:underline">xalqaro karta nega rad etiladi</Link>{" "}
              maqolasida tushuntirilgan. Ya&apos;ni faqat Stars uchun karta ochish har doim ham kafolatli yechim emas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Qaysi yo&apos;lni tanlash kerak?</h2>
            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li><strong>Tez va oddiy kerak</strong> → mahalliy reseller, so&apos;mda</li>
              <li><strong>Chet elda karta egasi bo&apos;lgan yaqiningiz bor</strong> → sovg&apos;a</li>
              <li><strong>TON hamyoningiz allaqachon bor</strong> → Fragment</li>
            </ul>
            <p className="text-muted leading-relaxed">
              Narxlar:{" "}
              <Link href="/stars" className="text-primary font-semibold hover:underline">barcha Stars paketlari</Link>{" "}
              (300 so&apos;m/star), masalan{" "}
              <Link href="/50-stars" className="text-primary font-semibold hover:underline">50 Stars — 15 000 so&apos;m</Link> yoki{" "}
              <Link href="/1000-stars" className="text-primary font-semibold hover:underline">1000 Stars — 300 000 so&apos;m</Link>. To&apos;lovdan keyin qancha kutish kerakligi:{" "}
              <Link href="/maqolalar/stars-yetkazish-vaqti" className="text-primary font-semibold hover:underline">Stars qancha vaqtda tushadi</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Tez-tez so&apos;raladigan savollar (FAQ)</h2>
            <div className="space-y-4">
              {[
                { q: "Xorijiy kartasiz Telegram Stars olsa bo'ladimi?", a: "Ha. 3 ta yo'ldan faqat rasmiy ilova xalqaro karta talab qiladi; mahalliy reseller (so'mda) va Fragment (TON) kartasiz ishlaydi. Qo'shimcha variant — tanishdan sovg'a." },
                { q: "Nega Uzcard yoki Humo bilan Telegram ilovasida Stars olib bo'lmaydi?", a: "Ilovadagi xarid App Store, Google Play yoki @PremiumBot orqali xalqaro to'lov tizimlaridan o'tadi — Uzcard va Humo mahalliy tarmoq bo'lgani uchun qabul qilinmaydi." },
                { q: "Xorijiy kartasiz eng oson yo'l qaysi?", a: "Mahalliy reseller: @premiumsendbot'da Mini App ko'rsatgan kartaga o'z bank ilovangizdan o'tkazasiz, Stars avtomatik tushadi. 50 Stars — 15 000 so'm." },
                { q: "Chet eldagi qarindoshim menga Stars sovg'a qila oladimi?", a: "Ha, Telegram'da Stars'ni kontaktga sovg'a sifatida sotib olish mumkin (Sozlamalar → My Stars). To'lovni sovg'a qiluvchi qiladi." },
                { q: "Fragment orqali kartasiz Stars olsa bo'ladimi?", a: "Ha, lekin TON kriptovalyutasi va TON hamyoni kerak — yangi boshlovchi uchun eng murakkab yo'l." },
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
                  Visa/Mastercard&apos;siz Stars — <strong className="text-white">@premiumsendbot</strong> orqali so&apos;mda, 50 Stars <strong className="text-white">15 000 so&apos;mdan</strong>.
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
