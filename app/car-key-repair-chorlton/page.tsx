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
import { Wrench, Phone, ShieldCheck, Key } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Car Key Repair Chorlton | Damaged Key Fixed On-Site | 07388 789881',
  description:
    'Car key damaged or not working in Chorlton? We repair worn blades, broken shells, and faulty remotes on-site. Call 07388 789881.',
  keywords: ['car key repair Chorlton', 'damaged car key fix Manchester', 'broken remote key repair', 'key shell replacement'],
  openGraph: {
    title: 'Car Key Repair Chorlton | Worn or Broken Key Fixed On-Site',
    description: 'Car key damaged in Chorlton? We repair worn keys, broken shells, and faulty remotes on-site. Call 07388 789881.',
    url: 'https://chorltonlocksmiths.com/car-key-repair-chorlton',
    type: 'website',
    siteName: 'Chorlton Locksmiths',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Key Repair Chorlton | Worn or Damaged Key Fixed',
    description: 'Car key worn or broken in Chorlton? We repair or replace on-site — all makes. Call 07388 789881.',
  },
  alternates: { canonical: 'https://chorltonlocksmiths.com/car-key-repair-chorlton' },
  robots: { index: true, follow: true },
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Auto Locksmith Chorlton', url: '/auto-locksmith-chorlton' },
  { name: 'Car Key Repair Chorlton', url: '/car-key-repair-chorlton' },
])

const serviceSchema = generateServiceSchema({
  name: 'Car Key Repair Chorlton',
  description: 'Mobile car key repair service in Chorlton, Manchester. We repair worn key blades, cracked key shells, damaged remote fobs, and faulty transponder keys on-site for all major vehicle makes.',
  url: '/car-key-repair-chorlton',
})

const howToSchema = generateHowToSchema({
  name: 'How We Repair a Damaged Car Key in Chorlton',
  description: 'Our car key repair process in Chorlton.',
  steps: [
    { name: 'Call with key fault details', text: 'Ring 07388 789881 and describe the damage — blade, shell, or fob.' },
    { name: 'We arrive', text: 'Mobile locksmith reaches Chorlton in ~30 minutes.' },
    { name: 'Fault assessed', text: 'We inspect the key to determine if repair or replacement is best.' },
    { name: 'Repair carried out', text: 'New blade cut, shell replaced, or fob repaired on-site.' },
    { name: 'Tested fully', text: 'Key starts engine, locks, and unlocks before we leave.' },
  ],
})

const faqs = [
  {
    question: 'What types of car key damage can you repair in Chorlton?',
    answer:
      'We repair worn or thin key blades (by cutting a fresh blade), cracked or broken key shells (by transferring electronics to a new shell), malfunctioning remote fobs (button contacts, circuit boards), and transponder keys that have lost programming.',
  },
  {
    question: 'Is it better to repair or replace a damaged car key?',
    answer:
      'We always assess first and recommend the most cost-effective option. If the key blade is worn but the electronics are fine, a new blade is cheaper than a full replacement. If the electronics are damaged, a new key is often more economical.',
  },
  {
    question: 'Can you replace just the key shell without replacing the electronics?',
    answer:
      'Yes. Many modern car keys have a replaceable outer shell. We transfer your existing transponder chip and fob circuit board into a new shell, restoring the key appearance and function at much lower cost than a full replacement.',
  },
  {
    question: 'My key is starting to feel loose or wobbly — should I get it repaired?',
    answer:
      'Yes, sooner rather than later. A worn key that feels loose is at risk of snapping inside the lock or ignition — which is a much more expensive repair. Call us for a new key blade before it fails completely.',
  },
  {
    question: 'How much does car key repair cost in Chorlton?',
    answer:
      'Pricing varies depending on the type of repair. A new blade cut is relatively inexpensive; shell replacement and fob repair cost more. We always quote before starting. Call 07388 789881 for an estimate.',
  },
]

const faqSchema = generateFAQSchema(faqs)
const localBusinessSchema = generateLocalBusinessSchema()
const pageSchema = generateServicePageSchema({
  url: '/car-key-repair-chorlton',
  name: 'Car Key Repair Chorlton | Chorlton Locksmiths',
  description: 'Car key repair service in Chorlton — worn blades, broken shells, and faulty fobs fixed on-site.',
  dateModified: '2026-03-22',
})

