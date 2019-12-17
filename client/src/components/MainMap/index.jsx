
// https://codesandbox.io/s/rzwrk2854
import MarkerComp from '../Marker';
import RecenterButton from '../RecenterButton';
import { getGeolocation } from '../../store/actions/geoActions';

import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { storeMap } from '../../store/actions/mapActions';
import { storeBounds } from '../../store/actions/boundsActions';
import { storeCenter } from '../../store/actions/centerActions';
import { storeInput } from '../../store/actions/inputActions';

import { compose } from 'redux';
// import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
// import { createProject } from '../../store/actions/projectActions';
import MyStyle from './mapStyle.js';

// import './loading.css';
var myLocationIcon = 'https://img.icons8.com/ultraviolet/40/000000/map-pin.png';

const greatIcon = "https://img.icons8.com/flat_round/40/000000/star--v1.png";
const goodIcon = "https://img.icons8.com/office/40/000000/good-quality.png";
const questionableIcon = "https://img.icons8.com/office/33/000000/error.png";
const poorIcon = "https://img.icons8.com/office/40/000000/poor-quality.png";
const terribleIcon = "https://img.icons8.com/officel/40/000000/evil.png";

const skull = "https://img.icons8.com/ios-filled/50/000000/poison.png";

class MainMap extends Component {
  constructor(props) {
    super(props);
    this.googleMapRef = React.createRef();
    this.state = {
      initialUpdate: 0,
    };

    this.map = null;

    this.marker = null;

  }


  mapFuncs(message) {
    const map = this.map;
    const centerObj = map.getCenter();
    const center = {
      lat: centerObj.lat(),
      lng: centerObj.lng()
    };
    const bounds = map.getBounds();

    this.props.storeMap(map);
    this.props.storeCenter(center);
    this.props.storeBounds(bounds);

    console.log(message);
    console.log("map", map);
    console.log("center", center);
    console.log("geoLoc", this.props.geolocationLatValue, this.props.geolocationLngValue)
    console.log("bounds", bounds);
  }



  componentDidMount() {
    this.props.getGeolocation();

    const geoLat = this.props.geolocationLatValue;
    const geoLng = this.props.geolocationLngValue;

    this.map = new this.props.google.maps.Map(
      this.googleMapRef.current,
      {
        zoom: 15,
        styles: MyStyle,
        center: {
          lat: geoLat,
          lng: geoLng
        },
        zoomControlOptions: {
          position: this.props.google.maps.ControlPosition.LEFT_CENTER
        },
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false
      }
    );


    this.marker = new this.props.google.maps.Marker(
      {
        map: this.map,
        position: {
          lat: geoLat,
          lng: geoLng
        },
        icon: myLocationIcon
      }
    );




    const idleListener = this.map.addListener(
      'idle',
      () => {

        this.mapFuncs("idleListener fired");

      }
    );

  }



  componentDidUpdate(prevProps, prevState, snapshot) {

// variables
    const numGeoUpdates = this.props.numGeolocationUpdates;
    const prev_numGeoUpdates = prevProps.numGeolocationUpdates;

    const geoLat = this.props.geolocationLatValue;
    const geoLng = this.props.geolocationLngValue;
    const prev_geoLat = prevProps.geolocationLatValue;
    const prev_geoLng = prevProps.geolocationLngValue;

    const ctrLat = this.props.centerLatValue;
    const ctrLng = this.props.centerLngValue;
    const prev_ctrLat = prevProps.centerLatValue;
    const prev_ctrLng = prevProps.centerLngValue;

    const bounds = this.props.boundsValue;
    const prev_bounds = prevProps.boundsValue;

    const inputVal = this.props.inputValue;
    const prev_inputVal = prevProps.inputValue;

    // console.log("numGeoUpdates: ", numGeoUpdates);

// checks for changes
    const geo_update =
      geoLat !== prev_geoLat
      ||
      geoLng !== prev_geoLng;

     const numGeo_update = numGeoUpdates !== prev_numGeoUpdates;

    const ctr_update =
      ctrLat !== prev_ctrLat
      ||
      ctrLng !== prev_ctrLng;

    const bounds_update = JSON.stringify(bounds) !== JSON.stringify(prev_bounds);

    const input_update = inputVal !== prev_inputVal;

    const geo_same_ctr =
      geoLat == ctrLat
      &&
      geoLng == ctrLng;

// 
// 
    console.log("map changes:",geo_update,ctr_update,geo_same_ctr,bounds_update)


    if (geo_update || numGeo_update) {

      console.log("map updated - FIRST update type", geo_update, numGeo_update);

      // this.map.panTo(
      //   {
      //     lat: geoLat,
      //     lng: geoLng
      //   }
      // );

      this.map.setCenter(
        {
          lat: geoLat,
          lng: geoLng
        }
      );

      this.marker.setPosition(
        {
          lat: geoLat,
          lng: geoLng
        }
      );


    };



  }


  render() {
    console.log("icon for marker: ", questionableIcon)
    return (
      <div
        id=""
        style={
          {
            position: "relative",
            height: "86vh",
            width: "100%",
            display: this.props.displayValue
          }
        }
      >
        <div
          id="google-map"
          ref={this.googleMapRef}
          style={{
            // position: "static",
            height: "inherit",
            width: "inherit",
          }}
        />

        < MarkerComp 
          lat={40}
          lng={-75}
          icon={questionableIcon}
        />



        <RecenterButton />

      </div >

    )

  }

}


const mapStateToProps = (state, ownProps) => {
  return {
    displayValue: ownProps.display ? "none" : "",
    geolocationValue: state.geolocationState.geolocationValue,
    geolocationLatValue: state.geolocationState.geolocationLatValue,
    geolocationLngValue: state.geolocationState.geolocationLngValue,
    numGeolocationUpdates: state.geolocationState.numGeolocationUpdates,
    mapValue: state.mapState.mapValue,
    boundsValue: state.boundsState.boundsValue,
    centerLatValue: state.centerState.centerLatValue,
    centerLngValue: state.centerState.centerLngValue,
    // inputValue: state.inputState.inputValue
    // ,state: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getGeolocation: () => {
      return dispatch(getGeolocation())
    },
    storeMap: (map) => {
      return dispatch(storeMap(map));
    },
    storeBounds: (bounds) => {
      return dispatch(storeBounds(bounds));
    },
    storeCenter: (center) => {
      return dispatch(storeCenter(center));
    },
    storeInput: (input) => {
      return dispatch(storeInput(input));
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