import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { Copy, Language } from '../../i18n/types'
import type { Theme } from '../../hooks/usePreferences'

interface NavbarProps {
  copy: Copy['navigation']
  language: Language
  setLanguage: (language: Language) => void
  theme: Theme
  toggleTheme: () => void
  activeSection: string
}

const sectionIds = ['about', 'projects', 'experience', 'skills', 'education', 'contact'] as const

export function Navbar({ copy, language, setLanguage, theme, toggleTheme, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <header className="navbar">
      <a className="navbar__logo" href="#top" aria-label={copy.logoHome}>EB<span>.</span></a>

      <button
        className="navbar__menu-button icon-button"
        type="button"
        aria-label={isOpen ? copy.menuClose : copy.menuOpen}
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      <div className={`navbar__panel ${isOpen ? 'is-open' : ''}`} id="primary-navigation">
        <nav aria-label={copy.ariaLabel}>
          <ul className="navbar__links">
            {sectionIds.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={activeSection === id ? 'is-active' : ''}
                  aria-current={activeSection === id ? 'location' : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {copy.items[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__controls">
          <div className="language-switch" role="group" aria-label={copy.language}>
            {(['fr', 'en'] as const).map((item) => (
              <button
                type="button"
                key={item}
                className={language === item ? 'is-active' : ''}
                aria-pressed={language === item}
                onClick={() => setLanguage(item)}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="icon-button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? copy.themeLight : copy.themeDark}
          >
            {theme === 'dark' ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  )
}
