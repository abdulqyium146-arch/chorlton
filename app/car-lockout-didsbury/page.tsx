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
import { Car, Clock, Phone, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Car Lockout Didsbury | Locked Out? ~30 Min | 07309 903243',
  description:
    'Locked out of your car in Didsbury? Non-destructive vehicle entry, ~30 min response. Mobile auto locksmith serving Didsbury Village, Wilmslow Road & Parrs Wood. Call 07309 903243.',
  keywords: ['car lockout Didsbury', 'locked out of car Didsbury', 'emergency car locksmith Didsbury', 'car unlock Didsbury'],
  openGraph: {
    title: 'Car Lockout Didsbury | Non-Destructive Entry — ~30 Min',
    description: 'Locked out of your car in Didsbury? Mobile auto locksmith — ~30 min response, professional non-destructive entry. Call 07309 903243.',
    url: 'https://chorltonlocksmiths.com/car-lockout-didsbury',
    type: 'website',
    siteName: 'Chorlton Locksmiths',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Lockout Didsbury | ~30 Min Response',
    description: 'Locked out of your car in Didsbury? We arrive in ~30 min and open it without damage. Call 07309 903243.',
  },
  alternates: { canonical: 'https://chorltonlocksmiths.com/car-lockout-didsbury' },
  robots: { index: true, follow: true },
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Auto Locksmith Didsbury', url: '/auto-locksmith-didsbury' },
  { name: 'Car Lockout Didsbury', url: '/car-lockout-didsbury' },
])

const pageSchema = generateServicePageSchema({
  url: '/car-lockout-didsbury',
  name: 'Car Lockout Didsbury | Chorlton Locksmiths',
  description: 'Emergency car lockout service in Didsbury — non-destructive entry, ~30 min response for all makes.',
  dateModified: '2026-04-23',
})

const serviceSchema = generateServiceSchema({
  name: 'Car Lockout Service Didsbury',
  description: 'Emergency car lockout service in Didsbury, Manchester. Non-destructive vehicle entry for locked cars. Mobile, fast, ~30 minute response to Didsbury Village, Wilmslow Road, Parrs Wood, and surrounding areas.',
  url: '/car-lockout-didsbury',
  serviceType: 'Car Lockout Service',
})

const howToSchema = generateHowToSchema({
  name: 'How to Get Back Into Your Locked Car in Didsbury',
  description: 'What happens when you call Chorlton Locksmiths for a car lockout in Didsbury.',
  steps: [
    { name: 'Call 07309 903243', text: 'Tell us your exact location in Didsbury — street name or nearby landmark — plus your vehicle make and model.' },
    { name: 'We dispatch immediately', text: 'Our mobile locksmith heads directly to your Didsbury location — typically 25–35 minutes.' },
    { name: 'Vehicle assessed', text: 'We confirm the best non-destructive entry method for your specific car.' },
    { name: 'Non-destructive entry', text: 'We open your car using professional specialist tools — zero damage to bodywork, seals, or lock barrel.' },
    { name: 'You drive away', text: 'Fixed price settled. The whole process from our arrival typically takes 15–30 minutes.' },
  ],
})

const faqs = [
  {
    question: 'How quickly can you reach me if I am locked out of my car in Didsbury?',
    answer:
      'Our typical response time in Didsbury — including Didsbury Village, Parrs Wood, Lapwing Lane, and the Wilmslow Road corridor — is around 25 to 35 minutes from your call. We dispatch directly from our Chorlton base, which is the neighbouring area. Call 07309 903243 for a confirmed ETA.',
  },
  {
    question: 'Will you damage my car getting it open?',
    answer:
      'No. We use professional non-destructive entry tools designed specifically for modern vehicle door and lock systems. We open your car without any damage to bodywork, rubber seals, or the lock barrel. If a method would risk damage, we always explain this to you before starting.',
  },
  {
    question: 'What if I have left my keys inside the car?',
    answer:
      'Locked keys inside is the most common call we receive in Didsbury. We open the door using specialist non-destructive tools and retrieve your keys. The whole job typically takes 15–30 minutes once we arrive.',
  },
  {
    question: 'How much does a car lockout service cost in Didsbury?',
    answer:
      'Pricing depends on the vehicle make, model, and time of day. A standard car lockout typically starts from £65–£95. We always quote a fixed price before we start — no hidden charges. Call 07309 903243 for a quick phone estimate.',
  },
  {
    question: 'Do you also handle van lockouts in Didsbury?',
    answer:
      'Yes. We handle both car and van lockouts throughout Didsbury and Greater Manchester, including Ford Transit, Mercedes Sprinter, Vauxhall Vivaro, VW Transporter, and all common commercial vehicles.',
  },
]

const faqSchema = generateFAQSchema(faqs)

