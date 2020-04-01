import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { formNext } from '../../../../../../store/actions/formActions';


export class ReviewSection0 extends Component {

  nextStep = () => {
    console.log();
    this.props.formNext();
  }

  render() {

    return (
      <div className="row-100">
        <div className="col jc-c">
          <p
            className="animated flipInX fadeIn"
            style={{
              fontSize: "30px",
              color: "whitesmoke",
              textShadow: "0px 0px 5.5px #212529",
              fontWeight: "700",
              fontStyle: "italic"
            }}
          >rest☆easy
          </p>
          <div
            style={{
              position: "relative",
              width: "85%",
              height: "fit-content",
              padding: "10px 12.5px 10px 12.5px",
              // opacity: "0.5",
              // background: "#f5f5f5",
              borderRadius: "12px",
              // flexDirection: "column",
              // color: "black",
              // backdropFilter: "blur(10px)",
              // WebkitBackdropFilter: "blur(10px)"
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0",
                bottom: "0",
                right: "0",
                left: "0",
                opacity: "0.825",
                // filter: "blur(1px)",
                backgroundColor: "#f5f5f5",
                zIndex: "-1",
                borderRadius: "12px",
                // boxShadow: "0 -1px 12.5px #A0E0DE",
              }}
            />
            <div
              style={{
                positon: "absolute",
                top: "0",
                bottom: "0",
                right: "0",
                left: "0",
                height: "100%",
                width: "100%",
                background: "transparent",
                zIndex: "1",

                flexDirection: 'column'
              }}
            >
              {/* <p
                style={{
                  fontSize: "30px",
                  color: "whitesmoke",
                  textShadow: "0px 0px 5.5px #212529",
                  fontWeight: "700",
                  fontStyle: "italic"
                }}
              >
                rest☆easy
              </p> */}
              <p style={{ fontSize: "19px" }}><u><em><b>Create Review</b></em></u></p>
              <p style={{ fontSize: "17.75px" }}>Welcome to <span className="animated flipInX fadeIn"><em>rest☆easy</em></span> </p>
              <span style={{ fontSize: "15px" }}>The world's <em>best</em> bathroom review app</span>
              <br />
              <p style={{ color: "#212529", fontSize: "6px" }}>---------------------------------------------------------------------------------</p>
              {/* <hr /> */}
              <p style={{ fontSize: "16.5px", color: "black" }}>To submit a review, press 'Begin review'.</p>
              {/* <p style={{ fontSize: "16.5px", color: "black" }}>Go for it, idiot.  Let the world know what you have to say.</p> */}
              {/* <div
                style={{
                  background: "#212529",
                  width: "40%",
                  height: "fit-content",
                  padding: "0 17.5px 0 17.5px",
                }}
              > */}

              {/* </div> */}
              {/* <p>Good luck, idiot.</p> */}
            </div>
            {/* <p> */}
            {/* 
          https://unsplash.com/photos/I72dFJRFT3k
          https://unsplash.com/photos/PMKd1Qg7jJ0
          https://unsplash.com/photos/rb767e573nE
          https://unsplash.com/photos/XatMS2NXIpo
          https://unsplash.com/photos/xXc7zUKIhRw
          https://unsplash.com/photos/qeIuFR5vPm8
          https://unsplash.com/photos/d6LzDABxP6I
          https://unsplash.com/photos/y14YOjamViI
          https://unsplash.com/photos/FuQBKSIc2yM

          https://unsplash.com/photos/SKoLSGLucN4

          https://unsplash.com/photos/egqR_zUd4NI
          https://unsplash.com/photos/yCzY0pnrhWo
          https://unsplash.com/photos/FtUzIprTVtI
          https://unsplash.com/photos/Mk_cIYHdC0w
          https://unsplash.com/photos/PMKd1Qg7jJ0
          https://unsplash.com/photos/nN1NUSsYreQ
          https://pixabay.com/photos/toilet-grunge-bathroom-damaged-990206/
          https://pixabay.com/photos/water-closet-toilet-wc-lavatory-1333454/
          https://unsplash.com/photos/VijgJ4fIe8A
          https://unsplash.com/photos/FRmsFpV4Fao
          https://unsplash.com/photos/dSbfzDB2DiU
          https://unsplash.com/photos/C4pTlSHaBsk
          https://unsplash.com/photos/BiDGqzEoT3c
          https://unsplash.com/photos/qmJVhLF9RLs
          https://unsplash.com/photos/EF-QrtA8nkQ
          https://unsplash.com/photos/TMlDhxsT3wE
          https://unsplash.com/photos/1PBAMt4mF80
          https://unsplash.com/photos/q7NBKl58K_U
          https://unsplash.com/photos/MgnI7cUwkq8
          https://unsplash.com/photos/VCVI5QUvFAY 
           */}
            {/* </p> */}

          </div>
        </div>
      </div >
    )
  }

}


const mapStateToProps = (state, ownProps) => {
  // console.log("mainwrapper state: ", state);
  return {
    selectedSectionValue: state.mapListState.selectedSectionValue,
    // geolocationValue: state.geolocationState.geolocationValue,
    boundsValue: state.boundsState.boundsValue,
    formValue: state.formState.formValue,
    // reviews: state.firestore.ordered.reviews,
    // auth: state.firebase.auth
    mapListToggleValue: state.mapListState.mapListToggleValue
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    formNext: () => dispatch(formNext()),
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(ReviewSection0);