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
import { Key, Phone, ShieldCheck, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Spare Car Key Chorlton | Duplicate Key Cut On-Site | 07388 789881',
  description:
    'Get a spare car key cut and programmed in Chorlton. Mobile, on-site service for all major makes. Cheaper than a dealer. Call 07388 789881.',
  keywords: ['spare car key Chorlton', 'duplicate car key Manchester', 'extra car key cutting', 'backup car key service'],
  openGraph: {
    title: 'Spare Car Key Chorlton | Duplicate Key Cut & Programmed On-Site',
    description: 'Spare car key cut and programmed in Chorlton. Mobile, on-site, all makes. Call 07388 789881.',
    url: 'https://chorltonlocksmiths.com/spare-car-key-chorlton',
    type: 'website',
    siteName: 'Chorlton Locksmiths',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spare Car Key Chorlton | Duplicate Cut & Programmed',
    description: 'Get a spare car key cut and programmed in Chorlton. Mobile, on-site. Call 07388 789881.',
  },
  alternates: { canonical: 'https://chorltonlocksmiths.com/spare-car-key-chorlton' },
  robots: { index: true, follow: true },
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Auto Locksmith Chorlton', url: '/auto-locksmith-chorlton' },
  { name: 'Spare Car Key Chorlton', url: '/spare-car-key-chorlton' },
])

const serviceSchema = generateServiceSchema({
  name: 'Spare Car Key Chorlton',
  description: 'On-site spare and duplicate car key cutting and programming service in Chorlton, Manchester. We produce a fully working spare key for your vehicle at your location for all major makes and models.',
  url: '/spare-car-key-chorlton',
  serviceType: 'Spare Key Cutting',
})

const howToSchema = generateHowToSchema({
  name: 'How to Get a Spare Car Key Cut in Chorlton',
  description: 'Our spare car key cutting and programming process.',
  steps: [
    { name: 'Call with vehicle details', text: 'Ring 07388 789881 with make, model, and year. We confirm we can produce a spare.' },
    { name: 'We arrange a visit', text: 'We come to your home, workplace, or any location in Chorlton.' },
    { name: 'Key blade cut', text: 'Spare key blade cut to your vehicle\'s specification.' },
    { name: 'Transponder programmed', text: 'Chip coded to the vehicle ECU so the spare starts the engine.' },
    { name: 'Full test', text: 'Spare key tested before we leave.' },
  ],
})

const faqs = [
  {
    question: 'Why should I get a spare car key cut in Chorlton?',
    answer:
      'Having a spare key is the simplest way to avoid an expensive emergency lockout or lost key situation. If your main key is lost or fails, you have an immediate backup — saving you the cost and stress of emergency replacement.',
  },
  {
    question: 'Can you cut and programme a spare key from my existing key?',
    answer:
      'Yes. We use your existing working key as a reference to cut a duplicate blade, and programme a new transponder chip to your vehicle\'s ECU. The spare works exactly like the original.',
  },
  {
    question: 'How much does a spare car key cost in Chorlton?',
    answer:
      'Pricing depends on the vehicle make, model, and key type. Modern transponder keys cost more than simple blade keys. We always quote upfront and are significantly cheaper than a main dealer. Call 07388 789881 for an estimate.',
  },
  {
    question: 'Can you programme a spare key fob as well?',
    answer:
      'Yes. We programme spare remote fobs and smart keys for most major makes, restoring full remote locking and any keyless entry functionality on the spare.',
  },
  {
    question: 'Do you come to my home in Chorlton to cut a spare key?',
    answer:
      'Yes — we are a fully mobile service. We come to your home, workplace, or any location in Chorlton or Greater Manchester at a time convenient to you. No need to visit a workshop or dealer.',
  },
]

const faqSchema = generateFAQSchema(faqs)
const pageSchema = generateServicePageSchema({
  url: '/spare-car-key-chorlton',
  name: 'Spare Car Key Chorlton | Chorlton Locksmiths',
  description: 'Spare and duplicate car key cutting and programming service in Chorlton — mobile, on-site.',
  dateModified: '2026-03-22',
})

