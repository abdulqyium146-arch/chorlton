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
import { Key, Phone, ShieldCheck, Clock, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Lost Car Keys Chorlton | No Spare? We Replace On-Site | 07309 903243',
  description:
    'Lost car keys in Chorlton with no spare? We replace & programme transponder keys on-site. ECU & immobiliser coded. Call 07309 903243.',
  keywords: ['lost car keys Chorlton', 'lost car key replacement Manchester', 'no spare car key locksmith', 'emergency key replacement Chorlton', 'immobiliser key programming'],
  openGraph: {
    title: 'Lost Car Keys Chorlton | ECU & Immobiliser Programmed On-Site',
    description: 'Lost car keys in Chorlton? No spare? ECU and immobiliser programmed on-site. Call 07309 903243.',
    url: 'https://chorltonlocksmiths.com/lost-car-keys-chorlton',
    type: 'website',
    siteName: 'Chorlton Locksmiths',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lost Car Keys Chorlton | On-Site Replacement',
    description: 'Lost your car keys in Chorlton with no spare? We replace and programme on-site — call 07309 903243.',
  },
  alternates: { canonical: 'https://chorltonlocksmiths.com/lost-car-keys-chorlton' },
  robots: { index: true, follow: true },
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Auto Locksmith Chorlton', url: '/auto-locksmith-chorlton' },
  { name: 'Lost Car Keys Chorlton', url: '/lost-car-keys-chorlton' },
])
const pageSchema = generateServicePageSchema({
  url: '/lost-car-keys-chorlton',
  name: 'Lost Car Keys Chorlton | Chorlton Locksmiths',
  description: 'Lost car key replacement in Chorlton — ECU and immobiliser programmed on-site. No spare required.',
  dateModified: '2026-03-22',
})

const serviceSchema = generateServiceSchema({
  name: 'Lost Car Keys Chorlton',
  description: 'Emergency lost car key replacement service in Chorlton, Manchester. We replace and programme keys on-site for all major makes when you have no spare key.',
  url: '/lost-car-keys-chorlton',
  serviceType: 'Lost Car Key Replacement',
})

const howToSchema = generateHowToSchema({
  name: 'How to Get a Replacement When You Have Lost Your Car Keys in Chorlton',
  description: 'Steps for getting back into and starting your car after losing all your keys.',
  steps: [
    { name: 'Call 07309 903243', text: 'Give us your location and vehicle details. We confirm we can help.' },
    { name: 'We arrive in ~30 minutes', text: 'Our mobile locksmith comes to you in Chorlton.' },
    { name: 'We gain entry', text: 'Non-destructive entry to open the vehicle.' },
    { name: 'New key produced', text: 'Key cut and transponder programmed on-site.' },
    { name: 'Old key deleted', text: 'Lost key removed from the vehicle system so it can never be used.' },
  ],
})

const faqs = [
  {
    question: 'Can you help if I have lost all my car keys with no spare?',
    answer:
      'Yes — this is a specialist situation we handle regularly. We arrive with key-cutting and transponder programming equipment, gain non-destructive entry to your vehicle, and produce a fully working replacement key on-site.',
  },
  {
    question: 'Can you delete the lost key so it cannot be used by someone else?',
    answer:
      'Yes. As part of the replacement process we can delete the lost key from your vehicle\'s ECU so it is permanently deactivated. This is strongly recommended for security if your keys were stolen.',
  },
  {
    question: 'How long does lost car key replacement take?',
    answer:
      'From our arrival, most lost key replacements take 45–90 minutes depending on the vehicle security system. We will give you a realistic estimate when you call.',
  },
  {
    question: 'Which vehicles can you replace lost keys for in Chorlton?',
    answer:
      'We cover most common makes including BMW, Ford, Audi, Mercedes, VW, Vauxhall, Renault, Nissan, Toyota, Peugeot, Citroën, Kia, and Hyundai. Call us to confirm your specific model.',
  },
  {
    question: 'Is it cheaper to use you than a main dealer for lost car keys?',
    answer:
      'Yes, in most cases significantly so. Main dealers often charge several hundred pounds and require the car to be towed to their workshop. We come to you and complete the work on-site for a fraction of that cost.',
  },
]

const faqSchema = generateFAQSchema(faqs)

