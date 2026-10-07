import type { Metadata } from "next";
import Link from "next/link";
import { ogBaseUz } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title: "Telegram Stars sotib olish xavfsizmi? Aldov belgilari va tekshirish ro'yxati",
  description:
    "Telegram Stars sotib olish xavfsizmi: ha, agar sotuvchi login kodi, parol yoki karta ma'lumotini so'ramasa. Soxta Stars sotuvchisining 6 ta belgisi, ishonchli xizmatni tekshirish ro'yxati va aldanib qolsangiz nima qilish kerak.",
  keywords: [
    "telegram stars xavfsizmi",
    "stars sotib olish xavfsizmi",
    "stars aldov belgilari",
    "soxta stars sotuvchi",
    "stars firibgarlik",
    "bepul stars aldovmi",
  ],
  alternates: {
    canonical: "https://premiumsend.uz/maqolalar/telegram-stars-xavfsizmi-aldov-belgilari",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/telegram-stars-xavfsizmi-aldov-belgilari",
      ru: "https://premiumsend.uz/ru/maqolalar/telegram-stars-xavfsizmi-aldov-belgilari",
      "x-default": "https://premiumsend.uz/maqolalar/telegram-stars-xavfsizmi-aldov-belgilari",
    },
  },
  openGraph: {
    ...ogBaseUz,
    title: "Telegram Stars sotib olish xavfsizmi? Aldov belgilari va tekshirish ro'yxati",
    description:
      "Xavf Stars'ning o'zida emas, sotuvchini tanlashda. Soxta sotuvchining 6 ta belgisi va xariddan oldingi tekshirish ro'yxati.",
    url: "https://premiumsend.uz/maqolalar/telegram-stars-xavfsizmi-aldov-belgilari",
    type: "article",
    publishedTime: "2026-10-07",
  },
};

