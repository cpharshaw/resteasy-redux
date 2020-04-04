import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';


export class ModalContainer extends Component {


  render() {

    return (
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
    // modalClosed: () => dispatch(modalClosed())
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(ModalContainer);

