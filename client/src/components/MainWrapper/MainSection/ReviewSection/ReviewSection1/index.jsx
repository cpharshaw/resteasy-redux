import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import FieldWrapper from '../ReviewForm/FieldWrapper';
import FieldLabel from '../ReviewForm/FieldLabel';
import SelectBox from '../ReviewForm/SelectBox';
import RadioInput from '../ReviewForm/RadioInput';
import CheckInput from '../ReviewForm/CheckInput';
import TextInput from '../ReviewForm/TextInput';
import InputGroupWrapper from '../ReviewForm/InputGroupWrapper';
import PhotoUpload from '../ReviewForm/PhotoUpload';
import LocationSelector from '../ReviewForm/LocationSelector';
import HorizontalRule from '../ReviewForm/HorizontalRule';
import FormFieldGroup from '../ReviewForm/FormFieldGroup';
import FormChunk from '../ReviewForm/FormChunk';
import FormNavButton from '../ReviewForm/FormNavButton'
import {
  formNext,
  formPrev,
  locationChosen,
  radioSelected,
  checkboxClicked,
  dropdownSelected,
  textEntered,
} from '../../../../../store/actions/formActions';



export class ReviewSection1 extends Component {

  nextStep = () => {
    console.log();
    this.props.formNext();
    console.log("entry props: ", this.props.formValue)
  }

  prevStep = () => {
    console.log();
    this.props.formPrev();
  }


  render() {

    const {
      // func_handlechange,
      data_values
    } = this.props;

    const {
      formLocationValue,
      formRestroomTypeValue,
      formLocationNotesValue,
      formTimeOfVisitValue,
      formOutOfOrderValue,

      dropdownSelected,
      textEntered,
      checkboxClicked,
      radioSelected,

    } = this.props;

    return (

      <FormChunk
        className="rs"
        data_padding="20px 5px 13px 5px"
      >

        <LocationSelector
          func_selectlocation={e => { e.preventDefault(); console.log('location selector clicked') }}
          data_width="50%"
          data_height="50px"
        />

        <FormFieldGroup
          data_height="calc(100% - 150px)"
        >

          <HorizontalRule />

          < FieldWrapper>
            < FieldLabel
              data_htmlFor="formRestroomTypeValue"
              data_width="47.5%"
            >
              Restroom used <sup><sup>&nbsp;(i)</sup></sup>
            </ FieldLabel >

            <SelectBox
              data_id="formRestroomTypeValue"
              data_name="formRestroomTypeValue"
              data_width="52.5%"
              func_handlechange={dropdownSelected}
              data_value={formRestroomTypeValue}
            >
              <option value="Restroom type..." disabled>Restroom type...</option>
              <option value="Men's">Men's</option>
              <option value="Women's">Women's</option>
              <option value="Family/Gender-neutral">Family/Gender-neutral</option>
            </SelectBox>
          </ FieldWrapper >

          < FieldWrapper >
            < FieldLabel
              data_htmlFor="locationNotes"
              data_width="47.5%"
            >
              Location notes<sup><sup>&nbsp;(i)</sup></sup>
            </ FieldLabel >
            <TextInput
              data_id="formLocationNotesValue"
              data_name="formLocationNotesValue"
              data_width="52.5%"
              data_justify="flex-start"
              data_placeholder="ex: 'third floor'"
              func_handlechange={textEntered}
              data_value={formLocationNotesValue}
            />
          </ FieldWrapper >


          < FieldWrapper >
            < FieldLabel
              data_htmlFor="timeOfVisit"
              data_width="47.5%"
            >
              Time of visit <sup><sup>&nbsp;(i)</sup></sup>
            </ FieldLabel >

            <SelectBox
              data_id="formTimeOfVisitValue"
              data_name="formTimeOfVisitValue"
              data_width="52.5%"
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
          </ FieldWrapper >

          <HorizontalRule />

          < FieldWrapper >
            < FieldLabel
              data_htmlFor="outOfOrder"
              data_width="47.5%"
            // data_bgcolor="red"
            >
              Out-of-Order <sup><sup>&nbsp;(i)</sup></sup>
            </ FieldLabel >
            < InputGroupWrapper
              data_width="52.5%"
            // data_bgcolor="blue"
            >
              <CheckInput
                data_id="formOutOfOrderValue"
                data_name="formOutOfOrderValue"
                data_value={formOutOfOrderValue}
                func_handlechange={checkboxClicked}
              // data_bgcolor="orange"
              />
            </ InputGroupWrapper >
          </ FieldWrapper >

        </FormFieldGroup>


        <div
          className="rs"
          style={{
            height: "50px",
          }}
        >
          <div
            className="rs"
            style={{
              width: "12.5%",
            }}
          />
          <div
            className="rs"
            style={{
              width: "75%",
            }}
          >
            <FormNavButton
              data_text="Back"
              data_classes="bg-primary-invert-outline"
              func_navcommand="prev"
            />
            <FormNavButton
              data_text="Continue"
              data_classes="bg-primary-invert"
              func_navcommand="next"
            />
          </div>

          <button
            className="rs reset"
            style={{
              width: "12.5%",
              fontSize: "14px"
            }}
          >
            <img src="https://img.icons8.com/material-rounded/24/000000/recurring-appointment.png" />
          </button>
        </div>

      </FormChunk >
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

    locationChosen: (data) => dispatch(locationChosen(data)),
    radioSelected: (data) => dispatch(radioSelected(data)),
    checkboxClicked: (data) => dispatch(checkboxClicked(data)),
    dropdownSelected: (data) => dispatch(dropdownSelected(data)),
    textEntered: (data) => dispatch(textEntered(data)),
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(ReviewSection1);