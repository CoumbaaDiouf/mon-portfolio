import { useState } from 'react'
import { Mail, Send } from 'lucide-react'
import { profile } from '../data/profile'
import { GithubIcon, LinkedinIcon } from './icons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const emptyForm = { name: '', email: '', message: '' }

function validate(form) {
  const errors = {}

  if (!form.name.trim()) {
    errors.name = 'Veuillez indiquer votre nom.'
  }

  if (!form.email.trim()) {
    errors.email = 'Veuillez indiquer votre adresse e-mail.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = 'Cette adresse e-mail semble invalide.'
  }

  if (!form.message.trim()) {
    errors.message = 'Veuillez écrire un message.'
  } else if (form.message.trim().length < 10) {
    errors.message = 'Votre message doit contenir au moins 10 caractères.'
  }

  return errors
}

function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((previous) => ({ ...previous, [name]: value }))
    if (errors[name]) {
      setErrors((previous) => ({ ...previous, [name]: undefined }))
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const validationErrors = validate(form)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      setStatus(null)
      return
    }

    // ➡️ Aucun service d’envoi n’est configuré : le formulaire ouvre votre messagerie.
    if (!profile.email) {
      setStatus({
        type: 'info',
        text: "Formulaire en mode démonstration : aucune adresse e-mail n'est configurée. Renseignez-la dans src/data/profile.js pour activer l'envoi via votre messagerie.",
      })
      return
    }

    const subject = encodeURIComponent(`Portfolio — Message de ${form.name.trim()}`)
    const body = encodeURIComponent(`${form.message.trim()}\n\n— ${form.name.trim()} (${form.email.trim()})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`

    setStatus({
      type: 'success',
      text: 'Votre messagerie s’est ouverte avec le message prérempli. Il ne reste qu’à l’envoyer.',
    })
    setForm(emptyForm)
  }

  const socialLinks = [
    { label: 'LinkedIn', url: profile.links.linkedin, icon: LinkedinIcon },
    { label: 'GitHub', url: profile.links.github, icon: GithubIcon },
  ]

  const fieldClasses = (hasError) =>
    `w-full rounded-xl border bg-cream px-4 py-3 text-sm text-anthracite placeholder:text-anthracite/40 transition-colors focus:outline-none focus:ring-2 focus:ring-bordeaux/40 ${
      hasError ? 'border-bordeaux' : 'border-rose/70'
    }`

  return (
    <section id="contact" className="bg-cream py-20 sm:py-24">
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
              <div className="rounded-3xl border border-rose/60 bg-white p-7 shadow-sm">
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
                  <p className="mt-1 text-sm text-anthracite/70">
                    À compléter dans <code className="font-semibold text-bordeaux">src/data/profile.js</code>
                  </p>
                )}
              </div>

              <div className="rounded-3xl border border-rose/60 bg-white p-7 shadow-sm">
                <h3 className="font-display text-lg font-semibold text-anthracite">Me retrouver en ligne</h3>
                <ul className="mt-4 space-y-3">
                  {socialLinks.map(({ label, url, icon: Icon }) => (
                    <li key={label}>
                      {url ? (
                        <a
                          href={url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-3 font-medium text-bordeaux transition-colors hover:text-bordeaux-dark"
                        >
                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-powder">
                            <Icon size={16} aria-hidden="true" />
                          </span>
                          {label}
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-3 text-anthracite/60">
                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-powder/70">
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

          {/* Formulaire */}
          <Reveal delay={120}>
            <form onSubmit={handleSubmit} noValidate className="rounded-3xl border border-rose/60 bg-white p-7 shadow-sm sm:p-9">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-anthracite">
                    Nom
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`mt-2 ${fieldClasses(errors.name)}`}
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" className="mt-2 text-sm font-medium text-bordeaux">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-anthracite">
                    Adresse e-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="vous@exemple.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`mt-2 ${fieldClasses(errors.email)}`}
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="mt-2 text-sm font-medium text-bordeaux">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-anthracite">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Écrivez votre message…"
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`mt-2 resize-y ${fieldClasses(errors.message)}`}
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="mt-2 text-sm font-medium text-bordeaux">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-bordeaux px-7 py-3.5 font-semibold text-cream transition-colors hover:bg-bordeaux-dark sm:w-auto"
              >
                <Send size={16} aria-hidden="true" />
                Envoyer le message
              </button>

              <p className="mt-4 text-xs leading-5 text-anthracite/60">
                Ce formulaire n’envoie pas de message automatiquement : il prépare un e-mail dans votre
                messagerie. Aucune donnée n’est collectée ni stockée sur ce site.
              </p>

              {status && (
                <p
                  role="status"
                  className={`mt-4 rounded-xl px-4 py-3 text-sm leading-6 ${
                    status.type === 'success' ? 'bg-powder text-bordeaux' : 'bg-powder/60 text-anthracite/80'
                  }`}
                >
                  {status.text}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Contact
