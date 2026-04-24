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
  title: 'Car Key Programming Didsbury | Transponder & Smart Keys | 07309 903243',
  description:
    'Car key programming in Didsbury — transponder keys, remote fobs, and smart keys programmed to your vehicle at the roadside. All major makes. Call 07309 903243.',
  keywords: ['car key programming Didsbury', 'transponder key programming Didsbury', 'smart key programming Didsbury', 'key fob programming Didsbury'],
  openGraph: {
    title: 'Car Key Programming Didsbury | On-Site Transponder & Smart Key',
    description: 'Car key programming at the roadside in Didsbury — transponder chips, remote fobs, smart keys, all major makes. Call 07309 903243.',
    url: 'https://chorltonlocksmiths.com/car-key-programming-didsbury',
    type: 'website',
    siteName: 'Chorlton Locksmiths',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Key Programming Didsbury | All Key Types | 07309 903243',
    description: 'Transponder, smart key, and remote fob programming in Didsbury. No dealer needed — on-site service. Call 07309 903243.',
  },
  alternates: { canonical: 'https://chorltonlocksmiths.com/car-key-programming-didsbury' },
  robots: { index: true, follow: true },
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Auto Locksmith Didsbury', url: '/auto-locksmith-didsbury' },
  { name: 'Car Key Programming Didsbury', url: '/car-key-programming-didsbury' },
])

const pageSchema = generateServicePageSchema({
  url: '/car-key-programming-didsbury',
  name: 'Car Key Programming Didsbury | Chorlton Locksmiths',
  description: 'Car key programming in Didsbury — transponder chips, remote fobs, and smart keys programmed at the roadside for all major makes.',
  dateModified: '2026-04-23',
})

const serviceSchema = generateServiceSchema({
  name: 'Car Key Programming Didsbury',
  description: 'Mobile car key programming service in Didsbury, Manchester. We programme transponder keys, remote key fobs, proximity smart keys, and all-keys-lost ECU initialisation at the roadside — no dealer visit required.',
  url: '/car-key-programming-didsbury',
  serviceType: 'Car Key Programming',
})

const howToSchema = generateHowToSchema({
  name: 'How Car Key Programming Works in Didsbury',
  description: 'The process Chorlton Locksmiths follows for car key programming at the roadside in Didsbury.',
  steps: [
    { name: 'Call 07309 903243', text: 'Tell us your vehicle make, model, year, and your exact location in Didsbury. Describe the key type — transponder, fob, or smart key.' },
    { name: 'We confirm compatibility', text: 'We check our equipment covers your specific vehicle security system and key type before dispatching.' },
    { name: 'We arrive in ~30 minutes', text: 'Our mobile van arrives at your Didsbury location with the programming hardware and software for your vehicle.' },
    { name: 'Key connected to OBD port', text: 'We connect our diagnostic tool to the vehicle OBD port and access the immobiliser and key management system.' },
    { name: 'Key programmed and tested', text: 'The new key transponder or smart key chip is paired to the vehicle ECU. We test ignition start and remote functions before leaving.' },
  ],
})

const faqs = [
  {
    question: 'What types of car key can you programme in Didsbury?',
    answer:
      'We programme all common car key types used on UK roads: standard transponder chip keys, remote key fobs (one-button and multi-button), flip-style remote keys, proximity smart keys (passive entry/push-button start), keycards (Renault, Citroën), and Tibbe keys (Ford, Jaguar). For each type, we carry the appropriate programming hardware and software at the time of your call.',
  },
  {
    question: 'Can you programme a car key to my vehicle in Didsbury without going to a dealer?',
    answer:
      'Yes. We use professional-grade OBD diagnostic and key programming equipment identical in capability to dealer tools. For the vast majority of makes and models — including Ford, Vauxhall, BMW, Audi, Volkswagen, Mercedes, Toyota, Nissan, Kia, and Hyundai — we handle the full programming process at the roadside in Didsbury. The result is a working key that starts the engine and operates all remote functions.',
  },
  {
    question: 'My new key starts the car but the remote locking does not work — can you fix this?',
    answer:
      'Yes. Remote locking synchronisation is separate from transponder programming and sometimes requires an additional pairing step. We can diagnose whether the issue is a programming failure, a faulty remote receiver in the car, or a problem with the key fob circuit board — and resolve it on-site.',
  },
  {
    question: 'Can you add a spare key to my car in Didsbury without losing the existing key?',
    answer:
      'Yes. Adding a spare key while keeping an existing working key is generally simpler than an all-keys-lost scenario. We programme the new key alongside your existing key so both work with the vehicle — handy for sharing between household members or having a backup.',
  },
  {
    question: 'How much does car key programming cost in Didsbury?',
    answer:
      'Programming costs depend on the vehicle make, model, and key type. Adding a spare transponder key typically starts from £75–£120. Full replacement key cut and programming starts from £95–£160. Smart key programming for prestige vehicles typically ranges from £120–£200+. A fixed quote is given before we start. Call 07309 903243 for an estimate.',
  },
]

