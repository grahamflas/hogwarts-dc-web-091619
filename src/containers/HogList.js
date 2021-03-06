import React from 'react';
import HogTile from '../components/HogTile'

const HogList = ({hogs, handleBanishClick}) => {
  return(
    <div className="ui four cards">
      {
        hogs.map(hog => (
          <HogTile 
            key={hog.name}
            hog={hog}
            handleBanishClick={handleBanishClick}
          />
        ))
      }
    </div>
  )
}

export default HogList