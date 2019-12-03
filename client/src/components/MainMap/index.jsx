
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

    const map = this.map;
    const bounds = this.map.getBounds();
    // const center = this.map.getCenter();

    this.props.storeMap(map);
    this.props.storeBounds(bounds);
    // this.props.storeCenter(center);

    // console.log("bounds from map update: ", this.state.initialUpdate, bounds);
    // console.log("center from map update: ", this.state.initialUpdate,  center);
    // console.log("map from map update: ", this.state.initialUpdate,  map);    
  }



  componentDidMount() {

    console.log(typeof this.props.geolocationLatValue)

    this.map = new this.props.google.maps.Map(
      this.googleMapRef.current,
      {
        zoom: 15,
        styles: MyStyle,
        center: {
          lat: parseFloat(this.props.geolocationLatValue),
          lng: parseFloat(this.props.geolocationLngValue)
          // lat: 40,
          // lng: -75
        }
      }
    );

    // this.marker = new this.props.google.maps.Marker(
    //   {
    //     map: this.map,
    //     position: {
    //       lat: this.props.geolocationLatValue,
    //       lng: this.props.geolocationLngValue
    //     },
    //     icon: myLocationIcon
    //   }
    // );

    // this.mapFuncs();


    // this.map.addListener(
    //   'idle',
    //   () => {
    //     this.mapFuncs();
    //     console.log('idle, the props: ', this.props);
        // console.log('bounds from store: ', this.props.boundsValue);
        // console.log('center from store: ', this.props.centerValue);
    //   }
    // );



  }



  componentDidUpdate(prevProps, prevState, snapshot) {

    // const currCenter = this.map.getCenter();
    // const currBounds = this.map.getBounds();

    // if (
    //   this.props.geolocationValue &&
    //   this.props.geolocationLatValue !== prevProps.geolocationLatValue &&
    //   this.props.geolocationLngValue !== prevProps.geolocationLngValue &&
    //   !this.state.initialUpdate
    // ) {

      // this.map.setCenter(
      //   {
      //     lat: this.props.geolocationLatValue,
      //     lng: this.props.geolocationLngValue
      //   }
      // );

      // this.marker.setPosition(
      //   {
      //     lat: this.props.geolocationLatValue,
      //     lng: this.props.geolocationLngValue
      //   }
      // );

      // this.setState({
      //   initialUpdate: true
      // });

      // this.mapFuncs();

    // }

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
    geolocationLatValue: parseFloat(state.geolocationState.geolocationLatValue),
    geolocationLngValue: parseFloat(state.geolocationState.geolocationLngValue),
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