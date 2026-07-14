import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Telegram Stars Uzcard orqali sotib olish — kartaga o'tkazma yo'li",
  description:
    "Telegram Stars'ni Uzcard kartangiz orqali so'mda sotib olish — @starsjoybot bot karta raqami va summani beradi, siz Uzcard ilovasidan P2P o'tkazasiz. 50 Stars = 12 000 so'm, kurs riski yo'q.",
  keywords: [
    "telegram stars uzcard",
    "uzcard orqali stars",
    "stars uzcard bilan",
    "telegram stars uzcard sotib olish",
    "stars uzcard p2p o'tkazma",
    "telegram stars so'mda uzcard",
    "starsjoy uzcard",
    "uzcard bilan stars qanday",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/maqolalar/telegram-stars-uzcard-orqali",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/telegram-stars-uzcard-orqali",
      ru: "https://premiumsend.uz/ru/maqolalar/telegram-stars-uzcard-orqali",
      "x-default": "https://premiumsend.uz/maqolalar/telegram-stars-uzcard-orqali",
    },
  },
  openGraph: {
    title: "Telegram Stars Uzcard orqali — kartaga o'tkazma yo'li",
    description:
      "Stars'ni Uzcard ilovasidan bot kartasiga o'tkazib sotib olish. 50 Stars 12 000 so'mdan, hech qanday kurs konvertatsiyasiz, mahalliy karta bilan.",
    url: "https://premiumsend.uz/maqolalar/telegram-stars-uzcard-orqali",
    type: "article",
    publishedTime: "2026-05-12",
  },
};

