import React from 'react'
import PropTypes from 'prop-types'
import GoogleMap from 'google-map-react'

import MapMarker from './MapMarker'
import '../stylesheets/style.scss'

class SuisseMap extends React.Component {

    render() {

        // Should be static - how?
        let defaultProps = {
            center: {lat: 46.81, lng: 8.23},
            zoom: 7
        };

        const GOOGLE_API_KEY = 'AIzaSyCQ8OMoNJ8-p2xg14xRRH8YgTbHhsw_Brs';
        const MAP_OPTIONS = {scrollwheel: false, draggable: false, fullscreenControl: false, zoomControl: false};

        return(
            <div className='large_map'>
                <GoogleMap
                    options={MAP_OPTIONS}
                    bootstrapURLKeys={{key: GOOGLE_API_KEY,language: 'en'}}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <MapMarker lat={this.props.markerLat} lng={this.props.markerLng} />
                </GoogleMap>
            </div>
        )
    }
}

SuisseMap.propTypes = {
    markerLat: PropTypes.number.isRequired,
    markerLng: PropTypes.number.isRequired
};

export default SuisseMap;
