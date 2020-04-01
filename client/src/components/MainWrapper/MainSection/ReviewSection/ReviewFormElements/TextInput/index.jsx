import React, { Component } from 'react'

export class TextInput extends Component {

  render() {

    const {
      data_htmlFor,
      data_id,
      data_name,
      data_type,
      data_width,
      data_height,
      data_min,
      data_max,
      data_step,
      data_className,
      data_placeholder,
      data_bgcolor,
      data_fontcolor,
      data_fontsize,
      data_textalign,
      data_value,
      func_handlechange,      
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
        onChange={e => func_handlechange(e)}
        min={data_min ? data_min : "0"}
        max={data_max ? data_max : "999.99"}
        step={data_step ? data_step : "0.05"}
        style={{
          width: data_width ? data_width : "95%",
          // flexGrow: null ? data_width : 1,
          height: data_height ? data_height : "100%",
          textAlign: data_textalign ? data_textalign : null,
          // height: data_height ? data_height : "80%",
          // borderBottom: "1px dotted lightgrey",
          backgroundColor: data_bgcolor ? data_bgcolor : "inherit",
          color: data_fontcolor ? data_fontcolor : "grey",
          borderBottom: "0.5px solid lightgrey",
          // borderRadius: "5px",
          fontSize: data_fontsize ? data_fontsize : "14.5px",
          fontStyle: "italic"
        }}
      />
    )
  }
}

export default TextInput;

