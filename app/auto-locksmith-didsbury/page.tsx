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
import { Car, Clock, Key, Wrench, ShieldCheck, Phone, Star, MapPin } from 'lucide-react'

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Auto Locksmith Didsbury | Car & Van — 30 Min Response | 07309 903243',
  description:
    'Mobile auto locksmith in Didsbury, Manchester. Locked out of your car, lost your keys, or need transponder programming? ~30 min response, on-site service. Call 07309 903243.',
  keywords: [
    'auto locksmith Didsbury',
    'car locksmith Didsbury',
    'mobile auto locksmith Didsbury',
    'emergency auto locksmith Didsbury',
    '24 hour auto locksmith Didsbury',
    'car key replacement Didsbury',
    'lost car keys Didsbury',
    'car lockout Didsbury',
  ],
  openGraph: {
    title: 'Auto Locksmith Didsbury | Mobile Car & Van Locksmith — 30 Min',
    description:
      'Locked out in Didsbury or Didsbury Village? Mobile auto locksmith — ~30 min response, non-destructive entry, keys cut & programmed on-site. Call 07309 903243.',
    url: 'https://chorltonlocksmiths.com/auto-locksmith-didsbury',
    type: 'website',
    siteName: 'Chorlton Locksmiths',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Auto Locksmith Didsbury | 30 Min Response | 07309 903243',
    description:
      'Car or van lockout in Didsbury? Mobile auto locksmith — professional, non-destructive entry. Keys replaced and programmed roadside. Call now.',
  },
  alternates: {
    canonical: 'https://chorltonlocksmiths.com/auto-locksmith-didsbury',
  },
  robots: { index: true, follow: true },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Auto Locksmith Chorlton', url: '/auto-locksmith-chorlton' },
  { name: 'Auto Locksmith Didsbury', url: '/auto-locksmith-didsbury' },
])

const serviceSchema = generateServiceSchema({
  name: 'Auto Locksmith Didsbury — Mobile Car & Van Locksmith',
  description:
    'Chorlton Locksmiths provides a fully mobile auto locksmith service in Didsbury, Manchester. Services include car lockouts, lost car key replacement, transponder key cutting and programming, key fob repair, broken key extraction, and ignition repair — all completed at the roadside with no workshop visit required.',
  url: '/auto-locksmith-didsbury',
  serviceType: 'Auto Locksmith Didsbury',
})

const howToSchema = generateHowToSchema({
  name: 'How to Get an Auto Locksmith in Didsbury',
  description: 'The exact process when you call Chorlton Locksmiths for auto locksmith help in Didsbury.',
  steps: [
    { name: 'Call 07309 903243', text: 'Tell us your exact location in Didsbury — Didsbury Village, Wilmslow Road, Parrs Wood, or nearby — plus your vehicle make, model, and year.' },
    { name: 'Confirmed ETA', text: 'We confirm your nearest available mobile locksmith and provide a realistic arrival time — typically 25–35 minutes within the Didsbury area.' },
    { name: 'Upfront fixed price', text: 'On arrival we assess the vehicle and the job, then quote a fixed price before any work begins. No surprises, no pressure.' },
    { name: 'Non-destructive vehicle entry', text: 'We open your car or van using specialist locksmith tools designed for modern vehicle door systems. In virtually all cases there is zero damage.' },
    { name: 'Key replacement or programming on-site', text: 'If you need a new key, we cut the blade and programme the transponder chip or proximity smart key to your vehicle\'s ECU and immobiliser system at the roadside.' },
  ],
})

