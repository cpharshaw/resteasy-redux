import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';

export class TopBar extends Component {


  render() {

    return (
      <div
        id=""
        className="rs"
        style={
          {
            // position: "static",
            // top: "0",
            // left: "0",
            // right: "0",
            height: "42px",
            background: "#0abab5",
            
            // boxShadow:  "0 -3.5px 3.5px 0 rgba(0, 0, 0, .6) inset",
            textShadow: "0 1px 5px rgba(0, 0, 0, .6)",
            // zIndex: "9999999999999",
            color: "#f5f5f5",
          }
        }
      >
        <em>Top Bar</em>
      </div>

    )
  }
}


const mapStateToProps = (state) => {
  // console.log("mainwrapper state: ", state);
  return {
    topBarState: state.topBarState,
    selectedSectionValue: state.sectionState.selectedSectionValue,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(TopBar);