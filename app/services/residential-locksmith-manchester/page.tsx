import type { Metadata } from 'next'
import { HeroSection } from '@/components/hero/HeroSection'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { CTAButton } from '@/components/cta/CTAButton'
import { QuoteForm } from '@/components/forms/QuoteForm'
import { generateServiceSchema } from '@/lib/schema'
import { Home, Shield, Key, Wrench } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Residential Locksmith in Manchester | Home Security Solutions',
  description:
    'Professional residential locksmith services in Manchester. Lock repair, replacement, rekeying, and home security solutions. Call 07388 789881.',
}

const serviceSchema = generateServiceSchema({
  name: 'Residential Locksmith',
  description: 'Home lock and security solutions for Manchester residents',
  url: '/services/residential-locksmith-manchester',
})

export default function ResidentialLocksmirhPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <HeroSection
        title="Residential Locksmith Services in Manchester"
        subtitle="Home security solutions including lock repair, replacement, rekeying, and much more. Professional, affordable locksmith services for your home."
      />

      <Section>
        <Container>
          <div className="grid lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Home, title: 'Home Locks', desc: 'All types of residential locks' },
              { icon: Shield, title: 'Security', desc: 'Enhance your home security' },
              { icon: Key, title: 'Rekeying', desc: 'Fast, affordable rekeying' },
              { icon: Wrench, title: 'Repairs', desc: 'Quick lock repair service' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-slate-200 rounded-lg hover:shadow-md transition-shadow text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <item.icon className="text-amber-600" size={24} />
                  </div>
                </div>
                <h3 className="font-bold text-slate-950 mb-1">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section backgroundVariant="accent">
        <Container>
          <SectionHeading
            title="Our Residential Services"
            subtitle="Complete home lock solutions for Manchester homeowners"
            centered
          />
          <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-3xl mx-auto">
            {[
              {
                title: 'Lock Repair',
                items: ['Door lock repair', 'Handle repair', 'Broken key removal'],
              },
              {
                title: 'Lock Replacement',
                items: ['Upgrade to modern locks', 'New door locks', 'Mortice & cylinder locks'],
              },
              {
                title: 'Rekeying',
                items: ['After moving homes', 'Lost or stolen keys', 'Tenant changes'],
              },
              {
                title: 'Security',
                items: ['Home security assessment', 'Multi-lock security', 'Safe installation'],
              },
            ].map((service, idx) => (
              <div key={idx} className="p-6 bg-white rounded-lg border border-slate-200">
                <h3 className="font-bold text-lg text-slate-950 mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Why Choose Us for Your Home?"
              />
              <ul className="space-y-4">
                {[
                  'Professional locksmiths with years of experience',
                  'Fair, transparent pricing with no hidden charges',
                  'Fast service with minimal disruption to your home',
                  'All work guaranteed for your peace of mind',
                  'Available 7 days a week',
                  'Fully insured and certified',
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-amber-400 flex-shrink-0 font-bold">✓</span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <CTAButton href="/contact" variant="primary" size="lg">
                  Get Free Assessment
                </CTAButton>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-slate-950 mb-6">Request a Quote</h3>
              <QuoteForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
