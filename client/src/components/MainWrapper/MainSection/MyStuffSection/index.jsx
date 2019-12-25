import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';


export class MyStuffSection extends Component {
  render() {

    const { myStuffDisplayValue } = this.props;

    // console.log("myStuffDisplayValue: ", myStuffDisplayValue);

    return (
      <div
        style={
          {
            "display":  myStuffDisplayValue 
          }
        }
      >
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>      
        MyStuffSection
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
    myStuffDisplayValue: ownProps.display
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(MyStuffSection);
