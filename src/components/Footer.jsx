import { ArrowUp } from 'lucide-react'
import { profile } from '../data/profile'
import { GithubIcon, LinkedinIcon } from './icons'

const year = new Date().getFullYear()

function Footer() {
  const socialLinks = [
    { label: 'LinkedIn', url: profile.links.linkedin, icon: LinkedinIcon },
    { label: 'GitHub', url: profile.links.github, icon: GithubIcon },
  ]

  return (
    <footer className="border-t border-rose/60 bg-powder/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 text-center sm:px-8 md:flex-row md:text-left">
        <div>
          <p className="font-display text-lg font-semibold text-anthracite">{profile.fullName}</p>
          <p className="mt-1 text-sm text-anthracite/65">
            {profile.status} — {profile.location}
          </p>
        </div>

        <div className="flex items-center gap-5">
          {socialLinks.map(({ label, url, icon: Icon }) =>
            url ? (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Profil ${label} de ${profile.fullName}`}
                className="text-anthracite/70 transition-colors hover:text-bordeaux"
              >
                <Icon size={19} />
              </a>
            ) : (
              <span key={label} aria-hidden="true" className="text-anthracite/30">
                <Icon size={19} />
              </span>
            ),
          )}

          <a
            href="#accueil"
            aria-label="Revenir en haut de page"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-bordeaux text-cream transition-colors hover:bg-bordeaux-dark"
          >
            <ArrowUp size={17} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="border-t border-rose/50 py-5">
        <p className="mx-auto max-w-6xl px-5 text-center text-xs text-anthracite/60 sm:px-8">
          © {year} {profile.fullName}. Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}

export default Footer
