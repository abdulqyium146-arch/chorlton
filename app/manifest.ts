import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Chorlton Locksmiths',
    short_name: 'Chorlton Locksmiths',
    description: '24/7 Emergency Locksmith in Manchester — fast response, all areas',
    start_url: '/',
    display: 'standalone',
    background_color: '#0F172A',
    theme_color: '#F59E0B',
    orientation: 'portrait',
    categories: ['business', 'utilities'],
    icons: [
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
