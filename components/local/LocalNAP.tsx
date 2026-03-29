import { MapPin, Phone, Star, Clock } from 'lucide-react'

interface LocalNAPProps {
  /** Contextual service name shown in the heading e.g. "Auto Locksmith Chorlton" */
  serviceName?: string
  /** Show compact variant (no address block, just phone + rating) */
  compact?: boolean
}

/**
 * LocalNAP — Name / Address / Phone block.
 *
 * Every auto-locksmith service page includes this component for:
 * - Local SEO: consistent NAP signals across all pages
 * - Conversion: visible, tappable phone number
 * - E-E-A-T: trust signals (rating, address, response time)
 * - AEO: structured text that AI engines can extract for business info
 */
export function LocalNAP({ serviceName, compact = false }: LocalNAPProps) {
  return (
    <div
      className="rounded-xl border border-slate-200 bg-slate-50 p-5"
      itemScope
      itemType="https://schema.org/Locksmith"
      aria-label="Contact and business information"
    >
      {/* Hidden microdata for crawlers */}
      <meta itemProp="name" content="Chorlton Locksmiths Limited" />
      <meta itemProp="telephone" content="+447309903243" />
      <meta itemProp="url" content="https://chorltonlocksmiths.com" />
      <meta itemProp="priceRange" content="££" />

      {/* Rating row */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center gap-0.5" aria-label="4.6 out of 5 stars">
          {[1, 2, 3, 4].map((i) => (
            <Star key={i} size={14} className="fill-amber-400 text-amber-400" aria-hidden="true" />
          ))}
          <Star size={14} className="fill-amber-200 text-amber-400" aria-hidden="true" />
        </div>
        <span className="text-sm font-semibold text-slate-800">
          4.6
        </span>
        <span className="text-sm text-slate-500">(127 reviews)</span>
        <span
          itemProp="aggregateRating"
          itemScope
          itemType="https://schema.org/AggregateRating"
          className="sr-only"
        >
          <meta itemProp="ratingValue" content="4.6" />
          <meta itemProp="reviewCount" content="127" />
          <meta itemProp="bestRating" content="5" />
        </span>
      </div>

      {/* Business name */}
      <p className="font-bold text-slate-950 text-sm mb-3" itemProp="legalName">
        {serviceName ? `${serviceName} — ` : ''}
        <span itemProp="name">Chorlton Locksmiths Limited</span>
      </p>

      {/* Phone */}
      <a
        href="tel:+447309903243"
        className="flex items-center gap-2 text-amber-600 hover:text-amber-700 font-bold text-lg mb-3 transition-colors"
        aria-label="Call Chorlton Locksmiths"
      >
        <Phone size={18} aria-hidden="true" />
        <span itemProp="telephone">07309 903243</span>
      </a>

      {/* Response time badge */}
      <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
        <Clock size={14} className="text-amber-500 flex-shrink-0" aria-hidden="true" />
        <span>~30 min response in Chorlton &amp; Didsbury</span>
      </div>

      {!compact && (
        <>
          {/* Address */}
          <div
            className="flex items-start gap-2 text-sm text-slate-600 mb-3"
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            <MapPin size={14} className="text-amber-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <address className="not-italic">
              <span itemProp="streetAddress">615b Wilbraham Rd</span>,{' '}
              <span itemProp="addressLocality">Chorlton-cum-Hardy</span>,{' '}
              <span itemProp="addressRegion">Manchester</span>{' '}
              <span itemProp="postalCode">M21 9AN</span>
            </address>
          </div>

          {/* Service area */}
          <div className="text-xs text-slate-500 leading-relaxed">
            <span className="font-medium text-slate-700">Service area: </span>
            <span itemProp="areaServed">
              Chorlton · Didsbury · Stretford · Sale · Whalley Range · Fallowfield · Old Trafford · Manchester City Centre
            </span>
          </div>
        </>
      )}
    </div>
  )
}
