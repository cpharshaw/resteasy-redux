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
            // flexWrap: "nowrap",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            alignContent: "center",
            margin: "0 auto",
            background: "red",
            position: "relative",
            // top: "0",
            height: "72px",
            // minHeight: "32px",
            // maxHeight: "42px",
            width: "100%",
            padding: "0",
            margin: "0"
          }
        }
      >

        <div
          style={
            {
              display: "flex",
              flexWrap: "nowrap",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              margin: "0 auto",
              // background: "orange",
              position: "relative",
              // top: "0",
              height: "42px",
              // minHeight: "32px",
              // maxHeight: "42px",
              width: "100%",
              padding: "0",
              margin: "0"
            }
          }
        >

          <div
            style={
              {
                // background: "red",
                display: "flex",
                flexWrap: "nowrap",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                margin: "0 auto",
                position: "relative",
                // top: "0",
                height: "30px",
                // minHeight: "32px",
                // maxHeight: "42px",
                width: "27.5%",
                padding: "0",
                margin: "0"
              }
            }
          >
            <button
              style={
                {
                  // display: "none",
                  background: "inherit",
                  border: "0",
                  height: "100%",
                  width: "100%",
                  padding: "0",
                  margin: "0",
                  color: "black"
                }
              }>
              <em>Filters</em>
            </button>
          </div>

          <div
            style={
              {
                // background: "green",
                display: "flex",
                flexWrap: "nowrap",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                margin: "0 auto",
                position: "relative",
                // top: "0",
                height: "100%",
                // minHeight: "32px",
                // maxHeight: "42px",
                width: "45%",
                padding: "0",
                margin: "0"
              }
            }
          >
            <input
              style={
                {
                  width: "100%",
                  height: "85%",
                  border: "0",
                  padding: "8px"
                }
              }
            />
          </div>

          <div
            style={
              {
                // background: "blue",
                color: "white",
                display: "flex",
                flexWrap: "nowrap",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                margin: "0 auto",

                position: "relative",
                // top: "0",
                height: "100%",
                // minHeight: "32px",
                // maxHeight: "42px",
                width: "27.5%",
                padding: "0",
                margin: "0",
                borderRadius: "10px"
              }
            }
          >
            <button
              onClick={this.toggleMapList}
              style={
                {
                  // display: "none",
                  background: "inherit",
                  border: "0",
                  height: "100%",
                  width: "100%",
                  padding: "0",
                  margin: "0",
                  color: "black"
                }
              }>
              <em>Map/List</em>
            </button>
          </div>

        </div>


        <div
          id = "mapListScrollbar" 
          style = {
            {
              display: "flex",
              // flexWrap: "nowrap",
              justifyContent: "flex-start",
              alignItems: "center",
              alignContent: "center",
              margin: "0 auto",
              background: "orange",
              position: "relative",
              // top: "0",
              height: "100%",
              // minHeight: "32px",
              // maxHeight: "42px",
              width: "100%",
              padding: "0",
              margin: "0",
              flexWrap: "nowrap",
              overflowX: "scroll",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
              zIndex: "10"
              // webkitScrollbar: 
              // whiteSpace: "nowrap",
              // background: "teal"
            }
          }
        >


          <button
            style={
              {
                // display: "none",
                // background: "inherit",
                height: "90%",
                width: "fit-content",
                marginLeft: "2.5px",
                marginRight: "2.5px",
                color: "black",
                borderRadius: "10px",
                border: "1px solid grey",
                fontSize: "12px",
                flexWrap: "nowrap",
                whiteSpace: "nowrap",
                // overflow: "hidden",
                // textOverflow: "ellipsis"
              }
            }>
            <em>Family friendly</em>
          </button>

          <button
            style={
              {
                // display: "none",
                // background: "inherit",
                height: "90%",
                width: "fit-content",
                marginLeft: "2.5px",
                marginRight: "2.5px",
                color: "black",
                borderRadius: "10px",
                border: "1px solid grey",
                fontSize: "12px",
                flexWrap: "nowrap",
                whiteSpace: "nowrap",
                // overflow: "hidden",
                // textOverflow: "ellipsis"
              }
            }>
            <em>Free</em>
          </button>

          <button
            style={
              {
                // display: "none",
                // background: "inherit",
                height: "90%",
                width: "fit-content",
                marginLeft: "2.5px",
                marginRight: "2.5px",
                color: "black",
                borderRadius: "10px",
                border: "1px solid grey",
                fontSize: "12px",
                flexWrap: "nowrap",
                whiteSpace: "nowrap",
                // overflow: "hidden",
                // textOverflow: "ellipsis"
              }
            }>
            <em>Nearest bathroom, pronto!</em>
          </button>

          <button
            style={
              {
                // display: "none",
                // background: "inherit",
                height: "90%",
                width: "fit-content",
                marginLeft: "2.5px",
                marginRight: "2.5px",
                color: "black",
                borderRadius: "10px",
                border: "1px solid grey",
                fontSize: "12px",
                flexWrap: "nowrap",
                whiteSpace: "nowrap",
                // overflow: "hidden",
                // textOverflow: "ellipsis"
              }
            }>
            <em>Really, really clean</em>
          </button>          

          <button
            style={
              {
                // display: "none",
                // background: "inherit",
                height: "90%",
                width: "fit-content",
                marginLeft: "2.5px",
                marginRight: "2.5px",
                color: "black",
                borderRadius: "10px",
                border: "1px solid grey",
                fontSize: "12px",
                flexWrap: "nowrap",
                whiteSpace: "nowrap",
                // overflow: "hidden",
                // textOverflow: "ellipsis"
              }
            }>
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
