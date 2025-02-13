import React from 'react';

const Rules = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='bg-[#fbf1f1] p-3 m-2 w-1/2 rounded-lg border-black border-2'>
        <h2 className='text-2xl'>How to play dice game</h2>
        <div className="text mt-1">
          <p className='text-sm'>Select any number</p>
          <p className='text-sm'>Click on dice image</p>
          <p className='text-sm'>
            After clicking on the dice, if the selected number matches the dice number, you
            will get points equal to the dice number.
          </p>
          <p className='text-sm'>If your guess is wrong, 2 points will be deducted.</p>
        </div>
      </div>
    </div>
  );
};

export default Rules;