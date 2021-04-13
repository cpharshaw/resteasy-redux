
import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

import { compose } from 'redux';
import { connect } from 'react-redux';

import { getGeolocation } from '../../../../../../../../store/actions/geoActions';
import { storeInput } from '../../../../../../../../store/actions/inputActions';
import { getPlacesFromFoursquare } from '../../../../../../../../store/actions/foursquareActions';
import { recenterMap } from '../../../../../../../../store/actions/mapActions';


import './recenter.css';



class RecenterButton extends Component {
  constructor(props) {
    super(props);
    this.googleMapRef = React.createRef();
    this.state = {
      color: "grey"
    };
    this.handleClick = this.handleClick.bind(this);
    this.color = "grey";
  }


  handleClick() {
    const googleAPI = this.props.googleAPIValue;
    const googleMap = this.props.mapValue;
    const googleMapLoaded = this.props.initialMapTilesLoaded;
    const fsValue = this.props.foursquareValue;
    const geolocLat = this.props.geolocationLatValue;
    const geolocLng = this.props.geolocationLngValue;
    const mapMovementCounter = this.props.mapMovedCounterValue;

    const googleMapBounds = googleMap ? googleMap.getBounds() : null;
    const googleMapCenter = googleMap ? googleMap.getCenter() : null;
    const googleMapCenterLat = googleMap ? googleMapCenter.lat() : 0;
    const googleMapCenterLng = googleMap ? googleMapCenter.lng() : 0;

    const geo_same_ctr =
      geolocLat == googleMapCenterLat
      &&
      geolocLng == googleMapCenterLng;

    if (!geo_same_ctr) {
      console.log("recenter clicked");
      this.props.getGeolocation("manual");
      this.props.recenterMap();
    }

  }



  render() {

    const googleAPI = this.props.googleAPIValue;
    const googleMap = this.props.mapValue;
    const googleMapLoaded = this.props.initialMapTilesLoaded;
    const fsValue = this.props.foursquareValue;
    const geolocLat = this.props.geolocationLatValue;
    const geolocLng = this.props.geolocationLngValue;
    const mapMovementCounter = this.props.mapMovedCounterValue;

    const googleMapBounds = googleMap ? googleMap.getBounds() : null;
    const googleMapCenter = googleMap ? googleMap.getCenter() : null;
    const googleMapCenterLat = googleMap ? googleMapCenter.lat() : 0;
    const googleMapCenterLng = googleMap ? googleMapCenter.lng() : 0;

    const geo_same_ctr =
      geolocLat == googleMapCenterLat
      &&
      geolocLng == googleMapCenterLng;

    const color = geo_same_ctr ? "#1898dd" : "grey";

    return (

      <div className="recenterButton animated fadeInRight faster"
        style={{
          borderColor: color
        }}
        onClick={this.handleClick}
      >
        <div className="recenterCrosshairs1"
          style={{
            background: color
          }}
        />
        <div className="recenterButtonRing"
          style={{
            borderColor: color
          }}
        >
          <div className="recenterButtonDot"
            style={{
              background: color
            }}
          />
        </div>
        <div className="recenterCrosshairs2"
          style={{
            background: color
          }}
        />
      </div>

    )

  }

}


const mapStateToProps = (state, ownProps) => {
  return {
    displayValue: ownProps.display ? "none" : "",
    // geolocationValue: state.geolocationState.geolocationValue,
    geolocationLatValue: state.geolocationState.geolocationLatValue,
    geolocationLngValue: state.geolocationState.geolocationLngValue,
    numGeolocationUpdates: state.geolocationState.numGeolocationUpdates,
    mapValue: state.mapState.mapValue,
    boundsValue: state.mapState.boundsValue,
    googleAPIValue: state.mapState.googleAPIValue,
    initialMapTilesLoaded: state.mapState.initialMapTilesLoaded,
    foursquareValue: state.foursquareState.foursquareValue,
    mapMovedCounterValue: state.mapState.mapMovedCounterValue,
    centerLatValue: state.mapState.centerLatValue,
    centerLngValue: state.mapState.centerLngValue,
    mapListToggleValue: ownProps.display,
    googleAPIValue: state.mapState.googleAPIValue,
    modalState: state.modalState,
    selectedMarkerValue: state.mapState.selectedMarkerValue
    // inputValue: state.inputState.inputValue
    // ,state: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getGeolocation: (manual) => dispatch(getGeolocation(manual)),
    storeInput: (input) => dispatch(storeInput(input)),
    getPlacesFromFoursquare: (location) => dispatch(getPlacesFromFoursquare(location)),
    recenterMap: () => dispatch(recenterMap())
  }
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  // firestoreConnect([
  //   {
  //     collection: 'reviews',
  //     orderBy: ['createdAt', 'desc']
  //   }
  // ]),
)(RecenterButton);