export default function ArticleStarsUzcardUz() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    image: "https://premiumsend.uz/og-image.png",
    headline: "Telegram Stars Uzcard orqali sotib olish — kartaga o'tkazma yo'li",
    description:
      "Telegram Stars'ni Uzcard kartasi orqali sotib olish — @starsjoybot karta va summani ko'rsatadi, siz Uzcard ilovasidan kartaga P2P o'tkazasiz, Stars bir necha daqiqada akkauntda.",
    datePublished: "2026-05-12",
    dateModified: "2026-05-12",
    author: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    publisher: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    mainEntityOfPage:
      "https://premiumsend.uz/maqolalar/telegram-stars-uzcard-orqali",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Uzcard orqali Telegram Stars qanday sotib olinadi?", acceptedAnswer: { "@type": "Answer", text: "@starsjoybot ni oching, Stars miqdorini tanlang (mas. 50, 100, 250, 1000 Stars), bot ko'rsatadigan to'lov yo'llaridan 'Kartaga o'tkazma' ni tanlang. Bot karta raqami va aniq summani beradi. Uzcard bank ilovasini ochib, 'Boshqa kartaga o'tkazma' funksiyasi orqali shu kartaga bot ko'rsatgan summani o'tkazasiz. Tizim aniqlaydi va Stars 1-5 daqiqada akkauntga tushadi." } },
      { "@type": "Question", name: "Uzcard alohida to'lov tugmasi mavjudmi?", acceptedAnswer: { "@type": "Answer", text: "Yo'q. StarsJoy bot ichida 'Uzcard' deb alohida tugma yo'q — faqat ikkita asosiy yo'l: Click ilovasi (PIN/Face ID bilan tezroq) va kartaga o'tkazma (umumiy). Kartaga o'tkazma yo'lida siz Uzcard, Humo, Visa yoki istalgan boshqa karta orqali bot kartasiga summa o'tkazasiz. Ya'ni Uzcard ishlatiladi, lekin maxsus integratsiya emas — oddiy P2P." } },
      { "@type": "Question", name: "Uzcard orqali Stars narxi qancha?", acceptedAnswer: { "@type": "Answer", text: "StarsJoy.uz da Stars 240 so'm/star linear narxda: 50 Stars 12 000 so'm, 100 Stars 24 000, 250 Stars 60 000, 500 Stars 120 000, 1000 Stars 240 000, 2500 Stars 600 000, 5000 Stars 1 200 000 so'm. Uzcard orqali to'lov ham xuddi shu narxlarda — qo'shimcha komissiya yo'q." } },
      { "@type": "Question", name: "Uzcard kartam bilan Telegram'ning rasmiy ilovasidan Stars olib bo'ladimi?", acceptedAnswer: { "@type": "Answer", text: "Yo'q. Telegram rasmiy ilovasi Uzcard P2P o'tkazma yoki Click/Payme'ni qabul qilmaydi — faqat Visa/Mastercard yoki Apple Pay/Google Pay. So'mda va Uzcard bilan Stars sotib olish uchun mahalliy oraliq xizmat (StarsJoy.uz) zarur." } },
      { "@type": "Question", name: "Uzcard balansida pul yetmasa nima bo'ladi?", acceptedAnswer: { "@type": "Answer", text: "Uzcard bank ilovasida balansni oldindan tekshiring. Yetmasa, kartani to'ldiring yoki boshqa kartangizdan (Humo, bank kartasi) o'tkazma qiling. Bot kartasi summa va karta kombinatsiyasi orqali ishlaydi — qaysi karta yuborganingiz muhim emas, faqat aynan ko'rsatilgan summa kelishi kerak." } },
      { "@type": "Question", name: "Stars sotib olish uchun Uzcard yoki Click — qaysi tezroq?", acceptedAnswer: { "@type": "Answer", text: "Click tezroq (1-2 daqiqa, PIN/Face ID). Uzcard bank ilovasi 2-3 daqiqa oladi va SMS kod tasdiqi talab qilinishi mumkin. Lekin Stars akkauntga keladigan vaqt har ikkalasida bir xil — 1-5 daqiqa. Click ilovangiz bo'lmasa Uzcard yoki istalgan boshqa karta ham yaxshi ishlaydi." } },
      { "@type": "Question", name: "Uzcard P2P o'tkazma xavfsizmi?", acceptedAnswer: { "@type": "Answer", text: "Ha. Uzcard P2P o'tkazma — Markaziy bank litsenziyasi bilan ishlovchi rasmiy mexanizm. Karta ma'lumotlari Uzcard serverida saqlanadi, StarsJoy bot ko'rmaydi — faqat 'kartaga summa kelgan' faktini ko'radi. Har P2P o'tkazma uchun chek beriladi, Stars kelmasa pul qaytariladi." } },
      { "@type": "Question", name: "App Store/Fragment'dan Uzcard bilan to'lab Stars olsa bo'ladimi?", acceptedAnswer: { "@type": "Answer", text: "App Store: Uzcard'ni qisman qo'llab-quvvatlaydi (Apple ID Uzbekistan regionida bo'lsa), lekin Stars narxi yuqori — ~290 so'm/star (StarsJoy'da 240). Fragment: faqat xorijiy karta yoki TON kriptovalyuta qabul qiladi, Uzcard ishlatib bo'lmaydi. Uzcard bilan to'g'ridan-to'g'ri so'mda to'lash uchun mahalliy yo'l (StarsJoy + Uzcard P2P) eng qulay usul." } },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Bosh sahifa", item: "https://premiumsend.uz" },
      { "@type": "ListItem", position: 2, name: "Maqolalar", item: "https://premiumsend.uz/maqolalar" },
      { "@type": "ListItem", position: 3, name: "Telegram Stars Uzcard orqali", item: "https://premiumsend.uz/maqolalar/telegram-stars-uzcard-orqali" },
    ],
  };

  const howToSchema = {"@context":"https://schema.org","@type":"HowTo","name":"Telegram Stars Uzcard orqali sotib olish — kartaga o'tkazma yo'li","description":"Bosqichma-bosqich yo'riqnoma: Telegram Stars Uzcard orqali sotib olish — kartaga o'tkazma yo'li","step":[{"@type":"HowToStep","position":1,"name":"Telegram'da @starsjoybot ni oching","text":"Qidiruv qatoriga @starsjoybot deb yozing va botni oching. /start tugmasini bosing — bot menyu chiqaradi."},{"@type":"HowToStep","position":2,"name":"Stars miqdorini tanlang","text":"Menyudan kerakli paketni bosing: 50, 100, 250, 500, 1000, 2500, 5000 Stars. Yoki o'zingiz xohlagan miqdorni kiriting (minimum 50 Stars)."},{"@type":"HowToStep","position":3,"name":"To'lov yo'li sifatida \"Kartaga o'tkazma\" ni tanlang","text":"Bot ikkita yo'l beradi: Click (PIN/Face ID, tezroq) va Kartaga o'tkazma (P2P, umumiy). Uzcard orqali to'lash uchun ikkinchi yo'lni tanlang."},{"@type":"HowToStep","position":4,"name":"Bot karta raqami va aniq summani ko'rsatadi","text":"Ekranda karta raqami (8600 XXXX XXXX XXXX) va aynan summa chiqadi (mas. 12 000 so'm 50 Stars uchun). Aynan shu summani o'tkazish kerak."},{"@type":"HowToStep","position":5,"name":"Uzcard bank ilovasini oching va P2P o'tkazma boshlang","text":"Uzcard bank ilovasiga kiring. \"Boshqa kartaga o'tkazma\" funksiyasini tanlang. Bot ko'rsatgan karta raqamini kiriting."},{"@type":"HowToStep","position":6,"name":"Summani kiriting va tasdiqlang","text":"Aynan bot ko'rsatgan summani kiriting (mas. 12 000). SMS kod yoki PIN bilan tasdiqlang. Stars 1-5 daqiqada akkauntingizga tushadi."}]};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-muted">
        <Link href="/" className="hover:text-primary">Bosh sahifa</Link>
        <span className="mx-2">/</span>
        <Link href="/maqolalar" className="hover:text-primary">Maqolalar</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">Telegram Stars Uzcard orqali</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">Qo&apos;llanma</span>
            <time className="text-xs text-muted" dateTime="2026-05-12">2026-yil, 12-may</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Telegram Stars Uzcard orqali sotib olish
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>Qisqacha javob:</strong> Telegram Stars&apos;ni Uzcard kartangiz orqali sotib olish jarayoni —{" "}
              <a href="https://telegram.me/starsjoybot" target="_blank" rel="noopener" className="text-primary hover:underline">@starsjoybot</a>{" "}
              ni oching, Stars miqdorini tanlang (mas. <strong>50 Stars = 12 000 so&apos;m</strong>), <strong>&quot;Kartaga o&apos;tkazma&quot;</strong> yo&apos;lini tanlang, bot karta raqami va aniq summani ko&apos;rsatadi, Uzcard bank ilovasidan shu kartaga P2P o&apos;tkazma qilasiz. Stars 1-5 daqiqada akkauntga tushadi. So&apos;mda to&apos;lov, kurs konvertatsiyasi yo&apos;q.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Uzcard — O&apos;zbekistondagi eng keng tarqalgan to&apos;lov kartasi. Telegram Stars uchun esa rasmiy yo&apos;llarda (App Store, Fragment) Uzcard bilan to&apos;lash murakkab — kurs riski, qabul qilmaslik muammolari. Mahalliy reseller StarsJoy.uz ([@starsjoybot](https://telegram.me/starsjoybot)) orqali esa Uzcard kartangiz bilan to&apos;g&apos;ridan-to&apos;g&apos;ri P2P o&apos;tkazma yo&apos;lida Stars olishingiz mumkin — so&apos;mda, mahalliy karta bilan, kurs konvertatsiyasiz.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 — Mechanism */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Uzcard orqali Stars qanday ishlaydi?</h2>
            <p className="text-muted leading-relaxed mb-4">
              StarsJoy bot ichida &quot;Uzcard&quot; deb alohida tugma <strong>yo&apos;q</strong>. Buning o&apos;rniga bot ikkita umumiy yo&apos;l taklif qiladi: <strong>Click</strong> (PIN/Face ID bilan tez) va <strong>Kartaga o&apos;tkazma</strong> (P2P, umumiy). Uzcard orqali to&apos;lash uchun ikkinchi yo&apos;l tanlanadi — siz Uzcard bank ilovangizdan bot kartasiga oddiy P2P o&apos;tkazma qilasiz.
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">1. Bot karta va aniq summani ko&apos;rsatadi</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Stars miqdorini tanlab, &quot;Kartaga o&apos;tkazma&quot; yo&apos;lini tanlasangiz bot karta raqami va aynan to&apos;lov summasini ekranda chiqaradi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">2. Uzcard ilovasidan kartaga P2P o&apos;tkazasiz</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Uzcard bank ilovasini oching, &quot;Boshqa kartaga o&apos;tkazma&quot; ni tanlang. Bot ko&apos;rsatgan karta raqamini kiriting va aynan ko&apos;rsatilgan summani o&apos;tkazing. SMS kod yoki PIN bilan tasdiqlang.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">3. Tizim avtomatik aniqlaydi</h3>
                <p className="text-sm text-muted leading-relaxed">
                  To&apos;lov tasdiqlangach tizim 1-5 daqiqada summani aniqlaydi va Stars sizning Telegram akkauntingizga tushadi.
                </p>
              </div>
            </div>

            <div className="bg-section-alt rounded-xl p-5">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Asosiy fakt:</strong> Uzcard P2P o&apos;tkazma — bu Uzcard ekosistemasidagi standart mexanizm. Bot to&apos;lovni Uzcard ichidan emas, balki <strong>kartaga tushgan summani avtomatik aniqlash</strong> orqali oladi. Ya&apos;ni siz Uzcard kartangizdan bot kartasiga oddiy o&apos;tkazma qilasiz — boshqa hech narsa.
              </p>
            </div>
          </section>

          {/* Section 2 — Pricing */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Uzcard orqali Stars narxlari — barcha paketlar</h2>
            <p className="text-muted leading-relaxed mb-4">
              StarsJoy.uz da Stars 240 so&apos;m/star linear narxda. Uzcard orqali to&apos;lov ham xuddi shu narxlarda — qo&apos;shimcha komissiya yo&apos;q:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Stars</div>
                <div className="text-center">Narx (so&apos;m)</div>
                <div className="text-center">Tipik foydalanish</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">50 Stars (minimal)</div>
                <div className="text-center">12 000</div>
                <div className="text-center text-muted text-xs">Kichik tip, sticker</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">100 Stars</div>
                <div className="text-center">24 000</div>
                <div className="text-center text-muted text-xs">Bot funksiyasi, donate</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">250 Stars</div>
                <div className="text-center">60 000</div>
                <div className="text-center text-muted text-xs">O&apos;rtacha donate</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">500 Stars</div>
                <div className="text-center">120 000</div>
                <div className="text-center text-muted text-xs">Premium 3 oy gift atrofida</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm bg-primary-light/20">
                <div className="font-bold">1000 Stars ⭐</div>
                <div className="text-center font-bold">240 000</div>
                <div className="text-center text-muted text-xs">Premium 6-12 oy gift</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">2500 Stars</div>
                <div className="text-center">600 000</div>
                <div className="text-center text-muted text-xs">Yirik donate</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center text-sm">
                <div className="font-medium">5000 Stars</div>
                <div className="text-center">1 200 000</div>
                <div className="text-center text-muted text-xs">Business / max</div>
              </div>
            </div>

            <div className="bg-section-alt rounded-xl p-5">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">App Store bilan taqqoslash:</strong> App Store ~290 so&apos;m/star (kurs marjasi bilan), StarsJoy.uz da Uzcard P2P orqali 240 so&apos;m/star — <strong>~17% arzon</strong>, valyuta riski yo&apos;q, mahalliy karta bilan.
              </p>
            </div>
          </section>

          {/* Section 3 — Step by step */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Uzcard orqali Stars sotib olish — 6 qadam</h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Qisqa javob:</strong>{" "}
                <a href="https://telegram.me/starsjoybot" target="_blank" rel="noopener" className="text-primary hover:underline">@starsjoybot</a>{" "}
                ni oching → Stars miqdorini tanlang → &quot;Kartaga o&apos;tkazma&quot; yo&apos;lini tanlang → bot karta va summa beradi → Uzcard ilovasidan P2P o&apos;tkazasiz → Stars 5 daqiqada akkauntda.
              </p>
            </div>

            <div className="space-y-4 mb-6">
              {[
                { step: "1", title: "Telegram'da @starsjoybot ni oching", desc: "Qidiruv qatoriga @starsjoybot deb yozing va botni oching. /start tugmasini bosing — bot menyu chiqaradi." },
                { step: "2", title: "Stars miqdorini tanlang", desc: "Menyudan kerakli paketni bosing: 50, 100, 250, 500, 1000, 2500, 5000 Stars. Yoki o'zingiz xohlagan miqdorni kiriting (minimum 50 Stars)." },
                { step: "3", title: "To'lov yo'li sifatida \"Kartaga o'tkazma\" ni tanlang", desc: "Bot ikkita yo'l beradi: Click (PIN/Face ID, tezroq) va Kartaga o'tkazma (P2P, umumiy). Uzcard orqali to'lash uchun ikkinchi yo'lni tanlang." },
                { step: "4", title: "Bot karta raqami va aniq summani ko'rsatadi", desc: "Ekranda karta raqami (8600 XXXX XXXX XXXX) va aynan summa chiqadi (mas. 12 000 so'm 50 Stars uchun). Aynan shu summani o'tkazish kerak." },
                { step: "5", title: "Uzcard bank ilovasini oching va P2P o'tkazma boshlang", desc: "Uzcard bank ilovasiga kiring. \"Boshqa kartaga o'tkazma\" funksiyasini tanlang. Bot ko'rsatgan karta raqamini kiriting." },
                { step: "6", title: "Summani kiriting va tasdiqlang", desc: "Aynan bot ko'rsatgan summani kiriting (mas. 12 000). SMS kod yoki PIN bilan tasdiqlang. Stars 1-5 daqiqada akkauntingizga tushadi." },
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

          {/* Mid CTA */}
          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Uzcard kartangiz bor? <strong className="text-white">@starsjoybot</strong> ni oching, Stars miqdorini tanlang, &quot;Kartaga o&apos;tkazma&quot; yo&apos;lini tanlang. Uzcard ilovasidan oddiy P2P o&apos;tkazma — Stars 5 daqiqada akkauntda.
              </p>
              <a href="https://telegram.me/starsjoybot" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                Uzcard bilan Stars — boshlash
              </a>
            </div>
          </section>

          {/* Section 4 — Why use P2P route */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Nima uchun Uzcard alohida tugma sifatida yo&apos;q?</h2>
            <p className="text-muted leading-relaxed mb-4">
              StarsJoy bot ichida &quot;Uzcard&quot; deb maxsus integratsiyali tugma yo&apos;q. Bu — qasddan tanlangan dizayn:
            </p>
            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li><strong className="text-foreground">Universal yondashuv:</strong> &quot;Kartaga o&apos;tkazma&quot; yo&apos;li orqali Uzcard, Humo, Visa, Mastercard, bank kartasi — barchasini ishlatish mumkin. Maxsus integratsiya bo&apos;lganida faqat shu karta turi qabul qilinardi.</li>
              <li><strong className="text-foreground">Sodda mexanizm:</strong> Bot karta raqami va summa beradi, siz oddiy P2P o&apos;tkazma qilasiz. Hech qanday API integratsiyasi yo&apos;q — har qanday bank ilovasidan ishlaydi.</li>
              <li><strong className="text-foreground">Soliq va litsenziya sodda:</strong> Click/Payme uchun rasmiy integratsiya soliq va litsenziya tartibida murakkab. P2P o&apos;tkazma — oddiy va shaffof yo&apos;l.</li>
            </ul>
            <p className="text-muted leading-relaxed">
              Natija: siz Uzcard kartangiz orqali ham, Humo orqali ham, hatto Visa/Mastercard orqali ham bir xil &quot;Kartaga o&apos;tkazma&quot; yo&apos;lida bot kartasiga summa o&apos;tkaza olasiz. Texnik jihatdan farq yo&apos;q.
            </p>
          </section>

          {/* Section 5 — Comparison */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Uzcard orqali Stars vs boshqa yo&apos;llar</h2>
            <p className="text-muted leading-relaxed mb-6">
              Stars sotib olishning to&apos;rtta asosiy yo&apos;li bor. Quyidagi jadval narx, vaqt va karta turini taqqoslaydi:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Yo&apos;l</div>
                <div className="text-center">Narx (50 Stars)</div>
                <div className="text-center">Uzcard qabul qiladimi</div>
                <div className="text-center">Vaqt</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm bg-primary-light/20">
                <div className="font-bold text-primary">StarsJoy + Uzcard P2P ⭐</div>
                <div className="text-center font-bold text-primary">12 000 so&apos;m</div>
                <div className="text-center text-green-600 font-bold">Ha</div>
                <div className="text-center text-green-600">2-5 daqiqa</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">StarsJoy + Click</div>
                <div className="text-center">12 000 so&apos;m</div>
                <div className="text-center text-green-600">Bilvosita*</div>
                <div className="text-center text-green-600">1-3 daqiqa</div>
              </div>
              <div className="grid grid-cols-4 p-4 items-center text-sm">
                <div className="font-medium">App Store</div>
                <div className="text-center">~14 500 so&apos;m</div>
                <div className="text-center text-yellow-600">Qisman</div>
                <div className="text-center">Darhol</div>
              </div>
            </div>

            <p className="text-muted text-xs italic mb-4">
              * Click ilovasiga Uzcard kartangiz ulangan bo&apos;lsa, Click yo&apos;li bilvosita Uzcard&apos;dan to&apos;lov qiladi.
            </p>

            <p className="text-muted leading-relaxed">
              Uzcard P2P yo&apos;li Uzcard kartangiz orqali ishlaydigan eng qulay yo&apos;l — bevosita bot kartasiga o&apos;tkazma, hech qanday oraliq kursni o&apos;qimaydi. App Store yo&apos;li ~20% qimmat. Fragment esa Uzcard&apos;ni umuman qabul qilmaydi va xorijiy karta yoki TON talab qiladi.
            </p>
          </section>

          {/* Section 6 — Common issues */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Uzcard orqali Stars sotib olishda uchraydigan muammolar</h2>
            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Noto&apos;g&apos;ri summa o&apos;tkazildi</h3>
                <p className="text-sm text-muted leading-relaxed">
                  <strong>Yechim:</strong> StarsJoy qo&apos;llab-quvvatlashga Uzcard chek raqamini va o&apos;tkazgan summani yuboring. 15-30 daqiqada qo&apos;lda tekshiruv — Stars yoqiladi yoki ortiqcha summa qaytariladi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Uzcard kartam ko&apos;p valyutali — qaysi balansdan o&apos;tkazadi?</h3>
                <p className="text-sm text-muted leading-relaxed">
                  <strong>Yechim:</strong> Uzcard ilovasida o&apos;tkazma qilayotganda &quot;so&apos;m balansidan&quot; ekanini tekshiring. Dollar yoki euro balansidan o&apos;tkazsangiz konvertatsiya bo&apos;ladi va summa to&apos;g&apos;ri kelmaydi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">SMS kod kelmadi</h3>
                <p className="text-sm text-muted leading-relaxed">
                  <strong>Yechim:</strong> Uzcard ilovasi va SMS kod O&apos;zbekistondagi har qanday operator (Beeline, Ucell, Mobiuz, UMS) bilan ishlaydi. Kelmasa 1-2 daqiqa kuting yoki kartani Uzcard ofisida ro&apos;yxatdan o&apos;tkazgan tel raqami to&apos;g&apos;riligini tekshiring.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Pul o&apos;tkazildi, Stars kelmadi</h3>
                <p className="text-sm text-muted leading-relaxed">
                  <strong>Yechim:</strong> 10-15 daqiqa kuting. Faollashmasa botga Uzcard chek raqamini yuboring. Manual tekshiruvdan keyin Stars yoqiladi yoki pul qaytariladi.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Tez-tez so&apos;raladigan savollar</h2>
            <div className="space-y-4">
              {[
                { q: "Uzcard orqali Telegram Stars qanday sotib olinadi?", a: "@starsjoybot da Stars miqdorini tanlang, \"Kartaga o'tkazma\" yo'lini tanlang, bot karta raqami va summani beradi, Uzcard bank ilovasidan shu kartaga P2P o'tkazma qiling. Stars 5 daqiqada akkauntda." },
                { q: "Uzcard alohida tugma sifatida bormi?", a: "Yo'q. Bot ikkita yo'l beradi: Click va Kartaga o'tkazma. Uzcard orqali to'lash uchun ikkinchi yo'lni tanlaysiz va Uzcard ilovasidan P2P o'tkazma qilasiz." },
                { q: "50 Stars qancha turadi?", a: "50 Stars Uzcard orqali — 12 000 so'm (StarsJoy.uz, 240 so'm/star). App Store'da ~14 500 so'm — mahalliy P2P ~17% arzon va Uzcard bilan to'g'ridan-to'g'ri ishlaydi." },
                { q: "Uzcard P2P xavfsizmi?", a: "Ha. Uzcard — Markaziy bank litsenziyali. Karta ma'lumotlari Uzcard serverida, bot ko'rmaydi. Chek beriladi, Stars kelmasa pul qaytariladi." },
                { q: "Telegram rasmiy ilovasidan Uzcard bilan Stars olsa bo'ladimi?", a: "Yo'q. Telegram Uzcard P2P'ni qabul qilmaydi — faqat Visa/Mastercard yoki Apple/Google Pay. So'mda va Uzcard bilan Stars uchun mahalliy reseller kerak." },
                { q: "Click vs Uzcard P2P — qaysi yaxshi?", a: "Click tezroq (1-3 daqiqa, PIN/Face ID) va qulayroq. Uzcard P2P 2-5 daqiqa, SMS kod tasdiqi bilan. Stars akkauntga keladigan vaqt har ikkalasida bir xil. Sizda qaysi qulay bo'lsa shuni tanlang." },
                { q: "Uzcard ilovasi yo'q bo'lsa nima qilish kerak?", a: "Uzcard ilovasini Play Market yoki App Store dan yuklang. Yoki bot ko'rsatgan kartaga boshqa bank ilovasi orqali ham o'tkazsangiz natija bir xil — tizim summa va karta orqali to'lovni aniqlaydi." },
                { q: "Stars kelmasa kim javobgar?", a: "StarsJoy.uz reseller javobgar — chek raqami orqali tekshiradi va Stars yoqadi yoki pul qaytaradi. Uzcard P2P o'tkazma esa Uzcard tomonidan kafolatlangan rasmiy operatsiya." },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                  <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Trust Block */}
          <section>
            <div className="bg-section-alt rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-bold text-foreground mb-4 text-center">Uzcard orqali Stars — raqamlarda</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">240</p>
                  <p className="text-sm text-muted">so&apos;m/star (StarsJoy)</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">~17-20%</p>
                  <p className="text-sm text-muted">App Store&apos;dan arzon</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">2-5 daq.</p>
                  <p className="text-sm text-muted">Stars akkauntda</p>
                </div>
              </div>
            </div>
          </section>

          {/* Related */}
          <section>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-card-border">
              <h3 className="text-lg font-bold text-foreground mb-4">Stars haqida boshqa maqolalar</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/maqolalar/telegram-stars-nima" className="text-primary font-semibold hover:underline">Telegram Stars nima va qayerda ishlatiladi</Link></li>
                <li><Link href="/maqolalar/telegram-stars-ozbekistondan-sotib-olish" className="text-primary font-semibold hover:underline">Telegram Stars O&apos;zbekistondan sotib olish</Link></li>
                <li><Link href="/maqolalar/telegram-stars-click-payme-orqali-somda" className="text-primary font-semibold hover:underline">Stars Click va kartaga o&apos;tkazma orqali so&apos;mda</Link></li>
                <li><Link href="/maqolalar/telegram-stars-vs-telegram-premium" className="text-primary font-semibold hover:underline">Stars vs Premium: qaysini tanlash</Link></li>
              </ul>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <div className="hero-gradient rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-5 left-5 w-32 h-32 bg-white rounded-full blur-2xl" />
              </div>
              <div className="relative">
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  Uzcard kartangiz orqali Telegram Stars sotib olish — eng arzon va to&apos;g&apos;ri mahalliy yo&apos;l. 240 so&apos;m/star, kurs konvertatsiyasiz, oddiy P2P o&apos;tkazma, 2-5 daqiqada Stars akkauntda.{" "}
                  <strong className="text-white">@starsjoybot</strong> da boshlang.
                </p>
                <a href="https://telegram.me/starsjoybot" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  Uzcard bilan Stars sotib olish
                </a>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
