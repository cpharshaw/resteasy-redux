
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
    
  }

  onIdle = (mapProps, map) => {
    if (this.props.geolocationValue && !this.props.displayValue) {
      console.log("onIdle - mapProps: ", mapProps);
      console.log("onIdle - map: ", map);
      console.log("onIdle - bounds, maybe??: ", map.getBounds());
      this.props.storeBounds(map.getBounds());
    }
  }


  render() {

    const google = this.props.google;

    const myLocation = {
      lat: this.props.geolocationValue ? this.props.geolocationValue.latitude : 39.96,
      lng: this.props.geolocationValue ? this.props.geolocationValue.longitude : -75.14
    }

    if (!this.props.google) {
      return (
        <div className="">
          Map couldn't load ;-(
        </div>
      );
    } else {
      return (

        <div
          style={{
            position: "static",
            // top: "7vh",
            height: "100%",
            width: "inherit",
            display: this.props.displayValue
            // height: "calc(100vh - 20px)"
          }}
        >
          {/* {console.log(Map)} */}
          {/* https://developers.google.com/maps/documentation/javascript/controls */}

          {console.log("map here")}
          <Map
            google={google}
            // onReady={(mapProps, maps) => this.state.onReady(mapProps, maps)}
            onIdle={(mapProps, maps) => this.onIdle(mapProps, maps)}
            // onBoundsChanged={(mapProps, maps) => this.state.onBoundsChanged(mapProps, maps)}
            // onBoundsChanged={this.onBoundsChanged}
            onDragend={this.onBoundsChanged}
            center={myLocation}
            initialCenter={myLocation}
            centerAroundCurrentLocation={false}
            // zoomControl={true}
            streetViewControl={false}
            rotateControl={true}
            fullscreenControl={false}
            styles={MyStyle}
            zoom={16}
            zoomControl={true}
          // onBoundsChanged={}
          // onZoom_changed={console}
          // https://github.com/fullstackreact/google-maps-react/pull/222
          >

            < Marker
              position={myLocation}
              onClick={this.onMarkerClick}
              icon={{
                url: myLocationIcon
                // url: "https://img.icons8.com/office/30/000000/good-quality.png"
                // anchor: new google.maps.Point(32, 32),
                // scaledSize: new google.maps.Size(32, 32)
              }}
              animation={google.maps.Animation.DROP}
              name={"Current location SO MUCH STUFF IN HERE!!!!"}
            />


            <InfoWindow
              marker={this.props.activeMarker}
              visible={this.props.showingInfoWindow}
            >
              <div>
                test
              </div>
            </InfoWindow>

          </Map>
        </div>
      );
    }
  }
}


const mapStateToProps = (state, ownProps) => {
  // console.log("MainMaps ownProps: ", ownProps);
  return {
    geolocationValue: state.geolocationState.geolocationValue,
    displayValue: ownProps.display ? "none" : ""
    // reviews: state.firestore.ordered.reviews,
    // auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // storeBounds: () => dispatch(storeBounds())
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
