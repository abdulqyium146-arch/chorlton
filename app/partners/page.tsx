import type { Metadata } from 'next'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema'
import { Car, Key, MapPin, ShieldCheck, Star, ExternalLink, Phone, Wrench, Clock } from 'lucide-react'

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Car Keys Stockport — Trusted Partner | Chorlton Locksmiths',
  description:
    'Chorlton Locksmiths partners with Car Keys in Stockport — specialists in car key cutting, transponder programming, and auto locksmith services across Stockport and Greater Manchester.',
  keywords: [
    'car keys Stockport',
    'car key specialist Stockport',
    'auto locksmith Stockport',
    'car key programming Stockport',
    'car key replacement Manchester',
    'lost car keys Stockport',
    'transponder key Stockport',
    'car locksmith Stockport',
    'mobile car key Stockport',
    'car key cutting Manchester Stockport',
    'auto locksmith Manchester and Stockport',
    'trusted locksmith partners Manchester',
  ],
  openGraph: {
    title: 'Car Keys Stockport — Trusted Auto Locksmith Partner',
    description:
      'Chorlton Locksmiths partners with Car Keys in Stockport — mobile specialists in car key cutting, transponder programming & auto locksmith across Stockport and Manchester.',
    url: 'https://chorltonlocksmiths.com/partners',
    siteName: 'Chorlton Locksmiths',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: 'https://chorltonlocksmiths.com/chorlton-locksmith-hero-main.webp',
        width: 1200,
        height: 630,
        alt: 'Car Keys in Stockport — Trusted Partner of Chorlton Locksmiths',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Keys Stockport — Trusted Auto Locksmith Partner',
    description:
      'Chorlton Locksmiths partners with Car Keys in Stockport for specialist car key cutting and programming across Stockport and Greater Manchester.',
    images: ['https://chorltonlocksmiths.com/chorlton-locksmith-hero-main.webp'],
  },
  alternates: {
    canonical: 'https://chorltonlocksmiths.com/partners',
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
}

// ─── Structured Data ─────────────────────────────────────────────────────────

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Partners', url: '/partners' },
])

// Partner organisation schema
const partnerSchema = {
  '@context': 'https://schema.org',
  '@type': ['AutomotiveBusiness', 'LocalBusiness'],
  '@id': 'https://carkeysinstockport.co.uk/#business',
  name: 'Car Keys in Stockport',
  description:
    'Specialist car key cutting, programming, and auto locksmith services covering Stockport and Greater Manchester. Mobile service available. Transponder keys, remote fobs, lost car keys, and broken key extraction.',
  url: 'https://carkeysinstockport.co.uk/',
  areaServed: [
    { '@type': 'City', name: 'Stockport' },
    { '@type': 'City', name: 'Manchester' },
    { '@type': 'City', name: 'Cheadle' },
    { '@type': 'City', name: 'Didsbury' },
    { '@type': 'City', name: 'Hazel Grove' },
    { '@type': 'City', name: 'Bramhall' },
  ],
  knowsAbout: [
    'Car Key Cutting',
    'Transponder Key Programming',
    'Remote Fob Replacement',
    'Lost Car Keys',
    'Broken Key Extraction',
    'Auto Locksmith',
    'Vehicle Entry',
  ],
}

// Partnership/relationship schema
const partnershipSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://chorltonlocksmiths.com/partners#webpage',
  url: 'https://chorltonlocksmiths.com/partners',
  name: 'Trusted Partners — Car Keys Stockport | Chorlton Locksmiths',
  description:
    'Chorlton Locksmiths trusted partnership with Car Keys in Stockport — specialists in car key cutting, programming and auto locksmith services across Manchester and Stockport.',
  inLanguage: 'en-GB',
  datePublished: '2026-03-20',
  dateModified: '2026-03-20',
  publisher: {
    '@type': 'Organization',
    '@id': 'https://chorltonlocksmiths.com/#business',
    name: 'Chorlton Locksmiths Limited',
    url: 'https://chorltonlocksmiths.com',
  },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2', '.speakable'],
  },
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://chorltonlocksmiths.com/#website',
    url: 'https://chorltonlocksmiths.com',
    name: 'Chorlton Locksmiths',
    description: '24/7 Emergency Locksmith in Chorlton and Manchester',
    publisher: { '@id': 'https://chorltonlocksmiths.com/#business' },
  },
  about: {
    '@type': 'ItemList',
    name: 'Trusted Auto Locksmith Partners — Car Keys Stockport & Manchester',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Car Keys in Stockport',
        url: 'https://carkeysinstockport.co.uk/',
        description: 'Leading specialist for car key cutting, transponder programming, and auto locksmith services in Stockport and Greater Manchester',
      },
    ],
  },
  mentions: {
    '@type': 'LocalBusiness',
    name: 'Car Keys in Stockport',
    url: 'https://carkeysinstockport.co.uk/',
    description: 'Specialist car key cutting and programming service covering Stockport and Greater Manchester',
    areaServed: [
      { '@type': 'City', name: 'Stockport' },
      { '@type': 'City', name: 'Manchester' },
    ],
  },
}

