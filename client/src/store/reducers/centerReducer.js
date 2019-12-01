const initState = {
  centerValue: null
}

const centerReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CENTER_RECEIVED':
      // console.log('geolocation success');
      return {
        ...state,
        centerValue: action.payload
      }
    default:
      return {
        ...state
      };
  }
};

export default centerReducer;
