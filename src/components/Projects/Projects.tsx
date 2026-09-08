import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { projects } from '../../data/projects'
import type { Project } from '../../data/types'
import { localize } from '../../i18n'
import type { Copy, Language } from '../../i18n/types'
import { SectionHeading } from '../SectionHeading/SectionHeading'
import { ProjectModal } from './ProjectModal'
import { ProjectLinks } from './ProjectLinks'
import { ProjectVisual } from './ProjectVisual'
import './Projects.css'

interface ProjectsProps {
  copy: Copy['projects']
  language: Language
}

interface ProjectCardProps extends ProjectsProps {
  project: Project
  index: number
  onOpen: (project: Project) => void
}

function ProjectCard({ project, copy, language, index, onOpen }: ProjectCardProps) {
  return (
    <article className={`project-card project-card--${project.group}`} data-reveal aria-labelledby={`${project.id}-title`}>
      <ProjectVisual project={project} index={index} copy={copy} language={language} />
      <div className="project-card__content">
        <p className="eyebrow">{localize(project.type, language)}</p>
        <h4 className="project-card__title" id={`${project.id}-title`}>{localize(project.title, language)}</h4>
        {project.company && <p className="project-card__company">{project.company}</p>}
        {project.context && <p className="project-card__context">{localize(project.context, language)}</p>}
        <p>{localize(project.description, language)}</p>
        <ul className="tag-list" aria-label={copy.modalSections.stack}>
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <div className="project-card__actions">
          <button type="button" className="text-link" onClick={() => onOpen(project)}>
            {project.group === 'professional' ? copy.viewContribution : copy.learnMore}
            <span className="project-sr-only"> — {localize(project.title, language)}</span><ArrowUpRight aria-hidden="true" />
          </button>
          <ProjectLinks project={project} copy={copy} language={language} />
        </div>
      </div>
    </article>
  )
}

function Experiment({ project, copy, language, index, onOpen }: ProjectCardProps) {
  return <article className="project-experiment" data-reveal aria-labelledby={`${project.id}-title`}>
    <span className="project-experiment__number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
    <div className="project-experiment__body">
      <p className="eyebrow">{localize(project.type, language)}</p>
      <h4 id={`${project.id}-title`}>{localize(project.title, language)}</h4>
      <p>{localize(project.description, language)}</p>
      <ul className="tag-list" aria-label={copy.modalSections.stack}>
        {project.technologies.map(technology => <li key={technology}>{technology}</li>)}
      </ul>
    </div>
    <div className="project-experiment__actions">
      <button type="button" className="text-link" onClick={() => onOpen(project)}>
        {copy.learnMore}<span className="project-sr-only"> — {localize(project.title, language)}</span><ArrowUpRight aria-hidden="true" />
      </button>
      <ProjectLinks project={project} copy={copy} language={language} />
    </div>
  </article>
}

export function Projects({ copy, language }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const groups = [
    { id: 'professional', label: copy.professional, intro: copy.professionalIntro },
    { id: 'selected', label: copy.selected, intro: copy.selectedIntro },
    { id: 'experiments', label: copy.experiments, intro: copy.experimentsIntro },
  ] as const

  return (
    <section className="section section--tinted projects" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading id="projects-title" label={copy.label} title={copy.title} intro={copy.intro} />
        {groups.map(group => {
          const items = projects.filter(project => project.group === group.id)
          if (!items.length) return null
          return <section key={group.id} className={`projects__group projects__group--${group.id}`} aria-labelledby={`projects-${group.id}-title`}>
            <header className="projects__group-heading">
              <h3 className="subsection-title" id={`projects-${group.id}-title`}>{group.label}</h3>
              <p>{group.intro}</p>
            </header>
            <div className={group.id === 'experiments' ? 'projects__experiments' : 'projects__featured'}>
              {items.map(project => {
                const Card = group.id === 'experiments' ? Experiment : ProjectCard
                return <Card key={project.id} project={project} index={projects.indexOf(project)} copy={copy} language={language} onOpen={setSelectedProject} />
              })}
            </div>
          </section>
        })}
      </div>
      <ProjectModal project={selectedProject} language={language} copy={copy} onClose={() => setSelectedProject(null)} />
    </section>
  )
}
