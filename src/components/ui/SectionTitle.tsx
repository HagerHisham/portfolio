import React from 'react'
import { Badge } from './Badge'

interface SectionTitleProps {
  badge?: string
  title: string
  subtitle?: string
  alignment?: 'left' | 'center'
  className?: string
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  badge,
  title,
  subtitle,
  alignment = 'center',
  className = ''
}) => {
  const alignClasses = alignment === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col mb-12 sm:mb-16 ${alignClasses} ${className}`}>
      {badge && (
        <div className="mb-3">
          <Badge variant="forest" size="md">
            <span className="w-1.5 h-1.5 rounded-full bg-forest-600 inline-block animate-pulse"></span>
            {badge}
          </Badge>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-charcoal-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-charcoal-600 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`w-12 h-1 bg-forest-600/30 rounded-full mt-4 ${alignment === 'center' ? 'mx-auto' : ''}`} />
    </div>
  )
}
