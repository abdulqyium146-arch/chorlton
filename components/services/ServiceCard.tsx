import Link from 'next/link'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/cn'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
  className?: string
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  href,
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        'group block p-6 sm:p-8 rounded-xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-2 transition-all duration-300',
        className
      )}
    >
      <Link href={href} className="block">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-amber-400 to-amber-500 rounded-lg flex items-center justify-center text-white group-hover:shadow-lg transition-all duration-300">
            <Icon size={24} />
          </div>
          <ArrowRight
            size={20}
            className="text-slate-400 group-hover:text-amber-400 transition-colors opacity-0 group-hover:opacity-100"
          />
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-slate-950 mb-2">
          {title}
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed">
          {description}
        </p>

        <div className="mt-4 text-amber-400 font-semibold text-sm group-hover:translate-x-1 transition-transform">
          Learn More →
        </div>
      </Link>
    </div>
  )
}
