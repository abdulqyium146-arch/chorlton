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
import { Car, Clock, Phone, ShieldCheck, Key } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Van Locksmith Didsbury | Locked Out of Van? Fast Response | 07309 903243',
  description:
    'Van locksmith in Didsbury — Ford Transit, Mercedes Sprinter, Vauxhall Vivaro, VW Transporter and all makes. Lockouts, lost van keys, and key programming. Call 07309 903243.',
  keywords: ['van locksmith Didsbury', 'van lockout Didsbury', 'van key replacement Didsbury', 'commercial van locksmith Didsbury'],
  openGraph: {
    title: 'Van Locksmith Didsbury | All Makes — Fast Response',
    description: 'Locked out of your van in Didsbury? We handle Transit, Sprinter, Vivaro, Transporter and all commercial vans. Call 07309 903243.',
    url: 'https://chorltonlocksmiths.com/van-locksmith-didsbury',
    type: 'website',
    siteName: 'Chorlton Locksmiths',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Van Locksmith Didsbury | Transit, Sprinter, Vivaro & More',
    description: 'Van lockout or lost van keys in Didsbury? Mobile locksmith — ~30 min response for all commercial vans. Call 07309 903243.',
  },
  alternates: { canonical: 'https://chorltonlocksmiths.com/van-locksmith-didsbury' },
  robots: { index: true, follow: true },
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Auto Locksmith Didsbury', url: '/auto-locksmith-didsbury' },
  { name: 'Van Locksmith Didsbury', url: '/van-locksmith-didsbury' },
])

const pageSchema = generateServicePageSchema({
  url: '/van-locksmith-didsbury',
  name: 'Van Locksmith Didsbury | Chorlton Locksmiths',
  description: 'Van locksmith service in Didsbury — lockouts, lost van keys, and key programming for all commercial van makes.',
  dateModified: '2026-04-23',
})

const serviceSchema = generateServiceSchema({
  name: 'Van Locksmith Didsbury',
  description: 'Mobile van locksmith service in Didsbury, Manchester. Covering van lockouts, lost van key replacement, and van key programming for Ford Transit, Mercedes Sprinter, Vauxhall Vivaro, VW Transporter, and all major commercial vans.',
  url: '/van-locksmith-didsbury',
  serviceType: 'Van Locksmith Service',
})

const howToSchema = generateHowToSchema({
  name: 'How to Get a Van Locksmith in Didsbury',
  description: 'What happens when you call Chorlton Locksmiths for a van lockout or lost van key in Didsbury.',
  steps: [
    { name: 'Call 07309 903243', text: 'Tell us your van make, model, year, registration, and your exact location in Didsbury.' },
    { name: 'We dispatch immediately', text: 'Our mobile locksmith van heads to your Didsbury location — typically 25–35 minutes.' },
    { name: 'Van assessed', text: 'We assess the specific van lock system and confirm the best method for entry or key replacement.' },
    { name: 'Non-destructive entry', text: 'We open the van using specialist commercial vehicle tools — no damage to the body, seals, or locks.' },
    { name: 'Van key cut or programmed', text: 'If you need a replacement van key, we cut and programme it on-site to get your vehicle back on the road.' },
  ],
})

const faqs = [
  {
    question: 'What van makes can you handle as a van locksmith in Didsbury?',
    answer:
      'We cover all major commercial van makes including Ford Transit and Transit Custom, Mercedes-Benz Sprinter and Vito, Vauxhall Vivaro and Movano, Volkswagen Transporter and Crafter, Peugeot Boxer and Expert, Citroën Relay and Dispatch, Renault Trafic and Master, Nissan NV400 and NV200, Toyota Proace, Fiat Ducato, and Iveco Daily. If your van is not listed, call us — we cover virtually all commercial vans on UK roads.',
  },
  {
    question: 'Can you open my van without damaging the body or lock?',
    answer:
      'Yes. We use specialist commercial vehicle entry tools designed for van door systems, which are different from standard car door entry tools. We do not force windows, damage rubber seals, or drill lock barrels as a first approach. Professional non-destructive entry is our standard method.',
  },
  {
    question: 'Can you replace a lost van key in Didsbury on the same day?',
    answer:
      'In most cases, yes. We carry van key-cutting and programming equipment in our mobile van. For common makes such as Ford Transit, Mercedes Sprinter, and Vauxhall Vivaro, we can typically produce a working replacement van key at your Didsbury location in 45–90 minutes. For all-keys-lost situations, we have ECU programming equipment to initialise a new key without a donor key.',
  },
  {
    question: 'I have a deadlock fitted to my van — can you still get in?',
    answer:
      'Van deadlocks add a secondary locking mechanism to the standard door lock. We are familiar with the most common aftermarket deadlock systems including Deadlocks, Slam Locks, and security upgrades from Armaplate and similar. Call us to discuss your specific van security setup.',
  },
  {
    question: 'How much does a van locksmith cost in Didsbury?',
    answer:
      'Van lockout pricing typically starts from £75–£110 depending on the van make and lock system. Van key replacement varies by make and key type, typically £110–£180+. We always quote a fixed price before starting. Call 07309 903243 for an estimate over the phone.',
  },
]

const faqSchema = generateFAQSchema(faqs)

