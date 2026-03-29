import type { Metadata } from 'next'
import { HeroSection } from '@/components/hero/HeroSection'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { QuoteForm } from '@/components/forms/QuoteForm'
import { generateServiceSchema, generateFAQSchema } from '@/lib/schema'
import { Clock, MapPin, Lock } from 'lucide-react'

export const metadata: Metadata = {
  title: '24/7 Emergency Locksmith in Manchester | Chorlton Locksmiths',
  description:
    'Emergency locksmith available 24/7 in Manchester. Fast response for lockouts, lost keys, and urgent lock issues. Call 07309 903243 now.',
}

const serviceSchema = generateServiceSchema({
  name: 'Emergency Locksmith',
  description: 'Available 24/7 for emergency lockouts and urgent lock issues in Manchester',
  url: '/services/emergency-locksmith-manchester',
})

const faqs = [
  {
    question: 'How quickly can you arrive for an emergency?',
    answer:
      'We aim to arrive within 30-60 minutes depending on your location in the Manchester area. Call for immediate assistance.',
  },
  {
    question: 'Do you offer emergency services outside business hours?',
    answer:
      'Yes, our emergency locksmith service is available 24/7, including nights, weekends, and bank holidays.',
  },
  {
    question: 'What do I need to prove I live in the property?',
    answer:
      'For security reasons, we require proof of residency such as a utility bill, tenancy agreement, or ID matching the property address.',
  },
  {
    question: 'Can you unlock my car?',
    answer:
      'Yes, we provide vehicle lockout services for cars and vans throughout Manchester.',
  },
]

const faqSchema = generateFAQSchema(faqs)

export default function EmergencyLocksmirhPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <HeroSection
        title="Emergency Locksmith Services - Available 24/7"
        subtitle="Locked out? Lost your keys? We're here to help. Fast response, professional service, fair pricing."
      />

      <Section>
        <Container>
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400">
                  <Clock size={20} className="text-slate-950" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-950">Available 24/7</h3>
                <p className="text-slate-600">
                  Emergency locksmith service whenever you need it, day or night
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400">
                  <MapPin size={20} className="text-slate-950" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-950">Fast Response</h3>
                <p className="text-slate-600">
                  Average response time of 30-60 minutes across Manchester
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400">
                  <Lock size={20} className="text-slate-950" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-950">No Damage</h3>
                <p className="text-slate-600">
                  Skilled techniques to open locks with minimal or no damage
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section backgroundVariant="accent">
        <Container>
          <SectionHeading
            title="When You Need Emergency Locksmith Services"
            subtitle="Common situations where our 24/7 service makes all the difference"
            centered
          />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Locked Out of Your Home',
                description:
                  'Whether you forgot your keys or they\'re locked inside, we can get you back in quickly and safely.',
              },
              {
                title: 'Lost or Stolen Keys',
                description:
                  'If you\'ve lost your keys or suspect they\'ve been stolen, we can rekey your locks for security.',
              },
              {
                title: 'Broken Lock',
                description:
                  'A broken lock leaves you vulnerable. We repair or replace damaged locks quickly.',
              },
              {
                title: 'Stuck Key',
                description:
                  'Keys that break inside locks require special techniques to remove safely.',
              },
              {
                title: 'Locked Out of Your Car',
                description:
                  'We provide automotive locksmith services for cars and vans locked throughout Manchester.',
              },
              {
                title: 'Property After Break-In',
                description:
                  'After a break-in, secure your property quickly. We can repair and upgrade locks immediately.',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg text-slate-950 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
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
                title="Our Emergency Locksmith Process"
              />
              <div className="space-y-4">
                {[
                  {
                    step: '1',
                    title: 'Call Us Immediately',
                    desc: 'Ring us on 07309 903243 and describe your situation',
                  },
                  {
                    step: '2',
                    title: 'We Arrive Quickly',
                    desc: 'Our locksmiths arrive within 30-60 minutes in most cases',
                  },
                  {
                    step: '3',
                    title: 'Professional Assessment',
                    desc: 'We assess the lock and discuss the best solution with you',
                  },
                  {
                    step: '4',
                    title: 'Upfront Pricing',
                    desc: 'We quote the cost before proceeding with any work',
                  },
                  {
                    step: '5',
                    title: 'Quick Resolution',
                    desc: 'We efficiently open, repair, or replace the lock',
                  },
                  {
                    step: '6',
                    title: 'Full Guarantee',
                    desc: 'All work comes with our professional guarantee',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-slate-950 font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-950">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-950 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Emergency Help Now</h3>
              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-sm text-slate-400 mb-2">EMERGENCY HOTLINE</p>
                  <a
                    href="tel:+447309903243"
                    className="text-3xl font-bold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    07309 903243
                  </a>
                </div>
                <p className="text-slate-300 text-sm">
                  Available 24 hours a day, 7 days a week for emergency locksmith needs.
                </p>
              </div>
              <QuoteForm />
            </div>
          </div>
        </Container>
      </Section>

      <Section backgroundVariant="accent">
        <Container>
          <SectionHeading
            title="FAQs About Emergency Locksmith Service"
            centered
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors"
              >
                <summary className="cursor-pointer font-semibold text-slate-950 group-open:text-amber-600 transition-colors">
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
    </>
  )
}
