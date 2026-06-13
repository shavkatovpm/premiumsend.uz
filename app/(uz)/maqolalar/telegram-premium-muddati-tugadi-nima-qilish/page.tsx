import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Telegram Premium muddati tugadi — nima qilish kerak va qanday tiklash",
  description:
    "Telegram Premium muddati tugaganda akkaunt oddiy Telegramga qaytadi, ma'lumot yo'qolmaydi. Nima o'chadi, fayllar saqlanadimi va @PremiumSendBot orqali so'mda qanday tiklash — to'liq javob.",
  keywords: [
    "telegram premium muddati tugadi",
    "telegram premium tugadi nima qilish",
    "telegram premium yangilash",
    "telegram premium tiklash",
    "premium muddati tugaganda nima bo'ladi",
    "telegram premium qayta sotib olish",
    "premium tugadi fayllar",
    "telegram premium uzaytirish",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/maqolalar/telegram-premium-muddati-tugadi-nima-qilish",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/telegram-premium-muddati-tugadi-nima-qilish",
      ru: "https://premiumsend.uz/ru/maqolalar/telegram-premium-muddati-tugadi-nima-qilish",
      "x-default":
        "https://premiumsend.uz/maqolalar/telegram-premium-muddati-tugadi-nima-qilish",
    },
  },
  openGraph: {
    title: "Telegram Premium muddati tugadi — nima qilish va qanday tiklash",
    description:
      "Muddati tugaganda nima o'chadi, ma'lumot yo'qoladimi va @PremiumSendBot orqali so'mda qanday tiklash. Tugashdan oldin va keyin — to'liq qo'llanma.",
    url: "https://premiumsend.uz/maqolalar/telegram-premium-muddati-tugadi-nima-qilish",
    type: "article",
    publishedTime: "2026-06-13",
  },
};

