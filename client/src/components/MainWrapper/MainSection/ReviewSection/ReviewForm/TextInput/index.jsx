import React, { Component } from 'react'

export class TextInput extends Component {

  render() {

    const {
      data_htmlFor,
      data_id,
      data_name,
      data_value,
      data_type,
      data_width,
      data_height,
      data_min,
      data_max,
      data_step,
      data_className,
      data_placeholder,
      func_handlechange,
      data_bgcolor,
      data_fontcolor,
      data_fontsize,
      data_textalign,
      children
    } = this.props;

    return (

      <input
        id={data_id}
        className="rs"
        value={data_value}
        name={data_name}
        type={data_type ? data_type : "text"}
        placeholder={data_placeholder}
        onChange={func_handlechange}
        min={data_min ? data_min : "0"}
        max={data_max ? data_max : "999.99"}
        step={data_step ? data_step : "0.05"}
        value={data_value}
        style={{
          width: data_width ? data_width : null,
          textAlign: data_textalign ? data_textalign : null,
          // height: data_height ? data_height : "80%",
          // borderBottom: "1px dotted lightgrey",
          backgroundColor: data_bgcolor ? data_bgcolor : null,
          color: data_fontcolor ? data_fontcolor : "grey",
          fontSize: data_fontsize ? data_fontsize : "12px"
        }}
      />
    )
  }
}

export default TextInput;

