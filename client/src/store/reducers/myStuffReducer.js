
const initState = {
  settingsUnitsOfMeasure: "imperial",
  settingsGenderPreference: "any",
}

const myStuffReducer = (state = initState, action) => {

  switch (action.type) {
    case 'SETTINGS_UNITSOFMEASURE_RECEIVED':
      // console.log('center success: ', action.payload);
      return {
        ...state,
        settingsUnitsOfMeasure: action.payload
      }
      case 'SETTINGS_GENDERPREFERENCE_RECEIVED':
      // console.log('center success: ', action.payload);
      return {
        ...state,
        settingsGenderPreference: action.payload
      }      
    default:
      return {
        ...state
      };
  }
};


export default myStuffReducer;
