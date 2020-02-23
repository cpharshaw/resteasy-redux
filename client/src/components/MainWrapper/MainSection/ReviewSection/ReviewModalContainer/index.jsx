import React, { Component } from 'react'

export class ModalContainer extends Component {

  render() {

    const { children } = this.props;

    return (

      <div
        id=""
        className="rs"
        style={{
          position: "absolute",
          background: 'rgba(197,197,197,0.6)',
          // background: 'blue',
          backdropFilter: "blur(6px)",
          top: 0,
          right: 0,
          bottom: "50px",
          left: 0,
          width: "100vw",
          height: "calc(100% - 50px)",
          zIndex: "1000",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // justifyContent: "flex-start",
          // flexDirection: "column"
        }}
      >
        {children}
      </div>
    )
  }
}

export default ModalContainer;
