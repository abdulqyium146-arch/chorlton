import type { Metadata } from 'next'
import Link from 'next/link'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { QuoteForm } from '@/components/forms/QuoteForm'
import { LocalNAP } from '@/components/local/LocalNAP'
import {
  generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema,
  generateHowToSchema, generateServicePageSchema,
} from '@/lib/schema'
import { Clock, Phone, Car, ShieldCheck, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: '24 Hour Auto Locksmith Chorlton | Emergency | 07309 903243',
  description:
    '24 hour emergency auto locksmith in Chorlton, Manchester. Car lockouts, lost keys & key programming any time. Call 07309 903243 now.',
  keywords: ['24 hour auto locksmith Chorlton', 'emergency locksmith Chorlton', '24/7 car locksmith Manchester', 'urgent car unlock service'],
  openGraph: {
    title: '24 Hour Auto Locksmith Chorlton | Any Time Emergency Help',
    description: '24 hour emergency auto locksmith in Chorlton — car lockouts, lost keys, key programming. Call 07309 903243 any time.',
    url: 'https://chorltonlocksmiths.com/24-hour-auto-locksmith-chorlton',
    type: 'website',
    siteName: 'Chorlton Locksmiths',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: '24 Hour Auto Locksmith Chorlton | Emergency Line',
    description: 'Locked out at night in Chorlton? 24 hour emergency auto locksmith — we dispatch immediately. Call 07309 903243.',
  },
  alternates: { canonical: 'https://chorltonlocksmiths.com/24-hour-auto-locksmith-chorlton' },
  robots: { index: true, follow: true },
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Auto Locksmith Chorlton', url: '/auto-locksmith-chorlton' },
  { name: '24 Hour Auto Locksmith Chorlton', url: '/24-hour-auto-locksmith-chorlton' },
])
const pageSchema = generateServicePageSchema({
  url: '/24-hour-auto-locksmith-chorlton',
  name: '24 Hour Auto Locksmith Chorlton | Chorlton Locksmiths',
  description: '24 hour emergency auto locksmith in Chorlton, Manchester — car lockouts, key replacement any time.',
  dateModified: '2026-03-22',
})

const serviceSchema = generateServiceSchema({
  name: '24 Hour Auto Locksmith Chorlton',
  description: 'Emergency 24 hour auto locksmith service in Chorlton, Manchester. Car lockouts, lost keys, and key programming available any time of day or night. Fast response, mobile, all major makes.',
  url: '/24-hour-auto-locksmith-chorlton',
  serviceType: '24 Hour Auto Locksmith',
})

const howToSchema = generateHowToSchema({
  name: 'How to Get an Emergency Auto Locksmith in Chorlton at Any Hour',
  description: 'Our 24 hour emergency auto locksmith process.',
  steps: [
    { name: 'Call 07309 903243', text: 'Ring any time — day or night. We answer emergency calls around the clock.' },
    { name: 'Give your location', text: 'Tell us where you are and your vehicle make and model.' },
    { name: 'We dispatch immediately', text: 'Emergency locksmith dispatched straight to you — ETA confirmed on the call.' },
    { name: 'Vehicle opened or key replaced', text: 'Professional non-destructive entry or key replacement on-site.' },
    { name: 'You drive away', text: 'Fixed price settled, emergency resolved — you are back on the road.' },
  ],
})

const faqs = [
  {
    question: 'Are you available 24 hours for car lockouts in Chorlton?',
    answer:
      'Yes. We provide an emergency auto locksmith service for car and van lockouts in Chorlton and Greater Manchester. Call 07309 903243 any time — day or night — and we will dispatch a locksmith to you.',
  },
  {
    question: 'How long does a 24 hour auto locksmith take to arrive in Chorlton?',
    answer:
      'Response time varies by time of day and your exact location. In most cases we aim to reach Chorlton within 30–60 minutes. We will give you a confirmed ETA when you call.',
  },
  {
    question: 'Is a 24 hour callout more expensive than a daytime callout?',
    answer:
      'There may be a premium for late-night or early-morning emergency callouts. We are always transparent about pricing — you will receive a fixed quote before any work starts, regardless of the time.',
  },
  {
    question: 'Can you replace a lost car key in the middle of the night in Chorlton?',
    answer:
      'Yes. Our emergency service includes full key cutting and transponder programming on-site. You do not have to wait until morning or arrange a tow — we handle the complete job at your location.',
  },
  {
    question: 'What if I am stranded in an unsafe location?',
    answer:
      'Tell us when you call and we will prioritise your callout. We treat all emergency lockouts seriously and aim to get to you as quickly as possible. If you feel unsafe, also contact the relevant emergency services.',
  },
]

const faqSchema = generateFAQSchema(faqs)

