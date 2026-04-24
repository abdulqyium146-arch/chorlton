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
import { ShieldCheck, Clock, Phone, Key } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cheap Auto Locksmith Didsbury | Honest Pricing — No Hidden Fees | 07309 903243',
  description:
    'Looking for an affordable auto locksmith in Didsbury? Transparent pricing, no call-out fee, fixed quote before we start. Significantly cheaper than a dealer. Call 07309 903243.',
  keywords: ['cheap auto locksmith Didsbury', 'affordable auto locksmith Didsbury', 'low cost car locksmith Didsbury', 'best price auto locksmith Didsbury'],
  openGraph: {
    title: 'Cheap Auto Locksmith Didsbury | Transparent Pricing — No Hidden Fees',
    description: 'Affordable auto locksmith in Didsbury — fixed price before we start, no call-out fee, cheaper than a dealer. Call 07309 903243.',
    url: 'https://chorltonlocksmiths.com/cheap-auto-locksmith-didsbury',
    type: 'website',
    siteName: 'Chorlton Locksmiths',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Affordable Auto Locksmith Didsbury | 07309 903243',
    description: 'Affordable auto locksmith in Didsbury — transparent pricing, no hidden fees, fixed quote before we start. Call 07309 903243.',
  },
  alternates: { canonical: 'https://chorltonlocksmiths.com/cheap-auto-locksmith-didsbury' },
  robots: { index: true, follow: true },
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Auto Locksmith Didsbury', url: '/auto-locksmith-didsbury' },
  { name: 'Cheap Auto Locksmith Didsbury', url: '/cheap-auto-locksmith-didsbury' },
])

const pageSchema = generateServicePageSchema({
  url: '/cheap-auto-locksmith-didsbury',
  name: 'Cheap Auto Locksmith Didsbury | Chorlton Locksmiths',
  description: 'Affordable auto locksmith in Didsbury — transparent pricing, fixed quote before work starts, no call-out fee, significantly cheaper than a dealer.',
  dateModified: '2026-04-23',
})

const serviceSchema = generateServiceSchema({
  name: 'Affordable Auto Locksmith Didsbury',
  description: 'Affordable mobile auto locksmith service in Didsbury, Manchester. Transparent pricing with no hidden fees, no call-out charges, and a fixed quote agreed before any work begins. Competitive rates significantly below main dealer pricing.',
  url: '/cheap-auto-locksmith-didsbury',
  serviceType: 'Auto Locksmith Service',
})

const howToSchema = generateHowToSchema({
  name: 'How to Get an Affordable Auto Locksmith in Didsbury',
  description: 'How Chorlton Locksmiths keeps pricing fair and transparent for Didsbury customers.',
  steps: [
    { name: 'Call 07309 903243', text: 'Describe your vehicle, the problem, and your location in Didsbury. We can often provide a price guide over the phone.' },
    { name: 'We arrive in ~30 minutes', text: 'No call-out fee — you do not pay simply for us arriving.' },
    { name: 'Job assessed on-site', text: 'We assess the specific vehicle and job and provide a fixed all-inclusive price.' },
    { name: 'Price agreed before we start', text: 'You agree the price before any work begins. No surprises, no extras added at the end.' },
    { name: 'Job completed at the roadside', text: 'Professional service at a fair price — and significantly cheaper than a main dealer for equivalent work.' },
  ],
})

