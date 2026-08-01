import type { Metadata } from "next";
import Link from "next/link";
import { ogBaseUz } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title:
    "Telegram Premium muammolari va xatoliklari: 12 ta savol-javob va yechim",
  description:
    "Telegram Premium ishlamayapti, faollashmadi, birdan yo'qoldi yoki funksiyalar ishlamayapti? Eng ko'p uchraydigan muammolar va aniq yechimlari — to'lov, faollashish, obuna tugashi, sovg'a va qurilma sinxronizatsiyasi bo'yicha.",
  keywords: [
    "telegram premium ishlamayapti",
    "telegram premium muammolari",
    "telegram premium faollashmadi",
    "telegram premium yo'qoldi",
    "telegram premium xato",
    "telegram premium funksiyalari ishlamayapti",
    "telegram premium tugadi",
    "telegram premium bekor qilish",
    "telegram premium sinxronlanmayapti",
    "telegram premium kelmadi",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/maqolalar/telegram-premium-muammolari-xatoliklari",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/telegram-premium-muammolari-xatoliklari",
      ru: "https://premiumsend.uz/ru/maqolalar/telegram-premium-muammolari-xatoliklari",
      "x-default":
        "https://premiumsend.uz/maqolalar/telegram-premium-muammolari-xatoliklari",
    },
  },
  openGraph: {
    ...ogBaseUz,
    title:
      "Telegram Premium muammolari va xatoliklari — to'liq yechimlar qo'llanmasi",
    description:
      "Premium faollashmadi, yo'qoldi yoki funksiyalar ishlamayaptimi? 12 ta eng ko'p uchraydigan muammo va aniq qadamli yechimlar.",
    url: "https://premiumsend.uz/maqolalar/telegram-premium-muammolari-xatoliklari",
    type: "article",
    publishedTime: "2026-06-02",
  },
};

