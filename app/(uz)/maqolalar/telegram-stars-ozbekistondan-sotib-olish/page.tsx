import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Telegram Stars O'zbekistondan qanday sotib olinadi — so'mda, 5 daqiqada",
  description:
    "Telegram Stars O'zbekistondan so'mda sotib olish — StarsJoy.uz orqali 50 Stars 12 000 so'mdan, Click va bank kartasi bilan. App Store'dan 17% arzon, valyuta konvertatsiyasiz.",
  keywords: [
    "telegram stars sotib olish",
    "telegram stars o'zbekiston",
    "stars so'mda",
    "stars o'zbekistondan",
    "stars click orqali",
    "starsjoy",
    "starsjoybot",
    "stars onlayn sotib olish",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/maqolalar/telegram-stars-ozbekistondan-sotib-olish",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/telegram-stars-ozbekistondan-sotib-olish",
      ru: "https://premiumsend.uz/ru/maqolalar/telegram-stars-ozbekistondan-sotib-olish",
      "x-default": "https://premiumsend.uz/maqolalar/telegram-stars-ozbekistondan-sotib-olish",
    },
  },
  openGraph: {
    title:
      "Telegram Stars O'zbekistondan sotib olish — so'mda, 5 daqiqada",
    description:
      "StarsJoy.uz orqali 50 Stars 12 000 so'mdan, Click va kartaga o'tkazma bilan. App Store'dan 17% arzon, kurs riski yo'q.",
    url: "https://premiumsend.uz/maqolalar/telegram-stars-ozbekistondan-sotib-olish",
    type: "article",
    publishedTime: "2026-05-05",
  },
};

