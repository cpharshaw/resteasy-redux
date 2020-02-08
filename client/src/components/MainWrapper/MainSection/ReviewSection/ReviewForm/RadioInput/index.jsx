import React, { Component } from 'react'

export class RadioInput extends Component {

  render() {

    const {
      data_htmlFor,
      data_id,
      data_value,
      data_name,
      data_checked,
      func_handlechange,
      data_className,
      children
    } = this.props;

    return (

      <input
        id={data_id}
        value={data_value}
        className="rs"
        checked={data_checked ? data_checked : false}
        onChange={func_handlechange}
        name={data_name}
        type="radio"
        style={{
          WebkitAppearance: "radio",
          width: "initial",
          marginLeft: "5px",
          marginRight: "5px",
        }}
      />
    )
  }
}

export default RadioInput;

