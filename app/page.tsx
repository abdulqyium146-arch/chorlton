import type { Metadata } from 'next'
import { HeroSection } from '@/components/hero/HeroSection'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { ServiceGrid } from '@/components/services/ServiceGrid'
import { TestimonialSection } from '@/components/testimonials/TestimonialSection'
import { TrustBadges } from '@/components/trust/TrustBadges'
import { CTAButton } from '@/components/cta/CTAButton'
import { QuoteForm } from '@/components/forms/QuoteForm'
import { generateFAQSchema, generateBreadcrumbSchema, generateWebPageSchema } from '@/lib/schema'
import { BUSINESS, SERVICE_AREAS } from '@/lib/theme'
import { Phone, Shield, Zap, MapPin, Award, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Auto Locksmith Chorlton Manchester | 24/7 Car & Van Lockout | Fast Response',
  description:
    'Mobile auto locksmith in Chorlton & Manchester. 24/7 emergency car & van lockouts, key replacement, key programming, and ignition repair. 30-60 min response. Insured professionals. Call 07309 903243.',
  keywords: [
    'auto locksmith Chorlton',
    'car locksmith Manchester',
    'auto locksmith Manchester',
    'car lockout Chorlton',
    'van locksmith Manchester',
    'emergency car locksmith',
    'mobile auto locksmith',
    'car key replacement Manchester',
    'car key programming',
    'vehicle locksmith near me',
  ],
}

// ⭐ AI/LLM OPTIMIZED FAQ SECTION
const faqs = [
  {
    question: 'Are you available 24/7 for emergency auto locksmith services?',
    answer:
      'Yes. Chorlton Locksmiths operates 24 hours a day, 7 days a week, including weekends and holidays. We respond to emergency car and van lockouts, lost keys, broken key extraction, and urgent automotive lock needs at any time. Call 07309 903243 anytime.',
  },
  {
    question: 'How fast can an auto locksmith arrive in Manchester?',
    answer:
      'Typical response time: 30-60 minutes in Chorlton, Didsbury, Stretford, Sale, and Manchester City Centre. We have a mobile fleet and dispatch the nearest qualified auto locksmith to your location. For emergency situations, we prioritize fastest dispatch.',
  },
  {
    question: 'Can you open a locked car without damage?',
    answer:
      'Yes. Our professional auto locksmiths use modern non-destructive techniques to open vehicles with minimal to no damage to the bodywork, glass, or locks. We only resort to drilling as a last resort and always discuss options upfront.',
  },
  {
    question: 'How much does an auto locksmith cost in Manchester?',
    answer:
      'Our rates start from £60-£150 for standard car and van lockouts, depending on the make and model. Key cutting and programming starts from £80-£200. Emergency calls may have a small surcharge. We provide transparent upfront pricing—no hidden fees. Call for a free quote: 07309 903243',
  },
  {
    question: 'Can you help if I\'ve lost all my car keys?',
    answer:
      'Yes. If you\'ve lost all your car keys, we can create new transponder keys and program them on-site. We can typically do this for most vehicles within 30-60 minutes. We\'ll need proof of ownership and ID. Call us immediately for assistance.',
  },
  {
    question: 'What types of auto locksmith services do you offer?',
    answer:
      'Emergency car and van lockouts, spare key cutting and programming, transponder key programming, broken key extraction, lost key replacement, ignition repair and replacement, key fob programming, and mobile auto locksmith services. We serve all makes and models.',
  },
  {
    question: 'Are your auto locksmiths qualified and insured?',
    answer:
      'Yes. All Chorlton Locksmiths auto technicians are fully qualified professionals with comprehensive insurance covering all work. We guarantee our service and stand behind every job. We work on all vehicle types and models.',
  },
  {
    question: 'What areas do you cover for auto locksmith services?',
    answer:
      'We serve Chorlton, Didsbury, Fallowfield, Whalley Range, Stretford, Sale, Moss Side, Old Trafford, and Manchester City Centre. We provide fast response throughout greater Manchester for all automotive locksmith needs.',
  },
  {
    question: 'Do you offer emergency auto locksmith services on weekends?',
    answer:
      'Yes. We operate 24/7 including all weekends and UK bank holidays. Emergency auto locksmith services available any day or time. Emergency rates apply outside standard hours, but we maintain transparent pricing.',
  },
  {
    question: 'Can you help if I am locked out of my car or van?',
    answer:
      'Yes. We handle all types of vehicle lockouts - cars, vans, trucks, and commercial vehicles. Our technicians are equipped with professional auto locksmith tools and experience working on all makes and models. We provide non-destructive entry whenever possible.',
  },
  {
    question: 'Do you offer car key programming services?',
    answer:
      'Yes. We program transponder keys (chip keys), key fobs, and remote keys for most vehicle makes and models. We can program new keys on-site using our mobile equipment. Turnaround is typically 30-60 minutes.',
  },
  {
    question: 'Are there any warranties on your auto locksmith work?',
    answer:
      'Yes. All our auto locksmith services are fully guaranteed. If there are issues with our work, we return at no additional cost to fix them. We stand behind our professional service 100%.',
  },
  {
    question: 'How do I contact you for emergency auto locksmith help?',
    answer:
      'Call 07309 903243 anytime, day or night. We respond immediately to emergency calls and will give you an accurate ETA. You can also email hello@chorltonlocksmiths.co.uk or fill out our online quote form. Mobile service means we come to your location.',
  },
]

