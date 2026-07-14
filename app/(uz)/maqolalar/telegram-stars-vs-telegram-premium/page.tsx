import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Telegram Stars vs Telegram Premium: qaysini tanlash kerak — to'liq taqqoslash",
  description:
    "Telegram Stars va Premium farqi: Stars — bot va kanallar uchun ichki valyuta, Premium — oylik obuna (4 GB fayl, 1000 kanal). Qanday hollarda qaysi biri kerak — aniq javob.",
  keywords: [
    "telegram stars vs premium",
    "telegram stars va premium farqi",
    "telegram stars premium farqi",
    "stars yoki premium",
    "stars premium qaysi yaxshi",
    "telegram stars vs premium qaysi",
    "telegram ichki valyutasi va obuna",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/maqolalar/telegram-stars-vs-telegram-premium",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/telegram-stars-vs-telegram-premium",
      ru: "https://premiumsend.uz/ru/maqolalar/telegram-stars-vs-telegram-premium",
      "x-default": "https://premiumsend.uz/maqolalar/telegram-stars-vs-telegram-premium",
    },
  },
  openGraph: {
    title:
      "Telegram Stars vs Premium: qaysini tanlash kerak",
    description:
      "Stars va Premium qachon va kim uchun kerak — to'liq taqqoslash, narxlar va aniq foydalanish stsenariylar.",
    url: "https://premiumsend.uz/maqolalar/telegram-stars-vs-telegram-premium",
    type: "article",
    publishedTime: "2026-05-05",
  },
};

