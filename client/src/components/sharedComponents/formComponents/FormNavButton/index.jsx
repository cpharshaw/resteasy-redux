import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { formNext, formPrev, formMissingAlert, resetForm, submitFormProcessing, submitForm } from '../../../../store/actions/formActions';
import { selectSection } from '../../../../store/actions/sectionActions';
import { modalToggled, modalClosed } from '../../../../store/actions/modalActions';
import { confirmReviewDelete, cancelReviewDelete } from '../../../../store/actions/formActions';

export class FormNavButton extends Component {

  nextStep = (e) => {
    e.preventDefault();

    // console.log("button clicked")

    let outOfOrderInd;

    if (
      this.props.formStepValue === 1
      &&
      this.props.formOutOfOrderValue
    ) {
      outOfOrderInd = "outOfOrder";
    }

    if (
      (
        this.props.formStepValue === 1
        &&
        (
          Object.keys(this.props.formLocationValue).length === 0
          ||
          this.props.formRestroomTypeValue === "Restroom type..."
          ||
          this.props.formTimeOfVisitValue === "Time of day..."
        )
      )
      ||
      (
        this.props.formStepValue === 2
        &&
        (
          !this.props.formCleanlinessValue
          ||
          !this.props.formPrivacyValue
          ||
          !this.props.formComfortValue
          ||
          !this.props.formSafetyValue
          ||
          !this.props.formStyleValue
        )
      )
      ||
      (
        this.props.formStepValue === 3
        &&
        (
          (this.props.formAdmissionValue === "¿Gratis o no?")
          ||
          (
            (
              (this.props.formAdmissionValue !== "Free" && this.props.formAdmissionValue !== "¿Gratis o no?")
              ||
              this.props.formAdmissionValue === "Pay/Customers-Only"
            )
            &&
            (this.props.formFeeValue === "" || !this.props.formFeeValue)
          )
        )
      )

    ) {
      console.log("missing form value(s)", this.props.formMissingValue);
      this.props.formMissingAlert();
    }

    else {
      this.props.formNext(outOfOrderInd);
    }


  }

  prevStep = (e) => {
    e.preventDefault();

    let outOfOrderInd;

    // console.log("button clicked")

    if (
      this.props.formStepValue === 5
      &&
      this.props.formOutOfOrderValue
    ) {
      outOfOrderInd = "outOfOrder";
    }

    this.props.formPrev(outOfOrderInd);

  }

  submitForm = () => {
    console.log("submitForm", this.props.formProcessingValue)
    if (!this.props.formProcessingValue && !this.props.formRes) this.props.submitForm();
    // if (!this.props.formProcessingValue && !this.props.formRes) this.props.submitFormProcessing();
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    let formProcessingValueUpdate = false;
    formProcessingValueUpdate = prevProps.formProcessingValue !== this.props.formProcessingValue;


    if (formProcessingValueUpdate && this.props.formProcessingValue && !this.props.formRes) {
      // console.log("prevProps.formProcessingValue is: ", prevProps.formProcessingValue);
      // console.log("this.props.formProcessingValue is: ", this.props.formProcessingValue);
      // console.log("XXX formProcessingValueUpdate is: ", formProcessingValueUpdate);
      // this.props.submitForm();
    }
  }

  finishForm = () => {
    this.props.resetForm();
    this.props.selectSection("mapList");
  };


  modalCancel = (func_navcommand) => {
    console.log("exit clicked, func_navcommand ---> ", func_navcommand)
    this.props.modalClosed();
    if (func_navcommand === "exit") {
      this.props.selectSection("myStuff");
      this.props.resetForm();
    }
  };


  cancelDelete = (e) => {
    e.preventDefault();
    console.log("cancelDelete clicked");
    this.props.cancelReviewDelete();
    this.props.modalClosed();
  };

  confirmDelete = (e) => {
    e.preventDefault();
    console.log("confirmDelete clicked");
    this.props.confirmReviewDelete();
  }


  resetForm = e => {
    e.preventDefault();
    // console.log("reset clicked")
    this.props.resetForm();
    this.props.modalClosed();
  }


  render() {

    const {
      func_navcommand,
      data_borderradius,
      data_text,
      data_textcolor,
      data_classes,
      data_width,
      data_flexgrow,
      data_margin,
      children,
      formEditModeValue
    } = this.props;
    // console.log("func_navcommand ---> ", func_navcommand)
    return (
      <button
        onClick={
          func_navcommand === "" ? null :
            func_navcommand === "next" ? this.nextStep :
              func_navcommand === "prev" ? this.prevStep :
                func_navcommand === "cancel" ? () => this.modalCancel() :
                  func_navcommand === "exit" ? () => this.modalCancel(this.props.func_navcommand) :
                    func_navcommand === "cancelDelete" ? this.cancelDelete : // part of deleting a review
                      func_navcommand === "confirmDelete" ? this.confirmDelete : // part of deleting a review
                        func_navcommand === "reset" ? this.resetForm :
                          func_navcommand === "submit" ? this.submitForm :
                            func_navcommand === "finish" ? this.finishForm : null
        }
        className={"" + data_classes + ""}
        style={{
          width: data_width ? data_width : "10%",
          // height: data_height ? data_height : "fit-content",
          color: data_textcolor ? data_textcolor : null,
          backgroundColor: "grey !important",
          // maxHeight: "42px",
          // borderRadius: "3px",
          padding: "9px 0 9px 0",
          // flexGrow: data_flexgrow ? data_flexgrow : null,
          borderRadius: data_borderradius ? data_borderradius : "4px",
          // margin: data_margin ? data_margin : "0 15px 0 15px",
          // marginRight: "15px",
          transition: "background-color 0s" /* "box-shadow 0.5s", */,
        }}
      >
        {data_text} {children}
      </button>
    )
  }
}



const mapStateToProps = (state, ownProps) => {
  // console.log("mainwrapper state: ", state);
  return {
    formOutOfOrderValue: state.formState.formOutOfOrderValue,
    formProcessingValue: state.formState.formProcessingValue,
    formStepValue: state.formState.formStepValue,
    formRes: state.formState.formRes,

    formLocationValue: state.formState.formLocationValue,
    formRestroomTypeValue: state.formState.formRestroomTypeValue,
    formTimeOfVisitValue: state.formState.formTimeOfVisitValue,
    formCleanlinessValue: state.formState.formCleanlinessValue,
    formPrivacyValue: state.formState.formPrivacyValue,
    formComfortValue: state.formState.formComfortValue,
    formSafetyValue: state.formState.formSafetyValue,
    formStyleValue: state.formState.formStyleValue,
    formAdmissionValue: state.formState.formAdmissionValue,
    formFeeValue: state.formState.formFeeValue,
    formEditModeValue: state.formState.formEditModeValue,
    formMissingValue: state.formState.formMissingValue
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    formNext: (outOfOrderInd) => dispatch(formNext(outOfOrderInd)),
    formPrev: (outOfOrderInd) => dispatch(formPrev(outOfOrderInd)),
    formMissingAlert: () => dispatch(formMissingAlert()),
    resetForm: () => dispatch(resetForm()),
    submitForm: () => dispatch(submitForm()),
    submitFormProcessing: () => dispatch(submitFormProcessing()),
    selectSection: (section) => dispatch(selectSection(section)),
    modalToggled: (selectedModal) => dispatch(modalToggled(selectedModal)),
    modalClosed: () => dispatch(modalClosed()),
    confirmReviewDelete: () => dispatch(confirmReviewDelete()),
    cancelReviewDelete: () => dispatch(cancelReviewDelete())
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(FormNavButton);



