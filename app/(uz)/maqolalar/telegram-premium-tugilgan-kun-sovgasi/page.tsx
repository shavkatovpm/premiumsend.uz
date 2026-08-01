import type { Metadata } from "next";
import Link from "next/link";
import { ogBaseUz } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title:
    "Telegram Premium tug'ilgan kun sovg'asi — 3, 6, 12 oylik tariflar",
  description:
    "Tug'ilgan kunga zamonaviy sovg'a: Telegram Premium. 3 oylik 175 000, 6 oylik 235 000, 12 oylik 425 000 so'm. Sovg'ani anonim yuboring va alohida xabar yozing — Uzcard, Humo, Click, Payme orqali so'mda.",
  keywords: [
    "telegram premium tug'ilgan kun sovg'a",
    "tug'ilgan kun premium sovg'a",
    "telegram premium sovg'a qilish",
    "tug'ilgan kun zamonaviy sovg'a",
    "telegram premium gift",
    "premium sovg'a uzbekistan",
    "PremiumSendBot",
    "tug'ilgan kunga sovg'a g'oyalari",
    "yaqinlarga sovg'a",
    "telegram premium hadya",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/maqolalar/telegram-premium-tugilgan-kun-sovgasi",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/telegram-premium-tugilgan-kun-sovgasi",
      ru: "https://premiumsend.uz/ru/maqolalar/telegram-premium-tugilgan-kun-sovgasi",
      "x-default": "https://premiumsend.uz/maqolalar/telegram-premium-tugilgan-kun-sovgasi",
    },
  },
  openGraph: {
    ...ogBaseUz,
    title:
      "Telegram Premium tug'ilgan kun sovg'asi — 3, 6, 12 oylik tariflar",
    description:
      "Tug'ilgan kunga zamonaviy sovg'a — har kuni eslatuvchi Telegram Premium. 175 000, 235 000 yoki 425 000 so'mdan, anonim yuborish va keyin alohida xabar yozish.",
    url: "https://premiumsend.uz/maqolalar/telegram-premium-tugilgan-kun-sovgasi",
    type: "article",
    publishedTime: "2026-05-19",
  },
};

