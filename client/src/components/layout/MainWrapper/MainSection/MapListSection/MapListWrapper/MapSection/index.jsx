// https://codesandbox.io/s/rzwrk2854
import MarkerComp from './Marker';
import RecenterButton from './RecenterButton';

import { getGeolocation } from '../../../../../../../store/actions/geoActions';
import { foursquareManualUpdate, getPlacesFromFoursquare } from '../../../../../../../store/actions/foursquareActions';
import { storeMap, storeMyLocationMarker, storeSelectedMarker, storeSelectedPlace, storeMarker, registerInitialMapTilesloaded, registerSubsequentMapMovement } from '../../../../../../../store/actions/mapActions';
import { storeInput } from '../../../../../../../store/actions/inputActions';
import { GoogleApiWrapper } from "google-maps-react";
import React, { Component } from "react";
import ReactDOM from 'react-dom';


import greyMarker from '../../MapListWrapper/greyMarker50.png';
import redMarker from '../../MapListWrapper/redMarker50.png';
import orangeMarker from '../../MapListWrapper/orangeMarker50.png';
import yellowMarker from '../../MapListWrapper/yellowMarker50.png';
import chartreuseMarker from '../../MapListWrapper/chartreuseMarker50.png';
import greenMarker from '../../MapListWrapper/greenMarker50.png';

import PlaceCard from './../../../../../../sharedComponents/mapListComponents/PlaceCard';
import { compose } from 'redux';
// import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
// import { createProject } from '../../store/actions/projectActions';
import MyStyle from './mapStyle.js';

// import './loading.css';
const myLocationIcon = 'https://img.icons8.com/ultraviolet/40/000000/map-pin.png';
// "https://img.icons8.com/officel/38/000000/marker.png";
// const poorIcon = "https://img.icons8.com/office/40/000000/poor-quality.png";
// const terribleIcon = "https://img.icons8.com/officel/40/000000/evil.png";
// const skull = "https://img.icons8.com/ios-filled/50/000000/poison.png";

const iconArr = [greyMarker, redMarker, orangeMarker, yellowMarker, chartreuseMarker, greenMarker, redMarker, orangeMarker, yellowMarker, chartreuseMarker, greenMarker]


class MapSection extends Component {
  constructor(props) {
    super(props);
    this.googleMapRef = React.createRef();
    this.state = {
      initialUpdate: false,
      geo_same_ctr: true,
      fsMarkers: [],
      markerIcon: null,
      movedMap: false,
      currentCenterLat: null,
      currentCenterLng: null,
      currentBounds: null,
      optionToUpdate: false
    };
    this.geo_same_ctr = true;

    this.currentMap = null;

    this.myLocationMarker = null;

    this.renderFS = this.renderFS.bind(this);
    this.mapFuncs = this.mapFuncs.bind(this);

    this.map_getBounds = this.map_getBounds.bind(this);
    this.map_getCenter = this.map_getCenter.bind(this);
    this.map_setCenter = this.map_setCenter.bind(this);
    this.map_setZoom = this.map_setZoom.bind(this);
    this.map_panTo = this.map_panTo.bind(this);


    // this.map_storeCenter = this.map_storeCenter.bind(this);
    this.map_storeMap = this.map_storeMap.bind(this);
    // this.map_storeBounds = this.map_storeBounds.bind(this);

    this.map_updateMap = this.map_updateMap.bind(this);


    this.marker_setPosition = this.marker_setPosition.bind(this);
    this.marker_getIcon = this.marker_getIcon.bind(this);
    this.marker_getLabel = this.marker_getLabel.bind(this);
    this.marker_getTitle = this.marker_getTitle.bind(this);
    this.marker_setPosition = this.marker_setPosition.bind(this);

    this.marker_storeMarker = this.marker_storeMarker.bind(this);
  }
  // https://stackoverflow.com/questions/20916953/get-distance-between-two-points-in-canvas




  renderFS = (thing) => {

    // console.log("renderFS running");

    const fs = this.props.foursquareValue.map((place, i) => {


      // account for mens/womens/gn/all eventually...

      return (
        <MarkerComp
          key={"fsMarkerKey_" + i}
          data_id={i + "_marker"}
          data_map={this.currentMap}
          data_lat={place.location.lat}
          data_lng={place.location.lng}
          data_placerating={place.genderedValue ? parseFloat(place.genderedValue.weightedAvg.toFixed(3).substring(0, 3)) : null}
          data_label={JSON.stringify(place.id)}
          data_title={"fs-" + place.id}
          data_place={place}
        />
      )
    })

    this.setState({
      fsMarkers: fs
    })

  }


