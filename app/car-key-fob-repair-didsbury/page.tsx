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
  title: 'Car Key Fob Repair Didsbury | Remote Not Working? | 07309 903243',
  description:
    'Car key fob repair in Didsbury — remote not locking or unlocking? We diagnose dead batteries, failed circuits, and programming faults at the roadside. Call 07309 903243.',
  keywords: ['car key fob repair Didsbury', 'key fob not working Didsbury', 'remote key repair Didsbury', 'car remote repair Didsbury'],
  openGraph: {
    title: 'Car Key Fob Repair Didsbury | Diagnosed & Fixed On-Site',
    description: 'Key fob not working in Didsbury? We diagnose battery, circuit, and programming faults at the roadside. Call 07309 903243.',
    url: 'https://chorltonlocksmiths.com/car-key-fob-repair-didsbury',
    type: 'website',
    siteName: 'Chorlton Locksmiths',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Key Fob Repair Didsbury | On-Site Diagnosis | 07309 903243',
    description: 'Key fob not working in Didsbury? Battery, circuit, or programming — we diagnose and fix at the roadside. Call 07309 903243.',
  },
  alternates: { canonical: 'https://chorltonlocksmiths.com/car-key-fob-repair-didsbury' },
  robots: { index: true, follow: true },
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Auto Locksmith Didsbury', url: '/auto-locksmith-didsbury' },
  { name: 'Car Key Fob Repair Didsbury', url: '/car-key-fob-repair-didsbury' },
])

const pageSchema = generateServicePageSchema({
  url: '/car-key-fob-repair-didsbury',
  name: 'Car Key Fob Repair Didsbury | Chorlton Locksmiths',
  description: 'Car key fob repair in Didsbury — dead battery, failed circuit board, or programming fault diagnosed and resolved at the roadside.',
  dateModified: '2026-04-23',
})

const serviceSchema = generateServiceSchema({
  name: 'Car Key Fob Repair Didsbury',
  description: 'Mobile car key fob repair and reprogramming service in Didsbury, Manchester. We diagnose remote key fob faults — dead battery, failed circuit board, lost synchronisation — and repair or replace at the roadside.',
  url: '/car-key-fob-repair-didsbury',
  serviceType: 'Car Key Fob Repair',
})

const howToSchema = generateHowToSchema({
  name: 'How Car Key Fob Repair Works in Didsbury',
  description: 'The process Chorlton Locksmiths follows for diagnosing and repairing a car key fob in Didsbury.',
  steps: [
    { name: 'Call 07309 903243', text: 'Describe the fault — remote not locking, not unlocking, or not working at all. Tell us your vehicle make, model, and Didsbury location.' },
    { name: 'We confirm the likely fault', text: 'Many fob failures are simple battery replacements; others require re-synchronisation or circuit board repair. We advise on the likely cause over the phone.' },
    { name: 'We arrive in ~30 minutes', text: 'Our mobile van carries key fob diagnostic equipment, common battery sizes, and programming tools.' },
    { name: 'Fob diagnosed on-site', text: 'We test the fob signal, the vehicle receiver, and the battery to identify the actual fault.' },
    { name: 'Repaired or reprogrammed', text: 'We replace the battery, repair the circuit board, or reprogram the fob to your vehicle — whichever resolves the fault.' },
  ],
})

const faqs = [
  {
    question: 'My car key fob is not working in Didsbury — is it just a dead battery?',
    answer:
      'A dead battery is the most common cause of a non-responsive key fob and the easiest fix. However, it is not always the only cause. Some fobs lose their programming to the vehicle after a battery change, and some develop faults in the circuit board or the rubber button contacts. We always carry out a proper diagnosis rather than just replacing the battery and hoping for the best.',
  },
  {
    question: 'Can you reprogram a key fob that has stopped working in Didsbury?',
    answer:
      'Yes. Key fob re-synchronisation is a standard part of our mobile service. In many cases a fob that has stopped working has simply lost its pairing with the vehicle remote entry receiver — this can happen after a battery swap, a flat car battery, or an ECU reset. We re-synchronise the fob to the vehicle at the roadside.',
  },
  {
    question: 'My fob locks the car but not unlocks it — or vice versa. What is the cause?',
    answer:
      'Partial fob failure — where one function works and another does not — is usually caused by a faulty button contact inside the fob, a cracked circuit board, or a vehicle receiver issue rather than a simple battery fault. We diagnose the specific component causing the partial failure and carry out the appropriate repair.',
  },
  {
    question: 'Can you supply a new key fob for my car in Didsbury?',
    answer:
      'Yes. If your existing fob is beyond repair, we can supply and programme a compatible replacement fob at the roadside for most common makes including Ford, Vauxhall, BMW, Audi, Volkswagen, Mercedes, Toyota, Nissan, and Kia. We programme the new fob to your vehicle on-site — no dealer visit required.',
  },
  {
    question: 'How much does key fob repair cost in Didsbury?',
    answer:
      'Battery replacement typically costs £20–£40 including the diagnosis. Re-synchronisation starts from £45–£65. Circuit board repair or replacement fob supply and programming typically ranges from £75–£150 depending on the vehicle. A fixed quote is always given before any work starts. Call 07309 903243 for an estimate.',
  },
]

