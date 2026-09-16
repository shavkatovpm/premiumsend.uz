import type { Metadata } from "next";
import Link from "next/link";
import { ogBaseUz } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title: "Kartaga to'g'ridan-to'g'ri o'tkazib Telegram Stars sotib olsa bo'ladimi?",
  description:
    "Ha, bo'ladi — bu @premiumsendbot orqali Stars sotib olishning asosiy usuli. Mini App karta va summani ko'rsatadi, siz P2P o'tkazma qilasiz. Qanday ishlaydi, xavfsizmi va Uzcard/Humo/Click/Payme bilan qadamma-qadam qo'llanma.",
  keywords: [
    "kartaga o'tkazib stars sotib olish",
    "telegram stars kartaga pul o'tkazish",
    "karta orqali stars sotib olish",
    "p2p o'tkazma stars",
    "premiumsendbot karta",
  ],
  alternates: {
    canonical: "https://premiumsend.uz/maqolalar/stars-kartaga-otkazma",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/stars-kartaga-otkazma",
      ru: "https://premiumsend.uz/ru/maqolalar/stars-kartaga-otkazma",
      "x-default": "https://premiumsend.uz/maqolalar/stars-kartaga-otkazma",
    },
  },
  openGraph: {
    ...ogBaseUz,
    title: "Kartaga to'g'ridan-to'g'ri o'tkazib Telegram Stars sotib olsa bo'ladimi?",
    description:
      "Ha — Mini App karta va summani ko'rsatadi, siz P2P o'tkazma qilasiz, Stars avtomatik tushadi. Xavfsizlik va qadamma-qadam qo'llanma.",
    url: "https://premiumsend.uz/maqolalar/stars-kartaga-otkazma",
    type: "article",
    publishedTime: "2026-09-16",
  },
};

