import {React,useState}  from 'react'

const NumberSelector = ({selectedNumber,setSelectedNumber,error,setError}) => {
    const arrNumber=[1,2,3,4,5,6];
 
    // console.log(selectedNumber)

    const numberSelectorHandler=(value)=>{
        setSelectedNumber(value)
        setError("")
    }
  return (
    
    <div className='flex flex-col items-center gap-2 p-20'>
        <p className='text-red-600'>{error}</p>
        <div  className='flex gap-3'>
        {arrNumber.map((value, idx) => (
          <div
            key={idx}
            onClick={()=>numberSelectorHandler(value)}
            className={`border border-black w-fit p-3 rounded-sm cursor-pointer ${
              value === selectedNumber ? 'bg-black text-white' : ''
            }`}
          >
            {value}
          </div>
        ))}
        </div>
    <div className='flex'>        
    <p className='text-black'>Select Number</p>
    </div>
    </div>
  )
}

export default NumberSelector
