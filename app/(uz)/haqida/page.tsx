import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "PremiumSend haqida — O'zbekistonda Telegram Premium ishonchli xizmat",
  description:
    "PremiumSend — O'zbekistonda Telegram Premium so'mda sotib olish xizmati. Click, Payme, Uzcard va Humo orqali 5 daqiqada faollashish. Halol mahalliy reseller, mustaqil xizmat.",
  keywords: [
    "premiumsend haqida",
    "premium send kim",
    "telegram premium ishonchli xizmat o'zbekiston",
    "telegram premium reseller o'zbekiston",
    "premium send mustaqil",
    "premiumsend.uz",
  ],
  alternates: {
    canonical: "https://premiumsend.uz/haqida",
    languages: {
      uz: "https://premiumsend.uz/haqida",
      ru: "https://premiumsend.uz/ru/o-nas",
    },
  },
  openGraph: {
    title: "PremiumSend haqida — Telegram Premium ishonchli xizmati",
    description:
      "O'zbekistonda Telegram Premium so'mda sotib olish — Click, Payme, Uzcard va Humo bilan 5 daqiqada. Halol mahalliy reseller.",
    url: "https://premiumsend.uz/haqida",
    type: "website",
  },
};

export default function AboutPageUz() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Premium Send",
    url: "https://premiumsend.uz",
    description:
      "O'zbekistonda Telegram Premium so'mda sotib olish — Click, Payme, Uzcard va Humo orqali. Mahalliy mustaqil reseller.",
    sameAs: ["https://t.me/premiumsendbot"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      url: "https://t.me/premiumsendbot",
      availableLanguage: ["Uzbek", "Russian"],
    },
    areaServed: {
      "@type": "Country",
      name: "Uzbekistan",
    },
  };

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "PremiumSend haqida",
    url: "https://premiumsend.uz/haqida",
    description:
      "PremiumSend kim, qanday ishlaydi, qaysi to'lov usullarini qabul qiladi va nima uchun ishonchli — to'liq ma'lumot.",
    mainEntity: {
      "@type": "Organization",
      name: "Premium Send",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "PremiumSend kim?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PremiumSend — O'zbekistondagi mustaqil reseller. Telegram Premium obunasini Telegram'ning rasmiy gift mexanizmi orqali sotib olib, mahalliy foydalanuvchilarga so'mda yetkazib beradi. PremiumSend Telegram'ning rasmiy hamkori EMAS — bu O'zbekistonda mavjud bo'lgan bir nechta mustaqil reseller'lardan biri. Mahsulot 1, 3, 6 va 12 oylik tariflar.",
        },
      },
      {
        "@type": "Question",
        name: "PremiumSend Telegram'ning rasmiy hamkorimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yo'q. Hech qanday O'zbekistondagi xizmat Telegram'ning rasmiy hamkori emas. PremiumSend — mustaqil reseller. Mexanizm: biz Telegram'ning rasmiy gift sistemasi orqali Premium sotib olamiz va sizga jo'natamiz. Bu xuddi do'kondan tovar olib boshqa do'konda sotish kabi — qonuniy. Lekin \"Telegram rasmiy hamkor\" deb yozish yolg'on bo'lar edi.",
        },
      },
      {
        "@type": "Question",
        name: "Qaysi to'lov usullarini qabul qilasiz?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bot tarif tanlaganingizdan keyin karta raqami va aniq summani ko'rsatadi. Siz istalgan ilova orqali (Click, Payme, Uzcard ilovasi, Humo ilovasi yoki bank ilovasi) ko'rsatilgan kartaga aniq summani o'tkazasiz. Tizim kartaga tushgan to'lovni summa va karta kombinatsiyasi orqali avtomatik aniqlaydi va Premium 2-5 daqiqada faollashtiradi. Hammasi so'mda — kurs riski yo'q.",
        },
      },
      {
        "@type": "Question",
        name: "Premium kelmasa nima bo'ladi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Texnik xato sababli Premium yoqilmasa — qo'lda yoqamiz yoki pulni qaytaramiz. Aniq shartlar /oferta sahifasida. Pul qaytarish uchun: Click yoki Payme PDF chek raqamini saqlab, qo'llab-quvvatlashga yozasiz. Texnik xatolar oz uchraydi, lekin nol emas — har qanday reseller bunday holatlardan ozod emas.",
        },
      },
      {
        "@type": "Question",
        name: "Texnik xatolar bo'ladimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha, ba'zan. Telegram tomonidan qisqa muddatli kechikishlar yoki Click serverlaridagi yuklamalar tufayli Premium 5 daqiqa o'rniga 10-15 daqiqada faollashishi mumkin. Bunday holatlarda bot ko'rsatma beradi yoki manual yoqishga o'tadi. Hech qanday reseller \"100% xatosiz\" deyolmaydi — kim shunday yozsa, yolg'on. Asosiysi — muammo bo'lganda yechim mexanizmi bor.",
        },
      },
      {
        "@type": "Question",
        name: "Sayt va botning bog'liqligi qanday tekshiriladi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ikkita yo'l: birinchi — saytda @PremiumSendBot havolasi bor, ikkinchi — botning ichidagi xabarlarda premiumsend.uz domeni eslatiladi. Domen HTTPS bilan ishlaydi, /oferta sahifasida pul qaytarish shartlari aniq yozilgan. Bu mexanizmlar reseller'ning haqiqiyligini tasdiqlaydi.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Bosh sahifa",
        item: "https://premiumsend.uz",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "PremiumSend haqida",
        item: "https://premiumsend.uz/haqida",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-muted">
        <Link href="/" className="hover:text-primary">
          Bosh sahifa
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">PremiumSend haqida</span>
      </nav>

      {/* Page */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Hero */}
        <header className="mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight mb-6">
            PremiumSend haqida
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-6 border border-primary/20">
            <p className="text-foreground leading-relaxed text-lg font-medium">
              <strong>Qisqacha:</strong> PremiumSend — O&apos;zbekistondagi mustaqil reseller. Telegram Premium obunasini mahalliy karta va so&apos;m bilan sotib olish imkonini beramiz: Click, Payme, Uzcard va Humo orqali, 1-12 oylik tariflar, 5 daqiqada faollashish. Telegram&apos;ning rasmiy hamkori EMAS — bu mexanizm Telegram&apos;ning ochiq gift tizimiga tayanadi.
            </p>
          </div>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 — Mission */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Nima uchun PremiumSend bor?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              O&apos;zbekistonlik foydalanuvchi uchun Telegram Premium sotib olishda uchta to&apos;siq bor:
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  1. Telegram rasmiy ilovasi mahalliy kartani qabul qilmaydi
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Faqat Visa, Mastercard, Google Pay yoki Apple Pay ishlaydi. Uzcard, Humo, Click va Payme — Telegram tizimiga ulanmagan.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  2. App Store va Play Market 30-40% qimmat
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  1 oylik App Store&apos;da $5.99 ≈ 78 000 so&apos;m, mahalliy reseller&apos;da 59 000 so&apos;m. Plus xorijiy karta talabi va kurs riski.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  3. 3 va 6 oylik tariflar Telegram&apos;da yo&apos;q
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Telegram rasmiy ilovasi faqat 1 va 12 oylik paketlarni taklif qiladi. 3 va 6 oylik tariflar — faqat reseller'lar orqali mavjud.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              PremiumSend bu uch to&apos;siqni hal qiladi: mahalliy karta va Click bilan, so&apos;mda, 1-12 oylik to&apos;liq tariflar. Mexanizm Telegram&apos;ning rasmiy gift sistemasiga tayanadi — qonuniy, oshkora.
            </p>
          </section>

          {/* Section 2 — Honesty (CRITICAL for C-plan) */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Halol bo&apos;lish kerak — biz nima qilamiz va nima qilmaymiz
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Brend ishonchi yolg&apos;on bilan qurilmaydi. Quyida — PremiumSend haqida ochiq aytilgan haqiqat:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  ✅ Biz quyidagilarmiz
                </h3>
                <ul className="text-sm text-muted space-y-2">
                  <li>• O&apos;zbekistondagi mustaqil reseller</li>
                  <li>• Mahalliy karta va Click ni qabul qiluvchi xizmat</li>
                  <li>• Telegram&apos;ning rasmiy gift mexanizmi orqali ishlovchi</li>
                  <li>• 1, 3, 6, 12 oylik Premium tariflarini taklif qiluvchi</li>
                  <li>• So&apos;mda to&apos;lovni qabul qiluvchi (kurs riski yo&apos;q)</li>
                  <li>• @PremiumSendBot va premiumsend.uz domeni egasi</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  ❌ Biz quyidagilar EMASMIZ
                </h3>
                <ul className="text-sm text-muted space-y-2">
                  <li>• Telegram&apos;ning rasmiy hamkori EMAS</li>
                  <li>• Davlat tomonidan litsenziyalangan EMAS</li>
                  <li>• &quot;100% xatosiz&quot; xizmat EMAS (texnik nuqsonlar bo&apos;ladi)</li>
                  <li>• &quot;Bepul Premium&quot; bermaymiz (bunday narsa yo&apos;q)</li>
                  <li>• Akkaunt parolingizni so&apos;ramaymiz (kerak emas)</li>
                  <li>• Premium muddatini cheksizga aylantirmaymiz (bu Telegram qoidasi)</li>
                </ul>
              </div>
            </div>

            <div className="bg-section-alt rounded-xl p-5">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Nima uchun shu darajada ochiq aytamiz?</strong> Bozorda &quot;biz Telegram&apos;ning rasmiy hamkori&quot;, &quot;davlat litsenziyali&quot;, &quot;100% kafolat&quot; deb yozadigan xizmatlar bor. Bu yolg&apos;on iboralar — birinchi ishonchsizlik belgisi. Halollik kuchli signal: agar reseller o&apos;z chegaralarini ko&apos;rsata olsa — boshqa hammasi haqida ham ochiq gapiradi.
              </p>
            </div>
          </section>

          {/* Section 3 — How it works */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              PremiumSend qanday ishlaydi — texnik mexanizm
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Premium yetkazib berish — to&apos;liq oshkora jarayon. Qadamlar quyidagicha:
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  step: "1",
                  title: "@PremiumSendBot da tarif tanlash",
                  desc: "1, 3, 6 yoki 12 oylik. Narx so'mda darhol ko'rinadi: 59 000, 175 000, 235 000 yoki 425 000 so'm.",
                },
                {
                  step: "2",
                  title: "Premium kerak username'ni kiritish",
                  desc: "Faqat @username — parol, login yoki SMS-kod kerak emas. Sovg'a qilayotgan bo'lsangiz — boshqa kishining username'i.",
                },
                {
                  step: "3",
                  title: "Bot karta raqami va aniq summani beradi",
                  desc: "Tarif tanlaganingizdan keyin bot ekranda karta raqami va to'lov uchun aniq summani ko'rsatadi. Hammasi so'mda.",
                },
                {
                  step: "4",
                  title: "Istalgan ilova orqali shu kartaga o'tkazma",
                  desc: "Click, Payme, Uzcard ilovasi, Humo ilovasi yoki bank ilovasi orqali bot ko'rsatgan kartaga aynan o'sha summani o'tkazasiz. Karta ma'lumotlari faqat to'lov tizimi serverida saqlanadi — bot ko'rmaydi. PDF chek beriladi.",
                },
                {
                  step: "5",
                  title: "Telegram rasmiy gift mexanizmi orqali Premium yoqiladi",
                  desc: "Biz Telegram'ning ochiq gift sistemasi orqali sizning username'ga Premium yuboramiz. Hech qanday akkauntga kirish yoki hack yo'q.",
                },
                {
                  step: "6",
                  title: "Premium 2-5 daqiqada faollashadi",
                  desc: "Profilingizda Premium belgisi paydo bo'ladi. Texnik kechikish bo'lsa 10-15 daqiqaga cho'zilishi mumkin.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-muted leading-relaxed">
              Asosiy fakt: PremiumSend hech qanday akkauntga login qilmaydi va hech qanday parol so&apos;ramaydi. Telegram&apos;ning gift mexanizmi shunday qurilgan — username yetarli.
            </p>
          </section>

          {/* Section 4 — Products */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Mahsulotlar va narxlar
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Barcha tariflar so&apos;mda, qo&apos;shimcha komissiyasiz. Narxlar 2026-yil holatida:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Tarif</div>
                <div className="text-center">Narx</div>
                <div className="text-center">Oyiga</div>
                <div className="text-center">Sahifa</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">1 oylik</div>
                <div className="text-center">59 000 so&apos;m</div>
                <div className="text-center">59 000 so&apos;m</div>
                <div className="text-center">
                  <Link
                    href="/1-oylik"
                    className="text-primary font-semibold hover:underline"
                  >
                    Batafsil
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">3 oylik</div>
                <div className="text-center">175 000 so&apos;m</div>
                <div className="text-center">58 333 so&apos;m</div>
                <div className="text-center">
                  <Link
                    href="/3-oylik"
                    className="text-primary font-semibold hover:underline"
                  >
                    Batafsil
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">6 oylik</div>
                <div className="text-center">235 000 so&apos;m</div>
                <div className="text-center">39 167 so&apos;m</div>
                <div className="text-center">
                  <Link
                    href="/6-oylik"
                    className="text-primary font-semibold hover:underline"
                  >
                    Batafsil
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-4 p-4 items-center text-sm bg-primary-light/20">
                <div className="font-bold text-primary">12 oylik ⭐</div>
                <div className="text-center font-bold text-primary">
                  425 000 so&apos;m
                </div>
                <div className="text-center font-bold text-primary">
                  35 417 so&apos;m
                </div>
                <div className="text-center">
                  <Link
                    href="/12-oylik"
                    className="text-primary font-semibold hover:underline"
                  >
                    Batafsil
                  </Link>
                </div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Sovg&apos;a qilish:</strong> 3, 6 va 12 oylik tariflarni boshqa odamga sovg&apos;a qilish mumkin. <strong>1 oylik sovg&apos;a yo&apos;q</strong> — bu Telegram qoidasi (biz qo&apos;ymagan, lekin majburiy).
            </p>

            <p className="text-muted leading-relaxed">
              Barcha narx va tariflar haqida batafsil —{" "}
              <Link
                href="/maqolalar/telegram-premium-narxlari"
                className="text-primary font-semibold hover:underline"
              >
                Premium narxlari 2026 maqolasida
              </Link>
              .
            </p>
          </section>

          {/* Section 5 — Payment methods */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              To&apos;lov usullari
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              4 ta usul mavjud. Hammasi so&apos;mda, hammasi mahalliy:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: "Click ilovasi",
                  desc: "Click ilovasida P2P o'tkazma bilan bot ko'rsatgan kartaga summa o'tkazasiz. PIN yoki Face ID bilan 1-2 daqiqada tasdiqlanadi. O'z karta ilovada saqlangan, kartangiz raqamini yozish kerak emas.",
                  link: "/maqolalar/telegram-premium-click-orqali",
                  linkText: "Click orqali batafsil",
                },
                {
                  title: "Payme",
                  desc: "Payme ilovasida P2P o'tkazma bilan bot ko'rsatgan kartaga summa o'tkazasiz. Xuddi Click kabi 1-2 daqiqada PIN/Face ID bilan tasdiqlanadi.",
                  link: "/maqolalar/telegram-premium-payme-orqali",
                  linkText: "Payme orqali batafsil",
                },
                {
                  title: "Uzcard",
                  desc: "Uzcard kartasi orqali bot ko'rsatgan kartaga P2P o'tkazma. Bank ilovasi yoki SMS-bank orqali, SMS-kod bilan tasdiqlash, 2-3 daqiqada.",
                  link: "/maqolalar/3-oylik-telegram-premium-uzcard-orqali",
                  linkText: "Uzcard orqali batafsil",
                },
                {
                  title: "Humo",
                  desc: "Humo kartasi orqali bot ko'rsatgan kartaga P2P o'tkazma — Uzcard kabi mexanizm. Bank ilovasi yoki SMS-bank orqali, 2-3 daqiqada.",
                  link: "/maqolalar/telegram-premium-humo-orqali",
                  linkText: "Humo orqali batafsil",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-5 border border-card-border shadow-sm"
                >
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-2">
                    {item.desc}
                  </p>
                  {item.link && (
                    <Link
                      href={item.link}
                      className="text-xs text-primary font-semibold hover:underline"
                    >
                      → {item.linkText}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <p className="text-muted leading-relaxed">
              Karta ma&apos;lumotlari hech qachon bot serveriga tushmaydi — faqat to&apos;lov tizimi (Click, Payme, bank) serverida saqlanadi. Bu mexanizm PCI DSS xalqaro xavfsizlik standartiga muvofiq.
            </p>
          </section>

          {/* Section 6 — Trust signals */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Nima uchun PremiumSend ga ishonish mumkin
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Ishonch — bu yolg&apos;iz so&apos;z emas, mexanizmlar majmuasi. Quyida — har bir foydalanuvchi tekshira oladigan aniq belgilar:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: "Faqat rasmiy to'lov tizimlari",
                  desc: "Bot karta raqami va aniq summani ko'rsatadi, siz Click, Payme, Uzcard yoki Humo ilovalari orqali shu kartaga o'tkazasiz. Karta ma'lumotlari faqat to'lov tizimi serverida saqlanadi — bot ko'rmaydi.",
                },
                {
                  title: "Har to'lovda PDF chek",
                  desc: "Click yoki Payme har to'lovda PDF chek beradi. Hujjat istalgan paytda qayta yuklanishi mumkin va shikoyat uchun ishlatiladi.",
                },
                {
                  title: "Faqat @username so'raymiz",
                  desc: "Premium yoqish uchun faqat sizning yoki sovg'a qilayotgan kishining @username'i kerak. Parol, login, SMS-kod — kerak emas.",
                },
                {
                  title: "Sayt va bot bog'langan",
                  desc: "premiumsend.uz domeni HTTPS bilan ishlaydi. Saytda @PremiumSendBot havolasi, botda esa premiumsend.uz havolasi.",
                },
                {
                  title: "Oferta sahifasi",
                  desc: "/oferta da pul qaytarish shartlari, javobgarlik chegaralari va aloqa ma'lumotlari aniq yozilgan. Huquqiy hujjat.",
                },
                {
                  title: "Tarif va narx oldindan",
                  desc: "Botdagi menyuda narx aniq raqam bilan. To'lov vaqtida 'qo'shimcha komissiya' yoki 'maxsus to'lov' paydo bo'lmaydi.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-5 border border-card-border shadow-sm"
                >
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-muted leading-relaxed">
              Aldovchi botlardan farq qilish uchun{" "}
              <Link
                href="/maqolalar/telegram-premium-xavfsiz-aldovdan-saqlanish"
                className="text-primary font-semibold hover:underline"
              >
                8 ta tekshiruv belgisi haqida alohida maqola
              </Link>{" "}
              — universal qoidalar, har qanday reseller'ni baholash uchun.
            </p>
          </section>

          {/* Section 7 — Errors and refunds */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Texnik xato bo&apos;lsa nima bo&apos;ladi?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Halol javob: texnik xatolar oz uchraydi, lekin nol emas. Telegram tomonidan qisqa muddatli kechikishlar yoki mahalliy to&apos;lov tizimidagi yuklamalar Premium yoqilishini sekinlashtirishi mumkin. Bunday holatlarda:
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  10-15 daqiqa kechikish
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Bot avtomatik kuzatib turadi va Premium 5 daqiqa o&apos;rniga 10-15 daqiqada faollashishi mumkin. Hech qanday harakat kerak emas.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  30 daqiqadan ortiq kutish
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Bot ichidagi qo&apos;llab-quvvatlashga Click/Payme PDF chek raqami bilan murojaat qiling. Manual yoqish 30 daqiqada amalga oshiriladi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  Yoqolmaydigan vaziyatlar (kam uchraydi)
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Telegram tomonidan akkauntga vaqtinchalik cheklov yoki noto&apos;g&apos;ri username sababli Premium yoqilmasa — pul to&apos;liq qaytariladi. Click yoki Payme orqali 1-3 ish kunida.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Pul qaytarish aniq shartlari{" "}
              <Link
                href="/oferta"
                className="text-primary font-semibold hover:underline"
              >
                /oferta sahifasida
              </Link>
              {" "}yozilgan. Bu sahifa har qanday reseller uchun majburiy huquqiy hujjat.
            </p>
          </section>

          {/* Section 8 — Contact */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Bog&apos;lanish va qo&apos;llab-quvvatlash
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Asosiy aloqa kanali — Telegram bot. Sayt qo&apos;shimcha ma&apos;lumot va maqolalar uchun.
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-sm p-6 md:p-8 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-foreground mb-2">
                    🤖 Telegram bot
                  </h3>
                  <p className="text-sm text-muted mb-3">
                    Asosiy buyurtma kanali. Tarif tanlash, to&apos;lov, qo&apos;llab-quvvatlash — hammasi botda.
                  </p>
                  <Link
                    href="https://t.me/premiumsendbot"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                  >
                    @PremiumSendBot →
                  </Link>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">
                    🌐 Sayt
                  </h3>
                  <p className="text-sm text-muted mb-3">
                    Tariflar, narxlar, maqolalar va texnik ma&apos;lumotlar uchun.
                  </p>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                  >
                    premiumsend.uz →
                  </Link>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">
                    📚 Maqolalar
                  </h3>
                  <p className="text-sm text-muted mb-3">
                    Premium haqida 30+ qo&apos;llanma — narxlar, taqqoslash, xavfsizlik.
                  </p>
                  <Link
                    href="/maqolalar"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                  >
                    /maqolalar →
                  </Link>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">
                    📜 Oferta
                  </h3>
                  <p className="text-sm text-muted mb-3">
                    Pul qaytarish, javobgarlik va xizmat shartlari.
                  </p>
                  <Link
                    href="/oferta"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                  >
                    /oferta →
                  </Link>
                </div>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Qo&apos;llab-quvvatlash bot ichida — savol bersangiz birinchi javob 30 daqiqa-bir necha soat ichida keladi. Mahalliy vaqtda ishlaymiz, UZ va RU tilida.
            </p>
          </section>

          {/* Conclusion CTA */}
          <section>
            <div className="hero-gradient rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-5 left-5 w-32 h-32 bg-white rounded-full blur-2xl" />
              </div>
              <div className="relative">
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  PremiumSend — mahalliy mustaqil reseller. So&apos;mda, mahalliy karta bilan, halol mexanizm bilan.{" "}
                  <strong className="text-white">@PremiumSendBot</strong> da 1 oylik 59 000 so&apos;mdan boshlash mumkin.
                </p>
                <Link
                  href="https://t.me/premiumsendbot"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  Botni ochish
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
