import type { Metadata } from 'next'
import Link from 'next/link'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { QuoteForm } from '@/components/forms/QuoteForm'
import {
  generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema,
  generateHowToSchema, generateLocalBusinessSchema, generateServicePageSchema,
} from '@/lib/schema'
import { Wrench, Phone, ShieldCheck, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ignition Repair Chorlton | Car Ignition Fix | 07388 789881',
  description:
    'Ignition not turning or key stuck in Chorlton? Our mobile locksmith diagnoses and repairs car ignition faults on-site. Call 07388 789881.',
  keywords: ['ignition repair Chorlton', 'car ignition problem Manchester', 'key stuck in ignition', 'ignition fix locksmith'],
  openGraph: {
    title: 'Ignition Repair Chorlton | Ignition Fault Fixed On-Site',
    description: 'Car ignition not turning in Chorlton? We repair ignition faults on-site. Mobile, fast response. Call 07388 789881.',
    url: 'https://chorltonlocksmiths.com/ignition-repair-chorlton',
    type: 'website',
    siteName: 'Chorlton Locksmiths',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ignition Repair Chorlton | Car Ignition Fixed On-Site',
    description: 'Car ignition not turning in Chorlton? We diagnose and repair on-site. Call 07388 789881.',
  },
  alternates: { canonical: 'https://chorltonlocksmiths.com/ignition-repair-chorlton' },
  robots: { index: true, follow: true },
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Auto Locksmith Chorlton', url: '/auto-locksmith-chorlton' },
  { name: 'Ignition Repair Chorlton', url: '/ignition-repair-chorlton' },
])

const serviceSchema = generateServiceSchema({
  name: 'Ignition Repair Chorlton',
  description: 'Mobile car ignition repair service in Chorlton, Manchester. We diagnose and repair stiff, worn, or faulty ignition barrels on-site for all major vehicle makes.',
  url: '/ignition-repair-chorlton',
})

const howToSchema = generateHowToSchema({
  name: 'How We Repair a Car Ignition in Chorlton',
  description: 'Our ignition repair process in Chorlton.',
  steps: [
    { name: 'Call us', text: 'Ring 07388 789881 and describe the ignition fault. We confirm we can help.' },
    { name: 'We arrive', text: 'Mobile locksmith reaches Chorlton in ~30 minutes.' },
    { name: 'Diagnosis', text: 'We inspect the barrel, key, and steering lock to identify the root cause.' },
    { name: 'Repair on-site', text: 'Ignition barrel lubricated, adjusted, or repaired with specialist tools.' },
    { name: 'Verified and tested', text: 'Key turns smoothly and engine starts correctly before we leave.' },
  ],
})

const faqs = [
  {
    question: 'Why won\'t my key turn in the ignition?',
    answer:
      'A stiff or seized ignition can be caused by a worn key, a worn barrel, the steering lock engaging, debris inside the barrel, or internal spring failure. Our locksmith diagnoses the exact cause on arrival and advises the appropriate repair.',
  },
  {
    question: 'Can you repair the ignition without replacing it?',
    answer:
      'In many cases, yes. Worn or stiff ignitions can often be cleaned, lubricated, and adjusted to restore full operation. Where the barrel is beyond repair, we can replace it on-site — see our ignition replacement service.',
  },
  {
    question: 'Is it the ignition or my key that is the problem?',
    answer:
      'Both are possible. A worn key can cause the ignition to feel stiff or refuse to turn. We check both the key and the barrel and advise whether a new key, barrel repair, or full replacement is the most cost-effective solution.',
  },
  {
    question: 'How much does ignition repair cost in Chorlton?',
    answer:
      'Pricing depends on the fault and vehicle. We always quote upfront before starting. Repair is generally cheaper than replacement. Call 07388 789881 for an estimate.',
  },
  {
    question: 'Can you repair the ignition on any car in Chorlton?',
    answer:
      'We cover most common makes including BMW, Ford, Audi, Mercedes, VW, Vauxhall, Renault, Nissan, Toyota, and Peugeot. Call us to confirm your specific model.',
  },
]

const faqSchema = generateFAQSchema(faqs)
const localBusinessSchema = generateLocalBusinessSchema()
const pageSchema = generateServicePageSchema({
  url: '/ignition-repair-chorlton',
  name: 'Ignition Repair Chorlton | Chorlton Locksmiths',
  description: 'Mobile car ignition repair service in Chorlton — stiff, worn, or seized barrels repaired on-site.',
  dateModified: '2026-03-22',
})

