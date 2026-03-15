import type { Metadata } from 'next'
import { Inter, Geist } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MobileCallButton } from '@/components/cta/MobileCallButton'
import { generateLocalBusinessSchema } from '@/lib/schema'
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
  metadataBase: new URL('https://chorltonlocksmiths.co.uk'),
  title: {
    default: 'Emergency Locksmith in Chorlton Manchester | Chorlton Locksmiths',
    template: '%s | Chorlton Locksmiths',
  },
  description:
    'Fast, reliable locksmith services in Chorlton, Manchester. Available 24/7 for emergency lockouts, lock repair, auto locksmith, and residential/commercial services. Call 07388 789881.',
  keywords: [
    'locksmith manchester',
    'emergency locksmith',
    'chorlton locksmith',
    'auto locksmith manchester',
    'car lockout manchester',
    'lock repair manchester',
    'residential locksmith',
    'commercial locksmith',
    '24/7 locksmith',
  ],
  openGraph: {
    title: 'Emergency Locksmith in Chorlton Manchester | Chorlton Locksmiths',
    description:
      'Fast, reliable locksmith services in Manchester. 24/7 emergency, auto, residential & commercial. Call 07388 789881.',
    url: 'https://chorltonlocksmiths.co.uk',
    siteName: 'Chorlton Locksmiths',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Chorlton Locksmiths — Emergency Locksmith Manchester',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chorlton Locksmiths — Emergency Locksmith Manchester',
    description: 'Emergency locksmith services available 24/7 across Greater Manchester. Call 07388 789881.',
    images: ['/og-image.jpg'],
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
    canonical: 'https://chorltonlocksmiths.co.uk',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? '',
  },
}

const localBusinessSchema = generateLocalBusinessSchema()

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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0F172A" />

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
