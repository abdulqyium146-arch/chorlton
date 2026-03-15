import React from 'react'
import { Star } from 'lucide-react'
import { cn } from '@/lib/cn'

interface TestimonialCardProps {
  name: string
  service: string
  rating: number
  text: string
  className?: string
}

export function TestimonialCard({
  name,
  service,
  rating,
  text,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'p-6 bg-white border-l-4 border-amber-400 rounded-lg shadow-md hover:shadow-lg transition-shadow',
        className
      )}
    >
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="font-semibold text-slate-950">{name}</p>
          <p className="text-sm text-slate-600">{service}</p>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: rating }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className="fill-amber-400 text-amber-400"
            />
          ))}
        </div>
      </div>
      <p className="text-slate-700 text-sm leading-relaxed">"{text}"</p>
    </div>
  )
}
