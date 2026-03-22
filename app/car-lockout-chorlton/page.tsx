import type { Metadata } from 'next'
import Link from 'next/link'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { QuoteForm } from '@/components/forms/QuoteForm'
import { LocalNAP } from '@/components/local/LocalNAP'
import { NearbyAreas } from '@/components/local/NearbyAreas'
import {
  generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema,
  generateHowToSchema, generateServicePageSchema,
} from '@/lib/schema'
import { Car, Clock, Phone, ShieldCheck, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Car Lockout Chorlton | Locked Out? ~30 Min | 07388 789881',
  description:
    'Locked out of your car in Chorlton or Didsbury? Non-destructive entry, ~30 min response. Mobile locksmith — no damage. Call 07388 789881 now.',
  keywords: ['car lockout Chorlton', 'locked out of car Chorlton', 'car unlock service Manchester', 'emergency car locksmith Chorlton'],
  openGraph: {
    title: 'Car Lockout Chorlton | Non-Destructive Entry in ~30 Min',
    description: 'Locked out of your car in Chorlton? Mobile locksmith — ~30 min response, professional non-destructive entry. Call 07388 789881.',
    url: 'https://chorltonlocksmiths.com/car-lockout-chorlton',
    type: 'website',
    siteName: 'Chorlton Locksmiths',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Lockout Chorlton | ~30 Min Response',
    description: 'Locked out of your car in Chorlton? We arrive in ~30 min and open it without damage. Call 07388 789881.',
  },
  alternates: { canonical: 'https://chorltonlocksmiths.com/car-lockout-chorlton' },
  robots: { index: true, follow: true },
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Auto Locksmith Chorlton', url: '/auto-locksmith-chorlton' },
  { name: 'Car Lockout Chorlton', url: '/car-lockout-chorlton' },
])
const pageSchema = generateServicePageSchema({
  url: '/car-lockout-chorlton',
  name: 'Car Lockout Chorlton | Chorlton Locksmiths',
  description: 'Emergency car lockout service in Chorlton — non-destructive entry, ~30 min response for all makes.',
  dateModified: '2026-03-22',
})

const serviceSchema = generateServiceSchema({
  name: 'Car Lockout Service Chorlton',
  description: 'Emergency car lockout service in Chorlton, Manchester. Non-destructive vehicle entry for locked cars and vans. Mobile, fast, ~30 minute response.',
  url: '/car-lockout-chorlton',
  serviceType: 'Car Lockout Service',
})

const howToSchema = generateHowToSchema({
  name: 'How to Get Back Into Your Locked Car in Chorlton',
  description: 'What happens when you call Chorlton Locksmiths for a car lockout.',
  steps: [
    { name: 'Call 07388 789881', text: 'Tell us your location and your vehicle make and model.' },
    { name: 'We dispatch immediately', text: 'Our mobile locksmith heads to you — typically 30 minutes in Chorlton.' },
    { name: 'Vehicle assessed', text: 'We confirm the non-destructive entry method appropriate for your car.' },
    { name: 'Non-destructive entry', text: 'We open your car using professional tools — zero damage to bodywork or glass.' },
    { name: 'You are back in', text: 'Fixed price settled, you drive away — the whole process usually takes under an hour.' },
  ],
})

const faqs = [
  {
    question: 'How quickly can you get to me if I am locked out of my car in Chorlton?',
    answer:
      'Our typical response time in Chorlton is around 30 minutes from your call. For nearby areas such as Didsbury, Whalley Range, and Stretford we are usually with you within 30–45 minutes.',
  },
  {
    question: 'Will you damage my car getting it open?',
    answer:
      'No. We use professional non-destructive entry tools designed specifically for modern vehicles. We open your car without any damage to the bodywork, rubber door seals, or lock barrel. If for any reason a method would risk damage, we tell you before we start.',
  },
  {
    question: 'What if my keys are locked inside the car?',
    answer:
      'Locked keys inside is the most common call we receive. We open the door using specialist tools, retrieve your keys, and you are on your way — the whole job typically takes 15–30 minutes once we arrive.',
  },
  {
    question: 'How much does a car lockout service cost in Chorlton?',
    answer:
      'Our pricing is competitive and always quoted upfront before we start. The cost depends on the vehicle make, model, and time of day. Call 07388 789881 for a quick estimate.',
  },
  {
    question: 'Do you open vans as well as cars?',
    answer:
      'Yes. We handle car and van lockouts including Ford Transit, Mercedes Sprinter, Vauxhall Vivaro, VW Transporter, and all common commercial vehicles.',
  },
]

const faqSchema = generateFAQSchema(faqs)

