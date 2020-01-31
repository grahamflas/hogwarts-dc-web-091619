import React from 'react';

const HogDetail = ( {hog: {greased, "highest medal achieved" : highestMedal, weight} } ) => {
  return(
    <div className="details">
      <strong>{greased ? "Greased" : "Un-greased"}</strong>
      <p>Highest Medal: <strong>{`${highestMedal}`}</strong></p>
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