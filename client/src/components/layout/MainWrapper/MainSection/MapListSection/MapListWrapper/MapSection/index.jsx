
// https://codesandbox.io/s/rzwrk2854
import MarkerComp from './Marker';
import RecenterButton from './RecenterButton';

import { getGeolocation } from '../../../../../../../store/actions/geoActions';
import { getPlacesFromFoursquare } from '../../../../../../../store/actions/foursquareActions';
import { storeMap } from '../../../../../../../store/actions/mapActions';
import { storeBounds } from '../../../../../../../store/actions/boundsActions';
import { storeCenter } from '../../../../../../../store/actions/centerActions';
import { storeInput } from '../../../../../../../store/actions/inputActions';

import React, { Component } from "react";
import { GoogleApiWrapper } from "google-maps-react";


import { compose } from 'redux';
// import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
// import { createProject } from '../../store/actions/projectActions';
import MyStyle from './mapStyle.js';

// import './loading.css';
var myLocationIcon = 'https://img.icons8.com/ultraviolet/40/000000/map-pin.png';

// const greatIcon = "https://img.icons8.com/flat_round/40/000000/star--v1.png";
// const goodIcon = "https://img.icons8.com/office/40/000000/good-quality.png";
const questionableIcon = "https://img.icons8.com/office/33/000000/error.png";
// const poorIcon = "https://img.icons8.com/office/40/000000/poor-quality.png";
// const terribleIcon = "https://img.icons8.com/officel/40/000000/evil.png";

// const skull = "https://img.icons8.com/ios-filled/50/000000/poison.png";

class MapSection extends Component {
  constructor(props) {
    super(props);
    this.googleMapRef = React.createRef();
    this.state = {
      initialUpdate: 0,
    };

    this.map = null;

    this.marker = null;

  }
  // https://stackoverflow.com/questions/20916953/get-distance-between-two-points-in-canvas

  mapFuncs(message) {
    const map = this.map;
    const centerObj = map.getCenter();
    const center = {
      lat: centerObj.lat(),
      lng: centerObj.lng()
    };
    const bounds = map.getBounds();

    this.props.storeMap(map);
    this.props.storeCenter(center);
    this.props.storeBounds(bounds);

    // console.log(message);
    // console.log("map", map);
    // console.log("center", center);
    // console.log("geoLoc", this.props.geolocationLatValue, this.props.geolocationLngValue)
    // console.log("bounds", bounds);
  }



  componentDidMount() {

    this.props.getGeolocation();

    // https://engineering.universe.com/building-a-google-map-in-react-b103b4ee97f1
    // https://developers.google.com/maps/documentation/javascript/places - nearby
  }



