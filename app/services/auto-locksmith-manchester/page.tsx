import type { Metadata } from 'next'
import { HeroSection } from '@/components/hero/HeroSection'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { QuoteForm } from '@/components/forms/QuoteForm'
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateHowToSchema,
} from '@/lib/schema'
import { Car, MapPin, Clock, Key, Wrench, ShieldCheck } from 'lucide-react'

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Auto Locksmith Manchester | Car & Van Lockout — 30 Min Response | Chorlton Locksmiths',
  description:
    'Locked out of your car or van in Manchester? Our mobile auto locksmith covers all of Greater Manchester. Non-destructive entry, key cutting & programming, broken key extraction. Call 07309 903243 now.',
  keywords: [
    'auto locksmith Manchester',
    'car lockout Manchester',
    'van locksmith Manchester',
    'mobile auto locksmith',
    'car keys Manchester',
    'locked out of car Manchester',
    'auto locksmith near me',
    'vehicle locksmith Manchester',
    'car key replacement Manchester',
    'van lockout Manchester',
  ],
  openGraph: {
    title: 'Auto Locksmith Manchester | Car & Van Lockout Service',
    description:
      'Locked out of your car or van? Mobile auto locksmith covering all of Greater Manchester. Fast 30–60 min response. Call 07309 903243.',
    url: 'https://chorltonlocksmiths.com/services/auto-locksmith-manchester',
    type: 'website',
  },
  alternates: {
    canonical: 'https://chorltonlocksmiths.com/services/auto-locksmith-manchester',
  },
}

// ─── Structured Data ─────────────────────────────────────────────────────────

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Auto Locksmith Manchester', url: '/services/auto-locksmith-manchester' },
])

const serviceSchema = generateServiceSchema({
  name: 'Auto Locksmith Manchester — Car & Van Lockout Service',
  description:
    'Mobile auto locksmith covering all of Greater Manchester. Services include car lockout, van lockout, spare key cutting and programming, broken key extraction, lost car keys, and ignition repair.',
  url: '/services/auto-locksmith-manchester',
})

const howToSchema = generateHowToSchema({
  name: 'How to Get Back Into Your Locked Car in Manchester',
  description:
    'Step-by-step guide to using Chorlton Locksmiths auto locksmith service when locked out of your car or van in Manchester.',
  steps: [
    {
      name: 'Call our auto locksmith hotline',
      text: 'Ring 07309 903243 and tell us your location and the make/model of your vehicle. We cover all of Greater Manchester.',
    },
    {
      name: 'Receive an ETA',
      text: 'We dispatch immediately and give you an accurate arrival time — typically 30 to 60 minutes anywhere in Manchester.',
    },
    {
      name: 'Get a fixed price quote',
      text: 'On arrival our locksmith assesses the job and gives you a firm, upfront price before any work starts — no hidden charges.',
    },
    {
      name: 'Non-destructive vehicle entry',
      text: 'We use professional auto locksmith tools to open your car or van without causing damage to the bodywork, glass, or locks.',
    },
    {
      name: 'Key cut or programmed on site',
      text: 'If you need a replacement or spare key we can cut and programme it on the spot for most makes and models.',
    },
  ],
})

const faqs = [
  {
    question: 'What is an auto locksmith?',
    answer:
      'An auto locksmith is a specialist who opens locked vehicles, cuts and programmes car keys, extracts broken keys from locks and ignitions, and repairs vehicle lock mechanisms — without the need for a main dealer.',
  },
  {
    question: 'Can you unlock my car without damaging it?',
    answer:
      'Yes. We use professional non-destructive entry tools specifically designed for vehicles. In the vast majority of cases we open your car or van with zero damage to the bodywork, rubber seals, or lock barrel.',
  },
  {
    question: 'How long will it take you to arrive?',
    answer:
      'We aim to reach you within 30–60 minutes anywhere across Greater Manchester. Call 07309 903243 and we will give you a precise ETA based on your location.',
  },
  {
    question: 'Do you cover the whole of Greater Manchester?',
    answer:
      'Yes. We are a fully mobile auto locksmith and cover all of Greater Manchester including the city centre, Salford, Trafford, Stockport, Wythenshawe, Altrincham, Sale, Didsbury, Chorlton, and all surrounding areas.',
  },
  {
    question: 'Can you cut and programme a new car key on-site?',
    answer:
      'Yes. We carry key-cutting and transponder programming equipment and can produce replacement or spare keys for most car and van makes and models at the roadside, typically far cheaper than a main dealer.',
  },
  {
    question: 'My key broke inside the ignition — can you help?',
    answer:
      'Yes. We carry specialist broken-key extraction tools to remove snapped keys from door locks and ignition barrels cleanly, without damaging the barrel.',
  },
  {
    question: 'Do you work on vans and commercial vehicles?',
    answer:
      'Yes. We service cars, vans, and light commercial vehicles including Ford Transit, Mercedes Sprinter, Vauxhall Vivaro, VW Transporter, and more.',
  },
  {
    question: 'How much does an auto locksmith cost in Manchester?',
    answer:
      'Pricing depends on the vehicle make, model, and the specific service required. We always provide a fixed quote before starting any work. Call 07309 903243 for a quick price estimate.',
  },
]

