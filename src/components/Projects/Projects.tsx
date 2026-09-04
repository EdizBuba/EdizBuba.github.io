import { ArrowUpRight, LockKeyhole } from 'lucide-react'
import { useState } from 'react'
import { projects } from '../../data/projects'
import type { Project } from '../../data/types'
import { localize } from '../../i18n'
import type { Copy, Language } from '../../i18n/types'
import { SectionHeading } from '../SectionHeading/SectionHeading'
import { ProjectModal } from './ProjectModal'

interface ProjectsProps {
  copy: Copy['projects']
  language: Language
}

interface ProjectCardProps extends ProjectsProps {
  project: Project
  index: number
  compact?: boolean
  onOpen: (project: Project) => void
}

function ProjectCard({ project, copy, language, index, compact = false, onOpen }: ProjectCardProps) {
  return (
    <article className={`project-card ${compact ? 'project-card--compact' : ''}`} data-reveal>
      <div className="project-card__image">
        <img
          src={project.image.src}
          alt={localize(project.image.alt, language)}
          loading="lazy"
          width="1600"
          height="1000"
        />
        <span>{String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className="project-card__content">
        <p className="eyebrow">{localize(project.type, language)}</p>
        <h3>{localize(project.title, language)}</h3>
        <p>{localize(project.description, language)}</p>
        <ul className="tag-list" aria-label={copy.modalSections.stack}>
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <div className="project-card__actions">
          <button type="button" className="text-link" onClick={() => onOpen(project)}>
            {copy.learnMore}<ArrowUpRight aria-hidden="true" />
          </button>
          {!project.github && !project.demo && (
            <span className="private-label"><LockKeyhole aria-hidden="true" />{copy.privateCode}</span>
          )}
        </div>
      </div>
    </article>
  )
}

export function Projects({ copy, language }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const featured = projects.filter((project) => project.featured)
  const earlier = projects.filter((project) => !project.featured)

  return (
    <section className="section section--tinted projects" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading id="projects-title" label={copy.label} title={copy.title} intro={copy.intro} />
        <h3 className="subsection-title">{copy.selected}</h3>
        <div className="projects__featured">
          {featured.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} copy={copy} language={language} onOpen={setSelectedProject} />
          ))}
        </div>
        {earlier.length > 0 && (
          <div className="projects__earlier">
            {earlier.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={featured.length + index} copy={copy} language={language} compact onOpen={setSelectedProject} />
            ))}
          </div>
        )}
      </div>
      <ProjectModal project={selectedProject} language={language} copy={copy} onClose={() => setSelectedProject(null)} />
    </section>
  )
}
