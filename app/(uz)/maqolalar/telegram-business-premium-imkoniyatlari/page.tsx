import type { Metadata } from "next";
import Link from "next/link";
import { ogBaseUz } from "@/app/shared-metadata";

const slug = "telegram-business-premium-imkoniyatlari";
const url = `https://premiumsend.uz/maqolalar/${slug}`;
const ruUrl = `https://premiumsend.uz/ru/maqolalar/${slug}`;

export const metadata: Metadata = {
  title: "Telegram Business: Premium ichidagi biznes imkoniyatlari",
  description:
    "Telegram Business nima va qanday ishlaydi? Ish vaqti, tezkor javoblar, salomlashish, away-xabar, biznes havolalari va chatbotlarni sozlash qo'llanmasi.",
  keywords: [
    "Telegram Business",
    "Telegram Business nima",
    "Telegram Business sozlash",
    "Telegram Premium biznes imkoniyatlari",
    "Telegram tezkor javoblar",
  ],
  alternates: {
    canonical: url,
    languages: { uz: url, ru: ruUrl, "x-default": url },
  },
  openGraph: {
    ...ogBaseUz,
    title: "Telegram Business: Premium ichidagi biznes imkoniyatlari",
    description:
      "Biznes profili, ish vaqti, avtomatik xabarlar, tezkor javoblar, havolalar va chatbotlar — amaliy qo'llanma.",
    url,
    type: "article",
    publishedTime: "2026-08-26",
  },
};

const features = [
  ["Joylashuv va ish vaqti", "Profilingizda manzil va ochiq/yopiq holatini ko'rsatadi."],
  ["Boshlang'ich sahifa", "Bo'sh chatga matn, stiker va xizmat haqida qisqa tanishtiruv qo'shadi."],
  ["Tezkor javoblar", "Tayyor matn va mediani /buyruq orqali bir necha bosishda yuboradi."],
  ["Salomlashish xabari", "Birinchi marta yozgan yoki tanaffusdan keyin qaytgan mijozga avtomatik yuboriladi."],
  ["Uzoqda ekanlik xabari", "Ish vaqtidan tashqarida yoki belgilangan davrda avtomatik javob beradi."],
  ["Biznes chat havolalari", "Oldindan yozilgan xabarli t.me havolasini yaratadi va bosilish sonini ko'rsatadi."],
  ["Chatbotlar", "Ulangan botga tanlangan shaxsiy chatlarni boshqarish va javob berishni topshiradi."],
] as const;

const faqs = [
  {
    q: "Telegram Business alohida ilovami?",
    a: "Yo'q. U oddiy Telegram ilovasining Sozlamalar → Telegram Business bo'limida ishlaydi; alohida ilova yoki yangi akkaunt kerak emas.",
  },
  {
    q: "Telegram Business Premium ichiga kiradimi?",
    a: "Ha. Telegram Business vositalari Premium foydalanuvchilariga taqdim etiladi. Telegram kelajakda foydalanish shartlarini o'zgartirishi mumkin, shuning uchun ilovadagi joriy ko'rsatma ustuvor.",
  },
  {
    q: "Tezkor javobga rasm yoki fayl qo'shish mumkinmi?",
    a: "Ha. Tezkor javoblar bir nechta xabarni, jumladan matn, havola, stiker va mediani saqlashi mumkin.",
  },
  {
    q: "Avtomatik xabarlarni ayrim odamlarga yubormaslik mumkinmi?",
    a: "Ha. Salomlashish va uzoqda ekanlik xabarlari uchun qabul qiluvchilar yoki istisnolarni tanlash mumkin.",
  },
  {
    q: "PremiumSend Telegramning rasmiy hamkorimi?",
    a: "Yo'q. PremiumSend — Telegramning rasmiy hamkori emas, balki Premiumni mahalliy kartalar va so'mdagi to'lov bilan olishga yordam beruvchi mahalliy reseller.",
  },
] as const;

