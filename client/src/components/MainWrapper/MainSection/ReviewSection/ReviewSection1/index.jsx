import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import FieldWrapper from '../ReviewForm/FieldWrapper';
import FieldLabel from '../ReviewForm/FieldLabel';
import SelectBox from '../ReviewForm/SelectBox';
import SelectOption from '../ReviewForm/SelectBox/SelectOption';
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
import { formNext } from '../../../../../store/actions/formActions';
import { formPrev } from '../../../../../store/actions/formActions';



export class ReviewSection1 extends Component {
  constructor(props) {
    super(props);
    this.admissionSelected.bind(this);
    this.state = {
      feeDisplay: "none"
    }
  }

  nextStep = () => {
    console.log();
    this.props.formNext();
    console.log("entry props: ", this.props.formValue)
  }

  prevStep = () => {
    console.log();
    this.props.formPrev();
  }


  componentDidUpdate() {
    const fee = document.getElementById("feeInput");
    if (fee) {
      fee.focus();
    }
  }


  admissionSelected(e) {

    const cost = e.target.value

    if (cost === "Fee...") {

      this.setState({
        feeDisplay: "flex"
      });

    } else {

      this.setState({
        feeDisplay: "none"
      });

    }

  }


  render() {

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
              data_htmlFor="restroomType"
              data_width="47.5%"
            >
              Restroom used <sup><sup>&nbsp;(i)</sup></sup>
            </ FieldLabel >

            <SelectBox
              data_id="restroomType"
              data_name="restroomType"
              data_defaultvalue="Restroom type..."
              data_width="52.5%"
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
              data_id="locationNotes"
              data_name="locationNotes"
              data_width="52.5%"
              data_justify="flex-start"
              data_placeholder="'third floor restroom'"
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
              data_id="timeOfVisit"
              data_name="timeOfVisit"
              data_defaultvalue="Time of day..."
              data_width="52.5%"
            >
              <option value="Time of day..." disabled>Time of day...</option>
              <option value="Morning">(Just now)</option>
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
              data_bgcolor="red"
            >
              Out-of-Order <sup><sup>&nbsp;(i)</sup></sup>
            </ FieldLabel >
            < InputGroupWrapper
              data_width="52.5%"
              data_bgcolor="blue"
            >
              <CheckInput
                data_id="outOfOrder"
                data_name="outOfOrder"
                data_value="yes"
                data_bgcolor="orange"
              />
            </ InputGroupWrapper >
          </ FieldWrapper >

        </FormFieldGroup>


        <div
          className="rs"
          style={{
            height: "50px",
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
    // reviews: state.firestore.ordered.reviews,
    // auth: state.firebase.auth
    formValue: state.formState.formValue,
    selectedSectionValue: ownProps.display
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    formNext: () => dispatch(formNext()),
    formPrev: () => dispatch(formPrev()),
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(ReviewSection1);