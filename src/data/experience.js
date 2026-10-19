/**
 * Expérience professionnelle.
 * ➡️ Toutes les informations de la section sont centralisées ici.
 *    Ajoutez des missions en copiant un objet du tableau `missions`.
 * ➡️ `label` et `summary` : version courte (titre et résumé) affichée dans la
 *    liste de missions. `title`, `description`, `dimension` et `tools` restent
 *    la version détaillée, conservée dans ce fichier.
 */

export const experiences = [
  {
    id: 'neetali',
    company: 'STAGE',
    role: 'UI/UX Designer et Social Content Manager',
    type: 'Stage',
    duration: '9 mois',
    period: 'Juin 2025 - Février 2026',
    location: 'Dakar, Sénégal',
    summary:
      "Stage de neuf mois au cours duquel j'ai contribué à la conception et au prototypage de l'application Neetali, tout en prenant part à la planification éditoriale, à la création de contenus et au suivi des performances de la communication digitale de l'entreprise.",

    // Les deux dimensions complémentaires de l'expérience
    axes: [
      {
        id: 'uiux',
        title: 'UI/UX Design',
        description:
          "Prototypage des versions MVP 1.0 et 2.0 de l'application Neetali sur Figma : représentation visuelle des interfaces et préparation des prototypes.",
      },
      {
        id: 'social',
        title: 'Social Content Management',
        description:
          'Planification éditoriale trimestrielle, création de contenus audiovisuels et suivi des statistiques de visibilité et de notoriété sur les réseaux sociaux.',
      },
    ],

    missions: [
      {
        id: 'calendrier-editorial',
        label: 'Planification éditoriale',
        summary: 'Élaboration du calendrier éditorial trimestriel.',
        dimension: 'Communication digitale',
        title: 'Élaboration du calendrier éditorial trimestriel',
        description:
          "Participation à l'élaboration du calendrier éditorial trimestriel, afin de structurer et de planifier les publications destinées aux réseaux sociaux. Cette mission a contribué à l'organisation des contenus et à la planification des actions de communication digitale.",
      },
      {
        id: 'prototypage-mvp',
        label: 'Prototypage UI/UX',
        summary: 'Conception des prototypes des MVP 1.0 et 2.0 de l’application Neetali sur Figma.',
        dimension: 'UI/UX Design',
        title: 'Prototypage des versions MVP 1.0 et 2.0 de l’application Neetali',
        description:
          "Participation à la conception et au prototypage des versions MVP 1.0 et 2.0 de l'application Neetali avec Figma. Cette mission s'inscrivait dans le processus de conception de l'application et a porté sur la représentation visuelle des interfaces et la préparation des prototypes.",
        tools: ['Figma'],
      },
      {
        id: 'benchmarking',
        label: 'Benchmarking et brainstorming',
        summary: 'Participation active aux ateliers de recherche, d’analyse et de génération d’idées.',
        dimension: 'Réflexion collective',
        title: 'Participation aux ateliers de benchmarking et de brainstorming',
        description:
          "Participation active aux ateliers de benchmarking et de brainstorming, afin de contribuer à la réflexion collective, à l'exploration de pistes créatives et à l'élaboration de propositions dans le cadre des projets de l'entreprise.",
      },
      {
        id: 'contenus-audiovisuels',
        label: 'Création de contenus audiovisuels',
        summary: 'Conception et création de contenus pour les réseaux sociaux.',
        dimension: 'Social Content Management',
        title: 'Conception et création de contenus audiovisuels pour les réseaux sociaux',
        description:
          "Participation à la conception et à la création de contenus audiovisuels destinés aux réseaux sociaux, dans le cadre des activités de communication digitale de Neetali. Une mission au cœur de la dimension créative du rôle de Social Content Manager.",
      },
      {
        id: 'statistiques',
        label: 'Suivi des performances',
        summary: 'Présentation mensuelle des statistiques de visibilité et de notoriété sur les plateformes.',
        dimension: 'Communication digitale',
        title: 'Analyse mensuelle des statistiques de visibilité et de notoriété',
        description:
          "Préparation et présentation mensuelles des statistiques relatives à la visibilité et à la notoriété de l'entreprise sur les différentes plateformes sociales. Cette mission a permis de participer au suivi des performances de la communication digitale et à la présentation des indicateurs disponibles.",
      },
    ],

    // Domaines et outils réellement associés aux missions ci-dessus
    domains: ['UI/UX Design', 'Social Content Management', 'Communication digitale'],
    tools: ['Figma','Canva', 'Adobe Illustrator', 'CapCut', 'Meta Business Suite', ],
  },
]
