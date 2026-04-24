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
  title: 'Car Key Replacement Didsbury | Cut & Programmed On-Site | 07309 903243',
  description:
    'Car key replacement in Didsbury — transponder keys, remote fobs, and smart keys cut and programmed at the roadside. No dealer visit needed. Call 07309 903243.',
  keywords: ['car key replacement Didsbury', 'replacement car key Didsbury', 'car key cut Didsbury', 'transponder key replacement Didsbury'],
  openGraph: {
    title: 'Car Key Replacement Didsbury | On-Site Cutting & Programming',
    description: 'Need a replacement car key in Didsbury? We cut and programme transponder keys, remote fobs, and smart keys at the roadside. Call 07309 903243.',
    url: 'https://chorltonlocksmiths.com/car-key-replacement-didsbury',
    type: 'website',
    siteName: 'Chorlton Locksmiths',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Key Replacement Didsbury | On-Site | 07309 903243',
    description: 'Replacement car keys cut and programmed in Didsbury — no dealer, no tow truck. Call 07309 903243.',
  },
  alternates: { canonical: 'https://chorltonlocksmiths.com/car-key-replacement-didsbury' },
  robots: { index: true, follow: true },
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Auto Locksmith Didsbury', url: '/auto-locksmith-didsbury' },
  { name: 'Car Key Replacement Didsbury', url: '/car-key-replacement-didsbury' },
])

const pageSchema = generateServicePageSchema({
  url: '/car-key-replacement-didsbury',
  name: 'Car Key Replacement Didsbury | Chorlton Locksmiths',
  description: 'Car key replacement in Didsbury — transponder keys, remote fobs, and smart keys cut and programmed on-site.',
  dateModified: '2026-04-23',
})

const serviceSchema = generateServiceSchema({
  name: 'Car Key Replacement Didsbury',
  description: 'Mobile car key replacement service in Didsbury, Manchester. We cut and programme replacement transponder keys, remote key fobs, and proximity smart keys at the roadside — no dealer visit or tow truck required.',
  url: '/car-key-replacement-didsbury',
  serviceType: 'Car Key Replacement',
})

const howToSchema = generateHowToSchema({
  name: 'How to Get a Replacement Car Key in Didsbury',
  description: 'The process when you call Chorlton Locksmiths for car key replacement in Didsbury.',
  steps: [
    { name: 'Call 07309 903243', text: 'Tell us your vehicle make, model, year, and your exact location in Didsbury.' },
    { name: 'We confirm the key type required', text: 'We identify whether you need a transponder key, remote fob, smart key, or blade-only replacement for your specific vehicle.' },
    { name: 'We arrive in ~30 minutes', text: 'Our mobile van carries key-cutting machinery and programming equipment — we come directly to you in Didsbury.' },
    { name: 'Key cut and programmed on-site', text: 'We cut the blade profile to match your lock and programme the transponder chip or smart key to your vehicle immobiliser at the roadside.' },
    { name: 'You drive away', text: 'Your new key starts the car — no dealer visit, no tow truck, no waiting days for a posted key.' },
  ],
})

const faqs = [
  {
    question: 'Can you replace my car key in Didsbury without me visiting a dealer?',
    answer:
      'Yes. We carry mobile key-cutting and transponder programming equipment in our van. We come to your location in Didsbury — whether that is Didsbury Village, Parrs Wood, Wilmslow Road, or a side street — and produce a working replacement key at the roadside. For most common makes this means no dealer visit, no tow truck, and no waiting days for a key to be posted.',
  },
  {
    question: 'What types of car keys can you replace in Didsbury?',
    answer:
      'We replace standard cut keys, transponder chip keys, remote key fobs, flip-style remote keys, proximity smart keys, push-button start keycards, Tibbe keys (Ford, Jaguar), and laser-cut HU keys. If you are unsure about your key type, simply call us with your vehicle make, model, and year — we can confirm within seconds.',
  },
  {
    question: 'Can you replace a key if I have no working key at all?',
    answer:
      'Yes — this is called an all-keys-lost situation and is one of our most common Didsbury call-outs. All-keys-lost replacement requires specialist equipment to initialise a new key directly to the vehicle ECU without a working key present. We carry exactly this equipment, so most vehicles can be resolved at the roadside without a dealer visit.',
  },
  {
    question: 'How much does car key replacement cost in Didsbury?',
    answer:
      'Pricing varies by vehicle make, model, and key type. A replacement transponder key typically starts from £95–£160. Smart keys and proximity cards for prestige vehicles (BMW, Mercedes, Audi, Land Rover) typically range from £120–£200+. We always quote a fixed price before we start. Call 07309 903243 for a quick estimate.',
  },
  {
    question: 'How long does car key replacement take in Didsbury?',
    answer:
      'Once we arrive at your Didsbury location, most standard transponder key replacements take 20–45 minutes. More complex smart key or all-keys-lost programming can take up to 60–90 minutes depending on the vehicle system. We always give you a realistic time estimate on arrival.',
  },
]

const faqSchema = generateFAQSchema(faqs)