export default function CarLockoutDidsburyPage() {
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
                <li className="text-slate-300">Car Lockout Didsbury</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Car Lockout Didsbury — We&apos;re on Our Way
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Locked out of your car in Didsbury? Chorlton Locksmiths provides a fast mobile car lockout service — arriving in around 30 minutes and using professional non-destructive tools to get you back in without any damage to your vehicle.
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
              { icon: <Clock size={20} className="text-slate-950" />, title: '~30 Min Response', body: 'We dispatch from Chorlton immediately — consistently reaching Didsbury within 30 minutes.' },
              { icon: <ShieldCheck size={20} className="text-slate-950" />, title: 'Non-Destructive Entry', body: 'Professional tools — no broken seals, no scratched paintwork, no damaged locks.' },
              { icon: <Car size={20} className="text-slate-950" />, title: 'All Makes Covered', body: 'Cars, vans, SUVs — we carry tools for every common manufacturer.' },
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
            <h2 className="text-2xl font-bold text-slate-950 mb-4">Car Lockout Service in Didsbury — How We Help</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Being locked out of your car in Didsbury is stressful — whether it happens outside a restaurant in Didsbury Village, on Wilmslow Road during the working day, or at home on a residential street. Chorlton Locksmiths provides a rapid mobile response, coming directly to your location and opening your vehicle with specialist non-destructive tools.
            </p>
            <p className="text-slate-700 leading-relaxed">
              BMW, Ford, Audi, Volkswagen, Mercedes, Vauxhall, Toyota, Nissan — we have the correct tools for all major makes. Whether your keys are locked inside, you have lost them entirely, or the lock has jammed, our experienced mobile locksmith will assess the situation and choose the safest entry method for your specific vehicle.
            </p>
          </div>
        </Container>
      </Section>

      {/* Scenarios */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-950 mb-6">Car Lockout Situations We Handle in Didsbury</h2>
            <div className="space-y-4">
              {[
                { title: 'Keys locked inside the car', body: 'The most common lockout in Didsbury — keys on the seat, in the boot, or in the cupholder. We open the door cleanly in minutes using professional tools.' },
                { title: 'Lost keys with no spare', body: 'If you have lost your key we can open the car and produce a replacement key on-site. See our lost car keys Didsbury service.' },
                { title: 'Key broken in the door lock', body: 'Key snapped off inside the door lock? We extract the broken piece and open the door without damaging the barrel.' },
                { title: 'Child or pet locked inside', body: 'An emergency — call us immediately on 07309 903243. We prioritise these calls and aim for the fastest possible response to your Didsbury location.' },
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
              <SectionHeading title="How Our Car Lockout Service Works in Didsbury" />
              <ol className="space-y-5">
                {[
                  { step: '1', title: 'Call 07309 903243', desc: 'Tell us your exact location in Didsbury and your vehicle make and model. We confirm your ETA immediately.' },
                  { step: '2', title: 'We Arrive in ~30 Minutes', desc: 'Mobile and fully equipped — dispatched straight to your Didsbury location.' },
                  { step: '3', title: 'Fixed Price Given First', desc: 'Upfront quote before any work starts. No hidden charges.' },
                  { step: '4', title: 'Non-Destructive Vehicle Entry', desc: 'Specialist tools open your car safely — no damage, every time.' },
                  { step: '5', title: 'You Drive Away', desc: 'The entire job from arrival typically takes 15–30 minutes.' },
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
                  <Link href="/auto-locksmith-didsbury" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">auto locksmith Didsbury</Link>
                  {' '}·{' '}
                  <Link href="/lost-car-keys-didsbury" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">lost car keys Didsbury</Link>
                  {' '}·{' '}
                  <Link href="/car-lockout-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">car lockout Chorlton</Link>
                </p>
              </div>
            </div>
            <div className="bg-slate-950 text-white rounded-xl p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-2">Locked Out in Didsbury?</h3>
              <p className="text-slate-400 text-sm mb-6">Call — we aim to reach Didsbury in 30 minutes</p>
              <div className="mb-6">
                <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">Emergency Line</p>
                <a href="tel:+447309903243" className="text-3xl font-bold text-amber-400 hover:text-amber-300 transition-colors">07309 903243</a>
              </div>
              <div className="space-y-2 text-sm text-slate-300 mb-8">
                <p>✓ ~30 min response in Didsbury</p>
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
          <SectionHeading title="Car Lockout Didsbury — FAQs" centered />
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
      <Section backgroundVariant="accent">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-slate-700 mb-3">Related auto locksmith services in Didsbury:</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Auto Locksmith Didsbury', href: '/auto-locksmith-didsbury' },
                { label: 'Lost Car Keys Didsbury', href: '/lost-car-keys-didsbury' },
                { label: 'Car Key Replacement Didsbury', href: '/car-key-replacement-didsbury' },
                { label: 'Van Locksmith Didsbury', href: '/van-locksmith-didsbury' },
                { label: '24 Hour Auto Locksmith Didsbury', href: '/24-hour-auto-locksmith-didsbury' },
                { label: 'Car Lockout Chorlton', href: '/car-lockout-chorlton' },
                { label: 'Auto Locksmith Chorlton', href: '/auto-locksmith-chorlton' },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="text-sm bg-white border border-slate-200 text-slate-950 font-medium px-4 py-2 rounded-lg hover:bg-amber-400 hover:border-amber-400 transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Bottom CTA */}
      <Section>
        <Container>
          <div className="text-center py-4">
            <h2 className="text-2xl font-bold text-slate-950 mb-3">Locked Out of Your Car in Didsbury?</h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">Call now — we arrive in around 30 minutes and get you back in without any damage.</p>
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
