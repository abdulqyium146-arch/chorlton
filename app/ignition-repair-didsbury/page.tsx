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
  title: 'Ignition Repair Didsbury | Key Won\'t Turn? On-Site Fix | 07309 903243',
  description:
    'Ignition repair in Didsbury — key turning stiffly, not at all, or stuck in the barrel? Mobile locksmith diagnoses and repairs ignition barrels at the roadside. Call 07309 903243.',
  keywords: ['ignition repair Didsbury', 'ignition barrel repair Didsbury', 'key won\'t turn ignition Didsbury', 'ignition locksmith Didsbury'],
  openGraph: {
    title: 'Ignition Repair Didsbury | On-Site Barrel Repair & Replacement',
    description: 'Key turning stiffly or not at all in Didsbury? Mobile ignition repair — barrel diagnosis, repair, or full replacement at the roadside. Call 07309 903243.',
    url: 'https://chorltonlocksmiths.com/ignition-repair-didsbury',
    type: 'website',
    siteName: 'Chorlton Locksmiths',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ignition Repair Didsbury | On-Site | 07309 903243',
    description: 'Ignition barrel fault in Didsbury? We diagnose and repair at the roadside — no workshop needed. Call 07309 903243.',
  },
  alternates: { canonical: 'https://chorltonlocksmiths.com/ignition-repair-didsbury' },
  robots: { index: true, follow: true },
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Auto Locksmith Didsbury', url: '/auto-locksmith-didsbury' },
  { name: 'Ignition Repair Didsbury', url: '/ignition-repair-didsbury' },
])

const pageSchema = generateServicePageSchema({
  url: '/ignition-repair-didsbury',
  name: 'Ignition Repair Didsbury | Chorlton Locksmiths',
  description: 'Ignition repair in Didsbury — key not turning or stuck in the barrel? Mobile locksmith diagnoses and repairs ignition faults at the roadside.',
  dateModified: '2026-04-23',
})

const serviceSchema = generateServiceSchema({
  name: 'Ignition Repair Didsbury',
  description: 'Mobile ignition repair service in Didsbury, Manchester. We diagnose and repair ignition barrel faults — key turning stiffly, key not turning, key stuck in ignition, or worn cylinder — at the roadside without a workshop visit.',
  url: '/ignition-repair-didsbury',
  serviceType: 'Ignition Repair',
})

const howToSchema = generateHowToSchema({
  name: 'How Ignition Repair Works in Didsbury',
  description: 'The process Chorlton Locksmiths follows for diagnosing and repairing ignition faults at the roadside in Didsbury.',
  steps: [
    { name: 'Call 07309 903243', text: 'Describe the ignition fault — stiff key, key not turning, or key stuck. Tell us your vehicle make, model, and Didsbury location.' },
    { name: 'We assess remotely', text: 'We confirm the likely fault type and whether our on-site repair service is appropriate for your vehicle.' },
    { name: 'We arrive in ~30 minutes', text: 'Our mobile van arrives in Didsbury with ignition barrel diagnostic tools and common replacement parts.' },
    { name: 'Fault diagnosed on-site', text: 'We diagnose the specific ignition fault — worn tumblers, seized cylinder, broken spring, or steering column lock engagement.' },
    { name: 'Barrel repaired or replaced', text: 'We carry out the ignition barrel repair or full barrel replacement at the roadside, restoring the vehicle to full working order.' },
  ],
})

const faqs = [
  {
    question: 'My key is turning very stiffly in the ignition — do I need the ignition replaced?',
    answer:
      'Not necessarily. A stiff ignition is often caused by worn internal tumblers in the barrel that no longer align cleanly with the key profile. In many cases this can be repaired or the barrel reconditioned rather than requiring a full replacement. We diagnose the specific fault on arrival and recommend the most cost-effective fix.',
  },
  {
    question: 'My key will not turn in the ignition at all — is the steering column locked?',
    answer:
      'A completely seized ignition is sometimes caused by the steering column lock engaging (typically when the wheel is turned while the ignition is off). Try gently moving the steering wheel left and right while turning the key — this sometimes releases the lock. If the key still will not turn, the fault is likely in the ignition barrel itself. Call us and we will diagnose it at your Didsbury location.',
  },
  {
    question: 'Can you repair an ignition barrel on-site in Didsbury without taking the car to a workshop?',
    answer:
      'Yes. Our mobile van carries the tools and common replacement parts to carry out ignition barrel repairs and full barrel replacements at the roadside. The majority of ignition faults across common makes can be resolved in a single on-site visit in Didsbury.',
  },
  {
    question: 'The key broke inside the ignition — can you extract it?',
    answer:
      'Yes. Key extraction from ignition barrels is a specialist skill. We use professional extraction tools to remove the broken piece without damaging the barrel. If the barrel is damaged during the break, we can assess whether a repair or replacement is required. See also our key stuck in ignition Didsbury service.',
  },
  {
    question: 'How much does ignition repair cost in Didsbury?',
    answer:
      'Ignition barrel repair typically starts from £95–£130 depending on the nature of the fault and the vehicle make. Full barrel replacement typically ranges from £130–£200+. We always diagnose the fault and provide a fixed price before any work starts. Call 07309 903243 for an estimate.',
  },
]