export default function ArticleStarsKartagaOtkazma() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Kartaga to'g'ridan-to'g'ri o'tkazib Telegram Stars sotib olsa bo'ladimi?",
    description:
      "Kartaga P2P o'tkazma orqali Telegram Stars sotib olish mexanizmi qanday ishlashi, xavfsizligi va bosqichma-bosqich jarayoni.",
    datePublished: "2026-09-16",
    dateModified: "2026-09-16",
    author: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    publisher: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    mainEntityOfPage: "https://premiumsend.uz/maqolalar/stars-kartaga-otkazma",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Kartaga o'tkazib Telegram Stars sotib olish",
    description: "Bosqichma-bosqich: karta raqamiga P2P o'tkazma orqali Telegram Stars sotib olish",
    step: [
      { "@type": "HowToStep", position: 1, name: "@premiumsendbot ni oching", text: "Telegram qidiruvida @premiumsendbot deb yozing, /start bosing." },
      { "@type": "HowToStep", position: 2, name: "Mini App'ni oching", text: "Bot menyusidagi tugma orqali Mini App (veb-ilova) ochiladi." },
      { "@type": "HowToStep", position: 3, name: "Stars miqdorini tanlang", text: "50 dan 5000 gacha paketlardan birini tanlang yoki o'zingiz xohlagan sonni kiriting." },
      { "@type": "HowToStep", position: 4, name: "Ko'rsatilgan kartaga o'tkazing", text: "Mini App karta raqami va aniq summani ko'rsatadi. O'z bank ilovangiz (Uzcard, Humo, Click yoki Payme) orqali aynan shu kartaga aynan shu summani o'tkazing." },
      { "@type": "HowToStep", position: 5, name: "Stars avtomatik beriladi", text: "To'lov tushgach, Stars bir necha daqiqada Telegram akkauntingizga avtomatik qo'shiladi." },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Kartaga to'g'ridan-to'g'ri o'tkazib Telegram Stars sotib olsa bo'ladimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha. @premiumsendbot'dagi Mini App karta raqami va aniq summani ko'rsatadi, siz o'z bank ilovangiz (Uzcard, Humo, Click yoki Payme) orqali shu kartaga P2P o'tkazma qilasiz, Stars esa bir necha daqiqada avtomatik akkauntingizga tushadi.",
        },
      },
      {
        "@type": "Question",
        name: "Tasodifiy karta raqamiga pul o'tkazish xavfli emasmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rasmiy @premiumsendbot havolasi orqali kirsangiz, xavfli emas — bu tasodifiy shaxs emas, xizmatning o'z hisob-kitob kartasi. Mini App karta raqamingiz yoki parolingizni hech qachon so'ramaydi, faqat qabul qiluvchi kartani va to'lanadigan summani ko'rsatadi. Firibgarlikdan saqlanish uchun faqat rasmiy bot havolasidan foydalaning va summani aniq tekshiring.",
        },
      },
      {
        "@type": "Question",
        name: "Nega Telegram rasmiy ilovasida to'g'ridan-to'g'ri kartaga o'tkazib Stars olib bo'lmaydi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Telegram rasmiy ilovasi Stars uchun faqat xalqaro Visa/Mastercard (yoki Fragment.com orqali TON kripto) qabul qiladi. Uzcard va Humo O'zbekistonning ichki to'lov tizimlari bo'lib, bu ikkala rasmiy kanalga ham ulanmagan — shuning uchun mahalliy P2P o'tkazmaga asoslangan xizmat kerak bo'ladi.",
        },
      },
      {
        "@type": "Question",
        name: "Qaysi kartalar bilan (Uzcard, Humo, Click, Payme) ishlaydi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Barchasi bilan. Mini App ko'rsatgan kartaga qaysi ilova orqali o'tkazish — Uzcard, Humo, Click yoki Payme — farqi yo'q, narx va jarayon bir xil qoladi.",
        },
      },
      {
        "@type": "Question",
        name: "O'tkazma qilgandan keyin Stars qancha vaqtda keladi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Odatda to'lov tasdiqlangandan keyin bir necha daqiqa ichida. Texnik kechikish bo'lsa, bot qo'llab-quvvatlashiga murojaat qilish mumkin.",
        },
      },
      {
        "@type": "Question",
        name: "Noto'g'ri summa o'tkazib qo'ysam nima bo'ladi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mini App'da ko'rsatilgan aniq summani o'tkazish tavsiya etiladi — mos kelmasa, avtomatik tizim to'lovni aniqlay olmasligi mumkin. Bunday holatda bot qo'llab-quvvatlash xizmatiga murojaat qiling, muammo hal qilinadi.",
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
      { "@type": "ListItem", position: 3, name: "Kartaga o'tkazib Stars sotib olish", item: "https://premiumsend.uz/maqolalar/stars-kartaga-otkazma" },
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
        <span className="text-foreground font-medium">Kartaga o&apos;tkazib Stars sotib olish</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">To&apos;lov qo&apos;llanmasi</span>
            <time className="text-xs text-muted" dateTime="2026-09-16">2026-yil, 16-sentabr</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Kartaga to&apos;g&apos;ridan-to&apos;g&apos;ri o&apos;tkazib Telegram Stars sotib olsa bo&apos;ladimi?
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-sm font-bold text-primary mb-2">QISQACHA JAVOB</p>
            <p className="text-foreground leading-relaxed font-medium">
              <strong>Ha, bo&apos;ladi</strong> — va aslida bu{" "}
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="text-primary hover:underline">@premiumsendbot</Link>{" "}
              orqali Stars sotib olishning asosiy usuli: Mini App karta raqami va aniq summani ko&apos;rsatadi, siz o&apos;z bank ilovangiz (Uzcard, Humo, Click yoki Payme) orqali o&apos;sha kartaga P2P o&apos;tkazma qilasiz, Stars esa bir necha daqiqada avtomatik akkauntingizga tushadi.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Telegram rasmiy ravishda Stars uchun faqat xalqaro Visa/Mastercard yoki Fragment.com&apos;dagi TON kriptovalyutasini qabul qiladi — Uzcard va Humo bu ikkala rasmiy kanalga ham ulanmagan. Shu sababli O&apos;zbekistonda Stars sotib olishning amaliy yo&apos;li — mahalliy karta-kartaga (P2P) o&apos;tkazmaga asoslangan xizmat. Ko&apos;pchilik bu jarayonni birinchi marta ko&apos;rganda &quot;nega karta raqamiga pul o&apos;tkazishim kerak, bu xavfli emasmi&quot; deb ikkilanadi — quyida bu savolga to&apos;liq javob.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Kartaga o&apos;tkazib Stars sotib olish qanday ishlaydi?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Mexanizm oddiy: siz botga to&apos;lov ma&apos;lumotlarini kiritmaysiz, aksincha xizmat sizga o&apos;zining hisob-kitob kartasini ko&apos;rsatadi va siz shu kartaga o&apos;zingizning bank ilovangiz orqali odatiy P2P (karta-kartaga) o&apos;tkazma qilasiz — xuddi do&apos;stingizga pul o&apos;tkazgandagi kabi.
            </p>
            <p className="text-muted leading-relaxed">
              Bu — Click yoki Payme&apos;dagi PIN/Face ID bilan tasdiqlanadigan merchant checkout emas, va bot ichida &quot;to&apos;lov usulini tanlash&quot; menyusi ham yo&apos;q. &quot;Uzcard orqali&quot;, &quot;Humo orqali&quot;, &quot;Click orqali&quot; degan iboralar — bu shunchaki siz P2P o&apos;tkazmani qaysi shaxsiy ilovangiz orqali amalga oshirishingizni bildiradi, xizmatning alohida integratsiyasini emas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Bu xavfsizmi? Nega &quot;karta raqamiga pul o&apos;tkazish&quot; kerak bo&apos;ladi?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Tasodifiy notanish raqamga pul o&apos;tkazish odatda ehtiyot bo&apos;lish kerak bo&apos;lgan holat — bu to&apos;g&apos;ri intuitsiya. Lekin bu yerda gap tasodifiy shaxs haqida emas: rasmiy{" "}
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="text-primary font-semibold hover:underline">@premiumsendbot</Link>{" "}
              havolasi orqali kirilsa, ko&apos;rsatilgan karta — xizmatning o&apos;z hisob-kitob kartasi.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Xavfsizlikni ta&apos;minlaydigan asosiy qoidalar:
            </p>
            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li>Mini App hech qachon karta raqamingiz, CVC kodingiz yoki bank parolingizni <strong>so&apos;ramaydi</strong> — faqat qabul qiluvchi kartani ko&apos;rsatadi</li>
              <li>O&apos;tkazmani siz to&apos;liq <strong>o&apos;zingizning bank ilovangiz ichida</strong>, o&apos;zingiz tekshirib amalga oshirasiz</li>
              <li>Faqat rasmiy bot havolasidan (@premiumsendbot) kiring — boshqa shaxs yuborgan &quot;shu kartaga to&apos;lang&quot; degan xabarlarga ishonmang</li>
              <li>Mini App ko&apos;rsatgan summani aniq, o&apos;zgartirmasdan o&apos;tkazing</li>
            </ul>
            <p className="text-muted leading-relaxed">
              Bu — O&apos;zbekiston kartalari xalqaro to&apos;lov tizimlariga ulanmaganligi tufayli yuzaga kelgan texnik zaruriyat, xuddi{" "}
              <Link href="/maqolalar/uzcard-humo-app-store-play-market-ishlamaydi" className="text-primary hover:underline">App Store/Play Market&apos;da Uzcard/Humo ishlamasligi</Link>{" "}
              va{" "}
              <Link href="/maqolalar/nega-xalqaro-karta-telegram-premiumni-rad-etadi" className="text-primary hover:underline">xalqaro karta Telegram to&apos;lovini rad etishi</Link>{" "}
              bilan bir xil sababga borib taqaladi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Qaysi kartalar bilan ishlaydi?</h2>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto mb-4">
              <table className="w-full text-sm min-w-[420px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">Karta / ilova</th>
                    <th className="p-4 text-left font-bold">P2P o&apos;tkazma orqali ishlaydimi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Uzcard</td>
                    <td className="p-4">✅ Ha</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Humo</td>
                    <td className="p-4">✅ Ha</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Click (ilova orqali o&apos;tkazma)</td>
                    <td className="p-4">✅ Ha</td>
                  </tr>
                  <tr className="border-b border-card-border last:border-b-0">
                    <td className="p-4 font-medium">Payme (ilova orqali o&apos;tkazma)</td>
                    <td className="p-4">✅ Ha</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              Narx va jarayon qaysi ilova ishlatilishidan qat&apos;i nazar bir xil. Har birining batafsil qo&apos;llanmasi:{" "}
              <Link href="/maqolalar/telegram-stars-humo-orqali" className="text-primary font-semibold hover:underline">Humo</Link>,{" "}
              <Link href="/maqolalar/telegram-stars-click-orqali" className="text-primary font-semibold hover:underline">Click</Link>,{" "}
              <Link href="/maqolalar/telegram-stars-payme-orqali" className="text-primary font-semibold hover:underline">Payme</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Bosqichma-bosqich: kartaga o&apos;tkazib Stars sotib olish</h2>
            <div className="space-y-4 mb-6">
              {[
                { step: "1", title: "@premiumsendbot ni oching", desc: "Telegram qidiruvida @premiumsendbot deb yozing, /start bosing." },
                { step: "2", title: "Mini App'ni oching", desc: "Bot menyusidagi tugma orqali Mini App (veb-ilova) ochiladi." },
                { step: "3", title: "Stars miqdorini tanlang", desc: "50 dan 5000 gacha paketlardan birini tanlang yoki o'zingiz xohlagan sonni kiriting." },
                { step: "4", title: "Ko'rsatilgan kartaga o'tkazing", desc: "Mini App karta raqami va aniq summani ko'rsatadi. O'z bank ilovangiz (Uzcard, Humo, Click yoki Payme) orqali aynan shu kartaga aynan shu summani o'tkazing." },
                { step: "5", title: "Stars avtomatik beriladi", desc: "To'lov tushgach, Stars bir necha daqiqada Telegram → Sozlamalar → Stars bo'limida ko'rinadi." },
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
                Kartangiz tayyormi? <strong className="text-white">@premiumsendbot</strong>&apos;da Stars&apos;ni so&apos;mda, kartaga to&apos;g&apos;ridan-to&apos;g&apos;ri o&apos;tkazib to&apos;lang.
              </p>
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                @premiumsendbot — boshlash
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Bu Telegram&apos;ning rasmiy usullari bilan bir xilmi?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Yo&apos;q, bu uchinchi, alohida yo&apos;l. Telegram Stars sotib olishning 3 ta yo&apos;li mavjud: rasmiy ilova (xalqaro Visa/Mastercard, dollarda), Fragment.com (TON kripto), va mahalliy reseller orqali kartaga P2P o&apos;tkazma (so&apos;mda, xorijiy karta yoki kripto kerak emas). Uchalasining to&apos;liq taqqoslashi:{" "}
              <Link href="/maqolalar/stars-sotib-olishning-necha-yoli-bor" className="text-primary font-semibold hover:underline">&quot;Stars sotib olishning nechta yo&apos;li bor&quot;</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Tez-tez so&apos;raladigan savollar (FAQ)</h2>
            <div className="space-y-4">
              {[
                { q: "Kartaga to'g'ridan-to'g'ri o'tkazib Telegram Stars sotib olsa bo'ladimi?", a: "Ha. Mini App karta va summani ko'rsatadi, siz o'z bank ilovangiz orqali P2P o'tkazma qilasiz, Stars bir necha daqiqada avtomatik tushadi." },
                { q: "Tasodifiy karta raqamiga pul o'tkazish xavfli emasmi?", a: "Rasmiy @premiumsendbot havolasi orqali kirsangiz xavfli emas — ko'rsatilgan karta xizmatning o'zinikidir, sizdan karta ma'lumoti yoki parol so'ralmaydi." },
                { q: "Nega Telegram rasmiy ilovasida to'g'ridan-to'g'ri kartaga o'tkazib Stars olib bo'lmaydi?", a: "Rasmiy ilova faqat xalqaro Visa/Mastercard yoki TON kripto qabul qiladi, Uzcard/Humo bu tizimlarga ulanmagan." },
                { q: "Qaysi kartalar bilan (Uzcard, Humo, Click, Payme) ishlaydi?", a: "Barchasi bilan — narx va jarayon bir xil." },
                { q: "O'tkazma qilgandan keyin Stars qancha vaqtda keladi?", a: "Odatda bir necha daqiqada." },
                { q: "Noto'g'ri summa o'tkazib qo'ysam nima bo'ladi?", a: "Bot qo'llab-quvvatlash xizmatiga murojaat qiling — muammo hal qilinadi." },
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
                  Kartaga o&apos;tkazib, so&apos;mda Stars sotib oling — <strong className="text-white">@premiumsendbot</strong> orqali 50 Stars <strong className="text-white">15 000 so&apos;mdan</strong>, bir necha daqiqada.
                </p>
                <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                  Kartaga o&apos;tkazib boshlash
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
