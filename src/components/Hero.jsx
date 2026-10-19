import { useState } from 'react'
import { ArrowRight, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import Reveal from './Reveal'

function Hero() {
    const [photoOk, setPhotoOk] = useState(true)

    return (
        <section id="accueil" className="section-ambient relative overflow-hidden bg-cream">
            {/* Éléments décoratifs discrets */}
            <div
                aria-hidden="true"
                className="blob float-slow px-parallax px-3 pointer-events-none absolute -left-24 top-24 h-64 w-64 bg-powder/70 blur-2xl"
            />
            <div
                aria-hidden="true"
                className="blob-2 float-slower px-parallax px-4 pointer-events-none absolute -right-16 bottom-10 h-52 w-52 bg-rose/40 blur-2xl"
            />

            {/* Composition décorative : formes organiques, filets fins, légendes */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="blob-2 drift-a px-parallax px-2 absolute right-[5%] top-[12%] h-40 w-40 bg-rose/25 blur-xl" />
                <div className="blob drift-b px-parallax px-4 absolute bottom-[8%] left-[46%] h-28 w-28 bg-bordeaux/10 blur-xl" />

                <span className="drift-c absolute bottom-[24%] right-[12%] hidden h-24 w-24 rounded-full border border-rose/70 md:block" />
                <span className="drift-a absolute left-[3%] top-[46%] hidden h-16 w-16 rounded-full border border-bordeaux/15 lg:block" />

                <span className="hero-rise hero-rise-2 absolute right-4 top-10 hidden h-40 w-px sm:block">
                    <span className="line-draw-y block h-full w-px" />
                </span>
                <span className="hero-rise hero-rise-4 absolute bottom-4 left-5 hidden text-[0.625rem] font-semibold uppercase tracking-[0.35em] text-bordeaux/45 md:inline-block">
                    UI/UX · Développement · Création digitale
                </span>
            </div>

            <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-28">
                <Reveal>
                    <p className="accent-rule hero-rise hero-rise-1 text-xs font-semibold uppercase tracking-[0.25em] text-bordeaux">
                        {profile.tagline}
                    </p>

                    <h1 className="mt-7 text-balance font-display tracking-tight text-anthracite">
                        <span className="hero-line block">
                            <span className="hero-line-inner hero-line-1 block text-4xl leading-[1.08] sm:text-5xl lg:text-[3.6rem]">
                                {profile.heroTitle.map((segment, index) =>
                                    segment.nom ? (
                                        <span key={index} className="hero-name">
                                            {segment.texte}
                                        </span>
                                    ) : (
                                        <span key={index}>{segment.texte}</span>
                                    ),
                                )}
                            </span>
                        </span>

                        <span className="hero-line mt-2 block sm:mt-3">
                            <span className="hero-line-inner hero-line-2 block text-xl leading-snug text-anthracite/85 sm:text-2xl lg:text-[1.75rem]">
                                {profile.heroHook.map((segment, index) => {
                                    const segmentClasses = [
                                        segment.accent ? 'text-bordeaux' : '',
                                        segment.italique ? 'italic' : '',
                                    ]
                                        .filter(Boolean)
                                        .join(' ')

                                    return (
                                        <span key={`${index}-${segment.texte}`} className={segmentClasses || undefined}>
                                            {segment.texte}
                                        </span>
                                    )
                                })}
                            </span>
                        </span>
                    </h1>

                    <p className="hero-blur hero-blur-1 mt-6 max-w-xl text-base leading-7 text-anthracite/75 sm:text-lg">
                        {profile.heroIntro}
                    </p>

                    <div className="hero-blur hero-blur-2 mt-9 flex flex-col gap-3 sm:flex-row">
                        <a
                            href="#projets"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-bordeaux px-7 py-3.5 font-semibold text-cream transition-all duration-300 ease-out hover:bg-bordeaux-dark hover:-translate-y-0.5 hover:shadow-md active:scale-[0.97]"
                        >
                            Découvrir mes projets
                            <ArrowRight size={17} aria-hidden="true" className="transition-transform duration-300 ease-out" />
                        </a>

                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-bordeaux/40 px-7 py-3.5 font-semibold text-bordeaux transition-all duration-300 ease-out hover:bg-powder hover:-translate-y-0.5 hover:border-bordeaux active:scale-[0.97]"
                        >
                            <Mail size={17} aria-hidden="true" />
                            Me contacter
                        </a>
                    </div>
                </Reveal>

                {/* Portrait ou composition graphique avec les initiales */}
                <Reveal delay={120}>
                    <div className="px-parallax px-1 relative mx-auto w-full max-w-sm">
                        <div
                            aria-hidden="true"
                            className="blob-2 float-soft pointer-events-none absolute -right-3 -top-3 h-full w-full bg-rose/50 sm:-right-4 sm:-top-4"
                        />

                        <div className="portrait-sheen relative aspect-4/5 overflow-hidden rounded-[2.5rem] border-4 border-white bg-powder shadow-lg">
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

                        <div className="hero-blur hero-blur-1 relative -mt-6 ml-6 inline-block rounded-2xl border border-rose/60 bg-white px-5 py-3 shadow-sm">
                            <p className="font-display text-lg font-semibold text-bordeaux">Créativité &amp; technique</p>
                            <p className="mt-0.5 text-sm text-anthracite/70">{profile.location}</p>
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* Invitation à explorer : filet dessiné et point qui descend */}
            <div
                aria-hidden="true"
                className="hero-rise hero-rise-5 pointer-events-none absolute inset-x-0 bottom-5 hidden justify-center lg:flex"
            >
                <div className="cue">
                    <span className="cue-label">Défiler</span>
                    <span className="cue-track">
                        <span className="cue-line" />
                        <span className="cue-dot" />
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Hero
