import type { Metadata } from "next";
import Link from "next/link";
import { ogBaseUz } from "@/app/shared-metadata";

const PAGE_URL = "https://premiumsend.uz/maqolalar/kanal-va-bloger-uchun-kop-miqdorda-telegram-stars";
const TITLE = "Kanal egasi va bloger ko'p miqdorda (optom) Telegram Stars'ni qanday oladi?";

const META_TITLE = "Optom Telegram Stars: kanal va bloger uchun 2500–5000 Stars";

export const metadata: Metadata = {
  title: META_TITLE,
  description:
    "Optom chegirma yo'q — Premium Send'da tarif chiziqli: 2500 Stars 750 000 so'm, 5000 Stars 1 500 000 so'm (300 so'm/star). Kanal egasi va blogerga ko'p Stars nimaga kerak, nimaga yetadi va qanday olinadi.",
  keywords: [
    "optom telegram stars",
    "ko'p miqdorda telegram stars",
    "kanal uchun telegram stars",
    "bloger uchun stars",
    "biznes uchun telegram stars",
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: {
      uz: PAGE_URL,
      ru: "https://premiumsend.uz/ru/maqolalar/kanal-va-bloger-uchun-kop-miqdorda-telegram-stars",
      "x-default": PAGE_URL,
    },
  },
  openGraph: {
    ...ogBaseUz,
    title: TITLE,
    description:
      "Kanal egasi va bloger uchun ko'p miqdorda Stars: chiziqli 300 so'm/star tarif, 2500 va 5000 Stars nimaga yetadi, qanday olinadi.",
    url: PAGE_URL,
    type: "article",
    publishedTime: "2026-10-10",
  },
};

const BULK_PACKAGES = [
  { amount: 1000, price: 300000, href: "/1000-stars" },
  { amount: 2500, price: 750000, href: "/2500-stars" },
  { amount: 5000, price: 1500000, href: "/5000-stars" },
];

const USES = [
  { use: "Oddiy Telegram sovg'asi (konkurs sovrini, obunachiga rahmat)", cost: "15–100 Stars", from2500: "25–166 ta", from5000: "50–333 ta" },
  { use: "3 oylik Telegram Premium'ni Stars bilan sovg'a qilish", cost: "1000 Stars", from2500: "2 ta", from5000: "5 ta" },
  { use: "6 oylik Telegram Premium'ni Stars bilan sovg'a qilish", cost: "1500 Stars", from2500: "1 ta", from5000: "3 ta" },
  { use: "12 oylik Telegram Premium'ni Stars bilan sovg'a qilish", cost: "2500 Stars", from2500: "1 ta", from5000: "2 ta" },
];

const PREMIUM_COMPARE = [
  { term: "3 oylik", stars: 1000, viaStars: 300000, direct: 175000, href: "/3-oylik" },
  { term: "6 oylik", stars: 1500, viaStars: 450000, direct: 235000, href: "/6-oylik" },
  { term: "12 oylik", stars: 2500, viaStars: 750000, direct: 425000, href: "/12-oylik" },
];

const STEPS = [
  { title: "@premiumsendbot'ni oching", desc: "Botni ishga tushiring va Stars bo'limini tanlang. Bot faqat shu havolada: telegram.me/premiumsendbot." },
  { title: "Miqdorni tanlang", desc: "Kerakli paketni belgilang — masalan 2500 yoki 5000 Stars. Narx darhol so'mda ko'rsatiladi." },
  { title: "Kartaga o'tkazma qiling", desc: "Mini App karta raqami va aniq summani ko'rsatadi. O'z bank ilovangizdan (Uzcard, Humo, Click yoki Payme'dagi kartadan) shu summani o'tkazasiz." },
  { title: "Stars balansga tushadi", desc: "To'lov aniqlangach Stars odatda bir necha daqiqada Telegram akkauntingizga qo'shiladi. Sozlamalar → Stars bo'limida ko'rasiz." },
];

