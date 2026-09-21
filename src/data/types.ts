import type { Language } from '../i18n/types'

export type Localized<T = string> = Record<Language, T>

export interface ProjectImage {
  src: string
  alt: Localized
  width: number
  height: number
}

export interface ProjectDetails {
  kind: 'technical'
  problem: Localized
  role: Localized
  solution: Localized
  challenges: Localized
  result: Localized
}

export interface ProfessionalDetails {
  kind: 'professional'
  role: Localized
}

export interface CompactDetails {
  kind: 'compact'
  goal: Localized
  contribution: Localized
}

export interface IntermediateDetails {
  kind: 'intermediate'
  goal: Localized
  contribution: Localized
  technicalPoints: Localized
}

export interface NotableContribution {
  title: Localized
  problem: Localized
  role: Localized
  solution: Localized
  result?: Localized
  image?: ProjectImage
  visual?: 'abstract'
  technologies?: Localized<string[]>
}

export interface OtherContribution {
  title: Localized
  description: Localized
}

export type ProjectGroup = 'professional' | 'selected' | 'experiments'

export type ProjectVisual =
  | { kind: 'editorial'; wordmark: string; terms: Localized<string[]> }
  | { kind: 'screens'; images: ProjectImage[] }
  | { kind: 'ar' }

export interface Project {
  id: string
  title: Localized
  description: Localized
  modalIntro?: Localized
  type: Localized
  group: ProjectGroup
  company?: string
  context?: Localized
  image?: ProjectImage
  visual?: ProjectVisual
  technologies: string[]
  codeVisibility: 'public' | 'private' | 'unpublished'
  github?: string
  demo?: string
  details: ProjectDetails | ProfessionalDetails | CompactDetails | IntermediateDetails
  notableContributions?: NotableContribution[]
  otherContributions?: OtherContribution[]
  gallery: ProjectImage[]
}

export interface Experience {
  company: string
  role: Localized
  period: Localized
  location: Localized
  responsibilities: Localized<string[]>
  technologies: string[]
}

export interface EducationItem {
  period: string
  institution: string
  degree: Localized
  specialization: Localized
  location: string
  visible: boolean
}

export interface SkillCategory {
  id: string
  title: Localized
  skills: string[]
}
