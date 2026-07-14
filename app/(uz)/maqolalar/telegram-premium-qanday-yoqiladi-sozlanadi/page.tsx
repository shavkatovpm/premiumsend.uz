import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Telegram Premium qanday yoqiladi va sozlanadi — to'liq qo'llanma 2026",
  description:
    "Telegram Premium sotib olgandan keyin ism rangi, emoji status, animatsiyali profil, ko'p reaksiya va Business funksiyalarini qanday yoqish kerak. Bosqichma-bosqich sozlash qo'llanmasi.",
  keywords: [
    "telegram premium qanday yoqiladi",
    "telegram premium sozlash",
    "telegram premium emoji status",
    "telegram premium ism rangi",
    "telegram premium animatsiyali profil",
    "telegram business qanday yoqiladi",
    "telegram premium sozlamalari",
  ],
  alternates: {
    canonical:
      "https://premiumsend.uz/maqolalar/telegram-premium-qanday-yoqiladi-sozlanadi",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/telegram-premium-qanday-yoqiladi-sozlanadi",
      ru: "https://premiumsend.uz/ru/maqolalar/telegram-premium-qanday-yoqiladi-sozlanadi",
      "x-default":
        "https://premiumsend.uz/maqolalar/telegram-premium-qanday-yoqiladi-sozlanadi",
    },
  },
  openGraph: {
    title: "Telegram Premium qanday yoqiladi va sozlanadi — to'liq qo'llanma",
    description:
      "Ism rangi, emoji status, animatsiyali profil, ko'p reaksiya va Business funksiyalarini sozlash — bosqichma-bosqich.",
    url: "https://premiumsend.uz/maqolalar/telegram-premium-qanday-yoqiladi-sozlanadi",
    type: "article",
    publishedTime: "2026-07-03",
  },
};

