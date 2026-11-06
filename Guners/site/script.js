// Guners · site final
// JavaScript natif, sans bibliothèque (cf. brief).
// Les chiffres sont des DONNÉES DE DÉMO : proches des vraies, mais inventées pour le projet.

const FICHES = [
  { id: "miami-2024", club: "miami", clubNom: "Inter Miami", saison: "2024", ordre: 2024.9, matchs: 25, buts: 23, passes: 13, trophees: ["Supporters' Shield"], anecdote: "Meilleure équipe de la saison régulière en MLS, avec Messi en chef d'orchestre." },
  { id: "miami-2023", club: "miami", clubNom: "Inter Miami", saison: "2023", ordre: 2023.9, matchs: 14, buts: 11, passes: 5, trophees: ["Leagues Cup"], anecdote: "Il offre au club le premier trophée de son histoire en un mois." },
  { id: "psg-2223", club: "psg", clubNom: "Paris Saint-Germain", saison: "2022-23", ordre: 2023.5, matchs: 41, buts: 21, passes: 20, trophees: ["Ligue 1", "Trophée des champions"], anecdote: "Il revient champion du monde et enchaîne avec un deuxième titre de champion de France." },
  { id: "arg-cdm22", club: "arg", clubNom: "Argentine", saison: "Coupe du monde 2022", ordre: 2022.95, matchs: 7, buts: 7, passes: 3, trophees: ["Coupe du monde"], anecdote: "Doublé en finale contre la France et Ballon d'or du tournoi." },
  { id: "psg-2122", club: "psg", clubNom: "Paris Saint-Germain", saison: "2021-22", ordre: 2022.5, matchs: 34, buts: 11, passes: 15, trophees: ["Ligue 1"], anecdote: "Première saison hors du Barça, plus passeur que buteur." },
  { id: "arg-copa21", club: "arg", clubNom: "Argentine", saison: "Copa América 2021", ordre: 2021.55, matchs: 7, buts: 4, passes: 5, trophees: ["Copa América"], anecdote: "Premier grand titre avec l'Argentine, gagné au Maracanã." },
  { id: "barca-2021", club: "barca", clubNom: "FC Barcelone", saison: "2020-21", ordre: 2021.4, matchs: 47, buts: 38, passes: 14, trophees: ["Coupe du Roi"], anecdote: "Sa dernière saison au Barça, conclue par un trophée." },
  { id: "barca-1819", club: "barca", clubNom: "FC Barcelone", saison: "2018-19", ordre: 2019.5, matchs: 50, buts: 51, passes: 22, trophees: ["Liga"], anecdote: "Meilleur buteur d'Europe pour la 6e fois." },
  { id: "barca-1415", club: "barca", clubNom: "FC Barcelone", saison: "2014-15", ordre: 2015.5, matchs: 57, buts: 58, passes: 27, trophees: ["Liga", "Coupe du Roi", "Ligue des champions"], anecdote: "Le trio avec Suárez et Neymar marque plus de 120 buts." },
  { id: "barca-1112", club: "barca", clubNom: "FC Barcelone", saison: "2011-12", ordre: 2012.5, matchs: 60, buts: 73, passes: 29, trophees: ["Coupe du Roi", "Supercoupe d'Europe", "Mondial des clubs"], anecdote: "La saison record : plus de buts que de matchs joués." },
  { id: "barca-0809", club: "barca", clubNom: "FC Barcelone", saison: "2008-09", ordre: 2009.5, matchs: 51, buts: 38, passes: 18, trophees: ["Liga", "Coupe du Roi", "Ligue des champions"], anecdote: "Premier triplé du club : il marque de la tête en finale de Ligue des champions." },
  { id: "barca-0405", club: "barca", clubNom: "FC Barcelone", saison: "2004-05", ordre: 2005.5, matchs: 9, buts: 1, passes: 0, trophees: ["Liga"], anecdote: "Premier but chez les pros, sur une passe lobée de Ronaldinho." }
];