export default function ArticleTugilganKunSovgasi() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    image: "https://premiumsend.uz/og-image.png",
    headline:
      "Telegram Premium tug'ilgan kun sovg'asi: 3, 6 va 12 oylik tariflar",
    description:
      "Tug'ilgan kun uchun zamonaviy va har kuni eslatuvchi sovg'a — Telegram Premium. Tariflar, sovg'ani yuborish jarayoni, kim yuborganini ko'rsatish bo'yicha aniq qo'llanma.",
    datePublished: "2026-05-19",
    dateModified: "2026-05-19",
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
      "https://premiumsend.uz/maqolalar/telegram-premium-tugilgan-kun-sovgasi",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Telegram Premium-ni tug'ilgan kun sovg'asi sifatida yuborish mumkinmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha. PremiumSend (@PremiumSendBot) orqali Telegram Premium-ni sovg'a sifatida yaqiningizga yuborishingiz mumkin. 3 oylik (175 000 so'm), 6 oylik (235 000 so'm) yoki 12 oylik (425 000 so'm) tariflar mavjud. Bot'ga tug'ilgan kun egasining @username'ini kiritasiz va so'mda to'laysiz — Premium uning akkauntiga 3-5 daqiqada faollashadi.",
        },
      },
      {
        "@type": "Question",
        name: "Nima uchun 1 oylik Premium sovg'a qilib bo'lmaydi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bu Telegram'ning rasmiy qoidasi. Sovg'a (gift) sifatida faqat 3, 6 va 12 oylik tariflar yuborilishi mumkin. 1 oylik Premium o'zingiz uchun sotib olishda mavjud, lekin sovg'a sifatida emas. Bu cheklov Telegram tomonidan o'rnatilgan va har qanday yo'l (PremiumSend, App Store, Fragment) uchun amal qiladi.",
        },
      },
      {
        "@type": "Question",
        name: "Sovg'a yuborganda mening nomim ko'rinadi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PremiumSend orqali default rejimda sovg'a anonim yuboriladi — qabul qiluvchi profilida Premium belgisi paydo bo'ladi, lekin 'kim yubordi' degan yozuv ko'rinmaydi. Sovg'a Telegram rasmiy akkauntidan kelgan ko'rinadi. Yuboruvchi nomi ochiq ko'rinishi uchun Telegram'ning rasmiy gift mexanizmi kerak — bu qimmatroq narx va faqat Visa kartaga to'lov talab qiladi.",
        },
      },
      {
        "@type": "Question",
        name: "Qabul qiluvchi 'kimdan?' deb so'rasa nima qilaman?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Eng oson yo'l — Telegram orqali oddiy xabar yozish: 'Tug'ilgan kuning bilan! Senga 6 oylik Telegram Premium yubordim — profilingda paydo bo'lganini ko'rgansandir.' Bir necha so'z, lekin 100% aniqlik. Ko'pchilik bu yo'lni ishlatadi — anonim sovg'aning narxi arzon, alohida xabar esa shaxsiy ohang qo'shadi.",
        },
      },
      {
        "@type": "Question",
        name: "Tug'ilgan kun uchun qaysi tarif eng yaxshi tanlov?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Eng mashhur tanlov — 6 oylik (235 000 so'm). Bu 'sinab ko'rish' emas, balki to'liq foydalanish davrini ta'minlaydi va oylik narx (39 167 so'm) ham tejamkor. Yaqin do'st yoki oila a'zosi uchun — 12 oylik (425 000 so'm, oyiga 35 417), butun yil davomida har kuni eslatuvchi sovg'a. Birinchi marta sovg'a yuborayotgan bo'lsangiz yoki tanish-bilish uchun — 3 oylik (175 000 so'm) ham yaxshi boshlang'ich.",
        },
      },
      {
        "@type": "Question",
        name: "Sovg'a tug'ilgan kunidan oldin yoki kunida yuborilishi kerakmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tavsiya — kun ertasi yoki kuni o'zida yuborish. Premium 3-5 daqiqada faollashadi, shuning uchun oldindan tayyorlash shart emas. Aksincha, tug'ilgan kun kuni profilda 'yangi Premium belgisi paydo bo'ldi' — bu o'sha kunlik kichik quvonch. Agar yuboruvchi sifatida ko'rinishingizni xohlasangiz, sovg'ani jo'natgandan keyin Telegram'da tabriknoma xabari bilan birga ayting.",
        },
      },
      {
        "@type": "Question",
        name: "Sovg'ani qaysi kartalar bilan to'lash mumkin?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Default anonim sovg'a uchun: Uzcard, Humo, Click, Payme va Visa — barchasi so'mda. Hech qanday qo'shimcha komissiya yo'q. Yuboruvchi nomi ko'rinadigan rejim uchun esa faqat Visa kartasi kerak bo'ladi va narx qimmatroq tushadi. Mahalliy O'zbekiston foydalanuvchisi uchun default anonim rejim eng oson va arzon yo'l.",
        },
      },
      {
        "@type": "Question",
        name: "Premium tugagandan keyin qabul qiluvchi pul to'lashi kerakmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yo'q. PremiumSend'da auto-renewal (avtomatik yangilash) yo'q. Siz to'lagan muddat tugagach, Premium oddiy holatga qaytadi va qabul qiluvchining akkauntidan hech qanday pul yechilmaydi. Bu App Store yoki Google Play obunalardan tubdan farqli — qabul qiluvchi 'tug'ilgan kun sovg'asi keyin meni pulga botiradi' deb tashvishlanmaydi.",
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
        name: "Telegram Premium tug'ilgan kun sovg'asi",
        item: "https://premiumsend.uz/maqolalar/telegram-premium-tugilgan-kun-sovgasi",
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
          Tug&apos;ilgan kun sovg&apos;asi
        </span>
      </nav>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">
              Sovg&apos;a g&apos;oyalari
            </span>
            <time className="text-xs text-muted" dateTime="2026-05-19">
              2026-yil, 19-may
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Telegram Premium tug&apos;ilgan kun sovg&apos;asi — 3, 6 va 12 oylik tariflar
          </h1>

          {/* TL;DR */}
          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-sm font-bold text-primary mb-2">QISQACHA JAVOB</p>
            <p className="text-foreground leading-relaxed font-medium">
              Tug&apos;ilgan kun sovg&apos;asi sifatida Telegram Premium-ni{" "}
              <Link href="https://telegram.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>{" "}
              orqali yuboring: <strong>3 oylik 175 000</strong>,{" "}
              <strong>6 oylik 235 000</strong>, <strong>12 oylik 425 000 so&apos;m</strong>. Default sovg&apos;a anonim — Telegram nomidan keladi; yuboruvchi nomi ko&apos;rinishi kerak bo&apos;lsa, alohida tabriknoma xabari yozish kifoya. <strong>1 oylik sovg&apos;a yo&apos;q</strong> (Telegram qoidasi).
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Tug&apos;ilgan kunga sovg&apos;a tanlash har doim murakkab. Gul ikki kunda quriydi, parfum ta&apos;mga mos kelmasligi mumkin, gadjet — qimmat va shaxsiy emas. Telegram Premium esa boshqacha: u har kuni ishlaydi, hamma uchun foydali va shaxsiy sozlamalarga moslashadi.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Bu maqolada Premium-ni tug&apos;ilgan kun sovg&apos;asi sifatida qanday yuborish, qaysi tarifni tanlash, va eng asosiy — qabul qiluvchining sovg&apos;ani &quot;kimdan?&quot; degan savoliga qanday javob berish kerakligini ko&apos;rib chiqamiz.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 — Nega Premium yaxshi sovg'a */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Nima uchun Telegram Premium tug&apos;ilgan kun sovg&apos;asi sifatida tanlanadi?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Klassik sovg&apos;alar bilan qiyoslanganda Premium uch jihatdan ajralib turadi: vaqt, foydalilik va shaxsiylik. Uni gul, qutiga solingan shokolad yoki gadjet bilan taqqoslab ko&apos;ramiz:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">365 kun eslatuvchi</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Gul 2-3 kunda quriydi, tort bir necha soatda iste&apos;mol qilinadi. Premium esa 12 oylik tarifda har kuni ishlatiladi — profilda Premium belgisi, kanalda 4 GB fayl, klaviaturada premium emojilar. Har bir foydalanish — kichik eslatma.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Shaxsiy sozlamalarga moslashadi</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Premium har bir foydalanuvchi uchun o&apos;ziga xos foyda beradi: blogger uchun 4 GB video yuklash, talaba uchun ovoz xabarini matnga aylantirish, biznes uchun 1000 kanal kuzatish. Bir xil sovg&apos;a — har xil shaxsiy qiymat.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Masofaviy yuborish</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Yaqiningiz Toshkentdan tashqarida — Samarqand, Buxoro, Andijon yoki xorijiy davlatda bo&apos;lishi mumkin. Premium 3-5 daqiqada uning akkauntiga keladi, kuryer yoki yetkazib berish kerak emas.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Yo&apos;qotilmaydi, sinmaydi</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Material sovg&apos;a sinishi, yo&apos;qolishi yoki vaqt o&apos;tib eskirishi mumkin. Premium esa to&apos;la muddat davomida ishlaydi va akkauntda qoladi — hech qanday jismoniy xavf yo&apos;q.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Bu jihatlar uni shaxsiy taqdim etilmagan oddiy sovg&apos;adan ham (kupon, sertifikat) ajratib turadi. Premium foydalanuvchining kunlik tajribasiga aralashadi — bu juda kam sovg&apos;a tipida uchraydigan xususiyat.
            </p>
          </section>

          {/* Section 2 — Qaysi tarif */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              3, 6 yoki 12 oylik — qaysi tarif tug&apos;ilgan kun uchun mos?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Tarifni tanlashda asosiy mezon — qabul qiluvchi bilan munosabatingiz darajasi va qancha xarajat qilishni rejalashtirayotganingiz. Quyidagi jadval har bir tarifning kim uchun mosligini ko&apos;rsatadi:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Tarif</div>
                <div className="text-center">Narx</div>
                <div className="text-center">Oylik</div>
                <div className="text-center">Kim uchun mos</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">3 oylik</div>
                <div className="text-center font-bold">175 000 so&apos;m</div>
                <div className="text-center">58 333 so&apos;m</div>
                <div className="text-center text-muted">Tanish-bilish, hamkasb</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">6 oylik ⭐</div>
                <div className="text-center font-bold">235 000 so&apos;m</div>
                <div className="text-center text-amber-600">39 167 so&apos;m</div>
                <div className="text-center text-green-600 font-medium">Do&apos;st, opa-singil, aka-uka</div>
              </div>
              <div className="grid grid-cols-4 p-4 bg-primary-light/30 items-center text-sm">
                <div className="font-bold text-primary">12 oylik</div>
                <div className="text-center font-bold text-primary">425 000 so&apos;m</div>
                <div className="text-center font-bold text-primary">35 417 so&apos;m</div>
                <div className="text-center font-bold text-primary">Yaqin do&apos;st, oila a&apos;zosi, sevimli</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              Eng ko&apos;p tanlanadigan variant — <strong>6 oylik</strong>. Bu &quot;sinab ko&apos;rish&quot; emas, balki to&apos;liq foydalanish davri, va oylik narxda ham tejamkor. 3 oylik — agar siz qabul qiluvchini chuqur tanimasangiz yoki bu birinchi sovg&apos;ngiz bo&apos;lsa, hurmatli boshlang&apos;ich.{" "}
              <Link href="/maqolalar/12-oylik-telegram-premium-sovga-qilish" className="text-primary font-semibold hover:underline">
                12 oylik sovg&apos;a haqida batafsil
              </Link>{" "}
              alohida sahifada ko&apos;rib chiqilgan.
            </p>

            <div className="bg-section-alt rounded-xl p-5">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Maslahat:</strong> tug&apos;ilgan kun sovg&apos;asi sifatida 12 oylik &quot;haddan tashqari&quot; ko&apos;rinishi mumkin, agar siz va qabul qiluvchi orasidagi munosabat unchalik yaqin emas. Bunday holda 6 oylik — &quot;diqqatga sazovor, lekin og&apos;ir emas&quot; mukammal o&apos;rta yo&apos;l.
              </p>
            </div>
          </section>

          {/* Section 3 — 1 oylik nima uchun yo'q */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Nima uchun 1 oylik Premium sovg&apos;a sifatida mavjud emas?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Ko&apos;p odamlar &quot;eng arzon variant — 1 oylik 59 000 so&apos;mga sovg&apos;a qilish mumkinmi?&quot; deb so&apos;raydi. Javob: <strong>yo&apos;q</strong>. Bu PremiumSend qoidasi emas, bu Telegram&apos;ning rasmiy cheklovi.
            </p>

            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-4">
              <p className="text-foreground leading-relaxed">
                Telegram gift (sovg&apos;a) mexanizmida faqat <strong>3, 6 va 12 oylik</strong> paketlar mavjud. 1 oylik tarif faqat <strong>o&apos;z akkauntingiz uchun</strong> sotib olinishi mumkin. Bu cheklov App Store, Google Play, Fragment va har qanday reseller (jumladan PremiumSend) uchun teng amal qiladi.
              </p>
            </div>

            <p className="text-muted leading-relaxed">
              Mantiqi sodda: Telegram &quot;sinab ko&apos;rish&quot; muddatini juda qisqa qilib, sovg&apos;a institutini kichraytirib qo&apos;ymaslikni xohlaydi. 3 oylik — bu yetarli vaqt, foydalanuvchi Premium imkoniyatlariga to&apos;la kirib chiqishi uchun. Shuning uchun tug&apos;ilgan kunga sovg&apos;a qilayotgan bo&apos;lsangiz — eng kichik variant <strong>3 oylik (175 000 so&apos;m)</strong>.
            </p>
          </section>

          {/* Section 4 — Asosiy: kim yuborganini ko'rsatish */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Sovg&apos;ani kim yuborgani qabul qiluvchiga ko&apos;rinadimi?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Bu eng muhim savol — chunki tug&apos;ilgan kun sovg&apos;asi shaxsiy ekanligi bilan qadrli. PremiumSend orqali sovg&apos;a yuborilganda ikki rejim mavjud, va ularning farqini bilish kerak:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Rejim</div>
                <div className="text-center">Yuboruvchi</div>
                <div className="text-center">Narx</div>
                <div className="text-center">Karta</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm bg-primary-light/30">
                <div className="font-bold text-primary">Default (anonim)</div>
                <div className="text-center text-muted">Telegram rasmiy akkaunt</div>
                <div className="text-center text-primary font-bold">Standart so&apos;mli</div>
                <div className="text-center text-green-600 font-medium">Uzcard, Humo, Click, Payme, Visa</div>
              </div>
              <div className="grid grid-cols-4 p-4 items-center text-sm">
                <div className="font-medium">Atributli</div>
                <div className="text-center text-muted">Sizning @username</div>
                <div className="text-center text-amber-600">Qimmatroq</div>
                <div className="text-center text-amber-600">Faqat Visa</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              <strong>Default rejim:</strong> sovg&apos;a Telegram rasmiy akkauntidan kelgan ko&apos;rinadi. Qabul qiluvchi profilida Premium belgisi paydo bo&apos;ladi, lekin &quot;Falonchidan&quot; deb yozilmaydi. Bu PremiumSend&apos;ning eng tezkor va arzon sovg&apos;a yuborish mexanizmi — narx so&apos;mda standart, har qanday mahalliy karta qabul qilinadi.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong>Atributli rejim:</strong> sovg&apos;a aniq sizning akkauntingizdan kelganini ko&apos;rsatish uchun Telegram&apos;ning rasmiy gift mexanizmi orqali yuborish kerak. Bu rejimda narx qimmatroq tushadi va faqat Visa kartasi qabul qilinadi — Uzcard, Humo, Click, Payme ishlamaydi.
            </p>
            <p className="text-muted leading-relaxed">
              Mahalliy O&apos;zbekiston foydalanuvchisi uchun ko&apos;p hollarda <strong>default rejim arzonroq va oson</strong>. Yuboruvchi nomi ko&apos;rinmasligi muammosi keyingi bo&apos;limdagi oddiy yo&apos;l bilan hal qilinadi.
            </p>
          </section>

          {/* Section 5 — "Mendan" deb ko'rsatish */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              &quot;Mendan tabriknoma&quot; — anonim sovg&apos;ani shaxsiy qilish yo&apos;li
            </h2>

            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Eng oddiy yechim:</strong> sovg&apos;ani default anonim rejimda yuboring (175 000 / 235 000 / 425 000 so&apos;m), keyin tug&apos;ilgan kun egasiga Telegram orqali alohida xabar yozing. Bir necha so&apos;z, lekin 100% aniqlik.
              </p>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              Misol tabriknoma xabarlar:
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Variant 1 — sodda va to&apos;g&apos;ri</h3>
                <p className="text-sm text-muted leading-relaxed italic">
                  &quot;Tug&apos;ilgan kuning bilan! Senga 6 oylik Telegram Premium yubordim — profilingda paydo bo&apos;lganini ko&apos;rgansandir 🎉&quot;
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Variant 2 — qisqa va iliq</h3>
                <p className="text-sm text-muted leading-relaxed italic">
                  &quot;Yangi yoshing muborak bo&apos;lsin! Telegram Premium senga kelganini ko&apos;rdingmi? — 12 oylik, sen uchun&quot;
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Variant 3 — uzunroq, hissiy</h3>
                <p className="text-sm text-muted leading-relaxed italic">
                  &quot;Salom! Tug&apos;ilgan kun bilan tabriklayman. Mendan kichik bir esdalik — 6 oylik Telegram Premium yubordim. Profilingda yulduzcha paydo bo&apos;lganini ko&apos;rdingmi? Yarim yil davomida har kuni eslatib turadi 😊&quot;
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Bu yondashuvning afzalligi — sovg&apos;a arzon va oson (so&apos;mda mahalliy karta orqali), tabriknoma esa shaxsiy va iliq. Atributli &quot;rasmiy yuboruvchi&quot; rejimi qimmat va texnik jihatdan murakkab — ko&apos;p hollarda kerak emas.
            </p>
          </section>

          {/* Mid CTA */}
          <section>
            <div className="bg-primary-light/40 border border-primary/20 rounded-2xl p-6 md:p-8 text-center">
              <p className="text-foreground text-lg leading-relaxed mb-4">
                Tug&apos;ilgan kun sovg&apos;asi — Telegram Premium so&apos;mda. <strong>3 oylik 175 000</strong>,{" "}
                <strong>6 oylik 235 000</strong>, <strong>12 oylik 425 000 so&apos;m</strong>. 3-5 daqiqada qabul qiluvchining akkauntiga keladi.
              </p>
              <Link
                href="https://telegram.me/premiumsendbot"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-2xl hover:shadow-xl transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                Sovg&apos;a tarifini tanlash
              </Link>
            </div>
          </section>

          {/* Section 6 — Bosqichma-bosqich */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Bosqichma-bosqich: tug&apos;ilgan kun sovg&apos;asini qanday yuborish?
            </h2>

            <p className="text-muted leading-relaxed mb-6">
              Quyidagi besh qadam — default (anonim) rejim, eng tezkor va arzon yo&apos;l. Texnik bilim talab qilmaydi:
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  step: "1",
                  title: "Qabul qiluvchining @username'ini olib qo'ying",
                  desc: "Tug'ilgan kun egasining Telegram username'i kerak (masalan, @azizbek). Username yo'q bo'lsa, undan oldindan so'rab oling yoki Telegram'da chatga kirib profilini ochib username'ini ko'rib oling. Telefon raqami emas, aynan @username kerak.",
                },
                {
                  step: "2",
                  title: "@PremiumSendBot'ni Telegram'da oching",
                  desc: "Telegram qidiruvga @PremiumSendBot deb yozing va botni oching. /start tugmasini bosing — tariflar menyusi paydo bo'ladi. Menyudan 'Sovg'a qilish' yoki 'Gift' bo'limini tanlang.",
                },
                {
                  step: "3",
                  title: "3, 6 yoki 12 oylik tarifni tanlang",
                  desc: "Tariflar so'mda ko'rsatilgan: 3 oylik 175 000, 6 oylik 235 000, 12 oylik 425 000. Tanlovingiz qabul qiluvchi bilan munosabatingiz darajasiga bog'liq. 1 oylik sovg'a yo'q — Telegram qoidasi.",
                },
                {
                  step: "4",
                  title: "Qabul qiluvchining username'ini kiriting",
                  desc: "Bot username so'raydi — aynan tug'ilgan kun egasining @username'ini yozing (o'zingiznikini emas!). Bu jihat juda muhim: noto'g'ri username kiritsangiz, Premium boshqa odamga ketadi va qaytarib olib bo'lmaydi.",
                },
                {
                  step: "5",
                  title: "So'mda to'lang — sovg'a 3-5 daqiqada faollashadi",
                  desc: "Uzcard, Humo, Click, Payme yoki Visa orqali to'lov amalga oshirasiz. Bot karta raqami va aniq summani beradi. To'lov tasdiqlangach, Premium qabul qiluvchining profilida 3-5 daqiqada paydo bo'ladi. Endi unga tabriknoma xabarini yozish kifoya.",
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
              Eng muhim xato — 4-bosqichda noto&apos;g&apos;ri username kiritish. Username yozishdan oldin uni tug&apos;ilgan kun egasining profilidan nusxa olib qo&apos;ying. Avtoto&apos;ldirishga ishonmang, harf-harf taqqoslang.
            </p>
          </section>

          {/* Section 7 — Vaqt taktikasi */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Sovg&apos;ani qachon yuborish kerak — kun oldidan yoki kunida?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Bu odatda sovg&apos;a yuborishda muammoga aylanmaydigan jihat, chunki Premium 3-5 daqiqada faollashadi. Lekin bir necha taktika foydali bo&apos;lishi mumkin:
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Tug&apos;ilgan kun ertasi yoki kuni o&apos;zida (tavsiya)</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Eng tabiiy variant — kuni o&apos;zida yuborish. Premium belgisi profilda paydo bo&apos;lishi tug&apos;ilgan kun egasi uchun aniq quvonchli daqiqa bo&apos;ladi. Tabriknoma xabarini ham aynan o&apos;sha payt yuborib qo&apos;yasiz.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Kun oldidan (kerak bo&apos;lsa)</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Agar tug&apos;ilgan kun kuni siz bandsiz yoki internetga kira olmaysiz, bir kun oldindan yuborib qo&apos;yish mumkin. Premium darhol faollashadi, lekin tabriknoma xabarini tug&apos;ilgan kun ertasiga rejalashtirgansiz uni qo&apos;lda yuborasiz.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">Surprise (kechroq) variant</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Tug&apos;ilgan kun o&apos;tib bir hafta yoki ikki kun keyin yuborish — &quot;kechirim&quot; ohangida emas, balki &quot;sen unutgan paytda yana esladim&quot; ohangida ham yaxshi ishlaydi. Ayniqsa, asosiy tabriklar oqimi tugagandan keyin alohida e&apos;tibor.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Texnik jihatdan hech qanday cheklov yo&apos;q — istalgan vaqtda yuborilishi mumkin. 3-5 daqiqali faollashish hech qachon kechikmaydi.
            </p>
          </section>

          {/* Section 8 — Boshqa Telegram sovg'alar bilan taqqoslash */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Premium vs Stars vs sticker pack — qaysi sovg&apos;a yaxshiroq?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Telegram&apos;da sovg&apos;a qilinishi mumkin bo&apos;lgan to&apos;rt tur narsa bor. Tug&apos;ilgan kun konteksti uchun har birining kuchli va zaif tomoni:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Sovg&apos;a turi</div>
                <div className="text-center">Davomiyligi</div>
                <div className="text-center">Foyda</div>
                <div className="text-center">Tug&apos;ilgan kun uchun</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm bg-primary-light/30">
                <div className="font-bold text-primary">Premium</div>
                <div className="text-center text-primary font-medium">3-12 oy</div>
                <div className="text-center text-muted">Kunlik foydalanish</div>
                <div className="text-center text-green-600 font-bold">⭐ Eng yaxshi</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Stars</div>
                <div className="text-center text-muted">Bir martalik</div>
                <div className="text-center text-muted">Bot/donate uchun</div>
                <div className="text-center text-muted">Maxsus holatlar</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Sticker pack</div>
                <div className="text-center text-muted">Doimiy</div>
                <div className="text-center text-muted">Vizual</div>
                <div className="text-center text-muted">Yumshoq ohangli</div>
              </div>
              <div className="grid grid-cols-4 p-4 items-center text-sm">
                <div className="font-medium">Custom emoji</div>
                <div className="text-center text-muted">Doimiy</div>
                <div className="text-center text-muted">Premium kerak</div>
                <div className="text-center text-muted">Premium bilan birga</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              Premium tug&apos;ilgan kun konteksti uchun eng kuchli tanlov, chunki u boshqa uchchalasi qiladigan narsani o&apos;zida birlashtiradi: doimiy foyda + vizual yutqulik (custom emoji) + bot/donate imkoniyatlari (Premium ichidagi 4 GB fayl, transkripsiya va h.k.).{" "}
              <Link href="/maqolalar/telegram-premium-4gb-fayl-kanal-guruh-limitlari" className="text-primary font-semibold hover:underline">
                Premium imkoniyatlari batafsil
              </Link>{" "}
              alohida sahifada.
            </p>

            <p className="text-muted leading-relaxed">
              Telegram Stars haqida ham qisqacha izoh:{" "}
              <Link href="/maqolalar/telegram-stars-paketlari-narxlari" className="text-primary font-semibold hover:underline">
                Stars paketlari va narxlari
              </Link>{" "}
              maqolasida bularning farqi yana batafsil keltirilgan. Tug&apos;ilgan kun uchun Stars — to&apos;g&apos;ri tanlov emas, chunki ular asosan donate yoki bot funksiyasi uchun ishlatiladi.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">
              Tez-tez so&apos;raladigan savollar (FAQ)
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Telegram Premium-ni tug'ilgan kun sovg'asi sifatida yuborish mumkinmi?",
                  a: "Ha. PremiumSend (@PremiumSendBot) orqali Telegram Premium-ni sovg'a sifatida yaqiningizga yuborishingiz mumkin. 3 oylik (175 000 so'm), 6 oylik (235 000 so'm) yoki 12 oylik (425 000 so'm) tariflar mavjud. Bot'ga tug'ilgan kun egasining @username'ini kiritasiz va so'mda to'laysiz — Premium uning akkauntiga 3-5 daqiqada faollashadi.",
                },
                {
                  q: "Nima uchun 1 oylik Premium sovg'a qilib bo'lmaydi?",
                  a: "Bu Telegram'ning rasmiy qoidasi. Sovg'a (gift) sifatida faqat 3, 6 va 12 oylik tariflar yuborilishi mumkin. 1 oylik Premium o'zingiz uchun sotib olishda mavjud, lekin sovg'a sifatida emas. Bu cheklov Telegram tomonidan o'rnatilgan va har qanday yo'l (PremiumSend, App Store, Fragment) uchun amal qiladi.",
                },
                {
                  q: "Sovg'a yuborganda mening nomim ko'rinadi?",
                  a: "PremiumSend orqali default rejimda sovg'a anonim yuboriladi — qabul qiluvchi profilida Premium belgisi paydo bo'ladi, lekin 'kim yubordi' degan yozuv ko'rinmaydi. Sovg'a Telegram rasmiy akkauntidan kelgan ko'rinadi. Yuboruvchi nomi ochiq ko'rinishi uchun Telegram'ning rasmiy gift mexanizmi kerak — bu qimmatroq narx va faqat Visa kartaga to'lov talab qiladi.",
                },
                {
                  q: "Qabul qiluvchi 'kimdan?' deb so'rasa nima qilaman?",
                  a: "Eng oson yo'l — Telegram orqali oddiy xabar yozish: 'Tug'ilgan kuning bilan! Senga 6 oylik Telegram Premium yubordim — profilingda paydo bo'lganini ko'rgansandir.' Bir necha so'z, lekin 100% aniqlik. Ko'pchilik bu yo'lni ishlatadi — anonim sovg'aning narxi arzon, alohida xabar esa shaxsiy ohang qo'shadi.",
                },
                {
                  q: "Tug'ilgan kun uchun qaysi tarif eng yaxshi tanlov?",
                  a: "Eng mashhur tanlov — 6 oylik (235 000 so'm). Bu 'sinab ko'rish' emas, balki to'liq foydalanish davrini ta'minlaydi va oylik narx (39 167 so'm) ham tejamkor. Yaqin do'st yoki oila a'zosi uchun — 12 oylik (425 000 so'm, oyiga 35 417), butun yil davomida har kuni eslatuvchi sovg'a. Birinchi marta sovg'a yuborayotgan bo'lsangiz yoki tanish-bilish uchun — 3 oylik (175 000 so'm) ham yaxshi boshlang'ich.",
                },
                {
                  q: "Sovg'a tug'ilgan kunidan oldin yoki kunida yuborilishi kerakmi?",
                  a: "Tavsiya — kun ertasi yoki kuni o'zida yuborish. Premium 3-5 daqiqada faollashadi, shuning uchun oldindan tayyorlash shart emas. Aksincha, tug'ilgan kun kuni profilda 'yangi Premium belgisi paydo bo'ldi' — bu o'sha kunlik kichik quvonch. Agar yuboruvchi sifatida ko'rinishingizni xohlasangiz, sovg'ani jo'natgandan keyin Telegram'da tabriknoma xabari bilan birga ayting.",
                },
                {
                  q: "Sovg'ani qaysi kartalar bilan to'lash mumkin?",
                  a: "Default anonim sovg'a uchun: Uzcard, Humo, Click, Payme va Visa — barchasi so'mda. Hech qanday qo'shimcha komissiya yo'q. Yuboruvchi nomi ko'rinadigan rejim uchun esa faqat Visa kartasi kerak bo'ladi va narx qimmatroq tushadi. Mahalliy O'zbekiston foydalanuvchisi uchun default anonim rejim eng oson va arzon yo'l.",
                },
                {
                  q: "Premium tugagandan keyin qabul qiluvchi pul to'lashi kerakmi?",
                  a: "Yo'q. PremiumSend'da auto-renewal (avtomatik yangilash) yo'q. Siz to'lagan muddat tugagach, Premium oddiy holatga qaytadi va qabul qiluvchining akkauntidan hech qanday pul yechilmaydi. Bu App Store yoki Google Play obunalardan tubdan farqli — qabul qiluvchi 'tug'ilgan kun sovg'asi keyin meni pulga botiradi' deb tashvishlanmaydi.",
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
                Tug&apos;ilgan kun sovg&apos;asi raqamlarda
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">365</p>
                  <p className="text-sm text-muted">Kun har kungi eslatma (12 oylik)</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">3-5</p>
                  <p className="text-sm text-muted">Daqiqada qabul qiluvchining akkauntiga</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">0</p>
                  <p className="text-sm text-muted">Yetkazib berish, sinish riski</p>
                </div>
              </div>
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
                  Tug&apos;ilgan kun sovg&apos;asi — <strong className="text-white">@PremiumSendBot</strong> orqali Telegram Premium yuboring.{" "}
                  <strong className="text-white">3 oylik 175 000</strong>,{" "}
                  <strong className="text-white">6 oylik 235 000</strong>,{" "}
                  <strong className="text-white">12 oylik 425 000 so&apos;m</strong>. Anonim yuboring va tabriknoma xabarini alohida yozing.
                </p>
                <Link
                  href="https://telegram.me/premiumsendbot"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  Tug&apos;ilgan kun sovg&apos;asini tanlash
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
