import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'forest' | 'olive' | 'neutral' | 'outline' | 'accent'
  size?: 'sm' | 'md'
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'forest',
  size = 'md',
  className = ''
}) => {
  const baseClasses = 'inline-flex items-center font-medium rounded-full transition-colors'
  
  const sizeClasses = {
    sm: 'text-xs px-2.5 py-0.5 gap-1',
    md: 'text-xs px-3 py-1 gap-1.5'
  }

  const variantClasses = {
    forest: 'bg-forest-50 text-forest-800 border border-forest-200/60',
    olive: 'bg-olive-50 text-olive-800 border border-olive-200/60',
    neutral: 'bg-charcoal-100 text-charcoal-800 border border-charcoal-200/50',
    outline: 'bg-transparent text-charcoal-700 border border-charcoal-300',
    accent: 'bg-forest-800 text-offwhite-50 border border-forest-900'
  }

  return (
    <span className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  )
}
