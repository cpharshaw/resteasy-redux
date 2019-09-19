
// https://codesandbox.io/s/rzwrk2854

import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { compose } from 'redux';
// import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
// import { createProject } from '../../store/actions/projectActions';
import MyStyle from './mapStyle.js';
// import './loading.css';
var myLocationIcon = 'https://img.icons8.com/ultraviolet/40/000000/map-pin.png';


export class MainMap extends Component {
  constructor(props) {
    super(props);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
  }



  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    console.log("clicked")
  }

  render() {
    // const { reviews, auth } = this.props;

    // console.log("all the props, MainMap: ", this.props);


    const google = this.props.google;



    if (!this.props.google) {
      return (
        <div className="">
          Map couldn't load ;-(
          {/* {console.log(google)} */}
        </div>
      );
    } else {
      return (

        <div
          style={{
            position: "relative",
            height: "90vh",
            display: this.props.displayValue
            // height: "calc(100vh - 20px)"
          }}
        >
          {/* {console.log(Map)} */}
          {/* https://developers.google.com/maps/documentation/javascript/controls */}
          <Map
            google={google}
            initialCenter={{
              lat: 39.962310,
              lng: -75.144567
            }}
            centerAroundCurrentLocation={true}
            // zoomControl={true}
            streetViewControl={false}
            rotateControl={true}
            fullscreenControl={false}
            styles={MyStyle}
            zoomControl={true}
            zoomControlOptions={{ position: google.maps.ControlPosition.LEFT_BOTTOM }}

          // https://github.com/fullstackreact/google-maps-react/pull/222
          >

            < Marker
              // position={this.props.origLoc}
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
  console.log("MainMaps ownProps: ", ownProps);
  return {
    geolocation: state.geoLocation,
    displayValue: ownProps.display ? "none" : ""
    // reviews: state.firestore.ordered.reviews,
    // auth: state.firebase.auth
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     createReview: (review) => dispatch(createReview(review))
//   }
// }


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
)(MainMap);
