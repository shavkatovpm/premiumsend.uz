import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "1 oylik Telegram Premium sotib olish — O'zbekistonda so'mda, Uzcard va Humo orqali",
  description:
    "1 oylik Telegram Premium sotib olish O'zbekistonda 59,000 so'mga. Uzcard, Humo kartasi orqali so'mda to'lov. Telegramda 1 oylik mavjud, lekin xorijiy karta kerak — @premiumsend_admin orqali so'mda oling. Bosqichma-bosqich yo'riqnoma.",
  keywords: [
    "1 oylik Telegram Premium sotib olish",
    "1 oylik telegram premium narxi so'mda",
    "Uzcard karta orqali telegram premium sotib olish",
    "Humo karta orqali telegram premium sotib olish",
    "Telegram premium bot orqali 1 oylik obuna",
    "Telegram premium arzon narxda 1 oyga",
    "Telegram Premium O'zbekiston",
    "Telegram Premium so'mda",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/maqolalar/1-oylik-telegram-premium-sotib-olish",
  },
  openGraph: {
    title: "1 oylik Telegram Premium sotib olish — O'zbekistonda so'mda",
    description:
      "Telegramda 1 oylik Premium bor, lekin to'lov uchun xorijiy karta kerak. @premiumsend_admin orqali Uzcard, Humo bilan so'mda sotib oling — 59,000 so'm.",
    url: "https://premiumsend.uz/maqolalar/1-oylik-telegram-premium-sotib-olish",
    type: "article",
    publishedTime: "2026-04-07",
  },
};

