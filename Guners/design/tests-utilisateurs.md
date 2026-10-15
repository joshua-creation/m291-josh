# Tests utilisateurs & audit d'accessibilité — e2-7

Maquette testée : piste C, retenue dans [critique.md](critique.md) → [piste-c-moderne.html](propositions/code/piste-c-moderne.html)

## Partie 1 — Audit d'accessibilité (mesuré)

### Contrastes (WCAG 2.2 AA)

| Élément | Couleurs | Ratio mesuré | Minimum | OK ? |
| --- | --- | --- | --- | --- |
| **Bouton principal** « Voir la fiche » | #0b1220 sur #75aadb | **7,60:1** | 4,5:1 | ✅ |
| Texte courant | #0b1220 sur #eef1f5 | 16,53:1 | 4,5:1 | ✅ |
| Texte secondaire (matchs, passes) | #444c5c sur #ffffff | 8,63:1 | 4,5:1 | ✅ |
| Puce de filtre active | #ffffff sur #0b1220 | 18,72:1 | 4,5:1 | ✅ |
| Chiffre total dans l'en-tête | #75aadb sur #0b1220 | 7,60:1 | 4,5:1 | ✅ |
| Message de confirmation | #116b3a sur #ffffff | 6,59:1 | 4,5:1 | ✅ |
| Contour de focus | #a50044 sur #eef1f5 | 6,91:1 | 3:1 | ✅ |

Méthode : formule de luminance relative WCAG 2.2. À re-vérifier en classe avec un outil web gratuit (ex. Colour Contrast Analyser).

### Navigation au clavier (sans souris)

Parcours fait avec Tab, Maj+Tab et Entrée :

| Étape | Résultat |
| --- | --- |
| 1er Tab | lien « Aller au contenu » visible ✅ |
| Tab suivants | champ de recherche → Tout → Barça → PSG → Inter Miami → Argentine → « Voir la fiche » de chaque carte ✅ |
| Focus visible | contour grenat de 3 px sur chaque élément ✅ |
| Entrée sur « Voir la fiche » | la fiche s'ouvre et le focus va sur le titre « Saison … » ✅ |
| Entrée sur « ☆ Ajouter aux favoris » | le bouton devient « ★ Dans mes favoris » et le message est lu (role="status") ✅ |
| Entrée sur « ← Retour à la liste » | retour à la liste, le focus revient sur la carte d'où on venait ✅ |
| Recherche sans résultat (« chelsea ») | message clair + bouton « Effacer la recherche » ✅ |
| Taille des cibles | tous les boutons font 48 px de haut ✅ |

## Partie 2 — Test utilisateur (à faire en binôme)

> Cette partie se remplit **pendant** le vrai test. Silence absolu : je ne guide pas, je ne justifie pas, je note.

**Scénario (1 phrase) :** « Trouve combien de buts Messi a marqués en 2011-12 avec le Barça, puis garde cette saison en favori. »
**Testeur :**
**Date :**
**Chrono :** 5 minutes max

| Ce que j'observe | Notes |
| --- | --- |
| Temps pour accomplir la tâche |  |
| Tâche réussie ? (oui / non / avec aide) |  |
| Hésitations (regard perdu, clics ratés) |  |
| Remarques à voix haute (think aloud) |  |
| Où le doigt est allé en premier |  |

## Partie 3 — Correctifs prioritaires

Déjà repérés par l'audit et la critique :

1. **Trier la liste de la plus récente à la plus ancienne.** Aujourd'hui, la première carte est 2004-05 (1 but) : le persona doit scroller pour trouver une saison marquante.
2. **Boutons en casse normale** au lieu des majuscules (« Voir la fiche »), parce que les majuscules se lisent moins vite.

À compléter après le test avec le camarade :

3.
4.
