import type { Metadata } from "next";
import Link from "next/link";
import { ogBaseUz } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title:
    "Nega Uzcard/Humo karta App Store va Play Marketda ishlamaydi — sabab va yechim",
  description:
    "Apple ID yoki Google Play hisobingizga to'lov usuli sifatida Uzcard yoki Humo qo'shib bo'lmaydi — bu xato emas, arxitekturaviy cheklov. Sabab, App Store/Play Market qanday to'lovlarni qabul qiladi va Telegram Premium'ni so'mda, mahalliy karta bilan olish yo'li.",
  keywords: [
    "uzcard app store ishlamaydi",
    "humo play market ishlamaydi",
    "uzcard google play qoshib bolmaydi",
    "app store toolov usuli xatosi",
    "play market karta qabul qilmaydi",
    "telegram premium uzcard humo bilan",
    "app store mahalliy karta",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/maqolalar/uzcard-humo-app-store-play-market-ishlamaydi",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/uzcard-humo-app-store-play-market-ishlamaydi",
      ru: "https://premiumsend.uz/ru/maqolalar/uzcard-humo-app-store-play-market-ishlamaydi",
      "x-default":
        "https://premiumsend.uz/maqolalar/uzcard-humo-app-store-play-market-ishlamaydi",
    },
  },
  openGraph: {
    ...ogBaseUz,
    title:
      "Nega Uzcard/Humo karta App Store va Play Marketda ishlamaydi",
    description:
      "Uzcard va Humo App Store/Play Market'ga to'lov usuli sifatida umuman qo'shilmaydi — sababi va Telegram Premium'ni so'mda olishning to'g'ridan-to'g'ri yo'li.",
    url: "https://premiumsend.uz/maqolalar/uzcard-humo-app-store-play-market-ishlamaydi",
    type: "article",
    publishedTime: "2026-09-06",
  },
};

