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
import { Wrench, Clock, Phone, Key } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Car Key Repair Didsbury | Blade, Shell & Fob Repair | 07309 903243',
  description:
    'Car key repair in Didsbury — worn blade, cracked shell, broken button, or damaged fob. Repaired or replaced at the roadside. Call 07309 903243.',
  keywords: ['car key repair Didsbury', 'car key shell repair Didsbury', 'key blade repair Didsbury', 'broken key repair Didsbury'],
  openGraph: {
    title: 'Car Key Repair Didsbury | Blade, Shell & Fob — On-Site',
    description: 'Car key repair in Didsbury — worn blade, cracked shell, broken button, damaged fob. Repaired or replaced at the roadside. Call 07309 903243.',
    url: 'https://chorltonlocksmiths.com/car-key-repair-didsbury',
    type: 'website',
    siteName: 'Chorlton Locksmiths',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Key Repair Didsbury | On-Site | 07309 903243',
    description: 'Car key repair in Didsbury — blade, shell, fob. Repaired or replaced at the roadside. Call 07309 903243.',
  },
  alternates: { canonical: 'https://chorltonlocksmiths.com/car-key-repair-didsbury' },
  robots: { index: true, follow: true },
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Auto Locksmith Didsbury', url: '/auto-locksmith-didsbury' },
  { name: 'Car Key Repair Didsbury', url: '/car-key-repair-didsbury' },
])

const pageSchema = generateServicePageSchema({
  url: '/car-key-repair-didsbury',
  name: 'Car Key Repair Didsbury | Chorlton Locksmiths',
  description: 'Car key repair in Didsbury — worn blade, cracked shell, broken button, or damaged fob repaired or replaced at the roadside.',
  dateModified: '2026-04-23',
})

const serviceSchema = generateServiceSchema({
  name: 'Car Key Repair Didsbury',
  description: 'Mobile car key repair service in Didsbury, Manchester. We repair or replace worn key blades, cracked key shells, broken button pads, and damaged key fob casings at the roadside. For keys beyond repair, we produce a fully working replacement.',
  url: '/car-key-repair-didsbury',
  serviceType: 'Car Key Repair',
})

const howToSchema = generateHowToSchema({
  name: 'How Car Key Repair Works in Didsbury',
  description: 'The process for car key repair or replacement at the roadside in Didsbury.',
  steps: [
    { name: 'Call 07309 903243', text: 'Describe the key fault — worn blade, cracked casing, broken button, or damaged fob — and your vehicle make, model, and Didsbury location.' },
    { name: 'We assess repairability', text: 'Some key faults can be repaired cheaply; others require a replacement. We advise honestly over the phone on the likely approach.' },
    { name: 'We arrive in ~30 minutes', text: 'Our mobile van carries key repair parts, key shell replacements, and key-cutting and programming equipment.' },
    { name: 'Key assessed and repaired', text: 'We repair the specific fault — blade recut, shell replaced, or button pad renewed — where possible.' },
    { name: 'Replacement produced if needed', text: 'Where the key is beyond repair, we produce a fully working replacement at the roadside — blade cut and transponder programmed.' },
  ],
})

const faqs = [
  {
    question: 'My car key blade is worn and the key is getting harder to turn — can it be recut?',
    answer:
      'Yes, in many cases. A worn key blade that is becoming difficult to use can be recut to the original profile from the key code or by decoding the existing blade using specialist equipment. This restores smooth operation and prevents the worn key from eventually failing to turn the lock or ignition altogether. We carry key-cutting equipment in our mobile van and can recut worn blades at your Didsbury location.',
  },
  {
    question: 'My key shell (casing) is cracked — can it be replaced without losing the programming?',
    answer:
      'Yes. Key shell replacement involves transferring the existing transponder chip and circuit board from the damaged casing into a new shell. The chip retains its programming to your vehicle, so no reprogramming is required after the shell swap. This is one of the most straightforward and cost-effective repairs we carry out.',
  },
  {
    question: 'A button on my key fob has stopped working — is this repairable?',
    answer:
      'Often yes. Button failures on key fobs are frequently caused by worn rubber button pads that no longer make proper contact with the circuit board. We carry common replacement button pads and can swap them at the roadside. If the circuit board itself is faulty, we assess whether repair or replacement of the full fob is the better option.',
  },
  {
    question: 'My key is physically damaged beyond repair — can you produce a replacement in Didsbury?',
    answer:
      'Yes. Where a key is beyond repair, we cut and programme a fully working replacement at the roadside using our mobile key-cutting machine and transponder programming equipment. The new key starts the engine and operates all remote locking functions — produced at your Didsbury location in a single visit.',
  },
  {
    question: 'How much does car key repair cost in Didsbury?',
    answer:
      'Key shell replacement typically starts from £45–£75. Blade recut from £35–£65. Button pad replacement from £25–£50. For full key replacement after a beyond-repair assessment, costs start from £95–£160 depending on the vehicle. A fixed price is always agreed before any work begins. Call 07309 903243 for an estimate.',
  },
]