export default function LostCarKeysChorltonPage() {
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
                <li className="text-slate-300">Lost Car Keys Chorlton</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Lost Car Keys Chorlton — Replacement On-Site, No Dealer Needed
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Losing your car keys — especially with no spare — is one of the most stressful situations a driver faces.
              Chorlton Locksmiths provides a complete lost car key replacement service in Chorlton and across Greater Manchester.
              We come to your exact location, gain access to your vehicle, and programme a brand-new key on-site —
              faster and cheaper than any main dealer.
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
              { icon: <Key size={20} className="text-slate-950" />, title: 'No Spare? No Problem', body: 'We handle lost key situations where there is no spare at all — full on-site replacement.' },
              { icon: <Clock size={20} className="text-slate-950" />, title: 'Same-Day Service', body: 'Call today and we will reach you in around 30 minutes, completing the job the same day.' },
              { icon: <ShieldCheck size={20} className="text-slate-950" />, title: 'Lost Key Deleted', body: 'We delete the lost key from your vehicle system for full security and peace of mind.' },
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
            <h2 className="text-2xl font-bold text-slate-950 mb-4">Lost Your Car Keys in Chorlton? Here Is What We Do</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              When you lose all your car keys, you are locked out of a vehicle that cannot be started. The traditional solution is an expensive tow to a main dealer —
              who may take days to supply a replacement key. Chorlton Locksmiths eliminates that delay entirely.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Our mobile locksmith arrives with professional key-cutting equipment and automotive transponder programming software.
              We gain non-destructive access to your vehicle, produce a new key blade, and programme the transponder chip to communicate
              with your car&apos;s ECU and immobiliser system — all at the roadside.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Where security is a concern (if keys were stolen rather than simply lost), we also delete the lost key from the vehicle system,
              ensuring it can never be used to start or unlock your car.
            </p>
          </div>
        </Container>
      </Section>

      {/* Process + CTA */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading title="How Lost Car Key Replacement Works in Chorlton" />
              <ol className="space-y-5">
                {[
                  { step: '1', title: 'Call 07309 903243', desc: 'Give us your location and vehicle make, model, and year. We confirm we can help.' },
                  { step: '2', title: 'We Arrive (~30 Minutes)', desc: 'Fully equipped mobile locksmith dispatched to Chorlton immediately.' },
                  { step: '3', title: 'Upfront Quote', desc: 'Fixed price given before any work starts. No hidden charges.' },
                  { step: '4', title: 'Non-Destructive Vehicle Entry', desc: 'We open your car without any damage to bodywork or locks.' },
                  { step: '5', title: 'New Key Cut & Programmed', desc: 'Replacement key blade cut and transponder coded to your specific vehicle.' },
                  { step: '6', title: 'Lost Key Deleted', desc: 'Old key permanently removed from the vehicle system if required.' },
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
                  <Link href="/car-key-replacement-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">car key replacement Chorlton</Link>
                  {' '}·{' '}
                  <Link href="/car-key-programming-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">car key programming</Link>
                  {' '}·{' '}
                  <Link href="/spare-car-key-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">spare car key</Link>
                </p>
              </div>
            </div>
            <div className="bg-slate-950 text-white rounded-xl p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-2">Lost Your Car Keys?</h3>
              <p className="text-slate-400 text-sm mb-6">We replace them on-site in Chorlton — no tow, no dealer</p>
              <div className="mb-6">
                <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">Call Now</p>
                <a href="tel:+447309903243" className="text-3xl font-bold text-amber-400 hover:text-amber-300 transition-colors">07309 903243</a>
              </div>
              <div className="space-y-2 text-sm text-slate-300 mb-8">
                <p>✓ No spare key needed</p>
                <p>✓ ~30 min response in Chorlton</p>
                <p>✓ Full key cut &amp; programming on-site</p>
                <p>✓ Old key deleted from system</p>
                <p>✓ Cheaper than a main dealer</p>
              </div>
              <QuoteForm />
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section backgroundVariant="accent">
        <Container>
          <SectionHeading title="Lost Car Keys Chorlton — FAQs" centered />
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
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <div className="flex-1">
              <p className="text-xs text-amber-600 font-bold uppercase tracking-widest mb-1">Trusted Partner — Stockport</p>
              <h3 className="text-lg font-bold text-slate-950 mb-1">Lost Keys in Stockport?</h3>
              <p className="text-slate-600 text-sm">
                For lost car key replacement in Stockport, contact our trusted partner{' '}
                <a href="https://carkeysinstockport.co.uk/" target="_blank" rel="noopener" className="text-amber-600 hover:text-amber-700 font-medium underline underline-offset-2">Car Keys in Stockport</a>.
              </p>
            </div>
            <Link href="/partners" className="flex-shrink-0 inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-800 text-white font-bold px-5 py-3 rounded-xl transition-colors text-sm">
              View Our Partners
            </Link>
          </div>
        </Container>
      </Section>

      {/* Bottom CTA */}
      <Section backgroundVariant="accent">
        <Container>
          <div className="text-center py-4">
            <h2 className="text-2xl font-bold text-slate-950 mb-3">Lost Your Car Keys in Chorlton?</h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">Call us now — we arrive in ~30 minutes and replace your key on-site, cheaper than any dealer.</p>
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
