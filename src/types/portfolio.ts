export interface PersonalInfo {
  name: string
  title: string
  university: string
  faculty: string
  gpa: number
  maxGpa: number
  graduationYear: number
  introduction: string
  location: string
  email: string
  linkedin: string
  github: string
  resumeUrl?: string
  statusMessage: string
}

export interface SkillItem {
  name: string
  detail?: string
}

export interface SkillCategory {
  id: string
  title: string
  description: string
  icon: string
  skills: SkillItem[]
}

export type ProjectCategory = 'All' | 'Software & Backend' | 'AI & ML' | 'Web'

export interface AcademicProjectDetails {
  problem?: string
  dataset?: string
  preprocessing?: string
  modelArchitecture?: string
  evaluationMetrics?: string
  results?: string
  isPendingUserSpecs?: boolean
}

export interface Project {
  id: string
  title: string
  subtitle: string
  category: 'Software & Backend' | 'AI & ML' | 'Web'
  shortDescription: string
  fullDescription: string
  technologies: string[]
  keyContributions: string[]
  architectureHighlights?: string[]
  githubUrl?: string
  demoUrl?: string
  isPlaceholderLinks?: boolean
  placeholderNote?: string
  academicDetails?: AcademicProjectDetails
  graphicType: 'gotrack' | 'nlp' | 'ml-classification' | 'courses'
}

export interface ExperienceItem {
  id: string
  title: string
  organization: string
  subOrganization?: string
  period: string
  isOngoing: boolean
  statusBadge: string
  type: 'Global Program' | 'Initiative' | 'Training' | 'Extracurricular' | 'Volunteer'
  highlights: string[]
  skillsApplied: string[]
  note?: string
}

export interface ServiceItem {
  id: string
  title: string
  subtitle: string
  description: string
  deliverables: string[]
  technologies: string[]
  icon: string
}
