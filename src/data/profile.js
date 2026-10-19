/**
 * Informations personnelles.
 * ➡️ C'est le seul endroit à modifier pour mettre à jour votre identité,
 *    vos liens et votre photo.
 */

export const profile = {
  firstName: 'Coumba',
  lastName: 'Diouf',
  fullName: 'Coumba Diouf',
  initials: 'CD',

  status: 'Étudiante en Licence 3 Informatique de gestion',
  location: 'Dakar, Sénégal',

  tagline: 'Étudiante en L3 Informatique de gestion | UI/UX Design | Création digitale',

  // Accroche du hero — première ligne, affichée en très grand en Playfair Display.
  // Chaque segment est un objet { texte } ; `nom: true` met le nom en valeur
  // (filet tracé sous le nom, comme une signature éditoriale).
  heroTitle: [
    { texte: 'Je suis ' },
    { texte: 'Coumba Diouf', nom: true },
    { texte: ',' },
  ],

  // Seconde ligne de l'accroche : chaque segment peut être marqué
  //   accent   → texte en bordeaux
  //   italique → texte en italique
  heroHook: [
    { texte: 'je transforme les idées en ' },
    { texte: 'expériences numériques', accent: true, italique: true },
    { texte: '.' },
  ],

  heroIntro:
    'Entre développement, design d’interfaces et créativité, j’imagine des solutions qui ont du sens. Voici un aperçu de ce que je crée.',

  about: [
    "Je suis étudiante en troisième année de Licence Informatique de gestion. Mon parcours universitaire me permet de développer mes connaissances en informatique et de les appliquer à travers différents projets académiques.",
    "En parallèle, mon stage de neuf mois chez Neetali, en tant qu'UI/UX Designer et Social Content Manager, m'a permis de découvrir les enjeux de la conception d'interfaces, de l'expérience utilisateur et de la communication digitale.",
    "J'aime associer réflexion technique, sens du design et compréhension des besoins des utilisateurs afin de concevoir des solutions numériques cohérentes et accessibles.",
  ],

  // ➡️ Renseignez votre adresse e-mail professionnelle (ex. : "prenom.nom@email.com").
  // Tant qu'elle est vide, la section Contact renvoie vers les autres moyens de contact.
  email: 'coumbaaa.diou@gmail.com',

  // ➡️ Renseignez les URL complètes de vos profils.
  // Tant qu'elles sont vides, la section Contact indique le champ à compléter.
  links: {
    linkedin: 'https://www.linkedin.com/in/coumba-diouf-b64473317?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    github: 'https://github.com/CoumbaaDiouf',
  },

  // Fichiers présents dans le dossier public/
  photoUrl: '/photo-profil.jpeg',

  // cvUrl        : chemin du fichier, relatif à la racine du site (dossier public/)
  // cvFileName   : nom proposé au visiteur lors du téléchargement
  cvUrl: '/cv/CV_Coumba_Diouf.pdf',
  cvFileName: 'CV_Coumba_Diouf.pdf',
}