export default function ArticleUzcardHumoAppStorePlayMarket() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Nega Uzcard/Humo karta App Store va Play Marketda ishlamaydi — sabab va yechim",
    description:
      "Uzcard va Humo kartalarni Apple ID yoki Google Play to'lov usuli sifatida nega qo'shib bo'lmasligining texnik sababi va Telegram Premium'ni so'mda, mahalliy karta bilan sotib olish yo'li.",
    datePublished: "2026-09-06",
    dateModified: "2026-09-06",
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
      "https://premiumsend.uz/maqolalar/uzcard-humo-app-store-play-market-ishlamaydi",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Nega Uzcard yoki Humo'ni Apple ID/Google Play to'lov usuliga qo'sha olmayman?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Apple ID va Google Play hisobi to'lov usuli sifatida faqat Visa yoki Mastercard kabi xalqaro karta network'iga ulangan kartalarni qabul qiladi. Uzcard va Humo — O'zbekistonning ichki (domestik) to'lov tizimlari, ular bu xalqaro network'larga ulanmagan, shuning uchun 'karta qo'shish' oynasida ular texnik jihatdan tanlov sifatida umuman chiqmaydi yoki kiritilgan raqam qabul qilinmaydi. Bu vaqtinchalik xato emas, doimiy arxitekturaviy cheklov.",
        },
      },
      {
        "@type": "Question",
        name: "Bu Telegram'ning aybimi yoki Apple/Google'ning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bunga Telegram umuman aloqasi yo'q. Telegram Premium App Store yoki Google Play orqali sotib olinganda, to'lovni to'liq Apple yoki Google boshqaradi — Telegram faqat pul tushgach obunani faollashtiradi. Qaysi karta qabul qilinishini Apple/Google'ning o'z to'lov infratuzilmasi belgilaydi, Telegram'ning bunga ta'siri yo'q.",
        },
      },
      {
        "@type": "Question",
        name: "Play Market'da hisobim O'zbekiston bo'lsa ham nega faqat xalqaro karta so'raladi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Google Play hisob mamlakati to'lov valyutasi va narxni belgilaydi, lekin qaysi kartalar network darajasida qabul qilinishini o'zgartirmaydi. Uzcard/Humo Visa/Mastercard network'iga ulanmagani uchun, hisob mamlakati qanday bo'lishidan qat'i nazar, Google Play ularni to'lov manbai sifatida qabul qila olmaydi.",
        },
      },
      {
        "@type": "Question",
        name: "Xorijiy Visa/Mastercard qo'shsam, App Store/Play Market'da Premium sotib olsa bo'ladimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha, texnik jihatdan xalqaro network'ga ulangan Visa yoki Mastercard karta qo'shilsa, to'lov network darajasida qabul qilinadi. Lekin bunda narx dollar/evroda hisoblanadi, valyuta konvertatsiyasi va bank komissiyasi qo'shiladi, va ba'zida bank tomonidan cross-border cheklov yoki BIN/mamlakat mos kelmasligi sababli to'lov baribir rad etilishi mumkin.",
        },
      },
      {
        "@type": "Question",
        name: "Uzcard/Humo bilan Telegram Premium sotib olishning to'g'ridan-to'g'ri yo'li bormi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha — App Store/Play Market'ni chetlab o'tib, PremiumSend kabi mahalliy reseller orqali. Bunda to'lov Uzcard, Humo, Click yoki Payme'ning o'z rasmiy ilovasida, so'mda amalga oshadi, tasdiqlangach Premium Telegram'ning rasmiy bulk-gift mexanizmi orqali akkauntga ulanadi — bu haqiqiy, rasmiy Premium obuna.",
        },
      },
      {
        "@type": "Question",
        name: "Reseller orqali olingan Premium App Store'dagidan farq qiladimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yo'q, Premium statusi bir xil — barcha funksiyalar (4 GB fayl, reklamasiz, animatsiyali profil va h.k.) to'liq ishlaydi. Farq faqat to'lov bosqichida: App Store/Play Market xalqaro karta va valyuta konvertatsiyasi talab qiladi, reseller esa mahalliy karta va so'mda to'lovni qabul qiladi.",
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
        name: "Uzcard/Humo App Store'da ishlamaydi",
        item: "https://premiumsend.uz/maqolalar/uzcard-humo-app-store-play-market-ishlamaydi",
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
          Uzcard/Humo App Store&apos;da ishlamaydi
        </span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">
              To&apos;lov muammolari
            </span>
            <time className="text-xs text-muted" dateTime="2026-09-06">
              2026-yil, 6-sentabr
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Nega Uzcard/Humo karta App Store va Play Marketda ishlamaydi —
            sabab va yechim
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-sm font-bold text-primary mb-2">QISQACHA JAVOB</p>
            <p className="text-foreground leading-relaxed font-medium">
              Uzcard va Humo — O&apos;zbekistonning ichki to&apos;lov tizimlari,
              ular <strong>Visa yoki Mastercard kabi xalqaro network&apos;ga
              ulanmagan</strong>. Apple ID va Google Play to&apos;lov usuli
              sifatida faqat shu xalqaro network&apos;lardagi kartalarni qabul
              qiladi, shuning uchun Uzcard/Humo &quot;karta qo&apos;shish&quot;
              oynasida tanlov sifatida umuman chiqmaydi yoki qabul qilinmaydi —
              bu xato emas, texnik cheklov. Telegram Premium&apos;ni Uzcard yoki
              Humo bilan to&apos;g&apos;ridan-to&apos;g&apos;ri olishning yo&apos;li —
              App Store/Play Market&apos;ni chetlab o&apos;tib, mahalliy reseller
              orqali so&apos;mda to&apos;lash.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Apple ID sozlamalarida &quot;To&apos;lov usuli qo&apos;shish&quot;
            bosilganda Uzcard yoki Humo karta raqami kiritilsa, tizim uni
            tanimaydi yoki rad etadi. Play Market&apos;da ham xuddi shunday —
            faqat xalqaro Visa/Mastercard so&apos;raladi.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Bu tasodifiy nosozlik emas. Quyida buning aniq texnik sababi,
            App Store/Play Market qaysi to&apos;lovlarni qabul qilishi va
            Telegram Premium&apos;ni mahalliy karta bilan qanday olish mumkinligi
            tushuntiriladi.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Uzcard va Humo texnik jihatdan nima uchun xalqaro to&apos;lov
              tizimi emas?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Uzcard (2004-yildan) va Humo — O&apos;zbekiston Markaziy banki
              nazorati ostidagi <strong>ichki (domestik)</strong> karta
              tizimlari. Ular Visa, Mastercard yoki boshqa xalqaro karta
              network&apos;lariga ulanmagan — ya&apos;ni tranzaksiya faqat
              O&apos;zbekiston ichidagi bank infratuzilmasi orqali, faqat so&apos;m
              valyutasida ishlaydi.
            </p>
            <p className="text-muted leading-relaxed">
              App Store va Google Play kabi xalqaro do&apos;konlar to&apos;lovni
              o&apos;z hisobiga qabul qilish uchun kartani{" "}
              <strong>xalqaro network orqali</strong> tasdiqlashi kerak. Uzcard
              yoki Humo bu network&apos;ga umuman ulanmagani uchun, ularning
              tizimi bu kartalarni &quot;mavjud emas&quot; deb ko&apos;radi — karta
              raqami to&apos;g&apos;ri kiritilgan bo&apos;lsa ham.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              App Store va Play Market O&apos;zbekistonda qaysi to&apos;lovlarni
              qabul qiladi?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Ikkala do&apos;kon ham O&apos;zbekiston hisob mintaqasi uchun
              to&apos;lovni faqat xalqaro network&apos;ga ulangan vositalar orqali
              qabul qiladi:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto mb-6">
              <table className="w-full text-sm min-w-[560px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">To&apos;lov vositasi</th>
                    <th className="p-4 text-left font-bold">App Store / Play Market&apos;da holati</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Xalqaro Visa/Mastercard</td>
                    <td className="p-4 text-muted">
                      Qabul qilinadi — narx dollar/evroda, konvertatsiya va bank komissiyasi bilan
                    </td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Uzcard</td>
                    <td className="p-4 text-muted">
                      Qabul qilinmaydi — xalqaro network&apos;ga ulanmagan
                    </td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Humo</td>
                    <td className="p-4 text-muted">
                      Qabul qilinmaydi — xalqaro network&apos;ga ulanmagan
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Click / Payme</td>
                    <td className="p-4 text-muted">
                      Do&apos;kon to&apos;lov tizimida umuman mavjud emas — faqat karta orqali to&apos;lov qabul qilinadi
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-muted leading-relaxed">
              Shu sababli ko&apos;pchilik O&apos;zbekistonlik foydalanuvchi App
              Store yoki Play Market&apos;dan Premium sotib olishga urinib,
              &quot;karta qo&apos;shib bo&apos;lmadi&quot; yoki &quot;this payment
              method is not available&quot; xatosiga duch keladi.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Bu Telegram&apos;ning aybimi yoki Apple/Google&apos;ning?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Telegram Premium App Store yoki Google Play orqali sotib
              olinganda, <strong>to&apos;lovni to&apos;liq Apple yoki Google
              boshqaradi</strong> — Telegram faqat pul tushgach obunani
              faollashtiradi. Qaysi karta qabul qilinishi Apple/Google&apos;ning
              o&apos;z to&apos;lov infratuzilmasiga bog&apos;liq, Telegram bu
              jarayonga umuman aralasha olmaydi.
            </p>
            <p className="text-muted leading-relaxed">
              Rasmiy @PremiumBot orqali to&apos;lov qilinganda ham xuddi shunday
              — u ham xalqaro to&apos;lov protsessoridan foydalanadi, shuning
              uchun Uzcard/Humo u yerda ham ishlamaydi. Batafsil{" "}
              <Link
                href="/maqolalar/premiumbot-ishlamayapti-premium-qayerdan-sotib-olish"
                className="text-primary font-semibold hover:underline"
              >
                &quot;PremiumBot ishlamayapti&quot; maqolasida
              </Link>
              .
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Play Market&apos;da hisobim O&apos;zbekiston bo&apos;lsa ham nega
              faqat xalqaro karta so&apos;raladi?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Bu yerda ikkita alohida narsa bor va ular ko&apos;pincha
              aralashtiriladi:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  Hisob mamlakati
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Faqat narx valyutasi va do&apos;konda ko&apos;rinadigan
                  ilova/xizmatlar ro&apos;yxatini belgilaydi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  Karta network&apos;i
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  To&apos;lov texnik jihatdan qabul qilinish-qilinmasligini
                  belgilaydi — bunga hisob mamlakati ta&apos;sir qilmaydi.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Ya&apos;ni hisobingiz O&apos;zbekiston bo&apos;lsa ham, Uzcard/Humo
              network darajasida xalqaro emasligi sababli, Google Play ularni
              baribir to&apos;lov manbai sifatida taklif qilmaydi yoki qabul
              qilmaydi.
            </p>
          </section>

          {/* Mid CTA */}
          <section>
            <div className="bg-primary-light/40 border border-primary/20 rounded-2xl p-6 md:p-8 text-center">
              <p className="text-foreground text-lg leading-relaxed mb-4">
                App Store/Play Market&apos;ni chetlab o&apos;tib, Uzcard yoki
                Humo bilan to&apos;g&apos;ridan-to&apos;g&apos;ri so&apos;mda to&apos;lang.{" "}
                <strong>@PremiumSendBot</strong> orqali 2-10 daqiqada Premium
                faollashadi.
              </p>
              <Link
                href="https://telegram.me/premiumsendbot"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-2xl hover:shadow-xl transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                PremiumSend orqali olish
              </Link>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Xorijiy Visa/Mastercard qo&apos;shsam muammo hal bo&apos;ladimi?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Qisman. Xalqaro network&apos;ga ulangan Visa yoki Mastercard karta
              qo&apos;shilsa, App Store/Play Market to&apos;lovni network
              darajasida qabul qiladi. Lekin bu bir nechta qo&apos;shimcha
              muammo keltirib chiqaradi:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Narx dollar yoki evroda hisoblanadi — banking kursi bo'yicha qo'shimcha 5-15% qimmatga tushishi mumkin.",
                "Bank xalqaro (cross-border) to'lovni cheklagan bo'lishi mumkin — bu holda to'lov baribir rad etiladi.",
                "BIN/mamlakat mos kelmasligi yoki VPN ishlatilishi qo'shimcha xavf sifatida baholanib, tranzaksiya blokdalishi mumkin.",
                "Xorijiy karta ochish (agar mavjud bo'lmasa) o'zi vaqt va qo'shimcha xarajat talab qiladi.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted leading-relaxed">
              Xalqaro karta bilan to&apos;lov nima uchun baribir rad etilishi
              mumkinligi haqida batafsil{" "}
              <Link
                href="/maqolalar/nega-xalqaro-karta-telegram-premiumni-rad-etadi"
                className="text-primary font-semibold hover:underline"
              >
                &quot;Nega xalqaro karta rad etadi&quot; maqolasida
              </Link>
              . App Store/Play Market narxlari mahalliy reseller bilan
              qanday farq qilishi esa{" "}
              <Link
                href="/maqolalar/nega-telegram-premium-app-store-play-market-qimmat"
                className="text-primary font-semibold hover:underline"
              >
                &quot;Nega App Store qimmat&quot; maqolasida
              </Link>
              .
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Uzcard/Humo bilan Telegram Premium sotib olishning
              to&apos;g&apos;ridan-to&apos;g&apos;ri yo&apos;li qanday ishlaydi?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              App Store va Play Market&apos;ni butunlay chetlab o&apos;tib,
              PremiumSend kabi mahalliy reseller orqali to&apos;lov —
              Uzcard, Humo, Click yoki Payme&apos;ning{" "}
              <strong>o&apos;z rasmiy ilovasida</strong>, so&apos;mda amalga
              oshadi. Bunda do&apos;kon to&apos;lov infratuzilmasi umuman
              ishtirok etmaydi, shuning uchun network mos kelmasligi masalasi
              yo&apos;qoladi.
            </p>
            <p className="text-muted leading-relaxed">
              To&apos;lov tasdiqlangach, Premium Telegram&apos;ning rasmiy
              bulk-gift mexanizmi orqali akkauntga ulanadi — bu haqiqiy,
              rasmiy Telegram Premium obuna, faqat{" "}
              <strong>to&apos;lov bosqichi</strong> mahalliylashtirilgan.
              Batafsil{" "}
              <Link
                href="/maqolalar/telegram-premium-somda-uzs-sotib-olish"
                className="text-primary font-semibold hover:underline"
              >
                &quot;So&apos;mda sotib olish&quot; maqolasida
              </Link>
              . Narxlar:{" "}
              <Link href="/1-oylik" className="text-primary hover:underline">
                1 oylik 59 000
              </Link>
              ,{" "}
              <Link href="/3-oylik" className="text-primary hover:underline">
                3 oylik 175 000
              </Link>
              ,{" "}
              <Link href="/6-oylik" className="text-primary hover:underline">
                6 oylik 235 000
              </Link>
              ,{" "}
              <Link href="/12-oylik" className="text-primary hover:underline">
                12 oylik 425 000 so&apos;m
              </Link>
              .
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Reselleri qanday tanlash kerak?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Uzcard/Humo bilan to&apos;g&apos;ridan-to&apos;g&apos;ri to&apos;lov yo&apos;lini
              tanlaganda, reselleri tekshirish ham muhim — karta ma&apos;lumotini
              so&apos;raydigan yoki oferta/aloqa kanaliga ega bo&apos;lmagan botlar
              aldov bo&apos;lishi mumkin. Tekshirish mezonlari va qizil bayroqlar{" "}
              <Link
                href="/maqolalar/telegram-premium-ishonchli-saytdan-sotib-olish"
                className="text-primary font-semibold hover:underline"
              >
                &quot;Ishonchli saytdan sotib olish&quot; qo&apos;llanmasida
              </Link>
              .
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
                  q: "Nega Uzcard yoki Humo'ni Apple ID/Google Play to'lov usuliga qo'sha olmayman?",
                  a: "Apple ID/Google Play faqat Visa/Mastercard kabi xalqaro network'ga ulangan kartalarni qabul qiladi. Uzcard va Humo ichki tizimlar bo'lgani uchun bu network'larga ulanmagan — shu sababli qo'shilmaydi. Bu doimiy texnik cheklov.",
                },
                {
                  q: "Bu Telegram'ning aybimi yoki Apple/Google'ning?",
                  a: "Telegram'ga aloqasi yo'q. App Store/Play Market orqali to'lovni to'liq Apple/Google boshqaradi, Telegram faqat pul tushgach obunani faollashtiradi.",
                },
                {
                  q: "Play Market'da hisobim O'zbekiston bo'lsa ham nega faqat xalqaro karta so'raladi?",
                  a: "Hisob mamlakati faqat narx valyutasini belgilaydi, karta qabul qilinish-qilinmasligini emas. Uzcard/Humo network darajasida xalqaro emas, shuning uchun hisob mamlakatidan qat'i nazar qabul qilinmaydi.",
                },
                {
                  q: "Xorijiy Visa/Mastercard qo'shsam, App Store/Play Market'da Premium sotib olsa bo'ladimi?",
                  a: "Ha, texnik jihatdan mumkin, lekin narx dollar/evroda hisoblanadi, konvertatsiya va bank komissiyasi qo'shiladi, va ba'zida bank cheklovi yoki BIN mos kelmasligi sababli to'lov baribir rad etilishi mumkin.",
                },
                {
                  q: "Uzcard/Humo bilan Telegram Premium sotib olishning to'g'ridan-to'g'ri yo'li bormi?",
                  a: "Ha — mahalliy reseller orqali. To'lov Uzcard/Humo/Click/Payme'ning o'z ilovasida so'mda amalga oshadi, tasdiqlangach Premium rasmiy bulk-gift orqali ulanadi.",
                },
                {
                  q: "Reseller orqali olingan Premium App Store'dagidan farq qiladimi?",
                  a: "Yo'q, Premium statusi va barcha funksiyalar bir xil. Farq faqat to'lov bosqichida — reseller mahalliy karta va so'mni qabul qiladi.",
                },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
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
                  Uzcard/Humo App Store va Play Market&apos;da network darajasida
                  ishlamaydi — bu tuzatib bo&apos;lmaydigan texnik cheklov.
                  Yechim uni chetlab o&apos;tish:{" "}
                  <strong className="text-white">@PremiumSendBot</strong>{" "}
                  orqali so&apos;mda, mahalliy karta bilan.{" "}
                  <strong className="text-white">1 oylik 59 000</strong>,{" "}
                  <strong className="text-white">12 oylik 425 000 so&apos;m</strong>{" "}
                  — Premium 2-10 daqiqada.
                </p>
                <Link
                  href="https://telegram.me/premiumsendbot"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  PremiumSend orqali olish
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
