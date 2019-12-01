
// https://codesandbox.io/s/rzwrk2854

import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { storeMap } from '../../store/actions/mapActions';
import { storeBounds } from '../../store/actions/boundsActions';
import { storeCenter } from '../../store/actions/centerActions';

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
      bounds: null
    };

    this.map = null;

    this.marker = null;

    this.center = {
      lat: this.props.geolocationValue ? this.props.geolocationValue.latitude : 39.96226267942067,
      lng: this.props.geolocationValue ? this.props.geolocationValue.longitude : -75.14639198461786
    }

  }

  // https://engineering.universe.com/building-a-google-map-in-react-b103b4ee97f1


  // setTimeout(
  //   () => {
  //     console.log("after some time, the props!: ", this.props);
  //   },
  //   7000
  // );


  mapFuncs() {

    // this.map.setCenter(
    //   this.center
    // );

    const map = this.map;
    const bounds = this.map.getBounds();
    const center = this.map.getCenter();

    this.props.storeMap(map);
    this.props.storeBounds(bounds);
    this.props.storeCenter(center);

  }




  componentDidMount() {

    this.map = new this.props.google.maps.Map(
      this.googleMapRef.current,
      {
        zoom: 16,
        styles: MyStyle,
        center: this.center
      }
    );

    this.map.addListener(
      'tilesloaded',
      () => {
        this.mapFuncs();
        console.log('map from store: ', this.props.mapValue);
        console.log('bounds from store: ', this.props.boundsValue);
        console.log('center from store: ', this.props.centerValue);
      }
    )

    this.marker = new this.props.google.maps.Marker(
      {
        map: this.map,
        position: {
          lat: this.center.lat,
          lng: this.center.lng
        }
      }
    )

  }

  componentDidUpdate(prevProps, prevState, snapshot) {

    console.log("prevProps: ", prevProps);
    console.log("prevState: ", prevState);
    console.log("snapshot: " , snapshot);

    const currCenter = this.map.getCenter();

    console.log('this.props: ', this.props)

    if (this.props.geolocationValue && this.props.geolocationValue.latitude != currCenter.lat && this.props.geolocationValue.longitude != currCenter.lng) {
      this.map.setCenter(
        {
          lat: this.props.geolocationValue.latitude,
          lng: this.props.geolocationValue.longitude
        }
      );

      this.marker.setPosition(
        {
          lat: this.props.geolocationValue.latitude,
          lng: this.props.geolocationValue.longitude
        }
      );

    }




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
    displayValue: ownProps.display ? "none" : "",
    geolocationValue: state.geolocationState.geolocationValue,
    mapValue: state.mapState.mapValue,
    boundsValue: state.boundsState.boundsValue,
    centerValue: state.centerState.centerValue
    // ,state: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeMap: (map) => {
      return dispatch(storeMap(map));
    },
    storeBounds: (bounds) => {
      return dispatch(storeBounds(bounds));
    },
    storeCenter: (center) => {
      return dispatch(storeCenter(center));
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