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
- Bouton « Télécharger mon CV » (PDF réel `public/cv/CV_Coumba_Diouf.pdf`) : le fichier est
  enregistré sous ce nom grâce à l'attribut `download`, au lieu d'être simplement affiché
- Section projets pilotée par un fichier de données : cartes sobres et fenêtre de détails
  accessible (Échap, clic sur l'arrière-plan, focus maîtrisé)
- Section contact sans formulaire : bouton `mailto:`, liens LinkedIn et GitHub ouverts dans un
  nouvel onglet (`rel="noopener noreferrer"`), aucune donnée collectée
- Apparition discrète des sections au défilement, désactivée si le système
  indique « réduire les animations »
- Responsive mobile / tablette / ordinateur, focus clavier visible, métadonnées SEO
  et de partage social (LinkedIn)
- Captures des projets chargées à la demande (`loading="lazy"`)

## Choix de design

**Identité** — palette rose poudré (`powder`), crème (`cream`), bordeaux (`bordeaux`) et
anthracite (`anthracite`), définie une seule fois en tokens Tailwind 4 dans `src/index.css`.
Deux polices seulement : *Playfair Display* pour les titres (`font-display`) et *Inter*
pour le texte courant (`font-sans`).

**Composition** — la première section (`Hero.jsx`) associe un tagline en capitales, un grand
titre Playfair, un paragraphe de présentation, deux boutons (projets / contact) et un portrait
encadré surmonté d'une petite carte de repère. Sections, cartes et tuiles utilisent des coins
arrondis (`rounded-3xl`, `rounded-2xl`), des filets roses et de légères ombres.

**Rythme de fonds** — les sections alternent crème et rose très dilué pour guider l'œil :
accueil (crème), À propos (rose 60 %), Compétences (crème), Projets (rose 60 %),
Expérience (crème), Formation (rose 60 %), Contact (crème), pied de page (rose 60 %).

**Interactions** — survols discrets : liens de navigation qui virent au bordeaux, boutons dont
le fond s'assombrit, certaines cartes qui gagnent une ombre plus marquée, images de projet
zoomées de 5 % au survol, apparition douce des sections au défilement. Aucune parallaxe,
3D ou animation permanente.

**Accessibilité** — contour de focus bordeaux de 2 px globalement (`:focus-visible`
dans `index.css`), lien « Aller au contenu », fenêtre de projet piégée au clavier et refermée
par Échap avec restitution du focus, `prefers-reduced-motion` respecté (animations supprimées).
Tous les couples texte/fond ont été vérifiés : contraste **≥ 4,5:1** pour le texte courant
(les valeurs d'opacité du rose et de l'anthracite ont été relevées à cette fin).

**Vérifications effectuées** — pilotage de Chrome sans interface via le protocole DevTools :
aucun débordement horizontal de 320 px à 1440 px, une seule balise `h1`, aucune ancre morte,
toutes les images avec un texte alternatif, chargement différé des captures, apparition des
25 blocs animés au défilement, fenêtre de projet et menu mobile testés au clavier.

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
  cv/CV_Coumba_Diouf.pdf      # CV à télécharger
  photo-profil.jpeg           # Portrait
  favicon.svg
src/
  components/
    Navbar.jsx  Hero.jsx  About.jsx  Skills.jsx
    Projects.jsx  Experience.jsx  Education.jsx
    Contact.jsx  Footer.jsx
    ProjectModal.jsx  CvDownloadButton.jsx
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
   - `email` : votre adresse e-mail (utilisée par le bouton `mailto:` de la section contact)
   - `links.linkedin` et `links.github` : URL complètes de vos profils
   - `photoUrl` / `cvUrl` / `cvFileName` si vous renommez les fichiers
     (le PDF du CV doit rester dans `public/cv/`)
2. **`projects.js`** : les 4 projets universitaires sont renseignés, avec leur capture dans
   `public/images/`. Il reste à fournir :
   - `codeUrl` : l'URL du dépôt GitHub. Renseignée pour « Application météo » et
     « Connexion SSH avec WinSCP » ; à compléter pour CloudSim et SEN-Friperie
   - `demoUrl` : uniquement si une démonstration en ligne est réellement accessible
     (laissé vide pour l'instant — le site n'affiche alors aucun faux lien)
3. **`experience.js`** : les dates, le lieu et les 5 missions du stage chez Neetali sont déjà
   renseignés — ajustez la formulation ou ajoutez des missions si nécessaire
4. **`education.js`** : le parcours est renseigné (baccalauréat, puis Licence 1 à 3 en
   Informatique de gestion à l'ESCOA) — ajoutez les années universitaires si vous les connaissez
5. **`skills.js`** : 4 catégories de compétences — retirez celles que vous n'avez pas acquises

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

- La section contact n'utilise aucun service externe ni backend : le bouton principal ouvre la
  messagerie du visiteur via `mailto:`, et les liens LinkedIn / GitHub ouvrent le profil dans un
  nouvel onglet. Pour un envoi direct depuis le site, il faudrait ajouter un service tel que
  Formspree, Netlify Forms ou un backend propriétaire.
- Le CV téléchargé provient du fichier `public/cv/CV_Coumba_Diouf.pdf`. Pour le remplacer,
  écrasez ce fichier en conservant son nom, ou adaptez `cvUrl` et `cvFileName` dans `profile.js`.
- L'accroche de la première section se règle dans `heroTitle` (première ligne, sous forme de
  segments : chaque segment est un objet `{ texte }`, éventuellement marqué `nom: true` pour que le
  nom soit souligné d'un filet tracé) et `heroHook` (seconde ligne, également en segments,
  éventuellement marqués `accent: true` pour le bordeaux ou `italique: true`). Son paragraphe
  d'introduction se règle dans `heroIntro`, et la ligne de tagline au-dessus du titre dans `tagline`
  (tous dans `profile.js`).
- Les animations sont entièrement en CSS (`src/index.css`) et respectent la préférence système
  « réduire les animations ». Le module `src/lib/pointerFx.js` ajoute la parallaxe légère du hero et
  le halo sous le pointeur des cartes projets : il ne s'active que sur les appareils à souris.
- Le site est statique : aucun secret, jeton ou clé d'API n'est présent dans le dépôt.
