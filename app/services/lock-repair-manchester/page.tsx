import type { Metadata } from 'next'
import { HeroSection } from '@/components/hero/HeroSection'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { CTAButton } from '@/components/cta/CTAButton'
import { generateServiceSchema } from '@/lib/schema'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lock Repair Service in Manchester | Expert Locksmith',
  description:
    'Professional lock repair services in Manchester. Broken locks, jammed locks, damaged locks - we fix them all. Call 07309 903243 for fast service.',
}

const serviceSchema = generateServiceSchema({
  name: 'Lock Repair',
  description: 'Expert lock repair services for all types of residential and commercial locks',
  url: '/services/lock-repair-manchester',
})

export default function LockRepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <HeroSection
        title="Professional Lock Repair in Manchester"
        subtitle="Expert repair for broken, jammed, or damaged locks. Fast service, fair pricing, and professional results."
      />

      <Section>
        <Container>
          <SectionHeading
            title="Lock Repair Services"
            subtitle="We repair all types of locks for homes and businesses"
            centered
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-3xl mx-auto">
            {[
              {
                title: 'What We Repair',
                items: [
                  'Jammed or stuck locks',
                  'Broken locks',
                  'Keys stuck inside locks',
                  'Handle and mechanism repair',
                  'Water-damaged locks',
                  'Worn lock cylinders',
                ],
              },
              {
                title: 'Why Repair?',
                items: [
                  'Cost-effective solution',
                  'Avoid full lock replacement',
                  'Same-day service available',
                  'Professional expertise',
                  'Fully guaranteed work',
                  'Quick turnaround',
                ],
              },
            ].map((section, idx) => (
              <div key={idx} className="p-6 bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-lg">
                <h3 className="text-lg font-bold text-slate-950 mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex gap-2 text-slate-700 text-sm">
                      <span className="text-amber-400 font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-950 mb-4">
              Is Your Lock Broken?
            </h2>
            <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
              Don't leave your property unsecured. Call us for immediate lock repair services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+447309903243"
                className="inline-block bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-8 py-3 rounded-lg transition-colors"
              >
                Call Now
              </a>
              <CTAButton href="/contact" variant="secondary" size="lg">
                Request Service
              </CTAButton>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
