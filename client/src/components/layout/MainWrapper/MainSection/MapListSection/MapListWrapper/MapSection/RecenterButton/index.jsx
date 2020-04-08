
import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

import { compose } from 'redux';
import { connect } from 'react-redux';

import { getGeolocation } from '../../../../../../../../store/actions/geoActions';
import { storeInput }              from '../../../../../../../../store/actions/inputActions';
import { getPlacesFromFoursquare } from '../../../../../../../../store/actions/foursquareActions';
import './recenter.css';



class RecenterButton extends Component {
  constructor(props) {
    super(props);
    this.googleMapRef = React.createRef();
    this.state = {
      color: "grey"
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    // this.props.storeInput("human");

    if (
      (this.props.geolocationLatValue !== this.props.centerLatValue) 
      || 
      (this.props.geolocationLngValue !== this.props.centerLngValue)
    ) {
      this.props.getGeolocation();
    }

    // console.log('recenter clicked');

    // this.setState({
    //   color: "#1898dd"
    // });
  }



  componentDidMount() {

    // variables
    const geoUpdates = this.props.geolocationUpdates;
    const geoLat = this.props.geolocationLatValue;
    const geoLng = this.props.geolocationLngValue;
    const ctrLat = this.props.centerLatValue;
    const ctrLng = this.props.centerLngValue;
    const bounds = this.props.boundsValue;
    const inputVal = this.props.inputValue;

    const ctr_matches_geo =
      geoLat === ctrLat
      &&
      geoLng === ctrLng;


    if (ctr_matches_geo) {
      // console.log("center matches geoLoc");
      this.setState({
        color: "#1898dd"
      });
    }


  }



  componentDidUpdate(prevProps, prevState, snapshot) {

    // variables
    const geoUpdates = this.props.geolocationUpdates;
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


    // checks for changes
    const geo_update =
      geoLat !== prev_geoLat
      ||
      geoLng !== prev_geoLng;

    const ctr_update =
      ctrLat !== prev_ctrLat
      ||
      ctrLng !== prev_ctrLng;

    const bounds_update = JSON.stringify(bounds) !== JSON.stringify(prev_bounds);

    const input_update = inputVal !== prev_inputVal;



    //
    //
    //

    // changes above; other checks below
    const geo_same_ctr =
      geoLat == ctrLat
      &&
      geoLng == ctrLng;
    // console.log("RECENTER - geo_same_ctr: ", geo_same_ctr);

    // 

    // console.log("recenter button changes:",geo_update,ctr_update,geo_same_ctr,bounds_update)


    if ((ctr_update || geo_update) && geo_same_ctr) {
      this.setState({
        color: "#1898dd"
      });
      // console.log('recenter', this.props.foursquareValue);
      // console.log("RECENTER BUTTON - DidUpdate - color changed to tiffany");

    } else if ((ctr_update || geo_update) && !geo_same_ctr) {
      this.setState({
        color: "grey"
      });
      // console.log("RECENTER BUTTON - DidUpdate - color changed to grey");    
    }

  }


  render() {

    const color = this.state.color;

    return (

       <div className="recenterButton animated fadeInRight faster"
        style={{
          borderColor: color
        }}
        onClick={this.handleClick}
      >
        <div className="recenterCrosshairs1"
          style={{
            background: color
          }}
        />
        <div className="recenterButtonRing"
          style={{
            borderColor: color
          }}
        >
          <div className="recenterButtonDot"
            style={{
              background: color
            }}
          />
        </div>
        <div className="recenterCrosshairs2"
          style={{
            background: color
          }}
        />
      </div>

    )

  }

}


const mapStateToProps = (state, ownProps) => {
  return {
    // displayValue: ownProps.display ? "none" : "",
    geolocationValue: state.geolocationState.geolocationValue,
    geolocationLatValue: state.geolocationState.geolocationLatValue,
    geolocationLngValue: state.geolocationState.geolocationLngValue,
    geolocationUpdates: state.geolocationState.geolocationUpdates,
    mapValue: state.mapState.mapValue,
    boundsValue: state.boundsState.boundsValue,
    centerLatValue: state.centerState.centerLatValue,
    centerLngValue: state.centerState.centerLngValue,
    inputValue: state.inputState.inputValue,
    foursquareValue: state.foursquareState.foursquareValue,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getGeolocation: () => {
      return dispatch(getGeolocation());
    },
    storeInput: (input) => {
      return dispatch(storeInput(input));
    },
    getPlacesFromFoursquare: (location) => {
      return dispatch(getPlacesFromFoursquare(location))
    },
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
)(RecenterButton);