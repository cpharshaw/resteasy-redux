
const initState = {
  geolocationValue: null,
  geolocationLatValue: 39.952391,
  geolocationLngValue: -75.163600,
  geolocationAcc: 600,
  geolocationStatus: null
  // 39.962237, -75.144239
}

const geolocationReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GEOLOCATION_SUCCESS':
      console.log("gelocationReducer SUCCESS");
      return {
        ...state,
        geolocationValue: action.payload,
        geolocationLatValue: action.payload.latitude,
        geolocationLngValue: action.payload.longitude,
        geolocationAcc: action.payload.accuracy,
        geolocationStatus: action.type
      }
    case 'GEOLOCATION_ERROR':
      console.log("gelocationReducer ERROR: ", action.payload);
      return {
        ...state,
        geolocationValue: action.payload,
        geolocationLatValue: action.payload.latitude,
        geolocationLngValue: action.payload.longitude,  
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


