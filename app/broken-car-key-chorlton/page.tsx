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
import { Wrench, Phone, ShieldCheck, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Broken Car Key Chorlton | Key Extraction Service | 07388 789881',
  description:
    'Snapped car key in Chorlton? We extract broken keys from locks and ignitions on-site without damage. Fast response. Call 07388 789881.',
  keywords: ['broken car key Chorlton', 'snapped key in ignition', 'broken key removal Manchester', 'car key extraction service'],
  openGraph: {
    title: 'Broken Car Key Chorlton | Key Extracted Without Damage',
    description: 'Key snapped in your car lock or ignition in Chorlton? We extract it safely on-site. Call 07388 789881.',
    url: 'https://chorltonlocksmiths.com/broken-car-key-chorlton',
    type: 'website',
    siteName: 'Chorlton Locksmiths',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Broken Car Key Chorlton | Key Extracted Without Damage',
    description: 'Key snapped in your lock or ignition in Chorlton? We extract it safely. Call 07388 789881.',
  },
  alternates: { canonical: 'https://chorltonlocksmiths.com/broken-car-key-chorlton' },
  robots: { index: true, follow: true },
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Auto Locksmith Chorlton', url: '/auto-locksmith-chorlton' },
  { name: 'Broken Car Key Chorlton', url: '/broken-car-key-chorlton' },
])

const serviceSchema = generateServiceSchema({
  name: 'Broken Car Key Extraction Chorlton',
  description: 'Professional broken car key extraction service in Chorlton, Manchester. We remove snapped keys from car door locks and ignition barrels without causing damage, then provide a replacement key if required.',
  url: '/broken-car-key-chorlton',
})

const howToSchema = generateHowToSchema({
  name: 'How We Extract a Broken Car Key in Chorlton',
  description: 'Our broken key extraction process.',
  steps: [
    { name: 'Call us immediately', text: 'Ring 07388 789881 — do not try to pull or push the broken piece further.' },
    { name: 'We arrive', text: 'Mobile locksmith reaches Chorlton in ~30 minutes with specialist extraction tools.' },
    { name: 'Broken piece located', text: 'We assess the position and depth of the broken key in the lock or ignition.' },
    { name: 'Clean extraction', text: 'Broken key removed using precision extraction tools — no barrel damage.' },
    { name: 'Replacement key supplied', text: 'New key cut and programmed on-site so you can drive away.' },
  ],
})

const faqs = [
  {
    question: 'Can you extract a broken key without damaging my lock?',
    answer:
      'Yes. We use specialist broken key extraction tools that grip and remove the broken piece cleanly from the lock barrel or ignition cylinder. In the vast majority of cases the barrel is completely undamaged and fully functional after extraction.',
  },
  {
    question: 'Why do car keys break in locks or ignitions?',
    answer:
      'Keys wear gradually over years of use. The key blade becomes thinner at the weakest point, and eventually snaps — often when extra force is applied to a stiff lock. Using a spare key and replacing worn keys early prevents this.',
  },
  {
    question: 'Can you make a replacement key after extracting the broken one?',
    answer:
      'Yes. We carry key-cutting and transponder programming equipment. After extracting the broken piece we produce a new key on-site so you can start your vehicle and drive away.',
  },
  {
    question: 'What if part of the broken key is too deep to extract?',
    answer:
      'In rare cases where the broken fragment is extremely deep or the barrel is damaged, the lock barrel may need to be removed and replaced. We will assess and advise before starting any work.',
  },
  {
    question: 'How much does broken key extraction cost in Chorlton?',
    answer:
      'Pricing depends on the vehicle and the location of the break (door lock or ignition). We always provide a fixed quote before starting. Call 07388 789881 for an estimate.',
  },
]

const faqSchema = generateFAQSchema(faqs)
const localBusinessSchema = generateLocalBusinessSchema()
const pageSchema = generateServicePageSchema({
  url: '/broken-car-key-chorlton',
  name: 'Broken Car Key Chorlton | Chorlton Locksmiths',
  description: 'Broken key extraction service in Chorlton — snapped keys removed from locks and ignitions without damage.',
  dateModified: '2026-03-22',
})

