import type { Metadata } from 'next'
import { HeroSection } from '@/components/hero/HeroSection'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { CTAButton } from '@/components/cta/CTAButton'
import { generateServiceSchema } from '@/lib/schema'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Commercial Locksmith in Manchester | Business Security',
  description:
    'Professional commercial locksmith services for Manchester businesses. Access control, lock repair, and security solutions. Call 07309 903243.',
}

const serviceSchema = generateServiceSchema({
  name: 'Commercial Locksmith',
  description: 'Business lock and access control systems for Manchester companies',
  url: '/services/commercial-locksmith-manchester',
})

export default function CommercialLocksmirhPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <HeroSection
        title="Commercial Locksmith Services for Manchester Businesses"
        subtitle="Professional business security solutions including access control, emergency response, and comprehensive lock services."
      />

      <Section>
        <Container>
          <SectionHeading
            title="Business Security Solutions"
            subtitle="Comprehensive locksmith services for offices, retail, and commercial properties"
            centered
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="p-8 bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-lg">
              <h3 className="text-xl font-bold text-slate-950 mb-4">Our Services</h3>
              <ul className="space-y-3">
                {[
                  'Access control systems installation',
                  'Master key systems',
                  'Security doors and frames',
                  'Lock repair and maintenance',
                  'Emergency response for lockouts',
                  'Staff management and keying',
                  'Safe installation and repair',
                  'After-hours security',
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-amber-400 font-bold flex-shrink-0">✓</span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-slate-950 to-slate-900 text-white rounded-lg">
              <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                {[
                  'Expert commercial locksmith team',
                  '24/7 emergency response',
                  'Minimal disruption to operations',
                  'Competitive business rates',
                  'Fully insured and certified',
                  'Proven track record',
                  'Flexible scheduling',
                  'Professional communication',
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-amber-400 font-bold flex-shrink-0">✓</span>
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Internal link — Chorlton auto locksmith cluster */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-slate-950 mb-2">Auto Locksmith Services in Chorlton</h2>
            <p className="text-slate-600 text-sm mb-5">Need an auto locksmith in Chorlton or Manchester? Our specialist car and van locksmith team covers all makes.</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Auto Locksmith Chorlton', href: '/auto-locksmith-chorlton' },
                { label: 'Car Key Replacement', href: '/car-key-replacement-chorlton' },
                { label: 'Car Lockout Chorlton', href: '/car-lockout-chorlton' },
                { label: 'Lost Car Keys', href: '/lost-car-keys-chorlton' },
                { label: 'Van Locksmith', href: '/van-locksmith-chorlton' },
                { label: '24 Hour Auto Locksmith', href: '/24-hour-auto-locksmith-chorlton' },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="text-sm bg-amber-50 border border-amber-200 text-slate-950 font-medium px-4 py-2 rounded-lg hover:bg-amber-400 hover:border-amber-400 transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section backgroundVariant="accent">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-950 mb-4">
              Secure Your Business Today
            </h2>
            <p className="text-lg text-slate-700 mb-8">
              Don't leave your business security to chance. Get professional commercial locksmith services from Chorlton Locksmiths.
            </p>
            <CTAButton href="/contact" variant="primary" size="lg">
              Request Business Quote
            </CTAButton>
          </div>
        </Container>
      </Section>
    </>
  )
}
