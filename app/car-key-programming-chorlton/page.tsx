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
import { Key, Phone, ShieldCheck, Wrench } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Car Key Programming Chorlton | Transponder & Fob | 07388 789881',
  description:
    'Car key programming in Chorlton — transponder keys, remote fobs, proximity keys coded on-site. All major makes. Call 07388 789881.',
  keywords: ['car key programming Chorlton', 'key fob programming Manchester', 'transponder key programming', 'remote key coding'],
  openGraph: {
    title: 'Car Key Programming Chorlton | Coded On-Site for All Makes',
    description: 'Transponder key and fob programming in Chorlton. We come to you. All major makes. Call 07388 789881.',
    url: 'https://chorltonlocksmiths.com/car-key-programming-chorlton',
    type: 'website',
    siteName: 'Chorlton Locksmiths',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Key Programming Chorlton | Transponder & Fob On-Site',
    description: 'Transponder key and fob programming in Chorlton. We come to you — all makes. Call 07388 789881.',
  },
  alternates: { canonical: 'https://chorltonlocksmiths.com/car-key-programming-chorlton' },
  robots: { index: true, follow: true },
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Auto Locksmith Chorlton', url: '/auto-locksmith-chorlton' },
  { name: 'Car Key Programming Chorlton', url: '/car-key-programming-chorlton' },
])

const serviceSchema = generateServiceSchema({
  name: 'Car Key Programming Chorlton',
  description: 'On-site car key programming in Chorlton, Manchester. Transponder keys, remote key fobs, and smart proximity keys programmed for all major vehicle makes and models.',
  url: '/car-key-programming-chorlton',
})

const howToSchema = generateHowToSchema({
  name: 'How Car Key Programming Works in Chorlton',
  description: 'Our mobile car key programming process in Chorlton.',
  steps: [
    { name: 'Call with vehicle details', text: 'Ring 07388 789881 with your car make, model, year, and key type.' },
    { name: 'We confirm compatibility', text: 'We verify we have the programming software for your vehicle.' },
    { name: 'We arrive on-site', text: 'Mobile locksmith reaches Chorlton in ~30 minutes.' },
    { name: 'Key programmed to ECU', text: 'Transponder chip or fob coded to your vehicle\'s system on-site.' },
    { name: 'Full test', text: 'Remote locking, immobiliser, and engine start all verified before we leave.' },
  ],
})

const faqs = [
  {
    question: 'What is car key programming and why is it needed?',
    answer:
      'Modern cars use an electronic transponder chip inside the key that must be coded to the vehicle\'s ECU and immobiliser. Without programming, a newly cut key blade will not start the engine. We programme the chip on-site so your new key works as a complete unit.',
  },
  {
    question: 'Can you programme a key fob for my car in Chorlton?',
    answer:
      'Yes. We programme remote locking fobs for all major makes including BMW, Ford, Audi, Mercedes, VW, and Vauxhall. We can also handle proximity (smart key) programming for compatible models.',
  },
  {
    question: 'Can you programme a key if I have lost all keys?',
    answer:
      'Yes. When no working key is present we use specialist equipment to bypass the standard pairing process and programme a brand-new key from scratch. This is one of the most common lost key scenarios we handle.',
  },
  {
    question: 'How much does car key programming cost in Chorlton?',
    answer:
      'Price depends on the vehicle make, model, and key type. We always provide a fixed quote before starting. Call 07388 789881 for an estimate — we are significantly cheaper than a main dealer.',
  },
  {
    question: 'How long does key programming take?',
    answer:
      'Most key programming jobs take 20–60 minutes on-site depending on the vehicle security system. Complex systems (such as some BMW or Mercedes models) may take a little longer.',
  },
]

const faqSchema = generateFAQSchema(faqs)
const localBusinessSchema = generateLocalBusinessSchema()
const pageSchema = generateServicePageSchema({
  url: '/car-key-programming-chorlton',
  name: 'Car Key Programming Chorlton | Chorlton Locksmiths',
  description: 'On-site transponder key and key fob programming in Chorlton for all major makes.',
  dateModified: '2026-03-22',
})

