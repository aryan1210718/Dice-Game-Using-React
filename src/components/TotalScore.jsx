import React from 'react'

const TotalScore = ({score}) => {
    return (
        <div className="flex flex-col items-start space-y-2 p-20 w-1/2">
          <h1 className="text-4xl font-bold">{score}</h1>
          <p className="text-lg">Total Score</p>
        </div>
      );
}

export default TotalScore
