import type { Metadata } from "next";
import Link from "next/link";
import { ogBaseUz } from "@/app/shared-metadata";

export const metadata: Metadata = {
  title: "Telegram Stars puli qaytariladimi? Refund qoidalari va istisnolar",
  description:
    "Telegram Stars refund qoidasi: keraksiz xarid uchun pul qaytarilmaydi, lekin bot xizmatni bermasa Stars qaytadi, @premiumsendbot'da esa to'lov o'tib Stars tushmasa to'liq qaytarim bor. Qachon qaytadi, qachon yo'q — jadval bilan.",
  keywords: [
    "stars puli qaytariladimi",
    "telegram stars refund",
    "stars pulini qaytarish",
    "stars qaytarib olish mumkinmi",
    "telegram stars vozvrat",
    "bot stars qaytarmayapti",
  ],
  alternates: {
    canonical: "https://premiumsend.uz/maqolalar/stars-pulini-qaytarish-refund",
    languages: {
      uz: "https://premiumsend.uz/maqolalar/stars-pulini-qaytarish-refund",
      ru: "https://premiumsend.uz/ru/maqolalar/stars-pulini-qaytarish-refund",
      "x-default": "https://premiumsend.uz/maqolalar/stars-pulini-qaytarish-refund",
    },
  },
  openGraph: {
    ...ogBaseUz,
    title: "Telegram Stars puli qaytariladimi? Refund qoidalari va istisnolar",
    description:
      "Keraksiz xarid — qaytmaydi. Bot xizmat bermasa yoki to'lov o'tib Stars tushmasa — qaytadi. Barcha holatlar jadvalda.",
    url: "https://premiumsend.uz/maqolalar/stars-pulini-qaytarish-refund",
    type: "article",
    publishedTime: "2026-09-30",
  },
};

