import React, { Component } from 'react'

export class RadioInput extends Component {

  render() {

    const {
      data_htmlFor,
      data_id,
      data_name,
      data_value,
      func_changeHandler,
      data_className,
      children
    } = this.props;

    return (

      <input
        id={data_id}
        className="rs"
        value={data_value}
        onChange={func_changeHandler}
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

