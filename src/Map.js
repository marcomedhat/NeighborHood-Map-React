import React, { Component }  from "react"
import {withScriptjs, withGoogleMap, GoogleMap} from "react-google-maps"
import {getDetails} from './FoursquareAPI'

const Map = withScriptjs(withGoogleMap((props) => {
	return (
		<GoogleMap
			defaultZoom={13}
			center={{lat:42.3601, lng:-71.0589}} 
		>	
		</GoogleMap>
	);
}))

export default Map