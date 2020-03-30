import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import FormNavButton from '../../ReviewFormElements/FormNavButton';
import { resetForm } from '../../../../../../store/actions/formActions';
import { modalToggled } from '../../../../../../store/actions/modalActions';

export class ReviewMainNav extends Component {

  resetClicked(e) {
    e.preventDefault();

    // console.log("reset clicked");
    this.props.modalToggled("formResetModal");
    // this.props.resetForm();
  }

  render() {

    const {
      formStepValue
    } = this.props;
    console.log(formStepValue)

    return (

      <div className="row-100" style={{ background: "transparent" }}>

        <div className="col" style={{ background: "transparent" }} />
        {
          formStepValue > 0 ? (
            <div className="col" style={{ background: "transparent" }} >
              <FormNavButton
                data_text="Back"
                data_width="80px"
                data_classes="bg-primary-outline"
                func_navcommand="prev"
              />
            </div>
          ) : null
        }

        <div className="col" style={{ background: "transparent" }}>
          <FormNavButton
            data_text={formStepValue === 0 ? "Begin review" : "Continue"}
            data_classes="bg-primary"
            data_width={formStepValue === 0 ? "110px" : "80px"}
            func_navcommand="next"
          />
        </div>

        <div className="col" style={{ background: "transparent" }}>
          {
            formStepValue > 0 ? (
              < button
                className="reset"
                onClick={e => this.resetClicked(e)}
                style={{
                  fontSize: "14px",
                }}
              >
                <img src="https://img.icons8.com/material-rounded/24/000000/recurring-appointment.png" />
              </button>
            ) : null
          }


        </div>
      </div >
    )
  }
}

// export default ReviewMainNav;



const mapStateToProps = (state, ownProps) => {
  // console.log("mainwrapper state: ", state);
  return {
    formStepValue: state.formState.formStepValue,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    modalToggled: (selectedModal) => dispatch(modalToggled(selectedModal)),
    resetForm: () => dispatch(resetForm()),
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(ReviewMainNav);

