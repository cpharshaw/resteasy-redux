
// https://codesandbox.io/s/rzwrk2854

import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
// import './loading.css';

export class MainList extends Component {
  constructor(props) {
    super(props);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  render() {
    if (!this.props.google) {
      return (
        <div className="loader">
          Loading....
          {console.log(this.props)}
        </div>
      );
    } else {
      return (
        <div
          style={{
            position: "relative",
            height: "calc(100vh - 20px)"
          }}
        >

          <Map
            style={{}}
            google={this.props.google}
            zoom={14}
          >
          {console.log(this.props)}
            <Marker
              onClick={this.onMarkerClick}
              icon={{
                url: "https://img.icons8.com/office/30/000000/good-quality.png",
                anchor: new this.props.google.maps.Point(32, 32),
                scaledSize: new this.props.google.maps.Size(32, 32)
              }}
              name={"Current location SO MUCH STUFF IN HERE!!!!"}
            />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
            >
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
            </InfoWindow>
          </Map>
        </div>
      );
    }
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBVYS3YTeyILl2Cr7ajZ0ZdKbO092cW6lw"
})(MainList)