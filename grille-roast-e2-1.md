# Grille roast — e2-1

**Nom :** Joshua Fausch

**Date :** 18.09.2026

Barème : 1 = cassé · 3 = moyen · 5 = ça va

# Grille

| **Capture**     | **Lisibilité** | **Navigation** | **Feedback** | **Cohérence** | **Accessibilité** |
|-----------------|----------------|----------------|--------------|---------------|-------------------|
| 01 mur de texte | 1              | 2              | 3            | 2             | 1                 |
| 02 labyrinthe   | 3              | 1              | 2            | 2             | 2                 |
| 03 silence      | 3              | 3              | 1            | 3             | 1                 |
| 04 carnaval     | 2              | 2              | 2            | 1             | 1                 |

# Phrases précises (2 par capture)

## 01 mur de texte

1.  Le h1, le h2, le paragraphe et les liens du menu ont tous la même
    taille (11 px) et la même graisse : on ne voit ni le titre de la
    page ni celui de l'article.

2.  Le texte gris \#888 sur fond blanc a un contraste de 3,54 : 1, en
    dessous du minimum de 4,5 : 1, et les titres sont en display:inline,
    donc collés au texte sans aucun espace.

## 02 labyrinthe

1.  Le bouton principal n'existe pas : la page demande de passer par 6
    niveaux (« Menu \> Espace \> Plus \> Options \> Avancé \> Liste »)
    alors que seuls 3 liens sont proposés, et « Options », « Avancé » et
    « Liste » n'apparaissent nulle part.

2.  Le lien « Aide? » est placé en position:absolute à 70 % de la
    largeur, séparé du contenu, et le bloc principal commence à 40 % de
    la largeur : il n'y a aucun menu fixe ni aucune indication de « où
    suis-je ».

## 03 silence

1.  Le bouton « ok » a un texte \#ddd sur fond \#ddd (contraste 1 : 1) :
    son libellé est invisible et il a l'air désactivé.

2.  Au clic, rien ne se passe : pas de message « Compte créé », pas
    d'erreur si l'email est vide, et les champs n'ont pas de \<label\>
    lié (le texte « Email » n'est pas relié à l'input).

## 04 carnaval

1.  La page utilise 5 polices (Comic Sans, Impact, Georgia, Courier,
    cursive) et le lien « CLICK », le bouton « BUY » et le lien « info »
    ont le même style magenta, alors qu'ils ne font pas la même action.

2.  Le texte vert \#0f0 sur fond jaune \#ff0 a un contraste de 1,28 : 1,
    et la différence promo / normal est donnée uniquement par la couleur
    (rouge / vert), ce qu'une personne daltonienne ne voit pas.

# Corrections mesurables (pour les rapides)

| **Capture** | **Correction mesurable**                                                                                                                                                                         |
|-------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 01          | Le h1 passe à 28 px en gras, le h2 à 20 px, le texte à 16 px en \#333 (contraste ≥ 10 : 1) avec un interligne de 1,5 et des titres en display:block.                                             |
| 02          | Un seul bouton « Voir la liste », 44 px de haut, placé sous le titre « Bienvenue », mène directement à la liste en 1 clic au lieu de 6.                                                          |
| 03          | Le bouton devient « Créer mon compte », texte blanc sur \#0055cc (contraste ≥ 4,5 : 1). Au clic, il affiche « Compte créé » pendant 2 secondes, ou un message d'erreur rouge sous le champ vide. |
| 04          | 2 polices maximum (une pour les titres, une pour le texte), un seul style de bouton d'action, texte \#222 sur fond blanc, et un badge texte « PROMO » à côté du prix en plus de la couleur.      |

# La pire, pour la présentation

**Capture n° 03 (silence)**, parce que c'est la seule où **l'utilisateur
ne peut pas atteindre son but**. Les autres pages sont laides ou
pénibles, mais on finit par lire ou cliquer. Ici :

- le bouton est invisible (contraste 1 : 1) ;

- le clic ne fait rien, donc on ne sait pas si le compte a été créé ;

- la mention « en cliquant vous acceptez tout » est en \#ccc sur blanc
  (1,61 : 1) et en 11 px : on accepte des conditions qu'on ne peut pas
  lire.

## Plan de la présentation (3 min)

1.  **(30 s)** On montre la page et on essaie de créer un compte en
    direct : on clique sur le bouton, il ne se passe rien.

2.  **(1 min 30)** Les 3 fautes avec leur critère : feedback (aucune
    réponse au clic), accessibilité (bouton 1 : 1, mention 1,61 : 1, pas
    de labels), lisibilité (11 px).

3.  **(45 s)** La correction mesurable : un libellé clair, un contraste
    ≥ 4,5 : 1, et le message « Compte créé » pendant 2 s.

4.  **(15 s)** Conclusion : une page moche peut encore marcher, une page
    silencieuse ne marche pas.