const faqs = [
  {
    question: 'How quickly can an auto locksmith reach me in Didsbury?',
    answer:
      'Our typical response time within Didsbury — including Didsbury Village, Parrs Wood, and the Wilmslow Road corridor — is around 25 to 35 minutes from your call. We dispatch the nearest available mobile locksmith, so response times are consistent day or night. Call 07309 903243 for a confirmed ETA at your exact location.',
  },
  {
    question: 'Can you replace my car key in Didsbury if I have no spare at all?',
    answer:
      'Yes. All-keys-lost situations are one of our most common call-outs. We carry key-cutting and transponder programming equipment in our mobile van and can produce a working replacement key on-site for most makes — including BMW, Ford, Audi, Volkswagen, Mercedes, Vauxhall, Toyota, and Nissan. For some vehicles with advanced immobiliser systems, the process takes slightly longer but is still completed roadside without a dealer visit.',
  },
  {
    question: 'Will you damage my car gaining entry?',
    answer:
      'No. We use professional non-destructive entry tools specifically designed for modern vehicle door and lock mechanisms. We do not force windows, damage seals, or drill lock barrels as a first approach. If an unusual vehicle or security system requires a different method, we explain it to you upfront before doing anything. In the overwhelming majority of call-outs we gain entry with zero damage.',
  },
  {
    question: 'What vehicles do you cover as an auto locksmith in Didsbury?',
    answer:
      'We cover all standard passenger cars, estate cars, SUVs, and light commercial vans. This includes vehicles with traditional cut keys, transponder chip keys, remote key fobs, proximity smart keys, and push-button start systems. We handle all major manufacturers and most models up to the current year. If you are unsure whether we can help with your specific vehicle, call us — we can usually confirm within a few seconds.',
  },
  {
    question: 'How much does an auto locksmith cost in Didsbury?',
    answer:
      'Pricing depends on the service required and your vehicle make and model. A standard car lockout typically starts from around £65–£95. Key replacement with transponder programming varies by vehicle and is quoted before we start. We are consistently significantly cheaper than a main dealer and always provide a fixed price upfront — there are no call-out fees added at the end. Call 07309 903243 for a quick estimate.',
  },
]

