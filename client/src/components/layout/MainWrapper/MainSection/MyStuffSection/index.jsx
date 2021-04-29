import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

import { saveUnitsPreference, saveGenderPreference } from '../../.././../../store/actions/authActions.js';
import { signIn, signOut } from '../../../../../store/actions/authActions';
import signIn_normal from './btn_google_signin_light_normal_web.png';
import signIn_focus from './btn_google_signin_light_focus_web.png';
import signIn_pressed from './btn_google_signin_light_pressed_web.png';
import signIn_normal2x from './btn_google_signin_light_normal_web@2x.png';
import signIn_focus2x from './btn_google_signin_light_focus_web@2x.png';
import signIn_pressed2x from './btn_google_signin_light_pressed_web@2x.png';
import MyReviewPlaceCard from '../../../../sharedComponents/myStuffComponents/MyReviewPlaceCard';


export class MyStuffSection extends Component {

  state = {
    myStuffCategory: "My Reviews",
    // myStuffCategory: "Settings",
    updatedGender: false,
    updatedUnitsOfMeasure: false,
    reviewArr: []
  }

  signInClicked = e => {
    e.preventDefault();
    // e.currentTarget.src = signIn_pressed;
    this.props.signIn();
  }

  signInDown = e => {
    e.preventDefault();
    // console.log("mouse down")
    e.currentTarget.src = signIn_pressed;
    // this.props.signIn();
  }
  signInUp = e => {
    e.preventDefault();
    // console.log("mouse up")
    e.currentTarget.src = signIn_normal;
    // this.props.signIn();
  }
  signInMouseOut = e => {
    e.preventDefault();
    // console.log("mouse out")
    e.currentTarget.src = signIn_normal;
    // this.props.signIn();
  }
  signInMouseLeave = e => {
    e.preventDefault();
    // console.log("mouse leave")
    e.currentTarget.src = signIn_normal;
    // this.props.signIn();
  }
  signInFocus = e => {
    e.preventDefault();
    // console.log("mouse focus")
    e.currentTarget.src = signIn_focus;
    // this.props.signIn();
  }
  signInBlur = e => {
    e.preventDefault();
    // console.log("mouse blur")
    e.currentTarget.src = signIn_focus;
    // this.props.signIn();
  }

  signInTouchStart = e => {
    e.preventDefault();
    // console.log("touch start");
    e.currentTarget.src = signIn_pressed;
    this.props.signIn();
  }

  signInTouchEnd = e => {
    e.preventDefault();
    // console.log("touch end");
    e.currentTarget.src = signIn_normal;
  }

  signInTouchCancel = e => {
    e.preventDefault();
    // console.log("touch cancel");
    e.currentTarget.src = signIn_normal;
  }

