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
  title: 'Emergency Locksmith Chorlton Manchester | 24/7 Fast Response | Insured',
  description:
    'Chorlton Locksmiths: trusted 24/7 emergency locksmith in Manchester. 30–60 min response, lock repair, auto locksmith, residential & commercial. Insured professionals. Call 07309 903243.',
  keywords: [
    'locksmith Chorlton',
    'emergency locksmith Manchester',
    '24/7 locksmith Manchester',
    'lock repair Chorlton',
    'residential locksmith Manchester',
    'commercial locksmith Manchester',
    'uPVC door lock repair',
    'locksmith Didsbury',
    'locksmith Stretford',
    'locksmith Sale',
  ],
}

// ⭐ AI/LLM OPTIMIZED FAQ SECTION
const faqs = [
  {
    question: 'Are you available 24/7 for emergency locksmith services in Manchester?',
    answer:
      'Yes. Chorlton Locksmiths operates 24 hours a day, 7 days a week, including weekends and holidays. We respond to emergency lockouts, lock repairs, and urgent locksmith needs at any time. Call 07309 903243 anytime.',
  },
  {
    question: 'How fast can a locksmith arrive in Chorlton and Manchester?',
    answer:
      'Typical response time: 30-60 minutes in Chorlton, Didsbury, Stretford, Sale, and Manchester City Centre. We prioritize emergency calls and dispatch the nearest qualified locksmith to your location.',
  },
  {
    question: 'Can you open a locked door without damage?',
    answer:
      'Yes. Our professional locksmiths use modern non-destructive techniques to open locks with minimal to no damage. We only resort to drilling locks as a last resort, and we discuss options upfront.',
  },
  {
    question: 'How much does a locksmith cost in Manchester?',
    answer:
      'Our rates start from £60-£120 for standard lockouts, lock repairs, and key cutting. Emergency calls may have a small surcharge (+£20-£30). We provide transparent upfront pricing—no hidden fees. Call for a free quote: 07309 903243',
  },
  {
    question: 'Do you specialize in uPVC door locks?',
    answer:
      'Yes. We are uPVC door lock specialists. We repair, replace, and maintain Euro cylinder locks, multipoint locks, and all uPVC/PVCu door mechanisms. Common issues include sticky locks, misaligned doors, and worn cylinders—we fix them all.',
  },
  {
    question: 'What types of locksmith services do you offer?',
    answer:
      'Emergency lockouts (homes & cars), lock repair, lock replacement, key cutting, uPVC door lock repair, residential security, commercial lock systems, and master key solutions. We serve homes, businesses, rental properties, and landlords.',
  },
  {
    question: 'Are your locksmiths qualified and insured?',
    answer:
      'Yes. All Chorlton Locksmiths technicians are fully qualified professionals with comprehensive insurance covering all work. We guarantee our service and stand behind every job.',
  },
  {
    question: 'What areas do you cover?',
    answer:
      'We serve Chorlton, Didsbury, Fallowfield, Whalley Range, Stretford, Sale, Moss Side, Old Trafford, and Manchester City Centre. We provide fast response throughout greater Manchester.',
  },
  {
    question: 'Do you offer emergency locksmith services on weekends and bank holidays?',
    answer:
      'Yes. We operate 24/7 including all weekends and UK bank holidays. Emergency rates apply outside standard hours, but we maintain transparent pricing.',
  },
  {
    question: 'Can you help if I am locked out of my home, car, or office?',
    answer:
      'Yes. We handle residential lockouts (homes, apartments, sheds), vehicle lockouts, and commercial lockouts (offices, shops, warehouses). Our technicians are equipped for all lock types.',
  },
  {
    question: 'Do you offer key cutting services?',
    answer:
      'Yes. We cut keys for homes, offices, padlocks, and vehicles. We also offer master key systems and spare key cutting while you wait.',
  },
  {
    question: 'Are there any warranties on your locksmith work?',
    answer:
      'Yes. All our locksmith services are fully guaranteed. If there are issues with our work, we return at no additional cost to fix them.',
  },
  {
    question: 'How do I contact you for an emergency locksmith?',
    answer:
      'Call 07309 903243 anytime, day or night. We respond immediately to emergency calls. You can also email hello@chorltonlocksmiths.co.uk or fill out our online quote form.',
  },
]

