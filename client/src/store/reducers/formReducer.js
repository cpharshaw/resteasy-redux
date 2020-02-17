const initState = {
  formStepValue: 4,

  // page1
  formLocationValue: null,
  formRestroomTypeValue: "Restroom type...",
  formLocationNotesValue: "",
  formTimeOfVisitValue: "Time of day...",
  formOutOfOrderValue: false,

  //page 2
  formCleanlinessValue: null,
  formSmellValue: null,
  formPrivacyValue: null,
  formComfortValue: null,
  formCapacityValue: null,
  formSafetyValue: null,
  formStyleValue: null,

  //page 3
  formHandicappedValue: false,
  formGenderNeutralValue: false,
  formBabyChangeValue: false,
  formScheduleValue: false,
  formAdmissionValue: "¿Gratis o no?",
  formFeeDisplayValue: "hidden",
  formFeeValue: "",

  //page 4
  photosArrValue: [],

  //page 5
  formCommentsValue: null
}

const formReducer = (state = initState, action) => {
  switch (action.type) {
    case "FORM_NEXT":
      // console.log("sectionreducer: ", action.payload)
      return {
        ...state,
        formStepValue: state.formStepValue + 1
      };
    case "FORM_PREV":
      // console.log("sectionreducer: ", action.payload)
      return {
        ...state,
        formStepValue: state.formStepValue - 1
      };



    case "LOCATION_CHOSEN":
      // console.log("sectionreducer: ", action.payload)
      return {
        ...state,
        location: action.payload
      };

    case "DROPDOWN_SELECTED":
      // console.log("DROPDOWN_SELECTED: ", action.payload, state)
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };

    case "FEE_CHOSEN":
      // console.log("DROPDOWN_SELECTED: ", action.payload, state)
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };


    case "TEXT_ENTERED":
      // console.log("sectionreducer: ", action.payload)
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };


    case "RADIO_SELECTED":
      // console.log("sectionreducer: ", action.payload)
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };





    case "CHECKBOX_CLICKED":
      // console.log("sectionreducer: ", action.payload)
      return {
        ...state,
        [action.payload.name]: !state[action.payload.name]
      };


    case 'PHOTO_SELECTED':
      return {
        ...state,
        photosArrValue: [...state.photosArrValue, action.payload]
      }
    case 'PHOTO_DELETED':
      return {
        ...state,
        photosArrValue: action.payload
      }

    default:
      return state;
  }
};

export default formReducer;
