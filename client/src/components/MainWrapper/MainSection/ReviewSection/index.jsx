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
    // this.handleChange.bind(this);
    this.state = {

      // page1
      location: null,
      restroomType: "Restroom type...",
      locationNotes: "",
      timeOfVisit: "Time of day...",
      outOfOrder: false,

      //page 2
      cleanliness: null,
      smell: null,
      privacy: null,
      comfort: null,
      capacity: null,
      safety: null,
      style: null,

      //page 3
      handicapped: false,
      genderNeutral: false,
      babyChange: false,
      schedule: false,
      admission: "¿Gratis o no?",
      feeDisplay: "hidden",
      fee: "",

      //page 4
      photos: [],

      //page 5
      comments: null
    }
  }


  handleChange = (e, displayVal) => {
    const target = e.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    });

    if (name === "admission") this.setState({ feeDisplay: displayVal });

    if (name === "admission") console.log("test log: ", name, value, target.value, displayVal);
    if (name !== "admission") console.log("test log: ", name, value, target.value);
  };





  render() {

    const { selectedSectionValue } = this.props;
    const displayValue = selectedSectionValue === "review" ? "flex" : "none";

    const { location, restroomType, locationNotes, timeOfVisit, outOfOrder } = this.state;
    const { cleanliness, smell, privacy, comfort, capacity, safety, style } = this.state;
    const { handicapped, genderNeutral, babyChange, schedule, admission, feeDisplay, fee } = this.state;
    const { photos } = this.state;
    const { comments } = this.state;

    const page1Values = { location, restroomType, locationNotes, timeOfVisit, outOfOrder };
    const page2Values = { cleanliness, smell, privacy, comfort, capacity, safety, style };
    const page3Values = { handicapped, genderNeutral, babyChange, schedule, admission, feeDisplay, fee };
    const page4Values = { photos };
    const page5Values = { comments };

    return (
      <form
        className="rs"
        style={{
          display: displayValue,
        }}
      >
        {
          this.props.formValue === 0 ? < ReviewSection0 func_handlechange={this.handleChange} data_values={"nothing"} /> :
            this.props.formValue === 1 ? < ReviewSection1 func_handlechange={this.handleChange} data_values={page1Values} /> :
              this.props.formValue === 2 ? < ReviewSection2 func_handlechange={this.handleChange} data_values={page2Values} /> :
                this.props.formValue === 3 ? < ReviewSection3 func_handlechange={this.handleChange} data_values={page3Values} /> :
                  this.props.formValue === 4 ? < ReviewSection4 func_handlechange={this.handleChange} data_values={page4Values} /> :
                    this.props.formValue === 5 ? < ReviewSection5 func_handlechange={this.handleChange} data_values={page5Values} /> :
                      this.props.formValue === 6 ? < ReviewSection6 func_handlechange={this.handleChange} data_values={"test"} /> :
                        this.props.formValue === 7 ? < ReviewSection7 func_handlechange={this.handleChange} data_values={"test"} /> :
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