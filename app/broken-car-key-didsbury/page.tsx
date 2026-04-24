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
import { Wrench, Clock, Phone, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Broken Car Key Didsbury | Key Extraction & Replacement | 07309 903243',
  description:
    'Broken car key in Didsbury — key snapped in the door lock or ignition? We extract the broken piece and replace the key at the roadside. Call 07309 903243.',
  keywords: ['broken car key Didsbury', 'snapped car key Didsbury', 'broken key extraction Didsbury', 'key snapped in lock Didsbury'],
  openGraph: {
    title: 'Broken Car Key Didsbury | Extraction & Replacement On-Site',
    description: 'Broken car key in Didsbury? We extract snapped keys from door locks and ignitions at the roadside — no damage. Call 07309 903243.',
    url: 'https://chorltonlocksmiths.com/broken-car-key-didsbury',
    type: 'website',
    siteName: 'Chorlton Locksmiths',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Broken Car Key Didsbury | Extraction & Replacement | 07309 903243',
    description: 'Key snapped in lock or ignition in Didsbury? We extract and replace at the roadside. Call 07309 903243.',
  },
  alternates: { canonical: 'https://chorltonlocksmiths.com/broken-car-key-didsbury' },
  robots: { index: true, follow: true },
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Auto Locksmith Didsbury', url: '/auto-locksmith-didsbury' },
  { name: 'Broken Car Key Didsbury', url: '/broken-car-key-didsbury' },
])

const pageSchema = generateServicePageSchema({
  url: '/broken-car-key-didsbury',
  name: 'Broken Car Key Didsbury | Chorlton Locksmiths',
  description: 'Broken car key extraction and replacement in Didsbury — keys snapped in door locks or ignitions extracted at the roadside.',
  dateModified: '2026-04-23',
})

const serviceSchema = generateServiceSchema({
  name: 'Broken Car Key Didsbury',
  description: 'Mobile broken car key extraction and replacement service in Didsbury, Manchester. We extract snapped keys from door locks and ignition barrels using specialist tools, then cut and programme a replacement key at the roadside.',
  url: '/broken-car-key-didsbury',
  serviceType: 'Broken Car Key Extraction',
})

const howToSchema = generateHowToSchema({
  name: 'How Broken Car Key Extraction Works in Didsbury',
  description: 'The process for extracting a broken car key and producing a replacement at the roadside in Didsbury.',
  steps: [
    { name: 'Call 07309 903243', text: 'Tell us where the key has broken — door lock or ignition — and your vehicle make, model, and Didsbury location.' },
    { name: 'Do not try to extract it yourself', text: 'Attempting to pull a broken key with pliers can push it deeper into the barrel and cause additional damage. Wait for us.' },
    { name: 'We arrive in ~30 minutes', text: 'Our mobile van carries specialist key extraction tools designed for automotive lock barrels.' },
    { name: 'Broken piece extracted', text: 'We use extraction hooks and picks to remove the snapped key section without damaging the lock barrel.' },
    { name: 'Replacement key cut and programmed', text: 'Once the barrel is clear, we cut and programme a replacement key at the roadside — or produce a new key from the broken section if the profile is identifiable.' },
  ],
})

const faqs = [
  {
    question: 'My car key has snapped in the door lock in Didsbury — what should I do?',
    answer:
      'Do not try to extract it yourself using pliers or tweezers. Gripping a broken key that has sheared inside the barrel and pulling or twisting can push the piece deeper, damage the internal tumblers, or make extraction significantly more difficult. Call us on 07309 903243, stay with the vehicle, and we will be with you in Didsbury within approximately 30 minutes with the correct specialist extraction tools.',
  },
  {
    question: 'Can you extract a broken key without damaging the lock barrel?',
    answer:
      'Yes, in the vast majority of cases. We use specialist automotive extraction tools — hook picks and extractor sets designed specifically for vehicle lock barrels — which allow us to grip and remove the broken key section without damaging the barrel tumblers or the lock housing. If the barrel has already been damaged before we arrive, we will assess whether it can still be repaired.',
  },
  {
    question: 'What if only half the key blade is inside the lock?',
    answer:
      'This is the most common scenario — the key shears at the shoulder, leaving part of the blade inside the lock while the other half (with the fob) remains outside. The extraction process is the same: we remove the section inside the barrel, then cut a replacement blade. If the profile of your key is identifiable, we may be able to cut from the broken piece.',
  },
  {
    question: 'Can you cut a replacement key in Didsbury after extracting the broken one?',
    answer:
      'Yes. After extracting the broken key, we cut and programme a replacement key at the roadside. We have key-cutting machinery and transponder programming equipment in our mobile van. In most cases, extraction and replacement is a single visit — you drive away with a fully working new key.',
  },
  {
    question: 'How much does broken key extraction cost in Didsbury?',
    answer:
      'Key extraction from a door lock or ignition barrel typically starts from £55–£85 depending on the vehicle. If a replacement key is also needed, this is quoted separately. We provide a fixed price before any work starts. Call 07309 903243 for an estimate.',
  },
]

const faqSchema = generateFAQSchema(faqs)

