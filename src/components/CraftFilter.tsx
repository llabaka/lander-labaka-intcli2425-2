import React from "react"

interface CraftFilterProps {
    craftTime: number;
    calculateCraftTime: () => void;
}

const CraftFilter: React.FC<CraftFilterProps> = ({ calculateCraftTime, craftTime }) => {
    return (
        <div className="input-wrapper">
            <label className="text-lg">Calculate crafting time:</label>
            <button
                onClick={calculateCraftTime}
                className="w-64 p-2 border border-gray-300 rounded"
            >
                Click to calculate craft time
            </button>
            <span className="ml-4 text-lg">{craftTime > 0 && `Total Craft Time: ${craftTime} minutes`}</span>
        </div>
    )
}

export default CraftFilter;