const CLUBS = [
  { id: "tout", nom: "Tout" },
  { id: "barca", nom: "Barça" },
  { id: "psg", nom: "PSG" },
  { id: "miami", nom: "Inter Miami" },
  { id: "arg", nom: "Argentine" },
  { id: "favoris", nom: "★ Mes favoris" }
];

// Correctif de la critique : de la saison la plus récente à la plus ancienne
FICHES.sort(function (a, b) { return b.ordre - a.ordre; });

// --- L'état de l'app ---
let filtre = "tout";
let recherche = "";
let favoris = lireFavoris();
let dernierOuvert = null;

// --- Les éléments ---
const vueListe = document.getElementById("vue-liste");
const vueFiche = document.getElementById("vue-fiche");
const champ = document.getElementById("recherche");
const puces = document.getElementById("puces");
const statut = document.getElementById("statut");
const liste = document.getElementById("liste");

const moinsDAnimation = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ---------- Favoris (dans le navigateur, sans compte) ----------
function lireFavoris() {
  try { return JSON.parse(localStorage.getItem("guners-favoris")) || []; }
  catch (e) { return []; }
}
function ecrireFavoris() {
  try { localStorage.setItem("guners-favoris", JSON.stringify(favoris)); } catch (e) { /* navigation privée : pas grave */ }
}

// ---------- Recherche ----------
function normaliser(t) {
  return t.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").trim();
}

// « 2012 » doit trouver « 2011-12 », « barca » doit trouver « FC Barcelone »
function texteCherchable(f) {
  const annees = [];
  const m = f.saison.match(/(\d{4})-(\d{2})/);
  if (m) annees.push(m[1], m[1].slice(0, 2) + m[2]);
  const surnoms = { barca: "barca barça", psg: "psg paris", miami: "miami mls", arg: "argentine albiceleste selection" };
  return normaliser([f.clubNom, f.saison, f.trophees.join(" "), annees.join(" "), surnoms[f.club]].join(" "));
}

function fichesVisibles() {
  const mots = normaliser(recherche).split(/\s+/).filter(Boolean);
  return FICHES.filter(function (f) {
    let bonFiltre = filtre === "tout" || f.club === filtre;
    if (filtre === "favoris") bonFiltre = favoris.includes(f.id);
    const texte = texteCherchable(f);
    return bonFiltre && mots.every(function (mot) { return texte.includes(mot); });
  });
}

// ---------- En-tête : le tableau d'affichage ----------
function compter(el, cible) {
  if (moinsDAnimation) { el.textContent = cible; return; }
  const debut = performance.now();
  const duree = 900;
  function etape(t) {
    const p = Math.min((t - debut) / duree, 1);
    const adouci = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(cible * adouci);
    if (p < 1) requestAnimationFrame(etape);
  }
  requestAnimationFrame(etape);
}

function afficherTotaux() {
  const somme = function (cle) { return FICHES.reduce(function (s, f) { return s + f[cle]; }, 0); };
  const trophees = FICHES.reduce(function (s, f) { return s + f.trophees.length; }, 0);
  document.getElementById("total-fiches").textContent = FICHES.length;
  compter(document.getElementById("total-buts"), somme("buts"));
  compter(document.getElementById("total-matchs"), somme("matchs"));
  compter(document.getElementById("total-passes"), somme("passes"));
  compter(document.getElementById("total-trophees"), trophees);
}

// ---------- Liste ----------
function afficherPuces() {
  puces.innerHTML = "";
  CLUBS.forEach(function (c) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "puce";
    b.setAttribute("aria-pressed", String(c.id === filtre));
    b.textContent = c.nom;
    if (c.id === "favoris") {
      const n = document.createElement("span");
      n.className = "puce-compte";
      n.textContent = "(" + favoris.length + ")";
      b.appendChild(n);
    }
    b.addEventListener("click", function () {
      filtre = c.id;
      afficherPuces();
      afficherListe();
      puces.querySelectorAll(".puce")[CLUBS.indexOf(c)].focus();
    });
    puces.appendChild(b);
  });
}

