import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import FormNavButton from '../../../../../sharedComponents/formComponents/FormNavButton';
// import FormNavButton from '../../ReviewFormElements/FormNavButton';
import { resetForm } from '../../../../../../store/actions/formActions';
import { modalToggled } from '../../../../../../store/actions/modalActions';
import { selectSection } from '../../../../../../store/actions/sectionActions';

export class ReviewMainNav extends Component {

  resetClicked(e, editMode) {
    e.preventDefault();
    
    // console.log("reset clicked");
    this.props.modalToggled("formResetModal");
    // if (editMode) this.props.selectSection("myStuff");
    // this.props.resetForm();
  }

  render() {

    const {
      formStepValue,
      formEditModeValue
    } = this.props;
    // console.log(formStepValue)

    return (
      <div className="row">
        <div className="col">

          <div className="row">

            <div className="col-2 jc-fs pt-2 ">
              {/* spacer */}
            </div>

            {
              formStepValue > 0 ? (
                // <div className="col-4 ai-c jc-fs pt-2 bg-purple" >
                <div className="col-4 ai-c jc-fe " >
                  <FormNavButton
                    data_text="Back"
                    data_width="100px"
                    data_classes="button-form-nav"
                    func_navcommand="prev"
                  />
                </div>
              ) : null
            }

            {/* <div className="col-4 ai-c jc-fs pt-2 bg-orange"> */}
            <div className="col-4 ai-c jc-fe ">
              <FormNavButton
                data_text={formStepValue === 0 ? "Begin review" : "Continue"}
                data_width="100px"
                data_classes="button-form-nav"
                func_navcommand="next"
              />
            </div>

            {/* <div className="col-2 jc-fs pt-3 bg-grey"> */}
            <div className="col-2 jc-fe pb-2">
              {
                formStepValue > 0 && !formEditModeValue ? (
                  // null
                  < button
                    className="reset"
                    onClick={e => this.resetClicked(e)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                      width="24" height="24"
                      viewBox="0 0 172 172"
                      style={{ fill: "#f5f5f5" }}
                    >
                      <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                        <path d="M0,172v-172h172v172z" fill="#f5f5f5" />
                        <g fill="#000">
                          <path d="M157.66667,14.33333l-21.08008,21.08008c-15.71512,-15.75037 -38.64141,-24.279 -63.3942,-19.96029c-28.88167,5.04533 -52.24612,28.08191 -57.58529,56.91341c-8.43517,45.47967 26.41824,85.30013 70.3929,85.30013c36.79367,0 67.21258,-27.88483 71.21875,-63.63216c0.48017,-4.27133 -2.86667,-8.03451 -7.16667,-8.03451c-3.58333,0 -6.66769,2.63901 -7.05469,6.20084c-3.10317,28.7025 -27.4779,51.13249 -56.9974,51.13249c-35.4105,0 -63.42388,-32.25818 -56.18555,-68.93718c4.35733,-22.07333 22.0263,-39.91889 44.0638,-44.46972c20.51251,-4.23376 39.5845,2.64623 52.56022,15.63509l-18.93848,18.93848h50.16667z" />
                        </g>
                      </g>
                    </svg>
                  </button>
                ) :
                  formStepValue > 0 && formEditModeValue ? (
                    // null
                    < button
                      className="reset"
                      onClick={e => this.resetClicked(e, "editMode")}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        // className="animated heartBeat slow"
                        width="24" height="24"
                        viewBox="0 0 172 172"
                        style={{ fill: "#0a0a0a" }}>
                        <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                          <path d="M0,172v-172h172v172z">
                          </path>
                          <g fill="#0a0a0a">
                            <path d="M40.90039,30.76628l-10.13411,10.13411l45.09961,45.09961l-45.09961,45.09961l10.13411,10.13411l45.09961,-45.09961l45.09961,45.09961l10.13411,-10.13411l-45.09961,-45.09961l45.09961,-45.09961l-10.13411,-10.13411l-45.09961,45.09961z">
                            </path>
                          </g>
                        </g>
                      </svg>
                    </button>
                  )
                    : null
              }


            </div>
          </div >

          <div className="row">
            <p
              style={{
                fontStyle: "italic",
                color: "red",
                fontSize: "12px",
                visibility: this.props.formMissingValue ? "visible" : "hidden"
              }}
              className="animated pulse"
            ><b>*</b>Missing value(s)...
            </p>
          </div>
        </div>
      </div>
    )
  }
}

// export default ReviewMainNav;



const mapStateToProps = (state, ownProps) => {
  // console.log("mainwrapper state: ", state);
  return {
    formStepValue: state.formState.formStepValue,
    formEditModeValue: state.formState.formEditModeValue,
    formMissingValue: state.formState.formMissingValue
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    modalToggled: (selectedModal) => dispatch(modalToggled(selectedModal)),
    selectSection: (section) => dispatch(selectSection(section)),
    resetForm: () => dispatch(resetForm()),
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(ReviewMainNav);

