import React, { Component } from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";


export class SearchBox extends Component {



  componentDidMount() {
    const google = this.props.google;

    const input = document.getElementById('pac-input');
    const searchBox = new google.maps.places.SearchBox(input);
    const places = searchBox.getPlaces();
    console.log(places);
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
          type="text"
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
      </div>
    )
  }

}


const mapStateToProps = (state, ownProps) => {
  return {
    // geolocation: state.geoLocation,
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

