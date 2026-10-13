import React from 'react'
import { personalInfo } from '../data/portfolioData'
import { Badge } from './ui/Badge'
import { ArrowRight, Mail, GraduationCap, Award, Calendar, Terminal, ShieldCheck } from 'lucide-react'

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-offwhite">
      {/* Background subtle elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-forest-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-olive-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status & University Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="forest" size="md">
                <span className="w-2 h-2 rounded-full bg-forest-600 animate-pulse"></span>
                <span>{personalInfo.faculty} · {personalInfo.university}</span>
              </Badge>
              <Badge variant="neutral" size="md">
                <span>Class of {personalInfo.graduationYear}</span>
              </Badge>
            </div>

            {/* Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-charcoal-950 leading-[1.1]">
                Hi, I'm <span className="text-forest-800">{personalInfo.name}</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-charcoal-700 tracking-tight">
                {personalInfo.title}
              </p>
            </div>

            {/* Introduction Paragraph */}
            <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed max-w-2xl text-balance">
              {personalInfo.introduction}
            </p>

            {/* Focus Statement */}
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-forest-900 font-medium bg-forest-50/80 border border-forest-200/70 p-3 rounded-xl max-w-xl">
              <Terminal className="w-4 h-4 text-forest-700 shrink-0" />
              <span>
                Focused on developing practical AI pipelines, clean Spring Boot backends, and reliable software architectures.
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-forest-800 hover:bg-forest-900 text-offwhite text-sm font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-charcoal-50 text-charcoal-800 border border-charcoal-300 text-sm font-semibold transition-all shadow-sm hover:shadow"
              >
                <Mail className="w-4 h-4 text-forest-700" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick credentials / Trust indicators */}
            <div className="pt-6 border-t border-charcoal-200/60 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-forest-900 font-mono">
                  {personalInfo.gpa} <span className="text-xs text-charcoal-500 font-sans font-normal">/ {personalInfo.maxGpa}</span>
                </div>
                <div className="text-xs text-charcoal-600 font-medium">Cumulative GPA</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-forest-900 font-mono">2026</div>
                <div className="text-xs text-charcoal-600 font-medium">Expected Graduation</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-forest-900 font-mono">Top Labs</div>
                <div className="text-xs text-charcoal-600 font-medium">GCI Tokyo & DEPI</div>
              </div>
            </div>
          </div>

          {/* Right Visual Technical Card (Cols 8-12) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative card frame */}
              <div className="rounded-2xl bg-white border border-charcoal-200/90 shadow-card p-6 sm:p-7 relative z-10 space-y-6">
                
                {/* Header of tech card */}
                <div className="flex items-center justify-between pb-4 border-b border-charcoal-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-forest-600"></div>
                    <span className="text-xs font-mono font-semibold text-charcoal-700 tracking-wider">
                      STUDENT PROFILE & SNAPSHOT
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-forest-50 text-forest-800 font-medium">
                    Verified Bio
                  </span>
                </div>

                {/* Profile attributes */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-forest-50 text-forest-800 shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-charcoal-500">Institution</div>
                      <div className="text-sm font-semibold text-charcoal-900">
                        {personalInfo.faculty}
                      </div>
                      <div className="text-xs text-charcoal-600">
                        {personalInfo.university}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-olive-50 text-olive-800 shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-charcoal-500">Academic Standing</div>
                      <div className="text-sm font-semibold text-charcoal-900">
                        GPA: {personalInfo.gpa} / {personalInfo.maxGpa}
                      </div>
                      <div className="text-xs text-charcoal-600">
                        Strong foundation in Algorithms & System Architecture
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-charcoal-100 text-charcoal-800 shrink-0">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-charcoal-500">Timeline & Availability</div>
                      <div className="text-sm font-semibold text-charcoal-900">
                        Graduating 2026
                      </div>
                      <div className="text-xs text-charcoal-600">
                        Available for internships & junior engineering opportunities
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technical Stack Tags in Hero Graphic */}
                <div className="pt-4 border-t border-charcoal-100">
                  <div className="text-xs font-mono text-charcoal-500 mb-2">Core Technical Stack:</div>
                  <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                    <span className="px-2 py-1 rounded bg-forest-50 text-forest-800 border border-forest-200">Python</span>
                    <span className="px-2 py-1 rounded bg-forest-50 text-forest-800 border border-forest-200">Java</span>
                    <span className="px-2 py-1 rounded bg-forest-50 text-forest-800 border border-forest-200">Spring Boot</span>
                    <span className="px-2 py-1 rounded bg-forest-50 text-forest-800 border border-forest-200">Machine Learning</span>
                    <span className="px-2 py-1 rounded bg-forest-50 text-forest-800 border border-forest-200">PostgreSQL</span>
                    <span className="px-2 py-1 rounded bg-forest-50 text-forest-800 border border-forest-200">Docker</span>
                  </div>
                </div>

                {/* Professional Credibility Notice */}
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-offwhite text-charcoal-600 text-[11px]">
                  <ShieldCheck className="w-4 h-4 text-forest-700 shrink-0" />
                  <span>Real coursework, verified team projects, and competitive programs.</span>
                </div>
              </div>

              {/* Decorative shadow accent */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl bg-forest-800/10 -z-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
