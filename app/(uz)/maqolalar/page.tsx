import type { Metadata } from "next";
import AnimatedWave from "../../components/AnimatedWave";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Telegram Premium haqida maqolalar — qo'llanma, narxlar, yangiliklar",
  description:
    "Telegram Premium haqida foydali maqolalar: Premium nima, qanday sotib olish, narxlari, imkoniyatlari. O'zbekistonda Telegram Premium sotib olish bo'yicha to'liq qo'llanma.",
  keywords: [
    "Telegram Premium haqida",
    "Telegram Premium nima",
    "Telegram Premium imkoniyatlari",
    "Telegram Premium qo'llanma",
    "Telegram Premium narxlari",
    "Telegram Premium sotib olish qo'llanma",
  ],
  alternates: {
    canonical: "https://premiumsend.uz/maqolalar",
    languages: {
      uz: "https://premiumsend.uz/maqolalar",
      ru: "https://premiumsend.uz/ru/maqolalar",
      "x-default": "https://premiumsend.uz/maqolalar",
    },
  },
  openGraph: {
    title: "Telegram Premium haqida maqolalar va qo'llanmalar",
    description:
      "Telegram Premium haqida foydali maqolalar, narxlar, imkoniyatlar va sotib olish bo'yicha qo'llanmalar.",
    url: "https://premiumsend.uz/maqolalar",
  },
};

