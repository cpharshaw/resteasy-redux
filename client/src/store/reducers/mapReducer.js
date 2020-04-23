const initState = {
  googleAPIValue: null,
  mapValue: null,
  // centerLatValue: 39.962292,
  // centerLngValue: -75.144768,

  centerLatValue: 0,
  centerLngValue: 0,  
  numCenterUpdates: 0,
  boundsValue: null,
  numBoundsUpdates: 0,
  circleValue: null,
  selectedMarkerValue: null,
}

const mapReducer = (state = initState, action) => {
  switch (action.type) {

    case 'GOOGLE_API_RECEIVED':
      return {
        ...state,
        googleAPIValue: action.payload
      }

    case 'MAP_RECEIVED':
      return {
        ...state,
        mapValue: action.payload
      }

    case 'MARKER_SELECTED':
      return {
        ...state,
        selectedMarkerValue: action.payload
      }

    case 'BOUNDS_RECEIVED':
      return {
        ...state,
        boundsValue: action.payload
      }

    case 'CENTER_RECEIVED':
      return {
        ...state,
        centerLatValue: Math.round(action.payload.lat * 1000000) / 1000000,
        centerLngValue: Math.round(action.payload.lng * 1000000) / 1000000,
        numCenterUpdates: state.numCenterUpdates + 1
      }

    case 'BOUNDS_RECEIVED':
      return {
        ...state,
        circleValue: action.payload
      }

    default:
      return {
        ...state
      };
  }
};

export default mapReducer;
