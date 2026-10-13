import React from 'react'
import { experienceTimeline } from '../data/portfolioData'
import { SectionTitle } from './ui/SectionTitle'
import { Badge } from './ui/Badge'
import { Calendar, Globe2, Sparkles, Award, Users, Bot, Briefcase, CheckCircle2 } from 'lucide-react'

export const Experience: React.FC = () => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Global Program':
        return <Globe2 className="w-4 h-4 text-forest-700" />
      case 'Initiative':
        return <Sparkles className="w-4 h-4 text-forest-700" />
      case 'Training':
        return <Award className="w-4 h-4 text-forest-700" />
      case 'Extracurricular':
        return <Users className="w-4 h-4 text-forest-700" />
      case 'Volunteer':
        return <Bot className="w-4 h-4 text-forest-700" />
      default:
        return <Briefcase className="w-4 h-4 text-forest-700" />
    }
  }

  return (
    <section id="experience" className="py-20 md:py-28 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Track Record"
          title="Experience & Extracurricular Activities"
          subtitle="A timeline of competitive international programs, national AI initiatives, technical summer trainings, and university leadership roles."
        />

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central spine on larger screens, left spine on mobile */}
          <div className="absolute top-2 bottom-2 left-4 md:left-1/2 -translate-x-1/2 w-0.5 bg-forest-200/80" />

          <div className="space-y-12">
            {experienceTimeline.map((item, index) => {
              const isEven = index % 2 === 0

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-forest-600 flex items-center justify-center shadow-sm z-10">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        item.isOngoing ? 'bg-forest-600 animate-pulse' : 'bg-charcoal-400'
                      }`}
                    />
                  </div>

                  {/* Card Content (Occupies half width on md+) */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      isEven ? 'md:pr-10' : 'md:pl-10'
                    }`}
                  >
                    <div className="bg-white rounded-2xl border border-charcoal-200/80 p-6 sm:p-7 shadow-subtle hover:border-forest-300 hover:shadow-card transition-all">
                      
                      {/* Top Meta info */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-charcoal-100">
                        <div className="flex items-center gap-1.5">
                          {getTypeIcon(item.type)}
                          <span className="text-xs font-semibold text-charcoal-600 uppercase tracking-wider">
                            {item.type}
                          </span>
                        </div>
                        <Badge
                          variant={item.isOngoing ? 'forest' : 'neutral'}
                          size="sm"
                        >
                          {item.statusBadge}
                        </Badge>
                      </div>

                      {/* Title & Organization */}
                      <div className="mt-3">
                        <h3 className="text-lg font-bold text-charcoal-950">
                          {item.title}
                        </h3>
                        <div className="text-sm font-semibold text-forest-800 mt-0.5">
                          {item.organization}
                        </div>
                        {item.subOrganization && (
                          <div className="text-xs text-charcoal-500 font-medium">
                            {item.subOrganization}
                          </div>
                        )}
                      </div>

                      {/* Date Indicator */}
                      <div className="flex items-center gap-1.5 text-xs text-charcoal-500 font-mono mt-2 mb-4">
                        <Calendar className="w-3.5 h-3.5 text-charcoal-400" />
                        <span>{item.period}</span>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-2 mb-4">
                        {item.highlights.map((hl, hIdx) => (
                          <li
                            key={hIdx}
                            className="flex items-start gap-2 text-xs sm:text-sm text-charcoal-700 leading-relaxed"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-forest-600 mt-1 shrink-0" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Note if any */}
                      {item.note && (
                        <p className="text-[11px] text-charcoal-500 italic bg-offwhite p-2 rounded-lg border border-charcoal-200/50 mb-3">
                          * {item.note}
                        </p>
                      )}

                      {/* Skills Applied Tags */}
                      <div className="pt-3 border-t border-charcoal-100 flex flex-wrap gap-1.5">
                        {item.skillsApplied.map((sk) => (
                          <span
                            key={sk}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-forest-50 text-forest-800 border border-forest-200/60"
                          >
                            {sk}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