export default function Article1Month() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "1 oylik Telegram Premium sotib olish — O'zbekistonda so'mda, Uzcard va Humo orqali",
    description:
      "1 oylik Telegram Premium sotib olish O'zbekistonda 59,000 so'mga. Uzcard, Humo kartasi orqali so'mda to'lov. Batafsil qo'llanma.",
    datePublished: "2026-04-07",
    dateModified: "2026-04-07",
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
      "https://premiumsend.uz/maqolalar/1-oylik-telegram-premium-sotib-olish",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "1 oylik Telegram Premium sotib olish uchun xorijiy karta kerakmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Telegram ilovasida to'lash uchun xorijiy karta yoki Google/Apple Pay kerak. Lekin @premiumsend_admin orqali Uzcard yoki Humo kartasi bilan so'mda to'lash mumkin — xorijiy karta talab qilinmaydi.",
        },
      },
      {
        "@type": "Question",
        name: "1 oylik Telegram Premium Telegramning rasmiy ilovasida mavjudmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha, Telegram ilovasida 1 oylik va 12 oylik paket mavjud. Lekin to'lov faqat xorijiy karta yoki Google/Apple Pay orqali amalga oshiriladi. O'zbekistonlik foydalanuvchilar uchun bu imkoniyat cheklangan — shu sababli @premiumsend_admin orqali so'mda sotib olish ancha qulay.",
        },
      },
      {
        "@type": "Question",
        name: "To'lovdan keyin Premium qachon faollashadi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Odatda bir necha daqiqa ichida. @premiumsend_admin to'lovni tasdiqlaydi va Premium obuna ko'rsatilgan akkauntga faollashtiriladi.",
        },
      },
      {
        "@type": "Question",
        name: "Boshqa odamga 1 oylik Premium olsa bo'ladimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha. Buning uchun faqat o'sha odamning Telegram username'ini yetkazing. Premium uning akkauntiga faollashadi — do'st yoki oila a'zosiga sovg'a sifatida ham sotib olish mumkin.",
        },
      },
      {
        "@type": "Question",
        name: "1 oylik Telegram Premium narxi qancha?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Premium Send da 1 oylik Telegram Premium narxi 59,000 so'm. To'lov O'zbekiston so'mida — Uzcard yoki Humo kartasi orqali amalga oshiriladi.",
        },
      },
      {
        "@type": "Question",
        name: "Premium Send da qanday paketlar bor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Premium Send da 1 oylik (59,000 so'm), 3 oylik (175,000 so'm), 6 oylik (235,000 so'm) va 12 oylik (425,000 so'm) Telegram Premium paketlari mavjud. Uzoqroq muddatli paketlar oyiga hisoblaganda arzonroq tushadi.",
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
        name: "1 oylik Telegram Premium sotib olish",
        item: "https://premiumsend.uz/maqolalar/1-oylik-telegram-premium-sotib-olish",
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
          1 oylik Telegram Premium sotib olish
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
            <time className="text-xs text-muted" dateTime="2026-04-07">
              2026-yil, 7-aprel
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            1 oylik Telegram Premium sotib olish
          </h1>
          {/* AI/SEO Snippet Definitsiya */}
          <div className="bg-primary-light/50 rounded-xl p-5 border border-primary/10 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>1 oylik Telegram Premium</strong> — bu Telegramning kengaytirilgan obunasi bo&apos;lib, O&apos;zbekistonda{" "}
              <Link href="https://t.me/premiumsend_admin" target="_blank" className="text-primary hover:underline">
                @premiumsend_admin
              </Link>{" "}
              orqali <strong>59,000 so&apos;m</strong>ga, Uzcard va Humo kartasi bilan sotib olish mumkin. Telegram ilovasida 1 oylik paket mavjud, lekin to&apos;lov faqat xorijiy karta orqali ishlaydi — O&apos;zbekiston kartlari qabul qilinmaydi.
            </p>
          </div>
          <p className="text-lg text-muted leading-relaxed">
            Telegram Premium olmoqchimisiz, lekin ilovada to&apos;lov qilganda xatolik chiqyaptimi? Bu
            O&apos;zbekistonda millionlab foydalanuvchi duch keladigan muammo. Telegramning rasmiy
            ilovasida 1 oylik Premium bor — lekin to&apos;lash uchun Visa, MasterCard yoki Google Pay
            kerak. Uzcard yoki Humo bilan to&apos;g&apos;ridan-to&apos;g&apos;ri to&apos;lab bo&apos;lmaydi.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Ushbu maqolada 1 oylik Telegram Premium sotib olish — O&apos;zbekistonda, mahalliy
            to&apos;lov tizimlari orqali, tez va ishonchli usulda — qanday amalga oshirilishini
            batafsil tushuntiramiz.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Nima uchun Telegramda 1 oylik Premium sotib olish qiyin?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Ko&apos;pchilik foydalanuvchilar Telegram ilovasini ochib, Premium bo&apos;limiga kirganda
              bitta devorga uriladilar: to&apos;lov sahifasi faqat xorijiy karta yoki Google Pay,
              Apple Pay ni qabul qiladi. O&apos;zbekistonning milliy to&apos;lov tizimlari — Uzcard va
              Humo — bu yerda ishlamaydi.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Bu texnik cheklov emas, balki Telegram&apos;ning to&apos;lov infrastrukturasidir. Kompaniya
              global to&apos;lov provayderlari bilan ishlaydi va O&apos;zbekiston mahalliy banklari hali
              ularga ulanmagan. Natijada quyidagi vaziyat yuzaga keladi:
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-section-alt rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-2">
                  Birinchi to&apos;siq — to&apos;lov tizimi cheklovi
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Telegram ilovasi orqali to&apos;lash uchun Google Pay, Apple Pay yoki xorijiy
                  bank kartasi kerak. Uzcard va Humo bu tizimlar bilan mos kelmaydi.
                  Natijada millionlab o&apos;zbek foydalanuvchisi to&apos;g&apos;ridan-to&apos;g&apos;ri sotib ololmaydi.
                </p>
              </div>
              <div className="bg-section-alt rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-2">
                  Ikkinchi to&apos;siq — kurs va konvertatsiya
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Telegram to&apos;lovlari dollar hisobida amalga oshiriladi. O&apos;zbekistonda esa
                  foydalanuvchilar so&apos;m hisobida ishlaydi. Xorijiy karta bo&apos;lsa ham, valyuta
                  konvertatsiyasi va bank komissiyasi qo&apos;shimcha xarajat yaratadi.
                </p>
              </div>
              <div className="bg-section-alt rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-2">
                  Uchinchi to&apos;siq — muqobil paket yo&apos;qligi
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Telegram ilovasida faqat 1 oylik va 12 oylik paketlar mavjud. 3 oylik
                  yoki 6 oylik variant yo&apos;q. Agar 3 oy obuna olmoqchi bo&apos;lsangiz, har oy
                  alohida to&apos;lashingiz kerak — bu ham qimmatroq, ham noqulay.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Aynan shu muammolar tufayli O&apos;zbekistonda mahalliy servislar orqali Telegram
              Premium sotib olish tobora ommalashib bormoqda. <strong className="text-foreground">@premiumsend_admin</strong> buning
              uchun maxsus yaratilgan yechim hisoblanadi.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              1 oylik Telegram Premium: nimalar beriladi?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Telegram Premium — bu Telegramning kengaytirilgan versiyasi bo&apos;lib, oddiy
              foydalanuvchilarga mavjud bo&apos;lmagan imkoniyatlarni ochib beradi. 1 oylik obuna
              eng qisqa muddat bo&apos;lib, sinab ko&apos;rish yoki qisqa muddatga zarur bo&apos;lganda
              ideal tanlovdir.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              1 oylik Telegram Premium obuna quyidagi imkoniyatlarni beradi:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: "Fayl yuklash hajmi",
                  desc: "Oddiy limitdan 4 GB gacha oshiriladi. Katta video, arxiv yoki hujjatlarni yuborish muammosi yo'qoladi.",
                },
                {
                  title: "Tezkor tarjima",
                  desc: "Xorijiy tillardagi xabarlarni bir tugma bilan o'zbek yoki rus tiliga tarjima qilish mumkin.",
                },
                {
                  title: "Reklama yo'q",
                  desc: "Telegram kanallarida ko'rsatiladigan reklamalar to'liq o'chiriladi.",
                },
                {
                  title: "Maxsus reaksiyalar va stikerlar",
                  desc: "Premium foydalanuvchilar uchun mo'ljallangan eksklyuziv emojilar va animatsiyalar.",
                },
                {
                  title: "Ism rang berish",
                  desc: "Profilingizga maxsus rang va badge qo'shish imkoniyati.",
                },
                {
                  title: "Ko'proq saqlangan xabarlar",
                  desc: "Bookmark qilish limiti oshiriladi.",
                },
                {
                  title: "Tezroq yuklanish",
                  desc: "Kontent Premium serverlari orqali tezroq yuklanadi.",
                },
                {
                  title: "Voice-to-text",
                  desc: "Ovozli xabarlarni avtomatik matn ko'rinishiga o'tkazish.",
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

            <p className="text-muted leading-relaxed mb-4">
              1 oylik variant ular orasida eng qisqa — lekin Premium imkoniyatlarini
              sinab ko&apos;rish, ma&apos;lum bir voqea yoki loyiha davomida foydalanish yoki
              do&apos;stga sovg&apos;a qilish uchun juda qulay.
            </p>
            <p className="text-muted leading-relaxed">
              Agar Premium sizga yoqsa, keyingi safar uzoqroq muddat — 3 oylik, 6 oylik
              yoki 12 oylik — tanlash ham mumkin. Oyiga hisoblaganda uzoq muddatli
              paketlar ancha tejamkor chiqadi.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              O&apos;zbekistonda 1 oylik Telegram Premium sotib olish: qayerdan va qanday?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Hozirda O&apos;zbekistonda Telegram Premium sotadigan bir nechta servis mavjud.
              Lekin ularning hammasi ham ishonchli emas — ba&apos;zilari to&apos;lov qabul qilib,
              Premium yubormaydi yoki kech yuboradi.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Ishonchli servisda quyidagi xususiyatlar bo&apos;lishi kerak:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Uzcard va Humo kartasi orqali to'lov (so'mda, kurs farqisiz)",
                "To'lovdan keyin tez yetkazib berish",
                "O'zbek tilida yordam va qo'llab-quvvatlash",
                "Turli muddatli paketlar mavjudligi (1, 3, 6, 12 oylik)",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-muted">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-primary-light rounded-2xl p-6 border border-primary/20">
              <p className="text-foreground leading-relaxed">
                <strong>@premiumsend_admin</strong> — O&apos;zbekiston bozori uchun maxsus
                yaratilgan Telegram xizmati bo&apos;lib, aynan shu talablarga javob beradi.
                1 oylik Telegram Premium obunani o&apos;zbek so&apos;mida, Uzcard yoki Humo kartasi
                bilan sotib olish mumkin.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Uzcard va Humo orqali to&apos;lash: bosqichma-bosqich yo&apos;riqnoma
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Quyida @premiumsend_admin orqali 1 oylik Telegram Premium sotib olishning
              to&apos;liq jarayoni keltirilgan:
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  step: "1",
                  title: "Adminga murojaat qiling",
                  desc: "Telegramda @premiumsend_admin ga yozing.",
                },
                {
                  step: "2",
                  title: "Paketni aytib bering",
                  desc: '"1 oylik Premium" kerakligini bildiring.',
                },
                {
                  step: "3",
                  title: "Username kiriting",
                  desc: "Premium olmoqchi bo'lgan akkauntning Telegram username'ini yuboring (o'zingizniki yoki do'stingizniki bo'lishi mumkin).",
                },
                {
                  step: "4",
                  title: "To'lov rekvizitlarini oling",
                  desc: "Admin sizga to'lov uchun karta raqamini yoki Click/Payme havolasini yuboradi.",
                },
                {
                  step: "5",
                  title: "To'lovni amalga oshiring",
                  desc: "Uzcard yoki Humo kartangiz orqali 59,000 so'm to'lang. Click yoki Payme orqali ham amalga oshirish mumkin.",
                },
                {
                  step: "6",
                  title: "Premium faollashadi",
                  desc: "To'lov tasdiqlangandan so'ng, Premium obuna ko'rsatilgan akkauntga faollashtiriladi. Odatda bir necha daqiqa ichida.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full hero-gradient text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-muted leading-relaxed mb-6">
              Butun jarayon odatda 10 daqiqadan oshmaydi. To&apos;lov tizimida uzilish
              bo&apos;lmasa, Premium tez faollashadi.
            </p>

            {/* Oraliq CTA */}
            <div className="bg-white rounded-2xl p-6 border-2 border-primary/20 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-bold text-foreground text-lg">1 oylik Telegram Premium — 59,000 so&apos;m</p>
                <p className="text-sm text-muted">Uzcard, Humo orqali so&apos;mda to&apos;lov</p>
              </div>
              <Link
                href="https://t.me/premiumsend_admin"
                target="_blank"
                className="px-5 py-2.5 rounded-xl hero-gradient text-white font-semibold text-sm shadow-lg shadow-primary/25 whitespace-nowrap"
              >
                Sotib olish
              </Link>
            </div>
          </section>

          {/* Section 5 — Pricing Table */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              1 oylik Telegram Premium narxi: paketlarni taqqoslash
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Premium Send da barcha muddatli paketlar mavjud. Qisqa muddatga kerak bo&apos;lsa
              1 oylik tanlang, agar uzoqroq foydalanmoqchi bo&apos;lsangiz — oyiga hisoblaganda
              uzoq muddatli paketlar ancha arzonroq tushadi:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Paket</div>
                <div className="text-center">Narx</div>
                <div className="text-center">Oyiga</div>
                <div className="text-center">Telegramda</div>
              </div>
              <div className="grid grid-cols-4 p-4 bg-primary-light/30 items-center text-sm">
                <div className="font-bold text-primary">1 oylik</div>
                <div className="text-center text-primary font-medium">59,000 so&apos;m</div>
                <div className="text-center text-primary font-medium">59,000 so&apos;m</div>
                <div className="text-center text-muted text-xs">Bor, lekin xorijiy karta</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-t border-card-border items-center text-sm">
                <div className="font-medium">3 oylik</div>
                <div className="text-center text-muted">175,000 so&apos;m</div>
                <div className="text-center text-muted">~58,333 so&apos;m</div>
                <div className="text-center text-muted text-xs">Yo&apos;q</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-t border-card-border items-center text-sm">
                <div className="font-medium">6 oylik</div>
                <div className="text-center text-muted">235,000 so&apos;m</div>
                <div className="text-center text-muted">~39,167 so&apos;m</div>
                <div className="text-center text-muted text-xs">Yo&apos;q</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-t border-card-border items-center text-sm">
                <div className="font-medium">12 oylik</div>
                <div className="text-center text-muted">425,000 so&apos;m</div>
                <div className="text-center text-muted">~35,417 so&apos;m</div>
                <div className="text-center text-muted text-xs">Bor, lekin xorijiy karta</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              Diqqat: Telegram ilovasida 1 oylik va 12 oylik paketlar mavjud, lekin ular
              faqat xorijiy karta yoki Google/Apple Pay orqali sotib olinadi. 3 oylik va
              6 oylik paketlar esa Telegramda umuman yo&apos;q — ularni faqat Premium Send
              orqali olish mumkin.
            </p>
            <p className="text-muted leading-relaxed">
              Agar Premiumni birinchi marta sinab ko&apos;rmoqchi bo&apos;lsangiz, 1 oylik ideal
              boshlang&apos;ich nuqta. Maqnul bo&apos;lsa, keyingi safar{" "}
              <Link href="/3-oylik" className="text-primary font-semibold hover:underline">
                3 oylik
              </Link>{" "}
              yoki{" "}
              <Link href="/6-oylik" className="text-primary font-semibold hover:underline">
                6 oylik
              </Link>{" "}
              tanlash orqali har oyga to&apos;lanadigan summani kamaytirishingiz mumkin.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              1 oylik Telegram Premium O&apos;zbekistonda: kimlar uchun eng mos?
            </h2>

            <div className="space-y-6 mb-6">
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  Birinchi marta sinab ko&apos;rmoqchilar
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Agar Telegram Premium haqida eshitgan bo&apos;lsangiz, lekin qiymatini
                  bilmasangiz — 1 oylik ideal sinov muddati. Bir oy davomida barcha
                  imkoniyatlarni to&apos;liq baholab, keyinchalik uzoqroq muddatga o&apos;tish
                  yoki to&apos;xtatish qaroringizni qabul qilasiz.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  Muayyan loyiha yoki tadbirga tayyorlanuvchilar
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Ba&apos;zan faqat bir oy uchun Premium kerak bo&apos;ladi — masalan, muhim
                  konferentsiya, kurs yoki loyiha davomida. Katta hajmli fayllarni
                  yuborish, reklama ko&apos;rmaslik va tezkor tarjima shu vaqt uchun yetarli.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  Do&apos;st yoki yaqiniga sovg&apos;a qilmoqchilar
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  @premiumsend_admin orqali o&apos;zganing akkauntiga ham Premium sotib olish
                  mumkin. 1 oylik — tug&apos;ilgan kun yoki bayram uchun arzon narxdagi,
                  lekin juda foydali raqamli sovg&apos;a.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  Bloger va kontent yaratuvchilar
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Agar Telegram kanalida faolsangiz, Premium sizga katta hajmli fayllarni
                  yuklash, eksklyuziv reaksiyalar va profilingizni ajratib ko&apos;rsatish
                  imkonini beradi. Obunachilarga Premium badge ko&apos;rinishi — o&apos;z-o&apos;zidan
                  ishonch belgisi.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              1 oy — qisqa, lekin Premium imkoniyatlarini his qilish uchun yetarli.
              Agar mamnun bo&apos;lsangiz, keyingi safar{" "}
              <Link href="/3-oylik" className="text-primary font-semibold hover:underline">
                3 oylik
              </Link>
              ,{" "}
              <Link href="/6-oylik" className="text-primary font-semibold hover:underline">
                6 oylik
              </Link>{" "}
              yoki{" "}
              <Link href="/12-oylik" className="text-primary font-semibold hover:underline">
                12 oylik
              </Link>{" "}
              variantga o&apos;tish ham mumkin — uzoqroq muddatlar oyiga hisoblaganda arzonroq.
            </p>

            {/* Oraliq CTA 2 */}
            <div className="bg-white rounded-2xl p-6 border-2 border-primary/20 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <div>
                <p className="font-bold text-foreground text-lg">1 oylik Telegram Premium — 59,000 so&apos;m</p>
                <p className="text-sm text-muted">
                  Hoziroq{" "}
                  <Link href="https://t.me/premiumsend_admin" target="_blank" className="text-primary hover:underline">
                    @premiumsend_admin
                  </Link>{" "}
                  ga yozing
                </p>
              </div>
              <Link
                href="https://t.me/premiumsend_admin"
                target="_blank"
                className="px-6 py-3 rounded-xl hero-gradient text-white font-semibold text-sm shadow-lg shadow-primary/25 whitespace-nowrap"
              >
                Sotib olish
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">
              Tez-tez so&apos;raladigan savollar (FAQ)
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "1 oylik Telegram Premium sotib olish uchun xorijiy karta kerakmi?",
                  a: "Telegram ilovasida to'lash uchun xorijiy karta yoki Google/Apple Pay kerak. Lekin @premiumsend_admin orqali Uzcard yoki Humo kartasi bilan so'mda to'lash mumkin — xorijiy karta talab qilinmaydi.",
                },
                {
                  q: "1 oylik Telegram Premium Telegramning rasmiy ilovasida mavjudmi?",
                  a: "Ha, Telegram ilovasida 1 oylik va 12 oylik paket mavjud. Lekin to'lov faqat xorijiy karta yoki Google/Apple Pay orqali amalga oshiriladi. O'zbekistonlik foydalanuvchilar uchun bu imkoniyat cheklangan — shu sababli @premiumsend_admin orqali so'mda sotib olish ancha qulay.",
                },
                {
                  q: "To'lovdan keyin Premium qachon faollashadi?",
                  a: "Odatda bir necha daqiqa ichida. @premiumsend_admin to'lovni tasdiqlaydi va Premium ko'rsatilgan akkauntga faollashtiriladi.",
                },
                {
                  q: "Boshqa odamga — do'stimga yoki oila a'zomga — 1 oylik Premium olsa bo'ladimi?",
                  a: "Ha. Buning uchun faqat o'sha odamning Telegram username'ini yetkazing. Premium uning akkauntiga faollashadi.",
                },
                {
                  q: "1 oylik Telegram Premium narxi qancha?",
                  a: "Premium Send da 1 oylik Telegram Premium narxi 59,000 so'm. To'lov O'zbekiston so'mida — Uzcard yoki Humo kartasi orqali amalga oshiriladi.",
                },
                {
                  q: "Premium Send da qanday paketlar bor?",
                  a: "Premium Send da 1 oylik (59,000 so'm), 3 oylik (175,000 so'm), 6 oylik (235,000 so'm) va 12 oylik (425,000 so'm) Telegram Premium paketlari mavjud. Uzoqroq muddatli paketlar oyiga hisoblaganda ancha arzonroq tushadi.",
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

          {/* Conclusion */}
          <section>
            <div className="hero-gradient rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-5 left-5 w-32 h-32 bg-white rounded-full blur-2xl" />
              </div>
              <div className="relative">
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  Agar O&apos;zbekistonda mahalliy to&apos;lov tizimi orqali, tez va ishonchli tarzda
                  1 oylik Telegram Premium sotib olish kerak bo&apos;lsa —{" "}
                  <strong className="text-white">@premiumsend_admin</strong> bugun uchun eng
                  qulay yechim. Uzcard, Humo, Click yoki Payme orqali buyurtma bering va
                  Premium imkoniyatlaridan bahramand bo&apos;ling.
                </p>
                <Link
                  href="https://t.me/premiumsend_admin"
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
                  @premiumsend_admin ga o&apos;tish
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
