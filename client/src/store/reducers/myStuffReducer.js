
const initState = {
  settingsUnitsOfMeasure: "imperial",
  settingsGenderPreference: "All",
  mapListGenderPreference: "All",
  mapListGenderPreferenceUpdates: 0
}

const myStuffReducer = (state = initState, action) => {

  switch (action.type) {
    case 'SETTINGS_UNITSOFMEASURE_RECEIVED':
      return {
        ...state,
        settingsUnitsOfMeasure: action.payload
      }
    // case 'SETTINGS_GENDERPREFERENCE_RECEIVED':
    //   return {
    //     ...state,
    //     settingsGenderPreference: action.payload,
    //     mapListGenderPreference: action.payload,
    //   }
    // case 'MAPLIST_GENDERPREFERENCE_RECEIVED':
    //   return {
    //     ...state,
    //     mapListGenderPreference: action.payload,
    //     mapListGenderPreferenceUpdates: state.mapListGenderPreferenceUpdates + 1
      // }
    default:
      return {
        ...state
      };
  }
};


export default myStuffReducer;
