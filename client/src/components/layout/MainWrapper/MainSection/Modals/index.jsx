import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { modalToggled, modalClosed } from '../../../../../store/actions/modalActions';
import FormNavButton from '../../../../sharedComponents/formComponents/FormNavButton';
import HorizontalRule from '../../../../sharedComponents/general/HorizontalRule';
import ModalFormReset from './ModalFormReset';
import LocationModal from './ModalFormLocationSelector';
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



    const foursquarePlaces = this.props.foursquareValue !== null && this.props.foursquareValue !== undefined ?
      this.props.foursquareValue.map((place, i) => {
        const name = place.name ? place.name : null;
        const category = place.categories ? (place.categories[0] ? place.categories[0].shortName : "") : null;
        const address = place.location.address + ", " + place.location.city + ", " + place.location.state;
        const distance = place.distance + " ft";

        return (
          <div className="row" key={i + "fs"}
            style={{
              background: i % 2 === 0 ? "red" : "blue",
              margin: "8px 0 4px 0"
            }}
          >
            <div
              className="col"
              data_placedata={JSON.stringify(place)}
              onClick={e => this.placeSelected(e)}
              data_placename={name}
              data_placeaddress={address}
              data_placecategory={category}
              data_placedistance={distance}
              style={{
                background: i % 2 === 0 ? "darkgrey" : "lightgrey",
              }}
            >
              <span><b>{name}</b> ({distance}) </span>
              <span>{address} </span>
              <span>{category} </span>

            </div>
          </div>
          // {i !== (this.props.foursquareValue.length - 1) ? <HorizontalRule /> : null}

        )
      }) : null;



    return (
      <React.Fragment>
        {
          currentModal !== "settingsModal" ? (
            <section
              id="modalContainer"
              className="animated fadeIn faster container-fluid"
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                backgroundColor: "rgba(197,197,197,0.55)",
                WebkitBackdropFilter: "blur(8px)",
                backdropFilter: "blur(8px)",
                zIndex: "1000",
              }}
            >

              {
                currentModal !== "formLocationModal" && currentModal !== "" ? (

                  <div className="row-50">
                    <div className="col jc-se">

                      <div className="row-50 animated fadeIn">
                        <div className="col-10 jc-fs"
                          style={{
                            background: "#f5f5f5",
                            borderRadius: "5px",
                            // paddingBottom: "23px",
                            boxShadow: "0 1px 3px #a8a8a8",
                          }}
                        >

                          <div className="row">
                            <div className="col jc-fe ai-fe ac-fe" onClick={e => this.closeModal(e)}
                              style={{
                                pointerEvents: "all",
                                zIndex: "1000",
                                padding: "5px 12px 0 0"
                              }}
                            >
                              <span className="animated fadeIn slower"
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
                                  {currentModal === "formResetModal" ? <p>Reset review form and start over?</p> : null}
                                  {currentModal === "formConfirm" ? <p>Ok to submit review?</p> : null}
                                  {currentModal === "formComplete" ? <p>Thank you for your review.</p> : null}
                                </div>
                              </div>
                              <div className="row">
                                <div className="col">
                                  <FormNavButton
                                    data_text={currentModal === "formResetModal" ? "Cancel" : null}
                                    data_classes="bg-grey-outline"
                                    func_navcommand="cancel"
                                  />
                                </div>
                                <div className="col">
                                  <FormNavButton
                                    data_text={currentModal === "formResetModal" ? "Reset" : null}
                                    data_classes="bg-grey-outline"
                                    func_navcommand={currentModal === "formResetModal" ? "reset" : null}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>


                        </div>
                      </div>
                    </div>
                  </div>

                ) : null
              }


              {
                currentModal === "formLocationModal" ? (

                  <div className="row-95 animated fadeIn">
                    <div className="col-11 jc-fs"
                      style={{
                        background: "#f5f5f5",
                        borderRadius: "5px",
                        boxShadow: "0 1px 3px #a8a8a8",
                      }}
                    >

                      <div className="row" style={{ height: "35px" }}>
                        <div className="col jc-fe ai-fe ac-fe" onClick={e => this.closeModal(e)}
                          style={{
                            pointerEvents: "all",
                            zIndex: "1000",
                            padding: "5px 12px 0 0",
                          }}
                        >
                          <span className="animated fadeIn slower "
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

                      <div className="row" style={{ height: "45px" }}>
                        <div className="col">
                          <LocationModal
                            data_width="85%"
                            data_height="45px"
                            data_border="0.5px solid #0abab5"
                          />
                        </div>
                      </div>

                      <div className="row"
                        style={{
                          height: "calc(100% - 80px)",
                          padding: "8px 3px 8px 3px",
                        }}
                      >
                        <div
                          id="fsReviewScroller"
                          className="col jc-fs"
                          style={{
                            whiteSpace: "nowrap",
                            overflow: "scroll",
                            WebkitOverflowScrolling: "touch",
                          }}
                        >
                          {foursquarePlaces}
                        </div>
                      </div>

                    </div>
                  </div>
                ) : null
              }


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

            
            </ReviewModal>
          ) : null
        }

*/}


            </section >

          ) : null
        }
      </React.Fragment >
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
    foursquareValue: state.foursquareState.foursquareValue,
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