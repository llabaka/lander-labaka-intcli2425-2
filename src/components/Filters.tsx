import React from "react"

interface FilterProps {
    levelFilter: number,
    setLevelFilter: (potions: number) => void;
}

const Filters: React.FC<FilterProps> = ({ levelFilter, setLevelFilter }) => {
    return (
        <div className="flex flex-col items-center border-white border-2 p-4">
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
        </div>
    )
}

export default Filters;