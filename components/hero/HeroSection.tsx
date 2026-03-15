import { BUSINESS } from '@/lib/theme'
import { Container } from '@/components/layout/Container'
import { CTAButton } from '@/components/cta/CTAButton'
import { Star, Badge, Clock } from 'lucide-react'

interface HeroSectionProps {
  title: string
  subtitle: string
  ctaPrimary?: {
    label: string
    href?: string
    phone?: boolean
  }
  ctaSecondary?: {
    label: string
    href: string
  }
}

export function HeroSection({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
}: HeroSectionProps) {
  const primaryCTA = ctaPrimary || {
    label: 'Call Now',
    phone: true,
  }

  const secondaryCTA = ctaSecondary || {
    label: 'Get Free Quote',
    href: '/contact',
  }

  return (
    <section className="relative w-full text-white overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950"></div>

      {/* Animated accent elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <Container className="relative z-10 py-16 sm:py-20 lg:py-32">
        <div className="max-w-3xl animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-400/20 backdrop-blur-sm border border-amber-400/30 rounded-full px-4 py-2 mb-6">
            <Star size={16} className="text-amber-400" />
            <span className="text-sm font-semibold text-amber-300">
              {BUSINESS.rating} ★ Rated - {BUSINESS.reviews} Reviews
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-white mb-8 max-w-2xl font-medium">
            {subtitle}
          </p>

          {/* Trust Signals */}
          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center gap-2 text-white font-medium text-lg">
              <Clock size={20} className="text-amber-400" />
              <span>Available 24/7</span>
            </div>
            <div className="flex items-center gap-2 text-white font-medium text-lg">
              <Badge size={20} className="text-amber-400" />
              <span>Fast Response</span>
            </div>
            <div className="flex items-center gap-2 text-white font-medium text-lg">
              <span className="text-amber-400 text-2xl">✓</span>
              <span>Local to Chorlton</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-12">
            {primaryCTA.phone ? (
              <a
                href={`tel:${BUSINESS.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-10 py-5 rounded-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 text-lg sm:text-xl"
              >
                📞 {primaryCTA.label}
              </a>
            ) : (
              <CTAButton
                href={primaryCTA.href}
                variant="primary"
                size="lg"
              >
                {primaryCTA.label}
              </CTAButton>
            )}
            <CTAButton
              href={secondaryCTA.href}
              variant="secondary"
              size="lg"
            >
              {secondaryCTA.label}
            </CTAButton>
          </div>
        </div>
      </Container>
    </section>
  )
}
