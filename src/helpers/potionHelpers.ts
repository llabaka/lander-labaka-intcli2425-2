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
export function findPotionByEffect(potions: Potion[], effect: string): Potion[] {

    return potions.filter(potion => potion.effects.secondary?.find(secondaryEffects => secondaryEffects.attribute === effect))
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

// Devuelve las pociones que puedan ser utilizadas por una clase especifica de personaje
export function findSpecificPotion(potions: Potion[], characterClass: string): Potion[] {

    return potions.filter(potion => potion.usage.restrictions.classRestrictions.includes(characterClass))
}

// Devuelve las pociones que requieren un ingrediente especifico en una cantidad mayor o igual a un valor dado
export function findPotionWithIngredientQuantity(potions: Potion[], ingredient: Ingredients, quantity: number): Potion[] {
    return potions.filter(potion => potion.ingredients.find(potionIngredient => potionIngredient.name === ingredient.name && potionIngredient.quantity >= quantity))
}

export function findPotionByCreateTime(potions: Potion[], maxTime: number): Potion[] {
    return potions.filter(potion => potion.crafting.time.amount <= maxTime)
}

export function findPotionByQuestReward(potions: Potion[], quest_reward: boolean): Potion[] {
    return potions.filter(potion => potion.meta.availability.quest_reward === quest_reward);
}

export function findPotionByPrimaryEffectValue(potions: Potion[], primaryEffectValue: number): Potion[] {
    return potions.filter(potion => potion.effects.primary.value >= primaryEffectValue);
}

export function findPotionWith2SecondaryEffects(potions: Potion[], minimumDuration: number, timeUnity: string): Potion[] {
    return potions.filter(potion => {
        const validSecondaryEffects = potion.effects.secondary?.filter(secondaryEffect => secondaryEffect.duration.amount >= minimumDuration && secondaryEffect.duration.unit === timeUnity)

        return validSecondaryEffects!.length >= 2;
    })
}

export function findPotionOfSpecificUbication(potions: Potion[], location: string): Potion[] {
    return potions.filter(potion => potion.ingredients.some(ingredient => ingredient.origin.location === location))
}

export function findPotionOfSpecificIngredients(potions: Potion[], ingredients: Ingredients[]): Potion[] {
    return potions.filter(potion => ingredients.every(ingredient => potion.ingredients.some(potionIngredient => potionIngredient.name === ingredient.name)))
}

export function findPotionByPrimaryValue(potions: Potion[], range: { min: number, max: number }): Potion[] {
    return potions.filter(potion => potion.effects.primary.value >= range.min && potion.effects.primary.value <= range.max);
}

export function findPotionWithStationAndValue(potions: Potion[], station: string, minLevel: number): Potion[] {
    return potions.filter(potion => potion.crafting.station === station && potion.crafting.required_level >= minLevel)
}