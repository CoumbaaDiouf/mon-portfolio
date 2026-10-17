# Portfolio — Coumba Diouf

Portfolio personnel de **Coumba Diouf**, étudiante en Licence 3 Informatique à Dakar (Sénégal),
présentant ses projets universitaires, son parcours et son expérience en UI/UX Design et
Social Content Management (stage de 9 mois chez Neetali).

Site vitrine sur une seule page : sobre, responsive, accessible, avec une identité visuelle
rose poudré, crème et bordeaux doux.

## Technologies

- **React 19** (composants fonctionnels et hooks)
- **Vite 8** (outillage et compilation)
- **Tailwind CSS 4** (configuration via `@theme` dans `src/index.css`)
- **Lucide React** (icônes)
- **JavaScript ES6+**

## Fonctionnalités

- Navigation par ancres avec défilement fluide et lien actif surligné
- Menu mobile accessible (bouton hamburger, touche Échap, `aria-expanded`)
- Bouton « Télécharger mon CV » (fichier PDF réel dans `public/cv/`)
- Section projets pilotée par un fichier de données, avec emplacements prêts à remplir
- Formulaire de contact avec validation côté client, messages d'erreur accessibles
  (`role="alert"`, `aria-invalid`) et ouverture de la messagerie via `mailto:`
- Apparition discrète des sections au défilement, désactivée si le système
  indique « réduire les animations »
- Responsive mobile / tablette / ordinateur, focus clavier visible, métadonnées SEO
  et de partage social (LinkedIn)

## Installation

Prérequis : [Node.js](https://nodejs.org/) (version 18 ou supérieure).

```bash
git clone <URL_DU_DEPOT>.git
cd mon-portfolio
npm install
```

## Commandes

| Commande          | Rôle                                    |
| ----------------- | --------------------------------------- |
| `npm run dev`     | Serveur de développement (avec HMR)     |
| `npm run build`   | Compilation de production dans `dist/`  |
| `npm run preview` | Aperçu de la version compilée           |
| `npm run lint`    | Vérification du code avec Oxlint        |

## Structure du projet

```
public/
  cv/cv-coumba-diouf.pdf      # CV à télécharger
  photo-profil.jpeg           # Portrait
  favicon.svg
src/
  components/
    Navbar.jsx  Hero.jsx  About.jsx  Skills.jsx
    Projects.jsx  Experience.jsx  Education.jsx
    Contact.jsx  Footer.jsx
    Reveal.jsx  SectionHeading.jsx  icons.jsx
  data/
    profile.js      # Identité, e-mail, liens, photo, CV
    skills.js       # Compétences par catégorie
    projects.js     # Projets universitaires
    experience.js   # Stage chez Neetali
    education.js    # Formation
  App.jsx  main.jsx  index.css
```

## À personnaliser avant publication

Toutes les informations se modifient dans `src/data/` :

1. **`profile.js`**
   - `email` : votre adresse e-mail (sinon le formulaire reste en mode démonstration)
   - `links.linkedin` et `links.github` : URL completes de vos profils
   - `photoUrl` / `cvUrl` si vous renommez les fichiers
2. **`projects.js`** : remplacez les 3 emplacements de démonstration par vos vrais projets
   (mettez `placeholder: false`, ajoutez `codeUrl` et, si le projet est en ligne, `demoUrl`)
3. **`experience.js`** : dates, lieu et détail réel de vos missions chez Neetali
4. **`education.js`** : nom de votre établissement et années d'études
5. **`skills.js`** : ne gardez que les compétences réellement acquises

> Aucune information inventée n'a été ajoutée : les champs non renseignés apparaissent
> sous forme de placeholders clairement identifiés.

## Publier le code sur GitHub

```bash
git init
git add .
git commit -m "Portfolio : site personnel React + Tailwind"
git branch -M main
git remote add origin https://github.com/<VOTRE_PSEUDO>/<NOM_DU_DEPOT>.git
git push -u origin main
```

Le fichier `.gitignore` exclut déjà `node_modules`, `dist` et les fichiers de configuration locales.

## Déployer sur Vercel

1. Connectez-vous sur [vercel.com](https://vercel.com) avec votre compte GitHub.
2. Cliquez sur **Add New → Project** et sélectionnez le dépôt du portfolio.
3. Vercel détecte Vite automatiquement. Réglages à conserver :
   - **Framework preset** : Vite
   - **Build command** : `npm run build`
   - **Output directory** : `dist`
4. Cliquez sur **Deploy**. Votre site est en ligne sur une URL du type
   `https://<nom-du-projet>.vercel.app`.
5. Après le déploiement, complétez dans `index.html` les métadonnées `og:image` et
   `twitter:image` avec l'URL absolue de votre photo (format :
   `https://<votre-url>.vercel.app/photo-profil.jpeg`).

## Partager sur LinkedIn (exemple à personnaliser)

> 🎉 J'ai le plaisir de mettre en ligne mon portfolio !
>
> Dans le cadre de ma Licence 3 Informatique, j'ai conçu ce site pour présenter mon parcours,
> mes projets universitaires et mon expérience en UI/UX Design et Social Content Management,
> acquise notamment lors de mon stage de 9 mois chez Neetali.
>
> 🛠 Réalisé avec React, Vite et Tailwind CSS — avec une attention particulière portée à
> l'accessibilité, au responsive et à la qualité de l'expérience utilisateur.
>
> 🔗 Découvrez-le ici : <URL_DE_VOTRE_SITE>
>
> Vos retours sont les bienvenus !
>
> #Portfolio #React #TailwindCSS #UIUX #LicenceInformatique #Dakar

## Notes

- Le formulaire de contact n'utilise aucun service externe : il prépare un e-mail dans la
  messagerie du visiteur via `mailto:`. Pour un envoi direct, il faudrait ajouter un
  service tel que Formspree, Netlify Forms ou un backend propriétaire.
- Le site est statique : aucun secret, jeton ou clé d'API n'est présent dans le dépôt.
