
const initState = {
  foursquareValue: null,
  numFoursquareUpdates: 0,
  foursquareManual: null,
  foursquareStatus: null,
}

const foursquareReducer = (state = initState, action) => {
  switch (action.type) {

    case 'FOURSQUARE_UPDATE_REQUESTED':
      // console.log("foursquare manual click request...");
      return {
        ...state,
        foursquareManual: "FOURSQUARE_UPDATE_REQUESTED"
      }

    case 'FOURSQUARE_INITIATED':
      // console.log("foursquare call initiated...");
      return {
        ...state,
        foursquareStatus: "FOURSQUARE_INITIATED"
      }

    case 'FOURSQUARE_SUCCESS':
      // console.log("...foursquare call finished!");
      return {
        ...state,
        // foursquareValue: []
        foursquareValue: action.payload,
        foursquareManual: null,
        foursquareStatus: null,
        numFoursquareUpdates: state.numFoursquareUpdates + 1
      }
    case 'FOURSQUARE_ERROR':
      // console.log("foursquareReducer ERROR: ", action.payload);
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


