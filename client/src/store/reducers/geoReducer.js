const initState = {
  geoLocationValue: null,
  geoLocationStatus: null
}

const geoReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GEOLOCATION_SUCCESS':
      // console.log('geolocation success');
      return {
        ...state,
        geoLocationValue: action.payload,
        geoLocationStatus: 'Geolocation success'
      }
    case 'GEOLOCATION_ERROR':
      // console.log('geolocation error');
      return {
        ...state,
        geoLocationValue: action.payload,
        geoLocationStatus: 'Geolocation error'
      };
    default:
      return {
        ...state
      };
  }
};

export default geoReducer;
