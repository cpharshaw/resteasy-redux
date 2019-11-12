
// https://codesandbox.io/s/rzwrk2854

import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { getGeolocation } from '../../store/actions/geoActions';
import { storeBounds } from '../../store/actions/boundsActions';

import { compose } from 'redux';
// import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
// import { createProject } from '../../store/actions/projectActions';
import MyStyle from './mapStyle.js';
// import './loading.css';
var myLocationIcon = 'https://img.icons8.com/ultraviolet/40/000000/map-pin.png';


class MainMap extends Component {
  constructor(props) {
    super(props);
    // this.onMarkerClick = this.onMarkerClick.bind(this);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
  }

  componentDidMount() {
    const google = this.props.google;

    const myLocation = {
      lat: this.props.geolocationValue ? this.props.geolocationValue.latitude : -39.96,
      lng: this.props.geolocationValue ? this.props.geolocationValue.longitude : 75.14
    }

    const mapDiv = document.getElementById('map');

    const map = new google.maps.Map(mapDiv, {
      center: myLocation,
      zoom: 16
    });


    map.setOptions({ styles: MyStyle });

    const { geolocationValue, displayValue } = this.props;

    const test = function () {
      if (geolocationValue && !displayValue) {
        const bounds = map.getBounds();

        console.log("anythung at all!");
      }
    }


    map.addListener(
      'tilesloaded',
      function () {
        test();
      }
    )



  }


  render() {

    return (
      <div
        id="map"
        style={{
          position: "static",
          height: "86vh",
          width: "100vw",
          display: this.props.displayValue
        }}
      >
        tewt
      </div>

    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    geolocationValue: state.geolocationState.geolocationValue,
    displayValue: ownProps.display ? "none" : "",
    boundsValue: state.boundsState.boundsValue,
    state: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeBounds: (bounds) => {
      return dispatch(storeBounds(bounds));
    }
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
  GoogleApiWrapper({
    apiKey: "AIzaSyBVYS3YTeyILl2Cr7ajZ0ZdKbO092cW6lw",
    version: "3.30"
  })
)(MainMap);
