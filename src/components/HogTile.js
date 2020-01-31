import React from 'react';

class HogTile extends React.Component{
  state = {
    clicked: false
  }

  getImage = name => {
    let formattedName = name
      .replace(/\s/gi,"_")
      .toLowerCase();
    let pigPic = require(`../hog-imgs/${formattedName}.jpg`);
    return pigPic;
  }

  render(){
    const {name, specialty} = this.props.hog
    return(
      <div className="ui card eight wide column">
        <div>
          <img src={this.getImage(name)} alt={`hogPic ${name}`}/>
        </div>
       <div className="content">
         <h3 className="header">{name}</h3>
         <div className="description">Specialty: {specialty}</div>
       </div>
       <div className="extra-content">
        {
          this.state.clicked ? "I was clicked" : null
        }
       </div>
       <button className="ui button">
         {this.state.clicked ? "Less Info" : "More Info"}
       </button>
      </div>
    )
  }
}

export default HogTile