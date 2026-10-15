# Critique des 3 designs — e2-6

Les trois pistes utilisent **le même HTML et le même JavaScript** ([code/guners.js](propositions/code/guners.js)) : seul le CSS change. On compare donc vraiment des ambiances, pas des contenus.

| Piste | Capture | Page cliquable |
| --- | --- | --- |
| A · Éditoriale & sobre | [piste-a-editoriale.png](propositions/piste-a-editoriale.png) | [piste-a-editoriale.html](propositions/code/piste-a-editoriale.html) |
| B · Chaleureuse & terroir | [piste-b-chaleureuse.png](propositions/piste-b-chaleureuse.png) | [piste-b-chaleureuse.html](propositions/code/piste-b-chaleureuse.html) |
| C · Moderne & pragmatique | [piste-c-moderne.png](propositions/piste-c-moderne.png) | [piste-c-moderne.html](propositions/code/piste-c-moderne.html) |

## Mesures objectives (avant de noter)

Contrastes calculés avec la formule WCAG 2.2 (AA : texte ≥ 4,5:1, éléments d'interface ≥ 3:1).

| Élément | Piste A | Piste B | Piste C |
| --- | --- | --- | --- |
| Texte sur fond | 14,72:1 | 12,44:1 | 16,53:1 |
| Texte secondaire sur carte | 7,38:1 | 7,41:1 | 8,63:1 |
| Bouton principal (texte / fond) | 15,97:1 | 5,82:1 | 7,60:1 |
| Puce de filtre active | 15,97:1 | 4,79:1 | 18,72:1 |
| Bordure du champ de recherche | 3,04:1 (limite) | 3,33:1 | 16,53:1 |
| Contour de focus | 4,43:1 | 5,99:1 | 6,91:1 |

Mesures communes aux trois : toutes les cibles tactiles font 48 px de haut, et le parcours au clavier (Tab / Entrée) fonctionne de bout en bout, avec le focus visible sur chaque élément. Voir [tests-utilisateurs.md](tests-utilisateurs.md).

## Matrice d'évaluation (1 = cassé · 5 = ça va)

| Critère | Piste A | Piste B | Piste C |
| --- | --- | --- | --- |
| Lisibilité | 4 | 4 | 5 |
| Navigation | 4 | 4 | 4 |
| Feedback | 4 | 4 | 5 |
| Cohérence | 5 | 4 | 5 |
| Accessibilité | 4 | 4 | 5 |
| **Total / 25** | **21** | **20** | **24** |

## Fiches critiques

### Design 1 · Piste A — Éditoriale & sobre

**2 forces**
1. Critère : cohérence — preuve : une seule couleur d'action (bleu nuit #14213d) pour tous les boutons, les puces actives et le trait au-dessus des cartes.
2. Critère : accessibilité — preuve : bouton principal à 15,97:1, le contraste le plus fort des trois pistes.

**2 faiblesses**
1. Critère : lisibilité — preuve : le chiffre clé (« 73 buts ») est en Georgia fine. À 50 cm, quand Luca montre son écran, il se lit moins vite qu'un chiffre gras.
2. Critère : accessibilité — preuve : la bordure grise du champ de recherche est à 3,04:1, juste au-dessus du minimum de 3:1.

**Verdict :** j'**élimine** ce design. Il fait « journal sérieux », alors que Luca veut l'ambiance d'un stade et des chiffres qui claquent.

### Design 2 · Piste B — Chaleureuse & terroir

**2 forces**
1. Critère : feedback — preuve : la puce active passe en vert sauge plein et le message « Saison … ajoutée à tes favoris » s'affiche en vert sous le bouton.
2. Critère : lisibilité — preuve : formes arrondies et grands espaces, et le chiffre en terracotta ressort bien sur la carte crème.

**2 faiblesses**
1. Critère : cohérence — preuve : deux couleurs fortes (vert pour les filtres, terracotta pour les actions). Pour un fan de foot, ça évoque une épicerie bio plutôt que Messi.
2. Critère : accessibilité — preuve : la puce active est à 4,79:1, la valeur la plus faible du tableau, juste au-dessus des 4,5:1.

**Verdict :** j'**élimine** ce design. Il est agréable, mais il ne correspond ni au sujet ni à l'énergie que cherche le persona.

### Design 3 · Piste C — Moderne & pragmatique

**2 forces**
1. Critère : lisibilité — preuve : chiffres en graisse 900, total en bleu ciel sur l'en-tête bleu nuit (7,60:1). C'est lisible à bout de bras, comme un tableau d'affichage de stade.
2. Critère : feedback — preuve : la puce active passe en noir plein (18,72:1), et le bouton favori change de texte (« ★ Dans mes favoris ») en plus du message de confirmation.

**2 faiblesses**
1. Critère : cohérence — preuve : le bouton principal est en majuscules alors que le reste du texte ne l'est pas, ce qui fait un peu « crier » sur chaque carte.
2. Critère : navigation — preuve : comme pour les autres pistes, la première carte est la saison 2004-05 (1 but). Luca doit scroller avant de tomber sur une saison marquante.

**Verdict :** je **garde** ce design. C'est celui qui sert le mieux la tâche de Luca : trouver un chiffre et le montrer.

## Arbitrage

Nous retenons la **piste C (Moderne & pragmatique)**. Elle obtient la meilleure note sur 4 critères sur 5, et toutes ses mesures de contraste dépassent largement les minimums WCAG AA. Elle correspond au persona : des gros chiffres lisibles quand on montre son téléphone, et des filtres par club bien visibles. Nous lui ajoutons la **typographie en casse normale de la piste A** pour les boutons (fini les majuscules), et nous trierons la liste de la saison la plus récente à la plus ancienne, pour que l'accueil montre tout de suite les fiches marquantes.

### Palette retenue (piste C)

| Rôle | Couleur |
| --- | --- |
| Fond | #eef1f5 |
| Surface (cartes) | #ffffff |
| Texte | #0b1220 |
| Texte secondaire | #444c5c |
| Accent / bouton principal | #75aadb (bleu ciel argentin, texte #0b1220 dessus) |
| Focus | #a50044 (grenat) |
| Succès | #116b3a |
