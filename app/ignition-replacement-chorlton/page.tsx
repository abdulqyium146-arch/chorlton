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
import { Wrench, Phone, ShieldCheck, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ignition Replacement Chorlton | New Ignition Barrel | 07309 903243',
  description:
    'Ignition barrel beyond repair in Chorlton? We replace car ignition barrels on-site for all major makes. Mobile, fast. Call 07309 903243.',
  keywords: ['ignition replacement Chorlton', 'replace car ignition Manchester', 'ignition switch replacement', 'faulty ignition repair'],
  openGraph: {
    title: 'Ignition Replacement Chorlton | Barrel Replaced On-Site',
    description: 'Need a new ignition barrel in Chorlton? We replace it on-site for all major car makes. Call 07309 903243.',
    url: 'https://chorltonlocksmiths.com/ignition-replacement-chorlton',
    type: 'website',
    siteName: 'Chorlton Locksmiths',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ignition Replacement Chorlton | New Barrel Fitted On-Site',
    description: 'Need a new ignition barrel in Chorlton? We supply, fit, and key on-site. Call 07309 903243.',
  },
  alternates: { canonical: 'https://chorltonlocksmiths.com/ignition-replacement-chorlton' },
  robots: { index: true, follow: true },
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Auto Locksmith Chorlton', url: '/auto-locksmith-chorlton' },
  { name: 'Ignition Replacement Chorlton', url: '/ignition-replacement-chorlton' },
])

const serviceSchema = generateServiceSchema({
  name: 'Ignition Replacement Chorlton',
  description: 'Mobile ignition barrel replacement service in Chorlton, Manchester. We supply and fit replacement ignition barrels on-site for all major car makes and models.',
  url: '/ignition-replacement-chorlton',
  serviceType: 'Ignition Replacement',
})

const howToSchema = generateHowToSchema({
  name: 'How We Replace a Car Ignition Barrel in Chorlton',
  description: 'Our ignition replacement process.',
  steps: [
    { name: 'Call with vehicle details', text: 'Ring 07309 903243 with your make, model, and year. We source the correct barrel.' },
    { name: 'We arrive', text: 'Mobile locksmith reaches Chorlton in ~30 minutes.' },
    { name: 'Old barrel removed', text: 'Faulty ignition barrel removed cleanly without causing further damage.' },
    { name: 'New barrel fitted', text: 'Replacement barrel installed and aligned correctly.' },
    { name: 'New key cut and coded', text: 'Key cut to the new barrel and programmed to the vehicle ECU where required.' },
  ],
})

const faqs = [
  {
    question: 'When does a car ignition need replacing rather than repairing?',
    answer:
      'Replacement is necessary when the barrel is severely worn, the internal tumblers are broken, the barrel has been damaged by a forced entry attempt, or when a snapped key has caused irreparable damage to the barrel internals.',
  },
  {
    question: 'Can you supply the replacement ignition barrel?',
    answer:
      'Yes. We source ignition barrels for most common car makes and models and fit them on-site. In some cases we may need to order the part, but for most common vehicles we carry stock or can source quickly.',
  },
  {
    question: 'Will I need a new key after ignition replacement?',
    answer:
      'Yes. A new ignition barrel comes with a different key. We cut and programme a new key on-site as part of the replacement, so you leave with a fully working key and ignition.',
  },
  {
    question: 'How much does ignition replacement cost in Chorlton?',
    answer:
      'Cost depends on the vehicle make and model and the barrel specification. We always quote upfront. Call 07309 903243 for an estimate — we are generally significantly cheaper than a main dealer.',
  },
  {
    question: 'How long does ignition replacement take?',
    answer:
      'Most ignition replacements take 1–2 hours on-site, including sourcing, fitting, and key programming. We will give you a realistic timeframe when you call.',
  },
]

const faqSchema = generateFAQSchema(faqs)
const pageSchema = generateServicePageSchema({
  url: '/ignition-replacement-chorlton',
  name: 'Ignition Replacement Chorlton | Chorlton Locksmiths',
  description: 'Ignition barrel replacement service in Chorlton — barrel sourced, fitted, and keyed on-site.',
  dateModified: '2026-03-22',
})

