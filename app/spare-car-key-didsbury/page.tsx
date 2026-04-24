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
import { Key, Clock, Phone, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Spare Car Key Didsbury | Cut & Programmed On-Site | 07309 903243',
  description:
    'Get a spare car key cut and programmed in Didsbury — transponder keys, remote fobs, and smart keys. On-site mobile service. Significantly cheaper than a dealer. Call 07309 903243.',
  keywords: ['spare car key Didsbury', 'duplicate car key Didsbury', 'second car key Didsbury', 'car key copy Didsbury'],
  openGraph: {
    title: 'Spare Car Key Didsbury | Cut & Programmed at Your Location',
    description: 'Spare car key cut and programmed in Didsbury — transponder, fob, smart key. Mobile service, no dealer needed. Call 07309 903243.',
    url: 'https://chorltonlocksmiths.com/spare-car-key-didsbury',
    type: 'website',
    siteName: 'Chorlton Locksmiths',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spare Car Key Didsbury | On-Site | 07309 903243',
    description: 'Get a spare car key in Didsbury — cut and programmed at your location, cheaper than a dealer. Call 07309 903243.',
  },
  alternates: { canonical: 'https://chorltonlocksmiths.com/spare-car-key-didsbury' },
  robots: { index: true, follow: true },
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Auto Locksmith Didsbury', url: '/auto-locksmith-didsbury' },
  { name: 'Spare Car Key Didsbury', url: '/spare-car-key-didsbury' },
])

const pageSchema = generateServicePageSchema({
  url: '/spare-car-key-didsbury',
  name: 'Spare Car Key Didsbury | Chorlton Locksmiths',
  description: 'Spare car key service in Didsbury — transponder keys, remote fobs, and smart keys cut and programmed on-site at your location.',
  dateModified: '2026-04-23',
})

const serviceSchema = generateServiceSchema({
  name: 'Spare Car Key Didsbury',
  description: 'Mobile spare car key cutting and programming service in Didsbury, Manchester. We cut and programme a spare transponder key, remote fob, or smart key at your location — no dealer visit required.',
  url: '/spare-car-key-didsbury',
  serviceType: 'Spare Car Key Service',
})

const howToSchema = generateHowToSchema({
  name: 'How to Get a Spare Car Key in Didsbury',
  description: 'The process for getting a spare car key cut and programmed at your location in Didsbury.',
  steps: [
    { name: 'Call 07309 903243', text: 'Tell us your vehicle make, model, year, and your location in Didsbury. Confirm you have a working key for us to reference.' },
    { name: 'We confirm key type', text: 'We identify the correct key blank and programming procedure for your specific vehicle.' },
    { name: 'We arrive in ~30 minutes', text: 'Our mobile van with key-cutting machine and programming equipment arrives at your Didsbury location.' },
    { name: 'Spare key cut to profile', text: 'We cut the blade profile to match your existing key and lock barrels.' },
    { name: 'Transponder or fob programmed', text: 'We programme the spare key alongside your existing key — both remain active. Your new spare is tested before we leave.' },
  ],
})

const faqs = [
  {
    question: 'Why should I get a spare car key in Didsbury now rather than waiting until I lose my key?',
    answer:
      'Getting a spare key while you have a working key is significantly faster, simpler, and cheaper than all-keys-lost replacement. When you have a working key, we only need to cut and programme a matching key alongside it — a straightforward process. If you ever lose your only key, the job becomes an all-keys-lost ECU programming procedure which takes longer and costs more. A spare key is inexpensive insurance against a much larger bill later.',
  },
  {
    question: 'Can you cut and programme a spare key for my car in Didsbury without me going to a dealer?',
    answer:
      'Yes. We carry key-cutting machinery and transponder programming equipment in our mobile van. We come to your home, workplace, or any location in Didsbury and produce a fully working spare key at the roadside. For most common makes — Ford, Vauxhall, BMW, Audi, VW, Mercedes, Toyota, Nissan, Kia — this is a single on-site visit with no need for a dealer.',
  },
  {
    question: 'Will my existing key still work after you programme a spare?',
    answer:
      'Yes. Adding a spare key is done using a procedure that keeps all existing programmed keys active. Both your original key and the new spare will start the engine and operate the remote locking after the job is complete.',
  },
  {
    question: 'How much does a spare car key cost in Didsbury?',
    answer:
      'A spare transponder key typically starts from £75–£120 depending on your vehicle make and key type. Smart keys and proximity keycards for prestige vehicles typically range from £120–£180+. We always quote a fixed price before we start. Call 07309 903243 for an estimate over the phone.',
  },
  {
    question: 'Can you cut a spare key for my van in Didsbury?',
    answer:
      'Yes. We supply spare keys for commercial vans as well as passenger cars — Ford Transit, Mercedes Sprinter, Vauxhall Vivaro, VW Transporter, and all major commercial vans. The process is the same: we come to you, cut the blade, programme the transponder, and test the key before leaving.',
  },
]

const faqSchema = generateFAQSchema(faqs)

export default function SpareCarKeyDidsburyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      {/* Hero */}
      <section className="bg-slate-950 text-white py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <nav aria-label="Breadcrumb" className="text-sm text-slate-400 mb-6">
              <ol className="flex gap-2 flex-wrap">
                <li><Link href="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/auto-locksmith-didsbury" className="hover:text-amber-400 transition-colors">Auto Locksmith Didsbury</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-slate-300">Spare Car Key Didsbury</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Spare Car Key Didsbury — Cut &amp; Programmed at Your Location
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Get a spare car key cut and programmed in Didsbury without visiting a dealer. Chorlton Locksmiths comes to your home or workplace and produces a fully working spare key — transponder, remote fob, or smart key — at a fraction of dealer prices.
            </p>
            <a href="tel:+447309903243" className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xl px-8 py-4 rounded-xl transition-colors">
              <Phone size={22} />
              Call 07309 903243
            </a>
          </div>
        </Container>
      </section>

      {/* USPs */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Key size={20} className="text-slate-950" />, title: 'Both Keys Active', body: 'Your existing key remains fully active — spare added alongside it in the vehicle immobiliser.' },
              { icon: <ShieldCheck size={20} className="text-slate-950" />, title: 'Cheaper Than a Dealer', body: 'Significantly less than main dealer pricing — same quality key, cut and programmed at your door.' },
              { icon: <Clock size={20} className="text-slate-950" />, title: '~30 Min to Didsbury', body: 'Mobile service dispatched from Chorlton — we come to your Didsbury home, office, or street.' },
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

      {/* Why get a spare */}
      <Section backgroundVariant="accent">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-950 mb-4">Why Get a Spare Car Key in Didsbury Now?</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Most drivers in Didsbury know someone who has been stranded by a lost car key — the expensive, stressful reality of having only one key for a modern vehicle. All-keys-lost replacement requires specialist ECU programming and costs significantly more than adding a spare while a working key is present.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Getting a spare key made today is the most cost-effective automotive insurance you can buy. It protects against lockout, allows sharing with a partner or family member, and gives you a backup when the primary key develops a fault.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {[
                { title: 'Spare now vs all-keys-lost later', body: 'Spare key added today: from £75–£120. All-keys-lost replacement if you lose your only key: from £120–£200+. The difference pays for the spare.' },
                { title: 'Share with your household', body: 'A spare key means two drivers can share a vehicle without handing over the only set of keys.' },
                { title: 'Backup when fob fails', body: 'If your main fob develops a fault, a spare means you are never completely stranded while it is being repaired.' },
                { title: 'No dealer visit', body: 'We come to your home in Didsbury — no appointment, no waiting room, no dealer pricing.' },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-white rounded-xl border border-slate-200">
                  <h3 className="font-bold text-slate-950 text-sm mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Process + CTA */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading title="Getting a Spare Car Key in Didsbury — Our Process" />
              <ol className="space-y-5">
                {[
                  { step: '1', title: 'Call 07309 903243', desc: 'Tell us your vehicle make, model, year, and Didsbury location. Confirm you have a working key.' },
                  { step: '2', title: 'We Arrive in ~30 Minutes', desc: 'Our mobile van with key-cutting machine and programming equipment arrives at your location.' },
                  { step: '3', title: 'Fixed Price Agreed', desc: 'Upfront quote for the spare key — no hidden charges.' },
                  { step: '4', title: 'Spare Key Cut', desc: 'We cut the blade to the exact profile of your existing key using our on-board cutting machine.' },
                  { step: '5', title: 'Programmed & Tested', desc: 'We programme the spare alongside your existing key and confirm both start the engine before we leave.' },
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
                  <Link href="/car-key-programming-didsbury" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">car key programming Didsbury</Link>
                  {' '}·{' '}
                  <Link href="/lost-car-keys-didsbury" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">lost car keys Didsbury</Link>
                  {' '}·{' '}
                  <Link href="/spare-car-key-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">spare car key Chorlton</Link>
                </p>
              </div>
            </div>
            <div className="bg-slate-950 text-white rounded-xl p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-2">Get a Spare Key in Didsbury Today</h3>
              <p className="text-slate-400 text-sm mb-6">On-site service — cheaper than a dealer, same day</p>
              <div className="mb-6">
                <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">Call Now</p>
                <a href="tel:+447309903243" className="text-3xl font-bold text-amber-400 hover:text-amber-300 transition-colors">07309 903243</a>
              </div>
              <div className="space-y-2 text-sm text-slate-300 mb-8">
                <p>✓ Transponder, fob &amp; smart keys</p>
                <p>✓ Existing key stays active</p>
                <p>✓ All major makes — cars &amp; vans</p>
                <p>✓ Cheaper than main dealer</p>
                <p>✓ Fixed price before we start</p>
              </div>
              <QuoteForm />
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section backgroundVariant="accent">
        <Container>
          <SectionHeading title="Spare Car Key Didsbury — FAQs" centered />
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

      {/* Internal link cluster */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-slate-700 mb-3">Related services in Didsbury and Chorlton:</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Auto Locksmith Didsbury', href: '/auto-locksmith-didsbury' },
                { label: 'Car Key Programming Didsbury', href: '/car-key-programming-didsbury' },
                { label: 'Car Key Replacement Didsbury', href: '/car-key-replacement-didsbury' },
                { label: 'Lost Car Keys Didsbury', href: '/lost-car-keys-didsbury' },
                { label: 'Car Key Replacement Chorlton', href: '/car-key-replacement-chorlton' },
                { label: 'Auto Locksmith Chorlton', href: '/auto-locksmith-chorlton' },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="text-sm bg-amber-50 border border-amber-200 text-slate-950 font-medium px-4 py-2 rounded-lg hover:bg-amber-400 hover:border-amber-400 transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Bottom CTA */}
      <Section backgroundVariant="accent">
        <Container>
          <div className="text-center py-4">
            <h2 className="text-2xl font-bold text-slate-950 mb-3">Get a Spare Car Key in Didsbury Today</h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">Call now — we come to you in Didsbury and cut and programme your spare key on-site.</p>
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
