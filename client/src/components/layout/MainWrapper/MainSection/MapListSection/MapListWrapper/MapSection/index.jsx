
// https://codesandbox.io/s/rzwrk2854
import MarkerComp from './Marker';
import RecenterButton from './RecenterButton';

import { getGeolocation } from '../../../../../../../store/actions/geoActions';
import { getPlacesFromFoursquare } from '../../../../../../../store/actions/foursquareActions';
import { storeMap, storeSelectedMarker } from '../../../../../../../store/actions/mapActions';
import { storeBounds } from '../../../../../../../store/actions/boundsActions';
import { storeCenter } from '../../../../../../../store/actions/centerActions';
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

  componentDidMount() {

    this.props.getGeolocation();

    // https://engineering.universe.com/building-a-google-map-in-react-b103b4ee97f1
    // https://developers.google.com/maps/documentation/javascript/places - nearby
  }



  componentDidUpdate(prevProps, prevState, snapshot) {



    // console.log("map component update")

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

    const mapUpdate = map !== prev_map



    // console.log("numGeoUpdates: ", numGeoUpdates);

    // checks for changes

    const googleAPIUpdate = prevProps.googleAPIValue === null && this.props.googleAPIValue !== null;

    // console.log("prevProps.googleAPIValue: ", prevProps.googleAPIValue)
    // console.log("this.props.googleAPIValue: ", this.props.googleAPIValue)
    // console.log("googleAPIUpdate: ", googleAPIUpdate)

    // console.log("prev_fs JSON: ", JSON.stringify(prev_foursquareValue));
    // console.log("fs JSON: ", JSON.stringify(foursquareValue));

    const fsPlacesUpdate = foursquareValue && (JSON.stringify(foursquareValue) !== JSON.stringify(prev_foursquareValue));

    if (fsPlacesUpdate) {
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

      // this.myoverlay = new this.props.googleAPIValue.OverlayView();

      // this.myoverlay.draw = function () {
      //   this.getPanes().markerLayer.id = 'markerLayer';
      // };
      // this.myoverlay.setMap(this.map);



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

      this.setState({
        geo_same_ctr: true
      })

    };

    // console.log("places: ", this.map.getPlaces());

  }


  renderJunk(map, colors) {
    // <div style={{animation-name: _gm5393}} />
    const mapParam = map;



    const fs = this.props.foursquareValue.map((place, i) => {


      const getRandomInt = (min, max) => {

        const minNum = Math.ceil(min);
        const maxNum = Math.floor(max);

        console.log("minNum: ", minNum)
        console.log("maxNum: ", maxNum)

        return Math.floor(Math.random() * (maxNum - minNum)) + minNum;
      }

      const randomMarkerColor = iconArr[getRandomInt(0, colors.length)];

      const attachSecretMessage = (marker, place, secretMessage) => {
        marker.addListener('click', () => {

          this.props.storeSelectedMarker(place)

          this.setState({
            markerIcon: randomMarkerColor
          })

          mapParam.panTo(
            {
              lat: place.location.lat,
              lng: place.location.lng
            }
          );

          console.log("place", place)
          console.log("secretMessage: ", secretMessage)
        });
      }

      const markerCreator = (mapArg) => {

        const marker = new this.props.googleAPIValue.Marker(
          {
            map: mapArg,
            position: {
              lat: !place.location.lat ? 39.962292 : place.location.lat,
              lng: !place.location.lng ? -75.144768 : place.location.lng
            },
            title: "fs-" + place.id,
            icon: randomMarkerColor,
            label: JSON.stringify(place.id),
            animation: this.props.googleAPIValue.Animation.DROP,
            // optimized: false
          }
        )
        attachSecretMessage(marker, place, "test of the secret message");

        return marker;

      }

      return markerCreator(mapParam);
    })

    // https://developers.google.com/maps/documentation/javascript/infowindows

    return fs.map((MarkerDiv, i) => {
      return MarkerDiv
    })

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

      <div className="container-fluid animated fadeIn fast" style={{ display: displayValue, fontSize: "12.25px" }}>

        <div className="row">

          <div id="mapSection" className="col"
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
                height: "100%"
              }}
            />

            {/* {console.log("overlay: ", console.log(document.getElementById("markerLayer")))} */}

            {
              <MarkerComp
                key="OKMark"
                data_lat={40}
                data_lng={-75}
                data_icon="https://img.icons8.com/office/33/000000/error.png"
              />
            }

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
          settingsModal ? null : (
            <div className="row animated fadeIn slow  py-1"
              style={{
                position: "absolute",
                left: "0",
                right: "0",
                margin: "0 auto",
                top: "10px",
                height: "72.5px",
                width: "95%",
                // maxWidth: "350px",
                borderRadius: "5px",
                backgroundColor: "rgba(250,250,250,.805)",
                // backgroundColor: "white",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
                border: "0.5px solid lightgrey",
                // fontSize: "12.25px"
                boxShadow: "0 0 3px #a8a8a8",
              }}
            >
              {
                !selectedMarkerValue ? null : (
                  <>
                    <div className="col-2 ai-c">
                      {/* rating icon */}
                      <img className="markerIcon" height="45" width="45" src={this.state.markerIcon} />
                      <span style={{ fontSize: "9px", color: "grey" }}><em>3.4 / 5</em></span>
                      <span style={{ fontSize: "9px", color: "grey" }}><em>123 ratings</em></span>
                    </div>

                    <div className="col-7">
                      {/* key info */}
                      <div className="row">
                        <div className="col">
                          <span>{selectedMarkerValue.name ? selectedMarkerValue.name : ""}</span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <span style={{fontSize: "11px", color: "grey"}}>{selectedMarkerValue.categories ? (selectedMarkerValue.categories[0] ? selectedMarkerValue.categories[0].name : "") : ""}</span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <span style={{fontSize: "11px", color: "grey"}}>{selectedMarkerValue.location ? (selectedMarkerValue.location.address ? selectedMarkerValue.location.address : "") : ""}</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-2">
                      {/* addl info */}
                      <div className="row">
                        <div className="col">
                          <span style={{ fontSize: "11px", color: "grey" }}>{selectedMarkerValue.distance ? selectedMarkerValue.distance : ""} m</span>
                        </div>
                      </div>

                      <div className="row">

                        <div className="col">

                         {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="19" height="19"
                            viewBox="0 0 172 172"
                            style={{ fill: "#000000" }}>
                            <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                              <path d="M0,172v-172h172v172z" fill="none" />
                              <g fill="#eeeeee">
                                <path d="M86,14.33333c-39.49552,0 -71.66667,32.17115 -71.66667,71.66667c0,39.49552 32.17115,71.66667 71.66667,71.66667c39.49552,0 71.66667,-32.17115 71.66667,-71.66667c0,-39.49552 -32.17115,-71.66667 -71.66667,-71.66667zM86,28.66667c31.74921,0 57.33333,25.58412 57.33333,57.33333c0,31.74921 -25.58412,57.33333 -57.33333,57.33333c-31.74921,0 -57.33333,-25.58412 -57.33333,-57.33333c0,-31.74921 25.58412,-57.33333 57.33333,-57.33333z" />
                              </g>
                            </g>
                          </svg> */}

                          <img src="https://img.icons8.com/material-outlined/17/000000/checked.png"/>

 
                        </div>

                        <div className="col">

                          {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="20" height="20"
                            viewBox="0 0 172 172"
                            style={{fill: "#000000"}}>
                            <g fill="none" fill-rule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}>
                              <path d="M0,172v-172h172v172z" fill="none" />
                              <g fill="#eeeeee">
                                <path d="M43.06999,14.33333c-7.85076,0 -14.33333,6.46862 -14.33333,14.31934l-0.06999,129.014l57.33333,-21.5l57.33333,21.5v-10.34407v-118.65593c0,-7.83362 -6.49972,-14.33333 -14.33333,-14.33333zM43.06999,28.66667h85.93001v108.31185l-43,-16.125l-42.986,16.125z" />
                              </g>
                            </g>
                          </svg> */}


                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="20" height="20"
                            viewBox="0 0 172 172"
                            style={{ fill: "#000000" }}>
                            <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                              <path d="M0,172v-172h172v172z" fill="none" />
                              <g fill="#f1c40f">
                                <path d="M136.16667,147.63333l-50.16667,-18.63333l-50.16667,18.63333v-118.96667c0,-3.58333 2.86667,-7.16667 7.16667,-7.16667h86c4.3,0 7.16667,2.86667 7.16667,7.16667z" opacity="0.3" />
                                <path d="M28.66667,157.66667v-129c0,-7.88333 6.45,-14.33333 14.33333,-14.33333h86c7.88333,0 14.33333,6.45 14.33333,14.33333v129l-57.33333,-21.5zM86,121.11667l43,16.48333v-108.93333h-86v108.21667z" />
                              </g>
                            </g>
                          </svg>


                        </div>
                      </div>
                    </div>

                    <div className="col-1 ai-fe ac-fe ta-r">
                      {/* <span style={{ width: "fit-content", fontSize: "16px", fontWeight: "bold" }}> */}
                      {/* <img src="https://img.icons8.com/ultraviolet/15/000000/chevron-right.png"/> */}
                      <img className="animated heartBeat slower" src="https://img.icons8.com/ios-glyphs/18/000000/chevron-right.png" />
                      {/* </span> */}
                    </div>
                  </>
                )

              }
            </div>
          )
        }
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
    foursquareValue: state.foursquareState.foursquareValue,
    // circleValue: state.circleState.circleValue,
    centerLatValue: state.centerState.centerLatValue,
    centerLngValue: state.centerState.centerLngValue,
    foursquareValue: state.foursquareState.foursquareValue,
    mapListToggleValue: ownProps.display,
    googleAPIValue: state.googleAPIState.googleAPIValue,
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

