import React from 'react';
import HogDetail from './HogDetail';

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

  handleInfoClick = () =>{
    this.setState( {clicked: !this.state.clicked} )
  }

  render(){
    const {hog: {name, greased}, handleBanishClick} = this.props
    return(
      <div className="ui card eight wide column">
        <div>
          <img src={this.getImage(name)} alt={`hogPic ${name}`}/>
        </div>
       <div className="content">
         <h3 className="header">{name}</h3>
         <p>{greased ? "Greased" : "Un-greased"}</p>
       </div>
       <div className="extra-content">
        {
          this.state.clicked ? <HogDetail hog={this.props.hog}/> : null
        }
       </div>
       <button className="ui button" onClick={this.handleInfoClick}>
         {this.state.clicked ? "Less Info" : "More Info"}
       </button>
       <button className="ui button" onClick={() => handleBanishClick(this.props.hog)}>Banish Me</button>
      </div>
    )
  }
}

export default HogTile