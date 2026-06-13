import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Nega Telegram Premium App Store va Play Market'da qimmatroq — sabablari va arzon yo'l",
  description:
    "App Store'da Telegram Premium 1 oylik $4.99 (~66 000 so'm), Play Market'da ~64 000, mahalliy reseller'da 59 000 so'm. 12 oylik tarifda farq 25-28% — Apple/Google 30% komissiya va bulk gift mexanizmi sabab. To'liq tahlil.",
  keywords: [
    "telegram premium app store qimmat",
    "telegram premium play market narxi",
    "nega telegram premium qimmat app store",
    "apple komissiyasi telegram premium",
    "google komissiyasi telegram premium",
    "telegram premium qimmat sabab",
    "telegram premium so'mda arzon",
    "telegram premium uzs app store",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/maqolalar/nega-telegram-premium-app-store-play-market-qimmat",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/nega-telegram-premium-app-store-play-market-qimmat",
      ru: "https://premiumsend.uz/ru/maqolalar/nega-telegram-premium-app-store-play-market-qimmat",
      "x-default": "https://premiumsend.uz/maqolalar/nega-telegram-premium-app-store-play-market-qimmat",
    },
  },
  openGraph: {
    title:
      "Nega Telegram Premium App Store va Play Market'da qimmatroq",
    description:
      "$4.99/oylik bazada Apple/Google 30% komissiyasi narxga kiritilgan. 1 oylikda farq kichik (~10%), 12 oylikda esa 25-28% — sababli tahlil.",
    url: "https://premiumsend.uz/maqolalar/nega-telegram-premium-app-store-play-market-qimmat",
    type: "article",
    publishedTime: "2026-05-08",
  },
};

