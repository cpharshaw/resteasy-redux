
const initState = {
  geolocationValue: null,
  geolocationLatValue: 39.952391,
  geolocationLngValue: -75.163600,
  geolocationAcc: 600,
  geolocationStatus: null,
  numGeolocationUpdates: 0
  // 39.962237, -75.144239
}

const geolocationReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GEOLOCATION_SUCCESS':
      // console.log("geolocationReducer SUCCESS", " updates:", state.geoLocationUpdates, "lat:", action.payload.latitude, "lng:", action.payload.longitude);
      return {
        ...state,
        geolocationValue: action.payload,
        geolocationLatValue: action.payload.latitude,
        geolocationLngValue: action.payload.longitude,
        geolocationAcc: action.payload.accuracy,
        geolocationStatus: action.type,
        numGeolocationUpdates: state.numGeolocationUpdates + 1
      }
    case 'GEOLOCATION_ERROR':
      console.log("geolocationReducer ERROR: ", action.payload);
      return {
        ...state,
        geolocationValue: action.payload,
        geolocationLatValue: action.payload.latitude,
        geolocationLngValue: action.payload.longitude,  
        geolocationAcc: action.payload.accuracy,
        geolocationStatus: action.type,
        numGeolocationUpdates: state.numGeolocationUpdates
      };
    default:
      return {
        ...state
      };
  }
};

export default geolocationReducer;


