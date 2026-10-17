import { ExternalLink, FolderOpen } from 'lucide-react'
import { projects } from '../data/projects'
import { GithubIcon } from './icons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function ProjectCard({ project }) {
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

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-rose/60 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="aspect-video overflow-hidden bg-powder">
        {project.image ? (
          <img
            src={project.image}
            alt={`Capture d’écran du projet ${project.title}`}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="font-display text-3xl font-bold text-bordeaux/40">{project.title.charAt(0)}</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-display text-xl font-semibold text-anthracite">{project.title}</h3>
        <p className="mt-1 text-sm font-medium text-bordeaux/80">{project.context}</p>

        <p className="mt-4 text-sm leading-6 text-anthracite/75">{project.description}</p>

        {project.features?.length > 0 && (
          <ul className="mt-4 space-y-1.5">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-anthracite/70">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        {project.stack?.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li key={tech} className="rounded-full bg-powder px-3 py-1 text-xs font-semibold text-bordeaux">
                {tech}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 flex flex-wrap gap-3 pt-1">
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-bordeaux px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-bordeaux-dark"
            >
              <GithubIcon size={15} />
              Voir le code
            </a>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-bordeaux/40 px-5 py-2.5 text-sm font-semibold text-bordeaux transition-colors hover:bg-powder"
            >
              <ExternalLink size={15} aria-hidden="true" />
              Voir le projet
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section id="projets" className="bg-powder/60 py-20 sm:py-24">
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
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
