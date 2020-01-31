import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import MapListBar from './MapListBar/';
import MapListWrapper from './MapListWrapper';

export class MapListSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { selectedSectionValue } = this.props;

    const displayValue = selectedSectionValue === "mapList" ? "flex" : "none";

    // console.log("mapListDisplayValue: ", mapListDisplayValue);

    return (
      <div
        id="maplistSection"
        className="rs bg-primary"
        style={{
          display: displayValue,
          flexDirection: "column",
          // zIndex: "13"
        }}
      >
        < MapListBar  />
        < MapListWrapper />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log("mainwrapper state: ", state);
  return {
    // selectedSectionValue: state.mapListState.selectedSectionValue,
    // geolocationValue: state.geolocationState.geolocationValue,
    boundsValue: state.boundsState.boundsValue,
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
)(MapListSection);