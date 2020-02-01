import React, { Component } from 'react'

export class CheckInput extends Component {

  render() {

    const {
      data_htmlFor,
      data_id,
      data_name,
      data_value,
      data_className,
      func_changeHandler,
      children
    } = this.props;

    return (

      <input
        id={data_id}
        className="rs"
        value={data_value}
        name={data_name}
        onChange={func_changeHandler}
        type="checkbox"
        style={{
          WebkitAppearance: "checkbox",
        }}
      />
    )
  }
}

export default CheckInput;

