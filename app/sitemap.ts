import type { MetadataRoute } from 'next'
import { SERVICES } from '@/lib/theme'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://chorltonlocksmiths.com'
  const lastModified = new Date('2026-03-22')

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
      images: [`${baseUrl}/chorlton-locksmith-hero-main.webp`],
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/areas-we-cover`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/partners`,
      lastModified: new Date('2026-03-30'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]

  // Dynamic service pages (/services/*)
  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Chorlton auto locksmith cluster — pillar + 16 spokes
  const chorltonAutoPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/auto-locksmith-chorlton`, priority: 0.95 },
    { url: `${baseUrl}/car-key-replacement-chorlton`, priority: 0.85 },
    { url: `${baseUrl}/car-lockout-chorlton`, priority: 0.85 },
    { url: `${baseUrl}/lost-car-keys-chorlton`, priority: 0.85 },
    { url: `${baseUrl}/car-key-programming-chorlton`, priority: 0.85 },
    { url: `${baseUrl}/car-key-fob-repair-chorlton`, priority: 0.8 },
    { url: `${baseUrl}/ignition-repair-chorlton`, priority: 0.8 },
    { url: `${baseUrl}/ignition-replacement-chorlton`, priority: 0.8 },
    { url: `${baseUrl}/key-stuck-in-ignition-chorlton`, priority: 0.8 },
    { url: `${baseUrl}/van-locksmith-chorlton`, priority: 0.85 },
    { url: `${baseUrl}/van-key-replacement-chorlton`, priority: 0.8 },
    { url: `${baseUrl}/broken-car-key-chorlton`, priority: 0.8 },
    { url: `${baseUrl}/car-key-repair-chorlton`, priority: 0.8 },
    { url: `${baseUrl}/spare-car-key-chorlton`, priority: 0.8 },
    { url: `${baseUrl}/24-hour-auto-locksmith-chorlton`, priority: 0.85 },
    { url: `${baseUrl}/cheap-auto-locksmith-chorlton`, priority: 0.8 },
    { url: `${baseUrl}/mobile-auto-locksmith-chorlton`, priority: 0.8 },
    // Didsbury location pages
    { url: `${baseUrl}/auto-locksmith-didsbury`, priority: 0.9 },
  ].map((page) => ({
    ...page,
    lastModified,
    changeFrequency: 'monthly' as const,
  }))

  return [...staticPages, ...servicePages, ...chorltonAutoPages]
}
