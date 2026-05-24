import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Telegram Premium O'zbekistondan sotib olish xavfsizmi? Aldovdan saqlanish",
  description:
    "Telegram Premium O'zbekistondan sotib olish xavfsizmi? Aldovchi botlarning 7 ta tipik sxemasi, ishonchli reseller'ni tanlash uchun 8 ta belgi va PremiumSend qanday ishlashi — halol qo'llanma.",
  keywords: [
    "telegram premium xavfsiz",
    "telegram premium aldov",
    "telegram premium aldovchi botlar",
    "telegram premium ishonchli sotib olish",
    "telegram premium o'zbekiston xavfsizmi",
    "premium send xavfsiz",
    "ishonchli telegram premium reseller",
    "telegram premium aldovdan saqlanish",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/maqolalar/telegram-premium-xavfsiz-aldovdan-saqlanish",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/telegram-premium-xavfsiz-aldovdan-saqlanish",
      ru: "https://premiumsend.uz/ru/maqolalar/telegram-premium-xavfsiz-aldovdan-saqlanish",
      "x-default": "https://premiumsend.uz/maqolalar/telegram-premium-xavfsiz-aldovdan-saqlanish",
    },
  },
  openGraph: {
    title:
      "Telegram Premium O'zbekistondan sotib olish xavfsizmi? Aldovdan saqlanish",
    description:
      "Aldovchi botlarning 7 ta sxemasi, ishonchli reseller belgilari, pul yo'qotmaslik uchun amaliy qo'llanma. Halol javoblar.",
    url: "https://premiumsend.uz/maqolalar/telegram-premium-xavfsiz-aldovdan-saqlanish",
    type: "article",
    publishedTime: "2026-05-05",
  },
};

