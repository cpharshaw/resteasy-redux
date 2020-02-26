import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { formPrev }       from '../../../../../store/actions/formActions';
import { modalToggled } from '../../../../../store/actions/modalActions';

export class ReviewModal extends Component {

  closeModal(e) {
    e.preventDefault();
    
    if (this.props.formStepValue === 6) {
      this.props.formPrev();
    }

    this.props.modalToggled(this.props.data_name)

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
      alignContent: "flex-start"
    }

    if (data_size === "sm") {
      style.width = "82.5%"
      style.minHeight = "225px"
      style.height = "fit-content"
    } else {
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
          background: 'rgba(197,197,197,0.6)',
          // background: 'blue',
          backdropFilter: "blur(6px)",
          top: 0,
          right: 0,
          // bottom: "50px",
          left: 0,
          width: "100vw",
          height: "calc(100% - 50px)",
          // height: "100vh",
          zIndex: "1000",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // justifyContent: "flex-start",
          // flexDirection: "column"
        }}
      >
        <div
          id=""
          className="rs animated zoomIn faster"
          style={style}
        >
          <div
            className="rs"
            style={{
              height: "35px",
              justifyContent: "flex-end",
              background: "transparent",
              paddingRight: "8px"
            }}
          >
            {
              this.props.formStepValue === 7 ? null : (
                <span onClick={e => this.closeModal(e)} style={{ color: "grey", fontSize: "24px" }}> &times; </span>
              )
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
    formStepValue: state.formState.formStepValue,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    formPrev: () => dispatch(formPrev()),
    modalToggled: (selectedModal) => dispatch(modalToggled(selectedModal))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(ReviewModal);