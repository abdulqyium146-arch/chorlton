import type { Metadata } from 'next'
import Link from 'next/link'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { QuoteForm } from '@/components/forms/QuoteForm'
import {
  generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema,
  generateHowToSchema, generateLocalBusinessSchema, generateServicePageSchema,
} from '@/lib/schema'
import { Key, Phone, Clock, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Van Key Replacement Chorlton | Transit & Sprinter Keys | 07388 789881',
  description:
    'Lost van keys in Chorlton? We replace and programme keys on-site for Ford Transit, Mercedes Sprinter, Vauxhall Vivaro and more. Call 07388 789881.',
  keywords: ['van key replacement Chorlton', 'lost van keys Manchester', 'spare van key cutting', 'van remote key programming'],
  openGraph: {
    title: 'Van Key Replacement Chorlton | Cut & Programmed On-Site',
    description: 'Lost your van keys in Chorlton? We replace and programme them on-site for all commercial vans. Call 07388 789881.',
    url: 'https://chorltonlocksmiths.com/van-key-replacement-chorlton',
    type: 'website',
    siteName: 'Chorlton Locksmiths',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Van Key Replacement Chorlton | Cut & Programmed On-Site',
    description: 'Lost van keys in Chorlton? We replace and programme on-site for all commercial vans. Call 07388 789881.',
  },
  alternates: { canonical: 'https://chorltonlocksmiths.com/van-key-replacement-chorlton' },
  robots: { index: true, follow: true },
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Van Locksmith Chorlton', url: '/van-locksmith-chorlton' },
  { name: 'Van Key Replacement Chorlton', url: '/van-key-replacement-chorlton' },
])

const serviceSchema = generateServiceSchema({
  name: 'Van Key Replacement Chorlton',
  description: 'On-site van key replacement service in Chorlton, Manchester. We cut and programme replacement van keys for Ford Transit, Mercedes Sprinter, Vauxhall Vivaro, VW Transporter, and all major commercial vans.',
  url: '/van-key-replacement-chorlton',
})

const howToSchema = generateHowToSchema({
  name: 'How We Replace Van Keys in Chorlton',
  description: 'Our van key replacement process.',
  steps: [
    { name: 'Call with van details', text: 'Ring 07388 789881 with make, model, and year.' },
    { name: 'We confirm', text: 'We verify we have the correct equipment for your van.' },
    { name: 'We arrive', text: 'Mobile locksmith reaches Chorlton in ~30 minutes.' },
    { name: 'Key cut and programmed', text: 'New key blade cut and transponder programmed to your van on-site.' },
    { name: 'Full test', text: 'Engine start and remote locking verified before we leave.' },
  ],
})

const faqs = [
  {
    question: 'Can you replace lost van keys with no spare?',
    answer:
      'Yes. We handle all-keys-lost situations for commercial vans on-site. We gain access to the van, cut a new key, and programme it to the vehicle — no tow, no dealer required.',
  },
  {
    question: 'Which commercial vans can you replace keys for?',
    answer:
      'We cover Ford Transit and Transit Custom, Mercedes Sprinter, Vauxhall Vivaro, VW Transporter, Peugeot Boxer, Citroën Relay, Renault Trafic, Fiat Ducato, and more. Call to confirm your specific van.',
  },
  {
    question: 'Can you programme a van remote fob in Chorlton?',
    answer:
      'Yes. Remote central locking fobs and transponder keys programmed on-site for all major commercial van makes and models.',
  },
  {
    question: 'How much does van key replacement cost in Chorlton?',
    answer:
      'Pricing depends on the van make, model, and key type. We quote upfront before starting. Commercial van keys are typically more expensive than car keys due to more complex security systems, but we are significantly cheaper than a main dealer.',
  },
  {
    question: 'How long does van key replacement take?',
    answer:
      'Most van key replacements take 45–90 minutes on-site once we arrive. We will give you an accurate estimate when you call.',
  },
]

const faqSchema = generateFAQSchema(faqs)
const localBusinessSchema = generateLocalBusinessSchema()
const pageSchema = generateServicePageSchema({
  url: '/van-key-replacement-chorlton',
  name: 'Van Key Replacement Chorlton | Chorlton Locksmiths',
  description: 'On-site van key replacement in Chorlton — all commercial vans cut and programmed at your location.',
  dateModified: '2026-03-22',
})

export default function VanKeyReplacementChorltonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      <section className="bg-slate-950 text-white py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <nav aria-label="Breadcrumb" className="text-sm text-slate-400 mb-6">
              <ol className="flex gap-2 flex-wrap">
                <li><Link href="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/van-locksmith-chorlton" className="hover:text-amber-400 transition-colors">Van Locksmith Chorlton</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-slate-300">Van Key Replacement</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Van Key Replacement Chorlton — Cut &amp; Programmed On-Site
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Lost your van keys in Chorlton? Chorlton Locksmiths provides a fully mobile van key replacement service —
              we come to your location with key-cutting equipment and programming software to produce a replacement key on-site for your
              Ford Transit, Mercedes Sprinter, Vauxhall Vivaro, or other commercial vehicle.
            </p>
            <a href="tel:+447388789881" className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xl px-8 py-4 rounded-xl transition-colors">
              <Phone size={22} />
              Call 07388 789881
            </a>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Key size={20} className="text-slate-950" />, title: 'Cut & Programmed On-Site', body: 'No tow, no dealer. We bring the equipment to your van and complete the job at your location.' },
              { icon: <Clock size={20} className="text-slate-950" />, title: '~30 Min Response', body: 'Fast dispatch — we know your van being off the road costs you money.' },
              { icon: <ShieldCheck size={20} className="text-slate-950" />, title: 'All Commercial Vans', body: 'Transit, Sprinter, Vivaro, Transporter, Boxer, Relay — we cover all major makes.' },
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
            <h2 className="text-2xl font-bold text-slate-950 mb-4">Van Key Replacement in Chorlton — What&apos;s Included</h2>
            <ul className="space-y-2 text-slate-700">
              {[
                'New key blade cut to your van\'s specification',
                'Transponder chip programmed to the van ECU and immobiliser',
                'Remote locking fob coded and tested',
                'Lost key deleted from van system if required',
                'Full test — starts engine, locks and unlocks doors',
                'Spare key cut if required at the same time',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 p-4 bg-white rounded-xl border border-slate-200">
                  <span className="text-amber-500 font-bold mt-0.5">✓</span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading title="How Van Key Replacement Works in Chorlton" />
              <ol className="space-y-5">
                {[
                  { step: '1', title: 'Call 07388 789881', desc: 'Give us your van make, model, and year. We confirm capability and ETA.' },
                  { step: '2', title: 'We Arrive (~30 Minutes)', desc: 'Mobile locksmith dispatched immediately to Chorlton.' },
                  { step: '3', title: 'Fixed Quote Upfront', desc: 'Transparent price before any work begins — no surprises.' },
                  { step: '4', title: 'Key Cut & Programmed', desc: 'New van key produced and programmed on-site.' },
                  { step: '5', title: 'Van Ready to Drive', desc: 'Full function test before we leave — engine starts, locks work.' },
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
                  <Link href="/van-locksmith-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">van locksmith Chorlton</Link>
                  {' '}·{' '}
                  <Link href="/car-key-programming-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">key programming</Link>
                  {' '}·{' '}
                  <Link href="/auto-locksmith-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">auto locksmith Chorlton</Link>
                </p>
              </div>
            </div>
            <div className="bg-slate-950 text-white rounded-xl p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-2">Lost Van Keys in Chorlton?</h3>
              <p className="text-slate-400 text-sm mb-6">On-site replacement — all commercial vans</p>
              <div className="mb-6">
                <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">Call Now</p>
                <a href="tel:+447388789881" className="text-3xl font-bold text-amber-400 hover:text-amber-300 transition-colors">07388 789881</a>
              </div>
              <div className="space-y-2 text-sm text-slate-300 mb-8">
                <p>✓ ~30 min response in Chorlton</p>
                <p>✓ Keys cut &amp; programmed on-site</p>
                <p>✓ All commercial van makes</p>
                <p>✓ Fixed price before we start</p>
                <p>✓ Cheaper than a main dealer</p>
              </div>
              <QuoteForm />
            </div>
          </div>
        </Container>
      </Section>

      <Section backgroundVariant="accent">
        <Container>
          <SectionHeading title="Van Key Replacement Chorlton — FAQs" centered />
          <div className="max-w-3xl mx-auto space-y-4" itemScope itemType="https://schema.org/FAQPage">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group border border-slate-200 bg-white rounded-xl p-5 hover:border-amber-400 transition-colors" itemProp="mainEntity" itemScope itemType="https://schema.org/Question">
                <summary className="cursor-pointer font-semibold text-slate-950 group-open:text-amber-600 transition-colors list-none flex justify-between items-center" itemProp="name">
                  {faq.question}
                  <span className="ml-4 text-amber-500 group-open:rotate-45 transition-transform inline-block text-xl leading-none">+</span>
                </summary>
                <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed" itemProp="text">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="text-center py-4">
            <h2 className="text-2xl font-bold text-slate-950 mb-3">Need Van Keys Replaced in Chorlton?</h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">Call now — we arrive in ~30 minutes and replace your van key on-site.</p>
            <a href="tel:+447388789881" className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xl px-8 py-4 rounded-xl transition-colors">
              <Phone size={24} />
              07388 789881
            </a>
          </div>
        </Container>
      </Section>
    </>
  )
}
