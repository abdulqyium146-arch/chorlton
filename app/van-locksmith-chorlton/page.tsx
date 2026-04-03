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
import { Car, Phone, Clock, ShieldCheck, Key } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Van Locksmith Chorlton | Transit, Sprinter & More | 07309 903243',
  description:
    'Van locksmith in Chorlton — lockouts, key replacement, programming for Ford Transit, Mercedes Sprinter, Vauxhall Vivaro and more. Call 07309 903243.',
  keywords: ['van locksmith Chorlton', 'van key replacement Manchester', 'commercial vehicle locksmith', 'van lockout service'],
  openGraph: {
    title: 'Van Locksmith Chorlton | Mobile Van Lockout & Key Service',
    description: 'Locked out of your van in Chorlton? We cover all commercial vans — key replacement, lockouts, programming. Call 07309 903243.',
    url: 'https://chorltonlocksmiths.com/van-locksmith-chorlton',
    type: 'website',
    siteName: 'Chorlton Locksmiths',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Van Locksmith Chorlton | Transit & Sprinter Covered',
    description: 'Locked out of your van in Chorlton? Mobile van locksmith — ~30 min response. Call 07309 903243.',
  },
  alternates: { canonical: 'https://chorltonlocksmiths.com/van-locksmith-chorlton' },
  robots: { index: true, follow: true },
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Auto Locksmith Chorlton', url: '/auto-locksmith-chorlton' },
  { name: 'Van Locksmith Chorlton', url: '/van-locksmith-chorlton' },
])

const serviceSchema = generateServiceSchema({
  name: 'Van Locksmith Chorlton',
  description: 'Mobile van locksmith service in Chorlton, Manchester. Van lockouts, key replacement, key programming, and ignition repair for all commercial vans including Ford Transit, Mercedes Sprinter, and Vauxhall Vivaro.',
  url: '/van-locksmith-chorlton',
  serviceType: 'Van Locksmith Service',
})

const howToSchema = generateHowToSchema({
  name: 'How to Get Help from a Van Locksmith in Chorlton',
  description: 'Our mobile van locksmith process in Chorlton.',
  steps: [
    { name: 'Call us', text: 'Ring 07309 903243 with your van make, model, and location in Chorlton.' },
    { name: 'We dispatch', text: 'Mobile van locksmith heads to you immediately — typically 30 minutes.' },
    { name: 'Fixed quote', text: 'Upfront price confirmed before any work starts.' },
    { name: 'Van opened or key replaced', text: 'Lockout resolved or keys replaced on-site.' },
    { name: 'Back to work', text: 'Minimal downtime — we work quickly so you can get back on the road.' },
  ],
})

const faqs = [
  {
    question: 'Can you open a locked van in Chorlton without damaging it?',
    answer:
      'Yes. We use professional non-destructive entry tools for vans including Ford Transit, Mercedes Sprinter, Vauxhall Vivaro, VW Transporter, Peugeot Boxer, and Citroën Relay. No damage to bodywork, seals, or locks.',
  },
  {
    question: 'Can you replace van keys in Chorlton?',
    answer:
      'Yes. We cut and programme replacement van keys on-site, including transponder keys and remote fobs. See our van key replacement service for full details.',
  },
  {
    question: 'How quickly can you reach a locked-out van in Chorlton?',
    answer:
      'Our typical response time in Chorlton is around 30 minutes from your call. We prioritise trade and commercial callouts — we understand time is money for tradespeople and delivery drivers.',
  },
  {
    question: 'Do you cover self-employed tradespeople and small businesses?',
    answer:
      'Yes. We regularly work with sole traders, delivery drivers, and small businesses across Chorlton and Greater Manchester. We offer fast turnaround to minimise job disruption.',
  },
  {
    question: 'Can you fix a van ignition in Chorlton?',
    answer:
      'Yes. We repair and replace ignition barrels for all common commercial vans on-site. Call us to describe the fault and we will confirm we can help.',
  },
]

const faqSchema = generateFAQSchema(faqs)
const pageSchema = generateServicePageSchema({
  url: '/van-locksmith-chorlton',
  name: 'Van Locksmith Chorlton | Chorlton Locksmiths',
  description: 'Mobile van locksmith service in Chorlton — lockouts and key replacement for all commercial vans.',
  dateModified: '2026-03-22',
})

const VAN_MAKES = ['Ford Transit', 'Ford Transit Custom', 'Mercedes Sprinter', 'Vauxhall Vivaro', 'VW Transporter', 'Peugeot Boxer', 'Citroën Relay', 'Renault Trafic', 'Fiat Ducato', 'Iveco Daily', 'Toyota ProAce', 'Nissan NV200']

