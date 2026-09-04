import { education } from '../../data/education'
import { localize } from '../../i18n'
import type { Copy, Language } from '../../i18n/types'
import { SectionHeading } from '../SectionHeading/SectionHeading'

interface EducationProps {
  copy: Copy['education']
  language: Language
}

export function Education({ copy, language }: EducationProps) {
  const visibleEducation = education.filter((item) => item.visible)

  return (
    <section className="section education" id="education" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading id="education-title" label={copy.label} title={copy.title} intro={copy.intro} />
        <ol className="education__list">
          {visibleEducation.map((item) => (
            <li key={`${item.period}-${item.institution}`} data-reveal>
              <time>{item.period}</time>
              <div>
                <p className="eyebrow">{item.institution}</p>
                <h3>{localize(item.degree, language)}</h3>
                <p>{localize(item.specialization, language)}</p>
                <span>{item.location}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
