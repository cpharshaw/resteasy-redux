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
      data_className,
      data_placeholder,
      children
    } = this.props;

    return (

      <input
        id={data_id}
        value={data_value}
        name={data_name}
        type={data_type ? data_type : "number"}
        placeholder={data_placeholder}
        // pattern="^[+-]?[0-9]{1,3}(?:[0-9]*(?:[.,][0-9]{1})?|(?:,[0-9]{3})*(?:\.[0-9]{1,2})?|(?:\.[0-9]{3})*(?:,[0-9]{1,2})?)$"
        min="0"
        max="999.99"
        step="0.05"
        style={
          {
            display: "flex",
            // flexGrow: "1",
            width: data_width ? data_width : "50%",
            height: data_height ? data_height : "75%",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            textAlign: "center",
            // alignSelf: "center",
            margin: "0 auto",
            padding: "0",
            border: "0",
            borderBottom: "1px dotted lightgrey",
            fontSize: "12px",
            color: "grey",
            // borderRadius: "6px",
            background: "inherit",
          }
        }
      />
    )
  }
}

export default TextInput;

