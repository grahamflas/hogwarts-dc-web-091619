import React from 'react';
import HogTile from '../components/HogTile'

const HogList = ({hogs}) => {
  return(
    <div>
      {
        hogs.map(hog => (
          <HogTile 
            key={hog.name}
            hog={hog}
          />
        ))
      }
    </div>
  )
}

export default HogList