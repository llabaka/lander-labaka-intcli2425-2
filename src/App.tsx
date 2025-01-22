import { useEffect, useState } from 'react'
import './App.css'
import { Potion } from './types/Potion'
import { potions } from './data/data'
import Modal from './components/Modal';
import Potions from './components/Potions';
import Filters from './components/Filters';
import { filterByLevelRequireMent, getPotionsByRarity } from './helpers/potionHelpers';

function App() {
  const [potionsData, setPotionsData] = useState<Potion[] | []>([]);
  const [potionModalVisible, setPotionModalVisible] = useState(false);
  const [selectedPotion, setSelectedPotion] = useState<Potion | null>(null);
  const [levelFilter, setLevelFilter] = useState(0);
  const [rarityFilter, setRarityFilter] = useState('');

  useEffect(() => {
    setPotionsData(potions)
  }, [])

  // Filtrar por nivel
  useEffect(() => {
    setPotionsData(filterByLevelRequireMent(potions, levelFilter));
  }, [levelFilter]);

  // // Filtrar por rarity
  // useEffect(() => {
  //   setPotionsData(getPotionsByRarity(potions, rarityFilter));
  // })

  const openModal = (potion: Potion) => {
    setPotionModalVisible(true);
    setSelectedPotion(potion);
  };

  return (
    <>

      <Filters levelFilter={levelFilter} setLevelFilter={setLevelFilter} />

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
