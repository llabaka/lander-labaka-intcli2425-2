import React from "react"

interface LevelFitlerProps {
    levelFilter: number,
    setLevelFilter: (potions: number) => void;
}

const LevelFilter: React.FC<LevelFitlerProps> = ({ levelFilter, setLevelFilter }) => {
    return (
        <>
            <p className='text-xl mr-2'>Level: {levelFilter}</p>
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

        </>
    )
}

export default LevelFilter;