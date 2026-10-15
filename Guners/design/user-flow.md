# User flow — tâche principale

**Tâche :** Trouver les stats de Messi pour une saison précise (ex. 2011-12 avec le Barça) et la garder en favori.

**Début :** la personne ouvre Guners sur son téléphone pendant une discussion foot.
**Fin réussie :** la personne a montré le nombre de buts de la saison et l'a ajoutée à ses favoris (confirmation visible).

Schéma : [user-flow.svg](user-flow.svg)

## Chemin

1. **Accueil** — Luca voit le titre « Guners », la phrase « Toutes les stats de Lionel Messi », un champ de recherche et la liste des fiches (une carte par saison, avec le club et le nombre de buts).
2. **Filtre** — Il tape sur la puce « Barça ». La liste ne garde que les saisons au FC Barcelone, et un texte dit « 6 fiches · filtre : Barça ».
3. **Choix** — Il repère la carte « 2011-12 · 73 buts » et tape sur « Voir la fiche ».
4. **Fiche détaillée** — Il voit matchs, buts, passes décisives, trophées et une anecdote. Il montre l'écran à ses collègues.
5. **Action** — Il tape sur « ☆ Ajouter aux favoris ». Le bouton devient « ★ Dans mes favoris » et un message « Saison 2011-12 ajoutée à tes favoris » s'affiche.
6. **Retour** — Il tape « ← Retour à la liste » : il retrouve la liste avec le filtre Barça toujours actif.

## Variante d'échec (optionnel)

S'il tape une recherche qui ne donne rien (ex. « Chelsea »), l'écran dit : « Aucune fiche pour “Chelsea”. Messi n'a pas joué là. Essaie Barça, PSG, Inter Miami ou Argentine. » avec un bouton « Effacer la recherche ».
