export interface Effect {
    attribute: string;
    value: number;
    duration: {
        unit: string,
        amount: number
    }
}

export interface SecondaryEffect extends Effect { }

export interface PotionEffects {
    primary: Effect;
    secondary?: SecondaryEffect[];
}