const faqSchema = generateFAQSchema(faqs)

// ─── Manchester coverage areas ────────────────────────────────────────────────
const COVERAGE_AREAS = [
  'Manchester City Centre', 'Chorlton', 'Didsbury', 'Fallowfield', 'Withington',
  'Rusholme', 'Hulme', 'Moss Side', 'Whalley Range', 'Old Trafford',
  'Stretford', 'Sale', 'Altrincham', 'Urmston', 'Trafford Park',
  'Salford', 'Eccles', 'Worsley', 'Levenshulme', 'Gorton',
  'Longsight', 'Ancoats', 'Deansgate', 'Castlefield', 'Wythenshawe',
  'Northenden', 'Stockport', 'Cheadle',
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AutoLocksmithPage() {
  return (
    <>
      {/* Structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* H1 + intro — AEO: direct answer above the fold */}
      <HeroSection
        title="Auto Locksmith Manchester — Cars & Vans"
        subtitle="Locked out of your car or van anywhere in Greater Manchester? We provide fast, professional, non-destructive vehicle entry within 30–60 minutes. Key cutting, programming, and broken key extraction also available on-site."
      />

      {/* Breadcrumb visual */}
      <Section>
        <Container>
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-8">
            <ol className="flex gap-2" itemScope itemType="https://schema.org/BreadcrumbList">
              {[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '/services' },
                { name: 'Auto Locksmith Manchester', href: '/services/auto-locksmith-manchester' },
              ].map((crumb, i, arr) => (
                <li key={i} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="flex items-center gap-2">
                  {i < arr.length - 1 ? (
                    <>
                      <a href={crumb.href} itemProp="item" className="hover:text-amber-500 transition-colors">
                        <span itemProp="name">{crumb.name}</span>
                      </a>
                      <span aria-hidden="true">/</span>
                    </>
                  ) : (
                    <span itemProp="name" className="text-slate-950 font-medium">{crumb.name}</span>
                  )}
                  <meta itemProp="position" content={String(i + 1)} />
                </li>
              ))}
            </ol>
          </nav>

          {/* 3 USPs */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400">
                  <Car size={20} className="text-slate-950" aria-hidden="true" />
                </div>
              </div>
              <div>
                <h2 className="font-bold text-lg text-slate-950">All Makes &amp; Models</h2>
                <p className="text-slate-600 text-sm">Cars, vans, and light commercial vehicles — we carry tools for them all</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400">
                  <MapPin size={20} className="text-slate-950" aria-hidden="true" />
                </div>
              </div>
              <div>
                <h2 className="font-bold text-lg text-slate-950">All Greater Manchester</h2>
                <p className="text-slate-600 text-sm">Fully mobile — we come to your exact location across 28+ Manchester areas</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400">
                  <Clock size={20} className="text-slate-950" aria-hidden="true" />
                </div>
              </div>
              <div>
                <h2 className="font-bold text-lg text-slate-950">30–60 Min Response</h2>
                <p className="text-slate-600 text-sm">Fast ETA so you are not stranded by the roadside any longer than necessary</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* What is an auto locksmith — AEO featured snippet target */}
      <Section backgroundVariant="accent">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-950 mb-4">What Does an Auto Locksmith Do?</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              An <strong>auto locksmith</strong> is a mobile vehicle security specialist who can open locked cars and vans without a key,
              cut and programme replacement keys on-site, remove broken keys from locks and ignitions, and repair
              or replace faulty vehicle lock barrels — typically at a fraction of the cost of a main dealer.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Unlike roadside assistance, an auto locksmith carries specialist equipment to deal with modern
              transponder keys, remote fobs, and immobiliser systems. Chorlton Locksmiths provides a fully
              mobile auto locksmith service across all of Greater Manchester, 7 days a week.
            </p>
          </div>
        </Container>
      </Section>

      {/* Services grid */}
      <Section>
        <Container>
          <SectionHeading
            title="Auto Locksmith Services in Manchester"
            subtitle="Complete mobile car and van locksmith solutions — we come to you"
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Car size={22} className="text-slate-950" />,
                title: 'Car Lockout Service',
                description:
                  'Locked your keys inside your car? We use non-destructive entry techniques to get you back in quickly — no damage to bodywork, seals, or glass.',
                keyword: 'car lockout Manchester',
              },
              {
                icon: <Car size={22} className="text-slate-950" />,
                title: 'Van Lockout Service',
                description:
                  'Tradespeople and delivery drivers — we know time is money. We get your van open fast so you can get back to work across Manchester.',
                keyword: 'van lockout Manchester',
              },
              {
                icon: <Key size={22} className="text-slate-950" />,
                title: 'Car Key Cutting & Programming',
                description:
                  'Need a spare or replacement key? We cut and programme transponder keys and remote fobs on-site for most makes — far cheaper than a main dealer.',
                keyword: 'car key replacement Manchester',
              },
              {
                icon: <Wrench size={22} className="text-slate-950" />,
                title: 'Broken Key Extraction',
                description:
                  'Key snapped in your car door or ignition? Our specialist extraction tools remove it cleanly without damaging the lock barrel.',
                keyword: 'broken key extraction Manchester',
              },
              {
                icon: <Key size={22} className="text-slate-950" />,
                title: 'Lost Car Keys',
                description:
                  'Lost all your keys with no spare? We provide a complete on-site replacement key solution including full immobiliser programming.',
                keyword: 'lost car keys Manchester',
              },
              {
                icon: <ShieldCheck size={22} className="text-slate-950" />,
                title: 'Ignition Lock Repair',
                description:
                  'Faulty or damaged ignition barrel? We diagnose, repair, or replace ignition locks on-site to get you moving again.',
                keyword: 'ignition repair Manchester',
              },
            ].map((item, idx) => (
              <article
                key={idx}
                className="p-6 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                aria-label={item.title}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg text-slate-950 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process (HowTo — matches schema) + contact form */}
      <Section backgroundVariant="accent">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading title="How Our Auto Locksmith Service Works" />
              <p className="text-slate-600 mb-6 text-sm">
                From your call to being back in your vehicle — here is exactly what happens:
              </p>
              <ol className="space-y-5" aria-label="Auto locksmith process steps">
                {[
                  {
                    step: '1',
                    title: 'Call Us on 07309 903243',
                    desc: 'Tell us your location and vehicle make/model. We cover all of Greater Manchester.',
                  },
                  {
                    step: '2',
                    title: 'We Dispatch Immediately',
                    desc: 'Our mobile auto locksmith heads straight to you — typical ETA 30–60 minutes.',
                  },
                  {
                    step: '3',
                    title: 'Fixed Price Quote Before We Start',
                    desc: 'We assess the job and give you a firm, transparent price — no surprises.',
                  },
                  {
                    step: '4',
                    title: 'Non-Destructive Entry',
                    desc: 'We open your car or van with specialist tools — no damage to your vehicle.',
                  },
                  {
                    step: '5',
                    title: 'Keys Cut or Programmed On-Site',
                    desc: 'Need a new key? We cut and programme it at the roadside for most makes and models.',
                  },
                ].map((item) => (
                  <li key={item.step} className="flex gap-4">
                    <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-slate-950 font-bold text-sm">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-950">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>

              {/* Coverage areas — local SEO signal */}
              <div className="mt-8 p-5 bg-white rounded-xl border border-slate-200">
                <h3 className="font-bold text-slate-950 mb-3 flex items-center gap-2">
                  <MapPin size={16} className="text-amber-500" />
                  Areas We Cover in Greater Manchester
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {COVERAGE_AREAS.join(' · ')}
                </p>
                <p className="text-slate-500 text-xs mt-2">
                  Not on the list? Call us — if you are in Greater Manchester we can almost certainly help.
                </p>
              </div>
            </div>

            {/* CTA panel */}
            <div className="bg-slate-950 text-white rounded-xl p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-2">Locked Out? Call Now</h3>
              <p className="text-slate-400 text-sm mb-6">Mobile auto locksmith — all Manchester — 7 days a week</p>
              <div className="mb-6">
                <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">Auto Locksmith Hotline</p>
                <a
                  href="tel:+447309903243"
                  className="text-3xl font-bold text-amber-400 hover:text-amber-300 transition-colors"
                  aria-label="Call auto locksmith Manchester"
                >
                  07309 903243
                </a>
              </div>
              <div className="space-y-2 text-sm text-slate-300 mb-8">
                <p>✓ Non-destructive entry — no damage to your vehicle</p>
                <p>✓ Fixed price before we start</p>
                <p>✓ All makes &amp; models</p>
                <p>✓ Cars, vans &amp; light commercial vehicles</p>
                <p>✓ 30–60 min response across all Manchester</p>
              </div>
              <QuoteForm />
            </div>
          </div>
        </Container>
      </Section>

      {/* Why choose us — E-E-A-T signals */}
      <Section>
        <Container>
          <SectionHeading
            title="Why Choose Chorlton Locksmiths for Your Auto Locksmith Needs?"
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Fully Mobile',
                body: 'We come to wherever you are — car park, roadside, home, or workplace anywhere in Greater Manchester.',
              },
              {
                title: 'No Damage Guarantee',
                body: 'We use professional non-destructive entry methods. If we cannot open it without damage, we tell you before we start.',
              },
              {
                title: 'Transparent Pricing',
                body: 'Fixed quotes before any work begins. No call-out surprises, no hidden fees.',
              },
              {
                title: 'Experienced & Insured',
                body: 'Fully insured locksmith with years of experience across all vehicle types and security systems.',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                <h3 className="font-bold text-slate-950 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ — AEO: each question is a direct-answer target */}
      <Section backgroundVariant="accent">
        <Container>
          <SectionHeading
            title="Auto Locksmith Manchester — Frequently Asked Questions"
            subtitle="Quick answers to the most common questions about our car and van locksmith service"
            centered
          />
          <div className="max-w-3xl mx-auto space-y-4" itemScope itemType="https://schema.org/FAQPage">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group border border-slate-200 bg-white rounded-xl p-5 hover:border-amber-400 transition-colors"
                itemProp="mainEntity"
                itemScope
                itemType="https://schema.org/Question"
              >
                <summary
                  className="cursor-pointer font-semibold text-slate-950 group-open:text-amber-600 transition-colors list-none flex justify-between items-center"
                  itemProp="name"
                >
                  {faq.question}
                  <span className="ml-4 text-amber-500 group-open:rotate-45 transition-transform inline-block text-xl leading-none">+</span>
                </summary>
                <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed" itemProp="text">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      {/* Partner callout — internal link to /partners */}
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
                  rel="noopener"
                  className="text-amber-600 hover:text-amber-700 font-medium underline underline-offset-2"
                >
                  Car Keys in Stockport
                </a>{' '}
                — mobile, fast, and significantly cheaper than any main dealer.
              </p>
            </div>
            <a
              href="/partners"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-800 text-white font-bold px-5 py-3 rounded-xl transition-colors text-sm"
            >
              View Our Partners
            </a>
          </div>
        </Container>
      </Section>

      {/* Bottom CTA strip */}
      <Section>
        <Container>
          <div className="text-center py-4">
            <h2 className="text-2xl font-bold text-slate-950 mb-3">
              Need an Auto Locksmith in Manchester Right Now?
            </h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">
              Call us and we will be with you in 30–60 minutes anywhere in Greater Manchester.
              Upfront pricing, no damage, all makes and models.
            </p>
            <a
              href="tel:+447309903243"
              className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xl px-8 py-4 rounded-xl transition-colors"
              aria-label="Call auto locksmith now"
            >
              <Car size={24} />
              07309 903243
            </a>
          </div>
        </Container>
      </Section>
    </>
  )
}
