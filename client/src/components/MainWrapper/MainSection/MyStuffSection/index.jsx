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

    let displayName = null;
    let photoURL = null;
    let email = null;

    if (this.props.loginCredentialValue) {
      displayName = this.props.loginCredentialValue.displayName;
      photoURL = this.props.loginCredentialValue.photoURL;
      email = this.props.loginCredentialValue.email;
    }

    // const displayValue = "flex";
    // console.log("mystuff selectedSectionValue: ", selectedSectionValue);

    return (
      <div
        id="myStuffSection"
        // className="rs section"
        className="rs section animated fadeIn faster"
        style={
          {
            display: displayValue,
            flexDirection: "column"
            // overflowY: "scroll",
            // overflowX: "scroll",
            // background: "#f5f5f5",
            // boxShadow:  "0 -3.5px 3.5px 0 rgba(0, 0, 0, .6)",
            // zIndex: "900"
          }
        }
      >

        {
          displayName ?
            <div className="rs" style={{ flexDirection: "column" }}>
              <div className="rs" style={{ height: "50%", flexDirection: "column" }}>
                <img
                  className="rs"
                  style={{
                    width: "50%",
                    height: "auto",
                    margin: "5px"
                  }}
                  src={photoURL}
                />
                <span>{displayName}</span>
                <span>{email}</span>
              </div>
              <br />
              <button
                id=""
                className="rs"
                onClick={this.signOutclicked}
                style={{
                  width: "125px",
                  height: "60px",
                  border: "1px solid #0abab5",
                  color: "#0abab5"
                }}
              >
                <h6>Sign out</h6>
              </button>
            </div>
            :
            <button
              id=""
              className="rs"
              onClick={this.signInclicked}
              style={{
                width: "125px",
                height: "60px",
                border: "1px solid #0abab5",
                color: "#0abab5"
              }}
            >
              <h6>Sign in</h6>
            </button>
        }
      </div>
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
