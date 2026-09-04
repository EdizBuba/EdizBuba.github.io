import { ArrowDown, ArrowRight, Download, Github, Linkedin } from 'lucide-react'
import type { Copy } from '../../i18n/types'
import { siteData } from '../../data/site'

interface HeroProps {
  copy: Copy['hero']
}

export function Hero({ copy }: HeroProps) {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__content">
        <p className="eyebrow hero__eyebrow">{copy.eyebrow}</p>
        <h1 id="hero-title"><span>Ediz</span><span className="text-outline">Buba</span></h1>
        <div className="hero__role">
          <span>{copy.role}</span>
          <span aria-hidden="true">/</span>
          <span>{copy.secondaryRole}</span>
        </div>
        <p className="hero__intro">{copy.intro}</p>
        <p className="tech-line">{siteData.heroTechnologies.join(' · ')}</p>

        <div className="hero__actions">
          <a className="button button--primary" href="#projects">
            {copy.explore}<ArrowRight aria-hidden="true" />
          </a>
          {/* TODO(content): Replace the legacy CV, add its public path and restore this CTA as a link. */}
          <span className="button button--ghost button--disabled" aria-disabled="true">
            <span>{copy.downloadCv}<small>{copy.cvUnavailable}</small></span>
            <Download aria-hidden="true" />
          </span>
        </div>

        <div className="hero__socials" aria-label={copy.socialLinks}>
          <a href={siteData.github} target="_blank" rel="noreferrer">
            <Github aria-hidden="true" />GitHub
          </a>
          <a href={siteData.linkedin} target="_blank" rel="noreferrer">
            <Linkedin aria-hidden="true" />LinkedIn
          </a>
        </div>
      </div>

      <div className="hero__visual" data-reveal>
        <div className="hero__frame">
          <img src="/assets/images/ediz.webp" alt={copy.portraitAlt} width="960" height="1200" />
        </div>
        <p className="hero__location"><span aria-hidden="true" />{copy.availability}</p>
      </div>

      <a className="scroll-indicator" href="#about">
        <span>{copy.scroll}</span><ArrowDown aria-hidden="true" />
      </a>
    </section>
  )
}
