import React, { Component } from 'react'

import { compose } from 'redux';
import { connect } from 'react-redux';
import { toggleMapList } from '../../../../../store/actions/mapListActions';
import './style.module.css';

export class MapListBar extends Component {

  toggleMapList = () => {
    this.props.toggleMapList();
    // console.log("toggled map/list", this.props.mapListToggleValue);
  };

  render() {
    return (
      <div
        style={
          {
            display: "flex",
            width: "100%",
            height: "72px",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            alignContent: "center",
            margin: "0 auto",
            padding: "0",
            border: "0",
            background: "#A2D4E6",
          }
        }
      >

        <div
          style={
            {
              display: "flex",
              width: "100%",
              height: "42px",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              margin: "0 auto",
              padding: "0",
              flexWrap: "nowrap",
              // background: "red"
            }
          }
        >

          <div
            style={
              {
                display: "flex",
                width: "27.5%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                margin: "0 auto",
                padding: "0",
                flexWrap: "nowrap"
              }
            }
          >
            <button
              style={
                {
                  width: "100%",
                  height: "100%",
                  margin: "0 auto",
                  padding: "0",
                  border: "0",
                  background: "inherit",
                  color: "black"
                }
              }
            >
              <em>Filters</em>
            </button>
          </div>

          <div
            style={
              {
                display: "flex",
                width: "45%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                margin: "0 auto",
                padding: "0",
                flexWrap: "nowrap"
              }
            }
          >
            <input
              style={
                {
                  width: "100%",
                  height: "75%",
                  border: "0",
                  margin: "0 auto",
                  padding: "8px",
                  borderRadius: "5px"
                }
              }
            />
          </div>

          <div
            style={
              {
                display: "flex",
                width: "27.5%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                margin: "0 auto",
                padding: "0"
              }
            }
          >
            <button
              onClick={this.toggleMapList}
              style={
                {
                  width: "100%",
                  height: "100%",
                  margin: "0 auto",
                  padding: "0",
                  border: "0",
                  background: "inherit",
                  // color: "black"
                }
              }
            >
              <em>Map/List</em>
            </button>
          </div>

        </div>


        <div
          id="mapListScrollbar"
          style={
            {
              display: "flex",
              width: "100%",
              height: "100%",
              justifyContent: "flex-start",
              alignItems: "center",
              alignContent: "center",
              margin: "0 auto",
              padding: "0",
              flexWrap: "nowrap",
              overflowX: "scroll",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
              zIndex: "10",
              // background: "orange"
            }
          }
        >


          <button
            style={
              {
                height: "90%",
                width: "fit-content",
                marginLeft: "2.5px",
                marginRight: "2.5px",
                color: "black",
                borderRadius: "7px",
                // border: "0.5px solid whitesmoke",
                fontSize: "12px",
                flexWrap: "nowrap",
                whiteSpace: "nowrap"
              }
            }
          >
            <em>Family-friendly</em>
          </button>

          <button
            style={
              {
                height: "90%",
                width: "fit-content",
                marginLeft: "2.5px",
                marginRight: "2.5px",
                color: "black",
                borderRadius: "7px",
                // border: "0.5px solid whitesmoke",
                fontSize: "12px",
                flexWrap: "nowrap",
                whiteSpace: "nowrap"
              }
            }
          >
            <em>Free</em>
          </button>

          <button
            style={
              {
                height: "90%",
                width: "fit-content",
                marginLeft: "2.5px",
                marginRight: "2.5px",
                color: "black",
                borderRadius: "7px",
                // border: "0.5px solid whitesmoke",
                fontSize: "12px",
                flexWrap: "nowrap",
                whiteSpace: "nowrap"
              }
            }
          >
            <em>Nearest bathroom, pronto!</em>
          </button>

          <button
            style={
              {
                height: "90%",
                width: "fit-content",
                marginLeft: "2.5px",
                marginRight: "2.5px",
                color: "black",
                borderRadius: "7px",
                // border: "0.5px solid whitesmoke",
                fontSize: "12px",
                flexWrap: "nowrap",
                whiteSpace: "nowrap"
              }
            }
          >
            <em>Really, really clean</em>
          </button>

          <button
            style={
              {
                height: "90%",
                width: "fit-content",
                marginLeft: "2.5px",
                marginRight: "2.5px",
                color: "black",
                borderRadius: "7px",
                // border: "0.5px solid whitesmoke",
                fontSize: "12px",
                flexWrap: "nowrap",
                whiteSpace: "nowrap"
              }
            }
          >
            <em>Baby changing</em>
          </button>

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
