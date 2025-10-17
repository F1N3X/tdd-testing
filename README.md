## 🧩 **Examen – Développement piloté par les tests (TDD)**

**Durée :** 1 heure
**Total :** 100 points

---

### 🧠 **Partie 1 – Compréhension rapide (15 points, ~10 min)**

**1.** En une ou deux phrases, expliquez le principe du TDD et ses trois étapes clés. *(5 pts)*
**2.** Citez deux avantages concrets du TDD. *(5 pts)*
**3.** Quelle est la différence entre un fake et un stub ? Donnez un exemple rapide. *(5 pts)*
---

**1.** Le TDD est une approche qui consiste à écrire des tests avant de développer le code de production. Les trois étapes sont : Red (écrire un test qui échoue), Green (écrire le code minimum pour faire passer le test), et Refactor (améliorer le code sans changer son comportement).

**2.** Deux avantages du TDD :
    - Le code est mieux testé dès le départ, ce qui réduit les bugs en production.
    - Le code est plus facile à maintenir car il est structuré pour être testable.

**3.** Un stub retourne des valeurs prédéfinies pour simuler une dépendance (ex : un stub de base de données qui retourne toujours le même utilisateur). Un fake est une implémentation simplifiée mais fonctionnelle (ex : une base de données en mémoire au lieu d'une vraie BDD). Le stub se concentre sur les retours, le fake sur le comportement.

---

### 💻 **Partie 2 – Cas pratique : gestion de panier e-commerce (85 points, ~50 min)**

#### **Contexte :**

Vous développez un système qui permet d’ajouter des produits et de calculer le total du panier.
Chaque produit a un nom et un prix. Le panier doit appliquer une **réduction de 10 %** si le total dépasse **100 €**.

---

#### **Objectif :**

Mettre en œuvre le cycle **TDD complet** pour cette fonctionnalité.

---


Le panier doit permettre :

- d’ajouter des produits (nom + prix),
- de calculer le total du panier,
- d’appliquer une réduction de 10 % si le total dépasse 100 €,
- et de renvoyer un total exact dans tous les cas.

Vous devez produire :

1. Les tests unitaires nécessaires pour valider le comportement attendu.
2. Le code correspondant (implémentation complète et propre).
3. Un code final refactorisé, lisible et cohérent.
4. Expliquez en quelques lignes comment vous intégreriez ces tests dans un pipeline CI/CD.

---

### 🧾 **Barème récapitulatif**

| Partie    | Description             |  Points |
| :-------- | :---------------------- | :-----: |
| 1         | Compréhension rapide    |    15   |
| 2.1       | Rédaction des tests     |    25   |
| 2.2       | Implémentation minimale |    25   |
| 2.3       | Refactoring             |    25   |
| 2.4       | Intégration continue    |    10   |
| **Total** |                         | **100** |