import React from "react";
import EffectFilter from "./EffectFilter";
import LevelFilter from "./LevelFilter";
import RarityFilter from "./RarityFilter";

interface FilterProps {
    levelFilter: number,
    setLevelFilter: (potions: number) => void;
    rarifyFilter: string,
    setRarityFilter: (potions: string) => void;
    effectFilter: string,
    setEffectFilter: (effect: string) => void;
}

const Filters: React.FC<FilterProps> = ({ levelFilter, setLevelFilter, rarifyFilter, setRarityFilter, effectFilter, setEffectFilter }) => {
    return (
        <div className="flex flex-start items-center border-white border-2 p-4">

            {/*/Level Requirement Filter */}
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

        </div>

    )
}

export default Filters;