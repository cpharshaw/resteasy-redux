import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';

import ReviewSection0 from './ReviewSections/ReviewSection0';
import ReviewSection1 from './ReviewSections/ReviewSection1';
import ReviewSection2 from './ReviewSections/ReviewSection2';
import ReviewSection3 from './ReviewSections/ReviewSection3';
import ReviewSection4 from './ReviewSections/ReviewSection4';
import ReviewSection5 from './ReviewSections/ReviewSection5';

import ReviewModalContainer from '../ReviewSection/ReviewModalContainer';
import ReviewModalSmall from '../ReviewSection/ReviewModalContainer/ReviewModalSmall';
import ReviewModalLarge from '../ReviewSection/ReviewModalContainer/ReviewModalLarge';

// import ReviewConfirm from './ReviewSections/ReviewSection6'; 


export class ReviewSection extends Component {

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

    const {
      selectedSectionValue,
      formStepValue,
      currentModal
    } = this.props;

    const displayValue = selectedSectionValue === "review" ? "flex" : "none";

    // const formStepValue = this.props.formStepValue;


    const CurrentModal = props => {
      switch (props.currentModal) {
        case 'EXPORT_DATA':
          return (
            // <ExportDataModal {...props}/>
            null
          );
        case 'SOCIAL_SIGN_IN':
          return (
            // <SignInModal {...props}/>
            null
          );
        default:
          return null;
      }
    }

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
                      formStepValue === 6 || formStepValue === 7 ? (
                        <React.Fragment>
                          < ReviewSection5 />
                          {/* < ReviewConfirm /> */}
                        </React.Fragment>
                      ) :
                        // formStepValue === 7 ? < ReviewSection7 /> :
                        <div id="test" className="rs" />
        }

        {/* TODO - CREATE CONDITIONALS FOR MODALS.  WILL USE ABSOLUTE POSITION TO OVERLAY THE CURRENT PAGE */}
        {/* https://codeburst.io/modals-in-react-f6c3ff9f4701 */}
        {
          formStepValue === 6 || formStepValue === 7 ? (

            < ReviewModalContainer >
              {/* <CurrentModal /> */}
              <ReviewModal data_size="sm">
                test
              </ReviewModal>
            </ReviewModalContainer >
          ) : null
          // < ReviewModalContainer >

          // </ ReviewModalContainer >

          // formStepValue === 6 || formStepValue === 7 ? (
          // < ReviewConfirm />
          // <div />
          // ) :
          // <div id="test2" className="rs" />
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