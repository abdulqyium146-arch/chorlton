import type { Metadata } from 'next'
import { HeroSection } from '@/components/hero/HeroSection'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { QuoteForm } from '@/components/forms/QuoteForm'
import { generateServiceSchema, generateFAQSchema } from '@/lib/schema'
import { Clock, MapPin, Lock } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '24/7 Emergency Auto Locksmith in Manchester | Car & Van Lockout',
  description:
    'Emergency auto locksmith available 24/7 in Manchester. Fast response for car lockouts, van lockouts, lost keys, and urgent vehicle lock issues. Call 07309 903243 now.',
}

const serviceSchema = generateServiceSchema({
  name: 'Emergency Auto Locksmith',
  description: 'Available 24/7 for emergency car and van lockouts and urgent automotive lock issues in Manchester',
  url: '/services/emergency-locksmith-manchester',
})

const faqs = [
  {
    question: 'How quickly can you arrive for an emergency auto lockout?',
    answer:
      'We aim to arrive within 30-60 minutes depending on your location in the Manchester area. Call immediately for fastest dispatch.',
  },
  {
    question: 'Do you offer 24/7 emergency auto locksmith services?',
    answer:
      'Yes, our emergency auto locksmith service is available 24/7, including nights, weekends, and bank holidays.',
  },
  {
    question: 'What do I need to prove I own the vehicle?',
    answer:
      'For security reasons, we require proof of vehicle ownership such as your driving license, vehicle registration document, or insurance certificate with a matching vehicle registration.',
  },
  {
    question: 'Can you open any type of car or van?',
    answer:
      'Yes, we provide emergency auto lockout services for all makes and models of cars, vans, and commercial vehicles throughout Manchester.',
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
        title="24/7 Emergency Auto Locksmith Services — Manchester"
        subtitle="Car or van locked? Lost your keys? We're here to help. Fast mobile response, professional service, fair pricing. Call 07309 903243 now."
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
            title="When You Need Emergency Auto Locksmith Services"
            subtitle="Common situations where our 24/7 mobile service makes all the difference"
            centered
          />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Locked Out of Your Car',
                description:
                  'Keys locked inside your car? We arrive quickly and open your vehicle safely without damage.',
              },
              {
                title: 'Locked Out of Your Van',
                description:
                  'Commercial vans locked with keys inside? We handle Transit, Sprinter, Vivaro and all van types.',
              },
              {
                title: 'Lost All Your Car Keys',
                description:
                  'If you\'ve lost all your keys, we create new transponder keys and program them on-site.',
              },
              {
                title: 'Broken Key in Lock',
                description:
                  'Keys that break inside ignitions or door locks require special techniques to remove safely.',
              },
              {
                title: 'Key Fob Not Working',
                description:
                  'Faulty key fob or broken remote? We can program new fobs or provide spare keys immediately.',
              },
              {
                title: 'Ignition Problems',
                description:
                  'Key won\'t turn in ignition? We repair or replace faulty ignition barrels quickly.',
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
                title="Our Emergency Auto Locksmith Process"
              />
              <div className="space-y-4">
                {[
                  {
                    step: '1',
                    title: 'Call Us Immediately',
                    desc: 'Ring us on 07309 903243 and describe your vehicle and situation',
                  },
                  {
                    step: '2',
                    title: 'We Arrive Quickly',
                    desc: 'Our mobile auto locksmiths arrive within 30-60 minutes in most cases',
                  },
                  {
                    step: '3',
                    title: 'Professional Assessment',
                    desc: 'We assess your vehicle lock and discuss the best solution with you',
                  },
                  {
                    step: '4',
                    title: 'Upfront Pricing',
                    desc: 'We provide a firm quote before proceeding with any work',
                  },
                  {
                    step: '5',
                    title: 'Non-Destructive Entry',
                    desc: 'We open your car or van using professional techniques without damage',
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
              <h3 className="text-2xl font-bold mb-6">Emergency Auto Locksmith — Call Now</h3>
              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-sm text-slate-400 mb-2">24/7 MOBILE AUTO LOCKSMITH</p>
                  <a
                    href="tel:+447309903243"
                    className="text-3xl font-bold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    07309 903243
                  </a>
                </div>
                <p className="text-slate-300 text-sm">
                  Available 24 hours a day, 7 days a week for emergency auto locksmith needs. Fast mobile response across Manchester.
                </p>
              </div>
              <QuoteForm />
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
