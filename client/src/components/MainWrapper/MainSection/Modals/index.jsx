import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { modalClosed } from '../../../../store/actions/modalActions';


export class ModalContainer extends Component {

  closeModal = (e) => {
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
      data_name,
      modalClosed
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
      style.width = "92.5%"
      style.height = "92.5%"
    }

    return (

      <div
        id=""
        className="rs animated fadeIn faster"
        name={data_name ? data_name : null}
        style={{
          position: "absolute",
          backdropFilter: "blur(7px)",
          WebkitBackdropFilter: "blur(7px)",
          background: 'rgba(197,197,197,0.6)',
          // backgroundPosition: "center",
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",
          top: 0,
          right: 0,
          left: 0,
          width: "100vw",
          height: "calc(100% - 50px)",
          zIndex: "1000",
        }}
      >

        <div
          id=""
          className="rs animated zoomIn fast"
          style={style}
        >
          <div
            className="rs"
            style={{
              height: "35px",
              justifyContent: "flex-end",
              // background: "transparent",
              paddingRight: "8px"
            }}
          >
            {
              <span
                onClick={e => this.closeModal(e)}
                style={{ color: "grey", fontSize: "24px" }}
              >
                &times;
            </span>
            }
          </div>
          {children}

        </div>

      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  // console.log("mainwrapper state: ", state);
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // formPrev: () => dispatch(formPrev()),
    modalClosed: () => dispatch(modalClosed())
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(ModalContainer);