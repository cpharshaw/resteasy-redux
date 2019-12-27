import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';

import BarOnMapList from './BarOnMapList';
import BarOnMyStuff from './BarOnMyStuff';
import BarOnReview from './BarOnReview';


export class TopBar extends Component {


  render() {

    const { selectedSectionValue } = this.props;

    return (
      <div
        id=""
        style={
          {
            display: "flex",
            width: "100%",
            height: "42px",
            justifyContent: "space-between",
            alignItems: "center",
            alignContent: "center",
            margin: "0 auto",
            padding: "0",
            border: "0",
            background: "#44aacc"
          }
        }
      >
        < BarOnMapList display={selectedSectionValue} />
        < BarOnMyStuff display={selectedSectionValue}/>
        < BarOnReview  display={selectedSectionValue}/>

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