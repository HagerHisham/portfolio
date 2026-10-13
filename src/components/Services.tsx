import React from 'react'
import { services } from '../data/portfolioData'
import { SectionTitle } from './ui/SectionTitle'
import { Badge } from './ui/Badge'
import { Server, BarChart3, Sparkles, Layout, ArrowRight, ShieldCheck } from 'lucide-react'

export const Services: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return <Server className="w-5 h-5 text-forest-800" />
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-forest-800" />
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-forest-800" />
      case 'Layout':
        return <Layout className="w-5 h-5 text-forest-800" />
      default:
        return <Server className="w-5 h-5 text-forest-800" />
    }
  }

  return (
    <section id="services" className="py-20 md:py-28 bg-white border-y border-charcoal-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Collaboration & Services"
          title="Ways We Can Collaborate"
          subtitle="Services grounded in my current proven skill set—suitable for internships, university projects, early-stage prototypes, and small team initiatives."
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-offwhite rounded-2xl border border-charcoal-200/80 p-6 sm:p-8 shadow-subtle hover:border-forest-300 hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 rounded-xl bg-forest-100 text-forest-800 shrink-0">
                    {getServiceIcon(service.icon)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal-900">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-forest-700">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-charcoal-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2 mb-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-500 block">
                    Typical Deliverables:
                  </span>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-charcoal-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-forest-600 mt-2 shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies & CTA */}
              <div className="pt-5 border-t border-charcoal-200/70">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-white text-charcoal-700 border border-charcoal-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={`#contact?subject=${encodeURIComponent(`Inquiry regarding ${service.title}`)}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest-800 hover:text-forest-950 transition-colors group"
                >
                  <span>Discuss this scope with me</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Realistic Scope Notice */}
        <div className="mt-12 p-4 rounded-xl bg-forest-50/60 border border-forest-200/60 max-w-2xl mx-auto text-center flex items-center justify-center gap-2 text-xs text-forest-900">
          <ShieldCheck className="w-4 h-4 text-forest-700 shrink-0" />
          <span>
            <strong>Ground Rules:</strong> These offerings reflect practical student-level and junior capabilities. I deliver honest technical work without making unsubstantiated promises or pretending to replace senior engineering teams.
          </span>
        </div>
      </div>
    </section>
  )
}