export default function TelegramBusinessArticle() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Telegram Business: Premium ichidagi biznes imkoniyatlari",
    description: metadata.description,
    image: "https://premiumsend.uz/og-image.png",
    datePublished: "2026-08-26",
    dateModified: "2026-08-26",
    author: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    publisher: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    mainEntityOfPage: url,
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Bosh sahifa", item: "https://premiumsend.uz" },
      { "@type": "ListItem", position: 2, name: "Maqolalar", item: "https://premiumsend.uz/maqolalar" },
      { "@type": "ListItem", position: 3, name: "Telegram Business", item: url },
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
        <span className="text-foreground font-medium">Telegram Business</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">Biznes qo'llanma</span>
            <time className="text-xs text-muted" dateTime="2026-08-26">2026-yil, 26-avgust</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Telegram Business: Premium ichidagi biznes imkoniyatlari
          </h1>
          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-sm font-bold text-primary mb-2">QISQACHA JAVOB</p>
            <p className="text-foreground leading-relaxed font-medium">
              Telegram Business shaxsiy akkauntni mijozlar bilan ishlash vositasiga aylantiradi. Premium bilan profilga ish vaqti va manzil qo'shish, tezkor javoblar, salomlashish va away-xabarlar, biznes havolalari hamda chatbotlardan foydalanish mumkin.
            </p>
          </div>
          <p className="text-lg text-muted leading-relaxed">
            Telegram Business kichik biznes, xizmat ko'rsatuvchi mutaxassis va onlayn do'kon uchun alohida CRM o'rnini to'liq bosmaydi, ammo kundalik savollarga tez javob berish va ish vaqtidan tashqari mijozni javobsiz qoldirmaslikni ancha osonlashtiradi.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Telegram Business nima va kimga kerak?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Bu — shaxsiy Telegram akkauntiga biznes profili va avtomatlashtirish vositalarini qo'shadigan funksiyalar to'plami. Mijozlar sizga odatdagi shaxsiy chat orqali yozadi; siz esa o'sha akkaunt ichida tayyor javoblar va avtomatik xabarlardan foydalanasiz.
            </p>
            <p className="text-muted leading-relaxed mb-4">Funksiyalar ro'yxati Telegramning <Link href="https://telegram.org/blog/telegram-business" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">rasmiy Telegram Business e'loni</Link> asosida tekshirildi.</p>
            <p className="text-muted leading-relaxed">
              U buyurtmalarni Telegramda qabul qiladigan do'konlar, ustalar, konsultantlar, kurs mualliflari va administratorlar uchun ayniqsa foydali. Premiumning umumiy imkoniyatlari kerak bo'lsa, avval <Link href="/maqolalar/telegram-premium-nima" className="text-primary font-semibold hover:underline">Telegram Premium nima</Link> qo'llanmasini o'qing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Telegram Business ichida qaysi imkoniyatlar bor?</h2>
            <p className="text-muted leading-relaxed mb-5">Asosiy vositalar quyidagilar:</p>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-hidden">
              {features.map(([name, description], index) => (
                <div key={name} className={`p-4 sm:grid sm:grid-cols-[180px_1fr] sm:gap-5 text-sm ${index < features.length - 1 ? "border-b border-card-border" : ""}`}>
                  <div className="font-bold text-foreground mb-1 sm:mb-0">{name}</div>
                  <div className="text-muted">{description}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Telegram Business qanday yoqiladi?</h2>
            <p className="text-muted leading-relaxed mb-5">Telegramni yangilang va quyidagi tartibda sozlang:</p>
            <ol className="space-y-4">
              {[
                ["Sozlamalarni oching", "Telegram → Sozlamalar → Telegram Business bo'limiga kiring."],
                ["Profilni to'ldiring", "Joylashuv, ish kunlari va soatlarini kiriting; kerak bo'lsa boshlang'ich sahifani sozlang."],
                ["Javoblarni tayyorlang", "Ko'p so'raladigan savollar uchun tezkor javoblar, yangi mijozlar uchun salomlashish xabarini yarating."],
                ["Avtomatik xabarni sinang", "Boshqa akkauntdan yozib, vaqt jadvali, matn va istisnolar to'g'ri ishlashini tekshiring."],
              ].map(([title, text], index) => (
                <li key={title} className="flex gap-4">
                  <span className="w-9 h-9 flex-shrink-0 rounded-full bg-primary text-white font-bold flex items-center justify-center">{index + 1}</span>
                  <div><h3 className="font-bold text-foreground">{title}</h3><p className="text-muted text-sm">{text}</p></div>
                </li>
              ))}
            </ol>
            <p className="text-muted leading-relaxed mt-5">
              Menyu nomi qurilma tili va Telegram versiyasiga qarab biroz farq qilishi mumkin. Bo'lim ko'rinmasa, ilovani rasmiy do'kondan yangilang va Premium faol ekanini tekshiring. Umumiy sozlamalar uchun <Link href="/maqolalar/telegram-premium-qanday-yoqiladi-sozlanadi" className="text-primary font-semibold hover:underline">Premiumni yoqish va sozlash</Link> maqolasi yordam beradi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Tezkor va avtomatik javoblar o'rtasidagi farq nima?</h2>
            <p className="text-muted leading-relaxed mb-5">Tezkor javobni operator o'zi tanlab yuboradi, salomlashish va uzoqda ekanlik xabari esa belgilangan shart bajarilganda avtomatik ketadi.</p>
            <div className="overflow-x-auto rounded-2xl border border-card-border shadow-lg">
              <div className="min-w-[620px] grid grid-cols-3 bg-section-alt p-4 font-bold text-sm"><div>Vosita</div><div>Qachon yuboriladi?</div><div>Misol</div></div>
              <div className="min-w-[620px] grid grid-cols-3 p-4 border-t border-card-border text-sm"><div className="font-semibold">Tezkor javob</div><div className="text-muted">Siz /buyruqni tanlaganda</div><div className="text-muted">Narxlar va yetkazish shartlari</div></div>
              <div className="min-w-[620px] grid grid-cols-3 p-4 border-t border-card-border text-sm"><div className="font-semibold">Salomlashish</div><div className="text-muted">Yangi yoki qaytgan mijoz yozganda</div><div className="text-muted">“Assalomu alaykum, qanday yordam beramiz?”</div></div>
              <div className="min-w-[620px] grid grid-cols-3 p-4 border-t border-card-border text-sm"><div className="font-semibold">Away-xabar</div><div className="text-muted">Ish vaqtidan tashqarida</div><div className="text-muted">“Soat 09:00 da javob beramiz.”</div></div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Biznes chatbotiga qanday xavfsiz ulanish kerak?</h2>
            <p className="text-muted leading-relaxed mb-4">Botni faqat ishonchli ishlab chiquvchidan ulang va unga kerakli chatlarnigina oching. Ulangan biznes boti ruxsat doirasidagi xabarlarni ko'rishi va siz nomingizdan amal bajarishi mumkin.</p>
            <div className="bg-section-alt rounded-xl p-5">
              <p className="text-muted text-sm leading-relaxed"><strong className="text-foreground">Xavfsizlik:</strong> bot so'ragan ruxsatlarni tekshiring, avval test chatida sinang va kerak bo'lmasa ulanishni olib tashlang. Telegram login kodi, ikki bosqichli himoya paroli yoki karta ma'lumotini botga bermang.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Telegram Business uchun alohida tarif kerakmi?</h2>
            <p className="text-muted leading-relaxed mb-4">Yo'q, hozirgi Telegram modelida Business vositalari Premium tarkibida. PremiumSend narxlari: 1 oy — 59 000, 3 oy — 175 000, 6 oy — 235 000, 12 oy — 425 000 so'm.</p>
            <p className="text-muted leading-relaxed">PremiumSend Telegramning rasmiy hamkori emas; u mahalliy reseller. Tariflarni solishtirish uchun <Link href="/maqolalar/telegram-premium-narxlari" className="text-primary font-semibold hover:underline">Telegram Premium narxlari</Link>, xavfsiz xarid mezonlari uchun esa <Link href="/maqolalar/telegram-premium-xavfsiz-aldovdan-saqlanish" className="text-primary font-semibold hover:underline">aldovdan saqlanish qo'llanmasi</Link>ni ko'ring.</p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Telegram Business haqida tez-tez so'raladigan savollar</h2>
            <div className="space-y-4">
              {faqs.map(({ q, a }) => <div key={q} className="bg-white rounded-xl p-6 border border-card-border shadow-sm"><h3 className="font-bold text-foreground mb-2">{q}</h3><p className="text-muted text-sm leading-relaxed">{a}</p></div>)}
            </div>
          </section>

          <section>
            <div className="hero-gradient rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
              <div className="relative">
                <p className="text-white/90 text-lg leading-relaxed mb-6">Telegram Business vositalarini ishga tushirish uchun Premiumni so'mda faollashtiring.</p>
                <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener noreferrer" className="inline-flex px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">@PremiumSendBot orqali olish</Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