const faqs = [
  {
    question: 'How do your auto locksmith prices compare to a main dealer in Didsbury?',
    answer:
      'Main dealers charge significantly more for key replacement and programming — often two to three times our rates — and frequently require the vehicle to be transported to them, adding recovery costs on top. We come to your location in Didsbury, complete the work at the roadside, and charge a fraction of dealer pricing for equivalent quality work using professional-grade equipment.',
  },
  {
    question: 'Do you charge a call-out fee for Didsbury?',
    answer:
      'No. We do not charge a separate call-out fee for attending your Didsbury location. The price we quote covers the job — labour and parts. The only exception would be if we attend and the job turns out to be something entirely different from what was described, in which case we discuss the revised scope before doing anything.',
  },
  {
    question: 'How can I be sure the price will not go up once you have started?',
    answer:
      'We provide a fixed, all-inclusive price before any work begins. Once you have agreed to that price, it does not change. We do not start work and then present a higher invoice. Our pricing model is straightforward: you know the cost before we touch the vehicle.',
  },
  {
    question: 'Is a cheaper auto locksmith as good as a main dealer?',
    answer:
      'For the services we provide — car lockouts, transponder key replacement, remote fob programming, ignition repair — yes. We use the same quality key blanks and professional-grade programming equipment as dealers. The difference in price comes from lower overheads and a local mobile operation rather than a large franchised network. Our 4.6-star rating across 127 Google reviews reflects the quality of the work, not just the price.',
  },
  {
    question: 'What are your typical prices for auto locksmith services in Didsbury?',
    answer:
      'Car lockout: from £65–£95. Transponder key replacement: from £95–£160. Smart key programming: from £120–£200+. Spare key addition: from £75–£120. Ignition repair: from £95–£130. All prices are indicative and a fixed quote is always confirmed before work starts. Call 07309 903243 for a specific estimate for your vehicle and situation.',
  },
]

const faqSchema = generateFAQSchema(faqs)