const articles = [
  {
    slug: "telegram-premium-muddati-tugadi-nima-qilish",
    title: "Telegram Premium muddati tugadi — nima qilish va qanday tiklash",
    excerpt:
      "Muddat tugaganda akkaunt oddiy Telegramga qaytadi, hech narsa o'chmaydi: chatlar, fayllar, kanallar joyida. Nima o'chadi, fayllar saqlanadimi va @PremiumSendBot orqali so'mda 5 daqiqada qanday tiklash — to'liq javob.",
    category: "Savol-javob",
    date: "2026-06-13",
  },
  {
    slug: "12-oylik-telegram-premium-click-orqali",
    title: "12 oylik Telegram Premium Click orqali sotib olish",
    excerpt:
      "12 oylik Telegram Premium Click ilovasi orqali 425,000 so'mga (oyiga 35,417) — bot karta va summani ko'rsatadi, Click'dan o'tkazasiz, 5 daqiqada 365 kunga faollashish. Eng arzon oylik narx, 1 oylikka taqqoslab 39% tejamkorlik.",
    category: "Qo'llanma",
    date: "2026-06-05",
  },
  {
    slug: "telegram-premium-muammolari-xatoliklari",
    title: "Telegram Premium muammolari va xatoliklari: 12 ta savol-javob va yechim",
    excerpt:
      "Premium faollashmadi, birdan yo'qoldi yoki emoji/4 GB ishlamayaptimi? Muammolarni 5 toifaga ajratdik — to'lov, faollashish, funksiya, obuna tugashi va sinxronizatsiya. Har biriga aniq qadamli yechim, xato kodlari jadvali va tezkor tekshiruv ro'yxati.",
    category: "Muammolar va yechimlar",
    date: "2026-06-02",
  },
  {
    slug: "telegram-premium-ishonchli-saytdan-sotib-olish",
    title: "Telegram Premium ishonchli saytdan sotib olish: aldovsiz xarid qo'llanmasi",
    excerpt:
      "7 ta tekshiruv mezoni, qizil bayroqlar va PremiumSend misolida amaliy qo'llanma. Aniq narxlar (1 oylik 59 000, 12 oylik 425 000 so'm), oferta va aloqa kanali — to'lashdan oldin nimaga qarash kerak.",
    category: "Xavfsizlik qo'llanmasi",
    date: "2026-05-22",
  },
  {
    slug: "premiumbot-ishlamayapti-premium-qayerdan-sotib-olish",
    title: "Nega PremiumBot ishlamaydi va Telegram Premium qayerdan sotib olinadi?",
    excerpt:
      "PremiumBot Uzcard/Humo qabul qilmaydi, narx dollarda, 3D Secure xato beradi. Yechim — PremiumSend orqali so'mda: 1 oylik 59 000, 12 oylik 425 000 so'm. 5 sabab, 4 yo'l taqqoslash, xato kodlari va aniq qadamlar.",
    category: "Savol-javob",
    date: "2026-05-21",
  },
  {
    slug: "telegram-premium-tugilgan-kun-sovgasi",
    title: "Telegram Premium tug'ilgan kun sovg'asi — 3, 6 va 12 oylik tariflar",
    excerpt:
      "Tug'ilgan kunga zamonaviy sovg'a: Premium 3 oylik 175k, 6 oylik 235k, 12 oylik 425k so'm. Anonim yuboring va alohida tabriknoma xabarini yozing. Yuboruvchi nomi ko'rinmaydi (default) yoki qimmat Visa rejimi orqali ko'rinadi.",
    category: "Sovg'a g'oyalari",
    date: "2026-05-19",
  },
  {
    slug: "telegram-premium-somda-uzs-sotib-olish",
    title: "Telegram Premium so'mda (UZS) sotib olish — valyuta konvertatsiyasiz",
    excerpt:
      "Premium-ni faqat so'mda to'g'ridan-to'g'ri: 1 oylik 59 000, 12 oylik 425 000 so'm. Uzcard/Humo/Click/Payme/Visa — dollar konvertatsiyasi, kurs riski va platforma komissiyasi yo'q. App Store, Fragment bilan to'liq taqqoslash.",
    category: "To'lov qo'llanmasi",
    date: "2026-05-18",
  },
  {
    slug: "telegram-premium-4gb-fayl-kanal-guruh-limitlari",
    title: "Telegram Premium 4 GB fayl, 1000 kanal va guruh limitlari — texnik imkoniyatlar",
    excerpt:
      "Premium oddiy Telegram limitlarini ikki barobar oshiradi: 4 GB fayl, 1000 kanal/guruh, 20 papka × 200 chat, 10 pinli chat, 4 akkaunt. Cheklovsiz yuklab olish tezligi, transkripsiya. To'liq jadval bilan taqqoslash.",
    category: "Texnik qo'llanma",
    date: "2026-05-16",
  },
  {
    slug: "12-oylik-telegram-premium-humo-orqali",
    title: "12 oylik Telegram Premium Humo orqali sotib olish",
    excerpt:
      "12 oylik Telegram Premium Humo karta orqali 425,000 so'mga (oyiga 35,417) — bot karta va summani ko'rsatadi, Humo'dan o'tkazasiz, 5 daqiqada 365 kunga faollashish. Eng arzon oylik narx, 1 oylikka taqqoslab 39% tejamkorlik.",
    category: "Qo'llanma",
    date: "2026-05-14",
  },
  {
    slug: "telegram-stars-paketlari-narxlari",
    title: "Telegram Stars paketlari: 50, 100, 500, 1000, 5000 — aniq narxlar",
    excerpt:
      "Stars'ning barcha paketlari va so'mdagi aniq narxlari: 50 Stars 12 000, 1000 Stars 240 000, 5000 Stars 1 200 000 so'm. 240 so'm/star linear tarif, App Store'dan 17-20% arzon.",
    category: "Narxlar qo'llanmasi",
    date: "2026-05-13",
  },
  {
    slug: "telegram-stars-uzcard-orqali",
    title: "Telegram Stars Uzcard orqali sotib olish — kartaga o'tkazma",
    excerpt:
      "Stars'ni Uzcard kartangiz orqali so'mda sotib olish. @starsjoybot karta va summani beradi, Uzcard ilovasidan P2P o'tkazasiz. 50 Stars = 12 000 so'm, App Store'dan 17% arzon.",
    category: "Qo'llanma",
    date: "2026-05-12",
  },
  {
    slug: "6-oylik-telegram-premium-payme-orqali",
    title: "6 oylik Telegram Premium Payme orqali sotib olish",
    excerpt:
      "6 oylik Telegram Premium Payme ilovasi orqali 235,000 so'mga (oyiga 39,167) — bot karta va summani ko'rsatadi, Payme'dan o'tkazasiz, 5 daqiqada faollashish. 1 oylikka nisbatan 33% arzon.",
    category: "Qo'llanma",
    date: "2026-05-12",
  },
  {
    slug: "6-oylik-telegram-premium-sovga-qilish",
    title: "6 oylik Telegram Premium sovg'a qilish — yaqinlaringiz uchun",
    excerpt:
      "6 oylik Telegram Premium gift — 235,000 so'mga (oyiga 39,167), Uzcard/Humo/Click bilan. @PremiumSendBot da username kiritib yuboring. 180 kun davomida har kuni eslatuvchi sovg'a.",
    category: "Qo'llanma",
    date: "2026-05-11",
  },
  {
    slug: "6-oylik-telegram-premium-click-orqali",
    title: "6 oylik Telegram Premium Click orqali sotib olish",
    excerpt:
      "6 oylik Telegram Premium Click ilovasi orqali 235,000 so'mga (oyiga 39,167) — bot karta va summani ko'rsatadi, Click'dan o'tkazasiz, 5 daqiqada faollashish. 1 oylikka nisbatan 33% arzon.",
    category: "Qo'llanma",
    date: "2026-05-09",
  },
  {
    slug: "nega-telegram-premium-app-store-play-market-qimmat",
    title: "Nega Telegram Premium App Store va Play Market'da qimmatroq",
    excerpt:
      "App Store'da 1 oylik $4.99 (~66 000 so'm), Play'da ~64 000, reseller'da 59 000 so'm. 12 oylikda farq 25-28% — Apple/Google 30% komissiyasi $4.99 narxiga zaten kiritilgan, bulk gift mexanizmi sabab.",
    category: "Savol-javob",
    date: "2026-05-08",
  },
  {
    slug: "premiumsend-vs-boshqa-resellerlar",
    title: "PremiumSend vs boshqa Telegram Premium reseller'lar — ob'ektiv mezonlari",
    excerpt:
      "Reseller'larni 8 universal mezon bo'yicha taqqoslash: sayt, oferta, to'lov tizimi, halollik. Raqobatchilarsiz, ob'ektiv qo'llanma — eng arzon doim eng yaxshi emas.",
    category: "Taqqoslash",
    date: "2026-05-07",
  },
  {
    slug: "telegram-stars-click-payme-orqali-somda",
    title: "Telegram Stars Click va kartaga o'tkazma orqali so'mda",
    excerpt:
      "Stars'ni Click ilovasi yoki kartaga o'tkazma orqali so'mda sotib olish — StarsJoy.uz da 50 Stars 12 000 so'mdan, mahalliy karta bilan, valyuta konvertatsiyasiz.",
    category: "Qo'llanma",
    date: "2026-05-07",
  },
  {
    slug: "6-oylik-telegram-premium-humo-orqali",
    title: "6 oylik Telegram Premium Humo orqali sotib olish",
    excerpt:
      "6 oylik Telegram Premium Humo karta orqali 235,000 so'mga — @PremiumSendBot karta va summani ko'rsatadi, Humo'dan o'tkazasiz, oyiga 39 167 so'm. 1 oylikka 33% arzon.",
    category: "Qo'llanma",
    date: "2026-05-07",
  },
  {
    slug: "telegram-premium-stikerlari-emoji-reaksiyalari",
    title: "Telegram Premium stikerlari, animatsiyali emoji va premium reaksiyalar",
    excerpt:
      "Premium stikerlar (1000+ paket), animatsiyali emoji va premium reaksiyalar — Premium foydalanuvchilari uchun maxsus funksiyalar. Qanday ishlaydi va qaysi qurilmalarda mavjud — to'liq qo'llanma.",
    category: "Qo'llanma",
    date: "2026-05-06",
  },
  {
    slug: "telegram-stars-vs-telegram-premium",
    title: "Telegram Stars vs Telegram Premium: qaysini tanlash kerak",
    excerpt:
      "Stars va Premium farqi: Stars — bot va kanallar uchun ichki valyuta, Premium — oylik obuna (4 GB fayl, 1000 kanal). Qaysi vaziyatda qaysi biri kerak — to'liq taqqoslash.",
    category: "Taqqoslash",
    date: "2026-05-05",
  },
  {
    slug: "3-oylik-telegram-premium-payme-orqali",
    title: "3 oylik Telegram Premium Payme orqali sotib olish",
    excerpt:
      "3 oylik Telegram Premiumni Payme ilovasi bilan 175,000 so'mga tezda to'lab oling — @PremiumSendBot orqali, PIN/Face ID bilan 1-2 daqiqada, 5 daqiqada faollashish.",
    category: "Qo'llanma",
    date: "2026-05-05",
  },
  {
    slug: "telegram-premium-payme-orqali",
    title: "Telegram Premium Payme orqali sotib olish — qadamma-qadam qo'llanma",
    excerpt:
      "Telegram Premium Payme orqali — 59,000 so'mdan 425,000 so'mgacha. Payme ilovasida 1-2 daqiqada to'lov, 5 daqiqada faollashish. Karta raqami yozish kerak emas — pillar qo'llanma.",
    category: "Qo'llanma",
    date: "2026-05-05",
  },
  {
    slug: "telegram-stars-ozbekistondan-sotib-olish",
    title: "Telegram Stars O'zbekistondan qanday sotib olinadi",
    excerpt:
      "Telegram Stars O'zbekistondan so'mda — StarsJoy.uz orqali 50 Stars 12 000 so'mdan, Click va bank kartasi bilan. App Store'dan 17% arzon, valyuta konvertatsiyasiz. Qadamma-qadam.",
    category: "Qo'llanma",
    date: "2026-05-05",
  },
  {
    slug: "telegram-premium-xavfsiz-aldovdan-saqlanish",
    title: "Telegram Premium O'zbekistondan sotib olish xavfsizmi? Aldovdan saqlanish",
    excerpt:
      "Aldovchi botlarning 7 ta tipik sxemasi, ishonchli reseller'ni 30 soniyada aniqlash uchun 8 ta belgi va karta ma'lumotlari qayerda saqlanishi. Pul yo'qotmaslik uchun amaliy qo'llanma.",
    category: "Savol-javob",
    date: "2026-05-05",
  },
  {
    slug: "3-oylik-telegram-premium-click-orqali",
    title: "3 oylik Telegram Premium Click orqali sotib olish",
    excerpt:
      "3 oylik Telegram Premiumni Click ilovasi bilan 175,000 so'mga tezda to'lab oling — @PremiumSendBot orqali, PIN/Face ID bilan 1-2 daqiqada, 5 daqiqada faollashish.",
    category: "Qo'llanma",
    date: "2026-05-03",
  },
  {
    slug: "telegram-premium-click-orqali",
    title: "Telegram Premium Click orqali sotib olish — eng tezkor mahalliy usul",
    excerpt:
      "Telegram Premium Click orqali — 59,000 so'mdan 425,000 so'mgacha. Click ilovasida 1-2 daqiqada to'lov, 5 daqiqada faollashish. Karta raqami yozish kerak emas — pillar qo'llanma.",
    category: "Qo'llanma",
    date: "2026-05-03",
  },
  {
    slug: "3-oylik-telegram-premium-humo-orqali",
    title: "3 oylik Telegram Premium Humo orqali sotib olish",
    excerpt:
      "3 oylik Telegram Premiumni Humo karta bilan 175,000 so'mga so'mda to'lab oling — @PremiumSendBot orqali, 5 daqiqada faollashish. Telegramda Humo va 3 oylik tarif ikkalasi ham yo'q — bu yerda mavjud.",
    category: "Qo'llanma",
    date: "2026-05-03",
  },
  {
    slug: "telegram-premium-vs-oddiy-telegram",
    title: "Telegram Premium vs oddiy Telegram: 15 ta asosiy farq",
    excerpt:
      "Premium oddiy Telegramdan nimasi bilan farq qiladi? 15 ta aniq farq jadvalda: fayl 4 GB, 1000 kanal, premium stikerlar, voice→matn va boshqalar. Premium kerakmi? Halol javob.",
    category: "Taqqoslash",
    date: "2026-05-02",
  },
  {
    slug: "telegram-premium-humo-orqali",
    title: "Telegram Premium Humo karta orqali sotib olish — qadamma-qadam qo'llanma",
    excerpt:
      "Telegram Premium Humo karta orqali — 59,000 so'mdan 425,000 so'mgacha. @PremiumSendBot da Humo bilan so'mda to'lov, 5 daqiqada faollashish. Bosqichma-bosqich qo'llanma va xavfsizlik.",
    category: "Qo'llanma",
    date: "2026-05-02",
  },
  {
    slug: "telegram-premium-qachon-faollashadi",
    title: "Telegram Premium qachon faollashadi va muddat qanday hisoblanadi",
    excerpt:
      "Premium to'lovdan keyin 2-5 daqiqada faollashadi. Muddat kalendar oy bo'yicha (30 kun emas), faollashish kunidan boshlanadi. Yangilash, sovg'a, fevral muammosi va texnik kechikishlar uchun yechimlar.",
    category: "Savol-javob",
    date: "2026-05-01",
  },
  {
    slug: "telegram-stars-nima",
    title: "Telegram Stars nima va qayerda ishlatiladi",
    excerpt:
      "Telegram Stars — Telegramning rasmiy ichki valyutasi (2024-yildan). 12+ amaliy holat: stikerlar, donate, AI botlar, Premium sovg'a. O'zbekistondan 50 Stars 12 000 so'mdan, StarsJoy.uz orqali so'mda to'lov.",
    category: "Qo'llanma",
    date: "2026-04-30",
  },
  {
    slug: "telegram-premium-narxlari",
    title: "Telegram Premium narxlari 2026: 1, 3, 6, 12 oylik tariflar taqqoslash",
    excerpt:
      "Telegram Premium narxlari O'zbekistonda: 1 oylik — 59,000 so'm, 3 oylik — 175,000 so'm, 6 oylik — 235,000 so'm, 12 oylik — 425,000 so'm. Eng tejamkor tarif tahlili va to'lov usullari.",
    category: "Taqqoslash",
    date: "2026-04-30",
  },
  {
    slug: "telegram-premium-eng-arzon-qayerdan-sotib-olish",
    title: "Telegram Premium eng arzon qayerdan sotib olish",
    excerpt:
      "Telegram Premium eng arzon narxda — Premium Send da oyiga 35 417 so'mdan boshlab. App Store, Fragment va oraliq botlar bilan taqqoslash. Yashirin komissiyalarsiz, so'mda to'lov.",
    category: "Taqqoslash",
    date: "2026-04-29",
  },
  {
    slug: "telegram-premium-nima",
    title: "Telegram Premium nima va 2026-yilda qanday imkoniyatlar beradi",
    excerpt:
      "Telegram Premium — bu Telegramning pullik versiyasi. 4 GB fayl yuklash, reklamasiz tajriba, 1000 kanal va 20+ funksiya. O'zbekistonda 59,000 so'mdan, @PremiumSendBot orqali so'mda to'lov. To'liq qo'llanma.",
    category: "Qo'llanma",
    date: "2026-04-29",
  },
  {
    slug: "12-oylik-telegram-premium-uzcard-orqali",
    title: "12 oylik Telegram Premium Uzcard orqali",
    excerpt:
      "12 oylik Telegram Premiumni Uzcard bilan so'mda to'lab faollashtiring — @PremiumSendBot orqali 425,000 so'mga, 1 oylikdan 39% arzon. Oyiga atigi 35,417 so'm.",
    category: "Qo'llanma",
    date: "2026-04-17",
  },
  {
    slug: "6-oylik-telegram-premium-uzcard-orqali",
    title: "6 oylik Telegram Premium Uzcard orqali",
    excerpt:
      "6 oylik Telegram Premiumni Uzcard bilan so'mda to'lab faollashtiring — @PremiumSendBot orqali 235,000 so'mga, 1 oylikdan 33% arzon. Telegramda 6 oylik paket yo'q.",
    category: "Qo'llanma",
    date: "2026-04-17",
  },
  {
    slug: "3-oylik-telegram-premium-uzcard-orqali",
    title: "3 oylik Telegram Premium Uzcard orqali",
    excerpt:
      "3 oylik Telegram Premiumni Uzcard bilan so'mda to'lab faollashtiring — @PremiumSendBot orqali 175,000 so'mga, qo'shimcha komissiyasiz. Uzcard P2P, Click va Payme variantlari.",
    category: "Qo'llanma",
    date: "2026-04-17",
  },
  {
    slug: "12-oylik-telegram-premium-sovga-qilish",
    title: "12 oylik Telegram Premium sovg'a qilish",
    excerpt:
      "Istalgan odamga 12 oylik Telegram Premium sovg'a qiling — @PremiumSendBot orqali 425,000 so'mga. Uzcard, Humo bilan so'mda to'lov. Username kiritasiz — Premium faollashadi.",
    category: "Maslahat",
    date: "2026-04-08",
  },
  {
    slug: "6-oylik-telegram-premium-olishning-eng-yaxshi-usuli",
    title: "6 oylik Telegram Premium olishning eng yaxshi usuli",
    excerpt:
      "Barcha usullar taqqoslandi: rasmiy ilova, Fragment, tanish orqali va reseller bot. O'zbekistonda 6 oylik Telegram Premium olishning eng tez, eng arzon va eng ishonchli usuli — @PremiumSendBot.",
    category: "Taqqoslash",
    date: "2026-04-08",
  },
  {
    slug: "3-oylik-telegram-premium-sovga-qilish",
    title: "3 oylik Telegram Premium sovg'a qilish",
    excerpt:
      "Do'stingiz yoki yaqiningizga 3 oylik Telegram Premium sovg'a qiling — @PremiumSendBot orqali 175,000 so'mga, Uzcard va Humo bilan. Username kiriting, to'lang — gift avtomatik faollashadi.",
    category: "Qo'llanma",
    date: "2026-04-08",
  },
  {
    slug: "1-oylik-telegram-premium-uzcard-orqali-sotib-olish",
    title: "1 oylik Telegram Premium Uzcard orqali sotib olish",
    excerpt:
      "Telegram Premium Uzcard bilan to'lab bo'ladimi? Ha — @premiumsend_admin orqali Uzcard kartasi bilan 59,000 so'mga Premium faollashtiring. Bosqichma-bosqich yo'riqnoma va xavfsizlik haqida.",
    category: "Qo'llanma",
    date: "2026-04-08",
  },
  {
    slug: "1-oylik-telegram-premium-sotib-olish",
    title: "1 oylik Telegram Premium qanday sotib olinadi — qadamma-qadam yo'riqnoma",
    excerpt:
      "1 oylik Premiumni so'mda olish bo'yicha 7 qadamli qo'llanma. PremiumBot Uzcard/Humo qabul qilmayotganda nima qilish kerak, @premiumsend_admin orqali to'lov bosqichlari va 5 daqiqada faollashish.",
    category: "Qo'llanma",
    date: "2026-04-07",
  },
  {
    slug: "3-oylik-telegram-premium-sotib-olish",
    title: "3 oylik Telegram Premium qanday sotib olinadi — qadamma-qadam yo'riqnoma",
    excerpt:
      "3 oylik Premiumni so'mda olish bo'yicha bosqichma-bosqich qo'llanma. Telegram'ning o'zida 3 oylik paket nima uchun yo'q, @PremiumSendBot orqali to'lov va faollashish jarayoni.",
    category: "Qo'llanma",
    date: "2026-04-02",
  },
  {
    slug: "6-oylik-telegram-premium-sotib-olish",
    title: "6 oylik Telegram Premium qanday sotib olinadi — qadamma-qadam yo'riqnoma",
    excerpt:
      "6 oylik Premiumni so'mda olish bo'yicha bosqichma-bosqich qo'llanma. Telegram'da nima uchun 6 oylik paket yo'q, @PremiumSendBot orqali to'lov va oyiga 39 167 so'm hisoblash.",
    category: "Qo'llanma",
    date: "2026-04-02",
  },
  {
    slug: "12-oylik-telegram-premium-sotib-olish",
    title: "12 oylik Telegram Premium qanday sotib olinadi — qadamma-qadam yo'riqnoma",
    excerpt:
      "12 oylik (1 yillik) Premiumni so'mda olish bo'yicha qadamma-qadam qo'llanma. Telegram'da xorijiy karta talab qilishi va @PremiumSendBot yechimi, oyiga 35 417 so'm.",
    category: "Qo'llanma",
    date: "2026-04-02",
  },
];

