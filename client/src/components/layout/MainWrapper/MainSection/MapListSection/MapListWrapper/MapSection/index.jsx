
// https://codesandbox.io/s/rzwrk2854
import MarkerComp from './Marker';
import RecenterButton from './RecenterButton';

import { getGeolocation } from '../../../../../../../store/actions/geoActions';
import { getPlacesFromFoursquare } from '../../../../../../../store/actions/foursquareActions';
import { storeMap, storeSelectedMarker, storeBounds, storeCenter } from '../../../../../../../store/actions/mapActions';
import { storeInput } from '../../../../../../../store/actions/inputActions';

import React, { Component } from "react";
import ReactDOM from 'react-dom';

import greyMarker from '../../MapListWrapper/greyMarker50.png';
import redMarker from '../../MapListWrapper/redMarker50.png';
import orangeMarker from '../../MapListWrapper/orangeMarker50.png';
import yellowMarker from '../../MapListWrapper/yellowMarker50.png';
import chartreuseMarker from '../../MapListWrapper/chartreuseMarker50.png';
import greenMarker from '../../MapListWrapper/greenMarker50.png';
import PlaceCard from './../../../../../../sharedComponents/mapListComponents/PlaceCard';

import { GoogleApiWrapper } from "google-maps-react";


import { compose } from 'redux';
// import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
// import { createProject } from '../../store/actions/projectActions';
import MyStyle from './mapStyle.js';

// import './loading.css';
const myLocationIcon = 'https://img.icons8.com/ultraviolet/40/000000/map-pin.png';

const iconArr = [greyMarker, redMarker, orangeMarker, yellowMarker, chartreuseMarker, greenMarker, redMarker, orangeMarker, yellowMarker, chartreuseMarker, greenMarker]



// "https://img.icons8.com/officel/38/000000/marker.png";

// <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
//   width="33" height="33"
//   viewBox="0 0 172 172"
//   style={{fill: "#0abab5"}}>
//   <g fill="none" fillRule="nonzero" stroke="none" strokeWwidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}>
//     <path d="M0,172v-172h172v172z" fill="none" />
//     <g fill="#0abab5">
//       <path d="M35.83333,64.4355c0,32.12817 42.77067,84.33017 44.591,86.53033l5.5255,6.70083l5.5255,-6.70083c1.82033,-2.20733 44.591,-54.40217 44.591,-86.53033c0,-27.64183 -22.48183,-50.1165 -50.1165,-50.1165c-27.63467,0 -50.1165,22.48183 -50.1165,50.1165zM90.09933,64.5l-18.5975,-18.59033l10.13367,-10.13367l28.73117,28.724l-28.68817,28.68817l-10.13367,-10.13367z" />
//     </g>
//   </g>
// </svg>

// const poorIcon = "https://img.icons8.com/office/40/000000/poor-quality.png";
// const terribleIcon = "https://img.icons8.com/officel/40/000000/evil.png";

// const skull = "https://img.icons8.com/ios-filled/50/000000/poison.png";

class MapSection extends Component {
  constructor(props) {
    super(props);
    this.googleMapRef = React.createRef();
    this.state = {
      initialUpdate: 0,
      geo_same_ctr: true,
      fsMarkers: null,
      markerIcon: null
    };
    this.map = null;
    this.layer = null
    this.renderJunk = this.renderJunk.bind(this);
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

    // console.log("the map: ", map);

    // console.log(message);
    // console.log("map", map);
    // console.log("center", center);
    // console.log("geoLoc", this.props.geolocationLatValue, this.props.geolocationLngValue)
    // console.log("bounds", bounds);
  }


  resetCenter = e => {
    alert('reset center clicked');
    console.log('reset center clicked')
  }


  renderJunk(map, colors) {
    const mapParam = map;
    const fs = this.props.foursquareValue.map((place, i) => {
      const getRandomInt = (min, max) => {
        const minNum = Math.ceil(min);
        const maxNum = Math.floor(max);
        return Math.floor(Math.random() * (maxNum - minNum)) + minNum;
      }
      const randomMarkerColor = iconArr[getRandomInt(0, colors.length)];
      const attachSecretMessage = (marker, place, secretMessage) => {
        marker.addListener('click', () => {
          this.props.storeSelectedMarker(place)
          this.setState({
            markerIcon: randomMarkerColor
          })
          mapParam.panTo({
            lat: place.location.lat,
            lng: place.location.lng
          });
        });
      }
      const markerCreator = (mapArg) => {
        const marker = new this.props.googleAPIValue.Marker({
          map: mapArg,
          position: {
            lat: !place.location.lat ? 39.962292 : place.location.lat,
            lng: !place.location.lng ? -75.144768 : place.location.lng
          },
          title: "fs-" + place.id,
          icon: randomMarkerColor,
          label: JSON.stringify(place.id),
          animation: this.props.googleAPIValue.Animation.DROP,
        })
        attachSecretMessage(marker, place, "test of the secret message");
        return marker;
      }    // https://developers.google.com/maps/documentation/javascript/infowindows
      return markerCreator(mapParam);
    })
    return fs.map((MarkerDiv, i) => {
      return MarkerDiv
    })
  }


  componentDidMount() {
    const map = this.props.mapValue;
    const foursquareValue = this.props.foursquareValue;
    if (map && foursquareValue) {
      console.log("map ...didMount", foursquareValue)
      // https://frontarm.com/james-k-nelson/pdf-cheatsheets/
      this.renderJunk(map, iconArr);
    }
    // https://engineering.universe.com/building-a-google-map-in-react-b103b4ee97f1
    // https://developers.google.com/maps/documentation/javascript/places - nearby
  }



