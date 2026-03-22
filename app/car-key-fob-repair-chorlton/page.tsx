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
import { Key, Phone, Wrench, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Key Fob Repair Chorlton | Car Remote Fix | 07388 789881',
  description:
    'Key fob not working in Chorlton? We repair or replace car remote key fobs on-site. All major makes. Fast response. Call 07388 789881.',
  keywords: ['key fob repair Chorlton', 'car remote repair Manchester', 'key fob not working fix', 'remote key replacement'],
  openGraph: {
    title: 'Key Fob Repair Chorlton | Car Remote Fixed On-Site',
    description: 'Key fob not working in Chorlton? We diagnose, repair, or replace car fobs on-site. Call 07388 789881.',
    url: 'https://chorltonlocksmiths.com/car-key-fob-repair-chorlton',
    type: 'website',
    siteName: 'Chorlton Locksmiths',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Key Fob Repair Chorlton | Car Remote Fixed On-Site',
    description: 'Key fob not working in Chorlton? We diagnose, repair or replace on-site. Call 07388 789881.',
  },
  alternates: { canonical: 'https://chorltonlocksmiths.com/car-key-fob-repair-chorlton' },
  robots: { index: true, follow: true },
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Auto Locksmith Chorlton', url: '/auto-locksmith-chorlton' },
  { name: 'Key Fob Repair Chorlton', url: '/car-key-fob-repair-chorlton' },
])

const serviceSchema = generateServiceSchema({
  name: 'Car Key Fob Repair Chorlton',
  description: 'Mobile car key fob repair and replacement service in Chorlton, Manchester. We diagnose and fix non-working remote key fobs for all major vehicle makes.',
  url: '/car-key-fob-repair-chorlton',
})

const howToSchema = generateHowToSchema({
  name: 'How We Fix a Car Key Fob in Chorlton',
  description: 'Our key fob repair process in Chorlton.',
  steps: [
    { name: 'Call us', text: 'Ring 07388 789881 with your vehicle make, model, and the fob fault.' },
    { name: 'Diagnosis confirmed', text: 'We confirm whether it is a battery, signal, or internal fault.' },
    { name: 'We arrive', text: 'Mobile locksmith reaches Chorlton in ~30 minutes.' },
    { name: 'Fob repaired or replaced', text: 'We repair the existing fob or supply and programme a replacement.' },
    { name: 'Full test', text: 'All fob functions verified before we leave.' },
  ],
})

const faqs = [
  {
    question: 'Why has my car key fob stopped working?',
    answer:
      'The most common cause is a flat battery — a simple fix. Other causes include internal circuit board damage, water ingress, worn buttons, or the fob losing its programming link to the vehicle. We diagnose the exact fault on arrival.',
  },
  {
    question: 'Can you repair my existing fob or do you need to replace it?',
    answer:
      'In many cases we can repair the existing fob — replacing the battery, repairing solder connections, or replacing the button contacts. Where the fob is beyond repair we supply and programme a replacement unit.',
  },
  {
    question: 'Can you reprogram a key fob that has lost sync with my car?',
    answer:
      'Yes. Fobs can lose their programming link after a battery change or fault. We use professional automotive programming equipment to resync or fully recode the fob to your vehicle on-site.',
  },
  {
    question: 'How much does key fob repair cost in Chorlton?',
    answer:
      'Costs vary depending on the fault and vehicle. Battery replacement is inexpensive; full fob replacement with programming costs more. We always quote upfront. Call 07388 789881 for a quick estimate.',
  },
  {
    question: 'My fob works sometimes but not always — can you fix intermittent faults?',
    answer:
      'Yes. Intermittent faults are typically caused by worn button contacts or a weak solder joint on the circuit board. Our locksmith will inspect and repair the fob on-site.',
  },
]

const faqSchema = generateFAQSchema(faqs)
const localBusinessSchema = generateLocalBusinessSchema()
const pageSchema = generateServicePageSchema({
  url: '/car-key-fob-repair-chorlton',
  name: 'Key Fob Repair Chorlton | Chorlton Locksmiths',
  description: 'Car key fob repair and replacement service in Chorlton — all fob types covered on-site.',
  dateModified: '2026-03-22',
})

