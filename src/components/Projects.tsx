import React, { useState } from 'react'
import { projects } from '../data/portfolioData'
import { Project, ProjectCategory } from '../types/portfolio'
import { SectionTitle } from './ui/SectionTitle'
import { Badge } from './ui/Badge'
import { ProjectGraphic } from './ProjectGraphic'
import { Github, ArrowUpRight, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react'

interface ProjectsProps {
  onSelectProject: (project: Project) => void
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All')

  const categories: ProjectCategory[] = ['All', 'Software & Backend', 'AI & ML', 'Web']

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory)

  return (
    <section id="projects" className="py-20 md:py-28 bg-white border-y border-charcoal-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Featured Work"
          title="Projects & Implementations"
          subtitle="A selection of team microservice platforms, natural language processing experiments, machine learning pipelines, and responsive web applications."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-forest-800 text-offwhite shadow-sm'
                  : 'bg-offwhite text-charcoal-700 border border-charcoal-200 hover:border-forest-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-offwhite rounded-2xl border border-charcoal-200/80 shadow-subtle hover:border-forest-300 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Project Graphic / Visual Header */}
                <div
                  className="cursor-pointer overflow-hidden"
                  onClick={() => onSelectProject(project)}
                >
                  <ProjectGraphic type={project.graphicType} />
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  {/* Category and Academic status badge */}
                  <div className="flex items-center justify-between">
                    <Badge variant="forest" size="sm">
                      {project.category}
                    </Badge>
                    {project.isPlaceholderLinks ? (
                      <span className="text-[11px] font-mono text-olive-700 bg-olive-100/60 px-2 py-0.5 rounded border border-olive-200/60">
                        Academic Research
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded border border-emerald-200/60">
                        Team Architecture
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3
                      onClick={() => onSelectProject(project)}
                      className="text-xl font-bold text-charcoal-900 group-hover:text-forest-800 transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-forest-700 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Short Description */}
                  <p className="text-sm text-charcoal-600 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Key Contributions Preview */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-500 block">
                      Key Contributions:
                    </span>
                    <ul className="space-y-1.5">
                      {project.keyContributions.slice(0, 3).map((contrib, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-charcoal-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-forest-600 mt-0.5 shrink-0" />
                          <span className="line-clamp-2">{contrib}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Pills */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-white text-charcoal-700 border border-charcoal-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-1.5 py-0.5 text-[11px] font-mono text-charcoal-500">
                        +{project.technologies.length - 5} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 sm:p-7 sm:pt-0">
                <div className="pt-4 border-t border-charcoal-200/60 flex items-center justify-between gap-2">
                  {/* Left Action / GitHub Link */}
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-charcoal-800 hover:text-forest-800 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>HelwanDevs Repo</span>
                      <ArrowUpRight className="w-3 h-3 opacity-70" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] text-charcoal-500 italic">
                      <AlertCircle className="w-3.5 h-3.5 text-charcoal-400" />
                      <span>Repo placeholder</span>
                    </span>
                  )}

                  {/* Right Action / Detailed modal trigger */}
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-forest-800 hover:text-forest-950 px-3 py-1.5 rounded-lg bg-forest-50 hover:bg-forest-100 transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom helper card for updating projects */}
        <div className="mt-12 p-4 rounded-xl bg-offwhite border border-charcoal-200 text-center max-w-xl mx-auto text-xs text-charcoal-600">
          <p>
            <strong className="text-charcoal-800">For Hager:</strong> All project descriptions, repository links, and academic benchmarks can be edited directly in <code className="bg-charcoal-100 px-1.5 py-0.5 rounded font-mono text-forest-800">src/data/portfolioData.ts</code>.
          </p>
        </div>
      </div>
    </section>
  )
}