const faqSchema = generateFAQSchema(faqs)

export default function IgnitionRepairDidsburyPage() {
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
                <li className="text-slate-300">Ignition Repair Didsbury</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Ignition Repair Didsbury — Diagnosed &amp; Fixed at the Roadside
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Key turning stiffly, not turning at all, or stuck in the ignition barrel in Didsbury? Chorlton Locksmiths diagnoses and repairs ignition barrel faults at your location — no workshop, no tow truck, no dealer.
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
              { icon: <Wrench size={20} className="text-slate-950" />, title: 'On-Site Diagnosis', body: 'We identify the specific ignition fault at your Didsbury location — worn tumblers, seized cylinder, or damaged lock mechanism.' },
              { icon: <Clock size={20} className="text-slate-950" />, title: '~30 Min Response', body: 'Dispatched from Chorlton — consistently reaching Didsbury within 30 minutes of your call.' },
              { icon: <ShieldCheck size={20} className="text-slate-950" />, title: 'Repair or Replace', body: 'We carry out barrel repairs or full ignition replacements at the roadside — no workshop or dealer visit needed.' },
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

      {/* Fault types */}
      <Section backgroundVariant="accent">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-950 mb-6">Ignition Faults We Diagnose &amp; Fix in Didsbury</h2>
            <div className="space-y-4">
              {[
                { title: 'Stiff or difficult key turn', body: 'Worn ignition barrel tumblers no longer align properly with the key profile. Often repairable without full replacement.' },
                { title: 'Key will not turn at all', body: 'Seized ignition barrel — caused by worn or broken internal components. Sometimes confused with steering column lock engagement.' },
                { title: 'Key turns but engine will not start', body: 'May indicate a transponder mismatch, immobiliser fault, or ignition switch (electrical) failure rather than the mechanical barrel — we diagnose which.' },
                { title: 'Key stuck in the ignition barrel', body: 'Worn tumblers can trap the key inside. We extract the key and assess whether the barrel can be repaired or needs replacing. See also our key stuck in ignition Didsbury service.' },
                { title: 'Broken key in ignition', body: 'Key snapped inside the barrel — we extract the broken section using specialist tools and repair or replace the barrel as required.' },
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
              <SectionHeading title="Ignition Repair Process in Didsbury" />
              <ol className="space-y-5">
                {[
                  { step: '1', title: 'Call 07309 903243', desc: 'Describe the ignition fault and your vehicle and Didsbury location.' },
                  { step: '2', title: 'We Arrive in ~30 Minutes', desc: 'Mobile and equipped with ignition diagnostic tools and common barrel parts.' },
                  { step: '3', title: 'On-Site Diagnosis', desc: 'We identify the exact fault — barrel, electrical switch, or immobiliser — and explain it clearly.' },
                  { step: '4', title: 'Fixed Price Before Any Work', desc: 'Repair or replacement cost agreed with you before anything is touched.' },
                  { step: '5', title: 'Repaired or Replaced', desc: 'Ignition barrel repaired or replaced at the roadside. Vehicle back in full working order.' },
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
                  <Link href="/ignition-replacement-didsbury" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">ignition replacement Didsbury</Link>
                  {' '}·{' '}
                  <Link href="/key-stuck-in-ignition-didsbury" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">key stuck in ignition Didsbury</Link>
                  {' '}·{' '}
                  <Link href="/ignition-repair-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">ignition repair Chorlton</Link>
                </p>
              </div>
            </div>
            <div className="bg-slate-950 text-white rounded-xl p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-2">Ignition Problem in Didsbury?</h3>
              <p className="text-slate-400 text-sm mb-6">On-site diagnosis — repair or replacement at the roadside</p>
              <div className="mb-6">
                <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">Call Now</p>
                <a href="tel:+447309903243" className="text-3xl font-bold text-amber-400 hover:text-amber-300 transition-colors">07309 903243</a>
              </div>
              <div className="space-y-2 text-sm text-slate-300 mb-8">
                <p>✓ Barrel repair or full replacement</p>
                <p>✓ Key extraction — stuck or broken</p>
                <p>✓ All major makes</p>
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
          <SectionHeading title="Ignition Repair Didsbury — FAQs" centered />
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
            <p className="text-sm font-semibold text-slate-700 mb-3">Related ignition and auto locksmith services:</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Auto Locksmith Didsbury', href: '/auto-locksmith-didsbury' },
                { label: 'Ignition Replacement Didsbury', href: '/ignition-replacement-didsbury' },
                { label: 'Key Stuck in Ignition Didsbury', href: '/key-stuck-in-ignition-didsbury' },
                { label: 'Broken Car Key Didsbury', href: '/broken-car-key-didsbury' },
                { label: 'Ignition Repair Chorlton', href: '/ignition-repair-chorlton' },
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
            <h2 className="text-2xl font-bold text-slate-950 mb-3">Ignition Fault in Didsbury?</h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">Call now — we diagnose and repair ignition barrels at your location in around 30 minutes.</p>
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
