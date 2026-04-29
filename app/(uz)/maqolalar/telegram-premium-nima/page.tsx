import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Telegram Premium nima va 2026-yilda qanday imkoniyatlar beradi — to'liq qo'llanma",
  description:
    "Telegram Premium — bu Telegramning pullik versiyasi. 4 GB fayl yuklash, reklamasiz tajriba, 1000 kanal va 20+ funksiya. O'zbekistonda 59,000 so'mdan, @PremiumSendBot orqali so'mda to'lov.",
  keywords: [
    "Telegram Premium nima",
    "Telegram Premium imkoniyatlari",
    "Telegram Premium funksiyalari",
    "Telegram Premium 2026",
    "Telegram Premium foydasi",
    "Premium Telegram nima beradi",
    "Telegram Premium narxi",
    "PremiumSendBot",
  ],
  alternates: {
    canonical: "https://premiumsend.uz/maqolalar/telegram-premium-nima",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/telegram-premium-nima",
      ru: "https://premiumsend.uz/ru/maqolalar/telegram-premium-nima",
    },
  },
  openGraph: {
    title:
      "Telegram Premium nima va 2026-yilda qanday imkoniyatlar beradi",
    description:
      "Telegram Premium imkoniyatlari, narxlari va O'zbekistonda sotib olish bo'yicha to'liq qo'llanma. 4 GB fayl, reklamasiz, 20+ funksiya.",
    url: "https://premiumsend.uz/maqolalar/telegram-premium-nima",
    type: "article",
    publishedTime: "2026-04-29",
  },
};

