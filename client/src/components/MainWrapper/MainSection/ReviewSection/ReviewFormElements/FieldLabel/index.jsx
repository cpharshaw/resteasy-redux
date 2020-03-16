import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { modalToggled } from '../../../../../../store/actions/modalActions';

export class FieldLabel extends Component {

  labelClicked(e) {
    e.preventDefault();
    console.log("label clicked", this.props.data_htmlFor.replace("Value", "Modal"));
    // console.log("store value", this.props.modalState);
    const modalName = this.props.data_htmlFor.replace("Value", "Modal");

    this.props.modalToggled(modalName);
  }

  render() {

    const {
      data_htmlFor,
      data_id,
      data_text,
      data_bgcolor,
      data_fontcolor,
      data_fontsize,
      data_flexdirection,
      data_width,
      data_height,
      children
    } = this.props;

    return (

      <label
        id={data_id}
        className="rs"
        htmlFor={data_htmlFor}
        style={{
          width: data_width ? data_width : null,
          height: data_height ? data_height : null,
          // flexWrap: "wrap",
          flexDirection: data_flexdirection ? data_flexdirection : null,
          // backgroundColor: data_bgcolor ? data_bgcolor : null,
          // background: "white",
          // color: data_fontcolor ? data_fontcolor : null,
          // fontSize: data_fontsize ? data_fontsize : "14.5px"
        }}
      >
        <span
          className="rs"
          onClick={e => this.labelClicked(e)}
          style={{
            // color: data_fontcolor ? data_fontcolor : null,
            fontSize: data_fontsize ? data_fontsize : "14.5px",
            flexWrap: "wrap",
          }}
        >
          {children ? children : data_text} <sup><sup><sup>&nbsp;(i)</sup></sup></sup>
        </span>
      </label>

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
)(FieldLabel);