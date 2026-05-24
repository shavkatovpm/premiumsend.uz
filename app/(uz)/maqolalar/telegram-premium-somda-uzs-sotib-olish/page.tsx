import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Telegram Premium so'mda (UZS) sotib olish — valyuta konvertatsiyasiz",
  description:
    "Telegram Premium-ni so'mda (UZS) to'g'ridan-to'g'ri sotib oling: Uzcard, Humo, Click, Payme yoki Visa. Dollar konvertatsiyasi, yashirin kurs farqi va platforma komissiyasi yo'q. 1 oylik 59 000 so'm, 12 oylik 425 000 so'm.",
  keywords: [
    "telegram premium so'mda",
    "telegram premium uzs",
    "telegram premium so'mda sotib olish",
    "telegram premium uzbek so'm",
    "telegram premium valyuta konvertatsiyasiz",
    "telegram premium mahalliy karta",
    "telegram premium kursiz",
    "telegram premium o'zbekiston so'm",
    "PremiumSendBot",
    "telegram premium uzcard humo click payme",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/maqolalar/telegram-premium-somda-uzs-sotib-olish",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/telegram-premium-somda-uzs-sotib-olish",
      ru: "https://premiumsend.uz/ru/maqolalar/telegram-premium-somda-uzs-sotib-olish",
      "x-default": "https://premiumsend.uz/maqolalar/telegram-premium-somda-uzs-sotib-olish",
    },
  },
  openGraph: {
    title:
      "Telegram Premium so'mda sotib olish — valyuta konvertatsiyasiz",
    description:
      "Telegram Premium-ni so'mda to'g'ridan-to'g'ri to'lab oling. Dollar konvertatsiyasi, kurs riski va yashirin komissiya yo'q. Uzcard, Humo, Click, Payme, Visa qabul qilinadi.",
    url: "https://premiumsend.uz/maqolalar/telegram-premium-somda-uzs-sotib-olish",
    type: "article",
    publishedTime: "2026-05-18",
  },
};

