import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import PlaceCard from './../../../../../../sharedComponents/mapListComponents/PlaceCard';

// import { statement } from '@babel/template';

// import { firestoreConnect } from 'react-redux-firebase';

// import { Redirect } from 'react-router-dom';

import greyMarker from '../../MapListWrapper/greyMarker50.png';
import redMarker from '../../MapListWrapper/redMarker50.png';
import orangeMarker from '../../MapListWrapper/orangeMarker50.png';
import yellowMarker from '../../MapListWrapper/yellowMarker50.png';
import chartreuseMarker from '../../MapListWrapper/chartreuseMarker50.png';
import greenMarker from '../../MapListWrapper/greenMarker50.png';

const iconArr = [greyMarker, redMarker, orangeMarker, yellowMarker, chartreuseMarker, greenMarker, redMarker, orangeMarker, yellowMarker, chartreuseMarker, greenMarker]


class ListSection extends Component {

  constructor(props) {
    super(props);
    this.fsListings = null;
    this.state = {
      markerIcon: null,
      placeArr: []
    };
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

    const allMapDataLoaded = this.props.allMapDataLoaded;

    const selectedMarkerValue = this.props.selectedMarkerValue;
    const selectedPlaceValue = this.props.selectedPlaceValue;

    // console.log("prev_foursquareValue", prev_foursquareValue)
    // console.log("foursquareValue", fsPlacesUpdate)
    // console.log("list allMapDataLoaded", allMapDataLoaded)
    // console.log("list update_fsValue", update_fsValue)
    // console.log("list selectedMarkerValue", selectedMarkerValue)
    // console.log("list selectedPlaceValue", selectedPlaceValue)

    // console.log("fsPlacesUpdate", fsPlacesUpdate)

    if (allMapDataLoaded && update_fsValue) {
      // console.log("inside if state for fsPlacesUpdate", fsValue)

      const tempArr = fsValue.map((place, i) => {

        // console.log("inside map fsPlacesUpdate")

        const getRandomInt = (min, max) => {

          const minNum = Math.ceil(min);
          const maxNum = Math.floor(max);

          // console.log("minNum: ", minNum)
          // console.log("maxNum: ", maxNum)

          return Math.floor(Math.random() * (maxNum - minNum)) + minNum;
        }

        // placeholders


        const placeName = place.name;
        const placeAddress = place.location ? place.location.address : "-";
        const placeCategory = place.categories ? (place.categories[0] ? place.categories[0].name : "-") : "-";
        const placeDistance = place.distance;
        const placeMarker = this.state.markerIcon;
        const placeNumReviews = 14;
        const userReviwed = getRandomInt(0, 10) === 2 ? true : false;
        const userBookmarked = getRandomInt(0, 10) === 3 ? true : false;



        return (
          <div className="row" key={i + "listFSkey"} >
            <div className="col py-1">
              <PlaceCard
                data_place={place}
                data_componentsource="list"
                data_placename={placeName}
                data_placeaddress={placeAddress}
                data_placecategory={placeCategory}
                data_placedistance={placeDistance}
                data_placemarker={placeMarker}
                data_placenumreviews={placeNumReviews}
                data_userreviewed={userReviwed}
                data_userbookmarked={userBookmarked}
              />
            </div>
          </div>
        )
      });

      this.setState({
        placeArr: tempArr
      })

    }
  }

  render() {

    const displayValue = this.props.data_display ? null : "none";

    const {
      foursquareValue,
      selectedMarkerValue
    } = this.props;

    return (
      <div className="row ai-fs animated fadeIn fast" id="listSection"
        style={{
          display: displayValue,
          WebkitOverflowScrolling: "touch",
          overflowY: "scroll",
          msOverflowY: "scroll",
          overflowX: "hidden",
          msOverflowX: "hidden",
        }}
      >
        <div
          id=""
          className="col jc-fs py-2"
          style={{
            overflowX: "hidden",
            msOverflowX: "hidden",
            overflowY: "hidden",
            msOverflowY: "hidden",
            
          }}
        >
          {this.state.placeArr}
          {/* {console.log("list: ", this.state.placeArr)} */}
        </div >
      </div >
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  return {
    displayValue: ownProps.display ? "none" : "",
    mapListToggleValue: ownProps.display,
    googleAPIValue: state.mapState.googleAPIValue,

    mapValue: state.mapState.mapValue,
    boundsValue: state.mapState.boundsValue(),
    centerLatValue: state.mapState.centerLatValue(),
    centerLngValue: state.mapState.centerLngValue(),
    googleAPIValue: state.mapState.googleAPIValue,
    initialMapTilesLoaded: state.mapState.initialMapTilesLoaded,
    allMapDataLoaded: state.mapState.allMapDataLoaded(),

    selectedMarkerValue: state.mapState.selectedMarkerValue,
    selectedPlaceValue: state.mapState.selectedPlaceValue,
    mapMovedCounterValue: state.mapState.mapMovedCounterValue,
    recenterIncrementerValue: state.mapState.recenterIncrementerValue,

    geolocationLatValue: state.geolocationState.geolocationLatValue,
    geolocationLngValue: state.geolocationState.geolocationLngValue,
    numGeolocationUpdates: state.geolocationState.numGeolocationUpdates,

    foursquareValue: state.foursquareState.foursquareValue,

    modalState: state.modalState,
  }
}




export default compose(
  connect(mapStateToProps, null),
  // firestoreConnect([
  //   {
  //     collection: 'reviews',
  //     orderBy: ['createdAt', 'desc']
  //   }
  // ])
)(ListSection);