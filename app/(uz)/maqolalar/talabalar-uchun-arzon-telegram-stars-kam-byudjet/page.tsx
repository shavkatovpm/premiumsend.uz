import type { Metadata } from "next";
import Link from "next/link";
import { ogBaseUz } from "@/app/shared-metadata";

const PAGE_URL = "https://premiumsend.uz/maqolalar/talabalar-uchun-arzon-telegram-stars-kam-byudjet";
const TITLE = "Talaba va yoshlar uchun eng arzon Telegram Stars: kam byudjet bilan qanday olinadi?";

const META_TITLE = "Talabalar uchun eng arzon Telegram Stars — 15 000 so'mdan";

export const metadata: Metadata = {
  title: META_TITLE,
  description:
    "Talabalar uchun alohida chegirma yo'q, lekin tarif chiziqli: eng kichik paket 50 Stars — 15 000 so'm, 1 star 300 so'm. Kam byudjetga nima yetadi, qanday tejash mumkin va Uzcard/Humo bilan qanday olinadi.",
  keywords: [
    "talabalar uchun telegram stars",
    "eng arzon telegram stars",
    "kam byudjet telegram stars",
    "15 000 so'mga stars",
    "yoshlar uchun telegram stars",
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: {
      uz: PAGE_URL,
      ru: "https://premiumsend.uz/ru/maqolalar/talabalar-uchun-arzon-telegram-stars-kam-byudjet",
      "x-default": PAGE_URL,
    },
  },
  openGraph: {
    ...ogBaseUz,
    title: TITLE,
    description:
      "Kam byudjet bilan Telegram Stars: 50 Stars — 15 000 so'm, chiziqli 300 so'm/star tarif. Nimaga yetadi va qanday tejash mumkin.",
    url: PAGE_URL,
    type: "article",
    publishedTime: "2026-10-10",
  },
};

const SMALL_PACKAGES = [
  { amount: 50, price: 15000, g15: 3, g25: 2, g50: 1, g100: 0 },
  { amount: 100, price: 30000, g15: 6, g25: 4, g50: 2, g100: 1 },
  { amount: 250, price: 75000, g15: 16, g25: 10, g50: 5, g100: 2 },
];

const SAVING_TIPS = [
  { title: "Faqat keragicha oling", desc: "Tarif chiziqli bo'lgani uchun katta paket bir star narxini tushirmaydi. Bugun 50 Stars kerak bo'lsa, 50 Stars oling — ortiqcha pulni balansda muzlatmang." },
  { title: "Avval narxni bilib oling", desc: "Stars sotib olishdan oldin bot, sovg'a yoki xizmat aynan necha Stars so'rashini tekshiring va shunga eng yaqin paketni tanlang." },
  { title: "\"Bepul Stars\"ga ishonmang", desc: "Bepul Stars, generator yoki haddan tashqari arzon narx va'da qiladiganlar — aldovning asosiy belgisi. Tejayman deb pulning hammasidan ayrilmang." },
  { title: "Summani aniq o'tkazing", desc: "Mini App ko'rsatgan summani yaxlitlamasdan o'tkazing va chekni saqlang — shunda Stars kechikmaydi va qayta to'lashga to'g'ri kelmaydi." },
];

const STEPS = [
  { title: "@premiumsendbot'ni oching", desc: "Botni ishga tushiring va Stars bo'limini tanlang." },
  { title: "Kichik paketni tanlang", desc: "Masalan 50 Stars — 15 000 so'm yoki 100 Stars — 30 000 so'm." },
  { title: "Kartadan o'tkazma qiling", desc: "Mini App karta raqami va aniq summani ko'rsatadi. Uzcard yoki Humo kartangizdan, Click yoki Payme ilovasi orqali ham o'tkazish mumkin." },
  { title: "Stars'ni tekshiring", desc: "To'lov aniqlangach Stars odatda bir necha daqiqada tushadi. Telegram → Sozlamalar → Stars bo'limida ko'rasiz." },
];

