
// https://codesandbox.io/s/rzwrk2854

import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

import { compose } from 'redux';
import { connect } from 'react-redux';


class MarkerComp extends Component {
  constructor(props) {
    super(props);
    this.marker = null;
  }


  render() {
    this.createMarker = () => {
      new this.props.google.maps.Marker(
        {
          map: this.props.mapValue,
          position: {
            lat: this.props.markerLat ? this.props.markerLat : 39.96226267942067,
            lng: this.props.markerLng ? this.props.markerLng : -75.14639198461786
          },
          icon: this.props.icon ? this.props.icon : null
        }
      )
    }

    return (
      <div className="">
        {this.createMarker()}
      </div>
    )

  }

}


const mapStateToProps = (state, ownProps) => {
  return {
    geolocationValue: state.geolocationState.geolocationValue,
    mapValue: state.mapState.mapValue,
    centerValue: state.centerState.centerValue,
    markerLat: ownProps.lat,
    markerLng: ownProps.lng
  }
}




export default compose(
  connect(mapStateToProps, null),
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
)(MarkerComp);