const initState = {
  formValue: 1
}

const formReducer = (state = initState, action) => {
  switch (action.type) {
    case "FORM_NEXT":
      // console.log("sectionreducer: ", action.payload)
      return {
        ...state,
        formValue: state.formValue + 1
      };
    case "FORM_PREV":
      // console.log("sectionreducer: ", action.payload)
      return {
        ...state,
        formValue: state.formValue - 1
      };   
    default:
      return state;
  }
};

export default formReducer;
