import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';

export class TopBar extends Component {


  render() {

    return (
      <div
        id=""
        style={
          {
            position: "absolute",
            top: "0",
            width: "100%",
            // minHeight: "36px",
            height: "42px",
            // maxHeight: "48px",
            display: "flex",
            // flexWrap: "nowrap",
            justifyContent: "space-between",
            alignItems: "center",
            alignContent: "center",
            margin: "0 auto",
            background: "#44aacc",

            padding: "0",
            margin: "0"
          }
        }
      >


        <div
          style={
            {
              display: "flex",
              // flexWrap: "nowrap",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              margin: "0 auto",
              // background: "yellow",
              // position: "absolute",
              top: "0",
              height: "100%",
              minHeight: "36px",
              width: "17.5%",
              padding: "0",
              margin: "0"            
            }
          }
        >
          <button style={
            {
              // display: "none",
              background: "inherit",
              border: "0",
              height: "100%",
              minHeight: "36px",
              width: "70%",
              padding: "0",
              margin: "0"
            }
          }>
            <img 
            src="https://img.icons8.com/material/36/000000/back--v1.png" 
            style={
              {
                padding: "0",
                margin: "0"
              }
            }/>
          </button>
        </div>
        

        <div
          style={
            {
              display: "flex",
              // flexWrap: "nowrap",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              margin: "0 auto",
              // background: "#44aacc",
              // position: "absolute",
              top: "0",
              height: "100%",
              minHeight: "36px",
              width: "65%",
              padding: "0",
              margin: "0"
            }
          }
        >
          - Add review -
        </div>


        <div
          style={
            {
              display: "flex",
              // flexWrap: "nowrap",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              margin: "0 auto",
              // background: "inherit",
              // position: "absolute",
              top: "0",
              height: "100%",
              minHeight: "36px",
              width: "17.5%",
              padding: "0",
              margin: "0"
            }
          }
        >
          <button style={
            {
              // display: "none",
              background: "inherit",
              border: "0",
              height: "100%",
              width: "70%",
              padding: "0",
              margin: "0"          
            }
          }>
            <img src="https://img.icons8.com/material/36/000000/plus--v1.png" />
          </button>
        </div>




      </div>

    )
  }
}


const mapStateToProps = (state) => {
  // console.log("mainwrapper state: ", state);
  return {
    topBarState: state.topBarState,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(TopBar);