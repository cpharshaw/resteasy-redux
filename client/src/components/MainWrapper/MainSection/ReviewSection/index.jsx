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

import ReviewSection0 from './ReviewSection0';
import ReviewSection1 from './ReviewSection1';
import ReviewSection2 from './ReviewSection2';
import ReviewSection3 from './ReviewSection3';
import ReviewSection4 from './ReviewSection4';
import ReviewSection5 from './ReviewSection5'; // confirm
import ReviewSection6 from './ReviewSection6'; // success
import ReviewSection7 from './ReviewSection7'; // failure
// import '../../../../index.module.css';


export class ReviewSection extends Component {
  constructor(props) {
    super(props);
    this.admissionSelected.bind(this);
    this.handleChange.bind(this);
    this.state = {
      
      // page1
      restroomType: null,
      locationNotes: null,
      timeOfVisit: null,
      outOfOrder: null,

      //page 2
      cleanliness: null,
      smell: null,
      privacy: null,
      comfort: null,
      capacity: null,
      safety: null,
      style: null,

      //page 3
      handicapped: null,
      genderNeutral: null,
      babyChange: null,
      schedule: null,
      admission: null,
      feeDisplay: "none",
      fee: null,

      //page 4

    }
  }


  componentDidUpdate() {
    const fee = document.getElementById("feeInput");
    if (fee) {
      fee.focus();
    }
  }


  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });

    console.log(this.state)
  };

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
    // console.log(this.props.formValue);

    return (
      <form
        className="rs"
        style={{
          display: displayValue,
        }}
      >
        {
          this.props.formValue === 0 ? < ReviewSection0 func_handlechange={e => this.handleChange(e)} /> :
            this.props.formValue === 1 ? < ReviewSection1 func_handlechange={e => this.handleChange(e)} /> :
              this.props.formValue === 2 ? < ReviewSection2 func_handlechange={e => this.handleChange(e)} /> :
                this.props.formValue === 3 ? < ReviewSection3 func_handlechange={e => this.handleChange(e)} /> :
                  this.props.formValue === 4 ? < ReviewSection4 func_handlechange={e => this.handleChange(e)} /> :
                    this.props.formValue === 5 ? < ReviewSection5 func_handlechange={e => this.handleChange(e)} /> :
                      this.props.formValue === 6 ? < ReviewSection6 func_handlechange={e => this.handleChange(e)} /> :
                        this.props.formValue === 7 ? < ReviewSection7 func_handlechange={e => this.handleChange(e)} /> :
                          <div className="rs" />
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