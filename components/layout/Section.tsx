import React from 'react'
import { cn } from '@/lib/cn'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  backgroundVariant?: 'light' | 'dark' | 'accent'
}

export function Section({
  children,
  className,
  id,
  backgroundVariant = 'light',
}: SectionProps) {
  const bgVariants = {
    light: 'bg-white',
    dark: 'bg-slate-950 text-white',
    accent: 'bg-slate-50',
  }

  return (
    <section
      id={id}
      className={cn(
        'py-12 sm:py-16 lg:py-20',
        bgVariants[backgroundVariant],
        className
      )}
    >
      {children}
    </section>
  )
}
