import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';


import MapSection from './MapSection/';
import ListSection from './ListSection/';

export class MapListWrapper extends Component {
  render() {

    const { mapListDisplayValue } = this.props;

    // console.log("mapListDisplayValue: ", mapListDisplayValue);

    return (
      <div
        style={
          {
            display: mapListDisplayValue
          }
        }
      >
        < MapSection />
        < ListSection />
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
)(MapListWrapper);
