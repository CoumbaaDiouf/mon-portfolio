import { CalendarDays, Building2, MapPin } from 'lucide-react'
import { experiences } from '../data/experience'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function Experience() {
  return (
    <section id="experience" className="bg-cream py-20 sm:py-24">
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
              <article className="relative rounded-3xl border border-rose/60 bg-white p-8 shadow-sm sm:p-10">
                {/* Pastille décorative */}
                <span
                  aria-hidden="true"
                  className="absolute -top-3 left-8 h-6 w-6 rounded-full bg-bordeaux ring-4 ring-cream"
                />

                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-anthracite">{experience.company}</h3>
                    <p className="mt-1 font-medium text-bordeaux">{experience.role}</p>
                  </div>

                  <span className="rounded-full bg-powder px-4 py-1.5 text-sm font-semibold text-bordeaux">
                    {experience.duration}
                  </span>
                </div>

                <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-anthracite/70">
                  <li className="inline-flex items-center gap-2">
                    <CalendarDays size={15} className="text-bordeaux/70" aria-hidden="true" />
                    {experience.period}
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <Building2 size={15} className="text-bordeaux/70" aria-hidden="true" />
                    Stage
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <MapPin size={15} className="text-bordeaux/70" aria-hidden="true" />
                    {experience.location}
                  </li>
                </ul>

                <p className="mt-5 text-sm leading-6 text-anthracite/75">{experience.summary}</p>

                <h4 className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-bordeaux/80">
                  Missions
                </h4>

                <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                  {experience.missions.map((mission) => (
                    <li key={mission.id} className="rounded-2xl bg-powder/50 p-5">
                      <p className="font-semibold text-anthracite">{mission.title}</p>
                      <p className="mt-1.5 text-sm leading-6 text-anthracite/70">{mission.description}</p>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 rounded-xl border border-rose/60 bg-cream px-4 py-3 text-xs leading-5 text-anthracite/70">
                  Complétez les dates et le détail réel de vos missions dans{' '}
                  <code className="font-semibold text-bordeaux">src/data/experience.js</code>.
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
