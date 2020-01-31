import React, { Component } from 'react';
import '../App.css';
import Nav from '../components/Nav'
import hogs from '../porkers_data';
import HogList from './HogList';

class App extends Component {
  state = {
    banished: []
  }

  banishHog = hog => {
    console.log("banishing hog:", hog)
    this.setState({
      banished: [...this.state.banished, hog]
    })
  }

  filterBanished = () => {
    if (this.state.banished.length > 0){
      return hogs.filter(hog => {
        return this.state.banished.indexOf(hog) === -1
      });
    }
    return hogs;
  }

  render() {
    return (
      <div className="ui grid container App">
        <div className="sixteen wide column centered">
          <Nav />
        </div>
        <div className="sixteen wide column centered">
          <HogList
            hogs={this.filterBanished()}
            handleBanishClick={this.banishHog}
          />
        </div>

      </div>
    )
  }
}

export default App;
