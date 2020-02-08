import React, { Component } from 'react'

import { compose } from 'redux';
import { connect } from 'react-redux';
import { toggleMapList } from '../../../../../store/actions/mapListActions';
// import './style.module.css';

export class MapListBar extends Component {

  toggleMapList = () => {
    this.props.toggleMapList();
    // console.log("toggled map/list", this.props.mapListToggleValue);
  };

  toggleFilters = () => {
    // this.props.toggleMapList();
    // console.log("toggled map/list", this.props.mapListToggleValue);
  };

  render() {
    return (
      <div
        id="mapListBar"
        className="rs"
        style={{
          flexDirection: "column",
          height: "72px",
          // zIndex: "15"
        }}
      >

        <div
          id="mapListTogglers"
          className="rs"
          style={{
            height: "42px",
            flexWrap: "nowrap",
          }}
        >

          <button
            className="rs div-button text-white"
            style={{
              width: "50%",
              background: "inherit"
            }}
            onClick={this.toggleFilters}
          >
            {/* <em>Filters</em> */}


            <svg
              xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="30" height="30"
              viewBox="0 0 172 172"
              style={{fill: "#f5f5f5"}}
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
            className="rs div-button text-white"
            style={{
              width: "50%",
              background: "inherit"
            }}
            onClick={this.toggleMapList}
          >
            <em>Map/List</em>
          </button>

        </div>


        <div 
          id="mapListScrollbar" 
          className="rs" 
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
    toggleMapList: () => dispatch(toggleMapList())
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(MapListBar);
