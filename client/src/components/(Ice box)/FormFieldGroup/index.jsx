import React, { Component } from 'react'

export class FormFieldGroup extends Component {
  render() {

    const {
      data_bgcolor,
      data_width,
      data_height,
      data_margin,
      children
    } = this.props;

    return (
      <div
          id=""
          className="rs"
          style={{
            // width: "97%",
            flexDirection: "column",
            width: data_width ? data_width : null,
            height: data_height ? data_height : null,
            background: data_bgcolor ? data_bgcolor : null,
            margin: data_margin ? data_margin : null,
            // padding: "1.5%",
            // margin: "1.5%"
          }}
        >
          {children}
        </div>
    )
  }
}

export default FormFieldGroup;
