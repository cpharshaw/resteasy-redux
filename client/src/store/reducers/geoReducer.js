const initState = {
  geolocationValue: null,
  geolocationStatus: null
}

const geolocationReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GEOLOCATION_SUCCESS':
      // console.log('geolocation success');
      return {
        ...state,
        geolocationValue: action.payload,
        geolocationStatus: 'Geolocation success'
      }
    case 'GEOLOCATION_ERROR':
      // console.log('geolocation error');
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
