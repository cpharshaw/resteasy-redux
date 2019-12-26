import React, { Component } from 'react';
// import { toggleMapList } from '../../../store/actions/mapListActions';
import { selectSection } from '../../../store/actions/sectionActions';
import { connect } from 'react-redux';
import { compose } from 'redux';


export class BottomBar extends Component {
  
  selectReviewSection = () => {
    this.props.selectSection("review");
    console.log("screen to add a review");
    console.log("section value: ", this.props.selectedSectionValue);
  };

  selectMapListSection = () => {
    this.props.selectSection("mapList");
    console.log("screen to find a restroom");
    console.log("section value: ", this.props.selectedSectionValue);
  };

  selectMyStuffSection = () => {
    this.props.selectSection("myStuff");
    console.log("screen to access your stuff");
    console.log("section value: ", this.props.selectedSectionValue);
  };


  render() {
    return (
      <div
        style={{
          background: "gray",
          position: "absolute",
          bottom: "0",
          // minHeight: "36px",
          height: "42px",
          // maxHeight: "48px",
          width: "100%"
        }}
      >
        <button
          onClick={this.selectReviewSection}
          style={{
            background: "red",
            width: "33.33333%",
            height: "100%"
          }}
        >
          +
        </button>
        <button
          onClick={this.selectMapListSection}
          style={{
            background: "green",
            width: "33.33334%",
            height: "100%"
          }}
        >
          Search
        </button>
        <button
          onClick={this.selectMyStuffSection}
          style={{
            background: "blue",
            width: "33.33333%",
            height: "100%"
          }}
        >
          Account
        </button>                
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
    selectSection: section => dispatch(selectSection(section))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(BottomBar)

