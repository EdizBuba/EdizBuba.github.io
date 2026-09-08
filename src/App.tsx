import { useEffect } from 'react'
import { About } from './components/About/About'
import { Contact } from './components/Contact/Contact'
import { Education } from './components/Education/Education'
import { Experience } from './components/Experience/Experience'
import { Footer } from './components/Footer/Footer'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import { Projects } from './components/Projects/Projects'
import { Skills } from './components/Skills/Skills'
import { useActiveSection } from './hooks/useActiveSection'
import { usePreferences } from './hooks/usePreferences'
import { useReveal } from './hooks/useReveal'
import { translations } from './i18n'

const sectionIds = ['about', 'projects', 'experience', 'skills', 'education', 'contact']

function App() {
  const { language, setLanguage, theme, toggleTheme } = usePreferences()
  const activeSection = useActiveSection(sectionIds)
  const copy = translations[language]
  useReveal()

  useEffect(() => {
    const description = language === 'fr'
      ? "Portfolio d'Ediz Buba, étudiant ingénieur à CPE Lyon et développeur Java en alternance chez Sopra Steria."
      : "Portfolio of Ediz Buba, an engineering student at CPE Lyon and Java developer apprentice at Sopra Steria."
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description)
  }, [language])

  return (
    <>
      <a className="skip-link" href="#main-content">{copy.skipToContent}</a>
      <Navbar
        copy={copy.navigation}
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
      />
      <main id="main-content">
        <Hero copy={copy.hero} language={language} />
        <About copy={copy.about} />
        <Projects copy={copy.projects} language={language} />
        <Experience copy={copy.experience} language={language} />
        <Skills copy={copy.skills} language={language} />
        <Education copy={copy.education} language={language} />
        <Contact copy={copy.contact} />
      </main>
      <Footer copy={copy.footer} />
    </>
  )
}

export default App
