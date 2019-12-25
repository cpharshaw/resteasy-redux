import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import ReviewSection from './ReviewSection/';
import MapListWrapper from './MapListWrapper/';
import MyStuffSection from './MyStuffSection/';


export class MainSection extends Component {

  render() {

    const { selectedSectionValue } = this.props;

    const reviewDisplayValue = selectedSectionValue === "review" ? null : "none";
    const mapListDisplayValue = selectedSectionValue === "mapList" ? null : "none";
    const myStuffDisplayValue = selectedSectionValue === "myStuff" ? null : "none";

    // console.log("reviewDisplayValue: ", reviewDisplayValue);
    // console.log("mapListDisplayValue: ", mapListDisplayValue);
    // console.log("myStuffDisplayValue: ", myStuffDisplayValue);

    return (
      <div
        style={
          {
            position: "absolute",
            top: "7vh",
            left: "0",
            height: "86vh"
          }
        }
      >
        < ReviewSection display={reviewDisplayValue} />
        < MapListWrapper display={mapListDisplayValue} />
        < MyStuffSection display={myStuffDisplayValue} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log("mainwrapper state: ", state);
  return {
    selectedSectionValue: state.sectionState.selectedSectionValue,
    // geolocationValue: state.geolocationState.geolocationValue,
    boundsValue: state.boundsState.boundsValue,
    // reviews: state.firestore.ordered.reviews,
    // auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(MainSection);