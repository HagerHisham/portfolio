import React from 'react'
import { personalInfo } from '../data/portfolioData'
import { SectionTitle } from './ui/SectionTitle'
import { Badge } from './ui/Badge'
import { BookOpen, Users, Cpu, Code, CheckCircle } from 'lucide-react'

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white border-y border-charcoal-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="About Me"
          title="Background & Academic Journey"
          subtitle="A dedicated Computer Science student combining academic foundations with hands-on technical initiatives and collaborative student leadership."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-6 text-charcoal-700 leading-relaxed text-base sm:text-lg">
            <p>
              I am an undergraduate Computer Science student at the{' '}
              <strong className="text-charcoal-900 font-semibold">
                Faculty of Computers and Artificial Intelligence, Helwan University
              </strong>{' '}
              (graduating in 2027 with a current cumulative GPA of{' '}
              <strong className="text-forest-800 font-semibold font-mono">3.45 / 4.0</strong>). My academic path is centered around Artificial Intelligence, Machine Learning, and Software Development.
            </p>

            <p>
              Rather than resting solely on curriculum coursework, I actively cultivate my engineering capabilities through competitive training programs. I am currently participating in the prestigious, fully funded{' '}
              <strong className="text-charcoal-900 font-semibold">
                GCI Global Program 2026
              </strong>{' '}
              at the Matsuo-Iwasawa Laboratory (The University of Tokyo), focusing on Data Science and applied AI, alongside the{' '}
              <strong className="text-charcoal-900 font-semibold">
                Digital Egypt Pioneers Initiative (DEPI)
              </strong>{' '}
              specializing in Agentic and Generative AI.
            </p>

            <p>
              Engineering is equally about collaboration and communication. Through my roles in student organizations—including coordinating member recruitment and tracking KPIs in the{' '}
              <strong className="text-charcoal-900 font-semibold">IEEE Helwan Student Branch</strong>, delivering embedded systems workshops with{' '}
              <strong className="text-charcoal-900 font-semibold">IEEE RAS</strong>, and managing brainstorming phases with{' '}
              <strong className="text-charcoal-900 font-semibold">Enactus</strong>—I have gained practical experience leading teams, solving ambiguous challenges, and taking initiative.
            </p>

            {/* Core Values / Working Principles */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-offwhite border border-charcoal-200/70 text-sm">
                <CheckCircle className="w-4 h-4 text-forest-700 mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-charcoal-900 block">Rooted in Fundamentals</span>
                  <span className="text-xs text-charcoal-600">Solid grasp of algorithms, OOP, data structures, and relational databases.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-offwhite border border-charcoal-200/70 text-sm">
                <CheckCircle className="w-4 h-4 text-forest-700 mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-charcoal-900 block">Practical Implementation</span>
                  <span className="text-xs text-charcoal-600">Turning theoretical AI & backend concepts into working APIs and tested pipelines.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-offwhite border border-charcoal-200/70 text-sm">
                <CheckCircle className="w-4 h-4 text-forest-700 mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-charcoal-900 block">Continuous Learning</span>
                  <span className="text-xs text-charcoal-600">Expanding competencies in Agentic AI, microservices, and modern tooling.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-offwhite border border-charcoal-200/70 text-sm">
                <CheckCircle className="w-4 h-4 text-forest-700 mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-charcoal-900 block">Collaborative & Accountable</span>
                  <span className="text-xs text-charcoal-600">Proven track record in team projects, Git workflows, and community leadership.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Pillars Cards (Cols 8-12) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Pillar 1: Academic Foundation */}
            <div className="p-6 rounded-2xl bg-offwhite border border-charcoal-200/80 shadow-subtle hover:border-forest-300 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-forest-100 text-forest-800">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-charcoal-900">Academic Foundation</h3>
                  <p className="text-xs text-charcoal-500">Helwan University · 2022 – 2026</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Faculty of Computers and Artificial Intelligence. Maintained a 3.45 GPA with consistent coursework in Data Structures, OOP, Software Engineering, Database Systems, and Machine Learning.
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                <Badge variant="forest" size="sm">Algorithms</Badge>
                <Badge variant="forest" size="sm">OOP</Badge>
                <Badge variant="forest" size="sm">Database Systems</Badge>
              </div>
            </div>

            {/* Pillar 2: Applied AI & Software Focus */}
            <div className="p-6 rounded-2xl bg-offwhite border border-charcoal-200/80 shadow-subtle hover:border-forest-300 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-olive-100 text-olive-800">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-charcoal-900">Applied AI & Software Focus</h3>
                  <p className="text-xs text-charcoal-500">Microservices, ML & Agentic Systems</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Hands-on backend development with Java and Spring Boot, combined with predictive machine learning and natural language processing in Python. Currently training on agentic AI workflows.
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                <Badge variant="olive" size="sm">Spring Boot</Badge>
                <Badge variant="olive" size="sm">Machine Learning</Badge>
                <Badge variant="olive" size="sm">Agentic AI</Badge>
              </div>
            </div>

            {/* Pillar 3: Collaborative Extracurriculars */}
            <div className="p-6 rounded-2xl bg-offwhite border border-charcoal-200/80 shadow-subtle hover:border-forest-300 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-charcoal-100 text-charcoal-800">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-charcoal-900">Leadership & Teamwork</h3>
                  <p className="text-xs text-charcoal-500">IEEE & Enactus Student Activities</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Active student branch member with responsibilities spanning interview conducting, committee supervision, member KPI calculation, technical hardware mentoring, and team coordination.
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                <Badge variant="neutral" size="sm">HR & Interviews</Badge>
                <Badge variant="neutral" size="sm">KPI Tracking</Badge>
                <Badge variant="neutral" size="sm">Hardware Mentoring</Badge>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
