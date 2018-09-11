import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Map'

class App extends Component {
  render() {
    const {locations} = this.props

    return (
      <div className="App">
        <div className="header">
          <h1>App</h1>
        </div>
        <div className="container">
          <div className="sidebar">
            <p>Search</p>
          </div>
          <div className="map">
            <Map
              googleMapURL={`http://maps.googleapis.com/maps/api/js?key=AIzaSyAVPMaMM5I8Xq3CfJ3Kg1sgG2vcsYQ_ON4&v=3.exp&libraries=geometry,drawing,places`}
              loadingElement={<div style={{height:`100%`}}/>}
              containerElement={<div style={{height:`100%`, width:`100%`}}/>}
              mapElement={<div style={{height:`100%`}}/>}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
