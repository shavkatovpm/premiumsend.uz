import type { Metadata } from "next";
import Link from "next/link";
import { ogBaseUz } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title:
    "Telegram Stars'ni so'mda (UZS) sotib olish — valyuta konvertatsiyasiz to'liq qo'llanma",
  description:
    "O'zbekistonda Telegram Stars'ni to'g'ridan-to'g'ri so'mda, Uzcard/Humo/Click/Payme bilan sotib olish. 300 so'm/star linear narx, 50 dan 5000 gacha paketlar, @premiumsendbot orqali bir necha daqiqada yetkazish.",
  keywords: [
    "telegram stars somda sotib olish",
    "telegram stars uzs",
    "ozbekistonda telegram stars",
    "telegram stars narxi somda",
    "telegram stars uzcard humo click payme",
    "premiumsendbot stars",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/maqolalar/telegram-stars-somda-uzs-sotib-olish",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/telegram-stars-somda-uzs-sotib-olish",
      ru: "https://premiumsend.uz/ru/maqolalar/telegram-stars-somda-uzs-sotib-olish",
      "x-default":
        "https://premiumsend.uz/maqolalar/telegram-stars-somda-uzs-sotib-olish",
    },
  },
  openGraph: {
    ...ogBaseUz,
    title: "Telegram Stars'ni so'mda (UZS) sotib olish — to'liq qo'llanma",
    description:
      "300 so'm/star linear narx, Uzcard/Humo/Click/Payme, valyuta konvertatsiyasiz. @premiumsendbot orqali bir necha daqiqada Stars.",
    url: "https://premiumsend.uz/maqolalar/telegram-stars-somda-uzs-sotib-olish",
    type: "article",
    publishedTime: "2026-09-06",
  },
};

const PACKAGES = [
  { amount: 50, price: 15000 },
  { amount: 100, price: 30000 },
  { amount: 250, price: 75000 },
  { amount: 500, price: 150000 },
  { amount: 1000, price: 300000, popular: true },
  { amount: 2500, price: 750000 },
  { amount: 5000, price: 1500000 },
];

