import React from "react";
import { Potion } from "../types/Potion";



interface PotionsProps {
    potions: Potion[];
    openModal: (potion: Potion) => void;
}

const Potions: React.FC<PotionsProps> = ({ potions, openModal }) => {
    return (
        <div className="grid grid-cols-5 gap-4">
            {potions.map((potion, index) => (
                <div key={index} className="text-center p-4 rounded-lg">
                    <img src={potion.image} alt={`Potion ${potion.name}`} className="w-full h-auto mb-2" />
                    <p>{potion.name}</p>
                    <p>{potion.rarity}</p>
                    <p>{potion.meta.availability.drop_rate.boss}</p>
                    <p>{potion.meta.availability.drop_rate.chance}</p>
                    <button
                        className="mt-2 bg-orange-500 hover:bg-orange-600 text-black font-bold py-2 px-4 border-b-4 border-orange-500 hover:border-orange-700 rounded"
                        onClick={() => openModal(potion)}
                    >
                        Show details
                    </button>
                </div>
            ))}

        </div>
    )
};

export default Potions;