const faqs = [
  {
    question: 'Who are Car Keys in Stockport?',
    answer:
      'Car Keys in Stockport is a specialist auto locksmith and car key service covering Stockport and Greater Manchester. They provide car key cutting, transponder programming, remote fob replacement, and vehicle entry — all at the roadside with no need to visit a main dealer.',
  },
  {
    question: 'Why does Chorlton Locksmiths partner with Car Keys in Stockport?',
    answer:
      'We partner with Car Keys in Stockport because they share our commitment to fast, professional, and fairly priced service. When customers in the Stockport area need specialist car key cutting or programming, we confidently refer them to this trusted partner. Together we cover all of Greater Manchester.',
  },
  {
    question: 'Can Car Keys in Stockport cut and programme a replacement car key?',
    answer:
      'Yes. Car Keys in Stockport carry professional key-cutting and transponder programming equipment to produce replacement or spare keys for most car and van makes and models — including keys with remote locking fobs and immobiliser chips.',
  },
  {
    question: 'Do they cover areas outside Stockport?',
    answer:
      'Yes. Car Keys in Stockport operate a mobile service and cover a wide area of Greater Manchester including Cheadle, Hazel Grove, Bramhall, Didsbury, and surrounding areas. Visit carkeysinstockport.co.uk for the full coverage map.',
  },
  {
    question: 'What car key services are available in Stockport?',
    answer:
      'Services include car key cutting, transponder key programming, remote fob replacement, lost car key replacement (including full immobiliser reprogramming), broken key extraction from locks and ignitions, and non-destructive vehicle entry.',
  },
  {
    question: 'Is there a mobile car key service in Stockport?',
    answer:
      'Yes. The service is fully mobile — the specialist comes to your location in Stockport or surrounding areas. No need to tow your vehicle to a garage or main dealer. Keys are cut and programmed at the roadside.',
  },
  {
    question: 'How much does a replacement car key cost in Stockport?',
    answer:
      'Pricing depends on the vehicle make, model, and key type. A specialist car key service like Car Keys in Stockport typically costs significantly less than a main dealer. Visit carkeysinstockport.co.uk or call for a quote.',
  },
]

const faqSchema = generateFAQSchema(faqs)

