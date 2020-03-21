import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { signIn, signOut } from '../../../../store/actions/authActions';

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
            <span>If you lose this device or get a new one, your history will be lost.  To prevent this, please: </span>
          </div>
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


    const SignedInComponent = () => {
      return (
        <div
          className="rs"
          style={{
            flexDirection: "column",
            // height: "125px",
            background: "lightgrey",
            justifyContent: "space-around",
            // padding: "15px 0 15px 0"
          }}
        >
          <div
            className="rs"
            style={{
              height: "fit-content",
              flexDirection: "row",
              justifyContent: "space-around",
              justifySelf: "flex-start"
            }}
          >
            <img
              className="rs"
              style={{
                width: photoURL ? "auto" : "70px",
                height: "70px",
                margin: photoURL ? "5px" : "5px",
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
              <h6>Sign out</h6>
            </button>

          </div>

          {/* <br />

          <div
            id=""
            className="rs"
            style={{
              height: "130px",
              flexDirection: "row",
              alignContent: "space-evenly",
              background: "red"
            }}
          >
            <div
              className="rs"
              style={{
                flexDirection: "column",
                justifyContent: "flex-end",
                margin: "5px 8px 5px 8px"
              }}
            >
              <div
                id=""
                className="rs"
                style={{
                  background: "red",
                  borderRadius: "5px",
                  height: "10%"
                }}
                data-value=".10"
              />
              <span style={{ color: "grey" }}>10%</span>
              <span style={{ color: "lightgrey" }}>Poor</span>
            </div>


            <div
              className="rs"
              style={{
                flexDirection: "column",
                justifyContent: "flex-end",
                margin: "5px 8px 5px 8px"
              }}
            >
              <div
                id=""
                className="rs"
                style={{
                  background: "orange",
                  borderRadius: "5px",
                  height: "10%"
                }}
                data-value=".10"
              />
              <span style={{ color: "grey" }}>10%</span>
              <span style={{ color: "lightgrey" }}>Bad</span>
            </div>

            <div
              className="rs"
              style={{
                flexDirection: "column",
                justifyContent: "flex-end",
                margin: "5px 8px 5px 8px"
              }}
            >
              <div
                id=""
                className="rs"
                style={{
                  background: "yellow",
                  borderRadius: "5px",
                  height: "30%"
                }}
                data-value=".30"
              />
              <span style={{ color: "grey" }}>30%</span>
              <span style={{ color: "lightgrey" }}>Ok</span>
            </div>

            <div
              className="rs"
              style={{
                flexDirection: "column",
                justifyContent: "flex-end",
                margin: "5px 8px 5px 8px"
              }}
            >
              <div
                id=""
                className="rs"
                style={{
                  background: "#7FFF00",
                  borderRadius: "5px",
                  height: "40%"
                }}
                data-value=".40"
              />
              <span style={{ color: "grey" }}>40%</span>
              <span style={{ color: "lightgrey" }}>Good</span>
            </div>



            <div
              className="rs"
              style={{
                flexDirection: "column",
                justifyContent: "flex-end",
                margin: "5px 8px 5px 8px"
              }}
            >
              <div
                id=""
                className="rs"
                style={{
                  background: "green",
                  borderRadius: "5px",
                  height: "10%"
                }}
                data-value=".10"
              />
              <span style={{ color: "grey" }}>10%</span>
              <span style={{ color: "lightgrey" }}>Great</span>
            </div>



            <div
              id=""
              className="rs"
              style={{
                height: "75px",
                flexDirection: "row",
                alignContent: "space-evenly",
              }}
            >
              <div className="rs" style={{ flexDirection: "column" }}>
                <span>10</span>
                <span>RE reviews</span>
              </div>
              <div className="rs" style={{ flexDirection: "column" }}>
                <span>1</span>
                <span>this week</span>
              </div>
              <div className="rs" style={{ flexDirection: "column" }}>
                <span>1</span>
                <span>week streak</span>
              </div>
            </div>


            <div
              id=""
              className="rs"
              style={{
                flexDirection: "column",
                minHeight: "fit-content",
                height: "200px"
              }}
            >
              <span>RE Review History</span>
              <br />
              <span> ..... </span>
            </div>
          </div> */}



        </div >
      )
    }

    const DisplayedComponent = () => {
      return (
        displayName ? <SignedInComponent /> : < SignedOutComponent />
      )
    }

    return (
      <div
        id=""
        className="rs animated fadeIn faster"
        style={{
          display: displayValue,
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <span style={{ fontSize: "20px", color: "#0abab5" }}>r☆e</span>
        <DisplayedComponent />
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
