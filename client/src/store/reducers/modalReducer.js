const initState = {

  // modals
  //page1
  formLocationModal: false,

  formRestroomTypeModal: false,
  formLocationNotesModal: false,
  formTimeOfVisitModal: false,
  formOutOfOrderModal: false,

  //page2
  formCleanlinessModal: false,
  formSmellModal: false,
  formPrivacyModal: false,
  formComfortModal: false,
  formCapacityModal: false,
  formSafetyModal: false,
  formStyleModal: false,

  //page 3
  formHandicappedModal: false,
  formGenderNeutralModal: false,
  formBabyChangeModal: false,
  formScheduleModal: false,
  formAdmissionModal: false,
  formFeeDisplayModal: false,
  formFeeModal: false,

  //page 4
  formPhotoUploadModal: false,

  //page 5
  formCommentsModal: false,


  // other

  formResetModal: false,

  settingsModal: false

}

const modalReducer = (state = initState, action) => {
  switch (action.type) {

    case "MODAL_TOGGLED":
      // console.log("modalReducer: ", action.payload)
      const modalName = action.payload;

      return {
        ...state,
        [modalName]: !state[modalName]
      };

    case "MODAL_CLOSED":
      // console.log("modalReducer: ", action.payload)

      return {
        ...initState
      };

    default:
      return state;
  }
};

export default modalReducer;