export default function TwentyFourHourAutoLocksmithChorltonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      {/* Hero — urgent, emergency tone */}
      <section className="bg-slate-950 text-white py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <nav aria-label="Breadcrumb" className="text-sm text-slate-400 mb-6">
              <ol className="flex gap-2 flex-wrap">
                <li><Link href="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/auto-locksmith-chorlton" className="hover:text-amber-400 transition-colors">Auto Locksmith Chorlton</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-slate-300">24 Hour Auto Locksmith</li>
              </ol>
            </nav>
            <div className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
              Emergency Line Available Now
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              24 Hour Auto Locksmith Chorlton — Emergency Car Help, Any Time
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Locked out of your car at 2am? Lost your keys late at night in Chorlton? Chorlton Locksmiths provides
              an emergency auto locksmith service available when you need it — day or night. Call 07309 903243 now
              and we will dispatch immediately.
            </p>
            <a href="tel:+447309903243" className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xl px-8 py-4 rounded-xl transition-colors">
              <Phone size={22} />
              Call Now — 07309 903243
            </a>
          </div>
        </Container>
      </section>

      {/* USPs */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Clock size={20} className="text-slate-950" />, title: 'Emergency Response', body: 'We answer calls and dispatch at any hour. Tell us your location and we confirm ETA immediately.' },
              { icon: <Car size={20} className="text-slate-950" />, title: 'All Makes & Models', body: 'BMW, Ford, Audi, Mercedes, VW, Vauxhall — cars and vans, any time of day or night.' },
              { icon: <ShieldCheck size={20} className="text-slate-950" />, title: 'Non-Destructive Entry', body: 'Professional tools used at every callout — no damage to your vehicle at any hour.' },
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

      {/* Services available 24hr */}
      <Section backgroundVariant="accent">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-950 mb-4">Emergency Auto Locksmith Services Available in Chorlton</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Our 24 hour service covers all the same services as our standard hours — with no compromise on quality or professionalism:
            </p>
            <div className="space-y-3">
              {[
                { title: 'Emergency car lockout', href: '/car-lockout-chorlton', body: 'Locked keys inside your car at any hour — we open it without damage.' },
                { title: 'Emergency van lockout', href: '/van-locksmith-chorlton', body: 'Commercial vehicle lockouts at any time — fast response for tradespeople.' },
                { title: 'Lost car keys — emergency replacement', href: '/lost-car-keys-chorlton', body: 'No spare, no way to start the car — we produce a full replacement on-site.' },
                { title: 'Broken key extraction', href: '/broken-car-key-chorlton', body: 'Key snapped in lock or ignition — extracted and replaced at any hour.' },
                { title: 'Ignition fault', href: '/ignition-repair-chorlton', body: 'Car won\'t start due to an ignition issue — diagnosed and repaired on-site.' },
              ].map((s, i) => (
                <div key={i} className="p-5 bg-white rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center gap-2">
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-950 mb-1">{s.title}</h3>
                    <p className="text-slate-600 text-sm">{s.body}</p>
                  </div>
                  <Link href={s.href} className="text-amber-600 hover:text-amber-700 text-sm font-medium underline underline-offset-2 flex-shrink-0">Details →</Link>
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
              <SectionHeading title="How Our 24 Hour Service Works in Chorlton" />
              <ol className="space-y-5">
                {[
                  { step: '1', title: 'Call 07309 903243', desc: 'Call any time — day or night. We answer and dispatch immediately.' },
                  { step: '2', title: 'ETA Confirmed', desc: 'We give you a precise arrival time based on your location. Usually 30–60 minutes in Chorlton.' },
                  { step: '3', title: 'Fixed Quote', desc: 'Upfront pricing confirmed before we start — including any out-of-hours premium.' },
                  { step: '4', title: 'Emergency Resolved', desc: 'Vehicle opened, key replaced, or ignition repaired on-site.' },
                  { step: '5', title: 'You Drive Away', desc: 'Emergency over — you are back in your vehicle and mobile again.' },
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
                  Also see:{' '}
                  <Link href="/car-lockout-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">car lockout Chorlton</Link>
                  {' '}·{' '}
                  <Link href="/mobile-auto-locksmith-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">mobile auto locksmith</Link>
                  {' '}·{' '}
                  <Link href="/auto-locksmith-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">auto locksmith Chorlton</Link>
                </p>
              </div>
            </div>
            <div className="bg-slate-950 text-white rounded-xl p-8 sticky top-24">
              <div className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                Emergency Line
              </div>
              <h3 className="text-2xl font-bold mb-2">Locked Out Right Now?</h3>
              <p className="text-slate-400 text-sm mb-6">Call our emergency line — we dispatch immediately, any hour</p>
              <div className="mb-6">
                <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">24 Hour Line</p>
                <a href="tel:+447309903243" className="text-3xl font-bold text-amber-400 hover:text-amber-300 transition-colors">07309 903243</a>
              </div>
              <div className="space-y-2 text-sm text-slate-300 mb-8">
                <p>✓ Emergency response any hour</p>
                <p>✓ ~30–60 min response in Chorlton</p>
                <p>✓ Non-destructive entry</p>
                <p>✓ Keys replaced on-site</p>
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
          <SectionHeading title="24 Hour Auto Locksmith Chorlton — FAQs" centered />
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

      {/* Bottom CTA */}
      <Section>
        <Container>
          <div className="text-center py-4">
            <h2 className="text-2xl font-bold text-slate-950 mb-3">Emergency Auto Locksmith in Chorlton — Call Now</h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">We dispatch immediately at any hour. Fixed price, no damage, professional service.</p>
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
