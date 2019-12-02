
const initState = {
  geolocationValue: null,
  geolocationLat: 39.952391,
  geolocationLng: -75.163600,

  // 39.962237, -75.144239

  geolocationAcc: 600,
  geolocationStatus: null
}

const geolocationReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GEOLOCATION_SUCCESS':
      // console.log("gelocationReducer SUCCESS: ", action.payload.latitude, action.payload.longitude);
      return {
        ...state,
        geolocationValue: action.payload,
        geolocationLat: action.payload.latitude,
        geolocationLng: action.payload.longitude,
        geolocationAcc: action.payload.accuracy,
        geolocationStatus: action.type
      }
    case 'GEOLOCATION_ERROR':
      console.log("gelocationReducer ERROR: ", action.payload.latitude, action.payload.longitude);
      return {
        ...state,
        geolocationValue: action.payload,
        geolocationLat: action.payload.latitude,
        geolocationLng: action.payload.longitude,  
        geolocationAcc: action.payload.accuracy,
        geolocationStatus: action.type
      };
    default:
      return {
        ...state
      };
  }
};

export default geolocationReducer;