export default function ArticleMuddatiTugadi() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    image: "https://premiumsend.uz/og-image.png",
    headline:
      "Telegram Premium muddati tugadi — nima qilish kerak va qanday tiklash",
    description:
      "Telegram Premium muddati tugaganda akkaunt oddiy Telegramga qaytadi, ma'lumot yo'qolmaydi. Nima o'chadi va so'mda qanday tiklash bo'yicha to'liq javob.",
    datePublished: "2026-06-13",
    dateModified: "2026-06-13",
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
      "https://premiumsend.uz/maqolalar/telegram-premium-muddati-tugadi-nima-qilish",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Telegram Premium muddati tugaganda nima bo'ladi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Muddat tugagach akkaunt avtomatik oddiy (bepul) Telegramga qaytadi. Premium funksiyalar o'chadi: ism yonidagi yulduzcha yo'qoladi, premium stikerlar va animatsiyali emojilarni yubora olmaysiz, fayl chegarasi 4 GB dan 2 GB ga tushadi, reaksiyalar va papka limitlari oddiy holatga qaytadi. Hech qanday chat, kanal yoki fayl o'chmaydi — faqat premium imkoniyatlar to'xtaydi.",
        },
      },
      {
        "@type": "Question",
        name: "Premium tugaganda chatlar, fayllar yoki kanallar yo'qoladimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yo'q. Barcha xabarlar, chatlar, fayllar va obunalar joyida qoladi. Premium davrida yuborgan 4 GB li fayllar ham saqlanadi va ularni yuklab olish mumkin. Faqat yangi fayl yuborishda chegara qaytadan 2 GB bo'ladi. 500 tadan ortiq kanalga obuna bo'lgan bo'lsangiz, ularning hammasi qoladi — lekin yangi qo'shilish 500 chegarasiga bo'ysunadi.",
        },
      },
      {
        "@type": "Question",
        name: "Premium nega o'zi tugab qoldi — to'lov qilgandim-ku?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Premium Send orqali olingan Premium bir martalik to'lovga asoslangan — avtomatik yangilanmaydi. Ya'ni siz to'lagan muddat (1, 3, 6 yoki 12 oy) tugagach, hech narsa avtomatik yechilmaydi, lekin Premium ham o'zi uzaytirilmaydi. Bu afzallik: kartangizdan kutilmagan pul yechilmaydi. Davom ettirmoqchi bo'lsangiz, qaytadan sotib olasiz.",
        },
      },
      {
        "@type": "Question",
        name: "Telegram Premium qanday tiklanadi yoki uzaytiriladi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "@PremiumSendBot ni oching, paketni tanlang (1, 3, 6 yoki 12 oylik), username kiriting va Uzcard, Humo, Click yoki Payme orqali so'mda to'lang. Premium 5 daqiqada qayta faollashadi. Narxlar: 1 oylik 59 000, 3 oylik 175 000, 6 oylik 235 000, 12 oylik 425 000 so'm.",
        },
      },
      {
        "@type": "Question",
        name: "Muddat tugamasdan oldin uzaytirsam, qolgan kunlar yonadimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yo'nmaydi. Agar amaldagi Premium hali tugamagan bo'lsa, yangi olgan muddat avvalgisining tugash sanasidan boshlanadi — ya'ni qo'shiladi. Masalan, 8 kun qolgan bo'lsa va 6 oylik olsangiz, jami 188 kun atrofida Premium ishlaydi. Hech qanday kun yo'qolmaydi, shuning uchun erta uzaytirish xavfsiz.",
        },
      },
      {
        "@type": "Question",
        name: "Premium tugashidan oldin ogohlantirish keladimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Telegram odatda muddat tugashidan bir necha kun oldin sozlamalarda eslatma ko'rsatadi. Lekin Premium Send avtomatik yangilamagani uchun rasmiy push-bildirishnoma kelmasligi mumkin. Aniq sanani bilish uchun Telegram → Sozlamalar → Telegram Premium bo'limini oching — u yerda tugash sanasi yozilgan.",
        },
      },
      {
        "@type": "Question",
        name: "Premium tugagach premium stikerlarim va emojilarim yo'qoladimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Stikerlar to'plamlari va emojilar akkauntingizda qoladi, lekin Premiumsiz ularning premium qismini yangi xabarlarda yubora olmaysiz. Avval yuborganlaringiz suhbatlarda ko'rinib turadi. Premium qaytsa, hammasi yana ishlay boshlaydi — qaytadan o'rnatish shart emas.",
        },
      },
      {
        "@type": "Question",
        name: "Muddat tugaganini qayerdan tekshiraman?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Telegram ilovasida Sozlamalar (Settings) → Telegram Premium bo'limiga kiring. Agar Premium faol bo'lsa, tugash sanasi ko'rsatiladi. Faol bo'lmasa, sotib olish taklifi chiqadi. Ism yonidagi yulduzcha belgisining yo'qligi ham Premium tugaganini bildiradi.",
        },
      },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Tugagan Telegram Premium ni @PremiumSendBot orqali tiklash",
    description:
      "Muddati tugagan Telegram Premium ni O'zbekistonda so'mda qayta faollashtirishning bosqichma-bosqich yo'riqnomasi.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Tugash sanasini tekshiring",
        text: "Telegram → Sozlamalar → Telegram Premium bo'limiga kiring. Premium faol emasligini va qaysi kundan o'chganini ko'ring.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "@PremiumSendBot ni oching",
        text: "Telegram qidiruvidan @PremiumSendBot ni toping va /start bosing. Bot tariflar menyusini ko'rsatadi.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Paketni tanlang",
        text: "1, 3, 6 yoki 12 oylik tarifni tanlang. Doimiy foydalanuvchilar uchun 12 oylik eng tejamkor — oyiga 35 417 so'm.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Username kiriting",
        text: "Premium tiklanishi kerak bo'lgan akkauntning Telegram username'ini yozing — bu odatda o'zingizniki.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "So'mda to'lang",
        text: "Uzcard, Humo, Click yoki Payme orqali so'mda to'lov qiling. Valyuta konvertatsiyasi va qo'shimcha komissiya yo'q.",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Premium 5 daqiqada qayta faollashadi",
        text: "To'lov tasdiqlangach, Premium avtomatik yoqiladi. Yulduzcha, 4 GB fayl va boshqa funksiyalar qaytadi.",
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
        name: "Premium muddati tugadi",
        item: "https://premiumsend.uz/maqolalar/telegram-premium-muddati-tugadi-nima-qilish",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
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
          Premium muddati tugadi
        </span>
      </nav>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-700">
              Savol-javob
            </span>
            <time className="text-xs text-muted" dateTime="2026-06-13">
              2026-yil, 13-iyun
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Telegram Premium muddati tugadi — nima qilish kerak?
          </h1>

          {/* TL;DR */}
          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>Qisqacha javob:</strong> Premium muddati tugagach akkaunt
              avtomatik oddiy Telegramga qaytadi —{" "}
              <strong>hech qanday chat, fayl yoki kanal o&apos;chmaydi</strong>,
              faqat premium imkoniyatlar to&apos;xtaydi. Davom ettirmoqchi
              bo&apos;lsangiz,{" "}
              <Link
                href="https://t.me/premiumsendbot"
                target="_blank"
                className="text-primary hover:underline"
              >
                @PremiumSendBot
              </Link>{" "}
              orqali <strong>59 000 so&apos;mdan</strong> qaytadan tiklang —
              Premium 5 daqiqada qayta faollashadi.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Bir kuni Telegram&apos;ni ochasiz-u, ism yoningizdagi yulduzcha
            yo&apos;qolgan, katta fayl yuborolmayapsiz va premium stikerlar
            ishlamayapti. Vahima qilmang — bu Premium muddati tugagani belgisi,
            akkauntingizga hech narsa bo&apos;lmaydi. Quyida aniq nima
            o&apos;zgarishini, ma&apos;lumotlaringiz xavfsizligini va eng tez
            tiklash yo&apos;lini ko&apos;rib chiqamiz.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Premium muddati tugaganda aniq nima bo&apos;ladi?
            </h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Eng muhimi:</strong> akkauntingiz oddiy Telegramga
                qaytadi, lekin <strong>hech qanday ma&apos;lumot yo&apos;qolmaydi</strong>.
                Chatlar, kanallar, fayllar, sozlamalar — hammasi joyida qoladi.
                Faqat Premium qo&apos;shgan imkoniyatlar o&apos;chadi.
              </p>
            </div>

            <p className="text-muted leading-relaxed mb-6">
              Premium — bu akkauntingizga qo&apos;yilgan bir &quot;belgi&quot;.
              Muddat tugagach, Telegram shu belgini olib tashlaydi va serverlar
              sizni oddiy foydalanuvchi sifatida ko&apos;ra boshlaydi. Mana nimalar
              o&apos;zgaradi:
            </p>

            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Funksiya</div>
                <div className="text-center">Premium bilan</div>
                <div className="text-center">Tugagandan keyin</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Maks. fayl o&apos;lchami</div>
                <div className="text-center text-primary font-bold">4 GB</div>
                <div className="text-center text-muted">2 GB</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Profil yulduzchasi</div>
                <div className="text-center text-primary font-bold">Bor</div>
                <div className="text-center text-muted">Yo&apos;q</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Premium stiker / emoji yuborish</div>
                <div className="text-center text-primary font-bold">✅</div>
                <div className="text-center text-muted">❌ (ko&apos;rinadi)</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Kanal / guruh limiti</div>
                <div className="text-center text-primary font-bold">1000</div>
                <div className="text-center text-muted">500*</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">Reklamasiz kanallar</div>
                <div className="text-center text-primary font-bold">✅</div>
                <div className="text-center text-muted">Reklama qaytadi</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center text-sm">
                <div className="font-medium">Voice → matn, tarjima</div>
                <div className="text-center text-primary font-bold">To&apos;liq</div>
                <div className="text-center text-muted">Cheklangan</div>
              </div>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              * 500 tadan ortiq kanalga obuna bo&apos;lsangiz, ularning hammasi
              qoladi — faqat yangi kanal qo&apos;shish 500 chegarasiga bo&apos;ysunadi.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Fayllarim va ma&apos;lumotlarim yo&apos;qoladimi?
            </h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Yo&apos;q.</strong> Telegram bulutga asoslangan —
                ma&apos;lumotlaringiz serverda saqlanadi va Premium statusiga
                bog&apos;liq emas. Hatto Premium davrida yuborgan 4 GB li
                fayllaringizni ham keyin bemalol yuklab olasiz.
              </p>
            </div>
            <p className="text-muted leading-relaxed mb-4">
              Yagona farq — <strong>yangi</strong> kontent yuborishda. Tugagandan
              keyin yangi fayl 2 GB dan oshmasligi kerak, yangi premium stiker
              yuborolmaysiz va papka/akkaunt limitlari oddiy holatga qaytadi. Lekin
              bu o&apos;tmishdagi narsalarga ta&apos;sir qilmaydi — eski katta
              fayllar, papkalaringiz, 20 ta papka tuzilmangiz hammasi ko&apos;rinib
              turadi (faqat 10 tadan ortig&apos;ini tahrirlash cheklanishi mumkin).
            </p>
            <p className="text-muted leading-relaxed">
              Premium funksiyalar haqida batafsil bilmoqchi bo&apos;lsangiz,{" "}
              <Link
                href="/maqolalar/telegram-premium-4gb-fayl-kanal-guruh-limitlari"
                className="text-primary font-semibold hover:underline"
              >
                4 GB fayl va limitlar
              </Link>{" "}
              hamda{" "}
              <Link
                href="/maqolalar/telegram-premium-vs-oddiy-telegram"
                className="text-primary font-semibold hover:underline"
              >
                Premium vs oddiy Telegram
              </Link>{" "}
              maqolalarini ko&apos;ring.
            </p>
          </section>

          {/* Mid CTA */}
          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Premium&apos;ni yana yoqmoqchimisiz? Eng tez yo&apos;l —{" "}
                <strong className="text-white">@PremiumSendBot</strong> orqali
                so&apos;mda to&apos;lab, 5 daqiqada qayta faollashtirish. 1 oylik
                59 000 so&apos;mdan.
              </p>
              <Link
                href="https://t.me/premiumsendbot"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                @PremiumSendBot — Premium&apos;ni tiklash
              </Link>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Nega Premium o&apos;zi tugab qoldi?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Premium Send orqali olingan Premium <strong>bir martalik
              to&apos;lovga</strong> asoslangan — avtomatik yangilanish (auto-renew)
              yo&apos;q. Ya&apos;ni siz tanlagan muddat (1, 3, 6 yoki 12 oy)
              tugagach, Premium o&apos;zi to&apos;xtaydi va davom ettirish uchun
              qaytadan sotib olasiz.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Bu ko&apos;pchilik uchun aslida <strong>afzallik</strong>:
              kartangizdan kutilmaganda pul yechilmaydi, &quot;unutilgan obuna&quot;
              muammosi bo&apos;lmaydi. Siz har safar o&apos;zingiz qaror qilasiz —
              davom ettirasizmi yoki yo&apos;qmi.
            </p>
            <p className="text-muted leading-relaxed">
              Tugash sanasini oldindan bilish uchun: <strong>Telegram →
              Sozlamalar → Telegram Premium</strong> bo&apos;limini oching, u yerda
              aniq sana yozilgan. Eslatib qo&apos;ying yoki muddat tugashidan
              bir-ikki kun oldin uzaytiring.
            </p>
          </section>

          {/* Section 4 — How to restore */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Telegram Premium qanday tiklanadi? 6 qadam
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Tiklash xuddi birinchi marta sotib olgandek oddiy — atigi bir necha
              daqiqa. Mana bosqichma-bosqich:
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  step: "1",
                  title: "Tugash sanasini tekshiring",
                  desc: "Telegram → Sozlamalar → Telegram Premium bo'limidan Premium o'chganini va qaysi kundan ekanini ko'ring.",
                },
                {
                  step: "2",
                  title: "@PremiumSendBot ni oching",
                  desc: "Telegram qidiruvidan botni toping, /start bosing. Tariflar menyusi chiqadi.",
                },
                {
                  step: "3",
                  title: "Paketni tanlang",
                  desc: "1, 3, 6 yoki 12 oylik. Doimiy foydalansangiz — 12 oylik eng tejamkor (oyiga 35 417 so'm).",
                },
                {
                  step: "4",
                  title: "Username kiriting",
                  desc: "Premium tiklanishi kerak bo'lgan akkaunt — odatda o'zingizniki. @ belgisi bilan to'g'ri yozing.",
                },
                {
                  step: "5",
                  title: "Uzcard / Humo / Click / Payme bilan to'lang",
                  desc: "So'mda, mahalliy karta orqali. Valyuta konvertatsiyasi yo'q, komissiyasiz.",
                },
                {
                  step: "6",
                  title: "Premium 5 daqiqada qaytadi",
                  desc: "To'lov tasdiqlangach, yulduzcha, 4 GB fayl va barcha funksiyalar avtomatik yoqiladi.",
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
              To&apos;lov usuli bo&apos;yicha batafsil qo&apos;llanmalar:{" "}
              <Link
                href="/maqolalar/telegram-premium-payme-orqali"
                className="text-primary font-semibold hover:underline"
              >
                Payme orqali
              </Link>
              ,{" "}
              <Link
                href="/maqolalar/telegram-premium-click-orqali"
                className="text-primary font-semibold hover:underline"
              >
                Click orqali
              </Link>{" "}
              va{" "}
              <Link
                href="/maqolalar/telegram-premium-humo-orqali"
                className="text-primary font-semibold hover:underline"
              >
                Humo orqali
              </Link>
              .
            </p>
          </section>

          {/* Section 5 — renew before expiry */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Tugashidan oldin uzaytirsam, qolgan kunlar yonmaydimi?
            </h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-6">
              <p className="text-foreground leading-relaxed">
                <strong>Yo&apos;q, yonmaydi.</strong> Amaldagi Premium hali
                tugamagan bo&apos;lsa, yangi olgan muddat avvalgisining tugashidan
                boshlanadi — ya&apos;ni <strong>qo&apos;shiladi</strong>. Bironta
                ham kun yo&apos;qolmaydi.
            </p>
            </div>
            <p className="text-muted leading-relaxed mb-4">
              Masalan, sizda 8 kun qolgan va siz 6 oylik yangi paket olsangiz —
              jami <strong>188 kun atrofida</strong> uzluksiz Premium ishlaydi.
              Shu sababli muddat tugashini kutib o&apos;tirmasdan, bir-ikki kun
              oldin uzaytirib qo&apos;yish xavfsiz va qulay — Premium bir soniya
              ham uzilmaydi.
            </p>
            <p className="text-muted leading-relaxed">
              Narxlarni taqqoslab tanlash uchun{" "}
              <Link
                href="/maqolalar/telegram-premium-narxlari"
                className="text-primary font-semibold hover:underline"
              >
                Telegram Premium narxlari 2026
              </Link>{" "}
              maqolasiga qarang.
            </p>
          </section>

          {/* Section 6 — narxlar table */}
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Tiklash qancha turadi? Narxlar
            </h2>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-section-alt p-4 font-bold text-sm">
                <div>Paket</div>
                <div className="text-center">Narx</div>
                <div className="text-center">Oyiga</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">1 oylik</div>
                <div className="text-center">59 000 so&apos;m</div>
                <div className="text-center text-muted">59 000 so&apos;m</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">3 oylik</div>
                <div className="text-center">175 000 so&apos;m</div>
                <div className="text-center text-muted">58 333 so&apos;m</div>
              </div>
              <div className="grid grid-cols-3 p-4 border-b border-card-border items-center text-sm">
                <div className="font-medium">6 oylik</div>
                <div className="text-center">235 000 so&apos;m</div>
                <div className="text-center text-muted">39 167 so&apos;m</div>
              </div>
              <div className="grid grid-cols-3 p-4 items-center text-sm bg-primary-light/20">
                <div className="font-bold text-primary">12 oylik ⭐</div>
                <div className="text-center font-bold text-primary">
                  425 000 so&apos;m
                </div>
                <div className="text-center font-bold text-primary">
                  35 417 so&apos;m
                </div>
              </div>
            </div>
            <p className="text-muted leading-relaxed">
              Agar tez-tez tiklash bilan ovora bo&apos;lishni istamasangiz, 12
              oylik paket eng oqilona — bir martalik to&apos;lov, 365 kun
              tinchlik. Tiklashning eng arzon va ishonchli yo&apos;li haqida{" "}
              <Link
                href="/maqolalar/telegram-premium-eng-arzon-qayerdan-sotib-olish"
                className="text-primary font-semibold hover:underline"
              >
                eng arzon qayerdan sotib olish
              </Link>{" "}
              maqolasini o&apos;qing.
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
                  q: "Premium muddati tugaganda nima bo'ladi?",
                  a: "Akkaunt avtomatik oddiy Telegramga qaytadi: yulduzcha yo'qoladi, fayl chegarasi 2 GB ga tushadi, premium stiker va emojilarni yubora olmaysiz. Lekin chatlar, kanallar va fayllar o'chmaydi.",
                },
                {
                  q: "Premium tugaganda fayllarim yo'qoladimi?",
                  a: "Yo'q. Telegram bulutga asoslangan — barcha ma'lumotlar saqlanadi. Premium davrida yuborgan 4 GB fayllar ham yuklab olinadi. Faqat yangi fayl yuborishda chegara 2 GB bo'ladi.",
                },
                {
                  q: "Premium nega o'zi tugab qoldi?",
                  a: "Premium Send orqali Premium bir martalik to'lovga asoslangan — avtomatik yangilanmaydi. Muddat tugagach, davom ettirish uchun qaytadan sotib olasiz. Bu afzallik: kutilmagan to'lov yo'q.",
                },
                {
                  q: "Premium qanday tiklanadi?",
                  a: "@PremiumSendBot ni oching, paketni tanlang, username kiriting va Uzcard/Humo/Click/Payme orqali so'mda to'lang. 5 daqiqada qayta faollashadi. 1 oylik 59 000, 12 oylik 425 000 so'm.",
                },
                {
                  q: "Tugamasdan oldin uzaytirsam, qolgan kunlar yonadimi?",
                  a: "Yo'q. Yangi muddat avvalgisining tugashidan boshlanadi — qo'shiladi. Masalan, 8 kun qolgan + 6 oylik = jami 188 kun atrofida Premium. Hech bir kun yo'qolmaydi.",
                },
                {
                  q: "Tugaganini qayerdan tekshiraman?",
                  a: "Telegram → Sozlamalar → Telegram Premium bo'limidan ko'ring. Faol bo'lsa tugash sanasi, bo'lmasa sotib olish taklifi chiqadi. Ism yonidagi yulduzchaning yo'qligi ham belgi.",
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
                  Premium muddati tugashi — muammo emas. Ma&apos;lumotlaringiz
                  xavfsiz, akkauntingiz joyida. Davom ettirmoqchi bo&apos;lsangiz,{" "}
                  <strong className="text-white">@PremiumSendBot</strong> orqali
                  Uzcard, Humo, Click yoki Payme bilan so&apos;mda — 5 daqiqada
                  qayta faollashadi. 1 oylik 59 000 so&apos;mdan, 12 oylikda esa
                  oyiga atigi 35 417 so&apos;m.
                </p>
                <Link
                  href="https://t.me/premiumsendbot"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  @PremiumSendBot — hoziroq tiklash
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
