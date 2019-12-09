
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



class MainMap extends Component {
  constructor(props) {
    super(props);
    this.googleMapRef = React.createRef();
    this.state = {
      initialUpdate: false
    };

    this.map = null;

    this.marker = null;

  }

  // https://engineering.universe.com/building-a-google-map-in-react-b103b4ee97f1


  // setTimeout(
  //   () => {
  //     console.log("after some time, the props!: ", this.props);
  //   },
  //   7000
  // );


  mapFuncs() {
    const map = this.map;
    const bounds = map.getBounds();
    const centerObj = map.getCenter();
    const center = {
      lat: centerObj.lat(),
      lng: centerObj.lng()
    }

    this.props.storeMap(map);
    this.props.storeBounds(bounds);
    this.props.storeCenter(center);

    // console.log("bounds from store: ", this.props.boundsValue);
    // console.log("center from store: ", this.props.centerLatValue, this.props.centerLngValue);
    // console.log("map from store: ", this.props.mapValue);
  }



  componentDidMount() {
    this.props.getGeolocation();

    const lat = this.props.geolocationLatValue;
    const lng = this.props.geolocationLngValue;

    this.map = new this.props.google.maps.Map(
      this.googleMapRef.current,
      {
        zoom: 15,
        styles: MyStyle,
        center: {
          lat: lat,
          lng: lng
        },
        zoomControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false
      }
    );

    this.marker = new this.props.google.maps.Marker(
      {
        map: this.map,
        position: {
          lat: lat,
          lng: lng
        },
        icon: myLocationIcon
      }
    );


    // this.map.addListener(
    //   'idle',
    //   () => {
    //     this.mapFuncs();
    //    }
    // );

    this.map.addListener(
      'dragend',
      () => {
        this.props.storeInput("human");
        this.mapFuncs();
        // console.log('idle, the props: ', this.props);
        // console.log('bounds from store: ', this.props.boundsValue);
        // console.log('center from store: ', this.props.centerLatValue, this.props.centerLngValue);
      }
    );


  }



  componentDidUpdate(prevProps, prevState, snapshot) {

    console.log("map received update");
    const lat = this.props.geolocationLatValue;
    const lng = this.props.geolocationLngValue;

    if (
      (this.props.geolocationLatValue != prevProps.geolocationLatValue)
      ||
      (this.props.geolocationLngValue != prevProps.geolocationLngValue)
    ) {

      console.log("map updated - FIRST update type");


      this.map.panTo(
        {
          lat: lat,
          lng: lng
        }
      );     
      
      this.map.setCenter(
        {
          lat: lat,
          lng: lng
        }
      );      

      this.marker.setPosition(
        {
          lat: lat,
          lng: lng
        }
      );

      this.mapFuncs();

    }


    if (
      (
        this.props.geolocationLatValue !== this.props.centerLatValue
        ||
        this.props.geolocationLngValue !== this.props.centerLngValue        
      )
      &&
      this.props.inputValue !== "human"
    ) {
      console.log("map updated - second update type");

      this.map.setCenter(
        {
          lat: lat,
          lng: lng
        }
      );



    }


  }


  render() {

    return (
      <div
        id=""
        style={
          {
            position: "relative",
            height: "86vh",
            width: "100%",
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
            display: this.props.displayValue
          }}
        />

        < MarkerComp />

        {/* <div className="recenterButton" >
          <div className="recenterCrosshairs1" />
          <div className="recenterButtonRing">
            <div className="recenterButtonDot" />
          </div>
          <div className="recenterCrosshairs2" />
        </div> */}

        <RecenterButton />

      </div >

    )

  }

}


const mapStateToProps = (state, ownProps) => {
  return {
    displayValue: ownProps.display ? "none" : "",
    geolocationValue: state.geolocationState.geolocationValue,
    geolocationLatValue: (state.geolocationState.geolocationLatValue),
    geolocationLngValue: (state.geolocationState.geolocationLngValue),
    mapValue: state.mapState.mapValue,
    boundsValue: state.boundsState.boundsValue,
    centerLatValue: state.centerState.centerLatValue,
    centerLngValue: state.centerState.centerLngValue,
    inputValue: state.inputState.inputValue
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