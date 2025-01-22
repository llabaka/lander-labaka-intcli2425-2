import { useEffect, useState } from 'react'
import './App.css'
import { Potion } from './types/Potion'
import { potions } from './data/data'
import { filterByLevelRequireMent } from './helpers/potionHelpers';
import Modal from './components/Modal';
import Potions from './components/Potions';

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

      <Potions potionsData={potionsData} openModal={openModal} />

      {potionModalVisible && selectedPotion && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <Modal potion={selectedPotion} setPotionModalVisible={setPotionModalVisible} />
        </div>
      )}
    </>
  )
}

export default App
