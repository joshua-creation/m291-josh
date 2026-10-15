# Brief — Guners

## Pitch

Guners est une page vitrine qui rassemble toutes les statistiques de Lionel Messi, saison par saison. Elle s'adresse aux fans de foot de 10 à 40 ans qui veulent retrouver un chiffre vite, sur leur téléphone.

## Contexte & problématique

En Suisse romande, les fans de foot parlent de Messi à la pause, au club ou dans le bus, et veulent vérifier un chiffre tout de suite. Les sites de stats existants sont faits pour les journalistes : tableaux géants, pubs, vidéos qui se lancent seules. Guners donne la réponse en trois gestes : un filtre, une carte, une fiche.

## Public

Persona complet : [design/persona.md](design/persona.md)

- **Prénom & âge :** Luca, 16 ans, apprenti logisticien à Bussigny
- **Contexte d'utilisation :** pause de midi et trajet en bus, smartphone 390 px, une main
- **Besoins clés :** rapidité, gros chiffres lisibles, filtres par club visibles, favoris sans compte

## Écrans

- Écran 1 : Accueil — liste des fiches
- Écran 2 : Liste filtrée (par club ou recherche)
- Écran 3 : Fiche détaillée d'une saison

## Contenu de chaque écran

### Écran 1 — Accueil
- On y voit : le nom Guners, la phrase « Toutes les stats de Lionel Messi », le total de buts en carrière (en grand), un champ de recherche, les puces de filtre (Tout, Barça, PSG, Inter Miami, Argentine) et les cartes des saisons.
- On peut y faire : chercher une saison, filtrer par club, ouvrir une fiche.
- Bouton principal : « Voir la fiche » sur chaque carte.

### Écran 2 — Liste filtrée
- On y voit : la puce active mise en évidence, le nombre de résultats (« 6 fiches · filtre : Barça »), les cartes correspondantes.
- On peut y faire : changer de filtre, effacer la recherche, ouvrir une fiche.
- Bouton principal : « Voir la fiche ».

### Écran 3 — Fiche détaillée
- On y voit : club, saison, nombre de buts en très grand, matchs, passes décisives, trophées, une anecdote.
- On peut y faire : ajouter la saison aux favoris, revenir à la liste.
- Bouton principal : « ☆ Ajouter aux favoris » (confirmation « ★ Dans mes favoris » + message).

## Fonctionnalités essentielles (MVP)

1. Liste de fiches sous forme de cartes.
2. Filtre par club et recherche par mot-clé (saison, club, compétition).
3. Fiche détaillée complète.
4. Favoris gardés dans le navigateur, sans compte.

## Données

Fiches de statistiques **inventées pour la maquette** (proches des vraies, mais à ne pas citer comme source) : club, saison, matchs, buts, passes décisives, trophées, anecdote. 12 fiches (Barça, PSG, Inter Miami, Argentine).

## Ambiance visuelle

Énergique, claire, fière. Comme un écran de stade au moment où le score s'affiche.

## Palette

- Fond : blanc cassé / bleu nuit très foncé selon la piste
- Texte : presque noir sur fond clair
- Accent : bleu ciel argentin (avec texte foncé dessus, jamais du texte blanc)
- Attention / erreur : rouge grenat (couleur du Barça)

Les codes hex définitifs sont dans [design/critique.md](design/critique.md) (piste retenue).

## Contraintes techniques & ergonomiques

- **Approche :** Mobile First (largeur de référence 390 px).
- **Technologie :** HTML5 sémantique, CSS moderne avec variables, JavaScript natif sans bibliothèque.
- **Accessibilité :** contrastes WCAG AA (≥ 4,5:1), navigation complète au clavier, focus visible, cibles tactiles ≥ 48 px.

## Interdits

- pas de Bootstrap, pas de React, pas de compte obligatoire pour consulter
- pas de pub, pas de vidéo en lecture automatique
- pas de tableau qui oblige à scroller à l'horizontale sur mobile
