import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import FieldWrapper from './ReviewForm/FieldWrapper';
import FieldLabel from './ReviewForm/FieldLabel';
import RadioInput from './ReviewForm/RadioInput';
import CheckInput from './ReviewForm/CheckInput';
import TextInput from './ReviewForm/TextInput';
import InputGroupWrapper from './ReviewForm/InputGroupWrapper';


export class ReviewSection extends Component {
  constructor(props) {
    super(props);
    this.admissionSelected.bind(this);
    this.state = {
      feeDisplay: "none"
    }
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
        style={
          {
            position: "relative",
            display: displayValue,
            top: "10px",
            width: "100%",
            height: "calc(100% - 20px)",
            // height: "100%",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            alignContent: "center",
            margin: "0 auto",
            padding: "0",
            border: "0",
            // background: "orange",
            overflowY: "scroll",
          }
        }
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
            data_placeholder="ex: third floor restroom"
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

          <hr
            style={
              {
                borderTop: "1px dotted lightgrey",
                width: "100%"
              }
            }
          />

          < FieldWrapper data_id="field08" >
            < FieldLabel data_htmlFor={"field08_input_name"}> Handicapped accessible <sup>&nbsp;(i)</sup> </ FieldLabel >
            < InputGroupWrapper data_id={"field08_inputs"} >
              <CheckInput
                data_id="field08_input01"
                data_value="field08_input01_value"
                data_name="field08_input_name"
              />
            </ InputGroupWrapper >
          </ FieldWrapper >

          < FieldWrapper data_id="field09" >
            < FieldLabel data_htmlFor={"field09_input_name"}> Family/Gender-Neutral option <sup>&nbsp;(i)</sup> </ FieldLabel >
            < InputGroupWrapper data_id={"field09_inputs"} >
              <CheckInput
                data_id="field09_input01"
                data_value="field09_input01_value"
                data_name="field09_input_name"
              />
            </ InputGroupWrapper >
          </ FieldWrapper >

          < FieldWrapper data_id="field10" >
            < FieldLabel data_htmlFor={"field10_input_name"}> Baby changing station <sup>&nbsp;(i)</sup> </ FieldLabel >
            < InputGroupWrapper data_id={"field10_inputs"} >
              <CheckInput
                data_id="field10_input01"
                data_value="field10_input01_value"
                data_name="field10_input_name"
              />
            </ InputGroupWrapper >
          </ FieldWrapper >

          < FieldWrapper >
            < FieldLabel data_htmlFor={"field11_input_name"}> Cleaning schedule visible <sup>&nbsp;(i)</sup> </ FieldLabel >
            < InputGroupWrapper data_id={"field11_inputs"} >
              <CheckInput
                data_id="field11_input01"
                data_value="field11_input01_value"
                data_name="field11_input_name"
              />
            </ InputGroupWrapper >
          </ FieldWrapper >

          <hr
            style={
              {
                borderTop: "1px dotted lightgrey",
                width: "100%"
              }
            }
          />

          < FieldWrapper >
            < FieldLabel data_htmlFor={"field12_input_name"}> Admission <sup>&nbsp;(i)</sup> </ FieldLabel >
            <select
              id=""
              className=""
              name="admission"
              defaultValue="¿Gratis o no?"
              onInput={e => this.admissionSelected(e)}
              style={
                {
                  display: "flex",
                  width: "50%",
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
                  color: "grey",
                  // background: "red",
                }
              }

            >
              <option disabled value="¿Gratis o no?" >¿Gratis o no?</option>
              <option value="Free/Public">Free/Public</option>
              <option value="Customers Only">Customers only</option>
              <option value="Fee...">Fee...</option>

            </select>
          </ FieldWrapper >


          < FieldWrapper data_display={this.state.feeDisplay}>
            < FieldLabel data_htmlFor={"feeInput"}>
              Price ($USD)<sup>&nbsp;(i)</sup>
            </ FieldLabel >

            <span style={{ fontSize: "12px" }}>$</span>
            <TextInput
              data_id="feeInput"
              data_name="feeInput"
            />
          </ FieldWrapper >


        </form>


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
    selectedSectionValue: ownProps.display
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(ReviewSection);