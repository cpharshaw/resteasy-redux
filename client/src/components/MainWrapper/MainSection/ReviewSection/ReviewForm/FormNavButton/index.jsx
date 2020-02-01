import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { formNext } from '../../../../../../store/actions/formActions';
import { formPrev } from '../../../../../../store/actions/formActions';

export class FormNavButton extends Component {

  nextStep = (e) => {
    e.preventDefault();
    console.log();
    this.props.formNext();
    console.log("entry props: ", this.props.formValue)
  }

  prevStep = (e) => {
    e.preventDefault();
    console.log();
    this.props.formPrev();
  }


  render() {

    const {
      func_navcommand,
      data_text,
      data_bgcolor
    } = this.props;

    return (
      <button
        onClick={
          func_navcommand === "next" ? this.nextStep :
            func_navcommand === "prev" ? this.prevStep : null
        }
        className={"rs " + data_bgcolor + ""}
        style={{
          width: "80px",
          maxHeight: "42px",
          borderRadius: "3px",
          padding: "8px",
          marginLeft: "15px",
          marginRight: "15px",
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
  }
}

export default compose(
  connect(null, mapDispatchToProps)
)(FormNavButton);



