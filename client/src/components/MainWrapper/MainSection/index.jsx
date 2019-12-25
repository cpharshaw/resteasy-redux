import React, { Component } from 'react';

import ReviewSection    from './ReviewSection/';
import MapListWrapper   from './MapListWrapper/';
import MyStuffSection   from './MyStuffSection/';

import { connect } from 'react-redux';
import { compose } from 'redux';


export class MainSection extends Component {
  render() {

    const {
      selectedSectionValue,
      geolocationValue
    } = this.props;

    return (
      <div>
          < ReviewSection  display={ selectedSectionValue} />
          < MapListWrapper display={!selectedSectionValue} />
          < MyStuffSection display={!selectedSectionValue} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log("mainwrapper state: ", state);
  return {
    selectedSectionValue: state.mapListState.selectedSectionValue,
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