  componentDidUpdate(prevProps, prevState, snapshot) {

    // variables
    const foursquareValue = this.props.foursquareValue;
    const prev_foursquareValue = prevProps.foursquareValue;

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


    const map = this.props.mapValue;
    const prev_map = prevProps.mapValue;

    // checks for changes

    const googleAPIUpdate = prevProps.googleAPIValue === null && this.props.googleAPIValue !== null;

    const fsPlacesUpdate = foursquareValue && (JSON.stringify(foursquareValue) !== JSON.stringify(prev_foursquareValue));

    if (fsPlacesUpdate || foursquareValue) {
      // https://frontarm.com/james-k-nelson/pdf-cheatsheets/
      this.renderJunk(map, iconArr);
    }


    // console.log("fs update: ", fsPlacesUpdate)

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

    if (this.map && this.props.googleAPIValue && ctr_update && !geo_same_ctr) this.setState({ geo_same_ctr: false });




    if (JSON.stringify(this.state.fsMarkers) !== JSON.stringify(prevState.fsMarkers)) console.log('state update')



    if (googleAPIUpdate) {

      this.map = new this.props.googleAPIValue.Map(
        this.googleMapRef.current,
        {
          zoom: 17,
          styles: MyStyle,
          center: {
            lat: geoLat,
            lng: geoLng
          },
          zoomControlOptions: {
            // position: this.props.googleAPIValue.ControlPosition.LEFT_CENTER
            position: this.props.googleAPIValue.ControlPosition.LEFT_BOTTOM
            // position: this.props.googleAPIValue.ControlPosition.RIGHT_CENTER
            // position: this.props.googleAPIValue.ControlPosition.RIGHT_BOTTOM
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
          icon: myLocationIcon,
          animation: this.props.googleAPIValue.Animation.DROP,
        }
      );

      // https://medium.com/@13milliseconds/interact-with-google-maps-markers-in-the-dom-8772452ebeef
      // https://www.sitepoint.com/animated-google-map-markers-css-javascript/



      const idleListener = this.map.addListener(
        'idle',
        () => {

          // this.mapFuncs("idleListener fired");

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

      this.setState({
        geo_same_ctr: true
      })

    };

    // console.log("places: ", this.map.getPlaces());

  }





  render() {

    const {
      settingsModal,
    } = this.props.modalState;

    const {
      foursquareValue,
      selectedMarkerValue
    } = this.props;

    const displayValue = this.props.data_display ? null : "none";

    return (

      <div id="mapSection" className="row animated fadeIn fast" style={{ display: displayValue }}>
        <div className="col">

          <div className="row">
            <div className="col"
              style={{
                position: "absolute",
                // top: "0",
                left: "0",
                right: "0",
                // bottom: "55px",
                height: "100%"
              }}
            >
              <div id="google-map" className="row" ref={this.googleMapRef}
                style={{
                  height: "500px"
                }}
              />
              <RecenterButton />
            </div>
          </div>

          {
            this.state.geo_same_ctr ? null : (
              <div className="row animated fadeIn px-3 py-2" onClick={this.resetCenter}
                style={{
                  position: "absolute",
                  left: "0",
                  right: "0",
                  margin: "0 auto",
                  bottom: "37.5px",
                  height: "fit-content",
                  width: "fit-content",
                  borderRadius: "5px",
                  backgroundColor: "rgba(250,250,250,0.805)",
                  backdropFilter: "blur(5px)",
                  WebkitBackdropFilter: "blur(5px)",
                  boxShadow: "0 0 5px #a2ddd9",
                }}
              >
                <span><em>Redo search in this area</em></span>
              </div>
            )
          }

          {/* {console.log("fs value", foursquareValue)} */}

          {
            settingsModal || !selectedMarkerValue ? null : (

              <PlaceCard
                data_componentsource="map"

                data_placename={selectedMarkerValue.name}
                data_placeaddress={selectedMarkerValue.location.address}
                data_placecategory={selectedMarkerValue.categories[0].name}
                data_placedistance={selectedMarkerValue.distance}

                data_placemarker={this.state.markerIcon}
                // data_placerating={}
                data_placenumreviews={14}

                data_userreviewed={true}
                data_userbookmarked={false}
              />

            )
          }
        </div>
      </div>
    )
  }


}


const mapStateToProps = (state, ownProps) => {
  return {
    displayValue: ownProps.display ? "none" : "",
    // geolocationValue: state.geolocationState.geolocationValue,
    geolocationLatValue: state.geolocationState.geolocationLatValue,
    geolocationLngValue: state.geolocationState.geolocationLngValue,
    numGeolocationUpdates: state.geolocationState.numGeolocationUpdates,
    mapValue: state.mapState.mapValue,
    boundsValue: state.mapState.boundsValue,
    foursquareValue: state.foursquareState.foursquareValue,
    // circleValue: state.circleState.circleValue,
    centerLatValue: state.mapState.centerLatValue,
    centerLngValue: state.mapState.centerLngValue,
    foursquareValue: state.foursquareState.foursquareValue,
    mapListToggleValue: ownProps.display,
    googleAPIValue: state.mapState.googleAPIValue,
    modalState: state.modalState,
    selectedMarkerValue: state.mapState.selectedMarkerValue
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
    },
    storeSelectedMarker: (marker) => {
      return dispatch(storeSelectedMarker(marker))
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