export default function ArticleStarsSomdaUzsSotibOlish() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Telegram Stars'ni so'mda (UZS) sotib olish — valyuta konvertatsiyasiz to'liq qo'llanma",
    description:
      "O'zbekistonda Telegram Stars'ni to'g'ridan-to'g'ri so'mda, mahalliy karta bilan sotib olish — narxlar, to'lov usullari va bosqichma-bosqich qo'llanma.",
    datePublished: "2026-09-06",
    dateModified: "2026-09-06",
    author: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    publisher: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    mainEntityOfPage:
      "https://premiumsend.uz/maqolalar/telegram-stars-somda-uzs-sotib-olish",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Telegram Stars'ni so'mda sotib olish",
    description: "Bosqichma-bosqich: Telegram Stars'ni O'zbekiston so'mida sotib olish",
    step: [
      { "@type": "HowToStep", position: 1, name: "@premiumsendbot ni oching", text: "Telegram qidiruvida @premiumsendbot deb yozing, /start bosing." },
      { "@type": "HowToStep", position: 2, name: "Stars paketini tanlang", text: "50 dan 5000 gacha tayyor paketlardan birini tanlang yoki o'zingiz xohlagan sonni kiriting." },
      { "@type": "HowToStep", position: 3, name: "To'lov usulini tanlang", text: "Uzcard, Humo, Click yoki Payme'dan birini tanlang." },
      { "@type": "HowToStep", position: 4, name: "So'mda to'lang", text: "Ko'rsatilgan summani tanlangan usul orqali to'lang — karta raqami botga kiritilmaydi." },
      { "@type": "HowToStep", position: 5, name: "Stars bir necha daqiqada tushadi", text: "To'lov tasdiqlangach, Stars Telegram akkauntingizga (Sozlamalar → Stars) avtomatik qo'shiladi." },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Telegram Stars'ni O'zbekistonda so'mda sotib olish mumkinmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha. Telegram rasmiy ilovasi Stars uchun faqat xalqaro Visa/Mastercard qabul qiladi (narx dollarda), Fragment esa TON kripto-hamyon talab qiladi. @premiumsendbot orqali esa Stars to'g'ridan-to'g'ri O'zbekiston so'mida, Uzcard, Humo, Click yoki Payme kartangiz bilan sotib olinadi — valyuta konvertatsiyasi yo'q.",
        },
      },
      {
        "@type": "Question",
        name: "1 Telegram Star necha so'm turadi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Premium Send'da 1 Star 300 so'm — linear tarif, ya'ni qaysi paketni tanlasangiz ham (50 yoki 5000) bir star narxi o'zgarmaydi. 50 Stars — 15 000 so'm, 1000 Stars — 300 000 so'm.",
        },
      },
      {
        "@type": "Question",
        name: "Qanday paketlar mavjud?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "50, 100, 250, 500, 1000 (eng ommabop), 2500 va 5000 Stars tayyor paketlar sifatida mavjud. Bundan tashqari botda o'zingiz xohlagan miqdorni ham kiritish mumkin.",
        },
      },
      {
        "@type": "Question",
        name: "To'lov qanday amalga oshadi — karta ma'lumotim xavfsizmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To'lov Uzcard, Humo, Click yoki Payme'ning o'z rasmiy ilovasida amalga oshadi — bot faqat summa va to'lov havolasini/rekvizitini ko'rsatadi, karta raqami yoki parol botga hech qachon kiritilmaydi.",
        },
      },
      {
        "@type": "Question",
        name: "Stars sotib olgandan keyin qayerda ko'rinadi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To'lov tasdiqlangach Stars bir necha daqiqada Telegram akkauntingizga qo'shiladi — Telegram ilovasida Sozlamalar → Telegram Stars bo'limida balansni ko'rishingiz mumkin.",
        },
      },
      {
        "@type": "Question",
        name: "Bu haqiqiy, rasmiy Telegram Stars-mi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha. Faqat to'lov bosqichi mahalliylashtirilgan — akkauntingizga tushgan Stars Telegram'ning o'z rasmiy balansi, uni istalgan bot, kanal yoki mini-ilovada ishlatishingiz mumkin.",
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
      { "@type": "ListItem", position: 3, name: "Stars'ni so'mda sotib olish", item: "https://premiumsend.uz/maqolalar/telegram-stars-somda-uzs-sotib-olish" },
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
        <span className="text-foreground font-medium">Stars'ni so&apos;mda sotib olish</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">To&apos;lov qo&apos;llanmasi</span>
            <time className="text-xs text-muted" dateTime="2026-09-06">2026-yil, 6-sentabr</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Telegram Stars&apos;ni so&apos;mda (UZS) sotib olish — valyuta konvertatsiyasiz to&apos;liq qo&apos;llanma
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-sm font-bold text-primary mb-2">QISQACHA JAVOB</p>
            <p className="text-foreground leading-relaxed font-medium">
              Telegram Stars&apos;ni O&apos;zbekistonda to&apos;g&apos;ridan-to&apos;g&apos;ri <strong>so&apos;mda</strong> sotib olish mumkin —{" "}
              <Link href="https://telegram.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@premiumsendbot</Link>{" "}
              orqali, Uzcard, Humo, Click yoki Payme kartangiz bilan. Narx — <strong>300 so&apos;m/star</strong> (50 Stars = 15 000 so&apos;m, 1000 Stars = 300 000 so&apos;m), valyuta konvertatsiyasi yoki xorijiy karta shart emas. To&apos;lov tasdiqlangach Stars bir necha daqiqada akkauntga tushadi.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Telegram rasmiy ilovasi orqali Stars sotib olsangiz, narx dollarda hisoblanadi va xalqaro Visa/Mastercard karta talab qilinadi. Fragment.com orqali esa TON kriptovalyutasi kerak. Ikkalasi ham O&apos;zbekistonlik ko&apos;pchilik foydalanuvchi uchun qo&apos;shimcha to&apos;siq.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Quyida — Stars&apos;ni to&apos;g&apos;ridan-to&apos;g&apos;ri so&apos;mda, mahalliy karta bilan sotib olishning to&apos;liq jarayoni: narxlar, to&apos;lov usullari va bosqichma-bosqich qo&apos;llanma.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Nega Stars uchun so&apos;mda to&apos;lov alohida xizmat talab qiladi?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Telegram Stars ikki rasmiy kanal orqali sotiladi: <strong>Telegram ilovasining o&apos;zi</strong> (App Store/Google Play to&apos;lov infratuzilmasi orqali) va <strong>Fragment.com</strong> (TON blokcheyn orqali). Ikkalasi ham xalqaro tizim — birinchisi dollar/evroda hisoblanadi va xalqaro karta (Visa/Mastercard) talab qiladi, ikkinchisi esa kripto-hamyon va TON tokeni talab qiladi.
            </p>
            <p className="text-muted leading-relaxed">
              Uzcard va Humo — O&apos;zbekistonning ichki to&apos;lov tizimlari, ular na xalqaro karta network&apos;iga, na TON blokcheyniga ulanmagan. Shu sababli bu ikkala rasmiy kanal orqali ham to&apos;g&apos;ridan-to&apos;g&apos;ri mahalliy karta bilan to&apos;lab bo&apos;lmaydi. Yechim — @premiumsendbot kabi mahalliy xizmat: siz so&apos;mda to&apos;laysiz, xizmat Stars&apos;ni akkauntingizga ulaydi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Telegram Stars narxi so&apos;mda — barcha paketlar</h2>
            <p className="text-muted leading-relaxed mb-6">
              Narx <strong>300 so&apos;m/star</strong> — linear tarif, ya&apos;ni qaysi paketni tanlasangiz ham bir star bahosi o&apos;zgarmaydi:
            </p>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto mb-6">
              <table className="w-full text-sm min-w-[420px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">Paket</th>
                    <th className="p-4 text-left font-bold">Narx (so&apos;m)</th>
                  </tr>
                </thead>
                <tbody>
                  {PACKAGES.map((p) => (
                    <tr key={p.amount} className={`border-b border-card-border last:border-b-0 ${p.popular ? "bg-primary-light/20" : ""}`}>
                      <td className={`p-4 font-medium ${p.popular ? "text-primary font-bold" : ""}`}>{p.amount} Stars{p.popular ? " ⭐ (eng ommabop)" : ""}</td>
                      <td className="p-4">{p.price.toLocaleString("en-US")} so&apos;m</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              Kattaroq miqdor kerak bo&apos;lsa, botda o&apos;zingiz xohlagan sonni ham kiritishingiz mumkin. Har bir paketning alohida sahifasi:{" "}
              <Link href="/50-stars" className="text-primary hover:underline">50</Link>,{" "}
              <Link href="/100-stars" className="text-primary hover:underline">100</Link>,{" "}
              <Link href="/250-stars" className="text-primary hover:underline">250</Link>,{" "}
              <Link href="/500-stars" className="text-primary hover:underline">500</Link>,{" "}
              <Link href="/1000-stars" className="text-primary hover:underline">1000</Link>,{" "}
              <Link href="/2500-stars" className="text-primary hover:underline">2500</Link>,{" "}
              <Link href="/5000-stars" className="text-primary hover:underline">5000 Stars</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">So&apos;mda sotib olish qanday ishlaydi? Bosqichma-bosqich</h2>
            <div className="space-y-4 mb-6">
              {[
                { step: "1", title: "@premiumsendbot ni oching", desc: "Telegram qidiruv qatoriga @premiumsendbot deb yozing, /start bosing." },
                { step: "2", title: "Stars paketini tanlang", desc: "50 dan 5000 gacha tayyor paketlardan birini tanlang yoki o'zingiz xohlagan sonni kiriting." },
                { step: "3", title: "To'lov usulini tanlang", desc: "Uzcard, Humo, Click yoki Payme — qaysi kartangiz bo'lsa, shuni tanlang." },
                { step: "4", title: "So'mda to'lang", desc: "Ko'rsatilgan summani o'zingizning bank ilovangiz orqali to'lang. Karta raqami botga kiritilmaydi." },
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
              To&apos;lov usuli bo&apos;yicha alohida qo&apos;llanmalar:{" "}
              <Link href="/maqolalar/telegram-stars-uzcard-orqali" className="text-primary font-semibold hover:underline">Uzcard</Link>,{" "}
              <Link href="/maqolalar/telegram-stars-humo-orqali" className="text-primary font-semibold hover:underline">Humo</Link>,{" "}
              <Link href="/maqolalar/telegram-stars-click-orqali" className="text-primary font-semibold hover:underline">Click</Link>,{" "}
              <Link href="/maqolalar/telegram-stars-payme-orqali" className="text-primary font-semibold hover:underline">Payme</Link>.
            </p>
          </section>

          <section>
            <div className="bg-primary-light/40 border border-primary/20 rounded-2xl p-6 md:p-8 text-center">
              <p className="text-foreground text-lg leading-relaxed mb-4">
                Xalqaro karta yoki kriptosiz, to&apos;g&apos;ridan-to&apos;g&apos;ri so&apos;mda. <strong>@premiumsendbot</strong> orqali Stars bir necha daqiqada akkauntingizga tushadi.
              </p>
              <Link href="https://telegram.me/premiumsendbot" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-2xl hover:shadow-xl transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                PremiumSend orqali olish
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Karta ma&apos;lumotim xavfsizmi?</h2>
            <p className="text-muted leading-relaxed mb-4">
              To&apos;lov Uzcard, Humo, Click yoki Payme&apos;ning <strong>o&apos;z rasmiy ilovasida</strong> amalga oshadi. Bot faqat to&apos;lanadigan summa va rekvizit/havolani ko&apos;rsatadi — karta raqami, CVV yoki parol hech qachon bot ichiga kiritilmaydi va saqlanmaydi.
            </p>
            <p className="text-muted leading-relaxed">
              Reselleri tanlashda umumiy tekshirish mezonlari (oferta, aloqa kanali, sharhlar) uchun{" "}
              <Link href="/maqolalar/telegram-premium-ishonchli-saytdan-sotib-olish" className="text-primary font-semibold hover:underline">&quot;Ishonchli saytdan sotib olish&quot; qo&apos;llanmasiga</Link>{" "}
              qarang — mezonlar Premium va Stars uchun bir xil.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Tez-tez so&apos;raladigan savollar (FAQ)</h2>
            <div className="space-y-4">
              {[
                { q: "Telegram Stars'ni O'zbekistonda so'mda sotib olish mumkinmi?", a: "Ha. @premiumsendbot orqali Stars to'g'ridan-to'g'ri so'mda, Uzcard/Humo/Click/Payme bilan sotib olinadi — valyuta konvertatsiyasi yo'q." },
                { q: "1 Telegram Star necha so'm turadi?", a: "300 so'm — linear tarif, qaysi paketda ham bir star narxi bir xil. 50 Stars = 15 000 so'm, 1000 Stars = 300 000 so'm." },
                { q: "Qanday paketlar mavjud?", a: "50, 100, 250, 500, 1000 (eng ommabop), 2500, 5000 Stars — yoki botda o'zingiz xohlagan miqdorni kiritish." },
                { q: "To'lov qanday amalga oshadi — karta ma'lumotim xavfsizmi?", a: "To'lov Uzcard/Humo/Click/Payme'ning o'z ilovasida amalga oshadi, karta raqami botga kiritilmaydi va saqlanmaydi." },
                { q: "Stars sotib olgandan keyin qayerda ko'rinadi?", a: "Bir necha daqiqada Telegram → Sozlamalar → Stars bo'limida ko'rinadi." },
                { q: "Bu haqiqiy, rasmiy Telegram Stars-mi?", a: "Ha, faqat to'lov bosqichi mahalliylashtirilgan — akkauntga tushgan Stars Telegram'ning rasmiy balansi." },
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
                  Telegram Stars — endi xorijiy karta yoki kriptosiz, to&apos;g&apos;ridan-to&apos;g&apos;ri so&apos;mda.{" "}
                  <strong className="text-white">@premiumsendbot</strong> orqali 50 Stars <strong className="text-white">15 000 so&apos;mdan</strong> boshlab, bir necha daqiqada akkauntingizga.
                </p>
                <Link href="https://telegram.me/premiumsendbot" target="_blank" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">
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
