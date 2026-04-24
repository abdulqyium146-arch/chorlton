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
import { Car, Clock, Phone, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mobile Auto Locksmith Didsbury | We Come to You | 07309 903243',
  description:
    'Mobile auto locksmith in Didsbury — we come directly to your car or van location. No workshop, no tow truck. Car lockouts, lost keys, key programming on-site. Call 07309 903243.',
  keywords: ['mobile auto locksmith Didsbury', 'mobile car locksmith Didsbury', 'mobile locksmith Didsbury', 'auto locksmith near me Didsbury'],
  openGraph: {
    title: 'Mobile Auto Locksmith Didsbury | We Come to Your Location',
    description: 'Mobile auto locksmith serving Didsbury — we come to your car wherever it is. Lockouts, lost keys, key programming. Call 07309 903243.',
    url: 'https://chorltonlocksmiths.com/mobile-auto-locksmith-didsbury',
    type: 'website',
    siteName: 'Chorlton Locksmiths',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile Auto Locksmith Didsbury | 07309 903243',
    description: 'Mobile auto locksmith in Didsbury — we come to your location. Lockouts, lost keys, key programming. Call 07309 903243.',
  },
  alternates: { canonical: 'https://chorltonlocksmiths.com/mobile-auto-locksmith-didsbury' },
  robots: { index: true, follow: true },
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Auto Locksmith Didsbury', url: '/auto-locksmith-didsbury' },
  { name: 'Mobile Auto Locksmith Didsbury', url: '/mobile-auto-locksmith-didsbury' },
])

const pageSchema = generateServicePageSchema({
  url: '/mobile-auto-locksmith-didsbury',
  name: 'Mobile Auto Locksmith Didsbury | Chorlton Locksmiths',
  description: 'Mobile auto locksmith in Didsbury — we come to your vehicle location across all of Didsbury with full car and van locksmith equipment.',
  dateModified: '2026-04-23',
})

const serviceSchema = generateServiceSchema({
  name: 'Mobile Auto Locksmith Didsbury',
  description: 'Fully mobile auto locksmith service in Didsbury, Manchester. We come to your vehicle location — home, car park, street, or job site — with professional key-cutting machinery, transponder programming equipment, and non-destructive vehicle entry tools. No tow truck, no workshop, no dealer appointment.',
  url: '/mobile-auto-locksmith-didsbury',
  serviceType: 'Mobile Auto Locksmith',
})

const howToSchema = generateHowToSchema({
  name: 'How Our Mobile Auto Locksmith Service Works in Didsbury',
  description: 'What happens from the moment you call to when the job is complete in Didsbury.',
  steps: [
    { name: 'Call 07309 903243', text: 'Tell us your exact location in Didsbury — street name, car park, postcode, or nearby landmark — along with your vehicle make and model.' },
    { name: 'Immediate mobile dispatch', text: 'We dispatch our fully equipped mobile locksmith van directly to your location. No relay through a call centre.' },
    { name: 'We arrive in ~30 minutes', text: 'Our vehicle is stocked with non-destructive entry tools, key-cutting machinery, and transponder programming equipment — everything needed for a single on-site visit.' },
    { name: 'Job quoted before it starts', text: 'We assess the vehicle and the specific job, then provide a fixed price. No work begins until you agree.' },
    { name: 'Resolved at the roadside', text: 'Car or van lockout, lost keys, key programming, fob repair, or ignition repair — completed at your location, not a workshop.' },
  ],
})

const faqs = [
  {
    question: 'What does a mobile auto locksmith in Didsbury actually bring with them?',
    answer:
      'Our mobile van is a fully equipped workshop on wheels. It carries professional non-destructive vehicle entry tools for cars and vans, a key-cutting machine capable of producing blade profiles for all common makes, transponder chip programming equipment, remote fob diagnostic and reprogramming hardware, and ignition barrel repair tools and replacement parts. Everything needed to resolve the most common automotive locksmith situations in a single visit.',
  },
  {
    question: 'Can a mobile auto locksmith in Didsbury programme a smart key without a workshop?',
    answer:
      'Yes. Smart key and proximity card programming is handled at the roadside using dedicated OBD-connected programming hardware. We carry manufacturer-compatible programming tools for BMW, Mercedes, Audi, Ford, Toyota, Renault, and other major makes that use keyless entry and push-button start systems.',
  },
  {
    question: 'Where in Didsbury can you come to?',
    answer:
      'We cover all of Didsbury — Didsbury Village, West Didsbury, East Didsbury, Parrs Wood, Lapwing Lane, School Lane, Palatine Road, Wilmslow Road, and all surrounding residential and commercial streets. We also cover neighbouring areas including Withington, Chorlton, Fallowfield, and Burnage. If you are unsure whether we cover your exact location, call 07309 903243 and we will confirm immediately.',
  },
  {
    question: 'Do I need to bring my car to you, or do you come to me?',
    answer:
      'We come to you. That is the entire point of a mobile service — you stay with your vehicle wherever it is and we come to your exact location. There is no need to arrange a tow, find a workshop, or travel anywhere.',
  },
  {
    question: 'How is a mobile auto locksmith different from a regular locksmith?',
    answer:
      'A mobile auto locksmith specialises exclusively in vehicle security systems — modern car and van lock mechanisms, transponder key cutting and programming, ECU-level immobiliser access, and key fob diagnostics. This is very different from a general locksmith who handles domestic door locks. We carry specialist automotive equipment that general locksmiths typically do not have.',
  },
]

