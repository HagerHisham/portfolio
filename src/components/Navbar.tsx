import React, { useState, useEffect } from 'react'
import { personalInfo } from '../data/portfolioData'
import { Menu, X, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ]

  const closeMenu = () => setIsMobileMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-offwhite/90 backdrop-blur-md border-b border-charcoal-200/70 shadow-subtle py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#"
            className="flex items-center space-x-3 group focus:outline-none"
            aria-label="Hager Abdellah Portfolio Home"
          >
            <div className="w-9 h-9 rounded-xl bg-forest-800 text-offwhite flex items-center justify-center font-bold text-sm tracking-wider shadow-sm group-hover:bg-forest-900 transition-colors">
              HA
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-charcoal-900 tracking-tight leading-tight group-hover:text-forest-800 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-medium text-forest-700/90 tracking-normal hidden sm:block">
                AI & Software Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-sm font-medium text-charcoal-700 hover:text-forest-800 hover:bg-forest-50/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action / Contact CTA */}
          <div className="hidden md:flex items-center space-x-3">
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
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-forest-800 hover:bg-forest-900 text-offwhite text-xs font-semibold tracking-wide transition-all shadow-sm hover:shadow"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="p-2 rounded-lg text-charcoal-800 hover:bg-charcoal-100 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-offwhite-50/98 border-b border-charcoal-200/80 px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-charcoal-800 hover:bg-forest-50 hover:text-forest-800 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-charcoal-200 mt-2 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={closeMenu}
                className="w-full text-center py-2.5 rounded-xl bg-forest-800 text-offwhite text-sm font-semibold tracking-wide shadow-sm"
              >
                Get in Touch
              </a>
              <div className="flex items-center justify-center space-x-4 pt-1">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-charcoal-600 hover:text-forest-800"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2 text-charcoal-600 hover:text-forest-800"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                {personalInfo.github && (
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-charcoal-600 hover:text-forest-800"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
