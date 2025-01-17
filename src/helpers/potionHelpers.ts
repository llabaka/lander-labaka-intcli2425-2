import { Effect } from "../types/Effect";
import { Ingredients } from "../types/Ingredients";
import { Potion } from "../types/Potion";

//Filtrar las pociones que requieren un nivel de uso menor o igual al especificado
export function filterByLevelRequireMent(potions: Potion[], level: number): Potion[] {
    return potions.filter(potion => potion.usage.restrictions.levelRequirement <= level);
}

//Devuelve todas las pociones que tienen una rareza especifica
export function getPotionsByRarity(potions: Potion[], rarity: string): Potion[] {
    return potions.filter(potion => potion.rarity === rarity);
}

//Devuelve una lista de nombres de ingredientes de una pocion especifica
export function listIngredients(potion: Potion): string[] {

    return potion.ingredients.map(ingredient => ingredient.name)
}

//Encuentra todas las pociones que otorgan un efecto secundario especifico
export function findPotionByEffect(potions: Potion[], effect: Effect): Potion[] {

    return potions.filter(potion => potion.effects.secondary?.find(secondaryEffects => secondaryEffects.attribute === effect.attribute))
}

//Devuelve el tiempo total necesario para crear una lista de pociones en minutos
export function calculateCraftintTime(potions: Potion[]): number {

    let totalTime = 0;

    let potionsTime = potions.map(potion => potion.crafting.time.amount);

    for (let i = 0; i < potionsTime.length; i++) {
        totalTime += potionsTime[i];
    }

    return totalTime;
}

//Calcula el tiempo promedio de creación de un conjunto de pociones
export function calculateAverageCraftingCost(potions: Potion[]): number {

    let totalTime = 0;

    let potionsQuantity = potions.length;

    let potionsTime = potions.map(potion => potion.crafting.time.amount);

    for (let i = 0; i < potionsTime.length; i++) {
        totalTime += potionsTime[i];
    }

    let averageTime = Math.floor(totalTime / potionsQuantity);

    return averageTime;
}

// Encuentra todas las pociones que contienen un ingrediente especifico
export function findPotionWithIngredient(potions: Potion[], ingredient: Ingredients): Potion[] {

    return potions.filter(potion => potion.ingredients.map(potionIngredient => potionIngredient.name === ingredient.name))
}