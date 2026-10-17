import { GraduationCap } from 'lucide-react'
import { education } from '../data/education'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function Education() {
  return (
    <section id="formation" className="bg-powder/60 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="Formation" title="Mon parcours académique" center />
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl space-y-6">
          {education.map((entry, index) => (
            <Reveal key={entry.id} delay={index * 100}>
              <article className="flex items-start gap-5 rounded-3xl border border-rose/60 bg-white p-7 shadow-sm">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-powder text-bordeaux">
                  <GraduationCap size={22} aria-hidden="true" />
                </span>

                <div>
                  <h3 className="font-display text-xl font-semibold text-anthracite">{entry.title}</h3>
                  <p className="mt-1 font-medium text-bordeaux">{entry.school}</p>
                  <p className="mt-1 text-sm text-anthracite/70">{entry.period}</p>

                  {entry.details?.length > 0 && (
                    <ul className="mt-4 space-y-1.5">
                      {entry.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2 text-sm text-anthracite/70">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose" aria-hidden="true" />
                          {detail}
                        </li>
                      ))}
                    </ul>
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
