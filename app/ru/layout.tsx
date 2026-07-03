import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://premiumsend.uz"),
  title: {
    default: "Купить Telegram Premium в Узбекистане — цена в сумах | Premium Send",
    template: "%s | Premium Send",
  },
  description:
    "Купить Telegram Premium в Узбекистане за сумы. 3 месяца 175 000 сум, 6 месяцев 235 000 сум, 12 месяцев 425 000 сум. Оплата UzCard, Humo. Быстрая активация, надёжный сервис.",
  keywords: [
    "купить Telegram Premium",
    "Telegram Premium цена",
    "Telegram Premium Узбекистан",
    "Telegram Premium в сумах",
    "Telegram Premium недорого",
    "Telegram Premium подписка",
    "Premium Send",
    "Telegram Premium 3 месяца",
    "Telegram Premium 6 месяцев",
    "Telegram Premium 12 месяцев",
    "Telegram Premium UzCard",
    "Telegram Premium Humo",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://premiumsend.uz/ru",
    siteName: "Premium Send",
    title: "Купить Telegram Premium в Узбекистане — цена в сумах | Premium Send",
    description:
      "Купите подписку Telegram Premium в узбекских сумах. 3, 6, 12 месяцев. Оплата UzCard, Humo.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Premium Send — купить Telegram Premium в Узбекистане в сумах",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Купить Telegram Premium в Узбекистане — цена в сумах | Premium Send",
    description: "Купите Telegram Premium в узбекских сумах. От 175 000 сум.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://premiumsend.uz/ru",
  },
};

export default function RuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Premium Send",
    url: "https://premiumsend.uz",
    description: "Сервис покупки подписки Telegram Premium в узбекских сумах",
    contactPoint: {
      "@type": "ContactPoint",
      url: "https://t.me/premiumsendbot",
      contactType: "customer service",
      availableLanguage: ["Uzbek", "Russian"],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Premium Send",
    url: "https://premiumsend.uz",
    description: "Купить Telegram Premium — в узбекских сумах",
    inLanguage: ["uz", "ru"],
  };

  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header locale="ru" />
        <main className="flex-1">{children}</main>
        <Footer locale="ru" />
      </body>
    </html>
  );
}
