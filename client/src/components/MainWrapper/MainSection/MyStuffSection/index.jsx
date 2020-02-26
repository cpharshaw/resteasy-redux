import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';


export class MyStuffSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { selectedSectionValue } = this.props;

    const displayValue = selectedSectionValue === "myStuff" ? "flex" : "none";
    // const displayValue = "flex";
    // console.log("mystuff selectedSectionValue: ", selectedSectionValue);

    return (
      <div
        id="myStuffSection"
        // className="rs section"
        className="rs section animated fadeIn faster"
        style={
          {
            display: displayValue,
            overflowY: "scroll",
            overflowX: "scroll",
            background: "#f5f5f5",
            // boxShadow:  "0 -3.5px 3.5px 0 rgba(0, 0, 0, .6)",
            // zIndex: "900"
          }
        }
      >
        myStuff
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log("mainwrapper state: ", state);
  return {
    // selectedSectionValue: state.mapListState.selectedSectionValue,
    // geolocationValue: state.geolocationState.geolocationValue,
    boundsValue: state.boundsState.boundsValue,
    // reviews: state.firestore.ordered.reviews,
    // auth: state.firebase.auth
    selectedSectionValue: ownProps.display
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(MyStuffSection);
