const initState = {
  mapValue: null,
  selectedMarkerValue: null
}

const mapReducer = (state = initState, action) => {
  switch (action.type) {
    case 'MAP_RECEIVED':
      // console.log('geolocation success');
      return {
        ...state,
        mapValue: action.payload
      }

    case 'MARKER_SELECTED':
      // console.log('geolocation success');
      return {
        ...state,
        selectedMarkerValue: action.payload
      }

    default:
      return {
        ...state
      };
  }
};

export default mapReducer;
