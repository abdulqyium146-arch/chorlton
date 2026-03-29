import type { Metadata } from 'next'
import Link from 'next/link'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { QuoteForm } from '@/components/forms/QuoteForm'
import { LocalNAP } from '@/components/local/LocalNAP'
import { NearbyAreas } from '@/components/local/NearbyAreas'
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateHowToSchema,
  generateServicePageSchema,
} from '@/lib/schema'
import { Car, Clock, Key, Wrench, ShieldCheck, Phone, Star } from 'lucide-react'

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Auto Locksmith Chorlton | Car & Van — 30 Min | 07309 903243',
  description:
    'Auto locksmith in Chorlton, Manchester. Locked out of your car? Lost keys? Transponder programming on-site. ~30 min response. Call 07309 903243.',
  keywords: [
    'auto locksmith Chorlton',
    'car locksmith Chorlton',
    'mobile auto locksmith Manchester',
    'emergency auto locksmith Chorlton',
    'car lockout Chorlton',
    'car key replacement Chorlton',
    'transponder key programming Chorlton',
    'van locksmith Chorlton',
  ],
  openGraph: {
    title: 'Auto Locksmith Chorlton | Mobile Car & Van Locksmith',
    description:
      'Locked out in Chorlton? Mobile auto locksmith — ~30 min response. Keys cut & programmed on-site. Non-destructive entry. Call 07309 903243.',
    url: 'https://chorltonlocksmiths.com/auto-locksmith-chorlton',
    type: 'website',
    siteName: 'Chorlton Locksmiths',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Auto Locksmith Chorlton | 30 Min Response | 07309 903243',
    description:
      'Locked out in Chorlton? Mobile auto locksmith — fast, professional, non-destructive entry. Keys cut & programmed on-site. Call now.',
    site: '@chorltonlocks',
  },
  alternates: {
    canonical: 'https://chorltonlocksmiths.com/auto-locksmith-chorlton',
  },
  robots: { index: true, follow: true },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Auto Locksmith Chorlton', url: '/auto-locksmith-chorlton' },
])

const serviceSchema = generateServiceSchema({
  name: 'Auto Locksmith Chorlton — Car & Van Locksmith Service',
  description:
    'Chorlton Locksmiths provides a fully mobile auto locksmith service in Chorlton, Manchester, covering car lockouts, van lockouts, car key replacement, transponder key programming, key fob repair, broken key extraction, and ignition repair — all completed on-site.',
  url: '/auto-locksmith-chorlton',
  serviceType: 'Auto Locksmith',
})

const howToSchema = generateHowToSchema({
  name: 'How to Get an Auto Locksmith in Chorlton',
  description: 'Step-by-step process for using Chorlton Locksmiths auto locksmith service in Chorlton, Manchester.',
  steps: [
    { name: 'Call 07309 903243', text: 'Ring us and give your exact location in Chorlton and your vehicle make and model.' },
    { name: 'We dispatch immediately', text: 'Our mobile auto locksmith heads to your location — typical ETA 30 minutes in Chorlton.' },
    { name: 'Receive a fixed price', text: 'We assess the job and provide an upfront fixed price before any work starts — no hidden fees.' },
    { name: 'Non-destructive vehicle entry', text: 'We open your car or van using professional tools with zero damage to bodywork, seals, or glass.' },
    { name: 'Keys cut or programmed on-site', text: 'If needed, we cut a new key and programme the transponder chip or key fob at the roadside.' },
  ],
})

const faqs = [
  {
    question: 'How quickly can an auto locksmith reach me in Chorlton?',
    answer:
      'Chorlton Locksmiths aims to arrive within 30 minutes anywhere in Chorlton. For nearby areas including Didsbury, Stretford, Sale, and Whalley Range, response times are typically 30–45 minutes. Call 07309 903243 for a confirmed ETA.',
  },
  {
    question: 'Can you unlock my car without damaging it?',
    answer:
      'Yes. We use professional non-destructive entry tools designed specifically for modern vehicles. In almost all cases we open your car or van with zero damage to the bodywork, rubber seals, or lock barrel.',
  },
  {
    question: 'Can you replace a car key in Chorlton if I have no spare?',
    answer:
      'Yes. We carry key-cutting and transponder programming equipment and produce a replacement key on-site for most makes — including BMW, Ford, Audi, VW, Mercedes, and Vauxhall — at a fraction of main dealer prices.',
  },
  {
    question: 'Do you programme transponder keys and immobilisers?',
    answer:
      'Yes. We programme transponder chips, remote key fobs, and proximity smart keys on-site. For all-keys-lost situations, we use specialist equipment to pair a new key to the vehicle ECU and immobiliser without a working key present.',
  },
  {
    question: 'Do you work on vans and commercial vehicles?',
    answer:
      'Yes. We cover cars, vans, and light commercial vehicles including Ford Transit, Mercedes Sprinter, Vauxhall Vivaro, VW Transporter, and all common commercial makes.',
  },
  {
    question: 'How much does an auto locksmith cost in Chorlton?',
    answer:
      'Pricing depends on the vehicle make, model, and the service required. We always provide a fixed quote before starting. We are significantly cheaper than a main dealer in most cases. Call 07309 903243 for a free estimate.',
  },
]

