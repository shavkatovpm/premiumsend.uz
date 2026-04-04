import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ommaviy oferta shartnomasi — Premium Send",
  description:
    "Premium Send xizmatining ommaviy oferta shartnomasi. Telegram Premium obunasini sotib olish shartlari, to'lov tartibi, qaytarish siyosati va boshqa qoidalar.",
  alternates: {
    canonical: "https://premiumsend.uz/oferta",
  },
};

export default function OfertaPage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-muted">
        <Link href="/" className="hover:text-primary">
          Bosh sahifa
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">Oferta</span>
      </nav>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-4">
            Ommaviy oferta shartnomasi
          </h1>
          <p className="text-muted">
            Oxirgi yangilanish: 2026-yil, 5-aprel
          </p>
        </header>

        <div className="prose prose-lg max-w-none space-y-10 text-foreground/90">
          {/* § 1 */}
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">
              &sect; 1. Umumiy qoidalar
            </h2>
            <div className="space-y-3 leading-relaxed">
              <p>
                1.1. Ushbu hujjat Premium Send (bundan keyin — &laquo;Ijrochi&raquo;) tomonidan
                taqdim etiladigan Telegram Premium obuna xizmatini sotib olish shartlarini
                belgilovchi ommaviy oferta shartnomasi hisoblanadi.
              </p>
              <p>
                1.2. Ijrochi premiumsend.uz sayti va{" "}
                <Link
                  href="https://t.me/premiumsendbot"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  @PremiumSendBot
                </Link>{" "}
                Telegram-bot orqali faoliyat yuritadi.
              </p>
              <p>
                1.3. Foydalanuvchi botda buyurtma berish orqali ushbu oferta shartlarini
                to&apos;liq va so&apos;zsiz qabul qilgan hisoblanadi (aksept).
              </p>
            </div>
          </section>

          {/* § 2 */}
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">
              &sect; 2. Taqdim etiladigan xizmatlar
            </h2>
            <div className="space-y-3 leading-relaxed">
              <p>
                2.1. Ijrochi quyidagi raqamli xizmatni taqdim etadi:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Telegram Premium obunasi</strong> — 3 oylik, 6 oylik va 12 oylik
                  muddatlarda Telegram Premium obunasini faollashtirish.
                </li>
              </ul>
              <p>
                2.2. Barcha xizmatlar raqamli tarzda, to&apos;g&apos;ridan-to&apos;g&apos;ri
                foydalanuvchining Telegram akkauntiga yetkaziladi.
              </p>
              <p>
                2.3. Ijrochi Telegram platformasining rasmiy API va Fragment orqali xizmat
                ko&apos;rsatadi. Premium Send mustaqil reseller sifatida faoliyat yuritadi.
              </p>
            </div>
          </section>

          {/* § 3 */}
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">
              &sect; 3. Buyurtma berish va to&apos;lov tartibi
            </h2>
            <div className="space-y-3 leading-relaxed">
              <p>
                3.1. Buyurtma{" "}
                <Link
                  href="https://t.me/premiumsendbot"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  @PremiumSendBot
                </Link>{" "}
                orqali bot ko&apos;rsatmalariga amal qilingan holda beriladi.
              </p>
              <p>
                3.2. To&apos;lov quyidagi usullar orqali qabul qilinadi: Click, Uzcard va Humo
                plastik kartalari.
              </p>
              <p>
                3.3. To&apos;lov muvaffaqiyatli o&apos;tkazilgandan so&apos;ng buyurtma 5 daqiqa
                ichida bajariladi.
              </p>
              <p>
                3.4. Narxlar O&apos;zbek so&apos;mida belgilanadi. Narx buyurtma berish paytidagi
                kurs va tarifga asoslanadi.
              </p>
              <p>
                3.5. Ijrochi narxlarni oldindan xabardor qilmagan holda o&apos;zgartirish
                huquqini saqlab qoladi.
              </p>
            </div>
          </section>

          {/* § 4 */}
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">
              &sect; 4. Xizmat ko&apos;rsatish shartlari
            </h2>
            <div className="space-y-3 leading-relaxed">
              <p>
                4.1. Foydalanuvchi noto&apos;g&apos;ri Telegram username yoki ID kiritmagan holda
                yuzaga kelgan muammolar uchun Ijrochi javobgar emas.
              </p>
              <p>
                4.2. Telegram platformasi tomonidan yuzaga keladigan texnik uzilishlar, Telegram
                qoidalari o&apos;zgarishi yoki Telegram akkauntining bloklanishi uchun Ijrochi
                mas&apos;uliyat olmaydi.
              </p>
              <p>
                4.3. Foydalanuvchi Telegram akkauntida Premium qabul qilish imkoniyati mavjud
                bo&apos;lishi shart. Aks holda buyurtma bajarilmasligi mumkin.
              </p>
            </div>
          </section>

          {/* § 5 */}
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">
              &sect; 5. To&apos;lovni qaytarish (refund) siyosati
            </h2>
            <div className="space-y-3 leading-relaxed">
              <p>
                5.1. Raqamli mahsulotlar yetkazib berilgandan keyin qaytarilmaydi.
              </p>
              <p>
                5.2. To&apos;lov muvaffaqiyatli o&apos;tgan, lekin buyurtma texnik nosozlik
                sababli bajarilmagan taqdirda foydalanuvchi to&apos;liq qaytarim talab qilish
                huquqiga ega.
              </p>
              <p>
                5.3. Qaytarim talabi to&apos;lov o&apos;tkazilgan kundan 24 soat ichida{" "}
                <Link
                  href="https://t.me/premiumsendbot"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  @PremiumSendBot
                </Link>{" "}
                orqali yuborilishi kerak. To&apos;lov screenshoti yoki tasdig&apos;i ilova
                qilinishi shart.
              </p>
              <p>
                5.4. Foydalanuvchi noto&apos;g&apos;ri Telegram ma&apos;lumotlari kiritganligi
                sababli buyurtma boshqa shaxsga yetkazilgan bo&apos;lsa, qaytarim amalga
                oshirilmaydi.
              </p>
              <p>
                5.5. Buyurtma bajarilgandan keyin foydalanuvchi o&apos;z irodasi bilan voz
                kechgan holda qaytarim ko&apos;rib chiqilmaydi.
              </p>
            </div>
          </section>

          {/* § 6 */}
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">
              &sect; 6. Foydalanuvchi majburiyatlari
            </h2>
            <div className="space-y-3 leading-relaxed">
              <p>
                6.1. Foydalanuvchi xizmatdan faqat qonuniy maqsadlarda foydalanishi shart.
              </p>
              <p>
                6.2. Xizmatni firibgarlik, spam yoki boshqalarga zarar yetkazish maqsadida
                ishlatish qat&apos;iyan taqiqlanadi. Bunday foydalanuvchilar bloklanadi.
              </p>
              <p>
                6.3. Foydalanuvchi Telegram platformasining Foydalanish shartlariga rioya qilish
                majburiyatini o&apos;z zimmasiga oladi.
              </p>
            </div>
          </section>

          {/* § 7 */}
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">
              &sect; 7. Qo&apos;llab-quvvatlash xizmati
            </h2>
            <div className="space-y-3 leading-relaxed">
              <p>
                7.1. Barcha murojaat va savollar{" "}
                <Link
                  href="https://t.me/premiumsendbot"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  @PremiumSendBot
                </Link>{" "}
                orqali qabul qilinadi.
              </p>
              <p>
                7.2. Murojaatlarga 24 soat ichida javob beriladi.
              </p>
              <p>
                7.3. Qo&apos;pol munosabat, tahdid yoki noto&apos;g&apos;ri xatti-harakat
                ko&apos;rsatgan foydalanuvchilarga xizmat ko&apos;rsatishdan bosh tortish huquqi
                Ijrochida saqlanadi.
              </p>
            </div>
          </section>

          {/* § 8 */}
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">
              &sect; 8. Shaxsiy ma&apos;lumotlar va maxfiylik
            </h2>
            <div className="space-y-3 leading-relaxed">
              <p>
                8.1. Ijrochi faqat xizmat ko&apos;rsatish uchun zarur bo&apos;lgan minimal
                ma&apos;lumotlarni (Telegram ID, username) jamlaydi.
              </p>
              <p>
                8.2. Foydalanuvchi shaxsiy ma&apos;lumotlari uchinchi shaxslarga sotilmaydi.
              </p>
              <p>
                8.3. To&apos;lov ma&apos;lumotlari to&apos;lov tizimlari tomonidan boshqariladi.
                Ijrochi karta ma&apos;lumotlarini saqlamaydi.
              </p>
            </div>
          </section>

          {/* § 9 */}
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">
              &sect; 9. Yakuniy qoidalar
            </h2>
            <div className="space-y-3 leading-relaxed">
              <p>
                9.1. Ijrochi ushbu oferta shartlarini istalgan vaqtda o&apos;zgartirish huquqini
                saqlab qoladi. O&apos;zgarishlar premiumsend.uz saytida e&apos;lon qilingan
                paytdan kuchga kiradi.
              </p>
              <p>
                9.2. Oferta shartlari o&apos;zgargandan so&apos;ng xizmatdan foydalanishni davom
                ettirish — yangi shartlarni qabul qilish sifatida talqin etiladi.
              </p>
              <p>
                9.3. Nizolar birinchi navbatda muzokaralar yo&apos;li bilan hal etiladi.
                Kelishuv bo&apos;lmasa, O&apos;zbekiston Respublikasi qonunchiligiga muvofiq
                sudga murojaat qilinadi.
              </p>
              <p>
                9.4. Ushbu ofertaning alohida bandlari haqiqiy bo&apos;lmasa, qolgan bandlar
                o&apos;z kuchini saqlab qoladi.
              </p>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
