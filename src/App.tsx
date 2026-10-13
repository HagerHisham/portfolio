import React, { useState } from 'react'
import { Project } from './types/portfolio'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { ProjectModal } from './components/ProjectModal'
import { Experience } from './components/Experience'
import { Services } from './components/Services'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <div className="min-h-screen bg-offwhite text-charcoal flex flex-col selection:bg-forest-100 selection:text-forest-900">
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-forest-800 text-offwhite rounded-lg shadow-lg"
      >
        Skip to main content
      </a>

      {/* Main Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Experience />
        <Services />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Detailed Project Modal Dialog */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  )
}

export default App
