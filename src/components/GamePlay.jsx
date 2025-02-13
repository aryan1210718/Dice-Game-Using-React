import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RoleDice from './RoleDice'
import { useState } from 'react'
import { Rule } from 'postcss'
import Rules from './Rules'

const GamePlay = () => {
    const [selectedNumber, setSelectedNumber] = useState(null);

    const [currentDice, setCurrentDice] = useState(1);
    //---
    const [score, setScore] = useState(0);

    const [error, setError] = useState("");

    const [showrules, setShowrules] = useState(false);


    const randomNumberGenerate=(min,max)=>{

        return Math.floor(Math.random() * (max - min) + min);
    }

    const roleDice=()=>{
        // does not do any thing if number is  not selected from top 
        if(!selectedNumber) {
            setError("You have not Selected Any number")
            return;
        }
        setError("");



        const randomNumber =randomNumberGenerate(1,7)
        setCurrentDice((prev)=>randomNumber)

    
    //main(final) Logic
    if(selectedNumber===randomNumber){
        setScore((prev)=>prev+randomNumber)
    }else{
        setScore((prev)=>prev-2)
    }

    setSelectedNumber(undefined);

    }

//reset game btn
    const resetScore = () => {
        setScore(0);
      };
  return (
    <>
    <div className='flex items-center justify-between'>
    <TotalScore score={score}/>
    <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} error={error} setError={setError}/>
    </div>
    <RoleDice currentDice={currentDice} roleDice={roleDice}/>
    <div className="flex flex-col items-center">
        <button 
        onClick={resetScore}
        className='bg-white text-black rounded p-1 mt-3 border-2 border-black hover:bg-gray-300'>Reset Game</button>
        <div className='flex'>
        <button
        onClick={()=>setShowrules((prev)=>!prev)}
        className='text-white bg-black rounded mt-3 p-1 px-2 hover:bg-slate-700'>{showrules?'Hide':'Show'} Rules</button>
        </div>
    </div>
    {showrules && <Rules />}
    </>
  )
}

export default GamePlay
