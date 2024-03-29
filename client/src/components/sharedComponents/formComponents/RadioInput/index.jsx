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
        className=""
        checked={data_checked ? data_checked : false}
        onChange={e => func_handlechange(e)}
        name={data_name}
        type="radio"
        style={{
          WebkitAppearance: "radio",
          MozAppearance: "radio",
          appearance: "radio",
          width: "initial",
          marginLeft: "5px",
          marginRight: "5px",
        }}
      />
    )
  }
}

export default RadioInput;

