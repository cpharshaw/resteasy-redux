import React, { Component } from 'react'

export class FieldWrapper extends Component {

  render() {

    const {
      data_htmlFor,
      data_id,
      data_name,
      data_value,
      data_className,
      children
    } = this.props;


    return (
      <div
        id={data_id}
        style={
          {
            display: "flex",
            width: "97%",
            height: "61px",
            flexGrow: "1",
            maxHeight: "180px",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            margin: "0 auto",
            padding: "0",
            border: "0",
            // background: "grey"
          }
        }
      >
        {children}
      </div>
    )
  }
}

export default FieldWrapper;
