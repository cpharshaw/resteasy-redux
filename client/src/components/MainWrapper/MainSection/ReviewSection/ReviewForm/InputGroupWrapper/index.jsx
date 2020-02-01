import React, { Component } from 'react'

export class InputGroupWrapper extends Component {

  render() {

    const {
      data_htmlFor,
      data_id,
      data_name,
      data_value,
      data_className,
      data_bgcolor,
      data_width,
      data_height,
      children
    } = this.props;

    return (
      <div
        id={data_id}
        className="rs"
        style={{
          // flexGrow: "1",
          width: data_width ? data_width : null,
          height: data_height ? data_height : null,
          // background: "grey",
          justifyContent: "space-evenly",
          margin: "0",
          backgroundColor: data_bgcolor ? data_bgcolor : null,
        }}
      >
        {children}
      </div>
    )
  }
}

export default InputGroupWrapper;
