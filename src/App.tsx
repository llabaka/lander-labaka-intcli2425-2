import { useEffect, useState } from 'react'
import './App.css'
import { Potion } from './types/Potion'
import { potions } from './data/data'

function App() {
  const [potionsData, setPotionsData] = useState<Potion[] | []>([]);
  const [potionModalVisible, setPotionModalVisible] = useState(false);
  const [selectedPotion, setSelectedPotion] = useState<Potion | null>(null);

  useEffect(() => {
    setPotionsData(potions)
  }, [])

  const openModal = (potion: Potion) => {
    console.log(potion.name);
    setPotionModalVisible(true);
    setSelectedPotion(potion);
  };

  return (
    <>
      <div className="grid grid-cols-5 gap-4">
        {potionsData.map((potion, index) => (
          <div key={index} className="text-center p-4 rounded-lg">
            <img src={potion.image} alt={`Potion ${potion.name}`} className="w-full h-auto mb-2" />
            <p>{potion.name}</p>
            <p>{potion.rarity}</p>
            <p>{potion.meta.availability.drop_rate.boss}</p>
            <p>{potion.meta.availability.drop_rate.chance}</p>
            <button
              className=" mt-2 bg-orange-500 hover:bg-orange-600 text-black font-bold py-2 px-4 border-b-4 border-orange-500 hover:border-orange-700 rounded "
              onClick={() => openModal(potion)}
            >
              Show details
            </button>
          </div>
        ))}
      </div>

      {potionModalVisible && selectedPotion && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-black p-4 rounded-lg">
            <h2 className="text-2xl font-bold">{selectedPotion.name}</h2>
            {/* Mostrar los efectos primarios y secundarios */}
            <div className="mt-4">
              <h3 className="font-semibold text-lg">Primary Effects:</h3>
              <ul>
                {selectedPotion.effects.primary.attribute}
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold text-lg">Secondary Effects:</h3>
              <ul>
                {selectedPotion.effects?.secondary!.map((effect, index) => (
                  <li key={index}>{effect.attribute}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold text-lg">Ingredients:</h3>
              <ul>
                {selectedPotion.ingredients?.map((ingredient, index) => (
                  <li key={index}>{ingredient.name} ({ingredient.origin.location}) from ({ingredient.origin.region})</li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold text-lg">Restrictions:</h3>
              <ul>
                {selectedPotion.usage.restrictions.classRestrictions.map((restriction, index) => (
                  <li key={index}>{restriction}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold text-lg">Usage warning:</h3>
              <ul>
                {selectedPotion.usage.instructions.map((warning, index) => (
                  <li key={index}>{warning}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold text-lg">Creation time:</h3>
              <ul>
              <li>{selectedPotion.crafting.time.amount} {selectedPotion.crafting.time.unit}</li>
              </ul>
            </div>

            <button
              className="absolute top-0 right-0 p-2"
              onClick={() => setPotionModalVisible(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default App
