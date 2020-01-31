import React from 'react';

const HogDetail = ( {greased, "highest medal achieved" : highestMedal, weight} ) => {
  return(
    <div className="details">
      <strong>{greased ? "Greased" : "Un-greased"}</strong>
      <p>Highest Medal: {`${highestMedal}`}</p>
      <p>Weight: {`${weight}`}</p>
    </div>
  )
}

export default HogDetail

/*
{
  "hog": {
    "name": "Mudblood",
    "specialty": "Mediocre magic",
    "greased": false,
    "weight": 2,
    "highest medal achieved": "bronze"
  }
}
 */