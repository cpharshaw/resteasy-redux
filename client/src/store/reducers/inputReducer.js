
const initState = {
  inputValue: "human"
}

const inputReducer = (state = initState, action) => {

  switch (action.type) {
    case 'INPUT_RECEIVED':
      // console.log('center success: ', action.payload);
      return {
        ...state,
        inputValue: action.payload
      }
    default:
      return {
        ...state
      };
  }
};


export default inputReducer;