export default function CheapAutoLocksmithDidsburyPage() {
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
                <li className="text-slate-300">Affordable Auto Locksmith Didsbury</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Affordable Auto Locksmith Didsbury — Transparent Pricing, No Hidden Fees
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Looking for an affordable auto locksmith in Didsbury? Chorlton Locksmiths offers fair, transparent pricing — no call-out fee, fixed quote before we start, and significantly cheaper than a main dealer for equivalent service.
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
              { icon: <ShieldCheck size={20} className="text-slate-950" />, title: 'Fixed Price Guarantee', body: 'Price agreed before we start — it does not change when the job is done. No surprise extras.' },
              { icon: <Key size={20} className="text-slate-950" />, title: 'No Call-Out Fee', body: 'You pay for the job, not just for us arriving. No hidden attendance charge added to the bill.' },
              { icon: <Clock size={20} className="text-slate-950" />, title: 'Much Less Than a Dealer', body: 'Equivalent professional quality at a fraction of main dealer pricing — without the wait or tow truck.' },
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

      {/* Pricing guide */}
      <Section backgroundVariant="accent">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionHeading title="Indicative Pricing — Auto Locksmith Didsbury" subtitle="Fixed quotes confirmed on-site before any work begins" />
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {[
                { service: 'Car lockout (standard)', range: 'From £65–£95', note: 'Non-destructive entry — all common makes' },
                { service: 'Car lockout (prestige/high-security)', range: 'From £85–£120', note: 'BMW, Mercedes, Audi, Land Rover' },
                { service: 'Transponder key replacement', range: 'From £95–£160', note: 'Cut & programmed on-site — make dependent' },
                { service: 'Smart key / proximity card', range: 'From £120–£200+', note: 'Passive entry and push-button start systems' },
                { service: 'Spare key addition', range: 'From £75–£120', note: 'Added alongside existing key — both remain active' },
                { service: 'Ignition barrel repair', range: 'From £95–£130', note: 'Diagnosis, tumblers, or full repair' },
                { service: 'Broken key extraction', range: 'From £55–£85', note: 'Door lock or ignition — specialist tools' },
                { service: 'Key fob repair / re-sync', range: 'From £25–£75', note: 'Battery, circuit, or pairing — properly diagnosed' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border border-slate-200 rounded-xl">
                  <p className="font-bold text-slate-950 text-sm mb-1">{item.service}</p>
                  <p className="text-amber-600 font-bold text-lg mb-1">{item.range}</p>
                  <p className="text-slate-500 text-xs">{item.note}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-500 text-sm mt-5 text-center">
              All prices are indicative. A fixed all-inclusive quote is given on-site before any work starts. Call{' '}
              <a href="tel:+447309903243" className="text-amber-600 hover:text-amber-700 font-semibold">07309 903243</a>{' '}
              for a quick estimate over the phone.
            </p>
          </div>
        </Container>
      </Section>

      {/* Why cheaper than dealer */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-950 mb-4">Why Are We Cheaper Than a Main Dealer in Didsbury?</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Main dealers charge premium prices for key replacement and programming because they have significant overheads — large premises, franchise fees, multiple staff layers, and a booking system that often means waiting days for an appointment. They also frequently require the vehicle to be transported to them, adding recovery costs.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              We are a local mobile operation based in Chorlton, neighbouring Didsbury. Lower overheads mean lower prices — but not lower quality. We use the same professional-grade programming equipment as dealers, the same quality key blanks, and carry full professional insurance on every job.
            </p>
            <p className="text-slate-700 leading-relaxed">
              The result is a same-day service at your Didsbury location, typically at 40–60% less than a dealer quote for equivalent work.
            </p>
          </div>
        </Container>
      </Section>

      {/* Process + CTA */}
      <Section backgroundVariant="accent">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading title="How Our Transparent Pricing Works in Didsbury" />
              <ol className="space-y-5">
                {[
                  { step: '1', title: 'Call 07309 903243', desc: 'Describe your vehicle and situation. We often provide a price guide on the phone before attending.' },
                  { step: '2', title: 'No Call-Out Fee', desc: 'We attend your Didsbury location without charging for travel or arrival.' },
                  { step: '3', title: 'On-Site Assessment', desc: 'We assess the specific vehicle, lock type, and key system to confirm the exact scope.' },
                  { step: '4', title: 'Fixed Price Agreed', desc: 'All-inclusive quote provided — covers labour, parts, and programming. Agreed before we start.' },
                  { step: '5', title: 'Job Completed', desc: 'Professional service at the agreed price. No additions, no ambiguity.' },
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
                  <Link href="/mobile-auto-locksmith-didsbury" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">mobile auto locksmith Didsbury</Link>
                  {' '}·{' '}
                  <Link href="/cheap-auto-locksmith-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">cheap auto locksmith Chorlton</Link>
                </p>
              </div>
            </div>
            <div className="bg-slate-950 text-white rounded-xl p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-2">Get a Fair Price in Didsbury Today</h3>
              <p className="text-slate-400 text-sm mb-6">No call-out fee · Fixed price · Much less than a dealer</p>
              <div className="mb-6">
                <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">Call Now</p>
                <a href="tel:+447309903243" className="text-3xl font-bold text-amber-400 hover:text-amber-300 transition-colors">07309 903243</a>
              </div>
              <div className="space-y-2 text-sm text-slate-300 mb-8">
                <p>✓ No call-out fee</p>
                <p>✓ Fixed price before we start</p>
                <p>✓ No hidden charges</p>
                <p>✓ Significantly cheaper than dealer</p>
                <p>✓ 4.6★ — 127 Google reviews</p>
              </div>
              <QuoteForm />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading title="Affordable Auto Locksmith Didsbury — FAQs" centered />
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

      <Section backgroundVariant="accent">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-slate-700 mb-3">Related services in Didsbury and Chorlton:</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Auto Locksmith Didsbury', href: '/auto-locksmith-didsbury' },
                { label: 'Car Lockout Didsbury', href: '/car-lockout-didsbury' },
                { label: 'Car Key Replacement Didsbury', href: '/car-key-replacement-didsbury' },
                { label: 'Mobile Auto Locksmith Didsbury', href: '/mobile-auto-locksmith-didsbury' },
                { label: 'Cheap Auto Locksmith Chorlton', href: '/cheap-auto-locksmith-chorlton' },
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

      <Section>
        <Container>
          <div className="text-center py-4">
            <h2 className="text-2xl font-bold text-slate-950 mb-3">Looking for an Affordable Auto Locksmith in Didsbury?</h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">Call now for a fair, transparent price — fixed quote before we start, no hidden fees.</p>
            <a href="tel:+447309903243" className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xl px-8 py-4 rounded-xl transition-colors">
              <Phone size={24} />
              07309 903243
            </a>
            <p className="text-slate-400 text-sm mt-4">No call-out fee · Fixed price · 4.6★ Google rating</p>
          </div>
        </Container>
      </Section>
    </>
  )
}
