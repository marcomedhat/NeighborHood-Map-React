import React, { Component }  from "react"
import {withScriptjs, withGoogleMap, GoogleMap} from "react-google-maps"
import MarkerDetails from './MarkerDetails'
// import {getDetails} from './FoursquareAPI'

const Map = withScriptjs(withGoogleMap((props) => {
	// const markers = props.locations.map(venue => <MarkerDetails 
	// 		key={venue.id}
	// 		venue={venue}
	// 		location={{lat:venue.location.lat, lng:venue.location.lng}}
	// 	/>)
	return (
		<GoogleMap
			defaultZoom={13}
			center={{lat: 30.054706, lng: 31.237517}} 
		>
			{props.places.map(place => (
				<MarkerDetails
					key={place.id}
		            placeId={place.id}
		            placePos={place.position}
				/>))
			}
		</GoogleMap>
	);
}))

export default Map