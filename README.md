# Projet : Isola – Jeu de stratégie en JavaScript - L2 UE Projet

Projet universitaire réalisé en **L2 Informatique (2020–2021)** à l’Université Sorbonne Paris Nord.  
Ce projet consiste à implémenter le jeu de stratégie combinatoire abstrait **Isola** sous forme d’une application web en **HTML / CSS / JavaScript**.

---

## Lancer le projet

Aucune installation n’est nécessaire.

### Méthode simple :
1. Cloner le dépôt
```bash
git clone https://github.com/myriammilha/L2-UE-Projet-ISOLA.git
```
2. Aller dans dossier `jeu` puis ouvrir `index_choix_fr_en.html` dans un navigateur web

### Méthode avec Serveur local (optionnel) :
```bash
python -m http.server
```

Puis ouvrir `http://localhost:8000` dans un navigateur.
Sélectionner `jeu`.

---

## Objectifs du projet

- Reproduire le jeu **Isola** sur une plateforme web
- Mettre en pratique les notions vues en L2 (HTML, CSS, JavaScript)
- Travailler en **équipe** selon une organisation proche du monde professionnel
- Découvrir la gestion de projet (MVP, répartition des rôles, Git)
- Implémenter une logique de jeu fonctionnelle (déplacements, blocages, victoire)
- Initier une **IA simple** (non finalisée)

---

## Règles du jeu Isola

Isola est un jeu de stratégie pour deux joueurs.

À chaque tour, un joueur :
1. Déplace son pion sur une case libre adjacente (comme le roi aux échecs)
2. Retire une case du plateau

Le joueur qui **ne peut plus se déplacer** perd la partie.

Règles complètes :  
https://fr.wikipedia.org/wiki/Isola_(jeu)

---

## Technologies utilisées

- **HTML5** – structure des pages
- **CSS3** – mise en page et animations
- **JavaScript** – logique du jeu et interactions
- **GSAP** – animations de la page d’accueil
- **Git / GitHub** – gestion de versions et collaboration

---

## Structure du projet

```

isola/
├── index_choix_fr_en.html   # Choix de la langue
├── index.html               # Accueil (FR)
├── index_en.html            # Accueil (EN)
├── page_jeux.html           # Jeu (FR)
├── page_jeux_en.html        # Jeu (EN)
├── notre_equipe.html        # Présentation de l’équipe
│
├── css/
│   ├── style_index.css
│   ├── flex_jeu.css
│   ├── MonStyle.css
│   └── style.css
│
├── js/
│   ├── app.js               # Animations accueil
│   ├── script.js            # Logique du jeu
│   └── notre_equipe.js      # Animations équipe
│
├── img/                     # Images, logos, gifs
│
├── docs/                    # Documents du projet (rapports, CDC, planning)
└── .gitignore

```

---

## Travail de groupe

Projet réalisé par un groupe de **7 étudiants**.
Le travail a été organisé autour :

* d’un **MVP**
* de sous-groupes par fonctionnalités
* de réunions régulières
* de l’utilisation de Git pour centraliser le code

Les rôles (HTML/CSS, JavaScript, logique du jeu, esthétique, coordination) ont été répartis selon les compétences de chacun.

---

## Limitations connues

* L’IA est partiellement implémentée
* Le multijoueur en ligne n’a pas été finalisé
* Le design n’est pas entièrement responsive
* Le projet reflète un **niveau L2**, sans refactorisation avancée

---

## Documents

Les documents liés au projet sont disponibles dans le dossier `docs/` :

* cahier des charges
* description du projet
* rapports individuels et de groupe
* rétroplanning

---

## Contexte académique

Ce projet avait pour objectif principal l’**apprentissage par la pratique** :

* gestion des difficultés techniques
* collaboration à distance
* organisation du travail
* analyse et retour d’expérience

---

## Auteurs

Projet réalisé par :

* Bilal Gangat
* Youssef Jebbouri
* Myriam Milha
* Rajae El Mliki
* Missipssa Slimani
* Lynda Ziane
* Soumia Meddas

Année universitaire **2020–2021**
