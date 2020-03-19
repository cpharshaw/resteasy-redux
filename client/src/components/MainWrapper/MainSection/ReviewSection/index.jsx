import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';

import ReviewSection0 from './ReviewSections/ReviewSection0';
import ReviewSection1 from './ReviewSections/ReviewSection1';
import ReviewSection2 from './ReviewSections/ReviewSection2';
import ReviewSection3 from './ReviewSections/ReviewSection3';
import ReviewSection4 from './ReviewSections/ReviewSection4';
import ReviewSection5 from './ReviewSections/ReviewSection5';

import ReviewModal from '../Modals/ReviewModal';
import LocationModal from '../Modals/LocationModal';
// import ReviewModal from '../../Modals/ReviewModal';
import FormNavButton from './ReviewFormElements/FormNavButton';
import HorizontalRule from './ReviewFormElements/HorizontalRule';
import ReviewMainNav from './ReviewNav/ReviewMainNav';

import { locationChosen } from '../../../../store/actions/formActions';
import { modalClosed } from '../../../../store/actions/modalActions';

// import ReviewConfirm from './ReviewSections/ReviewSection6'; 


export class ReviewSection extends Component {

  placeSelected = e => {
    const name = e.currentTarget.getAttribute('data_placename');
    const category = e.currentTarget.getAttribute('data_placecategory');
    const distance = e.currentTarget.getAttribute('data_placedistance');
    const address = e.currentTarget.getAttribute('data_placeaddress');

    const placeObj = {
      name,
      category,
      distance,
      address
    }
    // console.log("place selected: ", placeObj)
    this.props.locationChosen(placeObj);
    this.props.modalClosed();
  }

  handleChange = (e, otherData) => {

    const target = e.target;
    const name = target.name;

    const files = target.files;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    });

    if (name === "admission") this.setState({ feeDisplay: otherData });
    // if (name === "admission") console.log("test log: ", name, value, target.value, otherData);
    // if (name !== "admission") console.log("test log: ", name, value, target.value);

    if (otherData && otherData[0] === "delete") {
      this.setState({
        imgElementArr: otherData[1]
      });
    }

    if (otherData && otherData[0] === "add") {
      this.setState({
        imgElementArr: [...this.state.imgElementArr, ...otherData[1]]
      });
    }



  };


  render() {


    // console.log('all props from review section: ', this.props)

    const {
      selectedSectionValue,
      formStepValue,
    } = this.props;

    const displayValue = selectedSectionValue === "review" ? "flex" : "none";

    const {
      formLocationModal,

      formRestroomTypeModal,
      formLocationNotesModal,
      formTimeOfVisitModal,
      formOutOfOrderModal,

      formCleanlinessModal,
      formSmellModal,
      formPrivacyModal,
      formComfortModal,
      formCapacityModal,
      formSafetyModal,
      formStyleModal,

      //page 3
      formHandicappedModal,
      formGenderNeutralModal,
      formBabyChangeModal,
      formScheduleModal,
      formAdmissionModal,
      formFeeDisplayModal,
      formFeeModal,

      //page 4
      formPhotoUploadModal,

      //page 5
      formCommentsModal,


      // other
      formResetModal
    } = this.props.modalState;

    // console.log(this.props)

    const foursquarePlaces = this.props.foursquareValue !== null && this.props.foursquareValue !== undefined ?
      this.props.foursquareValue.map((place, i) => {
        const name = place.name ? place.name : null;
        const category = place.categories ? (place.categories[0] ? place.categories[0].shortName : "") : null;
        const address = place.location.address + ", " + place.location.city + ", " + place.location.state;
        const distance = place.distance + " ft";
        return (
          <div
            id=""
            key={i + "fs"}
            className="rs"
            style={{
              flexDirection: "column",
            }}
            data_placedata={JSON.stringify(place)}
            onClick={e => this.placeSelected(e)}
            data_placename={name}
            data_placeaddress={address}
            data_placecategory={category}
            data_placedistance={distance}
          >
            <span><b>{name}</b> ({distance}) </span>
            <span>{address} </span>
            <span>{category} </span>
            <HorizontalRule />
          </div>
        )
      }) : null;




    return (
      <div
        // className="rs"
        className="rs animated fadeIn faster"
        style={{
          // all: "unset",
          display: displayValue,
          flexDirection: "column",
          alignContent: "space-between",
          justifyContent: "space-between",
          // height: "100%",
          // background: "red",
          height: "calc(100% - 55px)",
          position: "fixed",
          bottom: "55px"
        }}
      >
        {
          formStepValue === 0 ? < ReviewSection0 /> :
            <div
              className="rs"
              style={{
                // height: "calc(100%)",
                flexDirection: "column",
                // alignContent: "space-between",
                // justifyContent: "space-between",
                // background: "blue"    
              }}
            >
              {
                formStepValue === 1 ? < ReviewSection1 /> :
                  formStepValue === 2 ? < ReviewSection2 /> :
                    formStepValue === 3 ? < ReviewSection3 /> :
                      formStepValue === 4 ? < ReviewSection4 /> :
                        formStepValue === 5 || formStepValue === 6 || formStepValue === 7 ? (
                          < ReviewSection5 />
                        ) : null
              }

              {formStepValue > 0 ? < ReviewMainNav /> : null}
              {/* https://codeburst.io/modals-in-react-f6c3ff9f4701 */}

              {
                formStepValue === 6 ? (

                  <ReviewModal data_size="sm">
                    <div className="rs" style={{ flexDirection: "column" }}>
                      <h1 className="rs">
                        Ok to submit review?
                      </h1>
                      <div
                        className="rs"
                        style={{
                          height: "50px",
                          marginBottom: "20px"
                        }}>
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
                )
                  :
                  formStepValue === 7 ? (
                    <ReviewModal data_size="sm">
                      <div className="rs" style={{ flexDirection: "column" }}>
                        <h1 className="rs">
                          Thank you for your review.
                    </h1>
                        <div
                          className="rs"
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
                      className="rs"
                      style={{
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        overflowY: "auto",
                        margin: "12.5px 0 0 0 "
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


              {
                formResetModal ? (
                  <ReviewModal data_size="sm">
                    <div className="rs" style={{ flexDirection: "column" }}>
                      <h1 className="rs">
                        Reset review form and start over?
                </h1>
                      <div
                        className="rs"
                        style={{
                          height: "50px",
                          marginBottom: "20px"
                        }}
                      >
                        <FormNavButton
                          data_text="Cancel"
                          data_classes="bg-primary-invert"
                          func_navcommand="cancel"
                        />
                        <FormNavButton
                          data_text="Reset"
                          data_classes="bg-grey-outline"
                          func_navcommand="reset"
                        />
                      </div>
                    </div>
                  </ReviewModal>
                ) : null
              }
            </div>
        }

      </div >
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
    locationChosen: location => dispatch(locationChosen(location)),
    modalClosed: () => dispatch(modalClosed())
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(ReviewSection);