const FAQS = [
  {
    q: "Ko'p miqdorda (optom) Telegram Stars olsam chegirma bo'ladimi?",
    a: "Yo'q. Premium Send'da tarif chiziqli: 50 Stars'da ham, 5000 Stars'da ham bitta star 300 so'm. Optom chegirma yo'q, lekin kichik paket uchun ustama ham yo'q.",
  },
  {
    q: "Eng katta paket qaysi va qancha turadi?",
    a: "Eng katta paket — 5000 Stars, narxi 1 500 000 so'm. 2500 Stars — 750 000 so'm, 1000 Stars — 300 000 so'm.",
  },
  {
    q: "5000 Stars'dan ko'p kerak bo'lsa nima qilaman?",
    a: "Bir necha marta buyurtma berishingiz mumkin. Katta hajm bo'yicha savolingiz bo'lsa, xariddan oldin @premiumsend_admin ga yozing.",
  },
  {
    q: "Sotib olgan Stars'im kanalimning daromadiga qo'shiladimi?",
    a: "Yo'q. Sotib olingan Stars sizning shaxsiy akkauntingiz balansiga tushadi va sarflash uchun mo'ljallangan. Kanal daromadi — obunachilar sizga yuborgan Stars (Star reaksiyalar, pullik postlar, pullik obuna).",
  },
  {
    q: "Balansdagi Stars bilan rasmiy Giveaway o'tkazsa bo'ladimi?",
    a: "Rasmiy Star Giveaway kanal sozlamalaridagi Boosts bo'limida alohida, oldindan to'lanadi — Telegram API hujjatlarida bu balansni to'ldirishdan alohida xarid turi sifatida ko'rsatilgan. Balansdagi Stars bilan esa g'oliblarga sovg'a yuborish mumkin.",
  },
  {
    q: "Premium sovg'a qilish uchun Stars olganim ma'qulmi?",
    a: "Odatda yo'q. 3 oylik Premium Stars bilan 1000 Stars, ya'ni 300 000 so'm turadi, Premium Send'da to'g'ridan-to'g'ri 3 oylik Premium esa 175 000 so'm. Premium sovg'asi uchun Premium'ning o'zini olish arzonroq.",
  },
  {
    q: "Premium Send Telegram'ning rasmiy hamkorimi?",
    a: "Yo'q. Premium Send — mahalliy reseller, Telegram'ning rasmiy hamkori emas. To'lov bo'yicha savollar @premiumsend_admin orqali hal qilinadi.",
  },
];

const KEY_FACTS = [
  { k: "1 star narxi", v: "300 so'm — har qanday paketda bir xil" },
  { k: "2500 Stars", v: "750 000 so'm" },
  { k: "5000 Stars (eng katta paket)", v: "1 500 000 so'm" },
  { k: "Optom chegirma", v: "Yo'q — tarif chiziqli" },
  { k: "To'lov", v: "Uzcard, Humo, Click, Payme — so'mda" },
  { k: "Yetkazish", v: "Odatda bir necha daqiqa" },
  { k: "Qayerdan olinadi", v: "@premiumsendbot (telegram.me/premiumsendbot)" },
];

const SOURCES = [
  { label: "Telegram blogi — Star Giveaways (2024-yil 6-sentabr)", href: "https://telegram.org/blog/star-giveaways-iv-in-browser" },
  { label: "Telegram blogi — Star Reactions va pullik obuna", href: "https://telegram.org/blog/superchannels-star-reactions-subscriptions" },
  { label: "Telegram blogi — Gifts (2024-yil 5-oktabr)", href: "https://telegram.org/blog/gifts-verification-platform" },
  { label: "Telegram API hujjatlari — Telegram Stars", href: "https://core.telegram.org/api/stars" },
];

const TG_ICON ="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z";

const fmt = (n: number) => n.toLocaleString("en-US").replace(/,/g, " ");

