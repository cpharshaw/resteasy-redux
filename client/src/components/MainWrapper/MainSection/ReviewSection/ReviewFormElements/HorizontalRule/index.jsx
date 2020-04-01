import React, { Component } from 'react'

export class HorizontalRule extends Component {
  render() {
    return (
      <hr
        // className="rs"
        style={{
          borderTop: "1px dotted lightgrey",
          width: "91%",
          margin: "8px 4px 8px 4px",
          // padding: "0"
        }}
      />
    )
  }
}

export default HorizontalRule;
