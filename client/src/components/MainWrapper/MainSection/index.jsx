import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import ReviewSection from './ReviewSection/';
import MapListSection from './MapListSection/';
import MyStuffSection from './MyStuffSection/';


export class MainSection extends Component {


  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.selectedSectionValue !== prevProps.selectedSectionValue) {
      // console.log("new section: ", this.props.selectedSectionValue)
    }
  }

  render() {

    const { selectedSectionValue } = this.props;

    return (

      <div
        className="rs"
        style={{
          position: "fixed",
          bottom: "55px",
          height: "calc(100% - 55px)"
        }}
      >
        < ReviewSection  display={selectedSectionValue} />
        < MapListSection display={selectedSectionValue} />
        < MyStuffSection display={selectedSectionValue} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log("mainwrapper state: ", state);
  return {
    selectedSectionValue: state.sectionState.selectedSectionValue,
    // geolocationValue: state.geolocationState.geolocationValue,
    boundsValue: state.boundsState.boundsValue,
    // reviews: state.firestore.ordered.reviews,
    // auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(MainSection);