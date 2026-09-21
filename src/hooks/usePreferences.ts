import { useCallback, useEffect, useState } from 'react'
import type { Language } from '../i18n/types'

const getInitialLanguage = (): Language => {
  const stored = localStorage.getItem('portfolio-language')
  if (stored === 'fr' || stored === 'en') return stored
  return navigator.language.toLowerCase().startsWith('fr') ? 'fr' : 'en'
}

export const usePreferences = () => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage)

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage)
    localStorage.setItem('portfolio-language', nextLanguage)
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return { language, setLanguage }
}
