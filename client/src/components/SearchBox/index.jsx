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
          lat: this.props.geolocationLatValue,
          lng: this.props.geolocationLngValue
        },
        radius: 600
      }
    );

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


    this.searchBox.addListener(
      'places_changed',
      () => {
        const places = this.searchBox.getPlaces();
        this.setState({
          places
        });
      }
    )

    this.searchBox.addListener(
      'idle',
      () => {
        const places = this.searchBox.getPlaces();
        this.setState({
          places
        });
      }
    )



  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // TODO  
    // add check for null prevbounds
    if (
      this.props.geolocationValue &&
      prevProps.geolocationValue &&
      this.props.geolocationLatValue !== prevProps.geolocationLatValue &&
      this.props.geolocationLngValue !== prevProps.geolocationLngValue
    ) {

      const lat = this.props.geolocationLatValue;
      const lng = this.props.geolocationLngValue;

      const circle = new this.props.google.maps.Circle(
        {
          center: {
            lat: lat,
            lng: lng
          },
          radius: 600
        }
      );

      const bounds = circle.getBounds();

      this.searchBox.setBounds(
        bounds
      );

      // console.log("searchBox bounds set to circle around geolocation");

    }


    if (
      this.props.boundsValue 
      &&
      JSON.stringify(this.props.boundsValue) !== JSON.stringify(prevProps.boundsValue) 
      &&
      this.props.geolocationLatValue !== this.props.centerLatValue 
      &&
      this.props.geolocationLngValue !== this.props.centerLngValue
    ) {

      // console.log("searchBox - boundsValue: ", JSON.stringify(this.props.boundsValue));
      // console.log("searchBox - prevboundsValue: ", JSON.stringify(prevProps.boundsValue));
      // console.log("searchBox - geolocationLatValue: ", this.props.geolocationLatValue);
      // console.log("searchBox - centerLatValue: ", this.props.centerLatValue);
      // console.log("searchBox - geolocationLngValue: ", this.props.geolocationLngValue);
      // console.log("searchBox - centerLngValue: ", this.props.centerLngValue);


      this.searchBox.setBounds(
        this.props.boundsValue
      );

    }

  }

  render() {

    return (
      <div
        style={
          {
            background: "gray",
            position: "absolute",
            top: "0",
            height: "7vh",
            width: "100%"
          }
        }
      >
        <input
          id="pac-input"
          ref={this.searchBoxRef}
          className="controls"
          type="search"
          placeholder="Search Box"
          style={
            {
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
            }
          }
        />
      </div >
    )
  }

}


const mapStateToProps = (state, ownProps) => {
  return {
    geolocationValue: state.geolocationState.geolocationValue,
    geolocationLatValue: state.geolocationState.geolocationLatValue,
    geolocationLngValue: state.geolocationState.geolocationLngValue,
    mapValue: state.mapState.mapValue,
    boundsValue: state.boundsState.boundsValue,
    centerLatValue: state.centerState.centerLatValue,
    centerLngValue: state.centerState.centerLngValue
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

