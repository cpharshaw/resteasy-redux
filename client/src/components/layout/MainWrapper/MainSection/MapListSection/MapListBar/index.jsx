import React, { Component } from 'react'

import { compose } from 'redux';
import { connect } from 'react-redux';

import { toggleMapList } from '../../../../../../store/actions/mapListActions';
import { modalToggled, mapListModalToggled, closeMapListModals } from '../../../../../../store/actions/modalActions';
// import './style.module.css';

export class MapListBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locationPickerToggled: false,
      filtersToggled: false
    }
  }



  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.modalState.locationPickerModal !== prevProps.modalState.locationPickerModal) {

      return this.setState({
        locationPickerToggled: !this.state.locationPickerToggled
      })

    }

    if (this.props.modalState.filtersModal !== prevProps.modalState.filtersModal) {

      return this.setState({
        filtersToggled: !this.state.filtersToggled
      })

    }
  }

  toggleMapList = () => {
    this.props.toggleMapList();
    // console.log("toggled map/list", this.props.mapListToggleValue);
  };

  filtersClicked = (e) => {
    e.preventDefault();
    this.props.mapListModalToggled("filtersModal");
    // this.props.toggleMapList();
    // console.log("toggled map/list", this.props.mapListToggleValue);
  };

  locationPickerClicked(e) {
    e.preventDefault();
    // console.log("settings clicked", this.props.data_htmlFor.replace("Value", "Modal"));
    // console.log("store value", this.props.modalState);
    // const modalName = this.props.data_htmlFor.replace("Value", "Modal");

    this.props.mapListModalToggled("locationPickerModal");

  }

  closeMapListModalClicked(e) {
    e.preventDefault();
    // console.log("settings clicked", this.props.data_htmlFor.replace("Value", "Modal"));
    // console.log("store value", this.props.modalState);
    // const modalName = this.props.data_htmlFor.replace("Value", "Modal");

    this.props.closeMapListModals();
  }

  render() {


    const {
      locationPickerModal,
      filtersModal
    } = this.props.modalState;

    return (

      // <div className="container-fluid bg-primary">

      <div className="row bg-primary" id="mapListBarComponent">
        <div className="col">

          <div className="row" id="mapListBarTopRow"
            style={{
              height: "55px"
              // height: "45px"
            }}
          >

            <div className="col-8 ai-fs">
              <button
                className="text-white bg-primary  ml-5"
                onClick={this.toggleMapList}
              >
                <em>Map / List</em>
              </button>
            </div>

            <div className="col-4">
              <div className="row ">



                {
                  !this.state.locationPickerToggled && !this.state.filtersToggled ?
                    <div className="col-6">
                      <button
                        className="text-white"
                        onClick={e => this.filtersClicked(e)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                          width="30" height="30"
                          viewBox="0 0 172 172"
                          style={{ fill: "#f5f5f5", }}
                          className={this.state.locationPickerToggled || this.state.filtersToggled ? "animated fadeOut fastest" : null}
                        >
                          <g transform="">
                            <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"
                              style={{ mixBlendMode: "normal" }}
                            >
                              <g fill="#f5f5f5">
                                <path d="M21.5,21.5v14.33333h7.16667l35.83333,57.33333v57.33333h43v-57.33333l35.83333,-57.33333h7.16667v-14.33333h-7.16667h-114.66667zM45.57552,35.83333h80.86295l-33.27181,53.2181v47.11524h-14.33333v-47.11524z"></path>
                              </g>
                              <path d="" fill="none"></path>
                            </g>
                          </g>
                        </svg>
                      </button>
                    </div> : null
                }

                {
                  !this.state.locationPickerToggled && !this.state.filtersToggled ?
                    <div className="col-6">
                      <button
                        className="text-white"
                        // style={{
                        //   width: "50%",
                        //   background: this.state.locationPickerToggled ? "inherit" : "inherit",
                        // }}
                        onClick={e => this.locationPickerClicked(e)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                          className={this.state.locationPickerToggled || this.state.filtersToggled ? "animated fadeOut fastest" : null}
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
                      </button>
                    </div> : null
                }

                {
                  this.state.locationPickerToggled || this.state.filtersToggled ?
                    <>
                      <div className="col-6" />
                      <div className="col-6">
                        <button
                          className="text-white"
                          onClick={e => this.closeMapListModalClicked(e)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            className="animated flipInX heartBeat "
                            width="34" height="34"
                            viewBox="0 0 172 172"
                            style={{ fill: "#f5f5f5" }}>
                            <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                              <path d="M0,172v-172h172v172z" fill={this.state.locationPickerToggled ? "#0abab5" : "#0abab5"}>
                              </path>
                              <g fill="#f5f5f5">
                                <path d="M40.90039,30.76628l-10.13411,10.13411l45.09961,45.09961l-45.09961,45.09961l10.13411,10.13411l45.09961,-45.09961l45.09961,45.09961l10.13411,-10.13411l-45.09961,-45.09961l45.09961,-45.09961l-10.13411,-10.13411l-45.09961,45.09961z">
                                </path>
                              </g>
                            </g>
                          </svg>
                        </button>
                      </div>
                    </> : null
                }
              </div>
            </div>

          </div>


          {/* <div className="row" id="mapListBarBottomRow"
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

          </div> */}






        </div>
      </div>


    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    selectedSectionValue: state.mapListState.selectedSectionValue,
    // reviews: state.firestore.ordered.reviews,
    // auth: state.firebase.auth
    mapListToggleValue: state.mapListState.mapListToggleValue,
    modalState: state.modalState,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMapList: () => dispatch(toggleMapList()),
    modalToggled: (selectedModal) => dispatch(modalToggled(selectedModal)),
    mapListModalToggled: (selectedModal) => dispatch(mapListModalToggled(selectedModal)),
    closeMapListModals: () => dispatch(closeMapListModals())
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(MapListBar);
