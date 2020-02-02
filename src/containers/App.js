import React, { Component } from 'react';
import '../App.css';
import Nav from '../components/Nav'
import hogs from '../porkers_data';
import HogList from './HogList';
import Filter from '../components/Filter';

class App extends Component {
  state = {
    greasedOnly: false,
    sortBy: "",
    banished: []
  }

  banishHog = hog => {
    console.log("banishing hog:", hog)
    this.setState({
      banished: [...this.state.banished, hog]
    })
  }
  
  handleSortBy = event => {
    this.setState({sortBy: event.target.value})
  }

  toggleGreased = () => {
    this.setState({greasedOnly: !this.state.greasedOnly})
  }

  //this method should return an array of all hog object that are NOT on the banished list
  filterBanished = () => {
    //If there are hogs on the banished list
    if (this.state.banished.length > 0){
      //Iterate over all hogs, and for each hog in hogs
      return hogs.filter(hog => {
        //return the hog if it IS NOT present in the array of banished hogs
        return this.state.banished.indexOf(hog) === -1
      });
    }
    return hogs;
  }

  filterGreased = () => {
    let unbanished = this.filterBanished()
    if (this.state.greasedOnly){
      return unbanished.filter(hog => hog.greased)
    }
    return unbanished
  }

  sortHogs = () => {
    let filtered = this.filterGreased();
    console.log("unsorted:", filtered)

    switch (this.state.sortBy){
      case "name":
        let sortedByName = filtered.sort((a, b) => a.name.localeCompare(b.name));
        console.log("sorted by name:", sortedByName)
        return sortedByName
      case "weight":
        let sortedByWeight = filtered.sort((a,b) => b.weight - a.weight)
        console.log("sorted by weight:", sortedByWeight)
        return sortedByWeight
      default:
        console.log("no sort applied.")
        return filtered
    }
  }

  render() {
    return (
      <div className="ui grid container App">
        <div className="sixteen wide column centered">
          <Nav />
        </div>
        <div className="sixteen wide column centered">
          <Filter 
            sortBy={this.state.sortBy}
            handleSortBy={this.handleSortBy}
            greasedOnly={this.state.greasedOnly}
            toggleGreased={this.toggleGreased}
          />
        </div>
        <div className="sixteen wide column centered">
          <HogList
            hogs={this.sortHogs()}
            handleBanishClick={this.banishHog}
          />
        </div>

      </div>
    )
  }
}

export default App;
