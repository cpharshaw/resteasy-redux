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
      imgElementArr: [],

      //page 5
      comments: null
    }
  }


  handleChange = (e, otherData) => {

    const target = e.target;
    const name = target.name;

    const files = target.files;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    });

    if (name === "admission") this.setState({ feeDisplay: otherData });
    // if (name === "admission") console.log("test log: ", name, value, target.value, otherData);
    // if (name !== "admission") console.log("test log: ", name, value, target.value);

    if (otherData && otherData[0] === "delete") {
      this.setState({
        imgElementArr: otherData[1]
      });
    }

    if (otherData && otherData[0] === "add") {
      this.setState({
        imgElementArr: [...this.state.imgElementArr, ...otherData[1]]
      });
    }



  };






  render() {

    const { selectedSectionValue } = this.props;
    const displayValue = selectedSectionValue === "review" ? "flex" : "none";

    const { location, restroomType, locationNotes, timeOfVisit, outOfOrder } = this.state;
    const { cleanliness, smell, privacy, comfort, capacity, safety, style } = this.state;
    const { handicapped, genderNeutral, babyChange, schedule, admission, feeDisplay, fee } = this.state;
    const { imgElementArr } = this.state;
    const { comments } = this.state;

    const page1Values = { location, restroomType, locationNotes, timeOfVisit, outOfOrder };
    const page2Values = { cleanliness, smell, privacy, comfort, capacity, safety, style };
    const page3Values = { handicapped, genderNeutral, babyChange, schedule, admission, feeDisplay, fee };
    const page4Values = { imgElementArr };
    const page5Values = { comments };
    const formStepValue = this.props.formStepValue;
    return (
      <form
        className="rs"
        style={{
          display: displayValue,
        }}
      >
        {
          formStepValue === 0 ? < ReviewSection0 /> :
            formStepValue === 1 ? < ReviewSection1 /> :
              formStepValue === 2 ? < ReviewSection2 /> :
                formStepValue === 3 ? < ReviewSection3 /> :
                  formStepValue === 4 ? < ReviewSection4 /> :
                    formStepValue === 5 ? < ReviewSection5 /> :
                      formStepValue === 6 ? (
                        <React.Fragment>
                          < ReviewSection5 />
                          < ReviewSection6 />
                        </React.Fragment>
                      ) :
                      formStepValue === 7 ? (
                        <React.Fragment>
                          < ReviewSection5 />
                          < ReviewSection6 />
                        </React.Fragment>
                      ) :
                        // formStepValue === 7 ? < ReviewSection7 /> :
                          <div className="rs" />
        }

        {/* TODO - CREATE CONDITIONALS FOR MODALS.  WILL USE ABSOLUTE POSITION TO OVERLAY THE CURRENT PAGE */}
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
    formStepValue: state.formState.formStepValue,
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