  map_setCenter = (map, lat, lng) => map.setCenter({ lat, lng });
  map_setZoom = (map, zoomLevel) => {
    map.setZoom(zoomLevel)
    // console.log('zooooooommmmmiinnngg')
  };
  map_panTo = (map, lat, lng) => map.panTo({ lat, lng });
  map_getBounds = (map) => map.getBounds();
  map_storeMap = (map) => this.props.storeMap(map);
  // map_storeBounds = (bounds) => this.props.storeBounds(bounds);
  // map_storeCenter = (center) => this.props.storeCenter(center);
  map_getCenter = (map) => {
    const centerObj = map.getCenter();
    const centerLat = centerObj.lat();
    const centerLng = centerObj.lng();
    const centerData = {
      centerObj,
      centerLat,
      centerLng
    }
    return centerData;
  }

  marker_setPosition = (marker, lat, lng) => marker.setPosition({ lat, lng });
  marker_getIcon = (marker) => marker.getIcon();
  marker_getLabel = (marker) => marker.getLabel();
  marker_getTitle = (marker) => marker.getTitle();
  marker_storeMarker = (marker) => this.props.storeMarker(marker);

  map_updateMap = () => {
    this.map_storeMap(this.currentMap);
    this.setState({
      movedMap: false,
      fsMarkers: [],
      optionToUpdate: false
    })
    this.props.foursquareManualUpdate();
    // console.log("'map_updateMap' clicked");
    // this.props.getPlacesFromFoursquare("center");
  }

  mapFuncs = (source) => {

    if (source == "tilesloaded") {
      if (!this.props.initialMapTilesLoaded) {
        this.props.registerInitialMapTilesloaded();
        // console.log("tilesloaded");
      }
    }

    if (source === "idle") {
      if (this.props.initialMapTilesLoaded) {
        this.props.registerSubsequentMapMovement();
        // console.log("idle");
      }
    }

  }




