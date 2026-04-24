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
import { Clock, Phone, ShieldCheck, Car } from 'lucide-react'

export const metadata: Metadata = {
  title: '24 Hour Auto Locksmith Didsbury | Night & Weekend | 07309 903243',
  description:
    '24 hour auto locksmith in Didsbury — available nights, weekends, and bank holidays. Car and van lockouts, lost keys, key programming. Call 07309 903243 any time.',
  keywords: ['24 hour auto locksmith Didsbury', 'emergency auto locksmith Didsbury', 'night auto locksmith Didsbury', '24/7 car locksmith Didsbury'],
  openGraph: {
    title: '24 Hour Auto Locksmith Didsbury | Available Any Time',
    description: '24/7 auto locksmith in Didsbury — nights, weekends, bank holidays. Car lockouts, lost keys, key programming. Call 07309 903243.',
    url: 'https://chorltonlocksmiths.com/24-hour-auto-locksmith-didsbury',
    type: 'website',
    siteName: 'Chorlton Locksmiths',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: '24 Hour Auto Locksmith Didsbury | 07309 903243',
    description: 'Locked out of your car in Didsbury at night or on a weekend? We are available 24/7. Call 07309 903243 now.',
  },
  alternates: { canonical: 'https://chorltonlocksmiths.com/24-hour-auto-locksmith-didsbury' },
  robots: { index: true, follow: true },
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Auto Locksmith Didsbury', url: '/auto-locksmith-didsbury' },
  { name: '24 Hour Auto Locksmith Didsbury', url: '/24-hour-auto-locksmith-didsbury' },
])

const pageSchema = generateServicePageSchema({
  url: '/24-hour-auto-locksmith-didsbury',
  name: '24 Hour Auto Locksmith Didsbury | Chorlton Locksmiths',
  description: '24/7 auto locksmith service in Didsbury — car lockouts, lost keys, and key programming available nights, weekends, and bank holidays.',
  dateModified: '2026-04-23',
})

const serviceSchema = generateServiceSchema({
  name: '24 Hour Auto Locksmith Didsbury',
  description: '24/7 emergency auto locksmith service in Didsbury, Manchester. Available every hour of every day for car lockouts, lost car keys, key programming, and van lockouts. ~30 minute response maintained through the night and at weekends.',
  url: '/24-hour-auto-locksmith-didsbury',
  serviceType: '24 Hour Auto Locksmith',
})

const howToSchema = generateHowToSchema({
  name: 'How to Get a 24 Hour Auto Locksmith in Didsbury',
  description: 'What to do when you need an auto locksmith in Didsbury outside normal hours.',
  steps: [
    { name: 'Call 07309 903243', text: 'Available 24 hours a day, 7 days a week. No answerphone, no call centre — your call is answered directly.' },
    { name: 'Give your details', text: 'Tell us your vehicle make, model, exact location in Didsbury, and the problem. We confirm your ETA.' },
    { name: 'We dispatch immediately', text: 'Out-of-hours response is the same as daytime — we maintain mobile coverage around the clock.' },
    { name: 'We arrive in ~30 minutes', text: 'Our response time in Didsbury is consistent 24/7 — approximately 25–35 minutes from your call.' },
    { name: 'Problem resolved at the roadside', text: 'Car lockout, lost keys, or key programming — all handled on-site with a fixed price agreed before we start.' },
  ],
})

const faqs = [
  {
    question: 'Are you genuinely available 24 hours in Didsbury, or do you use an out-of-hours call centre?',
    answer:
      'We are genuinely available 24 hours a day, 7 days a week — including nights, weekends, and bank holidays. When you call 07309 903243 at 2am on a Sunday, you speak directly to the team that dispatches and arrives. We do not use a call centre that sub-contracts the job to whoever is available.',
  },
  {
    question: 'Is the response time the same at night as it is during the day?',
    answer:
      'Yes. We maintain mobile coverage around the clock rather than a reduced on-call rota, which means our response time in Didsbury remains around 25–35 minutes regardless of when you call. Overnight there is often less traffic, so response times can actually be slightly faster.',
  },
  {
    question: 'Do you charge extra for out-of-hours call-outs in Didsbury?',
    answer:
      'We always provide a fixed price before any work starts, and we are transparent about our pricing. Out-of-hours and overnight call-outs may carry a premium, which we will confirm on the phone before you commit. We aim to be consistently less expensive than a dealer or recovery company.',
  },
  {
    question: 'Can you do car key programming at night in Didsbury?',
    answer:
      'Yes. Our mobile van carries key-cutting and transponder programming equipment at all times, including during overnight call-outs. If you lose your car keys in Didsbury at midnight, we can produce a replacement key at the roadside the same night.',
  },
  {
    question: 'What if I am locked out of my car in Didsbury on a bank holiday?',
    answer:
      'We operate on all UK bank holidays. The service, response time, and pricing process are the same as any other day. Call 07309 903243 and we will be with you as quickly as possible.',
  },
]

const faqSchema = generateFAQSchema(faqs)