export default function ArticleTelegramPremiumNima() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Telegram Premium nima va 2026-yilda qanday imkoniyatlar beradi — to'liq qo'llanma",
    description:
      "Telegram Premium — Telegramning pullik versiyasi. 4 GB fayl, reklamasiz tajriba, 20+ funksiya. O'zbekistonda 59,000 so'mdan boshlab so'mda to'lov.",
    datePublished: "2026-04-29",
    dateModified: "2026-04-29",
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
      "https://premiumsend.uz/maqolalar/telegram-premium-nima",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Telegram Premium nima?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Telegram Premium — bu Telegram messengerining oylik yoki yillik to'lovga asoslangan kengaytirilgan versiyasi. U 4 GB fayl yuklash, reklamalarni o'chirish, 1000 ta kanalga obuna bo'lish, premium stikerlar, animatsiyali emoji va boshqa 20+ qo'shimcha funksiyani beradi.",
        },
      },
      {
        "@type": "Question",
        name: "Telegram Premium qancha turadi O'zbekistonda?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O'zbekistonda Premium Send da 1 oylik — 59,000 so'm, 3 oylik — 175,000 so'm, 6 oylik — 235,000 so'm, 12 oylik — 425,000 so'm. Eng arzon variant — 12 oylik (oyiga 35,417 so'm). To'lov Uzcard, Humo, Click yoki Payme orqali so'mda.",
        },
      },
      {
        "@type": "Question",
        name: "Telegram Premium nima uchun kerak?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Premium katta fayl ishlatadigan, ko'p kanal kuzatadigan, tezkor yuklash istagan va reklamadan charchagan foydalanuvchilar uchun. Tadbirkorlar, blogerlar, talaba va o'qituvchilar uchun ish vositasi sifatida foydali. Oddiy foydalanuvchiga reklamasiz tajriba va premium stikerlar uchun yetadi.",
        },
      },
      {
        "@type": "Question",
        name: "Premium funksiyalari nimalarga ta'sir qiladi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Asosiy ta'sirlar: fayl o'lchami 2 GB dan 4 GB ga oshadi, kanal limiti 500 dan 1000 ga ko'tariladi, papkalar 10 dan 20 ga ortadi, ovozli xabarlar matnga aylantiriladi, profil maxsus rang va animatsiya oladi, har xabar uchun 10 ta reaksiya qo'yish mumkin (4 ta o'rniga).",
        },
      },
      {
        "@type": "Question",
        name: "O'zbekistonda Telegram Premium qanday sotib olinadi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Eng oson yo'l — @PremiumSendBot orqali. Botni oching, paketni tanlang, username kiriting va Uzcard, Humo, Click yoki Payme orqali so'mda to'lang. Premium 5 daqiqa ichida avtomatik faollashadi. Telegramning rasmiy tizimi xorijiy karta talab qiladi, mahalliy kartalar ishlamaydi.",
        },
      },
      {
        "@type": "Question",
        name: "Telegram Premium yoqib bo'lgach, oddiy Telegramga qaytib bo'ladimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha. Premium muddati tugagach, akkaunt avtomatik oddiy Telegramga qaytadi. Premium funksiyalar o'chiriladi (4 GB fayllar saqlanadi, lekin yangisini yuborish uchun 2 GB chegara qaytadi). Hech qanday ma'lumot yo'qolmaydi.",
        },
      },
      {
        "@type": "Question",
        name: "Telegram Premium kanaliga obuna bo'lganlar Premium funksiyalarni ko'radimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kanal yoki guruh egasi Premium bo'lsa, u premium stikerlar, animatsiyali emoji va katta fayllar yubora oladi. Oddiy obunachilar bu kontentni ko'radi va o'qiy oladi, lekin o'zlari yubora olmaydi. Ya'ni Premium muallifning imkoniyatlarini kengaytiradi, obunachining tajribasiga ham ta'sir qiladi.",
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
        name: "Telegram Premium nima",
        item: "https://premiumsend.uz/maqolalar/telegram-premium-nima",
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
          Telegram Premium nima
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
            <time className="text-xs text-muted" dateTime="2026-04-29">
              2026-yil, 29-aprel
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Telegram Premium nima va 2026-yilda qanday imkoniyatlar beradi
          </h1>

          {/* TL;DR — AI Snippet */}
          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>Qisqacha javob:</strong> Telegram Premium — bu Telegramning oylik yoki yillik obunaga asoslangan kengaytirilgan versiyasi. U <strong>4 GB fayl yuklash</strong>, reklamasiz tajriba, <strong>1000 ta kanalga obuna</strong>, 20+ qo&apos;shimcha funksiya beradi. O&apos;zbekistonda{" "}
              <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>{" "}
              orqali <strong>59,000 so&apos;mdan</strong> boshlab so&apos;mda sotib olinadi.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Telegram dunyoda 1 milliarddan ortiq foydalanuvchi tomonidan ishlatiladigan messenger. Uning bepul versiyasi allaqachon kuchli — fayllar, kanallar, ovozli xabarlar, hammasi cheksiz. Lekin 2022-yildan boshlab Telegram <strong>Premium obunani</strong> taklif qilmoqda — bu pullik versiya cheklovlarni olib tashlaydi va oddiy foydalanuvchida bo&apos;lmagan funksiyalarni qo&apos;shadi.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Bu maqolada Premium nima ekanligi, qanday imkoniyatlar berishi, kimga kerak va kimga kerakmasligi, hamda O&apos;zbekistondan qanday sotib olish mumkinligini batafsil ko&apos;rib chiqamiz. 2026-yilning yangi funksiyalari bilan birga.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 — Definition */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Telegram Premium nima? Sodda ta&apos;rifda
            </h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Telegram Premium</strong> — Telegram messengerining oylik yoki yillik to&apos;lovga asoslangan kengaytirilgan versiyasi. U bepul versiyadagi cheklovlarni olib tashlaydi, reklamalarni o&apos;chiradi va eksklyuziv funksiyalar qo&apos;shadi.
              </p>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              Premium ni Telegram 2022-yil iyun oyida ishga tushirgan. Maqsad ikki tomonlama: birinchi — kompaniyaga doimiy daromad manbai bo&apos;lishi (Telegram reklamaga qattiq tayanmaydi), ikkinchi — &quot;ko&apos;p ishlatadigan&quot; foydalanuvchilar uchun yanada qulay tajriba yaratish.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Texnik nuqtai nazardan Premium oddiy bir bayroq — sizning akkauntingizga &quot;premium = true&quot; degan belgi qo&apos;yiladi va serverlar boshqa cheklovlar va imkoniyatlar bilan ishlaydi. Yangi ilova o&apos;rnatish, akkauntni almashtirish kerak emas. Faqat to&apos;lov amalga oshadi va shu zahoti hamma narsa o&apos;zgaradi — fayllar 4 GB gacha yuboriladi, kanallar 1000 tagacha qo&apos;shiladi, oddiy foydalanuvchilar ko&apos;ra olmaydigan reaksiyalar mavjud bo&apos;ladi.
            </p>
            <p className="text-muted leading-relaxed">
              Bir gap bilan: Premium — bu &quot;boshqa Telegram&quot; emas, balki &quot;chegaralar olib tashlangan Telegram&quot;.
            </p>
          </section>

          {/* Section 2 — Features */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Telegram Premium qanday imkoniyatlar beradi? 20+ funksiya
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Premium funksiyalarini 5 ta katta toifaga bo&apos;lish mumkin. Quyida har biri batafsil:
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3">1. Cheklovlar olib tashlanadi</h3>
            <div className="space-y-3 mb-8">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h4 className="font-bold text-foreground mb-1">4 GB fayl yuklash</h4>
                <p className="text-sm text-muted leading-relaxed">
                  Oddiy versiyada bir fayl chegarasi — 2 GB. Premium da bu chegara <strong>4 GB</strong> gacha ikki barobar oshadi. Video, hujjat, arxiv — har qanday formatda. Bu, ayniqsa, ko&apos;p video yuboradiganlar uchun muhim.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h4 className="font-bold text-foreground mb-1">1000 ta kanalga obuna</h4>
                <p className="text-sm text-muted leading-relaxed">
                  Bepul akkauntda kanallar va guruhlarning umumiy soni 500 ta bilan cheklangan. Premium bu chegarani <strong>1000 taga</strong> ko&apos;taradi. Yangiliklar, ish, qiziqishlarni kuzatadiganlar uchun zarur.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h4 className="font-bold text-foreground mb-1">Cheksiz yuklash tezligi</h4>
                <p className="text-sm text-muted leading-relaxed">
                  Bepul foydalanuvchilar katta fayllarni sekin yuklaydi (Telegram serverlari priorityni Premium foydalanuvchilarga beradi). Premium da hech qanday cheklov yo&apos;q — internet tezligingiz qancha bo&apos;lsa, shuncha tez yuklanadi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h4 className="font-bold text-foreground mb-1">20 ta papka (folder)</h4>
                <p className="text-sm text-muted leading-relaxed">
                  Suhbatlarni guruhlash uchun papkalar — Premium da 10 ta o&apos;rniga <strong>20 ta</strong> yaratish mumkin. Har papkada chatlar tartibi alohida, qisqacha klick bilan o&apos;tish.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h4 className="font-bold text-foreground mb-1">4 ta akkaunt bir vaqtda</h4>
                <p className="text-sm text-muted leading-relaxed">
                  Bepul versiyada bir ilovada 3 ta akkaunt ulash mumkin. Premium <strong>4 taga</strong> ko&apos;taradi. Shaxsiy + ish + biznes + ehtiyotki uchun.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-foreground mb-3">2. Reklamasiz tajriba</h3>
            <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm mb-8">
              <p className="text-sm text-muted leading-relaxed">
                Telegram katta ochiq kanallarda sponsor xabarlarni ko&apos;rsatadi (faqat 1000+ obunachili kanallar). Premium ushbu reklamalarni butunlay <strong>o&apos;chiradi</strong>. Yopiq guruhlar va xususiy chatlarda reklamalar baribir yo&apos;q — bu reklama oddiy versiya foydalanuvchilarini ham bezovta qilmaydi, lekin Premium ulardan to&apos;liq xalos bo&apos;lish imkonini beradi.
              </p>
            </div>

            <h3 className="text-xl font-bold text-foreground mb-3">3. Premium stikerlar, emoji, reaksiyalar</h3>
            <div className="space-y-3 mb-8">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h4 className="font-bold text-foreground mb-1">Premium stikerlar to&apos;plami</h4>
                <p className="text-sm text-muted leading-relaxed">
                  Faqat Premium foydalanuvchilar yubora oladigan eksklyuziv stikerlar. Animatsiyalari kuchliroq, dizayni boshqacha. Oddiy foydalanuvchilar bu stikerlarni <em>ko&apos;rishadi</em>, lekin yubora olishmaydi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h4 className="font-bold text-foreground mb-1">Animatsiyali emoji</h4>
                <p className="text-sm text-muted leading-relaxed">
                  Premium foydalanuvchilar matn ichida animatsiyali emojilarni ishlatishi mumkin — oddiy 😀 o&apos;rniga harakatlanadigan, &quot;jonli&quot; emojilar. Yopiq foydalanuvchi guruhi uchun ifoda darajasini sezilarli oshiradi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h4 className="font-bold text-foreground mb-1">10 ta reaksiya har xabarga</h4>
                <p className="text-sm text-muted leading-relaxed">
                  Bepul foydalanuvchi har xabarga atigi <strong>1 ta</strong> reaksiya qo&apos;ya oladi. Premium <strong>3 ta reaksiya</strong> qo&apos;yish imkonini beradi va kengaytirilgan reaksiyalar to&apos;plamini ochib beradi (ko&apos;p reaksiya, animatsiyalanganlari).
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-foreground mb-3">4. Profilni shaxsiylashtirish</h3>
            <div className="space-y-3 mb-8">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h4 className="font-bold text-foreground mb-1">Animatsiyali profil rasmi</h4>
                <p className="text-sm text-muted leading-relaxed">
                  Avatar sifatida video qo&apos;yish mumkin. Boshqa foydalanuvchilar profilingizni ochsa — animatsiya o&apos;ynaydi. Statik rasm o&apos;rniga jonli ifoda.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h4 className="font-bold text-foreground mb-1">Ranglar va emoji-statuslar</h4>
                <p className="text-sm text-muted leading-relaxed">
                  Ismingiz, profilingiz, suhbatlaringiz uchun maxsus ranglar tanlash. Profil yoniga emoji-status qo&apos;yish (masalan, &quot;ishda&quot;, &quot;dam olishda&quot;) — barcha do&apos;stlar ko&apos;radi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h4 className="font-bold text-foreground mb-1">Premium badge (yulduzcha)</h4>
                <p className="text-sm text-muted leading-relaxed">
                  Ismingiz yonida kichik yulduzcha paydo bo&apos;ladi — bu Premium foydalanuvchi belgisi. Boshqalar darrov ko&apos;radi — Premium statusi vizual ko&apos;rinishda.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-foreground mb-3">5. Maxsus funksiyalar</h3>
            <div className="space-y-3">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h4 className="font-bold text-foreground mb-1">Ovozli xabarlarni matnga aylantirish</h4>
                <p className="text-sm text-muted leading-relaxed">
                  Kimdir uzun ovozli xabar yuborganda, Premium tugmasini bosing — Telegram uni avtomatik ravishda matnga aylantiradi. Yig&apos;ilishda, jamoat transportida, baland ovoz tinglash imkoni bo&apos;lmagan paytda — bebaho.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h4 className="font-bold text-foreground mb-1">Tarjima ichki funksiya sifatida</h4>
                <p className="text-sm text-muted leading-relaxed">
                  Har qanday xabarni boshqa tilga tarjima qilish — bir bosish bilan. Xorijiy kanallarni o&apos;qish, chet ellik do&apos;stlar bilan suhbat — endi til to&apos;sig&apos;i emas.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h4 className="font-bold text-foreground mb-1">Last seen, online, o&apos;qish vaqtini boshqarish</h4>
                <p className="text-sm text-muted leading-relaxed">
                  Premium <strong>kim sizning &quot;onlayn&quot; statusingizni ko&apos;rishini</strong> nazorat qilish imkonini beradi. Shuningdek, kontakt bo&apos;lmagan odamlar profilingizdagi rasmni ko&apos;ra olmasligini sozlash, xabar o&apos;qigan vaqtni yashirish — barchasi mavjud.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h4 className="font-bold text-foreground mb-1">Telegram Stories — kengaytirilgan</h4>
                <p className="text-sm text-muted leading-relaxed">
                  Stories funksiyasi hammada bor, lekin Premium foydalanuvchilarga: kunlik <strong>3 ta</strong> story chegarasi olib tashlanadi (cheksiz), uzunroq video, story ostiga formatlangan matn qo&apos;shish, kim ko&apos;rganini batafsil tahlil — barchasi ochiq.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h4 className="font-bold text-foreground mb-1">Username uchun maxsus havola</h4>
                <p className="text-sm text-muted leading-relaxed">
                  Premium da bio ichiga turli havolalarni qo&apos;shish, oddiy foydalanuvchilarga taqdim etilmaydigan formatda profil sozlash mumkin.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 — Pricing */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Telegram Premium narxi qancha O&apos;zbekistonda?
            </h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Narx:</strong> Premium Send da Telegram Premium <strong>59,000 so&apos;mdan</strong> boshlanadi (1 oylik). Eng arzon variant — 12 oylik paket, oyiga atigi <strong>35,417 so&apos;m</strong>. To&apos;lov Uzcard, Humo, Click yoki Payme orqali so&apos;mda amalga oshiriladi.
              </p>
            </div>

            <p className="text-muted leading-relaxed mb-6">
              Telegram rasmiy ilovasida narx dollarda ko&apos;rsatiladi va xorijiy karta talab qiladi. O&apos;zbekistonliklar uchun bu muammo — Uzcard va Humo rasmiy tizimda ishlamaydi. Premium Send aynan shu masalani hal qiladi: mahalliy karta + so&apos;m + 5 daqiqada faollashtirish.
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-4 bg-section-alt p-4 font-bold text-sm">
                <div>Paket</div>
                <div className="text-center">Umumiy narx</div>
                <div className="text-center">Oyiga</div>
                <div className="text-center">Tejamkorlik</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">1 oylik</div>
                <div className="text-center">59,000 so&apos;m</div>
                <div className="text-center">59,000 so&apos;m</div>
                <div className="text-center text-muted">—</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">3 oylik</div>
                <div className="text-center">175,000 so&apos;m</div>
                <div className="text-center">58,333 so&apos;m</div>
                <div className="text-center text-green-600 font-bold">1%</div>
              </div>
              <div className="grid grid-cols-4 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">6 oylik</div>
                <div className="text-center">235,000 so&apos;m</div>
                <div className="text-center">39,167 so&apos;m</div>
                <div className="text-center text-green-600 font-bold">33%</div>
              </div>
              <div className="grid grid-cols-4 p-4 items-center text-sm bg-primary-light/20">
                <div className="font-bold text-primary">12 oylik ⭐</div>
                <div className="text-center font-bold text-primary">425,000 so&apos;m</div>
                <div className="text-center font-bold text-primary">35,417 so&apos;m</div>
                <div className="text-center text-green-600 font-bold">39%</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              Har paket haqida batafsil:{" "}
              <Link href="/maqolalar/1-oylik-telegram-premium-sotib-olish" className="text-primary font-semibold hover:underline">1 oylik</Link>,{" "}
              <Link href="/maqolalar/3-oylik-telegram-premium-sotib-olish" className="text-primary font-semibold hover:underline">3 oylik</Link>,{" "}
              <Link href="/maqolalar/6-oylik-telegram-premium-sotib-olish" className="text-primary font-semibold hover:underline">6 oylik</Link>{" "}
              va{" "}
              <Link href="/maqolalar/12-oylik-telegram-premium-sotib-olish" className="text-primary font-semibold hover:underline">12 oylik</Link>.
            </p>

            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Eng tejamkor variant — <strong className="text-white">12 oylik paket</strong>, oyiga atigi 35,417 so&apos;m. Bir martalik to&apos;lov, 365 kun uzluksiz Premium.
              </p>
              <Link
                href="https://t.me/premiumsendbot"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                @PremiumSendBot — paket tanlash
              </Link>
            </div>
          </section>

          {/* Section 4 — Premium vs Regular */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Telegram Premium oddiy Telegramdan qanday farq qiladi?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Asosiy farqlarni jadvalda ko&apos;rib chiqamiz — bu sizga Premium kerakmi yoki yo&apos;qmi degan savolga aniq javob beradi:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Funksiya</div>
                <div className="text-center">Bepul</div>
                <div className="text-center">Premium</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Maks. fayl o&apos;lchami</div>
                <div className="text-center text-muted">2 GB</div>
                <div className="text-center text-primary font-bold">4 GB</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Kanallar/guruhlar</div>
                <div className="text-center text-muted">500</div>
                <div className="text-center text-primary font-bold">1000</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Papkalar (chat folders)</div>
                <div className="text-center text-muted">10</div>
                <div className="text-center text-primary font-bold">20</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Bir vaqtda akkauntlar</div>
                <div className="text-center text-muted">3</div>
                <div className="text-center text-primary font-bold">4</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Reaksiyalar har xabar</div>
                <div className="text-center text-muted">1</div>
                <div className="text-center text-primary font-bold">3</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Pinned chat sayt</div>
                <div className="text-center text-muted">5</div>
                <div className="text-center text-primary font-bold">10</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Reklamalar (kanallarda)</div>
                <div className="text-center text-muted">Ko&apos;rinadi</div>
                <div className="text-center text-primary font-bold">Yo&apos;q</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Premium stikerlar</div>
                <div className="text-center text-muted">❌</div>
                <div className="text-center text-primary font-bold">✅</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Animatsiyali emoji</div>
                <div className="text-center text-muted">❌</div>
                <div className="text-center text-primary font-bold">✅</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Animatsiyali avatar</div>
                <div className="text-center text-muted">❌</div>
                <div className="text-center text-primary font-bold">✅</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Voice → Matn</div>
                <div className="text-center text-muted">❌</div>
                <div className="text-center text-primary font-bold">✅</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Tarjima funksiyasi</div>
                <div className="text-center text-muted">Cheklangan</div>
                <div className="text-center text-primary font-bold">To&apos;liq</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center text-sm">
                <div className="font-medium">Profil yulduzchasi</div>
                <div className="text-center text-muted">❌</div>
                <div className="text-center text-primary font-bold">✅</div>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Bu cheklangan ro&apos;yxat — to&apos;liq taqqoslash uchun{" "}
              <Link href="/maqolalar/3-oylik-telegram-premium-uzcard-orqali" className="text-primary font-semibold hover:underline">batafsil maqolalarimizni</Link>{" "}
              ko&apos;ring. Asosiy gap: Premium oddiy foydalanuvchi cheklovga duch keladigan har bir nuqtada bu cheklovni olib tashlaydi yoki ikki barobarga ko&apos;taradi.
            </p>
          </section>

          {/* Section 5 — Who needs */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Telegram Premium kimga kerak va kimga kerak emas?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Halol bo&apos;lsak — Premium hammaga kerak emas. Bu — qiymatga asoslangan tanlov. Quyida kim uchun Premium foydali, kim uchun esa unchalik foydali emasligini ko&apos;rib chiqamiz:
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3">✅ Premium aniq mos:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h4 className="font-bold text-foreground mb-1">Tadbirkor va biznes egalari</h4>
                <p className="text-sm text-muted">
                  Mijoz bilan suhbat, hujjat almashish, kanal boshqarish — Premium professional darajada ishlaydi.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h4 className="font-bold text-foreground mb-1">Bloger va kontent yaratuvchilar</h4>
                <p className="text-sm text-muted">
                  Katta video, premium reaksiyalar, story kengaytmalari — auditoriya bilan ishlash uchun.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h4 className="font-bold text-foreground mb-1">Talaba va o&apos;qituvchi</h4>
                <p className="text-sm text-muted">
                  Lektsiya videolari, kitoblar (4 GB), ovozli xabarlarni matnga aylantirish — o&apos;qish uchun zarur.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                <h4 className="font-bold text-foreground mb-1">Ko&apos;p kanal kuzatadiganlar</h4>
                <p className="text-sm text-muted">
                  500 ta chegara yetmasa, 1000 taga oshirish — yangiliklar va qiziqishlarni cheklamasdan kuzatish.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-foreground mb-3">⚠️ Premium siz uchun ortiqcha bo&apos;lishi mumkin:</h3>
            <div className="space-y-3 mb-6">
              <div className="bg-section-alt rounded-xl p-5">
                <p className="text-muted text-sm leading-relaxed">
                  <strong className="text-foreground">Telegramni juda kam ishlatadiganlar.</strong> Agar siz kuniga atigi 5-10 ta xabar yuborsangiz va kichik fayllar bilan ishlasangiz — bepul versiya yetadi. Premium funksiyalari hayotingizda sezilmaydi.
                </p>
              </div>
              <div className="bg-section-alt rounded-xl p-5">
                <p className="text-muted text-sm leading-relaxed">
                  <strong className="text-foreground">Faqat 5-10 ta kanalga obuna bo&apos;lganlar.</strong> 500 ta chegaradan juda uzoq bo&apos;lsangiz — Premium bu jihatdan kerak emas.
                </p>
              </div>
              <div className="bg-section-alt rounded-xl p-5">
                <p className="text-muted text-sm leading-relaxed">
                  <strong className="text-foreground">Reklama bezovta qilmaydigan foydalanuvchi.</strong> Telegram reklamasi shunchaki katta kanallarda bor va u juda salbiy emas. Agar reklama sizni bezovta qilmasa — bu Premium uchun sabab emas.
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed">
              Yana bir variant — birovga sovg&apos;a qilish. Yaqinlaringizga 3, 6 yoki 12 oylik Premium tug&apos;ilgan kun yoki bayram munosabati bilan{" "}
              <Link href="/maqolalar/3-oylik-telegram-premium-sovga-qilish" className="text-primary font-semibold hover:underline">sovg&apos;a qilish</Link>{" "}
              juda foydali tanlov.
            </p>
          </section>

          {/* Section 6 — How to buy */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              O&apos;zbekistonda Telegram Premium qanday sotib olinadi?
            </h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Qisqa javob:</strong>{" "}
                <Link href="https://t.me/premiumsendbot" target="_blank" className="text-primary hover:underline">@PremiumSendBot</Link>{" "}
                ni Telegramda oching → paketni tanlang (1, 3, 6, 12 oylik) → username kiriting → Uzcard, Humo, Click yoki Payme orqali so&apos;mda to&apos;lang → Premium 5 daqiqada avtomatik faollashadi.
              </p>
            </div>

            <p className="text-muted leading-relaxed mb-4">
              O&apos;zbekistonda Premium sotib olishda ikki muammo bor: birinchidan, Telegram rasmiy ilovasida narx dollarda va to&apos;lov xorijiy karta talab qiladi. Ikkinchidan, ko&apos;p reseller botlar ishonchsiz — pul yo&apos;qotish ehtimoli bor.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Premium Send bu ikki muammoni hal qiladi: Uzcard, Humo, Click va Payme bilan so&apos;mda to&apos;lov, hamda yillar davomida sinovdan o&apos;tgan ishonchli xizmat. Premium 5-10 daqiqa ichida avtomatik faollashadi.
            </p>

            <div className="space-y-4 mb-6">
              {[
                { step: "1", title: "@PremiumSendBot ni oching", desc: "Telegramda qidiruvdan toping va /start bosing." },
                { step: "2", title: "Paketni tanlang", desc: "1, 3, 6 yoki 12 oylik. Tejamkorlik uchun 12 oylik tavsiya etiladi." },
                { step: "3", title: "Username kiriting", desc: "Premium yoqilishi kerak bo'lgan akkauntning Telegram nomi." },
                { step: "4", title: "Uzcard/Humo/Click/Payme bilan to'lang", desc: "So'mda, mahalliy karta, komissiyasiz." },
                { step: "5", title: "Premium 5 daqiqada faollashadi", desc: "Avtomatik. Qo'shimcha tasdiq talab qilinmaydi." },
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
              Maxsus mavzular bo&apos;yicha qo&apos;llanmalar:{" "}
              <Link href="/maqolalar/12-oylik-telegram-premium-uzcard-orqali" className="text-primary font-semibold hover:underline">12 oylik Uzcard orqali</Link>,{" "}
              <Link href="/maqolalar/3-oylik-telegram-premium-sovga-qilish" className="text-primary font-semibold hover:underline">sovg&apos;a qilish</Link>,{" "}
              <Link href="/maqolalar/6-oylik-telegram-premium-olishning-eng-yaxshi-usuli" className="text-primary font-semibold hover:underline">eng yaxshi usul</Link>.
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
                  q: "Telegram Premium nima?",
                  a: "Telegram Premium — bu Telegramning oylik yoki yillik to'lovga asoslangan kengaytirilgan versiyasi. U 4 GB fayl yuklash, reklamalarni o'chirish, 1000 ta kanalga obuna, premium stikerlar, animatsiyali emoji va boshqa 20+ funksiya beradi.",
                },
                {
                  q: "Telegram Premium qancha turadi O'zbekistonda?",
                  a: "Premium Send da 1 oylik — 59,000 so'm, 3 oylik — 175,000 so'm, 6 oylik — 235,000 so'm, 12 oylik — 425,000 so'm. Eng arzon variant — 12 oylik (oyiga 35,417 so'm). To'lov Uzcard, Humo, Click yoki Payme orqali so'mda.",
                },
                {
                  q: "Telegram Premium nima uchun kerak?",
                  a: "Premium katta fayl ishlatadigan, ko'p kanal kuzatadigan, tezkor yuklash istagan va reklamadan charchagan foydalanuvchilar uchun foydali. Tadbirkorlar, blogerlar, talaba-o'qituvchilar uchun ish vositasi sifatida xizmat qiladi.",
                },
                {
                  q: "Premium funksiyalari nimalarga ta'sir qiladi?",
                  a: "Asosiy ta'sirlar: fayl o'lchami 2 GB dan 4 GB ga oshadi, kanal limiti 500 dan 1000 ga ko'tariladi, papkalar 10 dan 20 ga ortadi, ovozli xabarlar matnga aylantiriladi, profil maxsus rang va animatsiya oladi, har xabar uchun 3 ta reaksiya qo'yish mumkin (1 ta o'rniga).",
                },
                {
                  q: "O'zbekistonda Telegram Premium qanday sotib olinadi?",
                  a: "Eng oson yo'l — @PremiumSendBot orqali. Botni oching, paketni tanlang, username kiriting va Uzcard, Humo, Click yoki Payme orqali so'mda to'lang. Premium 5 daqiqa ichida avtomatik faollashadi.",
                },
                {
                  q: "Premium muddati tugagach nima bo'ladi?",
                  a: "Premium muddati tugagach, akkaunt avtomatik oddiy Telegramga qaytadi. Premium funksiyalar o'chiriladi (4 GB fayllar saqlanadi, lekin yangisini yuborish uchun 2 GB chegara qaytadi). Hech qanday ma'lumot yo'qolmaydi.",
                },
                {
                  q: "Premium kanaliga obuna bo'lganlar Premium funksiyalarini ko'radimi?",
                  a: "Kanal yoki guruh egasi Premium bo'lsa, u premium stikerlar, animatsiyali emoji va katta fayllar yubora oladi. Oddiy obunachilar bu kontentni ko'radi va o'qiy oladi, lekin o'zlari yubora olmaydi.",
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
                Telegram Premium — raqamlarda
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">4 GB</p>
                  <p className="text-sm text-muted">Maksimal fayl o&apos;lchami (2 GB o&apos;rniga)</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">1000</p>
                  <p className="text-sm text-muted">Kanal/guruh limiti (500 o&apos;rniga)</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-primary">20+</p>
                  <p className="text-sm text-muted">Eksklyuziv funksiya</p>
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
                  Telegram Premium — bu kuniga ko&apos;p ishlatadiganlar uchun aqlli investitsiya. 4 GB fayl, reklamasiz, 1000 kanal, 20+ funksiya. O&apos;zbekistonda{" "}
                  <strong className="text-white">@PremiumSendBot</strong> orqali Uzcard, Humo, Click yoki Payme bilan so&apos;mda — 5 daqiqada faollashadi. 1 oylikdan boshlab, 12 oylikda esa 39% tejamkorlik.
                </p>
                <Link
                  href="https://t.me/premiumsendbot"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  @PremiumSendBot — boshlash
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
