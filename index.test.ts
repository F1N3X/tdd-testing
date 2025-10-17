import { describe, test, expect } from "@jest/globals"

interface Produit {
    nom: string;
    prix: number;
}

const panier: Produit[] = [
    { nom: "pomme", prix: 1 },
    { nom: "banane", prix: 1 },
];

const panierCher: Produit[] = [
    { nom: "ordinateur", prix: 80 },
    { nom: "souris", prix: 30 },
];

describe('Tests panier', () =>{
    test('Calculer le total du panier', () =>{
        expect(getTotalPanier(panier)).toEqual(2)
        
        expect(getTotalPanier(panierCher)).toEqual(99); // 110 - 10% = 99
    })

    test('Ajouter un produit au panier', () =>{
        const panierLengthBefore = panier.length;
        const nouveauProduit: Produit = { nom: "orange", prix: 2 };
        addProduitToPanier(panier, nouveauProduit);
        const panierLengthAfter = panier.length;

        expect(typeof nouveauProduit.nom).toBe("string");
        expect(typeof nouveauProduit.prix).toBe("number");
        expect(panierLengthAfter).toBe(panierLengthBefore + 1);
        expect(panier).toContain(nouveauProduit);
    })
})

function getTotalPanier(panier: Produit[]): number {
    const total = panier.reduce((total, produit) => total + produit.prix, 0);
    
    if (total > 100) {
        return total * 0.9;
    }
    
    return total;
}

function addProduitToPanier(panier: Produit[], produit: Produit): void {
    panier.push(produit);
}