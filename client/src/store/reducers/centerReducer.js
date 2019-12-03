
const initState = {
  centerValue: {
    lat: 39.952391,
    lng: -75.163600
  },
  // centerLatValue: 39.952391,
  // centerLngValue: -75.163600,
}

const centerReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CENTER_RECEIVED':
      console.log('center success: ', action.payload);
      return {
        ...state,
        centerValue: action.payload,
        // centerLatValue: action.payload.latitude,
        // centerLngValue: action.payload.longitude
      }
    default:
      return {
        ...state
      };
  }
};

export default centerReducer;
