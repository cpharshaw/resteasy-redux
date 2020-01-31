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


export class ReviewSection3of4 extends Component {
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
          < FieldLabel data_htmlFor={"field09_input_name"}>  Gender neutral option <sup>&nbsp;(i)</sup> </ FieldLabel >
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
)(ReviewSection3of4);