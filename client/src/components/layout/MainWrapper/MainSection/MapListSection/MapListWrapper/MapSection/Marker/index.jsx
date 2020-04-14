
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

    const {
      data_lat,
      data_lng,
      data_icon
    } = this.props;

    // console.log("key test", data_lat, data_lng, data_icon)

    const googleAPIUpdate = prevProps.googleAPIValue === null && this.props.googleAPIValue !== null;

    if (googleAPIUpdate) {

      this.createMarker = () => {
        new this.props.googleAPIValue.Marker(
          {
            map: this.props.mapValue,
            position: {
              lat: data_lat ? data_lat : 39.962292,
              lng: data_lng ? data_lng : -75.144768
            },
            icon: data_icon ? data_icon : null,
            animation: this.props.googleAPIValue.Animation.DROP,
            // optimized:false
          }
        )
      }


    }

  }



  render() {

    return (
      <div>
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
    // markerLat: ownProps.data_lat,
    // markerLng: ownProps.data_lng,
    // key: ownProps.data_key,
    googleAPIValue: state.googleAPIState.googleAPIValue
  }
}

// export default MarkerComp;

export default compose(
  connect(mapStateToProps, null),
)(MarkerComp);