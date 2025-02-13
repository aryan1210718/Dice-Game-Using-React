import React from 'react'

const RoleDice = ({currentDice,roleDice}) => {


  return (

<div>
        <div 
        onClick={roleDice}
        className="flex flex-col items-center justify-center h-full w-full">

            <img className='h-44' src={`/rolldices/dice_${currentDice}.png`} alt=" Dice 1" />

        <p className='mt-2'>Click on Dice to Roll</p>
        
        </div>

</div>  
  )
}

export default RoleDice
