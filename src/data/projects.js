/**
 * Projets universitaires.
 *
 * ➡️ Champs facultatifs : `image`, `codeUrl` et `demoUrl`.
 *    Laissez-les à `null` tant que la ressource n'existe pas :
 *    aucune image ni lien fictif n'est affiché par le site.
 *
 * ➡️ Pour ajouter un projet, copiez un objet et complétez-le
 *    (mettez `placeholder: true` pour afficher un emplacement vide).
 *
 * Structure d'un projet :
 *  - title / category    : titre et domaine affichés sur la carte
 *  - context             : cadre universitaire du projet
 *  - shortDescription    : texte court visible sur la carte
 *  - description         : texte complet, affiché dans la fenêtre de détails
 *  - objectives          : objectifs du projet (fenêtre de détails)
 *  - technologies        : badges affichés sur la carte et dans les détails
 *  - skills              : compétences mises en pratique (fenêtre de détails)
 *  - features            : fonctionnalités réellement implémentées (détails)
 *  - extraSections       : sections libres supplémentaires (détails), au format
 *                          [{ title, items }] — utile pour documenter des étapes,
 *                          une méthodologie ou des résultats propres à un projet.
 */

export const projects = [
  {
    id: 'gainde-eats',
    title: 'Gaindé Eats — Gestion et analyse des commandes d’un restaurant',
    category: 'Bases de données et applications web',
    context: 'Travaux pratiques — Systèmes de gestion de bases de données (SGBD)',
    shortDescription:
      'Application de gestion et d’analyse des commandes d’un restaurant : tableau de bord, point de vente et génération de tickets.',
    description:
      "Gaindé Eats est une application de gestion et d’analyse des commandes conçue pour un restaurant. Le projet commence par la modélisation de la base de données — Schéma Conceptuel puis Modèle Logique selon la méthode Merise — autour des entités Client, Restaurant, Plat et Commande, avant son implémentation dans PostgreSQL. Une interface web développée avec Streamlit vient ensuite s’appuyer sur cette base : un tableau de bord réunissant des indicateurs et des graphiques interactifs, un point de vente permettant de créer des commandes et de générer des tickets, ainsi que la gestion des plats, des clients et des restaurants partenaires. L’accès à l’application est protégé par une authentification dont les mots de passe sont hachés avec bcrypt.",
    objectives: [
      'Modéliser la base de données avec un MCD puis un MLD (méthode Merise)',
      'Implémenter la base de données relationnelle dans PostgreSQL',
      'Développer une interface web connectée à la base de données',
      'Suivre l’activité du restaurant à partir d’indicateurs et de graphiques',
      'Sécuriser l’accès à l’application par une authentification',
    ],
    technologies: [
      'Python',
      'Streamlit',
      'PostgreSQL',
      'psycopg2',
      'Pandas',
      'Plotly',
      'bcrypt',
      'Git',
      'GitHub',
    ],
    skills: [
      'Conception d’une base de données relationnelle (MCD / MLD)',
      'Écriture de requêtes SQL et de jointures',
      'Connexion d’une application Python à une base PostgreSQL',
      'Hachage sécurisé des mots de passe avec bcrypt',
      'Création d’un tableau de bord et de graphiques interactifs',
      'Manipulation de données avec Pandas',
    ],
    features: [
      'Tableau de bord : indicateurs, filtres et graphiques interactifs (Plotly)',
      'Point de vente : panier, catégories et génération de tickets',
      'Gestion des plats : ajout, modification du stock et du prix, suppression',
      'Gestion des clients : ajout, recherche et suppression',
      'Gestion des restaurants partenaires',
      'Authentification avec mots de passe hachés (bcrypt)',
    ],
    extraSections: [
      {
        title: 'Modélisation de la base de données',
        items: [
          'MCD (méthode Merise) : entités Client, Restaurant, Plat et Commande',
          'Association PASSE : un client peut effectuer plusieurs commandes',
          'Association PROPOSE : un restaurant propose plusieurs plats',
          'Association CONTIENT : une commande peut contenir plusieurs plats (attribut « quantité »)',
          'MLD : table associative (LIGNE_COMMANDE dans le modèle, table « contenir » dans l’implémentation) pour la relation plusieurs-à-plusieurs entre commandes et plats',
        ],
      },
      {
        title: 'Structure de la base de données',
        items: [
          'utilisateurs — comptes d’accès à l’application',
          'restaurant — restaurants partenaires',
          'plat — plats avec prix, stock et catégorie',
          'client — clients enregistrés',
          'commande — commandes avec statut et date',
          'contenir — lignes de commande (plat et quantité)',
        ],
      },
    ],
    image: '/images/Gainde-Eats.png',
    codeUrl: 'https://github.com/CoumbaaDiouf/gainde_eats_app.git',
    demoUrl: null,
    placeholder: false,
  },
  {
    id: 'analyse-pollution',
    title: 'Analyse et nettoyage des données de mortalité liée à la pollution atmosphérique',
    category: 'Analyse de données et machine learning',
    context: 'Projet universitaire — analyse de données avec Python',
    shortDescription:
      'Notebook Python de nettoyage et d’analyse de données (1990–2017) : visualisations, corrélations et prévisions avec Random Forest et SARIMAX.',
    description:
      "Ce projet porte sur le nettoyage et l’analyse d’un jeu de données relatives à la mortalité liée à la pollution atmosphérique, à l’échelle mondiale entre 1990 et 2017. Le notebook commence par explorer les données brutes, puis les nettoie : renommage des colonnes en français, suppression des doublons et des valeurs manquantes, traitement des valeurs négatives aberrantes, conversion du type de l’année, puis export d’un jeu de données propre. Vient ensuite une analyse exploratoire : statistiques descriptives, matrice de corrélation, comparaison entre pays et évolution mondiale. Le projet se termine par deux approches de prévision appliquées à l’Afghanistan — un modèle de forêt aléatoire (Random Forest) et un modèle de série temporelle (SARIMAX) — comparées sur un même graphique.",
    objectives: [
      'Nettoyer un jeu de données (doublons, valeurs manquantes, valeurs aberrantes)',
      'Réaliser une analyse exploratoire et des visualisations',
      'Comparer les tendances entre différents pays',
      'Mettre en œuvre des modèles prédictifs (Random Forest, SARIMAX)',
    ],
    technologies: [
      'Python',
      'Jupyter Notebook',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'scikit-learn',
      'statsmodels',
    ],
    skills: [
      'Nettoyage et préparation de données avec Pandas',
      'Analyse exploratoire et statistiques descriptives',
      'Visualisation de données avec Matplotlib et Seaborn',
      'Modélisation par forêt aléatoire (scikit-learn)',
      'Prévision de séries temporelles (SARIMAX, statsmodels)',
    ],
    features: [],
    extraSections: [
      {
        title: 'Étapes de nettoyage des données',
        items: [
          'Renommage des colonnes en français',
          'Suppression des doublons',
          'Suppression des valeurs manquantes',
          'Détection et traitement des valeurs négatives aberrantes',
          'Conversion de la colonne « année » en entier et réinitialisation de l’index',
          'Export du jeu de données nettoyé (pollution_clean.csv)',
        ],
      },
      {
        title: 'Analyses et visualisations',
        items: [
          'Statistiques descriptives du jeu de données',
          'Matrice de corrélation entre les types de pollution',
          'Top 10 des pays les plus touchés en 2017',
          'Comparaison de six pays (Afghanistan, Inde, Chine, Sénégal, France, États-Unis)',
          'Évolution de la moyenne mondiale entre 1990 et 2017',
        ],
      },
      {
        title: 'Modélisation et prévisions',
        items: [
          'Prévisions par forêt aléatoire (Random Forest) pour l’Afghanistan',
          'Prévisions par série temporelle (SARIMAX) pour l’Afghanistan',
          'Comparaison graphique des deux modèles',
        ],
      },
      {
        title: 'Quelques résultats',
        items: [
          'Jeu de données brut de 6 468 lignes réduit à 5 488 lignes après nettoyage',
          '196 pays couverts, sur la période 1990–2017',
          'Moyenne mondiale passée d’environ 108 à 67 décès pour 100 000 habitants entre 1990 et 2017',
        ],
      },
    ],
    image: '/images/Analyse-Pollution.png',
    codeUrl: 'https://github.com/CoumbaaDiouf/Analyse-et-nettoyage-de-donn-es-d-entreprise.git',
    demoUrl: null,
    placeholder: false,
  },
  {
    id: 'cloudsim-simulator',
    title: 'CloudSim Simulator',
    category: 'Java et Cloud Computing',
    context: 'Projet universitaire — Java et Cloud Computing',
    shortDescription:
      'Application desktop de configuration et de simulation d’environnements Cloud Computing.',
    description:
      "Développement d'une application desktop destinée à configurer et simuler des environnements Cloud Computing, puis à visualiser les résultats obtenus. Ce projet vise à explorer les principes de la simulation de ressources informatiques dans le cloud et à mettre en pratique la programmation orientée objet, l'intégration d'une bibliothèque de simulation et la gestion des dépendances d'un projet Java.",
    objectives: [
      'Configurer des paramètres de simulation cloud depuis une application desktop',
      'Explorer les principes de la simulation de ressources informatiques dans le cloud',
      'Mettre en pratique la programmation orientée objet',
      'Gérer les dépendances et l’organisation d’un projet Java',
    ],
    technologies: [
      'Java',
      'CloudSim 7.0.1',
      'Maven',
      'JDK 21',
      // ➡️ L'interface a été développée avec JavaFX (runtime JavaFX 21 présent sur la machine) :
      //    retirez cette ligne si ce n'est pas le cas dans votre implémentation.
      'JavaFX',
    ],
    skills: [
      'Programmation orientée objet',
      'Simulation d’environnements Cloud Computing',
      'Gestion des dépendances avec Maven',
      'Organisation d’un projet Java',
      'Conception d’une interface graphique desktop',
    ],
    // ➡️ Ajustez cette liste aux fonctionnalités réellement disponibles dans l'application.
    features: [
      'Configuration des paramètres de simulation',
      'Lancement de simulations avec la bibliothèque CloudSim',
      'Consultation des résultats produits par le simulateur',
      'Enregistrement et consultation de l’historique des simulations',
    ],
    // ➡️ Ajoutez une capture de l'application et de ses résultats dans public/images/.
    image: '/images/CloudSim-Simulator.png',
    codeUrl: null,
    demoUrl: null,
    placeholder: false,
  },
  {
    id: 'sen-friperie',
    title: 'SEN-Friperie — Application web de gestion de stock et de vente',
    category: 'Développement web et gestion commerciale',
    context: 'Projet universitaire — développement web full-stack',
    shortDescription:
      'Application web de digitalisation de la gestion d’une boutique de vêtements de seconde main : produits, stocks, ventes, clients et rapports.',
    description:
      "SEN-Friperie est une application web conçue pour digitaliser la gestion d'une boutique de vêtements de seconde main. Elle centralise la gestion des produits, des stocks, des approvisionnements, des ventes, des clients, des fournisseurs et des utilisateurs. Elle prévoit également une interface d'administration, une gestion des droits d'accès et des rapports destinés au suivi de l'activité commerciale. Le projet s'appuie sur une architecture web séparant le frontend et le backend, avec une base de données PostgreSQL hébergée via Supabase.",
    objectives: [
      'Digitaliser la gestion d’une boutique de friperie',
      'Centraliser les informations commerciales',
      'Améliorer le suivi des stocks et des ventes',
      'Organiser les données dans une architecture web connectée à une base de données',
    ],
    technologies: [
      'React 19',
      'Vite',
      'React Router',
      'Python',
      'Django 5',
      'Django REST Framework',
      'PostgreSQL',
      'Supabase',
      'Git',
      'GitHub',
    ],
    skills: [
      'Développement d’une API REST avec Django REST Framework',
      'Conception d’une interface React et gestion du routage',
      'Modélisation d’une base de données relationnelle',
      'Mise en place de règles métier et de droits d’accès',
      'Travail collaboratif avec Git et GitHub',
    ],
    features: [
      'Tableau de bord et suivi de l’activité commerciale',
      'Gestion des produits, catégories et stocks',
      'Gestion des approvisionnements et des ventes',
      'Gestion des clients et des fournisseurs',
      'Gestion des utilisateurs, des rôles et des droits d’accès',
      'Rapports et exports destinés au suivi de l’activité',
    ],
    // ➡️ Ajoutez une capture d'écran de l'application dans public/images/ puis indiquez son chemin.
    image: '/images/SEN-FRIPERIE.png',
    // ➡️ Renseignez ces liens si le dépôt et une démonstration en ligne existent réellement.
    codeUrl: null,
    demoUrl: null,
    placeholder: false,
  },
  {
    id: 'application-meteo',
    title: 'Application météo',
    category: 'Développement web',
    context: 'Projet universitaire — mise en pratique de JavaScript',
    shortDescription:
      'Site web météo interactif développé en HTML, CSS et JavaScript, avec recherche de ville et prévisions.',
    description:
      "Développement d'un site web de météo dans le cadre d'un projet universitaire visant à mettre en pratique JavaScript. Ce projet m'a permis de travailler sur la création d'une interface web, la structuration des pages et l'utilisation de JavaScript pour ajouter des fonctionnalités interactives.",
    objectives: [
      "Mettre en pratique les bases de JavaScript dans le cadre du développement d'un site web interactif consacré à la météo.",
    ],
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      // Vérifié dans le code du projet : requêtes vers l'API OpenWeatherMap.
      'API OpenWeatherMap',
    ],
    skills: [
      "Structure d'une page web avec HTML",
      'Mise en forme avec CSS',
      'Programmation JavaScript',
      'Manipulation du DOM et gestion des interactions',
    ],
    // Fonctionnalités présentes dans le code source du projet.
    features: [
      'Recherche de la météo par ville',
      "Prévisions sur 5 jours",
      'Géolocalisation de la position de l’utilisateur',
      'Thème visuel qui change selon les conditions météo',
      'Accès rapide à une liste de grandes villes',
    ],
    // ➡️ Ajoutez une capture d'écran dans public/images/ puis indiquez son chemin ici.
    image: '/images/Sen-Meteo.png',
    // ➡️ Renseignez l'URL du dépôt GitHub si le projet y est publié.
    codeUrl: 'https://github.com/CoumbaaDiouf/Sen-Meteo.git',
    demoUrl: null,
    placeholder: false,
  },
  {
    id: 'ssh-winscp',
    title: 'Configuration SSH et transfert de fichiers avec WinSCP',
    category: 'Systèmes, réseaux et administration',
    context: 'Travaux pratiques — administration système et réseaux',
    shortDescription:
      'Tutoriel technique de mise en relation sécurisée entre une machine virtuelle Ubuntu et un poste Windows.',
    description:
      "Réalisation d'un tutoriel technique visant à établir une communication sécurisée entre une machine virtuelle Ubuntu et un poste Windows grâce au protocole SSH et à l'outil WinSCP. Le projet consiste à configurer l'environnement réseau de VirtualBox, à mettre en place un serveur SSH sur Ubuntu, à établir une connexion distante depuis Windows et à transférer des fichiers entre les deux systèmes sans utiliser de support physique externe.",
    objectives: [
      'Comprendre le fonctionnement du protocole SSH',
      'Configurer un serveur SSH sur une machine virtuelle Ubuntu',
      'Mettre en place une communication entre Ubuntu et Windows',
      'Se familiariser avec la configuration réseau de VirtualBox',
      'Utiliser WinSCP pour transférer des fichiers de manière sécurisée',
      'Documenter les différentes étapes dans un tutoriel',
    ],
    technologies: ['Ubuntu', 'Windows', 'VirtualBox', 'SSH', 'WinSCP'],
    skills: [
      'Administration système de base',
      'Configuration réseau en environnement virtualisé',
      'Connexion distante sécurisée',
      'Transfert de fichiers entre systèmes',
      'Rédaction de documentation technique',
    ],
    features: [
      'Installation et activation du serveur OpenSSH sur Ubuntu',
      'Passage de l’adaptateur VirtualBox du mode NAT au mode « Pont »',
      'Connexion distante depuis Windows via SFTP (port 22)',
      'Transferts de fichiers testés dans les deux sens',
      'Tutoriel documenté étape par étape avec captures d’écran',
    ],
    image: '/images/projet-ssh-winscp.png',
    codeUrl: 'https://github.com/CoumbaaDiouf/Tutoriel-ssh-winscp.git',
    demoUrl: null,
    placeholder: false,
  },
  
]
