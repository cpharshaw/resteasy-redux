import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import Button from '@material-ui/core/Button';

import FieldWrapper from './ReviewForm/FieldWrapper';
import FieldLabel from './ReviewForm/FieldLabel';
import RadioInput from './ReviewForm/RadioInput';
import CheckInput from './ReviewForm/CheckInput';
import TextInput from './ReviewForm/TextInput';
import InputGroupWrapper from './ReviewForm/InputGroupWrapper';
import PhotoUpload from './ReviewForm/PhotoUpload';

import ReviewSection0of4 from './ReviewSection0of4';
import ReviewSection1of4 from './ReviewSection1of4';
import ReviewSection2of4 from './ReviewSection2of4';
import ReviewSection3of4 from './ReviewSection3of4';
import ReviewSection4of4 from './ReviewSection4of4';
// import '../../../../index.module.css';


export class ReviewSection extends Component {
  constructor(props) {
    super(props);
    this.admissionSelected.bind(this);
    this.state = {
      feeDisplay: "none"
    }
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
    console.log(this.props.formValue);

    return (
      <form
        className="rs"
        style={{
          display: displayValue,
        }}
      >
        {
          this.props.formValue === 0 ? < ReviewSection0of4 /> :
            this.props.formValue === 1 ? < ReviewSection1of4 /> :
              this.props.formValue === 2 ? < ReviewSection2of4 /> :
                this.props.formValue === 3 ? < ReviewSection3of4 /> :
                  this.props.formValue === 4 ? < ReviewSection4of4 /> : <div className="rs" />
        }
      </form >
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
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(ReviewSection);