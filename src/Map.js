import React from "react"
import {withScriptjs, withGoogleMap, GoogleMap} from "react-google-maps"
import MarkerDetails from './MarkerDetails'
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import MapStyles from './mapStyles.json';

const Map = compose(withScriptjs, withGoogleMap)(props => 
	<GoogleMap
		defaultZoom={15}
		defaultOptions={{ styles: MapStyles }}
		center={{lat: 30.054706, lng: 31.237517}} 
	>
		{
		    props.showingPlaces.length === 0 ?
		      props.places.map(place => (
		          <MarkerDetails
		            key={place.id}
		            placeId={place.id}
		            placePos={place.position}
		            onToggleOpen={props.onToggleOpen}
		            showInfoId={props.showInfoId}
		            action={props.action}
		          />
		      ))
		    :
		      props.showingPlaces.map(place => (
		        <MarkerDetails
		          key={place.id}
		          placeId={place.id}
		          placePos={place.position}
		          onToggleOpen={props.onToggleOpen}
		          showInfoId={props.showInfoId}
		          action={props.action}
		        />
		      ))
		}
	</GoogleMap>
);

Map.propTypes = {
  onToggleOpen: PropTypes.func.isRequired,
  action: PropTypes.string.isRequired,
  showingPlaces: PropTypes.array.isRequired,
  places: PropTypes.array.isRequired
  
};

export default Map