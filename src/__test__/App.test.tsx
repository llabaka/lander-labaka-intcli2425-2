import { potions } from "../data/data";
import '@testing-library/jest-dom'
import { filterByLevelRequireMent, getPotionsByRarity, listIngredients } from "../helpers/potionHelpers";

// TEST 1
describe('Recibe las pociones, el level y devuelve un array de pociones', () => {
    it('Filtra las pociones que requieren un nivel de uso menor o igual al especificado', () => {

        // Arrange
        const potion1 = potions[0];
        const potion2 = potions[1];

        let potionsArray = [potion1, potion2];

        //Act

        // Nivel 15 solo filrara una pocion
        const filteredPotions = filterByLevelRequireMent(potionsArray, 15);

        //Assert
        expect(filteredPotions.length).toBe(1);
    
    });
});

// TEST 2
describe('Recibe las pociones, la rareza y devuelve un array de pociones', () => {
    it('Devuelve todas las pociones que tienen una rareza especifica', () => {

        // Arrange
        const potion1 = potions[0];
        const potion2 = potions[5];

        let potionsArray = [potion1, potion2];

        //Act

        // Filtrara la pocion que sea rareza epic
        const filteredPotions = getPotionsByRarity(potionsArray, 'epic');

        //Assert
        expect(filteredPotions.length).toBe(1);
    
    });
});

// TEST 3
describe('Recibe una pocion y devuelve un array de ingredientes', () => {
    it('Devuelve una lista de nombres de ingredientes de una pocion especifica', () => {

        // Arrange
        const potion1 = potions[0];

        //Act

        // Filtrara los nombres de los ingredientes
        const filteredIngredients = listIngredients(potion1);

        //Assert
        expect(filteredIngredients.length).toBe(3);
    
    });
});