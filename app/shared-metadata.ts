/**
 * Umumiy Open Graph maydonlari.
 *
 * Next.js metadata obyektlari faqat SAYOZ (shallow) birlashtiriladi: sahifa
 * o'z `openGraph` blokini e'lon qilsa, layout'dagi butun `openGraph` bekor
 * bo'ladi — shu jumladan `images` ham. Shu sabab sayt bo'ylab og:image
 * yo'qolgan edi.
 *
 * Yechim (Next.js hujjatida tavsiya etilgani): umumiy maydonlarni alohida
 * o'zgaruvchiga chiqarib, har bir sahifaning `openGraph` blokiga BIRINCHI
 * bo'lib spread qilish. Spread birinchi turgani uchun sahifaning o'z
 * title/description/url qiymatlari ustun bo'lib qoladi — mavjud SEO
 * o'zgarmaydi, faqat yetishmayotgan maydonlar qo'shiladi.
 */

const OG_IMAGE_URL = "/og-image.png";

export const ogBaseUz = {
  type: "website" as const,
  locale: "uz_UZ",
  siteName: "Premium Send",
  images: [
    {
      url: OG_IMAGE_URL,
      width: 1200,
      height: 630,
      alt: "Premium Send — Telegram Premium sotib olish O'zbekistonda so'mda",
    },
  ],
};

export const ogBaseRu = {
  type: "website" as const,
  locale: "ru_RU",
  siteName: "Premium Send",
  images: [
    {
      url: OG_IMAGE_URL,
      width: 1200,
      height: 630,
      alt: "Premium Send — купить Telegram Premium в Узбекистане в сумах",
    },
  ],
};
