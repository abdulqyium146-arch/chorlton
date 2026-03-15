import { Container } from '@/components/layout/Container'
import { CTAButton } from '@/components/cta/CTAButton'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-slate-950 to-slate-900">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <h2 className="text-3xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Sorry, the page you're looking for doesn't exist. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/" variant="primary" size="lg">
              Go Home
            </CTAButton>
            <CTAButton href="/contact" variant="secondary" size="lg">
              Contact Us
            </CTAButton>
          </div>
        </div>
      </Container>
    </div>
  )
}
