import React from 'react'
import { personalInfo } from '../data/portfolioData'
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-white border-t border-charcoal-200/80 text-charcoal-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-charcoal-200/60">
          
          {/* Brand info */}
          <div className="flex flex-col items-center md:items-start space-y-1">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-lg bg-forest-800 text-offwhite flex items-center justify-center font-bold text-xs">
                HA
              </div>
              <span className="text-base font-bold text-charcoal-900">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-charcoal-500">
              {personalInfo.faculty} · {personalInfo.university}
            </p>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-charcoal-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-forest-800 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center space-x-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg text-charcoal-600 hover:text-forest-800 hover:bg-forest-50 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            {personalInfo.github && (
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-lg text-charcoal-600 hover:text-forest-800 hover:bg-forest-50 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="p-2 rounded-lg text-charcoal-600 hover:text-forest-800 hover:bg-forest-50 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-lg text-charcoal-600 hover:text-forest-800 hover:bg-forest-50 transition-colors ml-2"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-charcoal-500 gap-2">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5 font-mono text-[11px]">
            <span>Crafted with React, TypeScript & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