export default function IgnitionRepairChorltonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
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
                <li className="text-slate-300">Ignition Repair Chorlton</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Ignition Repair Chorlton — Car Won&apos;t Start? Key Won&apos;t Turn?
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              A faulty ignition can leave you unable to start your car at the most inconvenient times.
              Chorlton Locksmiths provides a mobile ignition repair service in Chorlton and across Greater Manchester —
              diagnosing stiff, worn, or seized ignition barrels and resolving the fault on-site without the need to tow your vehicle.
            </p>
            <a href="tel:+447388789881" className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xl px-8 py-4 rounded-xl transition-colors">
              <Phone size={22} />
              Call 07388 789881
            </a>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Wrench size={20} className="text-slate-950" />, title: 'Diagnosed On-Site', body: 'We find the exact cause — worn barrel, worn key, steering lock, or internal fault.' },
              { icon: <Clock size={20} className="text-slate-950" />, title: '~30 Min Response', body: 'Mobile locksmith dispatched immediately to your location in Chorlton.' },
              { icon: <ShieldCheck size={20} className="text-slate-950" />, title: 'Repair First', body: 'We repair before recommending replacement — saving you money where possible.' },
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
            <h2 className="text-2xl font-bold text-slate-950 mb-6">Ignition Problems We Repair in Chorlton</h2>
            <div className="space-y-4">
              {[
                { title: 'Key won\'t turn in ignition', body: 'Caused by a worn barrel, worn key, or steering lock engagement. We diagnose and resolve on-site.' },
                { title: 'Stiff or difficult ignition', body: 'Gradual stiffening is often a sign of barrel wear. We clean, lubricate, and adjust to restore smooth operation before full failure.' },
                { title: 'Key turns but engine won\'t start', body: 'If the barrel turns freely but the car doesn\'t start, the issue may be electrical. We test and advise.' },
                { title: 'Ignition makes grinding noise', body: 'Internal gear or spring failure — we inspect and replace the damaged component.' },
                { title: 'Key stuck in ignition', body: 'Key jammed and won\'t come out — see our dedicated key stuck in ignition service for Chorlton.' },
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
              <SectionHeading title="How Ignition Repair Works in Chorlton" />
              <ol className="space-y-5">
                {[
                  { step: '1', title: 'Call 07388 789881', desc: 'Describe the fault. We advise over the phone and confirm our ETA.' },
                  { step: '2', title: 'We Arrive (~30 Minutes)', desc: 'Mobile locksmith dispatched to your Chorlton location immediately.' },
                  { step: '3', title: 'On-Site Diagnosis', desc: 'We inspect the key, barrel, and steering lock to identify the exact fault.' },
                  { step: '4', title: 'Upfront Quote', desc: 'Fixed price given before any work begins.' },
                  { step: '5', title: 'Repair Carried Out', desc: 'Barrel cleaned, lubricated, adjusted, or faulty part replaced on-site.' },
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
                  <Link href="/ignition-replacement-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">ignition replacement</Link>
                  {' '}·{' '}
                  <Link href="/key-stuck-in-ignition-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">key stuck in ignition</Link>
                  {' '}·{' '}
                  <Link href="/auto-locksmith-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">auto locksmith Chorlton</Link>
                </p>
              </div>
            </div>
            <div className="bg-slate-950 text-white rounded-xl p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-2">Ignition Problem in Chorlton?</h3>
              <p className="text-slate-400 text-sm mb-6">We diagnose and repair on-site — ~30 min response</p>
              <div className="mb-6">
                <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">Call Now</p>
                <a href="tel:+447388789881" className="text-3xl font-bold text-amber-400 hover:text-amber-300 transition-colors">07388 789881</a>
              </div>
              <div className="space-y-2 text-sm text-slate-300 mb-8">
                <p>✓ Fault diagnosed on-site</p>
                <p>✓ Repair where possible</p>
                <p>✓ All makes &amp; models</p>
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
          <SectionHeading title="Ignition Repair Chorlton — FAQs" centered />
          <div className="max-w-3xl mx-auto space-y-4" itemScope itemType="https://schema.org/FAQPage">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group border border-slate-200 bg-white rounded-xl p-5 hover:border-amber-400 transition-colors" itemProp="mainEntity" itemScope itemType="https://schema.org/Question">
                <summary className="cursor-pointer font-semibold text-slate-950 group-open:text-amber-600 transition-colors list-none flex justify-between items-center" itemProp="name">
                  {faq.question}
                  <span className="ml-4 text-amber-500 group-open:rotate-45 transition-transform inline-block text-xl leading-none">+</span>
                </summary>
                <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed" itemProp="text">{faq.answer}</p>
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
              <h3 className="text-lg font-bold text-slate-950 mb-1">Car Key Issues in Stockport?</h3>
              <p className="text-slate-600 text-sm">
                <a href="https://carkeysinstockport.co.uk/" target="_blank" rel="noopener" className="text-amber-600 hover:text-amber-700 font-medium underline underline-offset-2">Car Keys in Stockport</a>
                {' '}— our trusted partner for car key and ignition services in Stockport.
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
            <h2 className="text-2xl font-bold text-slate-950 mb-3">Ignition Fault in Chorlton? Call Us Now</h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">We arrive in ~30 minutes and repair your ignition on-site. Fixed price, no surprises.</p>
            <a href="tel:+447388789881" className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xl px-8 py-4 rounded-xl transition-colors">
              <Phone size={24} />
              07388 789881
            </a>
          </div>
        </Container>
      </Section>
    </>
  )
}
