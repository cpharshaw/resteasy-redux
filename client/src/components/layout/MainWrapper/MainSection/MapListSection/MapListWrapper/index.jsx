import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import MapSection from './MapSection/';
import ListSection from './ListSection/';


export class MapListSection extends Component {

  render() {

    return (

      <React.Fragment>
        < ListSection data_display={!this.props.mapListToggleValue} />
        < MapSection data_display={this.props.mapListToggleValue} />
      </React.Fragment>
      
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    selectedSectionValue: state.mapListState.selectedSectionValue,
    // reviews: state.firestore.ordered.reviews,
    // auth: state.firebase.auth
    mapListToggleValue: state.mapListState.mapListToggleValue
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(MapListSection);
