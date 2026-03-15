import React from 'react'
import { TESTIMONIALS } from '@/lib/theme'
import { TestimonialCard } from './TestimonialCard'

export function TestimonialSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {TESTIMONIALS.map((testimonial) => (
        <TestimonialCard
          key={testimonial.id}
          name={testimonial.name}
          service={testimonial.service}
          rating={testimonial.rating}
          text={testimonial.text}
        />
      ))}
    </div>
  )
}