export default function CarKeyProgrammingChorltonPage() {
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
                <li><Link href="/auto-locksmith-chorlton" className="hover:text-amber-400 transition-colors">Auto Locksmith Chorlton</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-slate-300">Car Key Programming Chorlton</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Car Key Programming Chorlton — Transponder &amp; Fob Coding On-Site
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Need a transponder key, remote fob, or smart key programmed in Chorlton? Chorlton Locksmiths provides a fully mobile
              car key programming service — we come to your location with professional automotive coding equipment and programme your key
              on-site for all major makes and models.
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
              { icon: <Key size={20} className="text-slate-950" />, title: 'Transponder Keys', body: 'Chip programmed to your ECU and immobiliser on-site — no dealer required.' },
              { icon: <ShieldCheck size={20} className="text-slate-950" />, title: 'Remote Key Fobs', body: 'Remote locking and central locking fobs coded and fully tested.' },
              { icon: <Wrench size={20} className="text-slate-950" />, title: 'All Major Makes', body: 'BMW, Ford, Audi, Mercedes, VW, Vauxhall, Toyota, Renault and more.' },
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
            <h2 className="text-2xl font-bold text-slate-950 mb-4">Car Key Programming in Chorlton — What It Covers</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              All modern vehicles use an electronic immobiliser that only allows the engine to start when it recognises the unique code
              stored in the key&apos;s transponder chip. If you have a newly cut key, a replacement key, or a spare that has never been paired,
              programming is essential.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              {[
                { title: 'Transponder Key Programming', body: 'Chip-in-key systems programmed for all common security protocols.' },
                { title: 'Remote Fob Programming', body: 'Central locking remotes coded so buttons operate locks correctly.' },
                { title: 'Proximity / Smart Key Coding', body: 'Keyless entry and push-button start systems for compatible vehicles.' },
                { title: 'All-Keys-Lost Programming', body: 'Specialist process for programming a key when no working key exists.' },
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
              <SectionHeading title="How Car Key Programming Works in Chorlton" />
              <ol className="space-y-5">
                {[
                  { step: '1', title: 'Call With Vehicle Details', desc: 'Ring 07388 789881 with make, model, year, and key type. We confirm compatibility.' },
                  { step: '2', title: 'We Arrive (~30 Minutes)', desc: 'Mobile locksmith dispatched to your location in Chorlton.' },
                  { step: '3', title: 'Fixed Quote Upfront', desc: 'Transparent price confirmed before we start.' },
                  { step: '4', title: 'Programming On-Site', desc: 'Transponder or fob coded to your vehicle system using professional equipment.' },
                  { step: '5', title: 'Full Verification', desc: 'Remote locking, immobiliser pass, and engine start all tested.' },
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
                  <Link href="/car-key-fob-repair-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">key fob repair</Link>
                  {' '}·{' '}
                  <Link href="/spare-car-key-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">spare car key</Link>
                </p>
              </div>
            </div>
            <div className="bg-slate-950 text-white rounded-xl p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-2">Key Programming in Chorlton</h3>
              <p className="text-slate-400 text-sm mb-6">All makes programmed on-site — we come to you</p>
              <div className="mb-6">
                <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">Call Now</p>
                <a href="tel:+447388789881" className="text-3xl font-bold text-amber-400 hover:text-amber-300 transition-colors">07388 789881</a>
              </div>
              <div className="space-y-2 text-sm text-slate-300 mb-8">
                <p>✓ Transponder &amp; fob programming</p>
                <p>✓ Smart / proximity key coding</p>
                <p>✓ All-keys-lost programming</p>
                <p>✓ Fixed price before we start</p>
                <p>✓ ~30 min response in Chorlton</p>
              </div>
              <QuoteForm />
            </div>
          </div>
        </Container>
      </Section>

      <Section backgroundVariant="accent">
        <Container>
          <SectionHeading title="Car Key Programming Chorlton — FAQs" centered />
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
          <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <div className="flex-1">
              <p className="text-xs text-amber-600 font-bold uppercase tracking-widest mb-1">Trusted Partner — Stockport</p>
              <h3 className="text-lg font-bold text-slate-950 mb-1">Key Programming in Stockport?</h3>
              <p className="text-slate-600 text-sm">
                Our trusted partner{' '}
                <a href="https://carkeysinstockport.co.uk/" target="_blank" rel="noopener" className="text-amber-600 hover:text-amber-700 font-medium underline underline-offset-2">Car Keys in Stockport</a>
                {' '}handles key programming across the Stockport area.
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
            <h2 className="text-2xl font-bold text-slate-950 mb-3">Need Car Key Programming in Chorlton?</h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">We arrive in ~30 minutes and programme your key on-site. Call for a free estimate.</p>
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
