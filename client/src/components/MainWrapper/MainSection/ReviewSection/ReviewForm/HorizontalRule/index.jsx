import React, { Component } from 'react'

export class HorizontalRule extends Component {
  render() {
    return (
      <hr
        style={{
          borderTop: "1px dotted lightgrey",
          width: "94%"
        }}
      />
    )
  }
}

export default HorizontalRule;
