import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import FieldLabel from '../../../../../../sharedComponents/formComponents/FieldLabel';
import SelectBox from '../../../../../../sharedComponents/formComponents/SelectBox';
import CheckInput from '../../../../../../sharedComponents/formComponents/CheckInput';
import TextInput from '../../../../../../sharedComponents/formComponents/TextInput';
import LocationSelector from '../../../../../../sharedComponents/formComponents/LocationSelector';
import HorizontalRule from '../../../../../../sharedComponents/general/HorizontalRule';
import { modalClosed, modalToggled } from '../../../../../../../store/actions/modalActions';
import { getPlacesFromFoursquare } from '../../../../../../../store/actions/foursquareActions';

// import FormNavButton from '../ReviewForm/FormNavButton'

import {
  formNext,
  formPrev,
  locationChosen,
  radioSelected,
  checkboxClicked,
  dropdownSelected,
  textEntered,
} from '../../../../../../../store/actions/formActions.js';



export class FormSection1 extends Component {

  nextStep = () => {
    this.props.formNext();
  }

  prevStep = () => {
    this.props.formPrev();
  }


  buttonClicked(e) {

    e.preventDefault();

    console.log("location button clicked")

    this.props.modalToggled("formLocationModal");

    //update list
    // const ctrLat = this.props.centerLatValue;
    // const ctrLng = this.props.centerLngValue;
    // this.props.getPlacesFromFoursquare(fsLL);
    // console.log("update fs in review")

  }

  placeClicked = (e) => {
    e.preventDefault();

    this.props.modalToggled("formLocationModal");
  }




  render() {

    const {
      formLocationValue,
      formRestroomTypeValue,
      formLocationNotesValue,
      formTimeOfVisitValue,
      formOutOfOrderValue,
      noBathrooomValue,
      dropdownSelected,
      textEntered,
      checkboxClicked,
    } = this.props;
    // console.log("formLocationValue: ", formLocationValue)

    return (

      <div id="reviewSection1" className="row animated fadeIn fast jc-se">
        <div className="col">

          {/* <br/> */}
          <div className="row">
            <div className="col">


              <div className="row mt-3"
                style={{
                  maxWidth: "75%",
                  maxHeight: "95px",
                }}
              >
                <div className="col jc-se" onClick={e => this.buttonClicked(e)}>
                  {
                    formLocationValue.name ? (
                      <>
                        <em><span>{formLocationValue.name}</span></em>
                        <em><span>{formLocationValue.address}</span></em>
                        <em><span>{formLocationValue.category}</span></em>
                      </>
                    ) :
                      <LocationSelector
                        data_width="100%"
                        data_height="100%"
                      />
                  }
                </div>
              </div>

              {/* <br /> */}
              <br />
              <HorizontalRule data_width="90%" />
              {/* <br /> */}

              <div id="outOfOrder" className="row">
                <div className="col-5">
                  < FieldLabel data_htmlFor="noBathrooomValue">No restroom here</ FieldLabel >
                </div>

                <div className="col-7">
                  <CheckInput
                    data_id="noBathrooomValue"
                    data_name="noBathrooomValue"
                    data_value={noBathrooomValue}
                    func_handlechange={checkboxClicked}
                  />
                </div>
              </div>


              {/* <br /> */}
              {/* <br /> */}
              <HorizontalRule data_width="90%" />
              {/* <br /> */}

              <div className="row ">
                <div className="col-5 jc-se">
                  < FieldLabel data_htmlFor="formRestroomTypeValue">Restroom used</ FieldLabel >
                </div>
                <div className="col-7">
                  <SelectBox
                    data_id="formRestroomTypeValue"
                    data_name="formRestroomTypeValue"
                    func_handlechange={dropdownSelected}
                    data_value={formRestroomTypeValue}
                  >
                    <option value="Restroom type..." disabled>Restroom type...</option>
                    <option value="Men's">Men's</option>
                    <option value="Women's">Women's</option>
                    <option value="Family/Gender-neutral">Family/Gender-neutral</option>
                  </SelectBox>
                </div>
              </div>

              <div className="row">
                <div className="col-5">
                  < FieldLabel data_htmlFor="formLocationNotesValue">Location notes</ FieldLabel >
                </div>
                <div className="col-7">
                  <TextInput
                    data_id="formLocationNotesValue"
                    data_name="formLocationNotesValue"
                    data_justify="flex-start"
                    data_placeholder="ex: 'third floor'"
                    func_handlechange={textEntered}
                    data_value={formLocationNotesValue}
                  />
                </div>
              </div>


              <div className="row ">
                <div className="col-5">
                  < FieldLabel data_htmlFor="formTimeOfVisitValue">Time of visit</ FieldLabel >
                </div>
                <div className="col-7">
                  <SelectBox
                    data_id="formTimeOfVisitValue"
                    data_name="formTimeOfVisitValue"
                    // data_width="52.5%"
                    func_handlechange={dropdownSelected}
                    data_value={formTimeOfVisitValue}
                  >
                    <option value="Time of day..." disabled>Time of day...</option>
                    <option value="Just Now">(Just now)</option>
                    <option value="Morning">Dawn</option>
                    <option value="Morning">Morning / Breafast</option>
                    <option value="Midday">Late morning - Noon / Lunch</option>
                    <option value="Afternoon">Mid afternoon</option>
                    <option value="Evening">Evening / Dinnertime</option>
                    <option value="Late night">Late night</option>
                    <option value="Middle of night">Middle of night</option>
                  </SelectBox>
                </div>
              </div>


              <HorizontalRule data_width="90%" />


              <div id="outOfOrder" className="row">
                <div className="col-5">
                  < FieldLabel data_htmlFor="formOutOfOrderValue">Out-of-Order</ FieldLabel >
                </div>

                <div className="col-7">
                  <CheckInput
                    data_id="formOutOfOrderValue"
                    data_name="formOutOfOrderValue"
                    data_value={formOutOfOrderValue}
                    func_handlechange={checkboxClicked}
                  />
                </div>
              </div>

            </div >
          </div >
          {/* <br/> */}
        </div >
      </div >
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    // reviews: state.firestore.ordered.reviews,
    // auth: state.firebase.auth
    formStepValue: state.formState.formStepValue,
    centerLatValue: state.mapState.centerLatValue,
    centerLngValue: state.mapState.centerLngValue,
    formLocationValue: state.formState.formLocationValue,
    noBathrooomValue: state.formState.noBathrooomValue,
    formRestroomTypeValue: state.formState.formRestroomTypeValue,
    formLocationNotesValue: state.formState.formLocationNotesValue,
    formTimeOfVisitValue: state.formState.formTimeOfVisitValue,
    formOutOfOrderValue: state.formState.formOutOfOrderValue,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    formNext: () => dispatch(formNext()),
    formPrev: () => dispatch(formPrev()),
    modalToggled: (selectedModal) => dispatch(modalToggled(selectedModal)),
    locationChosen: (data) => dispatch(locationChosen(data)),
    radioSelected: (data) => dispatch(radioSelected(data)),
    checkboxClicked: (data) => dispatch(checkboxClicked(data)),
    dropdownSelected: (data) => dispatch(dropdownSelected(data)),
    textEntered: (data) => dispatch(textEntered(data)),
    modalClosed: () => dispatch(modalClosed()),
    getPlacesFromFoursquare: location => dispatch(getPlacesFromFoursquare(location))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(FormSection1);