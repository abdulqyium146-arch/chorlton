import type { Metadata } from 'next'
import { HeroSection } from '@/components/hero/HeroSection'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { TrustBadges } from '@/components/trust/TrustBadges'
import { BUSINESS } from '@/lib/theme'

export const metadata: Metadata = {
  title: 'About Chorlton Locksmiths | Professional Manchester Locksmith',
  description:
    'Learn about Chorlton Locksmiths. Over 15 years of professional locksmith experience serving Manchester residents with trusted, affordable locksmith services.',
}

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="About Chorlton Locksmiths"
        subtitle="Professional locksmith services with over 15 years of experience serving the Manchester community"
      />

      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-slate-950 mb-4">Our Story</h2>
              <p className="text-lg text-slate-700 mb-6">
                Chorlton Locksmiths was established over 15 years ago with a simple mission: to provide fast, reliable, and affordable locksmith services to residents and businesses throughout Manchester. What started as a small local operation has grown into one of the most trusted locksmith services in the area.
              </p>

              <h2 className="text-3xl font-bold text-slate-950 mb-4 mt-8">Our Values</h2>
              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="p-6 bg-slate-50 rounded-lg">
                  <h3 className="font-bold text-lg text-slate-950 mb-2">Reliability</h3>
                  <p className="text-slate-700 text-sm">
                    We show up on time, deliver professional service, and stand behind our work with a guarantee.
                  </p>
                </div>
                <div className="p-6 bg-slate-50 rounded-lg">
                  <h3 className="font-bold text-lg text-slate-950 mb-2">Affordability</h3>
                  <p className="text-slate-700 text-sm">
                    Transparent pricing with no hidden charges. We provide great value for your money.
                  </p>
                </div>
                <div className="p-6 bg-slate-50 rounded-lg">
                  <h3 className="font-bold text-lg text-slate-950 mb-2">Expertise</h3>
                  <p className="text-slate-700 text-sm">
                    Our locksmiths are fully qualified professionals with years of specialized experience.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-slate-950 mb-4 mt-8">Why Choose Us?</h2>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <span className="text-amber-400 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700">
                    <strong>Local to Chorlton:</strong> We're based in the community we serve, ensuring fast response times
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-400 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700">
                    <strong>Available 24/7:</strong> Emergency locksmith services whenever you need them
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-400 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700">
                    <strong>Professional & Insured:</strong> All work is completed to the highest standards
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-400 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700">
                    <strong>Fair Pricing:</strong> No hidden charges - we quote upfront, always
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-400 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700">
                    <strong>Customer Focused:</strong> Your satisfaction is our priority
                  </span>
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-slate-950 mb-4 mt-8">By The Numbers</h2>
              <div className="grid md:grid-cols-4 gap-6 my-8">
                <div className="text-center p-6 bg-amber-50 rounded-lg">
                  <p className="text-4xl font-bold text-amber-600">{BUSINESS.yearsEstablished}+</p>
                  <p className="text-slate-700 font-medium mt-2">Years of Experience</p>
                </div>
                <div className="text-center p-6 bg-amber-50 rounded-lg">
                  <p className="text-4xl font-bold text-amber-600">{BUSINESS.reviews}</p>
                  <p className="text-slate-700 font-medium mt-2">Happy Customers</p>
                </div>
                <div className="text-center p-6 bg-amber-50 rounded-lg">
                  <p className="text-4xl font-bold text-amber-600">{BUSINESS.rating}★</p>
                  <p className="text-slate-700 font-medium mt-2">Google Rating</p>
                </div>
                <div className="text-center p-6 bg-amber-50 rounded-lg">
                  <p className="text-4xl font-bold text-amber-600">24/7</p>
                  <p className="text-slate-700 font-medium mt-2">Emergency Service</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section backgroundVariant="accent">
        <Container>
          <SectionHeading
            title="What Makes Us Different"
            centered
          />
          <TrustBadges />
        </Container>
      </Section>
    </>
  )
}
