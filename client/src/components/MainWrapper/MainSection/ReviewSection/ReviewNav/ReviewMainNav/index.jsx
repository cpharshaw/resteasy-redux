import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import FormNavButton from '../../ReviewFormElements/FormNavButton';
import { resetForm } from '../../../../../../store/actions/formActions';
import { modalToggled } from '../../../../../../store/actions/modalActions';

export class ReviewMainNav extends Component {

  resetClicked(e) {
    e.preventDefault();

    console.log("reset clicked");
    this.props.modalToggled("formResetModal");
    // this.props.resetForm();
  }

  render() {

    return (

      <div
        className="rs animated fadeIn faster"
        style={{
          height: "70px",
          // background: "green"
          // marginBottom: "20px"
        }}
      >
        <div
          className="rs"
          style={{
            width: "12.5%",
            // background: "green"
          }}
        />
        <div
          className="rs"
          style={{
            width: "75%",
            // background: "green"
          }}
        >
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

        <button
          className="rs reset"
          onClick={e => this.resetClicked(e)}
          style={{
            width: "12.5%",
            fontSize: "14px",
            // background: "green"
          }}
        >
          <img src="https://img.icons8.com/material-rounded/24/000000/recurring-appointment.png" />
        </button>
      </div>
    )
  }
}

// export default ReviewMainNav;



const mapDispatchToProps = (dispatch) => {
  return {
    modalToggled: (selectedModal) => dispatch(modalToggled(selectedModal)),
    resetForm: () => dispatch(resetForm()),
  }
}

export default compose(
  connect(null, mapDispatchToProps)
)(ReviewMainNav);

