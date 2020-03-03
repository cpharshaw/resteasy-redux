import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { formPrev } from '../../../../../store/actions/formActions';
import { modalToggled, modalClosed } from '../../../../../store/actions/modalActions';
// import ModalBlurBackground from '../ModalBlurBackground';

export class LocationModal extends Component {

  closeModal(e) {
    e.preventDefault();

    if (this.props.formStepValue === 6) {
      this.props.formPrev();
    }

    this.props.modalClosed();

  }

  render() {

    const {
      children,
      data_size,
      data_name
    } = this.props;

    const style = {
      position: 'absolute',
      top: "72px",
      // left: "0",
      // right: "0",
      // width: "85%",
      height: "50px",
      flexDirection: "row",
      boxShadow: "0 1px 3px #a8a8a8",
      // borderRadius: "5px",
      // background: "#f5f5f5",
      paddingTop: "3px",
      paddingBottom: "3px",
      paddingLeft: "9px",
      paddingRight:"9px",
      // overflowY: "auto",
      // justifyContent: "flex-start",
      // alignContent: "flex-start",
      background: "#0abab5"
    }


    return (

      <div
        id=""
        className="rs animated flipInX faster"
        style={style}
      >

        <input
          className="rs"
          type="text"
          placeholder="Recenter around location..."
          style={{
            width: "88%",
            fontStyle: "italic",
            fontSize: "14.5px",
            background: "#f5f5f5",
          }}
        />

          <div 
            className="rs"
            style={{
              width: "12%",
              background: "#f5f5f5",
            }}
          >
            <img src="https://img.icons8.com/material-outlined/25/000000/location-update.png" /> 
          </div>
      </div >

    )
  }
}


const mapStateToProps = (state, ownProps) => {
  // console.log("mainwrapper state: ", state);
  return {
    formStepValue: state.formState.formStepValue,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    formPrev: () => dispatch(formPrev()),
    modalToggled: (selectedModal) => dispatch(modalToggled(selectedModal)),
    modalClosed: () => dispatch(modalClosed())
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(LocationModal);