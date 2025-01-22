import { useEffect, useState } from 'react'
import './App.css'
import { Potion } from './types/Potion'
import { potions } from './data/data'
import Modal from './components/Modal';
import Potions from './components/Potions';
import Filters from './components/Filters';
import { filterByLevelRequireMent, findPotionByEffect, getPotionsByRarity } from './helpers/potionHelpers';

function App() {
  const [potionModalVisible, setPotionModalVisible] = useState(false);
  const [selectedPotion, setSelectedPotion] = useState<Potion | null>(null);
  const [levelFilter, setLevelFilter] = useState(0);
  const [rarityFilter, setRarityFilter] = useState('');
  const [effectFilter, setEffectFilter] = useState('');
  const [craftTime, setCraftTime] = useState(0);
  const [showingPotions, setShowingPotions] = useState<Potion[] | []>([]);

  //Assign data
  useEffect(() => {
    filterPotions();
  }, [levelFilter, rarityFilter, effectFilter]);

  async function filterPotions() {

    let filteredPotions = potions;

    if (levelFilter > 0) {
      filteredPotions = filterByLevelRequireMent(potions, levelFilter);
    }

    if (rarityFilter) {
      filteredPotions = getPotionsByRarity(potions, rarityFilter);
    }

    if (effectFilter) {
      filteredPotions = findPotionByEffect(potions, effectFilter);;
    }

    setShowingPotions(filteredPotions);
  }

  const openModal = (potion: Potion) => {
    setPotionModalVisible(true);
    setSelectedPotion(potion);
  };

  return (
    <>
      <Filters
        levelFilter={levelFilter}
        setLevelFilter={setLevelFilter}
        rarifyFilter={rarityFilter}
        setRarityFilter={setRarityFilter}
        effectFilter={effectFilter}
        setEffectFilter={setEffectFilter}
      />

      <Potions
        potionsData={showingPotions}
        openModal={openModal}
      />

      {potionModalVisible && selectedPotion && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <Modal
            potion={selectedPotion}
            setPotionModalVisible={setPotionModalVisible}
          />
        </div>
      )}
    </>
  )
}

export default App
