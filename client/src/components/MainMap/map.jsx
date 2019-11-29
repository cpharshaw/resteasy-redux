import React, { Component } from 'react'

export class map extends Component {

  render() {

    const google = this.props.google;

    const MapDiv = () => {
      return (
        <div
          id="map"
          style={{
            position: "static",
            height: "86vh",
            width: "100vw",
            display: this.props.displayValue
          }}
        >
          tewt
        </div>
      )
    }

    const map = new google.maps.Map(
      mapDiv,
      {
        center: {
          lat: 55,
          lng: -75
        },
        zoom: 16
        // https:  egghead.io/lessons/react-redux-store-methods-getstate-dispatch-and-subscribe
      }
    );


    return (
     <div>
       < MapDiv />
     </div>
    )
  }
}

export default map;
