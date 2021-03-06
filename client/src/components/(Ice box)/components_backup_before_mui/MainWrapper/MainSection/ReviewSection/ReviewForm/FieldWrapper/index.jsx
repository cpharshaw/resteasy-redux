import React, { Component } from 'react'

export class FieldWrapper extends Component {

  render() {

    const {
      data_htmlFor,
      data_id,
      data_height,
      data_name,
      data_value,
      data_display,
      data_className,
      data_flexDirection,
      children
    } = this.props;

    const display_value = data_display ? data_display : "flex";

    return (
      <div
        id={data_id}
        style={
          {
            display: display_value,
            width: "97%",
            height: "42px",
            height: data_height ? data_height : "42px",
            flexGrow: "1",
            maxHeight: "180px",
            flexDirection: data_flexDirection ? data_flexDirection : "row",
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
