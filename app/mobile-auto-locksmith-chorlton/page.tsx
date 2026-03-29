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
import { Car, Phone, MapPin, ShieldCheck, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mobile Auto Locksmith Chorlton | We Come to You | 07309 903243',
  description:
    'Mobile auto locksmith in Chorlton — we come to your exact location. Car lockouts, key replacement, and programming on-site. Call 07309 903243.',
  keywords: ['mobile auto locksmith Chorlton', 'car locksmith near me mobile', 'roadside locksmith Manchester', 'on site car key service'],
  openGraph: {
    title: 'Mobile Auto Locksmith Chorlton | Roadside Car Key Service',
    description: 'Mobile auto locksmith covering Chorlton and Greater Manchester. We come to you — lockouts, keys, programming. Call 07309 903243.',
    url: 'https://chorltonlocksmiths.com/mobile-auto-locksmith-chorlton',
    type: 'website',
    siteName: 'Chorlton Locksmiths',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile Auto Locksmith Chorlton | We Come to You',
    description: 'Mobile auto locksmith in Chorlton — roadside, car park, or driveway. Call 07309 903243.',
  },
  alternates: { canonical: 'https://chorltonlocksmiths.com/mobile-auto-locksmith-chorlton' },
  robots: { index: true, follow: true },
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Auto Locksmith Chorlton', url: '/auto-locksmith-chorlton' },
  { name: 'Mobile Auto Locksmith Chorlton', url: '/mobile-auto-locksmith-chorlton' },
])

const serviceSchema = generateServiceSchema({
  name: 'Mobile Auto Locksmith Chorlton',
  description: 'Fully mobile auto locksmith service covering Chorlton and all of Greater Manchester. We come to your exact location — roadside, car park, home, or workplace — for car lockouts, key replacement, and programming.',
  url: '/mobile-auto-locksmith-chorlton',
  serviceType: 'Mobile Auto Locksmith',
})

const howToSchema = generateHowToSchema({
  name: 'How Our Mobile Auto Locksmith Service Works in Chorlton',
  description: 'What to expect when you call our mobile auto locksmith in Chorlton.',
  steps: [
    { name: 'Call us', text: 'Ring 07309 903243 and tell us your exact location and vehicle details.' },
    { name: 'We navigate to you', text: 'Our mobile locksmith drives to your precise location anywhere in Chorlton or Greater Manchester.' },
    { name: 'We set up on-site', text: 'All equipment unloaded and work carried out at your location — no workshop visit needed.' },
    { name: 'Service completed', text: 'Lockout resolved, key replaced, or programming completed entirely at the roadside.' },
    { name: 'You drive away', text: 'Vehicle secured, fixed price paid — you are on the road again.' },
  ],
})

const faqs = [
  {
    question: 'What does a mobile auto locksmith actually do?',
    answer:
      'A mobile auto locksmith brings all the equipment needed to open locked vehicles, cut and programme keys, repair ignitions, and extract broken keys — directly to your location. No workshop, no tow truck. Everything is completed at the roadside or wherever your vehicle is parked.',
  },
  {
    question: 'Where in Chorlton can you reach me?',
    answer:
      'Anywhere in Chorlton — Wilbraham Road, Manchester Road, High Lane, Beech Road, Barlow Moor Road, car parks, residential streets, or anywhere else. We navigate to your exact location using what3words or a standard address.',
  },
  {
    question: 'What if my car is in a multi-storey car park?',
    answer:
      'We regularly work in car parks, including multi-storey facilities. Just tell us the car park name and floor level when you call — we will find you.',
  },
  {
    question: 'Can a mobile locksmith programme a car key at the roadside?',
    answer:
      'Yes. We carry professional automotive key programming equipment in our vehicle. Transponder keys, remote fobs, and smart keys are programmed entirely on-site — typically within 30–90 minutes of arriving.',
  },
  {
    question: 'Do you cover areas outside Chorlton?',
    answer:
      'Yes. We are a mobile service covering all of Greater Manchester including Didsbury, Stretford, Sale, Whalley Range, Fallowfield, Hulme, Old Trafford, Salford, and the city centre. Call 07309 903243 to confirm your specific area.',
  },
]