export default function ArticleStarsRefund() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Telegram Stars puli qaytariladimi? Refund qoidalari va istisnolar",
    description:
      "Telegram Stars uchun refund qoidalari: Telegram'ning rasmiy shartlari, bot orqali qaytarim va @premiumsendbot orqali to'lovlar uchun qaytarish tartibi.",
    datePublished: "2026-09-30",
    dateModified: "2026-09-30",
    author: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    publisher: { "@type": "Organization", name: "Premium Send", url: "https://premiumsend.uz" },
    mainEntityOfPage: "https://premiumsend.uz/maqolalar/stars-pulini-qaytarish-refund",
    inLanguage: "uz",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Telegram Stars puli qaytariladimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Umumiy qoida — yo'q. Telegram Stars shartlariga ko'ra Stars sotuvlari yakuniy va Telegram keraksiz yoki tasodifiy xarid uchun pul qaytarmaydi. Istisnolar: bot yoki mini-app xarid qilingan xizmatni bermasa, dasturchi Stars'ni qaytaradi; @premiumsendbot'da to'lov o'tib, Stars texnik sabab bilan tushmasa, to'liq qaytarim qilinadi.",
        },
      },
      {
        "@type": "Question",
        name: "Bot Stars oldi, lekin xizmat bermadi. Nima qilaman?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Botga /paysupport buyrug'ini yuboring — Telegram qoidalariga ko'ra har bir Stars qabul qiluvchi bot bunga javob berishi shart. Dasturchi asosli qaytarimni rad etsa, Sozlamalar → Stars bo'limidan tranzaksiya ID'sini oling va Telegram'ga shikoyat yuboring.",
        },
      },
      {
        "@type": "Question",
        name: "@premiumsendbot'ga pul o'tkazdim, Stars tushmadi. Pulim qaytadimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha. Premium Send ofertasining 5.2-bandiga ko'ra, to'lov muvaffaqiyatli o'tgan, lekin buyurtma texnik nosozlik sababli bajarilmagan bo'lsa, to'liq qaytarim talab qilish huquqingiz bor. So'rovni to'lovdan keyin 24 soat ichida chek (skrinshot) bilan yuboring.",
        },
      },
      {
        "@type": "Question",
        name: "Stars tushgandan keyin fikrimdan qaytsam, pulni qaytarib olsam bo'ladimi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yo'q. Ofertaga ko'ra raqamli mahsulot yetkazib berilgandan keyin qaytarilmaydi va buyurtma bajarilgach o'z irodasi bilan voz kechish qaytarimga asos bo'lmaydi.",
        },
      },
      {
        "@type": "Question",
        name: "App Store yoki Google Play'da sotib olingan Stars'ni qaytarish mumkinmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bunday xarid Apple yoki Google shartlariga ham bo'ysunadi, shuning uchun qaytarim so'rovi ularning tartibi bo'yicha ko'rib chiqiladi. Telegram shartlariga ko'ra, bunday so'rov yuborsangiz, Telegram tegishli ma'lumotlarni to'lov tizimiga berishiga rozi bo'lasiz.",
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
      { "@type": "ListItem", position: 3, name: "Stars refund qoidalari", item: "https://premiumsend.uz/maqolalar/stars-pulini-qaytarish-refund" },
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
        <span className="text-foreground font-medium">Stars refund qoidalari</span>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-light text-primary">Muammolar yechimi</span>
            <time className="text-xs text-muted" dateTime="2026-09-30">2026-yil, 30-sentabr</time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
            Telegram Stars puli qaytariladimi? Refund qoidalari va istisnolar
          </h1>

          <div className="bg-primary-light/40 rounded-xl p-5 border border-primary/20 mb-6">
            <p className="text-sm font-bold text-primary mb-2">QISQACHA JAVOB</p>
            <p className="text-foreground leading-relaxed font-medium">
              Umumiy qoida — <strong>yo&apos;q</strong>: Telegram Stars sotuvlari yakuniy, keraksiz yoki tasodifiy xarid uchun pul qaytarilmaydi. Ikki muhim istisno bor: bot to&apos;langan xizmatni bermasa, Stars qaytariladi (/paysupport orqali), va{" "}
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="text-primary hover:underline">@premiumsendbot</Link>&apos;da to&apos;lov o&apos;tib, Stars texnik sabab bilan tushmasa — <strong>to&apos;liq qaytarim</strong> (24 soat ichida, chek bilan).
            </p>
          </div>

          <p className="text-lg text-muted leading-relaxed">
            Stars puli qaytariladimi degan savol odatda ikki holatda tug&apos;iladi: xariddan oldin (&quot;agar biror narsa noto&apos;g&apos;ri ketsa-chi?&quot;) va xarid muvaffaqiyatsiz bo&apos;lgandan keyin. Quyida Telegram&apos;ning rasmiy qoidalari, botlar bilan bog&apos;liq holatlar va @premiumsendbot orqali to&apos;lovlar uchun aniq tartib keltirilgan.
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Telegram Stars uchun refund bormi?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Telegram&apos;ning o&apos;zi keraksiz xarid uchun refund qilmaydi. Telegram Stars shartlarining 3-bandida aniq yozilgan: Stars sotuvlari yakuniy va Telegram <strong>keraksiz yoki tasodifan qilingan xaridlar uchun pul qaytarmaydi</strong>. Akkaunt o&apos;chirilsa, qolgan Stars balansi ham yo&apos;qoladi.
            </p>
            <p className="text-muted leading-relaxed">
              Lekin bu &quot;hech qachon hech narsa qaytmaydi&quot; degani emas — qaytarim kim orqali va nima uchun to&apos;laganingizga bog&apos;liq. Quyidagi jadval barcha asosiy holatlarni jamlaydi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Qaysi holatlarda pul yoki Stars qaytadi?</h2>
            <div className="bg-white rounded-2xl border border-card-border shadow-lg overflow-x-auto mb-4">
              <table className="w-full text-sm min-w-[600px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="p-4 text-left font-bold">Vaziyat</th>
                    <th className="p-4 text-left font-bold">Qaytadimi?</th>
                    <th className="p-4 text-left font-bold">Kimga murojaat</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Stars&apos;ni o&apos;ylamay yoki keraksiz sotib oldim</td>
                    <td className="p-4">Yo&apos;q</td>
                    <td className="p-4">—</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">Bot/mini-app Stars oldi, lekin xizmat bermadi</td>
                    <td className="p-4">Ha, Stars qaytarilishi mumkin</td>
                    <td className="p-4">Botga /paysupport, keyin Telegram&apos;ga shikoyat</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">App Store / Google Play orqali olingan</td>
                    <td className="p-4">Apple/Google qoidalariga bog&apos;liq</td>
                    <td className="p-4">Apple yoki Google</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">@premiumsendbot: to&apos;ladim, Stars texnik sabab bilan tushmadi</td>
                    <td className="p-4">Ha, to&apos;liq</td>
                    <td className="p-4">Premium Send qo&apos;llab-quvvatlash, 24 soat ichida</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4 font-medium">@premiumsendbot: Stars tushdi, keyin fikrimdan qaytdim</td>
                    <td className="p-4">Yo&apos;q</td>
                    <td className="p-4">—</td>
                  </tr>
                  <tr className="border-b border-card-border last:border-b-0">
                    <td className="p-4 font-medium">Noto&apos;g&apos;ri username kiritildi, Stars boshqa odamga tushdi</td>
                    <td className="p-4">Yo&apos;q</td>
                    <td className="p-4">—</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed text-sm">
              Manbalar: Telegram Stars shartlari (3, 3.1, 3.2-bandlar) va Premium Send{" "}
              <Link href="/oferta" className="text-primary font-semibold hover:underline">ommaviy ofertasi</Link> (5-bo&apos;lim).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Bot Stars oldi, lekin xizmat bermadi — nima qilish kerak?</h2>
            <p className="text-muted leading-relaxed mb-4">
              Bot dasturchisi Stars&apos;ni to&apos;liq qaytarishi mumkin. Telegram qoidalariga ko&apos;ra xaridni bajara olmagan bot Stars&apos;ni jarimasiz qaytarishi mumkin, va Stars qabul qiladigan har bir bot <strong>/paysupport</strong> buyrug&apos;iga javob berishi shart.
            </p>
            <div className="space-y-4 mb-6">
              {[
                { step: "1", title: "Botga /paysupport yuboring", desc: "Nima sotib olganingiz va nima olinmaganini qisqa yozing." },
                { step: "2", title: "Tranzaksiya ID'sini toping", desc: "Telegram Sozlamalar → Stars bo'limida xaridlar tarixidan kerakli to'lovni oching." },
                { step: "3", title: "Rad etilsa — shikoyat qiling", desc: "Dasturchi asosli qaytarimni rad etsa, Telegram shartlariga ko'ra shu tranzaksiya bo'yicha shikoyat yuborish mumkin." },
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
              Muhim: bu holatda Stars bot dasturchisi tomonidan qaytariladi — Stars&apos;ni kimdan sotib olganingizdan (App Store, Fragment yoki reseller) qat&apos;i nazar. Xarajatni oldindan to&apos;g&apos;ri hisoblash uchun{" "}
              <Link href="/maqolalar/ai-botlarga-necha-stars-kerak" className="text-primary font-semibold hover:underline">AI botlarga necha Stars kerak</Link>{" "}
              maqolasini ko&apos;ring.
            </p>
          </section>

          <section>
            <div className="hero-gradient rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed mb-4">
                Aniq qaytarish qoidalari bilan xarid qiling — <strong className="text-white">@premiumsendbot</strong>&apos;da Stars so&apos;mda, Uzcard, Humo, Click yoki Payme&apos;dagi kartangizdan.
              </p>
              <Link href="https://telegram.me/premiumsendbot" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:shadow-2xl transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                @premiumsendbot — boshlash
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">@premiumsendbot orqali olganda pul qachon qaytariladi?</h2>
            <p className="text-muted leading-relaxed mb-4">
              To&apos;lov o&apos;tgan, lekin Stars texnik nosozlik sababli tushmagan bo&apos;lsa, siz <strong>to&apos;liq qaytarim</strong> talab qilishingiz mumkin. Premium Send{" "}
              <Link href="/oferta" className="text-primary font-semibold hover:underline">ofertasining</Link>{" "}
              5-bo&apos;limi raqamli mahsulotlar uchun quyidagi qoidalarni belgilaydi:
            </p>
            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li>Raqamli mahsulot yetkazib berilgandan keyin <strong>qaytarilmaydi</strong> (5.1)</li>
              <li>To&apos;lov o&apos;tgan, lekin buyurtma texnik nosozlik sababli bajarilmagan bo&apos;lsa — <strong>to&apos;liq qaytarim</strong> huquqi bor (5.2)</li>
              <li>So&apos;rov to&apos;lovdan keyin <strong>24 soat ichida</strong>, to&apos;lov skrinshoti yoki tasdig&apos;i bilan yuboriladi (5.3)</li>
              <li>Noto&apos;g&apos;ri Telegram ma&apos;lumoti kiritilib, buyurtma boshqa odamga yetkazilgan bo&apos;lsa — qaytarilmaydi (5.4)</li>
              <li>Buyurtma bajarilgach o&apos;z irodasi bilan voz kechish qaytarimga asos emas (5.5)</li>
            </ul>
            <p className="text-muted leading-relaxed">
              Amalda &quot;Stars kelmadi&quot; holatlarining ko&apos;pi refundsiz hal bo&apos;ladi: odatda o&apos;tkazma hali bank tomonidan tugallanmagan yoki summa Mini App ko&apos;rsatganidan farq qilgan bo&apos;ladi. Avval{" "}
              <Link href="/maqolalar/stars-yetkazish-vaqti" className="text-primary font-semibold hover:underline">Stars kelmasa nima qilish kerak</Link>{" "}
              qo&apos;llanmasidagi qadamlarni bajaring.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Qaytarim so&apos;rovini qanday yuborish kerak?</h2>
            <div className="space-y-4 mb-6">
              {[
                { step: "1", title: "Chekni saqlang", desc: "Bank ilovangizdan o'tkazma chekining skrinshotini oling — summa, sana va qabul qiluvchi karta ko'rinsin." },
                { step: "2", title: "24 soat ichida yozing", desc: "@premiumsendbot yoki @premiumsend_admin orqali murojaat qiling." },
                { step: "3", title: "Ma'lumotlarni to'liq bering", desc: "Chek, Telegram username'ingiz va qancha Stars sotib olmoqchi bo'lganingizni yuboring." },
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
              Halollik uchun: Premium Send Telegram&apos;ning rasmiy hamkori emas, mustaqil mahalliy reseller. Shu sabab bizga qilingan to&apos;lov bo&apos;yicha qaytarimni Telegram support&apos;i emas, faqat bizning qo&apos;llab-quvvatlash hal qiladi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Refund kerak bo&apos;lmasligi uchun xariddan oldin nimani tekshirish kerak?</h2>
            <ul className="list-disc list-inside text-muted leading-relaxed mb-4 space-y-2">
              <li>Summani <strong>aynan</strong> Mini App ko&apos;rsatganday o&apos;tkazing, karta raqamini nusxa ko&apos;chiring</li>
              <li>Telegram username&apos;ni tekshiring — xato username qaytarimga asos bo&apos;lmaydi</li>
              <li>Qancha Stars kerakligini oldindan hisoblang, birinchi marta bo&apos;lsa kichik paketdan boshlang</li>
              <li>Faqat rasmiy @premiumsendbot havolasidan foydalaning</li>
            </ul>
            <p className="text-muted leading-relaxed">
              Paketlar:{" "}
              <Link href="/stars" className="text-primary font-semibold hover:underline">barcha Stars paketlari</Link>{" "}
              (300 so&apos;m/star), eng kichigi{" "}
              <Link href="/50-stars" className="text-primary font-semibold hover:underline">50 Stars — 15 000 so&apos;m</Link>. To&apos;lov jarayoni:{" "}
              <Link href="/maqolalar/stars-kartaga-otkazma" className="text-primary font-semibold hover:underline">kartaga o&apos;tkazib Stars olish</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Tez-tez so&apos;raladigan savollar (FAQ)</h2>
            <div className="space-y-4">
              {[
                { q: "Telegram Stars puli qaytariladimi?", a: "Umumiy qoida — yo'q: Telegram keraksiz yoki tasodifiy xarid uchun pul qaytarmaydi. Istisnolar: bot xizmatni bermasa Stars qaytadi; @premiumsendbot'da to'lov o'tib Stars texnik sabab bilan tushmasa — to'liq qaytarim." },
                { q: "Bot Stars oldi, lekin xizmat bermadi. Nima qilaman?", a: "Botga /paysupport yuboring. Rad etilsa, Sozlamalar → Stars'dan tranzaksiya ID'sini olib Telegram'ga shikoyat qiling." },
                { q: "@premiumsendbot'ga pul o'tkazdim, Stars tushmadi. Pulim qaytadimi?", a: "Ha, texnik nosozlik bo'lsa to'liq qaytariladi (oferta 5.2). So'rovni 24 soat ichida chek bilan yuboring." },
                { q: "Stars tushgandan keyin fikrimdan qaytsam, pulni qaytarib olsam bo'ladimi?", a: "Yo'q — yetkazilgan raqamli mahsulot qaytarilmaydi (oferta 5.1, 5.5)." },
                { q: "App Store yoki Google Play'da sotib olingan Stars'ni qaytarish mumkinmi?", a: "Bu Apple yoki Google qoidalariga bog'liq — so'rov ularning tartibi bo'yicha ko'rib chiqiladi." },
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
                  Stars&apos;ni so&apos;mda oling — <strong className="text-white">@premiumsendbot</strong> orqali 50 Stars <strong className="text-white">15 000 so&apos;mdan</strong>, texnik nosozlikda to&apos;liq qaytarim huquqi bilan.
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