export default function ArticleQandayYoqiladiSozlanadi() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    image: "https://premiumsend.uz/og-image.png",
    headline: "Telegram Premium qanday yoqiladi va sozlanadi — to'liq qo'llanma",
    description:
      "Telegram Premium sotib olgandan keyin ism rangi, emoji status, animatsiyali profil, ko'p reaksiya va Business funksiyalarini yoqish bo'yicha bosqichma-bosqich qo'llanma.",
    datePublished: "2026-07-03",
    dateModified: "2026-07-03",
    author: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    publisher: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    mainEntityOfPage:
      "https://premiumsend.uz/maqolalar/telegram-premium-qanday-yoqiladi-sozlanadi",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Telegram Premium sotib olgach hamma sozlama avtomatik yoqiladimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yo'q. Premium belgisi, 4 GB fayl limiti, reklamasiz ko'rish va reaksiya soni avtomatik ochiladi. Lekin ism rangi, orqa fon emojisi, emoji status, animatsiyali profil rasmi va Telegram Business — bularning barchasini qo'lda, Sozlamalar bo'limida yoqish kerak.",
        },
      },
      {
        "@type": "Question",
        name: "Ism rangini qanday o'zgartirish mumkin?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sozlamalar → profilingizga o'ting → ism yonidagi rang/pensil belgisini bosing → Premium palitradan rang va orqa fon emojisini tanlang. O'zgarish barcha chatlarda va guruhlarda ko'rinadi.",
        },
      },
      {
        "@type": "Question",
        name: "Emoji status qanday o'rnatiladi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Chatlar ro'yxati tepasidagi Premium yulduzcha belgisini bosing yoki Sozlamalar → Emoji Status'ga o'ting. 7 ta standart (rangga qarab o'zgaradigan) status yoki istalgan custom emoji'ni tanlashingiz mumkin.",
        },
      },
      {
        "@type": "Question",
        name: "Bitta xabarga necha marta reaksiya qo'yish mumkin?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Premium foydalanuvchi bitta xabarga 3 tagacha turli reaksiya (shu jumladan custom emoji) qo'yishi mumkin. Oddiy foydalanuvchi faqat 1 ta standart reaksiya qo'yadi.",
        },
      },
      {
        "@type": "Question",
        name: "PremiumSend orqali olingan Premium'ni bekor qilish yoki avtomatik yechilishdan qo'rqish kerakmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yo'q. PremiumSend Telegram'ning rasmiy sovg'a (gift) mexanizmi orqali ishlaydi — bu bir martalik to'lov, App Store/Google Play'dagi kabi avtomatik yangilanadigan obuna emas. Kartangizdan hech qachon avtomatik pul yechilmaydi, bekor qilish tugmasi ham shart emas — muddat tugagach o'zi to'xtaydi.",
        },
      },
      {
        "@type": "Question",
        name: "Sozlamalarni bitta qurilmada o'rnatsam, boshqasida ham ko'rinadimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha. Barcha Premium sozlamalari (ism rangi, emoji status, profil) akkaunt darajasida saqlanadi, qurilma darajasida emas. Telefon, kompyuter yoki planshetda — qaysi qurilmadan kirmang, bir xil ko'rinadi.",
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
      {
        "@type": "ListItem",
        position: 3,
        name: "Premium qanday yoqiladi va sozlanadi",
        item: "https://premiumsend.uz/maqolalar/telegram-premium-qanday-yoqiladi-sozlanadi",
      },
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
        <span className="text-foreground font-medium">Premium qanday yoqiladi va sozlanadi</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">
              Qo&apos;llanma
            </span>
            <time className="text-xs text-muted" dateTime="2026-07-03">2026-yil, 3-iyul</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Telegram Premium qanday yoqiladi va sozlanadi
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-sm font-bold text-primary mb-2">QISQACHA JAVOB</p>
            <p className="text-foreground leading-relaxed font-medium">
              Premium belgisi, 4 GB fayl limiti va reklamasiz ko&apos;rish sotib olingach <strong>avtomatik</strong> ishlaydi. Lekin <strong>ism rangi, emoji status, animatsiyali profil rasmi va Telegram Business</strong> — bularning barchasi Sozlamalar bo&apos;limida qo&apos;lda yoqiladi. Quyida har biri uchun aniq bosqichlar berilgan.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Ko&apos;pchilik Premium sotib olgach faqat 4 GB fayl va reklamasiz ko&apos;rishdan foydalanadi — chunki eng chiroyli funksiyalar (rangli ism, emoji status, animatsiyali avatar) sukut bo&apos;yicha o&apos;chiq turadi va ularni topish uchun sozlamalarni qidirish kerak bo&apos;ladi.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Bu qo&apos;llanmada Telegram Premium&apos;ning har bir vizual va biznes funksiyasini qanday yoqish kerakligini, PremiumSend orqali olingan Premium&apos;ning App Store obunasidan nimasi bilan farq qilishini bosqichma-bosqich tushuntiramiz.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Premium sotib olgach hamma sozlama avtomatik yoqiladimi?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Yo&apos;q, ikkiga bo&apos;linadi. Quyidagi jadval aynan qaysi funksiya darhol ishlashini va qaysisini qo&apos;lda yoqish kerakligini ko&apos;rsatadi:
            </p>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden mb-6">
              <div className="grid grid-cols-2 bg-section-alt p-4 font-bold text-sm">
                <div>Avtomatik ishlaydi</div>
                <div>Qo&apos;lda yoqish kerak</div>
              </div>
              <div className="grid grid-cols-2 p-4 border-b border-card-border text-sm">
                <div className="text-muted">Premium belgisi (badge)</div>
                <div className="text-muted">Ism rangi va orqa fon emojisi</div>
              </div>
              <div className="grid grid-cols-2 p-4 border-b border-card-border text-sm">
                <div className="text-muted">4 GB fayl yuklash limiti</div>
                <div className="text-muted">Emoji status</div>
              </div>
              <div className="grid grid-cols-2 p-4 border-b border-card-border text-sm">
                <div className="text-muted">Reklamasiz kanal ko&apos;rish</div>
                <div className="text-muted">Animatsiyali profil rasmi (video)</div>
              </div>
              <div className="grid grid-cols-2 p-4 text-sm">
                <div className="text-muted">3 tagacha reaksiya imkoniyati</div>
                <div className="text-muted">Telegram Business (soat, xabar, tez javob)</div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Ism rangi va orqa fon emojisini qanday o&apos;rnatish mumkin?
            </h2>
            <div className="space-y-4 mb-6">
              {[
                { step: "1", title: "Sozlamalarga kiring", desc: "Telegram → Sozlamalar (pastki menyu yoki uch chiziqcha) → ismingizni bosing." },
                { step: "2", title: "Rang belgisini toping", desc: "Ismingiz yonida yoki profil tahrirlash ekranida rang doirasi/pensil belgisi chiqadi — shuni bosing." },
                { step: "3", title: "Rang va emoji tanlang", desc: "Premium palitradan istalgan rangni va orqa fon uchun emoji tanlang. O'zgarish darhol saqlanadi." },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4">
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
              Bu rang va emoji sizning ismingiz yonida — shaxsiy chatlarda ham, guruhlarda ham, kanal izohlarida ham — barcha joyda bir xil ko&apos;rinadi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Emoji status qanday tanlanadi?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Ikki yo&apos;l bor: chatlar ro&apos;yxati tepasidagi Premium yulduzcha belgisini bosish, yoki Sozlamalar → Emoji Status bo&apos;limiga kirish. Ochilgan oynada <strong>7 ta standart status</strong> (Telegram mavzusiga qarab rangi o&apos;zgaradigan) yoki <strong>istalgan custom emoji</strong>ni tanlash mumkin — masalan ☕️, 🔥 yoki maxsus animatsiyali emoji.
            </p>
            <div className="bg-section-alt rounded-xl p-5 mb-4">
              <p className="text-muted text-sm leading-relaxed">
                <strong className="text-foreground">Maslahat:</strong> Emoji status vaqtinchalik ham qo&apos;yish mumkin (masalan &quot;1 soatga&quot; yoki &quot;ertaga soat 9gacha&quot;) — bu muddat tugagach status avtomatik o&apos;chadi.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Animatsiyali profil rasmi (video) qanday qo&apos;yiladi?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Profilni tahrirlash ekranida kamera belgisini bosganda, oddiy rasm o&apos;rniga <strong>qisqa video yoki GIF</strong> tanlash imkoniyati chiqadi. Boshqa foydalanuvchi profilingizga kirganda, bu video avtomatik ijro etiladi — bu Premium&apos;ga xos, oddiy foydalanuvchida mavjud emas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Bitta xabarga bir nechta reaksiya qanday qo&apos;yiladi?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Xabarni bosib turing (long-press) — reaksiyalar paneli chiqadi. Premium foydalanuvchi shu bitta xabarga <strong>3 tagacha</strong> turli reaksiya (shu jumladan custom animatsiyali emoji) qo&apos;yishi mumkin. Oddiy foydalanuvchi faqat 1 ta standart reaksiya bilan cheklangan.
            </p>
          </section>

          <section>
            <div className="bg-primary-light/40 border border-primary/20 rounded-2xl p-6 md:p-8 text-center">
              <p className="text-foreground text-lg leading-relaxed mb-4">
                Hali Premium olmagansizmi? {" "}
                <Link href="https://telegram.me/premiumsendbot" target="_blank" className="text-primary hover:underline font-bold">
                  @PremiumSendBot
                </Link>{" "}
                orqali so&apos;mda, 5 daqiqada faollashtiring.
              </p>
              <Link
                href="https://telegram.me/premiumsendbot"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-2xl hover:shadow-xl transition-all"
              >
                Premium sotib olish
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Telegram Business funksiyalari qanday yoqiladi?
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Sozlamalar → Telegram Business bo&apos;limiga o&apos;ting. Bu yerda quyidagilarni yoqishingiz mumkin:
            </p>
            <ul className="text-muted leading-relaxed space-y-2 list-disc list-inside mb-4">
              <li><strong>Ish soatlari</strong> — mijozlarga qachon javob berishingiz ko&apos;rsatiladi</li>
              <li><strong>Salomlashish xabari</strong> — yangi mijozga avtomatik birinchi xabar</li>
              <li><strong>Uzoqda ekanlik xabari</strong> — ish vaqtidan tashqarida avtomatik javob</li>
              <li><strong>Tez javoblar</strong> — tez-tez beriladigan javoblarni shablon sifatida saqlash</li>
              <li><strong>Tasdiqlangan biznes belgisi va manzil</strong> — profilga qo&apos;shimcha ma&apos;lumot</li>
            </ul>
            <p className="text-muted leading-relaxed">
              Bu funksiyalar shaxsiy foydalanuvchidan ko&apos;ra kichik biznes/kontentmeyker akkauntlari uchun foydaliroq, lekin ularni yoqish uchun ham oddiy shaxsiy Premium yetarli — alohida tarif kerak emas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">
              Premium&apos;ni bekor qilish kerakmi? PremiumSend orqali olganlar uchun muhim farq
            </h2>
            <div className="bg-primary-light/40 border border-primary/20 rounded-xl p-5 mb-4">
              <p className="text-foreground leading-relaxed">
                <strong>Yo&apos;q, kerak emas.</strong> App Store/Google Play orqali sotib olingan Premium — avtomatik yangilanadigan obuna, uni maxsus bekor qilmasangiz karta har oy/yil avtomatik yechiladi. PremiumSend orqali olingan Premium esa Telegram&apos;ning rasmiy <strong>sovg&apos;a (gift)</strong> mexanizmi orqali yetkaziladi — bu bir martalik to&apos;lov, avtomatik yangilanish umuman yo&apos;q.
              </p>
            </div>
            <p className="text-muted leading-relaxed">
              Ya&apos;ni kartangizdan kutilmagan pul yechilishidan qo&apos;rqish shart emas. Muddat tugagach Premium o&apos;zi to&apos;xtaydi, keyingi safar xohlagan muddatga qayta sotib olasiz. Muddat tugagach nima o&apos;chib, nima saqlanishi haqida —{" "}
              <Link href="/maqolalar/telegram-premium-muddati-tugadi-nima-qilish" className="text-primary font-semibold hover:underline">
                Telegram Premium muddati tugadi — nima qilish kerak
              </Link>{" "}
              maqolasida batafsil.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Tez-tez so&apos;raladigan savollar (FAQ)</h2>
            <div className="space-y-4">
              {[
                { q: "Telegram Premium sotib olgach hamma sozlama avtomatik yoqiladimi?", a: "Yo'q. Premium belgisi, 4 GB limit va reklamasiz ko'rish avtomatik ochiladi. Ism rangi, emoji status, animatsiyali profil va Business — Sozlamalarda qo'lda yoqiladi." },
                { q: "Ism rangini qanday o'zgartirish mumkin?", a: "Sozlamalar → profilingiz → ism yonidagi rang/pensil belgisi → Premium palitradan rang va emoji tanlang." },
                { q: "Emoji status qanday o'rnatiladi?", a: "Chatlar ro'yxati tepasidagi Premium yulduzcha yoki Sozlamalar → Emoji Status. 7 ta standart yoki istalgan custom emoji tanlash mumkin." },
                { q: "Bitta xabarga necha marta reaksiya qo'yish mumkin?", a: "Premium foydalanuvchi 3 tagacha turli reaksiya qo'ya oladi, oddiy foydalanuvchi faqat 1 ta." },
                { q: "PremiumSend orqali olingan Premium'ni bekor qilish kerakmi?", a: "Yo'q. Bu bir martalik to'lov (rasmiy sovg'a mexanizmi orqali), avtomatik yangilanish yo'q, kartadan kutilmagan pul yechilmaydi." },
                { q: "Sozlamalarni bitta qurilmada o'rnatsam, boshqasida ham ko'rinadimi?", a: "Ha, barcha sozlamalar akkaunt darajasida saqlanadi, istalgan qurilmada bir xil ko'rinadi." },
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
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-5 left-5 w-32 h-32 bg-white rounded-full blur-2xl" />
              </div>
              <div className="relative">
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  Ism rangi, emoji status va animatsiyali profil — barchasi Sozlamalarda bir necha bosishda yoqiladi. PremiumSend orqali olingan Premium&apos;da bekor qilish tugmasi ham, kutilmagan to&apos;lov ham yo&apos;q.
                </p>
                <Link
                  href="https://telegram.me/premiumsendbot"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg"
                >
                  Premium sotib olish
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
