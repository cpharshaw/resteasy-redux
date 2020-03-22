import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { signIn, signOut } from '../../../../store/actions/authActions';
import HorizontalRule from '../ReviewSection/ReviewFormElements/HorizontalRule';

export class MyStuffSection extends Component {

  signInclicked = e => {
    this.props.signIn();
    console.log("sign in clicked")
  }

  signOutclicked = e => {
    this.props.signOut();
    console.log("sign out clicked")
  }


  render() {

    const { selectedSectionValue } = this.props;

    const displayValue = selectedSectionValue === "myStuff" ? "flex" : "none";

    let token = null;
    let displayName = null;
    let photoURL = null;
    let email = null;

    if (this.props.loginCredentialValue) {
      token = this.props.loginCredentialValue.token;
      displayName = this.props.loginCredentialValue.displayName;
      photoURL = this.props.loginCredentialValue.photoURL;
      email = this.props.loginCredentialValue.email;
    }



    const SignedOutComponent = () => {

      if (!displayName) {
        return null
      } else {

        return (
          <div
            className="rs"
            style={{
              flexDirection: "column",
              height: "fit-content",
              // background: "red",
              justifyContent: "space-around",
              // padding: "15px 0 15px 0"
            }}
          >
            <div
              className="rs"
              style={{
                height: "fit-content",
                flexDirection: "column",
                justifyContent: "space-around",
                justifySelf: "flex-start",
                // background: "blue"
              }}
            >
              <span>You are currently not signed in.</span>
              {/* <span>To access your data  create new reviews, please sign in.</span> */}
            </div>
            <br />
            <button
              id=""
              className="rs"
              onClick={this.signInclicked}
              style={{
                width: "fit-content",
                height: "fit-content",
                padding: "9px 16px 9px 16px",
                border: "1px solid #0abab5",
                color: "#0abab5"
              }}
            >
              <span><em>Sign in</em></span>
            </button>
          </div>
        )
      }

    }
    const SignedInComponent = () => {

      if (displayName) {
        return null
      } else {

        return (
          <div
            className="rs"
            style={{
              flexDirection: "column",
              // height: "125px",
              // background: "lightgrey",
              justifyContent: "flex-start",
              // padding: "15px 0 15px 0"
            }}
          >
            <div
              className="rs"
              style={{
                height: "fit-content",
                flexDirection: "row",
                justifyContent: "space-between",
                justifySelf: "flex-start",
                padding: "0 7.5px 0 7.5px"
              }}
            >
              <img
                className="rs"
                style={{
                  width: photoURL ? "auto" : "70px",
                  height: "70px",
                  // margin: photoURL ? "5px" : "5px",
                  background: "black"
                }}
                src={photoURL ? photoURL : null}
              />
              <div
                className="rs"
                style={{
                  flexDirection: "column",
                  width: "fit-content"
                }}
              >
                <span>{displayName ? displayName : "John Doe"}</span>
                <span>{email ? email : "test@aol.com"}</span>
              </div>


              <button
                id=""
                className="rs"
                onClick={this.signOutclicked}
                style={{
                  width: "fit-content",
                  height: "fit-content",
                  padding: "9px 16px 9px 16px",
                  border: "1px solid #0abab5",
                  color: "#0abab5"
                }}
              >
                <span><em>Sign out</em></span>
              </button>

            </div>

            <br />
            <br />
            <div
              id=""
              className="rs"
              style={{
                flexDirection: "column",
                height: "fit-content",
                // height: "200px"
              }}
            >
              <span><em>Review History</em></span>

              <br />

              <div
                className="rs"
                style={{
                  flexDirection: "row",
                  height: "65px",
                  padding: "0 5px 0 5px"
                }}
              >
                <div
                  className="rs"
                  style={{
                    flexDirection: "column",
                    width: "25%",
                    // justifyContent: "flex-end",
                    background: "yellow"
                  }}
                >
                  {/* <span>&times;</span> */}
                  <span style={{ color: "grey" }}>OK</span>
                </div>

                <div
                  className="rs"
                  style={{
                    flexDirection: "column",
                    width: "75%",
                    alignItems: "flex-start",
                    paddingLeft: "8px"
                    // justifyContent: "flex-end",
                    // background: "orange"
                  }}
                >
                  <span><b>IKEA</b> - 10100 Baltimore Ave</span>
                  <span>8.2 - Furniture / Home Store</span>
                  <span style={{ color: "grey" }}>Thu 3/19/20 at 8:45pm</span>
                </div>

              </div>
              <HorizontalRule />
            </div>



            <div
              className="rs"
              style={{
                flexDirection: "row",
                height: "65px",
                padding: "0 5px 0 5px"
              }}
            >
              <div
                className="rs"
                style={{
                  flexDirection: "column",
                  width: "25%",
                  // justifyContent: "flex-end",
                  background: "#DFFF00"
                }}
              >
                {/* <span>&times;</span> */}
                <span style={{ color: "grey" }}>Good</span>
              </div>

              <div
                className="rs"
                style={{
                  flexDirection: "column",
                  width: "75%",
                  alignItems: "flex-start",
                  paddingLeft: "8px"
                  // background: "orange"
                }}
              >
                <span><b>Rite Aid</b> - 400 Spring Garden Street</span>
                <span>6.4 - Pharmacy</span>
                <span style={{ color: "grey" }}>Thu 2/4/20 at 9:58pm</span>
              </div>

            </div>
            <HorizontalRule />

          </div >
        )
      }
    }



    return (
      <div
        id=""
        className="rs animated fadeIn faster"
        style={{
          display: displayValue,
          flexDirection: "column",
          // justifyContent: "flex-start",
          // padding: "15px 0 0 0"
          // background: "lightgrey"
        }}
      >
        <div
          className="rs"
          style={{
            height: "10%",
            flexDirection: "column",
            // justifyContent: "space-evenly",
            // padding: "15px 0 0 0",
            background: "#E8E8E8",
            // borderBottomLeftRadius: "7.5px",
            // borderBottomRightRadius: "7.5px",
            borderBottom: "1px solid #D3D3D3"
          }}
        >
          <span
            className="rs"
            style={{
              height: "fit-content",
              fontSize: "30px",
              color: "whitesmoke",
              textShadow: "1px 1px 5.5px #0abab5",
              fontFamily: "Roboto",
              fontStyle: "italic",
              background: "inherit"
            }}
          >
            rest☆easy
        </span>
        </div>
        <div
          className="rs"
          style={{
            height: "90%",
            margin: "15px 0 0 0",
            flexDirection: "flex-start"
          }}
        >
          <SignedInComponent />
          <SignedOutComponent />
        </div>



      </div >
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log("mainwrapper state: ", state);
  return {
    // selectedSectionValue: state.mapListState.selectedSectionValue,
    // geolocationValue: state.geolocationState.geolocationValue,
    boundsValue: state.boundsState.boundsValue,
    // reviews: state.firestore.ordered.reviews,
    auth: state.firebase,
    selectedSectionValue: ownProps.display,
    loginCredentialValue: state.auth.loginCredentialValue
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: () => dispatch(signIn()),
    signOut: () => dispatch(signOut()),
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(MyStuffSection);