const faqSchema = generateFAQSchema(faqs)
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
])
const webPageSchema = generateWebPageSchema({
  url: '/',
  name: 'Auto Locksmith Chorlton Manchester | 24/7 Car & Van Lockout Service',
  description: 'Mobile auto locksmith in Chorlton and Manchester. 24/7 emergency car and van lockouts, key replacement, key programming. 30–60 min response. Insured professionals. Call 07309 903243.',
  speakableSelectors: ['h1', 'h2', '.speakable'],
})

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* Hero Section - Optimized for Conversions */}
      <HeroSection
        title="Auto Locksmith Chorlton Manchester — 24/7 Mobile Service ✓"
        subtitle="Locked out of your car or van? Fast 30-60 minute response in Manchester. Non-destructive entry, key cutting, key programming, and emergency auto lockout relief. Available 24/7. Call 07309 903243 now."
      />

      {/* Trust Section - Optimized for Local SEO & AI Extraction */}
      <Section backgroundVariant="accent">
        <Container>
          <SectionHeading
            title="Auto Locksmith Manchester — Manchester's #1 Mobile Car & Van Service"
            subtitle="Trusted by drivers across Manchester. Fast 30-60 minute response. 24/7 emergency auto locksmith for car and van lockouts, key replacement, and key programming. Serving Chorlton, Didsbury, Stretford, Sale, and all of Greater Manchester."
            centered
            className="speakable"
          />
          <TrustBadges />
        </Container>
      </Section>

      {/* Services Section - Optimized for Local SEO & AI Extraction */}
      <Section>
        <Container>
          <SectionHeading
            title="Auto Locksmith Services in Chorlton, Manchester & Surrounding Areas"
            subtitle="24/7 emergency car and van lockouts, key cutting, key programming, ignition repair, and comprehensive automotive security solutions. Available in Didsbury, Stretford, Sale, Fallowfield, and Manchester City Centre."
            centered
          />
          <ServiceGrid />
        </Container>
      </Section>

      {/* ⭐ AI/LLM EXTRACTION OPTIMIZED SECTION - Quick Overview */}
      <Section backgroundVariant="light">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-slate-950">Auto Locksmith Manchester – Quick Overview</h2>
            <div className="bg-white border-2 border-amber-200 rounded-lg p-8 space-y-4">
              <p className="text-lg leading-relaxed text-slate-700">
                <strong>Chorlton Locksmiths Limited</strong> is a trusted, locally-based mobile auto locksmith service in Manchester, UK. We provide 24/7 automotive locksmith solutions for car lockouts, van lockouts, key replacement, and emergency automotive access.
              </p>
              <p className="text-lg leading-relaxed text-slate-700">
                <strong>Service Areas:</strong> Chorlton, Didsbury, Fallowfield, Whalley Range, Stretford, Sale, Moss Side, Old Trafford, and Manchester City Centre. We serve all of Greater Manchester.
              </p>
              <p className="text-lg leading-relaxed text-slate-700">
                <strong>Core Services:</strong> Emergency car and van lockouts, spare key cutting and programming, transponder key programming, broken key extraction, lost key replacement, ignition repair and replacement.
              </p>
              <p className="text-lg leading-relaxed text-slate-700">
                <strong>Response Time:</strong> 30-60 minutes in most Manchester areas. Mobile service means we come to your location. Available 24/7 including weekends and bank holidays.
              </p>
              <p className="text-lg leading-relaxed text-slate-700">
                <strong>Contact:</strong> Call <a href="tel:+447309903243" className="text-amber-600 font-bold hover:underline">07309 903243</a> anytime for immediate emergency auto locksmith assistance.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ⭐ KEY FACTS SECTION - for AI/LLM extraction */}
      <Section>
        <Container>
          <SectionHeading
            title="Key Facts About Auto Locksmith Chorlton"
            subtitle="Why we're Manchester's trusted mobile auto locksmith service"
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '24/7', title: '24/7 Emergency Service', desc: 'Mobile auto locksmith available every day, including weekends and bank holidays.' },
              { icon: '⏱️', title: 'Fast Response', desc: 'Typical arrival: 30-60 minutes in Chorlton, Didsbury, Stretford, Sale, and Manchester City Centre.' },
              { icon: '✓', title: 'Professional & Insured', desc: 'Fully qualified technicians with comprehensive insurance covering all vehicle types.' },
              { icon: '🔧', title: 'Non-Destructive Entry', desc: 'Professional techniques to open vehicles without damage. Mobile service to your location.' },
              { icon: '🚗', title: 'All Vehicles', desc: 'Cars, vans, trucks, commercial vehicles. All makes and models covered.' },
              { icon: '⭐', title: '4.6★ Rated', desc: 'Trusted by drivers across Manchester with verified customer reviews and ratings.' },
            ].map((fact, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-lg p-6 hover:border-amber-400 transition-colors">
                <div className="text-3xl mb-3">{fact.icon}</div>
                <h3 className="font-bold text-slate-950 mb-2">{fact.title}</h3>
                <p className="text-slate-600 text-sm">{fact.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Choose Us - Optimized for Conversions & Local SEO */}
      <Section backgroundVariant="dark">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Why Choose Chorlton Locksmiths for Mobile Auto Locksmith Services?"
                subtitle="Over 15 years of trusted auto locksmith experience serving drivers across Chorlton, Manchester, and the surrounding areas. Fully qualified, insured professionals available 24/7 for your automotive emergency."
              />
              <ul className="space-y-4">
                {[
                  'Mobile service — we come to your car or van location',
                  '30-60 minute response time across Greater Manchester',
                  'Fast, professional, and affordable auto locksmith services',
                  '24/7 emergency auto locksmith including weekends & bank holidays',
                  'Trusted by drivers with 4.6★ rating',
                  'Non-destructive vehicle entry techniques',
                  'All car and van makes and models covered',
                  'On-site key cutting and transponder key programming',
                  'Broken key extraction and ignition repair',
                  'Serve Chorlton, Didsbury, Stretford, Sale, Fallowfield, and Manchester City Centre',
                  'All work fully guaranteed—we return at no charge if issues arise',
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-amber-400 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-8 py-4 rounded-lg transition-colors"
                >
                  <Phone size={20} />
                  Call Now: {BUSINESS.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="bg-slate-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Get a Free Quote</h3>
              <QuoteForm />
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonials Section - Optimized for Trust & Local SEO */}
      <Section>
        <Container>
          <SectionHeading
            title="What Drivers in Manchester Say About Our Auto Locksmith Service"
            subtitle={`Rated 4.6★ with ${BUSINESS.reviews}+ verified reviews. Real customers from Chorlton, Stretford, Sale, and Manchester share their emergency auto locksmith experiences.`}
            centered
          />
          <TestimonialSection />
        </Container>
      </Section>

      {/* Service Areas - Optimized for Local SEO & AI Extraction */}
      <Section backgroundVariant="accent">
        <Container>
          <SectionHeading
            title="Auto Locksmith Service Areas — Manchester & Greater Manchester"
            subtitle="Fast 30-60 minute mobile response time. Professional emergency auto locksmith services available throughout Chorlton, Didsbury, Stretford, Sale, Fallowfield, Whalley Range, Moss Side, Old Trafford, and Manchester City Centre. Call 07309 903243 for immediate assistance in your area."
            centered
          />
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-center text-slate-700 mb-6">
              We provide 24/7 mobile auto locksmith services covering all major areas in and around Manchester. Whether you need immediate car lockout assistance, van lockout relief, key replacement, or professional key programming in Chorlton, Stretford, Sale, or Manchester City Centre, our local mobile team is ready to help. Fast response times and professional automotive locksmith service guaranteed.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {SERVICE_AREAS.map((area) => (
              <div
                key={area}
                className="px-5 py-3 bg-white text-slate-950 font-semibold rounded-full shadow-sm hover:shadow-md hover:bg-amber-50 transition-all text-center"
              >
                {area}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ Section - Optimized for AI Extraction & Local SEO */}
      <Section>
        <Container>
          <SectionHeading
            title="Frequently Asked Questions About Auto Locksmith Manchester"
            subtitle="Common questions about emergency car and van lockouts, key replacement, key programming, pricing, service areas, and how to contact our 24/7 mobile auto locksmith team. Get answers about vehicle lockouts and professional automotive lock solutions."
            centered
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors"
              >
                <summary className="cursor-pointer font-semibold text-slate-950 group-open:text-amber-400 transition-colors">
                  {faq.question}
                </summary>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      {/* Trusted Partners Strip */}
      <Section>
        <Container>
          <div className="border border-slate-200 rounded-2xl p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              <div className="flex-1">
                <p className="text-amber-600 font-bold text-xs uppercase tracking-widest mb-1">Trusted Partner Network</p>
                <h2 className="text-xl font-bold text-slate-950 mb-2">
                  Need Car Keys in Stockport? We Know the Best
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  For specialist <strong>car key cutting and programming in Stockport</strong>, we refer our
                  customers to our trusted partner{' '}
                  <a
                    href="https://carkeysinstockport.co.uk/"
                    target="_blank"
                    rel="noopener"
                    className="text-amber-600 hover:text-amber-700 font-semibold underline underline-offset-2"
                  >
                    Car Keys in Stockport
                  </a>
                  {' '}— mobile specialists covering Stockport and all of Greater Manchester.
                  Together we make sure every driver in the region is covered.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 flex-shrink-0">
                <a
                  href="https://carkeysinstockport.co.uk/"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-5 py-3 rounded-xl transition-colors text-sm"
                  aria-label="Visit Car Keys in Stockport"
                >
                  <ExternalLink size={15} />
                  carkeysinstockport.co.uk
                </a>
                <Link
                  href="/partners"
                  className="inline-flex items-center gap-2 border border-slate-300 hover:border-amber-400 text-slate-700 hover:text-amber-600 font-semibold px-5 py-3 rounded-xl transition-colors text-sm"
                >
                  Our Partners →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Auto Locksmith Chorlton Hub — internal link cluster for Googlebot ── */}
      <Section>
        <Container>
          <SectionHeading
            title="Auto Locksmith Chorlton — Car & Van Locksmith Services"
            subtitle="Mobile auto locksmith covering Chorlton, Didsbury, Stretford, Sale and all Manchester. ~30 min response."
            centered
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {[
              { label: 'Auto Locksmith Chorlton', href: '/auto-locksmith-chorlton', desc: 'Mobile car & van locksmith — all makes, ~30 min response' },
              { label: 'Car Key Replacement', href: '/car-key-replacement-chorlton', desc: 'On-site transponder key cutting & programming' },
              { label: 'Car Lockout Chorlton', href: '/car-lockout-chorlton', desc: 'Locked out of your car? Non-destructive entry' },
              { label: 'Lost Car Keys Chorlton', href: '/lost-car-keys-chorlton', desc: 'All keys lost — new key programmed on-site' },
              { label: 'Van Locksmith Chorlton', href: '/van-locksmith-chorlton', desc: 'Transit, Sprinter, Vivaro & all commercial vans' },
              { label: '24 Hour Auto Locksmith', href: '/24-hour-auto-locksmith-chorlton', desc: '24/7 emergency auto locksmith — nights & weekends' },
              { label: 'Car Key Programming', href: '/car-key-programming-chorlton', desc: 'Transponder & immobiliser key programming' },
              { label: 'Ignition Repair Chorlton', href: '/ignition-repair-chorlton', desc: 'Key won\'t turn? Ignition barrel repair & replacement' },
              { label: 'Mobile Auto Locksmith', href: '/mobile-auto-locksmith-chorlton', desc: 'Fully mobile — we come to your location' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col gap-1 p-4 bg-white border border-slate-200 rounded-xl hover:border-amber-400 hover:shadow-md transition-all"
              >
                <span className="font-bold text-slate-950 group-hover:text-amber-600 transition-colors text-sm">{item.label}</span>
                <span className="text-slate-500 text-xs leading-relaxed">{item.desc}</span>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/auto-locksmith-chorlton"
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              View All Auto Locksmith Services →
            </Link>
          </div>
        </Container>
      </Section>

      {/* Final CTA - Conversion Optimized */}
      <Section backgroundVariant="dark">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Locked Out of Your Car or Van? Emergency Auto Locksmith Now
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 mb-4">
              Professional mobile auto locksmith available 24/7. Fast 30-60 minute response time in Chorlton, Didsbury, Stretford, Sale, and Manchester City Centre.
            </p>
            <p className="text-lg text-amber-300 font-semibold mb-8">
              Don't wait for help. Call us now for immediate auto locksmith assistance. Car lockouts, van lockouts, key replacement, and key programming available around the clock.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-10 py-5 rounded-lg transition-colors text-lg sm:text-xl shadow-lg hover:shadow-xl"
              >
                <Phone size={24} />
                📞 Call {BUSINESS.phoneDisplay}
              </a>
              <CTAButton href="/contact" variant="secondary" size="lg">
                📧 Get Free Quote
              </CTAButton>
            </div>
            <p className="text-sm text-slate-400 mt-6">
              24/7 Mobile Auto Locksmith • All Makes & Models • Insured Professionals • Non-Destructive Entry • No Hidden Fees
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
