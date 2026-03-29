import { MapPin } from 'lucide-react'

const AREAS = [
  'Chorlton', 'Didsbury', 'Stretford', 'Sale', 'Whalley Range',
  'Fallowfield', 'Withington', 'Hulme', 'Old Trafford', 'Moss Side',
  'Rusholme', 'Salford', 'Urmston', 'Northenden', 'Manchester City Centre',
  'Trafford', 'Wythenshawe', 'Levenshulme',
]

interface NearbyAreasProps {
  /** Highlighted area(s) rendered first in bold */
  primary?: string[]
  className?: string
}

/**
 * NearbyAreas — renders a consistent local coverage list on every service page.
 *
 * Contributes to local SEO by reinforcing the geographic entities the business
 * serves. Each area is wrapped with itemProp="areaServed" microdata.
 */
export function NearbyAreas({ primary = ['Chorlton'], className = '' }: NearbyAreasProps) {
  const primarySet = new Set(primary)
  const rest = AREAS.filter((a) => !primarySet.has(a))
  const ordered = [...primary, ...rest]

  return (
    <div
      className={`rounded-xl border border-slate-200 bg-white p-5 ${className}`}
      itemScope
      itemType="https://schema.org/Locksmith"
    >
      <h3 className="font-bold text-slate-950 mb-3 flex items-center gap-2 text-sm">
        <MapPin size={15} className="text-amber-500 flex-shrink-0" aria-hidden="true" />
        Areas Covered Near Chorlton
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed">
        {ordered.map((area, i) => (
          <span key={area}>
            <span
              itemProp="areaServed"
              className={primarySet.has(area) ? 'font-semibold text-slate-800' : ''}
            >
              {area}
            </span>
            {i < ordered.length - 1 && (
              <span className="text-slate-300 mx-1" aria-hidden="true">·</span>
            )}
          </span>
        ))}
      </p>
      <p className="text-slate-400 text-xs mt-3">
        Not listed? Call <a href="tel:+447309903243" className="text-amber-600 font-medium hover:text-amber-700">07309 903243</a> — we cover all of Greater Manchester.
      </p>
    </div>
  )
}
