import type { Metadata } from 'next'
import Link from 'next/link'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { QuoteForm } from '@/components/forms/QuoteForm'
import {
  generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema,
  generateHowToSchema, generateServicePageSchema,
} from '@/lib/schema'
import { ShieldCheck, Phone, Car, Key } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cheap Auto Locksmith Chorlton | Affordable Car Locksmith | 07309 903243',
  description:
    'Affordable auto locksmith in Chorlton — competitive pricing, transparent quotes, no hidden fees. Cheaper than a dealer. Call 07309 903243.',
  keywords: ['cheap auto locksmith Chorlton', 'affordable car locksmith Manchester', 'low cost car key replacement', 'budget locksmith service'],
  openGraph: {
    title: 'Cheap Auto Locksmith Chorlton | Transparent, Competitive Pricing',
    description: 'Affordable auto locksmith in Chorlton. Fixed quotes, no hidden fees. Cheaper than a main dealer. Call 07309 903243.',
    url: 'https://chorltonlocksmiths.com/cheap-auto-locksmith-chorlton',
    type: 'website',
    siteName: 'Chorlton Locksmiths',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Affordable Auto Locksmith Chorlton | Fixed Price Quotes',
    description: 'Competitive auto locksmith pricing in Chorlton. Fixed quotes, no hidden fees. Call 07309 903243.',
  },
  alternates: { canonical: 'https://chorltonlocksmiths.com/cheap-auto-locksmith-chorlton' },
  robots: { index: true, follow: true },
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Auto Locksmith Chorlton', url: '/auto-locksmith-chorlton' },
  { name: 'Affordable Auto Locksmith Chorlton', url: '/cheap-auto-locksmith-chorlton' },
])

const serviceSchema = generateServiceSchema({
  name: 'Affordable Auto Locksmith Chorlton',
  description: 'Competitive, transparent pricing for auto locksmith services in Chorlton, Manchester. Car lockouts, key replacement, and key programming at honest prices — significantly cheaper than a main dealer.',
  url: '/cheap-auto-locksmith-chorlton',
  serviceType: 'Affordable Auto Locksmith',
})

const howToSchema = generateHowToSchema({
  name: 'How to Get an Affordable Auto Locksmith in Chorlton',
  description: 'How our transparent pricing works.',
  steps: [
    { name: 'Call for a free estimate', text: 'Ring 07309 903243 — we give you an honest price estimate over the phone.' },
    { name: 'We arrive', text: 'Mobile locksmith reaches Chorlton in ~30 minutes.' },
    { name: 'Fixed quote confirmed', text: 'Final fixed price confirmed on-site before any work starts — no surprises.' },
    { name: 'Work completed', text: 'Service carried out at the agreed price with no add-on charges.' },
    { name: 'You pay the agreed amount', text: 'No hidden fees. No call-out surprises. Exactly what you were quoted.' },
  ],
})

const faqs = [
  {
    question: 'How much does an auto locksmith cost in Chorlton?',
    answer:
      'Pricing depends on the vehicle make, model, and the specific service required. A car lockout typically costs less than a full key replacement. We provide a free estimate over the phone and a fixed quote on-site before starting. Call 07309 903243 for an immediate estimate.',
  },
  {
    question: 'Are you cheaper than a main dealer for car keys in Chorlton?',
    answer:
      'Yes, significantly so in most cases. Main dealers charge a premium for key cutting and programming and often require the vehicle to be brought in. We come to you and complete the work on-site, typically at 40–60% of dealer prices.',
  },
  {
    question: 'Do you charge a call-out fee on top of the job price?',
    answer:
      'Our pricing is transparent — we do not add hidden call-out fees after the fact. The fixed quote we give you before starting includes all costs. What you are quoted is what you pay.',
  },
  {
    question: 'Can I get a price estimate before you come out?',
    answer:
      'Yes. Call 07309 903243 with your vehicle make, model, and the service you need. We will give you a clear phone estimate so there are no surprises before we arrive.',
  },
  {
    question: 'Is a cheap locksmith safe to use?',
    answer:
      'Affordability and quality are not mutually exclusive. Chorlton Locksmiths uses professional tools and has years of experience on all vehicle types. We are fully insured and provide a fixed-price, damage-free service — at honest, competitive rates.',
  },
]

const faqSchema = generateFAQSchema(faqs)
const pageSchema = generateServicePageSchema({
  url: '/cheap-auto-locksmith-chorlton',
  name: 'Affordable Auto Locksmith Chorlton | Chorlton Locksmiths',
  description: 'Competitive, transparent auto locksmith pricing in Chorlton — fixed quotes, no hidden fees.',
  dateModified: '2026-03-22',
})

export default function CheapAutoLocksmithChorltonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      <section className="bg-slate-950 text-white py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <nav aria-label="Breadcrumb" className="text-sm text-slate-400 mb-6">
              <ol className="flex gap-2 flex-wrap">
                <li><Link href="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/auto-locksmith-chorlton" className="hover:text-amber-400 transition-colors">Auto Locksmith Chorlton</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-slate-300">Affordable Auto Locksmith</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Affordable Auto Locksmith in Chorlton — Competitive Pricing, No Hidden Fees
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Looking for an affordable auto locksmith in Chorlton? Chorlton Locksmiths provides transparent, competitive pricing
              for all car and van locksmith services — with fixed quotes before we start and no hidden call-out fees.
              In most cases we are significantly cheaper than a main dealer, and we come to your location.
            </p>
            <a href="tel:+447309903243" className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xl px-8 py-4 rounded-xl transition-colors">
              <Phone size={22} />
              Call for a Free Estimate
            </a>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <ShieldCheck size={20} className="text-slate-950" />, title: 'Fixed Price Guarantee', body: 'We quote before we start. No hidden fees, no call-out surprises — ever.' },
              { icon: <Car size={20} className="text-slate-950" />, title: 'Cheaper Than a Dealer', body: 'Our mobile service is typically 40–60% less expensive than a main dealer for key work.' },
              { icon: <Key size={20} className="text-slate-950" />, title: 'Free Phone Estimate', body: 'Call with your vehicle details and we give you a clear price estimate — no obligation.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400">{item.icon}</div>
                <div>
                  <h2 className="font-bold text-lg text-slate-950">{item.title}</h2>
                  <p className="text-slate-600 text-sm">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section backgroundVariant="accent">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-950 mb-4">Why Chorlton Locksmiths Offers Better Value</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              The cheapest option is not always the best — but a fair price for professional work is exactly what we offer.
              Here is why our customers in Chorlton choose us over dealerships and other locksmith services:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'No dealer markup', body: 'Main dealers charge a significant premium for key work. Our overheads are lower and we pass those savings to you.' },
                { title: 'No tow truck needed', body: 'We come to you — removing the towing cost that dealers require to bring your car to their workshop.' },
                { title: 'Fixed quotes — no surprises', body: 'We quote upfront and charge exactly what we quoted. Pricing is never adjusted after the fact.' },
                { title: 'Efficient on-site service', body: 'We carry all equipment in our van. No parts ordering, no return visits — most jobs completed in one visit.' },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-white rounded-xl border border-slate-200">
                  <h3 className="font-bold text-slate-950 mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading title="Affordable Auto Locksmith Services in Chorlton" centered />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Car Lockout', desc: 'Non-destructive entry for locked cars and vans.', href: '/car-lockout-chorlton' },
              { title: 'Car Key Replacement', desc: 'Lost key replaced and programmed on-site.', href: '/car-key-replacement-chorlton' },
              { title: 'Spare Key Cutting', desc: 'Spare key cut and programmed — cheaper now than emergency later.', href: '/spare-car-key-chorlton' },
              { title: 'Key Fob Repair', desc: 'Fob repaired or replaced — often cheaper than replacement.', href: '/car-key-fob-repair-chorlton' },
              { title: 'Ignition Repair', desc: 'Ignition faults diagnosed and repaired — repair before replacement.', href: '/ignition-repair-chorlton' },
              { title: 'Van Lockout', desc: 'Fast van lockout service — minimal downtime for tradespeople.', href: '/van-locksmith-chorlton' },
            ].map((item, idx) => (
              <article key={idx} className="p-6 bg-white border border-slate-100 rounded-xl shadow-sm">
                <h3 className="font-bold text-lg text-slate-950 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">{item.desc}</p>
                <Link href={item.href} className="text-amber-600 hover:text-amber-700 text-sm font-medium underline underline-offset-2">Learn more →</Link>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section backgroundVariant="accent">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading title="Get a Free Estimate From Our Chorlton Auto Locksmith" />
              <p className="text-slate-600 mb-6 text-sm">
                Call 07309 903243 with your vehicle make, model, year, and the service you need.
                We give you a clear, honest price estimate over the phone — no obligation, no pressure.
              </p>
              <div className="space-y-3">
                {[
                  'Free phone estimate for any auto locksmith service',
                  'Fixed quote confirmed on-site before we start',
                  'No call-out fee added after the fact',
                  'No hidden charges or unexpected add-ons',
                  'Payment by cash, card, or bank transfer',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold mt-0.5">✓</span>
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <p className="text-sm text-slate-600">
                  Also see:{' '}
                  <Link href="/auto-locksmith-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">auto locksmith Chorlton</Link>
                  {' '}·{' '}
                  <Link href="/car-key-replacement-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">car key replacement</Link>
                  {' '}·{' '}
                  <Link href="/24-hour-auto-locksmith-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">24 hour locksmith</Link>
                </p>
              </div>
            </div>
            <div className="bg-slate-950 text-white rounded-xl p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-2">Free Estimate — No Obligation</h3>
              <p className="text-slate-400 text-sm mb-6">Call us for competitive auto locksmith pricing in Chorlton</p>
              <div className="mb-6">
                <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">Call Now</p>
                <a href="tel:+447309903243" className="text-3xl font-bold text-amber-400 hover:text-amber-300 transition-colors">07309 903243</a>
              </div>
              <div className="space-y-2 text-sm text-slate-300 mb-8">
                <p>✓ Free phone price estimate</p>
                <p>✓ Fixed quote before we start</p>
                <p>✓ No hidden fees</p>
                <p>✓ Cheaper than a main dealer</p>
                <p>✓ ~30 min response in Chorlton</p>
              </div>
              <QuoteForm />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading title="Affordable Auto Locksmith Chorlton — FAQs" centered />
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group border border-slate-200 bg-white rounded-xl p-5 hover:border-amber-400 transition-colors">
                <summary className="cursor-pointer font-semibold text-slate-950 group-open:text-amber-600 transition-colors list-none flex justify-between items-center">
                  {faq.question}
                  <span className="ml-4 text-amber-500 group-open:rotate-45 transition-transform inline-block text-xl leading-none">+</span>
                </summary>
                <div>
                  <p className="faq-answer mt-3 text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      <Section backgroundVariant="accent">
        <Container>
          <div className="text-center py-4">
            <h2 className="text-2xl font-bold text-slate-950 mb-3">Affordable Auto Locksmith in Chorlton — Call for a Free Estimate</h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">Transparent pricing, fixed quotes, no hidden fees. Call now for an honest estimate.</p>
            <a href="tel:+447309903243" className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xl px-8 py-4 rounded-xl transition-colors">
              <Phone size={24} />
              07309 903243
            </a>
          </div>
        </Container>
      </Section>
    </>
  )
}