export default function ArticleSomdaUzs() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Telegram Premium so'mda (UZS) sotib olish — valyuta konvertatsiyasiz",
    description:
      "Telegram Premium-ni so'mda (UZS) to'g'ridan-to'g'ri sotib olish — App Store dollarli to'lovi va Fragment kripto to'lovidan farqli. Mahalliy karta orqali kurs riskisiz xarid.",
    datePublished: "2026-05-18",
    dateModified: "2026-05-18",
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
      "https://premiumsend.uz/maqolalar/telegram-premium-somda-uzs-sotib-olish",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Telegram Premium-ni faqat so'mda (UZS) sotib olish mumkinmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha. Premium Send (@PremiumSendBot) Telegram Premium-ni to'g'ridan-to'g'ri so'mda taklif qiladi: 1 oylik 59 000 so'm, 3 oylik 175 000 so'm, 6 oylik 235 000 so'm, 12 oylik 425 000 so'm. Hech qanday dollar yoki rubl konvertatsiyasi talab qilinmaydi — mahalliy karta orqali so'mda to'laysiz.",
        },
      },
      {
        "@type": "Question",
        name: "Nima uchun App Store va Google Play'da Premium dollarda ko'rinadi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "App Store va Google Play global narx tizimida ishlaydi. O'zbekiston do'konida narx dollarda yoki bank kursi bilan so'mga aylantirilgan ko'rinishda chiqadi. Bank konvertatsiya kursi rasmiy O'zbekiston Markaziy banki kursidan 5-12% yuqori — ya'ni bir xil obuna avtomatik qimmatroq tushadi.",
        },
      },
      {
        "@type": "Question",
        name: "Premium Send'da yashirin kurs farqi bormi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yo'q. Premium Send'da narx aniq so'mda e'lon qilinadi va to'lov amalga oshganda ham aynan o'sha summa yechiladi. Hech qanday valyuta konvertatsiyasi, kurs farqi yoki 'xizmat haqi' qo'shilmaydi. Karta hisobidan 59 000 so'm — bot'da ham 59 000 so'm.",
        },
      },
      {
        "@type": "Question",
        name: "Qaysi so'mli kartalar qabul qilinadi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Uzcard, Humo, Click, Payme va Visa. Barchasi so'mda ishlaydi. Uzcard va Humo eng keng tarqalgan — har bir bankda chiqariladi. Click va Payme ilovalari bo'lsa, to'lov yana tezroq amalga oshadi. Visa — xalqaro karta bo'lsa ham, mahalliy so'mli Visa Premium Send'da so'mda qabul qilinadi.",
        },
      },
      {
        "@type": "Question",
        name: "Dollar kursi ko'tarilsa, Premium Send narxi ham o'zgaradimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "12 oylik paketni so'mda to'lab qo'ysangiz, keyingi 365 kun davomida hech qanday kurs o'zgarishi sizga ta'sir qilmaydi. Sayt narxlari Premium Send tomonidan o'zbek so'mida belgilangan — bir martalik to'lovingiz tugagandan keyin xizmat yiliga qadar to'liq ishlaydi.",
        },
      },
      {
        "@type": "Question",
        name: "Fragment'da Premium-ni so'mda olib bo'ladimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yo'q. Fragment.com — Telegram'ning rasmiy savdo platformasi — faqat TON kripto valyutasi yoki xalqaro karta (Visa/Mastercard) qabul qiladi. O'zbekistondagi Uzcard, Humo, Click, Payme Fragment'da ishlamaydi. Shu sababli mahalliy foydalanuvchi uchun so'mli xarid faqat Premium Send kabi mahalliy xizmatlar orqali mumkin.",
        },
      },
      {
        "@type": "Question",
        name: "Karta valyutasi USD bo'lsa, Premium-ni qanday olaman?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Premium Send so'mli kartalar uchun mo'ljallangan. Agar sizning kartangiz dollar hisobida bo'lsa, bank to'lov paytida avtomatik so'mga aylantiradi — bu ham qo'shimcha konvertatsiya farqini keltirib chiqaradi. Eng arzon yo'l — so'mli Uzcard, Humo yoki so'mli Visa orqali to'lash.",
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
        name: "Telegram Premium so'mda sotib olish",
        item: "https://premiumsend.uz/maqolalar/telegram-premium-somda-uzs-sotib-olish",
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
          Telegram Premium so&apos;mda sotib olish
        </span>
      </nav>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">
              To&apos;lov qo&apos;llanmasi
            </span>
            <time className="text-xs text-muted" dateTime="2026-05-18">
              2026-yil, 18-may
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Telegram Premium so&apos;mda (UZS) sotib olish — valyuta konvertatsiyasiz
          </h1>

          {/* TL;DR */}
          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-sm font-bold text-primary mb-2">QISQACHA JAVOB</p>
            <p className="text-foreground leading-relaxed font-medium">
              Telegram Premium-ni <strong>faqat so&apos;mda (UZS)</strong> sotib olish uchun{" "}
              <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>{" "}
              ni oching: <strong>1 oylik 59 000 so&apos;m</strong>, <strong>3 oylik 175 000</strong>,{" "}
              <strong>6 oylik 235 000</strong>, <strong>12 oylik 425 000 so&apos;m</strong>. To&apos;lov Uzcard, Humo, Click, Payme yoki Visa orqali — dollar konvertatsiyasi, kurs riski va platforma komissiyasi yo&apos;q.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            O&apos;zbekistonda Telegram Premium izlash deyarli har doim bir muammoga olib keladi: rasmiy ilovada narx dollarda, Fragment&apos;da TON kripto talab qilinadi, App Store esa o&apos;z konvertatsiya kursini qo&apos;shadi. Natijada e&apos;lon qilingan narx va karta hisobidan yechiladigan haqiqiy summa o&apos;rtasida 10-15% farq paydo bo&apos;ladi.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Bu maqolada Telegram Premium-ni <strong>to&apos;g&apos;ridan-to&apos;g&apos;ri so&apos;mda</strong> — hech qanday valyuta konvertatsiyasi, kurs riski yoki yashirin komissiyasiz — qanday sotib olish mumkinligini ko&apos;rsatamiz. Aniq narxlar 2026-yil may holatiga ko&apos;ra keltirilgan.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 — Nega so'mda muhim */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Nima uchun so&apos;mda to&apos;lash muhim?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Bir qarashda &quot;qaysi valyutada to&apos;lashning farqi nima?&quot; degan savol oddiy ko&apos;rinadi — karta hisobidan baribir so&apos;m yechiladi-ku. Lekin amalda har bir konvertatsiya bosqichida kichik foiz yo&apos;qotiladi. Bu foizlar yig&apos;ilib, oylik narxni sezilarli oshiradi.
            </p>

            <div className="bg-section-alt rounded-xl p-5 mb-4">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Misol:</strong> App Store&apos;da Telegram Premium 1 oylik narxi $4.99. Markaziy bank rasmiy kursi bo&apos;yicha bu taxminan 62 000 so&apos;m bo&apos;lishi kerak. Lekin Apple va bank o&apos;z konvertatsiya marjasini qo&apos;shadi — natijada karta hisobidan 70 000-78 000 so&apos;m yechiladi. Premium Send&apos;da esa to&apos;g&apos;ridan-to&apos;g&apos;ri <strong>59 000 so&apos;m</strong> — birinchi raqam ham, yakuniy raqam ham bir xil.
              </p>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              So&apos;mda to&apos;lov uch katta afzallikni beradi:
            </p>

            <ul className="list-disc list-inside space-y-2 text-muted mb-4">
              <li><strong className="text-foreground">Aniq narx:</strong> e&apos;lon qilingan summa = yechiladigan summa.</li>
              <li><strong className="text-foreground">Kurs riski yo&apos;q:</strong> dollar bugun 12 600 yoki 13 200 bo&apos;lishidan qat&apos;i nazar, Premium narxi o&apos;sha-o&apos;sha.</li>
              <li><strong className="text-foreground">Hech qanday komissiya:</strong> bank yoki platforma o&apos;z &quot;konvertatsiya marjasi&quot;ni qo&apos;sha olmaydi.</li>
            </ul>

            <p className="text-muted leading-relaxed">
              Premium Send aynan shu uch tamoyilga asoslangan: barcha tariflar so&apos;mda belgilangan, to&apos;lov ham so&apos;mda. Bu O&apos;zbekiston foydalanuvchisi uchun eng tabiiy va eng arzon yo&apos;l.
            </p>
          </section>

          {/* Section 2 — Aniq so'mli narxlar */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Telegram Premium so&apos;mda qancha turadi? (aniq narxlar)
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Quyida Premium Send&apos;dagi barcha tariflar so&apos;mda. Narxlar to&apos;g&apos;ridan-to&apos;g&apos;ri — &quot;dollardan aylantirilgan&quot; emas:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Muddat</div>
                <div className="text-center">Jami so&apos;mda</div>
                <div className="text-center">Oylik</div>
                <div className="text-center">Holat</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">1 oylik</div>
                <div className="text-center font-bold">59 000 so&apos;m</div>
                <div className="text-center">59 000 so&apos;m</div>
                <div className="text-center text-muted">Bir martalik</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">3 oylik</div>
                <div className="text-center font-bold">175 000 so&apos;m</div>
                <div className="text-center">58 333 so&apos;m</div>
                <div className="text-center text-green-600">Qisqa muddat</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">6 oylik</div>
                <div className="text-center font-bold">235 000 so&apos;m</div>
                <div className="text-center text-amber-600">39 167 so&apos;m</div>
                <div className="text-center text-green-600">33% tejam</div>
              </div>
              <div className="grid grid-cols-4 p-4 bg-primary-light/30 items-center text-sm">
                <div className="font-bold text-primary">12 oylik ⭐</div>
                <div className="text-center font-bold text-primary">425 000 so&apos;m</div>
                <div className="text-center font-bold text-primary">35 417 so&apos;m</div>
                <div className="text-center font-bold text-green-600">40% tejam</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              Barcha to&apos;rt tarif so&apos;mda aniq raqam bilan ko&apos;rsatilgan. Hech qanday &quot;$4.99 bank kursida...&quot; degan qo&apos;shimcha hisob-kitob yo&apos;q.{" "}
              <Link href="/maqolalar/telegram-premium-narxlari" className="text-primary font-semibold hover:underline">
                Tariflar bo&apos;yicha taqqoslash
              </Link>{" "}
              maqolasida har bir muddatning afzalliklari batafsil ko&apos;rib chiqilgan.
            </p>

            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5">
              <p className="text-foreground leading-relaxed">
                <strong>Eslatma:</strong> bu so&apos;mli narxlar bir martalik to&apos;lov hisoblanadi. Avtomatik yangilash (auto-renewal) yo&apos;q — Premium muddati tugagach, agar siz qaytadan to&apos;lamasangiz, hech narsa yechilmaydi. Bu App Store/Google Play&apos;dagi obuna modelidan tubdan farq qiladi.
              </p>
            </div>
          </section>

          {/* Section 3 — Konvertatsiya farqi qayerdan keladi */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Konvertatsiya farqi qayerdan keladi va u qancha?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Boshqa kanallarda Premium narxi dollar yoki kripto valyutada belgilanadi. Karta hisobidan so&apos;m yechilguncha bir nechta qatlam o&apos;tiladi va har biri kichik foiz oladi:
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">1-qatlam: bank konvertatsiya kursi</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Bank to&apos;lov paytida o&apos;z &quot;sotuv kursi&quot;ni qo&apos;llaydi — bu Markaziy bank rasmiy kursidan odatda 3-5% yuqori. Ya&apos;ni $5 lik to&apos;lov rasmiy kursda 62 000 so&apos;m bo&apos;lsa ham, kartadan 64 500-65 100 so&apos;m yechiladi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">2-qatlam: xalqaro to&apos;lov tizimi komissiyasi</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Visa va Mastercard chet ellik savdogarga to&apos;lov o&apos;tkazganda 1-3% xalqaro to&apos;lov haqi oladi. Ba&apos;zi banklar buni alohida qatorda ko&apos;rsatadi, ba&apos;zilari narx ichiga kiritadi — har holda bu pul karta egasidan ketadi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">3-qatlam: platforma komissiyasi (App Store/Play)</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Apple va Google sotuvdan 15-30% oladi va bu komissiyani Telegram o&apos;z narxiga qo&apos;shgan bo&apos;ladi. Shuning uchun App Store narxi rasmiy Telegram narxidan boshlanib qimmatroq.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-1">4-qatlam: kripto konvertatsiya (Fragment uchun)</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Fragment.com Telegram&apos;ning rasmiy savdo platformasi, lekin u TON yoki xalqaro karta talab qiladi. So&apos;mli Uzcard, Humo, Click, Payme Fragment&apos;da ishlamaydi — mahalliy foydalanuvchi uchun bu kanal amalda yopiq.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Premium Send esa bu to&apos;rt qatlamdan hech birini o&apos;tmaydi: narx so&apos;mda belgilangan, to&apos;lov so&apos;mda qabul qilinadi, mahalliy karta bilan ishlaydi. Shuning uchun yakuniy narx ham e&apos;lon qilingan narxga teng.{" "}
              <Link href="/maqolalar/nega-telegram-premium-app-store-play-market-qimmat" className="text-primary font-semibold hover:underline">
                App Store&apos;da Premium nega qimmatroq
              </Link>{" "}
              haqida alohida tahlil bor.
            </p>
          </section>

          {/* Mid CTA */}
          <section>
            <div className="bg-primary-light/40 border border-primary/20 rounded-2xl p-6 md:p-8 text-center">
              <p className="text-foreground text-lg leading-relaxed mb-4">
                Telegram Premium so&apos;mda — <strong>3 oylik 175 000</strong>, <strong>6 oylik 235 000</strong>,{" "}
                <strong>12 oylik 425 000 so&apos;m</strong>. Hech qanday dollar yoki kripto talab qilinmaydi.
              </p>
              <Link
                href="https://t.me/premiumsendbot"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-2xl hover:shadow-xl transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                Botda tarifni so&apos;mda tanlash
              </Link>
            </div>
          </section>

          {/* Section 4 — Kanal taqqoslash so'mli */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Qaysi kanallar so&apos;mli to&apos;lovni qabul qiladi?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              O&apos;zbekistondan Telegram Premium sotib olishning to&apos;rtta asosiy yo&apos;li bor, lekin ularning so&apos;mli to&apos;lovga munosabati har xil:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Kanal</div>
                <div className="text-center">Narx valyutasi</div>
                <div className="text-center">So&apos;mli karta</div>
                <div className="text-center">Konvertatsiya</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">App Store (iOS)</div>
                <div className="text-center text-red-600">USD</div>
                <div className="text-center text-red-600">Xorijiy</div>
                <div className="text-center text-red-600">+15-20%</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Google Play</div>
                <div className="text-center text-red-600">USD</div>
                <div className="text-center text-red-600">Xorijiy</div>
                <div className="text-center text-red-600">+12-18%</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Fragment.com</div>
                <div className="text-center text-red-600">TON / USD</div>
                <div className="text-center text-red-600">Qabul qilmaydi</div>
                <div className="text-center text-red-600">Kripto kursi</div>
              </div>
              <div className="grid grid-cols-4 p-4 bg-primary-light/30 items-center text-sm">
                <div className="font-bold text-primary">Premium Send</div>
                <div className="text-center text-primary font-bold">UZS (so&apos;m)</div>
                <div className="text-center text-green-600 font-medium">Hammasi</div>
                <div className="text-center text-green-600 font-medium">0%</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              <strong>Muhim eslatma:</strong> Fragment Telegram&apos;ning rasmiy mahsulot platformasi va u TON kriptosi yoki xalqaro Visa/Mastercard qabul qiladi. Bu O&apos;zbekistondagi Uzcard, Humo, Click va Payme uchun mos emas — kartani ulay olmaysiz, shuning uchun mahalliy foydalanuvchi uchun Fragment amaliy yo&apos;l sanalmaydi.
            </p>
            <p className="text-muted leading-relaxed">
              Premium Send aynan shu bo&apos;shliqni to&apos;ldiradi: O&apos;zbekistonda chiqarilgan har qanday so&apos;mli karta yoki to&apos;lov ilovasi qabul qilinadi va narx ham bevosita so&apos;mda.
            </p>
          </section>

          {/* Section 5 — So'mli to'lov usullari */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              So&apos;mli to&apos;lov usullari: qaysi karta orqali to&apos;lash mumkin?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Premium Send beshta asosiy to&apos;lov usulini qabul qiladi — barchasi so&apos;mda ishlaydi. Karta qaysi banknikiligi muhim emas, faqat so&apos;mli hisobda bo&apos;lsa kifoya:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>To&apos;lov usuli</div>
                <div className="text-center">Tezligi</div>
                <div className="text-center">Kim uchun qulay</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Uzcard</div>
                <div className="text-center text-green-600">2-3 daqiqa</div>
                <div className="text-center text-muted">Eng keng tarqalgan karta</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Humo</div>
                <div className="text-center text-green-600">2-3 daqiqa</div>
                <div className="text-center text-muted">Maosh kartalari ko&apos;p</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Click</div>
                <div className="text-center text-green-600">1-2 daqiqa</div>
                <div className="text-center text-muted">Click ilovasi foydalanuvchisi</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Payme</div>
                <div className="text-center text-green-600">1-2 daqiqa</div>
                <div className="text-center text-muted">Payme ilovasi foydalanuvchisi</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center text-sm">
                <div className="font-medium">Visa (so&apos;mli)</div>
                <div className="text-center text-green-600">2-3 daqiqa</div>
                <div className="text-center text-muted">Xalqaro karta egasi</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              Tezlik ham, narx ham deyarli bir xil. To&apos;lov usulini tanlash sof qulaylik masalasi — telefoningizda qaysi ilova o&apos;rnatilganligiga qarab.{" "}
              <Link href="/maqolalar/telegram-premium-humo-orqali" className="text-primary font-semibold hover:underline">
                Humo orqali to&apos;lov
              </Link>,{" "}
              <Link href="/maqolalar/telegram-premium-click-orqali" className="text-primary font-semibold hover:underline">
                Click orqali to&apos;lov
              </Link>{" "}
              va{" "}
              <Link href="/maqolalar/telegram-premium-payme-orqali" className="text-primary font-semibold hover:underline">
                Payme orqali to&apos;lov
              </Link>{" "}
              qo&apos;llanmalari alohida sahifalarda batafsil keltirilgan.
            </p>
          </section>

          {/* Section 6 — Bosqichma-bosqich */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Bosqichma-bosqich: so&apos;mda qanday to&apos;lash kerak?
            </h2>

            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Qisqa javob:</strong>{" "}
                <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">
                  @PremiumSendBot
                </Link>{" "}
                ni oching → kerakli muddatni tanlang → username&apos;ingizni kiriting → so&apos;mli kartangizdan ko&apos;rsatilgan summani o&apos;tkazing → 3-5 daqiqada Premium faollashadi. Jami vaqt: 5 daqiqa.
              </p>
            </div>

            <p className="text-muted leading-relaxed mb-6">
              Pastdagi besh qadam — so&apos;mli xaridning to&apos;liq jarayoni. Hech qaysi bosqichda dollar, kripto yoki xalqaro karta talab qilinmaydi:
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  step: "1",
                  title: "Botda muddat tanlang",
                  desc: "@PremiumSendBot'ni Telegram qidiruvga yozib oching. /start tugmasini bosing — 1, 3, 6 va 12 oylik tariflar ro'yxati chiqadi. Narxlar bevosita so'mda: 59 000, 175 000, 235 000, 425 000.",
                },
                {
                  step: "2",
                  title: "Premium qaysi username'ga aktiv bo'lishini kiriting",
                  desc: "Premium kerak bo'lgan Telegram akkauntning @username'ini kiriting. O'zingiz uchun olsangiz — o'z username'ingiz, sovg'a qilsangiz — qabul qiluvchining username'i (Telegram qoidasiga ko'ra 1 oylik sovg'a yo'q, faqat 3, 6, 12 oylik).",
                },
                {
                  step: "3",
                  title: "So'mli to'lov usulini tanlang",
                  desc: "Uzcard, Humo, Click, Payme yoki Visa orasidan birini tanlang. Bot karta raqami va aniq so'mli summani beradi — masalan, '425 000 so'm. Karta: 8600 XXXX XXXX XXXX'. Narx hech qanday qo'shimcha komissiyasiz.",
                },
                {
                  step: "4",
                  title: "Kartangiz ilovasidan so'mda o'tkazma qiling",
                  desc: "Uzcard yoki Humo bo'lsa — mobil ilovadan P2P o'tkazma. Click/Payme bo'lsa — o'sha ilovaning ichidan to'lov. So'mda o'tkazasiz, summa kartadan aynan e'lon qilingan miqdorda yechiladi.",
                },
                {
                  step: "5",
                  title: "Premium 3-5 daqiqada faollashadi",
                  desc: "To'lov tasdiqlangach, bot avtomatik Premiumni faollashtiradi. Kiritilgan username profilida Premium belgisi paydo bo'ladi va barcha imkoniyatlar darhol ishga tushadi.",
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
              Eng muhim bosqich — 3-bosqich. Bot ekrandagi summa va kartangizdan yechiladigan summa har doim teng bo&apos;ladi. Agar to&apos;lov paytida boshqa raqam ko&apos;rinsa (masalan, bank dollar deb hisoblay boshlasa) — bu sizning kartangiz dollar hisobida ekanligini bildiradi. So&apos;mli kartaga o&apos;ting.
            </p>
          </section>

          {/* Section 7 — Kurs riskidan saqlanish */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Dollar kursi o&apos;zgarsa, Premium narxi qanday bo&apos;ladi?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Bu savol uzoq muddatli tariflar uchun ayniqsa muhim. 12 oylik Premiumni so&apos;mda to&apos;lab qo&apos;ysangiz, keyingi yil davomida nima bo&apos;lishidan qat&apos;i nazar xizmat to&apos;liq ishlaydi:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Dollar oshsa</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Dollar kursi 13 200 dan 14 000 ga ko&apos;tarilsa — App Store narxi avtomatik qimmatlashadi (chunki u dollarga bog&apos;langan). Sizning 425 000 so&apos;mlik 12 oylik to&apos;lovingiz esa o&apos;sha-o&apos;sha, hech qanday qo&apos;shimcha summa olinmaydi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Dollar tushsa</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Aksincha, dollar pasaysa ham hech narsa qaytarib berilmaydi — chunki siz so&apos;mda to&apos;lagansiz, na valyuta operatsiyasi bo&apos;lgan. Lekin shuning evaziga aniqlik va xotirjamlikni qo&apos;lga kiritasiz.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Markaziy bank kursi o&apos;zgarsa</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Premium Send tariflari Markaziy bank rasmiy kursiga bog&apos;langan emas. Narxlar so&apos;mda mustaqil belgilangan — sayt narx jadvalini yangilashi mumkin, lekin sizning oldindan to&apos;lagan obunangizga ta&apos;sir qilmaydi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Inflyatsiya ta&apos;siri</h3>
                <p className="text-sm text-muted leading-relaxed">
                  12 oy ichidagi inflyatsiya har qanday holatda bo&apos;lishi mumkin. Lekin uzoq muddatli paketni bir martalik so&apos;mda to&apos;lash — bu inflyatsiyadan oldinroq harakat qilish bilan teng. Yiliga 282 996 so&apos;m tejam ham shu bilan birga keladi.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Shu sabab so&apos;mda uzoq muddatli paketni olish faqat &quot;eng arzon yo&apos;l&quot; emas, balki &quot;eng barqaror yo&apos;l&quot;. Kelajakdagi kurs harakatidan mustaqil bo&apos;lasiz va xizmat to&apos;liq tasdiqlangan bo&apos;ladi.{" "}
              <Link href="/maqolalar/12-oylik-telegram-premium-sotib-olish" className="text-primary font-semibold hover:underline">
                12 oylik Premium qo&apos;llanmasi
              </Link>{" "}
              da bu mavzu yanada batafsilroq.
            </p>
          </section>

          {/* Section 8 — Sovg'a uchun so'mda */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Sovg&apos;a qilish ham so&apos;mda mumkinmi?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Ha — Premium Send orqali sovg&apos;a (gift) ham aynan so&apos;mda amalga oshiriladi. Hech qanday valyuta konvertatsiyasi yo&apos;q, va siz to&apos;lagan summa qabul qiluvchining akkauntiga bevosita Premium sifatida o&apos;tadi.
            </p>

            <div className="bg-section-alt rounded-xl p-5 mb-4">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Muhim:</strong> Telegram rasmiy qoidasiga ko&apos;ra 1 oylik Premium sovg&apos;a qilib bo&apos;lmaydi — bu cheklov Telegram tomonidan o&apos;rnatilgan. Sovg&apos;a uchun mavjud variantlar:{" "}
                <Link href="/maqolalar/3-oylik-telegram-premium-sovga-qilish" className="text-primary hover:underline">3 oylik (175 000 so&apos;m)</Link>,{" "}
                <Link href="/maqolalar/6-oylik-telegram-premium-sovga-qilish" className="text-primary hover:underline">6 oylik (235 000 so&apos;m)</Link>,{" "}
                yoki <Link href="/maqolalar/12-oylik-telegram-premium-sovga-qilish" className="text-primary hover:underline">12 oylik (425 000 so&apos;m)</Link>.
              </p>
            </div>

            <p className="text-muted leading-relaxed">
              Sovg&apos;a jarayoni o&apos;zingiz uchun olishdan deyarli farq qilmaydi: botda muddatni tanlaysiz, lekin username&apos;ga qabul qiluvchining @username&apos;ini kiritasiz. Qolgan to&apos;lov bosqichlari bir xil — so&apos;mda Uzcard, Humo, Click yoki Payme orqali.
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
                  q: "Telegram Premium-ni faqat so'mda (UZS) sotib olish mumkinmi?",
                  a: "Ha. Premium Send (@PremiumSendBot) Telegram Premium-ni to'g'ridan-to'g'ri so'mda taklif qiladi: 1 oylik 59 000 so'm, 3 oylik 175 000 so'm, 6 oylik 235 000 so'm, 12 oylik 425 000 so'm. Hech qanday dollar yoki rubl konvertatsiyasi talab qilinmaydi — mahalliy karta orqali so'mda to'laysiz.",
                },
                {
                  q: "Nima uchun App Store va Google Play'da Premium dollarda ko'rinadi?",
                  a: "App Store va Google Play global narx tizimida ishlaydi. O'zbekiston do'konida narx dollarda yoki bank kursi bilan so'mga aylantirilgan ko'rinishda chiqadi. Bank konvertatsiya kursi rasmiy O'zbekiston Markaziy banki kursidan 5-12% yuqori — ya'ni bir xil obuna avtomatik qimmatroq tushadi.",
                },
                {
                  q: "Premium Send'da yashirin kurs farqi bormi?",
                  a: "Yo'q. Premium Send'da narx aniq so'mda e'lon qilinadi va to'lov amalga oshganda ham aynan o'sha summa yechiladi. Hech qanday valyuta konvertatsiyasi, kurs farqi yoki 'xizmat haqi' qo'shilmaydi. Karta hisobidan 59 000 so'm — bot'da ham 59 000 so'm.",
                },
                {
                  q: "Qaysi so'mli kartalar qabul qilinadi?",
                  a: "Uzcard, Humo, Click, Payme va Visa. Barchasi so'mda ishlaydi. Uzcard va Humo eng keng tarqalgan — har bir bankda chiqariladi. Click va Payme ilovalari bo'lsa, to'lov yana tezroq amalga oshadi. Visa — xalqaro karta bo'lsa ham, mahalliy so'mli Visa Premium Send'da so'mda qabul qilinadi.",
                },
                {
                  q: "Dollar kursi ko'tarilsa, Premium Send narxi ham o'zgaradimi?",
                  a: "12 oylik paketni so'mda to'lab qo'ysangiz, keyingi 365 kun davomida hech qanday kurs o'zgarishi sizga ta'sir qilmaydi. Sayt narxlari Premium Send tomonidan o'zbek so'mida belgilangan — bir martalik to'lovingiz tugagandan keyin xizmat yiliga qadar to'liq ishlaydi.",
                },
                {
                  q: "Fragment'da Premium-ni so'mda olib bo'ladimi?",
                  a: "Yo'q. Fragment.com — Telegram'ning rasmiy savdo platformasi — faqat TON kripto valyutasi yoki xalqaro karta (Visa/Mastercard) qabul qiladi. O'zbekistondagi Uzcard, Humo, Click, Payme Fragment'da ishlamaydi. Shu sababli mahalliy foydalanuvchi uchun so'mli xarid faqat Premium Send kabi mahalliy xizmatlar orqali mumkin.",
                },
                {
                  q: "Karta valyutasi USD bo'lsa, Premium-ni qanday olaman?",
                  a: "Premium Send so'mli kartalar uchun mo'ljallangan. Agar sizning kartangiz dollar hisobida bo'lsa, bank to'lov paytida avtomatik so'mga aylantiradi — bu ham qo'shimcha konvertatsiya farqini keltirib chiqaradi. Eng arzon yo'l — so'mli Uzcard, Humo yoki so'mli Visa orqali to'lash.",
                },
                {
                  q: "Sovg'a qilish ham so'mda mumkinmi?",
                  a: "Ha. Sovg'a qilish jarayoni o'zingiz uchun olishdan farq qilmaydi: narx so'mda, to'lov so'mda. Faqat username sifatida qabul qiluvchining @username'ini kiritasiz. Eslatma: Telegram qoidasiga ko'ra 1 oylik sovg'a mavjud emas — faqat 3, 6 va 12 oylik tariflar sovg'a qilinadi.",
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
                Premium Send so&apos;mli xarid raqamlarda
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">100%</p>
                  <p className="text-sm text-muted">So&apos;mda to&apos;lov, kursiz</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">5</p>
                  <p className="text-sm text-muted">So&apos;mli to&apos;lov usuli</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">0%</p>
                  <p className="text-sm text-muted">Konvertatsiya komissiyasi</p>
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
                  Telegram Premium-ni so&apos;mda — to&apos;g&apos;ridan-to&apos;g&apos;ri{" "}
                  <strong className="text-white">@PremiumSendBot</strong> orqali. Dollar, kripto va kurs riski yo&apos;q.{" "}
                  <strong className="text-white">3 oylik 175 000</strong>,{" "}
                  <strong className="text-white">6 oylik 235 000</strong>,{" "}
                  <strong className="text-white">12 oylik 425 000 so&apos;m</strong>.
                </p>
                <Link
                  href="https://t.me/premiumsendbot"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  So&apos;mda Premium olish
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
