
// https://codesandbox.io/s/rzwrk2854

import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

import { compose } from 'redux';
import { connect } from 'react-redux';


class MarkerComp extends Component {
  constructor(props) {
    super(props);
    this.marker = null;
    this.createMarker = null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

    const googleAPIUpdate = prevProps.googleAPIValue === null && this.props.googleAPIValue !== null;

    if (googleAPIUpdate) {

      this.createMarker = () => {
        new this.props.googleAPIValue.Marker(
          {
            map: this.props.mapValue,
            position: {
              lat: this.props.markerLat ? this.props.markerLat : 39.962292,
              lng: this.props.markerLng ? this.props.markerLng : -75.144768
            },
            icon: this.props.icon ? this.props.icon : null
          }
        )
        // {console.log('create marker log')}
      }
    }
  }



  render() {


    return (
      <div className="">
        {this.createMarker ? this.createMarker() : null}
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
    markerLng: ownProps.lng,
    googleAPIValue: state.googleAPIState.googleAPIValue
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
)(MarkerComp);