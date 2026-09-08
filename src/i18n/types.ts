export type Language = 'fr' | 'en'

export interface Copy {
  skipToContent: string
  navigation: {
    ariaLabel: string
    logoHome: string
    menuOpen: string
    menuClose: string
    themeLight: string
    themeDark: string
    language: string
    items: Record<'about' | 'projects' | 'experience' | 'skills' | 'education' | 'contact', string>
  }
  hero: {
    eyebrow: string
    role: string
    secondaryRole: string
    intro: string
    explore: string
    downloadCv: string
    portraitAlt: string
    scroll: string
    availability: string
    socialLinks: string
  }
  about: {
    label: string
    title: string
    paragraphs: string[]
    locationLabel: string
    location: string
    focusLabel: string
    focus: string
  }
  projects: {
    label: string
    title: string
    intro: string
    selected: string
    professional: string
    experiments: string
    professionalIntro: string
    selectedIntro: string
    experimentsIntro: string
    viewContribution: string
    github: string
    demo: string
    unpublishedCode: string
    abstractVisual: string
    originalScreens: string
    arVisual: string
    learnMore: string
    close: string
    privateCode: string
    modalSections: {
      problem: string
      role: string
      solution: string
      challenges: string
      result: string
      stack: string
      gallery: string
      context: string
      contributions: string
      learning: string
      notableContribution: string
      otherContributions: string
    }
  }
  experience: {
    label: string
    title: string
    intro: string
  }
  skills: {
    label: string
    title: string
    intro: string
  }
  education: {
    label: string
    title: string
    intro: string
  }
  contact: {
    label: string
    title: string
    intro: string
    email: string
    sendEmail: string
    socialLabel: string
  }
  footer: {
    backToTop: string
    builtWith: string
  }
}
