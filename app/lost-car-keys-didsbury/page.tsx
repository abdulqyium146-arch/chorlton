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
import { Key, Clock, Phone, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Lost Car Keys Didsbury | All-Keys-Lost Specialist | 07309 903243',
  description:
    'Lost your car keys in Didsbury with no spare? All-keys-lost specialist — we programme a new key to your vehicle ECU at the roadside. No dealer needed. Call 07309 903243.',
  keywords: ['lost car keys Didsbury', 'lost car key Didsbury', 'all keys lost Didsbury', 'replacement car keys Didsbury no spare'],
  openGraph: {
    title: 'Lost Car Keys Didsbury | All-Keys-Lost Specialist — On-Site',
    description: 'Lost all your car keys in Didsbury? We programme a new key to your vehicle at the roadside. No dealer visit. Call 07309 903243.',
    url: 'https://chorltonlocksmiths.com/lost-car-keys-didsbury',
    type: 'website',
    siteName: 'Chorlton Locksmiths',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lost Car Keys Didsbury | All-Keys-Lost Specialist | 07309 903243',
    description: 'Lost all your car keys in Didsbury? We produce a new key at the roadside — no dealer, no tow. Call 07309 903243.',
  },
  alternates: { canonical: 'https://chorltonlocksmiths.com/lost-car-keys-didsbury' },
  robots: { index: true, follow: true },
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Auto Locksmith Didsbury', url: '/auto-locksmith-didsbury' },
  { name: 'Lost Car Keys Didsbury', url: '/lost-car-keys-didsbury' },
])

const pageSchema = generateServicePageSchema({
  url: '/lost-car-keys-didsbury',
  name: 'Lost Car Keys Didsbury | Chorlton Locksmiths',
  description: 'Lost car keys service in Didsbury — all-keys-lost specialist, new key programmed to your vehicle ECU at the roadside.',
  dateModified: '2026-04-23',
})

const serviceSchema = generateServiceSchema({
  name: 'Lost Car Keys Didsbury',
  description: 'All-keys-lost car key replacement service in Didsbury, Manchester. We produce a new working key at the roadside — no donor key required, no dealer visit. Covers all major makes of cars and vans.',
  url: '/lost-car-keys-didsbury',
  serviceType: 'Lost Car Keys Service',
})

const howToSchema = generateHowToSchema({
  name: 'How to Get a New Car Key After Losing All Keys in Didsbury',
  description: 'The process Chorlton Locksmiths follows for all-keys-lost situations in Didsbury.',
  steps: [
    { name: 'Call 07309 903243', text: 'Tell us your vehicle make, model, year, and your exact location in Didsbury. Confirm you have no working key at all.' },
    { name: 'We confirm the process', text: 'We identify the correct all-keys-lost procedure for your specific vehicle — different makes require different approaches.' },
    { name: 'We arrive in ~30 minutes', text: 'Our mobile van with ECU programming equipment arrives at your Didsbury location.' },
    { name: 'Vehicle opened first', text: 'If you are locked out, we gain non-destructive entry before beginning the key replacement process.' },
    { name: 'New key programmed to ECU', text: 'We initialise a new key directly to your vehicle ECU and immobiliser. The new key starts the car — no donor key required.' },
  ],
})

const faqs = [
  {
    question: 'Can you replace my car key in Didsbury if I have lost every key and have no spare?',
    answer:
      'Yes. All-keys-lost situations are one of our most common call-outs in Didsbury. We carry dedicated ECU programming equipment that allows us to initialise a brand-new key directly to your vehicle without a working donor key present. This covers the vast majority of common makes including Ford, Vauxhall, BMW, Audi, Volkswagen, Mercedes, Toyota, Nissan, Kia, and Hyundai. Call 07309 903243 and tell us your vehicle make, model, and year — we can confirm quickly whether we can resolve it on-site.',
  },
  {
    question: 'Do I need to go to a dealer if I have lost all my car keys?',
    answer:
      'In most cases, no. Dealers will often quote several hundred pounds and ask you to have the vehicle transported to them. We come to your location in Didsbury and handle the entire process at the roadside — typically for significantly less than a dealer would charge. The exception is a small number of highly specialised or very new vehicle systems where a dealer-only security procedure applies; we will tell you honestly if that is the case.',
  },
  {
    question: 'Will I need my car towed if I have no keys at all?',
    answer:
      'No, in the vast majority of cases. We open your vehicle using professional non-destructive entry tools and then produce a new key on-site. We come to wherever you are in Didsbury — your home, a car park, or the street. No tow truck required.',
  },
  {
    question: 'How long does all-keys-lost key replacement take in Didsbury?',
    answer:
      'The process is more involved than a standard spare key replacement. Expect 45–90 minutes once we are with you, depending on the vehicle make, model, and security system complexity. We always give you a realistic time estimate on arrival.',
  },
  {
    question: 'How much does all-keys-lost replacement cost in Didsbury?',
    answer:
      'All-keys-lost jobs are priced higher than standard key copies because they require specialist ECU programming equipment and more time. Expect from £120–£200+ depending on the vehicle. We always quote a fixed price before starting. Call 07309 903243 for an estimate.',
  },
]

