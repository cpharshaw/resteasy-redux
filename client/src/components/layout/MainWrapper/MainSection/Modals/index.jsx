import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { modalToggled, modalClosed } from '../../../../../store/actions/modalActions';
import FormNavButton from '../../../../sharedComponents/formComponents/FormNavButton';
import HorizontalRule from '../../../../sharedComponents/general/HorizontalRule';
import ModalFormReset from './ModalFormReset';
import LocationModal from './ModalFormLocationSelector';

export class ModalContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      foursquarePlaces: null
    }
    
  }



  closeModal(e) {
    e.preventDefault();

    if (this.props.formStepValue === 6) {
      this.props.formPrev();
    }

    this.props.modalClosed()

  }

  componentDidMount() {
    const scrollWindow = document.getElementById("fsReviewScroller")

  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    const prevFSVal = prevProps.foursquareValue;
    const currFSVal = this.props.foursquareValue;
    const fsCheck = prevFSVal !== currFSVal && currFSVal;

    if (fsCheck) {
      const tempFS = currFSVal.map((place, i) => {
        const name = place.name ? place.name : null;
        const category = place.categories ? (place.categories[0] ? place.categories[0].shortName : "") : null;
        const address = place.location.address + ", " + place.location.city + ", " + place.location.state;
        const distance = place.distance + " ft";

        return (
          // <React.Fragment>
          <div className="row" key={i + "fs"}
            style={{
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
                flexWrap: "nowrap",
                whiteSpace: "nowrap",
                // background: i % 2 === 0 ? "darkgrey" : "lightgrey",
              }}
            >
              <span className=""><b>{name}</b> ({distance}) </span>
              <span className="">{address} </span>
              <span className="">{category} </span>
              {i !== (currFSVal.length - 1) ? <HorizontalRule /> : null}

            </div>
          </div>
          // </React.Fragment> 
        )
      })

      this.setState({
        foursquarePlaces: tempFS
      })
    }

  }



  render() {

    const {
      selectedSectionValue,
      formStepValue,
      currentModal,
      data_size,
      children
    } = this.props;






    return (
      <React.Fragment>
        {
          currentModal !== "settingsModal" ? (

            <section
              id="modalContainer"
              className="animated fadeIn faster col"
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                backgroundColor: "rgba(197,197,197,0.55)",
                WebkitBackdropFilter: "blur(8px)",
                backdropFilter: "blur(8px)",
                zIndex: "1000",
              }}
            >

              {
                currentModal !== "formLocationModal" && currentModal !== "" ? (

                  <div className="row animated fadeIn">
                    <div className="col jc-se">

                      <div className="row">
                        <div className="col-10 jc-fs"
                          style={{
                            background: "#f5f5f5",
                            borderRadius: "5px",
                            // paddingBottom: "23px",
                            boxShadow: "0 1px 3px #a8a8a8",
                          }}
                        >

                          <div className="row animated fadeIn slow bg-orange"
                            style={{
                              // maxHeight: "40px"
                            }}
                          >
                            <div className="col jc-fe ai-fe ac-fe bg-red" onClick={e => this.closeModal(e)}
                              style={{
                                pointerEvents: "all",
                                zIndex: "1000",
                                padding: "5px 12px 0 0"
                              }}
                            >
                              <span className="mr-4 bg-blue"
                                style={{
                                  pointerEvents: "all",

                                  fontSize: "1.25em",
                                  // lineHeight: "0",
                                  color: "grey",
                                  // fontWeight: "500",
                                  zIndex: '1000'
                                }}
                              >
                                &times;
                              </span>
                            </div>
                          </div>

                          <div className="row" style={{ pointerEvents: "all" }}>
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

                  <div className="row animated fadeIn ac-fs" style={{ overflow: "hidden" }}>

                    <div className="col jc-fs ac-fs ai-fs"
                      style={{
                        background: "#f5f5f5",
                        borderRadius: "5px",
                        boxShadow: "0 1px 3px #a8a8a8",
                        overflow: "hidden"
                      }}
                    >

                      <div className="row-f-1 animated fadeIn slow ac-fs bg-orange"
                        style={{
                          // maxHeight: "40px"
                        }}
                      >

                        <div className="col jc-c ai-fe ac-c bg-red" onClick={e => this.closeModal(e)}
                          style={{
                            pointerEvents: "all",
                            zIndex: "1000",
                            // padding: "5px 12px 0 0",
                          }}
                        >
                          <span className="mr-2 bg-blue"
                            style={{
                              pointerEvents: "all",
                              // height: "100%",
                              fontSize: "1.25em",
                              // lineHeight: "0",
                              color: "grey",
                              // fontWeight: "500",
                              zIndex: '1000'
                            }}
                          >
                            &times;
                          </span>
                        </div>
                      </div>

                      <div className="row-f-1">
                        <div className="col">
                          <LocationModal
                            // data_width="85%"
                            // data_height="45px"
                            data_border="0.5px solid #0abab5"
                            data_classname="mx-2"
                          />
                        </div>
                      </div>

                      <div className="row-f-11 ai-fs"
                        style={{
                          padding: "8px 3px 8px 3px",
                          // minHeight: "100%",
                          height: this.state.foursquareValue !== null ? "100%" : "100px",
                          overflowY: "scroll",
                          msOverflowY: "scroll",
                          WebkitOverflowScrolling: "touch",
                          overflowX: "hidden",
                          msOverflowX: "hidden",
                        }}
                      >
                        <div
                          id="fsReviewScroller"
                          className="col jc-fs"
                          style={{
                            height: this.state.foursquareValue !== null ? "fit-content !important" : "10000px",
                            bottom: "0",
                            whiteSpace: "nowrap",
                            overflowX: "hidden",
                            msOverflowX: "hidden",
                            overflowY: "hidden",
                            msOverflowY: "hidden",
                          }}
                        >
                          {/* https://stackoverflow.com/questions/35469227/overflow-y-not-working-in-safari-inside-a-modal */}
                          {this.state.foursquareValue !== null ? this.state.foursquarePlaces : null}
                        </div>
                      </div>

                    </div>
                  </div>
                ) : null
              }




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

