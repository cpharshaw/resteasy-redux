const initState = {
  selectedSectionValue: "mapList"
}

const sectionReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SECTION_SELECTED':
      // console.log("sectionreducer: ", state.selectedSectionValue)
      return {
        ...state,
        selectedSectionValue: action.payload
      };
    default:
      return state;
  }
};

export default sectionReducer;