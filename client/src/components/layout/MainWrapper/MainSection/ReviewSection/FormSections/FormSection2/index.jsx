import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import FieldWrapper from '../../../../../../sharedComponents/formComponents/FieldWrapper';
import FieldLabel from '../../../../../../sharedComponents/formComponents/FieldLabel';
import RadioInput from '../../../../../../sharedComponents/formComponents/RadioInput';
import HorizontalRule from '../../../../../../sharedComponents/general/HorizontalRule';
import {
  formNext,
  formPrev,
  locationChosen,
  radioSelected,
  checkboxClicked,
  dropdownSelected,
  textEntered,
} from '../../../../../../../store//actions/formActions';

export class FormSection2 extends Component {


  nextStep = () => {
    this.props.formNext();
  }

  prevStep = () => {
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

    const {
      formCleanlinessValue,
      formSmellValue,
      formPrivacyValue,
      formComfortValue,
      formCapacityValue,
      formSafetyValue,
      formStyleValue,

      radioSelected,

    } = this.props;


    return (
      <div id="reviewSection2" className="row animated fadeIn fast jc-se ">
        <div className="col">

          <div className="row">
            <div className="col-6">
              &nbsp;
              < FieldLabel
                data_text="*Cleanliness"
                data_htmlFor="formCleanlinessValue"
              />
            </div>
            <div className="col-6">
              <div className="row">
                {/* TODO - create a loop to create input fields using array of names */}
                <div className="col">
                  <span style={{ fontStyle: "italic", color: "#A9A9A9", fontSize: "11px" }}>1</span>
                  <RadioInput
                    data_value="1"
                    data_name="formCleanlinessValue"
                    data_checked={formCleanlinessValue === "1" ? true : false}
                    func_handlechange={radioSelected}
                  />
                </div>
                {/* <span>|</span> */}
                <div className="col">
                  <span style={{ fontStyle: "italic", color: "#A9A9A9", fontSize: "11px" }}>-</span>
                  <RadioInput
                    data_value="2"
                    data_name="formCleanlinessValue"
                    data_checked={formCleanlinessValue === "2" ? true : false}
                    func_handlechange={radioSelected}
                  />
                </div>
                <div className="col">
                  <span style={{ fontStyle: "italic", color: "#A9A9A9", fontSize: "11px" }}>-</span>
                  <RadioInput
                    data_value="3"
                    data_name="formCleanlinessValue"
                    data_checked={formCleanlinessValue === "3" ? true : false}
                    func_handlechange={radioSelected}
                  />
                </div>
                <div className="col">
                  <span style={{ fontStyle: "italic", color: "#A9A9A9", fontSize: "11px" }}>-</span>
                  <RadioInput
                    data_value="4"
                    data_name="formCleanlinessValue"
                    data_checked={formCleanlinessValue === "4" ? true : false}
                    func_handlechange={radioSelected}
                  />
                </div>
                <div className="col">
                  <span style={{ fontStyle: "italic", color: "#A9A9A9", fontSize: "11px" }}>5</span>
                  <RadioInput
                    data_value="5"
                    data_name="formCleanlinessValue"
                    data_checked={formCleanlinessValue === "5" ? true : false}
                    func_handlechange={radioSelected}
                  />
                </div>
                {/* <RadioInput
                  data_value="6"
                  data_name="formCleanlinessValue"
                  data_checked={formCleanlinessValue === "6" ? true : false}
                  func_handlechange={radioSelected}
                /> */}
                {/* <span>|</span> */}
                {/* <RadioInput
                  data_value="7"
                  data_name="formCleanlinessValue"
                  data_checked={formCleanlinessValue === "7" ? true : false}
                  func_handlechange={radioSelected}
                /> */}
              </div>
            </div>

          </div>

          {/* <div className="row">
            <div className="col-6">
              < FieldLabel
                data_text="Smell"
                data_htmlFor="formSmellValue"
              />
            </div>
            <div className="col-6">
              <div className="row">
                <RadioInput
                  data_value="1"
                  data_name="formSmellValue"
                  data_checked={formSmellValue === "1" ? true : false}
                  func_handlechange={radioSelected}
                />
                <RadioInput
                  data_value="2"
                  data_name="formSmellValue"
                  data_checked={formSmellValue === "2" ? true : false}
                  func_handlechange={radioSelected}
                />
                <RadioInput
                  data_value="3"
                  data_name="formSmellValue"
                  data_checked={formSmellValue === "3" ? true : false}
                  func_handlechange={radioSelected}
                />
                <RadioInput
                  data_value="4"
                  data_name="formSmellValue"
                  data_checked={formSmellValue === "4" ? true : false}
                  func_handlechange={radioSelected}
                />
                <RadioInput
                  data_value="5"
                  data_name="formSmellValue"
                  data_checked={formSmellValue === "5" ? true : false}
                  func_handlechange={radioSelected}
                />
              </div>
            </div>
          </div> */}


          <div className="row">
            <div className="col-6">
              <FieldLabel
                data_text="*Privacy"
                data_htmlFor="formPrivacyValue"
              />
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col">
                  <RadioInput
                    data_value="1"
                    data_name="formPrivacyValue"
                    data_checked={formPrivacyValue === "1" ? true : false}
                    func_handlechange={radioSelected}
                  />
                </div>
                <div className="col">
                  {/* <span>|</span> */}
                  <RadioInput
                    data_value="2"
                    data_name="formPrivacyValue"
                    data_checked={formPrivacyValue === "2" ? true : false}
                    func_handlechange={radioSelected}
                  />
                </div>
                <div className="col">
                  <RadioInput
                    data_value="3"
                    data_name="formPrivacyValue"
                    data_checked={formPrivacyValue === "3" ? true : false}
                    func_handlechange={radioSelected}
                  />
                </div>
                <div className="col">
                  <RadioInput
                    data_value="4"
                    data_name="formPrivacyValue"
                    data_checked={formPrivacyValue === "4" ? true : false}
                    func_handlechange={radioSelected}
                  />
                </div>
                <div className="col">
                  <RadioInput
                    data_value="5"
                    data_name="formPrivacyValue"
                    data_checked={formPrivacyValue === "5" ? true : false}
                    func_handlechange={radioSelected}
                  />
                </div>

                {/* <RadioInput
                  data_value="6"
                  data_name="formPrivacyValue"
                  data_checked={formPrivacyValue === "6" ? true : false}
                  func_handlechange={radioSelected}
                /> */}
                {/* <span>|</span> */}
                {/* <RadioInput
                  data_value="7"
                  data_name="formPrivacyValue"
                  data_checked={formPrivacyValue === "7" ? true : false}
                  func_handlechange={radioSelected}
                /> */}
              </div>
            </div>

          </div>



          {/* <div className="row">
            <div className="col-6">
              < FieldLabel
                data_text="Capacity / Size"
                data_htmlFor="formCapacityValue"
              />
            </div>
            <div className="col-6">
              <div className="row">
                <RadioInput
                  data_value="1"
                  data_name="formCapacityValue"
                  data_checked={formCapacityValue === "1" ? true : false}
                  func_handlechange={radioSelected}
                />
                <RadioInput
                  data_value="2"
                  data_name="formCapacityValue"
                  data_checked={formCapacityValue === "2" ? true : false}
                  func_handlechange={radioSelected}
                />
                <RadioInput
                  data_value="3"
                  data_name="formCapacityValue"
                  data_checked={formCapacityValue === "3" ? true : false}
                  func_handlechange={radioSelected}
                />
                <RadioInput
                  data_value="4"
                  data_name="formCapacityValue"
                  data_checked={formCapacityValue === "4" ? true : false}
                  func_handlechange={radioSelected}
                />
                <RadioInput
                  data_value="5"
                  data_name="formCapacityValue"
                  data_checked={formCapacityValue === "5" ? true : false}
                  func_handlechange={radioSelected}
                />
              </div>
            </div>
          </div> */}

          <div className="row">
            <div className="col-6">
              < FieldLabel
                data_text="*Perceived Safety"
                data_htmlFor="formSafetyValue"
              />

            </div>
            <div className="col-6">
              <div className="row">
                <div className="col">
                  <RadioInput
                    data_value="1"
                    data_name="formSafetyValue"
                    data_checked={formSafetyValue === "1" ? true : false}
                    func_handlechange={radioSelected}
                  />
                </div>
                <div className="col">
                  <RadioInput
                    data_value="2"
                    data_name="formSafetyValue"
                    data_checked={formSafetyValue === "2" ? true : false}
                    func_handlechange={radioSelected}
                  />
                </div>
                <div className="col">
                  <RadioInput
                    data_value="3"
                    data_name="formSafetyValue"
                    data_checked={formSafetyValue === "3" ? true : false}
                    func_handlechange={radioSelected}
                  />
                </div>
                <div className="col">
                  <RadioInput
                    data_value="4"
                    data_name="formSafetyValue"
                    data_checked={formSafetyValue === "4" ? true : false}
                    func_handlechange={radioSelected}
                  />
                </div>
                <div className="col">
                  <RadioInput
                    data_value="5"
                    data_name="formSafetyValue"
                    data_checked={formSafetyValue === "5" ? true : false}
                    func_handlechange={radioSelected}
                  />
                </div>
                {/* <RadioInput
                  data_value="6"
                  data_name="formSafetyValue"
                  data_checked={formSafetyValue === "6" ? true : false}
                  func_handlechange={radioSelected}
                /> */}
                {/* <span>|</span> */}
                {/* <RadioInput
                  data_value="7"
                  data_name="formSafetyValue"
                  data_checked={formSafetyValue === "7" ? true : false}
                  func_handlechange={radioSelected}
                /> */}
              </div>
            </div>

          </div>


          <div className="row">
            <div className="col-6">

              < FieldLabel
                data_text="*Comfort"
                data_htmlFor="formComfortValue"
              />

            </div>
            <div className="col-6">
              <div className="row">
                <div className="col">
                  <RadioInput
                    data_value="1"
                    data_name="formComfortValue"
                    data_checked={formComfortValue === "1" ? true : false}
                    func_handlechange={radioSelected}
                  />
                </div>
                <div className="col">
                  <RadioInput
                    data_value="2"
                    data_name="formComfortValue"
                    data_checked={formComfortValue === "2" ? true : false}
                    func_handlechange={radioSelected}
                  />
                </div>
                <div className="col">
                  <RadioInput
                    data_value="3"
                    data_name="formComfortValue"
                    data_checked={formComfortValue === "3" ? true : false}
                    func_handlechange={radioSelected}
                  />
                </div>
                <div className="col">
                  <RadioInput
                    data_value="4"
                    data_name="formComfortValue"
                    data_checked={formComfortValue === "4" ? true : false}
                    func_handlechange={radioSelected}
                  />
                </div>
                <div className="col">
                  <RadioInput
                    data_value="5"
                    data_name="formComfortValue"
                    data_checked={formComfortValue === "5" ? true : false}
                    func_handlechange={radioSelected}
                  />
                </div>

                {/* <RadioInput
                  data_value="6"
                  data_name="formComfortValue"
                  data_checked={formComfortValue === "6" ? true : false}
                  func_handlechange={radioSelected}
                /> */}
                {/* <span>|</span> */}
                {/* <RadioInput
                  data_value="7"
                  data_name="formComfortValue"
                  data_checked={formComfortValue === "7" ? true : false}
                  func_handlechange={radioSelected}
                /> */}
              </div>
            </div>

          </div>

          {/* <HorizontalRule data_width="90%" /> */}

          <div className="row">
            <div className="col-6">
              < FieldLabel
                data_text="*Style / Poshness"
                data_htmlFor="formStyleValue"
              />

            </div>
            <div className="col-6">
              <div className="row">
                <div className="col">
                  <RadioInput
                    data_value="1"
                    data_name="formStyleValue"
                    data_checked={formStyleValue === "1" ? true : false}
                    func_handlechange={radioSelected}
                  />
                </div>
                <div className="col">
                  <RadioInput
                    data_value="2"
                    data_name="formStyleValue"
                    data_checked={formStyleValue === "2" ? true : false}
                    func_handlechange={radioSelected}
                  />
                </div>
                <div className="col">
                  <RadioInput
                    data_value="3"
                    data_name="formStyleValue"
                    data_checked={formStyleValue === "3" ? true : false}
                    func_handlechange={radioSelected}
                  />
                </div>
                <div className="col">
                  <RadioInput
                    data_value="4"
                    data_name="formStyleValue"
                    data_checked={formStyleValue === "4" ? true : false}
                    func_handlechange={radioSelected}
                  />
                </div>
                <div className="col">
                  <RadioInput
                    data_value="5"
                    data_name="formStyleValue"
                    data_checked={formStyleValue === "5" ? true : false}
                    func_handlechange={radioSelected}
                  />
                </div>
                {/* <RadioInput
                  data_value="6"
                  data_name="formStyleValue"
                  data_checked={formStyleValue === "6" ? true : false}
                  func_handlechange={radioSelected}
                /> */}
                {/* <span>|</span> */}
                {/* <RadioInput
                  data_value="7"
                  data_name="formStyleValue"
                  data_checked={formStyleValue === "7" ? true : false}
                  func_handlechange={radioSelected}
                /> */}
              </div>
            </div>

          </div>


        </div>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  // console.log("mainwrapper state: ", state);
  return {
    formValue: state.formState.formValue,
    // reviews: state.firestore.ordered.reviews,
    // auth: state.firebase.auth
    formCleanlinessValue: state.formState.formCleanlinessValue,
    formSmellValue: state.formState.formSmellValue,
    formPrivacyValue: state.formState.formPrivacyValue,
    formComfortValue: state.formState.formComfortValue,
    formCapacityValue: state.formState.formCapacityValue,
    formSafetyValue: state.formState.formSafetyValue,
    formStyleValue: state.formState.formStyleValue,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    formNext: () => dispatch(formNext()),
    formPrev: () => dispatch(formPrev()),

    locationChosen: (data) => dispatch(locationChosen(data)),
    radioSelected: (data) => dispatch(radioSelected(data)),
    checkboxClicked: (data) => dispatch(checkboxClicked(data)),
    dropdownSelected: (data) => dispatch(dropdownSelected(data)),
    textEntered: (data) => dispatch(textEntered(data)),
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(FormSection2);