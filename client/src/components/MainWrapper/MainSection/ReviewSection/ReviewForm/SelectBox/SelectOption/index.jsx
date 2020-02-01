import React, { Component } from 'react'

export class SelectOption extends Component {

  render() {
    
    const {
      data_key,
      data_id,
      data_value,
      data_disabled,
      data_text
    } = this.props

    return (
      <option
        key={data_key}
        id={data_id}
        className="rs"
        value={data_value ? data_value : "[ENTER_VALUE]"}
        {...data_disabled}
      >
        {data_text}
      </option>
    )
  }
}

export default SelectOption;
