import { useEffect, useState } from 'react'
import './App.css'
import { Potion } from './types/Potion'
import { potions } from './data/data'

function App() {
  const [count, setCount] = useState(0)
  const [potionsData, setPotionsData] = useState<Potion[] | []>([]);
  const [potionModalVisible, setPotionModalVisible] = useState(false);

  useEffect(() => {
    setPotionsData(potions)
  }, [])



  return (
    <>

      {/* <h1 className="text-3xl font-bold underline border">Vite + React</h1> */}
      <div className="border minmum-height">
        <button onClick={() => setPotionModalVisible((true))}>
        <img src={potions.map(potion => potion.image)} alt="Potion Image" />;
          
        </button>
        <button onClick={() => setPotionModalVisible((true))}>

        </button>
        <button onClick={() => setPotionModalVisible((true))}>

        </button>
        <button onClick={() => setPotionModalVisible((true))}>

        </button>
      </div>
    </>
  )
}

export default App
