import React, { Component } from 'react'

export class CreateReview extends Component {
  render() {
    return (
      <div
        id=""
        style={
          {
            position: "relative",
            height: "86vh",
            width: "100%",
            display: this.props.displayValue
          }
        }
      >
        create
      </div>
    )
  }
}

export default CreateReview;
