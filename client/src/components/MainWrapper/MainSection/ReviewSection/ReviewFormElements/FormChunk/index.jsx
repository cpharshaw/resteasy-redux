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
        className="rs animated fadeIn faster"
        style={{
          // all: "unset",
          flexDirection: "column",
          alignContent: "space-around",
          justifyContent: "space-around",
          // alignItems: "space-around",
          height: data_height ? data_height : null,
          width: data_width ? data_width : null,
          margin: data_margin ? data_margin: null,
          padding: data_padding ? data_padding: "25px 5px 15px 5px",
          // backgroundColor: data_bgcolor
        }}
      >
        {children}
      </div>
    )
  }
}

export default FormChunk
