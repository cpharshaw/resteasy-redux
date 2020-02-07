import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import FieldWrapper from '../ReviewForm/FieldWrapper';
import FieldLabel from '../ReviewForm/FieldLabel';
import RadioInput from '../ReviewForm/RadioInput';
import CheckInput from '../ReviewForm/CheckInput';
import TextInput from '../ReviewForm/TextInput';
import InputGroupWrapper from '../ReviewForm/InputGroupWrapper';
import PhotoUpload from '../ReviewForm/PhotoUpload';
import FormNavButton from '../ReviewForm/FormNavButton';
import FormFieldGroup from '../ReviewForm/FormFieldGroup';
import FormChunk from '../ReviewForm/FormChunk';
import { formNext } from '../../../../../store/actions/formActions';
import { formPrev } from '../../../../../store/actions/formActions';



export class ReviewSection2 extends Component {
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

    const { selectedSectionValue } = this.props;
    const displayValue = selectedSectionValue === "review" ? "flex" : "none";

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
              data_width="47.5%"
              data_htmlFor="cleanliness"
            >
              Cleanliness <sup><sup>&nbsp;(i)</sup></sup>
            </ FieldLabel >
            < InputGroupWrapper
              data_width="52.5%"
            >
              {/* TODO - create a loop to create input fields using array of names */}
              <RadioInput
                data_value="1"
                data_name="cleanliness"
              />
              <RadioInput
                data_value="2"
                data_name="cleanliness"
              />
              <RadioInput
                data_value="3"
                data_name="cleanliness"
              />
              <RadioInput
                data_value="4"
                data_name="cleanliness"
              />
              <RadioInput
                data_value="5"
                data_name="cleanliness"
              />
            </ InputGroupWrapper>
          </ FieldWrapper >



          < FieldWrapper >
            < FieldLabel
              data_width="47.5%"
              data_htmlFor="smell"
            >
              Smell <sup><sup>&nbsp;(i)</sup></sup>
            </ FieldLabel >
            < InputGroupWrapper
              data_width="52.5%"
            >
              <RadioInput
                data_value="1"
                data_name="smell"
              />
              <RadioInput
                data_value="2"
                data_name="smell"
              />
              <RadioInput
                data_value="3"
                data_name="smell"
              />
              <RadioInput
                data_value="4"
                data_name="smell"
              />
              <RadioInput
                data_value="5"
                data_name="smell"
              />
            </ InputGroupWrapper>
          </ FieldWrapper >


          < FieldWrapper >
            < FieldLabel
              data_width="47.5%"
              data_htmlFor="privacy"
            >
              Privacy <sup><sup>&nbsp;(i)</sup></sup>
            </ FieldLabel >
            < InputGroupWrapper
              data_width="52.5%"
            >
              <RadioInput
                data_value="1"
                data_name="privacy"
              />
              <RadioInput
                data_value="2"
                data_name="privacy"
              />
              <RadioInput
                data_value="3"
                data_name="privacy"
              />
              <RadioInput
                data_value="4"
                data_name="privacy"
              />
              <RadioInput
                data_value="5"
                data_name="privacy"
              />
            </ InputGroupWrapper>
          </ FieldWrapper >


          < FieldWrapper >
            < FieldLabel
              data_width="47.5%"
              data_htmlFor="comfort"
            >
              Comfort <sup><sup>&nbsp;(i)</sup></sup>
            </ FieldLabel >
            < InputGroupWrapper
              data_width="52.5%"
            >
              <RadioInput
                data_value="1"
                data_name="comfort"
              />
              <RadioInput
                data_value="2"
                data_name="comfort"
              />
              <RadioInput
                data_value="3"
                data_name="comfort"
              />
              <RadioInput
                data_value="4"
                data_name="comfort"
              />
              <RadioInput
                data_value="5"
                data_name="comfort"
              />
            </ InputGroupWrapper>
          </ FieldWrapper >


          < FieldWrapper >
            < FieldLabel
              data_width="47.5%"
              data_htmlFor="capacity"
            >
              Capacity / Size <sup><sup>&nbsp;(i)</sup></sup>
            </ FieldLabel >
            < InputGroupWrapper
              data_width="52.5%"
            >
              <RadioInput
                data_value="1"
                data_name="capacity"
              />
              <RadioInput
                data_value="2"
                data_name="capacity"
              />
              <RadioInput
                data_value="3"
                data_name="capacity"
              />
              <RadioInput
                data_value="4"
                data_name="capacity"
              />
              <RadioInput
                data_value="5"
                data_name="capacity"
              />
            </ InputGroupWrapper>
          </ FieldWrapper >

          < FieldWrapper >
            < FieldLabel
              data_width="47.5%"
              data_htmlFor="safety"
            >
              Perceived Safety <sup><sup>&nbsp;(i)</sup></sup>
            </ FieldLabel >
            < InputGroupWrapper
              data_width="52.5%"
            >
              <RadioInput
                data_value="1"
                data_name="safety"
              />
              <RadioInput
                data_value="2"
                data_name="safety"
              />
              <RadioInput
                data_value="3"
                data_name="safety"
              />
              <RadioInput
                data_value="4"
                data_name="safety"
              />
              <RadioInput
                data_value="5"
                data_name="safety"
              />
            </ InputGroupWrapper>
          </ FieldWrapper >

          < FieldWrapper >
            < FieldLabel
              data_width="47.5%"
              data_htmlFor="style"
            >
              Style / Poshness <sup><sup>&nbsp;(i)</sup></sup>
            </ FieldLabel >
            < InputGroupWrapper
              data_width="52.5%"
            >
              <RadioInput
                data_value="1"
                data_name="style"
              />
              <RadioInput
                data_value="2"
                data_name="style"
              />
              <RadioInput
                data_value="3"
                data_name="style"
              />
              <RadioInput
                data_value="4"
                data_name="style"
              />
              <RadioInput
                data_value="5"
                data_name="style"
              />
            </ InputGroupWrapper>
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
)(ReviewSection2);