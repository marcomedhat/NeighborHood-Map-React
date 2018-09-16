/*global google*/

import React, { Component } from 'react';
import {Marker, InfoWindow} from 'react-google-maps';
import {getDetails} from './FoursquareAPI'
import PropTypes from 'prop-types';


class MarkerDetails extends Component {
	state = {
		loaded: false,
		error: false,
		placeDetails: {}
	}

	static propTypes = {
	  placeId: PropTypes.string.isRequired,
	  placePos: PropTypes.object.isRequired,
	  onToggleOpen: PropTypes.func.isRequired,
	  showInfoId: PropTypes.string.isRequired,
	  action: PropTypes.string.isRequired
	};


	componentDidMount() {
		const placeId = this.props.placeId;

	    

	    getDetails(placeId)
	      .then(placeDetails => {
	      	if (placeDetails) {
	      		this.setState({ placeDetails, loaded: true })
	      	} else {
	        	this.setState({ error: true });
	      	}
	        
	      });
	}

	render() {
		const { loaded, error, placeDetails } = this.state;
    	const {  placeId, placePos, onToggleOpen, showInfoId, action } = this.props;
		

		return (
			<Marker
				key={placeId}
				position={placePos}
				animation={google.maps.Animation.DROP}
				onClick={() => {
					if(!error) {
						onToggleOpen(placeId, 'open');
					} else {
						alert('Oh No! There was an error fetching location details from Foursquare API');
					}
					
				}}
		    >
		    	{
		          (showInfoId === placeId && loaded === true && action === 'open') &&
		          <InfoWindow
		            options={{ maxWidth: 250 }}
		            key={placeId}
		            onCloseClick={() => onToggleOpen(placeId, 'close')}
		          >
		          {
		             <div className="details-place" tabIndex="0" key={placeId} role="dialog">
		              	<h3 className="details-title">
		                	<a href={placeDetails.canonicalUrl}>{placeDetails.name}</a>
		             	 </h3>
		              	<p className="details-address">{placeDetails.location.address || 'Address not found'}</p>
		             	<div className="info">
			              	<div className="details-category">
			                {
			                  placeDetails.categories.map(category =>
			                    <span key={category.id} className="category-pill">{category.name} </span>
			                  )
			                }
			              </div>
			              <div
			                className="details-rating"
			                title={`The rating is ${placeDetails.rating}`}
			              >
			                <span className="rating-number" aria-hidden="true">{placeDetails.rating}</span>
			              </div>
			            </div>
		              	<div className="details-img">
		                	<img src={`${placeDetails.bestPhoto.prefix}width150${placeDetails.bestPhoto.suffix}`} alt={`Best of ${placeDetails.name}`} />
		              	</div>
		            </div>
		          }
		          </InfoWindow>
		        }
		    </Marker>
		)	
		
	}

}

export default MarkerDetails;