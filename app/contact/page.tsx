import type { Metadata } from 'next'
import { HeroSection } from '@/components/hero/HeroSection'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { QuoteForm } from '@/components/forms/QuoteForm'
import { BUSINESS } from '@/lib/theme'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Chorlton Locksmiths | Emergency Service',
  description: `Contact Chorlton Locksmiths for emergency locksmith services in Manchester. Call ${BUSINESS.phoneDisplay} 24/7 for immediate assistance.`,
}

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Contact Chorlton Locksmiths"
        subtitle="Get in touch for emergency locksmith services or to book an appointment. Available 24/7."
      />

      <Section>
        <Container>
          <SectionHeading
            title="Get In Touch With Us"
            subtitle="Multiple ways to reach our locksmith team"
            centered
          />

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-400">
                    <Phone size={24} className="text-slate-950" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-950 mb-1">Phone</h3>
                  <a
                    href={`tel:${BUSINESS.phone}`}
                    className="text-xl font-bold text-amber-600 hover:text-amber-700"
                  >
                    {BUSINESS.phoneDisplay}
                  </a>
                  <p className="text-slate-600 text-sm mt-1">Available 24/7 for emergencies</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-400">
                    <Mail size={24} className="text-slate-950" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-950 mb-1">Email</h3>
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="text-amber-600 hover:text-amber-700 font-medium"
                  >
                    {BUSINESS.email}
                  </a>
                  <p className="text-slate-600 text-sm mt-1">We'll respond within 1 hour</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-400">
                    <MapPin size={24} className="text-slate-950" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-950 mb-1">Address</h3>
                  <p className="text-slate-600 text-sm">{BUSINESS.address}</p>
                  <p className="text-slate-600 text-sm mt-2">Manchester M21 9AN</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-400">
                    <Clock size={24} className="text-slate-950" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-950 mb-1">Hours</h3>
                  <p className="text-slate-600 text-sm">Weekdays: {BUSINESS.serviceHours.weekday}</p>
                  <p className="text-slate-600 text-sm">Weekends: {BUSINESS.serviceHours.weekend}</p>
                  <p className="text-slate-600 text-sm font-semibold mt-1">Emergency: {BUSINESS.serviceHours.emergency}</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-950 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <QuoteForm />
            </div>
          </div>
        </Container>
      </Section>

      <Section backgroundVariant="accent">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-950 mb-4">
              Emergency? Call Immediately
            </h2>
            <p className="text-lg text-slate-700 mb-6 max-w-2xl mx-auto">
              Don't wait - for immediate locksmith assistance, call us right now. We answer emergency calls 24/7.
            </p>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              <Phone size={24} />
              Call Now: {BUSINESS.phoneDisplay}
            </a>
          </div>
        </Container>
      </Section>
    </>
  )
}
