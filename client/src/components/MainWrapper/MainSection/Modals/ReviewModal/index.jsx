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
      flexDirection: "column",
      // justifyContent: "flex-start",
      alignContent: "flex-start",
    }

    if (data_size === "sm") {
      style.width = "82.5%"
      // style.minHeight = "225px"
      // style.maxHeight = "450px"
      style.height = "225px"
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
            onClick={e => this.closeModal(e)}
            className="rs animated fadeIn "
            style={{
              fontSize: "24px",
              // pointerEvents: "all",
              paddingRight: "8px",
              height: "35px",
              background: "transparent",
              color: "grey",
              justifyContent: "flex-end",
              pointerEvents: "none",
            }}
          >
            <span style={{ pointerEvents: "all" }}>&times;</span>
          </div>
          <div
            className="rs"
            style={{
              // width: "inherit",
              // background: "red",
              // background: "#f5f5f5",
              overflowY: "auto",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignContent: "flex-start",
              margin: "-10px 0 0 0"
            }}
          >
            {children}
          </div>
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