export default function ArticleMuammolarXatoliklar() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Telegram Premium muammolari va xatoliklari: 12 ta savol-javob va yechim",
    description:
      "Telegram Premium bilan eng ko'p uchraydigan muammolar — faollashmaslik, funksiyalarning ishlamasligi, obunaning tugashi, sovg'a va sinxronizatsiya — va ularning aniq yechimlari.",
    datePublished: "2026-06-02",
    dateModified: "2026-06-02",
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
      "https://premiumsend.uz/maqolalar/telegram-premium-muammolari-xatoliklari",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "To'lov o'tdi, lekin Telegram Premium faollashmadi — nima qilish kerak?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Avval Telegram ilovasini to'liq yoping va qaytadan oching, so'ng Sozlamalar (Settings) → Telegram Premium bo'limini tekshiring — Premium odatda bir necha daqiqada, ba'zan 5-10 daqiqada faollashadi. Agar bir soatdan keyin ham faollashmasa: ilovani eng so'nggi versiyaga yangilang, internetni tekshiring va qurilmani qayta ishga tushiring. Rasmiy yo'l bilan (App Store/Google Play) olganlar @PremiumBot saportiga to'lov chekini biriktirib murojaat qiladi. PremiumSend orqali olgan bo'lsangiz, to'lov tasdig'ini @premiumsend_admin ga yuboring — masala mahalliy karta orqali bo'lgani uchun tezroq hal qilinadi.",
        },
      },
      {
        "@type": "Question",
        name: "Telegram Premium birdan yo'qoldi — nega?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Eng ko'p sabab — obuna muddati tugagani. Telegram qoidasiga ko'ra, siz Premium funksiyalaridan joriy to'lov davri oxirigacha foydalanasiz, shundan keyin ular o'chadi. Agar avtomatik to'lov (App Store/Google Play orqali) yoqilgan bo'lsa-yu, kartada mablag' yetarli bo'lmasa — yangilanish amalga oshmaydi va Premium tugaydi. Boshqa sabab: boshqa qurilmada chiqib ketgan sessiya yoki ilova keshidagi nosozlik. Avval Sozlamalar → Telegram Premium'da amal qilish muddatini tekshiring.",
        },
      },
      {
        "@type": "Question",
        name: "Premium tugagandan keyin qaysi funksiyalar va ma'lumotlar yo'qoladi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Telegram'ning rasmiy qoidasiga ko'ra, hech narsa o'chib ketmaydi — faqat bepul limitlardan oshgan qismi yashiriladi: qo'shimcha public username'lar saqlanadi, lekin 10 tadan oshiq bo'lsa yangisini yarata olmaysiz; kanal va papkalaringiz joyida qoladi, ammo yangi kanalga qo'shilish yoki papkaga chat qo'shish cheklanadi; dastlabki 10 papka ishlaydi, qolganlari qulflanadi; 200 tadan oshiq saqlangan GIF yashiriladi; profil bio'sining dastlabki 70 belgisi ko'rinadi, qolgani qayta obuna bo'lguningizcha yashirin turadi. Qayta obuna bo'lsangiz, hammasi joyiga qaytadi.",
        },
      },
      {
        "@type": "Question",
        name: "Premium emoji, stiker yoki 4 GB fayl yuklash ishlamayapti — qanday tuzataman?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "1) Premium hali ham faolligini tekshiring (Sozlamalar → Telegram Premium). 2) Ilovani eng so'nggi versiyaga yangilang — eski versiyalarda yangi Premium funksiyalar ishlamasligi mumkin. 3) Telegramni to'liq yoping va qayta oching (sinxronizatsiyani majburlash uchun). 4) Premium funksiyalar barcha qurilmalarda avtomatik sinxronlanadi — agar bitta qurilmada ko'rinmasa, o'sha qurilmada ilovani yangilang. 5) Premium emoji va stikerlar faqat Premium foydalanuvchilar bir-biriga to'liq ko'rinadi, oddiy foydalanuvchi ham ularni ko'radi (statik holatda).",
        },
      },
      {
        "@type": "Question",
        name: "Premium bir qurilmada bor, lekin boshqasida ko'rinmayapti — nega?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Telegram Premium butun akkauntga bog'lanadi va barcha qurilmalarda avtomatik sinxronlanishi kerak. Agar bitta qurilmada ko'rinmasa: o'sha qurilmadagi Telegram ilovasini eng so'nggi versiyaga yangilang, ilovani to'liq yopib qayta oching va internetni tekshiring. Ko'pincha masala — eski ilova versiyasi yoki kech sinxronizatsiya. Bir necha daqiqa kutib, qaytadan kiring.",
        },
      },
      {
        "@type": "Question",
        name: "Telegram Premium obunasini qanday bekor qilaman yoki avtomatik to'lovni to'xtataman?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Qayerdan obuna bo'lganingizga qarab: 1) Telegram ilovasi ichidan obuna bo'lgan bo'lsangiz — Sozlamalar → Telegram Premium bo'limidagi ko'rsatmalarga amal qiling. 2) iPhone (Apple ID) orqali — qurilma Sozlamalari → Apple ID → Obunalar (Subscriptions) bo'limidan bekor qiling. 3) Google Play orqali — Play Market → Obunalar (Subscriptions) bo'limidan bekor qiling. Bekor qilsangiz, kelgusi to'lovlar to'xtaydi, lekin joriy to'lov davri oxirigacha Premium ishlayveradi. PremiumSend kabi reseller orqali olgan obunada avtomatik to'lov umuman yo'q — muddat tugagach o'zi to'xtaydi, alohida bekor qilish shart emas.",
        },
      },
      {
        "@type": "Question",
        name: "Menga sovg'a qilingan Telegram Premium kelmadi yoki ko'rinmayapti — nima qilaman?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sovg'a qilingan Premium odatda darhol faollashadi va akkauntingizda yulduzcha belgisi paydo bo'ladi. Ko'rinmasa: ilovani yangilang va qayta oching, Sozlamalar → Telegram Premium'ni tekshiring. Sovg'a yuboruvchi anonim bo'lishi mumkin (default holat), shu sababli kim yuborganini ko'rmasligingiz normal. Agar sovg'a yuborilgani aytilgan-u, lekin Premium faollashmagan bo'lsa — yuboruvchidan sovg'a haqiqatan jo'natilgani va to'lov o'tganini tasdiqlashni so'rang.",
        },
      },
      {
        "@type": "Question",
        name: "To'lov nega o'tmayapti yoki 'Card declined' xatosi chiqyapti?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rasmiy @PremiumBot va App Store O'zbekistondagi Uzcard/Humo kartalarini qabul qilmaydi — faqat xalqaro Visa/Mastercard. Visa bo'lsa ham, bank xalqaro to'lovni yopib qo'ygan bo'lishi, 3D Secure SMS kelmasligi yoki 'Request to payment provider has expired' kabi xatolar chiqishi mumkin. Telegram'ning firibgarlikka qarshi tizimi telefon raqami davlat kodi va karta chiqarilgan davlat mos kelmasa (masalan VPN orqali) to'lovni rad etadi. O'zbekistondagi eng oddiy yechim — Uzcard, Humo, Click yoki Payme bilan so'mda ishlovchi reseller orqali olish.",
        },
      },
      {
        "@type": "Question",
        name: "Telegram Premium O'zbekistonda mavjudmi yoki cheklanganmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Telegram Premium O'zbekistonda foydalanish mumkin — funksiyalar to'liq ishlaydi. Cheklov faqat to'lov bosqichida: rasmiy bot va ilova do'konlari mahalliy Uzcard/Humo kartalarini qabul qilmaydi, narx esa dollarda. Ya'ni muammo Premiumning o'zida emas, balki to'lov usulida. So'mda, mahalliy karta orqali olish uchun reseller (masalan PremiumSend) ishlatiladi.",
        },
      },
      {
        "@type": "Question",
        name: "Premium obunamni uzaytirsam, muddat qachondan boshlanadi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Agar joriy obunangiz hali tugamagan bo'lsa va yangi muddat qo'shsangiz, u odatda mavjud muddat ustiga qo'shiladi — ya'ni yangi davr eskisi tugagach boshlanadi va kunlar yo'qolmaydi. Aniq holatni Sozlamalar → Telegram Premium'dagi amal qilish sanasidan tekshiring. Reseller orqali uzaytirsangiz, yangi muddatni joriy muddat tugashiga yaqin yoki tugagach faollashtirish odatda qulayroq.",
        },
      },
      {
        "@type": "Question",
        name: "Reseller orqali olgan Premiumda muammo chiqsa nima qilaman?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ishonchli reseller orqali olgan Premium ham Telegram'ning rasmiy obunasi bo'lgani uchun, yuqoridagi yechimlar (ilovani yangilash, qayta ochish, muddatni tekshirish) bir xil ishlaydi. Faollashish yoki muddat bilan bog'liq masala bo'lsa, to'lov tasdig'ini saqlab, reseller aloqa kanaliga (PremiumSend uchun @premiumsend_admin) murojaat qiling. Ishonchli reseller aniq sayti, ofertasi va aloqa kanaliga ega bo'ladi — bu firibgardan farqlovchi asosiy belgi.",
        },
      },
      {
        "@type": "Question",
        name: "Premium statusini qanday tekshiraman?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Telegram → Sozlamalar (Settings) → Telegram Premium bo'limiga kiring. U yerda obuna faol yoki yo'qligi va amal qilish muddati ko'rsatiladi. Profilingiz yonida (ism o'ng tomonida) yulduzcha belgisi ko'rinsa, Premium faol. Belgini Sozlamalar → Telegram Premium'da yoqib/o'chirib ham qo'yish mumkin.",
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
        name: "Telegram Premium muammolari va xatoliklari",
        item: "https://premiumsend.uz/maqolalar/telegram-premium-muammolari-xatoliklari",
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
          Premium muammolari va xatoliklari
        </span>
      </nav>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">
              Muammolar va yechimlar
            </span>
            <time className="text-xs text-muted" dateTime="2026-06-02">
              2026-yil, 2-iyun
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Telegram Premium muammolari va xatoliklari: 12 ta savol-javob va
            yechim
          </h1>

          {/* TL;DR */}
          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-sm font-bold text-primary mb-2">QISQACHA JAVOB</p>
            <p className="text-foreground leading-relaxed font-medium">
              Telegram Premium muammolarining aksariyati 4 ta sababga taqaladi:{" "}
              <strong>to&apos;lov o&apos;tmasligi</strong>,{" "}
              <strong>kech faollashish</strong>,{" "}
              <strong>obuna muddati tugashi</strong> va{" "}
              <strong>eski ilova versiyasi</strong>. Ko&apos;p hollarda yechim
              oddiy: ilovani yangilang, to&apos;liq yopib qayta oching va{" "}
              <em>Sozlamalar → Telegram Premium</em> bo&apos;limidan muddatni
              tekshiring. To&apos;lov O&apos;zbekistonda o&apos;tmasa — bu
              Premiumning emas, mahalliy kartaning xalqaro to&apos;lovda
              ishlamasligi muammosi.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            &quot;Premium faollashmadi&quot;, &quot;birdan yo&apos;qoldi&quot;,
            &quot;emoji ishlamayapti&quot; — bu Telegram Premium foydalanuvchilari
            duch keladigan eng ko&apos;p tarqalgan muammolar. Ularning deyarli
            barchasi bir necha daqiqada hal bo&apos;ladi, agar aniq sababni
            bilsangiz.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Quyida muammolarni turlarga ajratib, har biriga aniq qadamli yechim
            beramiz. Bu maqola — Telegram&apos;ning rasmiy qoidalariga tayangan
            to&apos;liq troubleshooting qo&apos;llanma.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 — Tasnif */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Telegram Premium muammolari qaysi turlarga bo&apos;linadi?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Muammoni to&apos;g&apos;ri turkumga ajratish — yechimga eng tez
              yo&apos;l. Premium muammolari odatda quyidagi 5 ta toifaga
              kiradi:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto mb-6">
              <table className="w-full text-sm min-w-[560px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">Toifa</th>
                    <th className="p-4 text-left font-bold">Belgisi</th>
                    <th className="p-4 text-left font-bold">Asosiy yechim</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">To&apos;lov</td>
                    <td className="p-4 text-muted">
                      Karta qabul qilinmaydi, xato chiqadi
                    </td>
                    <td className="p-4 text-primary font-medium">
                      So&apos;mda mahalliy karta (reseller)
                    </td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Faollashish</td>
                    <td className="p-4 text-muted">
                      To&apos;lov o&apos;tdi, Premium kelmadi
                    </td>
                    <td className="p-4 text-primary font-medium">
                      Ilovani qayta oching, kuting
                    </td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Funksiya</td>
                    <td className="p-4 text-muted">
                      Emoji, stiker, 4 GB ishlamaydi
                    </td>
                    <td className="p-4 text-primary font-medium">
                      Ilovani yangilang
                    </td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Obuna tugashi</td>
                    <td className="p-4 text-muted">
                      Premium birdan yo&apos;qoldi
                    </td>
                    <td className="p-4 text-primary font-medium">
                      Muddatni tekshiring, uzaytiring
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Sinxronizatsiya</td>
                    <td className="p-4 text-muted">
                      Bir qurilmada bor, boshqasida yo&apos;q
                    </td>
                    <td className="p-4 text-primary font-medium">
                      Yangilang va qayta kiring
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-muted leading-relaxed">
              Endi har bir toifani alohida ko&apos;rib chiqamiz — eng ko&apos;p
              uchraydiganidan boshlab.
            </p>
          </section>

          {/* Section 2 — To'lov */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              To&apos;lov o&apos;tmayapti yoki xato beryapti — nima qilish
              kerak?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Bu O&apos;zbekistondagi eng ko&apos;p uchraydigan muammo.
              Rasmiy @PremiumBot va App Store faqat xalqaro Visa/Mastercard
              qabul qiladi — Uzcard, Humo, Click va Payme ishlamaydi. Visa
              bo&apos;lsa ham quyidagi xatolar chiqishi mumkin:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-2 bg-section-alt p-4 font-bold text-sm">
                <div>Xato matni</div>
                <div>Sababi</div>
              </div>
              <div className="grid grid-cols-2 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Card declined</div>
                <div className="text-muted">
                  Bank xalqaro to&apos;lovni rad etdi
                </div>
              </div>
              <div className="grid grid-cols-2 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">
                  Payment not supported in your region
                </div>
                <div className="text-muted">Mintaqa cheklovi</div>
              </div>
              <div className="grid grid-cols-2 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">
                  Request to payment provider has expired
                </div>
                <div className="text-muted">
                  To&apos;lov provayderi vaqti tugadi
                </div>
              </div>
              <div className="grid grid-cols-2 p-4 items-center text-sm">
                <div className="font-medium">Authentication failed</div>
                <div className="text-muted">3D Secure SMS kelmadi</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Bularning barchasi to&apos;lov usuli bilan bog&apos;liq — Premiumning
              o&apos;zi bilan emas. Eng oddiy yechim — Uzcard, Humo, Click yoki
              Payme bilan so&apos;mda ishlovchi reseller. To&apos;lov xatolarining
              to&apos;liq tahlili va muqobillar uchun{" "}
              <Link
                href="/maqolalar/premiumbot-ishlamayapti-premium-qayerdan-sotib-olish"
                className="text-primary font-semibold hover:underline"
              >
                &quot;PremiumBot ishlamayapti&quot; maqolasini
              </Link>{" "}
              ko&apos;ring.
            </p>
          </section>

          {/* Section 3 — Faollashish */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              To&apos;lov o&apos;tdi, lekin Premium faollashmadi — nima qilaman?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Premium odatda bir necha daqiqada faollashadi. Agar kechiksa,
              quyidagi qadamlarni tartib bilan bajaring:
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  step: "1",
                  title: "Ilovani to'liq yopib, qayta oching",
                  desc: "Telegramni xotiradan to'liq yoping (recent apps'dan oching) va qaytadan ishga tushiring — bu sinxronizatsiyani majburlaydi.",
                },
                {
                  step: "2",
                  title: "Sozlamalar → Telegram Premium'ni tekshiring",
                  desc: "Bu yerda obuna faol bo'lsa va muddat ko'rinsa — Premium ulangan. Profil yonida yulduzcha belgisi paydo bo'lishi kerak.",
                },
                {
                  step: "3",
                  title: "Ilovani yangilang va internetni tekshiring",
                  desc: "Eski ilova versiyasi yoki zaif internet faollashishni kechiktiradi. App Store / Play Market'dan yangilang.",
                },
                {
                  step: "4",
                  title: "5-10 daqiqa kuting, keyin saportga murojaat qiling",
                  desc: "Rasmiy yo'l bilan olgan bo'lsangiz @PremiumBot saportiga chekni biriktiring. Reseller orqali olgan bo'lsangiz, to'lov tasdig'ini aloqa kanaliga yuboring.",
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
              Premium odatda qancha vaqtda faollashishi haqida batafsil ma&apos;lumot{" "}
              <Link
                href="/maqolalar/telegram-premium-qachon-faollashadi"
                className="text-primary font-semibold hover:underline"
              >
                &quot;Premium qachon faollashadi&quot; maqolasida
              </Link>
              .
            </p>
          </section>

          {/* Section 4 — Yo'qoldi / tugadi */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Telegram Premium birdan yo&apos;qoldi — sabablari nima?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Premium &quot;birdan yo&apos;qolishi&quot;ning eng ko&apos;p
              sababi — obuna muddatining tugashi. Telegram qoidasiga ko&apos;ra,
              siz Premium funksiyalaridan <strong>joriy to&apos;lov davri
              oxirigacha</strong> foydalanasiz, shundan keyin ular o&apos;chadi.
              Mumkin bo&apos;lgan sabablar:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  Muddat tugadi
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Obuna davri yakunlandi va uzaytirilmadi. Sozlamalar → Telegram
                  Premium&apos;da amal qilish sanasini tekshiring.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  Avtomatik to&apos;lov o&apos;tmadi
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  App Store/Google Play orqali avtomatik yangilanish yoqilgan,
                  lekin kartada mablag&apos; yetmagan — obuna yangilanmaydi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  Eski ilova / kesh nosozligi
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Premium aslida faol, lekin eski versiya yoki kesh tufayli
                  ko&apos;rinmayapti. Yangilang va qayta oching.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  Boshqa qurilmada chiqib ketgan
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Akkaunt bir nechta qurilmada bo&apos;lsa, sinxronizatsiya
                  kechikishi mumkin. Bir necha daqiqa kutib qaytadan kiring.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Agar muddat tugagan bo&apos;lsa, yechim — uzaytirish.{" "}
              <Link
                href="/"
                className="text-primary font-semibold hover:underline"
              >
                PremiumSend
              </Link>{" "}
              orqali so&apos;mda:{" "}
              <Link href="/1-oylik" className="text-primary hover:underline">
                1 oylik 59 000
              </Link>
              ,{" "}
              <Link href="/3-oylik" className="text-primary hover:underline">
                3 oylik 175 000
              </Link>
              ,{" "}
              <Link href="/12-oylik" className="text-primary hover:underline">
                12 oylik 425 000 so&apos;m
              </Link>
              .
            </p>
          </section>

          {/* Section 5 — Tugagandan keyin nima yo'qoladi */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Premium tugagandan keyin qaysi funksiyalar yo&apos;qoladi?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Telegram&apos;ning rasmiy qoidasiga ko&apos;ra,{" "}
              <strong>hech narsa butunlay o&apos;chib ketmaydi</strong> — faqat
              bepul limitdan oshgan qismi vaqtincha yashiriladi. Qayta obuna
              bo&apos;lsangiz, hammasi joyiga qaytadi:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto mb-6">
              <table className="w-full text-sm min-w-[520px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">Element</th>
                    <th className="p-4 text-left font-bold">
                      Premium tugagach nima bo&apos;ladi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Username&apos;lar</td>
                    <td className="p-4 text-muted">
                      Saqlanadi, lekin 10 tadan oshiq bo&apos;lsa yangisini
                      yarata olmaysiz
                    </td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Kanal va guruhlar</td>
                    <td className="p-4 text-muted">
                      Joyida qoladi, lekin yangi kanalga qo&apos;shilish
                      cheklanadi
                    </td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Papkalar</td>
                    <td className="p-4 text-muted">
                      Dastlabki 10 tasi ishlaydi, qolganlari qulflanadi
                    </td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Saqlangan GIF&apos;lar</td>
                    <td className="p-4 text-muted">
                      200 tadan oshig&apos;i yashiriladi
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Profil bio</td>
                    <td className="p-4 text-muted">
                      Dastlabki 70 belgi ko&apos;rinadi, qolgani yashirin turadi
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-muted leading-relaxed">
              Premium imkoniyatlari va limitlari haqida to&apos;liq jadval{" "}
              <Link
                href="/maqolalar/telegram-premium-4gb-fayl-kanal-guruh-limitlari"
                className="text-primary font-semibold hover:underline"
              >
                4 GB fayl va limitlar maqolasida
              </Link>
              .
            </p>
          </section>

          {/* Section 6 — Funksiyalar ishlamayapti */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Premium emoji, stiker yoki 4 GB yuklash ishlamayapti — qanday
              tuzataman?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Premium faol bo&apos;la turib funksiyalar ishlamasa, deyarli
              har doim sabab — <strong>eski ilova versiyasi yoki
              sinxronizatsiya kechikishi</strong>. Tartib bilan tekshiring:
            </p>

            <ul className="space-y-3 mb-6">
              {[
                "Premium hali faolligini tasdiqlang (Sozlamalar → Telegram Premium).",
                "Ilovani eng so'nggi versiyaga yangilang — yangi funksiyalar eski versiyada ishlamaydi.",
                "Telegramni to'liq yopib qayta oching (sinxronizatsiyani majburlash uchun).",
                "Bitta qurilmada ko'rinmasa, o'sha qurilmadagi ilovani alohida yangilang.",
                "Premium emoji va stikerlarni oddiy foydalanuvchilar ham ko'radi — bu xato emas, shunday ishlaydi.",
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
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-muted leading-relaxed">
              Premium funksiyalari butun akkauntga bog&apos;langan va barcha
              qurilmalarda avtomatik sinxronlanadi — shuning uchun aksariyat
              hollarda ilovani yangilash muammoni hal qiladi.
            </p>
          </section>

          {/* Section 7 — Bekor qilish */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Obunani qanday bekor qilaman yoki avtomatik to&apos;lovni
              to&apos;xtataman?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Bekor qilish usuli qayerdan obuna bo&apos;lganingizga
              bog&apos;liq. Bekor qilsangiz, kelgusi to&apos;lovlar to&apos;xtaydi,
              lekin joriy davr oxirigacha Premium ishlayveradi:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  Telegram ichidan
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Sozlamalar → Telegram Premium bo&apos;limidagi ko&apos;rsatmalarga
                  amal qiling.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">
                  iPhone (Apple ID)
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Sozlamalar → Apple ID → Obunalar (Subscriptions) → Telegram →
                  bekor qilish.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Google Play</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Play Market → Obunalar (Subscriptions) → Telegram → bekor
                  qilish.
                </p>
              </div>
            </div>

            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5">
              <p className="text-foreground leading-relaxed">
                <strong>Eslatma:</strong> PremiumSend kabi reseller orqali olgan
                obunada avtomatik to&apos;lov <strong>umuman yo&apos;q</strong> —
                muddat tugagach o&apos;zi to&apos;xtaydi. Alohida bekor qilish
                yoki &quot;obunani uzib qo&apos;yishni unutdim&quot; kabi
                xavotir bo&apos;lmaydi.
              </p>
            </div>
          </section>

          {/* Section 8 — Sovg'a */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Menga sovg&apos;a qilingan Premium kelmadi yoki ko&apos;rinmayapti
              — nima qilaman?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Sovg&apos;a qilingan Premium odatda darhol faollashadi va
              akkauntingizda yulduzcha belgisi paydo bo&apos;ladi.
              Ko&apos;rinmasa:
            </p>

            <ul className="space-y-3 mb-6">
              {[
                "Ilovani yangilang va to'liq yopib qayta oching.",
                "Sozlamalar → Telegram Premium'da obuna va muddatni tekshiring.",
                "Yuboruvchi anonim bo'lishi mumkin (default holat) — kim yuborganini ko'rmaslik normal.",
                "Premium faollashmagan bo'lsa, yuboruvchidan sovg'a jo'natilgani va to'lov o'tganini tasdiqlashni so'rang.",
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
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-muted leading-relaxed">
              Premiumni sovg&apos;a sifatida yuborish (3, 6 va 12 oylik) haqida
              to&apos;liq qo&apos;llanma{" "}
              <Link
                href="/maqolalar/telegram-premium-tugilgan-kun-sovgasi"
                className="text-primary font-semibold hover:underline"
              >
                tug&apos;ilgan kun sovg&apos;asi maqolasida
              </Link>
              .
            </p>
          </section>

          {/* Mid CTA */}
          <section>
            <div className="bg-primary-light/40 border border-primary/20 rounded-2xl p-6 md:p-8 text-center">
              <p className="text-foreground text-lg leading-relaxed mb-4">
                Muammo to&apos;lov yoki muddat tugashida bo&apos;lsa — eng tezkor
                yechim <strong>@PremiumSendBot</strong>. Uzcard, Humo, Click,
                Payme barchasi so&apos;mda. Premium 3-5 daqiqada faollashadi.
              </p>
              <Link
                href="https://telegram.me/premiumsendbot"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-2xl hover:shadow-xl transition-all"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                PremiumSend orqali olish
              </Link>
            </div>
          </section>

          {/* Section 9 — Tezkor tekshiruv */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Tezkor tekshiruv ro&apos;yxati — birinchi navbatda nima qilish
              kerak?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Qaysi muammo bo&apos;lishidan qat&apos;i nazar, quyidagi 5 ta
              qadam aksariyat nosozliklarni hal qiladi:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-[40px_1fr] gap-0">
                {[
                  "Ilovani to'liq yopib, qayta oching",
                  "Ilovani eng so'nggi versiyaga yangilang",
                  "Sozlamalar → Telegram Premium'da muddatni tekshiring",
                  "Internetni tekshiring va qurilmani qayta ishga tushiring",
                  "Muammo to'lov/muddat bo'lsa — so'mda reseller orqali yangilang",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="contents"
                  >
                    <div
                      className={`flex items-center justify-center font-bold text-primary ${
                        i < 4 ? "border-b border-card-border" : ""
                      } py-4`}
                    >
                      {i + 1}
                    </div>
                    <div
                      className={`flex items-center text-sm text-foreground/80 ${
                        i < 4 ? "border-b border-card-border" : ""
                      } py-4 pr-4`}
                    >
                      {item}
                    </div>
                  </div>
                ))}
              </div>
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
                  q: "To'lov o'tdi, lekin Telegram Premium faollashmadi — nima qilish kerak?",
                  a: "Avval Telegram ilovasini to'liq yoping va qaytadan oching, so'ng Sozlamalar → Telegram Premium bo'limini tekshiring — Premium odatda bir necha daqiqada faollashadi. Bir soatdan keyin ham bo'lmasa: ilovani yangilang, internetni tekshiring, qurilmani qayta ishga tushiring. Rasmiy yo'l bilan olganlar @PremiumBot saportiga chek bilan murojaat qiladi; PremiumSend orqali olganlar to'lov tasdig'ini @premiumsend_admin ga yuboradi.",
                },
                {
                  q: "Telegram Premium birdan yo'qoldi — nega?",
                  a: "Eng ko'p sabab — obuna muddati tugagani. Premium funksiyalaridan joriy to'lov davri oxirigacha foydalaniladi, keyin ular o'chadi. Avtomatik to'lov yoqilgan-u, kartada mablag' yetmasa ham yangilanmaydi. Boshqa sabab — eski ilova yoki kesh nosozligi. Sozlamalar → Telegram Premium'da muddatni tekshiring.",
                },
                {
                  q: "Premium tugagandan keyin qaysi funksiyalar va ma'lumotlar yo'qoladi?",
                  a: "Hech narsa o'chib ketmaydi — faqat bepul limitdan oshgan qismi yashiriladi: username'lar saqlanadi (10 tadan oshsa yangisi yaratilmaydi); kanal/papkalar joyida qoladi, lekin yangisiga qo'shilish cheklanadi; dastlabki 10 papka ishlaydi; 200 tadan oshiq GIF yashiriladi; bio'ning dastlabki 70 belgisi ko'rinadi. Qayta obuna bo'lsangiz hammasi qaytadi.",
                },
                {
                  q: "Premium emoji, stiker yoki 4 GB fayl yuklash ishlamayapti — qanday tuzataman?",
                  a: "1) Premium faolligini tekshiring. 2) Ilovani eng so'nggi versiyaga yangilang. 3) Telegramni to'liq yopib qayta oching. 4) Bitta qurilmada ko'rinmasa, o'sha qurilmadagi ilovani yangilang. 5) Premium emoji/stikerlarni oddiy foydalanuvchilar ham ko'radi — bu shunday ishlaydi.",
                },
                {
                  q: "Premium bir qurilmada bor, lekin boshqasida ko'rinmayapti — nega?",
                  a: "Premium butun akkauntga bog'lanadi va barcha qurilmalarda avtomatik sinxronlanishi kerak. Ko'rinmasa: o'sha qurilmadagi ilovani yangilang, to'liq yopib qayta oching va internetni tekshiring. Ko'pincha sabab — eski versiya yoki kech sinxronizatsiya.",
                },
                {
                  q: "Telegram Premium obunasini qanday bekor qilaman?",
                  a: "Telegram ichidan: Sozlamalar → Telegram Premium ko'rsatmalariga amal qiling. iPhone'da: Sozlamalar → Apple ID → Obunalar. Google Play'da: Play Market → Obunalar. Bekor qilsangiz kelgusi to'lovlar to'xtaydi, joriy davr oxirigacha Premium ishlaydi. Reseller orqali olingan obunada avtomatik to'lov yo'q — o'zi tugaydi.",
                },
                {
                  q: "Menga sovg'a qilingan Telegram Premium kelmadi — nima qilaman?",
                  a: "Sovg'a odatda darhol faollashadi. Ko'rinmasa: ilovani yangilang va qayta oching, Sozlamalar → Telegram Premium'ni tekshiring. Yuboruvchi anonim bo'lishi mumkin (default). Premium faollashmagan bo'lsa, yuboruvchidan sovg'a jo'natilgani va to'lov o'tganini tasdiqlashni so'rang.",
                },
                {
                  q: "To'lov nega o'tmayapti yoki 'Card declined' chiqyapti?",
                  a: "Rasmiy @PremiumBot va App Store Uzcard/Humo'ni qabul qilmaydi — faqat xalqaro Visa/Mastercard. Visa bo'lsa ham bank xalqaro to'lovni yopgan, 3D Secure SMS kelmagan yoki provayder vaqti tugagan bo'lishi mumkin. O'zbekistondagi eng oddiy yechim — Uzcard, Humo, Click yoki Payme bilan so'mda ishlovchi reseller.",
                },
                {
                  q: "Telegram Premium O'zbekistonda mavjudmi yoki cheklanganmi?",
                  a: "Premium O'zbekistonda to'liq ishlaydi — cheklov faqat to'lov bosqichida, chunki rasmiy bot va ilova do'konlari mahalliy kartani qabul qilmaydi va narx dollarda. Muammo Premiumning o'zida emas, to'lov usulida. So'mda olish uchun reseller ishlatiladi.",
                },
                {
                  q: "Premium obunamni uzaytirsam, muddat qachondan boshlanadi?",
                  a: "Joriy obuna tugamagan bo'lsa, yangi muddat odatda ustiga qo'shiladi — kunlar yo'qolmaydi. Aniq holatni Sozlamalar → Telegram Premium'dagi sanadan tekshiring. Reseller orqali muddatni joriy davr tugashiga yaqin faollashtirish qulayroq.",
                },
                {
                  q: "Reseller orqali olgan Premiumda muammo chiqsa nima qilaman?",
                  a: "U ham Telegram'ning rasmiy obunasi bo'lgani uchun yuqoridagi yechimlar (yangilash, qayta ochish, muddatni tekshirish) bir xil ishlaydi. Faollashish yoki muddat masalasi bo'lsa, to'lov tasdig'ini saqlab reseller aloqa kanaliga (PremiumSend uchun @premiumsend_admin) murojaat qiling.",
                },
                {
                  q: "Premium statusini qanday tekshiraman?",
                  a: "Sozlamalar → Telegram Premium bo'limiga kiring — obuna faolligi va muddat ko'rsatiladi. Ism yonida yulduzcha belgisi ko'rinsa, Premium faol. Belgini Sozlamalardan yoqib/o'chirib qo'yish ham mumkin.",
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
                  Telegram Premium muammolarining aksariyati ilovani yangilash va
                  qayta ochish bilan hal bo&apos;ladi. Muammo to&apos;lov yoki
                  muddat tugashida bo&apos;lsa —{" "}
                  <strong className="text-white">@PremiumSendBot</strong> orqali
                  so&apos;mda yangilang.{" "}
                  <strong className="text-white">1 oylik 59 000</strong>,{" "}
                  <strong className="text-white">12 oylik 425 000 so&apos;m</strong>{" "}
                  — Premium 3-5 daqiqada.
                </p>
                <Link
                  href="https://telegram.me/premiumsendbot"
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
