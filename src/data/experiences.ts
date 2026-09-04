import type { Experience } from './types'

export const experiences: Experience[] = [
  {
    company: 'Sopra Steria · Sopra Real Estate Software',
    role: { fr: 'Développeur Java — Alternance', en: 'Java Developer — Apprenticeship' },
    period: { fr: 'Sept. 2025 — Aujourd’hui', en: 'Sep. 2025 — Present' },
    location: { fr: 'Limonest, France', en: 'Limonest, France' },
    responsibilities: {
      fr: [
        'Développement et maintenance d’applications métier Java dans le domaine immobilier.',
        'Évolution de fonctionnalités existantes, analyse et correction d’anomalies.',
        'Analyse de besoins métier et techniques, manipulation de données SQL, tests et validation des développements.',
      ],
      en: [
        'Developing and maintaining Java business applications for the real estate industry.',
        'Enhancing existing features and investigating and fixing software issues.',
        'Analyzing business and technical requirements, working with SQL data, and testing and validating changes.',
      ],
    },
    technologies: ['Java', 'SQL', 'Git'],
  },
  {
    company: 'OKTEO · Micgest',
    role: { fr: 'Développeur logiciels — Alternance', en: 'Software Developer — Apprenticeship' },
    period: { fr: '2024 — 2025', en: '2024 — 2025' },
    location: { fr: 'Arbent, France · sur site', en: 'Arbent, France · on-site' },
    responsibilities: {
      fr: [
        'Développement et évolution de fonctionnalités pour l’ERP Micgest pendant mon BUT Informatique.',
        'Correction d’anomalies et travail sur les données avec SQL et HFSQL.',
        'Conception d’un outil de recherche avancée, de l’analyse du besoin jusqu’aux tests et à la validation.',
      ],
      en: [
        'Developed and enhanced features for the Micgest ERP alongside my BUT Informatique studies.',
        'Investigated software issues and worked with SQL and HFSQL data.',
        'Designed an advanced search tool, from requirements analysis through implementation, testing and validation.',
      ],
    },
    technologies: ['WinDev', 'HFSQL', 'SQL', 'JSON'],
  },
]
