import { MapPin, MoveUpRight } from 'lucide-react'
import type { Copy } from '../../i18n/types'
import { SectionHeading } from '../SectionHeading/SectionHeading'

interface AboutProps {
  copy: Copy['about']
}

export function About({ copy }: AboutProps) {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading id="about-title" label={copy.label} title={copy.title} />
        <div className="about__layout">
          <div className="about__marker" aria-hidden="true">A/01</div>
          <div className="about__copy" data-reveal>
            {copy.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <dl className="about__facts" data-reveal>
            <div>
              <dt><MapPin aria-hidden="true" />{copy.locationLabel}</dt>
              <dd>{copy.location}</dd>
            </div>
            <div>
              <dt><MoveUpRight aria-hidden="true" />{copy.focusLabel}</dt>
              <dd>{copy.focus}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
