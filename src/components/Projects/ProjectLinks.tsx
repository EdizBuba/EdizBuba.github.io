import { ArrowUpRight, Github, LockKeyhole } from 'lucide-react'
import type { Project } from '../../data/types'
import type { Copy, Language } from '../../i18n/types'
import { localize } from '../../i18n'

export function ProjectLinks({ project, copy, language }: { project: Project; copy: Copy['projects']; language: Language }) {
  return <>
    {project.github && project.codeVisibility === 'public' && (
      <a className="text-link" href={project.github} target="_blank" rel="noopener noreferrer">
        <Github aria-hidden="true" />{copy.github}<span className="project-sr-only"> — {localize(project.title, language)} (GitHub)</span>
      </a>
    )}
    {project.demo && <a className="text-link" href={project.demo} target="_blank" rel="noopener noreferrer">{copy.demo}<ArrowUpRight aria-hidden="true" /></a>}
    {project.codeVisibility !== 'public' && <span className="private-label">
      {project.codeVisibility === 'private' && <LockKeyhole aria-hidden="true" />}
      {project.codeVisibility === 'private' ? copy.privateCode : copy.unpublishedCode}
    </span>}
  </>
}
