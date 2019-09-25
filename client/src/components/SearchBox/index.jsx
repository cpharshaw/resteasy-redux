import React, { Component } from 'react';
import { submitForm } from '../../store/actions/searchBoxActions';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";


class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: null
    }
  }

  componentDidMount() {
    // const google = this.props.google;
    // const input = document.getElementById('pac-input');
    console.log("search box here");

    // var defaultBounds = new google.maps.LatLngBounds(
      // new google.maps.LatLng(-33.8902, 151.1759),
      // new google.maps.LatLng(-33.8474, 151.2631) 
      // this.props.boundsValue
    // );

    // const searchBox = new google.maps.places.SearchBox(input, defaultBounds);


    // searchBox.addListener(
    //   'places_changed',
    //   () => {
    //     const places = searchBox.getPlaces();
    //     this.setState({
    //       places
    //     });
    //     console.log(this.state.places);
    //   }
    // )
    // console.log("search box rendering")
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
    boundsValue: state.boundsState.boundsValue,
    state: state
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

