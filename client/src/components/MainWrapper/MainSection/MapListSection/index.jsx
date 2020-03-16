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
          // position: "inherit",
          // height: "inherit",
          flexDirection: "column",
          // zIndex: "13"
        }}
      >
        < MapListBar />
        < MapListWrapper />

        {
          settingsModal ? (
            // < ModalContainer data_size="loc" >
            <div
              id=""
              className="rs animated flipInX faster"
              style={{
                position: "fixed",
                top: "72px",
                left: "0",
                right: "0",
                // width: "85%",
                height: "50px",
                flexDirection: "row",
                boxShadow: "0 1px 3px #a8a8a8",
                // borderRadius: "5px",
                // background: "#f5f5f5",
                paddingTop: "3px",
                paddingBottom: "3px",
                paddingLeft: "9px",
                paddingRight: "9px",
                // borderRight: "1px solid #f5f5f5",
                // overflowY: "auto",
                // justifyContent: "flex-start",
                // alignContent: "flex-start",
                background: "#0abab5"
              }}
            >
              <LocationModal />
            </div>
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
  connect(mapStateToProps, null)
)(MapListSection);
