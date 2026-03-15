import React from 'react'
import { SERVICES } from '@/lib/theme'
import { ServiceCard } from './ServiceCard'
import {
  AlertCircle,
  Home,
  Building2,
  Wrench,
  Key,
  Lock,
} from 'lucide-react'

const iconMap: Record<string, any> = {
  AlertCircle,
  Home,
  Building2,
  Wrench,
  Key,
  Lock,
}

export function ServiceGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {SERVICES.map((service) => {
        const IconComponent = iconMap[service.icon] || Key
        return (
          <ServiceCard
            key={service.id}
            title={service.name}
            description={service.description}
            icon={IconComponent}
            href={`/services/${service.slug}`}
          />
        )
      })}
    </div>
  )
}