export default function ArticleKanalBlogerKopMiqdordaStars() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description:
      "Kanal egasi va bloger uchun ko'p miqdorda Telegram Stars: chiziqli tarif, katta paketlar nimaga yetadi, sotib olingan Stars bilan nima qilib bo'lmaydi va xarid qadamlari.",
    datePublished: "2026-10-10",
    dateModified: "2026-10-10",
    author: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    publisher: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    mainEntityOfPage: PAGE_URL,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Bosh sahifa", item: "https://premiumsend.uz" },
      { "@type": "ListItem", position: 2, name: "Maqolalar", item: "https://premiumsend.uz/maqolalar" },
      { "@type": "ListItem", position: 3, name: "Kanal va bloger uchun ko'p miqdorda Stars", item: PAGE_URL },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Ko'p miqdorda Telegram Stars qanday sotib olinadi",
    step: STEPS.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.desc })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-muted">
        <Link href="/" className="hover:text-primary">Bosh sahifa</Link>
        <span className="mx-2">/</span>
        <Link href="/maqolalar" className="hover:text-primary">Maqolalar</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">Kanal va bloger uchun ko&apos;p miqdorda Stars</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">Biznes qo&apos;llanmasi</span>
            <time className="text-xs text-muted" dateTime="2026-10-10">2026-yil, 10-oktabr</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Kanal egasi va bloger ko&apos;p miqdorda (optom) Telegram Stars&apos;ni qanday oladi?
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-sm font-bold text-primary mb-2">QISQACHA JAVOB</p>
            <p className="text-foreground leading-relaxed font-medium">
              Ko&apos;p miqdorda Telegram Stars{" "}
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="text-primary hover:underline">@premiumsendbot</Link>{" "}
              orqali so&apos;mda olinadi: <strong>2500 Stars — 750 000 so&apos;m</strong>, <strong>5000 Stars — 1 500 000 so&apos;m</strong>. Optom chegirma yo&apos;q — tarif chiziqli, har qanday miqdorda 1 star 300 so&apos;m. To&apos;lov Uzcard yoki Humo kartadan o&apos;tkazma bilan, Stars odatda bir necha daqiqada balansga tushadi.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Kanal yurituvchi yoki bloger uchun 50–100 Stars kamlik qiladi: konkurs sovrinlari, obunachilarga sovg&apos;alar va bot xizmatlari tezda minglab Stars&apos;ni talab qiladi. Quyida katta paketlar narxi, ular amalda nimaga yetishi, sotib olingan Stars bilan nima qilib bo&apos;lmasligi va xarid qadamlari keltirilgan.
          </p>

          <div className="bg-white rounded-2xl border border-card-border shadow-sm overflow-x-auto mt-6">
            <table className="w-full text-sm">
              <caption className="text-left text-sm font-bold text-foreground px-4 pt-4 pb-2">Asosiy faktlar (2026-yil oktabr)</caption>
              <tbody>
                {KEY_FACTS.map((f) => (
                  <tr key={f.k} className="border-b border-card-border last:border-b-0">
                    <th scope="row" className="p-4 text-left font-medium text-muted w-2/5">{f.k}</th>
                    <td className="p-4 font-semibold text-foreground">{f.v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Ko&apos;p miqdorda Stars olganda optom chegirma bormi?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Yo&apos;q. Premium Send&apos;da barcha paketlar bir xil <strong>300 so&apos;m/star</strong> chiziqli tarifda hisoblanadi. Katta paket olsangiz bir star arzonlashmaydi, lekin kichik paketga ustama ham qo&apos;yilmaydi — shuning uchun byudjetni oldindan aniq hisoblash oson.
            </p>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto mb-4">
              <table className="w-full text-sm min-w-[420px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">Paket</th>
                    <th className="p-4 text-left font-bold">Narx</th>
                    <th className="p-4 text-left font-bold">1 star</th>
                  </tr>
                </thead>
                <tbody>
                  {BULK_PACKAGES.map((p) => (
                    <tr key={p.amount} className="border-b border-card-border last:border-b-0">
                      <td className="p-4 font-medium">
                        <Link href={p.href} className="text-primary font-semibold hover:underline">{p.amount} Stars</Link>
                      </td>
                      <td className="p-4">{fmt(p.price)} so&apos;m</td>
                      <td className="p-4">300 so&apos;m</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              Eng katta paket — 5000 Stars. Undan ko&apos;p kerak bo&apos;lsa, bir necha marta buyurtma berish mumkin; katta hajm bo&apos;yicha savol bo&apos;lsa, xariddan oldin <strong>@premiumsend_admin</strong> ga yozing. Barcha paketlar:{" "}
              <Link href="/stars" className="text-primary font-semibold hover:underline">Stars narxlari sahifasida</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Kanal egasi va blogerga ko&apos;p Stars nimaga kerak?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Sotib olingan Stars — <strong>sarflanadigan</strong> balans. Kanal egalari uni asosan obunachilarga sovg&apos;a yuborish, konkurs g&apos;oliblarini taqdirlash va bot hamda mini-ilova xizmatlariga to&apos;lash uchun ishlatadi. Jadvalda 2500 va 5000 Stars nimaga yetishi ko&apos;rsatilgan:
            </p>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto mb-4">
              <table className="w-full text-sm min-w-[600px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">Maqsad</th>
                    <th className="p-4 text-left font-bold">Bittasining narxi</th>
                    <th className="p-4 text-left font-bold">2500 Stars</th>
                    <th className="p-4 text-left font-bold">5000 Stars</th>
                  </tr>
                </thead>
                <tbody>
                  {USES.map((u) => (
                    <tr key={u.use} className="border-b border-card-border last:border-b-0">
                      <td className="p-4 font-medium">{u.use}</td>
                      <td className="p-4">{u.cost}</td>
                      <td className="p-4">{u.from2500}</td>
                      <td className="p-4">{u.from5000}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed mb-4">
              Telegram rasmiy blogiga ko&apos;ra, sovg&apos;a yuborish uchun foydalanuvchi profilini ochib, menyudan <strong>Send a Gift</strong> tanlanadi; qabul qiluvchi sovg&apos;ani profilida ko&apos;rsatishi yoki uni Stars&apos;ga almashtirishi mumkin. Oddiy sovg&apos;alar 15, 25, 50 va 100 Stars darajalarida sotiladi (2026-yil oktabr holatiga; aniq narxni ilovada tekshiring).
            </p>
            <p className="text-muted leading-relaxed">
              Bundan tashqari Stars boshqa kanallarning postlariga Star reaksiya qoldirish, pullik postlarni ochish va bot xizmatlari uchun ketadi —{" "}
              <Link href="/maqolalar/ai-botlarga-necha-stars-kerak" className="text-primary font-semibold hover:underline">AI botlarga necha Stars kerakligi</Link>{" "}
              haqida alohida yozganmiz.
            </p>
          </section>

          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Konkurs yoki aksiya uchun Stars kerakmi? <strong className="text-white">@premiumsendbot</strong>&apos;da 2500 Stars — 750 000 so&apos;m, 5000 Stars — 1 500 000 so&apos;m.
              </p>
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d={TG_ICON} /></svg>
                Stars buyurtma berish
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Sotib olingan Stars bilan nima qilib bo&apos;lmaydi?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Sotib olingan Stars kanal daromadi emas va rasmiy Giveaway&apos;ni to&apos;lamaydi. Bu ikki narsani xariddan oldin bilib olish kerak, aks holda Stars kutilgan maqsadga yaramay qolishi mumkin.
            </p>
            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li>
                <strong>Kanal daromadi emas.</strong> Kanal Stars&apos;ni obunachilardan oladi: Star reaksiyalar, pullik postlar va pullik obuna orqali. Telegram blogiga ko&apos;ra, Star reaksiyalardan tushgan Stars&apos;ning 100 foizi kanal egasiga o&apos;tadi. O&apos;zingiz sotib olgan Stars esa shaxsiy balansingizda turadi.
              </li>
              <li>
                <strong>Rasmiy Star Giveaway alohida to&apos;lanadi.</strong> U Kanal sozlamalari → Statistika → Boosts bo&apos;limidan boshlanadi va oldindan to&apos;lanadi. Telegram API hujjatlarida giveaway to&apos;lovi balansni to&apos;ldirishdan alohida xarid turi sifatida ko&apos;rsatilgan. Balansdagi Stars bilan esa g&apos;oliblarga o&apos;zingiz sovg&apos;a yuborishingiz mumkin.
              </li>
            </ul>
            <p className="text-muted leading-relaxed">
              Pulni qaytarish masalasi alohida:{" "}
              <Link href="/maqolalar/stars-pulini-qaytarish-refund" className="text-primary font-semibold hover:underline">Stars refund qoidalari</Link>{" "}
              maqolasida batafsil yozilgan.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Premium sovg&apos;a qilish uchun Stars olgan ma&apos;qulmi?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Odatda yo&apos;q — Premium&apos;ning o&apos;zini olish arzonroq. Telegram hujjatlariga ko&apos;ra, Premium&apos;ni Stars bilan sovg&apos;a qilish 3 oyga 1000, 6 oyga 1500, 12 oyga 2500 Stars turadi. 300 so&apos;m/star tarifda bu Premium Send&apos;dagi to&apos;g&apos;ridan-to&apos;g&apos;ri Premium narxidan qimmatga tushadi:
            </p>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto mb-4">
              <table className="w-full text-sm min-w-[560px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">Muddat</th>
                    <th className="p-4 text-left font-bold">Stars bilan</th>
                    <th className="p-4 text-left font-bold">So&apos;mda (300 so&apos;m/star)</th>
                    <th className="p-4 text-left font-bold">To&apos;g&apos;ridan-to&apos;g&apos;ri Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {PREMIUM_COMPARE.map((r) => (
                    <tr key={r.term} className="border-b border-card-border last:border-b-0">
                      <td className="p-4 font-medium">{r.term}</td>
                      <td className="p-4">{r.stars} Stars</td>
                      <td className="p-4">{fmt(r.viaStars)} so&apos;m</td>
                      <td className="p-4">
                        <Link href={r.href} className="text-primary font-bold hover:underline">{fmt(r.direct)} so&apos;m</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              Shuning uchun sovrin sifatida Premium bermoqchi bo&apos;lsangiz, Stars emas, Premium&apos;ning o&apos;zini sovg&apos;a qiling —{" "}
              <Link href="/maqolalar/3-oylik-telegram-premium-sovga-qilish" className="text-primary font-semibold hover:underline">3 oylik Premium&apos;ni sovg&apos;a qilish qo&apos;llanmasi</Link>. Stars esa aynan sovg&apos;alar, reaksiyalar va bot xizmatlari uchun to&apos;g&apos;ri tanlov.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Ko&apos;p miqdorda Stars qanday sotib olinadi?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Jarayon kichik paketdagidek to&apos;rt qadamdan iborat va bot ichida o&apos;tadi. Parol, login kodi yoki karta ma&apos;lumoti so&apos;ralmaydi — siz faqat o&apos;z bank ilovangizdan o&apos;tkazma qilasiz.
            </p>
            <div className="space-y-4 mb-6">
              {STEPS.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{i + 1}</div>
                  <div>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-foreground leading-relaxed font-medium mb-4">
              Tayyormisiz? Buyurtmani hozir boshlang:{" "}
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="text-primary font-bold hover:underline">@premiumsendbot&apos;ni ochish →</Link>
            </p>
            <p className="text-muted leading-relaxed">
              To&apos;lov tartibi batafsil:{" "}
              <Link href="/maqolalar/stars-kartaga-otkazma" className="text-primary font-semibold hover:underline">kartaga o&apos;tkazib Stars olish</Link>. Stars kechiksa nima qilish kerakligi:{" "}
              <Link href="/maqolalar/stars-yetkazish-vaqti" className="text-primary font-semibold hover:underline">Stars qancha vaqtda tushadi</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Katta summa o&apos;tkazishda nimalarga e&apos;tibor berish kerak?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Katta summada xato qimmatga tushadi, shuning uchun o&apos;tkazmadan oldin to&apos;rt narsani tekshiring:
            </p>
            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li><strong>Bank limiti.</strong> Bank ilovangizdagi bir martalik va kunlik o&apos;tkazma limitini oldindan ko&apos;ring — 1 500 000 so&apos;m limitdan oshsa, o&apos;tkazma o&apos;tmaydi.</li>
              <li><strong>Aniq summa.</strong> Summani Mini App ko&apos;rsatganday, yaxlitlamasdan o&apos;tkazing va karta raqamini nusxa ko&apos;chirib qo&apos;ying.</li>
              <li><strong>Chek.</strong> O&apos;tkazma chekini saqlang — hisobot uchun ham, muammo chiqsa murojaat uchun ham kerak bo&apos;ladi.</li>
              <li><strong>To&apos;g&apos;ri bot.</strong> Faqat @premiumsendbot bilan ishlang; sizga birinchi bo&apos;lib yozgan &quot;sotuvchi&quot;larga pul o&apos;tkazmang —{" "}
                <Link href="/maqolalar/telegram-stars-xavfsizmi-aldov-belgilari" className="text-primary hover:underline">aldov belgilari ro&apos;yxati</Link>.
              </li>
            </ul>
            <p className="text-muted leading-relaxed">
              Muhim: Premium Send Telegram&apos;ning rasmiy hamkori emas, mahalliy reseller. To&apos;lov bo&apos;yicha muammo chiqsa, har bir holat alohida ko&apos;rib chiqiladi — chek bilan <strong>@premiumsend_admin</strong> ga yozing. Kichik byudjet bilan boshlamoqchi bo&apos;lsangiz:{" "}
              <Link href="/maqolalar/talabalar-uchun-arzon-telegram-stars-kam-byudjet" className="text-primary font-semibold hover:underline">kam byudjet bilan Stars olish</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Bu ma&apos;lumotlar qayerdan olingan?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Telegram funksiyalari haqidagi da&apos;volar rasmiy manbalarga tayanadi; narxlar Premium Send&apos;ning 2026-yil oktabr holatidagi tarifidan olingan.
            </p>
            <ul className="list-disc list-inside text-muted leading-relaxed space-y-2">
              {SOURCES.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} target="_blank" rel="noopener" className="text-primary hover:underline">{s.label}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Tez-tez so&apos;raladigan savollar (FAQ)</h2>
            <div className="space-y-4">
              {FAQS.map((faq, i) => (
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
                  Kanal va loyihangiz uchun Stars — <strong className="text-white">@premiumsendbot</strong> orqali so&apos;mda, 5000 Stars <strong className="text-white">1 500 000 so&apos;m</strong>, bir necha daqiqada.
                </p>
                <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d={TG_ICON} /></svg>
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
