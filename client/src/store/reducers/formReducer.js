const initState = {

  formStepValue: 0, 

  formProcessingValue: false,

  formRes: null,

  // page1
  formLocationValue: {},
  noBathrooomValue: false,
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
  formCommentsValue: "",
}

const formReducer = (state = initState, action) => {

  const newFormStep = action.payload;
  // console.log("new form step", newFormStep, state.formStepValue)
  switch (action.type) {

    case "FORM_NEXT":

      return {
        ...state,
        formStepValue: newFormStep === "outOfOrder" ? 5 : newFormStep === "addReviewStep1" ? 1 : state.formStepValue + 1
      };

    case "FORM_PREV":

      return {
        ...state,
        formStepValue: newFormStep === "outOfOrder" ? 1 : state.formStepValue - 1
      };

    case "FORM_RESET":

      return {
        ...initState
      };

    case "LOCATION_CHOSEN":
      // console.log("location chosen, reducer: ", action.payload)
      return {
        ...state,
        formLocationValue: action.payload
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

    case 'FORM_PROCESSING':
      // console.log("submitForm processing");
      return {
        ...state,
        formProcessingValue: true,
        formStepValue: newFormStep === "outOfOrder" ? 5 : newFormStep === "addReviewStep1" ? 1 : state.formStepValue + 1
      }

    case 'FORM_SUBMITTED':
      // console.log("submitForm success; step- ", state.formStepValue, 'formProcessingValue- ', state.formProcessingValue);
      return {
        ...state,
        formProcessingValue: false,
        formRes: action.payload
      }

    case 'FORM_SUBMITTED_ERROR':
      console.log("submitForm ERROR", action.payload);
      return state;
      

    default:
      return state;
  }
};

export default formReducer;
