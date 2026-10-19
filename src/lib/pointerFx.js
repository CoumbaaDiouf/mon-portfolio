/**
 * Effets liés au pointeur (souris uniquement) :
 * - parallaxe très légère des éléments décoratifs du hero, via les variables
 *   CSS `--px` / `--py` (valeurs normalisées entre -1 et 1) ;
 * - halo qui suit le curseur à l'intérieur des cartes marquées `.card-spotlight`,
 *   via les variables `--mx` / `--my` (en pixels).
 *
 * Un seul écouteur global, lissé dans une boucle requestAnimationFrame qui
 * s'arrête d'elle-même dès que le pointeur ne bouge plus. Aucun effet n'est
 * installé sur les appareils tactiles ni si l'utilisateur préfère limiter
 * les animations.
 */

let lance = false

export function initPointerFx() {
  if (lance || typeof window === 'undefined') return undefined
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

  lance = true

  const racine = document.documentElement
  let cadre = 0
  let cibleX = 0
  let cibleY = 0
  let x = 0
  let y = 0
  let carte = null
  let rectCarte = null
  let defilementCache = -1
  let pointeurX = 0
  let pointeurY = 0

  const boucle = () => {
    x += (cibleX - x) * 0.16
    y += (cibleY - y) * 0.16

    const arrive = Math.abs(cibleX - x) < 0.001 && Math.abs(cibleY - y) < 0.001
    if (arrive) {
      x = cibleX
      y = cibleY
    }

    racine.style.setProperty('--px', x.toFixed(4))
    racine.style.setProperty('--py', y.toFixed(4))

    if (carte) {
      const defilement = window.scrollY
      if (!rectCarte || defilement !== defilementCache) {
        rectCarte = carte.getBoundingClientRect()
        defilementCache = defilement
      }

      carte.style.setProperty('--mx', `${(pointeurX - rectCarte.left).toFixed(1)}px`)
      carte.style.setProperty('--my', `${(pointeurY - rectCarte.top).toFixed(1)}px`)
    }

    cadre = arrive ? 0 : requestAnimationFrame(boucle)
  }

  const relancer = () => {
    if (!cadre) cadre = requestAnimationFrame(boucle)
  }

  const surDeplacement = (evenement) => {
    pointeurX = evenement.clientX
    pointeurY = evenement.clientY
    cibleX = (evenement.clientX / window.innerWidth - 0.5) * 2
    cibleY = (evenement.clientY / window.innerHeight - 0.5) * 2

    const cible =
      evenement.target instanceof Element ? evenement.target.closest('.card-spotlight') : null

    if (cible !== carte) {
      carte = cible
      rectCarte = cible ? cible.getBoundingClientRect() : null
      defilementCache = window.scrollY
    }

    relancer()
  }

  window.addEventListener('pointermove', surDeplacement, { passive: true })

  return () => {
    window.removeEventListener('pointermove', surDeplacement)
    if (cadre) cancelAnimationFrame(cadre)
    lance = false
  }
}
