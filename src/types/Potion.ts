import { Crafting } from "./Crafting"
import { PotionEffects } from "./Effect"
import { Ingredients } from "./Ingredients"
import { Meta } from "./Meta"
import { PotionUsage } from "./PotionUsage"

export interface Potion {
    id: string,
    name: string,
    type: string,
    rarity: string
    effects: PotionEffects
    ingredients: Ingredients[]
    crafting: Crafting,
    usage: PotionUsage,
    meta: Meta,
    image: string
}