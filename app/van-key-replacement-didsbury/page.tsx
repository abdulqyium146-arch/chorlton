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
import { Car, Clock, Phone, Key } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Van Key Replacement Didsbury | Cut & Programmed On-Site | 07309 903243',
  description:
    'Van key replacement in Didsbury — Transit, Sprinter, Vivaro, Transporter and all makes. Lost van key replaced and programmed at the roadside. Call 07309 903243.',
  keywords: ['van key replacement Didsbury', 'lost van key Didsbury', 'van key programming Didsbury', 'replacement van key Didsbury'],
  openGraph: {
    title: 'Van Key Replacement Didsbury | All Makes — On-Site',
    description: 'Van key replacement in Didsbury — all makes cut and programmed at the roadside. No dealer, no tow. Call 07309 903243.',
    url: 'https://chorltonlocksmiths.com/van-key-replacement-didsbury',
    type: 'website',
    siteName: 'Chorlton Locksmiths',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Van Key Replacement Didsbury | On-Site | 07309 903243',
    description: 'Lost van key in Didsbury? We replace and programme on-site for all major van makes. Call 07309 903243.',
  },
  alternates: { canonical: 'https://chorltonlocksmiths.com/van-key-replacement-didsbury' },
  robots: { index: true, follow: true },
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Auto Locksmith Didsbury', url: '/auto-locksmith-didsbury' },
  { name: 'Van Key Replacement Didsbury', url: '/van-key-replacement-didsbury' },
])

const pageSchema = generateServicePageSchema({
  url: '/van-key-replacement-didsbury',
  name: 'Van Key Replacement Didsbury | Chorlton Locksmiths',
  description: 'Van key replacement in Didsbury — keys cut and programmed at the roadside for all major commercial van makes.',
  dateModified: '2026-04-23',
})

const serviceSchema = generateServiceSchema({
  name: 'Van Key Replacement Didsbury',
  description: 'Mobile van key replacement service in Didsbury, Manchester. We cut and programme replacement van keys at the roadside for Ford Transit, Mercedes Sprinter, Vauxhall Vivaro, VW Transporter, and all major commercial vans — no dealer visit required.',
  url: '/van-key-replacement-didsbury',
  serviceType: 'Van Key Replacement',
})

const howToSchema = generateHowToSchema({
  name: 'How to Get a Replacement Van Key in Didsbury',
  description: 'The process for van key replacement at the roadside in Didsbury.',
  steps: [
    { name: 'Call 07309 903243', text: 'Give us your van make, model, year, and registration, plus your exact location in Didsbury.' },
    { name: 'We confirm key type and compatibility', text: 'We check our equipment covers your van model and identify the correct key blank and programming procedure.' },
    { name: 'We arrive in ~30 minutes', text: 'Our mobile van with key-cutting machinery and programming equipment arrives at your Didsbury location.' },
    { name: 'Van opened if needed', text: 'If you are locked out, we gain non-destructive entry before beginning the key replacement process.' },
    { name: 'New van key cut and programmed', text: 'We cut the blade to the correct profile and programme the transponder chip or smart key to the van ECU — the van starts with the new key.' },
  ],
})

const faqs = [
  {
    question: 'Can you replace a lost van key in Didsbury on the same day?',
    answer:
      'Yes, in most cases. We carry van key-cutting and programming equipment in our mobile van. For common makes such as Ford Transit, Mercedes Sprinter, Vauxhall Vivaro, and Volkswagen Transporter, we typically produce a working replacement van key at your Didsbury location within 45–90 minutes of your call. Call 07309 903243 to confirm your specific van.',
  },
  {
    question: 'Can you replace a van key if I have lost all keys and have no spare?',
    answer:
      'Yes. All-keys-lost van key replacement requires specialist ECU programming equipment to initialise a new key without a working donor key. We carry this equipment and can handle all-keys-lost situations for most common commercial van makes including Ford Transit, Mercedes Sprinter, Vauxhall Vivaro, VW Transporter, Renault Trafic, and Peugeot Boxer.',
  },
  {
    question: 'Do I need to take my van to a dealer if I lose my van key?',
    answer:
      'In the majority of cases, no. We come to your Didsbury location — whether that is a job site near Parrs Wood, a residential street, or a commercial premises on Wilmslow Road — and handle the entire key replacement process at the roadside. This is typically significantly faster and cheaper than a main dealer.',
  },
  {
    question: 'What van makes can you replace keys for in Didsbury?',
    answer:
      'We cover all major commercial van makes including Ford Transit and Transit Custom, Mercedes-Benz Sprinter and Vito, Vauxhall Vivaro and Movano, Volkswagen Transporter and Crafter, Renault Trafic and Master, Peugeot Boxer and Expert, Citroën Relay and Dispatch, Nissan NV400 and NV200, Toyota Proace, and Fiat Ducato. Call us to confirm your specific model.',
  },
  {
    question: 'How much does van key replacement cost in Didsbury?',
    answer:
      'Van key replacement varies by make, model, and key type. Standard transponder van keys typically start from £110–£160. All-keys-lost van key replacement with ECU programming typically starts from £150–£220+. We always provide a fixed price before any work starts. Call 07309 903243 for an estimate.',
  },
]

