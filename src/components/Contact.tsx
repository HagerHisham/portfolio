import React, { useState } from 'react'
import { personalInfo } from '../data/portfolioData'
import { SectionTitle } from './ui/SectionTitle'
import { Mail, Linkedin, Github, Copy, Check, Send, ExternalLink, HelpCircle, AlertCircle, Sparkles } from 'lucide-react'

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [copied, setCopied] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showConfigGuide, setShowConfigGuide] = useState(false)
  const [validationError, setValidationError] = useState<string | null>(null)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setValidationError(null)

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setValidationError('Please fill in your name, email, and message before sending.')
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setValidationError('Please enter a valid email address.')
      return
    }

    // Generate mailto link as working fallback
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`

    // Trigger mailto client
    window.location.href = mailtoUrl

    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Get in Touch"
          title="Let's Connect"
          subtitle="I am actively open to internship opportunities, junior AI/software engineering roles, research collaborations, and technical discussions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          
          {/* Left Column: Direct Info & Social Hub (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-charcoal-200/80 p-6 sm:p-7 shadow-subtle space-y-6">
              <div>
                <h3 className="text-xl font-bold text-charcoal-900">
                  Contact Information
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-600 mt-1 leading-relaxed">
                  Feel free to reach out directly through email, connect with me on LinkedIn, or inspect my repositories on GitHub.
                </p>
              </div>

              {/* Email Card with 1-Click Copy */}
              <div className="p-4 rounded-xl bg-forest-50/70 border border-forest-200/70 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-forest-900">
                    <Mail className="w-4 h-4 text-forest-700" />
                    <span>Email Address</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-forest-800 hover:text-forest-950 px-2 py-0.5 rounded bg-forest-100 hover:bg-forest-200 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="block text-sm font-mono font-medium text-forest-950 hover:underline break-all"
                >
                  {personalInfo.email}
                </a>
                <span className="text-[11px] text-charcoal-500 block">
                  Click to launch your default mail app or copy to clipboard.
                </span>
              </div>

              {/* Social Channels */}
              <div className="space-y-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-offwhite hover:bg-forest-50/60 border border-charcoal-200/70 hover:border-forest-300 transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-white border border-charcoal-200 text-forest-800 group-hover:border-forest-400">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-charcoal-500 font-medium">Professional Network</div>
                      <div className="text-sm font-bold text-charcoal-900 group-hover:text-forest-800">
                        LinkedIn Profile
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-charcoal-400 group-hover:text-forest-700 transition-colors" />
                </a>

                {personalInfo.github && (
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-offwhite hover:bg-forest-50/60 border border-charcoal-200/70 hover:border-forest-300 transition-all group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-white border border-charcoal-200 text-forest-800 group-hover:border-forest-400">
                        <Github className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs text-charcoal-500 font-medium">Source Repositories</div>
                        <div className="text-sm font-bold text-charcoal-900 group-hover:text-forest-800">
                          GitHub Profile
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-charcoal-400 group-hover:text-forest-700 transition-colors" />
                  </a>
                )}
              </div>

              {/* Status Note */}
              <div className="p-3.5 rounded-xl bg-olive-50/60 border border-olive-200/70 text-xs text-olive-900 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-olive-700 mt-0.5 shrink-0" />
                <span>
                  <strong>Current Status:</strong> {personalInfo.statusMessage}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (Cols 6-12) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-charcoal-200/80 p-6 sm:p-8 shadow-subtle relative">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-charcoal-900">
                    Send a Message
                  </h3>
                  <p className="text-xs text-charcoal-500 mt-0.5">
                    Fill out the form below to initiate an email directly.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowConfigGuide(!showConfigGuide)}
                  className="text-xs text-forest-800 hover:text-forest-950 flex items-center gap-1 font-medium underline"
                  title="How to configure this form with Formspree or Web3Forms"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Form Setup Guide</span>
                </button>
              </div>

              {/* Config Guide Drawer */}
              {showConfigGuide && (
                <div className="mb-6 p-4 rounded-xl bg-charcoal-50 border border-charcoal-200 text-xs text-charcoal-800 space-y-2 animate-fadeIn">
                  <div className="font-bold text-charcoal-900 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-forest-700" />
                    <span>How to enable serverless backend submissions:</span>
                  </div>
                  <p>
                    By default, this form triggers a prepared <code className="bg-white px-1 py-0.5 rounded border font-mono">mailto:</code> link in the visitor's mail client. To receive submissions silently into your inbox:
                  </p>
                  <ol className="list-decimal list-inside space-y-1 text-charcoal-700 pl-1">
                    <li>Create a free account at <strong>Formspree.io</strong> or <strong>Web3Forms.com</strong>.</li>
                    <li>Copy your form endpoint ID.</li>
                    <li>In <code className="bg-white px-1 py-0.5 rounded border font-mono">Contact.tsx</code>, replace the form submit handler with a <code className="bg-white px-1 py-0.5 rounded border font-mono">fetch(endpoint, &#123; method: 'POST', body: ... &#125;)</code> call.</li>
                  </ol>
                </div>
              )}

              {/* Validation alert */}
              {validationError && (
                <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>{validationError}</span>
                </div>
              )}

              {/* Success Notification */}
              {isSubmitted ? (
                <div className="p-6 rounded-xl bg-forest-50 border border-forest-200 text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-forest-800 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-forest-900">
                    Draft Prepared in Your Mail Client
                  </h4>
                  <p className="text-xs sm:text-sm text-forest-800 max-w-md mx-auto">
                    Your message has been formatted. If your email application didn't open automatically, you can directly email me at{' '}
                    <strong className="font-mono">{personalInfo.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({ name: '', email: '', subject: '', message: '' })
                    }}
                    className="text-xs font-semibold text-forest-800 underline hover:text-forest-950"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-charcoal-700 mb-1">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-300 focus:border-forest-600 focus:ring-1 focus:ring-forest-600 text-sm text-charcoal-900 bg-white placeholder-charcoal-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-charcoal-700 mb-1">
                        Your Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-300 focus:border-forest-600 focus:ring-1 focus:ring-forest-600 text-sm text-charcoal-900 bg-white placeholder-charcoal-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-semibold text-charcoal-700 mb-1">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Internship Inquiry / AI Project Collaboration"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-300 focus:border-forest-600 focus:ring-1 focus:ring-forest-600 text-sm text-charcoal-900 bg-white placeholder-charcoal-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-charcoal-700 mb-1">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your note, role details, or collaboration ideas..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-300 focus:border-forest-600 focus:ring-1 focus:ring-forest-600 text-sm text-charcoal-900 bg-white placeholder-charcoal-400 transition-colors resize-y"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-charcoal-500">
                      Submits directly to Hager's mailbox.
                    </span>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-forest-800 hover:bg-forest-900 text-offwhite text-sm font-semibold transition-all shadow-md hover:shadow-lg"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