const faqSchema = generateFAQSchema(faqs)

export default function LostCarKeysDidsburyPage() {
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
                <li className="text-slate-300">Lost Car Keys Didsbury</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Lost Car Keys Didsbury — All-Keys-Lost Specialist
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Lost every car key in Didsbury with no spare? Chorlton Locksmiths is an all-keys-lost specialist — we programme a brand-new working key directly to your vehicle ECU at the roadside, without a dealer visit or tow truck.
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
              { icon: <Key size={20} className="text-slate-950" />, title: 'No Donor Key Needed', body: 'We initialise a new key to your ECU without a working donor key — true all-keys-lost capability.' },
              { icon: <Clock size={20} className="text-slate-950" />, title: '~30 Min to Didsbury', body: 'Dispatched from Chorlton — typically reaching any Didsbury location within 30 minutes.' },
              { icon: <ShieldCheck size={20} className="text-slate-950" />, title: 'No Dealer Visit', body: 'We handle the entire process at the roadside — significantly cheaper than a main dealer.' },
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
            <h2 className="text-2xl font-bold text-slate-950 mb-4">What Happens When You Lose All Your Car Keys in Didsbury</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Losing your only set of car keys is a more complex situation than needing a spare key — because without a working key present, standard key-copying machines cannot function. All-keys-lost replacement requires specialist ECU programming equipment that writes a new key identity directly to the vehicle computer and immobiliser system.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Chorlton Locksmiths carries this equipment in our mobile van. We come to you in Didsbury — whether you are outside a Didsbury Village restaurant, at home on a residential street in West Didsbury, or in a car park near Parrs Wood — and complete the entire process at the roadside.
            </p>
            <p className="text-slate-700 leading-relaxed">
              We cover all major manufacturers: Ford, Vauxhall, BMW, Audi, Volkswagen, Mercedes, Toyota, Nissan, Kia, Hyundai, Peugeot, Renault, and many more. Call us to confirm your specific vehicle.
            </p>
          </div>
        </Container>
      </Section>

      {/* Process + CTA */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading title="Lost Car Keys in Didsbury — Our Process" />
              <ol className="space-y-5">
                {[
                  { step: '1', title: 'Call 07309 903243', desc: 'Tell us your vehicle make, model, year, and location in Didsbury. Confirm you have no working key.' },
                  { step: '2', title: 'Confirmed ETA', desc: 'We dispatch our fully equipped mobile van — typically reaching Didsbury in 25–35 minutes.' },
                  { step: '3', title: 'Non-Destructive Entry First', desc: 'If you are locked out, we open the vehicle using specialist tools before beginning key programming.' },
                  { step: '4', title: 'Fixed Price Agreed', desc: 'We assess the vehicle security system and provide a firm all-inclusive quote before any programming begins.' },
                  { step: '5', title: 'New Key Programmed to ECU', desc: 'We initialise a new key directly to your vehicle ECU and immobiliser — the car starts with the new key.' },
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
                  <Link href="/car-key-replacement-didsbury" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">car key replacement Didsbury</Link>
                  {' '}·{' '}
                  <Link href="/car-lockout-didsbury" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">car lockout Didsbury</Link>
                  {' '}·{' '}
                  <Link href="/lost-car-keys-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">lost car keys Chorlton</Link>
                </p>
              </div>
            </div>
            <div className="bg-slate-950 text-white rounded-xl p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-2">Lost All Your Car Keys in Didsbury?</h3>
              <p className="text-slate-400 text-sm mb-6">We programme a new key at the roadside — no tow, no dealer</p>
              <div className="mb-6">
                <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">Call Now</p>
                <a href="tel:+447309903243" className="text-3xl font-bold text-amber-400 hover:text-amber-300 transition-colors">07309 903243</a>
              </div>
              <div className="space-y-2 text-sm text-slate-300 mb-8">
                <p>✓ All-keys-lost specialist</p>
                <p>✓ No donor key required</p>
                <p>✓ All major makes covered</p>
                <p>✓ On-site ECU programming</p>
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
          <SectionHeading title="Lost Car Keys Didsbury — FAQs" centered />
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
                { label: 'Car Key Replacement Didsbury', href: '/car-key-replacement-didsbury' },
                { label: 'Car Lockout Didsbury', href: '/car-lockout-didsbury' },
                { label: 'Spare Car Key Didsbury', href: '/spare-car-key-didsbury' },
                { label: 'Lost Car Keys Chorlton', href: '/lost-car-keys-chorlton' },
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
            <h2 className="text-2xl font-bold text-slate-950 mb-3">Lost All Your Car Keys in Didsbury?</h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">Call now — we programme a new key at your location, no tow truck or dealer needed.</p>
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
