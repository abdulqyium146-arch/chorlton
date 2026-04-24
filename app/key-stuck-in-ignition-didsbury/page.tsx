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
  title: 'Key Stuck in Ignition Didsbury | Do Not Force It — Call Us | 07309 903243',
  description:
    'Key stuck in ignition in Didsbury? Do not force it — call Chorlton Locksmiths. We diagnose and resolve stuck ignition keys at the roadside. Call 07309 903243.',
  keywords: ['key stuck in ignition Didsbury', 'key won\'t come out of ignition Didsbury', 'ignition key stuck Didsbury', 'remove key from ignition Didsbury'],
  openGraph: {
    title: 'Key Stuck in Ignition Didsbury | Do Not Force It — We Can Help',
    description: 'Key stuck in your ignition in Didsbury? Do not force it. Call us — we diagnose and resolve at the roadside. 07309 903243.',
    url: 'https://chorltonlocksmiths.com/key-stuck-in-ignition-didsbury',
    type: 'website',
    siteName: 'Chorlton Locksmiths',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Key Stuck in Ignition Didsbury | 07309 903243',
    description: 'Key stuck in ignition in Didsbury? Do not force it. Mobile locksmith — diagnosed and resolved at the roadside. Call 07309 903243.',
  },
  alternates: { canonical: 'https://chorltonlocksmiths.com/key-stuck-in-ignition-didsbury' },
  robots: { index: true, follow: true },
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Auto Locksmith Didsbury', url: '/auto-locksmith-didsbury' },
  { name: 'Key Stuck in Ignition Didsbury', url: '/key-stuck-in-ignition-didsbury' },
])

const pageSchema = generateServicePageSchema({
  url: '/key-stuck-in-ignition-didsbury',
  name: 'Key Stuck in Ignition Didsbury | Chorlton Locksmiths',
  description: 'Key stuck in ignition in Didsbury — do not force it. Mobile locksmith diagnoses and resolves stuck ignition keys at the roadside.',
  dateModified: '2026-04-23',
})

const serviceSchema = generateServiceSchema({
  name: 'Key Stuck in Ignition Didsbury',
  description: 'Mobile service for keys stuck in vehicle ignitions in Didsbury, Manchester. We diagnose the cause — worn tumblers, steering lock, electrical fault — and resolve at the roadside without forcing or damaging the ignition barrel.',
  url: '/key-stuck-in-ignition-didsbury',
  serviceType: 'Key Stuck in Ignition',
})

const howToSchema = generateHowToSchema({
  name: 'What to Do When Your Key Is Stuck in the Ignition in Didsbury',
  description: 'The correct steps to take — and avoid — when a key is stuck in the ignition in Didsbury.',
  steps: [
    { name: 'Do not force the key', text: 'Forcing a stuck key can snap it inside the barrel, damage the ignition cylinder, or break the transponder chip. Leave it exactly as it is.' },
    { name: 'Try the steering column lock first', text: 'If the steering wheel is turned slightly and locked, the ignition may not release the key. Gently turn the steering wheel while applying light pressure to the key — this sometimes releases the lock.' },
    { name: 'Ensure the vehicle is in Park or Neutral', text: 'Some vehicles with automatic transmission will not release the ignition key unless the gear selector is in Park. Check the gear position.' },
    { name: 'Call 07309 903243', text: 'If the simple checks do not resolve it, call us. We come to your Didsbury location with the correct diagnostic and extraction tools.' },
    { name: 'We resolve it at the roadside', text: 'We diagnose the cause — worn barrel, steering lock, electrical fault, or transponder issue — and resolve it without forcing or damaging the ignition.' },
  ],
})

const faqs = [
  {
    question: 'Why is my key stuck in the ignition in Didsbury?',
    answer:
      'A key stuck in the ignition has several possible causes. The most common are: the steering column lock engaging and preventing key withdrawal; the gear selector not being in Park (on automatics); worn ignition barrel tumblers that have deformed around the key profile; a broken or bent key blade that has lodged in the barrel; or an electrical fault in the ignition interlock system. We diagnose the specific cause before recommending any action.',
  },
  {
    question: 'Should I try to force the key out of the ignition myself?',
    answer:
      'No. Forcing a stuck ignition key is one of the most common ways a key ends up snapped inside the barrel. It can also damage the ignition cylinder tumblers and make the subsequent repair significantly more expensive. The correct approach is to try the simple checks (steering lock release, gear selector position) and, if those do not work, call a specialist. We come to your Didsbury location with the right tools.',
  },
  {
    question: 'Can you remove a stuck key from the ignition without breaking it?',
    answer:
      'Yes, in the majority of cases. We use specialist ignition diagnostic tools and targeted release techniques appropriate to the specific cause. If the key has not been forced and remains intact, removal is typically straightforward. If the key has already been bent or partially snapped by previous attempts, extraction is more complex but still usually achievable.',
  },
  {
    question: 'Will the ignition barrel need replacing after the key is removed?',
    answer:
      'Not necessarily. If the key was stuck due to the steering lock, gear selector, or a transponder interlock rather than a mechanical barrel fault, the barrel itself may be undamaged and no replacement is required. If the barrel has worn tumblers that caused the key to stick, we assess whether repair or replacement is the correct fix — and explain both options before starting.',
  },
  {
    question: 'How much does it cost to fix a key stuck in the ignition in Didsbury?',
    answer:
      'If the cause is the steering lock or gear selector, there may be minimal cost. If barrel work is required, key-stuck-in-ignition diagnosis and resolution typically starts from £65–£95. Barrel repair or replacement, if needed, is quoted separately. We always provide a fixed price before any work begins. Call 07309 903243 for guidance.',
  },
]

