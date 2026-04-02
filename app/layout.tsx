import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
    default:
      "Telegram Premium sotib olish — so'mda | Premium Send",
    template: "%s | Premium Send",
  },
  description:
    "Telegram Premium sotib olish O'zbekistonda so'mda. 3 oylik 175,000 so'm, 6 oylik 235,000 so'm, 12 oylik 425,000 so'm. UzCard, Humo, Visa orqali to'lov. Tez aktivatsiya, ishonchli xizmat.",
  keywords: [
    "Telegram Premium sotib olish",
    "Telegram Premium",
    "Telegram Premium narxi",
    "Telegram Premium Uzbekistan",
    "Telegram Premium O'zbekiston",
    "Telegram Premium so'mda",
    "Telegram Premium so'mda sotib olish",
    "Telegram Premium arzon",
    "Telegram Premium obuna",
    "Premium Send",
    "Telegram Premium 3 oylik",
    "Telegram Premium 6 oylik",
    "Telegram Premium 12 oylik",
    "Telegram Premium UzCard",
    "Telegram Premium Humo",
    "Telegram obuna sotib olish",
  ],
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    url: "https://premiumsend.uz",
    siteName: "Premium Send",
    title: "Telegram Premium sotib olish — so'mda to'lab oling | Premium Send",
    description:
      "Telegram Premium obunasini O'zbekiston so'mida sotib oling. 3, 6, 12 oylik paketlar. UzCard, Humo, Visa orqali to'lov.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Premium Send — Telegram Premium sotib olish O'zbekistonda so'mda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Telegram Premium sotib olish — so'mda | Premium Send",
    description:
      "Telegram Premium obunasini O'zbekiston so'mida sotib oling. 175,000 so'mdan boshlab.",
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
    canonical: "https://premiumsend.uz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Premium Send",
    url: "https://premiumsend.uz",
    description:
      "O'zbekistonda Telegram Premium obunasini so'mda sotib olish xizmati",
    contactPoint: {
      "@type": "ContactPoint",
      url: "https://t.me/premiumsendbot",
      contactType: "customer service",
      availableLanguage: "Uzbek",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Premium Send",
    url: "https://premiumsend.uz",
    description: "Telegram Premium sotib olish — O'zbekiston so'mida",
    inLanguage: "uz",
  };

  return (
    <html
      lang="uz"
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
