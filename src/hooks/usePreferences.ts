import { useCallback, useEffect, useState } from 'react'
import type { Language } from '../i18n/types'

export type Theme = 'light' | 'dark'

const getInitialLanguage = (): Language => {
  const stored = localStorage.getItem('portfolio-language')
  if (stored === 'fr' || stored === 'en') return stored
  return navigator.language.toLowerCase().startsWith('fr') ? 'fr' : 'en'
}

const getInitialTheme = (): Theme =>
  document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'

export const usePreferences = () => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage)
  const [theme, setThemeState] = useState<Theme>(getInitialTheme)

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage)
    localStorage.setItem('portfolio-language', nextLanguage)
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeState((current) => {
      const next = current === 'light' ? 'dark' : 'light'
      localStorage.setItem('portfolio-theme', next)
      return next
    })
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'dark' ? '#0b0e11' : '#f5f7f8',
    )
  }, [theme])

  return { language, setLanguage, theme, toggleTheme }
}
