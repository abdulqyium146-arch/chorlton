import React from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react'
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
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
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

          {/* Auto Locksmith Chorlton */}
          <div>
            <h4 className="font-semibold text-white mb-4">Auto Locksmith Chorlton</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/auto-locksmith-chorlton" className="text-slate-400 hover:text-amber-400 transition-colors">Auto Locksmith Chorlton</Link></li>
              <li><Link href="/car-key-replacement-chorlton" className="text-slate-400 hover:text-amber-400 transition-colors">Car Key Replacement</Link></li>
              <li><Link href="/car-lockout-chorlton" className="text-slate-400 hover:text-amber-400 transition-colors">Car Lockout Chorlton</Link></li>
              <li><Link href="/lost-car-keys-chorlton" className="text-slate-400 hover:text-amber-400 transition-colors">Lost Car Keys</Link></li>
              <li><Link href="/van-locksmith-chorlton" className="text-slate-400 hover:text-amber-400 transition-colors">Van Locksmith Chorlton</Link></li>
              <li><Link href="/24-hour-auto-locksmith-chorlton" className="text-slate-400 hover:text-amber-400 transition-colors">24 Hour Auto Locksmith</Link></li>
              <li><Link href="/car-key-programming-chorlton" className="text-slate-400 hover:text-amber-400 transition-colors">Car Key Programming</Link></li>
              <li><Link href="/ignition-repair-chorlton" className="text-slate-400 hover:text-amber-400 transition-colors">Ignition Repair Chorlton</Link></li>
              <li><Link href="/mobile-auto-locksmith-chorlton" className="text-slate-400 hover:text-amber-400 transition-colors">Mobile Auto Locksmith</Link></li>
              <li><Link href="/auto-locksmith-didsbury" className="text-slate-400 hover:text-amber-400 transition-colors">Auto Locksmith Didsbury</Link></li>
              <li><Link href="/car-lockout-didsbury" className="text-slate-400 hover:text-amber-400 transition-colors">Car Lockout Didsbury</Link></li>
              <li><Link href="/car-key-replacement-didsbury" className="text-slate-400 hover:text-amber-400 transition-colors">Car Key Replacement Didsbury</Link></li>
              <li><Link href="/lost-car-keys-didsbury" className="text-slate-400 hover:text-amber-400 transition-colors">Lost Car Keys Didsbury</Link></li>
              <li><Link href="/van-locksmith-didsbury" className="text-slate-400 hover:text-amber-400 transition-colors">Van Locksmith Didsbury</Link></li>
              <li><Link href="/24-hour-auto-locksmith-didsbury" className="text-slate-400 hover:text-amber-400 transition-colors">24 Hour Locksmith Didsbury</Link></li>
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

        {/* Trusted Partners */}
        <div className="py-8 border-t border-slate-800">
          <h4 className="font-semibold text-white mb-4 text-sm">Trusted Partners</h4>
          <div className="flex flex-wrap gap-4 items-center">
            <div className="bg-slate-800 rounded-xl px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-3">
              <div>
                <p className="text-white font-semibold text-sm">Car Keys in Stockport</p>
                <p className="text-slate-400 text-xs mt-0.5">
                  Specialist car key cutting &amp; programming — Stockport &amp; Greater Manchester
                </p>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <a
                  href="https://carkeysinstockport.co.uk/"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1.5 text-xs bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-3 py-2 rounded-lg transition-colors"
                  aria-label="Visit Car Keys in Stockport"
                >
                  <ExternalLink size={12} />
                  carkeysinstockport.co.uk
                </a>
                <Link
                  href="/partners"
                  className="inline-flex items-center gap-1.5 text-xs border border-slate-600 hover:border-amber-400 text-slate-400 hover:text-amber-400 font-medium px-3 py-2 rounded-lg transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="py-8 border-t border-slate-800">
          <h4 className="font-semibold text-white mb-3 text-sm">
            <Link href="/areas-we-cover" className="hover:text-amber-400 transition-colors">Service Areas</Link>
          </h4>
          <div className="flex flex-wrap gap-2">
            {SERVICE_AREAS.map((area) => (
              <Link
                key={area}
                href="/areas-we-cover"
                className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded-full hover:bg-amber-400 hover:text-slate-950 transition-colors"
              >
                {area}
              </Link>
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