const faqSchema = generateFAQSchema(faqs)

export default function CarKeyProgrammingDidsburyPage() {
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
                <li className="text-slate-300">Car Key Programming Didsbury</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Car Key Programming Didsbury — Transponder &amp; Smart Keys at the Roadside
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Need a car key programmed in Didsbury? Chorlton Locksmiths programmes transponder chip keys, remote fobs, and smart keys at your location — using professional OBD diagnostic equipment. No dealer visit, no tow truck, no waiting days.
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
              { icon: <Key size={20} className="text-slate-950" />, title: 'All Key Types', body: 'Transponder chips, remote fobs, flip keys, smart keys, push-button start — all programmed on-site.' },
              { icon: <Clock size={20} className="text-slate-950" />, title: '~30 Min to Didsbury', body: 'Dispatched from Chorlton — typically reaching any Didsbury location within 30 minutes.' },
              { icon: <ShieldCheck size={20} className="text-slate-950" />, title: 'Dealer-Level Tools', body: 'Professional OBD programming hardware — the same capability as a main dealer, at a fraction of the cost.' },
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

      {/* Programming types */}
      <Section backgroundVariant="accent">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-950 mb-4">Car Key Programming Types We Handle in Didsbury</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Transponder key programming', body: 'The encrypted chip inside the key blade is paired to your engine immobiliser using dedicated OBD software. Works with all common transponder systems.' },
                { title: 'Remote fob synchronisation', body: 'Remote locking and unlocking requires the key fob to be synchronised with your vehicle central locking receiver. We handle initial pairing and re-synchronisation.' },
                { title: 'Smart key / proximity card', body: 'Passive entry and push-button start systems require manufacturer-level tools to initialise new keys. We carry the hardware for BMW, Mercedes, Audi, Ford, Toyota, and more.' },
                { title: 'All-keys-lost ECU write', body: 'When no working key is present, we write a new key identity directly to the ECU using specialist all-keys-lost programming procedures.' },
                { title: 'Spare key addition', body: 'Adding a second key to your system while keeping the existing key working — both keys remain active in the immobiliser.' },
                { title: 'Key deletion / security reset', body: 'If a key has been lost and you want to remove it from the system for security, we can delete specific keys and re-programme remaining valid keys.' },
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
              <SectionHeading title="Car Key Programming Process — Didsbury" />
              <ol className="space-y-5">
                {[
                  { step: '1', title: 'Call 07309 903243', desc: 'Give us your vehicle make, model, year, and Didsbury location. We confirm we can programme your key type.' },
                  { step: '2', title: 'Mobile Van Dispatched', desc: 'We arrive in ~30 minutes with the correct programming hardware and key blanks for your vehicle.' },
                  { step: '3', title: 'Fixed Price Agreed', desc: 'We assess the job and provide a firm quote. No surprises — price agreed before programming begins.' },
                  { step: '4', title: 'OBD Diagnostic Connection', desc: 'We connect to your vehicle OBD port and access the immobiliser and key management system.' },
                  { step: '5', title: 'Key Tested Before We Leave', desc: 'We verify the key starts the engine and all remote functions work before the job is complete.' },
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
                  <Link href="/spare-car-key-didsbury" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">spare car key Didsbury</Link>
                  {' '}·{' '}
                  <Link href="/car-key-programming-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">car key programming Chorlton</Link>
                </p>
              </div>
            </div>
            <div className="bg-slate-950 text-white rounded-xl p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-2">Need a Key Programmed in Didsbury?</h3>
              <p className="text-slate-400 text-sm mb-6">On-site programming — no dealer, no waiting</p>
              <div className="mb-6">
                <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">Call Now</p>
                <a href="tel:+447309903243" className="text-3xl font-bold text-amber-400 hover:text-amber-300 transition-colors">07309 903243</a>
              </div>
              <div className="space-y-2 text-sm text-slate-300 mb-8">
                <p>✓ Transponder, fob &amp; smart keys</p>
                <p>✓ All-keys-lost capable</p>
                <p>✓ Spare key addition</p>
                <p>✓ Dealer-level programming tools</p>
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
          <SectionHeading title="Car Key Programming Didsbury — FAQs" centered />
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
                { label: 'Lost Car Keys Didsbury', href: '/lost-car-keys-didsbury' },
                { label: 'Spare Car Key Didsbury', href: '/spare-car-key-didsbury' },
                { label: 'Car Key Programming Chorlton', href: '/car-key-programming-chorlton' },
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
            <h2 className="text-2xl font-bold text-slate-950 mb-3">Need a Car Key Programmed in Didsbury?</h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">Call now — we programme transponder keys, remote fobs, and smart keys at your location. No dealer needed.</p>
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