export default function CarKeyFobRepairChorltonPage() {
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
                <li className="text-slate-300">Key Fob Repair Chorlton</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Key Fob Repair Chorlton — Car Remote Fixed or Replaced On-Site
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Car key fob stopped working in Chorlton? Whether it is a dead battery, lost programming, or internal damage,
              Chorlton Locksmiths diagnoses and repairs remote key fobs on-site — or supplies and programmes a replacement.
              Fast, mobile, and significantly cheaper than a main dealer.
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
              { icon: <Wrench size={20} className="text-slate-950" />, title: 'Diagnose First', body: 'We identify the exact fault — battery, signal, circuit, or programming — before any work starts.' },
              { icon: <Key size={20} className="text-slate-950" />, title: 'Repair or Replace', body: 'We repair the existing fob where possible, or supply and programme a replacement unit.' },
              { icon: <ShieldCheck size={20} className="text-slate-950" />, title: 'All Fob Types', body: 'Remote locking fobs, flip keys, proximity cards, smart keys — we cover them all.' },
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
            <h2 className="text-2xl font-bold text-slate-950 mb-4">Common Key Fob Problems We Fix in Chorlton</h2>
            <div className="space-y-4">
              {[
                { title: 'Flat or dead fob battery', body: 'We carry replacement batteries for all common fob types and replace them on-site in minutes.' },
                { title: 'Fob lost programming', body: 'After a battery change or electronic fault, fobs can lose their link to the car. We reprogram or fully recode the fob.' },
                { title: 'Buttons not responding', body: 'Worn button contacts are repaired or replaced to restore full remote operation.' },
                { title: 'Water-damaged fob', body: 'Water ingress often damages the circuit board. We assess repairability and supply a replacement if needed.' },
                { title: 'Fob shell cracked or broken', body: 'We supply replacement key shells and transfer the electronics, restoring a fully working fob.' },
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
              <SectionHeading title="How Key Fob Repair Works in Chorlton" />
              <ol className="space-y-5">
                {[
                  { step: '1', title: 'Call 07388 789881', desc: 'Describe the fob issue and your vehicle make/model. We confirm we can help.' },
                  { step: '2', title: 'We Arrive (~30 Minutes)', desc: 'Mobile locksmith dispatched to your location in Chorlton.' },
                  { step: '3', title: 'Diagnosis On-Site', desc: 'We test the fob battery, signal, and programming link to find the exact fault.' },
                  { step: '4', title: 'Repair or Replacement', desc: 'Fob repaired on-site where possible, or replacement unit supplied and programmed.' },
                  { step: '5', title: 'Full Function Test', desc: 'All buttons and remote functions verified before we leave.' },
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
                  <Link href="/car-key-programming-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">key programming</Link>
                  {' '}·{' '}
                  <Link href="/car-key-repair-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">car key repair</Link>
                  {' '}·{' '}
                  <Link href="/auto-locksmith-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">auto locksmith Chorlton</Link>
                </p>
              </div>
            </div>
            <div className="bg-slate-950 text-white rounded-xl p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-2">Key Fob Not Working?</h3>
              <p className="text-slate-400 text-sm mb-6">We repair or replace in Chorlton — same day</p>
              <div className="mb-6">
                <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">Call Now</p>
                <a href="tel:+447388789881" className="text-3xl font-bold text-amber-400 hover:text-amber-300 transition-colors">07388 789881</a>
              </div>
              <div className="space-y-2 text-sm text-slate-300 mb-8">
                <p>✓ Fault diagnosed on-site</p>
                <p>✓ Repair or replacement supplied</p>
                <p>✓ All fob types covered</p>
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
          <SectionHeading title="Key Fob Repair Chorlton — FAQs" centered />
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
              <h3 className="text-lg font-bold text-slate-950 mb-1">Key Fob Issues in Stockport?</h3>
              <p className="text-slate-600 text-sm">
                For key fob repair in Stockport, contact{' '}
                <a href="https://carkeysinstockport.co.uk/" target="_blank" rel="noopener" className="text-amber-600 hover:text-amber-700 font-medium underline underline-offset-2">Car Keys in Stockport</a>.
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
            <h2 className="text-2xl font-bold text-slate-950 mb-3">Key Fob Not Working in Chorlton?</h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">Call us — we diagnose and fix or replace your fob on-site, same day.</p>
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
