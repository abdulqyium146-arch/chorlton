import React from 'react'
import { cn } from '@/lib/cn'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeading({
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'space-y-2 mb-10',
        centered && 'text-center',
        className
      )}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-950">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-slate-600 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}
