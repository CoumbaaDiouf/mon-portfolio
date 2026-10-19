import { Download } from 'lucide-react'
import { profile } from '../data/profile'

/**
 * Bouton de téléchargement du CV.
 *
 * - `href` pointe vers le PDF réel placé dans `public/cv/` (voir `profile.cvUrl`).
 * - `download` impose le nom du fichier enregistré (voir `profile.cvFileName`) :
 *   le PDF est donc téléchargé et non simplement affiché dans un onglet.
 *   Si un navigateur ignore cet attribut, le PDF s'ouvre dans son lecteur natif.
 */
function CvDownloadButton({ className = '', iconSize = 15, onClick }) {
  return (
    <a
      href={profile.cvUrl}
      download={profile.cvFileName}
      type="application/pdf"
      onClick={onClick}
      className={className}
    >
      <Download size={iconSize} aria-hidden="true" />
      Télécharger mon CV
    </a>
  )
}

export default CvDownloadButton
