import React, { Component } from 'react'

import { compose } from 'redux';
import { connect } from 'react-redux';

export class MapListBar extends Component {
  render() {
    return (
      <div
        style={
          {
            display: "flex",
            // flexWrap: "nowrap",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            margin: "0 auto",
            background: "orange",
            position: "relative",
            // top: "0",
            height: "7vh",
            minHeight: "32px",
            maxHeight: "42px",
            width: "100%",
            padding: "0",
            margin: "0"
          }
        }
      >
        MapListBar
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
    mapListDisplayValue: ownProps.display
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(MapListBar);
