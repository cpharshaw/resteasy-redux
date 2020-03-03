import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import MapListBar from './MapListBar/';
import MapListWrapper from './MapListWrapper';
import ModalContainer from '../Modals';
import LocationModal from '../Modals/LocationModal';

export class MapListSection extends Component {

  render() {
    const { selectedSectionValue } = this.props;

    const {
      settingsModal
    } = this.props.modalState;

    const displayValue = selectedSectionValue === "mapList" ? "flex" : "none";

    // console.log("mapListDisplayValue: ", mapListDisplayValue);

    return (
      <div
        id="maplistSection"
        className="rs animated fadeIn faster"
        style={{
          display: displayValue,
          flexDirection: "column",
          // zIndex: "13"
        }}
      >
        < MapListBar />
        < MapListWrapper />

        {
          settingsModal ? (
            // < ModalContainer data_size="loc" >
              <LocationModal />
            // </ModalContainer>
          ) : null
        }
        
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
    selectedSectionValue: ownProps.display,
    modalState: state.modalState,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(MapListSection);