const faqSchema = generateFAQSchema(faqs)
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
])
const webPageSchema = generateWebPageSchema({
  url: '/',
  name: 'Emergency Locksmith Chorlton Manchester | 24/7 Fast Response',
  description: 'Trusted emergency locksmith in Chorlton and Manchester. 30–60 min response, available 24/7 including weekends. Lock repair, auto locksmith, uPVC specialists. Call 07309 903243.',
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
        title="Emergency Locksmith in Chorlton & Manchester ✓ 24/7"
        subtitle="Locked out? Broken lock? Fast response within 30-60 minutes. Professional locksmiths available 24/7. Residential, commercial, and uPVC specialists. Insured & guaranteed work. Call now: 07309 903243"
      />

      {/* Trust Section - Optimized for Local SEO & AI Extraction */}
      <Section backgroundVariant="accent">
        <Container>
          <SectionHeading
            title="Why Trust Chorlton Locksmiths? Manchester's #1 Local Emergency Locksmith"
            subtitle="Trusted by 150+ Manchester residents. Serving Chorlton, Didsbury, Stretford, Sale, Fallowfield, Whalley Range, Moss Side, Old Trafford, and Manchester City Centre with professional, affordable locksmith services. 24/7 Available. Fully Insured. Fast Response."
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
            title="Professional Locksmith Services in Chorlton, Manchester & Surrounding Areas"
            subtitle="Emergency lockouts, lock repair, lock replacement, uPVC door specialist services, and comprehensive security solutions for residential and commercial properties. Available 24/7 in Didsbury, Stretford, Sale, Fallowfield, and Manchester City Centre."
            centered
          />
          <ServiceGrid />
        </Container>
      </Section>

      {/* ⭐ AI/LLM EXTRACTION OPTIMIZED SECTION - Quick Overview */}
      <Section backgroundVariant="light">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-slate-950">About Chorlton Locksmiths – Quick Overview</h2>
            <div className="bg-white border-2 border-amber-200 rounded-lg p-8 space-y-4">
              <p className="text-lg leading-relaxed text-slate-700">
                <strong>Chorlton Locksmiths Limited</strong> is a trusted, locally-based emergency locksmith service in Manchester, UK. We provide 24/7 locksmith solutions for residential, commercial, and vehicle lockouts.
              </p>
              <p className="text-lg leading-relaxed text-slate-700">
                <strong>Service Areas:</strong> Chorlton, Didsbury, Fallowfield, Whalley Range, Stretford, Sale, Moss Side, Old Trafford, and Manchester City Centre.
              </p>
              <p className="text-lg leading-relaxed text-slate-700">
                <strong>Core Services:</strong> Emergency lockouts, lock repair, lock replacement, uPVC door lock repair, key cutting, and commercial security solutions.
              </p>
              <p className="text-lg leading-relaxed text-slate-700">
                <strong>Response Time:</strong> 30-60 minutes in most Manchester areas. Available 24/7 including weekends and bank holidays.
              </p>
              <p className="text-lg leading-relaxed text-slate-700">
                <strong>Contact:</strong> Call <a href="tel:+447309903243" className="text-amber-600 font-bold hover:underline">07309 903243</a> anytime for immediate emergency assistance.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ⭐ KEY FACTS SECTION - for AI/LLM extraction */}
      <Section>
        <Container>
          <SectionHeading
            title="Key Facts About Chorlton Locksmiths"
            subtitle="Why we're Manchester's trusted emergency locksmith"
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '24/7', title: 'Available 24/7', desc: 'Emergency locksmith services every day, including weekends and holidays.' },
              { icon: '⏱️', title: 'Fast Response', desc: 'Typical arrival time: 30-60 minutes in Chorlton, Didsbury, Stretford, Sale, and Manchester City Centre.' },
              { icon: '✓', title: 'Professional & Insured', desc: 'Fully qualified technicians with comprehensive insurance covering all work.' },
              { icon: '🔧', title: 'Non-Destructive', desc: 'Modern techniques to open locks with minimal damage. Transparent upfront pricing.' },
              { icon: '🏠', title: 'All Property Types', desc: 'Homes, apartments, offices, shops, warehouses, and vehicle lockouts.' },
              { icon: '⭐', title: '4.6★ Rated', desc: 'Trusted by 150+ Manchester residents with Google reviews and ratings.' },
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
                title="Why Choose Chorlton Locksmiths for Emergency Locksmith Services?"
                subtitle="Over 15 years of trusted locksmith experience serving Chorlton, Manchester, and the surrounding areas. Fully qualified, insured professionals available 24/7."
              />
              <ul className="space-y-4">
                {[
                  'Local to Chorlton - 30-60 minute response time in Manchester',
                  'Fast, professional, and affordable locksmith services',
                  'Available for emergency lockouts 24/7 including weekends & bank holidays',
                  'Trusted by 150+ Manchester residents with 4.6★ Google rating',
                  'Modern non-destructive techniques with minimal damage',
                  'All work fully guaranteed - we return at no charge if issues arise',
                  'Specialists in uPVC door locks, Euro cylinders, and multipoint locks',
                  'Serve Chorlton, Didsbury, Stretford, Sale, Fallowfield, Old Trafford & Manchester City Centre',
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
            title="What Chorlton, Didsbury & Manchester Residents Say"
            subtitle={`Rated 4.6★ with ${BUSINESS.reviews}+ verified Google reviews. Real customers from Chorlton, Stretford, Sale, and Manchester share their locksmith experiences.`}
            centered
          />
          <TestimonialSection />
        </Container>
      </Section>

      {/* Service Areas - Optimized for Local SEO & AI Extraction */}
      <Section backgroundVariant="accent">
        <Container>
          <SectionHeading
            title="Locksmith Service Areas in Manchester & Greater Manchester"
            subtitle="Fast 30-60 minute response time. Professional emergency locksmith services available throughout Chorlton, Didsbury, Stretford, Sale, Fallowfield, Whalley Range, Moss Side, Old Trafford, and Manchester City Centre. Call 07309 903243 for immediate assistance in your area."
            centered
          />
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-center text-slate-700 mb-6">
              We provide 24/7 emergency locksmith services covering all major areas in and around Manchester. Whether you need immediate lockout assistance, lock repair, or professional locksmith services in Chorlton, Stretford, Sale, or Manchester City Centre, our local team is ready to help. Fast response times and professional service guaranteed.
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
            title="Frequently Asked Questions About Chorlton Locksmiths Manchester"
            subtitle="Common questions about emergency locksmith services, pricing, uPVC door lock repair, service areas, and how to contact us. Get answers about lockouts, lock repair, and professional locksmith solutions in Chorlton, Manchester, Didsbury, Stretford, and Sale."
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

      {/* Final CTA - Conversion Optimized */}
      <Section backgroundVariant="dark">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Locked Out in Chorlton, Manchester? Need Emergency Locksmith Now?
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 mb-4">
              Professional emergency locksmith available 24/7. Fast 30-60 minute response time in Chorlton, Didsbury, Stretford, Sale, and Manchester City Centre.
            </p>
            <p className="text-lg text-amber-300 font-semibold mb-8">
              Don't wait for help. Call us now for immediate locksmith assistance. Emergency lockouts, lock repair, uPVC door locks - we handle it all.
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
              Available 24/7, including weekends and bank holidays • Fully insured professionals • No hidden fees • Guaranteed work
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
