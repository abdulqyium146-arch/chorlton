'use client'

import { Phone } from 'lucide-react'
import { BUSINESS } from '@/lib/theme'

export function MobileCallButton() {
  return (
    <a
      href={`tel:${BUSINESS.phone}`}
      className="fixed bottom-6 right-6 md:hidden z-40 bg-amber-400 hover:bg-amber-500 text-slate-950 rounded-full p-4 shadow-lg transition-all duration-300 animate-bounce"
      aria-label="Call now"
    >
      <Phone size={24} />
    </a>
  )
}
