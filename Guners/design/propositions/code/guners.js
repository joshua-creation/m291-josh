// Guners — logique commune aux 3 pistes de design.
// Seul le CSS change d'une piste à l'autre : le HTML et ce fichier sont identiques.
// Les chiffres ci-dessous sont des DONNÉES DE DÉMO (inventées / approximatives) pour la maquette.

const FICHES = [
  { id: "barca-0405", club: "barca", clubNom: "FC Barcelone", saison: "2004-05", matchs: 9,  buts: 1,  passes: 0,  trophees: ["Liga"], anecdote: "Premier but chez les pros, sur une passe lobée de Ronaldinho." },
  { id: "barca-0809", club: "barca", clubNom: "FC Barcelone", saison: "2008-09", matchs: 51, buts: 38, passes: 18, trophees: ["Liga", "Coupe du Roi", "Ligue des champions"], anecdote: "Premier triplé du club : il marque de la tête en finale de Ligue des champions." },
  { id: "barca-1112", club: "barca", clubNom: "FC Barcelone", saison: "2011-12", matchs: 60, buts: 73, passes: 29, trophees: ["Coupe du Roi", "Supercoupe d'Europe", "Mondial des clubs"], anecdote: "La saison record : plus de buts que de matchs joués." },
  { id: "barca-1415", club: "barca", clubNom: "FC Barcelone", saison: "2014-15", matchs: 57, buts: 58, passes: 27, trophees: ["Liga", "Coupe du Roi", "Ligue des champions"], anecdote: "Le trio avec Suárez et Neymar marque plus de 120 buts." },
  { id: "barca-1819", club: "barca", clubNom: "FC Barcelone", saison: "2018-19", matchs: 50, buts: 51, passes: 22, trophees: ["Liga"], anecdote: "Meilleur buteur d'Europe pour la 6e fois." },
  { id: "barca-2021", club: "barca", clubNom: "FC Barcelone", saison: "2020-21", matchs: 47, buts: 38, passes: 14, trophees: ["Coupe du Roi"], anecdote: "Sa dernière saison au Barça, conclue par un trophée." },
  { id: "psg-2122",   club: "psg",   clubNom: "Paris Saint-Germain", saison: "2021-22", matchs: 34, buts: 11, passes: 15, trophees: ["Ligue 1"], anecdote: "Première saison hors du Barça, plus passeur que buteur." },
  { id: "psg-2223",   club: "psg",   clubNom: "Paris Saint-Germain", saison: "2022-23", matchs: 41, buts: 21, passes: 20, trophees: ["Ligue 1", "Trophée des champions"], anecdote: "Il revient champion du monde et enchaîne avec un deuxième titre." },
  { id: "miami-2023", club: "miami", clubNom: "Inter Miami", saison: "2023", matchs: 14, buts: 11, passes: 5,  trophees: ["Leagues Cup"], anecdote: "Il offre au club le premier trophée de son histoire en un mois." },
  { id: "miami-2024", club: "miami", clubNom: "Inter Miami", saison: "2024", matchs: 25, buts: 23, passes: 13, trophees: ["Supporters' Shield"], anecdote: "Meilleure équipe de la saison régulière en MLS." },
  { id: "arg-copa21", club: "arg",   clubNom: "Argentine", saison: "Copa América 2021", matchs: 7, buts: 4, passes: 5, trophees: ["Copa América"], anecdote: "Premier grand titre avec l'Argentine, gagné au Maracanã." },
  { id: "arg-cdm22",  club: "arg",   clubNom: "Argentine", saison: "Coupe du monde 2022", matchs: 7, buts: 7, passes: 3, trophees: ["Coupe du monde"], anecdote: "Doublé en finale et Ballon d'or du tournoi." }
];

const CLUBS = [
  { id: "tout",  nom: "Tout" },
  { id: "barca", nom: "Barça" },
  { id: "psg",   nom: "PSG" },
  { id: "miami", nom: "Inter Miami" },
  { id: "arg",   nom: "Argentine" }
];

// --- Les boîtes (l'état de l'app) ---
let filtre = "tout";
let recherche = "";
let favoris = lireFavoris();

// --- Les éléments de la vitrine ---
const vueListe = document.getElementById("vue-liste");
const vueFiche = document.getElementById("vue-fiche");
const champ = document.getElementById("recherche");
const puces = document.getElementById("puces");
const statut = document.getElementById("statut");
const liste = document.getElementById("liste");
const totalButs = document.getElementById("total-buts");

function lireFavoris() {
  try { return JSON.parse(localStorage.getItem("guners-favoris")) || []; }
  catch (e) { return []; }
}
function ecrireFavoris() {
  try { localStorage.setItem("guners-favoris", JSON.stringify(favoris)); } catch (e) { /* pas grave */ }
}

function fichesVisibles() {
  const mot = recherche.trim().toLowerCase();
  return FICHES.filter(function (f) {
    const bonClub = filtre === "tout" || f.club === filtre;
    const texte = (f.clubNom + " " + f.saison + " " + f.trophees.join(" ")).toLowerCase();
    return bonClub && (mot === "" || texte.includes(mot));
  });
}

