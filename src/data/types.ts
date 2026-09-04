import type { Language } from '../i18n/types'

export type Localized<T = string> = Record<Language, T>

export interface ProjectImage {
  src: string
  alt: Localized
}

export interface ProjectDetails {
  problem: Localized
  role: Localized
  solution: Localized
  challenges: Localized
  result: Localized
}

export interface Project {
  id: string
  title: Localized
  description: Localized
  type: Localized
  featured: boolean
  image: ProjectImage
  technologies: string[]
  github?: string
  demo?: string
  details: ProjectDetails
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