export default function BrokenCarKeyChorltonPage() {
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
                <li className="text-slate-300">Broken Car Key Chorlton</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Broken Car Key Chorlton — Key Extracted Safely On-Site
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Snapped your key in your car door lock or ignition in Chorlton? Do not try to remove it yourself — pushing or pulling risks
              driving it deeper and causing expensive barrel damage. Chorlton Locksmiths extracts broken keys using specialist tools, cleanly
              and without damage, then produces a replacement key on-site so you can drive away.
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
              { icon: <Wrench size={20} className="text-slate-950" />, title: 'Specialist Extraction Tools', body: 'Professional broken key extraction equipment — not improvised tools that cause damage.' },
              { icon: <ShieldCheck size={20} className="text-slate-950" />, title: 'No Barrel Damage', body: 'Clean, controlled extraction preserves your lock barrel in the vast majority of cases.' },
              { icon: <Clock size={20} className="text-slate-950" />, title: 'Replacement Key On-Site', body: 'New key cut and programmed at your location immediately after extraction.' },
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
            <h2 className="text-2xl font-bold text-slate-950 mb-6">Common Broken Key Situations in Chorlton</h2>
            <div className="space-y-4">
              {[
                { title: 'Key snapped in car door lock', body: 'The most common scenario — a worn key snaps in the door barrel. We extract the broken piece and produce a new key.' },
                { title: 'Key broken in ignition', body: 'A key snapped in the ignition barrel means the car cannot be started. We extract cleanly and replace the key on-site.' },
                { title: 'Key snapped during a cold morning', body: 'Stiff locks in cold weather can cause a worn key to snap under pressure. We respond quickly in all weather conditions.' },
                { title: 'Only the key head broken off', body: 'If the key head has broken away from the blade and the blade is still accessible, extraction is often straightforward and quick.' },
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
              <SectionHeading title="How Broken Key Extraction Works in Chorlton" />
              <ol className="space-y-5">
                {[
                  { step: '1', title: 'Call 07388 789881', desc: 'Tell us your location and vehicle. Do not try to pull or push the broken piece.' },
                  { step: '2', title: 'We Arrive (~30 Minutes)', desc: 'Mobile locksmith with extraction tools reaches Chorlton fast.' },
                  { step: '3', title: 'Fixed Quote Given', desc: 'Upfront price before we start — no surprises.' },
                  { step: '4', title: 'Clean Extraction', desc: 'Broken key removed using precision tools without barrel damage.' },
                  { step: '5', title: 'New Key On-Site', desc: 'Replacement key cut and programmed immediately after extraction.' },
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
                  <Link href="/key-stuck-in-ignition-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">key stuck in ignition</Link>
                  {' '}·{' '}
                  <Link href="/car-key-repair-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">car key repair</Link>
                  {' '}·{' '}
                  <Link href="/auto-locksmith-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">auto locksmith Chorlton</Link>
                </p>
              </div>
            </div>
            <div className="bg-slate-950 text-white rounded-xl p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-2">Key Snapped in Chorlton?</h3>
              <p className="text-slate-400 text-sm mb-6">Don&apos;t try to remove it yourself — call us for safe extraction</p>
              <div className="mb-6">
                <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">Call Now</p>
                <a href="tel:+447388789881" className="text-3xl font-bold text-amber-400 hover:text-amber-300 transition-colors">07388 789881</a>
              </div>
              <div className="space-y-2 text-sm text-slate-300 mb-8">
                <p>✓ ~30 min response in Chorlton</p>
                <p>✓ Clean extraction — no barrel damage</p>
                <p>✓ Replacement key cut on-site</p>
                <p>✓ Fixed price before we start</p>
                <p>✓ All makes &amp; models</p>
              </div>
              <QuoteForm />
            </div>
          </div>
        </Container>
      </Section>

      <Section backgroundVariant="accent">
        <Container>
          <SectionHeading title="Broken Car Key Chorlton — FAQs" centered />
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
            <h2 className="text-2xl font-bold text-slate-950 mb-3">Key Snapped in Chorlton? Call Now</h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">We arrive in ~30 minutes, extract the broken key, and produce a replacement on-site.</p>
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
