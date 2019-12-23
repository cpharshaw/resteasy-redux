import React, { Component } from 'react'

export class TopBar extends Component {
  render() {
    return (
      <div
        id=""
        style={
          {
            background: "grey",
            position: "absolute",
            top: "0",
            height: "7vh",
            width: "100%"
          }
        }
      >
        Stuff and controls and stuff
      </div>

    )
  }
}

export default TopBar;
