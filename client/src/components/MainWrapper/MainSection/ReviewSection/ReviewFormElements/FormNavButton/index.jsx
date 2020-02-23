import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { formNext,formPrev,resetForm } from '../../../../../../store/actions/formActions';
import { selectSection } from '../../../../../../store/actions/sectionActions';

export class FormNavButton extends Component {

  nextStep = (e) => {
    e.preventDefault();
    console.log();
    this.props.formNext();
    // console.log("entry props: ", this.props.formValue)
  }

  prevStep = (e) => {
    e.preventDefault();
    // console.log();
    this.props.formPrev();
  }

  finshedForm = () => {
    // const newValue = event.currentTarget.value;
    // const newValue = event.currentTarget.getAttribute('value');
    // console.log("bottom bar selected section: ", newValue);
    this.props.resetForm();
    this.props.selectSection("mapList");
  };


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
              func_navcommand === "finish" ? this.finshedForm : null
        }
        className={"rs " + data_classes + ""}
        style={{
          width: data_width ? data_width : "80px",
          color: data_textcolor ? data_textcolor : null,
          maxHeight: "42px",
          // borderRadius: "3px",
          padding: "8px",
          flexGrow: data_flexgrow ? data_flexgrow : null,
          borderRadius: data_borderradius ? data_borderradius : "3px",
          margin: data_margin ? data_margin : "0 15px 0 15px",
          // marginRight: "15px",
          transition: "background-color 0s" /* "box-shadow 0.5s", */,
        }}
      >
        <em>{data_text}</em>
      </button>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    formNext: () => dispatch(formNext()),
    formPrev: () => dispatch(formPrev()),
    resetForm: () => dispatch(resetForm()),
    selectSection: (section) => dispatch(selectSection(section)),
  }
}

export default compose(
  connect(null, mapDispatchToProps)
)(FormNavButton);