export default function VanLocksmithDidsburyPage() {
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
                <li className="text-slate-300">Van Locksmith Didsbury</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Van Locksmith Didsbury — Back on the Road Fast
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Locked out of your van in Didsbury, or lost your van key on a job? Chorlton Locksmiths provides a fast mobile van locksmith service covering Ford Transit, Mercedes Sprinter, Vauxhall Vivaro, VW Transporter, and all major commercial vans. ~30 minute response to all Didsbury locations.
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
              { icon: <Car size={20} className="text-slate-950" />, title: 'All Van Makes', body: 'Transit, Sprinter, Vivaro, Transporter, Relay, Crafter, Trafic — we cover every common commercial van.' },
              { icon: <Clock size={20} className="text-slate-950" />, title: '~30 Min Response', body: 'Dispatched from Chorlton — minimal downtime when you are on a job in Didsbury.' },
              { icon: <Key size={20} className="text-slate-950" />, title: 'Keys Replaced On-Site', body: 'Van key cutting and programming at your Didsbury location — no workshop visit needed.' },
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
            <h2 className="text-2xl font-bold text-slate-950 mb-4">Van Locksmith Service in Didsbury — Why It Matters for Tradespeople</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              For tradespeople and delivery drivers working in Didsbury, a van lockout or lost van key is not just an inconvenience — it is lost earnings. A job site near Parrs Wood, a delivery run along Wilmslow Road, or a service call in West Didsbury can all come to a halt when you cannot access your van or start the engine.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Chorlton Locksmiths is based in the neighbouring area and provides a fast, professional mobile van locksmith service across all of Didsbury. We understand that every minute counts and we dispatch immediately on receiving your call.
            </p>
            <p className="text-slate-700 leading-relaxed">
              We carry specialist commercial vehicle entry tools and van key programming equipment for all major makes. Most van lockouts and key replacements are resolved within 45–60 minutes of your call.
            </p>
          </div>
        </Container>
      </Section>

      {/* Van makes grid */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-950 mb-6">Commercial Vans We Cover in Didsbury</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { make: 'Ford Transit & Transit Custom', note: 'Most common UK van — all key types and lock systems' },
                { make: 'Mercedes-Benz Sprinter & Vito', note: 'Incl. older mechanical and newer electronic key systems' },
                { make: 'Vauxhall Vivaro & Movano', note: 'All generations including Vivaro-e electric' },
                { make: 'Volkswagen Transporter & Crafter', note: 'T5, T6, T6.1 and Crafter — VAG key programming' },
                { make: 'Renault Trafic & Master', note: 'Card key and traditional key systems' },
                { make: 'Peugeot Boxer & Expert', note: 'Including partner models (Citroën Relay, Dispatch)' },
                { make: 'Nissan NV400 & NV200', note: 'Transponder and remote key replacement' },
                { make: 'Toyota Proace', note: 'Including Proace Verso passenger van variant' },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <p className="font-bold text-slate-950 text-sm">{item.make}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{item.note}</p>
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
              <SectionHeading title="Van Locksmith Process in Didsbury" />
              <ol className="space-y-5">
                {[
                  { step: '1', title: 'Call 07309 903243', desc: 'Tell us your van make, model, and your exact Didsbury location. We confirm your ETA immediately.' },
                  { step: '2', title: 'We Arrive in ~30 Minutes', desc: 'Mobile and fully equipped for commercial vehicles — dispatched directly to you.' },
                  { step: '3', title: 'Fixed Price Given First', desc: 'Upfront quote for the lockout or key replacement. No hidden charges.' },
                  { step: '4', title: 'Van Opened Without Damage', desc: 'Specialist commercial vehicle entry tools — no damage to bodywork, seals, or locks.' },
                  { step: '5', title: 'Back on the Road', desc: 'Van key replaced or programming complete. Minimal disruption to your working day.' },
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
                  <Link href="/van-key-replacement-didsbury" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">van key replacement Didsbury</Link>
                  {' '}·{' '}
                  <Link href="/auto-locksmith-didsbury" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">auto locksmith Didsbury</Link>
                  {' '}·{' '}
                  <Link href="/van-locksmith-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">van locksmith Chorlton</Link>
                </p>
              </div>
            </div>
            <div className="bg-slate-950 text-white rounded-xl p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-2">Van Locked or Keys Lost in Didsbury?</h3>
              <p className="text-slate-400 text-sm mb-6">Fast mobile response — ~30 min to Didsbury</p>
              <div className="mb-6">
                <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">Emergency Line</p>
                <a href="tel:+447309903243" className="text-3xl font-bold text-amber-400 hover:text-amber-300 transition-colors">07309 903243</a>
              </div>
              <div className="space-y-2 text-sm text-slate-300 mb-8">
                <p>✓ All major van makes covered</p>
                <p>✓ Non-destructive entry — no damage</p>
                <p>✓ Van key cut &amp; programmed on-site</p>
                <p>✓ Deadlock-compatible</p>
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
          <SectionHeading title="Van Locksmith Didsbury — FAQs" centered />
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
            <p className="text-sm font-semibold text-slate-700 mb-3">Related van and auto locksmith services:</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Auto Locksmith Didsbury', href: '/auto-locksmith-didsbury' },
                { label: 'Van Key Replacement Didsbury', href: '/van-key-replacement-didsbury' },
                { label: 'Car Lockout Didsbury', href: '/car-lockout-didsbury' },
                { label: '24 Hour Auto Locksmith Didsbury', href: '/24-hour-auto-locksmith-didsbury' },
                { label: 'Van Locksmith Chorlton', href: '/van-locksmith-chorlton' },
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
            <h2 className="text-2xl font-bold text-slate-950 mb-3">Van Locked Out or Keys Lost in Didsbury?</h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">Call now — fast mobile van locksmith, ~30 minute response across Didsbury.</p>
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