const faqSchema = generateFAQSchema(faqs)
const pageSchema = generateServicePageSchema({
  url: '/mobile-auto-locksmith-chorlton',
  name: 'Mobile Auto Locksmith Chorlton | Chorlton Locksmiths',
  description: 'Fully mobile auto locksmith in Chorlton — all services completed on-site at your location.',
  dateModified: '2026-03-22',
})

const COVERAGE = [
  'Chorlton', 'Didsbury', 'Whalley Range', 'Stretford', 'Sale', 'Fallowfield',
  'Withington', 'Hulme', 'Moss Side', 'Old Trafford', 'Rusholme',
  'Manchester City Centre', 'Salford', 'Urmston', 'Trafford', 'Northenden',
]

export default function MobileAutoLocksmithChorltonPage() {
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
                <li className="text-slate-300">Mobile Auto Locksmith Chorlton</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Mobile Auto Locksmith Chorlton — We Come to Your Exact Location
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Chorlton Locksmiths is a fully mobile auto locksmith — we drive to wherever your vehicle is and carry out the full service
              on-site. Roadside, car park, driveway, or workplace — no tow truck, no workshop visit, no dealer appointment.
              We cover Chorlton and all of Greater Manchester, typically arriving in around 30 minutes.
            </p>
            <a href="tel:+447309903243" className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xl px-8 py-4 rounded-xl transition-colors">
              <Phone size={22} />
              Call 07309 903243
            </a>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <MapPin size={20} className="text-slate-950" />, title: 'We Come to You', body: 'Roadside, car park, home, or workplace — we navigate to your exact location in Chorlton.' },
              { icon: <Clock size={20} className="text-slate-950" />, title: '~30 Min Response', body: 'Fast dispatch — we aim to reach Chorlton within 30 minutes of your call.' },
              { icon: <ShieldCheck size={20} className="text-slate-950" />, title: 'Complete On-Site Service', body: 'All equipment on board — lockouts, key cutting, programming, and ignition repair at your location.' },
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

      {/* What mobile means */}
      <Section backgroundVariant="accent">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-950 mb-4">What &lsquo;Mobile Auto Locksmith&rsquo; Actually Means</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              A mobile auto locksmith carries a fully equipped van with all the tools needed to resolve any common vehicle security situation at your location.
              Unlike a high-street key cutter or a main dealer, a mobile locksmith comes to you — wherever the vehicle is — and completes the work on-site.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Chorlton Locksmiths is equipped for car and van lockouts, car key cutting and transponder programming, broken key extraction,
              ignition repair and replacement, and key fob repair — all carried out at the roadside, in a car park, on your driveway,
              or anywhere else your vehicle happens to be in Chorlton or the surrounding area.
            </p>
            <div className="p-5 bg-white rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-950 mb-3 flex items-center gap-2">
                <MapPin size={16} className="text-amber-500" />
                Areas We Cover from Chorlton
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">{COVERAGE.join(' · ')}</p>
              <p className="text-slate-500 text-xs mt-2">Not on the list? Call 07309 903243 — we cover all of Greater Manchester.</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services + locations */}
      <Section>
        <Container>
          <SectionHeading title="Mobile Auto Locksmith Services in Chorlton" centered />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Car size={22} className="text-slate-950" />, title: 'Mobile Car Lockout', desc: 'We open your locked car at the roadside — non-destructive, no damage, any location.', href: '/car-lockout-chorlton' },
              { icon: <Car size={22} className="text-slate-950" />, title: 'Mobile Van Lockout', desc: 'Commercial van lockouts handled on-site — fast turnaround for tradespeople.', href: '/van-locksmith-chorlton' },
              { icon: <ShieldCheck size={22} className="text-slate-950" />, title: 'Mobile Key Replacement', desc: 'Lost keys replaced and programmed entirely at your location — no dealer required.', href: '/car-key-replacement-chorlton' },
              { icon: <ShieldCheck size={22} className="text-slate-950" />, title: 'Mobile Key Programming', desc: 'Transponder and fob programming carried out on-site for all major makes.', href: '/car-key-programming-chorlton' },
              { icon: <ShieldCheck size={22} className="text-slate-950" />, title: 'Mobile Ignition Repair', desc: 'Ignition faults diagnosed and resolved wherever your vehicle is located.', href: '/ignition-repair-chorlton' },
              { icon: <ShieldCheck size={22} className="text-slate-950" />, title: 'Mobile Broken Key Extraction', desc: 'Snapped keys extracted cleanly at the roadside — no workshop visit required.', href: '/broken-car-key-chorlton' },
            ].map((item, idx) => (
              <article key={idx} className="p-6 bg-white border border-slate-100 rounded-xl shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400 mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg text-slate-950 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">{item.desc}</p>
                <Link href={item.href} className="text-amber-600 hover:text-amber-700 text-sm font-medium underline underline-offset-2">Learn more →</Link>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process + CTA */}
      <Section backgroundVariant="accent">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading title="How Our Mobile Auto Locksmith Service Works" />
              <ol className="space-y-5">
                {[
                  { step: '1', title: 'Call 07309 903243', desc: 'Tell us your exact location and vehicle details. We confirm our ETA.' },
                  { step: '2', title: 'We Drive to You', desc: 'Our mobile locksmith navigates to your precise location — roadside, car park, or driveway.' },
                  { step: '3', title: 'Fixed Quote On Arrival', desc: 'Upfront price confirmed before we start any work.' },
                  { step: '4', title: 'Work Done On-Site', desc: 'Complete service carried out at your location — no workshop needed.' },
                  { step: '5', title: 'You Drive Away', desc: 'Vehicle secured, emergency resolved. All completed where you are.' },
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
                  <Link href="/auto-locksmith-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">auto locksmith Chorlton</Link>
                  {' '}·{' '}
                  <Link href="/24-hour-auto-locksmith-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">24 hour auto locksmith</Link>
                  {' '}·{' '}
                  <Link href="/car-lockout-chorlton" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">car lockout Chorlton</Link>
                </p>
              </div>
            </div>
            <div className="bg-slate-950 text-white rounded-xl p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-2">Mobile Auto Locksmith — Chorlton</h3>
              <p className="text-slate-400 text-sm mb-6">We come to you — ~30 min response, 7 days a week</p>
              <div className="mb-6">
                <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">Call Now</p>
                <a href="tel:+447309903243" className="text-3xl font-bold text-amber-400 hover:text-amber-300 transition-colors">07309 903243</a>
              </div>
              <div className="space-y-2 text-sm text-slate-300 mb-8">
                <p>✓ We come to your exact location</p>
                <p>✓ ~30 min response in Chorlton</p>
                <p>✓ Complete service on-site</p>
                <p>✓ All makes &amp; models</p>
                <p>✓ Fixed price before we start</p>
              </div>
              <QuoteForm />
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container>
          <SectionHeading title="Mobile Auto Locksmith Chorlton — FAQs" centered />
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
              <h3 className="text-lg font-bold text-slate-950 mb-1">Mobile Car Key Service in Stockport?</h3>
              <p className="text-slate-600 text-sm">
                <a href="https://carkeysinstockport.co.uk/" target="_blank" rel="noopener" className="text-amber-600 hover:text-amber-700 font-medium underline underline-offset-2">Car Keys in Stockport</a>
                {' '}— our mobile partner covering all car key services in Stockport.
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
            <h2 className="text-2xl font-bold text-slate-950 mb-3">Need a Mobile Auto Locksmith in Chorlton?</h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">We come to you in ~30 minutes — roadside, car park, or driveway. Call now.</p>
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
