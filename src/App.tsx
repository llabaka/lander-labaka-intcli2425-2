import { useEffect, useState } from 'react'
import './App.css'
import { Potion } from './types/Potion'
import { potions } from './data/data'
import { filterByLevelRequireMent } from './helpers/potionHelpers';
import Modal from './components/Modal';

function App() {
  const [potionsData, setPotionsData] = useState<Potion[] | []>([]);
  const [potionModalVisible, setPotionModalVisible] = useState(false);
  const [selectedPotion, setSelectedPotion] = useState<Potion | null>(null);
  const [levelFilter, setLevelFilter] = useState(0);

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
          <Modal potion={selectedPotion} setPotionModalVisible={setPotionModalVisible}/>
        </div>
      )}
    </>
  )
}

export default App