const faqSchema = generateFAQSchema(faqs)
const pageSchema = generateServicePageSchema({
  url: '/auto-locksmith-chorlton',
  name: 'Auto Locksmith Chorlton | Chorlton Locksmiths',
  description: 'Mobile auto locksmith service in Chorlton, Manchester — car lockouts, key replacement, transponder programming, and ignition repair.',
  dateModified: '2026-03-22',
})

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AutoLocksmithChorltonPage() {
  return (
    <>
      {/* ── Structured data ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      {/* ── Hero ── */}
      <section className="bg-slate-950 text-white py-16 md:py-24" aria-label="Hero">
        <Container>
          <div className="grid lg:grid-cols-[1fr_340px] gap-10 items-start">
            <div className="max-w-2xl">
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="text-sm text-slate-400 mb-6">
                <ol className="flex gap-2 flex-wrap" itemScope itemType="https://schema.org/BreadcrumbList">
                  <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                    <Link href="/" itemProp="item" className="hover:text-amber-400 transition-colors">
                      <span itemProp="name">Home</span>
                    </Link>
                    <meta itemProp="position" content="1" />
                  </li>
                  <li aria-hidden="true">/</li>
                  <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                    <span itemProp="name" className="text-slate-300">Auto Locksmith Chorlton</span>
                    <meta itemProp="position" content="2" />
                  </li>
                </ol>
              </nav>

              {/* Rating strip */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex" aria-label="4.6 out of 5 stars">
                  {[1, 2, 3, 4].map((i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                  <Star size={14} className="fill-amber-200 text-amber-400" aria-hidden="true" />
                </div>
                <span className="text-amber-400 text-sm font-semibold">4.6</span>
                <span className="text-slate-400 text-sm">· 127 reviews · Chorlton, Manchester</span>
              </div>

              {/* H1 — primary keyword + location above the fold */}
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight speakable">
                Auto Locksmith Chorlton — Fast, Mobile &amp; Professional
              </h1>

              {/* GEO-optimised entity paragraph — AI-extractable */}
              <p className="text-slate-300 text-lg mb-6 leading-relaxed speakable">
                Chorlton Locksmiths provides a fully mobile auto locksmith service in Chorlton, Manchester,
                covering car lockouts, van lockouts, car key replacement, transponder key programming,
                key fob repair, broken key extraction, and ignition repair — all completed on-site,
                typically within 30 minutes of your call.
              </p>
              <p className="text-slate-400 text-sm mb-8">
                Serving Chorlton, Didsbury, Stretford, Sale, Whalley Range, Fallowfield, and all of Greater Manchester.
                Non-destructive vehicle entry · Fixed price guarantee · Cheaper than a main dealer.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+447309903243"
                  className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xl px-8 py-4 rounded-xl transition-colors"
                  aria-label="Call Chorlton auto locksmith"
                >
                  <Phone size={22} aria-hidden="true" />
                  Call 07309 903243
                </a>
                <Link
                  href="/car-lockout-chorlton"
                  className="inline-flex items-center gap-2 border border-slate-600 hover:border-amber-400 text-slate-300 hover:text-amber-400 font-semibold px-6 py-4 rounded-xl transition-colors text-sm"
                >
                  Locked out? →
                </Link>
              </div>
            </div>

            {/* Hero NAP card */}
            <div className="hidden lg:block">
              <LocalNAP serviceName="Auto Locksmith Chorlton" />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Mobile NAP (below hero on mobile) ── */}
      <section className="lg:hidden bg-white border-b border-slate-100 py-4">
        <Container>
          <LocalNAP compact />
        </Container>
      </section>

      {/* ── 3 USP pillars ── */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock size={20} className="text-slate-950" aria-hidden="true" />,
                title: '~30 Min in Chorlton',
                body: 'We dispatch the moment you call and aim to arrive within 30 minutes anywhere in Chorlton, Didsbury, or Stretford.',
              },
              {
                icon: <Car size={20} className="text-slate-950" aria-hidden="true" />,
                title: 'All Makes & Models',
                body: 'BMW, Ford, Audi, VW, Mercedes, Vauxhall, Renault, Toyota — cars and vans. Transponder keys, fobs, and smart keys covered.',
              },
              {
                icon: <ShieldCheck size={20} className="text-slate-950" aria-hidden="true" />,
                title: 'Non-Destructive Entry',
                body: 'Professional entry tools mean we open your vehicle with zero damage to bodywork, seals, or locks — every time.',
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400">
                  {item.icon}
                </div>
                <div>
                  <h2 className="font-bold text-lg text-slate-950">{item.title}</h2>
                  <p className="text-slate-600 text-sm mt-1">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── What we do — AEO / GEO featured-snippet target ── */}
      <Section backgroundVariant="accent">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-950 mb-4 speakable">
              What Does an Auto Locksmith in Chorlton Do?
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4 speakable">
              An auto locksmith in Chorlton is a mobile vehicle security specialist who opens locked cars and vans
              without a key, cuts and programmes replacement transponder keys and remote fobs on-site, removes broken
              keys from door locks and ignition barrels, and repairs or replaces faulty ignition cylinders — all at
              your location, without the need to tow your vehicle to a main dealer.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Chorlton Locksmiths covers all of Chorlton, including Wilbraham Road, Barlow Moor Road, Beech Road,
              and Manchester Road, as well as nearby areas including Didsbury, Stretford, Sale, Whalley Range,
              Fallowfield, and all of Greater Manchester.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Unlike roadside assistance, a mobile auto locksmith carries specialist equipment — key-cutting machines,
              transponder programming software, ECU coding interfaces, and non-destructive entry tools — enabling
              complete vehicle security work to be carried out at the roadside.
            </p>
          </div>
        </Container>
      </Section>

      {/* ── Services grid ── */}
      <Section>
        <Container>
          <SectionHeading
            title="Auto Locksmith Services in Chorlton"
            subtitle="All services completed on-site — no tow truck, no dealer appointment required"
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Car size={22} className="text-slate-950" />,
                title: 'Car Lockout Service',
                desc: 'Keys locked inside your car? We use non-destructive entry techniques to get you back in without any damage to bodywork, seals, or glass.',
                href: '/car-lockout-chorlton',
                keyword: 'car lockout Chorlton',
              },
              {
                icon: <Key size={22} className="text-slate-950" />,
                title: 'Car Key Replacement',
                desc: 'Lost your only car key? We cut a new blade and programme the transponder chip to your ECU on-site — far cheaper than a main dealer.',
                href: '/car-key-replacement-chorlton',
                keyword: 'car key replacement Chorlton',
              },
              {
                icon: <Key size={22} className="text-slate-950" />,
                title: 'Transponder Key Programming',
                desc: 'Transponder keys, remote fobs, and smart proximity keys programmed and coded at the roadside for all major makes and models.',
                href: '/car-key-programming-chorlton',
                keyword: 'car key programming Chorlton',
              },
              {
                icon: <Wrench size={22} className="text-slate-950" />,
                title: 'Broken Key Extraction',
                desc: 'Snapped key in your door lock or ignition barrel? We extract it cleanly using specialist tools — no barrel damage.',
                href: '/broken-car-key-chorlton',
                keyword: 'broken key extraction Chorlton',
              },
              {
                icon: <Wrench size={22} className="text-slate-950" />,
                title: 'Ignition Repair & Replacement',
                desc: 'Key won\'t turn or stuck in the ignition? We diagnose, repair, or replace ignition barrels on-site without a workshop visit.',
                href: '/ignition-repair-chorlton',
                keyword: 'ignition repair Chorlton',
              },
              {
                icon: <Car size={22} className="text-slate-950" />,
                title: 'Van Locksmith',
                desc: 'Locked out of your Ford Transit, Mercedes Sprinter, or Vauxhall Vivaro? We cover all commercial vans across Chorlton.',
                href: '/van-locksmith-chorlton',
                keyword: 'van locksmith Chorlton',
              },
            ].map((item, idx) => (
              <article
                key={idx}
                className="p-6 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400 mb-4" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg text-slate-950 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">{item.desc}</p>
                <Link
                  href={item.href}
                  className="text-amber-600 hover:text-amber-700 text-sm font-medium underline underline-offset-2"
                  aria-label={`Learn more about ${item.keyword}`}
                >
                  Learn more →
                </Link>
              </article>
            ))}
          </div>

          {/* More services — internal link cluster */}
          <div className="mt-8 p-5 bg-slate-50 rounded-xl border border-slate-100">
            <p className="text-sm text-slate-600 font-medium mb-3">More auto locksmith services in Chorlton:</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {[
                { label: 'Lost car keys Chorlton', href: '/lost-car-keys-chorlton' },
                { label: 'Spare car key cutting', href: '/spare-car-key-chorlton' },
                { label: 'Key fob repair', href: '/car-key-fob-repair-chorlton' },
                { label: 'Key stuck in ignition', href: '/key-stuck-in-ignition-chorlton' },
                { label: 'Van key replacement', href: '/van-key-replacement-chorlton' },
                { label: 'Car key repair', href: '/car-key-repair-chorlton' },
                { label: 'Ignition replacement', href: '/ignition-replacement-chorlton' },
                { label: '24 hour auto locksmith', href: '/24-hour-auto-locksmith-chorlton' },
                { label: 'Mobile auto locksmith', href: '/mobile-auto-locksmith-chorlton' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-amber-600 hover:text-amber-700 underline underline-offset-2">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Real-world scenarios — GEO / AEO ── */}
      <Section backgroundVariant="accent">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-950 mb-6">
              Common Auto Locksmith Situations in Chorlton
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Locked out on Wilbraham Road or Barlow Moor Road',
                  body: 'Left your keys on the passenger seat in Chorlton? We arrive in around 30 minutes and open your vehicle using professional non-destructive tools — no damage, fixed price.',
                },
                {
                  title: 'Lost keys after a night out in Chorlton',
                  body: 'Can\'t find your car keys after a visit to a local bar or restaurant? We provide full on-site key replacement including transponder programming and immobiliser coding.',
                },
                {
                  title: 'Key snapped in the ignition',
                  body: 'A worn key can snap inside the ignition barrel without warning. We extract the broken piece using specialist tools, then produce a replacement key at the roadside.',
                },
                {
                  title: 'Van lockout for a tradesperson',
                  body: 'Locked out of your Transit or Sprinter on a Chorlton job? We prioritise trade callouts — fast response to minimise your downtime.',
                },
                {
                  title: 'Key fob stopped working near Sale or Didsbury',
                  body: 'Remote fob dead or malfunctioning near Chorlton? We come to you and repair or replace the fob on-site — batteries, circuits, or full reprogramming.',
                },
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

      {/* ── Process (HowTo) + CTA sidebar ── */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading title="How Our Chorlton Auto Locksmith Service Works" />
              <p className="text-slate-600 mb-6 text-sm">
                From your call to being back in your vehicle — here is exactly what happens:
              </p>
              <ol className="space-y-5" aria-label="Auto locksmith service steps">
                {[
                  {
                    step: '1',
                    title: 'Call 07309 903243',
                    desc: 'Tell us your location in Chorlton and your vehicle make and model. We confirm availability and ETA immediately.',
                  },
                  {
                    step: '2',
                    title: 'We Dispatch Immediately',
                    desc: 'Our mobile auto locksmith heads straight to you — typical arrival time 30 minutes in Chorlton and nearby Didsbury or Stretford.',
                  },
                  {
                    step: '3',
                    title: 'Fixed Price Before We Start',
                    desc: 'We assess the vehicle and job, then provide a firm, transparent price. No work starts until you agree — no hidden fees.',
                  },
                  {
                    step: '4',
                    title: 'Non-Destructive Vehicle Entry',
                    desc: 'We open your car or van using specialist tools. Zero damage to bodywork, seals, or lock barrel in the vast majority of cases.',
                  },
                  {
                    step: '5',
                    title: 'Keys Cut or Programmed On-Site',
                    desc: 'Need a new or spare key? We cut the blade and programme the transponder chip to your ECU and immobiliser at the roadside.',
                  },
                ].map((item) => (
                  <li key={item.step} className="flex gap-4">
                    <div
                      className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-slate-950 font-bold text-sm"
                      aria-hidden="true"
                    >
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-950">{item.title}</h3>
                      <p className="text-slate-600 text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>

              {/* Nearby areas */}
              <NearbyAreas className="mt-8" primary={['Chorlton', 'Didsbury', 'Stretford']} />
            </div>

            {/* Sticky CTA panel */}
            <div className="bg-slate-950 text-white rounded-xl p-8 lg:sticky lg:top-24">
              <div className="flex items-center gap-2 mb-1">
                {[1, 2, 3, 4].map((i) => (
                  <Star key={i} size={12} className="fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
                <Star size={12} className="fill-amber-200 text-amber-400" aria-hidden="true" />
                <span className="text-amber-400 text-xs font-semibold">4.6</span>
                <span className="text-slate-400 text-xs">· 127 reviews</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 mt-3">Locked Out? Call Now</h3>
              <p className="text-slate-400 text-sm mb-6">
                Mobile auto locksmith — Chorlton, Didsbury, Stretford &amp; all Manchester
              </p>
              <div className="mb-6">
                <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">Auto Locksmith Hotline</p>
                <a
                  href="tel:+447309903243"
                  className="text-3xl font-bold text-amber-400 hover:text-amber-300 transition-colors"
                  aria-label="Call auto locksmith Chorlton"
                >
                  07309 903243
                </a>
              </div>
              <ul className="space-y-2 text-sm text-slate-300 mb-8" aria-label="Service guarantees">
                <li>✓ ~30 min response in Chorlton</li>
                <li>✓ Non-destructive entry — no damage</li>
                <li>✓ Fixed price before we start</li>
                <li>✓ Transponder &amp; immobiliser programming</li>
                <li>✓ All makes — cars &amp; vans</li>
                <li>✓ Cheaper than a main dealer</li>
              </ul>
              <QuoteForm />
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Why choose us — E-E-A-T ── */}
      <Section backgroundVariant="accent">
        <Container>
          <SectionHeading
            title="Why Choose Chorlton Locksmiths for Auto Locksmith Work?"
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Local to Chorlton',
                body: 'Based in Chorlton, M21. We reach you faster than any city-wide call centre-based service.',
              },
              {
                title: 'Fully Mobile & Equipped',
                body: 'Our van carries key-cutting machines, ECU programming interfaces, and non-destructive entry tools for all common vehicles.',
              },
              {
                title: 'Experienced & Insured',
                body: 'Years of experience across all vehicle types and modern security systems. Fully insured for complete peace of mind.',
              },
              {
                title: 'Transparent Pricing',
                body: 'Fixed quotes before we start. No call-out surprises, no hidden fees, no pressure. You decide before we touch your vehicle.',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-5 bg-white rounded-xl border border-slate-100">
                <h3 className="font-bold text-slate-950 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── FAQ — AEO featured snippet targets ── */}
      <Section>
        <Container>
          <SectionHeading
            title="Auto Locksmith Chorlton — Frequently Asked Questions"
            subtitle="Direct answers to the most common questions about our car and van locksmith service in Chorlton"
            centered
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group border border-slate-200 bg-white rounded-xl p-5 hover:border-amber-400 transition-colors"
              >
                <summary
                  className="cursor-pointer font-semibold text-slate-950 group-open:text-amber-600 transition-colors list-none flex justify-between items-center"
                >
                  {faq.question}
                  <span className="ml-4 text-amber-500 group-open:rotate-45 transition-transform inline-block text-xl leading-none" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div>
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed faq-answer">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Partner callout ── */}
      <Section backgroundVariant="accent">
        <Container>
          <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <div className="flex-1">
              <p className="text-xs text-amber-600 font-bold uppercase tracking-widest mb-1">Trusted Partner — Stockport</p>
              <h3 className="text-lg font-bold text-slate-950 mb-1">Need Car Keys in Stockport?</h3>
              <p className="text-slate-600 text-sm">
                For specialist car key cutting and programming in Stockport, we recommend our trusted partner{' '}
                <a
                  href="https://carkeysinstockport.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:text-amber-700 font-medium underline underline-offset-2"
                >
                  Car Keys in Stockport
                </a>{' '}
                — mobile, fast, and significantly cheaper than any main dealer.
              </p>
            </div>
            <Link
              href="/partners"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-800 text-white font-bold px-5 py-3 rounded-xl transition-colors text-sm"
            >
              View Partners
            </Link>
          </div>
        </Container>
      </Section>

      {/* ── Bottom CTA ── */}
      <Section>
        <Container>
          <div className="text-center py-4">
            <h2 className="text-2xl font-bold text-slate-950 mb-3">
              Need an Auto Locksmith in Chorlton Right Now?
            </h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">
              Call us and we will be with you in around 30 minutes. Upfront pricing, non-destructive entry, all makes and models.
              Serving Chorlton, Didsbury, Stretford, Sale, and all of Greater Manchester.
            </p>
            <a
              href="tel:+447309903243"
              className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xl px-8 py-4 rounded-xl transition-colors"
              aria-label="Call auto locksmith Chorlton now"
            >
              <Phone size={24} aria-hidden="true" />
              07309 903243
            </a>
          </div>
        </Container>
      </Section>
    </>
  )
}