const FAQS = [
  {
    q: "Talabalar uchun Telegram Stars'ga chegirma bormi?",
    a: "Yo'q. Premium Send'da talabalar uchun alohida chegirma yo'q — tarif hamma uchun bir xil, 300 so'm/star. Lekin eng kichik paket atigi 15 000 so'm, shuning uchun kam byudjet bilan ham olish mumkin.",
  },
  {
    q: "Eng kam qancha pulga Telegram Stars olsa bo'ladi?",
    a: "15 000 so'mga — bu eng kichik paket, 50 Stars. Keyingi paketlar: 100 Stars — 30 000 so'm, 250 Stars — 75 000 so'm.",
  },
  {
    q: "Kichik paketda bir star qimmatroqqa tushadimi?",
    a: "Yo'q. Tarif chiziqli: 50 Stars'da ham, 5000 Stars'da ham bitta star 300 so'm. Kichik paket uchun ustama yo'q.",
  },
  {
    q: "50 Stars nimaga yetadi?",
    a: "Masalan, 15 Stars'lik uchta yoki 50 Stars'lik bitta Telegram sovg'asiga. Shuningdek kanal postiga Star reaksiya qoldirish yoki bot xizmati uchun ishlatish mumkin — narxni har bir bot o'zi belgilaydi.",
  },
  {
    q: "Xalqaro kartam yo'q. Stars olsam bo'ladimi?",
    a: "Ha. @premiumsendbot'da to'lov so'mda, Uzcard yoki Humo kartadan o'tkazma bilan qilinadi — Visa, Mastercard yoki kripto-hamyon kerak emas.",
  },
  {
    q: "App Store yoki Fragment'da arzonroq emasmi?",
    a: "Qog'ozda bir star arzonroq ko'rinadi, lekin App Store va Google Play xalqaro karta, Fragment esa kriptovalyuta talab qiladi. Mahalliy kartasi bor talaba uchun bu yo'llar amalda yopiq yoki qo'shimcha xarajatli.",
  },
  {
    q: "Premium Send Telegram'ning rasmiy hamkorimi?",
    a: "Yo'q. Premium Send — mahalliy reseller, Telegram'ning rasmiy hamkori emas. Savol yoki muammo bo'lsa @premiumsend_admin ga yoziladi.",
  },
];

const KEY_FACTS = [
  { k: "Eng kichik paket", v: "50 Stars — 15 000 so'm" },
  { k: "1 star narxi", v: "300 so'm — har qanday paketda bir xil" },
  { k: "Talaba chegirmasi", v: "Yo'q — narx hamma uchun bir xil" },
  { k: "Xalqaro karta", v: "Kerak emas" },
  { k: "To'lov", v: "Uzcard, Humo, Click, Payme — so'mda" },
  { k: "Yetkazish", v: "Odatda bir necha daqiqa" },
  { k: "Qayerdan olinadi", v: "@premiumsendbot (telegram.me/premiumsendbot)" },
];

const SOURCES = [
  { label: "Telegram blogi — Gifts (2024-yil 5-oktabr)", href: "https://telegram.org/blog/gifts-verification-platform" },
  { label: "Telegram blogi — Star Reactions va pullik obuna", href: "https://telegram.org/blog/superchannels-star-reactions-subscriptions" },
  { label: "Telegram API hujjatlari — Telegram Stars", href: "https://core.telegram.org/api/stars" },
];

const TG_ICON ="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z";

const fmt = (n: number) => n.toLocaleString("en-US").replace(/,/g, " ");

