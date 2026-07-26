import { Button } from "./Button.jsx";


export const StartGame = ({ toggleGame }) => {
   return (
      <main className="min-h-screen flex items-center justify-center">
         <section className="max-w-7xl w-full mx-auto flex items-center justify-between px-4">

            {/* Left Side */}
            <div>
               <img
                  src="/images/GamePage2/cubes_gambling_n_02 1.png"
                  alt="Dice"
               />
            </div>

            {/* Right Side */}
            <div className="flex flex-col items-end">

               <h1 className="text-8xl font-bold">DICE GAME</h1>

               <Button 
                  text="Play Now"
                  onClick={toggleGame}
               />

            </div>

         </section>
      </main>
   );
};
