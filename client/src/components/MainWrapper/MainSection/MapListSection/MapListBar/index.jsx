import React, { Component } from 'react'

import { compose } from 'redux';
import { connect } from 'react-redux';
import { toggleMapList } from '../../../../../store/actions/mapListActions';
import { modalToggled } from '../../../../../store/actions/modalActions';
// import './style.module.css';

export class MapListBar extends Component {

  state = {
    settingsToggled: false
  }

  toggleMapList = () => {
    this.props.toggleMapList();
    // console.log("toggled map/list", this.props.mapListToggleValue);
  };

  toggleFilters = () => {
    // this.props.toggleMapList();
    // console.log("toggled map/list", this.props.mapListToggleValue);
  };

  settingsClicked(e) {
    e.preventDefault();
    // console.log("settings clicked", this.props.data_htmlFor.replace("Value", "Modal"));
    // console.log("store value", this.props.modalState);
    // const modalName = this.props.data_htmlFor.replace("Value", "Modal");

    this.props.modalToggled("settingsModal");

    this.setState({
      settingsToggled: !this.state.settingsToggled
    })
  }

  render() {
    return (
      <div
        id="mapListBar"
        className="bg-primary rs"
        style={{
          flexDirection: "column",
          height: "72px",
          background: "#0abab5"
          // zIndex: "15"
        }}
      >

        <div
          id="mapListTogglers"
          className="rs bg-primary"
          style={{
            height: "42px",
            flexWrap: "nowrap",
            justifyContent: "space-between"
            // background: "#0abab5"
          }}
        >


          <button
            className="rs div-button text-white bg-primary"
            style={{
              width: "60%",
              background: "inherit"
            }}
            onClick={this.toggleMapList}
          >
            <em>Map / List</em>
          </button>

          <div
            // id="mapListTogglers"
            className="rs bg-primary"
            style={{
              height: "42px",
              width: "40%",
              flexWrap: "nowrap",
              justifyContent: "space-around"
              // background: "#0abab5"
            }}
          >


            <button
              className="rs div-button text-white bg-primary"
              style={{
                width: "50%",
                background: "inherit"
              }}
              onClick={this.toggleFilters}
            >

              <svg
                xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="30" height="30"
                viewBox="0 0 172 172"
                style={{ fill: "#f5f5f5" }}
              >
                <g transform="">
                  <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"
                    style={{ mixBlendMode: "normal" }}
                  >
                    {/* <path d="M0,172v-172h172v172z" fill="#0abab5"></path> */}
                    <g fill="#f5f5f5">
                      <path d="M21.5,21.5v14.33333h7.16667l35.83333,57.33333v57.33333h43v-57.33333l35.83333,-57.33333h7.16667v-14.33333h-7.16667h-114.66667zM45.57552,35.83333h80.86295l-33.27181,53.2181v47.11524h-14.33333v-47.11524z"></path>
                    </g>
                    <path d="" fill="none"></path>
                  </g>
                </g>
              </svg>
            </button>





            <button
              className="rs div-button text-white bg-primary"
              style={{
                width: "50%",
                background: this.state.settingsToggled ? "inherit" : "inherit",
              }}
              onClick={e => this.settingsClicked(e)}
            >

              {
                this.state.settingsToggled ?

                  // <img
                  //   className="animated flipInX faster"
                  //   style={{ color: "white", background: "white" }}
                  //   src="https://img.icons8.com/material-outlined/30/000000/multiply--v1.png"
                  // />

                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    className="animated tada slow"
                    width="30" height="30"
                    viewBox="0 0 172 172"
                    style={{ fill: "#f5f5f5" }}>
                    <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                      <path d="M0,172v-172h172v172z" fill={this.state.settingsToggled ? "#0abab5" : "#0abab5"}>
                      </path>
                      <g fill="#f5f5f5">
                        <path d="M40.90039,30.76628l-10.13411,10.13411l45.09961,45.09961l-45.09961,45.09961l10.13411,10.13411l45.09961,-45.09961l45.09961,45.09961l10.13411,-10.13411l-45.09961,-45.09961l45.09961,-45.09961l-10.13411,-10.13411l-45.09961,45.09961z">
                        </path>
                      </g>
                    </g>
                  </svg>
                  
                  
                  
                  
                  :



                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="30" height="30"
                    viewBox="0 0 172 172"
                    style={{ fill: "#f5f5f5" }}>
                    <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                      <path d="M0,172v-172h172v172z" fill="#0abab5">
                      </path>
                      <g fill="#f5f5f5">
                        <path d="M70.88281,16.125l-0.83984,4.36719l-3.19141,15.95703c-5.12305,2.01563 -9.74219,4.8501 -13.94141,8.23047l-15.62109,-5.375l-4.19922,-1.34375l-2.18359,3.86328l-10.75,18.47656l-2.18359,3.86328l3.19141,2.85547l12.09375,10.58203c-0.44092,2.75049 -1.00781,5.50098 -1.00781,8.39844c0,2.89746 0.5669,5.64795 1.00781,8.39844l-12.09375,10.58203l-3.19141,2.85547l2.18359,3.86328l10.75,18.47656l2.18359,3.86328l4.19922,-1.34375l15.62109,-5.375c4.19922,3.38037 8.81836,6.21484 13.94141,8.23047l3.19141,15.95703l0.83984,4.36719h30.23438l0.83984,-4.36719l3.19141,-15.95703c5.12305,-2.01562 9.74219,-4.8501 13.94141,-8.23047l15.62109,5.375l4.19922,1.34375l2.18359,-3.86328l10.75,-18.47656l2.18359,-3.86328l-3.19141,-2.85547l-12.09375,-10.58203c0.44092,-2.75049 1.00781,-5.50097 1.00781,-8.39844c0,-2.89746 -0.5669,-5.64795 -1.00781,-8.39844l12.09375,-10.58203l3.19141,-2.85547l-2.18359,-3.86328l-10.75,-18.47656l-2.18359,-3.86328l-4.19922,1.34375l-15.62109,5.375c-4.19922,-3.38037 -8.81836,-6.21484 -13.94141,-8.23047l-3.19141,-15.95703l-0.83984,-4.36719zM79.61719,26.875h12.76563l2.6875,13.94141l0.67188,3.19141l3.02344,1.00781c6.10986,1.91065 11.65283,5.14404 16.29297,9.40625l2.35156,2.18359l3.02344,-1.00781l13.60547,-4.70312l6.38281,10.91797l-10.75,9.57422l-2.51953,2.01563l0.83984,3.19141c0.69287,3.06543 1.00781,6.19385 1.00781,9.40625c0,3.2124 -0.31494,6.34082 -1.00781,9.40625l-0.67187,3.19141l2.35156,2.01563l10.75,9.57422l-6.38281,10.91797l-13.60547,-4.70312l-3.02344,-1.00781l-2.35156,2.18359c-4.64014,4.26221 -10.1831,7.4956 -16.29297,9.40625l-3.02344,1.00781l-0.67187,3.19141l-2.6875,13.94141h-12.76562l-2.6875,-13.94141l-0.67187,-3.19141l-3.02344,-1.00781c-6.10986,-1.91065 -11.65283,-5.14404 -16.29297,-9.40625l-2.35156,-2.18359l-3.02344,1.00781l-13.60547,4.70313l-6.38281,-10.91797l10.75,-9.57422l2.51953,-2.01562l-0.83984,-3.19141c-0.69287,-3.06543 -1.00781,-6.19385 -1.00781,-9.40625c0,-3.2124 0.31494,-6.34082 1.00781,-9.40625l0.83984,-3.19141l-2.51953,-2.01562l-10.75,-9.57422l6.38281,-10.91797l13.60547,4.70313l3.02344,1.00781l2.35156,-2.18359c4.64014,-4.26221 10.1831,-7.4956 16.29297,-9.40625l3.02344,-1.00781l0.67188,-3.19141zM86,59.125c-14.78125,0 -26.875,12.09375 -26.875,26.875c0,14.78125 12.09375,26.875 26.875,26.875c14.78125,0 26.875,-12.09375 26.875,-26.875c0,-14.78125 -12.09375,-26.875 -26.875,-26.875zM86,69.875c8.96533,0 16.125,7.15967 16.125,16.125c0,8.96533 -7.15967,16.125 -16.125,16.125c-8.96533,0 -16.125,-7.15967 -16.125,-16.125c0,-8.96533 7.15967,-16.125 16.125,-16.125z">
                        </path>
                      </g>
                    </g>
                  </svg>
              }
            </button>



          </div>
        </div>


        <div
          id="mapListScrollbar"
          className="rs bg-primary"
          style={{
            height: "30px"
          }}
        >
          <div className="spacer-div" >&nbsp;</div>
          <button className="rs bg-primary-xlight filter-toggle">
            <em>Family-friendly</em>
          </button>

          <button className="rs bg-primary-xlight filter-toggle">
            <em>Free, no fee</em>
          </button>

          <button className="rs bg-primary-xlight filter-toggle">
            <em>Nearest bathroom, pronto!</em>
          </button>

          <button className="rs bg-primary-xlight filter-toggle">
            <em>Really, really clean</em>
          </button>

          <button className="rs bg-primary-xlight filter-toggle" >
            <em>Baby changing</em>
          </button>

          <div className="spacer-div" >&nbsp;</div>

        </div>

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
    mapListToggleValue: state.mapListState.mapListToggleValue
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMapList: () => dispatch(toggleMapList()),
    modalToggled: (selectedModal) => dispatch(modalToggled(selectedModal))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(MapListBar);
