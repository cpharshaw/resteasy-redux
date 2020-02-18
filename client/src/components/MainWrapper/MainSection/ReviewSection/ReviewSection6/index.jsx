import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';

import FormNavButton from '../ReviewForm/FormNavButton';
// import { selectSection } from '../../../../../store/actions/sectionActions';

export class ReviewSection6 extends Component {

  render() {
    return (
      <div
        id=""
        className="rs"
        style={{
          position: "absolute",
          background: 'rgba(197,197,197,0.6)',
          backdropFilter: "blur(6px)",
          // filter: "blur(8px)",
          // WebkitFilter: "blur(8px)",
          top: 0,
          right: 0,
          bottom: "50px",
          left: 0,
          width: "100vw",
          height: "calc(100% - 50px)",
          zIndex: "1000",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          id=""
          className="rs"
          style={{
            boxShadow: "0 1px 3px #a8a8a8",
            borderRadius: "5px",
            background: "#f5f5f5",
            width: "82%",
            height: "225px",

          }}
        >
          {
            this.props.formStepValue === 6 ?
              (
                <div className="rs" style={{ flexDirection: "column" }}>
                  <h1 className="rs">
                    Ok to submit review?
                  </h1>
                  <div
                    className="rs"
                    style={{
                      // position: "absolute",
                      height: "50px",
                      // background: "red",
                      marginBottom: "20px"
                      // padding: "8px",
                      // justifyContent: "space-evenly"
                    }}>
                    <FormNavButton
                      data_text="Back"
                      data_classes="bg-primary-invert"
                      func_navcommand="prev"
                    />
                    <FormNavButton
                      data_text="Submit"
                      data_classes="bg-grey-outline"
                      func_navcommand="next"
                    />
                  </div>
                </div>
              )
              :
              this.props.formStepValue === 7 ?
                (
                  <div className="rs" style={{ flexDirection: "column" }}>
                    <h1 className="rs">
                      Thank you for your review.
                    </h1>
                    <div
                      className="rs"
                      style={{
                        // position: "absolute",
                        height: "50px",
                        // background: "red",
                        marginBottom: "20px"
                        // padding: "8px",
                        // justifyContent: "space-evenly"
                      }}>

                      <FormNavButton
                        data_text="Close"
                        data_classes="bg-grey-outline"
                        data_width="fit-content"
                        func_navcommand="finish"
                      />
                    </div>
                  </div>
                )
                :
                null
          }
        </div>


      </div>



    )
  }
}

// export default ReviewSection6;



const mapStateToProps = (state, ownProps) => {
  // console.log("mainwrapper state: ", state);
  return {
    formStepValue: state.formState.formStepValue
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // selectSection: section => dispatch(selectSection(section))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(ReviewSection6);