import React from "react";
import EffectFilter from "./EffectFilter";
import LevelFilter from "./LevelFilter";
import RarityFilter from "./RarityFilter";
import CraftFilter from "./CraftFilter";

interface FilterProps {
    levelFilter: number,
    setLevelFilter: (potions: number) => void;
    rarifyFilter: string,
    setRarityFilter: (effect: string) => void;
    effectFilter: string,
    setEffectFilter: (effect: string) => void;
    calculateCraftTime: () => void;
    craftTime: number;
}

const Filters: React.FC<FilterProps> = ({ levelFilter, setLevelFilter, rarifyFilter, setRarityFilter, effectFilter, setEffectFilter, calculateCraftTime, craftTime }) => {
    return (
        <div className="flex flex-start items-center">

            <LevelFilter
                levelFilter={levelFilter}
                setLevelFilter={setLevelFilter}
            />

            <RarityFilter
                rarityFilter={rarifyFilter}
                setRarityFilter={setRarityFilter}
            />

            <EffectFilter
                effectFilter={effectFilter}
                setEffectFilter={setEffectFilter}
            />

            <CraftFilter
                craftTime={craftTime}
                calculateCraftTime={calculateCraftTime}
            />
        </div>

    )
}

export default Filters;