const faqSchema = generateFAQSchema(faqs)

export default function CarKeyFobRepairDidsburyPage() {
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
                <li className="text-slate-300">Car Key Fob Repair Didsbury</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Car Key Fob Repair Didsbury — Diagnosed &amp; Fixed at the Roadside
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Key fob not locking or unlocking your car in Didsbury? Chorlton Locksmiths diagnoses the actual cause — dead battery, circuit board fault, or lost programming — and resolves it at your location. No guessing, no unnecessary replacements.
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
              { icon: <Key size={20} className="text-slate-950" />, title: 'Proper Diagnosis First', body: 'We test the fob signal, battery, and vehicle receiver — not just assume it is a battery issue.' },
              { icon: <Clock size={20} className="text-slate-950" />, title: '~30 Min to Didsbury', body: 'Dispatched from Chorlton — typically reaching any Didsbury location within 30 minutes.' },
              { icon: <ShieldCheck size={20} className="text-slate-950" />, title: 'Repair or Replace', body: 'Battery swap, re-sync, circuit repair, or new fob supply — whichever actually fixes the fault.' },
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
            <h2 className="text-2xl font-bold text-slate-950 mb-6">Key Fob Faults We Diagnose in Didsbury</h2>
            <div className="space-y-4">
              {[
                { title: 'Dead or weak battery', body: 'The most common fault. We replace the battery with the correct type and re-test — if the fob still does not work, we investigate further.' },
                { title: 'Lost synchronisation', body: 'After a battery swap or flat car battery, the fob can lose its pairing with the vehicle receiver. We re-synchronise at the roadside.' },
                { title: 'Faulty button contacts', body: 'Rubber button pads degrade over time, causing intermittent or failed button responses. Repairable in many cases without a full fob replacement.' },
                { title: 'Cracked or damaged circuit board', body: 'Physical damage or moisture ingress can cause circuit board failure. We assess repairability and can supply a replacement fob if needed.' },
                { title: 'Vehicle receiver fault', body: 'If the fob is working but the car is not responding, the fault may be in the vehicle central locking receiver rather than the fob itself. We diagnose the correct component.' },
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
              <SectionHeading title="Key Fob Repair Process in Didsbury" />
              <ol className="space-y-5">
                {[
                  { step: '1', title: 'Call 07309 903243', desc: 'Describe the fob fault and your vehicle make, model, and Didsbury location.' },
                  { step: '2', title: 'We Arrive in ~30 Minutes', desc: 'Mobile van with diagnostic equipment, common batteries, and fob programming tools.' },
                  { step: '3', title: 'Fob Diagnosed On-Site', desc: 'We test signal strength, battery, button contacts, and vehicle receiver to find the actual fault.' },
                  { step: '4', title: 'Fixed Price Agreed', desc: 'We explain the fault and quote a fixed price before any repair begins.' },
                  { step: '5', title: 'Repaired or Reprogrammed', desc: 'Battery replaced, fob re-synced, or new fob supplied and programmed — whichever resolves it.' },
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
                  <Link href="/car-key-replacement-didsbury" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">car key replacement Didsbury</Link>
                  {' '}·{' '}
                  <Link href="/car-key-programming-didsbury" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">car key programming Didsbury</Link>
                  {' '}·{' '}
                  <Link href="/car-key-fob-repair-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">key fob repair Chorlton</Link>
                </p>
              </div>
            </div>
            <div className="bg-slate-950 text-white rounded-xl p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-2">Key Fob Not Working in Didsbury?</h3>
              <p className="text-slate-400 text-sm mb-6">On-site diagnosis — proper fix, not just a battery swap</p>
              <div className="mb-6">
                <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">Call Now</p>
                <a href="tel:+447309903243" className="text-3xl font-bold text-amber-400 hover:text-amber-300 transition-colors">07309 903243</a>
              </div>
              <div className="space-y-2 text-sm text-slate-300 mb-8">
                <p>✓ Proper fault diagnosis</p>
                <p>✓ Battery, circuit &amp; sync faults</p>
                <p>✓ New fob supply &amp; programming</p>
                <p>✓ All major makes</p>
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
          <SectionHeading title="Car Key Fob Repair Didsbury — FAQs" centered />
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
                { label: 'Car Key Replacement Didsbury', href: '/car-key-replacement-didsbury' },
                { label: 'Car Key Programming Didsbury', href: '/car-key-programming-didsbury' },
                { label: 'Car Key Repair Didsbury', href: '/car-key-repair-didsbury' },
                { label: 'Key Fob Repair Chorlton', href: '/car-key-fob-repair-chorlton' },
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
            <h2 className="text-2xl font-bold text-slate-950 mb-3">Key Fob Not Working in Didsbury?</h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">Call now — we diagnose the real fault and fix it at your location.</p>
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
