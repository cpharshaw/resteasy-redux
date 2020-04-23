
const initState = {
  foursquareValue: null,
  numFoursquareUpdates: 0
}

const foursquareReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FOURSQUARE_SUCCESS':
      console.log("foursquareReducer received in STORE");
      return {
        ...state,
        // foursquareValue: []
        foursquareValue: action.payload,
        numFoursquareUpdates: state.numFoursquareUpdates + 1
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


