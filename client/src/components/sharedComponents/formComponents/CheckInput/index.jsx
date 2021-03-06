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
        className=""
        checked={data_value}
        name={data_name}
        onChange={e => func_handlechange(e)}
        type="checkbox"
        style={{
          margin: "0 auto",
          // width: "100%",
          // height: "100%", lol
          WebkitAppearance: "checkbox",
        }}
      />
    )
  }
}

export default CheckInput;

