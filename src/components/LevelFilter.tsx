import React from "react"

interface LevelFitlerProps {
    levelFilter: number,
    setLevelFilter: (potions: number) => void;
}

const LevelFilter: React.FC<LevelFitlerProps> = ({ levelFilter, setLevelFilter }) => {
    return (
        <>
            <label className="text-lg">Level Requirement (0-100)</label>
            <input
                type="range"
                id="level"
                min="0"
                max="100"
                className="w-64"
                step={1}
                value={levelFilter}
                onChange={(e) => {
                    const level = parseInt(e.target.value, 10);
                    setLevelFilter(level);
                }}
            />
            <p className='text-3xl'>Level: {levelFilter}</p>
        </>
    )
}

export default LevelFilter;