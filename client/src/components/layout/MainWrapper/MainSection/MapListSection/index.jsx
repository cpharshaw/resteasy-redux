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
            position: "fixed",
            top: "0",
            left: "0",
            right: "0",
            height: "80px",
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
              className="animated flipInX fast bg-primary"
              style={{
                zIndex: "9999",
                position: "fixed",
                top: "80px",
                left: "0",
                right: "0",
                height: "50px",
                width: "100%",
                flexDirection: "row",
                // boxShadow: "0 1px 3px #a8a8a8",
                // padding: "3p 9px 3px 9px",
                // backdropFilter: "blue(6px)",
                // WebkitBackdropFilter: "blue(6px)",
                // background: "transparent"
              }}
            >
              <LocationModal
                data_width="95%"
                data_height="92%"
                // data_border="3px solid #0abab5"
              />
            </div>
          ) : null
        }

        <div className="row"
          style={{
            position: "fixed",
            bottom: "55px",
            left: "0",
            right: "0",
            height: "calc(100% - 135px)",
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
