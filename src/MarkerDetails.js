/*global google*/

import React, { Component } from 'react';
import {Marker} from 'react-google-maps';
import {getDetails} from './FoursquareAPI'

export default class MarkerDetails extends React.Component {
	state = {
		loaded: false,
		error: false,
		placeDetails: {}
	}

	componentDidMount() {
		const placeId = this.props.placeId;

	    getDetails(placeId)
	      .then(placeDetails => {
	        this.setState({ placeDetails, loaded: true })
	      })
	      .catch(err => {
	        console.log('Foursquare API returned with ', err);
	        this.setState({ error: true });
	      });
	}

	render() {
		const { loaded, error, placeDetails } = this.state;
    	const {  placeId, placePos, onToggleOpen, showInfoId, action } = this.props;
		

		return (
			<Marker
				key={placeId}
				position={placePos}
		      />
		)	
		
	}

}