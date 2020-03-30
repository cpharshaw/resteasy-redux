import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { formNext, formPrev, resetForm } from '../../../../../../store/actions/formActions';
import { selectSection } from '../../../../../../store/actions/sectionActions';
import { modalToggled } from '../../../../../../store/actions/modalActions';

export class FormNavButton extends Component {

  nextStep = (e) => {
    e.preventDefault();

    let outOfOrderInd;

    if (
      this.props.formStepValue === 1
      &&
      this.props.formOutOfOrderValue
    ) {
      outOfOrderInd = "outOfOrder";
    }

    this.props.formNext(outOfOrderInd);

  }

  prevStep = (e) => {
    e.preventDefault();

    let outOfOrderInd;

    if (
      this.props.formStepValue === 5
      &&
      this.props.formOutOfOrderValue
    ) {
      outOfOrderInd = "outOfOrder";
    }

    this.props.formPrev(outOfOrderInd);

  }

  finshedForm = () => {
    // const newValue = event.currentTarget.value;
    // const newValue = event.currentTarget.getAttribute('value');
    // console.log("bottom bar selected section: ", newValue);
    this.props.resetForm();
    this.props.selectSection("mapList");
  };


  modalCancel = () => {
    this.props.modalToggled("formResetModal");
  };


  resetForm = (e) => {
    e.preventDefault();

    this.props.resetForm();
    this.props.modalToggled("formResetModal");
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
      data_margin
    } = this.props;

    return (
      <button
        onClick={
          func_navcommand === "next" ? this.nextStep :
            func_navcommand === "prev" ? this.prevStep :
              func_navcommand === "cancel" ? this.modalCancel :
                func_navcommand === "reset" ? this.resetForm :
                  func_navcommand === "finish" ? this.finshedForm : null
        }
        className={"rs " + data_classes + ""}
        style={{
          width: data_width ? data_width : "110px",
          color: data_textcolor ? data_textcolor : null,
          // maxHeight: "42px",
          // borderRadius: "3px",
          padding: "7px",
          flexGrow: data_flexgrow ? data_flexgrow : null,
          borderRadius: data_borderradius ? data_borderradius : "3px",
          margin: data_margin ? data_margin : "0 15px 0 15px",
          // marginRight: "15px",
          transition: "background-color 0s" /* "box-shadow 0.5s", */,
        }}
      >
        {data_text}
      </button>
    )
  }
}



const mapStateToProps = (state, ownProps) => {
  // console.log("mainwrapper state: ", state);
  return {
    formOutOfOrderValue: state.formState.formOutOfOrderValue,
    formStepValue: state.formState.formStepValue,
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    formNext: (outOfOrderInd) => dispatch(formNext(outOfOrderInd)),
    formPrev: (outOfOrderInd) => dispatch(formPrev(outOfOrderInd)),
    resetForm: () => dispatch(resetForm()),
    selectSection: (section) => dispatch(selectSection(section)),
    modalToggled: (selectedModal) => dispatch(modalToggled(selectedModal)),
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(FormNavButton);