export default function TwentyFourHourAutoLocksmithDidsburyPage() {
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
                <li className="text-slate-300">24 Hour Auto Locksmith Didsbury</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              24 Hour Auto Locksmith Didsbury — Available Right Now
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Locked out of your car in Didsbury at night, on a weekend, or on a bank holiday? Chorlton Locksmiths operates 24 hours a day, 7 days a week — same response time, same professional service, same fixed-price guarantee at any hour.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+447309903243" className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xl px-8 py-4 rounded-xl transition-colors">
                <Phone size={22} />
                Call 07309 903243
              </a>
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <Clock size={16} className="text-amber-400" />
                Available right now — 24/7
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* USPs */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Clock size={20} className="text-slate-950" />, title: 'Genuinely 24/7', body: 'Not a call centre — you speak directly to us at 2am on a Sunday. We dispatch the same night.' },
              { icon: <ShieldCheck size={20} className="text-slate-950" />, title: '~30 Min All Hours', body: 'We maintain full mobile coverage overnight — response times in Didsbury stay consistent at ~30 min.' },
              { icon: <Car size={20} className="text-slate-950" />, title: 'Full Service Any Hour', body: 'Car lockouts, van lockouts, lost keys, key programming — the same complete service 24/7.' },
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

      {/* Out-of-hours scenarios */}
      <Section backgroundVariant="accent">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-950 mb-6">Out-of-Hours Auto Locksmith Situations in Didsbury</h2>
            <div className="space-y-4">
              {[
                { title: 'Midnight lockout after a night out in Didsbury Village', body: 'Keys left inside after dinner or a night out — we are dispatched and with you in Didsbury within 30 minutes regardless of the hour.' },
                { title: 'Early-morning van start failure before a job', body: 'Key not recognised by the van at 5am before a delivery or trade job in Didsbury — we diagnose and resolve at the roadside.' },
                { title: 'Weekend or bank holiday lockout', body: 'Bank holidays and weekends are the same service, same response, same pricing process — we operate every single day.' },
                { title: 'Lost keys discovered in the evening', body: 'Realising you have lost your car keys when you are ready to leave in the evening — we come to your Didsbury location and produce a replacement key the same night.' },
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
              <SectionHeading title="24/7 Auto Locksmith Process — Didsbury" />
              <ol className="space-y-5">
                {[
                  { step: '1', title: 'Call 07309 903243 — Any Time', desc: 'Day or night, weekday or weekend. Your call is answered directly — no answerphone.' },
                  { step: '2', title: 'Immediate Dispatch', desc: 'We dispatch the nearest available mobile locksmith — same process at 3am as at 3pm.' },
                  { step: '3', title: '~30 Min to Didsbury', desc: 'Consistent response across all Didsbury locations, 24 hours a day.' },
                  { step: '4', title: 'Fixed Price Before We Start', desc: 'We quote upfront — no shock fees added for out-of-hours timing.' },
                  { step: '5', title: 'Problem Resolved', desc: 'Car or van lockout, lost keys, or key programming — completed at the roadside.' },
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
                  <Link href="/car-lockout-didsbury" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">car lockout Didsbury</Link>
                  {' '}·{' '}
                  <Link href="/24-hour-auto-locksmith-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">24 hour auto locksmith Chorlton</Link>
                </p>
              </div>
            </div>
            <div className="bg-slate-950 text-white rounded-xl p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-2">Need an Auto Locksmith in Didsbury Right Now?</h3>
              <p className="text-slate-400 text-sm mb-6">Available 24 hours — call any time</p>
              <div className="mb-6">
                <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">24/7 Line</p>
                <a href="tel:+447309903243" className="text-3xl font-bold text-amber-400 hover:text-amber-300 transition-colors">07309 903243</a>
              </div>
              <div className="space-y-2 text-sm text-slate-300 mb-8">
                <p>✓ Available 24 hours — nights &amp; weekends</p>
                <p>✓ ~30 min response in Didsbury</p>
                <p>✓ Car &amp; van lockouts</p>
                <p>✓ Lost keys replaced on-site</p>
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
          <SectionHeading title="24 Hour Auto Locksmith Didsbury — FAQs" centered />
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
                { label: 'Car Lockout Didsbury', href: '/car-lockout-didsbury' },
                { label: 'Lost Car Keys Didsbury', href: '/lost-car-keys-didsbury' },
                { label: 'Mobile Auto Locksmith Didsbury', href: '/mobile-auto-locksmith-didsbury' },
                { label: '24 Hour Auto Locksmith Chorlton', href: '/24-hour-auto-locksmith-chorlton' },
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
            <h2 className="text-2xl font-bold text-slate-950 mb-3">Locked Out in Didsbury — At Any Hour?</h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">Call 07309 903243 right now — we are available 24 hours and will be with you in Didsbury in approximately 30 minutes.</p>
            <a href="tel:+447309903243" className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xl px-8 py-4 rounded-xl transition-colors">
              <Phone size={24} />
              07309 903243
            </a>
            <p className="text-slate-500 text-sm mt-3">Available 24/7 · Nights · Weekends · Bank Holidays</p>
          </div>
        </Container>
      </Section>
    </>
  )
}
