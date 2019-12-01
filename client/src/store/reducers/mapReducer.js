const initState = {
  mapValue: null
}

const mapReducer = (state = initState, action) => {
  switch (action.type) {
    case 'MAP_RECEIVED':
      // console.log('geolocation success');
      return {
        ...state,
        mapValue: action.payload
      }
    default:
      return {
        ...state
      };
  }
};

export default mapReducer;
