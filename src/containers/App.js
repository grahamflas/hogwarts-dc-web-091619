import React, { Component } from 'react';
import '../App.css';
import Nav from '../components/Nav'
import hogs from '../porkers_data';
import HogList from './HogList';

class App extends Component {
  render() {
    return (
      <div className="ui grid container App">
        <div className="sixteen wide column centered">
          <Nav />
        </div>
        <div className="sixteen wide column centered">
          <HogList
            hogs={hogs}
          />
        </div>

      </div>
    )
  }
}

export default App;
