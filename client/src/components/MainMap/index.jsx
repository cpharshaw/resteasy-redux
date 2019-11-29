
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
    this.googleMapRef = React.createRef();
    this.state = {};
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


  componentDidMount() {

    this.map = new this.props.google.maps.Map(
      this.googleMapRef.current,
      {
        // disableDefaultUI: true,
        zoom: 16,
        styles: MyStyle,
        center: {
          lat: this.props.geolocationValue ? this.props.geolocationValue.latitude : 39.962620,
          lng: this.props.geolocationValue ? this.props.geolocationValue.longitude : -75.144780
        }
      }
    )

    this.marker = new this.props.google.maps.Marker(
      {
        position: {
          lat: this.props.geolocationValue ? this.props.geolocationValue.latitude : 39.962620,
          lng: this.props.geolocationValue ? this.props.geolocationValue.longitude : -75.144780
        },
        map: this.map
      }
    )

  }

  componentDidUpdate() {

    this.map.setCenter(
      {
        lat: this.props.geolocationValue ? this.props.geolocationValue.latitude : 39.962620,
        lng: this.props.geolocationValue ? this.props.geolocationValue.longitude : -75.144780
      }
    );

    this.marker.setPosition(
      {
        lat: this.props.geolocationValue ? this.props.geolocationValue.latitude : 39.962620,
        lng: this.props.geolocationValue ? this.props.geolocationValue.longitude : -75.144780
      }
    )

  }


  render() {

    return (
      <div
        id="google-map"
        ref={this.googleMapRef}
        style={{
          position: "static",
          height: "86vh",
          width: "100vw",
          display: this.props.displayValue
        }}
      >
        test
      </div>
    )

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
    getGeolocation: () => {
      return dispatch(getGeolocation())
    },
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