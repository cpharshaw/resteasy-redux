import React, { Component } from 'react';
import { submitForm } from '../../store/actions/searchBoxActions';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";


class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.searchBoxRef = React.createRef();
    this.searchBox = null;
    this.state = {
      places: null
    }
    // console.log("SearchBox state: ", props);
  }



  componentDidMount() {

    const circle = new this.props.google.maps.Circle(
      {
        center: {
          lat: this.props.geolocationLat,
          lng: this.props.geolocationLng
        },
        radius: 600
      }
    );

    // this.searchBox.setBounds(
    //   circle.getBounds()
    // );

    const bounds = circle.getBounds();

    const options = {
      bounds: bounds,
      types: ['establishment'],
      strictBounds: true
    };

    this.searchBox = new this.props.google.maps.places.Autocomplete(
      this.searchBoxRef.current,
      options
    );


    // this.searchBox.addListener(
    //   'places_changed',
    //   () => {
    //     const places = this.searchBox.getPlaces();
    //     this.setState({
    //       places
    //     });
    //   }
    // )

    // this.searchBox.addListener(
    //   'idle',
    //   () => {
    //     const places = this.searchBox.getPlaces();
    //     this.setState({
    //       places
    //     });
    //   }
    // )



  }

  componentDidUpdate(prevProps, prevState, snapshot) {

    const circle = new this.props.google.maps.Circle(
      {
        center: {
          lat: this.props.centerLat,
          lng: this.props.centerLng
        },
        radius: 600
      }
    );

    const bounds = circle.getBounds();
    
    this.searchBox.setBounds(
      bounds
    )

    console.log("new searchBox bounds from circle", bounds)
    
  }


  render() {

    return (
      <div
        style={{
          background: "gray",
          position: "absolute",
          top: "0",
          height: "7vh",
          width: "100%"
        }}
      >
        <input
          id="pac-input"
          ref={this.searchBoxRef}
          className="controls"
          type="search"
          placeholder="Search Box"
          style={{
            background: "orange",
            fontFamily: "Roboto",
            fontSize: "15px",
            fontWeight: "300",
            // marginLeft: "12px",
            // padding: "0 11px 0 13px",
            textOverflow: "ellipsis",
            position: "absolute",
            // bottom: "5vh",
            width: "100%",
            height: "100%"
          }}
        />
      </div >
    )
  }

}


const mapStateToProps = (state, ownProps) => {
  return {
    geolocationValue: state.geolocationState.geolocationValue,
    geolocationLat: state.geolocationState.geolocationLat,
    geolocationLng: state.geolocationState.geolocationLng,
    boundsValue: state.boundsState.boundsValue,
    centerLat: state.centerState.centerLat,
    centerLng: state.centerState.centerLng,
    // state: state
    // displayValue: ownProps.display ? "none" : ""
    // reviews: state.firestore.ordered.reviews,
    // auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // createReview: (review) => dispatch(createReview(review))
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
)(SearchBox);