export default function ArticleStarsVsPremiumUz() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    image: "https://premiumsend.uz/og-image.png",
    headline:
      "Telegram Stars vs Telegram Premium: qaysini tanlash kerak",
    description:
      "Stars va Premium o'rtasidagi farqlar, qaysi vaziyatda qaysi biri kerakligi va birgalikda foydalanish — to'liq taqqoslash.",
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
      "https://premiumsend.uz/maqolalar/telegram-stars-vs-telegram-premium",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Telegram Stars va Premium farqi nima?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Stars — Telegramning ichki valyutasi (2024-yildan), bot va kanallardagi xizmatlarga to'lov uchun: stikerlar, donate, AI bot funksiyalari, Premium sovg'a. Premium esa — oylik obuna (4 GB fayl, 1000 kanal, 20+ funksiya, reklamasiz tajriba). Stars — har bir xarid uchun bir marta to'lov, Premium — doimiy obuna. Ikkalasi alohida mahsulot va ko'pincha birgalikda foydalaniladi.",
        },
      },
      {
        "@type": "Question",
        name: "Stars qachon kerak?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Stars kerak bo'lgan asosiy holatlar: 1) ChatGPT, Midjourney va boshqa AI botlarga ko'proq so'rov yuborish, 2) Premium stikerlar va emoji paketlari sotib olish, 3) Yoqgan kanal yoki blogerga donate yuborish, 4) Premium kontent unlock (yopiq guruh, kurs), 5) Mini App o'yinlardagi xaridlar, 6) Bir martalik Premium sovg'a qilish. Stars 50 dan boshlab — 12 000 so'mdan StarsJoy.uz orqali.",
        },
      },
      {
        "@type": "Question",
        name: "Premium qachon kerak?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Premium kerak bo'lgan asosiy holatlar: 1) 4 GB li fayllar yuborish (oddiy 2 GB o'rniga), 2) 1000 kanal va 1000 papka cheklovini ochish (oddiy 500), 3) Animatsiyali profil rasm va premium stiker paketlari, 4) Voice-to-text avtomatik transkripsiyasi, 5) Reklamasiz tajriba, 6) Translate, profilda emoji status, premium reaksiyalar. Premium 1 oylik 59 000 so'mdan Premium Send orqali.",
        },
      },
      {
        "@type": "Question",
        name: "Stars yoki Premium — qaysi biri arzonroq?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bu noto'g'ri savol — ular har xil mahsulot. Stars bir martalik xarid (50 Stars 12 000 so'mdan), Premium oylik obuna (59 000 so'mdan). Maqsadingizga qarab solishtiring: agar bir martalik kichik xarid kerak bo'lsa (sticker, donate) — Stars arzon. Agar 4 GB fayl, 1000 kanal va premium funksiyalar 1 oy davomida kerak bo'lsa — Premium tezroq qaytaradi. Ikkalasi bir vaqtning o'zida ham foydalaniladi.",
        },
      },
      {
        "@type": "Question",
        name: "Stars bilan Premium sovg'a qilish foydalimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Texnik jihatdan ha, lekin moliyaviy jihatdan ko'pincha qimmat tushadi. 3 oylik Premium sovg'a uchun ~1000 Stars (240 000 so'm) kerak, to'g'ridan-to'g'ri Premium Send orqali so'mda esa 175 000. Farq ~37%. Stars bilan sovg'a qilish faqat alohida holatlarda mantiqiy: agar oldindan Stars bor bo'lsa va ulardan foydalanmagan bo'lsangiz, yoki AI bot funksiyalari va sovg'ani bitta paketda olishni xohlasangiz.",
        },
      },
      {
        "@type": "Question",
        name: "Stars muddati tugaydimi, Premium kabimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yo'q. Stars akkauntda muddatsiz turadi — sotib olganingizdan keyin balansda istalgan paytgacha qoladi. Foydalanmagan Stars yo'qolmaydi (lekin so'mga qaytarib olib bo'lmaydi). Premium esa — muddatli obuna: 1, 3, 6 yoki 12 oydan keyin tugaydi va qayta to'lash kerak. Bu asosiy mexanik farq.",
        },
      },
      {
        "@type": "Question",
        name: "Stars ham, Premium ham birga sotib olish foydalimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha, agar har ikkalasi alohida ehtiyojlaringizga mos kelsa. Premium siz uchun — har kuni: katta fayllar, ko'p kanal, premium stikerlar. Stars siz uchun — vaqti-vaqti bilan: AI bot funksiyalari, kanal mualliflariga donate, mini app xaridlar. Ikkalasi bir-biriga ta'sir qilmaydi. Hatto ko'pincha Premium foydalanuvchi Stars'ni bir oyda 100-500 atrofida ishlatadi.",
        },
      },
      {
        "@type": "Question",
        name: "Stars va Premium qaysi joylarda sotib olinadi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O'zbekistonda mahalliy karta va so'mda: Stars — StarsJoy.uz orqali (@starsjoybot), 50 Stars 12 000 so'mdan. Premium — Premium Send orqali (@PremiumSendBot), 1 oylik 59 000 so'mdan. Ikkalasi alohida xizmatlar, ammo har biri o'z mahsulotiga ixtisoslashgan. App Store va Telegram rasmiy ilovasida ham mavjud, lekin xorijiy karta talabi va 17-30% qimmatroq.",
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
        name: "Stars vs Premium",
        item: "https://premiumsend.uz/maqolalar/telegram-stars-vs-telegram-premium",
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
          Stars vs Premium
        </span>
      </nav>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-700">
              Savol-javob
            </span>
            <time className="text-xs text-muted" dateTime="2026-05-05">
              2026-yil, 5-may
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Telegram Stars vs Telegram Premium: qaysini tanlash kerak
          </h1>

          {/* TL;DR */}
          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>Qisqacha javob:</strong> <strong>Stars</strong> — Telegramning ichki valyutasi, bot va kanallarda <strong>bir martalik xaridlar</strong> uchun (sticker, donate, AI funksiyalari, Premium sovg&apos;a). 50 Stars 12 000 so&apos;mdan, balansda muddatsiz turadi. <strong>Premium</strong> — <strong>oylik obuna</strong>: 4 GB fayl, 1000 kanal, premium funksiyalar va reklamasiz tajriba. 1 oylik 59 000 so&apos;mdan. Ular alohida mahsulot va ko&apos;pincha birgalikda foydalaniladi — biri ikkinchisini almashtirmaydi.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Telegram 2024-yildan boshlab Stars valyutasini joriy etdi. Bu yangilik foydalanuvchilarda chalkashlik tug&apos;dirdi: &quot;Stars Premium o&apos;rniga ishlatilarmi? Qaysi biri kerak? Ikkalasi ham bir vaqtning o&apos;zida kerakmi?&quot;. Aslida ular butunlay boshqa-boshqa mahsulot — har biri o&apos;z vazifasiga ega.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Ushbu maqolada: Stars va Premium o&apos;rtasidagi aniq farqlar, qachon qaysi biri kerak, narxlar taqqoslash va birgalikda foydalanish strategiyasi. Maqola oxiriga qarab, sizga qaysi mahsulot (yoki ikkalasi) mos kelishi aniq bo&apos;ladi.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 — Core difference */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Stars va Premium: asosiy farqlar
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Eng oson tushunish uchun ikkalasini boshqacha mahsulot deb ko&apos;rish kerak — masalan, &quot;telefonga balans&quot; va &quot;mobil internet paketi&quot; o&apos;rtasida. Birga ham foydalaniladi, lekin har biri o&apos;z vazifasi uchun:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Mezon</div>
                <div className="text-center">Telegram Stars</div>
                <div className="text-center">Telegram Premium</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Tur</div>
                <div className="text-center">Ichki valyuta</div>
                <div className="text-center">Oylik obuna</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">To&apos;lov modeli</div>
                <div className="text-center">Bir martalik xarid</div>
                <div className="text-center">Davriy to&apos;lov</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Muddati</div>
                <div className="text-center text-green-600">Muddatsiz</div>
                <div className="text-center">1, 3, 6, 12 oy</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Minimal narx</div>
                <div className="text-center">12 000 so&apos;m (50 Stars)</div>
                <div className="text-center">59 000 so&apos;m (1 oy)</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Asosiy maqsad</div>
                <div className="text-center">Bot va kanal xizmatlari</div>
                <div className="text-center">Akkaunt funksiyalari</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Misol foydalanish</div>
                <div className="text-center text-muted text-xs">
                  AI bot, sticker, donate
                </div>
                <div className="text-center text-muted text-xs">
                  4 GB fayl, 1000 kanal
                </div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center text-sm">
                <div className="font-medium">Joriy etilgan yili</div>
                <div className="text-center">2024</div>
                <div className="text-center">2022</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Asosiy fakt: <strong className="text-foreground">Stars Premium o&apos;rnini bosmaydi</strong>. 4 GB fayl yuklash imkoniyatini Stars bilan ololmaysiz — bu Premium funksiyasi. Va aksincha: Premium foydalanuvchisi ham AI bot funksiyalari uchun Stars sotib oladi. Ikkalasi bir-birini to&apos;ldiradi.
            </p>
          </section>

          {/* Section 2 — When Stars are needed */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Stars qachon kerak? 6 ta amaliy holat
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Stars asosiy maqsadi — bot va kanallar ekosistemasidagi mikroto&apos;lovlar. Quyidagi holatlarda aynan Stars kerak:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: "🤖 AI bot funksiyalari",
                  desc: "ChatGPT, Midjourney, Claude va boshqa AI botlar Stars bilan qo'shimcha so'rov yoki rasm generatsiyasi imkonini beradi. 50-200 Stars o'rtacha foydalanish uchun yetarli.",
                },
                {
                  title: "💎 Premium stikerlar va emoji",
                  desc: "Animatsiyali stikerlar va emoji paketlari odatda 50-200 Stars. Bir martalik xarid, akkauntda doimo qoladi.",
                },
                {
                  title: "❤️ Donate kanallarga",
                  desc: "Yoqgan kanal yoki blogerga 50, 100, 500 yoki ko'proq Stars yuborish — yangi mualliflarni qo'llab-quvvatlash usuli.",
                },
                {
                  title: "📺 Premium kontent unlock",
                  desc: "Ba'zi kanallar Stars asosida pullik kontent taklif qiladi: kurs, yopiq guruh, eksklyuziv post.",
                },
                {
                  title: "📱 Mini App xaridlar",
                  desc: "Telegram Mini App'lar (o'yinlar, do'konlar) ichidagi xaridlarda Stars asta-sekin asosiy valyutaga aylanmoqda.",
                },
                {
                  title: "🎁 Bir martalik Premium sovg'a",
                  desc: "Stars yordamida boshqa odamga Premium sovg'a qilish mumkin. 1000-2500 Stars Premium tarifiga qarab.",
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
              <strong className="text-foreground">Stars o&apos;ziga xosligi:</strong> har bir xarid alohida — siz aniq miqdorni faqat kerakli funksiya uchun ishlatasiz. Stars muddati tugamaydi, lekin foydalanmagan qoldiqni qaytarib so&apos;mga aylantirib bo&apos;lmaydi.
            </p>
            <p className="text-muted leading-relaxed mt-3">
              <Link
                href="/maqolalar/telegram-stars-ozbekistondan-sotib-olish"
                className="text-primary font-semibold hover:underline"
              >
                Stars sotib olish bo&apos;yicha to&apos;liq qo&apos;llanma
              </Link>
              {" "}— qadamma-qadam, narxlar va xavfsizlik haqida.
            </p>
          </section>

          {/* Section 3 — When Premium is needed */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Premium qachon kerak? 6 ta asosiy funksiya
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Premium — Telegram akkauntning kengaytirilgan rejimi. Quyidagi funksiyalar faqat Premium obunada mavjud:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: "📁 4 GB fayl yuklash",
                  desc: "Oddiy akkauntda 2 GB chegarasi. Premium bilan har bir fayl 4 GB gacha — to'liq filmlar, katta arxivlar, raw video fayllar.",
                },
                {
                  title: "📚 1000 ta kanal va papka",
                  desc: "Oddiy akkauntda 500 ta kanal cheklovi. Premium 2x ko'paytiradi — biznes, ish va shaxsiy kanallarni alohida tartibda saqlash uchun.",
                },
                {
                  title: "🎨 Premium stiker va animatsiyali emoji",
                  desc: "Faqat Premium foydalanuvchilari uchun maxsus animatsiyali stiker paketlari va premium emoji. Profil rasm ham animatsiyali bo'lishi mumkin.",
                },
                {
                  title: "🎙️ Voice-to-text avtomatik",
                  desc: "Voice yoki video xabarni avtomatik matnga aylantirish. Suhbatlar uzun bo'lsa, vaqtni katta tejaydi.",
                },
                {
                  title: "🚫 Reklamasiz tajriba",
                  desc: "Public kanallar pastida reklamalar ko'rinmaydi. Tinch o'qish va to'liq e'tibor.",
                },
                {
                  title: "✨ Boshqa premium funksiyalar",
                  desc: "Profilda emoji status, yashirin badge, premium reaksiyalar, guruhda qaysi javob qo'shilganligini ko'rish, Translate va boshqa 15+ funksiya.",
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
              <strong className="text-foreground">Premium o&apos;ziga xosligi:</strong> doimiy funksiyalar majmuasi. Obuna davomida sizga har kuni xizmat qiladi — fayl yuklasangiz, kanal o&apos;qisangiz yoki suhbat qilsangiz.
            </p>
            <p className="text-muted leading-relaxed mt-3">
              <Link
                href="/maqolalar/telegram-premium-vs-oddiy-telegram"
                className="text-primary font-semibold hover:underline"
              >
                Premium va oddiy Telegram o&apos;rtasidagi 15 ta farq
              </Link>
              {" "}— alohida maqolada batafsil yoritilgan.
            </p>
          </section>

          {/* Mid CTA — dual */}
          <section>
            <div className="bg-section-alt rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-bold text-foreground mb-4 text-center">
                Sizga aynan nima kerak?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-5 border border-card-border">
                  <h4 className="font-bold text-foreground mb-2">
                    AI bot, sticker, donate?
                  </h4>
                  <p className="text-sm text-muted mb-3">
                    Stars kerak. 50 Stars 12 000 so&apos;mdan,{" "}
                    <strong>StarsJoy.uz</strong> orqali so&apos;mda.
                  </p>
                  <Link
                    href="https://telegram.me/starsjoybot"
                    target="_blank"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:shadow-lg transition-all"
                  >
                    @starsjoybot →
                  </Link>
                </div>
                <div className="bg-white rounded-xl p-5 border border-card-border">
                  <h4 className="font-bold text-foreground mb-2">
                    4 GB fayl, 1000 kanal, premium funksiyalar?
                  </h4>
                  <p className="text-sm text-muted mb-3">
                    Premium kerak. 1 oylik 59 000 so&apos;mdan,{" "}
                    <strong>Premium Send</strong> orqali so&apos;mda.
                  </p>
                  <Link
                    href="https://telegram.me/premiumsendbot"
                    target="_blank"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:shadow-lg transition-all"
                  >
                    @PremiumSendBot →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 — Price comparison */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Narxlar taqqoslash — qaysi biri arzon?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Bu noto&apos;g&apos;ri savol, chunki ular har xil mahsulot. Lekin foydalanuvchilarga ko&apos;pincha taqqoslash kerak bo&apos;ladi — quyidagi jadvalda har birining narx tartibini ko&apos;ring:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Mahsulot</div>
                <div className="text-center">Minimal narx</div>
                <div className="text-center">Foydali kim uchun</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">50 Stars</div>
                <div className="text-center">12 000 so&apos;m</div>
                <div className="text-center text-muted text-xs">
                  AI sinab ko&apos;rish, sticker
                </div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">100 Stars</div>
                <div className="text-center">24 000 so&apos;m</div>
                <div className="text-center text-muted text-xs">
                  Kichik donate, premium emoji
                </div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">500 Stars</div>
                <div className="text-center">120 000 so&apos;m</div>
                <div className="text-center text-muted text-xs">
                  AI bot 1-2 oy, donate
                </div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm bg-primary-light/20">
                <div className="font-bold text-primary">Premium 1 oy</div>
                <div className="text-center font-bold text-primary">
                  59 000 so&apos;m
                </div>
                <div className="text-center text-muted text-xs">
                  Sinab ko&apos;rish uchun
                </div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Premium 3 oy</div>
                <div className="text-center">175 000 so&apos;m</div>
                <div className="text-center text-muted text-xs">
                  Mavsumiy ehtiyoj
                </div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Premium 6 oy</div>
                <div className="text-center">235 000 so&apos;m</div>
                <div className="text-center text-muted text-xs">
                  Yarim yillik foydalanish
                </div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center text-sm bg-primary-light/20">
                <div className="font-bold text-primary">Premium 12 oy ⭐</div>
                <div className="text-center font-bold text-primary">
                  425 000 so&apos;m
                </div>
                <div className="text-center text-muted text-xs">
                  Eng tejamkor (35 417/oy)
                </div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Eslatma:</strong> Stars 240 so&apos;m/star linear narxda. App Store va Play Market'da Stars ham, Premium ham 17-30% qimmatroq turadi. Mahalliy karta yo&apos;q va kurs riski bor.
            </p>
            <p className="text-muted leading-relaxed">
              Real misol: agar siz Premium foydalanuvchi bo&apos;lsangiz va oyiga 200 Stars (AI funksiyalari uchun) ham sotib olsangiz, oylik xarajat 35 417 + 48 000 = ~83 417 so&apos;m. Premium 12 oylik narxda 12 oyda jami ~1 000 000 so&apos;m. Bu Premium + Stars to&apos;liq paketning haqiqiy hajmi.
            </p>
          </section>

          {/* Section 5 — Together strategy */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Stars ham, Premium ham birga foydalanish strategiyasi
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Aksariyat faol Telegram foydalanuvchilari ikkala mahsulotni ham ishlatadi. Bunda har biri o&apos;z vazifasini bajaradi:
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  📅 Premium — kunlik foydalanish
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Har kuni 4 GB fayl yuklash, 1000 kanalni ochish, premium funksiyalardan foydalanish. 12 oylik tarif eng tejamkor — oyiga 35 417 so&apos;m.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  🎯 Stars — vaqti-vaqti bilan foydalanish
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Konkret zaruriyat tug&apos;ilganda: AI bot uchun 100 Stars, donate uchun 50 Stars, premium sticker paketi uchun 200 Stars. Bir oyda o&apos;rtacha foydalanuvchi 100-500 Stars ishlatadi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  🔄 Bir-biriga ta&apos;sir qilmaydi
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Premium muddati Stars balansiga ta&apos;sir qilmaydi va aksincha. Premium tugab qolsa, sotib olingan Stars akkauntda qoladi va keyingi xaridlarda foydalanish mumkin.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">
                  💡 Strategik xarid
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Avval Premium 1 oylik (59 000 so&apos;m) — sinash uchun. Mos kelsa, 6 yoki 12 oylikga o&apos;tasiz. Stars'ni alohida — kerak bo&apos;lganda. Bu eng oqilona moliyaviy yo&apos;l.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              <Link
                href="/maqolalar/telegram-premium-narxlari"
                className="text-primary font-semibold hover:underline"
              >
                Premium narxlari taqqoslash maqolasi
              </Link>
              {" "}— qaysi tarif sizga arzon, batafsil hisob bilan.
            </p>
          </section>

          {/* Section 6 — Where to buy */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Qayerdan sotib olish kerak — O&apos;zbekistondan
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              O&apos;zbekistondan har ikkalasini ham mahalliy karta va so&apos;mda sotib olish mumkin. Asosiy kanallar — alohida xizmatlar, har biri o&apos;z mahsulotiga ixtisoslashgan:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  ⭐ Stars sotib olish
                </h3>
                <p className="text-sm text-muted mb-2">
                  <strong>Xizmat:</strong> StarsJoy.uz
                </p>
                <p className="text-sm text-muted mb-2">
                  <strong>Bot:</strong> @starsjoybot
                </p>
                <p className="text-sm text-muted mb-2">
                  <strong>Narx:</strong> 50 Stars 12 000 so&apos;mdan
                </p>
                <p className="text-sm text-muted mb-3">
                  <strong>To&apos;lov:</strong> Click va karta orqali
                </p>
                <Link
                  href="https://telegram.me/starsjoybot"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary-light text-primary text-sm font-bold rounded-lg hover:shadow-lg transition-all"
                >
                  Botni ochish →
                </Link>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  💎 Premium sotib olish
                </h3>
                <p className="text-sm text-muted mb-2">
                  <strong>Xizmat:</strong> Premium Send
                </p>
                <p className="text-sm text-muted mb-2">
                  <strong>Bot:</strong> @PremiumSendBot
                </p>
                <p className="text-sm text-muted mb-2">
                  <strong>Narx:</strong> 1 oylik 59 000 so&apos;mdan
                </p>
                <p className="text-sm text-muted mb-3">
                  <strong>To&apos;lov:</strong> Click, Payme, Uzcard, Humo
                </p>
                <Link
                  href="https://telegram.me/premiumsendbot"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary-light text-primary text-sm font-bold rounded-lg hover:shadow-lg transition-all"
                >
                  Botni ochish →
                </Link>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">App Store/Play Market</strong> — alternativ, lekin xorijiy karta talab qiladi va 17-30% qimmatroq. Telegram rasmiy ilovasida ham sotib olish mumkin, ammo mahalliy karta ishlamaydi. Mahalliy reseller'lar O&apos;zbekiston sharoitida eng oqilona variant.
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
                  q: "Stars Premium o'rnini bosadimi?",
                  a: "Yo'q. Stars — bot va kanallar uchun ichki valyuta, Premium — akkauntning kengaytirilgan rejimi. 4 GB fayl, 1000 kanal va premium funksiyalarni Stars bilan ololmaysiz — bu Premium funksiyalari.",
                },
                {
                  q: "Stars yoki Premium qaysi biri arzonroq?",
                  a: "Bu noto'g'ri savol — ular har xil mahsulot. Stars 50 dan boshlab 12 000 so'mdan (bir martalik). Premium 59 000 so'mdan (oylik). Maqsadingizga qarab tanlang — yoki ikkalasini ham birga oling.",
                },
                {
                  q: "Stars muddati tugaydimi?",
                  a: "Yo'q. Stars akkauntda muddatsiz turadi. Sotib olganingizdan keyin balansda istalgan paytgacha qoladi. Foydalanmagan Stars'ni so'mga qaytarib bo'lmaydi, lekin yo'qolmaydi.",
                },
                {
                  q: "Premium bilan Stars avtomatik beriladimi?",
                  a: "Yo'q. Premium obuna alohida — Stars ham alohida sotib olinadi. Lekin Premium foydalanuvchilari ba'zi premium reaksiyalar va emojidan bepul foydalana oladi (Stars sotib olmasdan ham).",
                },
                {
                  q: "Stars bilan Premium sovg'a qilish foydalimi?",
                  a: "Texnik jihatdan ha, lekin moliyaviy jihatdan qimmat. 3 oylik Premium gift uchun ~1000 Stars (240 000 so'm), to'g'ridan-to'g'ri 175 000 so'm. Stars bilan sovg'a faqat alohida holatlarda mantiqiy.",
                },
                {
                  q: "Birinchi marta sinash uchun qaysidan boshlash kerak?",
                  a: "Aniq ehtiyojga qarab. AI bot funksiyasi uchun — 50 Stars (12 000). 4 GB fayl, ko'p kanal — Premium 1 oylik (59 000). Aniq nima kerakligini bilmasangiz, Premium 1 oylik bilan boshlash umumiy maslahat.",
                },
                {
                  q: "Stars akkaunt o'zgarsa qoladimi?",
                  a: "Stars Telegram akkauntiga bog'langan. Akkaunt o'zgartirilsa (telefon raqami) Stars o'sha akkaunt bilan birga qoladi. Premium ham xuddi shunday — akkauntga bog'langan.",
                },
                {
                  q: "Qaysi joyda sotib olish arzonroq — Premium yoki Stars uchun?",
                  a: "O'zbekistondan ikkalasi uchun ham mahalliy reseller'lar arzon: Stars uchun StarsJoy.uz (240 so'm/star), Premium uchun Premium Send (1 oylik 59 000 so'm). App Store va Telegram rasmiy ilovasi — 17-30% qimmatroq, plus xorijiy karta talabi.",
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

          {/* Quick decision block */}
          <section>
            <div className="bg-section-alt rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-bold text-foreground mb-4 text-center">
                30 soniyada qaror — sizga nima kerak?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary mb-2">
                    Stars
                  </p>
                  <p className="text-sm text-muted">
                    AI bot, sticker, donate, mini app, bir martalik xarid uchun
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary mb-2">
                    Premium
                  </p>
                  <p className="text-sm text-muted">
                    4 GB fayl, ko&apos;p kanal, premium funksiyalar, kunlik foydalanish uchun
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
                    href="/maqolalar/telegram-stars-ozbekistondan-sotib-olish"
                    className="text-primary font-semibold hover:underline"
                  >
                    Stars O&apos;zbekistondan qanday sotib olinadi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/maqolalar/telegram-premium-vs-oddiy-telegram"
                    className="text-primary font-semibold hover:underline"
                  >
                    Premium vs oddiy Telegram: 15 ta farq
                  </Link>
                </li>
                <li>
                  <Link
                    href="/maqolalar/telegram-premium-narxlari"
                    className="text-primary font-semibold hover:underline"
                  >
                    Telegram Premium narxlari 2026: 1, 3, 6, 12 oylik tariflar
                  </Link>
                </li>
                <li>
                  <Link
                    href="/maqolalar/telegram-premium-nima"
                    className="text-primary font-semibold hover:underline"
                  >
                    Telegram Premium nima va imkoniyatlari
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          {/* Conclusion - Dual CTA */}
          <section>
            <div className="hero-gradient rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-5 left-5 w-32 h-32 bg-white rounded-full blur-2xl" />
              </div>
              <div className="relative">
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  Stars va Premium — ikkala mahsulot ham O&apos;zbekistondan so&apos;mda mahalliy karta orqali olinadi. Sizga aynan nima kerakligini aniqlang va to&apos;g&apos;ri kanaldan boshlang.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="https://telegram.me/starsjoybot"
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all"
                  >
                    ⭐ Stars — @starsjoybot
                  </Link>
                  <Link
                    href="https://telegram.me/premiumsendbot"
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all"
                  >
                    💎 Premium — @PremiumSendBot
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
