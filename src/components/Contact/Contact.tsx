import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { siteData } from '../../data/site'
import type { Copy } from '../../i18n/types'

interface ContactProps {
  copy: Copy['contact']
}

export function Contact({ copy }: ContactProps) {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="container contact__inner" data-reveal>
        <p className="eyebrow">{copy.label}</p>
        <div className="contact__headline">
          <h2 id="contact-title">{copy.title}</h2>
          <p>{copy.intro}</p>
        </div>
        <a className="contact__email" href={`mailto:${siteData.email}`}>
          <span><Mail aria-hidden="true" />{copy.sendEmail}</span>
          <ArrowUpRight aria-hidden="true" />
        </a>
        <div className="contact__meta">
          <div>
            <span>{copy.email}</span>
            <a href={`mailto:${siteData.email}`}>{siteData.email}</a>
          </div>
          <div>
            <span>{copy.socialLabel}</span>
            <div className="contact__socials">
              <a href={siteData.github} target="_blank" rel="noreferrer"><Github aria-hidden="true" />GitHub</a>
              <a href={siteData.linkedin} target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" />LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
