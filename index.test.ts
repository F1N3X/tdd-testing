import { describe, test, expect } from "@jest/globals"

const panier = [
    { nom: "pomme", prix: 1 },
    { nom: "banane", prix: 1 },
];

describe('Tests panier', () =>{
    test('Calculer le total du panier', () =>{
        expect(getTotalPanier(panier)).toEqual(2)
    })
})

function getTotalPanier(panier: { nom: string; prix: number }[]): number {
    return panier.reduce((total, produit) => total + produit.prix, 0);
}