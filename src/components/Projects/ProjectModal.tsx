import { X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import type { Project } from '../../data/types'
import { localize } from '../../i18n'
import type { Copy, Language } from '../../i18n/types'
import { ProjectLinks } from './ProjectLinks'
import { ProjectScreenshot } from './ProjectVisual'

interface ProjectModalProps {
  project: Project | null
  language: Language
  copy: Copy['projects']
  onClose: () => void
}

export function ProjectModal({ project, language, copy, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (project && !dialog.open) {
      dialog.showModal()
      if (panelRef.current) panelRef.current.scrollTop = 0
      closeButtonRef.current?.focus({ preventScroll: true })
      document.body.classList.add('modal-open')
    } else if (!project && dialog.open) {
      dialog.close()
    }
    return () => document.body.classList.remove('modal-open')
  }, [project])

  if (!project) return <dialog ref={dialogRef} className="project-modal" />

  const technicalSections = [
    ['problem', copy.modalSections.problem],
    ['role', copy.modalSections.role],
    ['solution', copy.modalSections.solution],
    ['challenges', copy.modalSections.challenges],
    ['result', copy.modalSections.result],
  ] as const

  const details = project.details
  const detailSections: { label: string; body: string | string[] }[] = details.kind === 'professional'
    ? [
      { label: copy.modalSections.context, body: localize(details.context, language) },
      { label: copy.modalSections.role, body: localize(details.role, language) },
      { label: copy.modalSections.contributions, body: localize(details.contributions, language) },
      ...(details.learning ? [{ label: copy.modalSections.learning, body: localize(details.learning, language) }] : []),
    ]
    : technicalSections.map(([key, label]) => ({ label, body: localize(details[key], language) }))

  return (
    <dialog
      ref={dialogRef}
      className="project-modal"
      aria-labelledby="project-modal-title"
      onCancel={(event) => { event.preventDefault(); onClose() }}
      onClose={onClose}
      onKeyDown={(event) => {
        if (event.key !== 'Tab') return
        const controls = event.currentTarget.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], [tabindex="0"]')
        const first = controls[0]
        const last = controls[controls.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last?.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first?.focus()
        }
      }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose() }}
    >
      <div className="project-modal__panel" ref={panelRef}>
        <button ref={closeButtonRef} type="button" className="project-modal__close icon-button" onClick={onClose} aria-label={copy.close}>
          <X aria-hidden="true" />
        </button>
        <header className="project-modal__header">
          <p className="eyebrow">{localize(project.type, language)}</p>
          <h2 id="project-modal-title">{localize(project.title, language)}</h2>
          {project.company && <p className="project-modal__company">{project.company}</p>}
          {project.context && <p className="project-card__context">{localize(project.context, language)}</p>}
          <p>{localize(project.description, language)}</p>
          <div className="project-modal__links"><ProjectLinks project={project} copy={copy} language={language} /></div>
        </header>

        <div className="project-modal__details">
          {detailSections.map(({ label, body }) => (
            <section key={label}>
              <h3>{label}</h3>
              {Array.isArray(body) ? <ul className="project-modal__list">{body.map(item => <li key={item}>{item}</li>)}</ul> : <p>{body}</p>}
            </section>
          ))}
          <section>
            <h3>{copy.modalSections.stack}</h3>
            <ul className="tag-list" aria-label={copy.modalSections.stack}>
              {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
          </section>
        </div>

        {project.notableContributions?.map(contribution => (
          <section className="project-contribution" key={contribution.title.en}>
            <p className="eyebrow">{copy.modalSections.notableContribution}</p>
            <h3>{localize(contribution.title, language)}</h3>
            <div className={`project-contribution__layout${contribution.image ? '' : ' project-contribution__layout--text'}`}>
              <dl>
                {(['problem', 'role', 'solution', 'result'] as const).map(key => {
                  const text = contribution[key]
                  return text ? <div key={key}><dt>{copy.modalSections[key]}</dt><dd>{localize(text, language)}</dd></div> : null
                })}
              </dl>
              {contribution.image && <figure><ProjectScreenshot image={contribution.image} language={language} /><figcaption>{localize(contribution.image.alt, language)}</figcaption></figure>}
            </div>
            {contribution.technologies && <ul className="tag-list" aria-label={copy.modalSections.stack}>
              {localize(contribution.technologies, language).map(technology => <li key={technology}>{technology}</li>)}
            </ul>}
          </section>
        ))}

        {!!project.otherContributions?.length && <section className="project-other-contributions" aria-labelledby="project-other-contributions-title">
          <h3 id="project-other-contributions-title" className="eyebrow">{copy.modalSections.otherContributions}</h3>
          {project.otherContributions.map(contribution => <section key={contribution.title.en}>
            <h4>{localize(contribution.title, language)}</h4>
            <p>{localize(contribution.description, language)}</p>
            {contribution.technologies && <ul className="tag-list" aria-label={copy.modalSections.stack}>
              {contribution.technologies.map(technology => <li key={technology}>{technology}</li>)}
            </ul>}
          </section>)}
        </section>}

        {project.gallery.length > 0 && <section className="project-modal__gallery">
          <h3>{copy.modalSections.gallery}</h3>
          <div>
            {project.gallery.map((image) => (
              <figure key={image.src} className={image.width > image.height ? 'project-gallery__landscape' : ''}>
                <ProjectScreenshot image={image} language={language} />
                <figcaption>{localize(image.alt, language)}</figcaption>
              </figure>
            ))}
          </div>
        </section>}
      </div>
    </dialog>
  )
}
