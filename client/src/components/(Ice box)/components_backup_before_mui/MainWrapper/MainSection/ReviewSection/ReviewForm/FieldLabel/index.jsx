import React, { Component } from 'react'

export class FieldLabel extends Component {

  render() {

    const {
      data_htmlFor,
      data_text,
      data_justifyContent,
      children
    } = this.props;

    return (

      <label
        htmlFor={data_htmlFor}//"field01_label"
        style={
          {
            display: "flex",
            // flexGrow: "1",
            width: "55%",
            height: "100%",
            justifyContent: data_justifyContent ? data_justifyContent : "flex-start",
            alignItems: "center",
            alignContent: "center",
            alignSelf: "center",
            margin: "0 auto",
            padding: "0",
            textAlign: "center",
            flexWrap: "wrap",
            border: "0",
            fontSize: "11px",
            background: "red"
          }
        }
      >
        {children ? children : data_text}
      </label>

    )
  }
}

export default FieldLabel;