import type { Metadata } from 'next'
import Link from 'next/link'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { QuoteForm } from '@/components/forms/QuoteForm'
import { LocalNAP } from '@/components/local/LocalNAP'
import { NearbyAreas } from '@/components/local/NearbyAreas'
import {
  generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema,
  generateHowToSchema, generateServicePageSchema,
} from '@/lib/schema'
import { Key, Car, Phone, ShieldCheck, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Car Key Replacement Chorlton | On-Site Programming | 07309 903243',
  description:
    'Lost car key in Chorlton? We cut & programme replacement transponder keys on-site for all makes. No dealer needed. Call 07309 903243.',
  keywords: ['car key replacement Chorlton', 'lost car key Chorlton', 'transponder key programming Chorlton', 'spare car key Manchester', 'replacement car keys near me'],
  openGraph: {
    title: 'Car Key Replacement Chorlton | Transponder Keys On-Site',
    description: 'Lost your car key in Chorlton? We replace and programme transponder keys on-site for all major makes. Call 07309 903243.',
    url: 'https://chorltonlocksmiths.com/car-key-replacement-chorlton',
    type: 'website',
    siteName: 'Chorlton Locksmiths',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Key Replacement Chorlton | On-Site Key Programming',
    description: 'Lost your car key in Chorlton with no spare? We come to you and programme a replacement on-site. Call 07309 903243.',
  },
  alternates: { canonical: 'https://chorltonlocksmiths.com/car-key-replacement-chorlton' },
  robots: { index: true, follow: true },
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Auto Locksmith Chorlton', url: '/auto-locksmith-chorlton' },
  { name: 'Car Key Replacement Chorlton', url: '/car-key-replacement-chorlton' },
])
const pageSchema = generateServicePageSchema({
  url: '/car-key-replacement-chorlton',
  name: 'Car Key Replacement Chorlton | Chorlton Locksmiths',
  description: 'On-site car key replacement in Chorlton — transponder key cut and programmed for all major makes. No dealer needed.',
  dateModified: '2026-03-22',
})

const serviceSchema = generateServiceSchema({
  name: 'Car Key Replacement Chorlton',
  description:
    'On-site car key replacement service in Chorlton, Manchester. We cut and programme replacement car keys for all major makes and models including BMW, Ford, Audi, VW, Mercedes, and Vauxhall.',
  url: '/car-key-replacement-chorlton',
  serviceType: 'Car Key Replacement',
})

const howToSchema = generateHowToSchema({
  name: 'How to Get a Replacement Car Key in Chorlton',
  description: 'Step-by-step process for car key replacement with Chorlton Locksmiths.',
  steps: [
    { name: 'Call us', text: 'Ring 07309 903243 with your location, vehicle make, model, and year.' },
    { name: 'We arrive', text: 'Our mobile locksmith reaches you in around 30 minutes in Chorlton.' },
    { name: 'Key cut on-site', text: 'We cut a new key blade to your vehicle\'s specification.' },
    { name: 'Transponder programmed', text: 'The transponder chip is programmed to your car\'s ECU on-site.' },
    { name: 'Test and verify', text: 'We test the key fully — starts the engine, locks, and unlocks — before we leave.' },
  ],
})

const faqs = [
  {
    question: 'Can you replace my car key in Chorlton if I have no spare?',
    answer:
      'Yes. Having no spare key is one of the most common situations we deal with. We can cut a new key and programme it to your vehicle\'s immobiliser system entirely on-site — no tow truck, no dealer visit required.',
  },
  {
    question: 'How much does car key replacement cost in Chorlton?',
    answer:
      'Cost depends on the vehicle make, model, and key type. We always provide a fixed, upfront quote before starting. As a guide, we are significantly cheaper than a main dealer. Call 07309 903243 for an estimate.',
  },
  {
    question: 'Which car brands do you cover for key replacement?',
    answer:
      'We cover all major makes including BMW, Ford, Audi, Mercedes-Benz, Volkswagen, Vauxhall, Toyota, Renault, Nissan, Peugeot, Citroën, Kia, and Hyundai, among others. Call us to confirm your specific model.',
  },
  {
    question: 'How long does car key replacement take?',
    answer:
      'Most car key replacements take between 30 and 90 minutes on-site, depending on the vehicle security system. We will give you a realistic time estimate when you call.',
  },
  {
    question: 'Can you programme a key fob as well as cut the key?',
    answer:
      'Yes. We programme remote locking fobs, transponder keys, and proximity (smart) keys on-site. You will have full keyless functionality restored.',
  },
]

const faqSchema = generateFAQSchema(faqs)

