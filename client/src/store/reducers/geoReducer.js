
const initState = {
  geolocationValue: null,
  geolocationLatValue: 39.8283459,
  geolocationLngValue: -98.5794797,
  geolocationAcc: 600,
  geolocationStatus: null,
  geolocationManual: null,
  numGeolocationUpdates: 0
  // 39.962237, -75.144239
}

const geolocationReducer = (state = initState, action) => {
  // console.log("geolocationStatus1 ---> ", state.geolocationStatus, action.type);

  switch (action.type) {


    case "GEOLOCATION_INITIATED":
      // console.log("GEOLOCATION_INITIATED ---> ", state.geolocationStatus, action.type)
      return {
        ...state,
        geolocationStatus: "GEOLOCATION_INITIATED"
      }

    case 'GEOLOCATION_SUCCESS':
      // console.log("GEOLOCATION_SUCCESS ---> ", state.geolocationStatus, action.type)
      return {
        ...state,
        geolocationValue: action.payload,
        // geolocationLatValue: Math.round(initState.geolocationLatValue * 1000000) / 1000000,
        // geolocationLngValue: Math.round(initState.geolocationLngValue * 1000000) / 1000000,
        geolocationLatValue: Math.round(action.payload.latitude * 1000000) / 1000000,
        geolocationLngValue: Math.round(action.payload.longitude * 1000000) / 1000000,
        geolocationAcc: action.payload.accuracy,
        geolocationManual: null,
        geolocationStatus: null,
        numGeolocationUpdates: state.numGeolocationUpdates + 1
      }
    // } 
    case 'GEOLOCATION_ERROR':
      // console.log("geolocationReducer ERROR: ", action.payload);
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


