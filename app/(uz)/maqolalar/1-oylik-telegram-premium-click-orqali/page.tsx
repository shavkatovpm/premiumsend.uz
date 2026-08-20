import type { Metadata } from "next";
import Link from "next/link";
import { ogBaseUz } from "@/app/shared-metadata";

const url = "https://premiumsend.uz/maqolalar/1-oylik-telegram-premium-click-orqali";
const ruUrl = "https://premiumsend.uz/ru/maqolalar/1-oylik-telegram-premium-click-orqali";

export const metadata: Metadata = {
  title: "1 oylik Telegram Premium Click orqali — 59 000 so'm",
  description:
    "1 oylik Telegram Premiumni Click orqali 59 000 so'mga olish: @PremiumSendBot, aniq to'lov qadamlari, xavfsizlik va 2–10 daqiqada faollashish.",
  keywords: [
    "1 oylik Telegram Premium Click orqali",
    "Telegram Premium Click 1 oy",
    "Click orqali Premium to'lash",
    "Telegram Premium 59000 so'm",
  ],
  alternates: {
    canonical: url,
    languages: { uz: url, ru: ruUrl, "x-default": url },
  },
  openGraph: {
    ...ogBaseUz,
    title: "1 oylik Telegram Premium Click orqali — 59 000 so'm",
    description:
      "Click ilovasi orqali 1 oylik Premium: 59 000 so'm, mahalliy to'lov va 2–10 daqiqada faollashish.",
    url,
    type: "article",
    publishedTime: "2026-08-18",
  },
};

const faqs = [
  {
    q: "1 oylik Telegram Premium Click orqali qancha turadi?",
    a: "PremiumSend’da 1 oylik Telegram Premium 59 000 so'm turadi. To'lov O'zbekiston so'mida Click orqali qilinadi.",
  },
  {
    q: "Click orqali to'lovdan keyin Premium qachon faollashadi?",
    a: "To'lov tasdiqlangach, Premium odatda 2–10 daqiqa ichida ko'rsatilgan Telegram akkauntida faollashadi.",
  },
  {
    q: "Click orqali to'lash uchun Telegram paroli kerakmi?",
    a: "Yo'q. PremiumSend Telegram paroli yoki SMS tasdiqlash kodini so'ramaydi. Buyurtma uchun botdagi ko'rsatmalarga amal qilish kifoya.",
  },
  {
    q: "1 oylik Premiumni sovg'a sifatida yuborish mumkinmi?",
    a: "Telegramning rasmiy Gift Premium menyusi faqat 3, 6 va 12 oylik sovg'alarni qo'llaydi. 1 oylik tarif rasmiy sovg'a paketi emas; buyurtma kerakli akkaunt uchun alohida rasmiylashtiriladi.",
  },
  {
    q: "PremiumSend Telegramning rasmiy hamkorimi?",
    a: "Yo'q. PremiumSend Telegramning rasmiy hamkori emas, balki O'zbekistonda mahalliy to'lovlarni qabul qiladigan reseller xizmatidir.",
  },
];

const steps = [
  { position: 1, name: "Botni oching", text: "Telegramda @PremiumSendBot’ni ochib, Start tugmasini bosing." },
  { position: 2, name: "Tarifni tanlang", text: "1 oylik, 59 000 so'mlik tarifni tanlang." },
  { position: 3, name: "Buyurtma ma'lumotini kiriting", text: "Bot so'ragan Telegram akkaunti ma'lumotini xatosiz kiriting." },
  { position: 4, name: "Click orqali to'lang", text: "Botdagi rekvizit va summani tekshirib, Click ilovasida to'lovni tasdiqlang." },
  { position: 5, name: "Faollashishni kuting", text: "To'lov tasdiqlangach, Premium odatda 2–10 daqiqada faollashadi." },
];

