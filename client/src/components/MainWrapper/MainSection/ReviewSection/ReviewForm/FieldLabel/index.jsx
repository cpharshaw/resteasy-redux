import React, { Component } from 'react'

export class FieldLabel extends Component {

  render() {

    const {
      data_htmlFor,
      data_text,
      children
    } = this.props;

    return (

      <label
        htmlFor={data_htmlFor}//"field01_label"
        style={
          {
            display: "flex",
            // flexGrow: "1",
            width: "30%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            alignSelf: "center",
            margin: "0 auto",
            padding: "0",
            textAlign: "center",
            flexWrap: "wrap",
            border: "0",
            // background: "red"
          }
        }
      >
        {data_text}
      </label>

    )
  }
}

export default FieldLabel;