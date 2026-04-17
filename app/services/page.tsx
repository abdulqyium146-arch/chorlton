import type { Metadata } from 'next'
import { HeroSection } from '@/components/hero/HeroSection'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { ServiceGrid } from '@/components/services/ServiceGrid'
import { CTAButton } from '@/components/cta/CTAButton'

export const metadata: Metadata = {
  title: 'Auto Locksmith Services in Manchester | Car & Van Lockout Services',
  description:
    'Professional auto locksmith services including 24/7 emergency response, car lockouts, van lockouts, key replacement, key programming, and ignition repair. Serving Manchester. Call 07309 903243.',
}

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        title="Professional Auto Locksmith Services"
        subtitle="From emergency car and van lockouts to comprehensive vehicle security solutions, we have you covered with mobile service across Manchester."
      />

      <Section>
        <Container>
          <SectionHeading
            title="Our Auto Locksmith Services"
            subtitle="Complete range of mobile auto locksmith solutions for all vehicles"
            centered
          />
          <ServiceGrid />
        </Container>
      </Section>

      <Section backgroundVariant="accent">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-950 mb-4">
              Don't See What You're Looking For?
            </h2>
            <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
              We offer a wide range of auto locksmith services for cars, vans, and commercial vehicles. Contact us to discuss your specific automotive locksmith needs.
            </p>
            <CTAButton href="/contact" variant="primary" size="lg">
              Get In Touch
            </CTAButton>
          </div>
        </Container>
      </Section>
    </>
  )
}
