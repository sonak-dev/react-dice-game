import { useState } from 'react';

import { GamePlay } from './components/GamePlay.jsx';
import { StartGame } from './components/StartGame.jsx';
import './App.css';


function App() {
   const [isGameStarted, setIsGameStarted] = useState(false);

   const toggleGamePlay = () => {
      setIsGameStarted((prev) => !prev)
   }

   return (
      <>
         <div className="max-w-360 mx-auto">
            {
               isGameStarted ? <GamePlay /> : <StartGame toggleGame={toggleGamePlay} />
            }
         </div>
      </>
   )
}

export default App
