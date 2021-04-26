
const initState = {
  settingsUnitsOfMeasure: "imperial",
  settingsGenderPreference: "All",
  mapListGenderPreference: "All",
  mapListGenderPreferenceUpdates: 0
}

const myStuffReducer = (state = initState, action) => {

  // console.log("mapListGenderPreferenceUpdates ---> ", state.mapListGenderPreferenceUpdates);

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
    case 'MAPLIST_GENDERPREFERENCE_RECEIVED':
      return {
        ...state,
        mapListGenderPreference: action.payload,
        mapListGenderPreferenceUpdates: state.mapListGenderPreferenceUpdates + 1
      }
    default:
      return {
        ...state
      };
  }
};


export default myStuffReducer;