export default function BrokenCarKeyDidsburyPage() {
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
                <li className="text-slate-300">Broken Car Key Didsbury</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Broken Car Key Didsbury — Extraction &amp; Replacement at the Roadside
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Car key snapped in the door lock or ignition barrel in Didsbury? Do not attempt to extract it yourself — call Chorlton Locksmiths. We extract broken keys using specialist tools, then cut and programme a replacement at the roadside.
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
              { icon: <Wrench size={20} className="text-slate-950" />, title: 'Specialist Extraction', body: 'Automotive extraction tools designed for vehicle lock barrels — no barrel damage in the vast majority of cases.' },
              { icon: <Clock size={20} className="text-slate-950" />, title: '~30 Min to Didsbury', body: 'Dispatched from Chorlton — consistently reaching Didsbury within 30 minutes of your call.' },
              { icon: <ShieldCheck size={20} className="text-slate-950" />, title: 'Replacement Produced On-Site', body: 'Extraction and replacement key cut and programmed at the roadside in a single visit.' },
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

      {/* Warning box */}
      <Section backgroundVariant="accent">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="p-6 bg-amber-50 border-l-4 border-amber-400 rounded-xl mb-8">
              <h2 className="font-bold text-slate-950 mb-2">Important: Do Not Try to Extract a Broken Key Yourself</h2>
              <p className="text-slate-700 text-sm leading-relaxed">
                A common mistake when a key snaps in a lock is to grip the visible end with pliers or tweezers and try to pull or twist it out. This almost always makes the situation worse — pushing the broken piece deeper, rotating it so it jams across the tumblers, or bending it in a way that makes professional extraction significantly harder. Call us immediately and leave the key as it is.
              </p>
            </div>
            <h2 className="text-2xl font-bold text-slate-950 mb-6">Broken Key Scenarios We Handle in Didsbury</h2>
            <div className="space-y-4">
              {[
                { title: 'Key snapped in door lock', body: 'Most commonly happens when the lock is cold or stiff and force is applied. We extract the blade and open the door, then cut a replacement key.' },
                { title: 'Key snapped in ignition barrel', body: 'Turning the ignition with a worn or bent key can cause it to shear inside the barrel. We extract it and repair or replace the barrel if necessary.' },
                { title: 'Key broken at the shoulder', body: 'The point where the blade meets the fob is a common break point. If half the blade is inside the barrel and half outside, we extract the internal piece and cut a new blade.' },
                { title: 'Bent key causing lock damage', body: 'A severely bent key can damage the barrel tumblers as it is used. We assess the barrel condition after key removal and advise on repair or replacement.' },
              ].map((s, i) => (
                <div key={i} className="p-5 bg-white rounded-xl border border-slate-200">
                  <h3 className="font-bold text-slate-950 mb-1">{s.title}</h3>
                  <p className="text-slate-600 text-sm">{s.body}</p>
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
              <SectionHeading title="Broken Key Extraction Process in Didsbury" />
              <ol className="space-y-5">
                {[
                  { step: '1', title: 'Call 07309 903243', desc: 'Tell us where the key broke — door lock or ignition — and leave it exactly as it is.' },
                  { step: '2', title: 'We Arrive in ~30 Minutes', desc: 'Mobile van with specialist extraction tools arrives at your Didsbury location.' },
                  { step: '3', title: 'Fixed Price Agreed', desc: 'We assess the broken key and barrel condition, then quote before any work begins.' },
                  { step: '4', title: 'Key Extracted Without Damage', desc: 'Specialist hooks remove the broken piece without harming the barrel tumblers.' },
                  { step: '5', title: 'Replacement Cut On-Site', desc: 'We cut and programme a replacement key at the roadside — one visit resolves the entire problem.' },
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
                  <Link href="/ignition-repair-didsbury" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">ignition repair Didsbury</Link>
                  {' '}·{' '}
                  <Link href="/car-key-repair-didsbury" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">car key repair Didsbury</Link>
                  {' '}·{' '}
                  <Link href="/broken-car-key-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">broken car key Chorlton</Link>
                </p>
              </div>
            </div>
            <div className="bg-slate-950 text-white rounded-xl p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-2">Key Snapped in Didsbury?</h3>
              <p className="text-slate-400 text-sm mb-6">Do not touch it — call us, we extract and replace at the roadside</p>
              <div className="mb-6">
                <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">Emergency Line</p>
                <a href="tel:+447309903243" className="text-3xl font-bold text-amber-400 hover:text-amber-300 transition-colors">07309 903243</a>
              </div>
              <div className="space-y-2 text-sm text-slate-300 mb-8">
                <p>✓ Specialist extraction tools</p>
                <p>✓ Door lock &amp; ignition barrel</p>
                <p>✓ Replacement key on-site</p>
                <p>✓ ~30 min response in Didsbury</p>
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
          <SectionHeading title="Broken Car Key Didsbury — FAQs" centered />
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
                { label: 'Car Key Repair Didsbury', href: '/car-key-repair-didsbury' },
                { label: 'Ignition Repair Didsbury', href: '/ignition-repair-didsbury' },
                { label: 'Key Stuck in Ignition Didsbury', href: '/key-stuck-in-ignition-didsbury' },
                { label: 'Broken Car Key Chorlton', href: '/broken-car-key-chorlton' },
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
            <h2 className="text-2xl font-bold text-slate-950 mb-3">Car Key Broken in Didsbury?</h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">Do not try to remove it yourself. Call us — we extract and replace at the roadside in approximately 30 minutes.</p>
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
