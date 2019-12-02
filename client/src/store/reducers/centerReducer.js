
const initState = {
  center: {
    lat: 39.952391,
    lng: -75.163600
  }
  // centerValue: null
}

const centerReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CENTER_RECEIVED':
      console.log('center success: ', action.payload);
      return {
        ...state,
        centerLat: action.payload.lat,
        centerLng: action.payload.lng
      }
    default:
      return {
        ...state
      };
  }
};

export default centerReducer;
