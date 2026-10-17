import { useState } from 'react'
import { ArrowRight, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import Reveal from './Reveal'

function Hero() {
  const [photoOk, setPhotoOk] = useState(true)

  return (
    <section id="accueil" className="relative overflow-hidden bg-cream">
      {/* Éléments décoratifs discrets */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-24 h-64 w-64 rounded-full bg-powder/70 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 bottom-10 h-52 w-52 rounded-full bg-rose/40 blur-2xl"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-28">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bordeaux">{profile.tagline}</p>

          <h1 className="mt-5 font-display text-4xl leading-[1.15] text-anthracite sm:text-5xl lg:text-[3.4rem]">
            {profile.heroTitle}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-anthracite/75 sm:text-lg">{profile.heroIntro}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projets"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-bordeaux px-7 py-3.5 font-semibold text-cream transition-colors hover:bg-bordeaux-dark"
            >
              Découvrir mes projets
              <ArrowRight size={17} aria-hidden="true" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-bordeaux/40 px-7 py-3.5 font-semibold text-bordeaux transition-colors hover:bg-powder"
            >
              <Mail size={17} aria-hidden="true" />
              Me contacter
            </a>
          </div>
        </Reveal>

        {/* Portrait ou composition graphique avec les initiales */}
        <Reveal delay={120}>
          <div className="relative mx-auto w-full max-w-sm">
            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 h-full w-full rounded-[2.5rem] bg-rose/50 sm:-right-4 sm:-top-4"
            />

            <div className="relative aspect-4/5 overflow-hidden rounded-[2.5rem] border-4 border-white bg-powder shadow-lg">
              {photoOk ? (
                <img
                  src={profile.photoUrl}
                  alt={`Portrait de ${profile.fullName}`}
                  onError={() => setPhotoOk(false)}
                  className="h-full w-full object-cover object-center"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center" aria-hidden="true">
                  <span className="font-display text-7xl font-bold text-bordeaux/70">{profile.initials}</span>
                </div>
              )}
            </div>

            <div className="relative -mt-6 ml-6 inline-block rounded-2xl border border-rose/60 bg-white px-5 py-3 shadow-sm">
              <p className="font-display text-lg font-semibold text-bordeaux">Créativité &amp; technique</p>
              <p className="mt-0.5 text-sm text-anthracite/70">{profile.location}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Hero
