import React, { useEffect } from 'react'
import { Project } from '../types/portfolio'
import { ProjectGraphic } from './ProjectGraphic'
import { Badge } from './ui/Badge'
import { X, Github, ExternalLink, CheckCircle2, AlertCircle, Info, Layers, FileCode } from 'lucide-react'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (project) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-charcoal-950/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-offwhite-50 rounded-2xl shadow-2xl border border-charcoal-200/80 text-charcoal-900 transition-all my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 z-20 p-2 text-offwhite bg-charcoal-900/60 hover:bg-charcoal-900 rounded-full transition-colors focus:ring-2 focus:ring-forest-500"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Graphic Banner */}
        <div className="w-full">
          <ProjectGraphic type={project.graphicType} className="h-44 sm:h-52" />
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Header & Badges */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Badge variant="forest" size="md">{project.category}</Badge>
              {project.isPlaceholderLinks && (
                <Badge variant="olive" size="md">
                  <Info className="w-3 h-3 mr-1" /> Academic Project
                </Badge>
              )}
            </div>
            <h2 id="modal-title" className="text-xl sm:text-2xl font-bold text-charcoal-950">
              {project.title}
            </h2>
            <p className="text-sm font-medium text-forest-700 mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Full Description */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-charcoal-500">
              Project Overview
            </h3>
            <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Architecture Highlights if any */}
          {project.architectureHighlights && project.architectureHighlights.length > 0 && (
            <div className="p-4 rounded-xl bg-forest-50/70 border border-forest-100 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-forest-900">
                <Layers className="w-4 h-4 text-forest-700" />
                <span>Architecture Highlights</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-forest-900">
                {project.architectureHighlights.map((arch, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest-600"></span>
                    <span>{arch}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Academic Specifications / Fields (For NLP and ML Classification) */}
          {project.academicDetails && (
            <div className="p-4 sm:p-5 rounded-xl bg-olive-50/60 border border-olive-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-olive-900">
                  <FileCode className="w-4 h-4 text-olive-700" />
                  <span>Academic Specifications & Methodology</span>
                </div>
                {project.academicDetails.isPendingUserSpecs && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-olive-200/60 text-olive-900">
                    Customizable Fields
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {project.academicDetails.problem && (
                  <div className="bg-white p-2.5 rounded-lg border border-olive-100">
                    <div className="text-[10px] font-medium text-charcoal-500 uppercase">Problem Focus</div>
                    <div className="text-charcoal-800 font-medium mt-0.5">{project.academicDetails.problem}</div>
                  </div>
                )}
                {project.academicDetails.dataset && (
                  <div className="bg-white p-2.5 rounded-lg border border-olive-100">
                    <div className="text-[10px] font-medium text-charcoal-500 uppercase">Dataset / Corpus</div>
                    <div className="text-charcoal-800 font-medium mt-0.5">{project.academicDetails.dataset}</div>
                  </div>
                )}
                {project.academicDetails.preprocessing && (
                  <div className="bg-white p-2.5 rounded-lg border border-olive-100">
                    <div className="text-[10px] font-medium text-charcoal-500 uppercase">Preprocessing Pipeline</div>
                    <div className="text-charcoal-800 font-medium mt-0.5">{project.academicDetails.preprocessing}</div>
                  </div>
                )}
                {project.academicDetails.modelArchitecture && (
                  <div className="bg-white p-2.5 rounded-lg border border-olive-100">
                    <div className="text-[10px] font-medium text-charcoal-500 uppercase">Model Architecture</div>
                    <div className="text-charcoal-800 font-medium mt-0.5">{project.academicDetails.modelArchitecture}</div>
                  </div>
                )}
                {project.academicDetails.evaluationMetrics && (
                  <div className="bg-white p-2.5 rounded-lg border border-olive-100">
                    <div className="text-[10px] font-medium text-charcoal-500 uppercase">Evaluation Metrics</div>
                    <div className="text-charcoal-800 font-medium mt-0.5">{project.academicDetails.evaluationMetrics}</div>
                  </div>
                )}
                {project.academicDetails.results && (
                  <div className="bg-white p-2.5 rounded-lg border border-olive-100">
                    <div className="text-[10px] font-medium text-charcoal-500 uppercase">Results / Benchmark</div>
                    <div className="text-charcoal-800 font-medium mt-0.5">{project.academicDetails.results}</div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Key Contributions */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-charcoal-500">
              Key Contributions & Engineering Details
            </h3>
            <ul className="space-y-2">
              {project.keyContributions.map((contrib, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-800 leading-normal">
                  <CheckCircle2 className="w-4 h-4 text-forest-600 mt-0.5 shrink-0" />
                  <span>{contrib}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div className="space-y-2 pt-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-charcoal-500">
              Technologies & Methodologies
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-charcoal-100 text-charcoal-800 border border-charcoal-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Links / Placeholder notice */}
          <div className="pt-4 border-t border-charcoal-200/70 flex flex-wrap items-center justify-between gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-forest-800 hover:bg-forest-900 text-offwhite text-sm font-medium transition-colors shadow-sm"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            ) : (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-olive-50 text-olive-900 text-xs border border-olive-200">
                <AlertCircle className="w-4 h-4 shrink-0 text-olive-700" />
                <span>
                  {project.placeholderNote || "Repository link reserved for addition in src/data/portfolioData.ts"}
                </span>
              </div>
            )}

            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-charcoal-300 hover:bg-charcoal-100 text-charcoal-800 text-sm font-medium transition-colors ml-auto"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
