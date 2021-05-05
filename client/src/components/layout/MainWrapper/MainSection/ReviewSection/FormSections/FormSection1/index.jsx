import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import FieldLabel from '../../../../../../sharedComponents/formComponents/FieldLabel';
import SelectBox from '../../../../../../sharedComponents/formComponents/SelectBox';
import CheckInput from '../../../../../../sharedComponents/formComponents/CheckInput';
import TextInput from '../../../../../../sharedComponents/formComponents/TextInput';
import LocationSelector from '../../../../../../sharedComponents/formComponents/LocationSelector';
import HorizontalRule from '../../../../../../sharedComponents/general/HorizontalRule';
import { modalClosed, modalToggled } from '../../../../../../../store/actions/modalActions';
import { getPlacesFromFoursquare } from '../../../../../../../store/actions/foursquareActions';

// import FormNavButton from '../ReviewForm/FormNavButton'

import {
  formNext,
  formPrev,
  locationChosen,
  radioSelected,
  checkboxClicked,
  dropdownSelected,
  textEntered,
} from '../../../../../../../store/actions/formActions.js';



export class FormSection1 extends Component {

  nextStep = () => {
    this.props.formNext();
  }

  prevStep = () => {
    this.props.formPrev();
  }


  buttonClicked(e) {

    e.preventDefault();

    // console.log("location button clicked")

    this.props.modalToggled("formLocationModal");

    //update list
    // const ctrLat = this.props.centerLatValue;
    // const ctrLng = this.props.centerLngValue;
    // this.props.getPlacesFromFoursquare(fsLL);
    // console.log("update fs in review")

  }

  placeClicked = (e) => {
    e.preventDefault();

    this.props.modalToggled("formLocationModal");
  }

  noRestroomSelected(e) {

    this.props.dropdownSelected(e);

    const cost = e.target.value;

    // console.log("admission selected", cost)

    if (cost === "Fee...") {
      this.props.feeChosen("visible");
    } else {
      this.props.feeChosen("hidden");
    }

  }



