/**
 * Compétences classées par catégorie.
 * ➡️ Ne gardez que les compétences réellement acquises :
 *    supprimez simplement une ligne de la liste pour la retirer du site.
 */

export const skillCategories = [
  {
    id: 'developpement',
    title: 'Développement web',
    skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Git et GitHub'],
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    // ➡️ Retirez « Recherche utilisateur » ou « Figma » si vous ne les pratiquez pas encore.
    skills: [
      'Wireframing',
      'Prototypage',
      "Conception d'interfaces",
      "Organisation de l'information",
      'Figma',
      'Recherche utilisateur',
    ],
  },
  {
    id: 'communication',
    title: 'Communication digitale',
    skills: [
      'Social Content Management',
      'Création de contenus digitaux',
      'Organisation éditoriale',
      'Communication sur les réseaux sociaux',
    ],
  },
]
