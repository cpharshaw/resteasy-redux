import React, { Component } from 'react'

export class ReviewModal extends Component {

  render() {

    const { 
      children,
      data_size
    } = this.props;

    const style = {
      boxShadow: "0 1px 3px #a8a8a8",
      borderRadius: "5px",
      background: "#f5f5f5",
      overflowY: "auto",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignContent: "flex-start"
    }

    if (data_size === "sm") {
      style.width = "82%"
      style.minHeight = "225px"
      style.height = "fit-content"
    } else {
      style.width = "90%"
      style.height = "90%"
    }



    return (

      <div
        id=""
        className="rs"
        style={style}
      >
        <div
          className="rs"
          style={{
            height: "35px",
            justifyContent: "flex-end",
            background: "transparent",
            paddingRight: "8px"
          }}
        >
          <span style={{color: "grey", fontSize: "24px"}}> &times; </span>
        </div>
        {children}
      </div>
    )
  }
}

export default ReviewModal;
