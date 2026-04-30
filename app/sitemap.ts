import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://premiumsend.uz";

  const uzPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/1-oylik`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/3-oylik`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/6-oylik`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/12-oylik`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/oferta`,
      lastModified: new Date("2026-04-05"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/maqolalar`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/maqolalar/telegram-premium-narxlari`,
      lastModified: new Date("2026-04-30"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/maqolalar/telegram-stars-nima`,
      lastModified: new Date("2026-04-30"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/maqolalar/telegram-premium-nima`,
      lastModified: new Date("2026-04-29"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/maqolalar/telegram-premium-eng-arzon-qayerdan-sotib-olish`,
      lastModified: new Date("2026-04-29"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/maqolalar/1-oylik-telegram-premium-uzcard-orqali-sotib-olish`,
      lastModified: new Date("2026-04-08"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/maqolalar/1-oylik-telegram-premium-sotib-olish`,
      lastModified: new Date("2026-04-07"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/maqolalar/3-oylik-telegram-premium-sotib-olish`,
      lastModified: new Date("2026-04-02"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/maqolalar/6-oylik-telegram-premium-sotib-olish`,
      lastModified: new Date("2026-04-02"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/maqolalar/12-oylik-telegram-premium-sotib-olish`,
      lastModified: new Date("2026-04-02"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  const ruPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/ru`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ru/1-oylik`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ru/3-oylik`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ru/6-oylik`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ru/12-oylik`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ru/oferta`,
      lastModified: new Date("2026-04-05"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/ru/maqolalar`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ru/maqolalar/telegram-premium-narxlari`,
      lastModified: new Date("2026-04-30"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/ru/maqolalar/telegram-premium-eng-arzon-qayerdan-sotib-olish`,
      lastModified: new Date("2026-04-29"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ru/maqolalar/telegram-stars-nima`,
      lastModified: new Date("2026-04-30"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ru/maqolalar/telegram-premium-nima`,
      lastModified: new Date("2026-04-29"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/ru/maqolalar/1-oylik-telegram-premium-uzcard-orqali-sotib-olish`,
      lastModified: new Date("2026-04-08"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/ru/maqolalar/1-oylik-telegram-premium-sotib-olish`,
      lastModified: new Date("2026-04-07"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/ru/maqolalar/3-oylik-telegram-premium-sotib-olish`,
      lastModified: new Date("2026-04-07"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/ru/maqolalar/6-oylik-telegram-premium-sotib-olish`,
      lastModified: new Date("2026-04-07"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/ru/maqolalar/12-oylik-telegram-premium-sotib-olish`,
      lastModified: new Date("2026-04-07"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
  ];

  return [...uzPages, ...ruPages];
}