export default function ArticleStarsBuyUz() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    image: "https://premiumsend.uz/og-image.png",
    headline:
      "Telegram Stars O'zbekistondan qanday sotib olinadi — so'mda, 5 daqiqada",
    description:
      "O'zbekistondan Telegram Stars sotib olishning qadamma-qadam qo'llanmasi: narxlar, to'lov usullari, kanallar taqqoslash va xavfsiz xarid.",
    datePublished: "2026-05-05",
    dateModified: "2026-05-05",
    author: {
      "@type": "Organization",
      name: "Premium Send",
      url: "https://premiumsend.uz",
    },
    publisher: {
      "@type": "Organization",
      name: "Premium Send",
      url: "https://premiumsend.uz",
    },
    mainEntityOfPage:
      "https://premiumsend.uz/maqolalar/telegram-stars-ozbekistondan-sotib-olish",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Telegram Stars O'zbekistondan qanday sotib olinadi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Eng oson yo'l — StarsJoy.uz mahalliy xizmati orqali. Telegram'da @starsjoybot ni oching, /start bosing, menyudan Stars bo'limini tanlang, kerakli miqdorni ko'rsating (minimum 50 Stars = 12 000 so'm) va to'lovni Click yoki bank kartasiga o'tkazma orqali amalga oshiring. Bir necha daqiqada Stars akkauntingizda. Hech qanday xorijiy karta yoki valyuta konvertatsiyasi kerak emas.",
        },
      },
      {
        "@type": "Question",
        name: "Telegram Stars O'zbekistonda qancha turadi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mahalliy xizmatlarda 1 Star taxminan 240 so'm. Eng kichik paket 50 Stars — 12 000 so'm. Yirik paketlar: 100 Stars 24 000 so'm, 250 Stars 60 000 so'm, 500 Stars 120 000 so'm, 1000 Stars 240 000 so'm, 2500 Stars 600 000 so'm, 5000 Stars 1 200 000 so'm. App Store narxi taxminan 290 so'm/star, Fragment 260 so'm/star — mahalliy yo'l 17-21% arzon.",
        },
      },
      {
        "@type": "Question",
        name: "Stars uchun qanday to'lov usullari mavjud?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "StarsJoy.uz da ikkita asosiy yo'l: Click ilovasi (PIN/Face ID bilan 1-2 daqiqada) va bank kartasi orqali umumiy P2P o'tkazma (Uzcard, Humo). Hammasi so'mda — kurs riski yo'q. Telegram rasmiy ilovasi mahalliy karta va Click ni qabul qilmaydi, faqat Visa/Mastercard yoki Google Pay/Apple Pay ishlaydi.",
        },
      },
      {
        "@type": "Question",
        name: "Stars akkauntga qancha vaqtda keladi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To'lov tasdiqlangach Stars 1-5 daqiqada akkauntga avtomatik tushadi. To'lov mexanizmi Click yoki kartaga o'tkazma — odatda darhol bo'ladi. Texnik kechikish bo'lsa 10-15 daqiqaga cho'zilishi mumkin. Stars muddati tugamaydi, balansda istalgan paytgacha turadi.",
        },
      },
      {
        "@type": "Question",
        name: "App Store yoki Telegram rasmiy ilovasidan olish farqi nimada?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "App Store/Play Market — xorijiy karta talab qiladi (Visa, Mastercard), narx valyutada (1 Star ≈ $0.0199), kurs riski bor. Telegram rasmiy ilovasida ham xuddi shu chegaralar. Mahalliy yo'lda esa Click yoki Uzcard/Humo bilan so'mda to'lash mumkin, narx 17% arzon. Texnik xavfsizlik — har ikkalasida ham yuqori, lekin xarajat va qulaylik nuqtai nazaridan mahalliy yo'l afzal.",
        },
      },
      {
        "@type": "Question",
        name: "Stars bilan Premium sovg'a qilish mumkinmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha. 2024-yildan beri Stars yordamida boshqa odamga Premium sovg'a qilinishi mumkin. Lekin bu yo'l odatda qimmatroq tushadi: 3 oylik Premium gift uchun ~1000 Stars (240 000 so'm) kerak, 6 oylik uchun ~1500, 12 oylik uchun ~2500. Agar maqsad faqat Premium sovg'a bo'lsa, to'g'ridan-to'g'ri so'mda olish ko'pincha tejamkorroq — 3 oylik 175 000, 6 oylik 235 000, 12 oylik 425 000 so'm.",
        },
      },
      {
        "@type": "Question",
        name: "Stars sotib olishda qaysi xavflar bor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Eng katta xavf — noto'g'ri sotuvchini tanlash. Aldovchi botlar pulni oladi, Stars bermaydi. Himoya: faqat rasmiy to'lov tizimi (Click/Payme) orqali to'lash, PDF chek olish, sayt-bot bog'liqligi mavjud bo'lgan xizmatdan foydalanish. To'lov mexanizmi (Click, kartaga o'tkazma) o'zi xavfsiz — Markaziy bank litsenziyali. Asosiy ehtiyot — bot tanlashda.",
        },
      },
      {
        "@type": "Question",
        name: "Birinchi marta sinash uchun qaysi paketdan boshlash kerak?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "50 Stars (12 000 so'm) — eng kichik paket, sinov uchun ideal. Bu summa bilan butun jarayonni (bot, to'lov, faollashish) tekshirib olish mumkin. Jarayondan rozi bo'lsangiz, keyingi safar 250 yoki 500 Stars sotib olasiz — paket katta bo'lganda har bir Star qiymati o'zgarmaydi (linear narx), lekin sayohat soni kamayadi.",
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
        name: "Maqolalar",
        item: "https://premiumsend.uz/maqolalar",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Telegram Stars O'zbekistondan sotib olish",
        item: "https://premiumsend.uz/maqolalar/telegram-stars-ozbekistondan-sotib-olish",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
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
        <Link href="/maqolalar" className="hover:text-primary">
          Maqolalar
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">
          Telegram Stars O&apos;zbekistondan sotib olish
        </span>
      </nav>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">
              Qo&apos;llanma
            </span>
            <time className="text-xs text-muted" dateTime="2026-05-05">
              2026-yil, 5-may
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Telegram Stars O&apos;zbekistondan qanday sotib olinadi
          </h1>

          {/* TL;DR */}
          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>Qisqacha javob:</strong> O&apos;zbekistondan Telegram Stars sotib olishning eng qulay yo&apos;li —{" "}
              <Link
                href="https://telegram.me/starsjoybot"
                target="_blank"
                className="text-primary hover:underline"
              >
                @starsjoybot
              </Link>{" "}
              orqali, mahalliy{" "}
              <Link
                href="https://starsjoy.uz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                StarsJoy.uz
              </Link>{" "}
              xizmati. <strong>50 Stars 12 000 so&apos;m</strong>dan boshlanadi (1 Star ≈ 240 so&apos;m), Click yoki bank kartasiga o&apos;tkazma orqali. To&apos;lov so&apos;mda, kurs riski yo&apos;q, Stars 1-5 daqiqada akkauntga tushadi. App Store va Telegram rasmiy ilovasidan ~17% arzon.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Telegram Stars 2024-yilda joriy etilgan ichki valyuta. Ular bilan stikerlar, AI bot funksiyalari, donate va Premium sovg&apos;a uchun to&apos;laysiz. O&apos;zbekistonlik foydalanuvchilar uchun asosiy savol — &quot;qayerdan, qancha turadi va xavfsizmi?&quot;. Ushbu maqolada hammasi raqamlar bilan ochiq.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Telegram rasmiy ilovasi mahalliy kartani qabul qilmaydi — Visa, Mastercard yoki Google/Apple Pay kerak. App Store va Play Market — xuddi shunday cheklov, plus narx 17% qimmatroq. Mahalliy reseller'lar bu bo&apos;shliqni to&apos;ldiradi: so&apos;mda to&apos;lash, mahalliy karta va Click bilan, valyutasiz.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 — Quick answer */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Telegram Stars O&apos;zbekistondan qanday sotib olinadi?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Eng qisqa javob — bir necha bosishda. To&apos;liq jarayon quyidagicha:
            </p>

            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                Telegramda{" "}
                <Link
                  href="https://telegram.me/starsjoybot"
                  target="_blank"
                  className="text-primary font-bold hover:underline"
                >
                  @starsjoybot
                </Link>
                {" "}ni oching → <strong>/start</strong> tugmasini bosing → menyudan{" "}
                <strong>Stars</strong> bo&apos;limini tanlang → kerakli miqdorni ko&apos;rsating (minimum <strong>50 Stars = 12 000 so&apos;m</strong>) → to&apos;lovni{" "}
                <strong>Click</strong> yoki <strong>bank kartasiga o&apos;tkazma</strong> orqali amalga oshiring. Bir necha daqiqada Stars akkauntga tushadi.
              </p>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              StarsJoy.uz — O&apos;zbekistondagi mahalliy xizmat, 2024-yildan ishlaydi va Stars sotuvi bo&apos;yicha asosiy mahalliy kanallardan biri. Sayt UZ va RU tillarida, qo&apos;llab-quvvatlash mahalliy vaqtda ishlaydi. Texnik mexanizm: bot Telegram&apos;ning rasmiy Stars top-up tizimi orqali sizning akkauntingizga to&apos;g&apos;ridan-to&apos;g&apos;ri Stars o&apos;tkazadi. Hech qanday akkaunt parolini olish kerak emas.
            </p>

            <p className="text-muted leading-relaxed">
              Boshqa kanallar (App Store, Telegram rasmiy ilovasi, Fragment) ham mavjud, lekin O&apos;zbekistondan ulardan foydalanish texnik va moliyaviy jihatdan murakkab. Quyida har bir kanal taqqoslangan.
            </p>
          </section>

          {/* Section 2 — Pricing */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Telegram Stars qancha turadi O&apos;zbekistonda? Paketlar va narxlar
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Mahalliy reseller'larda Stars narxi linear — ya&apos;ni 1 Star qiymati paket hajmidan qat&apos;i nazar bir xil. StarsJoy.uz da 1 Star = 240 so&apos;m. Quyida paketlar tarkibi:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Paket</div>
                <div className="text-center">Narx (so&apos;m)</div>
                <div className="text-center">Tipik foydalanish</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm bg-primary-light/20">
                <div className="font-bold text-primary">50 Stars (minimum)</div>
                <div className="text-center font-bold text-primary">
                  12 000 so&apos;m
                </div>
                <div className="text-center text-muted">
                  Kichik tip, sticker, sinov
                </div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">100 Stars</div>
                <div className="text-center">24 000 so&apos;m</div>
                <div className="text-center text-muted">
                  Bot funksiyasi, kichik donate
                </div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">250 Stars</div>
                <div className="text-center">60 000 so&apos;m</div>
                <div className="text-center text-muted">O&apos;rtacha donate</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">500 Stars</div>
                <div className="text-center">120 000 so&apos;m</div>
                <div className="text-center text-muted">
                  Premium 3 oy gift atrofida
                </div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">1000 Stars</div>
                <div className="text-center">240 000 so&apos;m</div>
                <div className="text-center text-muted">
                  Premium 6-12 oy gift
                </div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">2500 Stars</div>
                <div className="text-center">600 000 so&apos;m</div>
                <div className="text-center text-muted">Yirik donate</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center text-sm">
                <div className="font-medium">5000 Stars</div>
                <div className="text-center">1 200 000 so&apos;m</div>
                <div className="text-center text-muted">Business / max</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Eslatma:</strong> StarsJoy yirik paketlarda chegirma taklif qilishi mumkin — aniq narxlar uchun bot ichida menyuni tekshiring. Yuqoridagi raqamlar linear bazaviy hisob.
            </p>

            <p className="text-muted leading-relaxed">
              Sinov uchun 50 Stars — minimal kirish darajasi. 240 so&apos;m/star bir martalik to&apos;lov, balansda muddatsiz turadi.
            </p>
          </section>

          {/* Section 3 — Step by step */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Stars sotib olish — qadamma-qadam
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Birinchi marta sotib olayotgan bo&apos;lsangiz, butun jarayon 3-5 daqiqa oladi. Click yoki kartaga o&apos;tkazmaga tayyor bo&apos;ling.
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  step: "1",
                  title: "Telegramda @starsjoybot ni oching",
                  desc: "Telegram qidiruv qatoriga @starsjoybot deb yozing va botni oching. /start tugmasini bosing — bot menyusi ochiladi (UZ va RU tilida).",
                },
                {
                  step: "2",
                  title: "Menyudan \"Stars\" bo'limini tanlang",
                  desc: "Bot bir nechta mahsulotni taklif qiladi: Stars, Premium, Gifts. \"Stars\" tugmasini bosing — paketlar ro'yxati ochiladi.",
                },
                {
                  step: "3",
                  title: "Kerakli paketni tanlang yoki miqdorni ko'rsating",
                  desc: "Tayyor paketlar (50, 100, 250, 500, 1000, 2500, 5000 Stars) yoki o'zingiz miqdor kiritishingiz mumkin. Narx so'mda darhol ko'rinadi — kurs konvertatsiyasi yo'q.",
                },
                {
                  step: "4",
                  title: "Stars qaysi akkauntga tushishi kerakligini tasdiqlang",
                  desc: "Bot Telegram username'ingizni avtomatik aniqlaydi. Boshqa odamga sovg'a qilmoqchi bo'lsangiz, uning @username'ini kiritasiz. Telegramning Stars Top Up mexanizmi shu username asosida ishlaydi.",
                },
                {
                  step: "5",
                  title: "To'lov usulini tanlang: Click yoki kartaga o'tkazma",
                  desc: "Click ilovasi orqali — PIN/Face ID bilan 1-2 daqiqada. Bank kartasi orqali — Uzcard/Humo P2P o'tkazma, SMS-kod bilan tasdiqlash. Ikkalasida ham so'mda to'lov, Click ilovasi tezroq.",
                },
                {
                  step: "6",
                  title: "Stars akkauntga 1-5 daqiqada tushadi",
                  desc: "To'lov tasdiqlangach Stars avtomatik akkaunt balansiga qo'shiladi. Telegram → Settings → Stars bo'limida ko'rishingiz mumkin. Texnik kechikish bo'lsa 10-15 daqiqaga cho'zilishi mumkin.",
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
              Aksariyat foydalanuvchilar butun jarayonni 3-5 daqiqada yakunlaydi. Qayta sotib olishda jarayon yanada qisqaradi — bot ma&apos;lumotlarni eslab qoladi.
            </p>
          </section>

          {/* Mid CTA — StarsJoy */}
          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                50 Stars 12 000 so&apos;mdan boshlanadi.{" "}
                <strong className="text-white">@starsjoybot</strong> — Click va karta orqali so&apos;mda, akkauntga 5 daqiqada. Sinash uchun minimal paket yetadi.
              </p>
              <Link
                href="https://telegram.me/starsjoybot"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                StarsJoy botini ochish
              </Link>
            </div>
          </section>

          {/* Section 4 — Channel comparison */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Stars qayerdan olish kerak — kanallar taqqoslash
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              O&apos;zbekistondan Telegram Stars sotib olishning 4 ta asosiy kanali bor. Har birini narx, qulaylik va karta talabi bo&apos;yicha taqqoslang:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-5 bg-section-alt p-4 font-bold text-sm">
                <div>Kanal</div>
                <div className="text-center">1 Star narxi</div>
                <div className="text-center">Karta turi</div>
                <div className="text-center">Valyuta</div>
                <div className="text-center">Tezlik</div>
              </div>
              <div className="grid grid-cols-5 p-4 border-b border-card-border items-center text-sm bg-primary-light/20">
                <div className="font-bold text-primary">StarsJoy ⭐</div>
                <div className="text-center font-bold text-primary">
                  ~240 so&apos;m
                </div>
                <div className="text-center text-green-600">
                  Mahalliy (Click, Uzcard, Humo)
                </div>
                <div className="text-center text-green-600 font-bold">
                  So&apos;m
                </div>
                <div className="text-center">5 daq.</div>
              </div>
              <div className="grid grid-cols-5 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">App Store / Play Market</div>
                <div className="text-center text-red-600">~290 so&apos;m</div>
                <div className="text-center text-red-600">Visa / Mastercard</div>
                <div className="text-center text-red-600">USD</div>
                <div className="text-center">Darhol</div>
              </div>
              <div className="grid grid-cols-5 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Fragment.com</div>
                <div className="text-center">~260 so&apos;m</div>
                <div className="text-center text-red-600">
                  Crypto / xorijiy karta
                </div>
                <div className="text-center text-red-600">USD/Crypto</div>
                <div className="text-center">5-15 daq.</div>
              </div>
              <div className="grid grid-cols-5 p-4 items-center text-sm">
                <div className="font-medium">Telegram rasmiy ilovasi</div>
                <div className="text-center text-red-600">~290 so&apos;m</div>
                <div className="text-center text-red-600">
                  Visa, Google/Apple Pay
                </div>
                <div className="text-center text-red-600">USD</div>
                <div className="text-center">Darhol</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Mahalliy yo&apos;l (StarsJoy)</strong> — narx 17-21% arzon, mahalliy karta yetadi, kurs riski yo&apos;q. App Store va Telegram rasmiy ilovasi xorijiy karta talab qiladi va USD da to&apos;lash kerak. Fragment qo&apos;shimcha texnik bilim talab qiladi (kripto-hamyon, xorijiy ko&apos;mak).
            </p>

            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">Texnik xavfsizlik</strong> — har 4 kanalda yuqori. Click va Apple Pay/Google Pay bir xil PCI DSS standartiga muvofiq ishlaydi. Asosiy farq — narx, valyuta va to&apos;lov usulida.
            </p>
          </section>

          {/* Section 5 — Where Stars are used */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Stars'ni nimaga ishlatasiz?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Stars sotib olishdan oldin, ulardan qanday foydalanish mumkinligini bilish foydali. 2026-yilda asosiy holatlar:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: "🤖 AI bot funksiyalari",
                  desc: "ChatGPT, Midjourney va boshqa AI botlar Stars yordamida ko'proq so'rov yoki rasm generatsiya qilish imkonini beradi. 50-100 Stars yetarli boshlanish uchun.",
                },
                {
                  title: "💎 Premium stikerlar va emoji",
                  desc: "Animatsiyali stikerlar va premium emoji paketlari odatda 50-200 Stars oralig'ida. Bir martalik xarid, akkauntda doimo qoladi.",
                },
                {
                  title: "❤️ Kanal mualliflariga donate",
                  desc: "Yoqgan kanal yoki blogerga 50, 100 yoki 500 Stars yuborish — yangi qo'llab-quvvatlash usuli.",
                },
                {
                  title: "🎁 Premium sovg'a qilish",
                  desc: "1000-2500 Stars bilan boshqa odamga Premium sovg'a qilish mumkin. Lekin to'g'ridan-to'g'ri so'mda olish ko'pincha arzonroq.",
                },
                {
                  title: "📺 Premium kontent unlock",
                  desc: "Ba'zi kanallar Stars asosida pullik kontent taklif qiladi (kurs, yopiq guruh, eksklyuziv post).",
                },
                {
                  title: "📱 Mini-app to'lovlari",
                  desc: "Telegram Mini App'lar (o'yinlar, do'konlar) ichidagi xaridlarda Stars asosiy valyuta bo'lib bormoqda.",
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
              Stars akkaunt balansida muddatsiz turadi. Aniq miqdorni — kerakli funksiyaga yetadigan darajada — sotib olish tavsiya etiladi, chunki ortiqcha qoladigan Stars'ni qaytarib so&apos;mga ayirboshlash mumkin emas.
            </p>
          </section>

          {/* Section 6 — Safety */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Stars sotib olishda xavfsizlik
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              To&apos;lov mexanizmi (Click, kartaga o&apos;tkazma) — Markaziy bank litsenziyasidagi tizimlar. Texnik darajada xavfsiz. Asosiy ehtiyot — sotuvchini tanlashda:
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  ✅ Click yoki Payme rasmiy ilovasi orqali to&apos;lash
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Karta ma&apos;lumotlari faqat to&apos;lov tizimi serverida saqlanadi, bot ko&apos;rmaydi. Hech qachon parol va CVV ni to&apos;g&apos;ridan-to&apos;g&apos;ri botga bermang.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  ✅ PDF chek olish
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Click va Payme har to&apos;lov uchun PDF chek beradi. Bu hujjat istalgan paytda qayta yuklash va shikoyat uchun ishlatiladi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  ✅ Bot va sayt bog&apos;langan
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  StarsJoy.uz domeni va @starsjoybot — bog&apos;langan, sayt HTTPS bilan ishlaydi. Bu reseller&apos;ning haqiqiyligini tasdiqlaydi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  ❌ &quot;Bepul Stars&quot; va&apos;dalaridan qoching
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Hech qanday rasmiy yo&apos;l bilan Stars bepul olib bo&apos;lmaydi. &quot;Bepul Stars&quot; deb va&apos;da qiluvchi botlar — fishing. Akkaunt parolingizni hech qachon hech kimga bermang.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Aldovdan saqlanish qoidalari Premium uchun ham, Stars uchun ham bir xil — ikkita mahsulotning xavfsizlik mexanizmlari bir-biriga o&apos;xshash.{" "}
              <Link
                href="/maqolalar/telegram-premium-xavfsiz-aldovdan-saqlanish"
                className="text-primary font-semibold hover:underline"
              >
                Aldovchi botlardan saqlanish bo&apos;yicha alohida maqola
              </Link>{" "}
              — 7 ta sxema va 8 ta tekshiruv belgisi bilan.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">
              Tez-tez so&apos;raladigan savollar
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Telegram Stars O'zbekistondan qanday sotib olinadi?",
                  a: "Eng oson yo'l — @starsjoybot orqali. /start bosing, Stars bo'limini tanlang, miqdorni ko'rsating va Click yoki bank kartasi orqali so'mda to'lang. Minimum 50 Stars 12 000 so'm. Bir necha daqiqada akkauntda.",
                },
                {
                  q: "Telegram Stars qancha turadi?",
                  a: "1 Star ≈ 240 so'm (mahalliy linear narx). Paketlar: 50 Stars 12 000, 100 Stars 24 000, 250 Stars 60 000, 500 Stars 120 000, 1000 Stars 240 000 so'm. App Store ~290 so'm/star, Fragment ~260 so'm/star.",
                },
                {
                  q: "Mahalliy karta bilan to'lash mumkinmi?",
                  a: "Ha, StarsJoy.uz da Click va bank kartasiga o'tkazma (Uzcard, Humo) ishlaydi. Telegram rasmiy ilovasi va App Store mahalliy kartani qabul qilmaydi — faqat Visa/Mastercard.",
                },
                {
                  q: "Stars qancha vaqtda akkauntga tushadi?",
                  a: "1-5 daqiqada to'lov tasdiqlangach avtomatik. Texnik kechikish bo'lsa 10-15 daqiqaga cho'zilishi mumkin.",
                },
                {
                  q: "Stars muddati tugaydimi?",
                  a: "Yo'q. Sotib olingan Stars akkauntda muddatsiz turadi. Lekin foydalanmagan Stars ni so'mga qaytarib bo'lmaydi — kerakli miqdorni sotib oling.",
                },
                {
                  q: "Stars bilan Premium sovg'a qilish arzonroqmi?",
                  a: "Yo'q, ko'pincha qimmatroq. 3 oylik Premium gift uchun ~1000 Stars (240 000 so'm), to'g'ridan-to'g'ri so'mda esa 175 000. Stars Premium gift uchun emas, bot va kanal funksiyalari uchun afzal.",
                },
                {
                  q: "App Store dan olish farqi nimada?",
                  a: "App Store xorijiy karta talab qiladi (Visa/Mastercard), narx 17-21% qimmatroq, USD da, kurs riski bor. Mahalliy yo'l so'mda, mahalliy karta bilan, arzonroq. Texnik xavfsizlik har ikkalasida yuqori.",
                },
                {
                  q: "Sinash uchun qaysi paketdan boshlash kerak?",
                  a: "50 Stars (12 000 so'm) — eng kichik paket, sinov uchun ideal. Bu summa bilan butun jarayonni tekshirib ko'rasiz, keyin yirik paket olishingiz mumkin.",
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 border border-card-border shadow-sm"
                >
                  <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Trust Block */}
          <section>
            <div className="bg-section-alt rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-bold text-foreground mb-4 text-center">
                Stars O&apos;zbekistondan — raqamlarda
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">50</p>
                  <p className="text-sm text-muted">
                    minimum Stars (12 000 so&apos;m)
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">240</p>
                  <p className="text-sm text-muted">so&apos;m / Star (linear)</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">17%</p>
                  <p className="text-sm text-muted">
                    App Store&apos;dan arzonroq
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Related */}
          <section>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-card-border">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Bog&apos;liq maqolalar
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/maqolalar/telegram-stars-nima"
                    className="text-primary font-semibold hover:underline"
                  >
                    Telegram Stars nima va qayerda ishlatiladi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/maqolalar/telegram-premium-xavfsiz-aldovdan-saqlanish"
                    className="text-primary font-semibold hover:underline"
                  >
                    Aldovchi botlardan saqlanish — 8 ta belgi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/maqolalar/telegram-premium-narxlari"
                    className="text-primary font-semibold hover:underline"
                  >
                    Telegram Premium narxlari 2026 — agar Premium kerak bo&apos;lsa
                  </Link>
                </li>
                <li>
                  <Link
                    href="/maqolalar/telegram-premium-eng-arzon-qayerdan-sotib-olish"
                    className="text-primary font-semibold hover:underline"
                  >
                    Premium eng arzon qayerdan sotib olish
                  </Link>
                </li>
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
                  Telegram Stars O&apos;zbekistondan so&apos;mda sotib olish — mahalliy karta va Click bilan, App Store&apos;dan 17% arzon.{" "}
                  <strong className="text-white">@starsjoybot</strong> da 50 Stars 12 000 so&apos;mdan boshlanadi. Sinashga shu paket yetarli.
                </p>
                <Link
                  href="https://telegram.me/starsjoybot"
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
                  StarsJoy botini ochish
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
