const initState = {
  mapListToggleValue: false
}

const mapListReducer = (state = initState, action) => {
  switch (action.type) {
    case 'MAPLIST_TOGGLED':
      // console.log("MAPLIST_TOGGLED: ", state)
      return {
        ...state,
        mapListToggleValue: !state.mapListToggleValue
      };
    default:
      return state;
  }
};

export default mapListReducer;