export default function ArticleStarsXavfsizmi() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Telegram Stars sotib olish xavfsizmi? Aldov belgilari va tekshirish ro'yxati",
    description:
      "Telegram Stars sotib olishdagi real xavflar, soxta sotuvchining 6 ta belgisi, ishonchli xizmatni tekshirish ro'yxati va aldanib qolganda bajariladigan qadamlar.",
    datePublished: "2026-10-07",
    dateModified: "2026-10-07",
    author: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    publisher: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    mainEntityOfPage: "https://premiumsend.uz/maqolalar/telegram-stars-xavfsizmi-aldov-belgilari",
    inLanguage: "uz",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Telegram Stars sotib olish xavfsizmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha, agar sotuvchi sizdan Telegram login kodi, parol yoki karta ma'lumotini so'ramasa. Stars'ning o'zi Telegram'ning rasmiy ichki valyutasi — xavf mahsulotda emas, sotuvchini tanlashda. Login kodini so'ragan har qanday sotuvchi — aldov belgisi.",
        },
      },
      {
        "@type": "Question",
        name: "Stars sotuvchisi aldoq ekanini qanday bilsam bo'ladi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "6 ta asosiy belgi: Telegram login kodi yoki parolini so'raydi; bepul Stars yoki generator va'da qiladi; karta raqami, CVV yoki SMS kodni so'raydi; sizga birinchi bo'lib yozib, bot tashqarisida to'lashni taklif qiladi; username'i taniqli botnikiga o'xshash, lekin harfi farq qiladi; narxi haddan tashqari arzon.",
        },
      },
      {
        "@type": "Question",
        name: "Bepul Telegram Stars beradigan bot yoki sayt haqiqiymi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yo'q. Telegram Stars shartlariga ko'ra Stars ilova ichidagi xarid va @PremiumBot orqali olinadi — 'generator' degan yo'l mavjud emas. Bepul Stars va'da qilib, login kodi yoki telefon raqamini so'ragan sayt va botlar akkauntni o'g'irlash uchun ishlatiladi.",
        },
      },
      {
        "@type": "Question",
        name: "@premiumsendbot mendan qanday ma'lumot so'raydi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mini App'da Stars miqdorini tanlaysiz, u karta raqami va aniq summani ko'rsatadi, o'tkazmani o'z bank ilovangizda qilasiz. Telegram login kodi, parol, karta raqamingiz, CVV yoki SMS kod so'ralmaydi.",
        },
      },
      {
        "@type": "Question",
        name: "Mahalliy reseller orqali olingan Stars haqiqiymi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha. Faqat to'lov bosqichi mahalliylashtirilgan — akkauntga tushgan Stars Telegram'ning o'z rasmiy balansi. Buni Telegram'da Sozlamalar → My Stars bo'limida tekshirish mumkin.",
        },
      },
      {
        "@type": "Question",
        name: "Soxta sotuvchiga login kodimni berib qo'ydim. Nima qilaman?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Darhol Telegram'da Sozlamalar → Qurilmalar bo'limidan begona seanslarni tugating va ikki bosqichli tekshiruvni (parol) yoqing. Pul o'tkazgan bo'lsangiz, chekni saqlab bankingizga murojaat qiling va soxta bot yoki akkaunt ustidan Telegram'da shikoyat yuboring.",
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
      { "@type": "ListItem", position: 3, name: "Stars xavfsizmi", item: "https://premiumsend.uz/maqolalar/telegram-stars-xavfsizmi-aldov-belgilari" },
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
        <span className="text-foreground font-medium">Stars xavfsizmi</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">Xavfsizlik qo&apos;llanmasi</span>
            <time className="text-xs text-muted" dateTime="2026-10-07">2026-yil, 7-oktabr</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Telegram Stars sotib olish xavfsizmi? Aldov belgilari va tekshirish ro&apos;yxati
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-sm font-bold text-primary mb-2">QISQACHA JAVOB</p>
            <p className="text-foreground leading-relaxed font-medium">
              <strong>Ha, xavfsiz</strong> — agar sotuvchi sizdan Telegram login kodi, parol yoki karta ma&apos;lumotini so&apos;ramasa. Stars&apos;ning o&apos;zi Telegram&apos;ning rasmiy ichki valyutasi; xavf mahsulotda emas, sotuvchini tanlashda. Login kodini so&apos;ragan yoki &quot;bepul Stars&quot; va&apos;da qilgan har qanday bot — aldov.{" "}
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="text-primary hover:underline">@premiumsendbot</Link>&apos;da Mini App faqat karta va summani ko&apos;rsatadi, o&apos;tkazmani o&apos;z bank ilovangizda qilasiz.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Telegram Stars sotib olish xavfsizmi degan savol odatda to&apos;lovdan bir daqiqa oldin tug&apos;iladi: &quot;pulim ketib, Stars kelmasa-chi?&quot; yoki &quot;akkauntimni o&apos;g&apos;irlab ketmaydimi?&quot;. Quyida xavf aynan qayerda ekani, soxta sotuvchining 6 ta belgisi va xariddan oldin 2 daqiqada bajariladigan tekshirish ro&apos;yxati keltirilgan.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Telegram Stars sotib olishda xavf aynan qayerda?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Xavf Stars&apos;da emas, to&apos;lov bosqichida va sotuvchida. Stars olishning{" "}
              <Link href="/maqolalar/stars-sotib-olishning-necha-yoli-bor" className="text-primary font-semibold hover:underline">3 ta yo&apos;li</Link>{" "}
              bor va har birida sizdan boshqa narsa so&apos;raladi — demak, ehtiyot bo&apos;lish kerak bo&apos;lgan joy ham boshqa.
            </p>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto">
              <table className="w-full text-sm min-w-[600px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">Yo&apos;l</th>
                    <th className="p-4 text-left font-bold">Sizdan nima so&apos;raladi</th>
                    <th className="p-4 text-left font-bold">Nimaga ehtiyot bo&apos;lish kerak</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Rasmiy ilova (App Store / Google Play)</td>
                    <td className="p-4">Xalqaro Visa/Mastercard</td>
                    <td className="p-4">To&apos;lov Apple yoki Google orqali o&apos;tadi — asosiy to&apos;siq xavf emas, karta talabi</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Fragment.com</td>
                    <td className="p-4">Kripto-hamyon va kriptovalyuta</td>
                    <td className="p-4">Sayt manzili aynan fragment.com ekanini tekshirish; kripto o&apos;tkazmasi ortga qaytmaydi</td>
                  </tr>
                  <tr className="border-b border-card-border last:border-b-0">
                    <td className="p-4 font-medium">Mahalliy reseller</td>
                    <td className="p-4">Mahalliy kartadan so&apos;mda o&apos;tkazma</td>
                    <td className="p-4">Sotuvchining haqiqiyligi — quyidagi 6 ta belgi aynan shu haqida</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Stars sotuvchisi aldoq ekanini qanday bilsam bo&apos;ladi?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Quyidagi 6 ta belgidan bittasi ham uchrasa — to&apos;lamang. Eng ishonchli belgi birinchisi: halol sotuvchiga Stars yuborish uchun akkauntingizga kirish kerak emas.
            </p>
            <div className="space-y-4 mb-4">
              {[
                { step: "1", title: "Telegram login kodi yoki parolini so'raydi", desc: "Telegram rasmiy FAQ'ida yozilgan: login kodlari hech kimga, jumladan boshqa xizmat va ilovalarga ham berilmasligi kerak. Kodni so'ragan sotuvchi Stars sotmayapti — akkauntingizni olmoqchi." },
                { step: "2", title: "Bepul Stars yoki \"generator\" va'da qiladi", desc: "Telegram Stars shartlariga ko'ra Stars ilova ichidagi xarid va @PremiumBot orqali olinadi. Bepul Stars \"ishlab chiqaradigan\" sayt yoki bot degan yo'l yo'q." },
                { step: "3", title: "Karta raqamingiz, CVV yoki SMS kodni so'raydi", desc: "Karta-kartaga o'tkazmada siz faqat qabul qiluvchi kartani ko'rasiz. O'z kartangiz ma'lumotini chatga yoki notanish saytga yozish talab qilinsa — to'xtang." },
                { step: "4", title: "Sizga birinchi bo'lib yozadi va bot tashqarisida to'lashni taklif qiladi", desc: "\"Admin\" yoki \"menejer\" sifatida shaxsiy xabar yuborib, \"mana shu kartaga tashlang\" deyish — keng tarqalgan sxema. To'lov rekvizitlarini faqat xizmatning o'z boti ichidan oling." },
                { step: "5", title: "Username'i taniqli botnikiga o'xshash, lekin farq qiladi", desc: "Bitta ortiqcha harf, pastki chiziq yoki raqam — soxta nusxa belgisi. Botga qidiruvdan emas, xizmatning rasmiy saytidagi havoladan kiring." },
                { step: "6", title: "Narxi haddan tashqari arzon", desc: "Solishtirish uchun: Fragment.com'da 1000 Stars 15 dollar turadi (2026-yil oktabr). Bundan bir necha baravar arzon taklif — savol tug'dirishi kerak bo'lgan holat." },
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
            <p className="text-muted leading-relaxed text-sm">
              Manba: Telegram FAQ (telegram.org/faq, login kodlari bo&apos;limi) va Telegram Stars shartlari (telegram.org/tos/stars, 2-band).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Ishonchli Stars sotuvchisini xariddan oldin qanday tekshiraman?</h2>
            <p className="text-muted leading-relaxed mb-4">
              5 ta savolga javob toping — bu taxminan 2 daqiqa oladi. Hammasiga &quot;ha&quot; bo&apos;lsa, xavf sezilarli kamayadi.
            </p>
            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li><strong>Sayt va bot bir-biriga havola beradimi?</strong> Saytda bot manzili, botda sayt manzili bo&apos;lishi kerak</li>
              <li><strong>Narx ochiq yozilganmi?</strong> Har bir paket narxi to&apos;lovdan oldin ko&apos;rinishi kerak, &quot;shaxsiyda kelishamiz&quot; emas</li>
              <li><strong>Aloqa kanali bitta va aniqmi?</strong> Muammo bo&apos;lsa kimga yozishni oldindan biling</li>
              <li><strong>O&apos;zini kim deb tanishtiradi?</strong> Mahalliy xizmat o&apos;zini &quot;Telegram&apos;ning rasmiy hamkori&quot; deb atasa — bu ogohlantiruvchi belgi</li>
              <li><strong>Kichik paketdan boshlash mumkinmi?</strong> Birinchi xaridni eng kichik paket bilan qilib, butun jarayonni sinab ko&apos;ring</li>
            </ul>
            <p className="text-muted leading-relaxed">
              Bu qoidalar Premium uchun ham bir xil ishlaydi — u yerdagi sxemalar{" "}
              <Link href="/maqolalar/telegram-premium-xavfsiz-aldovdan-saqlanish" className="text-primary font-semibold hover:underline">Telegram Premium&apos;da aldovdan saqlanish</Link>{" "}
              maqolasida alohida yoritilgan.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">@premiumsendbot sizdan nimani so&apos;raydi va nimani so&apos;ramaydi?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Faqat Stars miqdorini tanlash va ko&apos;rsatilgan kartaga o&apos;tkazma qilish kerak. Mini App karta raqami va aniq summani ko&apos;rsatadi, o&apos;tkazmani siz o&apos;z bank ilovangizda (Uzcard, Humo, Click yoki Payme) o&apos;zingiz tekshirib bajarasiz.
            </p>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto mb-4">
              <table className="w-full text-sm min-w-[480px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">So&apos;raladi</th>
                    <th className="p-4 text-left font-bold">So&apos;ralmaydi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-card-border">
                    <td className="p-4">Stars miqdori (50 dan 5000 gacha)</td>
                    <td className="p-4">Telegram login kodi yoki parol</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4">Mini App ko&apos;rsatgan kartaga aniq summani o&apos;tkazish</td>
                    <td className="p-4">Karta raqamingiz, CVV yoki amal qilish muddati</td>
                  </tr>
                  <tr className="border-b border-card-border last:border-b-0">
                    <td className="p-4">—</td>
                    <td className="p-4">Bankdan kelgan SMS kod</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              Halollik uchun: Premium Send Telegram&apos;ning rasmiy hamkori emas, mustaqil mahalliy reseller. Qo&apos;llab-quvvatlash faqat <strong>@premiumsend_admin</strong> orqali — to&apos;lovda muammo bo&apos;lsa har bir holat alohida ko&apos;rib chiqiladi. O&apos;tkazma mexanizmi batafsil:{" "}
              <Link href="/maqolalar/stars-kartaga-otkazma" className="text-primary font-semibold hover:underline">kartaga o&apos;tkazib Stars olish</Link>.
            </p>
          </section>

          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Login kodi ham, karta ma&apos;lumoti ham so&apos;ralmaydi — <strong className="text-white">@premiumsendbot</strong>&apos;da 50 Stars 15 000 so&apos;mdan, sinab ko&apos;rish uchun eng kichik paket.
              </p>
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                @premiumsendbot — boshlash
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Reseller orqali olingan Stars haqiqiy ekanini qanday tekshiraman?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Balansni Telegram&apos;ning o&apos;zida ko&apos;ring: <strong>Sozlamalar → My Stars</strong>. U yerda paydo bo&apos;lgan Stars — Telegram&apos;ning rasmiy balansi, uni istalgan bot, kanal yoki mini-ilovada ishlatish mumkin. Reseller faqat to&apos;lov bosqichini mahalliylashtiradi.
            </p>
            <p className="text-muted leading-relaxed">
              Agar sotuvchi &quot;Stars keldi&quot; desa-yu, My Stars bo&apos;limida balans o&apos;zgarmagan bo&apos;lsa — Stars kelmagan. Kechikish sabablari va navbatdagi qadamlar:{" "}
              <Link href="/maqolalar/stars-yetkazish-vaqti" className="text-primary font-semibold hover:underline">Stars qancha vaqtda tushadi</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Aldanib qolsam nima qilishim kerak?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Avval akkauntni, keyin pulni himoya qiling. Tartib muhim: login kodi berilgan bo&apos;lsa, har bir daqiqa hisobda.
            </p>
            <div className="space-y-4 mb-4">
              {[
                { step: "1", title: "Begona seanslarni tugating", desc: "Telegram'da Sozlamalar → Qurilmalar bo'limini oching va o'zingizga tegishli bo'lmagan barcha seanslarni yoping." },
                { step: "2", title: "Ikki bosqichli tekshiruvni yoqing", desc: "Telegram FAQ'iga ko'ra, u yoqilgach kirish uchun SMS koddan tashqari parol ham kerak bo'ladi." },
                { step: "3", title: "Chekni saqlab, bankka murojaat qiling", desc: "O'tkazma chekining skrinshotini oling va bankingiz yoki to'lov ilovangiz qo'llab-quvvatlashiga yozing." },
                { step: "4", title: "Telegram'da shikoyat yuboring", desc: "Soxta bot yoki akkaunt profilida \"Shikoyat qilish\" tugmasidan foydalaning. Kimdir sizning nomingizdan ish ko'rayotgan bo'lsa, Telegram FAQ @NoToScam'ga yozishni tavsiya qiladi." },
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
            <p className="text-muted leading-relaxed">
              Telegram&apos;ning o&apos;zi Stars uchun pulni qaysi holatda qaytarishi va qaytarmasligi:{" "}
              <Link href="/maqolalar/stars-pulini-qaytarish-refund" className="text-primary font-semibold hover:underline">Stars refund qoidalari</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Birinchi xaridni qanday xavfsiz qilish mumkin?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Eng kichik paketdan boshlang va butun jarayonni o&apos;zingiz kuzating. Kichik summa bilan to&apos;lov, yetkazish va qo&apos;llab-quvvatlash qanday ishlashini ko&apos;rasiz, keyin kattaroq paketga o&apos;tasiz.
            </p>
            <p className="text-muted leading-relaxed">
              Premium Send&apos;da narx{" "}
              <Link href="/stars" className="text-primary font-semibold hover:underline">barcha Stars paketlari</Link>{" "}
              uchun bir xil — 300 so&apos;m/star: eng kichigi{" "}
              <Link href="/50-stars" className="text-primary font-semibold hover:underline">50 Stars — 15 000 so&apos;m</Link>, eng ommabopi{" "}
              <Link href="/1000-stars" className="text-primary font-semibold hover:underline">1000 Stars — 300 000 so&apos;m</Link>. Kripto orqali olishni o&apos;ylayotgan bo&apos;lsangiz:{" "}
              <Link href="/maqolalar/fragment-com-telegram-stars-qanday-ishlaydi" className="text-primary font-semibold hover:underline">Fragment.com&apos;da Stars qanday olinadi</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Tez-tez so&apos;raladigan savollar (FAQ)</h2>
            <div className="space-y-4">
              {[
                { q: "Telegram Stars sotib olish xavfsizmi?", a: "Ha, agar sotuvchi login kodi, parol yoki karta ma'lumotini so'ramasa. Xavf Stars'da emas, sotuvchini tanlashda." },
                { q: "Stars sotuvchisi aldoq ekanini qanday bilsam bo'ladi?", a: "Login kodi yoki karta ma'lumotini so'raydi, bepul Stars va'da qiladi, birinchi bo'lib yozadi, username'i o'xshash-soxta yoki narxi haddan tashqari arzon." },
                { q: "Bepul Telegram Stars beradigan bot yoki sayt haqiqiymi?", a: "Yo'q. Stars shartlarida bunday yo'l yo'q — bu takliflar akkauntni o'g'irlash uchun ishlatiladi." },
                { q: "@premiumsendbot mendan qanday ma'lumot so'raydi?", a: "Faqat Stars miqdori. Mini App karta va summani ko'rsatadi, o'tkazmani o'z bank ilovangizda qilasiz — login kodi, parol yoki karta ma'lumoti so'ralmaydi." },
                { q: "Mahalliy reseller orqali olingan Stars haqiqiymi?", a: "Ha, bu Telegram'ning rasmiy balansi. Sozlamalar → My Stars bo'limida tekshiring." },
                { q: "Soxta sotuvchiga login kodimni berib qo'ydim. Nima qilaman?", a: "Sozlamalar → Qurilmalar'dan begona seanslarni tugating, ikki bosqichli tekshiruvni yoqing, pul o'tkazgan bo'lsangiz chek bilan bankka murojaat qiling." },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-card-border shadow-sm">
                  <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="hero-gradient rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10"><div className="absolute top-5 left-5 w-32 h-32 bg-white rounded-full blur-2xl" /></div>
              <div className="relative">
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  Stars&apos;ni xavfsiz oling — <strong className="text-white">@premiumsendbot</strong> orqali so&apos;mda, 50 Stars <strong className="text-white">15 000 so&apos;mdan</strong>, savol bo&apos;lsa @premiumsend_admin yordam beradi.
                </p>
                <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                  @premiumsendbot — boshlash
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
