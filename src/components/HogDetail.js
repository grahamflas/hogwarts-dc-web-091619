import React from 'react';

const HogDetail = ( {hog: {specialty, "highest medal achieved" : highestMedal, weight} } ) => {
  return(
    <div className="details">
      <p>Specialty: {specialty}</p>
      <p>Highest Medal: <strong>{`${highestMedal}`}</strong></p>
      <p>Weight: {`${weight}`}</p>
    </div>
  )
}

export default HogDetail
