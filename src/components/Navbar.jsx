import { useEffect, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { profile } from '../data/profile'

const links = [
  { label: 'Accueil', href: '#accueil', id: 'accueil' },
  { label: 'À propos', href: '#apropos', id: 'apropos' },
  { label: 'Compétences', href: '#competences', id: 'competences' },
  { label: 'Projets', href: '#projets', id: 'projets' },
  { label: 'Expérience', href: '#experience', id: 'experience' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('accueil')

  // Surlignage du lien correspondant à la section visible
  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  // Fermeture du menu mobile avec la touche Échap
  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const linkClasses = (id) =>
    `text-sm font-medium transition-colors hover:text-bordeaux ${
      activeSection === id ? 'text-bordeaux' : 'text-anthracite/75'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-rose/60 bg-cream/95 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8"
        aria-label="Navigation principale"
      >
        <a href="#accueil" className="flex items-center gap-2.5" aria-label={`${profile.fullName} — accueil`}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-bordeaux font-display text-base font-bold text-cream">
            {profile.initials}
          </span>
          <span className="hidden font-display text-lg font-semibold text-anthracite sm:block">
            {profile.fullName}
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className={linkClasses(link.id)}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.cvUrl}
            download
            className="hidden items-center gap-2 rounded-full bg-bordeaux px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-bordeaux-dark sm:inline-flex"
          >
            <Download size={15} aria-hidden="true" />
            Télécharger mon CV
          </a>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-rose p-2.5 text-bordeaux transition-colors hover:bg-powder lg:hidden"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div id="menu-mobile" className="border-t border-rose/60 bg-cream px-5 pb-6 pt-2 lg:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block rounded-xl px-4 py-3 font-medium transition-colors hover:bg-powder hover:text-bordeaux ${
                activeSection === link.id ? 'bg-powder text-bordeaux' : 'text-anthracite/80'
              }`}
            >
              {link.label}
            </a>
          ))}

          <a
            href={profile.cvUrl}
            download
            onClick={() => setMenuOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-bordeaux px-4 py-3 font-semibold text-cream transition-colors hover:bg-bordeaux-dark"
          >
            <Download size={16} aria-hidden="true" />
            Télécharger mon CV
          </a>
        </div>
      )}
    </header>
  )
}

export default Navbar