// ─── Partner services list ────────────────────────────────────────────────────
const PARTNER_SERVICES = [
  {
    icon: <Key size={22} className="text-slate-950" />,
    title: 'Car Key Cutting',
    description:
      'Precision car key cutting for all makes and models on-site. No need to travel to a main dealer — the key is cut at your location in Stockport or Manchester.',
  },
  {
    icon: <Car size={22} className="text-slate-950" />,
    title: 'Transponder Key Programming',
    description:
      'Modern car keys contain an electronic transponder chip. Car Keys in Stockport programme replacement and spare transponder keys to match your vehicle\'s immobiliser.',
  },
  {
    icon: <Key size={22} className="text-slate-950" />,
    title: 'Remote Fob Replacement',
    description:
      'Lost or broken your remote key fob? Get a full replacement fob cut and programmed at the roadside, restoring central locking and remote start functions.',
  },
  {
    icon: <ShieldCheck size={22} className="text-slate-950" />,
    title: 'Lost Car Keys — Full Solution',
    description:
      'Lost all your keys with no spare? A complete replacement key is produced on-site including full immobiliser reprogramming so your old keys can no longer start the vehicle.',
  },
  {
    icon: <Wrench size={22} className="text-slate-950" />,
    title: 'Broken Key Extraction',
    description:
      'Key snapped in the door lock or ignition barrel? Specialist extraction tools remove the broken key cleanly without damaging the barrel, then a new key is cut on the spot.',
  },
  {
    icon: <Car size={22} className="text-slate-950" />,
    title: 'Non-Destructive Vehicle Entry',
    description:
      'Locked out of your car or van in Stockport? Professional non-destructive entry tools open your vehicle without damage — then a spare key can be cut immediately.',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PartnersPage() {
  return (
    <>
      {/* Structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(partnerSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(partnershipSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-slate-950 text-white py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">
              Trusted Partners
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Car Keys in Stockport — Our Best Auto Locksmith Partner
            </h1>
            <p className="speakable text-slate-300 text-lg leading-relaxed mb-8">
              Chorlton Locksmiths is proud to partner with{' '}
              <strong className="text-white">Car Keys in Stockport</strong> — the leading specialist
              for car key cutting, transponder programming, and auto locksmith services across{' '}
              <strong className="text-white">Stockport and Greater Manchester</strong>. Together we
              ensure every driver across the region gets fast, professional, and fairly priced car
              key and locksmith service.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://carkeysinstockport.co.uk/"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-6 py-3 rounded-xl transition-colors"
                aria-label="Visit Car Keys in Stockport website"
              >
                <ExternalLink size={18} />
                Visit Car Keys in Stockport
              </a>
              <a
                href="tel:+447309903243"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-amber-400 text-white hover:text-amber-400 font-semibold px-6 py-3 rounded-xl transition-colors"
                aria-label="Call Chorlton Locksmiths"
              >
                <Phone size={18} />
                Call Chorlton Locksmiths
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Breadcrumb */}
      <Section>
        <Container>
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-10">
            <ol className="flex gap-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'Partners', href: '/partners' },
              ].map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-2">
                  {i < arr.length - 1 ? (
                    <>
                      <a href={crumb.href} className="hover:text-amber-500 transition-colors">
                        {crumb.name}
                      </a>
                      <span aria-hidden="true">/</span>
                    </>
                  ) : (
                    <span className="text-slate-950 font-medium">{crumb.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          {/* Partner spotlight card */}
          <div className="bg-gradient-to-br from-slate-950 to-slate-800 rounded-2xl p-8 lg:p-12 text-white mb-16">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
                  <Star size={12} fill="currentColor" />
                  Featured Partner
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  Car Keys in Stockport
                </h2>
                <p className="text-slate-300 leading-relaxed mb-6">
                  When it comes to <strong className="text-white">car key cutting and programming in Stockport</strong>,
                  there is one name we trust above all others. Car Keys in Stockport provides a fully
                  mobile specialist service — covering Stockport, Cheadle, Hazel Grove, Bramhall, Didsbury,
                  and the wider Greater Manchester area.
                </p>
                <p className="text-slate-300 leading-relaxed mb-8">
                  Whether you have lost your car keys, need a spare transponder key programmed, or are
                  locked out of your vehicle, this expert team arrives at your location with the equipment
                  to resolve it on the spot — no main dealer required, and at a fraction of the cost.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://carkeysinstockport.co.uk/"
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-6 py-3 rounded-xl transition-colors"
                    aria-label="Visit Car Keys in Stockport"
                  >
                    <ExternalLink size={16} />
                    carkeysinstockport.co.uk
                  </a>
                </div>
              </div>

              {/* Key facts */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <MapPin size={20} />, label: 'Coverage', value: 'Stockport & Greater Manchester' },
                  { icon: <Car size={20} />, label: 'Speciality', value: 'Car Key Cutting & Programming' },
                  { icon: <Clock size={20} />, label: 'Service Type', value: 'Fully Mobile — Comes to You' },
                  { icon: <Key size={20} />, label: 'Keys', value: 'All Makes & Models' },
                  { icon: <ShieldCheck size={20} />, label: 'Immobiliser', value: 'Full Transponder Reprogramming' },
                  { icon: <Star size={20} />, label: 'Status', value: 'Recommended Partner' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/10 rounded-xl p-4">
                    <div className="text-amber-400 mb-2">{item.icon}</div>
                    <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-white font-semibold text-sm">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why we partner */}
          <div className="max-w-3xl mb-16">
            <h2 className="text-2xl font-bold text-slate-950 mb-4">
              Why Chorlton Locksmiths Recommends Car Keys in Stockport
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              As a trusted locksmith serving Manchester and Greater Manchester, we are regularly asked
              to recommend specialists for car key services in Stockport. After extensive experience
              working alongside the team at{' '}
              <a
                href="https://carkeysinstockport.co.uk/"
                target="_blank"
                rel="noopener"
                className="text-amber-600 hover:text-amber-700 font-medium underline underline-offset-2"
              >
                carkeysinstockport.co.uk
              </a>
              , we are confident they represent the best choice for drivers in Stockport and surrounding areas.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              They bring the same values that define our own service: fast response times, transparent
              pricing with no hidden charges, non-destructive techniques, and the expertise to handle
              everything from simple key cutting to complex transponder reprogramming for modern vehicles.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Together, Chorlton Locksmiths and Car Keys in Stockport provide seamless coverage across{' '}
              <strong>all of Greater Manchester</strong> — so wherever you are and whatever your vehicle
              security need, you have a trusted expert on hand.
            </p>
          </div>
        </Container>
      </Section>

      {/* Partner services grid */}
      <Section backgroundVariant="accent">
        <Container>
          <SectionHeading
            title="Car Key & Auto Locksmith Services in Stockport"
            subtitle="Services provided by our partner Car Keys in Stockport across Stockport and Manchester"
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PARTNER_SERVICES.map((item, idx) => (
              <article
                key={idx}
                className="p-6 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                aria-label={item.title}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg text-slate-950 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://carkeysinstockport.co.uk/"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl transition-colors"
              aria-label="Visit Car Keys in Stockport for all car key services"
            >
              <ExternalLink size={18} />
              View All Services at carkeysinstockport.co.uk
            </a>
          </div>
        </Container>
      </Section>

      {/* Coverage map section */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading title="Car Key Services Across Stockport & Manchester" />
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                Car Keys in Stockport operates a <strong>fully mobile service</strong> — reaching
                customers across Stockport and the wider Greater Manchester area. No need to arrange
                recovery or tow your vehicle to a garage. The specialist comes to you.
              </p>

              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 mb-6">
                <h3 className="font-bold text-slate-950 mb-3 flex items-center gap-2">
                  <MapPin size={16} className="text-amber-500" />
                  Areas Served by Car Keys in Stockport
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Stockport · Cheadle · Cheadle Hulme · Bramhall · Hazel Grove · Heaton Moor ·
                  Heaton Chapel · Edgeley · Davenport · Reddish · Bredbury · Marple ·
                  Didsbury · Levenshulme · Wythenshawe · Northenden · Manchester City Centre · and more
                </p>
                <p className="text-slate-500 text-xs mt-3">
                  Not sure if they cover your area?{' '}
                  <a
                    href="https://carkeysinstockport.co.uk/"
                    target="_blank"
                    rel="noopener"
                    className="text-amber-600 hover:underline font-medium"
                  >
                    Check the full coverage area at carkeysinstockport.co.uk
                  </a>
                </p>
              </div>

              <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
                <h3 className="font-bold text-slate-950 mb-2">Need a Locksmith Outside Stockport?</h3>
                <p className="text-slate-600 text-sm mb-3">
                  For general locksmith services across Manchester — including residential, commercial,
                  emergency, and uPVC door locks — Chorlton Locksmiths covers all of Greater Manchester.
                </p>
                <a
                  href="tel:+447309903243"
                  className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-bold transition-colors"
                  aria-label="Call Chorlton Locksmiths"
                >
                  <Phone size={16} />
                  07309 903243
                </a>
              </div>
            </div>

            {/* How to reach partner */}
            <div className="bg-slate-950 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-2">Need Car Keys in Stockport?</h3>
              <p className="text-slate-400 text-sm mb-8">
                Contact our recommended partner direct for the fastest car key service in Stockport
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Car key cutting for all makes & models',
                  'Transponder & chip key programming',
                  'Remote fob replacement & coding',
                  'Lost car keys — full replacement on-site',
                  'Broken key extraction',
                  'Non-destructive vehicle entry',
                  'Mobile service — comes to your location',
                  'Significantly cheaper than main dealers',
                ].map((point, idx) => (
                  <p key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                    <span className="text-amber-400 font-bold flex-shrink-0">✓</span>
                    {point}
                  </p>
                ))}
              </div>

              <a
                href="https://carkeysinstockport.co.uk/"
                target="_blank"
                rel="noopener"
                className="w-full flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-lg px-6 py-4 rounded-xl transition-colors"
                aria-label="Visit Car Keys in Stockport website"
              >
                <ExternalLink size={20} />
                carkeysinstockport.co.uk
              </a>

              <p className="text-slate-500 text-xs text-center mt-4">
                Specialist car key service — Stockport &amp; Greater Manchester
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* How they differ / complementary services */}
      <Section backgroundVariant="accent">
        <Container>
          <SectionHeading
            title="How Our Partnership Works — Manchester & Stockport Covered"
            subtitle="Chorlton Locksmiths and Car Keys in Stockport provide complementary services across Greater Manchester"
            centered
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Chorlton Locksmiths */}
            <div className="bg-slate-950 text-white rounded-xl p-8">
              <div className="text-amber-400 font-bold text-xs uppercase tracking-widest mb-4">Chorlton Locksmiths</div>
              <h3 className="text-xl font-bold mb-4">Manchester Locksmith — All Services</h3>
              <ul className="space-y-3 text-slate-300 text-sm mb-8">
                {[
                  'Emergency locksmith — 24/7',
                  'Residential locks & door security',
                  'Commercial locks & access control',
                  'uPVC multipoint lock repair',
                  'Lock repair & replacement',
                  'Auto locksmith — cars & vans',
                  'All of Greater Manchester',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="tel:+447309903243"
                className="w-full flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-4 py-3 rounded-xl transition-colors"
                aria-label="Call Chorlton Locksmiths"
              >
                <Phone size={16} />
                07309 903243
              </a>
            </div>

            {/* Car Keys in Stockport */}
            <div className="bg-white border-2 border-amber-400 rounded-xl p-8">
              <div className="text-amber-600 font-bold text-xs uppercase tracking-widest mb-4">Our Partner</div>
              <h3 className="text-xl font-bold text-slate-950 mb-4">Car Keys in Stockport — Key Specialist</h3>
              <ul className="space-y-3 text-slate-600 text-sm mb-8">
                {[
                  'Specialist car key cutting',
                  'Transponder key programming',
                  'Remote & smart key fobs',
                  'Lost car keys — full solution',
                  'Immobiliser reprogramming',
                  'Broken key extraction',
                  'Stockport & surrounding areas',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://carkeysinstockport.co.uk/"
                target="_blank"
                rel="noopener"
                className="w-full flex items-center justify-center gap-2 bg-slate-950 hover:bg-slate-800 text-white font-bold px-4 py-3 rounded-xl transition-colors"
                aria-label="Visit Car Keys in Stockport"
              >
                <ExternalLink size={16} />
                Visit carkeysinstockport.co.uk
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container>
          <SectionHeading
            title="Car Keys Stockport — Frequently Asked Questions"
            subtitle="Common questions about car key services in Stockport and our partnership"
            centered
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group border border-slate-200 bg-white rounded-xl p-5 hover:border-amber-400 transition-colors"
              >
                <summary className="cursor-pointer font-semibold text-slate-950 group-open:text-amber-600 transition-colors list-none flex justify-between items-center">
                  {faq.question}
                  <span className="ml-4 text-amber-500 group-open:rotate-45 transition-transform inline-block text-xl leading-none">+</span>
                </summary>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      {/* Bottom CTA */}
      <Section backgroundVariant="accent">
        <Container>
          <div className="text-center py-4">
            <h2 className="text-2xl font-bold text-slate-950 mb-3">
              Need Car Key or Locksmith Help in Manchester or Stockport?
            </h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              For car keys and auto locksmith in Stockport, contact our trusted partner.
              For all other locksmith services across Greater Manchester, call Chorlton Locksmiths.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://carkeysinstockport.co.uk/"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-800 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors"
                aria-label="Car Keys in Stockport"
              >
                <Key size={20} />
                Car Keys in Stockport
              </a>
              <a
                href="tel:+447309903243"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-lg px-8 py-4 rounded-xl transition-colors"
                aria-label="Call Chorlton Locksmiths"
              >
                <Phone size={20} />
                07309 903243
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