  render() {

    const {
      formLocationValue,
      formRestroomTypeValue,
      formLocationNotesValue,
      formHHOfVisitValue,
      formMMOfVisitValue,
      formAMPMOfVisitValue,
      formOutOfOrderValue,
      noBathrooomValue,
      dropdownSelected,
      textEntered,
      checkboxClicked,
    } = this.props;
    // console.log("formLocationValue: ", formLocationValue)

    return (

      <div id="reviewSection1" className="row animated fadeIn fast jc-se">
        <div className="col">

          {/* <br/> */}
          <div className="row">
            <div className="col">


              <div className="row mt-3"
                style={{
                  maxWidth: "75%",
                  maxHeight: "95px",
                }}
              >
                <div className="col jc-se" onClick={e => this.buttonClicked(e)}>
                  {
                    formLocationValue.name ? (
                      <>
                        <em><span>{formLocationValue.name}</span></em>
                        <em><span>{formLocationValue.address}</span></em>
                        <em><span>{formLocationValue.category}</span></em>
                      </>
                    ) :
                      <LocationSelector
                        data_width="100%"
                        data_height="100%"
                      />
                  }
                </div>
              </div>

              {/* <br /> */}
              <br />
              <HorizontalRule data_width="90%" />
              {/* <br /> */}

              {/* <div id="outOfOrder" className="row">
                <div className="col-5">
                  < FieldLabel data_htmlFor="noBathrooomValue">No restroom here</ FieldLabel >
                </div>

                <div className="col-7">
                  <CheckInput
                    data_id="noBathrooomValue"
                    data_name="noBathrooomValue"
                    data_value={noBathrooomValue}
                    func_handlechange={checkboxClicked}
                  />
                </div>
              </div> */}


              {/* <br /> */}
              {/* <br /> */}
              {/* <HorizontalRule data_width="90%" /> */}
              {/* <br /> */}

              <div className="row ">
                <div className="col-5 jc-se">
                  < FieldLabel data_htmlFor="formRestroomTypeValue">*Restroom used</ FieldLabel >
                </div>
                <div className="col-7">
                  <SelectBox
                    data_id="formRestroomTypeValue"
                    data_name="formRestroomTypeValue"
                    func_handlechange={dropdownSelected}
                    data_value={formRestroomTypeValue}
                  >
                    <option value="Restroom type..." disabled>Restroom type...</option>
                    <option value="mens">Men's</option>
                    <option value="womens">Women's</option>
                    <option value="genderNeutral">Family/Gender-neutral</option>
                  </SelectBox>
                </div>
              </div>


              <div className="row ">
                <div className="col-5">
                  < FieldLabel data_htmlFor="formHHOfVisitValue">*Est. time of visit</ FieldLabel >
                </div>
                <div className="col-7">
                  <div className="row">
                    {/* <option value="Time of day..." disabled>Time of day...</option>
                    <option value="Just Now">(Just now)</option>
                    <option value="Morning">Dawn</option>
                    <option value="Morning">Morning / Breafast</option>
                    <option value="Midday">Late morning - Noon / Lunch</option>
                    <option value="Afternoon">Mid afternoon</option>
                    <option value="Evening">Evening / Dinnertime</option>
                    <option value="Late night">Late night</option>
                    <option value="Middle of night">Middle of night</option> */}
                    <SelectBox
                      data_id="formHHOfVisitValue"
                      data_name="formHHOfVisitValue"
                      func_handlechange={dropdownSelected}
                      data_value={formHHOfVisitValue}
                      data_fontsize="12px"
                    >
                      <option value="HH" disabled>HH</option>
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </SelectBox>
                    <SelectBox
                      data_id="formMMOfVisitValue"
                      data_name="formMMOfVisitValue"
                      func_handlechange={dropdownSelected}
                      data_value={formMMOfVisitValue}
                      data_fontsize="12px"
                    >
                      <option value="MM" disabled>MM</option>
                      <option value="00">00</option>
                      <option value="15">15</option>
                      <option value="30">30</option>
                      <option value="45">45</option>
                      {/* <option value="Just Now">(Just now)</option>
                    <option value="Morning">Dawn</option>
                    <option value="Morning">Morning / Breafast</option>
                    <option value="Midday">Late morning - Noon / Lunch</option>
                    <option value="Afternoon">Mid afternoon</option>
                    <option value="Evening">Evening / Dinnertime</option>
                    <option value="Late night">Late night</option>
                    <option value="Middle of night">Middle of night</option> */}
                    </SelectBox>
                    <SelectBox
                      data_id="formAMPMOfVisitValue"
                      data_name="formAMPMOfVisitValue"
                      func_handlechange={dropdownSelected}
                      data_value={formAMPMOfVisitValue}
                      data_fontsize="10px"
                    >
                      <option value="am/pm" disabled>am/pm</option>
                      <option value="am">am</option>
                      <option value="pm">pm</option>
                      {/* <option value="Just Now">(Just now)</option>
                    <option value="Morning">Dawn</option>
                    <option value="Morning">Morning / Breafast</option>
                    <option value="Midday">Late morning - Noon / Lunch</option>
                    <option value="Afternoon">Mid afternoon</option>
                    <option value="Evening">Evening / Dinnertime</option>
                    <option value="Late night">Late night</option>
                    <option value="Middle of night">Middle of night</option> */}
                    </SelectBox>
                  </div>
                </div>
              </div>


              <div className="row">
                <div className="col-5">
                  < FieldLabel data_htmlFor="formLocationNotesValue">Location notes</ FieldLabel >
                </div>
                <div className="col-7">
                  <TextInput
                    data_id="formLocationNotesValue"
                    data_name="formLocationNotesValue"
                    data_justify="flex-start"
                    data_placeholder="ex: 'third floor'"
                    func_handlechange={textEntered}
                    data_value={formLocationNotesValue}
                  />
                </div>
              </div>



              {/* <HorizontalRule data_width="90%" /> */}


              <div id="outOfOrder" className="row">
                <div className="col-5">
                  < FieldLabel data_htmlFor="formOutOfOrderValue">Out-of-Order</ FieldLabel >
                </div>

                <div className="col-7">
                  <CheckInput
                    data_id="formOutOfOrderValue"
                    data_name="formOutOfOrderValue"
                    data_value={formOutOfOrderValue}
                    func_handlechange={checkboxClicked}
                  />
                </div>
              </div>

            </div >
          </div >
          {/* <br/> */}
        </div >
      </div >
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    // reviews: state.firestore.ordered.reviews,
    // auth: state.firebase.auth
    formStepValue: state.formState.formStepValue,
    centerLatValue: state.mapState.centerLatValue,
    centerLngValue: state.mapState.centerLngValue,
    formLocationValue: state.formState.formLocationValue,
    noBathrooomValue: state.formState.noBathrooomValue,
    formRestroomTypeValue: state.formState.formRestroomTypeValue,
    formLocationNotesValue: state.formState.formLocationNotesValue,
    formHHOfVisitValue: state.formState.formHHOfVisitValue,
    formMMOfVisitValue: state.formState.formMMOfVisitValue,
    formAMPMOfVisitValue: state.formState.formAMPMOfVisitValue,
    formOutOfOrderValue: state.formState.formOutOfOrderValue,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    formNext: () => dispatch(formNext()),
    formPrev: () => dispatch(formPrev()),
    modalToggled: (selectedModal) => dispatch(modalToggled(selectedModal)),
    locationChosen: (data) => dispatch(locationChosen(data)),
    radioSelected: (data) => dispatch(radioSelected(data)),
    checkboxClicked: (data) => dispatch(checkboxClicked(data)),
    dropdownSelected: (data) => dispatch(dropdownSelected(data)),
    textEntered: (data) => dispatch(textEntered(data)),
    modalClosed: () => dispatch(modalClosed()),
    getPlacesFromFoursquare: location => dispatch(getPlacesFromFoursquare(location))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(FormSection1);