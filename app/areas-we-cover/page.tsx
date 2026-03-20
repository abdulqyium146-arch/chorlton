import type { Metadata } from 'next'
import Link from 'next/link'
import { HeroSection } from '@/components/hero/HeroSection'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { CTAButton } from '@/components/cta/CTAButton'
import { generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Locksmith Service Areas — All Greater Manchester | Chorlton Locksmiths',
  description:
    'Chorlton Locksmiths covers all of Greater Manchester. Emergency locksmith, auto locksmith, residential & commercial services in Chorlton, Didsbury, Salford, Trafford, Stockport, Wythenshawe and 20+ more areas.',
  alternates: {
    canonical: 'https://chorltonlocksmiths.com/areas-we-cover',
  },
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Areas We Cover', url: '/areas-we-cover' },
])

const areaDetails = [
  {
    name: 'Chorlton',
    description: 'Our home base. Fastest response times — usually under 20 minutes for all locksmith emergencies in Chorlton-cum-Hardy.',
  },
  {
    name: 'Manchester City Centre',
    description: 'Emergency and auto locksmith services throughout the city centre, including Deansgate, Ancoats, and Castlefield.',
  },
  {
    name: 'Didsbury',
    description: 'Residential and auto locksmith services for homes, flats, and vehicles in Didsbury and West Didsbury.',
  },
  {
    name: 'Fallowfield',
    description: 'Trusted locksmith for the Fallowfield community — student properties, flats, and houses.',
  },
  {
    name: 'Withington',
    description: 'Fast locksmith response covering all residential and vehicle lockouts in Withington.',
  },
  {
    name: 'Rusholme',
    description: 'Emergency locksmith and auto locksmith covering Rusholme and the Curry Mile area.',
  },
  {
    name: 'Whalley Range',
    description: 'Emergency and residential locksmith coverage for homes and businesses in Whalley Range.',
  },
  {
    name: 'Moss Side',
    description: 'Reliable and fast locksmith services for Moss Side properties and vehicles.',
  },
  {
    name: 'Hulme',
    description: 'Professional locksmith services for Hulme residents and commercial properties.',
  },
  {
    name: 'Old Trafford',
    description: 'Residential, commercial, and auto locksmith services in Old Trafford — available 7 days a week.',
  },
  {
    name: 'Stretford',
    description: 'Fast 24/7 locksmith services for Stretford residents, businesses, and vehicles.',
  },
  {
    name: 'Sale',
    description: 'Professional locksmith for all lock-related issues in Sale — including car and van lockouts.',
  },
  {
    name: 'Altrincham',
    description: 'Emergency, residential, and auto locksmith covering Altrincham and Broadheath.',
  },
  {
    name: 'Urmston',
    description: 'Locksmith services for homes, businesses, and vehicles across Urmston and Davyhulme.',
  },
  {
    name: 'Trafford Park',
    description: 'Commercial and van locksmith services for businesses and tradespeople in Trafford Park.',
  },
  {
    name: 'Salford',
    description: 'Full locksmith coverage across Salford — emergency, residential, commercial, and auto.',
  },
  {
    name: 'Eccles',
    description: 'Emergency locksmith and auto locksmith covering Eccles and surrounding Salford areas.',
  },
  {
    name: 'Worsley',
    description: 'Residential and auto locksmith services for homes and vehicles in Worsley.',
  },
  {
    name: 'Levenshulme',
    description: 'Trusted locksmith covering Levenshulme for all emergency, auto, and residential needs.',
  },
  {
    name: 'Gorton',
    description: 'Fast response locksmith for Gorton residential properties, businesses, and vehicles.',
  },
  {
    name: 'Longsight',
    description: 'Emergency and auto locksmith covering Longsight 7 days a week.',
  },
  {
    name: 'Ancoats',
    description: 'Locksmith services for the Ancoats and New Islington area — residential, commercial, and auto.',
  },
  {
    name: 'Wythenshawe',
    description: 'Mobile locksmith and auto locksmith covering all of Wythenshawe and Benchill.',
  },
  {
    name: 'Northenden',
    description: 'Residential and vehicle locksmith services in Northenden and the surrounding area.',
  },
  {
    name: 'Stockport',
    description: 'Emergency, residential, and auto locksmith covering Stockport town centre and suburbs.',
  },
  {
    name: 'Cheadle',
    description: 'Professional locksmith for Cheadle and Cheadle Hulme — all property and vehicle types.',
  },
  {
    name: 'Deansgate',
    description: 'City centre locksmith covering Deansgate, Castlefield, and Spinningfields apartments.',
  },
  {
    name: 'Castlefield',
    description: 'Locksmith for Castlefield residential and commercial properties, including canal-side apartments.',
  },
]

