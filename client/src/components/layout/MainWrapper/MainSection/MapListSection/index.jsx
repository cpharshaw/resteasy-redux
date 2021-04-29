import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import MapListBar from './MapListBar/';
import MapListWrapper from './MapListWrapper';
import ModalContainer from '../Modals';
// import LocationModal from '../Modals/LocationModal';

import LocationModal from '../Modals/ModalFormLocationSelector';
import { storeMapListGenderPreference } from '../../../../../store/actions/authActions';

export class MapListSection extends Component {

  componentDidUpdate() {
    const relocate = document.getElementById("relocate");
    const pacInput = document.getElementById("pac-input");
    if (relocate && pacInput) {
      pacInput.focus();
    }
  }

  genderPreferenceSelected = e => {
    e.preventDefault();
    const currentTarget_name = e.currentTarget.name;
    this.props.storeMapListGenderPreference(currentTarget_name);
  }


  render() {
    const { 
      selectedSectionValue, 
      mapListGenderPreference
    } = this.props;

    const {
      locationPickerModal,
      filtersModal
    } = this.props.modalState;

    const displayValue = selectedSectionValue === "mapList" ? "flex" : "none";

    return (
      // <div  className="container-fluid animated fadeIn fast" >

      <div className="row" id="maplistSection"
        style={{
          display: displayValue,
        }}
      >
        <div className="col jc-fs">

          <div className="row" id="mapListBar"
            style={{
              position: "absolute",
              top: "0",
              height: "55px"
              // height: "92.5px"
            }}
          >
            <div className="col">
              < MapListBar />
            </div>
          </div>

          {
            locationPickerModal ? (
              <div
                id="relocate"
                className="col animated fadeIn fast bg-primary px-2 py-1"
                style={{
                  zIndex: "999999999",
                  position: "absolute",
                  top: "55px",
                  // top: "92.5px",
                  left: "0",
                  right: "0",
                  height: "50px",
                  width: "100%",
                  backdropFilter: "blur(7px)",
                  WebkitBackdropFilter: "blur(7px)"
                }}
              >
                <LocationModal />
                {/* data_width="95%"
                data_height="92%"
                data_border="3px solid #0abab5" */}

              </div>
            ) :

              filtersModal ? (
                <div
                  id="relocate"
                  className="col animated fadeIn fast bg-primary px-2 py-1"
                  style={{
                    zIndex: "999999999",
                    position: "absolute",
                    top: "55px",
                    // top: "92.5px",
                    left: "0",
                    right: "0",
                    height: "50px",
                    width: "100%",
                    backdropFilter: "blur(7px)",
                    WebkitBackdropFilter: "blur(7px)"
                  }}
                >
                  <div className="row">

                    <button className={`${mapListGenderPreference === "All" ? "bg-primary-light" : "bg-primary-xlight"} filter-toggle mx-1 px-2`} style={{ fontSize: "13px" }} name="All"
                      onClick={e => this.genderPreferenceSelected(e)}
                    >
                      <em>All</em>
                    </button>


                    <button className={`${mapListGenderPreference === "Men's" ? "bg-primary-light" : "bg-primary-xlight"} filter-toggle mx-1 px-2`} style={{ fontSize: "13px" }} name="Men's"
                      onClick={e => this.genderPreferenceSelected(e)}
                    >
                      <em>Men's</em>
                    </button>


                    <button className={`${mapListGenderPreference === "Women's" ? "bg-primary-light" : "bg-primary-xlight"} filter-toggle mx-1 px-2`} style={{ fontSize: "13px" }} name="Women's"
                      onClick={e => this.genderPreferenceSelected(e)}
                    >
                      <em>Women's</em>
                    </button>


                    <button className={`${mapListGenderPreference === "Gender-Neutral" ? "bg-primary-light" : "bg-primary-xlight"} filter-toggle mx-1 px-2`} style={{ fontSize: "13px" }} name="Gender-Neutral"
                      onClick={e => this.genderPreferenceSelected(e)}
                    >
                      <em>Gender-Neutral</em>
                    </button>


                    {/* <div className="col-3"><span>Any</span></div>
                    <div className="col-3"><span>Men's</span></div>
                    <div className="col-3"><span>Women's</span></div>
                    <div className="col-3"><span>Gender-Neutral</span></div> */}
                  </div>
                </div>
              )

                : null
          }

          <div className="row js-fg" id="mapListWrapper"
            style={{
              position: "absolute",
              top: "55px",
              // top: "92.5px",
              bottom: "0",
              left: "0",
              right: "0",
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

    mapListGenderPreference: state.auth.mapListGenderPreference,
    mapListGenderPreferenceUpdates: state.auth.mapListGenderPreferenceUpdates,
    settingsGenderPreference: state.auth.settingsGenderPreference,
    settingsGenderPreferenceUpdates: state.auth.settingsGenderPreferenceUpdates,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeMapListGenderPreference: (input) => dispatch(storeMapListGenderPreference(input))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(MapListSection);
