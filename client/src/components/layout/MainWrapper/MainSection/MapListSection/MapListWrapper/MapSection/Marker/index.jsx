
// https://codesandbox.io/s/rzwrk2854

import React, { Component } from "react";

import { compose } from 'redux';
import { connect } from 'react-redux';

import greyMarker from '../../../MapListWrapper/greyMarker50.png';
import redMarker from '../../../MapListWrapper/redMarker50.png';
import orangeMarker from '../../../MapListWrapper/orangeMarker50.png';
import yellowMarker from '../../../MapListWrapper/yellowMarker50.png';
import chartreuseMarker from '../../../MapListWrapper/chartreuseMarker50.png';
import greenMarker from '../../../MapListWrapper/greenMarker50.png';
const iconArr = [greyMarker, redMarker, orangeMarker, yellowMarker, chartreuseMarker, greenMarker, redMarker, orangeMarker, yellowMarker, chartreuseMarker, greenMarker]
const skull = "https://img.icons8.com/ios-filled/50/000000/poison.png";

class MarkerComp extends Component {


  componentDidMount() {
    const googleMapLoaded = this.props.initialMapTilesLoaded
    if (googleMapLoaded) this.renderMarker();
  }

  componentWillUnmount() {
    if (this.marker) {
      this.marker.setMap(null);
    }
  }


  componentDidUpdate(prevProps, prevState, snapshot) {
    const googleMapLoaded = this.props.initialMapTilesLoaded; const prev_googleMapLoaded = prevProps.initialMapTilesLoaded; const update_googleMapLoaded = (prev_googleMapLoaded === null && googleMapLoaded !== null) || (prev_googleMapLoaded !== googleMapLoaded);
    this.renderMarker();
    if (update_googleMapLoaded && !this.currentMarker) this.renderMarker();
  }

  renderMarker = () => {

    const {
      map, lat, lng, icon, label, title
    } = this.props;

    const getRandomInt = (min, max) => {
      const minNum = Math.ceil(min);
      const maxNum = Math.floor(max);
      return Math.floor(Math.random() * (maxNum - minNum)) + minNum;
    }

    const randomMarkerColor = iconArr[getRandomInt(0, iconArr.length)];

    this.marker = new this.props.googleAPIValue.Marker({
      map: map,
      position: {
        lat: lat,
        lng: lng
      },
      icon: skull,
      // randomMarkerColor,
      // label: JSON.stringify(label),
      // title: "fs - " + title,
      animation: this.props.googleAPIValue.Animation.DROP,
    })

    this.marker.addListener('click', () => {
      // this.props.storeSelectedMarker(place)
      console.log("marker component clicked")
      // this.setState({
      //   markerIcon: randomMarkerColor
      // })
      // mapParam.panTo({
      //   lat: place.location.lat,
      //   lng: place.location.lng
      // });
      // mapParam.setCenter({
      //   lat: place.location.lat,
      //   lng: place.location.lng
      // });
      console.log("marker icon", this.marker.getIcon());
      console.log("marker title", this.marker.getTitle());
      console.log("marker label", this.marker.getLabel());
      console.log("whole marker", this.marker);
    });

  }


  render() {
    console.log("rendering marker...")
    return null
  }

}


const mapStateToProps = (state, ownProps) => {
  return {
    displayValue: ownProps.display ? "none" : "",
    mapListToggleValue: ownProps.display,
    googleAPIValue: state.mapState.googleAPIValue,

    mapValue: state.mapState.mapValue,
    boundsValue: state.mapState.boundsValue(),
    centerLatValue: state.mapState.centerLatValue(),
    centerLngValue: state.mapState.centerLngValue(),
    initialMapTilesLoaded: state.mapState.initialMapTilesLoaded,
    allMapDataLoaded: state.mapState.allMapDataLoaded(),

    selectedMarkerValue: state.mapState.selectedMarkerValue,
    mapMovedCounterValue: state.mapState.mapMovedCounterValue,
    recenterIncrementerValue: state.mapState.recenterIncrementerValue,

    geolocationLatValue: state.geolocationState.geolocationLatValue,
    geolocationLngValue: state.geolocationState.geolocationLngValue,
    numGeolocationUpdates: state.geolocationState.numGeolocationUpdates,

    foursquareValue: state.foursquareState.foursquareValue,

    modalState: state.modalState,
  }
}

// export default MarkerComp;

export default compose(
  connect(mapStateToProps, null),
)(MarkerComp);