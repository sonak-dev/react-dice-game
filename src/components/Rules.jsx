export const Rules = () => {
    return (
      <div className="mt-16 w-full text-left max-w-2xl bg-pink-50 px-6 py-5 rounded-xl">
         {/* showRules && <Rules /> */}
         <h2 className="text-2xl font-bold">How to play dice game</h2>
               
         <div className="mt-6 space-y-2">
            <p className="text-lg">Select any number</p>
            <p className="text-lg">Click on dice image</p>
            <p className="text-lg">
               After clicking on the dice, if your selected number matches
               the dice number, you will get the same points as the dice.
            </p>
            <p className="text-lg">
               If you get wrong guess then 2 points will be dedcuted
            </p>
         </div>
      </div>
   )
}