function afficherListe() {
  const fiches = fichesVisibles();
  liste.innerHTML = "";

  const nomFiltre = CLUBS.find(function (c) { return c.id === filtre; }).nom;
  let phrase = fiches.length + (fiches.length > 1 ? " fiches" : " fiche");
  if (filtre !== "tout") phrase += " · filtre : " + nomFiltre;
  if (recherche.trim() !== "") phrase += " · recherche : « " + recherche.trim() + " »";
  statut.textContent = phrase;

  if (fiches.length === 0) {
    liste.appendChild(blocVide());
    return;
  }

  fiches.forEach(function (f, i) {
    const li = document.createElement("li");
    li.style.animationDelay = Math.min(i, 8) * 40 + "ms";
    li.innerHTML =
      '<article class="carte">' +
        '<p class="carte-club"><span class="pastille pastille-' + f.club + '" aria-hidden="true"></span>' + f.clubNom +
          (favoris.includes(f.id) ? ' <span class="badge-fav">★ Favori</span>' : "") + "</p>" +
        '<h3 class="carte-saison">' + f.saison + "</h3>" +
        '<p class="carte-chiffre"><strong>' + f.buts + "</strong> " + motBut(f.buts) + "</p>" +
        '<p class="carte-detail">' + f.matchs + " matchs · " + f.passes + " passes décisives</p>" +
        '<button type="button" class="bouton-principal" data-id="' + f.id + '">Voir la fiche<span class="sr-only"> ' + f.saison + "</span></button>" +
      "</article>";
    li.querySelector("button").addEventListener("click", function () { location.hash = "#/fiche/" + f.id; });
    liste.appendChild(li);
  });
}

function blocVide() {
  const vide = document.createElement("li");
  vide.className = "vide";
  const p = document.createElement("p");
  const bouton = document.createElement("button");
  bouton.type = "button";
  bouton.className = "bouton-secondaire";

  if (filtre === "favoris" && favoris.length === 0) {
    p.textContent = "Tu n'as pas encore de favori. Ouvre une fiche et tape sur « ☆ Ajouter aux favoris ».";
    bouton.textContent = "Voir toutes les fiches";
    bouton.addEventListener("click", function () { filtre = "tout"; afficherPuces(); afficherListe(); });
  } else {
    p.textContent = "Aucune fiche pour « " + recherche.trim() + " ». Messi n'a pas joué là. Essaie Barça, PSG, Inter Miami ou Argentine.";
    bouton.textContent = "Effacer la recherche";
    bouton.addEventListener("click", function () { champ.value = ""; recherche = ""; afficherListe(); champ.focus(); });
  }
  vide.append(p, bouton);
  return vide;
}

