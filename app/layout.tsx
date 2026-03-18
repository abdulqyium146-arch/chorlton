import type { Metadata } from 'next'
import { Inter, Geist } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MobileCallButton } from '@/components/cta/MobileCallButton'
import { generateLocalBusinessSchema, generateImageObjectSchema } from '@/lib/schema'
import '@/styles/globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://chorltonlocksmiths.com'),
  title: {
    default: 'Emergency Locksmith Chorlton Manchester | 24/7 Fast Response | Chorlton Locksmiths',
    template: '%s | Chorlton Locksmiths',
  },
  description:
    'Trusted emergency locksmith in Chorlton, Manchester. 30–60 min response, 24/7 including weekends & bank holidays. Lock repair, auto locksmith, uPVC specialists. Fully insured. Call 07388 789881.',
  keywords: [
    'locksmith manchester',
    'emergency locksmith manchester',
    'locksmith chorlton',
    '24/7 locksmith manchester',
    'auto locksmith manchester',
    'car lockout manchester',
    'lock repair chorlton',
    'upvc door lock repair manchester',
    'residential locksmith manchester',
    'commercial locksmith manchester',
    'locksmith didsbury',
    'locksmith stretford',
    'locksmith sale',
    'locked out manchester',
    'cheap locksmith manchester',
  ],
  openGraph: {
    title: 'Emergency Locksmith Chorlton Manchester | 24/7 | Chorlton Locksmiths',
    description:
      'Trusted 24/7 emergency locksmith in Chorlton & Manchester. 30–60 min response, lock repair, auto locksmith, uPVC specialists. Fully insured. Call 07388 789881.',
    url: 'https://chorltonlocksmiths.com',
    siteName: 'Chorlton Locksmiths',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: '/chorlton-locksmith-hero-main.webp',
        width: 1200,
        height: 630,
        alt: 'Chorlton Locksmiths — Emergency Locksmith in Manchester available 24/7',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emergency Locksmith Chorlton Manchester | 24/7 Fast Response',
    description: 'Trusted 24/7 emergency locksmith in Chorlton & Manchester. Call 07388 789881 — 30–60 min response guaranteed.',
    images: ['/chorlton-locksmith-hero-main.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://chorltonlocksmiths.com',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? '',
  },
}

const localBusinessSchema = generateLocalBusinessSchema()
const imageObjectSchema = generateImageObjectSchema()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${geist.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0F172A" />

        {/* iOS / PWA meta */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Chorlton Locksmiths" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />

        {/* Geo meta tags — local SEO signals for Bing, directories & aggregators */}
        <meta name="geo.region" content="GB-MAN" />
        <meta name="geo.placename" content="Chorlton-cum-Hardy, Manchester" />
        <meta name="geo.position" content="53.4404;-2.2703" />
        <meta name="ICBM" content="53.4404, -2.2703" />

        {/* Open Graph geo extension */}
        <meta property="place:location:latitude" content="53.4404" />
        <meta property="place:location:longitude" content="-2.2703" />
        <meta property="business:contact_data:street_address" content="615b Wilbraham Rd" />
        <meta property="business:contact_data:locality" content="Chorlton-cum-Hardy" />
        <meta property="business:contact_data:region" content="Greater Manchester" />
        <meta property="business:contact_data:postal_code" content="M21 9AN" />
        <meta property="business:contact_data:country_name" content="United Kingdom" />
        <meta property="business:contact_data:phone_number" content="+447388789881" />

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(imageObjectSchema) }}
        />

        {/* Google Analytics — only loads when GA ID is configured */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}');`,
              }}
            />
          </>
        )}
      </head>

      <body className="bg-white text-slate-950 antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <MobileCallButton />
      </body>
    </html>
  )
}
