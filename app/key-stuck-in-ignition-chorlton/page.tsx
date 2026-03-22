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
  title: 'Key Stuck in Ignition Chorlton | Removal & Fix | 07388 789881',
  description:
    'Key stuck in your car ignition in Chorlton? We remove it safely on-site. Mobile locksmith, ~30 min response. Call 07388 789881 now.',
  keywords: ['key stuck in ignition Chorlton', 'car key jammed ignition', 'ignition key removal Manchester', 'stuck car key fix'],
  openGraph: {
    title: 'Key Stuck in Ignition Chorlton | Safe Removal On-Site',
    description: 'Key stuck in ignition in Chorlton? We remove it safely without damage. Mobile, ~30 min. Call 07388 789881.',
    url: 'https://chorltonlocksmiths.com/key-stuck-in-ignition-chorlton',
    type: 'website',
    siteName: 'Chorlton Locksmiths',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Key Stuck in Ignition Chorlton | Safe Removal On-Site',
    description: 'Key jammed in ignition in Chorlton? Don\'t force it — we extract safely. Call 07388 789881.',
  },
  alternates: { canonical: 'https://chorltonlocksmiths.com/key-stuck-in-ignition-chorlton' },
  robots: { index: true, follow: true },
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Auto Locksmith Chorlton', url: '/auto-locksmith-chorlton' },
  { name: 'Key Stuck in Ignition Chorlton', url: '/key-stuck-in-ignition-chorlton' },
])

const serviceSchema = generateServiceSchema({
  name: 'Key Stuck in Ignition Chorlton',
  description: 'Mobile service to remove a key stuck in a car ignition in Chorlton, Manchester. Safe extraction without damage to the ignition barrel. All major makes and models covered.',
  url: '/key-stuck-in-ignition-chorlton',
  serviceType: 'Key Extraction Service',
})

const howToSchema = generateHowToSchema({
  name: 'How We Remove a Key Stuck in the Ignition in Chorlton',
  description: 'Our process for safely extracting a jammed key from a car ignition.',
  steps: [
    { name: 'Call 07388 789881', text: 'Tell us your location and vehicle make/model. Do not try to force the key.' },
    { name: 'We arrive', text: 'Mobile locksmith reaches Chorlton in ~30 minutes with specialist extraction tools.' },
    { name: 'Cause assessed', text: 'We determine if the key is jammed, broken, or if the barrel is seized.' },
    { name: 'Key removed', text: 'Safe, controlled extraction using professional tools — no barrel damage.' },
    { name: 'Repair or replacement if needed', text: 'If the barrel or key is damaged we advise on the next step.' },
  ],
})

const faqs = [
  {
    question: 'Why is my key stuck in the ignition?',
    answer:
      'Common causes include the steering lock engaging (turn the wheel slightly while removing the key), the gear selector not being in Park, a worn or damaged key, a faulty release mechanism inside the barrel, or a flat battery preventing the solenoid from releasing. Do not force the key — call us.',
  },
  {
    question: 'Should I try to force my key out of the ignition?',
    answer:
      'No. Forcing a stuck key risks snapping it inside the barrel, causing far more damage and a significantly more expensive repair. Call 07388 789881 and we will remove it safely with specialist tools.',
  },
  {
    question: 'Will you damage the ignition removing the key?',
    answer:
      'In the vast majority of cases, no. We use professional extraction tools designed for this purpose. Where we identify the barrel itself is damaged or seized, we will tell you before starting any work.',
  },
  {
    question: 'What if the key breaks during removal?',
    answer:
      'If the key is already partially broken or snaps during extraction, we carry broken key extraction tools to remove it cleanly. We can then produce a replacement key on-site.',
  },
  {
    question: 'How much does key stuck in ignition removal cost in Chorlton?',
    answer:
      'Pricing depends on the vehicle and the nature of the fault. We always quote upfront before starting any work. Call 07388 789881 for a quick estimate.',
  },
]

const faqSchema = generateFAQSchema(faqs)
const pageSchema = generateServicePageSchema({
  url: '/key-stuck-in-ignition-chorlton',
  name: 'Key Stuck in Ignition Chorlton | Chorlton Locksmiths',
  description: 'Safe ignition key extraction service in Chorlton — specialist tools, no barrel damage.',
  dateModified: '2026-03-22',
})