export default function VanLocksmithChorltonPage() {
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
                <li className="text-slate-300">Van Locksmith Chorlton</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Van Locksmith Chorlton — Fast Response for Tradespeople &amp; Businesses
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Locked out of your van in Chorlton? Lost your van keys? Chorlton Locksmiths provides a fast mobile van locksmith service
              covering all commercial vehicles — Ford Transit, Mercedes Sprinter, Vauxhall Vivaro, VW Transporter and more.
              We reach you in around 30 minutes so you can get back to work with minimal downtime.
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
              { icon: <Clock size={20} className="text-slate-950" />, title: '~30 Min Response', body: 'Fast dispatch — we know downtime costs money for tradespeople and delivery drivers.' },
              { icon: <Car size={20} className="text-slate-950" />, title: 'All Commercial Vans', body: 'Transit, Sprinter, Vivaro, Transporter, Boxer, Relay and more — we cover them all.' },
              { icon: <ShieldCheck size={20} className="text-slate-950" />, title: 'Non-Destructive Entry', body: 'Professional tools — no damage to your van bodywork, seals, or lock barrel.' },
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
          <SectionHeading title="Van Locksmith Services in Chorlton" centered />
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { icon: <Car size={22} className="text-slate-950" />, title: 'Van Lockout Service', desc: 'Locked keys inside? We open your van using non-destructive methods — no damage, fast turnaround.', href: '/van-locksmith-chorlton' },
              { icon: <Key size={22} className="text-slate-950" />, title: 'Van Key Replacement', desc: 'Lost your van keys? We cut and programme replacement keys on-site for all major makes.', href: '/van-key-replacement-chorlton' },
              { icon: <Key size={22} className="text-slate-950" />, title: 'Van Key Programming', desc: 'Transponder and remote fob programming for commercial vans carried out on-site.', href: '/car-key-programming-chorlton' },
              { icon: <Car size={22} className="text-slate-950" />, title: 'Van Ignition Repair', desc: 'Key won\'t turn or stuck in ignition? We repair and replace van ignitions on-site.', href: '/ignition-repair-chorlton' },
            ].map((item, idx) => (
              <article key={idx} className="p-6 bg-white border border-slate-100 rounded-xl shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400 mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg text-slate-950 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">{item.desc}</p>
                <Link href={item.href} className="text-amber-600 hover:text-amber-700 text-sm font-medium underline underline-offset-2">Learn more →</Link>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-950 mb-4">Vans We Cover in Chorlton</h2>
            <div className="flex flex-wrap gap-2">
              {VAN_MAKES.map((make) => (
                <span key={make} className="px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-sm text-slate-700 font-medium">{make}</span>
              ))}
            </div>
            <p className="text-slate-500 text-sm mt-4">Don&apos;t see your van? Call 07309 903243 — we cover most commercial vehicles.</p>
          </div>
        </Container>
      </Section>

      <Section backgroundVariant="accent">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading title="How Our Van Locksmith Service Works in Chorlton" />
              <ol className="space-y-5">
                {[
                  { step: '1', title: 'Call 07309 903243', desc: 'Tell us your location and van make/model. We dispatch immediately.' },
                  { step: '2', title: 'We Arrive (~30 Minutes)', desc: 'Fast response — we understand that your van is your livelihood.' },
                  { step: '3', title: 'Fixed Quote Upfront', desc: 'Transparent pricing before any work starts. No hidden charges.' },
                  { step: '4', title: 'Van Opened or Keys Replaced', desc: 'Lockout resolved or replacement key programmed on-site.' },
                  { step: '5', title: 'Back on the Road', desc: 'Minimal downtime so you can complete your day\'s work.' },
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
            </div>
            <div className="bg-slate-950 text-white rounded-xl p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-2">Van Lockout in Chorlton?</h3>
              <p className="text-slate-400 text-sm mb-6">Mobile van locksmith — ~30 min response, 7 days a week</p>
              <div className="mb-6">
                <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">Call Now</p>
                <a href="tel:+447309903243" className="text-3xl font-bold text-amber-400 hover:text-amber-300 transition-colors">07309 903243</a>
              </div>
              <div className="space-y-2 text-sm text-slate-300 mb-8">
                <p>✓ ~30 min response in Chorlton</p>
                <p>✓ All commercial van makes</p>
                <p>✓ Non-destructive entry</p>
                <p>✓ Keys replaced on-site</p>
                <p>✓ Fixed price before we start</p>
              </div>
              <QuoteForm />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading title="Van Locksmith Chorlton — FAQs" centered />
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
          <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
            <p className="text-sm text-slate-600 font-medium mb-3">More auto locksmith services in Chorlton:</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {[
                { label: 'Auto Locksmith Chorlton', href: '/auto-locksmith-chorlton' },
                { label: 'Van Key Replacement', href: '/van-key-replacement-chorlton' },
                { label: 'Car Key Replacement', href: '/car-key-replacement-chorlton' },
                { label: 'Car Lockout Chorlton', href: '/car-lockout-chorlton' },
                { label: 'Lost Car Keys', href: '/lost-car-keys-chorlton' },
                { label: '24 Hour Auto Locksmith', href: '/24-hour-auto-locksmith-chorlton' },
                { label: 'Mobile Auto Locksmith', href: '/mobile-auto-locksmith-chorlton' },
                { label: 'Ignition Repair', href: '/ignition-repair-chorlton' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-amber-600 hover:text-amber-700 underline underline-offset-2">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section backgroundVariant="accent">
        <Container>
          <div className="text-center py-4">
            <h2 className="text-2xl font-bold text-slate-950 mb-3">Van Locked Out in Chorlton? Call Us Now</h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">~30 minute response. We open your van and get you back to work fast.</p>
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
