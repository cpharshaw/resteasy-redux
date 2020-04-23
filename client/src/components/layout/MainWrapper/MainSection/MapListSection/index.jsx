import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import MapListBar from './MapListBar/';
import MapListWrapper from './MapListWrapper';
import ModalContainer from '../Modals';
// import LocationModal from '../Modals/LocationModal';

import LocationModal from '../Modals/ModalFormLocationSelector';

export class MapListSection extends Component {

  componentDidUpdate() {
    const relocate = document.getElementById("relocate");
    const pacInput = document.getElementById("pac-input");
    if (relocate && pacInput) {
      pacInput.focus();
    }
  }


  render() {
    const { selectedSectionValue } = this.props;

    const {
      settingsModal
    } = this.props.modalState;

    const displayValue = selectedSectionValue === "mapList" ? "flex" : "none";

    // console.log("mapListDisplayValue: ", mapListDisplayValue);


    return (
      // <div  className="container-fluid animated fadeIn fast" >

      <div className="row" id="maplistSection"
        style={{
          display: displayValue,
        }}
      >
        <div className="col fc jc-fs">

          <div className="row" id="mapListBar"
            style={{
              position: "relative",
              top: "0",
              height: "92.5px"
            }}
          >
            <div className="col">
              < MapListBar />
            </div>
          </div>


          {
            settingsModal ? (
              <div
                id="relocate"
                className="col animated fadeIn fast bg-primary px-2 py-1"
                style={{
                  zIndex: "99999999999999999999999",
                  position: "absolute",
                  top: "92.5px",
                  left: "0",
                  right: "0",
                  height: "50px",
                  width: "100%",
                  backdropFilter: "blur(7px)",
                  WebkitBackdropFilter: "blur(7px)"
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

          <div className="row js-fg" id="mapListWrapper"
            style={{
              position: "relative",
              bottom: "0",
              // left: "0",
              // right: "0",
              maxHeight: "calc(100% - 92.5px)",
            }}
          >
            <div className="col">
              < MapListWrapper />
            </div>
          </div>


        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log("mainwrapper state: ", state);
  return {
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
