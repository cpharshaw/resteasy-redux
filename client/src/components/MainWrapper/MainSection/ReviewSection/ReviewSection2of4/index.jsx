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
import { formNext } from '../../../../../store/actions/formActions';
import { formPrev } from '../../../../../store/actions/formActions';



export class ReviewSection2of4 extends Component {
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
      <div
        id="reviewSection"
        className="rs"
        style={{
            // display: displayValue,
            // height: "calc(100% - 42px)",
            flexDirection: "column",
            justifyContent: "flex-start",
            overflowY: "scroll",
        }}
      >


          < FieldWrapper data_id="field01" >
            < FieldLabel data_htmlFor={"field01_input_name"}> Cleanliness <sup>&nbsp;(i)</sup> </ FieldLabel >
            < InputGroupWrapper data_id={"field01_inputs"} >
              {/* TODO - create a loop to create input fields using array of names */}
              <RadioInput
                data_id="field01_input01"
                data_value="field01_input01_value"
                data_name="field01_input_name"
              />
              <RadioInput
                data_id="field01_input02"
                data_value="field01_input02_value"
                data_name="field01_input_name"
              />
              <RadioInput
                data_id="field01_input03"
                data_value="field01_input03_value"
                data_name="field01_input_name"
              />
              <RadioInput
                data_id="field01_input04"
                data_value="field01_input04_value"
                data_name="field01_input_name"
              />
              <RadioInput
                data_id="field01_input05"
                data_value="field01_input05_value"
                data_name="field01_input_name"
              />
            </ InputGroupWrapper>
          </ FieldWrapper >



          < FieldWrapper data_id="field02" >
            < FieldLabel data_htmlFor={"field02_input_name"}> Smell <sup>&nbsp;(i)</sup> </ FieldLabel >
            < InputGroupWrapper data_id={"field02_inputs"} >
              <RadioInput
                data_id="field02_input01"
                data_value="field02_input01_value"
                data_name="field02_input_name"
              />
              <RadioInput
                data_id="field02_input02"
                data_value="field02_input02_value"
                data_name="field02_input_name"
              />
              <RadioInput
                data_id="field02_input03"
                data_value="field02_input03_value"
                data_name="field02_input_name"
              />
              <RadioInput
                data_id="field02_input04"
                data_value="field02_input04_value"
                data_name="field02_input_name"
              />
              <RadioInput
                data_id="field02_input05"
                data_value="field02_input05_value"
                data_name="field02_input_name"
              />
            </ InputGroupWrapper>
          </ FieldWrapper >


          < FieldWrapper data_id="field03" >
            < FieldLabel data_htmlFor={"field03_input_name"}> Privacy <sup>&nbsp;(i)</sup> </ FieldLabel >
            < InputGroupWrapper data_id={"field03_inputs"} >
              <RadioInput
                data_id="field03_input01"
                data_value="field03_input01_value"
                data_name="field03_input_name"
              />
              <RadioInput
                data_id="field03_input02"
                data_value="field03_input02_value"
                data_name="field03_input_name"
              />
              <RadioInput
                data_id="field03_input03"
                data_value="field03_input03_value"
                data_name="field03_input_name"
              />
              <RadioInput
                data_id="field03_input04"
                data_value="field03_input04_value"
                data_name="field03_input_name"
              />
              <RadioInput
                data_id="field03_input05"
                data_value="field03_input05_value"
                data_name="field03_input_name"
              />
            </ InputGroupWrapper>
          </ FieldWrapper >


          < FieldWrapper data_id="field04" >
            < FieldLabel data_htmlFor={"field04_input_name"}> Comfort <sup>&nbsp;(i)</sup> </ FieldLabel >
            < InputGroupWrapper data_id={"field04_inputs"} >
              <RadioInput
                data_id="field04_input01"
                data_value="field04_input01_value"
                data_name="field04_input_name"
              />
              <RadioInput
                data_id="field04_input02"
                data_value="field04_input02_value"
                data_name="field04_input_name"
              />
              <RadioInput
                data_id="field04_input03"
                data_value="field04_input03_value"
                data_name="field04_input_name"
              />
              <RadioInput
                data_id="field04_input04"
                data_value="field04_input04_value"
                data_name="field04_input_name"
              />
              <RadioInput
                data_id="field04_input05"
                data_value="field04_input05_value"
                data_name="field04_input_name"
              />
            </ InputGroupWrapper>
          </ FieldWrapper >


          < FieldWrapper data_id="field05" >
            < FieldLabel data_htmlFor={"field05_input_name"}> Capacity / Size <sup>&nbsp;(i)</sup> </ FieldLabel >
            < InputGroupWrapper data_id={"field05_inputs"} >
              <RadioInput
                data_id="field05_input01"
                data_value="field05_input01_value"
                data_name="field05_input_name"
              />
              <RadioInput
                data_id="field05_input02"
                data_value="field05_input02_value"
                data_name="field05_input_name"
              />
              <RadioInput
                data_id="field05_input03"
                data_value="field05_input03_value"
                data_name="field05_input_name"
              />
              <RadioInput
                data_id="field05_input04"
                data_value="field05_input04_value"
                data_name="field05_input_name"
              />
              <RadioInput
                data_id="field05_input05"
                data_value="field05_input05_value"
                data_name="field05_input_name"
              />
            </ InputGroupWrapper>
          </ FieldWrapper >

          < FieldWrapper data_id="field06" >
            < FieldLabel data_htmlFor={"field06_input_name"}> Perceived Safety <sup>&nbsp;(i)</sup> </ FieldLabel >
            < InputGroupWrapper data_id={"field06_inputs"} >
              <RadioInput
                data_id="field06_input01"
                data_value="field06_input01_value"
                data_name="field06_input_name"
              />
              <RadioInput
                data_id="field06_input02"
                data_value="field06_input02_value"
                data_name="field06_input_name"
              />
              <RadioInput
                data_id="field06_input03"
                data_value="field06_input03_value"
                data_name="field06_input_name"
              />
              <RadioInput
                data_id="field06_input04"
                data_value="field06_input04_value"
                data_name="field06_input_name"
              />
              <RadioInput
                data_id="field06_input05"
                data_value="field06_input05_value"
                data_name="field06_input_name"
              />
            </ InputGroupWrapper>
          </ FieldWrapper >

          < FieldWrapper data_id="field07" >
            < FieldLabel data_htmlFor={"field07_input_name"}> Style / Poshness <sup>&nbsp;(i)</sup> </ FieldLabel >
            < InputGroupWrapper data_id={"field07_inputs"} >
              <RadioInput
                data_id="field07_input01"
                data_value="field07_input01_value"
                data_name="field07_input_name"
              />
              <RadioInput
                data_id="field07_input02"
                data_value="field07_input02_value"
                data_name="field07_input_name"
              />
              <RadioInput
                data_id="field07_input03"
                data_value="field07_input03_value"
                data_name="field07_input_name"
              />
              <RadioInput
                data_id="field07_input04"
                data_value="field07_input04_value"
                data_name="field07_input_name"
              />
              <RadioInput
                data_id="field07_input05"
                data_value="field07_input05_value"
                data_name="field07_input_name"
              />
            </ InputGroupWrapper>
          </ FieldWrapper >

        <button
          onClick={this.nextStep}
          className="rs button bg-primary text-white"
        >
          <em>
            Next
          </em>
        </button>
        <button
          onClick={this.prevStep}
          className="rs button bg-primary text-white"
        >
          <em>
            Previous
          </em>
        </button>

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
)(ReviewSection2of4);