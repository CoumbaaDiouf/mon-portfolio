/**
 * Parcours académique, du plus ancien au plus récent.
 *
 * ➡️ `period` : laissez `null` si l'année n'est pas connue (elle n'est alors pas affichée
 *    et n'est jamais inventée).
 * ➡️ `status` : 'obtenu' affiche un badge « Diplôme obtenu », 'en cours' un badge « En cours ».
 * ➡️ `type`   : 'diplome' ou 'formation' (choisit l'icône affichée).
 */

export const education = [
  {
    id: 'baccalaureat',
    type: 'diplome',
    title: 'Baccalauréat',
    program: 'Série : Sciences expérimentales',
    school: 'Lycée Seydina Limamou Laye',
    period: '2022–2023',
    status: 'obtenu',
    description: "Diplôme de fin d'études secondaires.",
  },
  {
    id: 'licence-1',
    type: 'formation',
    title: 'Licence 1 en Informatique de gestion',
    school: 'ESCOA — École Supérieure de Commerce et d’Administration',
    period: '2023/2024',
    status: null,
    description: 'Début de mon parcours universitaire en informatique de gestion.',
  },
  {
    id: 'licence-2',
    type: 'formation',
    title: 'Licence 2 en Informatique de gestion',
    school: 'ESCOA — École Supérieure de Commerce et d’Administration',
    period: '2024/2025',
    status: null,
    description: null,
  },
  {
    id: 'licence-3',
    type: 'formation',
    title: 'Licence 3 en Informatique de gestion',
    school: 'ESCOA — École Supérieure de Commerce et d’Administration',
    period: '2025/2026',
    status: 'en cours',
    description: null,
  },
]