export default function CarKeyReplacementChorltonPage() {
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
                <li><Link href="/auto-locksmith-chorlton" className="hover:text-amber-400 transition-colors">Auto Locksmith Chorlton</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-slate-300">Car Key Replacement</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Car Key Replacement Chorlton — On-Site, Same Day
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Lost your car key in Chorlton with no spare? Chorlton Locksmiths provides a fully mobile car key replacement service —
              we come to your location, cut a new key, and programme it to your vehicle on-site, typically within 30 minutes of your call.
              All major makes and models covered, at a fraction of main dealer prices.
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
              { icon: <Key size={20} className="text-slate-950" />, title: 'Programmed On-Site', body: 'No tow truck. No dealer visit. We bring the key-cutting and programming equipment to you.' },
              { icon: <Car size={20} className="text-slate-950" />, title: 'All Major Makes', body: 'BMW, Ford, Audi, VW, Mercedes, Vauxhall — we carry equipment for virtually every vehicle.' },
              { icon: <ShieldCheck size={20} className="text-slate-950" />, title: 'Cheaper Than a Dealer', body: 'Our on-site service is typically 40–60% less expensive than going to a main dealer.' },
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

      {/* What's included */}
      <Section backgroundVariant="accent">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-950 mb-4">What Car Key Replacement in Chorlton Includes</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Chorlton Locksmiths provides a complete on-site car key replacement service. Our mobile locksmith arrives with key-cutting machinery
              and transponder programming software to produce a fully functioning replacement key at your location in Chorlton.
            </p>
            <ul className="space-y-2 text-slate-700">
              {[
                'New key blade cut to your vehicle\'s specification',
                'Transponder chip programmed to your ECU and immobiliser',
                'Remote locking fob coded and tested',
                'Proximity (smart key) programming for compatible models',
                'Full function test — starts engine, locks and unlocks doors',
                'Old/lost key deleted from vehicle system if required',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">✓</span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Real scenarios */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-950 mb-6">Common Car Key Replacement Situations in Chorlton</h2>
            <div className="space-y-4">
              {[
                { title: 'Lost keys with no spare', body: 'The most urgent situation — you have no way into your car at all. We arrive and produce a complete replacement key with immobiliser programming.' },
                { title: 'Keys stolen', body: 'If your keys were stolen we can replace and recode your vehicle so the stolen key no longer works, giving you security and access back.' },
                { title: 'Worn or damaged key', body: 'An old key that struggles to turn can fail completely without warning. We cut a fresh key before you get stranded.' },
                { title: 'Need a spare key cut', body: 'Sensible preparation — having a spare means a lost key is a minor inconvenience. We cut and programme spares on-site for most models.' },
              ].map((s, i) => (
                <div key={i} className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                  <h3 className="font-bold text-slate-950 mb-1">{s.title}</h3>
                  <p className="text-slate-600 text-sm">{s.body}</p>
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
              <SectionHeading title="How Car Key Replacement Works in Chorlton" />
              <ol className="space-y-5">
                {[
                  { step: '1', title: 'Call 07309 903243', desc: 'Give us your location, vehicle make, model, and year. We confirm we can help and give you an ETA.' },
                  { step: '2', title: 'We Arrive in ~30 Minutes', desc: 'Our mobile locksmith drives to your exact location in Chorlton or nearby.' },
                  { step: '3', title: 'Fixed Price Before We Start', desc: 'We assess the job and quote you a firm price upfront — no surprises.' },
                  { step: '4', title: 'Key Cut and Programmed', desc: 'New key blade cut and transponder programmed to your vehicle on-site.' },
                  { step: '5', title: 'Full Function Test', desc: 'We verify the key starts your engine and operates all locks before we leave.' },
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
                  <Link href="/lost-car-keys-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">lost car keys Chorlton</Link>
                  {' '}·{' '}
                  <Link href="/spare-car-key-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">spare car key cutting</Link>
                  {' '}·{' '}
                  <Link href="/car-key-programming-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">car key programming Chorlton</Link>
                </p>
              </div>
            </div>
            <div className="bg-slate-950 text-white rounded-xl p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-2">Lost Your Car Key?</h3>
              <p className="text-slate-400 text-sm mb-6">We come to you in Chorlton — on-site replacement today</p>
              <div className="mb-6">
                <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">Call Now</p>
                <a href="tel:+447309903243" className="text-3xl font-bold text-amber-400 hover:text-amber-300 transition-colors">07309 903243</a>
              </div>
              <div className="space-y-2 text-sm text-slate-300 mb-8">
                <p>✓ ~30 min response in Chorlton</p>
                <p>✓ Keys cut &amp; programmed on-site</p>
                <p>✓ All major makes &amp; models</p>
                <p>✓ Fixed price — no surprises</p>
                <p>✓ Cheaper than a main dealer</p>
              </div>
              <QuoteForm />
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container>
          <SectionHeading title="Car Key Replacement Chorlton — FAQs" centered />
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

      {/* Partner */}
      <Section backgroundVariant="accent">
        <Container>
          <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <div className="flex-1">
              <p className="text-xs text-amber-600 font-bold uppercase tracking-widest mb-1">Trusted Partner — Stockport</p>
              <h3 className="text-lg font-bold text-slate-950 mb-1">Need Car Keys in Stockport?</h3>
              <p className="text-slate-600 text-sm">
                For car key cutting and programming in Stockport, we recommend{' '}
                <a href="https://carkeysinstockport.co.uk/" target="_blank" rel="noopener" className="text-amber-600 hover:text-amber-700 font-medium underline underline-offset-2">Car Keys in Stockport</a>
                {' '}— mobile and cheaper than any dealer.
              </p>
            </div>
            <Link href="/partners" className="flex-shrink-0 inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-800 text-white font-bold px-5 py-3 rounded-xl transition-colors text-sm">
              View Our Partners
            </Link>
          </div>
        </Container>
      </Section>

      {/* Bottom CTA */}
      <Section>
        <Container>
          <div className="text-center py-4">
            <h2 className="text-2xl font-bold text-slate-950 mb-3">Need a Car Key Replaced in Chorlton Today?</h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">Call us now — we arrive in around 30 minutes and replace your key on-site.</p>
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