export default function ArticleTalabalarUchunArzonStars() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description:
      "Talaba va yoshlar uchun kam byudjet bilan Telegram Stars olish: eng kichik paket, chiziqli tarif, 50–250 Stars nimaga yetishi va tejash usullari.",
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
      { "@type": "ListItem", position: 3, name: "Talabalar uchun arzon Telegram Stars", item: PAGE_URL },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Kam byudjet bilan Telegram Stars qanday sotib olinadi",
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
        <span className="text-foreground font-medium">Talabalar uchun arzon Telegram Stars</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">Xarid qo&apos;llanmasi</span>
            <time className="text-xs text-muted" dateTime="2026-10-10">2026-yil, 10-oktabr</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Talaba va yoshlar uchun eng arzon Telegram Stars: kam byudjet bilan qanday olinadi?
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-sm font-bold text-primary mb-2">QISQACHA JAVOB</p>
            <p className="text-foreground leading-relaxed font-medium">
              Talabalar uchun alohida chegirma yo&apos;q, lekin kam byudjet bilan Telegram Stars olish mumkin:{" "}
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="text-primary hover:underline">@premiumsendbot</Link>&apos;da eng kichik paket <strong>50 Stars — 15 000 so&apos;m</strong>. Tarif chiziqli — kichik paketda ham 1 star 300 so&apos;m, ustama yo&apos;q. To&apos;lov Uzcard yoki Humo kartadan so&apos;mda, xalqaro karta kerak emas.
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Stipendiya yoki cho&apos;ntak puli bilan yashaydigan odam uchun asosiy savol &quot;qayerda chegirma bor&quot; emas, &quot;eng kam qancha pul bilan boshlasa bo&apos;ladi&quot;. Quyida eng kichik paketlar narxi, ular nimaga yetishi, pulni tejashning halol usullari va xarid qadamlari keltirilgan.
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
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Talabalar uchun Telegram Stars&apos;ga chegirma bormi?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Yo&apos;q. Premium Send&apos;da talaba, o&apos;quvchi yoki boshqa guruh uchun alohida narx yo&apos;q — tarif hamma uchun bir xil, <strong>300 so&apos;m/star</strong>. Telegram&apos;ning rasmiy blogida ham Stars uchun talaba tarifi haqida e&apos;lon uchratmadik.
            </p>
            <p className="text-muted leading-relaxed">
              Shu sababli &quot;talabalar uchun 50% chegirma&quot; yoki &quot;bepul Stars&quot; va&apos;da qilayotgan bot va kanallarga ehtiyot bo&apos;ling — bu odatda aldov:{" "}
              <Link href="/maqolalar/telegram-stars-xavfsizmi-aldov-belgilari" className="text-primary font-semibold hover:underline">soxta Stars sotuvchisining belgilari</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Eng kam qancha pulga Telegram Stars olsa bo&apos;ladi?</h2>
            <p className="text-muted leading-relaxed mb-4">
              <strong>15 000 so&apos;mga</strong> — bu eng kichik paket, 50 Stars. Kichik paketga ustama qo&apos;yilmaydi: bir star narxi 5000 Stars&apos;lik paketdagi bilan bir xil. Jadvalda uchta eng arzon paket va ular nechta Telegram sovg&apos;asiga yetishi ko&apos;rsatilgan:
            </p>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto mb-4">
              <table className="w-full text-sm min-w-[620px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">Paket</th>
                    <th className="p-4 text-left font-bold">Narx</th>
                    <th className="p-4 text-left font-bold">15 Stars&apos;lik sovg&apos;a</th>
                    <th className="p-4 text-left font-bold">25 Stars&apos;lik</th>
                    <th className="p-4 text-left font-bold">50 Stars&apos;lik</th>
                    <th className="p-4 text-left font-bold">100 Stars&apos;lik</th>
                  </tr>
                </thead>
                <tbody>
                  {SMALL_PACKAGES.map((p) => (
                    <tr key={p.amount} className="border-b border-card-border last:border-b-0">
                      <td className="p-4 font-medium">
                        <Link href={`/${p.amount}-stars`} className="text-primary font-semibold hover:underline">{p.amount} Stars</Link>
                      </td>
                      <td className="p-4">{fmt(p.price)} so&apos;m</td>
                      <td className="p-4">{p.g15} ta</td>
                      <td className="p-4">{p.g25} ta</td>
                      <td className="p-4">{p.g50} ta</td>
                      <td className="p-4">{p.g100 > 0 ? `${p.g100} ta` : "yetmaydi"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              Oddiy Telegram sovg&apos;alari 15, 25, 50 va 100 Stars darajalarida sotiladi (2026-yil oktabr holatiga; aniq narxni ilovada tekshiring). Kattaroq paketlar:{" "}
              <Link href="/stars" className="text-primary font-semibold hover:underline">barcha Stars narxlari</Link>.
            </p>
          </section>

          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                15 000 so&apos;m bilan boshlang — <strong className="text-white">@premiumsendbot</strong>&apos;da 50 Stars, Uzcard yoki Humo kartadan.
              </p>
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d={TG_ICON} /></svg>
                50 Stars olish
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Kichik miqdordagi Stars yana nimaga ishlatiladi?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Sovg&apos;adan tashqari 50–250 Stars kundalik mayda to&apos;lovlarga yetadi: yoqqan kanal postiga Star reaksiya qoldirish, pullik post yoki mediani ochish, bot va mini-ilova xizmatiga to&apos;lash. Narxni har bir kanal va bot o&apos;zi belgilaydi, shuning uchun avval kerakli summani bilib oling.
            </p>
            <p className="text-muted leading-relaxed">
              O&apos;qish uchun AI botlardan foydalanadiganlar uchun alohida hisob-kitob:{" "}
              <Link href="/maqolalar/ai-botlarga-necha-stars-kerak" className="text-primary font-semibold hover:underline">AI botlarga necha Stars kerak</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">App Store yoki Fragment&apos;da arzonroq emasmi?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Qog&apos;ozda bir star arzonroq ko&apos;rinadi, lekin mahalliy kartasi bor talaba uchun bu yo&apos;llar amalda yopiq yoki qo&apos;shimcha xarajatli. App Store va Google Play Uzcard hamda Humo&apos;ni qabul qilmaydi, Fragment esa faqat kriptovalyuta bilan ishlaydi.
            </p>
            <p className="text-muted leading-relaxed">
              Raqamlar bilan taqqoslash:{" "}
              <Link href="/maqolalar/1-stars-necha-som-appstore-taqqoslash" className="text-primary font-semibold hover:underline">1 Stars necha so&apos;m turadi</Link>. Xalqaro kartasiz variantlar:{" "}
              <Link href="/maqolalar/xorijiy-kartasiz-stars-sotib-olish" className="text-primary font-semibold hover:underline">xorijiy kartasiz Stars olish</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Stars olishda pulni qanday tejash mumkin?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Chegirma bo&apos;lmasa ham, to&apos;rtta oddiy qoida ortiqcha xarajatdan saqlaydi:
            </p>
            <div className="space-y-4 mb-4">
              {SAVING_TIPS.map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-card-border shadow-sm">
                  <h3 className="font-bold text-foreground mb-1">{i + 1}. {item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-muted leading-relaxed">
              Karta ota-onangizniki bo&apos;lsa, o&apos;tkazmani ularning roziligi bilan qiling — to&apos;lov cheki karta egasining bank ilovasida qoladi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Kam byudjet bilan Stars qanday sotib olinadi?</h2>
            <p className="text-muted leading-relaxed mb-4">
              To&apos;rt qadam, hammasi bot ichida. Parol, login kodi yoki karta ma&apos;lumoti so&apos;ralmaydi — o&apos;tkazmani o&apos;z bank ilovangizdan qilasiz.
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
              Tayyormisiz? 15 000 so&apos;m bilan hozir boshlang:{" "}
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="text-primary font-bold hover:underline">@premiumsendbot&apos;ni ochish →</Link>
            </p>
            <p className="text-muted leading-relaxed mb-4">
              To&apos;lov tartibi batafsil:{" "}
              <Link href="/maqolalar/stars-kartaga-otkazma" className="text-primary font-semibold hover:underline">kartaga o&apos;tkazib Stars olish</Link>. Stars kechiksa:{" "}
              <Link href="/maqolalar/stars-yetkazish-vaqti" className="text-primary font-semibold hover:underline">Stars qancha vaqtda tushadi</Link>.
            </p>
            <p className="text-muted leading-relaxed">
              Muhim: Premium Send Telegram&apos;ning rasmiy hamkori emas, mahalliy reseller. Muammo chiqsa, har bir holat alohida ko&apos;rib chiqiladi — chek bilan <strong>@premiumsend_admin</strong> ga yozing. Kanal yoki loyiha uchun katta hajm kerak bo&apos;lsa:{" "}
              <Link href="/maqolalar/kanal-va-bloger-uchun-kop-miqdorda-telegram-stars" className="text-primary font-semibold hover:underline">ko&apos;p miqdorda Stars olish</Link>.
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
                  Xalqaro kartasiz, kam byudjet bilan — <strong className="text-white">@premiumsendbot</strong> orqali 50 Stars <strong className="text-white">15 000 so&apos;mdan</strong>, so&apos;mda, bir necha daqiqada.
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
