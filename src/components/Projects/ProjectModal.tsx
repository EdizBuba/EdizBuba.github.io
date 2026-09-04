import { X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import type { Project } from '../../data/types'
import { localize } from '../../i18n'
import type { Copy, Language } from '../../i18n/types'

interface ProjectModalProps {
  project: Project | null
  language: Language
  copy: Copy['projects']
  onClose: () => void
}

export function ProjectModal({ project, language, copy, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (project && !dialog.open) {
      dialog.showModal()
      document.body.classList.add('modal-open')
    } else if (!project && dialog.open) {
      dialog.close()
    }
    return () => document.body.classList.remove('modal-open')
  }, [project])

  if (!project) return <dialog ref={dialogRef} className="project-modal" />

  const detailSections = [
    ['problem', copy.modalSections.problem],
    ['role', copy.modalSections.role],
    ['solution', copy.modalSections.solution],
    ['challenges', copy.modalSections.challenges],
    ['result', copy.modalSections.result],
  ] as const

  return (
    <dialog
      ref={dialogRef}
      className="project-modal"
      aria-labelledby="project-modal-title"
      onCancel={(event) => { event.preventDefault(); onClose() }}
      onClose={onClose}
      onClick={(event) => { if (event.target === event.currentTarget) onClose() }}
    >
      <div className="project-modal__panel">
        <button type="button" className="project-modal__close icon-button" onClick={onClose} aria-label={copy.close}>
          <X aria-hidden="true" />
        </button>
        <header className="project-modal__header">
          <p className="eyebrow">{localize(project.type, language)}</p>
          <h2 id="project-modal-title">{localize(project.title, language)}</h2>
          <p>{localize(project.description, language)}</p>
        </header>

        <div className="project-modal__details">
          {detailSections.map(([key, label]) => (
            <section key={key}>
              <h3>{label}</h3>
              <p>{localize(project.details[key], language)}</p>
            </section>
          ))}
          <section>
            <h3>{copy.modalSections.stack}</h3>
            <ul className="tag-list" aria-label={copy.modalSections.stack}>
              {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
          </section>
        </div>

        <section className="project-modal__gallery">
          <h3>{copy.modalSections.gallery}</h3>
          <div>
            {project.gallery.map((image) => (
              <img key={image.src} src={image.src} alt={localize(image.alt, language)} loading="lazy" />
            ))}
          </div>
        </section>
      </div>
    </dialog>
  )
}
