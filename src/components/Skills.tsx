import React, { useState } from 'react'
import { skillCategories } from '../data/portfolioData'
import { SectionTitle } from './ui/SectionTitle'
import { Badge } from './ui/Badge'
import { Code2, Layers, Wrench, BrainCircuit, Check, ShieldCheck } from 'lucide-react'

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5" />
      case 'Layers':
        return <Layers className="w-5 h-5" />
      case 'Wrench':
        return <Wrench className="w-5 h-5" />
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5" />
      default:
        return <Code2 className="w-5 h-5" />
    }
  }

  const displayedCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory)

  return (
    <section id="skills" className="py-20 md:py-28 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Technical Skills"
          title="Skills & Technologies"
          subtitle="A transparent overview of programming languages, architectures, tools, and AI concepts I have genuinely studied and applied in projects."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeCategory === 'all'
                ? 'bg-forest-800 text-offwhite shadow-sm'
                : 'bg-white text-charcoal-700 border border-charcoal-200 hover:border-forest-400'
            }`}
          >
            All Disciplines ({skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeCategory === cat.id
                  ? 'bg-forest-800 text-offwhite shadow-sm'
                  : 'bg-white text-charcoal-700 border border-charcoal-200 hover:border-forest-400'
              }`}
            >
              <span>{cat.title}</span>
              <span className="text-[11px] opacity-75 font-mono">({cat.skills.length})</span>
            </button>
          ))}
        </div>

        {/* Skills Grid by Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-2xl border border-charcoal-200/80 p-6 sm:p-7 shadow-subtle hover:border-forest-300 hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 border-b border-charcoal-100 mb-5">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-xl bg-forest-50 text-forest-800">
                      {getCategoryIcon(category.icon)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-charcoal-900">
                        {category.title}
                      </h3>
                      <p className="text-xs text-charcoal-500">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <Badge variant="forest" size="sm">
                    {category.skills.length} competencies
                  </Badge>
                </div>

                {/* Skills List with Context Details */}
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group p-3 rounded-xl bg-offwhite hover:bg-forest-50/50 border border-charcoal-200/60 hover:border-forest-200 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-charcoal-900 group-hover:text-forest-900">
                          {skill.name}
                        </span>
                        <Check className="w-4 h-4 text-forest-600 opacity-60 group-hover:opacity-100 transition-opacity" />
                      </div>
                      {skill.detail && (
                        <p className="text-xs text-charcoal-600 mt-1 leading-relaxed">
                          {skill.detail}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Footer Note */}
              <div className="mt-6 pt-4 border-t border-charcoal-100 flex items-center justify-between text-[11px] text-charcoal-500 font-mono">
                <span>Practiced in university & programs</span>
                <span className="text-forest-700 font-medium">Applied Knowledge</span>
              </div>
            </div>
          ))}
        </div>

        {/* No Invented Proficiency Statement */}
        <div className="mt-12 p-4 rounded-xl bg-forest-50/60 border border-forest-200/60 max-w-2xl mx-auto text-center flex items-center justify-center gap-2 text-xs text-forest-900">
          <ShieldCheck className="w-4 h-4 text-forest-700 shrink-0" />
          <span>
            <strong>Authentic Representation:</strong> Skills represent tools and concepts practiced in coursework, team engineering projects, or certified training tracks—without inflated percentage ratings.
          </span>
        </div>
      </div>
    </section>
  )
}