export default function Article1MonthClick() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "1 oylik Telegram Premium Click orqali sotib olish",
    description: metadata.description,
    image: "https://premiumsend.uz/og-image.png",
    datePublished: "2026-08-18",
    dateModified: "2026-08-18",
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
      { "@type": "ListItem", position: 3, name: "1 oylik Premium Click orqali", item: url },
    ],
  };
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "1 oylik Telegram Premiumni Click orqali olish",
    step: steps.map((item) => ({ "@type": "HowToStep", ...item })),
  };

  return (
    <>
      {[articleSchema, faqSchema, breadcrumbSchema, howToSchema].map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-muted">
        <Link href="/" className="hover:text-primary">Bosh sahifa</Link>
        <span className="mx-2">/</span>
        <Link href="/maqolalar" className="hover:text-primary">Maqolalar</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">1 oylik Premium Click orqali</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">Qo&apos;llanma</span>
            <time className="text-xs text-muted" dateTime="2026-08-18">2026-yil, 18-avgust</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            1 oylik Telegram Premium Click orqali sotib olish
          </h1>
          <div className="bg-primary-light/50 rounded-xl p-5 border border-primary/10 mb-6">
            <p className="text-foreground leading-relaxed font-medium">
              <strong>Qisqacha javob:</strong> 1 oylik Telegram Premiumni Click orqali <strong>59 000 so&apos;m</strong>ga olish mumkin.{" "}
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@PremiumSendBot</Link>{" "}
              da tarifni tanlang, bot bergan to&apos;lov ma&apos;lumotini Click ilovasida tasdiqlang. To&apos;lovdan keyin Premium odatda 2–10 daqiqada faollashadi.
            </p>
          </div>
          <p className="text-lg text-muted leading-relaxed">
            Bu qo&apos;llanma aynan Click orqali to&apos;lashga bag&apos;ishlangan. PremiumSend Telegramning rasmiy hamkori emas — O&apos;zbekistondagi mahalliy reseller; xizmat Click bilan so&apos;mda to&apos;lash imkonini beradi.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">1 oylik Premium Click orqali qancha turadi?</h2>
            <p className="text-muted leading-relaxed mb-5"><strong className="text-foreground">Narx — 59 000 so&apos;m.</strong> Bu eng qisqa tarif bo&apos;lib, Premiumni uzoq muddatli majburiyatsiz sinab ko&apos;rmoqchi bo&apos;lganlar uchun mos.</p>
            <div className="overflow-x-auto rounded-xl border border-card-border">
              <table className="w-full text-sm">
                <thead className="bg-section-alt text-foreground"><tr><th className="text-left p-4">Tarif</th><th className="text-left p-4">Narx</th><th className="text-left p-4">Kimga mos?</th></tr></thead>
                <tbody>
                  <tr className="border-t border-card-border bg-primary-light/20"><td className="p-4 font-bold">1 oy</td><td className="p-4 font-bold text-primary">59 000 so&apos;m</td><td className="p-4">Qisqa muddatga sinash</td></tr>
                  <tr className="border-t border-card-border"><td className="p-4">3 oy</td><td className="p-4">175 000 so&apos;m</td><td className="p-4">O&apos;rta muddat</td></tr>
                  <tr className="border-t border-card-border"><td className="p-4">6 oy</td><td className="p-4">235 000 so&apos;m</td><td className="p-4">Tejamkor variant</td></tr>
                  <tr className="border-t border-card-border"><td className="p-4">12 oy</td><td className="p-4">425 000 so&apos;m</td><td className="p-4">Oyiga eng arzon</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Click orqali 1 oylik Premium qanday olinadi?</h2>
            <p className="text-muted leading-relaxed mb-6">Jarayon besh qadamdan iborat: botni ochish, tarifni tanlash, akkaunt ma&apos;lumotini tekshirish, Click orqali to&apos;lash va faollashishni kutish.</p>
            <div className="space-y-4">
              {steps.map((item) => (
                <div key={item.position} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-card-border shadow-sm">
                  <span className="w-9 h-9 rounded-full bg-primary text-white font-bold flex items-center justify-center flex-shrink-0">{item.position}</span>
                  <div><h3 className="font-bold text-foreground mb-1">{item.name}</h3><p className="text-sm text-muted leading-relaxed">{item.text}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">To&apos;lovda nimalarni tekshirish kerak?</h2>
            <p className="text-muted leading-relaxed mb-5">To&apos;lovni tasdiqlashdan oldin bot nomi, tarif, summa va qabul qiluvchi akkaunt ma&apos;lumotini tekshiring. Telegram paroli yoki SMS kodini hech kimga bermang.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-section-alt rounded-xl p-5"><h3 className="font-bold text-foreground mb-2">To&apos;g&apos;ri amallar</h3><ul className="text-sm text-muted space-y-2"><li>• Faqat @PremiumSendBot havolasidan kiring</li><li>• Summani botdagi buyurtma bilan solishtiring</li><li>• Click chekini faollashguncha saqlang</li></ul></div>
              <div className="bg-red-50 rounded-xl p-5 border border-red-100"><h3 className="font-bold text-foreground mb-2">Hech qachon bermang</h3><ul className="text-sm text-muted space-y-2"><li>• Telegram paroli</li><li>• SMS yoki ikki bosqichli tasdiqlash kodi</li><li>• Karta PIN-kodi</li></ul></div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">1 oylik tarif sovg&apos;a qilinadimi?</h2>
            <p className="text-muted leading-relaxed">Telegramning rasmiy ma&apos;lumotiga ko&apos;ra, Gift Premium menyusida 3, 6 va 12 oylik oldindan to&apos;langan sovg&apos;alar mavjud. <strong className="text-foreground">1 oylik rasmiy gift paketi yo&apos;q.</strong> Shu sabab bu buyurtma sovg&apos;a havolasi sifatida emas, kerakli akkaunt uchun alohida rasmiylashtiriladi. 3 oylik variant uchun{" "}<Link href="/maqolalar/3-oylik-telegram-premium-sovga-qilish" className="text-primary font-semibold hover:underline">sovg&apos;a qo&apos;llanmasini</Link>{" "}ko&apos;ring.</p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Ko&apos;p so&apos;raladigan savollarga javoblar qanday?</h2>
            <div className="space-y-4">
              {faqs.map(({ q, a }) => <div key={q} className="bg-white rounded-xl p-5 border border-card-border"><h3 className="font-bold text-foreground mb-2">{q}</h3><p className="text-sm text-muted leading-relaxed">{a}</p></div>)}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Keyin qaysi qo&apos;llanmalarni o&apos;qish kerak?</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/maqolalar/telegram-premium-click-orqali" className="text-primary font-semibold hover:underline">Click orqali barcha Premium tariflari</Link></li>
              <li><Link href="/maqolalar/1-oylik-telegram-premium-sotib-olish" className="text-primary font-semibold hover:underline">1 oylik Premium bo&apos;yicha umumiy yo&apos;riqnoma</Link></li>
              <li><Link href="/maqolalar/telegram-premium-narxlari" className="text-primary font-semibold hover:underline">Premium tariflari va narxlar taqqoslovi</Link></li>
              <li><Link href="/maqolalar/telegram-premium-qachon-faollashadi" className="text-primary font-semibold hover:underline">Premium qachon faollashadi?</Link></li>
            </ul>
          </section>

          <section>
            <div className="hero-gradient rounded-2xl p-8 md:p-10 text-center">
              <h2 className="text-2xl font-extrabold text-white mb-3">1 oylik Premiumni Click bilan olishga tayyormisiz?</h2>
              <p className="text-white/90 mb-6">59 000 so&apos;m, mahalliy to&apos;lov va odatda 2–10 daqiqada faollashish.</p>
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener noreferrer" className="inline-flex px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all">@PremiumSendBot&apos;ni ochish</Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
