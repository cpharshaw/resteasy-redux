import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { modalToggled, modalClosed } from '../../../../../store/actions/modalActions';
import FormNavButton from '../../../../sharedComponents/formComponents/FormNavButton';

import ModalFormReset from './ModalFormReset';

export class ModalContainer extends Component {

  closeModal(e) {
    e.preventDefault();

    if (this.props.formStepValue === 6) {
      this.props.formPrev();
    }

    this.props.modalClosed()

  }

  render() {

    const {
      selectedSectionValue,
      formStepValue,
      currentModal,
      data_size,
      children
    } = this.props;

    const style = {
      boxShadow: "0 1px 3px #a8a8a8",
      borderRadius: "5px",
      background: "#f5f5f5",
      flexDirection: "column",
      // justifyContent: "flex-start",
      alignContent: "flex-start",
      // backdropFilter: "blur(7px)",
      // WebkitBackdropFilter: "blur(7px)",
    }

    if (data_size === "sm") {
      style.width = "82.5%"
      // style.minHeight = "225px"
      // style.maxHeight = "450px"
      style.height = "225px"
    } else if (data_size === "loc") {
      style.width = "85%"
      style.height = "22.5%"
    }
    else {
      style.width = "95%"
      style.height = "95%"
    }


    return (

      <section
        id="modalContainer"
        className="animated fadeIn faster container-fluid"
        style={{
          position: "absolute",
          top: "0",
          // bottom: "0",
          left: "0",
          // right: "0",
          backgroundColor: "rgba(197,197,197,0.55)",
          WebkitBackdropFilter: "blur(8px)",
          backdropFilter: "blur(8px)",
          zIndex: "1000",
          // pointerEvents: "none"
        }}
      >
        <div className="row-50">
          <div className="col jc-se">







            <div className="row-50">
              <div className="col-10 jc-fs"
                style={{
                  background: "#f5f5f5",
                  borderRadius: "5px",
                  // paddingBottom: "23px",
                  boxShadow: "0 1px 3px #a8a8a8",
                }}
              >

                <div className="row">
                  <div className="col ai-fe" onClick={e => this.closeModal(e)}
                    style={{
                      pointerEvents: "all",
                      zIndex: "1000",
                      padding: "2px 9px 0 0"
                    }}
                  >
                    <span className="animated fadeIn slow"
                      style={{
                        pointerEvents: "all",
                        fontSize: "30px",
                        color: "grey",
                        fontWeight: "500",
                        zIndex: '1000'
                      }}
                    >
                      &times;
                    </span>
                  </div>
                </div>

                <div className="row-100" style={{ pointerEvents: "all" }}>
                  <div className="col jc-se">

                    <div className="row">
                      <div className="col">
                        <p className="">Reset review form and start over?</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <FormNavButton
                          data_text="Cancel"
                          data_classes="bg-grey-outline"
                          func_navcommand="cancel"
                        />
                      </div>
                      <div className="col">
                        <FormNavButton
                          data_text="Reset"
                          data_classes="bg-grey-outline"
                          func_navcommand="reset"
                        />
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>






            {/* {children} */}


            {/* {currentModal === "formResetModal" ? <ModalFormReset /> : null} */}

            {/*
            {currentModal === "formLocationModal" ? <ModalFormLocationSelector /> : null}
            {currentModal === "formConfirmSubmitModal" ? <ModalFormConfirmSubmit /> : null}
            {currentModal === "formThankYouModal" ? <ModalFormThankYou /> : null}
            {currentModal === "formLabelInfoModal" ? <ModalFormLabelInfo /> : null}
            */}

            {/* {
          formStepValue === 6 ? (

            <ReviewModal data_size="sm">
              <div className="" style={{ flexDirection: "column" }}>
                <span className="">
                  Ok to submit review?
                </span>
                <div
                  className=""
                  style={{
                    height: "50px",
                    marginBottom: "20px"
                  }}
                >
                  <FormNavButton
                    data_text="Back"
                    data_classes="bg-primary-invert"
                    func_navcommand="prev"
                  />
                  <FormNavButton
                    data_text="Submit"
                    data_classes="bg-grey-outline"
                    func_navcommand="next"
                  />
                </div>
              </div>
            </ReviewModal>
          ) : null
        }

        {
          formStepValue === 7 ? (
            <ReviewModal data_size="sm">
              <div className="" style={{ flexDirection: "column" }}>
                <span className="">
                  Thank you for your review.
                </span>
                <div
                  className=""
                  style={{
                    height: "50px",
                    marginBottom: "20px"
                  }}>
                  <FormNavButton
                    data_text="Close"
                    data_classes="bg-grey-outline"
                    data_width="fit-content"
                    func_navcommand="finish"
                  />
                </div>
              </div>
            </ReviewModal>
          ) : null
        }

        {
          formLocationModal ? (

            <ReviewModal data_name="formLocationModal">

              <LocationModal
                data_width="85%"
                data_height="44px"
                data_border="0.5px solid #0abab5"
              />

              <div
                id="fsReviewScroller"
                className=""
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  overflowY: "auto",
                  margin: "12.5px 0 0 0",
                }}
              >
                {foursquarePlaces}
              </div>
            </ReviewModal>
          ) : null
        }

        {
          formRestroomTypeModal ? (
            <ReviewModal data_name="formRestroomTypeModal">
              formRestroomTypeModal
                </ReviewModal>
          ) : null
        }

        {
          formLocationNotesModal ? (
            <ReviewModal data_name="formLocationNotesModal">
              formLocationNotesModal
                  </ReviewModal>
          ) : null
        }

        {
          formTimeOfVisitModal ? (
            <ReviewModal data_name="formTimeOfVisitModal">
              formTimeOfVisitModal
                  </ReviewModal>
          ) : null
        }

        {
          formOutOfOrderModal ? (
            <ReviewModal data_name="formOutOfOrderModal">
              formOutOfOrderModal
                  </ReviewModal>
          ) : null
        }


        {
          formCleanlinessModal ? (
            <ReviewModal data_name="formCleanlinessModal">
              formCleanlinessModal
            </ReviewModal>
          ) : null
        }

        {
          formSmellModal ? (
            <ReviewModal data_name="formSmellModal">
              formSmellModal
            </ReviewModal>
          ) : null
        }

        {
          formPrivacyModal ? (
            <ReviewModal data_name="formPrivacyModal">
              formPrivacyModal
            </ReviewModal>
          ) : null
        }

        {
          formComfortModal ? (
            <ReviewModal data_name="formComfortModal">
              formComfortModal
            </ReviewModal>
          ) : null
        }

        {
          formCapacityModal ? (
            <ReviewModal data_name="formCapacityModal">
              formCapacityModal
            </ReviewModal>
          ) : null
        }

        {
          formSafetyModal ? (
            <ReviewModal data_name="formSafetyModal">
              formSafetyModal
            </ReviewModal>
          ) : null
        }

        {
          formStyleModal ? (
            <ReviewModal data_name="formStyleModal">
              formStyleModal
            </ReviewModal>
          ) : null
        }

        {
          formHandicappedModal ? (
            <ReviewModal data_name="formHandicappedModal">
              formHandicappedModal
            </ReviewModal>
          ) : null
        }

        {
          formGenderNeutralModal ? (
            <ReviewModal data_name="formGenderNeutralModal">
              formGenderNeutralModal
            </ReviewModal>
          ) : null
        }

        {
          formGenderNeutralModal ? (
            <ReviewModal data_name="formGenderNeutralModal">
              formGenderNeutralModal
            </ReviewModal>
          ) : null
        }


        {
          formBabyChangeModal ? (
            <ReviewModal data_name="formBabyChangeModal">
              formBabyChangeModal
            </ReviewModal>
          ) : null
        }

        {
          formScheduleModal ? (
            <ReviewModal data_name="formScheduleModal">
              formScheduleModal
            </ReviewModal>
          ) : null
        }

        {
          formAdmissionModal ? (
            <ReviewModal data_name="formAdmissionModal">
              formAdmissionModal
            </ReviewModal>
          ) : null
        }

        {
          formFeeDisplayModal ? (
            <ReviewModal data_name="formFeeDisplayModal">
              formFeeDisplayModal
            </ReviewModal>
          ) : null
        }


        {
          formFeeModal ? (
            <ReviewModal data_name="formFeeModal">
              formFeeModal
            </ReviewModal>
          ) : null
        }
        {
          formPhotoUploadModal ? (
            <ReviewModal data_name="formPhotoUploadModal">
              formPhotoUploadModal
            </ReviewModal>
          ) : null
        }


        {
          formCommentsModal ? (
            <ReviewModal data_name="formCommentsModal">
              formCommentsModal
            </ReviewModal>
          ) : null
        }

*/}
          </div>
        </div>

      </section >
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  // console.log("mainwrapper state: ", state);
  return {
    selectedSectionValue: state.mapListState.selectedSectionValue,
    // geolocationValue: state.geolocationState.geolocationValue,
    boundsValue: state.boundsState.boundsValue,
    formStepValue: state.formState.formStepValue,
    modalState: state.modalState,
    currentModal: state.modalState.currentModal,
    centerLatValue: state.centerState.centerLatValue,
    centerLngValue: state.centerState.centerLngValue,
    // reviews: state.firestore.ordered.reviews,
    auth: state.firebase.auth,
    selectedSectionValue: ownProps.display,
    foursquareValue: state.foursquareState.foursquareValue
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // locationChosen: location => dispatch(locationChosen(location)),
    modalClosed: () => dispatch(modalClosed())
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(ModalContainer);






// const {
//   formLocationModal,

//   formRestroomTypeModal,
//   formLocationNotesModal,
//   formTimeOfVisitModal,
//   formOutOfOrderModal,

//   formCleanlinessModal,
//   formSmellModal,
//   formPrivacyModal,
//   formComfortModal,
//   formCapacityModal,
//   formSafetyModal,
//   formStyleModal,

//   //page 3
//   formHandicappedModal,
//   formGenderNeutralModal,
//   formBabyChangeModal,
//   formScheduleModal,
//   formAdmissionModal,
//   formFeeDisplayModal,
//   formFeeModal,

//   //page 4
//   formPhotoUploadModal,

//   //page 5
//   formCommentsModal,


//   // other
//   formResetModal
// } = this.props.modalState;