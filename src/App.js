import React, { Component } from 'react';
import './App.css';
import Map from './Map'
import Search from './Search';
import Error from './Error';
import PlacesData from './PlacesData.json';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

class App extends Component {
  state = {
    places: [],
    showingPlaces: [],
    query: '',
    center: { lat: 33.6795758, lng:-7.4114479 },
    showInfoId: '',
    loaded: false,
    action: '',
  }

/**
  * @description Load initial data
  */
 componentDidMount() {
  this.setState({
    places: PlacesData,
    showingPlaces: PlacesData,
    loaded: true
  });
}
  
/**
  * @description Toggle maker's infowindow open
  * @param {string} id - The marker's place ID
  * @param {string} action - Type of action fired (open or close)
  */
 onToggleOpen = (id, action) => {
  this.setState({
    showInfoId: id,
    action
  });
}

/**
  * @description Filter places to show
  * @param {string} query - The search query
  */
 filterPlaces = (query) => {
  const { places } = this.state;
  let showingPlaces;

  // update query in state
  this.setState({
    query: query.trim()
  });

  // filter places to show based on query
  if (query) {
    const match = new RegExp(escapeRegExp(query), 'i');
    showingPlaces = places.filter(place => match.test(place.name));
  } else {
    showingPlaces = places;
  }

  // sort places to show by place name
  showingPlaces.sort(sortBy('name'));

  // update places to show in state
  this.setState({ showingPlaces });
}
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Neighborhood Map</h1>
        </div>
        <div className="container">
          <div className="sidebar">  
            <Search
              data={this.state}
              onToggleOpen={this.onToggleOpen}
              filterPlaces={this.filterPlaces}
            />
          </div>
          <div className="map">
            <Map
              onToggleOpen={this.onToggleOpen}
              showInfoId={this.state.showInfoId}
              action={this.state.action}
              places={this.state.places}
              showingPlaces={this.state.showingPlaces}
              containerElement={<main className="map" role="application" tabIndex="0" style={{height:`100%`, width:`100%`}}></main>}
              mapElement={<div style={{ height: `100%` }}></div>}
              loadingElement={<Error message={'There was an error while loading the Google Maps scripts. Please try again later.'} />}
              googleMapURL={`http://maps.googleapis.com/maps/api/js?key=AIzaSyAVPMaMM5I8Xq3CfJ3Kg1sgG2vcsYQ_ON4&v=3.exp&libraries=geometry,drawing,places`}
            />
          </div>
        
        </div>
      </div>
    );
  }
}

export default App;
