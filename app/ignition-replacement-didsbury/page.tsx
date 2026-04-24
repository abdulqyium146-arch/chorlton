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
  title: 'Ignition Replacement Didsbury | Full Barrel Replaced On-Site | 07309 903243',
  description:
    'Ignition replacement in Didsbury — full ignition barrel replaced at the roadside when repair is not possible. Mobile locksmith, no workshop needed. Call 07309 903243.',
  keywords: ['ignition replacement Didsbury', 'replace ignition barrel Didsbury', 'ignition barrel replacement Didsbury', 'new ignition Didsbury'],
  openGraph: {
    title: 'Ignition Replacement Didsbury | Full Barrel Replaced at the Roadside',
    description: 'Ignition barrel replacement in Didsbury — when repair is not enough, we replace the full barrel on-site. Call 07309 903243.',
    url: 'https://chorltonlocksmiths.com/ignition-replacement-didsbury',
    type: 'website',
    siteName: 'Chorlton Locksmiths',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ignition Replacement Didsbury | On-Site | 07309 903243',
    description: 'Full ignition barrel replacement in Didsbury — mobile locksmith, no workshop. Call 07309 903243.',
  },
  alternates: { canonical: 'https://chorltonlocksmiths.com/ignition-replacement-didsbury' },
  robots: { index: true, follow: true },
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Auto Locksmith Didsbury', url: '/auto-locksmith-didsbury' },
  { name: 'Ignition Replacement Didsbury', url: '/ignition-replacement-didsbury' },
])

const pageSchema = generateServicePageSchema({
  url: '/ignition-replacement-didsbury',
  name: 'Ignition Replacement Didsbury | Chorlton Locksmiths',
  description: 'Ignition barrel replacement in Didsbury — full ignition barrel replaced at the roadside when repair is not viable.',
  dateModified: '2026-04-23',
})

const serviceSchema = generateServiceSchema({
  name: 'Ignition Replacement Didsbury',
  description: 'Mobile ignition barrel replacement service in Didsbury, Manchester. When ignition repair is not viable, we replace the full ignition barrel at the roadside — no workshop visit, no tow truck. All major makes covered.',
  url: '/ignition-replacement-didsbury',
  serviceType: 'Ignition Replacement',
})

const howToSchema = generateHowToSchema({
  name: 'How Ignition Barrel Replacement Works in Didsbury',
  description: 'The process for ignition barrel replacement at the roadside in Didsbury.',
  steps: [
    { name: 'Call 07309 903243', text: 'Describe the ignition fault and your vehicle make, model, and Didsbury location.' },
    { name: 'We arrive in ~30 minutes', text: 'Our mobile van with ignition diagnostic tools and common replacement barrel parts arrives at your location.' },
    { name: 'Fault diagnosed first', text: 'We always diagnose before recommending replacement — repair is used where possible.' },
    { name: 'Replacement barrel fitted', text: 'When the barrel is beyond repair, we fit a replacement ignition barrel at the roadside.' },
    { name: 'New key cut and programmed', text: 'A new key is cut to match the replacement barrel and programmed to the vehicle immobiliser so the car starts normally.' },
  ],
})

const faqs = [
  {
    question: 'How do I know if I need an ignition replacement rather than a repair in Didsbury?',
    answer:
      'We always diagnose before recommending replacement. Ignition repair — such as reconditioning worn tumblers or replacing broken springs — is appropriate for many faults and is cheaper than full barrel replacement. However, when the barrel cylinder is cracked, physically deformed, or the internal mechanism is completely seized beyond the point of repair, a full replacement is the correct solution. We explain the diagnosis and the options clearly before any work begins.',
  },
  {
    question: 'Can you replace an ignition barrel on-site in Didsbury without a workshop?',
    answer:
      'Yes. We carry common replacement ignition barrels for the most frequently requested vehicle makes in our mobile van. Where we carry the correct barrel, the replacement is completed entirely at the roadside. For less common vehicles we may need to order the part — we will tell you this upfront and advise on lead time.',
  },
  {
    question: 'Will I need a new key after ignition barrel replacement?',
    answer:
      'Yes. A replacement ignition barrel has a different internal profile, so a new key must be cut to match it. We cut the new key blade on-site and programme the transponder chip to the vehicle immobiliser, so your replacement key starts the engine normally. The entire process — barrel replacement and new key — is typically completed in a single visit.',
  },
  {
    question: 'What if the ignition switch (electrical part) is also faulty?',
    answer:
      'The ignition has two components: the mechanical barrel (where the key turns) and the electrical ignition switch behind it. We diagnose which component is at fault. Electrical ignition switch replacement is more involved and may require a return visit or a referral if the fault is outside our remit — we will advise honestly.',
  },
  {
    question: 'How much does ignition replacement cost in Didsbury?',
    answer:
      'Ignition barrel replacement typically ranges from £130–£200+ depending on the vehicle make, model, and whether the replacement barrel is in stock. A new key as part of the same job adds to the cost but saves you a second call-out. We always provide a fixed price before any work starts. Call 07309 903243 for an estimate.',
  },
]

