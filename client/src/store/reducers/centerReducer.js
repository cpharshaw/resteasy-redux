
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
        centerLatValue: Math.round(action.payload.lat*1000000)/1000000,
        centerLngValue: Math.round(action.payload.lng*1000000)/1000000
      }
    default:
      return {
        ...state
      };
  }
};


export default centerReducer;
