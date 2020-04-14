import React, { Component } from 'react'

import { compose } from 'redux';
import { connect } from 'react-redux';

import { toggleMapList } from '../../../../../../store/actions/mapListActions';
import { modalToggled } from '../../../../../../store/actions/modalActions';
// import './style.module.css';

export class MapListBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      settingsToggled: false
    }
  }



  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.modalState.settingsModal !== prevProps.modalState.settingsModal) {

      this.setState({
        settingsToggled: !this.state.settingsToggled
      })

    }
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

  }

  render() {


    const {
      settingsModal
    } = this.props.modalState;

    return (

      <div className="container-fluid bg-primary">

        <div className="row"
          style={{
            height: "45px"
          }}
        >

          <div className="col-8 ai-fs">
            <button
              className="text-white bg-primary  ml-5"
              style={{
                // width: "60%",
                // background: "inherit"
              }}
              onClick={this.toggleMapList}
            >
              <em>Map / List</em>
            </button>
          </div>

          <div className="col-4">
            <div className="row ">
              <div className="col">
                <button
                  className="text-white"
                  style={{
                    // width: "fit-content !important",
                    // margin: "0 !important"
                  }}
                  onClick={this.toggleFilters}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="30" height="30"
                    viewBox="0 0 172 172"
                    style={{ fill: "#f5f5f5", }}
                    className=""
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
              </div>

              <div className="col">
                <button
                  className="rs div-button text-white bg-primary"
                  style={{
                    width: "50%",
                    background: this.state.settingsToggled ? "inherit" : "inherit",
                  }}
                  onClick={e => this.settingsClicked(e)}

                // TURN BACK ON
                >

                  {
                    this.state.settingsToggled ?

                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        className="animated heartBeat slow"
                        width="34" height="34"
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

                      // <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                      //   width="34" height="34"
                      //   viewBox="0 0 226 226"
                      //   style={{ fill: "#f5f5f5;" }}>
                      //   <g fill="none" fill-rule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}>
                      //     <path d="M0,226v-226h226v226z" fill="#0abab5" />
                      //     <g fill="#f5f5f5">
                      //       <path d="M113,9.41667c-31.20683,0 -56.5,25.29317 -56.5,56.5c0,40.35983 56.5,103.58333 56.5,103.58333c0,0 56.5,-63.2235 56.5,-103.58333c0,-31.20683 -25.29317,-56.5 -56.5,-56.5zM113,28.25c20.77317,0 37.66667,16.8935 37.66667,37.66667c0,18.9275 -19.59564,50.47686 -37.68506,74.00911c-18.08942,-23.49458 -37.64828,-55.02511 -37.64828,-74.00911c0,-20.77317 16.8935,-37.66667 37.66667,-37.66667zM113,47.08333c-10.40136,0 -18.83333,8.43197 -18.83333,18.83333c0,10.40136 8.43197,18.83333 18.83333,18.83333c10.40136,0 18.83333,-8.43197 18.83333,-18.83333c0,-10.40136 -8.43197,-18.83333 -18.83333,-18.83333zM70.44108,145.3514c-30.59475,6.215 -51.60775,18.8941 -51.60775,33.56527c0,20.80142 42.15842,37.66667 94.16667,37.66667c52.00825,0 94.16667,-16.86525 94.16667,-37.66667c0,-14.67117 -21.013,-27.34085 -51.60775,-33.56527c-4.25633,6.22442 -8.42541,11.92974 -12.26741,16.92057c25.72633,3.8985 40.95706,12.0498 44.56364,16.6263c-4.84958,6.1585 -30.63492,18.83333 -74.83675,18.83333l-0.01839,0.03678l-0.01839,-0.01839c-44.20183,0 -69.97775,-12.66542 -74.83675,-18.83333c3.60658,-4.58592 18.82789,-12.75561 44.56364,-16.64469c-3.842,-5.00025 -8.01108,-10.70557 -12.26741,-16.92057z" />
                      //     </g>
                      //   </g>
                      // </svg>

                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="34" height="34"
                        viewBox="0 0 226 226"
                        style={{ fill: "#f5f5f5" }}>
                        <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                          <path d="M0,226v-226h226v226z" fill="#0abab5" />
                          <g fill="#f5f5f5">
                            <path d="M37.66667,18.83333v47.08333h47.08333l-14.71354,-14.71354c12.18702,-8.49491 26.93616,-13.53646 42.96354,-13.53646c41.7221,0 75.33333,33.61123 75.33333,75.33333h18.83333c0,-51.89839 -42.26827,-94.16667 -94.16667,-94.16667c-21.15721,0 -40.75876,7.01238 -56.5,18.83333zM113,65.91667c-20.80142,0 -37.66667,16.86525 -37.66667,37.66667c0,28.25 37.66667,65.91667 37.66667,65.91667c0,0 37.66667,-37.66667 37.66667,-65.91667c0,-20.80142 -16.86525,-37.66667 -37.66667,-37.66667zM113,84.75c10.38658,0 18.83333,8.44675 18.83333,18.83333c0,9.64267 -8.90861,24.58545 -18.81494,37.33561c-9.84042,-12.7125 -18.85172,-27.7777 -18.85172,-37.33561c0,-10.38658 8.44675,-18.83333 18.83333,-18.83333zM18.83333,113c0,51.8984 42.26827,94.16667 94.16667,94.16667c21.15722,0 40.75876,-7.01238 56.5,-18.83333l18.83333,18.83333v-47.08333h-47.08333l14.71354,14.71354c-12.18701,8.49491 -26.93616,13.53646 -42.96354,13.53646c-41.72211,0 -75.33333,-33.61123 -75.33333,-75.33333z" />
                          </g>
                        </g>
                      </svg>

                    // <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    //   width="34" height="34"
                    //   viewBox="0 0 172 172"
                    //   style={{ fill: "#f5f5f5" }}>
                    //   <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                    //     <path d="M0,172v-172h172v172z" fill="#0abab5">
                    //     </path>
                    //     <g fill="#f5f5f5">
                    //       <path d="M70.88281,16.125l-0.83984,4.36719l-3.19141,15.95703c-5.12305,2.01563 -9.74219,4.8501 -13.94141,8.23047l-15.62109,-5.375l-4.19922,-1.34375l-2.18359,3.86328l-10.75,18.47656l-2.18359,3.86328l3.19141,2.85547l12.09375,10.58203c-0.44092,2.75049 -1.00781,5.50098 -1.00781,8.39844c0,2.89746 0.5669,5.64795 1.00781,8.39844l-12.09375,10.58203l-3.19141,2.85547l2.18359,3.86328l10.75,18.47656l2.18359,3.86328l4.19922,-1.34375l15.62109,-5.375c4.19922,3.38037 8.81836,6.21484 13.94141,8.23047l3.19141,15.95703l0.83984,4.36719h30.23438l0.83984,-4.36719l3.19141,-15.95703c5.12305,-2.01562 9.74219,-4.8501 13.94141,-8.23047l15.62109,5.375l4.19922,1.34375l2.18359,-3.86328l10.75,-18.47656l2.18359,-3.86328l-3.19141,-2.85547l-12.09375,-10.58203c0.44092,-2.75049 1.00781,-5.50097 1.00781,-8.39844c0,-2.89746 -0.5669,-5.64795 -1.00781,-8.39844l12.09375,-10.58203l3.19141,-2.85547l-2.18359,-3.86328l-10.75,-18.47656l-2.18359,-3.86328l-4.19922,1.34375l-15.62109,5.375c-4.19922,-3.38037 -8.81836,-6.21484 -13.94141,-8.23047l-3.19141,-15.95703l-0.83984,-4.36719zM79.61719,26.875h12.76563l2.6875,13.94141l0.67188,3.19141l3.02344,1.00781c6.10986,1.91065 11.65283,5.14404 16.29297,9.40625l2.35156,2.18359l3.02344,-1.00781l13.60547,-4.70312l6.38281,10.91797l-10.75,9.57422l-2.51953,2.01563l0.83984,3.19141c0.69287,3.06543 1.00781,6.19385 1.00781,9.40625c0,3.2124 -0.31494,6.34082 -1.00781,9.40625l-0.67187,3.19141l2.35156,2.01563l10.75,9.57422l-6.38281,10.91797l-13.60547,-4.70312l-3.02344,-1.00781l-2.35156,2.18359c-4.64014,4.26221 -10.1831,7.4956 -16.29297,9.40625l-3.02344,1.00781l-0.67187,3.19141l-2.6875,13.94141h-12.76562l-2.6875,-13.94141l-0.67187,-3.19141l-3.02344,-1.00781c-6.10986,-1.91065 -11.65283,-5.14404 -16.29297,-9.40625l-2.35156,-2.18359l-3.02344,1.00781l-13.60547,4.70313l-6.38281,-10.91797l10.75,-9.57422l2.51953,-2.01562l-0.83984,-3.19141c-0.69287,-3.06543 -1.00781,-6.19385 -1.00781,-9.40625c0,-3.2124 0.31494,-6.34082 1.00781,-9.40625l0.83984,-3.19141l-2.51953,-2.01562l-10.75,-9.57422l6.38281,-10.91797l13.60547,4.70313l3.02344,1.00781l2.35156,-2.18359c4.64014,-4.26221 10.1831,-7.4956 16.29297,-9.40625l3.02344,-1.00781l0.67188,-3.19141zM86,59.125c-14.78125,0 -26.875,12.09375 -26.875,26.875c0,14.78125 12.09375,26.875 26.875,26.875c14.78125,0 26.875,-12.09375 26.875,-26.875c0,-14.78125 -12.09375,-26.875 -26.875,-26.875zM86,69.875c8.96533,0 16.125,7.15967 16.125,16.125c0,8.96533 -7.15967,16.125 -16.125,16.125c-8.96533,0 -16.125,-7.15967 -16.125,-16.125c0,-8.96533 7.15967,-16.125 16.125,-16.125z">
                    //       </path>
                    //     </g>
                    //   </g>
                    // </svg>
                  }
                </button>
              </div>
            </div>
          </div>

        </div>


        <div className="row"
          style={{
            height: "47.5px"
          }}
        >
          <div className="col">
            <div id="mapListScrollbar" className="row jc-fs"
              style={{
                overflowX: "scroll"
              }}
            >

              <div className="spacer-div" >&nbsp;</div>

              <button className="bg-primary-xlight filter-toggle mx-1 px-2" style={{ fontSize: "13px" }}>
                <em>Family-friendly</em>
              </button>

              <button className="bg-primary-xlight filter-toggle mx-1 px-2" style={{ fontSize: "13px" }}>
                <em>Free, no fee</em>
              </button>

              <button className="bg-primary-xlight filter-toggle mx-1 px-2" style={{ fontSize: "13px" }}>
                <em>Nearest bathroom, pronto!</em>
              </button>

              <button className="bg-primary-xlight filter-toggle mx-1 px-2" style={{ fontSize: "13px" }}>
                <em>Really, really clean</em>
              </button>

              <button className="bg-primary-xlight filter-toggle mx-1 px-2" style={{ fontSize: "13px" }}>
                <em>Baby changing</em>
              </button>

              <div className="spacer-div" >&nbsp;</div>

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
    selectedSectionValue: state.mapListState.selectedSectionValue,
    // geolocationValue: state.geolocationState.geolocationValue,
    boundsValue: state.boundsState.boundsValue,
    // reviews: state.firestore.ordered.reviews,
    // auth: state.firebase.auth
    mapListToggleValue: state.mapListState.mapListToggleValue,
    modalState: state.modalState,
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
