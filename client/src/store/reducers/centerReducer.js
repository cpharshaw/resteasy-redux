
const initState = {
  centerLatValue: 39.952391,
  centerLngValue: -75.163600
}

const centerReducer = (state = initState, action) => {
  
  switch (action.type) {
    case 'CENTER_RECEIVED':
      // console.log('center success: ', action.payload);
      return {
        ...state,
        centerLatValue: action.payload.lat,
        centerLngValue: action.payload.lng
      }
    default:
      return {
        ...state
      };
  }
};


export default centerReducer;
