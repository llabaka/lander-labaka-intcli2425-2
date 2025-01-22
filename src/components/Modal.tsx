import React from "react";
import { Potion } from "../types/Potion";

interface ModalProps {
    potion: Potion;
    setPotionModalVisible: any
}

const Modal: React.FC<ModalProps> = ({ potion, setPotionModalVisible }) => {
    return (
        <div className="bg-black p-4 rounded-lg">
            <h2 className="text-2xl font-bold">{potion.name}</h2>
            {/* Mostrar los efectos primarios y secundarios */}
            <div className="mt-4">
                <h3 className="font-semibold text-lg">Primary Effects:</h3>
                <ul>
                    {potion.effects.primary.attribute}
                </ul>
            </div>

            <div className="mt-4">
                <h3 className="font-semibold text-lg">Secondary Effects:</h3>
                <ul>
                    {potion.effects?.secondary!.map((effect, index) => (
                        <li key={index}>{effect.attribute}</li>
                    ))}
                </ul>
            </div>

            <div className="mt-4">
                <h3 className="font-semibold text-lg">Ingredients:</h3>
                <ul>
                    {potion.ingredients?.map((ingredient, index) => (
                        <li key={index}>{ingredient.name} ({ingredient.origin.location}) from ({ingredient.origin.region})</li>
                    ))}
                </ul>
            </div>

            <div className="mt-4">
                <h3 className="font-semibold text-lg">Restrictions:</h3>
                <ul>
                    {potion.usage.restrictions.classRestrictions.map((restriction, index) => (
                        <li key={index}>{restriction}</li>
                    ))}
                </ul>
            </div>

            <div className="mt-4">
                <h3 className="font-semibold text-lg">Usage warning:</h3>
                <ul>
                    {potion.usage.instructions.map((warning, index) => (
                        <li key={index}>{warning}</li>
                    ))}
                </ul>
            </div>

            <div className="mt-4">
                <h3 className="font-semibold text-lg">Creation time:</h3>
                <ul>
                    <li>{potion.crafting.time.amount} {potion.crafting.time.unit}</li>
                </ul>
            </div>

            <button
                className="absolute top-0 right-0 p-2"
                onClick={() => setPotionModalVisible(false)}
            >
                X
            </button>
        </div>
    );
};

export default Modal;