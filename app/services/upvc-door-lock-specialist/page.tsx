import type { Metadata } from 'next'
import { HeroSection } from '@/components/hero/HeroSection'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { CTAButton } from '@/components/cta/CTAButton'
import { generateServiceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'uPVC Door Lock Specialist in Manchester | Expert Service',
  description:
    'Specialist uPVC door lock repair and replacement in Manchester. Expert service for uPVC locks. Call 07388 789881 for immediate help.',
}

const serviceSchema = generateServiceSchema({
  name: 'uPVC Door Lock Specialist',
  description: 'Expert uPVC door lock repair and replacement services for Manchester homes',
  url: '/services/upvc-door-lock-specialist',
})

export default function UPVCLockSpecialistPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <HeroSection
        title="uPVC Door Lock Specialist in Manchester"
        subtitle="Expert uPVC lock repair and replacement. Fast service, competitive pricing, professional results guaranteed."
      />

      <Section>
        <Container>
          <SectionHeading
            title="uPVC Door Lock Services"
            subtitle="Specialist expertise in uPVC door locks for Manchester homes"
            centered
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="p-8 bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-lg">
              <h3 className="text-xl font-bold text-slate-950 mb-4">Common uPVC Lock Problems</h3>
              <ul className="space-y-3">
                {[
                  'Stiff or jammed locks',
                  'Key difficult to turn',
                  'Broken handles',
                  'Door not closing properly',
                  'Worn lock mechanisms',
                  'Water damage',
                  'Cracked or broken lock parts',
                ].map((problem, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-amber-400 font-bold flex-shrink-0">!</span>
                    <span className="text-slate-700">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-slate-950 to-slate-900 text-white rounded-lg">
              <h3 className="text-xl font-bold mb-4">Our Solutions</h3>
              <ul className="space-y-3">
                {[
                  'Professional cleaning & lubrication',
                  'Handle replacement',
                  'Lock mechanism replacement',
                  'Multipoint lock systems',
                  'Cylinder replacement',
                  'Full door lock replacement',
                  'Modern security upgrades',
                ].map((solution, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-amber-400 font-bold flex-shrink-0">✓</span>
                    <span className="text-slate-200">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section backgroundVariant="accent">
        <Container>
          <SectionHeading
            title="Why Choose Our uPVC Specialist Service?"
            centered
          />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: 'Expert Knowledge',
                description: 'Specialized training and experience with uPVC door locks',
              },
              {
                title: 'Quality Parts',
                description: 'We use genuine replacement parts for lasting results',
              },
              {
                title: 'Quick Service',
                description: 'Fast repairs to minimize disruption to your home',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-white rounded-lg text-center">
                <h4 className="font-bold text-slate-950 mb-2">{item.title}</h4>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-950 mb-4">
              Having uPVC Door Lock Issues?
            </h2>
            <p className="text-lg text-slate-700 mb-8">
              Don't struggle with your uPVC locks. Our specialist team is ready to help with professional, affordable solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+447388789881"
                className="inline-block bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-8 py-3 rounded-lg transition-colors"
              >
                Call Specialist Now
              </a>
              <CTAButton href="/contact" variant="secondary" size="lg">
                Book Service
              </CTAButton>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
