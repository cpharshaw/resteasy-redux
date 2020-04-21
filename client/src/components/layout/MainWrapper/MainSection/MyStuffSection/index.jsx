import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { signIn, signOut } from '../../../../../store/actions/authActions';

export class MyStuffSection extends Component {

  state = {
    myStuffCategory: "My Reviews"
  }

  signInclicked = e => {
    this.props.signIn();
    // console.log("sign in clicked")
  }

  signOutclicked = e => {
    this.props.signOut();
    // console.log("sign out clicked")
  }

  myStuffCategoryClicked = e => {
    e.preventDefault();

    // console.log(e.currentTarget.innerText)

    const value = e.target.innerText;

    this.setState({
      myStuffCategory: value
    })
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
        <div className="row">
          <div className="col jc-se">

            <span>You are currently not signed in.</span>

            <button
              id=""
              className=""
              onClick={this.signInclicked}
              style={{
                padding: "9px 16px 9px 16px",
                border: "1px solid #0abab5",
                color: "#0abab5",
                background: "inherit"
              }}
            >
              <span><em>Sign in</em></span>
            </button>

          </div>
        </div>
      )
    }


    const SignedInComponent = () => {

      return (

        <div className="row">
          <div className="col fc jc-fs">

            <div id="mySignedInStuff" className="row p-2">
              <div className="col">

                <div className="row jc-fs ac-fs">
                  <div className="col-3 jc-fs">
                    <img
                      className="skip"
                      style={{
                        width: photoURL ? "91px" : "91px",
                        height: "85px",
                        background: photoURL ? null : "black",
                      }}
                      src={photoURL ? photoURL : null}
                    />
                  </div>
                  <div className="col-9">
                    <span>{displayName ? displayName : "Craig Harshaw"}</span>
                    <span>{email ? email : "cpharshaw@gmail.com"}</span>
                  </div>
                </div>

                {/* <div className="row mt-2 bg-yellow">
                  <button
                    id=""
                    className=" py-2 px-3"
                    onClick={this.signOutclicked}
                    style={{
                      border: "1px solid #0abab5",
                      color: "#0abab5",
                      background: "inherit"
                    }}
                  >
                    <span><em>Sign out</em></span>
                  </button>
                </div> */}


              </div>
            </div>

            <div id="" className="row pt-3 pb-2 px-1">

              <div className="col-3 pb-1"
                style={{
                  borderBottom: this.state.myStuffCategory === "My Reviews" ? "2px solid #0abab5" : "1px solid darkgrey",
                }}
              >
                <span onClick={e => this.myStuffCategoryClicked(e)}
                  style={{
                    color: this.state.myStuffCategory === "My Reviews" ? "" : "darkgrey",
                    fontSize: "85%",
                    height: "100%",
                    width: "100%"
                  }}
                >My Reviews
                </span>
              </div>

              <div
                className="col-3 pb-1"
                style={{
                  borderBottom: this.state.myStuffCategory === "Favorites" ? "2px solid #0abab5" : "1px solid darkgrey",
                }}

              >
                <span onClick={e => this.myStuffCategoryClicked(e)}
                  style={{
                    color: this.state.myStuffCategory === "Favorites" ? "" : "darkgrey",
                    fontSize: "85%",
                    height: "100%",
                    width: "100%"
                  }}
                >Favorites</span>
              </div>

              <div
                className="col-3 pb-1"
                style={{
                  borderBottom: this.state.myStuffCategory === "Notifications" ? "2px solid #0abab5" : "1px solid darkgrey",
                }}
              >
                <span onClick={e => this.myStuffCategoryClicked(e)}
                  style={{
                    color: this.state.myStuffCategory === "Notifications" ? "" : "darkgrey",
                    fontSize: "85%",
                    height: "100%",
                    width: "100%"
                  }}
                >Notifications</span>
              </div>

              <div
                className="col-3 pb-1"
                style={{
                  borderBottom: this.state.myStuffCategory === "Settings" ? "2px solid #0abab5" : "1px solid darkgrey",
                }}
              >
                <span onClick={e => this.myStuffCategoryClicked(e)}
                  style={{
                    color: this.state.myStuffCategory === "Settings" ? "" : "darkgrey",
                    fontSize: "85%",
                    height: "100%",
                    width: "100%"
                  }}
                >Settings</span>
              </div>
            </div>

            <div className="row js-fg jc-c ai-c">

              {
                this.state.myStuffCategory !== "My Reviews" ? null : (
                  <span>You have reviewed 0 bathrooms.</span>
                )
              }

              {
                this.state.myStuffCategory !== "Favorites" ? null : (
                  <span>You have 0 favorites.</span>
                )
              }

              {
                this.state.myStuffCategory !== "Notifications" ? null : (
                  <span><em>Coming soon...</em></span>
                )
              }

              {
                this.state.myStuffCategory !== "Settings" ? null : (

                  <ul>
                    <li>My country</li>
                    <li>Units of Measure</li>
                    <li>Dark Mode (Coming soon...)</li>
                    <li>Send feedback to developer</li>
                    <li>
                      <div className="row">
                        <button
                          id=""
                          className=" py-2 px-3"
                          onClick={this.signOutclicked}
                          style={{
                            // border: "1px solid #0abab5",
                            color: "#0abab5",
                            background: "inherit"
                          }}
                        >
                          <span><em>Log out</em></span>
                        </button>
                      </div>
                    </li>                    
                  </ul>

                )
              }

            </div >

            {/* <div
              id="myStuffHistoryScroller"
              className="col"
              style={{
                justifyContent: "flex-start",
                alignItems: "center",
                overflowY: "auto",
                padding: "10px 0 10px 0",
              }}
            >


              <div
                className="row"
                style={{
                  padding: "5px 10px 5px 10px",
                }}
              >
                <div
                  className="col-3"
                  style={{
                    background: "red",
                  }}
                >
                  <span style={{ color: "grey" }}>Bad</span>
                </div>

                <div
                  className="col-9"
                  style={{
                  }}
                >
                  <span><b>Amber Spice</b></span>
                  <span>3.0 - Indian restaurant</span>
                  <span>60100 Baltimore Ave</span>
                  <span style={{ color: "grey" }}>Thu 3/19/20 at 5:00pm</span>
                </div>

              </div>
              <HorizontalRule />


              <div
                className="row"
                style={{
                  padding: "5px 10px 5px 10px",
                }}
              >
                <div
                  className="col-3"
                  style={{
                    background: "orange",
                  }}
                >
                  <span style={{ color: "grey" }}>Poor</span>
                </div>

                <div
                  className="col-9"
                  style={{
                  }}
                >
                  <span><b>Shoppers</b></span>
                  <span>5.0 - Supermarket</span>
                  <span>4000 Cherry Hill Road</span>
                  <span style={{ color: "grey" }}>Sat 3/21/20 at 5:25pm</span>
                </div>

              </div>
              <HorizontalRule />


              <div
                className="row"
                style={{
                  padding: "5px 10px 5px 10px",
                }}
              >
                <div
                  className="col-3"
                  style={{
                    background: "yellow",
                  }}
                >
                  <span style={{ color: "grey" }}>Ok</span>
                </div>

                <div
                  className="col-9"
                  style={{
                  }}
                >
                  <span><b>IKEA</b></span>
                  <span>8.2 - Furniture / Home Store</span>
                  <span>10100 Baltimore Ave</span>
                  <span style={{ color: "grey" }}>Thu 3/19/20 at 8:45pm</span>
                </div>

              </div>
              <HorizontalRule />


              <div
                className="row"
                style={{
                  padding: "5px 10px 5px 10px",
                }}
              >
                <div
                  className="col-3"
                  style={{
                    background: "#7FFF00",
                  }}
                >
                  <span style={{ color: "grey" }}>Good</span>
                </div>

                <div
                  className="col-9"
                  style={{

                  }}
                >
                  <span><b>Rite Aid</b></span>
                  <span>6.4 - Pharmacy</span>
                  <span>400 Spring Garden Street</span>
                  <span style={{ color: "grey" }}>Thu 2/4/20 at 9:58pm</span>
                </div>

              </div>
              <HorizontalRule />



              <div
                className="row"
                style={{
                  padding: "5px 10px 5px 10px",
                }}
              >
                <div
                  className="col-3"
                  style={{
                    background: "green",
                  }}
                >
                  <span style={{ color: "grey" }}>Great</span>
                </div>

                <div
                  className="col-9"
                  style={{
                  }}
                >
                  <span><b>Potbelly Sandwich</b></span>
                  <span>8.4 - Sandwich shop</span>
                  <span>4000 Baltimore Ave</span>
                  <span style={{ color: "grey" }}>Fri 3/20/20 at 12:32pm</span>
                </div>

              </div>
              <HorizontalRule />



            </div> */}


          </div >
        </div >
      )
    }



    return (

      <div className="row animated fadeIn fast" style={{ display: displayValue }}>
        <div className="col fc">

          <div className="row"
            style={{
              background: "#E8E8E8",
              // height: "55px",
            }}
          >
            <div className="col my-2">
              <span
                className="my-1"
                style={{
                  fontSize: "30px",
                  color: "whitesmoke",
                  textShadow: "0px 0px 5.5px #0abab5",
                  // fontFamily: "Roboto",
                  // fontStyle: "italic",
                  // margin: "12.5px 0 12.5px 0",
                  transformOrigin: "0.5 0",
                  fontWeight: "600",
                  fontStyle: "italic"
                }}
              >rest☆easy
              </span>
            </div>
          </div>

          <div className="row js-fg">
            <div className="col">
              {displayName ? <SignedInComponent /> : <SignedOutComponent />}
            </div>
          </div>

        </div>

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