  componentDidUpdate(prevProps, prevState, snapshot) {

    // console.log("map component update")

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

    // console.log("numGeoUpdates: ", numGeoUpdates);

    // checks for changes

    const googleAPIUpdate = prevProps.googleAPIValue === null && this.props.googleAPIValue !== null;

    // console.log("prevProps.googleAPIValue: ", prevProps.googleAPIValue)
    // console.log("this.props.googleAPIValue: ", this.props.googleAPIValue)
    // console.log("googleAPIUpdate: ", googleAPIUpdate)

    const geo_update = this.props.googleAPIValue && (
      geoLat !== prev_geoLat
      ||
      geoLng !== prev_geoLng
    );

    const numGeo_update = (numGeoUpdates !== prev_numGeoUpdates) && this.props.googleAPIValue;

    const ctr_update = this.props.googleAPIValue && (
      ctrLat !== prev_ctrLat
      ||
      ctrLng !== prev_ctrLng
    );

    // console.log(ctr_update);

    const bounds_update = (JSON.stringify(bounds) !== JSON.stringify(prev_bounds)) && this.props.googleAPIValue;

    const input_update = (inputVal !== prev_inputVal) && this.props.googleAPIValue;

    const geo_same_ctr = this.props.googleAPIValue && (
      geoLat === ctrLat
      &&
      geoLng === ctrLng
    );


    if (googleAPIUpdate) {

      // console.log("googleAPIUpdate", googleAPIUpdate)

      this.map = new this.props.googleAPIValue.Map(
        this.googleMapRef.current,
        {
          zoom: 15,
          styles: MyStyle,
          center: {
            lat: geoLat,
            lng: geoLng
          },
          zoomControlOptions: {
            position: this.props.googleAPIValue.ControlPosition.LEFT_CENTER
          },
          mapTypeControl: false,
          fullscreenControl: false,
          streetViewControl: false,
          // disableDefaultUI: true
        }
      );


      this.marker = new this.props.googleAPIValue.Marker(
        {
          map: this.map,
          position: {
            lat: geoLat,
            lng: geoLng
          },
          icon: myLocationIcon
        }
      );



      const idleListener = this.map.addListener(
        'idle',
        () => {

          this.mapFuncs("idleListener fired");

          // console.log('map idle fired')

          const fsLL = geoLat + "," + geoLng;
          // this.props.getPlacesFromFoursquare(fsLL);
          // console.log("fs value: ", this.props.foursquareValue);


          // if (this.props.numGeolocationUpdates > 0) {
          //   var pyrmont = new this.props.google.maps.LatLng(
          //     this.props.centerLatValue,
          //     this.props.centerLngValue
          //   );


          // var options = {
          //   location: pyrmont,
          // type: ['point_of_interest'],
          // type: ['establishment'],
          // rankBy: this.props.google.maps.places.RankBy.DISTANCE,
          // radius: '500',
          // };
          // https://github.com/foursquare/react-foursquare


          // const service = new this.props.google.maps.places.PlacesService(this.map);
          // service.nearbySearch(options, callback);

          // function callback(results, status) {
          //   console.log("nearby results: ", results);
          // }
          // }

        }
      );

    }


    if (this.map && ctr_update) {
      this.map.setCenter(
        {
          lat: ctrLat,
          lng: ctrLng
        }
      );
      const fsLL = ctrLat + "," + ctrLng;
      // this.props.getPlacesFromFoursquare(fsLL);
      // console.log("fs value updated: ", this.props.foursquareValue);
    }

    // 
    // 
    // console.log("map changes:",geo_update,ctr_update,geo_same_ctr,bounds_update)


    if (this.map && this.marker && (geo_update || numGeo_update)) {

      // console.log("map updated - FIRST update type", geo_update, numGeo_update);

      // this.map.panTo(
      //   {
      //     lat: geoLat,
      //     lng: geoLng
      //   }
      // );

      this.map.setCenter(
        {
          lat: geoLat,
          lng: geoLng
        }
      );

      this.marker.setPosition(
        {
          lat: geoLat,
          lng: geoLng
        }
      );

      const fsLL = geoLat + "," + geoLng;
      // this.props.getPlacesFromFoursquare(fsLL);
      // console.log("fs value updated: ", this.props.foursquareValue);

    };

    // console.log("places: ", this.map.getPlaces());

  }


  render() {
    // console.log("icon for marker: ", questionableIcon)

    const displayValue = this.props.data_display ? null : "none";
    // console.log("data_display: ", displayValue)

    return (
      <div
        id="mapList_mapSection"
        className="rs animated fadeIn faster"
        style={{
          display: displayValue,
          height: "100%"
        }}
      >
        <div
          id="google-map"
          className="rs"
          ref={this.googleMapRef}
          style={{
            height: "inherit"
          }}
        />
        < MarkerComp
          lat={40}
          lng={-75}
          icon={questionableIcon}
        />

        <RecenterButton />
      </div>
    )
  }


}


const mapStateToProps = (state, ownProps) => {
  return {
    displayValue: ownProps.display ? "none" : "",
    geolocationValue: state.geolocationState.geolocationValue,
    geolocationLatValue: state.geolocationState.geolocationLatValue,
    geolocationLngValue: state.geolocationState.geolocationLngValue,
    numGeolocationUpdates: state.geolocationState.numGeolocationUpdates,
    mapValue: state.mapState.mapValue,
    boundsValue: state.boundsState.boundsValue,
    // circleValue: state.circleState.circleValue,
    centerLatValue: state.centerState.centerLatValue,
    centerLngValue: state.centerState.centerLngValue,
    foursquareValue: state.foursquareState.foursquareValue,
    mapListToggleValue: ownProps.display,
    googleAPIValue: state.googleAPIState.googleAPIValue
    // inputValue: state.inputState.inputValue
    // ,state: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getGeolocation: () => {
      return dispatch(getGeolocation())
    },
    getPlacesFromFoursquare: (location) => {
      return dispatch(getPlacesFromFoursquare(location))
    },
    storeMap: (map) => {
      return dispatch(storeMap(map));
    },
    storeBounds: (bounds) => {
      return dispatch(storeBounds(bounds));
    },
    storeCenter: (center) => {
      return dispatch(storeCenter(center));
    },
    storeInput: (input) => {
      return dispatch(storeInput(input));
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
  // GoogleApiWrapper({
  //   apiKey: process.env.REACT_APP_GM_KEY,
  //   version: "3.30"
  // })
)(MapSection);