const faqSchema = generateFAQSchema(faqs)

export default function IgnitionReplacementDidsburyPage() {
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
                <li className="text-slate-300">Ignition Replacement Didsbury</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Ignition Replacement Didsbury — Full Barrel Replaced at the Roadside
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              When an ignition barrel is beyond repair, Chorlton Locksmiths replaces the full ignition barrel at your Didsbury location — no workshop visit, no tow truck. We always diagnose first and recommend replacement only when repair is not viable.
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
              { icon: <Wrench size={20} className="text-slate-950" />, title: 'Diagnose First', body: 'We always diagnose before recommending replacement — repair is used where possible and cheaper.' },
              { icon: <Clock size={20} className="text-slate-950" />, title: '~30 Min to Didsbury', body: 'Mobile service dispatched from Chorlton — consistently reaching Didsbury within 30 minutes.' },
              { icon: <ShieldCheck size={20} className="text-slate-950" />, title: 'New Key Included', body: 'Replacement barrel fitted and matching key cut and programmed — complete fix in one visit.' },
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
            <h2 className="text-2xl font-bold text-slate-950 mb-6">When Is Ignition Replacement Needed in Didsbury?</h2>
            <div className="space-y-4">
              {[
                { title: 'Cracked or deformed barrel', body: 'Physical damage to the barrel housing — often caused by attempted theft or a heavy keyring applying constant pressure — means the barrel cannot be repaired and must be replaced.' },
                { title: 'Completely seized cylinder', body: 'An ignition cylinder that is fully seized beyond the point of tumbler reconditioning requires a full barrel replacement to restore function.' },
                { title: 'Broken internal mechanism', body: 'Sheared internal components that cannot be replaced individually — the entire barrel assembly must be swapped out.' },
                { title: 'Security upgrade after theft attempt', body: 'After a vehicle theft attempt, replacing the ignition barrel with a new unit (and coding a new key) removes the security vulnerability left by the attack.' },
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
              <SectionHeading title="Ignition Replacement Process in Didsbury" />
              <ol className="space-y-5">
                {[
                  { step: '1', title: 'Call 07309 903243', desc: 'Describe the ignition fault and your vehicle make and Didsbury location.' },
                  { step: '2', title: 'We Arrive in ~30 Minutes', desc: 'Mobile van with diagnostic equipment and common replacement barrels.' },
                  { step: '3', title: 'Diagnosis Completed', desc: 'We confirm whether repair or full replacement is the correct solution.' },
                  { step: '4', title: 'Replacement Barrel Fitted', desc: 'New ignition barrel installed at the roadside — no workshop trip needed for most common makes.' },
                  { step: '5', title: 'New Key Cut and Programmed', desc: 'Matching key cut and programmed to the immobiliser. Vehicle starts normally.' },
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
                  <Link href="/key-stuck-in-ignition-didsbury" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">key stuck in ignition Didsbury</Link>
                  {' '}·{' '}
                  <Link href="/ignition-replacement-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">ignition replacement Chorlton</Link>
                </p>
              </div>
            </div>
            <div className="bg-slate-950 text-white rounded-xl p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-2">Ignition Beyond Repair in Didsbury?</h3>
              <p className="text-slate-400 text-sm mb-6">Full barrel replacement on-site — no workshop needed</p>
              <div className="mb-6">
                <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">Call Now</p>
                <a href="tel:+447309903243" className="text-3xl font-bold text-amber-400 hover:text-amber-300 transition-colors">07309 903243</a>
              </div>
              <div className="space-y-2 text-sm text-slate-300 mb-8">
                <p>✓ Diagnose before recommending</p>
                <p>✓ Full barrel replacement on-site</p>
                <p>✓ New key cut &amp; programmed</p>
                <p>✓ ~30 min response</p>
                <p>✓ Fixed price before we start</p>
              </div>
              <QuoteForm />
            </div>
          </div>
        </Container>
      </Section>

      <Section backgroundVariant="accent">
        <Container>
          <SectionHeading title="Ignition Replacement Didsbury — FAQs" centered />
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
                { label: 'Key Stuck in Ignition Didsbury', href: '/key-stuck-in-ignition-didsbury' },
                { label: 'Auto Locksmith Didsbury', href: '/auto-locksmith-didsbury' },
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

      <Section backgroundVariant="accent">
        <Container>
          <div className="text-center py-4">
            <h2 className="text-2xl font-bold text-slate-950 mb-3">Ignition Replacement in Didsbury?</h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">Call now — we diagnose, replace the barrel, and produce a new key at your location in one visit.</p>
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
