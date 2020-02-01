import React, { Component } from 'react'

export class FieldLabel extends Component {

  render() {

    const {
      data_htmlFor,
      data_id,
      data_text,
      data_justifyContent,
      data_bgcolor,
      data_fontcolor,
      data_fontsize,
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
          // height: data_height ? data_height : "80%",
          flexWrap: "wrap",
          // borderBottom: "1px dotted lightgrey",
          backgroundColor: data_bgcolor ? data_bgcolor : null,
          color: data_fontcolor ? data_fontcolor : null,
          fontSize: data_fontsize ? data_fontsize : "11px"
        }}
      >
        {children ? children : data_text}
      </label>

    )
  }
}

export default FieldLabel;