const faqSchema = generateFAQSchema(faqs)

export default function CarKeyRepairDidsburyPage() {
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
                <li className="text-slate-300">Car Key Repair Didsbury</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Car Key Repair Didsbury — Blade, Shell &amp; Fob at the Roadside
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Worn key blade, cracked casing, broken button, or damaged fob in Didsbury? Chorlton Locksmiths repairs car keys at the roadside — and where repair is not possible, produces a fully working replacement in a single visit.
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
              { icon: <Wrench size={20} className="text-slate-950" />, title: 'Repair First', body: 'We repair before recommending replacement — shell swap, blade recut, or button pad are often the cheapest fix.' },
              { icon: <Key size={20} className="text-slate-950" />, title: 'Replacement If Needed', body: 'Beyond-repair keys replaced with a new fully programmed key at the roadside — one visit resolves it.' },
              { icon: <Clock size={20} className="text-slate-950" />, title: '~30 Min to Didsbury', body: 'Dispatched from Chorlton — consistently reaching all Didsbury locations within 30 minutes.' },
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
            <h2 className="text-2xl font-bold text-slate-950 mb-6">Car Key Repairs We Carry Out in Didsbury</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Key shell replacement', body: 'Cracked or broken key casing replaced with a new shell — the existing transponder chip is transferred, so no reprogramming needed.' },
                { title: 'Blade recut', body: 'Worn or damaged key blade recut to the original profile from the key code or by decoding the existing blade profile.' },
                { title: 'Button pad renewal', body: 'Worn rubber button contacts replaced — restores central locking button responsiveness on remote fobs.' },
                { title: 'Fob circuit board assessment', body: 'We test whether a non-responsive fob has a circuit board fault or simply needs a battery or re-sync.' },
                { title: 'Key body reinforcement', body: 'Some keys develop cracks at weak points before they fail fully — we carry repair kits for common key bodies.' },
                { title: 'Full replacement', body: 'Where the key is genuinely beyond repair, we produce a new key — blade cut and programmed — in the same visit.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white rounded-xl border border-slate-200">
                  <h3 className="font-bold text-slate-950 mb-1 text-sm">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.body}</p>
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
              <SectionHeading title="Car Key Repair Process in Didsbury" />
              <ol className="space-y-5">
                {[
                  { step: '1', title: 'Call 07309 903243', desc: 'Describe the key fault and your vehicle make and Didsbury location.' },
                  { step: '2', title: 'We Arrive in ~30 Minutes', desc: 'Mobile van with key repair parts, shell replacements, cutting machine, and programming equipment.' },
                  { step: '3', title: 'Key Assessed', desc: 'We determine whether repair or replacement is the correct approach and quote accordingly.' },
                  { step: '4', title: 'Fixed Price Agreed', desc: 'Firm quote before any work begins — no surprises.' },
                  { step: '5', title: 'Repaired or Replaced', desc: 'Shell swapped, blade recut, button renewed — or full replacement produced if needed.' },
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
                  <Link href="/car-key-fob-repair-didsbury" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">key fob repair Didsbury</Link>
                  {' '}·{' '}
                  <Link href="/broken-car-key-didsbury" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">broken car key Didsbury</Link>
                  {' '}·{' '}
                  <Link href="/car-key-repair-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">car key repair Chorlton</Link>
                </p>
              </div>
            </div>
            <div className="bg-slate-950 text-white rounded-xl p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-2">Car Key Problem in Didsbury?</h3>
              <p className="text-slate-400 text-sm mb-6">Repair or replacement — diagnosed and resolved at the roadside</p>
              <div className="mb-6">
                <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">Call Now</p>
                <a href="tel:+447309903243" className="text-3xl font-bold text-amber-400 hover:text-amber-300 transition-colors">07309 903243</a>
              </div>
              <div className="space-y-2 text-sm text-slate-300 mb-8">
                <p>✓ Shell, blade &amp; fob repair</p>
                <p>✓ Replacement produced if needed</p>
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
          <SectionHeading title="Car Key Repair Didsbury — FAQs" centered />
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
            <p className="text-sm font-semibold text-slate-700 mb-3">Related services in Didsbury and Chorlton:</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Auto Locksmith Didsbury', href: '/auto-locksmith-didsbury' },
                { label: 'Car Key Fob Repair Didsbury', href: '/car-key-fob-repair-didsbury' },
                { label: 'Broken Car Key Didsbury', href: '/broken-car-key-didsbury' },
                { label: 'Car Key Replacement Didsbury', href: '/car-key-replacement-didsbury' },
                { label: 'Car Key Repair Chorlton', href: '/car-key-repair-chorlton' },
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
            <h2 className="text-2xl font-bold text-slate-950 mb-3">Car Key Problem in Didsbury?</h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">Call now — we repair or replace at your location in approximately 30 minutes.</p>
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