export default function SpareCarKeyChorltonPage() {
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
                <li className="text-slate-300">Spare Car Key Chorlton</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Spare Car Key Chorlton — Duplicate Key Cut &amp; Programmed On-Site
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Don&apos;t wait until you are locked out to think about a spare. Chorlton Locksmiths cuts and programmes spare car keys
              on-site in Chorlton for all major makes and models — cheaper than a main dealer and at a location convenient to you.
              One spare key can save you significant money and stress in the future.
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
              { icon: <Key size={20} className="text-slate-950" />, title: 'Fully Programmed Spare', body: 'Spare key blade cut and transponder coded — starts engine and operates all locks.' },
              { icon: <Clock size={20} className="text-slate-950" />, title: 'We Come to You', body: 'Mobile service — we visit your home or workplace in Chorlton at a time that suits you.' },
              { icon: <ShieldCheck size={20} className="text-slate-950" />, title: 'Cheaper Than a Dealer', body: 'Typically 40–60% less expensive than getting a spare from a main dealer.' },
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
            <h2 className="text-2xl font-bold text-slate-950 mb-4">Why Get a Spare Car Key Now?</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Having a spare key is one of the smartest, lowest-cost preparations a driver can make. Here is why it matters:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'Avoids emergency lockout costs', body: 'A spare means a lost key is a minor inconvenience rather than a costly emergency callout.' },
                { title: 'Protects against worn key failure', body: 'Keys wear over time and can fail without warning. A spare ensures you are never stranded.' },
                { title: 'Convenient for two drivers', body: 'Share a vehicle? Having two keys means both drivers can always access the car independently.' },
                { title: 'Cheaper to do now than later', body: 'Cutting a spare from your existing key is significantly cheaper than replacing a lost key with no spare.' },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-white rounded-xl border border-slate-200">
                  <h3 className="font-bold text-slate-950 mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading title="How We Cut a Spare Car Key in Chorlton" />
              <ol className="space-y-5">
                {[
                  { step: '1', title: 'Call 07388 789881', desc: 'Give us your vehicle make, model, and year. We confirm compatibility and arrange a visit.' },
                  { step: '2', title: 'We Come to You', desc: 'Mobile locksmith visits your home, workplace, or any Chorlton location.' },
                  { step: '3', title: 'Fixed Quote Upfront', desc: 'Transparent price before we start.' },
                  { step: '4', title: 'Spare Key Cut', desc: 'New key blade cut to your vehicle\'s exact specification.' },
                  { step: '5', title: 'Transponder Programmed', desc: 'Chip coded to your ECU — spare starts engine and operates all locks.' },
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
                  <Link href="/car-key-replacement-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">car key replacement</Link>
                  {' '}·{' '}
                  <Link href="/car-key-programming-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">key programming</Link>
                  {' '}·{' '}
                  <Link href="/auto-locksmith-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">auto locksmith Chorlton</Link>
                </p>
              </div>
            </div>
            <div className="bg-slate-950 text-white rounded-xl p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-2">Need a Spare Car Key in Chorlton?</h3>
              <p className="text-slate-400 text-sm mb-6">We come to you — on-site, cheaper than a dealer</p>
              <div className="mb-6">
                <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">Call Now</p>
                <a href="tel:+447388789881" className="text-3xl font-bold text-amber-400 hover:text-amber-300 transition-colors">07388 789881</a>
              </div>
              <div className="space-y-2 text-sm text-slate-300 mb-8">
                <p>✓ Mobile — we come to you</p>
                <p>✓ Spare key cut &amp; programmed on-site</p>
                <p>✓ All makes &amp; models</p>
                <p>✓ Fixed price upfront</p>
                <p>✓ Cheaper than a main dealer</p>
              </div>
              <QuoteForm />
            </div>
          </div>
        </Container>
      </Section>

      <Section backgroundVariant="accent">
        <Container>
          <SectionHeading title="Spare Car Key Chorlton — FAQs" centered />
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
          <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <div className="flex-1">
              <p className="text-xs text-amber-600 font-bold uppercase tracking-widest mb-1">Trusted Partner — Stockport</p>
              <h3 className="text-lg font-bold text-slate-950 mb-1">Spare Car Keys in Stockport?</h3>
              <p className="text-slate-600 text-sm">
                <a href="https://carkeysinstockport.co.uk/" target="_blank" rel="noopener" className="text-amber-600 hover:text-amber-700 font-medium underline underline-offset-2">Car Keys in Stockport</a>
                {' '}— our trusted partner for spare and duplicate keys in the Stockport area.
              </p>
            </div>
            <Link href="/partners" className="flex-shrink-0 inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-800 text-white font-bold px-5 py-3 rounded-xl transition-colors text-sm">
              View Our Partners
            </Link>
          </div>
        </Container>
      </Section>

      <Section backgroundVariant="accent">
        <Container>
          <div className="text-center py-4">
            <h2 className="text-2xl font-bold text-slate-950 mb-3">Get a Spare Car Key in Chorlton Today</h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">We come to you, cut and programme a spare on-site. One call prevents a costly lockout.</p>
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
