import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import FieldWrapper from '../../ReviewFormElements/FieldWrapper';
import FieldLabel from '../../ReviewFormElements/FieldLabel';
import SelectBox from '../../ReviewFormElements/SelectBox';
import CheckInput from '../../ReviewFormElements/CheckInput';
import TextInput from '../../ReviewFormElements/TextInput';
import InputGroupWrapper from '../../ReviewFormElements/InputGroupWrapper';
import LocationSelector from '../../ReviewFormElements/LocationSelector';
import HorizontalRule from '../../ReviewFormElements/HorizontalRule';
import FormFieldGroup from '../../ReviewFormElements/FormFieldGroup';
import FormChunk from '../../ReviewFormElements/FormChunk';
import { modalClosed } from '../../../../../../store/actions/modalActions';
import { modalToggled } from '../../../../../../store/actions/modalActions';
// import FormNavButton from '../ReviewForm/FormNavButton'

import ReviewMainNav from '../../ReviewNav/ReviewMainNav';

import {
  formNext,
  formPrev,
  locationChosen,
  radioSelected,
  checkboxClicked,
  dropdownSelected,
  textEntered,
} from '../../../../../../store/actions/formActions.js';



export class ReviewSection1 extends Component {

  nextStep = () => {
    this.props.formNext();
  }

  prevStep = () => {
    this.props.formPrev();
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

      dropdownSelected,
      textEntered,
      checkboxClicked,

    } = this.props;
    // console.log("formLocationValue: ", formLocationValue)

    return (

      <div id="revewSection" className="container-fluid jc-se"
        style={{
          padding: "15px 5px 5px 5px",
        }}
      >

        <div className="row-15">
          <div className="col">

            {
              formLocationValue.name ? (
                <div
                  id=""
                  className="rs"
                  style={{
                    flexDirection: "column",
                    minWidth: "75%",
                    width: "fit-content",
                    maxWidth: "100%",
                    minHeight: "90px",
                    height: "fit-content"
                  }}
                  // data_placedata={JSON.stringify(place)}
                  onClick={e => this.placeClicked(e)}
                >
                  <span>{formLocationValue.name} </span>
                  <span>{formLocationValue.address} </span>
                  <span>{formLocationValue.category} </span>
                </div>
              ) : (
                  <LocationSelector
                    data_width="75%"
                    data_height="90px"
                  />
                )
            }
          </div>
        </div>

        <div className="row">
          <div className="col">
            <HorizontalRule />
          </div>
        </div>

        <div className="row-75">
          <div className="col jc-se">

            <div className="row-15">
              <div className="col-5">
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

            <div className="row-15">
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


            <div className="row-15">
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
                  <option value="Morning">Morning</option>
                  <option value="Midday">Midday</option>
                  <option value="Afternoon">Late afternoon</option>
                  <option value="Evening">Evening</option>
                  <option value="Late night">Late night</option>
                  <option value="Middle of night">Middle of night</option>
                </SelectBox>
              </div>
            </div>

            <div className="row-15" >
              <div className="col">
                <HorizontalRule />
              </div>
            </div>

            <div id="outOfOrder" className="row-15">
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
    // reviews: state.firestore.ordered.reviews,
    // auth: state.firebase.auth
    formStepValue: state.formState.formStepValue,

    formLocationValue: state.formState.formLocationValue,
    formRestroomTypeValue: state.formState.formRestroomTypeValue,
    formLocationNotesValue: state.formState.formLocationNotesValue,
    formTimeOfVisitValue: state.formState.formTimeOfVisitValue,
    formOutOfOrderValue: state.formState.formOutOfOrderValue,

    selectedSectionValue: ownProps.display
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
    modalClosed: () => dispatch(modalClosed())
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(ReviewSection1);