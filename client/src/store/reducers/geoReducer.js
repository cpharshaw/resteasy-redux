
const initState = {
  geolocationValue: null,
  geolocationLatValue: 39.8283459,
  geolocationLngValue: -98.5794797,
  geolocationAcc: 600,
  geolocationStatus: null,
  numGeolocationUpdates: 0
  // 39.962237, -75.144239
}

const geolocationReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GEOLOCATION_SUCCESS':
      // console.log("geolocation received in STORE")
      // if (
      //   (Math.round(state.geolocationLatValue * 1000000) / 1000000) !== (Math.round(action.payload.latitude * 1000000) / 1000000)
      //     ||
      //   (Math.round(state.geolocationLngValue * 1000000) / 1000000) !== (Math.round(action.payload.longitude * 1000000) / 1000000)
      // ) {

        // console.log("geolocationReducer SUCCESS", " updates:", state.geoLocationUpdates, "lat:", action.payload.latitude, "lng:", action.payload.longitude);
        return {
          ...state,
          geolocationValue: action.payload,
          // geolocationLatValue: Math.round(initState.geolocationLatValue * 1000000) / 1000000,
          // geolocationLngValue: Math.round(initState.geolocationLngValue * 1000000) / 1000000,
          geolocationLatValue: Math.round(action.payload.latitude * 1000000) / 1000000,
          geolocationLngValue: Math.round(action.payload.longitude * 1000000) / 1000000,          
          geolocationAcc: action.payload.accuracy,
          geolocationStatus: action.type,
          numGeolocationUpdates: state.numGeolocationUpdates + 1
        }
      // } 
    case 'GEOLOCATION_ERROR':
      console.log("geolocationReducer ERROR: ", action.payload);
      return {
        ...state,
        geolocationValue: action.payload,
        // geolocationLatValue: action.payload.latitude,
        // geolocationLngValue: action.payload.longitude,
        geolocationLatValue: initState.geolocationLatValue,
        geolocationLngValue: initState.geolocationLngValue,
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


