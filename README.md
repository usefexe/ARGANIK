# 🌳 Arganik : site vitrine de la coopérative féminine d'huile d'argan

Site vitrine de **5 pages**, responsive et accessible, développé en équipe pour **Arganik**, coopérative féminine du Souss-Massa qui produit de l'huile d'argan cosmétique et culinaire, de l'amlou, du miel et des savons artisanaux.

> Projet réalisé dans le cadre de la formation **Développement  web** (YouCode ) : brief du 12/10/2026 au 16/10/2026.

---

## 📌 Contexte

Nous sommes l'équipe front-end de l'agence web fictive **« Atlas Digital »**. Le client, Arganik, souhaite vendre en direct et raconter l'origine de chaque flacon. Notre mission : intégrer la maquette Figma (fournie en desktop), fidèle au design, en **mobile-first**, accessible et sans défilement horizontal.

## 🔗 Liens du projet

| Ressource | Lien |
|---|---|
| 🌐 Site déployé | _https://usefexe.github.io/ARGANIK_ |
| 📋 Planification (Trello) | _https://trello.com/b/JIhZ50bo_ |


---

## 👥 Équipe et répartition

| Membre | Rôle | Page(s) prise(s) en charge | Élément commun |
|---|---|---|---|
| **Youssef** | Scrum Master | 🏠 Accueil (`index.html`) + _compléter_ |
| **Youssef** | + 🧴 Fiche produit (`produit.html`) | (`header`) _compléter_ |
| **Bouchra** | Développeuse front-end | 🛍️ Nos produits (`produits.html`) | _compléter_ |
| **Anas** | Développeur front-end | 🌳 Traçabilité (`tracabilite.html`) (`footer`)  | _à compléter_ |
| **Sara** | Développeuse front-end | ✉️ Contact & Commande (`contact.html`) | _compléter_ |

> Header et footer : identiques sur les 5 pages, répartis entre les membres (voir tableau ci-dessus).

---

## 🗂️ Pages du site

1. **Accueil** : bandeau d'annonce, hero, chiffres clés, produits phares, impact, étapes « De l'arbre au flacon », vérification d'origine, témoignages.
2. **Nos produits** : fil d'Ariane, catégories, filtres (certifications, contenances), 8 cartes produits, pagination, engagements.
3. **Fiche produit** : galerie et miniatures, bloc d'achat, passeport terroir, « Secrets de fabrication » (dépliables), avis clients, produits similaires.
4. **Traçabilité** : vérification d'authenticité d'un lot, 6 étapes de fabrication, coopératrices, certifications.
5. **Contact & Commande** : formulaire avec validation navigateur, coordonnées de l'atelier, carte, expédition, FAQ, bandeau téléphone.

---

## 🛠️ Technologies

- **HTML5** sémantique (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`)
- **CSS3** avec **Flexbox** (CSS Grid en complément)
- **Responsive design** (mobile, tablette, desktop)
- **Git / GitHub** : Git Flow (`main`, `develop`, `feature/*`, Pull Requests)
- **Trello** : gestion des tâches

- Déploiement : _GitHub Pages_
- ⭐ Bonus  : menu burger JS, apparition des sections en fondu, slideshow de la galerie, 

---

## 📁 Structure du projet

```
ARGANIK/
├── index.html
├── produits.html
├── produit.html
├── tracabilite.html
├── contact.html
├── css/
│   └── style.css
├── img/
├── icons/
└── README.md
```

> Adapter l'arborescence si elle diffère dans le dépôt.

---

## 🌿 Workflow Git (Git Flow)

- `main` : version stable et déployée, **aucun push direct**.
- `develop` : branche d'intégration.
- `feature/*` : une branche par fonctionnalité, créée depuis `develop` (ex. `feature/page-accueil`, `feature/header`, `feature/footer`).
- Chaque fonctionnalité passe par une **Pull Request vers `develop`**, relue par un autre membre.
- En fin de brief : Pull Request `develop` → `main`, validée par un autre membre avant le déploiement.

---




## 🚀 Lancer le projet en local

```bash
git clone <url-du-repository>
cd ARGANIK
git checkout develop
```

Puis ouvrir `index.html` dans le navigateur (ou utiliser l'extension **Live Server** de VS Code).

---

## 📅 Livrables

- **Livrable 1 (13/10/2026)** : planification, structure du projet, header/footer communs, branches `main` et `develop`, README.
- **Livrable 2 (16/10/2026)** : code des 5 pages, historique Git Flow propre, site déployé, présentation, tableau de planification clôturé.

---

© 2026 : Projet pédagogique Arganik, équipe Atlas Digital.