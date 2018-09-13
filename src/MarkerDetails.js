/*global google*/

import React, { Component } from 'react';
import {Marker, InfoWindow} from 'react-google-maps';
import {getDetails} from './FoursquareAPI'
import PropTypes from 'prop-types';
import Error from './Error';


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
	  action: PropTypes.string.isRequired
	};


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
				animation={google.maps.Animation.DROP}
				onClick={() => onToggleOpen(placeId, 'open')}
		    >
		    	{
		          (showInfoId === placeId && loaded === true && action === 'open') &&
		          <InfoWindow
		            options={{ maxWidth: 250 }}
		            key={placeId}
		            onCloseClick={() => onToggleOpen(placeId, 'close')}
		          >
		          {
		            error ? <Error message="There was an error while fetching this place's data. Please try again later." />
		            : <div className="details-place" tabIndex="0" key={placeId}>
		              <h3 className="details-title">
		                <a href={placeDetails.canonicalUrl}>{placeDetails.name}</a>
		              </h3>
		              <p className="details-address">{placeDetails.location.address || 'Address not found'}</p>
		              <div
		                className="details-rating"
		                title={`The rating is ${placeDetails.rating}`}
		              >
		                <span className="rating-number" aria-hidden="true">{placeDetails.rating}</span>
		              </div>
		              <div className="details-price" title={`The price is ${placeDetails.price.message}`}>
		                <span aria-hidden="true">{placeDetails.attributes.groups['0'].summary}</span>
		              </div>
		              <div className="details-category">
		                {
		                  placeDetails.categories.map(category =>
		                    <span key={category.id} className="category-pill">{category.name} </span>
		                  )
		                }
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