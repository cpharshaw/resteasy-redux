const initState = {
  selectedSectionValue: "review"
  // selectedSectionValue: "mapList"
  // selectedSectionValue: "myStuff"
}

const sectionReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SECTION_SELECTED':
      // console.log("sectionreducer: ", action.payload)
      return {
        ...state,
        selectedSectionValue: action.payload
      };
    default:
      return state;
  }
};

export default sectionReducer;
