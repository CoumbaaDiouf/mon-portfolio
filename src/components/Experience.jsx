import { CalendarDays, Building2, MapPin } from 'lucide-react'
import { experiences } from '../data/experience'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const labelClasses = 'text-xs font-semibold uppercase tracking-[0.2em] text-bordeaux'
const chipClasses = 'badge-lift rounded-full bg-powder px-3 py-1 text-xs font-semibold text-bordeaux'

function Experience() {
  return (
    <section id="experience" className="section-ambient bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Expérience professionnelle"
            title="Neuf mois dans l’univers du numérique"
            description="Un stage qui m’a permis de réunir design d’interfaces, expérience utilisateur et création de contenu."
            center
          />
        </Reveal>

        <div className="mx-auto mt-14 max-w-3xl">
          {experiences.map((experience, index) => (
            <Reveal key={experience.id} delay={index * 100}>
              <article className="card-ring timeline-item relative rounded-3xl border border-rose/60 bg-white p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-bordeaux/45 hover:shadow-lg sm:p-10">
                {/* Pastille décorative */}
                <span
                  aria-hidden="true"
                  className="dot-pulse absolute -top-3 left-8 h-6 w-6 rounded-full bg-bordeaux ring-4 ring-cream"
                />

                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-anthracite">{experience.company}</h3>
                    <p className="mt-1 font-medium text-bordeaux">{experience.role}</p>
                  </div>

                  <span className="badge-lift rounded-full bg-powder px-4 py-1.5 text-sm font-semibold text-bordeaux">
                    {experience.duration}
                  </span>
                </div>

                <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-anthracite/75">
                  <li className="inline-flex items-center gap-2">
                    <CalendarDays size={15} className="text-bordeaux" aria-hidden="true" />
                    {experience.period}
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <Building2 size={15} className="text-bordeaux" aria-hidden="true" />
                    {experience.type}
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <MapPin size={15} className="text-bordeaux" aria-hidden="true" />
                    {experience.location}
                  </li>
                </ul>

                <p className="mt-5 text-sm leading-6 text-anthracite/80">{experience.summary}</p>

                {/* Les deux dimensions de l'expérience, en deux colonnes sobres */}
                {experience.axes?.length > 0 && (
                  <div className="mt-7">
                    <h4 className={labelClasses}>Dimensions de l’expérience</h4>
                    <div className="mt-4 grid gap-6 sm:grid-cols-2">
                      {experience.axes.map((axis, axisIndex) => (
                        <div
                          key={axis.id}
                          className={axisIndex > 0 ? 'sm:border-l sm:border-rose/60 sm:pl-6' : ''}
                        >
                          <p className="font-display text-base font-semibold text-bordeaux">{axis.title}</p>
                          <p className="mt-1.5 text-sm leading-6 text-anthracite/75">{axis.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Missions : liste éditoriale numérotée, séparateurs fins */}
                <div className="mt-7 border-t border-rose/60 pt-6">
                  <h4 className={labelClasses}>Missions</h4>

                  <ol className="mt-3">
                    {experience.missions.map((mission, missionIndex) => (
                      <li
                        key={mission.id}
                        className="border-t border-rose/60 py-4 first:border-t-0 first:pt-0 lg:grid lg:grid-cols-[16rem_1fr] lg:items-baseline lg:gap-x-6"
                      >
                        <div className="flex items-baseline gap-3">
                          <span className="font-display text-sm font-semibold tabular-nums text-bordeaux/80">
                            {String(missionIndex + 1).padStart(2, '0')}
                          </span>
                          <span className="font-semibold text-anthracite">{mission.label ?? mission.title}</span>
                        </div>

                        <p className="mt-1 text-sm leading-6 text-anthracite/75 lg:mt-0">
                          {mission.summary ?? mission.description}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Outils réellement utilisés */}
                {experience.tools?.length > 0 && (
                  <div className="mt-6 border-t border-rose/60 pt-6">
                    <h4 className={labelClasses}>Outils utilisés</h4>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {experience.tools.map((tool) => (
                        <li key={tool} className={chipClasses}>
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
