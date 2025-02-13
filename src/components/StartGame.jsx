import {React,useState} from 'react'

const StartGame = ({toggle}) => {

  return (
    <div className="flex items-center justify-evenly h-screen">
      <img src="/dices1.png" className='h-80 w-150' alt="Dice" />
      <div className='flex flex-col items-center ml-8'>
      <h1 className='text-6xl mb-4 font-bold'>Dice Game</h1>
      <button
      onClick={toggle}
      className='bg-black text-white px-6 py-2 rounded-lg text-lg hover:bg-slate-700'>Play Now</button>
      </div>
    </div>
  )
}

export default StartGame
