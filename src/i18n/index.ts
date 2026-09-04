import { en } from './en'
import { fr } from './fr'
import type { Language } from './types'

export const translations = { fr, en }

export const localize = <T>(value: Record<Language, T>, language: Language): T => value[language]