export default function CarKeyReplacementDidsburyPage() {
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
                <li className="text-slate-300">Car Key Replacement Didsbury</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Car Key Replacement Didsbury — Cut &amp; Programmed at the Roadside
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Need a replacement car key in Didsbury? Chorlton Locksmiths cuts and programmes replacement transponder keys, remote fobs, and smart keys at your location — no dealer visit, no tow truck, no waiting days for a key in the post.
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
              { icon: <Key size={20} className="text-slate-950" />, title: 'On-Site Programming', body: 'Transponder chips, remote fobs, and smart keys all paired to your vehicle at the roadside in Didsbury.' },
              { icon: <Clock size={20} className="text-slate-950" />, title: '~30 Min Response', body: 'We dispatch from Chorlton — consistently reaching Didsbury within 30 minutes of your call.' },
              { icon: <ShieldCheck size={20} className="text-slate-950" />, title: 'No Dealer Needed', body: 'Significantly cheaper than a main dealer and completed same-day — often within the hour.' },
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

      {/* Key types */}
      <Section backgroundVariant="accent">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-950 mb-4">Key Types We Replace in Didsbury</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Modern car keys vary significantly between manufacturers and model years. Our mobile van is equipped with the cutting and programming tools to handle the full range of key systems on UK roads today.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Transponder chip keys', body: 'Encrypted chip inside the key blade communicates with the engine immobiliser. We programme new chips to match your vehicle.' },
                { title: 'Remote key fobs', body: 'Keys with central locking buttons. We cut the blade and programme the remote signal to your vehicle.' },
                { title: 'Flip-style remote keys', body: 'Folding remote keys common on VAG group vehicles (VW, Audi, Seat, Skoda). Blade cut and remote synced on-site.' },
                { title: 'Proximity smart keys', body: 'Passive entry and push-button start. We pair new smart keys to the vehicle ECU using manufacturer-level tools.' },
                { title: 'All-keys-lost', body: 'No working key at all? We initialise a new key to the ECU directly — no donor key required for most makes.' },
                { title: 'Tibbe & laser-cut keys', body: 'High-security laser-cut and Tibbe keys for Ford, Jaguar, and Volvo. Specialist cutting and programming available.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white rounded-xl border border-slate-200">
                  <h3 className="font-bold text-slate-950 mb-1 text-sm">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.body}</p>
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
              <SectionHeading title="How Car Key Replacement Works in Didsbury" />
              <ol className="space-y-5">
                {[
                  { step: '1', title: 'Call 07309 903243', desc: 'Give us your vehicle make, model, year, and Didsbury location. We confirm we can help and provide an ETA.' },
                  { step: '2', title: 'We Arrive in ~30 Minutes', desc: 'Our mobile van with key-cutting machine and programming equipment comes directly to you.' },
                  { step: '3', title: 'Fixed Price Agreed', desc: 'We assess the job and provide a firm quote before any work begins.' },
                  { step: '4', title: 'Key Cut On-Site', desc: 'We cut the blade profile to the correct specification for your vehicle door and ignition.' },
                  { step: '5', title: 'Transponder Programmed', desc: 'We pair the chip or smart key to your vehicle ECU and immobiliser — the car starts with the new key.' },
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
                  <Link href="/lost-car-keys-didsbury" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">lost car keys Didsbury</Link>
                  {' '}·{' '}
                  <Link href="/car-key-fob-repair-didsbury" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">key fob repair Didsbury</Link>
                  {' '}·{' '}
                  <Link href="/car-key-replacement-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">car key replacement Chorlton</Link>
                </p>
              </div>
            </div>
            <div className="bg-slate-950 text-white rounded-xl p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-2">Need a Replacement Key in Didsbury?</h3>
              <p className="text-slate-400 text-sm mb-6">On-site cutting and programming — no dealer, no waiting</p>
              <div className="mb-6">
                <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">Call Now</p>
                <a href="tel:+447309903243" className="text-3xl font-bold text-amber-400 hover:text-amber-300 transition-colors">07309 903243</a>
              </div>
              <div className="space-y-2 text-sm text-slate-300 mb-8">
                <p>✓ Transponder keys — all major makes</p>
                <p>✓ Remote fobs programmed on-site</p>
                <p>✓ Smart keys &amp; push-button start</p>
                <p>✓ All-keys-lost specialist</p>
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
          <SectionHeading title="Car Key Replacement Didsbury — FAQs" centered />
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
                { label: 'Lost Car Keys Didsbury', href: '/lost-car-keys-didsbury' },
                { label: 'Car Key Programming Didsbury', href: '/car-key-programming-didsbury' },
                { label: 'Car Key Fob Repair Didsbury', href: '/car-key-fob-repair-didsbury' },
                { label: 'Car Key Replacement Chorlton', href: '/car-key-replacement-chorlton' },
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
            <h2 className="text-2xl font-bold text-slate-950 mb-3">Need a Replacement Car Key in Didsbury?</h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">Call now — we arrive in around 30 minutes and cut and programme your key at the roadside.</p>
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