export default function IgnitionReplacementChorltonPage() {
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
                <li className="text-slate-300">Ignition Replacement Chorlton</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Ignition Replacement Chorlton — New Barrel Fitted On-Site
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              When your ignition barrel is beyond repair — due to wear, damage, or a broken key — Chorlton Locksmiths
              provides a complete mobile ignition replacement service. We source the correct barrel, fit it at your location in Chorlton,
              and cut and programme a new key on-site. No dealer, no tow truck required.
            </p>
            <a href="tel:+447309903243" className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xl px-8 py-4 rounded-xl transition-colors">
              <Phone size={22} />
              Call 07309 903243
            </a>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Wrench size={20} className="text-slate-950" />, title: 'Barrel Supplied & Fitted', body: 'We source the correct replacement barrel and fit it on-site at your location.' },
              { icon: <Clock size={20} className="text-slate-950" />, title: '~30 Min Response', body: 'Mobile locksmith dispatched immediately to your location in Chorlton.' },
              { icon: <ShieldCheck size={20} className="text-slate-950" />, title: 'New Key Included', body: 'New key cut and programmed to the replacement barrel as part of the service.' },
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
            <h2 className="text-2xl font-bold text-slate-950 mb-4">When Is Ignition Replacement Needed?</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Not every ignition fault requires replacement. Our locksmith will always attempt repair first. However, replacement is necessary in the following situations:
            </p>
            <div className="space-y-3">
              {[
                'Barrel severely worn — key spins freely without engaging',
                'Internal tumblers broken — barrel cannot be repaired',
                'Damage from forced entry or attempted theft',
                'Snapped key has destroyed the barrel internals',
                'Ignition seized completely and unresponsive to repair',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 p-4 bg-white rounded-xl border border-slate-200">
                  <span className="text-amber-500 font-bold mt-0.5">✓</span>
                  <span className="text-slate-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading title="How Ignition Replacement Works in Chorlton" />
              <ol className="space-y-5">
                {[
                  { step: '1', title: 'Call 07309 903243', desc: 'Give us your vehicle make, model, and year so we can source the correct barrel.' },
                  { step: '2', title: 'We Arrive (~30 Minutes)', desc: 'Mobile locksmith arrives at your Chorlton location promptly.' },
                  { step: '3', title: 'Old Barrel Removed', desc: 'Faulty barrel removed cleanly using specialist automotive tools.' },
                  { step: '4', title: 'New Barrel Fitted', desc: 'Replacement barrel installed and correctly aligned.' },
                  { step: '5', title: 'New Key Cut & Programmed', desc: 'Key cut to the new barrel and transponder coded to the vehicle ECU.' },
                ].map((item) => (
                  <li key={item.step} className="flex gap-4">
                    <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-slate-950 font-bold text-sm">{item.step}</div>
                    <div>
                      <h3 className="font-bold text-slate-950">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-8">
                <p className="text-sm text-slate-600">
                  Related:{' '}
                  <Link href="/ignition-repair-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">ignition repair</Link>
                  {' '}·{' '}
                  <Link href="/key-stuck-in-ignition-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">key stuck in ignition</Link>
                  {' '}·{' '}
                  <Link href="/auto-locksmith-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">auto locksmith Chorlton</Link>
                </p>
              </div>
            </div>
            <div className="bg-slate-950 text-white rounded-xl p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-2">Need an Ignition Replaced?</h3>
              <p className="text-slate-400 text-sm mb-6">We supply, fit, and key on-site in Chorlton</p>
              <div className="mb-6">
                <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">Call Now</p>
                <a href="tel:+447309903243" className="text-3xl font-bold text-amber-400 hover:text-amber-300 transition-colors">07309 903243</a>
              </div>
              <div className="space-y-2 text-sm text-slate-300 mb-8">
                <p>✓ Correct barrel sourced for your vehicle</p>
                <p>✓ Fitted on-site at your location</p>
                <p>✓ New key cut &amp; programmed</p>
                <p>✓ Fixed price before we start</p>
                <p>✓ ~30 min response in Chorlton</p>
              </div>
              <QuoteForm />
            </div>
          </div>
        </Container>
      </Section>

      <Section backgroundVariant="accent">
        <Container>
          <SectionHeading title="Ignition Replacement Chorlton — FAQs" centered />
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

      <Section>
        <Container>
          <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <div className="flex-1">
              <p className="text-xs text-amber-600 font-bold uppercase tracking-widest mb-1">Trusted Partner — Stockport</p>
              <h3 className="text-lg font-bold text-slate-950 mb-1">Car Key Service in Stockport?</h3>
              <p className="text-slate-600 text-sm">
                <a href="https://carkeysinstockport.co.uk/" target="_blank" rel="noopener" className="text-amber-600 hover:text-amber-700 font-medium underline underline-offset-2">Car Keys in Stockport</a>
                {' '}— trusted specialists for Stockport.
              </p>
            </div>
            <Link href="/partners" className="flex-shrink-0 inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-800 text-white font-bold px-5 py-3 rounded-xl transition-colors text-sm">
              View Our Partners
            </Link>
          </div>
        </Container>
      </Section>

      <Section backgroundVariant="accent">
        <Container>
          <div className="text-center py-4">
            <h2 className="text-2xl font-bold text-slate-950 mb-3">Need a New Ignition in Chorlton?</h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">Call us — we arrive in ~30 minutes, fit the new barrel, and programme your key on-site.</p>
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
