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



export class ReviewSection1of4 extends Component {
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
        // id="reviewSection"
        // className="rs"
        style={{
        //     display: displayValue,
        //     height: "calc(100% - 42px)",
            flexDirection: "column",
            justifyContent: "flex-start",
            overflowY: "scroll",
        }}
      >

        < FieldWrapper data_id="field01" >
          <button
            id=""
            className=""
            type="button"
            style={
              {
                display: "flex",
                width: "50%",
                height: "75%",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                border: "0.5px dashed lightgrey",
                margin: "0 auto",
                padding: "0",
                borderRadius: "0",
                background: "inherit"
              }
            }
          >
            <em><span
              style={
                {
                  color: "grey",
                  fontSize: "14.5px"
                }
              }
            >
              Select location...
              </span></em>
          </button>
        </ FieldWrapper >

        <form
          id="reviewForm"
          style={
            {
              // position: "relative",
              display: "flex",
              width: "97%",
              height: "100%",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              alignContent: "flex-start",
              margin: "0 auto",
              padding: "0",
              border: "0",
              // background: "purple"
            }
          }
        >


          < FieldWrapper data_display={"flex"}>
            < FieldLabel data_htmlFor={"locNotesInput"}>
              Location notes<sup>&nbsp;(i)</sup>
            </ FieldLabel >

            <TextInput
              data_id="locNotesInput"
              data_name="locNotesInput"
              data_type="text"
              data_width="66%"
              data_placeholder="ex: 'third floor restroom', '2nd stall'"
            />
          </ FieldWrapper >


          <hr
            style={
              {
                borderTop: "1px dotted lightgrey",
                width: "90%"
              }
            }
          />


          < FieldWrapper data_id="field00" >
            < FieldLabel data_htmlFor={"field00_input_name"}> Restroom used <sup>&nbsp;(i)</sup> </ FieldLabel >
            <select
              id=""
              className=""
              name="restroomUsed"
              defaultValue="Restroom type..."
              style={
                {
                  display: "flex",
                  width: "66%",
                  height: "75%",
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                  border: "0",
                  borderBottom: "1px dotted lightgrey",
                  // borderTop: "1px dotted lightgrey",
                  margin: "0 auto",
                  padding: "0",
                  borderRadius: "0",
                  background: "inherit",
                  fontSize: "13.5px",
                  fontStyle: "italic",
                  textAlign: "center",
                  color: "grey"
                }
              }
            >
              <option value="Restroom type..." disabled>Restroom type...</option>
              <option value="Men's">Men's</option>
              <option value="Women's">Women's</option>
              <option value="Family/Gender-neutral">Family/Gender-neutral</option>

            </select>
          </ FieldWrapper >


          < FieldWrapper data_id="field00" >
            < FieldLabel data_htmlFor={"field00_input_name"}> Time of visit <sup>&nbsp;(i)</sup> </ FieldLabel >
            <select
              id=""
              className=""
              name="restroomUsed"
              defaultValue="Time of day..."
              style={
                {
                  display: "flex",
                  width: "66%",
                  height: "75%",
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                  border: "0",
                  borderBottom: "1px dotted lightgrey",
                  // borderTop: "1px dotted lightgrey",
                  margin: "0 auto",
                  padding: "0",
                  borderRadius: "0",
                  background: "inherit",
                  fontSize: "13.5px",
                  fontStyle: "italic",
                  textAlign: "center",
                  color: "grey"
                }
              }
            >
              <option value="Time of day..." disabled>Time of day...</option>
              <option value="Morning">(Just now)</option>
              <option value="Morning">Morning</option>
              <option value="Midday">Midday</option>
              <option value="Afternoon">Late afternoon</option>
              <option value="Evening">Evening</option>
              <option value="Late night">Late night</option>
              <option value="Middle of night">Middle of night</option>

            </select>
          </ FieldWrapper >


          <hr
            style={
              {
                borderTop: "1px dotted lightgrey",
                width: "90%"
              }
            }
          />

          < FieldWrapper data_id="field08" >
            < FieldLabel data_htmlFor={"field08_input_name"}> Out-of-Order <sup>&nbsp;(i)</sup> </ FieldLabel >
            < InputGroupWrapper data_id={"field08_inputs"} >
              <CheckInput
                data_id="field08_input01"
                data_value="field08_input01_value"
                data_name="field08_input_name"
              />
            </ InputGroupWrapper >
          </ FieldWrapper >


        </form>

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
)(ReviewSection1of4);