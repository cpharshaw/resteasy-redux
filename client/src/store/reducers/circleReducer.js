const initState = {
  circleValue: null
}

const circleReducer = (state = initState, action) => {
  switch (action.type) {
    case 'BOUNDS_RECEIVED':
      return {
        ...state,
        circleValue: action.payload
      }
    default:
      return {
        ...state
      };
  }
};

export default circleReducer;
