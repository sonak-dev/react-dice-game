import { useState } from "react"
import { NumberSelector } from "./NumberSelector.jsx";
import { TotalScore } from "./TotalScore.jsx";
import { Button } from "./Button.jsx"
import { DiceRole } from "./RoleDice.jsx"
import { Rules } from "./Rules.jsx"


export const GamePlay = () => {
   const [score, setScore] = useState(0);
   const [selectedNumber, setSelectedNumber] = useState();
   const [currentDice, setCurrentDice] = useState(1);
   const [error, setError] = useState("");
   const [showRules, setShowRules] = useState(false);
   const [reset, setReset] = useState();


   const roleDice = () => {

      if (!selectedNumber){
         setError("You have not selected any number.");
         return;
      }

      const randomNumber = Math.floor(Math.random() * 6) + 1;
      console.log(randomNumber);
      setCurrentDice(randomNumber);

      if(selectedNumber === randomNumber){
         setScore(prev => prev + randomNumber);
      }else{
         setScore(prev => prev - 2);
      }

      setSelectedNumber(undefined);

   }

   const resetScore = () => {
      setScore(0);
      setSelectedNumber(undefined);
      setCurrentDice(1);
      setError("");
   };


   return (
      <main className="max-w-7xl mx-auto px-4 py-8">

         {/* Top Section */}
         <section className="flex justify-between">

            <TotalScore score={score} />

            <NumberSelector 
               selectedNumber={selectedNumber}
               setSelectedNumber={setSelectedNumber}
               error={error}
               setError={setError}
            />

         </section>

         {/* Dice and Buttons */}
         <section className="flex flex-col items-center text-center">
            
            <DiceRole
               currentDice={currentDice}
               roleDice={roleDice}
            />

            <div className="flex flex-col">
               
               <Button 
                  onClick={resetScore}
                  text="Reset Score" 
               />

               <Button 
                  onClick={() => setShowRules(true)} 
                  text="Show Rules" 
               />

            </div>

            {showRules && <Rules />}

         </section>

      </main>
   )
}



/*
<main className="max-w-7xl mx-auto px-4 py-8">

   // /* Top Section */
   // <section className="flex justify-between">

   //       {/* Left */}
   //       <TotalScore score={score} />


   //       {/* Right */}
   //       <NumberSelector
   //          selectedNumber={selectedNumber}
   //          setSelectedNumber={setSelectedNumber}
   //          error={error}
   //          setError={setError}
   //       />

   // </section>

   // <section className="mt-20 flex flex-col items-center">

      //       {/* Dice */}

      //       {gameOver ? (
      //          <GameOver
      //             score={score}
      //             onRestart={resetScore}
      //          />
      //       ) : (
      //          <>
      //             <Dice
      //                currentDice={currentDice}
      //                rollDice={roleDice}
      //             />

      //             <div className="mt-8 flex flex-col gap-4">
      //                <Button
      //                   text="Reset Score"
      //                   onClick={resetScore}
      //               />

      //                <Button
      //                   text={showRules ? "Hide Rules" : "Show Rules"}
      //                   onClick={() => setShowRules(!showRules)}
      //                />
      //             </div>

      //             {showRules && <Rules />}
      //          </>
      //       )}

      //       {/* Buttons */}
      //       {/* <div className="mt-8 flex flex-col gap-4">

      //          <Button 
      //             text="Reset Score" 
      //             onClick={resetScore}
      //          />

      //          <Button
      //             text={showRules ? "Hide Rules" : "Show Rules"}
      //             onClick={() => {
      //                console.log("Button Clicked");
      //                setShowRules(!showRules);
      //             }}
      //          />

      //       </div> */}

      //       {/* Rules */}
      //      {showRules && <Rules />}

   //    </section>

// </main>

// */