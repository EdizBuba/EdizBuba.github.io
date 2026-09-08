import type { Project, ProjectImage } from '../../data/types'
import { localize } from '../../i18n'
import type { Copy, Language } from '../../i18n/types'

export function ProjectScreenshot({ image, language }: { image: ProjectImage; language: Language }) {
  return <img src={image.src} alt={localize(image.alt, language)} width={image.width} height={image.height} loading="lazy" decoding="async" />
}

export function ProjectVisual({ project, index, copy, language }: {
  project: Project; index: number; copy: Copy['projects']; language: Language
}) {
  const visual = project.visual
  const kind = visual?.kind ?? 'image'
  return (
    <figure className={`project-card__image project-visual project-visual--${kind}`}>
      <span className="project-visual__number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
      {visual?.kind === 'editorial' ? (
        <div className="project-visual__editorial" aria-hidden="true">
          <span className="project-visual__label">{localize(project.type, language)}</span>
          <span className="project-visual__wordmark">{visual.wordmark}</span>
          <div className="project-visual__flow">
            {localize(visual.terms, language).map(term => <span key={term}>{term}</span>)}
          </div>
          <span className="project-visual__stack">{project.technologies.join(' / ')}</span>
        </div>
      ) : visual?.kind === 'screens' ? (
        <div className="project-visual__screens">
          {visual.images.map(image => <ProjectScreenshot key={image.src} image={image} language={language} />)}
        </div>
      ) : project.image ? (
        <div className="project-visual__single">
          {kind === 'ar' && <span className="project-visual__ar-label" aria-hidden="true">AR<span>Swift<br />ARKit<br />RealityKit</span></span>}
          <ProjectScreenshot image={project.image} language={language} />
        </div>
      ) : null}
      <figcaption>
        {kind === 'editorial' ? copy.abstractVisual : kind === 'ar' ? copy.arVisual : copy.originalScreens}
      </figcaption>
    </figure>
  )
}