export default function AreasWeCoverPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <HeroSection
        title="Locksmith Services Across All Greater Manchester"
        subtitle="From Chorlton to Stockport, Salford to Altrincham — our mobile locksmiths cover the whole of Greater Manchester for emergency, auto, residential and commercial locksmith services."
      />

      <Section>
        <Container>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-10">
            <ol className="flex gap-2">
              <li><a href="/" className="hover:text-amber-500 transition-colors">Home</a></li>
              <li aria-hidden="true">/</li>
              <li className="text-slate-950 font-medium">Areas We Cover</li>
            </ol>
          </nav>

          <SectionHeading
            title="28 Areas Covered Across Greater Manchester"
            subtitle="We provide emergency locksmith, auto locksmith, residential and commercial locksmith services across all the following areas"
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {areaDetails.map((area, idx) => (
              <article
                key={idx}
                className="p-5 bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl hover:shadow-md hover:border-amber-400 transition-all"
              >
                <h2 className="text-lg font-bold text-slate-950 mb-1">{area.name}</h2>
                <p className="text-slate-600 text-sm leading-relaxed">{area.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* Services available in all areas */}
      <Section backgroundVariant="accent">
        <Container>
          <SectionHeading
            title="Services Available in All Areas"
            subtitle="Every service we offer is available across all Greater Manchester locations"
            centered
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { name: 'Emergency Locksmith', href: '/services/emergency-locksmith-manchester' },
              { name: 'Auto Locksmith (Cars & Vans)', href: '/services/auto-locksmith-manchester' },
              { name: 'Residential Locksmith', href: '/services/residential-locksmith-manchester' },
              { name: 'Commercial Locksmith', href: '/services/commercial-locksmith-manchester' },
              { name: 'Lock Repair', href: '/services/lock-repair-manchester' },
              { name: 'Lock Replacement', href: '/services/lock-replacement-manchester' },
              { name: 'uPVC Door Locks', href: '/services/upvc-door-lock-specialist' },
            ].map((service, idx) => (
              <a
                key={idx}
                href={service.href}
                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-slate-200 hover:border-amber-400 hover:shadow-sm transition-all text-slate-950 font-medium text-sm"
              >
                <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
                {service.name}
              </a>
            ))}
          </div>
        </Container>
      </Section>

      {/* Stockport Partner Callout */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto bg-slate-950 text-white rounded-2xl p-8 flex flex-col lg:flex-row gap-8 items-start lg:items-center">
            <div className="flex-1">
              <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">Specialist Partner — Stockport</p>
              <h2 className="text-xl font-bold mb-3">Car Key Cutting & Programming in Stockport</h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                For specialist <strong className="text-white">car key cutting, transponder programming, and auto locksmith
                services in Stockport</strong>, we work alongside our trusted partner{' '}
                <a
                  href="https://carkeysinstockport.co.uk/"
                  target="_blank"
                  rel="noopener"
                  className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-2"
                >
                  Car Keys in Stockport
                </a>
                {' '}— covering Stockport, Cheadle, Bramhall, Hazel Grove, and surrounding areas with a fully mobile service.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <a
                href="https://carkeysinstockport.co.uk/"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-5 py-3 rounded-xl transition-colors text-sm"
              >
                Visit Partner Site
              </a>
              <Link
                href="/partners"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-amber-400 text-white hover:text-amber-400 font-semibold px-5 py-3 rounded-xl transition-colors text-sm"
              >
                Our Partners →
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Not listed CTA */}
      <Section>
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-950 mb-3">Not Sure if We Cover Your Area?</h2>
            <p className="text-slate-600 mb-6">
              If you are anywhere in or around Greater Manchester, give us a call — we are likely able to help.
              We would rather come out and check than leave you stuck.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+447388789881"
                className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-6 py-3 rounded-xl transition-colors"
              >
                Call 07388 789881
              </a>
              <CTAButton href="/contact" variant="secondary" size="lg">
                Send a Message
              </CTAButton>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
