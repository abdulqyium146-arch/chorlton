import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        // Allow Google Images to crawl all images
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
    ],
    sitemap: 'https://chorltonlocksmiths.com/sitemap.xml',
    host: 'https://chorltonlocksmiths.com',
  }
}
