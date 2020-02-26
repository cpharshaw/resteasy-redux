import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { modalToggled } from '../../../../../../store/actions/modalActions';

export class LocationSelector extends Component {

  buttonClicked(e) {
    e.preventDefault();
    console.log("location button clicked")

    this.props.modalToggled("formLocationModal");
  }

  render() {

    const {
      data_height,
      data_width,
    } = this.props;

    return (
      <button
        id="locationSelectorButton"
        className="rs"
        onClick={e => this.buttonClicked(e)}
        style={{
          width: data_width ? data_width : null,
          height: data_height ? data_height : null,
          border: "1.25px dashed grey",
          borderRadius: "5px"
        }}
      >
        <em><span style={{color: "grey", fontSize: "14.5px"}}>Select location...</span></em>
      </button>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  // console.log("mainwrapper state: ", state);
  return {
    modalState: state.modalState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
     modalToggled: (selectedModal) => dispatch(modalToggled(selectedModal))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(LocationSelector);