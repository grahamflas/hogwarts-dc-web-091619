import React from 'react';

const Filter = ({sortBy, handleSortBy, greasedOnly, toggleGreased}) => {
  return(
    <div className="filterWrapper">
      <div className="ui menu">
        <div className="item">
          <label>Sort by:</label>
        </div>
        <div className="ui item">
          <select 
            className="ui selection dropdown"
            name="sort"
            value={sortBy}
            onChange={handleSortBy}
          >
            <option value="">Choose an option</option>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
        </div>
        <div className="item">
          <input 
            className="ui checkbox" 
            type="checkbox"
            checked={greasedOnly}
            onChange={toggleGreased}
          />
          <label>Show greased pigs only</label>
        </div>
      </div>
    </div>
  )
}

export default Filter