const faqSchema = generateFAQSchema(faqs)
const pageSchema = generateServicePageSchema({
  url: '/auto-locksmith-didsbury',
  name: 'Auto Locksmith Didsbury | Chorlton Locksmiths',
  description: 'Mobile auto locksmith service in Didsbury, Manchester — car lockouts, key replacement, transponder programming, and ignition repair at the roadside.',
  dateModified: '2026-04-23',
})

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AutoLocksmithDidsburyPage() {
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
                <ol className="flex gap-2 flex-wrap">
                  <li><Link href="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
                  <li aria-hidden="true">/</li>
                  <li><Link href="/auto-locksmith-chorlton" className="hover:text-amber-400 transition-colors">Auto Locksmith Chorlton</Link></li>
                  <li aria-hidden="true">/</li>
                  <li className="text-slate-300">Auto Locksmith Didsbury</li>
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
                <span className="text-slate-400 text-sm">· 127 reviews · Chorlton Locksmiths</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Auto Locksmith Didsbury
              </h1>
              <p className="text-xl text-slate-300 mb-6 leading-relaxed">
                Mobile car and van locksmith serving Didsbury Village, Wilmslow Road, Parrs Wood and the surrounding area.{' '}
                <strong className="text-white">~30 minute response</strong>, non-destructive entry, and keys replaced or programmed on-site.
              </p>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Whether you have left your keys inside the car outside a Didsbury restaurant, snapped a blade in the door lock, or lost your only set of car keys — we dispatch a fully equipped mobile auto locksmith directly to your location. No tow truck, no dealership appointment, no waiting until the next working day.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+447309903243"
                  className="inline-flex items-center justify-center gap-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-lg px-7 py-4 rounded-xl transition-colors"
                  aria-label="Call auto locksmith Didsbury now"
                >
                  <Phone size={20} aria-hidden="true" />
                  Call 07309 903243
                </a>
                <div className="flex items-center gap-2 text-slate-300 text-sm px-2">
                  <Clock size={16} className="text-amber-400" aria-hidden="true" />
                  <span>Available 24 hours — including nights and weekends</span>
                </div>
              </div>
            </div>

            {/* Sticky CTA panel */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 lg:sticky lg:top-24">
              <p className="text-xs text-amber-400 font-bold uppercase tracking-widest mb-3">Auto Locksmith Hotline — Didsbury</p>
              <a
                href="tel:+447309903243"
                className="text-3xl font-bold text-white hover:text-amber-400 transition-colors block mb-4"
              >
                07309 903243
              </a>
              <ul className="space-y-2 text-sm text-slate-300 mb-6">
                <li className="flex items-center gap-2"><ShieldCheck size={14} className="text-amber-400 flex-shrink-0" /> Non-destructive entry — no damage</li>
                <li className="flex items-center gap-2"><Clock size={14} className="text-amber-400 flex-shrink-0" /> ~30 min response in Didsbury</li>
                <li className="flex items-center gap-2"><Key size={14} className="text-amber-400 flex-shrink-0" /> Keys cut & programmed on-site</li>
                <li className="flex items-center gap-2"><Car size={14} className="text-amber-400 flex-shrink-0" /> All makes — cars & vans</li>
                <li className="flex items-center gap-2"><Phone size={14} className="text-amber-400 flex-shrink-0" /> Fixed price before we start</li>
              </ul>
              <QuoteForm />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Why choose us in Didsbury ── */}
      <Section>
        <Container>
          <SectionHeading
            title="Why Didsbury Residents Choose Chorlton Locksmiths"
            subtitle="Local knowledge, professional equipment, and honest pricing — every time"
          />
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div className="space-y-5">
              <p className="text-slate-700 leading-relaxed">
                Didsbury is one of south Manchester's busiest residential and commercial neighbourhoods. Between the cafe-lined streets of{' '}
                <strong>Didsbury Village</strong>, the dense traffic on <strong>Wilmslow Road</strong>, and the residential properties around{' '}
                <strong>Parrs Wood</strong> and Lapwing Lane, vehicle lockouts and key emergencies happen every day — often at the worst possible moment.
              </p>
              <p className="text-slate-700 leading-relaxed">
                We are based in neighbouring Chorlton, which means Didsbury is firmly within our primary response zone. When you call, we dispatch immediately. There is no waiting for a distant operator to sub-contract the job — you speak directly to the team that arrives.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Our mobile service van carries professional-grade <strong>locksmith diagnostics equipment</strong>, a comprehensive key-cutting machine, and transponder programming tools capable of handling everything from a basic Ford flat key to a BMW proximity card or a Mercedes smart key. Most jobs are resolved in a single visit with no return appointment needed.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Clock size={20} className="text-slate-950" />, title: '~30 Min Response', body: 'Direct dispatch from our Chorlton base puts us in Didsbury consistently within 30 minutes.' },
                { icon: <ShieldCheck size={20} className="text-slate-950" />, title: 'Fully Insured', body: 'All work carried out by qualified locksmiths with full professional insurance on every job.' },
                { icon: <Key size={20} className="text-slate-950" />, title: 'On-Site Programming', body: 'Transponder chips and remote fobs programmed at the roadside — no dealer appointment required.' },
                { icon: <Car size={20} className="text-slate-950" />, title: 'All Makes Covered', body: 'From a Vauxhall Corsa to an Audi Q7 or a BMW 5 Series — we carry the tools for virtually every manufacturer.' },
              ].map((item, idx) => (
                <div key={idx} className="p-5 bg-amber-50 border border-amber-100 rounded-xl">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-400 mb-3" aria-hidden="true">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-slate-950 text-sm mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Services cluster ── */}
      <Section backgroundVariant="accent">
        <Container>
          <SectionHeading
            title="Auto Locksmith Services We Provide in Didsbury"
            subtitle="Every service carried out at the roadside — no workshop, no tow truck"
            centered
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {[
              {
                icon: <Car size={22} className="text-slate-950" />,
                title: 'Car Lockout Didsbury',
                desc: 'Locked your keys inside the vehicle? We open cars and vans using professional non-destructive techniques — typically in under 15 minutes once we arrive.',
                href: '/car-lockout-chorlton',
              },
              {
                icon: <Key size={22} className="text-slate-950" />,
                title: 'Car Key Replacement Didsbury',
                desc: 'We cut and programme replacement car keys on-site for all major makes. Transponder chips, remote fobs, and proximity smart keys matched to your vehicle\'s immobiliser system.',
                href: '/car-key-replacement-chorlton',
              },
              {
                icon: <Key size={22} className="text-slate-950" />,
                title: 'Lost Car Keys Didsbury',
                desc: 'Lost your only set? All-keys-lost situations require specialist equipment to initialise a new key to your ECU without a working key present — we carry exactly that.',
                href: '/lost-car-keys-chorlton',
              },
              {
                icon: <Wrench size={22} className="text-slate-950" />,
                title: 'Ignition Repair & Replacement',
                desc: 'Key turning stiffly, not at all, or stuck in the barrel? We diagnose ignition lock cylinder faults and carry out barrel repairs and full ignition replacement without a workshop.',
                href: '/ignition-repair-chorlton',
              },
              {
                icon: <Car size={22} className="text-slate-950" />,
                title: 'Van Locksmith Didsbury',
                desc: 'Transit, Sprinter, Vivaro, Transporter or any other commercial van — we cover all major makes for lockouts, lost van keys, and van key programming.',
                href: '/van-locksmith-chorlton',
              },
              {
                icon: <Key size={22} className="text-slate-950" />,
                title: 'Key Fob Repair Didsbury',
                desc: 'Remote key fob not locking or unlocking the car? We diagnose the fault — whether it is a dead battery, failed circuit board, or programming issue — and fix it on-site.',
                href: '/car-key-fob-repair-chorlton',
              },
            ].map((item, idx) => (
              <article
                key={idx}
                className="p-6 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md hover:border-amber-400 transition-all"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400 mb-4" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg text-slate-950 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">{item.desc}</p>
                <Link
                  href={item.href}
                  className="text-amber-600 hover:text-amber-700 text-sm font-medium underline underline-offset-2"
                >
                  Learn more →
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Process / HowTo ── */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading title="How Our Didsbury Auto Locksmith Service Works" />
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                From the moment you call to the moment you drive away — here is exactly what to expect when you use Chorlton Locksmiths in Didsbury:
              </p>
              <ol className="space-y-5" aria-label="Auto locksmith process steps">
                {[
                  {
                    step: '1',
                    title: 'Call 07309 903243',
                    desc: 'Give us your exact location — the street name, nearby landmark, or postcode in Didsbury. Tell us the vehicle make, model, and year, and briefly describe the problem.',
                  },
                  {
                    step: '2',
                    title: 'Immediate dispatch',
                    desc: 'We identify the closest available mobile auto locksmith and dispatch immediately. You receive a confirmed ETA — typically 25–35 minutes for addresses across Didsbury.',
                  },
                  {
                    step: '3',
                    title: 'Fixed price confirmed on arrival',
                    desc: 'The locksmith assesses the vehicle and the specific job, then provides a firm, all-inclusive price. Work does not begin until you have agreed — no hidden costs added afterwards.',
                  },
                  {
                    step: '4',
                    title: 'Non-destructive entry',
                    desc: 'Using specialist vehicle opening tools, we gain entry through the door mechanism with zero damage to the bodywork, weatherstripping, window seals, or lock barrel.',
                  },
                  {
                    step: '5',
                    title: 'Key cut or programmed roadside',
                    desc: 'If a replacement key is required, we cut the blade profile and use dedicated programming software to pair the transponder chip or smart key to your vehicle\'s ECU and immobiliser — everything done at the roadside in Didsbury.',
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
                      <p className="text-slate-600 text-sm mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Sticky CTA side panel */}
            <div className="bg-slate-950 text-white rounded-xl p-8 lg:sticky lg:top-24">
              <MapPin size={20} className="text-amber-400 mb-3" aria-hidden="true" />
              <h3 className="text-xl font-bold mb-1">Serving All of Didsbury</h3>
              <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                Including Didsbury Village, Wilmslow Road, Parrs Wood, Lapwing Lane, School Lane, West Didsbury, and Palatine Road.
              </p>
              <div className="mb-6">
                <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">Call now — 24 hours</p>
                <a
                  href="tel:+447309903243"
                  className="text-3xl font-bold text-amber-400 hover:text-amber-300 transition-colors"
                  aria-label="Call auto locksmith Didsbury"
                >
                  07309 903243
                </a>
              </div>
              <ul className="space-y-2 text-sm text-slate-300 mb-8">
                <li>✓ Car lockouts — non-destructive entry</li>
                <li>✓ Transponder & smart key programming</li>
                <li>✓ All-keys-lost replacement</li>
                <li>✓ Key fob diagnostics & repair</li>
                <li>✓ Ignition barrel repair & replacement</li>
                <li>✓ Commercial vans — all major makes</li>
              </ul>
              <NearbyAreas primary={['Didsbury', 'Chorlton', 'Withington']} />
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Real local scenarios — GEO / AEO ── */}
      <Section backgroundVariant="accent">
        <Container>
          <SectionHeading
            title="Real Scenarios — Auto Locksmith in Didsbury"
            subtitle="The situations we respond to most frequently across Didsbury"
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {[
              {
                title: 'Locked out after dinner in Didsbury Village',
                body: 'One of our most frequent evening calls — keys left on the restaurant table, coat pocket, or simply locked in the boot. We reach Didsbury Village from Chorlton in under 30 minutes and open the vehicle without disturbing the lock or bodywork.',
              },
              {
                title: 'Transponder key snapped on Wilmslow Road',
                body: 'The metal blade on modern transponder keys can snap at the shoulder, leaving half the key inside the lock barrel. We extract the broken section, cut a new blade, and re-pair the chip — all on the kerbside on Wilmslow Road.',
              },
              {
                title: 'Lost van keys near Parrs Wood',
                body: 'Tradespeople working in the Parrs Wood and East Didsbury area frequently call us after losing their only van key on a job. We programme a full working replacement key to the van ECU on-site, so there is minimal disruption to the working day.',
              },
              {
                title: 'Key fob not locking the car — Lapwing Lane',
                body: 'Remote key fob issues are often misdiagnosed as a battery problem. We carry out a proper diagnostic to confirm whether the fault is the battery, the transponder signal, or a pairing issue with the vehicle\'s remote entry receiver — and resolve it roadside.',
              },
              {
                title: 'Ignition locked solid — School Lane',
                body: 'A worn steering column lock or a seized ignition cylinder can leave you completely unable to start the vehicle. We diagnose the specific fault and carry out an ignition barrel repair or full replacement on-site, restoring the vehicle to working order.',
              },
              {
                title: 'Smart key not detected — Palatine Road',
                body: 'Modern proximity smart keys and push-button start systems can lose their programming after a flat battery or an ECU reset. We use manufacturer-level programming tools to re-pair the key to the immobiliser system without a dealership visit.',
              },
            ].map((s, i) => (
              <div key={i} className="p-5 bg-white rounded-xl border border-slate-200 hover:border-amber-400 transition-colors">
                <h3 className="font-bold text-slate-950 mb-2 text-sm">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Vehicle & key types ── */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading title="Vehicle & Key Systems We Cover in Didsbury" />
              <p className="text-slate-600 text-sm mb-5 leading-relaxed">
                Modern vehicle security systems vary enormously between manufacturers. Our mobile auto locksmith van is equipped with diagnostic tools and programming software covering the full range of systems found on vehicles in Didsbury — from budget hatchbacks to prestige executive cars.
              </p>

              <h3 className="font-bold text-slate-950 mb-3">Key & security types</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  'Standard cut keys',
                  'Transponder chip keys',
                  'Remote key fobs',
                  'Flip-style remote keys',
                  'Proximity smart keys',
                  'Push-button start systems',
                  'Keycard systems (Renault, Citroën)',
                  'Tibbe keys (Ford, Jaguar)',
                  'Laser-cut (HU keys)',
                ].map((item) => (
                  <span key={item} className="px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-sm text-slate-700 font-medium">
                    {item}
                  </span>
                ))}
              </div>

              <h3 className="font-bold text-slate-950 mb-3">Vehicle makes</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Ford',
                  'Vauxhall', 'Toyota', 'Honda', 'Nissan', 'Kia', 'Hyundai',
                  'Peugeot', 'Renault', 'Citroën', 'Land Rover', 'Volvo',
                  'Jaguar', 'MINI', 'Skoda', 'SEAT',
                ].map((make) => (
                  <span key={make} className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-sm text-slate-700">
                    {make}
                  </span>
                ))}
              </div>
              <p className="text-slate-500 text-xs mt-4">Not listed? Call us — we cover the vast majority of vehicles on UK roads.</p>
            </div>

            <div>
              <div className="bg-slate-950 text-white rounded-xl p-6 mb-5">
                <h3 className="font-bold text-lg mb-3">Vehicle Security Systems We Work With</h3>
                <ul className="space-y-3 text-sm text-slate-300">
                  {[
                    { term: 'Transponder keys', def: 'Encrypted chip inside the key communicates with the engine immobiliser. We programme new chips to match your vehicle.' },
                    { term: 'Remote key fobs', def: 'Wireless entry and locking systems. We diagnose signal loss, dead transmitters, and synchronisation failures.' },
                    { term: 'Immobiliser systems', def: 'Factory and aftermarket immobilisers require correct pairing of new keys — we carry the software to do this on-site.' },
                    { term: 'ECU programming', def: 'All-keys-lost scenarios require writing a new key identity directly to the vehicle ECU using dedicated diagnostic hardware.' },
                    { term: 'Smart key proximity', def: 'Passive entry and push-button start systems require manufacturer-level tools to pair new keys — we have them.' },
                  ].map((item) => (
                    <li key={item.term} className="border-b border-slate-800 pb-3 last:border-0 last:pb-0">
                      <span className="font-semibold text-amber-400">{item.term}: </span>
                      {item.def}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 24/7 emergency section ── */}
      <Section backgroundVariant="accent">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <SectionHeading title="24 Hour Emergency Auto Locksmith — Didsbury" />
              <p className="text-slate-700 leading-relaxed mb-4">
                Vehicle lockouts and key emergencies do not follow business hours. Whether you are stranded outside your home on Palatine Road at midnight, locked out of your van on a Parrs Wood job site at 6am, or your key fob has stopped working on a Sunday afternoon in Didsbury Village — we are available every hour of every day.
              </p>
              <p className="text-slate-700 leading-relaxed mb-5">
                Our{' '}
                <Link href="/24-hour-auto-locksmith-chorlton" className="text-amber-600 hover:text-amber-700 font-medium underline underline-offset-2">
                  24 hour auto locksmith service
                </Link>{' '}
                covers Didsbury and surrounding south Manchester areas including Withington, Chorlton, Fallowfield, and West Didsbury. Response times remain consistent overnight because we maintain mobile coverage around the clock — not a reduced on-call rota.
              </p>
              <p className="text-slate-700 leading-relaxed">
                For a{' '}
                <Link href="/mobile-auto-locksmith-chorlton" className="text-amber-600 hover:text-amber-700 font-medium underline underline-offset-2">
                  mobile auto locksmith
                </Link>{' '}
                that comes directly to your location in Didsbury with no call-out fee and a fixed price before work starts, call 07309 903243 at any time.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Midnight car lockout', detail: 'Stranded after a night out in Didsbury Village — we arrive in ~30 min' },
                { label: 'Early-morning van start failure', detail: 'Key not recognised at 5am before a delivery run — diagnosed and resolved roadside' },
                { label: 'Weekend key programming', detail: 'Replacement key needed on a Saturday or Sunday — same service, same speed' },
                { label: 'Bank holiday emergency', detail: 'We operate across all UK bank holidays at standard rates where possible' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center">
                    <Clock size={14} className="text-slate-950" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-950 text-sm">{item.label}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Pricing ── */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="Transparent Pricing — Auto Locksmith Didsbury"
              subtitle="No hidden fees, no surprise surcharges — every job is quoted before we start"
            />
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {[
                { service: 'Car lockout (standard)', range: 'From £65–£95', note: 'Most makes — door opened, keys retrieved' },
                { service: 'Car lockout (high-security)', range: 'From £85–£120', note: 'Prestige or armoured door systems' },
                { service: 'Replacement key (standard transponder)', range: 'From £95–£160', note: 'Cut & programmed on-site — make dependent' },
                { service: 'Smart key / proximity card', range: 'From £120–£200+', note: 'BMW, Mercedes, Audi, Land Rover systems' },
                { service: 'Broken key extraction', range: 'From £55–£85', note: 'Barrel extraction, no damage to lock' },
                { service: 'Ignition barrel repair', range: 'From £95–£180', note: 'Diagnosis, repair, or full replacement' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border border-slate-200 rounded-xl">
                  <p className="font-bold text-slate-950 text-sm mb-1">{item.service}</p>
                  <p className="text-amber-600 font-bold text-lg mb-1">{item.range}</p>
                  <p className="text-slate-500 text-xs">{item.note}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-500 text-sm mt-5 text-center">
              All prices are indicative. A fixed quote is provided on-site before any work starts. Call{' '}
              <a href="tel:+447309903243" className="text-amber-600 hover:text-amber-700 font-semibold">07309 903243</a>{' '}
              for a quick estimate over the phone.
            </p>
          </div>
        </Container>
      </Section>

      {/* ── NAP ── */}
      <Section backgroundVariant="accent">
        <Container>
          <LocalNAP />
        </Container>
      </Section>

      {/* ── Why E-E-A-T signals ── */}
      <Section>
        <Container>
          <SectionHeading
            title="Why Didsbury Drivers Trust Chorlton Locksmiths"
            centered
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
            {[
              {
                title: 'Local to South Manchester',
                body: 'Based in Chorlton — Didsbury is our neighbouring area. We know the streets, the parking restrictions, and the fastest routes to reach you.',
              },
              {
                title: 'Specialist Vehicle Tools',
                body: 'Professional auto locksmith equipment — not household lock-picking tools. We carry the diagnostics and key-cutting machinery a job actually requires.',
              },
              {
                title: 'Qualified Professionals',
                body: 'Every technician is a trained and qualified locksmith. Our work on your vehicle is covered by full professional indemnity insurance.',
              },
              {
                title: 'No Hidden Charges',
                body: 'The price you agree before we start is the price you pay. No call-out fee layered on at the end, no VAT surprises, no mileage surcharge.',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-5 bg-slate-50 border border-slate-100 rounded-xl">
                <h3 className="font-bold text-slate-950 mb-2 text-sm">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── FAQ ── */}
      <Section>
        <Container>
          <SectionHeading
            title="Auto Locksmith Didsbury — Frequently Asked Questions"
            subtitle="Straightforward answers to the most common questions from Didsbury drivers"
            centered
          />
          <div className="max-w-3xl mx-auto space-y-4 mt-8">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group border border-slate-200 bg-white rounded-xl p-5 hover:border-amber-400 transition-colors"
              >
                <summary className="cursor-pointer font-semibold text-slate-950 group-open:text-amber-600 transition-colors list-none flex justify-between items-center">
                  {faq.question}
                  <span className="ml-4 text-amber-500 group-open:rotate-45 transition-transform inline-block text-xl leading-none" aria-hidden="true">+</span>
                </summary>
                <div>
                  <p className="faq-answer mt-3 text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Internal link cluster ── */}
      <Section backgroundVariant="accent">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-slate-700 mb-3">Related auto locksmith services:</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Auto Locksmith Chorlton', href: '/auto-locksmith-chorlton' },
                { label: 'Car Key Replacement Chorlton', href: '/car-key-replacement-chorlton' },
                { label: 'Car Lockout Chorlton', href: '/car-lockout-chorlton' },
                { label: 'Lost Car Keys Chorlton', href: '/lost-car-keys-chorlton' },
                { label: 'Van Locksmith Chorlton', href: '/van-locksmith-chorlton' },
                { label: '24 Hour Auto Locksmith', href: '/24-hour-auto-locksmith-chorlton' },
                { label: 'Auto Locksmith Manchester', href: '/services/auto-locksmith-manchester' },
                { label: 'Mobile Auto Locksmith', href: '/mobile-auto-locksmith-chorlton' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm bg-white border border-slate-200 text-slate-950 font-medium px-4 py-2 rounded-lg hover:bg-amber-400 hover:border-amber-400 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Final CTA ── */}
      <Section>
        <Container>
          <div className="text-center py-4">
            <h2 className="text-3xl font-bold text-slate-950 mb-3">
              Need an Auto Locksmith in Didsbury Right Now?
            </h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto leading-relaxed">
              Call us and we will dispatch immediately. Fixed price before we start, ~30 minute response across Didsbury, non-destructive entry, and on-site key programming for all makes.
            </p>
            <a
              href="tel:+447309903243"
              className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xl px-8 py-4 rounded-xl transition-colors"
              aria-label="Call auto locksmith Didsbury"
            >
              <Phone size={24} aria-hidden="true" />
              07309 903243
            </a>
            <p className="text-slate-400 text-sm mt-4">Available 24 hours · No call-out fee · Fixed price guaranteed</p>
          </div>
        </Container>
      </Section>
    </>
  )
}