  componentDidUpdate(prevProps, prevState, snapshot) {

    const googleAPI = this.props.googleAPIValue; const prev_googleAPI = prevProps.googleAPIValue; const update_googleAPI = JSON.stringify(googleAPI) !== JSON.stringify(prev_googleAPI);
    const googleMap = this.props.mapValue; const prev_googleMap = prevProps.mapValue; const update_googleMap = googleMap !== prev_googleMap;
    const googleMapLoaded = this.props.initialMapTilesLoaded; const prev_googleMapLoaded = prevProps.initialMapTilesLoaded; const update_googleMapLoaded = (prev_googleMapLoaded === null && googleMapLoaded !== null) || (prev_googleMapLoaded !== googleMapLoaded);

    const googleMapBounds = googleMap ? googleMap.getBounds() : null; const prev_googleMapBounds = prev_googleMap ? prev_googleMap.getBounds() : null; const update_googleMapBounds = JSON.stringify(googleMapBounds) !== JSON.stringify(prev_googleMapBounds);
    const googleMapCenter = googleMap ? googleMap.getCenter() : null; const prev_googleMapCenter = prev_googleMap ? prev_googleMap.getCenter() : null; const update_googleMapCenter = JSON.stringify(googleMapCenter) !== JSON.stringify(prev_googleMapCenter)
    const googleMapCenterLat = googleMap ? googleMapCenter.lat() : 0; const prev_googleMapCenterLat = prev_googleMap ? prev_googleMapCenter.lat() : 0; const update_googleMapCenterLat = googleMapCenterLat !== prev_googleMapCenterLat;
    const googleMapCenterLng = googleMap ? googleMapCenter.lng() : 0; const prev_googleMapCenterLng = prev_googleMap ? prev_googleMapCenter.lng() : 0; const update_googleMapCenterLng = googleMapCenterLng !== prev_googleMapCenterLng;

    const fsValue = this.props.foursquareValue; const prev_fsValue = prevProps.foursquareValue; const update_fsValue = JSON.stringify(fsValue) !== JSON.stringify(prev_fsValue);

    const geolocLat = this.props.geolocationLatValue; const prev_geolocLat = prevProps.geolocationLatValue; const update_geolocLat = geolocLat !== prev_geolocLat;
    const geolocLng = this.props.geolocationLngValue; const prev_geolocLng = prevProps.geolocationLngValue; const update_geolocLng = geolocLng !== prev_geolocLng; const update_geoloc = update_geolocLat && update_geolocLng;

    const mapMovementCounter = this.props.mapMovedCounterValue; const prev_mapMovementCounter = prevProps.mapMovedCounterValue; const update_mapMovementCounter = mapMovementCounter !== prev_mapMovementCounter;
    const recenterIncrementerValue = this.props.recenterIncrementerValue; const prev_recenterIncrementerValue = prevProps.recenterIncrementerValue; const update_recenterIncrementerValue = recenterIncrementerValue !== prev_recenterIncrementerValue;

    const currentMap = this.currentMap;
    const currentMapBounds = currentMap ? currentMap.getBounds() : null;
    const currentMapCenter = currentMap ? currentMap.getCenter() : null;
    const currentMapCenterLat = currentMap ? currentMapCenter.lat() : null;
    const currentMapCenterLng = currentMap ? currentMapCenter.lng() : null;

    const movedMap = this.state.movedMap; const prev_movedMap = prevState.movedMap; const update_movedMap = movedMap !== prev_movedMap;

    const fsMarkers = this.state.fsMarkers; const prev_fsMarkers = prevState.fsMarkers; const update_fsMarkers = fsMarkers !== prev_fsMarkers;

    const allMapDataLoaded = this.props.allMapDataLoaded; const prev_allMapDataLoaded = prevProps.allMapDataLoaded; const update_allMapDataLoaded = allMapDataLoaded !== prev_allMapDataLoaded;


    const foursquareCalled = !prevProps.foursquareManual && this.props.foursquareManual === "FOURSQUARE_UPDATE_REQUESTED";
    const pendingGeolocUpdate = !prevProps.geolocationStatus && this.props.geolocationStatus === "GEOLOCATION_INITIATED";
    const finishedGeolocUpdate = prevProps.geolocationStatus === "GEOLOCATION_INITIATED" && !this.props.geolocationStatus;

    if (
      (this.props.initialMapTilesLoaded && foursquareCalled && !prevProps.geolocationStatus && !this.props.geolocationStatus)
      ||
      (this.props.initialMapTilesLoaded && finishedGeolocUpdate && foursquareCalled)
      ||
      (this.props.initialMapTilesLoaded && finishedGeolocUpdate && prevProps.foursquareManual === "FOURSQUARE_UPDATE_REQUESTED" && this.props.foursquareManual === "FOURSQUARE_UPDATE_REQUESTED")
    ) {

      // console.log("1.) this.props.initialMapTilesLoaded ---> ", this.props.initialMapTilesLoaded);
      // console.log("2.) foursquareManual prev,curr ---> ", prevProps.foursquareManual, " ---> ", this.props.foursquareManual);
      // console.log("3.) geolocationStatus prev,curr ---> ", prevProps.geolocationStatus, " ---> ", this.props.geolocationStatus);

      this.props.getPlacesFromFoursquare("center");
    }

    if ((!this.currentMap && update_googleAPI) || (!googleMap && googleAPI && update_geoloc)) {
      // https://developers.google.com/maps/documentation/javascript/overview#js_api_loader_package
      this.currentMap = new googleAPI.Map(
        this.googleMapRef.current,
        {
          zoom: 2,
          styles: MyStyle,
          center: {
            lat: geolocLat,
            lng: geolocLng
          },
          zoomControlOptions: {
            position: googleAPI.ControlPosition.LEFT_BOTTOM
          },
          mapTypeControl: false,
          fullscreenControl: false,
          streetViewControl: false,
        }
      );

      this.currentMap.addListener(
        'tilesloaded',
        () => {
          this.mapFuncs("tilesloaded");
        }
      )

      this.currentMap.addListener(
        'idle',
        () => {
          this.mapFuncs("idle");
        }
      )


    }


    if ((update_googleMapLoaded && geolocLat !== 39.8283459 && geolocLng !== -98.5794797) || (googleMapLoaded && !this.myLocationMarker && update_geoloc)) {
      this.map_setZoom(this.currentMap, 17);
      this.myLocationMarker = new this.props.googleAPIValue.Marker({
        map: this.currentMap,
        position: {
          lat: geolocLat,
          lng: geolocLng
        },
        icon: myLocationIcon,
        // animation: this.props.googleAPIValue.Animation.DROP,
      });
      this.map_storeMap(this.currentMap);
      this.marker_storeMarker(this.myLocationMarker);
    }


    if (update_mapMovementCounter) {
      this.map_storeMap(this.currentMap);
      // console.log("update mapMovementCounter", mapMovementCounter);

    }


    if (allMapDataLoaded && update_geoloc && geolocLat !== 39.8283459 && geolocLng !== -98.5794797) {
      this.map_panTo(this.currentMap, geolocLat, geolocLng);
      this.marker_setPosition(this.myLocationMarker, geolocLat, geolocLng);
      this.map_setCenter(this.currentMap, geolocLat, geolocLng);
      this.setState({
        movedMap: false,
        // fsMarkers: []
        // clearing markers here seemed to be unneeded 4/23/21
      })
      this.map_setZoom(this.currentMap, 17);
      // this.renderFS();

      // console.log("new geoloc, repositioning...")
    }


    if (update_recenterIncrementerValue) {

      this.map_panTo(this.currentMap, geolocLat, geolocLng);
      this.map_setCenter(this.currentMap, geolocLat, geolocLng);
      this.map_storeMap(this.currentMap);
      this.setState({
        movedMap: false,
        optionToUpdate: true
      })

    }

    if (googleMapLoaded && !movedMap && !update_movedMap && !update_geolocLat && update_mapMovementCounter && (currentMapCenterLat !== geolocLat || currentMapCenterLng !== geolocLng)) {
      this.setState({
        movedMap: true
      })
    }

    if (allMapDataLoaded && update_fsValue && fsValue && geolocLat !== 39.8283459 && geolocLng !== -98.5794797) {
      // console.log("running renderFS from componentDidUpdate; geoLoc", geolocLat, geolocLng)
      // console.log("renderFS")

      const self = this;

      const f = async self => {

        const promise = new Promise((resolve, reject) => {

          resolve(
            self.setState({
              movedMap: false,
              fsMarkers: [],
              optionToUpdate: false
            })
          );
          // console.log("async promse cleared markers...")
        });

        const result = await promise; // wait until the promise resolves (*)

        self.renderFS(result);
      }

      f(self);

      // this.renderFS();
    }


    if (allMapDataLoaded && update_fsMarkers && update_geolocLat) {
      // this.state.fsMarkers.map((marker, i) => {
      //   console.log("map markers", marker(this.currentMap))
      // })
    }

    // https://frontarm.com/james-k-nelson/pdf-cheatsheets/

    // https://medium.com/@13milliseconds/interact-with-google-maps-markers-in-the-dom-8772452ebeef
    // https://www.sitepoint.com/animated-google-map-markers-css-javascript/




    // console.log("idle trigged", this.state.initialUpdate, this.state.movedMap)
    // if (!this.state.initialUpdate) this.setState({ initialUpdate: true });

    // if (this.state.initialUpdate) this.setState({ movedMap: true })



    // if (this.props.numGeolocationUpdates > 0) {
    //   const pyrmont = new this.props.google.maps.LatLng(
    //     this.props.centerLatValue,
    //     this.props.centerLngValue
    //   );

    //   var options = {
    //     location: pyrmont,
    //     type: ['point_of_interest'],
    //     type: ['establishment'],
    //     rankBy: this.props.google.maps.places.RankBy.DISTANCE,
    //     radius: '500',
    //   };
    //   https://github.com/foursquare/react-foursquare

    //   const service = new this.props.google.maps.places.PlacesService(this.currentMap);
    //   service.nearbySearch(options, callback);

    //   function callback(results, status) {
    //     console.log("nearby results: ", results);
    //   }
    // }


  }



