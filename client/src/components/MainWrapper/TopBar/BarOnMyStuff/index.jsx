import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';

export class TopBar extends Component {


  render() {
    const displayValue = this.props.selectedSectionValue === "myStuff" ? "flex" : "none";

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
            background: "red"
          }
        }
      >
       My Stuff
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