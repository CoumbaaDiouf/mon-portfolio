/**
 * En-tête réutilisable des sections : surtitre, titre et texte d'introduction.
 */
function SectionHeading({ eyebrow, title, description, center = false }) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bordeaux">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl leading-tight text-anthracite sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-anthracite/70 sm:text-lg">{description}</p>}
    </div>
  )
}

export default SectionHeading
