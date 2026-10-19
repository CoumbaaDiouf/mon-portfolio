# Portfolio — Coumba Diouf

Portfolio personnel de **Coumba Diouf**, étudiante en Licence 3 Informatique de gestion à
Dakar (Sénégal). Le site présente son parcours, ses compétences, ses projets universitaires et
son expérience professionnelle en UI/UX Design et Social Content Management (stage de 9 mois
chez Neetali).

Site vitrine sur une seule page (7 sections), sobre et responsive, avec une identité visuelle
rose poudré / crème / bordeaux doux, une typographie éditoriale et des animations discrètes
entièrement en CSS.

## Sommaire

- [Fonctionnalités](#fonctionnalités)
- [Technologies](#technologies)
- [Démarrage](#démarrage)
- [Structure du projet](#structure-du-projet)
- [Personnaliser le contenu](#personnaliser-le-contenu)
- [Design et identité visuelle](#design-et-identité-visuelle)
- [Animations et interactions](#animations-et-interactions)
- [Accessibilité](#accessibilité)
- [Sécurité du dépôt (.gitignore)](#sécurité-du-dépôt-gitignore)
- [Vérifications effectuées](#vérifications-effectuées)
- [Publier le code sur GitHub](#publier-le-code-sur-github)
- [Déployer sur Vercel](#déployer-sur-vercel)
- [Notes techniques](#notes-techniques)

## Fonctionnalités

- Navigation par ancres avec défilement fluide, section active surlignée (pastille + filet)
- Menu mobile accessible (bouton hamburger, fermeture par Échap ou par un lien, `aria-expanded`)
- Bouton « Télécharger mon CV » (PDF réel `public/cv/CV_Coumba_Diouf.pdf`) enregistré sous ce nom
  grâce à l'attribut `download`
- Six projets pilotés par un fichier de données : cartes sobres et fenêtre de détails accessible
  (Échap, clic sur l'arrière-plan, focus piégé puis rendu)
- Section contact sans formulaire : bouton `mailto:`, liens LinkedIn et GitHub ouverts dans un
  nouvel onglet (`rel="noopener noreferrer"`), aucune donnée collectée
- Apparitions au défilement, parallaxe légère au pointeur et hovers soignés — tous neutralisés si
  le système indique « réduire les animations »
- Responsive mobile / tablette / ordinateur, focus clavier visible, métadonnées SEO et de partage
  social (Open Graph, Twitter Card), captures de projets en `loading="lazy"`

## Technologies

| Outil | Version | Rôle |
| --- | --- | --- |
| [React](https://react.dev/) | 19 | Composants fonctionnels et hooks |
| [Vite](https://vite.dev/) | 8 | Serveur de développement et compilation |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Styles, thème défini via `@theme` dans `src/index.css` |
| [Lucide React](https://lucide.dev/) | 1 | Icônes |
| [Oxlint](https://oxc.rs/) | 1 | Analyse statique (`npm run lint`) |

JavaScript ES6+, **aucune librairie d'animation** (ni Framer Motion, ni GSAP) : tout est en CSS,
avec un petit module JS maison pour la parallaxe.

## Démarrage

Prérequis : **Node.js 20.19+ ou 22.12+** (exigence de Vite 8) et npm.

```bash
git clone <URL_DU_DEPOT>.git
cd mon-portfolio
npm install
npm run dev
```

Le site est alors servi sur `http://localhost:5173`.

### Commandes

| Commande | Rôle |
| --- | --- |
| `npm run dev` | Serveur de développement avec HMR |
| `npm run build` | Compilation de production dans `dist/` |
| `npm run preview` | Aperçu local de la version compilée |
| `npm run lint` | Analyse statique du code (Oxlint) |

## Structure du projet

```
public/
  cv/CV_Coumba_Diouf.pdf       # CV téléchargeable
  images/                      # 6 captures de projets
  photo-profil.jpeg            # Portrait
  favicon.svg
src/
  components/
    Navbar.jsx  Hero.jsx  About.jsx  Skills.jsx  Projects.jsx
    Experience.jsx  Education.jsx  Contact.jsx  Footer.jsx
    ProjectModal.jsx  CvDownloadButton.jsx
    Reveal.jsx  SectionHeading.jsx  icons.jsx
  data/
    profile.js       # Identité, accroche, e-mail, liens, photo, CV
    projects.js      # 6 projets (contenu + sections détaillées de la fenêtre)
    skills.js        # 4 catégories de compétences (24 compétences)
    experience.js    # Stage Neetali : 2 axes, 5 missions, outils
    education.js     # 4 étapes de formation
  lib/
    pointerFx.js     # Parallaxe du hero + halo sous le pointeur des cartes
  App.jsx  main.jsx  index.css
index.html                 # Métadonnées SEO / partage, polices
vite.config.js
jsconfig.json              # Résolution des imports pour l'éditeur (VS Code)
.oxlintrc.json             # Règles du linter
.gitignore
```

## Personnaliser le contenu

Tout le contenu est centralisé dans `src/data/` — aucun texte n'est codé en dur dans les
composants. Les commentaires en tête de chaque fichier rappellent les champs disponibles.

1. **`profile.js`**
   - `tagline`, `heroTitle`, `heroHook`, `heroIntro`, `about` : textes de la première section et
     de « À propos ».
     `heroTitle` et `heroHook` sont des **tableaux de segments** :
     `heroTitle` accepte `{ texte, nom: true }` (le nom est souligné d'un filet tracé) ;
     `heroHook` accepte `{ texte, accent: true }` (bordeaux) et `{ texte, italique: true }`.
   - `email`, `links.linkedin`, `links.github` : coordonnées utilisées par la section Contact
   - `photoUrl`, `cvUrl`, `cvFileName` : chemins dans `public/` et nom de fichier proposé au
     téléchargement
2. **`projects.js`** — 6 projets, chacun avec `title`, `description`, `image`, `tags`, `details`
   (sections détaillées de la fenêtre) et les champs facultatifs `codeUrl` / `demoUrl`.
   État actuel : `codeUrl` renseigné pour *Gaindé Eats*, *Analyse et nettoyage des données*,
   *Application météo* et *Configuration SSH/WinSCP* ; `codeUrl` et `demoUrl` laissés à `null`
   pour *CloudSim* et *SEN-Friperie* (le site n'affiche alors aucun faux lien).
3. **`experience.js`** — un stage (Neetali, juin 2025 – février 2026) : `axes` (UI/UX Design et
   Social Content Management) et `missions` (5 objets `{ label, summary, dimension, title,
   description }`), plus `domains` et `tools`.
4. **`education.js`** — 4 étapes (`type: 'diplome'` ou `'formation'`, qui choisit l'icône).
5. **`skills.js`** — 4 catégories (`title` + `items`), 24 compétences au total.

> Aucune information n'est inventée : les champs vides s'affichent comme des repères explicites,
> il suffit de les compléter.

## Design et identité visuelle

**Palette** — définie une seule fois en tokens Tailwind 4 (`@theme` dans `src/index.css`) :

| Token | Valeur | Usage |
| --- | --- | --- |
| `cream` | `#FFF9F5` | Fond principal |
| `powder` | `#F7E9EC` | Fond alterné, survols |
| `rose` | `#E8C4CE` | Filets, bordures |
| `bordeaux` | `#754457` | Accents, boutons, liens actifs |
| `bordeaux-dark` | `#5C3646` | Survol des boutons bordeaux |
| `anthracite` | `#303238` | Texte courant |

**Typographies** — deux polices, chargées dans `index.html` : *Playfair Display* pour les titres
et les accroches (`font-display`, italique utilisée comme accent éditorial) et *Inter* pour le
texte courant (`font-sans`).

**Composition** — la première section associe un tagline en capitales, un grand titre Playfair en
deux niveaux, un paragraphe de présentation, deux boutons et un portrait encadré avec une carte de
repère. Sections, cartes et tuiles utilisent des coins arrondis (`rounded-3xl`, `rounded-2xl`),
des filets roses et des ombres légères.

**Rythme de fonds** — alternance crème / rose très dilué : Accueil (crème), À propos (rose 60 %),
Compétences (crème), Projets (rose 60 %), Expérience (crème), Formation (rose 60 %), Contact
(crème), pied de page (rose 60 %), plus un lavis radial très léger par section
(`.section-ambient`).

## Animations et interactions

Toutes les animations sont définies dans `src/index.css` et déclenchées par des classes posées
dans les composants. Aucune animation ne tourne « pour rien » : tout est lié à l'arrivée dans la
section, au survol ou au pointeur.

**Révélation au défilement** — `Reveal.jsx` observe une seule fois chaque bloc avec
`IntersectionObserver` et ajoute `.reveal.is-visible` ; le délai en cascade des enfants est passé
par la variable CSS `--reveal-delay`. Titres de section en deux temps (`.rise-in`, `.rise-in-2`).

**Première section**

- typographie masquée qui se lève ligne par ligne (`.hero-line` / `.hero-line-inner`) ;
- filet tracé sous le nom (`.hero-name::after`, masqué sous 768 px) ;
- entrées progressives avec flou (`.hero-blur`, `.hero-blur-1/-2`) ;
- formes organiques qui dérivent (`.blob`, `.blob-2`, `.drift-a/b/c`) et filet vertical dessiné
  (`line-draw-y`) avec ses légendes ;
- indicateur « Défiler » (`.cue`, filet + point) affiché seulement en grand écran ;
- parallaxe douce au pointeur (`.px-parallax.px-1` à `px-4`).

**Pointeur (`src/lib/pointerFx.js`)** — active la parallaxe du hero et le halo des cartes, mais
uniquement sur un appareil à souris fine et si « réduire les animations » n'est pas demandé.
Interpolation douce (lerp) dans une boucle `requestAnimationFrame` qui s'arrête d'elle-même quand
la souris ne bouge plus ; un seul écouteur `pointermove` passif, nettoyable.

**Cartes de projet** — reflet qui balaie au survol (`.card-sheen`), anneau bordeaux
(`.card-ring`), halo qui suit le pointeur (`.card-spotlight`), flèche du bouton qui se déploie
(`.card-cta::after`, à partir de 640 px seulement pour ne jamais casser la mise en page).

**Chronologie et pastilles** — point qui respire (`.dot-pulse`), filet vertical qui se déploie à
l'arrivée de la section (`.timeline-item::before`), apparition en cascade des badges de
compétences (`.badge-lift` + `badge-in` et délais `nth-child`).

**Navigation et pied de page** — pastille de section active (`before:`), soulignement qui se
déploie au survol (`after:`), logo qui pivote légèrement, boutons avec léger décollement et
`active:scale` au clic.

**Mouvement réduit** — un bloc `prefers-reduced-motion` neutralise animations, parallaxe, halos et
flous : le contenu est immédiatement visible, dans un état final statique et lisible.

## Accessibilité

- Lien « Aller au contenu » visible au premier `Tab`
- Contour de focus bordeaux de 2 px (`:focus-visible`), y compris sur les boutons et liens
- Fenêtre de projet : `role="dialog"` / `aria-modal`, focus piégé, fermeture par Échap ou clic
  d'arrière-plan, focus rendu à l'élément déclencheur, défilement de la page bloqué puis restauré
- Menu mobile : `aria-expanded`, `aria-controls`, fermeture par Échap
- Balisage sémantique (`lang="fr"`, une seule `h1`, titres hiérarchisés), `alt` sur toutes les
  images, décors en `aria-hidden="true"` et `pointer-events: none`
- Contrastes texte/fond vérifiés : **≥ 4,5:1** pour le texte courant (valeurs d'opacité ajustées)
- `prefers-reduced-motion` respecté de bout en bout

## Sécurité du dépôt (.gitignore)

Le site est statique (aucun backend, aucun secret dans le code), et le `.gitignore` est durci pour
le rester :

- **Variables d'environnement** : `.env`, `.env.*` ignorés — seul `.env.example` peut être
  versionné (`!.env.example`) ;
- **Clés et identifiants** : `*.pem`, `*.key`, `*.p12`, `*.pfx`, `*.crt`, `*.cer`, `*.jks`,
  `*.keystore`, `.npmrc`, `.netrc`, `secrets.json`, `credentials.json`, `serviceAccountKey.json`,
  `id_rsa*` ;
- **Outils et divers** : `node_modules`, `dist`, `dist-ssr`, logs, `*.local`, `.vscode/*` (sauf
  `extensions.json`), `.idea`, `Thumbs.db`, `Desktop.ini`, `*.tsbuildinfo`, `coverage`.

Avant publication : vérifié qu'aucun secret (clé d'API, jeton, mot de passe, clé privée) n'est
présent ni dans les fichiers suivis ni dans le dossier du projet.

## Vérifications effectuées

Pilotage de Chrome sans interface via le protocole DevTools, sur le serveur de développement :

- **Structure** : 7 sections, une seule `h1`, 6 cartes de projet, aucune ancre morte
- **Responsive** : aucun débordement horizontal de **320 px à 1440 px** ; les rangées de boutons
  des cartes restent sur une seule ligne à toutes les largeurs
- **Animations** : 27 blocs révélés au défilement, parallaxe et halo réactifs au pointeur,
  filets de chronologie déployés, badges en cascade ; **0 erreur** dans la console
- **Mouvement réduit** : tout est visible immédiatement, sans animation résiduelle
- **Clavier** : modal de projet et menu mobile testés (Échap, Tab, focus rendu), lien d'évitement
  et contours de focus conformes
- **Images** : les 7 images se chargent (dont 6 en `loading="lazy"`)

## Publier le code sur GitHub

```bash
git init
git add .
git commit -m "Portfolio : site personnel React + Tailwind"
git branch -M main
git remote add origin https://github.com/<VOTRE_PSEUDO>/<NOM_DU_DEPOT>.git
git push -u origin main
```

## Déployer sur Vercel

1. Se connecter sur [vercel.com](https://vercel.com) avec le compte GitHub.
2. **Add New → Project**, puis sélectionner le dépôt du portfolio.
3. Vercel détecte Vite automatiquement ; conserver :
   - **Framework preset** : Vite
   - **Build command** : `npm run build`
   - **Output directory** : `dist`
4. **Deploy** : le site est publié sur une URL du type `https://<nom-du-projet>.vercel.app`.
5. Après le déploiement, remplacer la valeur relative de `og:image` et `twitter:image` dans
   `index.html` par l'URL absolue de la photo, par exemple
   `https://<votre-url>.vercel.app/photo-profil.jpeg`.

`dist/` est volontairement ignoré par Git : les plateformes d'hébergement (Vercel, Netlify,
Cloudflare Pages…) reconstruisent le site depuis les sources. À noter : le contenu de `public/`
(photo, CV PDF, captures) est **public** une fois déployé — c'est voulu pour un portfolio, mais
le CV doit être relu avant publication.

## Notes techniques

- **Thème** : les couleurs, les polices et quelques animations utilitaires sont déclarées une
  seule fois dans `src/index.css` (`@theme` Tailwind 4). Certaines règles CSS non « layered »
  (`.card-ring`, `.card-cta`, `.hero-line`…) sont volontairement prioritaires sur les utilitaires.
- **`jsconfig.json`** : n'existe que pour l'éditeur (VS Code) — il permet de résoudre les imports
  sans extension propres à Vite (`./components/Hero`, `./data/profile`) et d'éviter les faux
  diagnostics TypeScript. Il n'intervient pas dans la compilation.
- **`src/lib/pointerFx.js`** : aucune dépendance, un seul écouteur `pointermove` passif et une
  boucle d'animation qui s'arrête d'elle-même ; se désactive sur les appareils tactiles et en
  mouvement réduit.
- **Linter** : `npm run lint` (Oxlint) passe sans erreur ; il reste un avertissement connu et
  inoffensif (`missingLinks` déclaré et non utilisé dans `src/components/Contact.jsx`).
- **Contact** : pour un envoi de message directement depuis le site, il faudrait ajouter un
  service tiers (Formspree, Netlify Forms…) ou un backend ; aujourd'hui le bouton ouvre la
  messagerie du visiteur via `mailto:`.

---

Portfolio personnel — contenu et visuels : Coumba Diouf.
