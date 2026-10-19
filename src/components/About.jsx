import { GraduationCap, MapPin, Sparkles } from 'lucide-react'
import { profile } from '../data/profile'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const highlights = [
  { icon: GraduationCap, label: 'Parcours', value: profile.status },
  { icon: Sparkles, label: 'Double casquette', value: 'Technique & créative' },
  { icon: MapPin, label: 'Basée à', value: profile.location },
]

function About() {
  return (
    <section id="apropos" className="section-ambient bg-powder/60 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="À propos" title="Un parcours à la croisée de l’informatique et du design" />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <Reveal>
            <div className="space-y-5">
              {profile.about.map((paragraph, index) => (
                <p key={index} className="text-base leading-8 text-anthracite/80 sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ul className="space-y-4">
              {highlights.map(({ icon: Icon, label, value }) => (
                <li key={label} className="card-sheen card-ring group flex items-start gap-4 rounded-2xl border border-rose/60 bg-white/70 p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-bordeaux/45 hover:shadow-md">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-powder text-bordeaux transition-transform duration-300 ease-out group-hover:scale-110">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-bordeaux/80">
                      {label}
                    </span>
                    <span className="mt-1 block font-medium text-anthracite">{value}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default About
