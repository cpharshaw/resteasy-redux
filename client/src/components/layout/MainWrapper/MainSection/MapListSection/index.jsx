import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import MapListBar from './MapListBar/';
import MapListWrapper from './MapListWrapper';
import ModalContainer from '../Modals';
// import LocationModal from '../Modals/LocationModal';

import LocationModal from '../Modals/ModalFormLocationSelector';

export class MapListSection extends Component {

  

  render() {
    const { selectedSectionValue } = this.props;

    const {
      settingsModal
    } = this.props.modalState;

    const displayValue = selectedSectionValue === "mapList" ? "flex" : "none";

    // console.log("mapListDisplayValue: ", mapListDisplayValue);


    return (
      <div id="maplistSection" className="container-fluid animated fadeIn fast" style={{ display: displayValue }}>

        <div className="row"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            height: "95px",
          }}
        >
          <div className="col">
            < MapListBar />
          </div>
        </div>


        {
          settingsModal ? (
            <div
              id=""
              className="col animated fadeIn fast bg-primary px-2 py-1"
              style={{
                zIndex: "99999999999999999999999",
                position: "absolute",
                top: "92.5px",
                left: "0",
                right: "0",
                height: "50px",
                width: "100%",
              }}
            >
              <LocationModal
                // data_width="95%"
                // data_height="92%"
                // data_border="3px solid #0abab5"
              />
            </div>
          ) : null
        }

        <div className="row"
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "calc(100% - 92.5px)",
          }}
        >
          <div className="col">
            < MapListWrapper />
          </div>
        </div>


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
