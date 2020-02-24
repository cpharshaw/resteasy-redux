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

  render() {

    const {
      formRestroomTypeValue,
      formLocationNotesValue,
      formTimeOfVisitValue,
      formOutOfOrderValue,

      dropdownSelected,
      textEntered,
      checkboxClicked,

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
              Restroom used
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
              data_htmlFor="formLocationNotesValue"
              data_width="47.5%"
            >
              Location notes
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
              data_htmlFor="formTimeOfVisitValue"
              data_width="47.5%"
            >
              Time of visit 
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
              data_htmlFor="formOutOfOrderValue"
              data_width="47.5%"
            // data_bgcolor="red"
            >
              Out-of-Order 
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

        < ReviewMainNav />

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