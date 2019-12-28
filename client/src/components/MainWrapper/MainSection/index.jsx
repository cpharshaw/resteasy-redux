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
            display: "flex",
            top: "42px",
            width: "100%",
            height: "calc(100vh - 84px)",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            alignContent: "flex-start",
            margin: "0 auto",         
            padding: "0",
            border: "0",
            background: "whitesmoke",
          }
        }
      >
        < ReviewSection display={selectedSectionValue} />
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