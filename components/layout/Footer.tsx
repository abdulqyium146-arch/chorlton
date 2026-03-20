import React from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { BUSINESS, SERVICE_AREAS } from '@/lib/theme'
import { Container } from './Container'
import { generateOrganizationSchema } from '@/lib/schema'

export function Footer() {
  const organizationSchema = generateOrganizationSchema()

  return (
    <footer className="bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <Container className="py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">{BUSINESS.name}</h3>
            <p className="text-slate-400 text-sm mb-4">
              Professional emergency locksmith services available 24/7 in Manchester and surrounding areas.
            </p>
            <div className="flex items-start gap-3 text-sm">
              <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                ⭐
              </div>
              <div>
                <p className="font-semibold">{BUSINESS.rating} ★ Rating</p>
                <p className="text-slate-400">{BUSINESS.reviews} Google reviews</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/emergency-locksmith-manchester" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Emergency Locksmith
                </Link>
              </li>
              <li>
                <Link href="/services/auto-locksmith-manchester" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Auto Locksmith (Cars &amp; Vans)
                </Link>
              </li>
              <li>
                <Link href="/services/residential-locksmith-manchester" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Residential Locksmith
                </Link>
              </li>
              <li>
                <Link href="/services/commercial-locksmith-manchester" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Commercial Locksmith
                </Link>
              </li>
              <li>
                <Link href="/services/lock-repair-manchester" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Lock Repair
                </Link>
              </li>
              <li>
                <Link href="/services/upvc-door-lock-specialist" className="text-slate-400 hover:text-amber-400 transition-colors">
                  uPVC Door Locks
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-amber-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/areas-we-cover" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Areas We Cover
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Our Partners
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <Phone size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
              <div className="flex gap-3">
                <Mail size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  Email Us
                </a>
              </div>
              <div className="flex gap-3">
                <MapPin size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <div className="text-slate-400 text-xs">
                  <p>{BUSINESS.address.split(',')[0]}</p>
                  <p>Manchester M21 9AN</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <div className="text-slate-400 text-xs">
                  <p>Emergency: 24/7 Available</p>
                  <p className="text-slate-500">Call anytime</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="py-8 border-t border-slate-800">
          <h4 className="font-semibold text-white mb-3 text-sm">Service Areas</h4>
          <div className="flex flex-wrap gap-2">
            {SERVICE_AREAS.map((area) => (
              <span
                key={area}
                className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded-full hover:bg-amber-400 hover:text-slate-950 transition-colors"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-slate-800 text-center text-sm text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p className="mt-2">Professional Locksmith Services | Manchester, UK</p>
        </div>
      </Container>
    </footer>
  )
}