  signOutClicked = e => {
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


  settings_selectUnitsOfMeasure = e => {
    e.preventDefault();
    // const currentTarget = e.currentTarget;
    const target = e.target;
    // const src = currentTarget.src;
    const value = target.value;

    // console.log("currentTarget ---> ", currentTarget);
    // console.log("src ---> ", src);
    // console.log("target ---> ", target);
    // console.log("value ---> ", value);

    this.props.saveUnitsPreference(value);

    this.setState({
      updatedUnitsOfMeasure: true
    });

    setTimeout(() => {
      this.setState({
        updatedUnitsOfMeasure: false
      })
    }, 3000);

    return;
  }

  settings_selectGender = e => {
    e.preventDefault();
    // const currentTarget = e.currentTarget;
    const target = e.target;
    // const src = currentTarget.src;
    const value = target.value;

    // console.log("currentTarget ---> ", currentTarget);
    // console.log("src ---> ", src);
    // console.log("target ---> ", target);
    // console.log("value ---> ", value);

    this.props.saveGenderPreference(value);

    this.setState({
      updatedGender: true
    });

    setTimeout(() => {
      this.setState({
        updatedGender: false
      })
    }, 3000);

    return;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

    const userReviewsValue = this.props.userReviews2;
    // console.log("userReviewsValue ---> ", userReviewsValue);
    const prev_userReviewsValue = prevProps.userReviews2;
    const update_userReviewsValue = JSON.stringify(userReviewsValue) !== JSON.stringify(prev_userReviewsValue);

    if (update_userReviewsValue) {
      this.setState({
        reviewArr: userReviewsValue
      });

      // console.log("update, this.state.reviewArr ---> ", this.state.reviewArr);
    }

    //   const prev_settingsUnitsOfMeasure = prevProps.settingsUnitsOfMeasure;
    //   const prev_settingsGenderPreference = prevProps.settingsGenderPreference;

    //   const curr_settingsUnitsOfMeasure = this.props.settingsUnitsOfMeasure;
    //   const curr_settingsGenderPreference = this.props.settingsGenderPreference;

    //   const update_settingsUnitsOfMeasure = prev_settingsUnitsOfMeasure !== curr_settingsUnitsOfMeasure;
    //   const update_settingsGenderPreference = prev_settingsGenderPreference !== curr_settingsGenderPreference;

    //   console.log("update_settingsUnitsOfMeasure ---> ", update_settingsUnitsOfMeasure);
    //   console.log("update_settingsGenderPreference ---> ", update_settingsGenderPreference);
  }


  render() {

    const { selectedSectionValue } = this.props;

    // if (this.props.loginCredentialValue) console.log("this.props.loginCredentialValue.uid ---> ",  this.props.loginCredentialValue.uid)

    const { unitsPreference, settingsGenderPreference } = this.props;

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

    // const UserReviewsComponent = props => {
    //   return <>
    //     {
    //       props.data.map((review, i) => (
    //         < MyReviewPlaceCard data={review} key={i} />
    //       ))
    //     }
    //   </>
    // }


    const SignedOutComponent = () => {

      return (
        <div className="row">
          <div className="col jc-se">

            <span>You are currently not signed in.</span>

            {/* <div */}
            {/* id="" */}
            {/* className="row bg-red" */}
            {/* // onClick={this.signInClicked} */}
            {/* // style={{ */}
            {/* // padding: "9px 16px 9px 16px",
                // border: "1px solid #0abab5",
                // color: "#0abab5",
                // background: "inherit"
              }}
            > */}
            <img
              src={signIn_normal}
              onClick={this.signInClicked}
              onMouseDown={this.signInDown}
              onMouseUp={this.signInUp}
              onFocus={this.signInFocus}
              onBlur={this.signInBlur}
              onTouchEnd={this.signInTouchEnd}
              onTouchStart={this.signInTouchStart}
              onTouchCancel={this.signInTouchCancel}
              onMouseOut={this.signInMouseOut}
              onMouseLeave={this.signInMouseLeave}
            />
            {/* </div> */}



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
                  <div className="col-3">
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

              </div>
            </div>

            <div id="" className="row pt-3 pb-2 px-1">

              <div className="col-4 pb-1"
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
                className="col-4 pb-1"
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

              {/* <div
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
              </div> */}

              <div
                className="col-4 pb-1"
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

            <div className={`row ${this.state.myStuffCategory !== "My Reviews" ? "js-fg" : null}`}
              style={{
                position: "absolute",
                top: "208px",
                bottom: "0",
                left: "0",
                right: "0",
              }}
            >
              <div className="col">
                {/* {console.log("in HTML reviewArr ---> ", this.state.reviewArr)} */}
                {
                  this.state.myStuffCategory !== "My Reviews" ? null : this.state.reviewArr.length > 0 ?

                    <div className="row ai-fs animated fadeIn fast "
                      style={{
                        WebkitOverflowScrolling: "touch",

                        overflowX: "hidden",
                        msOverflowX: "hidden",
                        overflowY: "scroll",
                        msOverflowY: "scroll"
                      }}
                    >
                      <div
                        className="col jc-fs"
                        style={{
                          overflowX: "hidden",
                          msOverflowX: "hidden",
                          overflowY: "hidden",
                          msOverflowY: "hidden",
                        }}
                      >
                        {
                          this.state.reviewArr.map((review, i) => (
                            < MyReviewPlaceCard data={review} key={i + "myReview"} />
                          ))
                        }
                      </div >
                    </div >
                    :
                    <span>You have 0 bathroom reviews.</span>
                }

                {
                  this.state.myStuffCategory !== "Favorites" ? null : (
                    <span style={{ fontStyle: "italic" }}>Coming soon...</span>
                    // <span>You have 0 favorites.</span>
                  )
                }

                {
                  this.state.myStuffCategory !== "Notifications" ? null : (
                    <span><em>Coming soon...</em></span>
                  )
                }

                {
                  this.state.myStuffCategory !== "Settings" ? null : (

                    <div className="row">
                      <div className="col py-3 px-2">
                        <span className="animated fadeIn" style={{ marginBottom: "-15px", fontStyle: "italic", color: "green", fontSize: "13.5px", visibility: this.state.updatedGender || this.state.updatedUnitsOfMeasure ? "visible" : "hidden" }}>Profile Updated</span>

                        <div className="row">
                          <div className="col-5 ai-fs">
                            <p style={{ fontSize: "12.5px" }}>Restroom Preference</p>
                          </div>
                          <div className="col-5">
                            <select
                              id="settings_gender"
                              className=""
                              name="settings_gender"
                              value={settingsGenderPreference}
                              // this.props.loginCredentialValue.preferredGender || 
                              onChange={e => this.settings_selectGender(e)}
                              style={{
                                // width: "95%",
                                height: "100%",
                                fontSize: "12.5px",
                                fontStyle: "italic",
                                background: "inherit",
                                color: "grey",
                                textOverflow: "ellipsis"
                              }}
                            >
                              <option value="All">All</option>
                              <option value="Men's">Men's</option>
                              <option value="Women's">Women's</option>
                              <option value="Gender-Neutral">Family/Gender-Neutral</option>
                            </select>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-5 ai-fs">
                            <p style={{ fontSize: "12.5px" }}>Units of Measure</p>
                          </div>
                          <div className="col-5">
                            <select
                              id="settings_unitsOfMeasure"
                              className=""
                              name="settings_unitsOfMeasure"
                              value={unitsPreference}
                              // this.props.loginCredentialValue.preferredUnitOfMeasure || 
                              onChange={e => this.settings_selectUnitsOfMeasure(e)}
                              style={{
                                width: "95%",
                                height: "100%",
                                fontSize: "12.5px",
                                fontStyle: "italic",
                                background: "inherit",
                                color: "grey",
                                textOverflow: "ellipsis"
                              }}
                            >
                              <option value="imperial">Imperial (US)</option>
                              <option value="metric">Metric</option>
                            </select>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-5 ai-fs">
                            <p style={{ fontSize: "12.5px" }}>Developer Contact</p>
                          </div>
                          <div className="col-5 jc-se">
                            <a style={{ fontSize: "12.5px" }} href="mailto:resteasydev@gmail.com?subject=Report issue/bug">Report issue/bug</a>
                            <a style={{ fontSize: "12.5px" }} href="mailto:resteasydev@gmail.com?subject=Suggest feature(s)">Suggest feature(s)</a>
                          </div>
                        </div>


                        <div className="row">
                          <div className="col">
                            <button
                              id=""
                              className=" py-2 px-3"
                              onClick={this.signOutClicked}
                              style={{
                                color: "#0abab5",
                                background: "inherit"
                              }}
                            >
                              <span style={{ fontSize: "13.5px" }}><em>Log out</em></span>
                            </button>
                          </div>
                        </div>

                      </div>
                    </div>

                  )
                }
              </div>
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
              // height: "55px !important",
              // maxHeight: "55px !important",
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

          <div className="row js-fg"
            style={{
              // height: "calc(100% - 55px)",
              // background: "yellow"
            }}
          >
            <div className="col" style={{ padding: "10px 0 10px 0" }}>
              {displayName ? <SignedInComponent /> : <SignedOutComponent />}
            </div>
          </div>

        </div>

      </div >
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log("mapStateToProps state: ", state);

  return {
    // reviews: state.firestore.ordered.reviews,
    auth: state.firebase,
    selectedSectionValue: ownProps.display,
    loginCredentialValue: state.auth.loginCredentialValue,
    unitsPreference: state.auth.unitsPreference,
    settingsGenderPreference: state.auth.settingsGenderPreference,
    userReviews1: state.auth.userReviews,

    userReviews2: state.firestore.ordered.reviews
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    signIn: () => dispatch(signIn()),
    signOut: () => dispatch(signOut()),
    saveUnitsPreference: (input) => dispatch(saveUnitsPreference(input)),
    saveGenderPreference: (input) => dispatch(saveGenderPreference(input)),
  }
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => {
    if (!props.loginCredentialValue) return []
    return [
      {
        collection: 'reviews',
        where: ['userID', '==', props.loginCredentialValue.uid],
        orderBy: ['reviewDatetime', 'desc']
      }
    ]
  })
)(MyStuffSection);