  render() {

    const {
      settingsModal,
      filtersModal,
      locationPickerModal
    } = this.props.modalState;

    const {
      foursquareValue,
      selectedMarkerValue,
      selectedPlaceValue
    } = this.props;

    const displayValue = this.props.data_display ? null : "none";

    // console.log(
    //   "maps section, foursquareValue ---> ", foursquareValue
    // );

    return (



      <div id="mapSection" className="row animated fadeIn fast" style={{ display: displayValue }}>
        {/* {selectedPlaceValue ? console.log("selectedPlaceValue", selectedPlaceValue) : null} */}
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
            !this.state.movedMap && !this.state.optionToUpdate ? null : (
              <div className="row animated fadeIn px-3 py-2" onClick={this.map_updateMap}
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
                <span><em>Update map around this area</em></span>
              </div>
            )
          }


          {
            !foursquareValue ? null : this.state.fsMarkers
          }

          {/* {this.state.fsMarkers[0] ? console.log("marker getIcon test: ", this.props) : null} */}
          {
            settingsModal || !selectedPlaceValue || !selectedMarkerValue || filtersModal || locationPickerModal ? null :
              (
                <PlaceCard
                  data_componentsource="map"
                  data_place={selectedPlaceValue}
                  data_placename={selectedPlaceValue.name || foursquareValue[0].name}
                  data_placeaddress={selectedPlaceValue.location.address || foursquareValue[0].location.address}
                  data_placecategory={selectedPlaceValue.categories[0] ? selectedPlaceValue.categories[0].name : null || foursquareValue[0].categories[0] ? foursquareValue[0].categories[0].name : null}
                  data_placedistance={selectedPlaceValue.distance || foursquareValue[0].distance}

                  data_placemarker={selectedMarkerValue.icon}

                  data_placenumreviews={selectedMarkerValue.store_place.genderedValue ? selectedMarkerValue.store_place.genderedValue.cnt : null}
                  data_placerating={selectedMarkerValue.store_place.genderedValue ? parseFloat(selectedMarkerValue.store_place.genderedValue.weightedAvg.toFixed(3).substring(0, 3)) : null}
                  data_userreviewed={
                    this.props.userReviews1 ? this.props.userReviews1.map(userReview => {
                      return userReview.locationID === selectedMarkerValue.store_place.id;
                    }).indexOf(true) >= 0 : false
                  }
                  data_userbookmarked={true}
                // data_place={place}
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
    mapListToggleValue: ownProps.display,
    googleAPIValue: state.mapState.googleAPIValue,

    mapValue: state.mapState.mapValue,
    boundsValue: state.mapState.boundsValue(),
    centerLatValue: state.mapState.centerLatValue(),
    centerLngValue: state.mapState.centerLngValue(),
    initialMapTilesLoaded: state.mapState.initialMapTilesLoaded,
    allMapDataLoaded: state.mapState.allMapDataLoaded(),

    geolocationStatus: state.geolocationState.geolocationStatus,
    geolocationManual: state.geolocationState.geolocationManual,
    foursquareStatus: state.foursquareState.foursquareStatus,
    foursquareManual: state.foursquareState.foursquareManual,
    selectedMarkerValue: state.mapState.selectedMarkerValue,
    selectedPlaceValue: state.mapState.selectedPlaceValue,
    mapMovedCounterValue: state.mapState.mapMovedCounterValue,
    recenterIncrementerValue: state.mapState.recenterIncrementerValue,
    geolocationLatValue: state.geolocationState.geolocationLatValue,
    geolocationLngValue: state.geolocationState.geolocationLngValue,
    numGeolocationUpdates: state.geolocationState.numGeolocationUpdates,
    userReviews1: state.auth.userReviews,
    foursquareValue: state.foursquareState.foursquareValue,

    modalState: state.modalState,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getGeolocation: () => dispatch(getGeolocation()),
    getPlacesFromFoursquare: (location) => dispatch(getPlacesFromFoursquare(location)),
    storeMap: (map) => dispatch(storeMap(map)),
    foursquareManualUpdate: () => dispatch(foursquareManualUpdate()),
    storeMyLocationMarker: (map) => dispatch(storeMyLocationMarker(map)),
    registerInitialMapTilesloaded: () => dispatch(registerInitialMapTilesloaded()),
    registerSubsequentMapMovement: () => dispatch(registerSubsequentMapMovement()),
    storeInput: (input) => dispatch(storeInput(input)),
    // storeSelectedMarker: (marker) => dispatch(storeSelectedMarker(marker)),
    // storeSelectedPlace: (marker) => dispatch(storeSelectedPlace(marker)),
    storeMarker: (marker) => dispatch(storeMarker(marker)),
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

 // https://developers.google.com/maps/documentation/javascript/infowindows