export default function ArticleSafeBuy() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Telegram Premium O'zbekistondan sotib olish xavfsizmi? Aldovdan saqlanish",
    description:
      "Aldovchi botlarning 7 ta tipik sxemasi, ishonchli reseller'ni tanlashning 8 ta belgisi va xavfsiz to'lov mexanizmi — halol qo'llanma.",
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
      "https://premiumsend.uz/maqolalar/telegram-premium-xavfsiz-aldovdan-saqlanish",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Telegram Premium O'zbekistondan sotib olish xavfsizmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mahalliy reseller orqali xarid qilish texnik jihatdan xavfsiz, agar sotuvchi o'rnatilgan to'lov tizimlaridan (Click, Payme, Uzcard) foydalansa, Telegram'ning rasmiy gift mexanizmiga tayansa va karta ma'lumotlaringizni so'ramasa. Asosiy xavf — to'lov tizimida emas, sotuvchini noto'g'ri tanlashda. Quyidagi 8 ta belgi orqali ishonchli reseller'ni 30 soniyada aniqlash mumkin.",
        },
      },
      {
        "@type": "Question",
        name: "Aldovchi botlar qanday ishlaydi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "7 ta tipik sxema bor: 1) Pulni olib bot yo'qoladi, 2) Soxta to'lov sahifasi karta ma'lumotini o'g'irlaydi, 3) Telegram username sifatida @adminni o'zgartiradi, 4) \"Bepul Premium\" deb akkauntga login so'raydi, 5) Premium o'rniga 1 oylik beradi 12 oylikni va'da qilib, 6) Mavjud bo'lmagan promo kodlar va 7) Soxta \"qo'llab-quvvatlash xizmati\" qo'shimcha pul so'raydi. Asosiy himoya — rasmiy to'lov tizimi va PDF chek.",
        },
      },
      {
        "@type": "Question",
        name: "Ishonchli reseller'ni qanday taniyman?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "8 ta belgi: Click yoki Payme rasmiy ilovasi orqali to'lov, PDF chek, faqat username so'raydi (parol/SMS-kod EMAS), bot username @ bilan boshlanib o'zgarmagan, narx oldindan ko'rsatilgan va keyin o'smaydi, sayt va Telegram bot bog'langan, qo'llab-quvvatlash 30 daqiqa ichida javob beradi, oferta sahifasida pul qaytarish shartlari aniq yozilgan. Bu 8 belgidan 6 tasi bo'lsa — xavfsiz, 4 va undan kam bo'lsa — sotmang.",
        },
      },
      {
        "@type": "Question",
        name: "@PremiumSendBot rasmiy hamkormi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yo'q. PremiumSend Telegram'ning rasmiy hamkori EMAS — bu O'zbekistondagi mustaqil reseller, ya'ni Premium ni Telegram'ning rasmiy gift mexanizmi orqali sotib oladi va sizning akkauntingizga jo'natadi. Hech qanday reseller \"Telegram rasmiy hamkor\" emas — kim shunday yozsa, yolg'on. Lekin reseller bo'lish noqonuniy emas: bu xuddi do'kondan tovar olib boshqa do'konda sotish kabi.",
        },
      },
      {
        "@type": "Question",
        name: "Karta ma'lumotlarim xavfdami?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Agar to'lov Click, Payme yoki bank ilovasi orqali bo'lsa — yo'q. Karta raqami, parol va CVV faqat to'lov tizimi serverida saqlanadi. Bot ko'rmaydi. Eng muhimi: hech qanday rasmiy bot karta to'liq raqami va CVV ni to'g'ridan-to'g'ri so'ramaydi. Agar so'rasa — darhol chiqing, bu fishing.",
        },
      },
      {
        "@type": "Question",
        name: "Pulim yo'qoldi, nima qilaman?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Birinchi qadam: PDF chek raqamini saqlang. Ikkinchi: bot qo'llab-quvvatlashga chek raqami bilan murojaat qiling — texnik xato bo'lsa pul 1-3 ish kunida qaytariladi. Uchinchi: bot javob bermasa, Click yoki Payme operatoriga chek raqami orqali shikoyat yuboring — to'lov tizimi tergov qiladi. To'rtinchi: agar fishing bo'lsa, bank kartasini bloklash va politsiyaga yozma ariza berish.",
        },
      },
      {
        "@type": "Question",
        name: "App Store yoki Play Market'dan olish xavfsizroqmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Apple va Google'ning to'lov tizimi xavfsiz, lekin bu o'zbek foydalanuvchisi uchun bir nechta muammoni keltirib chiqaradi: xorijiy karta kerak, narx 30-40% qimmatroq (1 oylik App Store'da $5.99 ≈ 78 000 so'm, mahalliy reseller'da 59 000 so'm), kurs riski va valyuta operatsiyasi. Texnik xavfsizlik foiz nuqtai nazaridan rasmiy yo'l yuqoriroq, ammo xarajat va qulaylik nuqtai nazaridan mahalliy ishonchli reseller eng oqilona variant.",
        },
      },
      {
        "@type": "Question",
        name: "Hech qachon Premium olmagan bo'lsam, qaysidan boshlash kerak?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "1 oylik tarif bilan boshlang — 59 000 so'm. Reseller'ni sinash uchun eng kichik investitsiya. Texnik jihatdan to'lov, faollashish, qo'llab-quvvatlash — hammasi xuddi 6 yoki 12 oyliknikidek ishlaydi. 1 oy ichida xizmatdan rozi bo'lsangiz, keyin 6 oylik (235 000 so'm) yoki 12 oylik (425 000 so'm) tariflarga o'ting — har oyda 39 167 yoki 35 417 so'm tushadi.",
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
        name: "Telegram Premium xavfsizmi va aldovdan saqlanish",
        item: "https://premiumsend.uz/maqolalar/telegram-premium-xavfsiz-aldovdan-saqlanish",
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
          Telegram Premium xavfsizmi va aldovdan saqlanish
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
            Telegram Premium O&apos;zbekistondan sotib olish xavfsizmi? Aldovdan saqlanish
          </h1>

          {/* TL;DR */}
          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>Qisqacha javob:</strong> Mahalliy reseller orqali Premium sotib olish texnik jihatdan xavfsiz — agar to&apos;lov Click, Payme yoki bank kartasi orqali rasmiy tizimlarda kechsa, bot karta paroli va SMS-kodni so&apos;ramasa, faqat <strong>Telegram username</strong> kifoya bo&apos;lsa va PDF chek berilsa. Asosiy xavf to&apos;lov mexanizmida emas — <strong>noto&apos;g&apos;ri sotuvchini tanlashda</strong>. Pastdagi <strong>8 ta belgi</strong> orqali ishonchli reseller'ni 30 soniyada ajratish mumkin.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Telegram Premium O&apos;zbekistonda — bozor. Bir qarashda hammasi bir xil ko&apos;rinadi: bot, narx, &quot;5 daqiqada faollashadi&quot;. Lekin orasida haqiqiy reseller'lar ham, foydalanuvchi pulini o&apos;ziga olib jim ketadigan bot'lar ham bor. Farqi — qanday savol bersangiz va to&apos;lov mexanizmiga qaraganingizda bilinadi.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Maqolada aldovchi sxemalar qanday ishlashi, ishonchli reseller belgilarini va pul yo&apos;qotgan taqdirda nima qilish kerakligi yoritilgan. Bo&apos;rttirilgan hech narsa yo&apos;q — faqat texnik mexanizmlar va halol qoidalar.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 — Honest answer */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Telegram Premium O&apos;zbekistondan sotib olish xavfsizmi?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Qisqa javob: <strong className="text-foreground">ha — agar to&apos;g&apos;ri reseller'ni tanlasangiz</strong>. To&apos;liq javob — uchta nuqtaga ajraladi.
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">1. To&apos;lov mexanizmi xavfsizmi?</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Click, Payme, Uzcard P2P, Humo P2P — Markaziy bank litsenziyasidagi tizimlar, PCI DSS standartiga muvofiq. Sizning karta ma&apos;lumotlaringiz bot serveriga umuman tushmaydi — faqat to&apos;lov tizimi serverida saqlanadi. Bu mexanizm <strong>texnik jihatdan xavfsiz</strong>.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">2. Premium yetkazib berish qonuniy yo&apos;l bilan amalga oshiriladimi?</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Reseller Telegram&apos;ning <strong>rasmiy gift mexanizmi</strong> orqali siz bergan username&apos;ga Premium jo&apos;natadi. Hech qanday akkaunt parolini olish, hack qilish, mod APK ishlatish kerak emas. Bu xuddi do&apos;kondan tovar olib boshqa do&apos;konda sotish kabi mexanizm.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">3. Asosiy xavf qayerda?</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Sotuvchini tanlashda. Bozorda haqiqiy reseller'lar bilan birga aldovchi botlar ham bor. Ular pulni oladi-yu, Premium yo&apos;q yoki nokard tarif beradi. Quyida ulardan qanday ajratish 7 ta tipik sxema va 8 ta tekshiruv belgisi bilan ko&apos;rsatilgan.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Yana bir muhim halollik: <strong className="text-foreground">PremiumSend Telegram&apos;ning rasmiy hamkori EMAS</strong> — biz O&apos;zbekistondagi mustaqil reseller'lardan biriman. Hech qanday O&apos;zbekistondagi xizmat &quot;Telegram rasmiy hamkori&quot; emas. Kim shunday yozsa — birinchi yolg&apos;on belgisi.
            </p>
          </section>

          {/* Section 2 — 7 fraud schemes */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Aldovchi xizmatlar qanday ishlaydi — 7 ta tipik sxema
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Quyidagi sxemalar O&apos;zbekistonda va boshqa MDH bozorlarida bir necha yildir aniqlangan. Birortasi sodir bo&apos;lsa — darhol jarayonni to&apos;xtating va pulingizni saqlang.
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">1. &quot;To&apos;lash → bot yo&apos;q bo&apos;lish&quot;</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Eng oddiy sxema. Pulni qabul qiladi, Premium yubormaydi, keyin botni o&apos;chiradi yoki sizni bloklaydi. <strong>Belgi:</strong> 1-2 oylik bot, oferta sahifasi yo&apos;q, sayt yo&apos;q. <strong>Himoya:</strong> faqat Click/Payme orqali to&apos;lash — chek bo&apos;lsa pul qaytariladi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">2. Soxta to&apos;lov sahifasi (fishing)</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Bot Click yoki Payme'ga o&apos;xshatilgan soxta sahifaga olib boradi. Karta raqami, parol va SMS-kodni o&apos;g&apos;irlaydi, kartani bo&apos;shatadi. <strong>Belgi:</strong> URL <code>click.uz</code> emas (masalan, <code>klick-uz.com</code>), HTTPS qulfi yo&apos;q. <strong>Himoya:</strong> faqat rasmiy ilovalar (Click, Payme), brauzerda URL ni tekshiring.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">3. @admin username almashinishi</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Bot ichida &quot;qo&apos;llab-quvvatlashga yozing&quot; deb @admin yo&apos;naltiradi. @admin oddiy odam — soxta. U sizdan to&apos;g&apos;ridan-to&apos;g&apos;ri kartaga o&apos;tkazma so&apos;raydi. <strong>Belgi:</strong> bot ichidagi to&apos;lov tizimi yo&apos;q, faqat &quot;adminga yozing&quot;. <strong>Himoya:</strong> hech qachon shaxsiy admin'ga karta orqali to&apos;lamang.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">4. &quot;Bepul Premium&quot; deb akkauntga kirish so&apos;rash</h3>
                <p className="text-sm text-muted leading-relaxed">
                  &quot;1 yillik Premium bepul olish uchun login qiling&quot; — soxta sahifa Telegram login kodini so&apos;raydi. Akkaunt o&apos;g&apos;irlanadi. <strong>Belgi:</strong> &quot;bepul Premium&quot; — bunday narsa Telegram&apos;da yo&apos;q. <strong>Himoya:</strong> hech qachon Telegram login kodini hech kimga bermang, hatto &quot;Telegram qo&apos;llab-quvvatlash&quot; deganlarga ham.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">5. Va&apos;da: 12 oylik, kelgan: 1 oylik</h3>
                <p className="text-sm text-muted leading-relaxed">
                  &quot;425 000 so&apos;mga 12 oylik&quot; deb va&apos;da qiladi. To&apos;lashdan so&apos;ng 1 oylik faollashadi, qolgani &quot;keyinroq jo&apos;natamiz&quot; deyishadi. <strong>Belgi:</strong> oferta sahifasida tarif aniq yozilmagan. <strong>Himoya:</strong> Telegram profilida Premium muddatini tekshiring (Settings → Premium → muddat). Mos kelmasa — Click chek raqami orqali shikoyat.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">6. Mavjud bo&apos;lmagan promo kodlar</h3>
                <p className="text-sm text-muted leading-relaxed">
                  &quot;PROMO50 kodini kiriting va 50% chegirma oling — 30 000 so&apos;mga 1 oylik!&quot; — soxta. To&apos;laysiz, lekin bu &quot;maxsus tarif&quot; (yo&apos;q narsa) keyinroq tushuntirib reddetadi. <strong>Belgi:</strong> haqiqiy chegirma o&apos;zbek bozorida 1 oylikdan past bo&apos;lmaydi. <strong>Himoya:</strong> shubhali narxdan qoching — narx tabiiy chegaradan past bo&apos;lsa, biror nima yashirin.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">7. Soxta &quot;qo&apos;llab-quvvatlash&quot; qo&apos;shimcha to&apos;lov so&apos;raydi</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Premium kelmadi deb murojaat qilasiz, &quot;qo&apos;llab-quvvatlash&quot; deganlar &quot;texnik komissiya 50 000 so&apos;m to&apos;lasangiz, hozir hal qilamiz&quot; deyishadi. Yangi to&apos;lov olib, yana yo&apos;qoladi. <strong>Belgi:</strong> haqiqiy reseller hech qachon &quot;komissiya&quot; uchun qo&apos;shimcha pul olmaydi. <strong>Himoya:</strong> bunday talab paydo bo&apos;lsa — bevosita Click/Payme operatoriga shikoyat qiling.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Bu 7 sxemaning hammasini yagona tamoyil bilan oldini olish mumkin: <strong className="text-foreground">faqat rasmiy to&apos;lov tizimi orqali, faqat PDF chek bilan, faqat oferta sahifasi mavjud bo&apos;lgan reseller'dan.</strong>
            </p>
          </section>

          {/* Section 3 — 8 trust signals */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Ishonchli Telegram Premium reseller'ni qanday taniyman? 8 ta belgi
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Quyidagi 8 ta belgini reseller bilan birinchi muloqotda 1-2 daqiqada tekshirish mumkin. <strong>6 va undan ko&apos;p belgi mos kelsa</strong> — xavfsiz. <strong>4 va undan kam bo&apos;lsa</strong> — boshqa joydan qidiring.
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-12 bg-section-alt p-4 font-bold text-sm">
                <div className="col-span-1">#</div>
                <div className="col-span-5">Belgi</div>
                <div className="col-span-6">Qanday tekshiriladi</div>
              </div>
              {[
                {
                  n: "1",
                  signal: "Bot karta raqami va aniq summa ko'rsatadi",
                  check: "Siz Click, Payme yoki bank ilovasi orqali shu kartaga to'g'ridan-to'g'ri o'tkazasiz. Hech qanday qo'shimcha 'to'lov sahifasi' yoki shubhali link yo'q",
                },
                {
                  n: "2",
                  signal: "PDF chek beriladi",
                  check: "To'lovdan keyin Click/Payme PDF chek beradi. Bot ham chek raqamini xabarda saqlaydi",
                },
                {
                  n: "3",
                  signal: "Faqat @username so'raydi (parol/SMS EMAS)",
                  check: "Reseller Premium uchun faqat sizning Telegram @username'ingizni so'raydi. Parol, SMS-kod, login — kerak emas",
                },
                {
                  n: "4",
                  signal: "Bot username @ bilan boshlanib o'zgarmagan",
                  check: "Bot 1 yildan ortiq mavjudligi, oxirgi 6 oyda username o'zgartirilmagani — Telegram'da botning ism tarixi ko'rinadi",
                },
                {
                  n: "5",
                  signal: "Narx oldindan ko'rsatilgan, keyin o'smaydi",
                  check: "Tarif menyusida narx aniq raqamda. To'lov vaqtida 'qo'shimcha komissiya', 'maxsus to'lov' paydo bo'lmaydi",
                },
                {
                  n: "6",
                  signal: "Sayt va Telegram bot bog'langan",
                  check: "Saytda bot havolasi bor, botda sayt havolasi bor. Domen mavjud va HTTPS bilan ishlaydi",
                },
                {
                  n: "7",
                  signal: "Qo'llab-quvvatlash 30 daqiqa ichida javob",
                  check: "Birinchi savolingizga aniq javob keladi. Avtomatik shablon emas, mavzu bo'yicha aniq javob",
                },
                {
                  n: "8",
                  signal: "Oferta sahifasida pul qaytarish shartlari",
                  check: "/oferta sahifasida pul qaytarish qaysi hollarda mumkinligi aniq yozilgan. Bu hujjat huquqiy asos",
                },
              ].map((row) => (
                <div
                  key={row.n}
                  className="grid grid-cols-12 p-4 border-b border-card-border items-start text-sm"
                >
                  <div className="col-span-1 font-bold text-primary">{row.n}</div>
                  <div className="col-span-5 font-semibold text-foreground">
                    {row.signal}
                  </div>
                  <div className="col-span-6 text-muted">{row.check}</div>
                </div>
              ))}
            </div>

            <div className="bg-section-alt rounded-xl p-5 mb-4">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Tezkor test:</strong> Reseller'ga shu savolni yozing — <em>&quot;Qaysi to&apos;lov tizimi va PDF chek beriladi?&quot;</em>. Aniq javob (Click/Payme + PDF) kelmasa, savolni qaytarib bersa yoki adminga yo&apos;naltirsa — bu allaqachon yomon belgi.
              </p>
            </div>

            <p className="text-muted leading-relaxed">
              <Link
                href="/oferta"
                className="text-primary font-semibold hover:underline"
              >
                PremiumSend oferta sahifasi
              </Link>
              {" "}— pul qaytarish shartlari, javobgarlik chegaralari va aloqa ma&apos;lumotlari aniq yozilgan. Bu sahifa har qanday reseller uchun majburiy va haqiqiyligi belgisi.
            </p>
          </section>

          {/* Mid CTA */}
          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Yuqoridagi 8 belgini ko&apos;rib chiqgansiz.{" "}
                <strong className="text-white">@PremiumSendBot</strong>{" "}
                — Click va Payme bilan, PDF chek bilan, faqat username so&apos;raydi. 1 oylik 59 000, 3 oylik 175 000, 6 oylik 235 000, 12 oylik 425 000 so&apos;m.
              </p>
              <Link
                href="https://t.me/premiumsendbot"
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
                Premium Send botini ochish
              </Link>
            </div>
          </section>

          {/* Section 4 — Technical safety */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Karta ma&apos;lumotlarim qayerga boradi? Texnik xavfsizlik
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Bu eng ko&apos;p tashvish keltiradigan savol. Mexanizm aslida quyidagicha ishlaydi:
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  step: "1",
                  title: "Bot karta raqami va aniq summani beradi",
                  desc: "Bot tarif asosida karta raqami va aynan to'lov summasini ekranda ko'rsatadi. Bot hech qanday karta ma'lumotini ko'rmaydi va so'ramaydi.",
                },
                {
                  step: "2",
                  title: "Click/Payme/bank ilovasi orqali kartaga o'tkazasiz",
                  desc: "Siz istalgan ilovadan (Click, Payme, Uzcard, Humo, bank ilovasi) bot ko'rsatgan kartaga o'sha summani P2P o'tkazasiz. Karta ma'lumotlari faqat to'lov tizimi serverida saqlanadi, PCI DSS standartiga muvofiq shifrlangan.",
                },
                {
                  step: "3",
                  title: "Tizim kartaga tushgan summani avtomatik aniqlaydi",
                  desc: "To'lov tasdiqlangach tizim kartaga tushgan summani aniqlaydi (karta va aynan ko'rsatilgan summa kombinatsiyasi orqali). Bot karta raqamingizni yoki shaxsiy ma'lumotlaringizni ko'rmaydi.",
                },
                {
                  step: "4",
                  title: "Bot Premium ni siz bergan username'ga jo'natadi",
                  desc: "Telegram'ning rasmiy gift mexanizmi orqali Premium akkauntga ulanadi. Sizning akkauntingizga login qilish kerak emas — Telegram'ning ichki sistemasi ishini bajaradi.",
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

            <div className="bg-section-alt rounded-xl p-5">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Asosiy fakt:</strong> rasmiy bot hech qachon kartangiz <strong>to&apos;liq raqamini, parolni yoki CVV ni</strong> to&apos;g&apos;ridan-to&apos;g&apos;ri so&apos;ramaydi. Agar so&apos;rasa — chiqing, kartangizni darhol bloklang. Bu fishing.
              </p>
            </div>
          </section>

          {/* Section 5 — App Store comparison */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              App Store yoki Play Market'dan olish &quot;rasmiyroq&quot; va xavfsizroqmi?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Apple va Google&apos;ning to&apos;lov tizimi xalqaro miqyosda eng xavfsizlardan biri — bu haqiqat. Lekin o&apos;zbek foydalanuvchisi uchun ular bir nechta amaliy muammoni keltirib chiqaradi:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Mezon</div>
                <div className="text-center">App Store / Play Market</div>
                <div className="text-center">Mahalliy ishonchli reseller</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Texnik xavfsizlik</div>
                <div className="text-center text-green-600">Yuqori (Apple/Google)</div>
                <div className="text-center text-green-600">Yuqori (Click/Payme)</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Karta talabi</div>
                <div className="text-center text-red-600">Xorijiy karta (Visa/MC)</div>
                <div className="text-center text-green-600">Mahalliy (Uzcard/Humo)</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">1 oylik narx</div>
                <div className="text-center text-red-600">~78 000 so&apos;m ($5.99)</div>
                <div className="text-center text-green-600 font-bold">59 000 so&apos;m</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Kurs riski</div>
                <div className="text-center text-red-600">Bor (USD volatil)</div>
                <div className="text-center text-green-600">Yo&apos;q (so&apos;mda)</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">3 va 6 oylik tariflar</div>
                <div className="text-center text-red-600">Yo&apos;q</div>
                <div className="text-center text-green-600">Bor</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center text-sm">
                <div className="font-medium">Qo&apos;llab-quvvatlash o&apos;zbek tilida</div>
                <div className="text-center text-red-600">Yo&apos;q</div>
                <div className="text-center text-green-600">Bor</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Xulosa:</strong> agar sizda Visa/Mastercard yoki xorijdan to&apos;lashga imkoniyat bor bo&apos;lsa — Apple/Google rasmiy yo&apos;li texnik darajada eng xavfsizidir. Lekin xarajat va qulaylik nuqtai nazaridan mahalliy ishonchli reseller (yuqoridagi 8 belgi bilan tasdiqlangan) — eng oqilona variant. Texnik xavfsizlik darajasi deyarli teng, narx esa 25-30% pastroq.
            </p>
            <p className="text-muted leading-relaxed">
              <Link
                href="/maqolalar/telegram-premium-eng-arzon-qayerdan-sotib-olish"
                className="text-primary font-semibold hover:underline"
              >
                App Store, Fragment va mahalliy reseller'lar narxlari taqqoslangan alohida maqola
              </Link>{" "}
              ham mavjud — u yerda har bir kanal narxi va qulayligi raqamlarda.
            </p>
          </section>

          {/* Section 6 — What if you got scammed */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Pulim ketdi va Premium kelmadi — nima qilish kerak?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Vaziyat ikki xil bo&apos;lishi mumkin: <strong>(a)</strong> haqiqiy reseller'da texnik xato bor — bu odatdagi holat va 1-3 ish kunida hal bo&apos;ladi, <strong>(b)</strong> aldovchi sotuvchi bo&apos;lgan — bu fishing va boshqacha tartib. Quyida ketma-ketlik:
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">1-qadam: PDF chek raqamini saqlang</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Click yoki Payme to&apos;lovdan keyin avtomatik PDF chek beradi. Bunda chek raqami, sana, summa, qabul qiluvchi yozilgan. <strong>Bu eng asosiy hujjat</strong> — barcha keyingi qadamlar shu raqam atrofida.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">2-qadam: Botning qo&apos;llab-quvvatlashga yozing</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Bot ichida &quot;Qo&apos;llab-quvvatlash&quot; tugmasi bor. Chek raqami va to&apos;lov sanasi bilan murojaat qiling. <strong>Haqiqiy reseller</strong> 30 daqiqa-bir necha soat ichida javob beradi: yo Premium ni qo&apos;lda yoqadi, yo pulni 1-3 ish kunida qaytaradi. <strong>Aldovchi bot</strong> javob bermaydi yoki sizdan yangi to&apos;lov so&apos;raydi — bu 7-sxema (yuqorida).
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">3-qadam: Click yoki Payme operatoriga shikoyat</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Bot 24 soat ichida javob bermasa yoki muammoni hal qilmasa — Click/Payme ilovasidagi &quot;Tarix&quot; bo&apos;limida to&apos;lov ustiga bosing va &quot;Shikoyat&quot; ni tanlang. Chek raqami avtomatik biriktiriladi. Operator tergov qiladi, qabul qiluvchini tekshiradi va imkon bo&apos;lsa pulni qaytaradi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">4-qadam: Karta o&apos;g&apos;irlangan deb gumon qilsangiz — bankga</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Agar fishing sahifaga karta to&apos;liq raqamini va CVV ni kiritgan bo&apos;lsangiz — darhol bankka qo&apos;ng&apos;iroq qilib kartani <strong>bloklang</strong>. Yangi karta yarating. Eski karta bilan bog&apos;langan obunalarni o&apos;tkazing.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">5-qadam: Politsiyaga yozma ariza (katta summalarda)</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Yo&apos;qotilgan summa katta bo&apos;lsa (masalan 425 000 so&apos;m va undan ortiq), tuman politsiyasiga arizani yozing. Chek, to&apos;lov tarixi va bot bilan suhbat ekran tasviri kerak. Kiberjinoyatchilik bo&apos;limi bor, ular fishing bo&apos;tlari bilan ishlaydi.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Eng yaxshi himoya — <strong>yumshoq sinov</strong>: birinchi marta yangi reseller'dan 1 oylik 59 000 so&apos;m bilan boshlang. Hammasi to&apos;g&apos;ri ishlasa, keyin katta tarifga o&apos;ting. Bu standart amaliyot — har qanday reseller bunga e&apos;tirof bilan qaraydi.
            </p>
          </section>

          {/* Section 7 — How PremiumSend works */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              PremiumSend qanday ishlaydi va nimaga ishonish mumkin?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Yuqoridagi 8 ta belgi — universal, har qanday reseller'ga taalluqli. PremiumSend ham xuddi shu mezonlarga muvofiq qurilgan:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: "Faqat rasmiy to'lov tizimlari orqali",
                  desc: "Bot karta raqami va summani ko'rsatadi, siz Click, Payme, Uzcard yoki Humo orqali shu kartaga to'lov o'tkazasiz. Karta ma'lumotlari bot serveriga umuman tushmaydi.",
                },
                {
                  title: "PDF chek har to'lovda",
                  desc: "Click yoki Payme to'lov tugaganida PDF chek beradi. Bu hujjat istalgan paytda qayta yuklanishi mumkin.",
                },
                {
                  title: "Faqat @username so'raladi",
                  desc: "Premium yoqish uchun faqat sizning yoki sovg'a qilayotgan kishining Telegram username'i kerak. Hech qanday parol, login yoki SMS-kod kerak emas.",
                },
                {
                  title: "Oferta sahifasi",
                  desc: "/oferta da pul qaytarish shartlari, javobgarlik va aloqa ma'lumotlari aniq yozilgan. Bu huquqiy hujjat.",
                },
                {
                  title: "Sayt va bot bog'langan",
                  desc: "Saytda @PremiumSendBot havolasi, botda esa premiumsend.uz havolasi mavjud. Domen HTTPS bilan ishlaydi.",
                },
                {
                  title: "Tarif va narx oldindan ko'rsatiladi",
                  desc: "1 oylik — 59 000 so'm, 3 oylik — 175 000, 6 oylik — 235 000, 12 oylik — 425 000. Hech qanday yashirin komissiya yo'q.",
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

            <div className="bg-section-alt rounded-xl p-5 mb-4">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Halol bo&apos;lish kerak:</strong> texnik xatolar oz bo&apos;lsa-da bo&apos;lib turadi (Telegram tomonidan qisqa muddatli kechikishlar, Click serveridagi yuklamalar). Bunday holatlarda bot 5-10 daqiqa kutishni so&apos;raydi yoki manual yoqishga o&apos;tadi. Hech qanday reseller &quot;100% xatosiz&quot; deyolmaydi — kim shunday yozsa, yolg&apos;on.
              </p>
            </div>

            <p className="text-muted leading-relaxed">
              <Link
                href="/maqolalar/telegram-premium-narxlari"
                className="text-primary font-semibold hover:underline"
              >
                Tariflar taqqoslash
              </Link>
              {" · "}
              <Link
                href="/maqolalar/telegram-premium-humo-orqali"
                className="text-primary font-semibold hover:underline"
              >
                Humo orqali to&apos;lov mexanizmi
              </Link>
              {" · "}
              <Link
                href="/oferta"
                className="text-primary font-semibold hover:underline"
              >
                Oferta sahifasi
              </Link>
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
                  q: "Telegram Premium O'zbekistondan sotib olish xavfsizmi?",
                  a: "Mahalliy reseller orqali xarid texnik jihatdan xavfsiz, agar to'lov Click yoki Payme orqali bo'lsa, faqat username so'ralsa va PDF chek berilsa. Asosiy xavf — to'lov mexanizmida emas, sotuvchini tanlashda. 8 ta belgi orqali ishonchli reseller'ni ajratish mumkin.",
                },
                {
                  q: "@PremiumSendBot Telegram'ning rasmiy hamkorimi?",
                  a: "Yo'q. PremiumSend Telegram'ning rasmiy hamkori EMAS — biz O'zbekistondagi mustaqil reseller'lardan biriman. Hech qanday O'zbekistondagi xizmat \"Telegram rasmiy hamkor\" emas. Reseller bo'lish noqonuniy emas — bu mexanizm Telegram'ning rasmiy gift sistemasiga tayanadi.",
                },
                {
                  q: "Karta paroli va CVV mlarni hech qachon bermaslik kerakmi?",
                  a: "To'g'ri, hech qachon. Rasmiy to'lov tizimlari (Click, Payme, bank ilovasi) o'zining rasmiy ilovasi orqali parolni so'raydi — bu xavfsiz. Lekin hech qanday Premium reseller, bot yoki \"qo'llab-quvvatlash\" — kartangiz to'liq raqamini, parolini va CVV ni to'g'ridan-to'g'ri so'rashga huquqi yo'q.",
                },
                {
                  q: "Pulim qaytariladimi, agar Premium kelmasa?",
                  a: "Texnik xato sababli Premium yoqilmasa — pul to'liq qaytariladi. Lekin shartlari bor: chek raqami saqlanishi, faollashish jarayoni boshlangan bo'lishi, foydalanuvchi tomonidan noto'g'ri username berilmagan bo'lishi kerak. Aniq shartlar /oferta sahifasida.",
                },
                {
                  q: "Aldovchi bot bo'lsa, pulni qaytarishga qanday harakat qilsam bo'ladi?",
                  a: "Birinchi: PDF chek raqamini saqlang. Ikkinchi: Click yoki Payme ilovasida shikoyat yuboring (Tarix → to'lov → Shikoyat). To'lov tizimi qabul qiluvchini tergov qiladi va imkon bo'lsa pulni qaytaradi. Uchinchi: katta summa yo'qotilgan bo'lsa, kiberjinoyatchilik bo'yicha politsiyaga yozma ariza.",
                },
                {
                  q: "App Store narxi qancha qimmatroq?",
                  a: "1 oylik App Store'da $5.99 — taxminan 78 000 so'm. Mahalliy ishonchli reseller'da 59 000 so'm. Farq ~32%. Plus xorijiy karta talabi va kurs riski. App Store texnik xavfsizlikda biroz yuqori, lekin xarajat va qulaylik nuqtai nazaridan mahalliy yo'l ko'pchilik uchun oqilona.",
                },
                {
                  q: "Birinchi marta sinash uchun qaysidan boshlash kerak?",
                  a: "1 oylik tarif — 59 000 so'm. Eng kichik investitsiya bilan reseller'ni to'liq sinab ko'rish mumkin. Texnik jarayon (to'lov, faollashish, qo'llab-quvvatlash) 6 yoki 12 oyliknikidek ishlaydi. 1 oy ichida xizmatdan rozi bo'lsangiz — keyingi safar 6 yoki 12 oylikga o'tasiz.",
                },
                {
                  q: "Username noto'g'ri bersam, Premium boshqa odamga ketadimi?",
                  a: "Ha — Telegram'ning gift mexanizmi siz bergan @username asosida ishlaydi. Username noto'g'ri yozilsa Premium boshqa akkauntda yoqiladi va qaytarish texnik jihatdan qiyin. Shuning uchun bot username'ni ikki marta tasdiqlashga so'raydi. Yozishdan oldin tekshirish — eng muhim qadam.",
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
                Tez tekshirish — 30 soniyada
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">8/8</p>
                  <p className="text-sm text-muted">
                    belgi mos kelsa — to&apos;liq xavfsiz
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">≥ 6/8</p>
                  <p className="text-sm text-muted">qabul qilsa bo&apos;ladi</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-red-600">≤ 4/8</p>
                  <p className="text-sm text-muted">sotmang, boshqa qidiring</p>
                </div>
              </div>
            </div>
          </section>

          {/* Related cluster links */}
          <section>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-card-border">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Bog&apos;liq maqolalar
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/maqolalar/telegram-premium-eng-arzon-qayerdan-sotib-olish"
                    className="text-primary font-semibold hover:underline"
                  >
                    Telegram Premium eng arzon qayerdan sotib olish — kanallar taqqoslash
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
                    href="/maqolalar/telegram-premium-humo-orqali"
                    className="text-primary font-semibold hover:underline"
                  >
                    Telegram Premium Humo karta orqali — to&apos;lov mexanizmi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/maqolalar/telegram-premium-click-orqali"
                    className="text-primary font-semibold hover:underline"
                  >
                    Telegram Premium Click orqali — eng tezkor mahalliy usul
                  </Link>
                </li>
                <li>
                  <Link
                    href="/maqolalar/telegram-premium-qachon-faollashadi"
                    className="text-primary font-semibold hover:underline"
                  >
                    Premium qachon faollashadi va muddat qanday hisoblanadi
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
                  Telegram Premium O&apos;zbekistondan xavfsiz sotib olish — bu sotuvchini to&apos;g&apos;ri tanlash masalasi. 8 belgini bir necha daqiqada tekshiring.{" "}
                  <strong className="text-white">@PremiumSendBot</strong> — Click va Payme bilan, PDF chek bilan, faqat username so&apos;raydi. Sinashga 1 oylik 59 000 so&apos;m yetarli.
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
                  Premium Send botini ochish
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
