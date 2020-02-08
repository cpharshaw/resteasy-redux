import React, { Component } from 'react'

export class CheckInput extends Component {

  render() {

    const {
      data_htmlFor,
      data_id,
      data_name,
      data_value,
      data_className,
      func_handlechange,
      children
    } = this.props;

    return (

      <input
        id={data_id}
        className="rs"
        checked={data_value}
        name={data_name}
        onChange={func_handlechange}
        type="checkbox"
        style={{
          WebkitAppearance: "checkbox",
        }}
      />
    )
  }
}

export default CheckInput;