export default function CarLockoutChorltonPage() {
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
                <li><Link href="/auto-locksmith-chorlton" className="hover:text-amber-400 transition-colors">Auto Locksmith Chorlton</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-slate-300">Car Lockout Chorlton</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Car Lockout Chorlton — Locked Out? We&apos;re on Our Way
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Locked out of your car in Chorlton? Don&apos;t panic. Chorlton Locksmiths provides a fast, mobile car lockout service —
              arriving in around 30 minutes, using professional non-destructive tools to get you back in without causing any damage to your vehicle.
              Available 7 days a week across Chorlton and Greater Manchester.
            </p>
            <a href="tel:+447388789881" className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xl px-8 py-4 rounded-xl transition-colors">
              <Phone size={22} />
              Call 07388 789881
            </a>
          </div>
        </Container>
      </section>

      {/* USPs */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Clock size={20} className="text-slate-950" />, title: '~30 Min Response', body: 'We dispatch immediately and aim to reach you within 30 minutes anywhere in Chorlton.' },
              { icon: <ShieldCheck size={20} className="text-slate-950" />, title: 'Non-Destructive Entry', body: 'Professional tools. No broken seals, no scratched paintwork, no damaged locks.' },
              { icon: <Car size={20} className="text-slate-950" />, title: 'Cars & Vans', body: 'All makes and models including commercial vans — we carry tools for every common vehicle.' },
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

      {/* Explanation */}
      <Section backgroundVariant="accent">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-950 mb-4">Car Lockout Service in Chorlton — How We Help</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Being locked out of your car is stressful, especially if it happens at night, in the rain, or when you are running late.
              Chorlton Locksmiths provides a rapid response car lockout service — we come to your exact location in Chorlton, Didsbury,
              Stretford, Sale, or anywhere in Greater Manchester and open your vehicle using specialist non-destructive entry equipment.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Whether your keys are locked inside the car, you have lost them entirely, or the lock has jammed, our experienced mobile locksmith
              will assess the situation and choose the safest method of entry for your specific vehicle. BMW, Ford, Audi, VW, Mercedes, Vauxhall —
              we have the tools and knowledge for all major makes.
            </p>
          </div>
        </Container>
      </Section>

      {/* Scenarios */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-950 mb-6">Car Lockout Situations We Handle in Chorlton</h2>
            <div className="space-y-4">
              {[
                { title: 'Keys locked inside the car', body: 'The most common lockout — keys on the seat, in the boot, or in the cupholder. We open the door cleanly in minutes.' },
                { title: 'Lost keys, no spare', body: 'If you have also lost your key we can open the car and then produce a replacement key on-site — see our car key replacement service.' },
                { title: 'Key broken in the lock', body: 'Key snapped off inside the door lock? We extract the broken piece and open the door without damaging the barrel.' },
                { title: 'Child or pet locked inside', body: 'An emergency — call us immediately on 07388 789881. We prioritise these situations and aim for the fastest possible response.' },
              ].map((s, i) => (
                <div key={i} className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                  <h3 className="font-bold text-slate-950 mb-1">{s.title}</h3>
                  <p className="text-slate-600 text-sm">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Process + CTA */}
      <Section backgroundVariant="accent">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading title="How Our Car Lockout Service Works" />
              <ol className="space-y-5">
                {[
                  { step: '1', title: 'Call 07388 789881', desc: 'Tell us your exact location and vehicle. We confirm our ETA immediately.' },
                  { step: '2', title: 'We Arrive in ~30 Minutes', desc: 'Mobile, fully equipped — dispatched straight to you.' },
                  { step: '3', title: 'Fixed Price Given First', desc: 'Upfront quote before any work starts. No hidden charges.' },
                  { step: '4', title: 'Non-Destructive Vehicle Entry', desc: 'Specialist tools open your car safely — no damage, every time.' },
                  { step: '5', title: 'You Drive Away', desc: 'The entire job from our arrival typically takes 15–30 minutes.' },
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
                  Related services:{' '}
                  <Link href="/auto-locksmith-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">auto locksmith Chorlton</Link>
                  {' '}·{' '}
                  <Link href="/24-hour-auto-locksmith-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">24 hour auto locksmith</Link>
                  {' '}·{' '}
                  <Link href="/mobile-auto-locksmith-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">mobile auto locksmith</Link>
                </p>
              </div>
            </div>
            <div className="bg-slate-950 text-white rounded-xl p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-2">Locked Out Right Now?</h3>
              <p className="text-slate-400 text-sm mb-6">Call us — we aim to reach Chorlton in 30 minutes</p>
              <div className="mb-6">
                <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">Emergency Line</p>
                <a href="tel:+447388789881" className="text-3xl font-bold text-amber-400 hover:text-amber-300 transition-colors">07388 789881</a>
              </div>
              <div className="space-y-2 text-sm text-slate-300 mb-8">
                <p>✓ ~30 min response in Chorlton</p>
                <p>✓ Non-destructive entry — no damage</p>
                <p>✓ All makes &amp; models</p>
                <p>✓ Cars &amp; vans</p>
                <p>✓ Fixed price before we start</p>
              </div>
              <QuoteForm />
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container>
          <SectionHeading title="Car Lockout Chorlton — FAQs" centered />
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

      {/* Partner */}
      <Section backgroundVariant="accent">
        <Container>
          <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <div className="flex-1">
              <p className="text-xs text-amber-600 font-bold uppercase tracking-widest mb-1">Trusted Partner — Stockport</p>
              <h3 className="text-lg font-bold text-slate-950 mb-1">Need Car Keys in Stockport?</h3>
              <p className="text-slate-600 text-sm">
                Our trusted partner{' '}
                <a href="https://carkeysinstockport.co.uk/" target="_blank" rel="noopener" className="text-amber-600 hover:text-amber-700 font-medium underline underline-offset-2">Car Keys in Stockport</a>
                {' '}covers all car key needs in the Stockport area.
              </p>
            </div>
            <Link href="/partners" className="flex-shrink-0 inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-800 text-white font-bold px-5 py-3 rounded-xl transition-colors text-sm">
              View Our Partners
            </Link>
          </div>
        </Container>
      </Section>

      {/* Bottom CTA */}
      <Section>
        <Container>
          <div className="text-center py-4">
            <h2 className="text-2xl font-bold text-slate-950 mb-3">Locked Out of Your Car in Chorlton?</h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">Call now — we arrive in around 30 minutes and get you back in without any damage.</p>
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
