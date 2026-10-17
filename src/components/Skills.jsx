import { Code2, Megaphone, PenTool } from 'lucide-react'
import { skillCategories } from '../data/skills'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const categoryIcons = {
  developpement: Code2,
  uiux: PenTool,
  communication: Megaphone,
}

function Skills() {
  return (
    <section id="competences" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Compétences"
            title="Des compétences techniques et créatives"
            description="Trois domaines complémentaires qui structurent mon profil : développement, design d’interfaces et communication digitale."
            center
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = categoryIcons[category.id] ?? Code2

            return (
              <Reveal key={category.id} delay={index * 100}>
                <article className="h-full rounded-3xl border border-rose/60 bg-white p-7 shadow-sm transition-shadow hover:shadow-md">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-powder text-bordeaux">
                    <Icon size={20} aria-hidden="true" />
                  </span>

                  <h3 className="mt-5 font-display text-xl font-semibold text-anthracite">{category.title}</h3>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-rose/70 bg-cream px-3.5 py-1.5 text-sm font-medium text-bordeaux"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
