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
        radius: 500
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

    // variables
    const numGeoUpdates = this.props.numGeolocationUpdates;
    const prev_numGeoUpdates = prevProps.numGeolocationUpdates;

    const geoLat = this.props.geolocationLatValue;
    const geoLng = this.props.geolocationLngValue;
    const prev_geoLat = prevProps.geolocationLatValue;
    const prev_geoLng = prevProps.geolocationLngValue;

    const ctrLat = this.props.centerLatValue;
    const ctrLng = this.props.centerLngValue;
    const prev_ctrLat = prevProps.centerLatValue;
    const prev_ctrLng = prevProps.centerLngValue;

    const bounds = this.props.boundsValue;
    const prev_bounds = prevProps.boundsValue;

    const inputVal = this.props.inputValue;
    const prev_inputVal = prevProps.inputValue;

    console.log("numGeoUpdates: ", numGeoUpdates);

    // checks for changes
    const geo_update =
      geoLat !== prev_geoLat
      ||
      geoLng !== prev_geoLng;

    const numGeo_update = numGeoUpdates !== prev_numGeoUpdates;

    const ctr_update =
      ctrLat !== prev_ctrLat
      ||
      ctrLng !== prev_ctrLng;

    const bounds_update = JSON.stringify(bounds) !== JSON.stringify(prev_bounds);

    const input_update = inputVal !== prev_inputVal;

    const geo_same_ctr =
      this.props.geolocationLatValue !== this.props.centerLatValue
      ||
      this.props.geolocationLngValue !== this.props.centerLngValue;

// 
// 



    if (geo_update || numGeo_update) {

      const circle = new this.props.google.maps.Circle(
        {
          center: {
            lat: geoLat,
            lng: geoLng
          },
          radius: 600
        }
      );

      const circleBounds = circle.getBounds();

      this.searchBox.setBounds(
        circleBounds
      );

      console.log("searchBox bounds set to circle around geolocation", geoLat, geoLng);

    }


    if (ctr_update) {

      const circle = new this.props.google.maps.Circle(
        {
          center: {
            lat: ctrLat,
            lng: ctrLng
          },
          radius: 600
        }
      );

      const circleBounds = circle.getBounds();

      this.searchBox.setBounds(
        circleBounds
      );

      console.log("searchBox bounds set to circle around center", ctrLat, ctrLng);

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
          placeholder="Search powered by Google..."
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
    // displayValue: ownProps.display ? "none" : "",
    geolocationValue: state.geolocationState.geolocationValue,
    geolocationLatValue: state.geolocationState.geolocationLatValue,
    geolocationLngValue: state.geolocationState.geolocationLngValue,
    numGeolocationUpdates: state.geolocationState.numGeolocationUpdates,
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

