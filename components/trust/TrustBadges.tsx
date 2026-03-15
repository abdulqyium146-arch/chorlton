import React from 'react'
import { BUSINESS, TRUST_POINTS } from '@/lib/theme'
import { CheckCircle, Star, Zap } from 'lucide-react'

export function TrustBadges() {
  const iconMap = [Star, CheckCircle, Zap, CheckCircle, Star, Zap]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {TRUST_POINTS.map((point, idx) => {
        const Icon = iconMap[idx]
        return (
          <div
            key={idx}
            className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors"
          >
            <Icon className="text-amber-400 flex-shrink-0 mt-0.5" size={20} />
            <p className="text-sm font-medium text-slate-900">{point}</p>
          </div>
        )
      })}
    </div>
  )
}
