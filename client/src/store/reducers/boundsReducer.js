const initState = {
  boundsValue: null
}

const boundsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'BOUNDS_RECEIVED':
      // console.log('geolocation success');
      return {
        ...state,
        boundsValue: action.payload
      }
    default:
      return {
        ...state
      };
  }
};

export default boundsReducer;
