import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import FieldWrapper from '../ReviewForm/FieldWrapper';
import FieldLabel from '../ReviewForm/FieldLabel';
import RadioInput from '../ReviewForm/RadioInput';
import CheckInput from '../ReviewForm/CheckInput';
import TextInput from '../ReviewForm/TextInput';
import InputGroupWrapper from '../ReviewForm/InputGroupWrapper';
import PhotoUpload from '../ReviewForm/PhotoUpload';
import { formNext } from '../../../../../store/actions/formActions';
import { formPrev } from '../../../../../store/actions/formActions';


export class ReviewSection4of4 extends Component {
  constructor(props) {
    super(props);
    this.admissionSelected.bind(this);
    this.state = {
      feeDisplay: "none"
    }
  }

  nextStep = () => {
    console.log();
    this.props.formNext();
    console.log("entry props: ", this.props.formValue)
  }

  prevStep = () => {
    console.log();
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

    const { selectedSectionValue } = this.props;
    const displayValue = selectedSectionValue === "review" ? "flex" : "none";

    return (
      <div
        id="reviewSection"
        className="rs"
        style={{
          // display: displayValue,
          // height: "calc(100% - 42px)",
          flexDirection: "column",
          justifyContent: "flex-start",
          overflowY: "scroll",
        }}
      >



        < PhotoUpload />

        <hr
          style={
            {
              borderTop: "1px dotted lightgrey",
              width: "100%"
            }
          }
        />

        <div
          id="comments"
          style={
            {
              display: "flex",
              width: "97%",
              height: "fit-contents",
              flexGrow: "1",
              maxHeight: "180px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              margin: "0 auto",
              padding: "0",
              border: "0",
              // background: "grey"
            }
          }
        >




          <label
            htmlFor="comments"
            style={
              {
                display: "flex",
                // flexGrow: "1",
                width: "100%",
                height: "42px",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                alignSelf: "center",
                margin: "0 auto",
                padding: "0",
                textAlign: "center",
                flexWrap: "wrap",
                border: "0",
                fontSize: "12px"
                // background: "red"
              }
            }
          >
            Comments<sup>&nbsp;(i)</sup>
          </label>

          <textarea
            rows="4"
            cols="35"
            width="100%"
            // height="auto"
            border="1px solid lightgrey"
            background="red"
            placeholder="'Went in with loo expectations; peesantly surprised.  Needs more paper towels but overall decent'"
          />

        </div>

        {/* <button
          onClick={this.nextStep}
          className="rs button bg-primary text-white"
        >
          <em>
            Next
          </em>
        </button> */}
        <button
          onClick={this.prevStep}
          className="rs button bg-primary text-white"
        >
          <em>
            Previous
          </em>
        </button>

      </div >
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  // console.log("mainwrapper state: ", state);
  return {
    selectedSectionValue: state.mapListState.selectedSectionValue,
    // geolocationValue: state.geolocationState.geolocationValue,
    boundsValue: state.boundsState.boundsValue,
    formValue: state.formState.formValue,
    // reviews: state.firestore.ordered.reviews,
    // auth: state.firebase.auth
    selectedSectionValue: ownProps.display
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    formNext: () => dispatch(formNext()),
    formPrev: () => dispatch(formPrev()),
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(ReviewSection4of4);