const faqSchema = generateFAQSchema(faqs)

export default function VanKeyReplacementDidsburyPage() {
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
                <li className="text-slate-300">Van Key Replacement Didsbury</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Van Key Replacement Didsbury — Back on the Road Same Day
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Lost your van key in Didsbury? Chorlton Locksmiths replaces van keys at the roadside for all major makes — Ford Transit, Mercedes Sprinter, Vauxhall Vivaro, VW Transporter, and more. No dealer visit, no tow truck, minimal downtime.
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
              { icon: <Car size={20} className="text-slate-950" />, title: 'All Major Van Makes', body: 'Transit, Sprinter, Vivaro, Transporter, Trafic, Boxer — we cover every common commercial van.' },
              { icon: <Key size={20} className="text-slate-950" />, title: 'On-Site Key Cutting', body: 'Van key cut and programmed at your Didsbury location — same-day service in most cases.' },
              { icon: <Clock size={20} className="text-slate-950" />, title: '~30 Min Response', body: 'Dispatched from Chorlton — minimal downtime for tradespeople and delivery drivers in Didsbury.' },
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
            <h2 className="text-2xl font-bold text-slate-950 mb-4">Van Key Replacement in Didsbury — Why Speed Matters</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              For tradespeople and delivery drivers operating in Didsbury, a lost van key is not just inconvenient — it is lost working time. Whether you are on a job site near Parrs Wood, making deliveries along Wilmslow Road, or parked on a residential street in West Didsbury, we dispatch immediately and aim to have a working replacement van key in your hand within 45–90 minutes of your call.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Our mobile service comes to your exact location — no tow truck to a workshop, no dealer appointment with a days-long wait. We carry dedicated commercial van key programming equipment for all major makes and handle the entire process at the roadside.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading title="Van Key Replacement Process in Didsbury" />
              <ol className="space-y-5">
                {[
                  { step: '1', title: 'Call 07309 903243', desc: 'Van make, model, year, registration, and Didsbury location. We confirm ETA and key type.' },
                  { step: '2', title: 'Van Opened If Needed', desc: 'If you are locked out, non-destructive entry first — then key replacement.' },
                  { step: '3', title: 'Fixed Price Agreed', desc: 'Upfront quote for the van key replacement before any work begins.' },
                  { step: '4', title: 'Key Cut On-Site', desc: 'Blade cut to the correct van lock profile using our on-board cutting machine.' },
                  { step: '5', title: 'Programmed & Tested', desc: 'Transponder paired to the van ECU. Van starts — replacement complete.' },
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
                  <Link href="/van-locksmith-didsbury" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">van locksmith Didsbury</Link>
                  {' '}·{' '}
                  <Link href="/lost-car-keys-didsbury" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">lost car keys Didsbury</Link>
                  {' '}·{' '}
                  <Link href="/van-key-replacement-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">van key replacement Chorlton</Link>
                </p>
              </div>
            </div>
            <div className="bg-slate-950 text-white rounded-xl p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-2">Lost Van Key in Didsbury?</h3>
              <p className="text-slate-400 text-sm mb-6">On-site replacement — all major makes, same day</p>
              <div className="mb-6">
                <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">Call Now</p>
                <a href="tel:+447309903243" className="text-3xl font-bold text-amber-400 hover:text-amber-300 transition-colors">07309 903243</a>
              </div>
              <div className="space-y-2 text-sm text-slate-300 mb-8">
                <p>✓ All major van makes covered</p>
                <p>✓ All-keys-lost capable</p>
                <p>✓ On-site cut &amp; programming</p>
                <p>✓ ~30 min response</p>
                <p>✓ Fixed price before we start</p>
              </div>
              <QuoteForm />
            </div>
          </div>
        </Container>
      </Section>

      <Section backgroundVariant="accent">
        <Container>
          <SectionHeading title="Van Key Replacement Didsbury — FAQs" centered />
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
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-slate-700 mb-3">Related van and auto locksmith services:</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Van Locksmith Didsbury', href: '/van-locksmith-didsbury' },
                { label: 'Auto Locksmith Didsbury', href: '/auto-locksmith-didsbury' },
                { label: 'Lost Car Keys Didsbury', href: '/lost-car-keys-didsbury' },
                { label: '24 Hour Auto Locksmith Didsbury', href: '/24-hour-auto-locksmith-didsbury' },
                { label: 'Van Locksmith Chorlton', href: '/van-locksmith-chorlton' },
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

      <Section backgroundVariant="accent">
        <Container>
          <div className="text-center py-4">
            <h2 className="text-2xl font-bold text-slate-950 mb-3">Lost Van Key in Didsbury?</h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">Call now — we produce a replacement van key at your location, same day in most cases.</p>
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
