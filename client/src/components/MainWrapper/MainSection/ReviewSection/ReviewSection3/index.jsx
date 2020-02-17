import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import FieldWrapper from '../ReviewForm/FieldWrapper';
import FieldLabel from '../ReviewForm/FieldLabel';
import RadioInput from '../ReviewForm/RadioInput';
import CheckInput from '../ReviewForm/CheckInput';
import TextInput from '../ReviewForm/TextInput';
import SelectBox from '../ReviewForm/SelectBox';
import InputGroupWrapper from '../ReviewForm/InputGroupWrapper';
import FormNavButton from '../ReviewForm/FormNavButton';
import FormFieldGroup from '../ReviewForm/FormFieldGroup';
import HorizontalRule from '../ReviewForm/HorizontalRule';
import PhotoUpload from '../ReviewForm/PhotoUpload';
import FormChunk from '../ReviewForm/FormChunk';
import {
  formNext,
  formPrev,
  locationChosen,
  radioSelected,
  checkboxClicked,
  dropdownSelected,
  textEntered,
  feeChosen,
  
} from '../../../../../store/actions/formActions';


export class ReviewSection3 extends Component {
  constructor(props) {
    super(props);
    this.admissionSelected.bind(this);
  }

  nextStep = () => {
    console.log();
    this.props.formNext();
  }

  prevStep = () => {
    console.log();
    this.props.formPrev();
  }

  componentDidUpdate() {
    const fee = document.getElementById("formFeeValue");
    if (fee) {
      fee.focus();
    }
  }



  admissionSelected(e) {

    this.props.dropdownSelected(e);

    const cost = e.target.value;

    console.log("admission selected", cost)

    if (cost === "Fee...") {
      this.props.feeChosen("visible");
    } else {
      this.props.feeChosen("hidden");
    }

  }


  render() {

    const { selectedSectionValue } = this.props;
    const displayValue = selectedSectionValue === "review" ? "flex" : "`none`";

    const {
      // func_handlechange,
      data_values
    } = this.props;

    const {
      formHandicappedValue,
      formGenderNeutralValue,
      formBabyChangeValue,
      formScheduleValue,
      formAdmissionValue,
      formFeeDisplayValue,
      formFeeValue,
      feeChosen,

      dropdownSelected,
      checkboxClicked,
      textEntered,
    } = this.props;

    // const { handicapped, genderNeutral, babyChange, schedule, admission, feeDisplay, fee } = data_values;

    return (
      <FormChunk
        className="rs"
        data_padding="20px 5px 13px 5px"
      >


        <FormFieldGroup
          data_height="calc(100% - 75px)"
        >

          < FieldWrapper >
            < FieldLabel
              data_htmlFor="formHandicappedValue"
              data_width="63%"
            >
              Handicapped accessible <sup><sup>&nbsp;(i)</sup></sup>
            </ FieldLabel >
            < InputGroupWrapper
              data_width="37%"
            >
              <CheckInput
                data_id="formHandicappedValue"
                data_name="formHandicappedValue"
                data_value={formHandicappedValue}
                func_handlechange={checkboxClicked}
              />
            </ InputGroupWrapper >
          </ FieldWrapper >

          < FieldWrapper>
            < FieldLabel
              data_htmlFor="formGenderNeutralValue"
              data_width="63%"
            >
              Gender neutral option <sup><sup>&nbsp;(i)</sup></sup>
            </ FieldLabel >
            < InputGroupWrapper
              data_width="37%"
            >
              <CheckInput
                data_id="formGenderNeutralValue"
                data_name="formGenderNeutralValue"
                data_value={formGenderNeutralValue}
                func_handlechange={checkboxClicked}
              />
            </ InputGroupWrapper >
          </ FieldWrapper >

          < FieldWrapper>
            < FieldLabel
              data_htmlFor="formBabyChangeValue"
              data_width="63%"
            >
              Baby changing station <sup><sup>&nbsp;(i)</sup></sup>
            </ FieldLabel >
            < InputGroupWrapper
              data_width="37%"
            >
              <CheckInput
                data_id="formBabyChangeValue"
                data_name="formBabyChangeValue"
                data_value={formBabyChangeValue}
                func_handlechange={checkboxClicked}            
              />
            </ InputGroupWrapper >
          </ FieldWrapper >

          < FieldWrapper >
            < FieldLabel
              data_htmlFor="formScheduleValue"
              data_width="63%"
            >
              Cleaning schedule visible <sup><sup>&nbsp;(i)</sup></sup>
            </ FieldLabel >
            < InputGroupWrapper
              data_width="37%"
            >
              <CheckInput
                data_id="formScheduleValue"
                data_name="formScheduleValue"
                data_value={formScheduleValue}
                func_handlechange={checkboxClicked}     
              />
            </ InputGroupWrapper >
          </ FieldWrapper >

          <HorizontalRule />

          < FieldWrapper >
            < FieldLabel
              data_htmlFor="formAdmissionValue"
              data_width="63%"
            >
              Admission <sup><sup>&nbsp;(i)</sup></sup>
            </ FieldLabel >
            <SelectBox
              data_id="formAdmissionValue"
              data_name="formAdmissionValue"
              // data_defaultvalue="¿Gratis o no?"
              data_width="37%"
              func_handlechange={e => this.admissionSelected(e)}
              data_value={formAdmissionValue}
            >
              <option disabled value="¿Gratis o no?" >¿Gratis o no? </option>
              <option          value="Free/Public"   >Free/Public   </option>
              <option          value="Customers Only">Customers only</option>
              <option          value="Fee..."        >Fee...        </option>
            </SelectBox>

          </ FieldWrapper >

          < FieldWrapper
            data_visibility={formFeeDisplayValue}
          >
          {/* {console.log(feeDisplay)} */}
            < FieldLabel
              data_width="63%"
              data_htmlFor="formFeeValue"
            >
              Price ($USD)<sup><sup>&nbsp;(i)</sup></sup>
            </ FieldLabel >

            <span style={{ fontSize: "12px" }}>$</span>

            <TextInput
              data_width="37%"
              data_id="formFeeValue"
              data_name="formFeeValue"
              data_value={formFeeValue}
              func_handlechange={textEntered}
            />
          </ FieldWrapper >

        </FormFieldGroup>

        <div
          className="rs"
          style={{
            // position: "absolute",
            height: "50px",
            // padding: "8px",
            // justifyContent: "space-evenly"
          }}>
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
    formValue: state.formState.formValue,
    // reviews: state.firestore.ordered.reviews,
    // auth: state.firebase.auth
    formHandicappedValue: state.formState.formHandicappedValue,
    formGenderNeutralValue: state.formState.formGenderNeutralValue,
    formBabyChangeValue: state.formState.formBabyChangeValue,
    formScheduleValue: state.formState.formScheduleValue,
    formAdmissionValue: state.formState.formAdmissionValue,
    formFeeDisplayValue: state.formState.formFeeDisplayValue,
    formFeeValue: state.formState.formFeeValue,

    selectedSectionValue: ownProps.display
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    formNext: () => dispatch(formNext()),
    formPrev: () => dispatch(formPrev()),

    checkboxClicked: (data) => dispatch(checkboxClicked(data)),
    dropdownSelected: (data) => dispatch(dropdownSelected(data)),
    textEntered: (data) => dispatch(textEntered(data)),
    feeChosen: (data) => dispatch(feeChosen(data))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(ReviewSection3);