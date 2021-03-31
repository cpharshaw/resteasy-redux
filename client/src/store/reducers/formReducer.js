const initState = {

  formStepValue: 0,

  formProcessingValue: false,

  formEditModeValue: false,

  formDeleteModeValue: false,

  formReviewToDeleteValue: null,

  formRes: null,

  // page1
  formLocationValue: {},
  noBathrooomValue: false,
  formRestroomTypeValue: "Restroom type...",
  formTimeOfVisitValue: "Time of day...",
  formLocationNotesValue: "",
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
  formHandicappedValue: true,
  formGenderNeutralValue: false,
  formBabyChangeValue: false,
  formScheduleValue: false,
  formAdmissionValue: "¿Gratis o no?",
  formFeeDisplayValue: "hidden",
  formFeeValue: null,

  //page 4
  photosArrValue: [],

  //page 5
  formCommentsValue: "",

  formMissingValue: false
}

const formReducer = (state = initState, action) => {

  const newFormStep = action.payload;
  // console.log("new form step", newFormStep, state.formStepValue)
  switch (action.type) {

    case "DELETE_REVIEW":

      return {
        ...state,
        formDeleteModeValue: true,
        // formEditModeValue: false,
        formReviewToDeleteValue: action.payload
      }

    case "DELETE_PROCESSING":

      return {
        ...state,
        formProcessingValue: true
      }

    case "DELETE_REVIEW_CONFIRMED":

      return {
        ...state,
        formDeleteModeValue: false,
        formReviewToDeleteValue: null,
        formProcessingValue: false,
        formRes: action.payload
      }

    case "DELETE_REVIEW_CANCELLED":

      return {
        ...state,
        formDeleteModeValue: false,
        formReviewToDeleteValue: null,
        formRes: null
      }

    case "EDIT_REVIEW":

      return {
        ...state,

        formStepValue: action.payload.formStepValue,

        // formDeleteModeValue: false,
        formEditModeValue: true,

        // formProcessingValue: false,

        // formRes: null,

        // page1
        formLocationValue: action.payload.formLocationValue,
        formRestroomTypeValue: action.payload.formRestroomTypeValue,
        formTimeOfVisitValue: action.payload.formTimeOfVisitValue,
        formLocationNotesValue: action.payload.formLocationNotesValue,
        formOutOfOrderValue: action.payload.formOutOfOrderValue,

        //page 2
        formCleanlinessValue: action.payload.formCleanlinessValue.toString(),
        formPrivacyValue: action.payload.formPrivacyValue.toString(),
        formComfortValue: action.payload.formComfortValue.toString(),
        formSafetyValue: action.payload.formSafetyValue.toString(),
        formStyleValue: action.payload.formStyleValue.toString(),

        //page 3
        formHandicappedValue: action.payload.formHandicappedValue,
        formGenderNeutralValue: action.payload.formGenderNeutralValue,
        formBabyChangeValue: action.payload.formBabyChangeValue,
        formScheduleValue: action.payload.formScheduleValue,
        formAdmissionValue: action.payload.formAdmissionValue,
        formFeeDisplayValue: action.payload.formFeeDisplayValue,
        formFeeValue: action.payload.formFeeValue,

        //page 4
        photosArrValue: action.payload.photosArrValue,

        //page 5
        formCommentsValue: action.payload.formCommentsValue,
      };

    case "FORM_NEXT":

      return {
        ...state,
        formStepValue: newFormStep === "outOfOrder" ? 5 : newFormStep === "addReviewStep1" ? 1 : state.formStepValue + 1,
        formMissingValue: false
      };

    case "FORM_PREV":

      return {
        ...state,
        formStepValue: newFormStep === "outOfOrder" ? 1 : state.formStepValue - 1,
        formMissingValue: false
      };

    case "FORM_MISSING_ALERT":

      return {
        ...state,
        formMissingValue: true
      };

    case "FORM_RESET":

      return {
        ...initState
      };

    case "LOCATION_CHOSEN":
      console.log("location chosen, reducer: ", action.payload)
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
      console.log('form submitted, formEditModeValue ---> ', state.formEditModeValue);
      return {
        ...state,
        formProcessingValue: false,
        formEditModeValue: false,
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
