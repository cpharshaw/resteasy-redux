const initState = {
  googleAPIValue: null,
  numGoogleAPIUpdates: 0,
  mapValue: null,
  myLocationMarkerValue: null,
  // centerLatValue: 39.962292,
  // centerLngValue: -75.144768,
  initialMapTilesLoaded: false,
  mapMovedCounterValue: 0,
  centerLatValue: null,
  centerLngValue: null,
  numCenterUpdates: 0,
  boundsValue: null,
  numBoundsUpdates: 0,
  circleValue: null,
  selectedMarkerValue: null,
  storedMarker: null,
  recenterIncrementerValue: 0
}

const mapReducer = (state = initState, action) => {
  switch (action.type) {

    case 'GOOGLE_API_RECEIVED':
      return {
        ...state,
        googleAPIValue: action.payload,
        numGoogleAPIUpdates: state.numGoogleAPIUpdates + 1
      }

    case 'MAP_RECEIVED':
    // console.log('MAP_RECEIVED reducer')
      return {
        ...state,
        mapValue: action.payload
      }

    case 'MAP_LOADED':
      // console.log("MAP_LOADED reducer")
      return {
        ...state,
        initialMapTilesLoaded: true
      }

    case 'MAP_MOVED':
      // console.log("MAP_MOVED reducer")
      return {
        ...state,
        mapMovedCounterValue: state.mapMovedCounterValue + 1
      }


    case 'MY_LOCATION_MARKER_RECEIVED':
      return {
        ...state,
        myLocationMarkerValue: action.payload
      }

    case 'MARKER_SELECTED':
      return {
        ...state,
        selectedMarkerValue: action.payload
      }

    case 'MARKER_TO_BE_STORED':
      return {
        ...state,
        storedMarker: action.payload
      }

    case 'CENTER_RECEIVED':
    // console.log('CENTER_RECEIVED reducer')
      return {
        ...state,
        centerLatValue: Math.round(action.payload.lat * 1000000) / 1000000,
        centerLngValue: Math.round(action.payload.lng * 1000000) / 1000000,
        numCenterUpdates: state.numCenterUpdates + 1
      }

    case 'BOUNDS_RECEIVED':
    // console.log('BOUNDS_RECEIVED reducer')
      return {
        ...state,
        boundsValue: action.payload,
        numBoundsUpdates: state.numBoundsUpdates + 1
      }

    case 'RECENTER_CLICKED':
      // console.log('BOUNDS_RECEIVED reducer')
        return {
          ...state,
          recenterIncrementerValue: state.recenterIncrementerValue + 1
        }
  

    default:
      // console.log("state returned")
      return {
        ...state
      };
  }
};

export default mapReducer;