function afficherPuces() {
  puces.innerHTML = "";
  CLUBS.forEach(function (c) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "puce";
    b.textContent = c.nom;
    b.setAttribute("aria-pressed", String(c.id === filtre));
    b.addEventListener("click", function () {
      filtre = c.id;
      afficherPuces();
      afficherListe();
    });
    puces.appendChild(b);
  });
}

function afficherListe() {
  const fiches = fichesVisibles();
  liste.innerHTML = "";
  totalButs.textContent = FICHES.reduce(function (s, f) { return s + f.buts; }, 0);

  const nomFiltre = CLUBS.find(function (c) { return c.id === filtre; }).nom;
  let phrase = fiches.length + (fiches.length > 1 ? " fiches" : " fiche");
  if (filtre !== "tout") phrase += " · filtre : " + nomFiltre;
  if (recherche.trim() !== "") phrase += " · recherche : « " + recherche.trim() + " »";
  statut.textContent = phrase;

  if (fiches.length === 0) {
    const vide = document.createElement("li");
    vide.className = "vide";
    vide.innerHTML = "<p>Aucune fiche pour « " + echapper(recherche.trim()) + " ». Messi n'a pas joué là. Essaie Barça, PSG, Inter Miami ou Argentine.</p>";
    const effacer = document.createElement("button");
    effacer.type = "button";
    effacer.className = "bouton-secondaire";
    effacer.textContent = "Effacer la recherche";
    effacer.addEventListener("click", function () { champ.value = ""; recherche = ""; afficherListe(); champ.focus(); });
    vide.appendChild(effacer);
    liste.appendChild(vide);
    return;
  }

  fiches.forEach(function (f) {
    const li = document.createElement("li");
    li.innerHTML =
      '<article class="carte">' +
        '<p class="carte-club">' + f.clubNom + (favoris.includes(f.id) ? ' <span class="badge-fav">★ Favori</span>' : "") + "</p>" +
        '<h2 class="carte-saison">' + f.saison + "</h2>" +
        '<p class="carte-chiffre"><strong>' + f.buts + "</strong> " + motBut(f.buts) + "</p>" +
        '<p class="carte-detail">' + f.matchs + " matchs · " + f.passes + " passes décisives</p>" +
        '<button type="button" class="bouton-principal" data-id="' + f.id + '">Voir la fiche<span class="sr-only"> ' + f.saison + "</span></button>" +
      "</article>";
    li.querySelector("button").addEventListener("click", function () { ouvrirFiche(f.id); });
    liste.appendChild(li);
  });
}

function ouvrirFiche(id) {
  const f = FICHES.find(function (x) { return x.id === id; });
  const estFavori = favoris.includes(f.id);
  vueFiche.innerHTML =
    '<button type="button" class="bouton-retour">← Retour à la liste</button>' +
    '<article class="fiche">' +
      '<p class="carte-club">' + f.clubNom + "</p>" +
      '<h2 class="fiche-titre" tabindex="-1">Saison ' + f.saison + "</h2>" +
      '<p class="fiche-chiffre"><strong>' + f.buts + "</strong> " + motBut(f.buts) + "</p>" +
      '<dl class="fiche-stats">' +
        "<div><dt>Matchs</dt><dd>" + f.matchs + "</dd></div>" +
        "<div><dt>Passes décisives</dt><dd>" + f.passes + "</dd></div>" +
        "<div><dt>Buts par match</dt><dd>" + (f.buts / f.matchs).toFixed(2).replace(".", ",") + "</dd></div>" +
      "</dl>" +
      '<h3>Trophées</h3><ul class="trophees">' + f.trophees.map(function (t) { return "<li>🏆 " + t + "</li>"; }).join("") + "</ul>" +
      '<h3>Anecdote</h3><p class="anecdote">' + f.anecdote + "</p>" +
      '<button type="button" class="bouton-principal bouton-fav" aria-pressed="' + estFavori + '">' + (estFavori ? "★ Dans mes favoris" : "☆ Ajouter aux favoris") + "</button>" +
      '<p class="confirmation" role="status"></p>' +
      '<p class="mention">Données de démo inventées pour la maquette.</p>' +
    "</article>";

  vueFiche.querySelector(".bouton-retour").addEventListener("click", function () { fermerFiche(f.id); });
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
  });

  vueListe.hidden = true;
  vueFiche.hidden = false;
  window.scrollTo(0, 0);
  vueFiche.querySelector(".fiche-titre").focus();
}

function fermerFiche(id) {
  vueFiche.hidden = true;
  vueListe.hidden = false;
  afficherListe();
  const bouton = liste.querySelector('[data-id="' + id + '"]');
  if (bouton) bouton.focus();
}

function motBut(n) { return n > 1 ? "buts" : "but"; }

function echapper(t) {
  return t.replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
}

champ.addEventListener("input", function () {
  recherche = champ.value;
  afficherListe();
});

// Démarrage. Paramètres d'URL utiles pour les captures : ?club=barca · ?fiche=barca-1112 · ?q=chelsea
const params = new URLSearchParams(location.search);
if (CLUBS.some(function (c) { return c.id === params.get("club"); })) filtre = params.get("club");
if (params.get("q")) { recherche = params.get("q"); champ.value = recherche; }
afficherPuces();
afficherListe();
if (params.get("fiche") && FICHES.some(function (f) { return f.id === params.get("fiche"); })) ouvrirFiche(params.get("fiche"));
