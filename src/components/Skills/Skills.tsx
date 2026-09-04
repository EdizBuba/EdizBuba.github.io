import { skillCategories } from '../../data/skills'
import { localize } from '../../i18n'
import type { Copy, Language } from '../../i18n/types'
import { SectionHeading } from '../SectionHeading/SectionHeading'

interface SkillsProps {
  copy: Copy['skills']
  language: Language
}

export function Skills({ copy, language }: SkillsProps) {
  return (
    <section className="section section--tinted skills" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading id="skills-title" label={copy.label} title={copy.title} intro={copy.intro} />
        <div className="skills__grid">
          {skillCategories.map((category, index) => (
            <article className="skill-group" key={category.id} data-reveal>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{localize(category.title, language)}</h3>
              <ul>
                {category.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
