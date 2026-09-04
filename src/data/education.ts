import type { EducationItem } from './types'

export const education: EducationItem[] = [
  {
    period: '2025 — 2028',
    institution: 'CPE Lyon · cursus ITII',
    degree: {
      fr: 'Diplôme d’ingénieur',
      en: 'Engineering Degree in Computer Science and Communication Networks',
    },
    specialization: {
      fr: 'Informatique et Réseaux de Communication (IRC) · alternance · orientation Développement, Data & IA.',
      en: 'Informatique et Réseaux de Communication (IRC), ITII apprenticeship track · focus on Software Development, Data & AI.',
    },
    location: 'Lyon / Villeurbanne, France',
    visible: true,
  },
  {
    period: '2022 — 2025',
    institution: 'Université Claude Bernard Lyon 1 · IUT Lyon 1',
    degree: { fr: 'BUT Informatique', en: 'BUT Informatique — French three-year university degree' },
    specialization: {
      fr: 'Diplôme obtenu · parcours Réalisation d’applications · dernière partie du cursus en alternance chez OKTEO.',
      en: 'Completed application development track · the final part of the program was completed as an apprentice at OKTEO.',
    },
    location: 'Bourg-en-Bresse, France',
    visible: true,
  },
  {
    period: '2022',
    institution: 'Lycée Arbez Carme',
    degree: { fr: 'Baccalauréat général', en: 'French General Baccalaureate' },
    specialization: {
      fr: 'Spécialités Mathématiques et Numérique et Sciences Informatiques (NSI).',
      en: 'Specializations in Mathematics and Computer Science (NSI).',
    },
    location: 'Bellignat, France',
    visible: false,
  },
]
