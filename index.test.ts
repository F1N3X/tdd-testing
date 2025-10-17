import { describe, test, expect } from "@jest/globals"

describe('Calculer le total du panier', () =>{
    const panier = [
        { nom: "pomme", prix: 1 },
        { nom: "banane", prix: 1 },
    ];
    test('Calculer le total du panier', () =>{
        expect(0).toEqual(2)
    })
})