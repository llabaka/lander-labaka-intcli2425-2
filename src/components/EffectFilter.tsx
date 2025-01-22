import React from "react"

interface EffectFilterProps {
    effectFilter: string,
    setEffectFilter: (effect: string) => void;
}

const EffectFilter: React.FC<EffectFilterProps> = ({ effectFilter, setEffectFilter }) => {
    return (
        <div className="input-wrapper">
            <label className="text-lg">Effect:</label>
            <input
                type="text"
                value={effectFilter}
                onChange={(e) => setEffectFilter(e.target.value)}
                className="w-64 p-2 border border-gray-300 rounded"
                placeholder="Enter effect"
            />
        </div>
    )
}

export default EffectFilter;