export default function CarKeyRepairChorltonPage() {
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
                <li className="text-slate-300">Car Key Repair Chorlton</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Car Key Repair Chorlton — Worn, Broken, or Damaged Keys Fixed
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Is your car key worn, cracked, or not working as it should? Chorlton Locksmiths provides a mobile car key repair service
              across Chorlton and Greater Manchester — repairing or replacing worn blades, broken shells, and faulty remotes on-site
              for all major vehicle makes and models.
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
              { icon: <Wrench size={20} className="text-slate-950" />, title: 'Diagnose First', body: 'We assess the key damage and recommend repair vs. replacement honestly and transparently.' },
              { icon: <Key size={20} className="text-slate-950" />, title: 'Repair Where Possible', body: 'Shell replacement, new blade, or fob repair — often cheaper than full key replacement.' },
              { icon: <ShieldCheck size={20} className="text-slate-950" />, title: 'All Major Makes', body: 'BMW, Ford, Audi, VW, Mercedes, Vauxhall — we repair and replace for all common vehicles.' },
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
            <h2 className="text-2xl font-bold text-slate-950 mb-6">Types of Car Key Damage We Repair in Chorlton</h2>
            <div className="space-y-4">
              {[
                { title: 'Worn or thin key blade', body: 'A blade worn smooth may no longer turn in the ignition reliably. We cut a fresh blade to the correct profile before it snaps.' },
                { title: 'Cracked or broken key shell', body: 'The outer casing of modern car keys cracks with use. We fit a replacement shell around your existing electronics.' },
                { title: 'Non-responsive fob buttons', body: 'Worn button contacts stop working before the fob itself fails. We repair or replace the internal components.' },
                { title: 'Key lost transponder programming', body: 'Sometimes after a fault the key no longer starts the car. We reprogram the transponder chip on-site.' },
                { title: 'Loose or rattling key', body: 'Internal key blade play usually means a worn pivot. We repair or supply a replacement key shell with a new blade.' },
              ].map((s, i) => (
                <div key={i} className="p-5 bg-white rounded-xl border border-slate-200">
                  <h3 className="font-bold text-slate-950 mb-1">{s.title}</h3>
                  <p className="text-slate-600 text-sm">{s.body}</p>
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
              <SectionHeading title="How Car Key Repair Works in Chorlton" />
              <ol className="space-y-5">
                {[
                  { step: '1', title: 'Call 07388 789881', desc: 'Describe the key fault. We advise and confirm our ETA.' },
                  { step: '2', title: 'We Arrive (~30 Minutes)', desc: 'Mobile locksmith dispatched to your location in Chorlton.' },
                  { step: '3', title: 'Damage Assessed', desc: 'We inspect the key and recommend the best repair approach.' },
                  { step: '4', title: 'Fixed Quote', desc: 'Upfront price before any work starts.' },
                  { step: '5', title: 'Repair Completed On-Site', desc: 'New blade, new shell, or fob repair — carried out at your location.' },
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
                  <Link href="/broken-car-key-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">broken key extraction</Link>
                  {' '}·{' '}
                  <Link href="/car-key-fob-repair-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">key fob repair</Link>
                  {' '}·{' '}
                  <Link href="/auto-locksmith-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">auto locksmith Chorlton</Link>
                </p>
              </div>
            </div>
            <div className="bg-slate-950 text-white rounded-xl p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-2">Damaged Car Key in Chorlton?</h3>
              <p className="text-slate-400 text-sm mb-6">We repair or replace on-site — mobile, same day</p>
              <div className="mb-6">
                <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">Call Now</p>
                <a href="tel:+447388789881" className="text-3xl font-bold text-amber-400 hover:text-amber-300 transition-colors">07388 789881</a>
              </div>
              <div className="space-y-2 text-sm text-slate-300 mb-8">
                <p>✓ Damage assessed honestly on-site</p>
                <p>✓ Repair where possible</p>
                <p>✓ All makes &amp; models</p>
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
          <SectionHeading title="Car Key Repair Chorlton — FAQs" centered />
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
            <h2 className="text-2xl font-bold text-slate-950 mb-3">Car Key Damaged in Chorlton? Call Us Now</h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">We arrive in ~30 minutes and repair or replace your key on-site before it fails completely.</p>
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
