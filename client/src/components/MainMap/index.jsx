
// https://codesandbox.io/s/rzwrk2854
import MarkerComp from '../Marker';

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

    const bounds = this.map.getBounds();
    const center = this.map.getCenter();
    const map = this.map;

    this.props.storeBounds(bounds);
    this.props.storeCenter(center);
    this.props.storeMap(map);

    // console.log("bounds from map update: ", this.state.initialUpdate, bounds);
    // console.log("center from map update: ", this.state.initialUpdate,  center);
    // console.log("map from map update: ", this.state.initialUpdate,  map);    

  }




  componentDidMount() {

    this.map = new this.props.google.maps.Map(
      this.googleMapRef.current,
      {
        zoom: 15,
        styles: MyStyle,
        center: {
          lat: this.props.geolocationLat,
          lng: this.props.geolocationLng
        }
      }
    );

    this.marker = new this.props.google.maps.Marker(
      {
        map: this.map,
        position: {
          lat: this.props.geolocationLat,
          lng: this.props.geolocationLng
        },
        icon: myLocationIcon
      }
    );

    this.map.addListener(
      'idle',
      () => {
        this.mapFuncs();
        console.log('idle, the props: ', this.props);
        // console.log('bounds from store: ', this.props.boundsValue);
        // console.log('center from store: ', this.props.centerValue);
      }
    );



  }



  componentDidUpdate(prevProps, prevState, snapshot) {

    const currCenter = this.map.getCenter();

    if (
      this.props.geolocationValue &&
      !this.state.initialUpdate &&
      this.props.geolocationLat !== currCenter.lat &&
      this.props.geolocationLng !== currCenter.lng
    ) {

      this.map.setCenter(
        {
          lat: this.props.geolocationLat,
          lng: this.props.geolocationLng
        }
      );

      this.marker.setPosition(
        {
          lat: this.props.geolocationLat,
          lng: this.props.geolocationLng
        }
      );

      this.setState({
        initialUpdate: true
      });

    }

  }


  render() {

    return (
      <div>
        <div
          id="google-map"
          ref={this.googleMapRef}
          style={{
            position: "static",
            height: "86vh",
            width: "100vw",
            display: this.props.displayValue
          }}
        />
        <MarkerComp />
      </div>
    )

  }

}


const mapStateToProps = (state, ownProps) => {
  return {
    displayValue: ownProps.display ? "none" : "",
    geolocationValue: state.geolocationState.geolocationValue,
    geolocationLat: state.geolocationState.geolocationLat,
    geolocationLng: state.geolocationState.geolocationLng,
    // mapValue: state.mapState.mapValue,
    // boundsValue: state.boundsState.boundsValue,
    // centerValue: state.centerState.centerValue
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