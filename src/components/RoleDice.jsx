export const DiceRole = ({ currentDice, roleDice }) => {

    return (
        <div
            role="button"
            onClick={roleDice}
            className="mt-30 cursor-pointer"
        >

            {/* Dice */}
            <img
               src={`/images/GamePage/dice_${currentDice}.png`}
               alt="Dice"
            />
              
            <p className="mt-4 text-xl font-semibold">
               Click on Dice to Roll
            </p>
               
        </div>
    )
}