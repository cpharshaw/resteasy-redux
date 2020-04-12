import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { modalToggled }            from '../../../../store/actions/modalActions';
import { getPlacesFromFoursquare } from '../../../../store/actions/foursquareActions';

export class LocationSelector extends Component {

  buttonClicked(e) {

    e.preventDefault();

    console.log("location button clicked")

    this.props.modalToggled("formLocationModal");

    //update list
    const ctrLat = this.props.centerLatValue;
    const ctrLng = this.props.centerLngValue;
    const fsLL = ctrLat + "," + ctrLng;
    this.props.getPlacesFromFoursquare(fsLL);
    console.log("update fs in review")

  }


  render() {

    const {
      data_height,
      data_width,
    } = this.props;

    return (
      <button
        id="locationSelectorButton"
        className=""
        // onClick={e => this.buttonClicked(e)}
        style={{
          width: data_width ? data_width : null,
          height: data_height ? data_height : null,
          border: "1.5px dashed lightgrey",
          borderRadius: "5px",
          backgroundColor: "rgb(230,230,230)"
        }}
      >
        <em><span style={{ color: "grey", fontSize: "14.5px" }}>Select location...</span></em>
      </button>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  // console.log("mainwrapper state: ", state);
  return {
    modalState: state.modalState,
    centerLatValue: state.centerState.centerLatValue,
    centerLngValue: state.centerState.centerLngValue,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    modalToggled: (selectedModal) => dispatch(modalToggled(selectedModal)),
    getPlacesFromFoursquare: location => dispatch(getPlacesFromFoursquare(location))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(LocationSelector);