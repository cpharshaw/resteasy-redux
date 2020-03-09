
const initState = {
  centerLatValue: 39.962292,
  centerLngValue: -75.144768
}

const centerReducer = (state = initState, action) => {
  
  switch (action.type) {
    case 'CENTER_RECEIVED':
      // console.log('center success: ', action.payload);
      return {
        ...state,
        centerLatValue: Math.round(action.payload.lat*1000000)/1000000,
        centerLngValue: Math.round(action.payload.lng*1000000)/1000000

        // centerLatValue: Math.round(initState.centerLatValue*1000000)/1000000,
        // centerLngValue: Math.round(initState.centerLngValue*1000000)/1000000        
      }
    default:
      return {
        ...state
      };
  }
};


export default centerReducer;
