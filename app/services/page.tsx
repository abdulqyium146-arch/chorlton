import type { Metadata } from 'next'
import { HeroSection } from '@/components/hero/HeroSection'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { ServiceGrid } from '@/components/services/ServiceGrid'
import { CTAButton } from '@/components/cta/CTAButton'

export const metadata: Metadata = {
  title: 'Locksmith Services in Manchester | Chorlton Locksmiths',
  description:
    'Professional locksmith services including emergency response, residential, commercial, lock repair and replacement. Serving Manchester 24/7.',
}

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        title="Professional Locksmith Services"
        subtitle="From emergency lockouts to comprehensive security solutions, we have you covered."
      />

      <Section>
        <Container>
          <SectionHeading
            title="Our Locksmith Services"
            subtitle="Complete range of locksmith solutions for residential and commercial properties"
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
              We offer a wide range of locksmith services. Contact us to discuss your specific needs.
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
