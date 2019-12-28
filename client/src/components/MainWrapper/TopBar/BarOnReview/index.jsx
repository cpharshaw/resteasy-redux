import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';

export class TopBar extends Component {


  render() {
    const displayValue = this.props.selectedSectionValue === "review" ? "flex" : "none";

    return (
      <div
        id=""
        style={
          {
            display: displayValue,
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            margin: "0 auto",
            padding: "0",
            border: "0",
            // background: "red"
          }
        }
      >
        <div
          style={
            {
              display: "flex",
              width: "17.5%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              margin: "0 auto",
              padding: "0",
              border: "0",
            }
          }
        >
          <button style={
            {
              width: "70%",
              height: "100%",
              margin: "0 auto",
              padding: "0",
              border: "0",
              background: "inherit"
            }
          }>
            <img
              src="https://img.icons8.com/material/36/000000/back--v1.png"
              style={
                {
                  margin: "0 auto",
                  padding: "0",
                  border: "0"
                }
              } />
          </button>
        </div>


        <div
          style={
            {
              display: "flex",
              width: "65%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              margin: "0 auto",
              padding: "0",
              border: "0",
            }
          }
        >
          New review
        </div>


        <div
          style={
            {
              display: "flex",
              width: "17.5%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              margin: "0 auto",
              padding: "0",
              border: "0",
            }
          }
        >
          <button
            style={
              {
                width: "70%",
                height: "100%",
                margin: "0 auto",
                padding: "0",
                border: "0",
                background: "inherit"
              }
            }
          >
            <img src="https://img.icons8.com/material/36/000000/plus--v1.png" />
          </button>
        </div>

      </div>

    )
  }
}


const mapStateToProps = (state, ownProps) => {
  // console.log("mainwrapper state: ", state);
  return {
    topBarState: state.topBarState,
    selectedSectionValue: ownProps.display
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(TopBar);