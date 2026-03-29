import type { Metadata } from 'next'
import { HeroSection } from '@/components/hero/HeroSection'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { CTAButton } from '@/components/cta/CTAButton'
import { generateServiceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Lock Replacement Service in Manchester | Modern Security',
  description:
    'Professional lock replacement in Manchester. Upgrade to modern security locks. Affordable pricing, expert installation. Call 07309 903243.',
}

const serviceSchema = generateServiceSchema({
  name: 'Lock Replacement',
  description: 'Complete lock replacement with modern security systems for homes and businesses',
  url: '/services/lock-replacement-manchester',
})

export default function LockReplacementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <HeroSection
        title="Lock Replacement Services in Manchester"
        subtitle="Upgrade to modern, secure locks. Expert installation, competitive pricing, comprehensive warranty on all work."
      />

      <Section>
        <Container>
          <SectionHeading
            title="Why Replace Your Locks?"
            subtitle="When repair isn't enough, replacement is the best solution"
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              'Moving to a new home',
              'Lost or stolen keys',
              'Keys worn out',
              'Keys do not work properly',
              'Upgrading security',
              'After a break-in',
              'Tenant changeover',
              'Old locks beyond repair',
              'Insurance requirements',
            ].map((reason, idx) => (
              <div
                key={idx}
                className="p-4 bg-gradient-to-br from-amber-50 to-white border border-amber-200 rounded-lg"
              >
                <p className="font-medium text-slate-950">{reason}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section backgroundVariant="accent">
        <Container>
          <SectionHeading
            title="Lock Types We Replace"
            subtitle="Complete range of residential and commercial lock solutions"
            centered
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-3xl mx-auto">
            {[
              {
                title: 'Residential Locks',
                items: ['Yale locks', 'Mortice locks', 'Cylinder locks', 'Euro cylinders'],
              },
              {
                title: 'Commercial Locks',
                items: ['High-security locks', 'Access control locks', 'Master key systems'],
              },
            ].map((category, idx) => (
              <div key={idx} className="p-6 bg-white border border-slate-200 rounded-lg">
                <h3 className="font-bold text-slate-950 mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
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

      <Section>
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-950 mb-4">
              Get New Locks Installed Today
            </h2>
            <p className="text-lg text-slate-700 mb-8">
              Professional installation with expert advice on the best lock options for your property.
            </p>
            <CTAButton href="/contact" variant="primary" size="lg">
              Request Replacement Quote
            </CTAButton>
          </div>
        </Container>
      </Section>
    </>
  )
}
