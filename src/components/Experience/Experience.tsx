import { experiences } from '../../data/experiences'
import { localize } from '../../i18n'
import type { Copy, Language } from '../../i18n/types'
import { SectionHeading } from '../SectionHeading/SectionHeading'

interface ExperienceProps {
  copy: Copy['experience']
  language: Language
}

export function Experience({ copy, language }: ExperienceProps) {
  return (
    <section className="section experience" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading id="experience-title" label={copy.label} title={copy.title} intro={copy.intro} />
        <ol className="timeline">
          {experiences.map((experience) => (
            <li key={`${experience.company}-${localize(experience.role, language)}`} data-reveal>
              <div className="timeline__meta">
                <time>{localize(experience.period, language)}</time>
                <span>{localize(experience.location, language)}</span>
              </div>
              <div className="timeline__content">
                <p className="eyebrow">{experience.company}</p>
                <h3>{localize(experience.role, language)}</h3>
                <ul>
                  {localize(experience.responsibilities, language).map((item) => <li key={item}>{item}</li>)}
                </ul>
                <ul className="tag-list" aria-label="Technologies">
                  {experience.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