// ---------- Fiche détaillée ----------
function ouvrirFiche(id) {
  const f = FICHES.find(function (x) { return x.id === id; });
  if (!f) { montrerListe(); return; }
  dernierOuvert = f.id;
  document.title = "Saison " + f.saison + " · Guners";

  // Précédente / suivante dans l'ordre de la liste filtrée (ou toutes si la fiche n'y est pas)
  let suite = fichesVisibles();
  if (!suite.some(function (x) { return x.id === f.id; })) suite = FICHES;
  const i = suite.findIndex(function (x) { return x.id === f.id; });
  const plusRecente = suite[i - 1];
  const plusAncienne = suite[i + 1];

  const estFavori = favoris.includes(f.id);
  vueFiche.innerHTML =
    '<button type="button" class="bouton-retour">← Retour à la liste</button>' +
    '<article class="fiche">' +
      '<p class="carte-club"><span class="pastille pastille-' + f.club + '" aria-hidden="true"></span>' + f.clubNom + "</p>" +
      '<h2 class="fiche-titre" tabindex="-1">Saison ' + f.saison + "</h2>" +
      '<p class="fiche-chiffre"><strong>' + f.buts + "</strong> " + motBut(f.buts) + "</p>" +
      '<dl class="fiche-stats">' +
        "<div><dt>Matchs</dt><dd>" + f.matchs + "</dd></div>" +
        "<div><dt>Passes déc.</dt><dd>" + f.passes + "</dd></div>" +
        "<div><dt>Buts / match</dt><dd>" + (f.buts / f.matchs).toFixed(2).replace(".", ",") + "</dd></div>" +
      "</dl>" +
      "<h3>Trophées</h3>" +
      '<ul class="trophees">' + f.trophees.map(function (t) { return "<li>🏆 " + t + "</li>"; }).join("") + "</ul>" +
      "<h3>Anecdote</h3>" +
      '<p class="anecdote">' + f.anecdote + "</p>" +
      '<button type="button" class="bouton-principal bouton-fav" aria-pressed="' + estFavori + '">' +
        (estFavori ? "★ Dans mes favoris" : "☆ Ajouter aux favoris") + "</button>" +
      '<p class="confirmation" role="status"></p>' +
      '<p class="mention">Données de démo inventées pour le projet.</p>' +
    "</article>" +
    '<nav class="fiche-nav" aria-label="Autres saisons">' +
      (plusRecente ? '<a href="#/fiche/' + plusRecente.id + '">← Plus récente<strong>' + plusRecente.saison + "</strong></a>" : "") +
      (plusAncienne ? '<a class="suivante" href="#/fiche/' + plusAncienne.id + '">Plus ancienne →<strong>' + plusAncienne.saison + "</strong></a>" : "") +
    "</nav>";

  vueFiche.querySelector(".bouton-retour").addEventListener("click", function () { location.hash = "#/"; });

  const btnFav = vueFiche.querySelector(".bouton-fav");
  const confirmation = vueFiche.querySelector(".confirmation");
  btnFav.addEventListener("click", function () {
    if (favoris.includes(f.id)) {
      favoris = favoris.filter(function (x) { return x !== f.id; });
      btnFav.textContent = "☆ Ajouter aux favoris";
      btnFav.setAttribute("aria-pressed", "false");
      confirmation.textContent = "Saison " + f.saison + " retirée de tes favoris.";
    } else {
      favoris.push(f.id);
      btnFav.textContent = "★ Dans mes favoris";
      btnFav.setAttribute("aria-pressed", "true");
      confirmation.textContent = "Saison " + f.saison + " ajoutée à tes favoris.";
    }
    ecrireFavoris();
    afficherPuces();
  });

  vueListe.hidden = true;
  vueFiche.hidden = false;
  window.scrollTo(0, 0);
  vueFiche.querySelector(".fiche-titre").focus();
}

function montrerListe() {
  document.title = "Guners · Toutes les stats de Lionel Messi";
  vueFiche.hidden = true;
  vueListe.hidden = false;
  afficherPuces();
  afficherListe(); // le filtre et la recherche sont gardés
  if (dernierOuvert) {
    const bouton = liste.querySelector('[data-id="' + dernierOuvert + '"]');
    if (bouton) {
      bouton.closest("li").scrollIntoView({ block: "center" });
      bouton.focus({ preventScroll: true });
    }
  }
}

// ---------- Navigation par l'adresse (#/fiche/barca-1112) ----------
// Le bouton « retour » du téléphone fonctionne, et on peut partager le lien d'une fiche.
function router() {
  const m = location.hash.match(/^#\/fiche\/([\w-]+)$/);
  if (m) ouvrirFiche(m[1]);
  else montrerListe();
}

function motBut(n) { return n > 1 ? "buts" : "but"; }

champ.addEventListener("input", function () {
  recherche = champ.value;
  afficherListe();
});

// Raccourci clavier : « / » pour aller dans la recherche
document.addEventListener("keydown", function (e) {
  if (e.key === "/" && document.activeElement !== champ && !vueListe.hidden) {
    e.preventDefault();
    champ.focus();
  }
});

// ---------- Démarrage ----------
// Paramètres utiles pour les captures : ?club=barca · ?q=chelsea
const params = new URLSearchParams(location.search);
if (CLUBS.some(function (c) { return c.id === params.get("club"); })) filtre = params.get("club");
if (params.get("q")) { recherche = params.get("q"); champ.value = recherche; }

afficherTotaux();
window.addEventListener("hashchange", router);
router();
