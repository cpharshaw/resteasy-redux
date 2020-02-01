import React, { Component } from 'react'

export class FieldWrapper extends Component {

  render() {

    const {
      data_htmlFor,
      data_id,
      data_name,
      data_value,
      data_className,
      data_flexDirection,
      data_width,
      data_height,
      children
    } = this.props;


    return (
      <div
        id={data_id}
        className="rs"
        style={{
          width: data_width ? data_width : null,
          height: data_height ? data_height : null,
          // height: "42px",
          // flexGrow: "1",
          // maxHeight: "180px",
          // height: data_height ? data_height : "42px",
          // flexDirection: data_flexDirection ? data_flexDirection : "row",
        }}
      >
        {children}
      </div>
    )
  }
}

export default FieldWrapper;
