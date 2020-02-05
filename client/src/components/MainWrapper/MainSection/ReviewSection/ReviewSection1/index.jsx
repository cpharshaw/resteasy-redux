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

          {/* <HorizontalRule /> */}

          < FieldWrapper>
            < FieldLabel
              data_htmlFor={"field00_input_name"}
              data_width="47.5%"
            >
              Restroom used <sup>&nbsp;(i)</sup>
            </ FieldLabel >

            <SelectBox
              data_id=""
              data_name="restroomUsed"
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
              data_htmlFor={"locNotesInput"}
              data_width="47.5%"
            >
              Location notes<sup>&nbsp;(i)</sup>
            </ FieldLabel >
            <TextInput
              data_id="locNotesInput"
              data_name="locNotesInput"
              data_width="52.5%"
              data_justify="flex-start"
              // data_textalign="left"
              data_placeholder="'third floor restroom'"
            />
          </ FieldWrapper >


          < FieldWrapper >
            < FieldLabel
              data_htmlFor={"field00_input_name"}
              data_width="47.5%"
            >
              Time of visit <sup>&nbsp;(i)</sup>
            </ FieldLabel >
            <SelectBox
              data_id=""
              data_name="restroomUsed"
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

          {/* <HorizontalRule /> */}

          < FieldWrapper data_id="field08" >
            < FieldLabel
              // data_htmlFor={""}
              data_width="47.5%"
            >
              Out-of-Order <sup>&nbsp;(i)</sup>
            </ FieldLabel >
            < InputGroupWrapper
              data_id={"field08_inputs"}
              data_width="52.5%"
            >
              <CheckInput
                data_id="field08_input01"
                data_value="field08_input01_value"
                data_name="field08_input_name"
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