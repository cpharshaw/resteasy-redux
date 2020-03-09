import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { formPrev } from '../../../../../store/actions/formActions';
import { modalToggled, modalClosed } from '../../../../../store/actions/modalActions';
import ModalBlurBackground from '../ModalBlurBackground';

export class ReviewModal extends Component {

  closeModal(e) {
    e.preventDefault();

    if (this.props.formStepValue === 6) {
      this.props.formPrev();
    }

    this.props.modalClosed()

  }

  render() {

    const {
      children,
      data_size,
      data_name
    } = this.props;

    const style = {
      boxShadow: "0 1px 3px #a8a8a8",
      borderRadius: "5px",
      background: "#f5f5f5",
      overflowY: "auto",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignContent: "flex-start",
      // background: "transparent"
    }

    if (data_size === "sm") {
      style.width = "82.5%"
      style.minHeight = "225px"
      style.height = "fit-content"
    } else if (data_size === "loc") {
      style.width = "85%"
      style.height = "22.5%"
    }
    else {
      style.width = "95%"
      style.height = "95%"
    }



    return (

      <ModalBlurBackground>

        <div
          id=""
          className="rs animated zoomIn fast modal"
          style={style}
        >
          <div
            className="rs"
            style={{
              position: "fixed",
              width: "inherit",
              background: "transparent",
              // top: "0",
              // right: "0",
              // left: "0",
              height: "35px",
              justifyContent: "flex-end",
              // background: "transparent",
              paddingRight: "8px"
            }}
          >
            <span
              onClick={e => this.closeModal(e)}
              className="animated fadeIn slower delay-1s"
              style={{ color: "grey", fontSize: "24px" }}
            >
              &times;
            </span>
          </div>

          {children}

        </div>

      </ModalBlurBackground>


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
)(ReviewModal);