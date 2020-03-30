import React, { Component } from 'react'

export class FormChunk extends Component {

  render() {

    const {
      data_width,
      data_height,
      data_bgcolor,
      data_margin,
      data_padding,
      children
    } = this.props;

    return (
      <div
        className="row-100 animated fadeIn faster"
        style={{
          // alignItems: "space-around",
          // height: data_height ? data_height : "calc(100% - 70px)",
          // width: data_width ? data_width : null,
          // margin: data_margin ? data_margin : null,
          // padding: data_padding ? data_padding : "25px 5px 15px 5px",
          background: "#f5f5f5"
        }}
      >
        <div className="col jc-sa ac-sa">
          {children}
        </div>
      </div>
    )
  }
}

export default FormChunk
