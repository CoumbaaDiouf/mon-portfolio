import { useState } from 'react'
import { FolderOpen } from 'lucide-react'
import { projects } from '../data/projects'
import { GithubIcon } from './icons'
import ProjectModal from './ProjectModal'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function ProjectCard({ project, onOpen }) {
  // Emplacement de démonstration : affiché tant que le projet n'est pas renseigné
  if (project.placeholder) {
    return (
      <article className="flex h-full flex-col rounded-3xl border-2 border-dashed border-rose bg-powder/40 p-7">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-bordeaux">
          <FolderOpen size={13} aria-hidden="true" />
          Emplacement à compléter
        </span>

        <h3 className="mt-5 font-display text-xl font-semibold text-anthracite">{project.title}</h3>
        <p className="mt-1 text-sm font-medium text-bordeaux/80">{project.context}</p>

        <p className="mt-4 flex-1 text-sm leading-6 text-anthracite/70">{project.description}</p>

        <p className="mt-6 rounded-xl bg-white/80 px-4 py-3 text-xs leading-5 text-anthracite/70">
          Renseignez ce projet dans <code className="font-semibold text-bordeaux">src/data/projects.js</code> :
          nom, description, technologies, capture d’écran et liens GitHub ou démonstration.
        </p>
      </article>
    )
  }

  const technologiesAffichees = (project.technologies ?? []).slice(0, 5)
  const technologiesRestantes = (project.technologies ?? []).slice(5)

  return (
    <article className="card-sheen card-ring card-spotlight group flex h-full flex-col overflow-hidden rounded-3xl border border-rose/60 bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-bordeaux/45 hover:shadow-lg">
      <div className="aspect-video overflow-hidden bg-powder">
        {project.image ? (
          <img
            src={project.image}
            alt={`Capture d’écran du projet ${project.title}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="font-display text-3xl font-bold text-bordeaux/40 transition-colors duration-500 group-hover:text-bordeaux/70">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-display text-xl font-semibold text-anthracite transition-colors duration-300 group-hover:text-bordeaux">
          {project.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-anthracite/75">
          {project.shortDescription ?? project.description}
        </p>

        <div className="mt-auto pt-6">
          {technologiesAffichees.length > 0 && (
            <ul className="flex flex-wrap gap-2">
              {technologiesAffichees.map((tech) => (
                <li key={tech} className="badge-lift rounded-full bg-powder px-3 py-1 text-xs font-semibold text-bordeaux">
                  {tech}
                </li>
              ))}

              {technologiesRestantes.length > 0 && (
                <li
                  title={technologiesRestantes.join(', ')}
                  className="rounded-full border border-rose/70 px-3 py-1 text-xs font-semibold text-anthracite/75"
                >
                  +{technologiesRestantes.length}
                </li>
              )}
            </ul>
          )}

          <div className="mt-5 flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              onClick={() => onOpen(project)}
              className="card-cta inline-flex items-center rounded-full bg-bordeaux px-2.5 py-2 text-xs font-semibold text-cream transition-all duration-300 ease-out hover:bg-bordeaux-dark hover:-translate-y-0.5 active:scale-[0.97]"
            >
              Voir les détails
            </button>

            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-rose/70 px-2.5 py-2 text-xs font-semibold text-bordeaux transition-all duration-300 ease-out hover:border-bordeaux hover:bg-powder hover:-translate-y-0.5 active:scale-[0.97]"
              >
                <GithubIcon size={14} />
                Voir le code
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projets" className="section-ambient bg-powder/60 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Projets universitaires"
            title="Des projets académiques concrets"
            description="Réalisations issues de mes examens et travaux pratiques en informatique."
            center
          />
        </Reveal>

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 100} className="h-full">
              <ProjectCard project={project} onOpen={setSelectedProject} />
            </Reveal>
          ))}
        </div>

        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </section>
  )
}

export default Projects