const faqSchema = generateFAQSchema(faqs)

export default function MobileAutoLocksmithDidsburyPage() {
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
                <li className="text-slate-300">Mobile Auto Locksmith Didsbury</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Mobile Auto Locksmith Didsbury — We Come to Your Location
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Chorlton Locksmiths is a fully mobile auto locksmith serving all of Didsbury. We come directly to your vehicle — no tow truck, no workshop visit, no dealer appointment. Our mobile van carries everything needed to resolve car and van lockouts, lost keys, and key programming at the roadside.
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
              { icon: <MapPin size={20} className="text-slate-950" />, title: 'We Come to You', body: 'We attend your exact location in Didsbury — home, car park, street, or job site.' },
              { icon: <Car size={20} className="text-slate-950" />, title: 'Full Mobile Workshop', body: 'Key-cutting machine, transponder programmer, vehicle entry tools — all in one van.' },
              { icon: <Clock size={20} className="text-slate-950" />, title: '~30 Min Response', body: 'Dispatched from neighbouring Chorlton — consistently reaching Didsbury in 30 minutes.' },
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

      {/* What the van carries */}
      <Section backgroundVariant="accent">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-950 mb-4">What Our Mobile Locksmith Van Carries to Didsbury</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              A mobile auto locksmith is only as good as the equipment in their van. Our fully stocked vehicle means that the most common automotive locksmith jobs in Didsbury can be resolved in a single visit — no return appointment, no parts ordered and waiting.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Non-destructive entry tools', body: 'Professional vehicle opening equipment for all common car and van door systems — no damage, every time.' },
                { title: 'Key-cutting machine', body: 'On-board cutting machinery produces accurately profiled blades for standard, laser-cut, and Tibbe key types.' },
                { title: 'Transponder programmer', body: 'OBD-connected diagnostic hardware for pairing new transponder chips and smart keys to vehicle ECUs.' },
                { title: 'All-keys-lost equipment', body: 'Specialist ECU initialisation tools for writing a new key to the vehicle without a working donor key present.' },
                { title: 'Key fob diagnostic tools', body: 'Signal testing equipment to identify battery, circuit, and synchronisation faults in remote key fobs.' },
                { title: 'Ignition repair tools', body: 'Barrel extraction, tumbler repair kits, and common replacement ignition barrel parts for on-site repair.' },
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
              <SectionHeading title="Mobile Auto Locksmith Process in Didsbury" />
              <ol className="space-y-5">
                {[
                  { step: '1', title: 'Call 07309 903243', desc: 'Your exact location in Didsbury and your vehicle details. We confirm ETA immediately.' },
                  { step: '2', title: 'Immediate Mobile Dispatch', desc: 'No call centre relay — our nearest locksmith heads directly to you.' },
                  { step: '3', title: 'We Arrive in ~30 Minutes', desc: 'Fully equipped mobile van arrives at your exact Didsbury location.' },
                  { step: '4', title: 'Fixed Price Before We Start', desc: 'We assess the job and provide a firm all-inclusive quote before any work begins.' },
                  { step: '5', title: 'Resolved at Your Location', desc: 'Lockout, key replacement, programming, or repair — all completed at the roadside in Didsbury.' },
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
                  <Link href="/24-hour-auto-locksmith-didsbury" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">24 hour auto locksmith Didsbury</Link>
                  {' '}·{' '}
                  <Link href="/mobile-auto-locksmith-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">mobile auto locksmith Chorlton</Link>
                </p>
              </div>
            </div>
            <div className="bg-slate-950 text-white rounded-xl p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-2">Need a Mobile Auto Locksmith in Didsbury?</h3>
              <p className="text-slate-400 text-sm mb-6">We come to your exact location — ~30 min response</p>
              <div className="mb-6">
                <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">Call Now</p>
                <a href="tel:+447309903243" className="text-3xl font-bold text-amber-400 hover:text-amber-300 transition-colors">07309 903243</a>
              </div>
              <div className="space-y-2 text-sm text-slate-300 mb-8">
                <p>✓ We come to your location</p>
                <p>✓ No tow truck — no workshop</p>
                <p>✓ Full service at the roadside</p>
                <p>✓ Cars &amp; commercial vans</p>
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
          <SectionHeading title="Mobile Auto Locksmith Didsbury — FAQs" centered />
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
                { label: '24 Hour Auto Locksmith Didsbury', href: '/24-hour-auto-locksmith-didsbury' },
                { label: 'Car Lockout Didsbury', href: '/car-lockout-didsbury' },
                { label: 'Lost Car Keys Didsbury', href: '/lost-car-keys-didsbury' },
                { label: 'Mobile Auto Locksmith Chorlton', href: '/mobile-auto-locksmith-chorlton' },
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
            <h2 className="text-2xl font-bold text-slate-950 mb-3">Need a Mobile Auto Locksmith in Didsbury?</h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">Call now — we come to your location in approximately 30 minutes, fully equipped to resolve your vehicle locksmith problem on-site.</p>
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
