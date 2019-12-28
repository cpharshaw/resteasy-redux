import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import FieldWrapper from './ReviewForm/FieldWrapper';
import FieldLabel from './ReviewForm/FieldLabel';
import RadioInput from './ReviewForm/RadioInput';
import RadioInputWrapper from './ReviewForm/RadioInputWrapper';


export class ReviewSection extends Component {

  render() {

    const { selectedSectionValue } = this.props;
    const displayValue = selectedSectionValue === "review" ? "flex" : "none";

    return (
      <div
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
        <form
          id="reviewForm"
          style={
            {
              // position: "relative",
              display: "flex",
              width: "100%",
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
  {/* 
    Cleanliness
    Smell
    Temperature (good enough or not?)
    Perceived safety
    Capacity
    Privacy 
  */}
  
  
          < FieldWrapper data_id="field01">
            < FieldLabel 
              data_htmlFor={"field01_input_name"} data_text={"Cleanliness"} />
            < RadioInputWrapper data_id={"field01_inputs"}>
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
            </ RadioInputWrapper>
          </FieldWrapper>



          < FieldWrapper data_id="field02">
            < FieldLabel data_htmlFor={"field02_input_name"} data_text={"Smell"} />
            < RadioInputWrapper data_id={"field02_inputs"}>
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
            </ RadioInputWrapper>
          </FieldWrapper>


          < FieldWrapper data_id="field03">
            < FieldLabel data_htmlFor={"field03_input_name"} data_text={"Privacy"} />
            < RadioInputWrapper data_id={"field03_inputs"}>
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
            </ RadioInputWrapper>
          </FieldWrapper>


          < FieldWrapper data_id="field04">
            < FieldLabel data_htmlFor={"field04_input_name"} data_text={"Temperature"} />
            < RadioInputWrapper data_id={"field04_inputs"}>
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
            </ RadioInputWrapper>
          </FieldWrapper>


          < FieldWrapper data_id="field05">
            < FieldLabel data_htmlFor={"field05_input_name"} data_text={"Capacity"} />
            < RadioInputWrapper data_id={"field05_inputs"}>
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
            </ RadioInputWrapper>
          </FieldWrapper>

          < FieldWrapper data_id="field06">
            < FieldLabel data_htmlFor={"field06_input_name"} data_text={"Perceived Safety"} />
            < RadioInputWrapper data_id={"field06_inputs"}>
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
            </ RadioInputWrapper>
          </FieldWrapper>          
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