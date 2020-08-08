import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { modalToggled, modalClosed } from '../../../../../store/actions/modalActions';
import { formPrev, resetForm } from '../../../../../store/actions/formActions';
import { selectSection } from '../../../../../store/actions/sectionActions';
import { locationChosen } from '../../../../../store/actions/formActions';
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

    if (this.props.formStepValue === 7) {
      this.props.resetForm();
      this.props.selectSection("mapList");
    }

    this.props.modalClosed()

  }

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


  componentDidUpdate(prevProps, prevState, snapshot) {
    // const prevFSVal = prevProps.foursquareValue;
    // const currFSVal = this.props.foursquareValue;
    // const fsCheck = prevFSVal !== currFSVal && currFSVal;

    // if (fsCheck) {




    // }

  }



  render() {

    const {
      selectedSectionValue,
      formStepValue,
      currentModal,
      data_size,
      children,
      foursquareValue,
      selectedMarkerValue,
      selectedPlaceValue
    } = this.props;

    // console.log("typeof: ", typeof foursquareValue)



    const foursquarePlaces = !foursquareValue ? null : (

      foursquareValue.map((place, i) => {

        // console.log("fsPlace - " + i + " - ", place);

        const name = place.name ? place.name : null;
        const category = place.categories ? (place.categories[0] ? place.categories[0].shortName : "") : null;
        const address = place.location.address + ", " + place.location.city + ", " + place.location.state;
        const distance = place.distance + " ft";

        return (
          <div className="row" key={i + "fs"}>
            <div
              className="col jc-se ai-c"
              data_placedata={JSON.stringify(place)}
              onClick={e => this.placeSelected(e)}
              data_placename={name}
              data_placeaddress={address}
              data_placecategory={category}
              data_placedistance={distance}
              style={{
                flexWrap: "wrap",
                whiteSpace: "wrap",
              }}
            >
              <span className=""><b>{name}</b> ({distance}) </span>
              <span className="">{address} </span>
              <span className="">{category} </span>
              {i !== (foursquareValue.length - 1) ? <HorizontalRule /> : null}

            </div>
          </div>
        )
      })
    )

    return (
      <React.Fragment>
        {
          currentModal === "settingsModal" ? null : (

            <section
              id="modalContainer"
              className="animated fadeIn faster col ai-c"
              style={{
                position: "absolute",
                // top: selectedSectionValue === "mapList" ? "92.5px" : "0",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                backgroundColor: "rgba(197,197,197,0.55)",
                WebkitBackdropFilter: "blur(8px)",
                backdropFilter: "blur(8px)",
                zIndex: "1000",
                color: "inherit"
              }}
            >

              <div className="row animated fadeIn ac-fs"
                style={{
                  maxHeight: (
                    currentModal === "formLocationModal" ? "87.5%" :
                      currentModal === "placeModal" ? "97.5%" :
                        currentModal ? "27.5%" :
                          "50%"
                  ),
                  maxWidth: (
                    currentModal === "formLocationModal" ? "92.5%" :
                      currentModal === "placeModal" ? "95%" :
                        currentModal ? "70%" :
                          "50%"
                  ),
                  background: "#f5f5f5",
                  borderRadius: "5px",
                  boxShadow: "0 0 3px #a8a8a8",
                }}
              >




                <div className="col jc-fs ac-fs ai-s"
                  style={{
                    // background: "#f5f5f5",
                    // borderRadius: "5px",
                    // boxShadow: "0 0 3px #a8a8a8",
                  }}
                >

                  <div className="row animated fadeIn slow ac-fe "
                    style={{
                      minHeight: "40px",
                      maxHeight: "40px",
                    }}
                  >
                    <div className="col ai-fe"
                      style={{
                        pointerEvents: "all",
                        zIndex: "1000",
                      }}
                    >
                      <span className="mx-2 skip" onClick={e => this.closeModal(e)}
                        style={{
                          pointerEvents: "all",
                          fontSize: "2.5em",
                          fontWeight: "500",
                          color: "grey",
                          zIndex: '1000',
                          marginTop: ""
                        }}
                      >
                        {formStepValue !== 7 ? "×" : null}
                      </span>
                    </div>
                  </div>





                  {
                    currentModal === "placeModal" ? (

                      <div className="row" style={{ pointerEvents: "all" }}>
                        <div className="col fc">

                          <div className="row ">
                            <div className="col-2 ai-c">
                              <img className="" height="75" width="75" src={selectedMarkerValue.icon} />
                            </div>
                            <div className="col-8 bg-red">
                              <span>{selectedPlaceValue.name}</span>
                              <span>{selectedPlaceValue.location.address}</span>
                            </div>
                            <div className="col-2 ai-c"/>
                          </div>


                          <div className="row js-fg">
                            <div className="col"></div>
                          </div>
                          {/* data_placecategory={selectedPlaceValue.categories[0] ? selectedPlaceValue.categories[0].name : null}
                          data_placedistance={selectedPlaceValue.distance}

                          data_placemarker={selectedMarkerValue.icon}
                          data_placenumreviews={14}

                          data_userreviewed={true}
                          data_userbookmarked={true} */}
                        </div>
                      </div>

                    ) : null
                  }





                  {
                    currentModal === "formLocationModal" ? (

                      this.props.foursquareValue === null ? <div className="fsLoader" /> : (
                        <React.Fragment>

                          <div className="row mt-1 "
                            style={{
                              minHeight: "45px",
                              maxHeight: "45px"
                            }}
                          >
                            <div className="col mx-3 ">
                              <LocationModal
                                data_border="0.5px solid #0abab5"
                                data_classname="skip"
                              />
                            </div>
                          </div>

                          <div className="row ai-fs my-2"
                            style={{
                              height: "calc(100% - (35px + 45px))",
                              WebkitOverflowScrolling: "touch",
                              overflowY: "scroll",
                              msOverflowY: "scroll",
                              overflowX: "hidden",
                              msOverflowX: "hidden",
                            }}
                          >
                            <div
                              id="fsReviewScroller"
                              className="col jc-fs pt-1"
                              style={{
                                overflowX: "hidden",
                                msOverflowX: "hidden",
                                overflowY: "hidden",
                                msOverflowY: "hidden",
                              }}
                            >
                              {foursquarePlaces}
                            </div>
                          </div>
                        </React.Fragment>
                      )

                    ) : null
                  }





                  {
                    currentModal !== "formLocationModal" && currentModal !== "placeModal" && (currentModal || formStepValue > 5) ? (

                      <div className="row" style={{ pointerEvents: "all" }}>
                        <div className="col jc-se">

                          <div className="row">
                            <div className="col">
                              {currentModal === "formResetModal" ? <p>Reset review form and start over?</p> : null}
                              {formStepValue === 6 ? <p>Ok to submit review?</p> : null}
                              {formStepValue === 7 ? <p>Thank you for your review.</p> : null}
                            </div>
                          </div>


                          <div className="row">
                            {
                              formStepValue !== 7 ? (
                                <div className="col">
                                  <FormNavButton
                                    data_text={currentModal === "formResetModal" ? "Cancel" : formStepValue === 6 ? "Cancel" : null}
                                    data_classes="button-form-modal"
                                    data_width="100px"
                                    func_navcommand={currentModal === "formResetModal" ? "cancel" : formStepValue === 6 ? "prev" : null}
                                  />
                                </div>

                              ) : null
                            }
                            <div className="col">
                              <FormNavButton
                                data_text={currentModal === "formResetModal" ? "Reset" : formStepValue === 6 ? "Submit" : formStepValue === 7 ? "Close" : null}
                                data_classes="button-form-modal"
                                data_width="100px"
                                func_navcommand={currentModal === "formResetModal" ? "reset" : formStepValue === 6 ? "next" : formStepValue === 7 ? "finish" : null}
                              />
                            </div>

                          </div>

                        </div>
                      </div>
                    ) : null
                  }






                </div>
              </div>
            </section>
          )
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log("mainwrapper state: ", state);
  return {
    // geolocationValue: state.geolocationState.geolocationValue,
    formStepValue: state.formState.formStepValue,
    modalState: state.modalState,
    currentModal: state.modalState.currentModal,
    centerLatValue: state.mapState.centerLatValue,
    centerLngValue: state.mapState.centerLngValue,
    selectedSectionValue: state.sectionState.selectedSectionValue,
    selectedPlaceValue: state.mapState.selectedPlaceValue,
    selectedMarkerValue: state.mapState.selectedMarkerValue,
    // reviews: state.firestore.ordered.reviews,
    auth: state.firebase.auth,
    foursquareValue: state.foursquareState.foursquareValue,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // locationChosen: location => dispatch(locationChosen(location)),
    modalClosed: () => dispatch(modalClosed()),
    formPrev: () => dispatch(formPrev()),
    resetForm: () => dispatch(resetForm()),
    selectSection: (section) => dispatch(selectSection(section)),
    locationChosen: location => dispatch(locationChosen(location)),
    modalClosed: () => dispatch(modalClosed())
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(ModalContainer);
