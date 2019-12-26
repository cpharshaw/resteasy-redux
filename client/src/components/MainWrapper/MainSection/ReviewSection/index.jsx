import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';


export class ReviewSection extends Component {

  render() {

    const { reviewDisplayValue } = this.props;

    // console.log("reviewDisplayValue: ", reviewDisplayValue);


    return (
      <div
        style={
          {
            display: reviewDisplayValue,
            height: "100%"
          }
        }
      >
        ReviewSection
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  // console.log("mainwrapper state: ", state);
  return {
    selectedSectionValue: state.mapListState.selectedSectionValue,
    // geolocationValue: state.geolocationState.geolocationValue,
    boundsValue: state.boundsState.boundsValue,
    // reviews: state.firestore.ordered.reviews,
    // auth: state.firebase.auth
    reviewDisplayValue: ownProps.display
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(ReviewSection);