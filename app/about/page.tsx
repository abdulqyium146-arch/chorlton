import type { Metadata } from 'next'
import Link from 'next/link'
import { HeroSection } from '@/components/hero/HeroSection'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { TrustBadges } from '@/components/trust/TrustBadges'
import { BUSINESS } from '@/lib/theme'

export const metadata: Metadata = {
  title: 'About Chorlton Locksmiths | Professional Auto Locksmith Manchester',
  description:
    'Learn about Chorlton Locksmiths mobile auto locksmith service. Over 15 years of professional automotive locksmith experience serving Manchester drivers with trusted, affordable 24/7 services.',
}

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="About Chorlton Locksmiths Auto Locksmith Service"
        subtitle="Professional mobile auto locksmith service with over 15 years of experience serving drivers across the Manchester community"
      />

      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-slate-950 mb-4">Our Story</h2>
              <p className="text-lg text-slate-700 mb-6">
                Chorlton Locksmiths was established over 15 years ago with a simple mission: to provide fast, reliable, and affordable mobile auto locksmith services to drivers throughout Manchester. What started as a small local operation has grown into one of the most trusted auto locksmith services in the area, specializing in emergency car and van lockouts, key replacement, key programming, and comprehensive vehicle security solutions.
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
                    <strong>Mobile Auto Locksmith:</strong> We come directly to your car or van location across Manchester
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-400 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700">
                    <strong>24/7 Emergency Service:</strong> Available any time, day or night, including weekends and holidays
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-400 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700">
                    <strong>Professional & Insured:</strong> All work is completed by qualified technicians with comprehensive insurance
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-400 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700">
                    <strong>Fair Pricing:</strong> No hidden charges - we provide transparent quotes upfront
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-400 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700">
                    <strong>Customer Focused:</strong> Your satisfaction is our priority - guaranteed work on all vehicles
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-400 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700">
                    <strong>All Vehicles Covered:</strong> Cars, vans, trucks, and commercial vehicles — all makes and models
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

      <Section>
        <Container>
          <SectionHeading
            title="Our Auto Locksmith Services"
            subtitle="Professional mobile auto locksmith services across Chorlton and all of Greater Manchester"
            centered
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {[
              { label: 'Emergency Auto Locksmith', href: '/services/emergency-locksmith-manchester' },
              { label: 'Auto Locksmith Chorlton', href: '/auto-locksmith-chorlton' },
              { label: 'Car Key Replacement', href: '/car-key-replacement-chorlton' },
              { label: 'Car Lockout Chorlton', href: '/car-lockout-chorlton' },
              { label: 'Lost Car Keys', href: '/lost-car-keys-chorlton' },
              { label: 'Van Locksmith Chorlton', href: '/van-locksmith-chorlton' },
              { label: 'Car Key Programming', href: '/car-key-programming-chorlton' },
              { label: 'Ignition Repair Chorlton', href: '/ignition-repair-chorlton' },
              { label: 'Mobile Auto Locksmith', href: '/mobile-auto-locksmith-chorlton' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-xl hover:border-amber-400 hover:shadow-sm transition-all text-slate-950 font-medium text-sm"
              >
                <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
                {item.label}
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