export default function ArticleAppStorePlayMarketQimmatUz() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    image: "https://premiumsend.uz/og-image.png",
    headline:
      "Nega Telegram Premium App Store va Play Market'da qimmatroq — sabablari va arzon yo'l",
    description:
      "App Store va Play Market'da Telegram Premium nega O'zbekistonlik foydalanuvchi uchun qimmat tushadi va mahalliy reseller orqali qanday tejash mumkin — sababli batafsil tahlil.",
    datePublished: "2026-05-08",
    dateModified: "2026-05-08",
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
      "https://premiumsend.uz/maqolalar/nega-telegram-premium-app-store-play-market-qimmat",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Nega Telegram Premium App Store'da qimmatroq?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Telegram bazaviy narxi App Store'da $4.99/oy ($13.99 / $24.99 / $44.99 — 3/6/12 oylik). Bu narxga Apple'ning 30% komissiyasi zaten kiritilgan — ya'ni Telegram $4.99 olganda Apple ~$1.50 olib qoladi, Telegram ~$3.50 oladi. So'mga aylantirilganda 1 oylik ~66 000 so'm chiqadi (mahalliy reseller'da 59 000 so'm — ~10% farq). Lekin 12 oylik tarifda farq kattaroq: $44.99 ~592 000 so'm, reseller'da 425 000 so'm — ~28% past.",
        },
      },
      {
        "@type": "Question",
        name: "Play Market'da Telegram Premium qancha turadi va nega farq bor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Google Play da Telegram Premium ham bazaviy $4.99/$13.99/$24.99/$44.99 narxida — so'mga aylantirilganda taxminan 64 000 / 178 000 / 319 000 / 574 000. Google ham 15-30% komissiya oladi va u $4.99 narxiga zaten kiritilgan. App Store'dan biroz arzonroq — chunki Play'ning regional kursi Apple'nikiga qaraganda bozor kursiga yaqinroq. Mahalliy reseller'dan farqi 1 oylikda kichik (~8%), 12 oylikda esa ~26%.",
        },
      },
      {
        "@type": "Question",
        name: "App Store va Play'da to'lash xavfsizroqmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "App Store/Play orqali to'lov rasmiy va to'lov ma'lumotlari Apple/Google tomonidan saqlanadi — bu ishonch jihatidan plus. Lekin xavfsizlik faqat to'lovda emas, Premium funksiyasida bir xil — qaysi yo'l bilan ochilsa, Telegram serverida bir xil natija. Mahalliy reseller'lar orasida ham ishonchlilari bor (sayt + Telegram bot, oferta, ko'p yillik ish), lekin har birini tekshirish kerak.",
        },
      },
      {
        "@type": "Question",
        name: "Mahalliy reseller'lar narxni qanday past tutadi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mahalliy reseller'lar Telegram Premium'ni xizmat sifatida emas, gift sifatida ko'p miqdorda chiqarib oladi. Telegram'ning ichki bulk gift mexanizmi orqali yiriklab olganda chegirmalar mavjud. Apple/Google 30% komissiyasi shu yo'lda yo'q. Shu sababli 1 oylik 59 000 so'm (App Store ~66 000 dan ~10% past), 12 oylik 425 000 so'm (App Store ~592 000 dan ~28% past) — uzun muddatli tarif qancha yiriklashsa, foiz tejash shuncha katta.",
        },
      },
      {
        "@type": "Question",
        name: "Premium qaerdan olish — App Store, Play yoki mahalliy reseller?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tanlov uchta omilga bog'liq: narx, qulaylik va to'lov usuli. 1 oylikda farq kichik (5-10%), shu sababli avtoyangilanish kerak bo'lsa va chet el kartasi bo'lsa App Store/Play ham mantiqli. Lekin 6 yoki 12 oylik tarif olsangiz, mahalliy reseller (235 000 / 425 000 so'm) ~26-28% arzon — yiliga ~150 000-170 000 so'm tejash. Premium Send botiga yozsangiz, 5 daqiqada Click/Payme bilan to'lab ola olasiz.",
        },
      },
      {
        "@type": "Question",
        name: "Apple/Google komissiyasi qancha va u Premium narxiga qanday ta'sir qiladi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Apple App Store: standart 30%, kichik dasturchilar uchun 15% (Small Business Program). Google Play: 15% birinchi $1 mln aylanmagacha, undan keyin 30%. Telegram yirik kompaniya bo'lgani uchun ikkala platformada 30% komissiya oladi. Bu komissiya $4.99 bazaviy narxga zaten kiritilgan — ya'ni Apple/Google har bir to'lovdan ~$1.50 olib qoladi, Telegram ~$3.50 oladi. Mahalliy reseller esa bu kanaldan tashqarida ishlagani uchun komissiyasi yo'q.",
        },
      },
      {
        "@type": "Question",
        name: "Mahalliy karta bilan App Store'dan Premium ola olamanmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Texnik jihatdan ha, lekin amaliyotda murakkablik bor. Apple ID O'zbekiston regionida bo'lsa, App Store'da Premium narxi so'mda ko'rinadi va mahalliy karta (Uzcard/Humo/Visa/MC) bilan to'lash mumkin. Lekin ba'zi banklar cross-border to'lov sifatida qabul qilmasligi yoki qo'shimcha 1-3% tarif olishi mumkin. Visa/MC bilan to'lov dollar konvertatsiya bilan amalga oshiriladi — kurs farqi sababli yana 2-4% yo'qotasiz.",
        },
      },
      {
        "@type": "Question",
        name: "App Store/Play narxi vs reseller narxi — qaysisi rasmiyroq?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ikkala yo'l ham bir xil natijaga olib keladi — Telegram serverida Premium yoqiladi, akkauntda Telegram tomonidan rasmiy ravishda ko'rsatiladi (yulduzcha bilan). Farqi faqat to'lov yo'lida: App Store/Play orqali Telegram bevosita Apple/Google'dan pulni oladi, reseller orqali esa Telegram'ning Stars yoki gift mexanizmi orqali oladi. Foydalanuvchi tajribasi va Premium funksiyasi farq qilmaydi.",
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
      { "@type": "ListItem", position: 3, name: "Nega App Store/Play'da qimmat", item: "https://premiumsend.uz/maqolalar/nega-telegram-premium-app-store-play-market-qimmat" },
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
        <span className="text-foreground font-medium">Nega App Store/Play&apos;da qimmat</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">Savol-javob</span>
            <time className="text-xs text-muted" dateTime="2026-05-08">2026-yil, 8-may</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Nega Telegram Premium App Store va Play Market&apos;da qimmatroq — to&apos;liq tahlil
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>Qisqacha javob:</strong> Telegram&apos;ning rasmiy bazaviy narxi <strong>$4.99/oy</strong> ($13.99 / $24.99 / $44.99 — 3/6/12 oylik). App Store&apos;da bu so&apos;mga aylantirilganda <strong>~66 000 so&apos;m</strong>, Play Market&apos;da <strong>~64 000 so&apos;m</strong>, mahalliy reseller&apos;da esa <strong>59 000 so&apos;m</strong>. 1 oylikda farq kichik (8-10%), lekin <strong>6 va 12 oylik</strong> tariflarda mahalliy reseller&apos;da farq <strong>26-28% gacha</strong> chiqadi (235 000 vs ~329 000; 425 000 vs ~592 000 so&apos;m). Sabab: Apple/Google 30% komissiyasi $4.99 narxiga zaten kiritilgan, mahalliy reseller esa bulk gift mexanizmi orqali ishlagani uchun bu komissiyasiz ish ko&apos;radi.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Telegram Premium narxi App Store, Play Market va mahalliy reseller&apos;da farq qiladi. Foydalanuvchilar ko&apos;p marta &quot;nega telefonimda qimmatroq ko&apos;rinadi?&quot; deb so&apos;rashadi — javob texnologiyaviy emas, balki <strong>iqtisodiy</strong>: Apple va Google har bir tranzaksiyadan komissiya oladi, valyuta kursi konvertatsiyasi qo&apos;shadi, banklararo to&apos;lovlar yana o&apos;z foizini.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Bu qo&apos;llanmada uchta to&apos;lov yo&apos;lining narx ajratuvini batafsil tahlil qilamiz, qayerda qancha &quot;qo&apos;shimcha xarajat&quot; chiqayotganini ko&apos;rsatamiz va O&apos;zbekistonlik foydalanuvchi uchun eng arzon va xavfsiz yo&apos;lni topamiz.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 — Price comparison */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Narx farqi — App Store, Play Market va mahalliy reseller
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              2026-yil may holati. Telegram bazaviy narxi: $4.99 (1 oy), $13.99 (3 oy), $24.99 (6 oy), $44.99 (12 oy). Joriy bozor kursi ~12 750 so&apos;m/$1:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-5 bg-section-alt p-4 font-bold text-sm">
                <div>Tarif</div>
                <div className="text-center">$ baza</div>
                <div className="text-center">App Store (so&apos;m)</div>
                <div className="text-center">Play (so&apos;m)</div>
                <div className="text-center text-primary">Reseller</div>
              </div>
              <div className="grid grid-cols-5 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">1 oylik</div>
                <div className="text-center">$4.99</div>
                <div className="text-center">~66 000</div>
                <div className="text-center">~64 000</div>
                <div className="text-center font-bold text-primary">59 000</div>
              </div>
              <div className="grid grid-cols-5 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">3 oylik</div>
                <div className="text-center">$13.99</div>
                <div className="text-center">~184 000</div>
                <div className="text-center">~178 000</div>
                <div className="text-center font-bold text-primary">175 000</div>
              </div>
              <div className="grid grid-cols-5 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">6 oylik</div>
                <div className="text-center">$24.99</div>
                <div className="text-center">~329 000</div>
                <div className="text-center">~319 000</div>
                <div className="text-center font-bold text-primary">235 000</div>
              </div>
              <div className="grid grid-cols-5 p-4 items-center text-sm bg-primary-light/20">
                <div className="font-bold">12 oylik</div>
                <div className="text-center">$44.99</div>
                <div className="text-center">~592 000</div>
                <div className="text-center">~574 000</div>
                <div className="text-center font-bold text-primary">425 000</div>
              </div>
            </div>

            <div className="bg-section-alt rounded-xl p-5">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Tejash foizi:</strong> 1 oylikda kichik (~10% App Store, ~8% Play), 3 oylikda mos farq juda kichik (~5% va ~2%). Lekin <strong>6 oylikda 28% va 26%</strong>, <strong>12 oylikda 28% va 26%</strong> — uzun muddatli tariflarda mahalliy reseller sezilarli arzon. Sabab: reseller bulk gift mexanizmi orqali yirik miqdorda chegirma oladi.
              </p>
            </div>
          </section>

          {/* Section 2 — Why Apple is expensive */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Nega App Store narxi shuncha qimmat?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              App Store narxi uch bosqichda &quot;shishadi&quot;:
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">1. Apple komissiyasi (30%)</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Apple App Store har bir ichki obuna (in-app subscription) uchun dasturchidan 30% komissiya oladi. Bu &quot;Apple Tax&quot; deb atalib, har bir mobil ilova uchun bir xil. Telegram yirik kompaniya bo&apos;lgani uchun &quot;Small Business Program&quot; (15%) ga kirmaydi. Natijada Telegram dollar narxni 30% ga shishirib qo&apos;ymasa, foyda qolmaydi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">2. Apple ichki valyuta kursi (2-4%)</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Apple har bir mamlakat uchun o&apos;z ichki dollar→mahalliy valyuta kursini qo&apos;llaydi. Bu kurs odatda bozor kursidan 2-4% yuqoriroq bo&apos;ladi (Apple uchun &quot;valyuta xavfi sug&apos;urtasi&quot;). Foydalanuvchi to&apos;laydi-da, lekin kurs farqi narxga qo&apos;shilib ketadi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">3. Bank cross-border tarifi (1-3%)</h3>
                <p className="text-sm text-muted leading-relaxed">
                  O&apos;zbekiston kartasi (Uzcard/Humo/Visa) bilan App Store&apos;da to&apos;lov chet el to&apos;lovi sifatida tahlil qilinadi. Mahalliy bank 1-3% cross-border foiz oladi, ba&apos;zan qo&apos;shimcha SMS/qog&apos;oz to&apos;lov ham chiqadi.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">Muhim nuance:</strong> Telegram $4.99 narxni shunday belgiladi-ki, Apple/Google 30% komissiyani undan olib qo&apos;yganidan keyin ham foyda qolsin. Ya&apos;ni 30% komissiya $4.99 narxiga zaten kiritilgan. Foydalanuvchi $4.99 to&apos;laydi → Apple ~$1.50 olib qoladi, Telegram ~$3.50 oladi. Mahalliy reseller esa Apple/Google kanali orqali emas, Telegram&apos;ning ichki gift mexanizmi orqali ishlaydi — shu sababli 30% komissiyani &quot;tejaydi&quot; va o&apos;z marjasini qo&apos;ygandan keyin ham foydalanuvchiga arzonroq sotadi.
            </p>
          </section>

          {/* Mid CTA */}
          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                App Store komissiyasi va valyuta marjasi yo&apos;q. <strong className="text-white">@PremiumSendBot</strong> da 1 oylik 59 000 so&apos;mdan, 3 oylik 175 000, 6 oylik 235 000, 12 oylik 425 000 so&apos;m. So&apos;mda to&apos;lov, 5 daqiqada faollashish.
              </p>
              <Link href="https://t.me/premiumsendbot" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                So&apos;mda Premium ochish
              </Link>
            </div>
          </section>

          {/* Section 3 — Why Play is cheaper than Apple but still expensive */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Play Market'da nega Apple'dan arzonroq, lekin reseller'dan qimmatroq?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Google Play Apple'dan ozgina arzonroq sabablari:
            </p>

            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li><strong className="text-foreground">Google komissiyasi:</strong> birinchi $1 mln aylanmagacha 15%, keyin 30% (Apple'da deyarli har doim 30%)</li>
              <li><strong className="text-foreground">Play balans usuli:</strong> foydalanuvchi Click/Payme orqali Play balansini to&apos;ldirsa, bu mahalliy karta orqali bo&apos;ladi va cross-border tarif yo&apos;q</li>
              <li><strong className="text-foreground">Mahalliy gift card:</strong> Play uchun mahalliy savdo do&apos;konlarida (mas. Texnomart) gift card ham mavjud — kurs aniq</li>
            </ul>

            <p className="text-muted leading-relaxed mb-4">
              Lekin Play ham mahalliy reseller&apos;dan 12 oylik tarifda ~26% qimmat — chunki Google komissiyasi $4.99 narxiga zaten kiritilgan va Telegram Play uchun bazaviy narxni o&apos;zgartirmaydi.
            </p>

            <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
              <h3 className="font-bold text-foreground mb-2">Play Market'da Click/Payme bilan to&apos;lash</h3>
              <p className="text-sm text-muted leading-relaxed">
                Texnik jihatdan mumkin: Click yoki Payme orqali Google Play balansga so&apos;m to&apos;ldirib, undan Premium sotib olasiz. Bu yo&apos;l cross-border tarifni yo&apos;qotadi, lekin Click/Payme komissiyasi (1-2%) qo&apos;shiladi va Play&apos;ning ichki narxi baribir bozor kursidan yuqori.
              </p>
            </div>
          </section>

          {/* Section 4 — Why local resellers are cheaper */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Mahalliy reseller'lar qanday qilib arzonroq sotishadi?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Mahalliy reseller&apos;lar (Premium Send kabi) Premium&apos;ni Apple/Google App Store kanalidan emas, <strong>Telegram&apos;ning bulk gift mexanizmi</strong> orqali oladi. Bu komissiyalardan qutulish va yiriklab olish chegirmasini beradi:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-2 bg-section-alt p-4 font-bold text-sm">
                <div>Omil</div>
                <div className="text-center">Ta&apos;sir</div>
              </div>
              <div className="grid grid-cols-2 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Apple/Google 30% komissiyasi</div>
                <div className="text-center text-green-600">Yo&apos;q (gift kanalida)</div>
              </div>
              <div className="grid grid-cols-2 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Yiriklab olish chegirmasi</div>
                <div className="text-center text-green-600">~10-20% past</div>
              </div>
              <div className="grid grid-cols-2 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">So&apos;mda to&apos;lov (valyuta marjasi yo&apos;q)</div>
                <div className="text-center text-green-600">Yo&apos;q</div>
              </div>
              <div className="grid grid-cols-2 p-4 items-center text-sm bg-primary-light/20">
                <div className="font-bold">Reseller&apos;ning o&apos;z marjasi</div>
                <div className="text-center font-bold">~5-15% qo&apos;shimcha</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              Yuqoridagi omillar reseller marjasini qoplagandan keyin ham foydalanuvchiga 1 oylikda ~10%, 6-12 oylikda ~26-28% past narx beradi. Eng katta tejash uzun muddatli tariflarda chiqadi — chunki bulk chegirmasi shu yerda eng kuchli ishlaydi.
            </p>

            <div className="bg-section-alt rounded-xl p-5">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Eslatma:</strong> Bu reseller&apos;lar &quot;qonun chetida&quot; ishlamaydi — Telegram&apos;ning gift mexanizmi rasmiy. Premium akkauntda Telegram tomonidan rasmiy ravishda ko&apos;rsatiladi (yulduzcha bilan). Faqat to&apos;lov yo&apos;li boshqacha — Apple/Google emas, Telegram&apos;ning ichki gift kanali.
              </p>
            </div>
          </section>

          {/* Section 5 — When App Store/Play makes sense */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              App Store yoki Play qachon mantiqli?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Mahalliy reseller arzonroq bo&apos;lsa-da, ba&apos;zi vaziyatlarda App Store/Play tanlash mantiqli:
            </p>

            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li><strong className="text-foreground">Chet el kartasi bilan to&apos;lasangiz</strong> — dollar narxi bevosita to&apos;lanadi, valyuta marjasi va cross-border tarif yo&apos;q</li>
              <li><strong className="text-foreground">Apple/Google ichki balansingiz bo&apos;lsa</strong> — boshqa joydan to&apos;ldirilgan balans bilan to&apos;lash mumkin (mas. gift card)</li>
              <li><strong className="text-foreground">Avtomatik yangilanish kerak bo&apos;lsa</strong> — App Store/Play obunani avtomatik uzaytiradi, qo&apos;l bilan to&apos;lash kerak emas</li>
              <li><strong className="text-foreground">Apple/Google ichidagi family sharing</strong> — Premium bir akkauntda yoqilsa, oilaviy 5 a&apos;zoga ham bo&apos;lishadi (faqat App Store/Play orqali xarid qilinganda)</li>
            </ul>

            <p className="text-muted leading-relaxed">
              O&apos;zbekistondan so&apos;mda to&apos;lovchi va bir martalik xarid qiluvchi foydalanuvchi uchun esa mahalliy reseller har doim arzonroq tushadi.
            </p>
          </section>

          {/* Section 6 — Step by step: how to compare yourself */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              O&apos;zingiz solishtirib ko&apos;rish — 4 qadam
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Maqola raqamlariga ishonish kerak emas — telefoningizdan o&apos;zingiz tekshiring:
            </p>

            <div className="space-y-4 mb-6">
              {[
                { step: "1", title: "Telegram dasturini oching", desc: "Settings → Telegram Premium → tariflarni ko'ring. iPhone'da App Store narxi, Android'da Play narxi ko'rinadi. Narxlar so'mda yoki dollarda bo'ladi." },
                { step: "2", title: "Mahalliy reseller narxini taqqoslang", desc: "@PremiumSendBot ga yozing → /start bosing → Premium tariflar bo'limini oching. Aniq so'm narxi ko'rinadi: 1 oylik 59 000, 3 oylik 175 000, 6 oylik 235 000, 12 oylik 425 000 so'm." },
                { step: "3", title: "Farqni hisoblang", desc: "Mahalliy narxni Apple/Play narxidan ayiring. 1 oylikda farq kichik (~5 000-7 000 so'm), 6 oylikda ~85 000 so'm, 12 oylikda esa ~150 000-170 000 so'm tejash chiqadi. Uzun muddatli tarif qancha yiriklashsa, foiz tejash shuncha katta." },
                { step: "4", title: "Sizga qulay yo'lni tanlang", desc: "Tezkorlik, narx va to'lov usuli bo'yicha tanlang. So'mda to'lov, 6-12 oylikda 26-28% tejash, 5 daqiqada faollashish — mahalliy reseller; avtomatik yangilanish va family sharing — App Store/Play." },
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
          </section>

          {/* Section 7 — Math example */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Aniq misol: 12 oylik tarif uchun hisob
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Bir yillik Premium uchun ikkita yo&apos;lni taqqoslaymiz:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-2 bg-section-alt p-4 font-bold text-sm">
                <div>Yo&apos;l</div>
                <div className="text-center">Hisob</div>
              </div>
              <div className="grid grid-cols-2 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">App Store (1 oylik × 12)</div>
                <div className="text-center">$4.99 × 12 = $59.88 → ~792 000 so&apos;m</div>
              </div>
              <div className="grid grid-cols-2 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">App Store (12 oylik to&apos;g&apos;ridan)</div>
                <div className="text-center">$44.99 → ~592 000 so&apos;m</div>
              </div>
              <div className="grid grid-cols-2 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Play Market (12 oylik)</div>
                <div className="text-center">$44.99 → ~574 000 so&apos;m</div>
              </div>
              <div className="grid grid-cols-2 p-4 items-center text-sm bg-primary-light/20">
                <div className="font-bold text-primary">Mahalliy reseller (12 oylik)</div>
                <div className="text-center font-bold text-primary">425 000 so&apos;m</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">Yiliga tejash:</strong> mahalliy reseller Apple&apos;dan ~167 000 so&apos;m, Play&apos;dan ~149 000 so&apos;m past. Agar oylik to&apos;lov qilib chiqilsa (avtoyangilanish), 12 oyda Apple&apos;da ~792 000 so&apos;m sarflanadi — mahalliy reseller&apos;dan 367 000 so&apos;m yuqori. Demak, eng katta tejash — uzun muddatli (6, 12 oylik) tariflar uchun.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">
              Tez-tez so&apos;raladigan savollar
            </h2>
            <div className="space-y-4">
              {[
                { q: "App Store'da narx nima uchun har xil ko'rinadi?", a: "Apple ID region O'zbekiston bo'lsa narx so'mda, AQSh region bo'lsa dollarda ko'rinadi. Region foydalanuvchi tanlovi va to'lov kartasi bilan bog'liq. Mahalliy region narxi har doim chet el regionidan biroz qimmat — Apple valyuta marjasi sababli." },
                { q: "Telegram'ning rasmiy narxi qaerda?", a: "telegram.org/premium sahifasida narxlar dollarda. Lekin foydalanuvchi sotib olishi uchun App Store/Play yoki gift mexanizmi orqali o'tishi kerak — bevosita Telegram'ga to'lov yo'q." },
                { q: "Apple komissiyasi 30% mi har doim?", a: "Apple App Store: standart 30%, Small Business Program (yillik aylanmasi $1 mln gacha) uchun 15%. Telegram bu programmaga kirmaydi. Google Play: birinchi $1 mln aylanmagacha 15%, undan keyin 30%. Telegram'da Play'da ham deyarli har doim 30%." },
                { q: "Mahalliy reseller'lar qonuniymi?", a: "Telegram'ning gift mexanizmi orqali ishlovchi reseller'lar qonun chetida emas — Telegram bu mexanizmga ruxsat bergan. Lekin O'zbekistonda biznes registratsiyasi va soliq holatini reseller alohida tekshirib chiqishi kerak. Premium Send kabi katta reseller'lar ofiziyalga ega." },
                { q: "Avtomatik yangilanish reseller'da bormi?", a: "Yo'q — mahalliy reseller'lar har gal qo'lda buyurtma qiladi. App Store/Play avtomatik yangilaydi, lekin bu rangli — sizdan so'rab o'tirmasdan to'laydi. Aksincha qo'lda buyurtma — har oy ehtiyojni qaytadan baholash imkoni beradi." },
                { q: "Family sharing reseller orqali ishlaydimi?", a: "Yo'q — Apple Family Sharing va Google Family faqat App Store/Play xaridiga taalluqli. Mahalliy reseller orqali olingan Premium faqat o'sha akkauntda ishlaydi. Lekin oilaviy a'zolarga sovg'a qilish imkoni bor (3, 6, 12 oylik), narxi 5 ta a'zoga 5 ta alohida tarif." },
                { q: "App Store balansim bo'lsa, undan to'lash arzonroqmi?", a: "Apple gift card bilan balans to'ldirilsa, Apple'ning ichki kursi va komissiyasi baribir qo'llaniladi — narx App Store ko'rsatadigan rasmiy narx bo'ladi. Mahalliy gift card hozircha O'zbekistonda keng tarqalmagan." },
                { q: "Play Market gift card O'zbekistonda mavjudmi?", a: "Cheklangan miqdorda — Texnomart, ASIA va boshqa elektronika do'konlarida ba'zan mavjud. Lekin narx odatda dollar bo'yicha bo'lib, Play'ning ichki kursi qo'llaniladi. So'mda to'g'ridan-to'g'ri to'lash mahalliy reseller bilan eng aniq." },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                  <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Trust block */}
          <section>
            <div className="bg-section-alt rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-bold text-foreground mb-4 text-center">
                Mahalliy reseller bilan App Store/Play farqi — raqamlarda
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">~28%</p>
                  <p className="text-sm text-muted">App Store&apos;dan tejash (12 oylik)</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">~26%</p>
                  <p className="text-sm text-muted">Play Market&apos;dan tejash (12 oylik)</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">5 daq.</p>
                  <p className="text-sm text-muted">faollashish vaqti</p>
                </div>
              </div>
            </div>
          </section>

          {/* Related */}
          <section>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-card-border">
              <h3 className="text-lg font-bold text-foreground mb-4">Bog&apos;liq maqolalar</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/maqolalar/telegram-premium-narxlari" className="text-primary font-semibold hover:underline">Premium narxlari 2026: 1, 3, 6, 12 oylik tariflar</Link></li>
                <li><Link href="/maqolalar/telegram-premium-eng-arzon-qayerdan-sotib-olish" className="text-primary font-semibold hover:underline">Premium eng arzon qayerdan sotib olish mumkin</Link></li>
                <li><Link href="/maqolalar/telegram-premium-xavfsiz-aldovdan-saqlanish" className="text-primary font-semibold hover:underline">Premium xavfsiz sotib olish: aldovdan saqlanish</Link></li>
                <li><Link href="/maqolalar/premiumsend-vs-boshqa-resellerlar" className="text-primary font-semibold hover:underline">PremiumSend vs boshqa reseller&apos;lar — ob&apos;ektiv mezonlari</Link></li>
                <li><Link href="/maqolalar/telegram-premium-payme-orqali" className="text-primary font-semibold hover:underline">Premium Payme orqali sotib olish</Link></li>
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
                  Telegram bazaviy narxi $4.99/oy — Apple/Google 30% komissiyasi unga zaten kiritilgan. Mahalliy reseller bu komissiyasiz va bulk gift orqali 6-12 oylik tariflarda <strong>26-28% tejash</strong> beradi. <strong className="text-white">@PremiumSendBot</strong> da 1 oylik 59 000, 6 oylik 235 000, 12 oylik 425 000 so&apos;m.
                </p>
                <Link href="https://t.me/premiumsendbot" target="_blank" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  Premium ochishni boshlash
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
