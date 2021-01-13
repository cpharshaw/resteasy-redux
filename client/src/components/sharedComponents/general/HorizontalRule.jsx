import React, { Component } from 'react'

export const HorizontalRule = (props) => (

  <hr
    style={{
      borderTop: "1px dotted lightgrey",
      width: props.data_width ? props.data_width : "70%",
      margin: "5.5px 4px 5.5px 4px",
    }}
  />
)

export default HorizontalRule;
