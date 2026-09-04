import type { SkillCategory } from './types'

export const skillCategories: SkillCategory[] = [
  {
    id: 'software-backend',
    title: { fr: 'Développement logiciel & backend', en: 'Software development & backend' },
    skills: ['Java', 'WinDev', 'REST APIs'],
  },
  {
    id: 'web-mobile',
    title: { fr: 'Web & mobile', en: 'Web & Mobile' },
    skills: ['JavaScript', 'HTML', 'CSS', 'Vue.js', 'Flutter', 'Dart', 'Kotlin', 'Swift'],
  },
  {
    id: 'data-databases',
    title: { fr: 'Données & bases de données', en: 'Data & Databases' },
    skills: ['SQL', 'MySQL', 'SQLite', 'HFSQL', 'MongoDB', 'Firebase'],
  },
  {
    id: 'devops-tools',
    title: { fr: 'DevOps & outils', en: 'DevOps & Tools' },
    skills: ['Git', 'Docker', 'Linux'],
  },
  {
    id: 'embedded-iot',
    title: { fr: 'Systèmes embarqués & IoT', en: 'Embedded & IoT' },
    skills: ['Arduino', 'ESP32'],
  },
]

// Skills are intentionally limited to technologies evidenced by the legacy portfolio or its projects.