const faqSchema = generateFAQSchema(faqs)

export default function KeyStuckInIgnitionDidsburyPage() {
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
                <li><Link href="/auto-locksmith-didsbury" className="hover:text-amber-400 transition-colors">Auto Locksmith Didsbury</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-slate-300">Key Stuck in Ignition Didsbury</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Key Stuck in Ignition Didsbury — Do Not Force It
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Key stuck in your ignition in Didsbury and will not come out? Do not force it — forcing a stuck ignition key is the most common way it ends up snapping inside the barrel. Call Chorlton Locksmiths. We diagnose the cause and resolve it at the roadside.
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
              { icon: <ShieldCheck size={20} className="text-slate-950" />, title: 'Diagnose First', body: 'Steering lock, gear selector, worn barrel, or transponder fault — we find the actual cause.' },
              { icon: <Wrench size={20} className="text-slate-950" />, title: 'No Forcing', body: 'We use correct specialist tools and techniques — no force that risks snapping the key inside the barrel.' },
              { icon: <Clock size={20} className="text-slate-950" />, title: '~30 Min to Didsbury', body: 'Dispatched from Chorlton — typically reaching any Didsbury location within 30 minutes.' },
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
            <div className="p-6 bg-amber-50 border-l-4 border-amber-400 rounded-xl mb-8">
              <h2 className="font-bold text-slate-950 mb-2">Important: Do Not Force the Key</h2>
              <p className="text-slate-700 text-sm leading-relaxed">
                The instinct when a key will not come out is to pull harder or wiggle it forcefully. This almost always makes the situation worse. A stuck key that is forced can snap inside the barrel, damage the internal tumblers, and turn a straightforward diagnosis into an expensive extraction and replacement job. Leave the key exactly where it is and call us.
              </p>
            </div>
            <h2 className="text-2xl font-bold text-slate-950 mb-6">Causes of a Key Stuck in the Ignition in Didsbury</h2>
            <div className="space-y-4">
              {[
                { title: 'Steering column lock engaged', body: 'If the steering wheel is at a slight angle when the ignition is turned off, the column lock can grip and prevent key withdrawal. Gently turning the wheel while applying light key pressure sometimes releases it.' },
                { title: 'Gear selector not in Park', body: 'Automatic vehicles have an ignition interlock that prevents key removal unless the selector is in Park. Check the gear position before calling.' },
                { title: 'Worn ignition barrel tumblers', body: 'Over time, the internal tumblers in the ignition barrel can wear and deform around the key profile, trapping it inside the cylinder.' },
                { title: 'Bent or damaged key blade', body: 'A bent blade can jam inside the barrel. The blade must be carefully straightened or extracted without breaking it.' },
                { title: 'Electrical ignition interlock fault', body: 'Some vehicles have electronic systems that hold the key in until specific conditions are met. A fault in this system can trap the key even when conditions appear correct.' },
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

      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading title="Key Stuck in Ignition — Process in Didsbury" />
              <ol className="space-y-5">
                {[
                  { step: '1', title: 'Call 07309 903243', desc: 'Describe the situation and your vehicle make, model, and Didsbury location.' },
                  { step: '2', title: 'We Arrive in ~30 Minutes', desc: 'Mobile van with ignition diagnostic tools arrives at your location.' },
                  { step: '3', title: 'Cause Diagnosed', desc: 'We identify the specific reason the key is stuck — mechanical, electrical, or operator condition.' },
                  { step: '4', title: 'Fixed Price Before Work', desc: 'We explain the fault and provide a firm quote before any intervention begins.' },
                  { step: '5', title: 'Key Released at the Roadside', desc: 'Using the correct tools for the diagnosed cause — no forcing, no damage.' },
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
                  <Link href="/broken-car-key-didsbury" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">broken car key Didsbury</Link>
                  {' '}·{' '}
                  <Link href="/key-stuck-in-ignition-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">key stuck in ignition Chorlton</Link>
                </p>
              </div>
            </div>
            <div className="bg-slate-950 text-white rounded-xl p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-2">Key Stuck in Ignition in Didsbury?</h3>
              <p className="text-slate-400 text-sm mb-6">Do not force it — call us, we diagnose and release at the roadside</p>
              <div className="mb-6">
                <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">Call Now</p>
                <a href="tel:+447309903243" className="text-3xl font-bold text-amber-400 hover:text-amber-300 transition-colors">07309 903243</a>
              </div>
              <div className="space-y-2 text-sm text-slate-300 mb-8">
                <p>✓ No forcing — no damage</p>
                <p>✓ Proper cause diagnosis</p>
                <p>✓ All major makes</p>
                <p>✓ ~30 min response in Didsbury</p>
                <p>✓ Fixed price before we start</p>
              </div>
              <QuoteForm />
            </div>
          </div>
        </Container>
      </Section>

      <Section backgroundVariant="accent">
        <Container>
          <SectionHeading title="Key Stuck in Ignition Didsbury — FAQs" centered />
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
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-slate-700 mb-3">Related ignition and auto locksmith services:</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Ignition Repair Didsbury', href: '/ignition-repair-didsbury' },
                { label: 'Ignition Replacement Didsbury', href: '/ignition-replacement-didsbury' },
                { label: 'Broken Car Key Didsbury', href: '/broken-car-key-didsbury' },
                { label: 'Auto Locksmith Didsbury', href: '/auto-locksmith-didsbury' },
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

      <Section backgroundVariant="accent">
        <Container>
          <div className="text-center py-4">
            <h2 className="text-2xl font-bold text-slate-950 mb-3">Key Stuck in Ignition in Didsbury?</h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">Do not force it. Call now — we diagnose and release the key at the roadside in approximately 30 minutes.</p>
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
