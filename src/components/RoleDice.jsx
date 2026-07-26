export const DiceRole = ({ currentDice, roleDice }) => {

    return (
        <div className="mt-30 cursor-pointer">

            {/* Dice */}
            <img
                src={`/images/GamePage/dice_${currentDice}.png`}
                alt="Dice"
                onClick={roleDice}
            >
            </img>
              
            <p className="mt-4 text-xl font-semibold">
                Click on Dice to Roll
            </p>
               
        </div>
    )
}