import React, { Component } from 'react'

export class RadioInput extends Component {

  render() {

    const {
      data_htmlFor,
      data_id,
      data_name,
      data_value,
      data_className,
      children
    } = this.props;

    return (
     
        <input
          id={data_id}
          value={data_value}
          name={data_name}
          type="radio"
          style={
            {
              display: "flex",
              // flexGrow: "1",
              // width: "65%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              // alignSelf: "center",
              margin: "0 auto",
              padding: "0",
              border: "0",
              // background: "green"
            }
          }
        >
        </input>
    )
  }
}

export default RadioInput;

