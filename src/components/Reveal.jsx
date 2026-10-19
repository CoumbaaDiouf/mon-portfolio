import { useEffect, useRef, useState } from 'react'

/**
 * Enveloppe discrète : fait apparaître son contenu au défilement.
 * Respecte la préférence système « réduire les animations ».
 */
function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(
    () =>
      typeof window === 'undefined' ||
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    if (visible) return undefined

    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [visible])

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={visible ? { transitionDelay: `${delay}ms`, '--reveal-delay': `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}

export default Reveal
