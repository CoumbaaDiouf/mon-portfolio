import { Mail, Send } from 'lucide-react'
import { profile } from '../data/profile'
import { GithubIcon, LinkedinIcon } from './icons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const socialLinks = [
  { label: 'LinkedIn', url: profile.links.linkedin, icon: LinkedinIcon },
  { label: 'GitHub', url: profile.links.github, icon: GithubIcon },
]

function Contact() {
  const missingLinks = socialLinks.filter((link) => !link.url).map((link) => link.label)

  return (
    <section id="contact" className="section-ambient bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Une idée, un projet, une question ?"
            description="N’hésitez pas à m’écrire : je serai ravie d’échanger avec vous."
            center
          />
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* Coordonnées */}
          <Reveal>
            <div className="space-y-5">
              <div className="card-sheen card-ring rounded-3xl border border-rose/60 bg-white p-7 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-bordeaux/45 hover:shadow-md">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-powder text-bordeaux">
                  <Mail size={19} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-anthracite">Adresse e-mail</h3>
                {profile.email ? (
                  <a
                    href={`mailto:${profile.email}`}
                    className="mt-1 block break-all font-medium text-bordeaux underline-offset-4 hover:underline"
                  >
                    {profile.email}
                  </a>
                ) : (
                  <p className="mt-1 text-sm text-anthracite/75">
                    À compléter dans <code className="font-semibold text-bordeaux">src/data/profile.js</code>
                  </p>
                )}
              </div>

              <div className="card-sheen card-ring rounded-3xl border border-rose/60 bg-white p-7 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-bordeaux/45 hover:shadow-md">
                <h3 className="font-display text-lg font-semibold text-anthracite">Me retrouver en ligne</h3>
                <ul className="mt-4 space-y-3">
                  {socialLinks.map(({ label, url, icon: Icon }) => (
                    <li key={label}>
                      {url ? (
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-3 font-medium text-bordeaux transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-bordeaux-dark"
                        >
                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-powder transition-transform duration-300 ease-out group-hover:scale-110">
                            <Icon size={16} aria-hidden="true" />
                          </span>
                          {label}
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-3 text-anthracite/75">
                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-powder">
                            <Icon size={16} aria-hidden="true" />
                          </span>
                          {label} — lien à compléter
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Prise de contact */}
          <Reveal delay={120}>
            <div className="card-sheen card-ring flex h-full flex-col rounded-3xl border border-rose/60 bg-white p-7 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-bordeaux/45 hover:shadow-md sm:p-9">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-powder text-bordeaux">
                <Send size={19} aria-hidden="true" />
              </span>

              <p className="mt-5 text-base leading-7 text-anthracite/80">
                Je réponds avec plaisir à toute question sur mes projets universitaires, mon expérience en UI/UX
                Design et Social Content Management, ou une future collaboration.
              </p>

              {profile.email && (
                <a
                  href={`mailto:${profile.email}`}
                  className="mt-7 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-bordeaux px-7 py-3.5 font-semibold text-cream transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-bordeaux-dark hover:shadow-md active:scale-[0.97]"
                >
                  <Send size={16} aria-hidden="true" />
                  M’envoyer un e-mail
                </a>
              )}
            </div>

          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Contact
