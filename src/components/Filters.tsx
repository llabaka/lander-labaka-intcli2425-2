import React from "react"
import LevelFilter from "./LevelFilter";

interface FilterProps {
    levelFilter: number,
    setLevelFilter: (potions: number) => void;
}

const Filters: React.FC<FilterProps> = ({ levelFilter, setLevelFilter }) => {
    return (
        //Level Requirement Filter
        <LevelFilter levelFilter={levelFilter} setLevelFilter={setLevelFilter} />

    )
}

export default Filters;