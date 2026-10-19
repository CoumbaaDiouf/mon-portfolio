import { GraduationCap } from 'lucide-react'
import { education } from '../data/education'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function Education() {
  return (
    <section id="formation" className="section-ambient bg-powder/60 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="Formation" title="Mon parcours académique" center />
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl space-y-6">
          {education.map((entry, index) => (
            <Reveal key={entry.id} delay={index * 100}>
              <article className="card-sheen card-ring timeline-item flex items-start gap-5 rounded-3xl border border-rose/60 bg-white p-7 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-bordeaux/45 hover:shadow-lg">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-powder text-bordeaux">
                  <GraduationCap size={22} aria-hidden="true" />
                </span>

                <div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <h3 className="font-display text-xl font-semibold text-anthracite">{entry.title}</h3>
                    {entry.status && (
                      <span className="badge-lift rounded-full bg-powder px-3 py-1 text-xs font-semibold text-bordeaux">
                        {entry.status === 'obtenu' ? 'Diplôme obtenu' : 'En cours'}
                      </span>
                    )}
                  </div>

                  <p className="mt-1 font-medium text-bordeaux">{entry.school}</p>
                  {entry.period && <p className="mt-1 text-sm text-anthracite/75">{entry.period}</p>}
                  {entry.program && <p className="mt-1 text-sm text-anthracite/75">{entry.program}</p>}

                  {entry.description && (
                    <p className="mt-3 text-sm leading-6 text-anthracite/75">{entry.description}</p>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
