import { potions } from "../data/data";
import '@testing-library/jest-dom'
import { calculateAverageCraftingCost, calculateCraftintTime, filterByLevelRequireMent, findPotionByEffect, findPotionWithIngredient, getPotionsByRarity, listIngredients } from "../helpers/potionHelpers";

// TEST 1
describe('Recibe las pociones, el level y devuelve un array de pociones', () => {
    it('Filtra las pociones que requieren un nivel de uso menor o igual al especificado', () => {

        // Arrange
        const potion1 = potions[0];
        const potion2 = potions[1];

        const potionsArray = [potion1, potion2];

        //Act

        // Nivel 15 solo filrara una pocion
        const filteredPotions = filterByLevelRequireMent(potionsArray, 15);

        //Assert
        expect(filteredPotions.length).toBe(1);
        expect(filteredPotions.map(filteredPotion => filteredPotion.name)).toContain('Elixir of Eternal Flame');

    });
});

// TEST 2
describe('Recibe las pociones, la rareza y devuelve un array de pociones', () => {
    it('Devuelve todas las pociones que tienen una rareza especifica', () => {

        // Arrange
        const potion1 = potions[0];
        const potion2 = potions[5];

        const potionsArray = [potion1, potion2];

        //Act

        // Filtrara la pocion que sea rareza epic
        const filteredPotions = getPotionsByRarity(potionsArray, 'epic');

        //Assert
        expect(filteredPotions.length).toBe(1);
        expect(filteredPotions.map(filteredPotion => filteredPotion.rarity)).toContain('epic');
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
        expect(filteredIngredients).toContain("Phoenix Feather");
        expect(filteredIngredients).toContain("Molten Ember");
        expect(filteredIngredients).toContain("Flameflower Extract");
    });
});

// TEST 4
describe('Recibe las pociones, un effecto y devuelve un array de pociones', () => {
    it('Encuentra todas las pociones que otorgan un efecto secundario especifico', () => {

        // Arrange
        const potion1 = potions[1];
        const potion2 = potions[2];

        const potionsArray = [potion1, potion2];

        const effect = potion1.effects.secondary![0];

        //Act

        // Filtrara las pociones que tengan ese efecto en este caso 1
        const filteredPotions = findPotionByEffect(potionsArray, effect);

        //Assert
        expect(filteredPotions.length).toBe(1);
        expect(filteredPotions.map(filteredPotion => filteredPotion.name)).toContain('Essence of Frostbound Will');

    });
});

// TEST 5
describe('Recibe las pociones, y devuelve un valor numerico', () => {
    it('Devuelve el tiempo total necesario para crear una lista de pociones en minutos', () => {

        // Arrange
        const potion1 = potions[0];
        const potion2 = potions[1];

        const potionsArray = [potion1, potion2];

        //Act

        // Calculara el tiempo total de craftin
        const totalTime = calculateCraftintTime(potionsArray);

        //Assert
        expect(totalTime).toBe(105);

    });
});

// TEST 6
describe('Recibe las pociones, y devuelve un valor numerico', () => {
    it('Calcula el tiempo promedio de creacion de un conjunto de pociones', () => {

        // Arrange
        const potion1 = potions[0];
        const potion2 = potions[1];

        const potionsArray = [potion1, potion2];

        //Act

        // Calculara el tiempo average de craftin
        const totalTime = calculateAverageCraftingCost(potionsArray);

        //Assert
        expect(totalTime).toBe(52);

    });
});

// TEST 7
describe('Recibe las pociones, y devuelve una pocion', () => {
    it('Encuentra todas las pociones que contienen un ingrediente especifico', () => {

        // Arrange
        const potion1 = potions[0];
        const potion2 = potions[1];

        const potionsArray = [potion1, potion2];

        const ingredient = potion1.ingredients[0];

        //Act

        // Calculara el tiempo total de craftin
        const filteredPotions = findPotionWithIngredient(potionsArray, ingredient);


        //Assert
        expect(filteredPotions.length).toBe(2);
        expect(filteredPotions.map(filteredPotion => filteredPotion.name)).toContain("Elixir of Eternal Flame");
        expect(filteredPotions.map(filteredPotion => filteredPotion.name)).toContain("Essence of Frostbound Will");
    });
});