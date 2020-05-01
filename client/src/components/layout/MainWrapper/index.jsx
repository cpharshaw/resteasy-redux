import React, { Component } from 'react'
import MainSection from './MainSection/';
import BottomBar from './BottomBar/';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { GoogleApiWrapper } from "google-maps-react";
import { storeGoogleAPI } from '../../../store/actions/mapActions';
import { getGeolocation } from '../../../store/actions/geoActions';
import { getPlacesFromFoursquare } from '../../../store/actions/foursquareActions';

import '../../../styling/reset/customReset.css';

// import '../../../styling/base.css';
// import '../../../styling/elements.css';
// import '../../../styling/styles.css';
// import '../../../styling/bootstrapGrid.css';

class MainWrapper extends Component {

  state = {
    windowHeight: [],
    max_windowHeight: function () {
      return Math.max(...this.windowHeight);
    },
    min_windowHeight: function () {
      return Math.min(...this.windowHeight);
    }
  }

  componentDidMount() {
    this.props.getGeolocation();
    this.props.storeGoogleAPI(this.props.google.maps);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

    // const googleAPIUpdate = prevProps.googleAPIValue === null && this.props.googleAPIValue !== null;

    const prev_geoLat = prevProps.geolocationLatValue;
    const prev_geoLng = prevProps.geolocationLngValue;
    const geoLat = this.props.geolocationLatValue;
    const geoLng = this.props.geolocationLngValue;

    const prev_ctrLat = prevProps.centerLatValue;
    const prev_ctrLng = prevProps.centerLngValue;
    const ctrLat = this.props.centerLatValue;
    const ctrLng = this.props.centerLngValue;
    const numCenterUpdates = this.props.numCenterUpdates;

    const fsValue = this.props.foursquareValue; const prev_fsValue = prevProps.foursquareValue; const update_fsValue = JSON.stringify(fsValue) !== JSON.stringify(prev_fsValue);

    const googleMapLoaded = this.props.initialMapTilesLoaded; const prev_googleMapLoaded = prevProps.initialMapTilesLoaded; const update_googleMapLoaded = (prev_googleMapLoaded === null && googleMapLoaded !== null) || (prev_googleMapLoaded !== googleMapLoaded);

    const allMapDataLoaded = this.props.allMapDataLoaded; const prev_allMapDataLoaded = prevProps.allMapDataLoaded; const update_allMapDataLoaded = allMapDataLoaded !== prev_allMapDataLoaded;

    const geo_update = (
      geoLat !== prev_geoLat
      ||
      geoLng !== prev_geoLng
    );

    const ctr_update = (
      ctrLat !== prev_ctrLat
      ||
      ctrLng !== prev_ctrLng
    );

    // if (googleMapLoaded && geo_update && ctrLat) {
    //   const fsLL = geoLat + "," + geoLng;
    //   this.props.getPlacesFromFoursquare(fsLL);
    // }
    // console.log("initialMapTilesLoaded", this.props.initialMapTilesLoaded)
    // console.log("allMapDataLoaded", allMapDataLoaded)
    // console.log("update_googleMapLoaded", update_googleMapLoaded)
    // console.log("update_fsValue", update_fsValue)
    // console.log("fsValue", fsValue)

    if (update_allMapDataLoaded) {

      // console.log("ctrLat", ctrLat);
      // console.log("ctrLng", ctrLng);
      const fsLL = ctrLat + "," + ctrLng;
      this.props.getPlacesFromFoursquare(fsLL);
    }

    // console.log("from mainWrapper - numCenterUpdates: ", numCenterUpdates)
    // console.log("from mainWrapper - ctrLat, ctrLng: ", ctrLat, ctrLng)

  }


  render() {

    const {
      mapListToggleValue,
      geolocationValue
    } = this.props;

    return (

      <div id="mainWrapper" className="container-fluid ai-c"
        style={{
          position: "fixed",
          bottom: "0",
          left: "0",
          right: "0",
          maxWidth: "720px",
          maxHeight: "1680px",
          alignSelf: "center",
          margin: "0 auto",
          // border: "0.5px solid lightgrey",
          boxShadow: "0 0 10px lightgrey"
        }}
      >
        <main
          id="mainSection"
          className="row animated fadeIn fast"
          style={{
            position: "relative",
            height: "calc(100% - 62.5px)"
          }}
        >
          <div className="col">
            < MainSection />
          </div>
        </main>

        <footer
          id="bottomBar"
          className="row animated fadeIn faster"
          style={{
            position: "relative",
            height: "62.5px",
          }}
        >
          <nav id="bottomBarComponent" className="col bg-primary">
            < BottomBar />
          </nav>
        </footer >

      </div>
    )

  }
}


// export default Main;


const mapStateToProps = (state) => {
  return {
    mapListToggleValue: state.mapListState.mapListToggleValue,
    boundsValue: state.mapState.boundsValue(),
    googleAPIValue: state.mapState.googleAPIValue,
    geolocationLatValue: state.geolocationState.geolocationLatValue,
    geolocationLngValue: state.geolocationState.geolocationLngValue,
    centerLatValue: state.mapState.centerLatValue(),
    centerLngValue: state.mapState.centerLngValue(),
    numCenterUpdates: state.mapState.numCenterUpdates,
    initialMapTilesLoaded: state.mapState.initialMapTilesLoaded,
    allMapDataLoaded: state.mapState.allMapDataLoaded(),
    foursquareValue: state.foursquareState.foursquareValue,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeGoogleAPI: api => dispatch(storeGoogleAPI(api)),
    getGeolocation: () => dispatch(getGeolocation()),
    getPlacesFromFoursquare: (location) => dispatch(getPlacesFromFoursquare(location)),
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
    apiKey: process.env.REACT_APP_GM_KEY,
    version: "weekly"
  })
)(MainWrapper);
