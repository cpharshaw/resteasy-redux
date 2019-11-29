const initState = {
  geolocationValue: null,
  geolocationStatus: null
}

const geolocationReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GEOLOCATION_SUCCESS':
      console.log("gelocationReducer SUCCESS: ", action.payload.latitude, action.payload.longitude);
      return {
        ...state,
        geolocationValue: action.payload,
        geolocationLat: action.payload.latitude,
        geolocationLng: action.payload.longitude,
        geolocationStatus: 'Geolocation success'
      }
    case 'GEOLOCATION_ERROR':
      console.log("gelocationReducer ERROR: ", action.payload.latitude, action.payload.longitude);
      return {
        ...state,
        geolocationValue: action.payload,
        geolocationStatus: 'Geolocation error'
      };
    default:
      return {
        ...state
      };
  }
};

export default geolocationReducer;