export default function KeyStuckInIgnitionChorltonPage() {
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
                <li className="text-slate-300">Key Stuck in Ignition</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Key Stuck in Ignition Chorlton — Safe Removal On-Site
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Key jammed in your car ignition in Chorlton? Do not force it — forcing a stuck key risks snapping it inside the barrel.
              Chorlton Locksmiths provides a mobile key extraction service, reaching you in around 30 minutes and removing the key safely
              using specialist tools, without damage to your ignition.
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
              { icon: <Wrench size={20} className="text-slate-950" />, title: 'Safe Extraction', body: 'Professional tools remove a stuck key without forcing or damaging the ignition barrel.' },
              { icon: <Clock size={20} className="text-slate-950" />, title: '~30 Min Response', body: 'We dispatch immediately — don\'t be stranded any longer than necessary.' },
              { icon: <ShieldCheck size={20} className="text-slate-950" />, title: 'Damage-Free', body: 'We assess the situation first and only proceed with the safest extraction method.' },
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
            <h2 className="text-2xl font-bold text-slate-950 mb-4">Why Keys Get Stuck in Ignitions</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              A key stuck in the ignition is more common than most drivers realise. Understanding the cause helps avoid making it worse:
            </p>
            <div className="space-y-3">
              {[
                { title: 'Steering lock engaged', body: 'If you turned the wheel after stopping, the steering lock may prevent key removal. Try gently turning the wheel whilst pulling the key.' },
                { title: 'Gear not in Park (automatic)', body: 'Most automatics prevent key removal unless the gear selector is in Park. Check the selector position.' },
                { title: 'Worn or damaged key', body: 'A worn key can catch inside the barrel. Do not try to force it — call us.' },
                { title: 'Faulty release solenoid', body: 'Some vehicles use an electric solenoid to release the key. A fault here traps the key even when everything else is correct.' },
                { title: 'Flat battery', body: 'Some vehicles need battery power to release the ignition. If the battery is flat, the key may become trapped.' },
              ].map((s, i) => (
                <div key={i} className="p-4 bg-white rounded-xl border border-slate-200">
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
              <SectionHeading title="How We Remove a Stuck Ignition Key in Chorlton" />
              <ol className="space-y-5">
                {[
                  { step: '1', title: 'Call 07388 789881', desc: 'Tell us your location and vehicle. Do not force the key while you wait.' },
                  { step: '2', title: 'We Arrive (~30 Minutes)', desc: 'Mobile locksmith with specialist extraction tools dispatched immediately.' },
                  { step: '3', title: 'Cause Identified', desc: 'We check for steering lock, solenoid, barrel wear, and key condition.' },
                  { step: '4', title: 'Safe Extraction', desc: 'Key removed using controlled, professional tools — no barrel damage.' },
                  { step: '5', title: 'Advice on Next Steps', desc: 'If the key or barrel is worn, we advise on replacement to prevent recurrence.' },
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
                  <Link href="/broken-car-key-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">broken key extraction</Link>
                  {' '}·{' '}
                  <Link href="/auto-locksmith-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">auto locksmith Chorlton</Link>
                </p>
              </div>
            </div>
            <div className="bg-slate-950 text-white rounded-xl p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-2">Key Jammed in Ignition?</h3>
              <p className="text-slate-400 text-sm mb-6">Don&apos;t force it — call us for safe extraction in Chorlton</p>
              <div className="mb-6">
                <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">Call Now</p>
                <a href="tel:+447388789881" className="text-3xl font-bold text-amber-400 hover:text-amber-300 transition-colors">07388 789881</a>
              </div>
              <div className="space-y-2 text-sm text-slate-300 mb-8">
                <p>✓ ~30 min response in Chorlton</p>
                <p>✓ Safe extraction — no barrel damage</p>
                <p>✓ Cause identified on-site</p>
                <p>✓ Fixed price before we start</p>
                <p>✓ All makes &amp; models</p>
              </div>
              <QuoteForm />
            </div>
          </div>
        </Container>
      </Section>

      <Section backgroundVariant="accent">
        <Container>
          <SectionHeading title="Key Stuck in Ignition Chorlton — FAQs" centered />
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
          <div className="text-center py-4">
            <h2 className="text-2xl font-bold text-slate-950 mb-3">Key Stuck in Ignition in Chorlton?</h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">Do not force it. Call us — we arrive in ~30 minutes and remove it safely.</p>
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
