import { useEffect, useRef } from 'react'
import { ExternalLink, X } from 'lucide-react'
import { GithubIcon } from './icons'

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

/**
 * Fenêtre de détails d'un projet.
 * Accessible : role="dialog", fermeture par Échap ou clic sur l'arrière-plan,
 * focus déplacé dans la fenêtre puis restitué, piège à focus au clavier.
 */
function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (!project) return undefined

    const previouslyFocused = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key !== 'Tab' || !dialogRef.current) return

      const focusable = dialogRef.current.querySelectorAll(FOCUSABLE_SELECTOR)
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus()
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6">
      <div aria-hidden="true" onClick={onClose} className="absolute inset-0 bg-anthracite/50 backdrop-blur-sm" />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl bg-cream shadow-xl sm:rounded-3xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-rose/50 px-7 py-6 sm:px-9">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bordeaux">
              {project.category}
            </p>
            <h3
              id="project-modal-title"
              className="mt-2 text-balance font-display text-2xl leading-snug font-semibold text-anthracite sm:text-3xl"
            >
              {project.title}
            </h3>
            <p className="mt-1.5 text-sm text-anthracite/75">{project.context}</p>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Fermer la fenêtre de détails"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-rose/70 text-bordeaux transition-colors hover:bg-powder"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-7 py-7 sm:px-9">
          {project.image && (
            <img
              src={project.image}
              alt={`Capture d’écran du projet ${project.title}`}
              decoding="async"
              className="mb-6 w-full rounded-2xl border border-rose/50"
            />
          )}

          <p className="text-pretty text-base leading-8 text-anthracite/80">{project.description}</p>

          {project.objectives?.length > 0 && (
            <section className="mt-8">
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-bordeaux">
                Objectifs
              </h4>
              <ul className="mt-4 space-y-2">
                {project.objectives.map((objective) => (
                  <li key={objective} className="flex items-start gap-3 text-sm leading-6 text-anthracite/75">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose" aria-hidden="true" />
                    {objective}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.features?.length > 0 && (
            <section className="mt-8">
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-bordeaux">
                Fonctionnalités principales
              </h4>
              <ul className="mt-4 space-y-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-anthracite/75">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.extraSections?.map(
            (extra) =>
              extra.items?.length > 0 && (
                <section key={extra.title} className="mt-8">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-bordeaux">
                    {extra.title}
                  </h4>
                  <ul className="mt-4 space-y-2">
                    {extra.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-6 text-anthracite/75">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              ),
          )}

          {project.skills?.length > 0 && (
            <section className="mt-8">
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-bordeaux">
                Compétences mises en pratique
              </h4>
              <ul className="mt-4 space-y-2">
                {project.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-3 text-sm leading-6 text-anthracite/75">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose" aria-hidden="true" />
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.technologies?.length > 0 && (
            <section className="mt-8">
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-bordeaux">
                Technologies
              </h4>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-full border border-rose/70 bg-powder px-3.5 py-1.5 text-xs font-semibold text-bordeaux"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3 border-t border-rose/50 bg-powder/40 px-7 py-5 sm:px-9">
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-bordeaux px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-bordeaux-dark"
            >
              <GithubIcon size={15} aria-hidden="true" />
              Voir le code
            </a>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-bordeaux/40 px-5 py-2.5 text-sm font-semibold text-bordeaux transition-colors hover:bg-powder"
            >
              <ExternalLink size={15} aria-hidden="true" />
              Voir le projet
            </a>
          )}

          <button
            type="button"
            onClick={onClose}
            className="ml-auto rounded-full px-4 py-2.5 text-sm font-semibold text-bordeaux transition-colors hover:bg-powder"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
