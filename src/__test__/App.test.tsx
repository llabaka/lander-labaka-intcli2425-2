import { potions } from "../data/data";
import '@testing-library/jest-dom'
import { filterByLevelRequireMent } from "../helpers/potionHelpers";

// TEST 1
describe('Recibe las pociones, el level y devuelve un array de pociones', () => {
    it('Filtra las pociones que requieren un nivel de uso menor o igual al especificado', () => {

        // Arrange
        const potion1 = potions[0];
        const potion2 = potions[1];

        let potionsArray = [potion1, potion2];

        console.log(potionsArray);

        //Act

        // Nivel 15 solo filrara una pocion
        const filteredPotions = filterByLevelRequireMent(potionsArray, 15);

        //Assert
        expect(filteredPotions.length).toBe(1);
    
    });
});