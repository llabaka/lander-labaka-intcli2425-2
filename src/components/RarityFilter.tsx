import React from "react"

interface RarityFilterProps {
    rarityFilter: string,
    setRarityFilter: (rarity: string) => void;
}

const RarityFilter: React.FC<RarityFilterProps> = ({ rarityFilter, setRarityFilter }) => {
    return (
        <div>
            <label className="text-lg">Rarity:</label>
            <select
                value={rarityFilter}
                onChange={(e) => setRarityFilter(e.target.value)}
                className="w-64 p-2 border border-gray-300 rounded"
            >
                <option value="">All</option>
                <option value="legendary">Legendary</option>
                <option value="epic">Epic</option>
                <option value="mythic">Mythic</option>
            </select>
        </div>
    )
}

export default RarityFilter;