const categoryColors: Record<string, string> = {
  "Qo'llanma": "bg-primary-light text-primary",
  Narxlar: "bg-green-100 text-green-700",
  Taqqoslash: "bg-purple-100 text-purple-700",
  Maslahat: "bg-gold-light text-amber-700",
  Yangiliklar: "bg-blue-100 text-blue-700",
  "Savol-javob": "bg-blue-100 text-blue-700",
};

export default function ArticlesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Bosh sahifa", item: "https://premiumsend.uz" },
      { "@type": "ListItem", position: 2, name: "Maqolalar", item: "https://premiumsend.uz/maqolalar" },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Telegram Premium haqida maqolalar",
    description:
      "Telegram Premium imkoniyatlari, narxlari va O'zbekistonda sotib olish bo'yicha qo'llanmalar",
    numberOfItems: articles.length,
    itemListElement: articles.map((article, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://premiumsend.uz/maqolalar/${article.slug}`,
      name: article.title,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-muted">
        <Link href="/" className="hover:text-primary">Bosh sahifa</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">Maqolalar</span>
      </nav>

      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-80 h-80 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Telegram Premium haqida maqolalar
          </h1>
          <p className="text-xl text-white/80">
            Telegram Premium imkoniyatlari, narxlari va sotib olish bo&apos;yicha qo&apos;llanmalar
          </p>
        </div>
        <AnimatedWave />
      </section>

      {/* Articles */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/maqolalar/${article.slug}`}
                className="bg-white rounded-2xl p-8 border border-card-border shadow-sm card-hover block"
              >
                <article>
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        categoryColors[article.category] || "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {article.category}
                    </span>
                    <time className="text-xs text-muted" dateTime={article.date}>
                      {article.date}
                    </time>
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-3 leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <span className="text-primary text-sm font-semibold">
                    Batafsil o&apos;qish →
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-20 bg-section-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-foreground mb-8">
            Telegram Premium <span className="gradient-text">sotib olish</span>
          </h2>
          <p className="text-muted mb-10 max-w-2xl mx-auto">
            Maqolalarni o&apos;qib chiqdingizmi? Endi Telegram Premium sotib oling — 59,000 so&apos;mdan boshlab, so&apos;mda to&apos;lov.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            <Link href="/1-oylik" className="px-6 py-3 rounded-xl bg-white border border-card-border shadow-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-all">
              1 oylik — 59,000 so&apos;m
            </Link>
            <Link href="/3-oylik" className="px-6 py-3 rounded-xl bg-white border border-card-border shadow-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-all">
              3 oylik — 175,000 so&apos;m
            </Link>
            <Link href="/6-oylik" className="px-6 py-3 rounded-xl hero-gradient text-white font-semibold shadow-lg shadow-primary/25">
              6 oylik — 235,000 so&apos;m
            </Link>
            <Link href="/12-oylik" className="px-6 py-3 rounded-xl bg-white border border-card-border shadow-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-all">
              12 oylik — 425,000 so&apos;m
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-gradient rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-2xl" />
            </div>
            <div className="relative">
              <h2 className="text-3xl font-extrabold text-white mb-4">
                Telegram Premium sotib olishga tayyormisiz?
              </h2>
              <p className="text-white/80 mb-8">
                59,000 so&apos;mdan boshlab. So&apos;mda to&apos;lab, bir necha daqiqada aktivlashtiring.
              </p>
              <Link href="https://t.me/premiumsendbot" target="_blank" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-2xl transition-all text-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>
                Telegram orqali sotib olish
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
