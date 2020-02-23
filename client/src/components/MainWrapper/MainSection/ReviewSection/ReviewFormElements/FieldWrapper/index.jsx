import React, { Component } from 'react'

export class FieldWrapper extends Component {

  render() {

    const {
      data_htmlFor,
      data_id,
      data_name,
      data_value,
      data_className,
      data_flexdirection,
      data_width,
      data_display,
      data_visibility,
      data_margin,
      data_height,
      children
    } = this.props;


    return (
      <div
        id={data_id}
        className="rs"
        style={{
          // display: data_visibility === "none" ? data_display : null,
          visibility: data_visibility ? data_visibility : null,
          width: data_width ? data_width : null,
          flexDirection: data_flexdirection ? data_flexdirection : null,
          height: data_height ? data_height : null,
          margin: data_margin ? data_margin : null,
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
