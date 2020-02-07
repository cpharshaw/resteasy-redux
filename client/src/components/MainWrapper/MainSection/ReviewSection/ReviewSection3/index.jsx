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
import { formNext } from '../../../../../store/actions/formActions';
import { formPrev } from '../../../../../store/actions/formActions';


export class ReviewSection3 extends Component {
  constructor(props) {
    super(props);
    this.admissionSelected.bind(this);
    this.state = {
      feeDisplay: "hidden"
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
        feeDisplay: "visible"
      });

    } else {

      this.setState({
        feeDisplay: "hidden"
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
              data_htmlFor="handicapped"
              data_width="63%"
            >
              Handicapped accessible <sup><sup>&nbsp;(i)</sup></sup>
            </ FieldLabel >
            < InputGroupWrapper
              data_width="37%"
            >
              <CheckInput
                data_id=""
                data_value="yes"
                data_name="handicapped"
              />
            </ InputGroupWrapper >
          </ FieldWrapper >

          < FieldWrapper>
            < FieldLabel
              data_htmlFor="genderNeutral"
              data_width="63%"
            >
              Gender neutral option <sup><sup>&nbsp;(i)</sup></sup>
            </ FieldLabel >
            < InputGroupWrapper
              data_width="37%"
            >
              <CheckInput
                data_id=""
                data_value="yes"
                data_name="genderNeutral"
              />
            </ InputGroupWrapper >
          </ FieldWrapper >

          < FieldWrapper>
            < FieldLabel
              data_htmlFor="babyChange"
              data_width="63%"
            >
              Baby changing station <sup><sup>&nbsp;(i)</sup></sup>
            </ FieldLabel >
            < InputGroupWrapper
              data_width="37%"
            >
              <CheckInput
                data_id=""
                data_value="yes"
                data_name="babyChange"
              />
            </ InputGroupWrapper >
          </ FieldWrapper >

          < FieldWrapper >
            < FieldLabel
              data_htmlFor="schedule"
              data_width="63%"
            >
              Cleaning schedule visible <sup><sup>&nbsp;(i)</sup></sup>
            </ FieldLabel >
            < InputGroupWrapper
              data_width="37%"
            >
              <CheckInput
                data_id=""
                data_value="ys"
                data_name="schedule"
              />
            </ InputGroupWrapper >
          </ FieldWrapper >

          <HorizontalRule />

          < FieldWrapper >
            < FieldLabel
              data_htmlFor="admission"
              data_width="63%"
            >
              Admission <sup><sup>&nbsp;(i)</sup></sup>
            </ FieldLabel >
            <SelectBox
              data_id=""
              data_name="admission"
              data_defaultvalue="¿Gratis o no?"
              data_width="37%"
              func_input={e => this.admissionSelected(e)}
            >
              <option disabled value="¿Gratis o no?" >¿Gratis o no? </option>
              <option          value="Free/Public"   >Free/Public   </option>
              <option          value="Customers Only">Customers only</option>
              <option          value="Fee..."        >Fee...        </option>
            </SelectBox>

          </ FieldWrapper >

          < FieldWrapper
            data_visibility={this.state.feeDisplay}
          >
            < FieldLabel
              data_width="63%"
              data_htmlFor="fee"
            >
              Price ($USD)<sup><sup>&nbsp;(i)</sup></sup>
            </ FieldLabel >

            <span style={{ fontSize: "12px" }}>$</span>
            <TextInput
              data_width="37%"
              data_id=""
              data_name="fee"
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
)(ReviewSection3);