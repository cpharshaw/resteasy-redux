
const initState = {
  foursquareValue: null,
}

const foursquareReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FOURSQUARE_SUCCESS':
      // console.log("foursquareReducer SUCCESS", action.payload);
      return {
        ...state,
        foursquareValue: action.payload
      }
    case 'FOURSQUARE_ERROR':
      console.log("foursquareReducer ERROR: ", action.payload);
      return {
        ...state,
        foursquareValue: action.payload
      };
    default:
      return {
        ...state
      };
  }
};

export default foursquareReducer;


