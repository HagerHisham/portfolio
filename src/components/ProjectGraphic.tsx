import React from 'react'

interface ProjectGraphicProps {
  type: 'gotrack' | 'nlp' | 'ml-classification' | 'courses'
  className?: string
}

export const ProjectGraphic: React.FC<ProjectGraphicProps> = ({ type, className = '' }) => {
  if (type === 'gotrack') {
    return (
      <div className={`relative w-full h-48 sm:h-52 bg-forest-900 rounded-t-xl overflow-hidden p-4 flex flex-col justify-between text-offwhite border-b border-forest-800 ${className}`}>
        {/* Subtle background grid */}
        <div className="absolute inset-0 opacity-10 bg-grid-pattern pointer-events-none" />
        
        {/* Top bar with architecture badge */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span className="text-xs font-mono font-medium text-forest-200">MICROSERVICES ARCHITECTURE</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-forest-800 text-forest-300 border border-forest-700">
            Spring Boot 3 + PostgreSQL
          </span>
        </div>

        {/* Technical Architecture Diagram */}
        <div className="relative z-10 my-auto grid grid-cols-3 gap-2 items-center">
          {/* Microservice 1: Client / Gateway */}
          <div className="bg-forest-800/90 border border-forest-700/80 rounded p-2 text-center shadow-sm">
            <div className="text-[10px] font-mono text-forest-400 uppercase tracking-wider">Gateway</div>
            <div className="text-xs font-semibold text-offwhite mt-0.5">REST APIs</div>
            <div className="text-[9px] text-forest-300 mt-1 font-mono">JWT / RBAC</div>
          </div>

          {/* Microservice 2: Highlighted Service implemented by Hager */}
          <div className="bg-forest-700 border-2 border-emerald-400/80 rounded p-2 text-center shadow-md relative">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-emerald-500 text-forest-950 text-[8px] font-bold px-1.5 py-0.2 rounded-full uppercase">
              Core Implemented
            </div>
            <div className="text-[10px] font-mono text-emerald-300 uppercase tracking-wider">Target Service</div>
            <div className="text-xs font-bold text-white mt-0.5">User & Branch</div>
            <div className="text-[9px] text-emerald-200 mt-1 font-mono">JPA Specs · Soft Del</div>
          </div>

          {/* Database & Cloud */}
          <div className="bg-forest-800/90 border border-forest-700/80 rounded p-2 text-center shadow-sm">
            <div className="text-[10px] font-mono text-forest-400 uppercase tracking-wider">Persistence</div>
            <div className="text-xs font-semibold text-offwhite mt-0.5">PostgreSQL</div>
            <div className="text-[9px] text-forest-300 mt-1 font-mono">Docker Compose</div>
          </div>
        </div>

        {/* Footer specs */}
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-forest-300/90 pt-2 border-t border-forest-800/60">
          <span>AWS ECS Ready</span>
          <span className="text-emerald-300 flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Layered Arch
          </span>
        </div>
      </div>
    )
  }

  if (type === 'nlp') {
    return (
      <div className={`relative w-full h-48 sm:h-52 bg-[#1A2621] rounded-t-xl overflow-hidden p-4 flex flex-col justify-between text-offwhite border-b border-forest-800 ${className}`}>
        <div className="absolute inset-0 opacity-10 bg-dots-pattern pointer-events-none" />
        
        {/* Top Header */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400"></span>
            <span className="text-xs font-mono font-medium text-forest-200">NLP & RETRIEVAL PIPELINE</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-forest-800 text-teal-300 border border-forest-700">
            TF-IDF + RNN
          </span>
        </div>

        {/* Text Vectorization and Sequential Flow */}
        <div className="relative z-10 my-auto space-y-2">
          {/* Query & Preprocessing Stage */}
          <div className="flex items-center space-x-2 text-[10px] font-mono">
            <span className="px-2 py-1 rounded bg-forest-900 border border-forest-700 text-forest-200">
              Query Tokens
            </span>
            <span className="text-forest-400">→</span>
            <span className="px-2 py-1 rounded bg-forest-900 border border-forest-700 text-teal-200">
              Stop-Word & Stem
            </span>
            <span className="text-forest-400">→</span>
            <span className="px-2 py-1 rounded bg-forest-900 border border-forest-700 text-forest-200">
              Vector Space
            </span>
          </div>

          {/* Model representation */}
          <div className="bg-forest-900/80 border border-forest-800 rounded-lg p-2.5 flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="text-[10px] font-mono text-teal-300">Representation Model:</div>
              <div className="text-xs font-mono text-white flex items-center gap-2">
                <span>W_tfidf = tf × log(N/df)</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[10px] font-mono text-forest-400">Sequence Layer:</div>
              <div className="text-xs font-mono text-emerald-300 font-semibold">RNN Hidden States [h_t]</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-forest-300/90 pt-2 border-t border-forest-800/60">
          <span>Academic Information Retrieval</span>
          <span className="text-teal-300 font-mono">Cosine Similarity Ranking</span>
        </div>
      </div>
    )
  }

  if (type === 'ml-classification') {
    return (
      <div className={`relative w-full h-48 sm:h-52 bg-[#17261F] rounded-t-xl overflow-hidden p-4 flex flex-col justify-between text-offwhite border-b border-forest-800 ${className}`}>
        <div className="absolute inset-0 opacity-10 bg-grid-pattern pointer-events-none" />

        {/* Header */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
            <span className="text-xs font-mono font-medium text-forest-200">CLASSIFICATION PIPELINE</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-forest-800 text-amber-300 border border-forest-700">
            Supervised Learning
          </span>
        </div>

        {/* Pipeline Schema */}
        <div className="relative z-10 my-auto grid grid-cols-4 gap-1.5 text-center">
          <div className="bg-forest-900/90 border border-forest-800 rounded p-1.5">
            <div className="text-[9px] font-mono text-forest-400">Dataset</div>
            <div className="text-[11px] font-semibold text-white mt-0.5">Raw Features</div>
            <div className="text-[8px] text-forest-400 font-mono mt-0.5">X, y Matrix</div>
          </div>
          <div className="bg-forest-900/90 border border-forest-800 rounded p-1.5">
            <div className="text-[9px] font-mono text-forest-400">Preprocessing</div>
            <div className="text-[11px] font-semibold text-white mt-0.5">Scaling & Split</div>
            <div className="text-[8px] text-forest-400 font-mono mt-0.5">Train / Test</div>
          </div>
          <div className="bg-forest-800 border border-amber-500/50 rounded p-1.5">
            <div className="text-[9px] font-mono text-amber-300">Model</div>
            <div className="text-[11px] font-bold text-white mt-0.5">Classifier</div>
            <div className="text-[8px] text-amber-200 font-mono mt-0.5">Fit & Tune</div>
          </div>
          <div className="bg-forest-900/90 border border-forest-800 rounded p-1.5">
            <div className="text-[9px] font-mono text-forest-400">Validation</div>
            <div className="text-[11px] font-semibold text-white mt-0.5">Metrics</div>
            <div className="text-[8px] text-forest-400 font-mono mt-0.5">P, R, F1, ROC</div>
          </div>
        </div>

        {/* Metric Bar Indicator */}
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-forest-300/90 pt-2 border-t border-forest-800/60">
          <span>Python · Scikit-Learn</span>
          <span className="text-amber-300 font-mono">Academic Benchmark</span>
        </div>
      </div>
    )
  }

  // Courses Website
  return (
    <div className={`relative w-full h-48 sm:h-52 bg-[#1C2822] rounded-t-xl overflow-hidden p-4 flex flex-col justify-between text-offwhite border-b border-forest-800 ${className}`}>
      {/* Browser chrome header */}
      <div className="relative z-10 flex items-center justify-between border-b border-forest-800/80 pb-2">
        <div className="flex items-center space-x-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></span>
          <span className="ml-2 text-[10px] font-mono text-forest-400">courses-portal.local</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-forest-800 text-forest-200">
          HTML5 / CSS3 / JS
        </span>
      </div>

      {/* Mock layout representation */}
      <div className="relative z-10 my-auto space-y-2">
        <div className="flex items-center justify-between bg-forest-900/90 p-2 rounded border border-forest-800">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded bg-emerald-600/60 flex items-center justify-center text-[9px] font-bold text-white">C</div>
            <span className="text-xs font-medium text-white">Course Catalog & Filters</span>
          </div>
          <div className="flex space-x-1">
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-forest-800 text-forest-300">All</span>
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-forest-800 text-forest-300">Tech</span>
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-forest-800 text-forest-300">Design</span>
          </div>
        </div>

        {/* Sample Course Cards Grid */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-forest-900/70 border border-forest-800/90 rounded p-1.5">
            <div className="w-full h-1.5 bg-forest-700 rounded mb-1"></div>
            <div className="w-3/4 h-1 bg-forest-800 rounded"></div>
          </div>
          <div className="bg-forest-900/70 border border-forest-800/90 rounded p-1.5">
            <div className="w-full h-1.5 bg-forest-700 rounded mb-1"></div>
            <div className="w-2/3 h-1 bg-forest-800 rounded"></div>
          </div>
          <div className="bg-forest-900/70 border border-forest-800/90 rounded p-1.5">
            <div className="w-full h-1.5 bg-forest-700 rounded mb-1"></div>
            <div className="w-1/2 h-1 bg-forest-800 rounded"></div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-forest-300/90 pt-1">
        <span>Responsive Frontend</span>
        <span className="text-emerald-300 font-mono">Clean DOM UI</span>
      </div>
    </div>
  )
}
