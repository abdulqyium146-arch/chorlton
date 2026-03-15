'use client'

import Link from 'next/link'
import { cn } from '@/lib/cn'
import { Phone } from 'lucide-react'

interface CTAButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  icon?: React.ReactNode
  isPhoneLink?: boolean
}

export function CTAButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  icon,
  isPhoneLink,
}: CTAButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-bold rounded-lg transition-all duration-300 cursor-pointer'

  const variants = {
    primary:
      'bg-amber-400 hover:bg-amber-500 text-slate-950 shadow-md hover:shadow-lg hover:-translate-y-0.5',
    secondary:
      'bg-white border-2 border-amber-400 text-amber-400 hover:bg-amber-50',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = cn(baseStyles, variants[variant], sizes[size], className)

  if (href) {
    return (
      <Link href={href} className={classes}>
        {icon || (isPhoneLink && <Phone size={20} />)}
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {icon || (isPhoneLink && <Phone size={20} />)}
      {children}
    </button>
  )
}
