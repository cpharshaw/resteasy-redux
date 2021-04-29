
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

import { storeMap, storeMyLocationMarker, storeSelectedMarker, storeSelectedPlace, storeMarker, registerInitialMapTilesloaded, registerSubsequentMapMovement } from '../../../../../../../../store/actions/mapActions';

const iconArr = [greyMarker, redMarker, orangeMarker, yellowMarker, chartreuseMarker, greenMarker]
// const iconArr = [greyMarker, redMarker, orangeMarker, yellowMarker, chartreuseMarker, greenMarker, redMarker, orangeMarker, yellowMarker, chartreuseMarker, greenMarker]
const skull = "https://img.icons8.com/ios-filled/50/000000/poison.png";



class MarkerComp extends Component {
  // https://blog.vanila.io/writing-a-google-maps-react-component-fae411588a91
  // https://www.newline.co/fullstack-react/articles/how-to-write-a-google-maps-react-component/

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
    // this.renderMarker();
    if (update_googleMapLoaded && !this.currentMarker) this.renderMarker();
  }

  renderMarker = () => {

    const {
      data_map,
      data_lat, data_lng,
      data_placerating,
      data_label,
      data_title,
      data_place,
      data_id
    } = this.props;


    const iconColor = score => {
      // console.log("score ---> ", score)
      if (!score) {
        return greyMarker
      };

      if (score > 4.50) {
        return greenMarker
      };

      if (score >= 4.00) {
        return chartreuseMarker
      };

      if (score >= 3.00) {
        return yellowMarker
      };

      if (score >= 2.00) {
        return orangeMarker
      };

      if (score) {
        return redMarker
      };
    }


    const getRandomInt = (min, max) => {
      const minNum = Math.ceil(min);
      const maxNum = Math.floor(max);
      return Math.floor(Math.random() * (maxNum - minNum)) + minNum;
    }

    const randomMarkerColor = iconArr[getRandomInt(0, iconArr.length)];


    // const test = iconColor(data_placerating);

    this.marker = new this.props.googleAPIValue.Marker({
      map: data_map,
      position: {
        lat: data_lat,
        lng: data_lng
      },
      icon: iconColor(data_placerating) || skull,
      store_icon: data_placerating,
      // randomMarkerColor,
      label: JSON.stringify(data_label),
      title: "fs - " + data_title,
      animation: this.props.googleAPIValue.Animation.DROP,
      store_id: data_id,
      store_place: data_place
    });

    if (data_id === "0_marker") {
      // console.log("0th marker", this.marker.getIcon())

      const placeWithIcon = {
        ...data_place,
        icon: this.marker.icon
      }

      this.props.storeSelectedMarker(this.marker);
      this.props.storeSelectedPlace(placeWithIcon);
    }

    this.marker.addListener('click', () => {
      if (data_place) {
        this.props.storeSelectedMarker(this.marker);
        this.props.storeSelectedPlace(data_place);
      };
      // console.log("marker component clicked, place: ", data_place)
      // console.log("marker component clicked, marker: ", this.marker)
      // console.log("marker component clicked, marker ID: ", this.marker.id)
      // this.setState({
      //   markerIcon: randomMarkerColor
      // })
      data_map.panTo({
        lat: data_lat,
        lng: data_lng
      });
      // data_map.setCenter({
      //   lat: data_place.location.lat,
      //   lng: data_place.location.lng
      // });
      // console.log("marker icon", this.marker.getIcon());
      // console.log("marker title", this.marker.getTitle());
      // console.log("marker label", this.marker.getLabel());
      // console.log("whole marker", this.marker);
    });

  }


  render() {
    // console.log("rendering marker...")
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

const mapDispatchToProps = (dispatch) => {
  return {
    storeMap: (map) => dispatch(storeMap(map)),
    storeMyLocationMarker: (map) => dispatch(storeMyLocationMarker(map)),
    registerInitialMapTilesloaded: () => dispatch(registerInitialMapTilesloaded()),
    registerSubsequentMapMovement: () => dispatch(registerSubsequentMapMovement()),
    storeSelectedMarker: (marker) => dispatch(storeSelectedMarker(marker)),
    storeSelectedPlace: (place) => dispatch(storeSelectedPlace(place)),
    storeMarker: (marker) => dispatch(storeMarker(marker)),
  }
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(MarkerComp);