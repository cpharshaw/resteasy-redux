import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { modalToggled, modalClosed } from '../../../../../store/actions/modalActions';
import { formNext, formPrev, resetForm } from '../../../../../store/actions/formActions';
import { signIn } from '../../../../../store/actions/authActions';
import { selectSection } from '../../../../../store/actions/sectionActions';
import { locationChosen, cancelReviewDelete, initiateReviewEdit, initiateReviewDelete } from '../../../../../store/actions/formActions';
import FormNavButton from '../../../../sharedComponents/formComponents/FormNavButton';
import HorizontalRule from '../../../../sharedComponents/general/HorizontalRule';
import ModalFormReset from './ModalFormReset';
import LocationModal from './ModalFormLocationSelector';
import signIn_normal from '../MyStuffSection/btn_google_signin_light_normal_web.png';
import signIn_focus from '../MyStuffSection/btn_google_signin_light_focus_web.png';
import signIn_pressed from '../MyStuffSection/btn_google_signin_light_pressed_web.png';


import greyMarker from '../MapListSection/MapListWrapper/greyMarker50.png';
import redMarker from '../MapListSection/MapListWrapper/redMarker50.png';
import orangeMarker from '../MapListSection/MapListWrapper/orangeMarker50.png';
import yellowMarker from '../MapListSection/MapListWrapper/yellowMarker50.png';
import chartreuseMarker from '../MapListSection/MapListWrapper/chartreuseMarker50.png';
import greenMarker from '../MapListSection/MapListWrapper/greenMarker50.png';

// import { storeMap, storeMyLocationMarker, storeSelectedMarker, storeSelectedPlace, storeMarker, registerInitialMapTilesloaded, registerSubsequentMapMovement } from '../../../../../../../../store/actions/mapActions';

const iconArr = [greyMarker, redMarker, orangeMarker, yellowMarker, chartreuseMarker, greenMarker]
// const iconArr = [greyMarker, redMarker, orangeMarker, yellowMarker, chartreuseMarker, greenMarker, redMarker, orangeMarker, yellowMarker, chartreuseMarker, greenMarker]
const skull = "https://img.icons8.com/ios-filled/50/000000/poison.png";


export class ModalContainer extends Component {

  closeModal(e) {
    e.preventDefault();

    if (this.props.formStepValue === 6) {
      this.props.formPrev();
    }

    if (this.props.formStepValue === 7) {
      this.props.resetForm();
      this.props.selectSection("mapList");
    }

    if (this.props.formDeleteModeValue) {
      this.props.cancelReviewDelete();
    }

    this.props.modalClosed()

  }


  placeSelected = (e, place) => {
    e.preventDefault();
    // console.log("place test: ", place)
    const name = place ? place.name : e.currentTarget.getAttribute('data_placename');
    const address = place ? place.location.address : e.currentTarget.getAttribute('data_placeaddress');
    const category = place ? place.categories[0].name : e.currentTarget.getAttribute('data_placecategory');
    const distance = place ? place.distance : e.currentTarget.getAttribute('data_placedistance');

    const id = place ? place.id : e.currentTarget.getAttribute('data_placeid');
    const city = place ? place.location.city : e.currentTarget.getAttribute('data_placecity');
    const stateCode = place ? place.location.state : e.currentTarget.getAttribute('data_placestatecode');
    const zip = place ? place.location.postalCode : e.currentTarget.getAttribute('data_placezip');
    const country = place ? place.location.country : e.currentTarget.getAttribute('data_placecountry');

    const placeObj = {
      name,
      address,
      category,
      distance,

      id,
      city,
      stateCode,
      zip,
      country
    }

    this.props.locationChosen(placeObj);
    this.props.modalClosed();

  }


  addReviewClicked = (e, place) => {
    e.preventDefault();
    // console.log("place: ", place)
    const name = place ? place.name : e.currentTarget.getAttribute('data_placename');
    const category = place ? place.categories[0].name : e.currentTarget.getAttribute('data_placecategory');
    const distance = place ? place.distance : e.currentTarget.getAttribute('data_placedistance');
    const address = place ? place.location.address : e.currentTarget.getAttribute('data_placeaddress');

    const id = place ? place.id : e.currentTarget.getAttribute('data_placeid');
    const city = place ? place.location.city : e.currentTarget.getAttribute('data_placecity');
    const stateCode = place ? place.location.state : e.currentTarget.getAttribute('data_placestatecode');
    const zip = place ? place.location.postalCode : e.currentTarget.getAttribute('data_placezip');
    const country = place ? place.location.country : e.currentTarget.getAttribute('data_placecountry');

    const placeObj = {
      name,
      category,
      distance,
      address,

      id,
      city,
      stateCode,
      zip,
      country
    }

    this.props.locationChosen(placeObj);
    this.props.modalClosed();
    if (place) this.props.formNext("addReviewStep1");
    if (place) this.props.selectSection("review");
  }

  editReviewClicked = (e, place) => {
    e.preventDefault();
    console.log("editReviewClicked, 'review' parameter ---> ", place)
    const placeID = place.id

    const data = this.props.userReviews2.filter(review => {
      return review.locationID === placeID;
    })[0];

    console.log("data ---> ", data)

    const reviewToEdit = {

      formStepValue: 1,
    
      // formProcessingValue: false,

      // formEditModeValue: true, UNNECESSARY--ENTERED IN USING THE REDUCER DIRECTLY
    
      // formRes: null,
    
      // page1
      formLocationValue: data.basicInfo.locationValue,
      formRestroomTypeValue: data.basicInfo.restroomUsed,
      // formTimeOfVisitValue: data.basicInfo.timeOfVisit,
      // formTimeOfVisitValue: data.basicInfo.timeOfVisit,
      // formTimeOfVisitValue: data.basicInfo.timeOfVisit,
      formTimeOfVisitValue: data.basicInfo.timeOfVisit,
      formHHOfVisitValue: data.basicInfo.HHOfVisit,
      formMMOfVisitValue: data.basicInfo.MMOfVisit,
      formAMPMOfVisitValue: data.basicInfo.AMPMOfVisit,

      formLocationNotesValue: data.basicInfo.locationNotes,
      formOutOfOrderValue: data.basicInfo.outOfOrder,

      //page 2
      formCleanlinessValue: data.scores.cleanliness,
      formPrivacyValue: data.scores.privacy,
      formComfortValue: data.scores.comfort,
      formSafetyValue: data.scores.safety,
      formStyleValue: data.scores.style,

      //page 3
      formHandicappedValue: data.features.accessible,
      formGenderNeutralValue: data.features.genderNeutral,
      formBabyChangeValue: data.features.babyStation,
      formScheduleValue: data.features.cleaningSchedule,
      formAdmissionValue: data.features.admission,
      formFeeDisplayValue: data.features.price > 0 ? null : "hidden",
      formFeeValue: data.features.price,
    
      //page 4
      photosArrValue: data.photos,
      // editPhotosArrValue: data.photos,
    
      //page 5
      formCommentsValue: data.comments,
      // formMissingValue: false
    }
    this.props.initiateReviewEdit(reviewToEdit);
    this.props.modalClosed();
    this.props.selectSection("review");
  }

  favoriteClicked = (e, place) => {
    e.preventDefault();
    // console.log("place: ", place)
    const name = place ? place.name : e.currentTarget.getAttribute('data_placename');
    const category = place ? place.categories[0].name : e.currentTarget.getAttribute('data_placecategory');
    const distance = place ? place.distance : e.currentTarget.getAttribute('data_placedistance');
    const address = place ? place.location.address : e.currentTarget.getAttribute('data_placeaddress');

    const id = place ? place.id : e.currentTarget.getAttribute('data_placeid');
    const city = place ? place.location.city : e.currentTarget.getAttribute('data_placecity');
    const stateCode = place ? place.location.state : e.currentTarget.getAttribute('data_placestatecode');
    const zip = place ? place.location.postalCode : e.currentTarget.getAttribute('data_placezip');
    const country = place ? place.location.country : e.currentTarget.getAttribute('data_placecountry');

    const placeObj = {
      name,
      category,
      distance,
      address,

      id,
      city,
      stateCode,
      zip,
      country
    }

    this.props.locationChosen(placeObj);
    this.props.modalClosed();
    if (place) this.props.formNext("addReviewStep1");
    if (place) this.props.selectSection("review");

  }



  signInClicked = e => {
    e.preventDefault();
    // e.currentTarget.src = signIn_pressed;
    console.log("auth status: ", this.props.loginCredentialValue)
    this.props.signIn();
  }

  signInDown = e => {
    e.preventDefault();
    console.log("mouse down")
    e.currentTarget.src = signIn_pressed;
    // this.props.signIn();
  }
  signInUp = e => {
    e.preventDefault();
    console.log("mouse up")
    e.currentTarget.src = signIn_normal;
    // this.props.signIn();
  }
  signInMouseOut = e => {
    e.preventDefault();
    console.log("mouse out")
    e.currentTarget.src = signIn_normal;
    // this.props.signIn();
  }
  signInMouseLeave = e => {
    e.preventDefault();
    console.log("mouse leave")
    e.currentTarget.src = signIn_normal;
    // this.props.signIn();
  }
  signInFocus = e => {
    e.preventDefault();
    console.log("mouse focus")
    e.currentTarget.src = signIn_focus;
    // this.props.signIn();
  }
  signInBlur = e => {
    e.preventDefault();
    console.log("mouse blur")
    e.currentTarget.src = signIn_focus;
    // this.props.signIn();
  }

  signInTouchStart = e => {
    e.preventDefault();
    console.log("touch start");
    e.currentTarget.src = signIn_pressed;
    this.props.signIn();
  }

  signInTouchEnd = e => {
    e.preventDefault();
    console.log("touch end");
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




  componentDidUpdate(prevProps, prevState, snapshot) {
    // const prevFSVal = prevProps.foursquareValue;
    // const currFSVal = this.props.foursquareValue;
    // const fsCheck = prevFSVal !== currFSVal && currFSVal;

    // if (fsCheck) {




    // }

  }


  iconColor = score => {
    // console.log("score ---> ", score)
    if (!score) {
      return greyMarker
    };

    if (score > 4.50) {
      return greenMarker
    };

    if (score >= 4.00) {
      return chartreuseMarker
    };

    if (score >= 3.50) {
      return yellowMarker
    };

    if (score >= 2.25) {
      return orangeMarker
    };

    if (score) {
      return redMarker
    };
  }

  timeAgoInMin = (reviewDatetime, basicInfo) => {
    return (((Date.now()
      -
      new Date(
        new Date((reviewDatetime.nanoseconds / 1000000) + (reviewDatetime.seconds * 1000)).getFullYear(),
        new Date((reviewDatetime.nanoseconds / 1000000) + (reviewDatetime.seconds * 1000)).getMonth(),
        new Date((reviewDatetime.nanoseconds / 1000000) + (reviewDatetime.seconds * 1000)).getDate(),
        (parseInt(basicInfo.HHOfVisit) + (basicInfo.AMPMOfVisit == "pm" ? 12 : 0)),
        parseInt(basicInfo.MMOfVisit)
      ).getTime()
    ) / 1000) / 60)
  }


  render() {

    const {
      selectedSectionValue,
      formStepValue,
      formProcessingValue,
      currentModal,
      data_size,
      children,
      foursquareValue,
      selectedMarkerValue,
      selectedPlaceValue,
      formRestroomTypeValue,
      loginCredentialValue,
      formEditModeValue,
      formDeleteModeValue,
      mapListGenderPreference,
      mapListGenderPreferenceUpdates,
      settingsGenderPreference
    } = this.props;

    const genderPref = mapListGenderPreferenceUpdates > 0 ? mapListGenderPreference : settingsGenderPreference;


    // console.log("selectedMarkerValue in render before return: ", selectedMarkerValue)
    // console.log("selectedPlaceValue in render before return: ", selectedPlaceValue)

    const foursquarePlaces = !foursquareValue ? null : (

      foursquareValue.map((place, i) => {

        // console.log("fsPlace - " + i + " - ", place);

        const name = place.name ? place.name : null;
        const category = place.categories ? (place.categories[0] ? place.categories[0].name : "") : null;
        const address = place.location.address;
        const distance = place.distance + " ft";

        const id = place.id;
        const city = place.location.city;
        const stateCode = place.location.state;
        const zip = place.location.postalCode;
        const country = place.location.country;


        // const signInButtonComponent = () => {
        //   return (
        //     <div className="row">
        //     </div>
        //     )
        // }

        return (
          <div className="row" key={i + "fs"}>
            <div
              className="col jc-se ai-c"
              data_placedata={JSON.stringify(place)}
              onClick={e => this.placeSelected(e, place)}
              data_placename={name}
              data_placeaddress={address}
              data_placecategory={category}
              data_placedistance={distance}

              data_placeid={id}
              data_placecity={city}
              data_placestatecode={stateCode}
              data_placezip={zip}
              data_placecountry={country}

              style={{
                flexWrap: "wrap",
                whiteSpace: "wrap",
              }}
            >
              <span className=""><b>{name}</b> ({distance}) </span>
              <span className="">{address} </span>
              <span className="">{category} </span>
              {i !== (foursquareValue.length - 1) ? <HorizontalRule /> : null}

            </div>
          </div>
        )
      })
    )

    return (
      <React.Fragment>
        {
          currentModal === "settingsModal" ? null : (

            <section
              id="modalContainer"
              className="animated fadeIn faster col ai-c"
              style={{
                position: "absolute",
                // top: selectedSectionValue === "mapList" ? "92.5px" : "0",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                backgroundColor: "rgba(197,197,197,0.55)",
                WebkitBackdropFilter: "blur(8px)",
                backdropFilter: "blur(8px)",
                zIndex: "1000",
                color: "inherit"
              }}
            >

              <div className="row animated fadeIn ac-fs"
                style={{
                  maxHeight: (
                    currentModal === "formLocationModal" ? "87.5%" :
                      currentModal === "placeModal" ? "97.5%" :
                        currentModal || formStepValue === 6 || formStepValue === 7 ? "27.5%" :
                          "50%"
                  ),
                  maxWidth: (
                    currentModal === "formLocationModal" ? "92.5%" :
                      currentModal === "placeModal" ? "95%" :
                        currentModal || formStepValue === 6 || formStepValue === 7 ? "70%" :
                          "50%"
                  ),
                  background: "#f5f5f5",
                  borderRadius: "5px",
                  boxShadow: "0 0 3px #a8a8a8",
                }}
              >




                <div className="col jc-fs ac-fs ai-s "
                  style={{
                    // background: "#f5f5f5",
                    // borderRadius: "5px",
                    // boxShadow: "0 0 3px #a8a8a8",
                  }}
                >

                  <div className="row animated fadeIn slow ac-fe "
                    style={{
                      minHeight: "40px",
                      maxHeight: "40px",
                    }}
                  >
                    <div className="col ai-fe"
                      style={{
                        pointerEvents: "all",
                        zIndex: "1000",
                      }}
                    >
                      <span className="mx-2 skip" onClick={e => this.closeModal(e)}
                        style={{
                          pointerEvents: "all",
                          fontSize: "2.5em",
                          fontWeight: "500",
                          color: "grey",
                          zIndex: '1000',
                          marginTop: ""
                        }}
                      >
                        {formStepValue !== 7 && !(currentModal === "deleteModal" && !formProcessingValue && loginCredentialValue && !formEditModeValue && !formDeleteModeValue) ? "×" : null}
                      </span>
                    </div>
                  </div>





                  { //whereimat 4/17-4/18
                    currentModal === "placeModal" ? (

                      <div className="row " style={{ pointerEvents: "all" }}>
                        <div className="col fc jc-sb"
                          style={{ border: "1px solid whitesmoke" }}
                        >

                          <div className="row ">
                            <div className="col-2 ai-c">
                              <div className="row">
                                <div className="col ai-c">
                                  {selectedPlaceValue.allWeightedAvg ? <img src={selectedMarkerValue.icon} className="mx-2" height="50" width="50" /> : ""}
                                </div>
                              </div>
                              <div className="row">
                                <div className="col ai-c">
                                  <p style={{ fontStyle: "italic", fontSize: "16px" }}><b>{selectedPlaceValue.allWeightedAvg ? parseFloat(selectedPlaceValue.allWeightedAvg.toFixed(1)) : null}</b></p>
                                </div>
                              </div>
                            </div>
                            <div className="col-8">
                              <span>{selectedPlaceValue ? selectedPlaceValue.name : "sad face :("}</span>
                              <span className="mt-1" style={{ fontSize: "11px" }}>{selectedPlaceValue ? selectedPlaceValue.location.address : "your house"}</span>
                            </div>
                            <div className="col-2 ai-c">
                              <p> {console.log("mapListGenderPreferenceUpdates ---> ", genderPref)}
                                {/* <span style={{ fontSize: "12px" }}>(</span> */}
                                <span style={{ fontSize: "11px", fontStyle: "italic" }}>{genderPref}</span>
                                {/* <span style={{ fontSize: "12px" }}>)</span> */}
                              </p>
                            </div>
                          </div>



                          {selectedPlaceValue.allRecentReviews ?
                            <>
                              <HorizontalRule data_width="90%" />
                              <div className="row my-1 jc-se">
                                <div className="col">
                                  <img src={`https://img.icons8.com/ios-glyphs/18/${selectedPlaceValue.accessible ? `000000` : `d3d3d3`}/sporty-wheelchair-user.png`} />
                                </div>
                                <div className="col">
                                  <img src={`https://img.icons8.com/ios-glyphs/18/${selectedPlaceValue.genderNeutral ? "000000" : "d3d3d3"}/gender-neutral-washroom.png`} />
                                </div>
                                <div className="col">
                                  <img src={`https://img.icons8.com/ios-glyphs/18/${selectedPlaceValue.babyStation ? "000000" : "d3d3d3"}/baby.png`} />
                                </div>
                                <div className="col">
                                  <img src={`https://img.icons8.com/ios-glyphs/18/${selectedPlaceValue.cleaningSchedule ? "000000" : "d3d3d3"}/housekeeper-female.png`} />
                                </div>
                                <div className="col">
                                  <img src={`https://img.icons8.com/ios-glyphs/18/${selectedPlaceValue.admission === "Pay" ? "000000" : "d3d3d3"}/cheap-2-1.png`} />
                                </div>
                              </div>

                              <HorizontalRule data_width="45%" />

                              <div className="row-f-1 ">
                                <div className="col fc jc-fs">

                                  <div className="row jc-se my-1">
                                    {/* <div className="col-1"></div> */}
                                    <div className="col">
                                      <div className="row mt-1 mb-1" style={{ fontSize: "11.5px" }}>Clean</div>
                                      <div className="row mt-1 mb-1" style={{ fontSize: "12.5px" }}>{selectedPlaceValue.allCleanAvg ? parseFloat(selectedPlaceValue.allCleanAvg.toFixed(1)) : null}</div>
                                    </div>
                                    <div className="col">
                                      <div className="row mt-1 mb-1" style={{ fontSize: "11.5px" }}>Privacy</div>
                                      <div className="row mt-1 mb-1" style={{ fontSize: "12.5px" }}>{selectedPlaceValue.allCleanAvg ? parseFloat(selectedPlaceValue.allPrivacyAvg.toFixed(1)) : null}</div>
                                    </div>
                                    <div className="col">
                                      <div className="row mt-1 mb-1" style={{ fontSize: "11.5px" }}>Safety</div>
                                      <div className="row mt-1 mb-1" style={{ fontSize: "12.5px" }}>{selectedPlaceValue.allCleanAvg ? parseFloat(selectedPlaceValue.allSafetyAvg.toFixed(1)) : null}</div>
                                    </div>
                                    <div className="col">
                                      <div className="row mt-1 mb-1" style={{ fontSize: "11.5px" }}>Comfort</div>
                                      <div className="row mt-1 mb-1" style={{ fontSize: "12.5px" }}>{selectedPlaceValue.allCleanAvg ? parseFloat(selectedPlaceValue.allComfortAvg.toFixed(1)) : null}</div>
                                    </div>
                                    <div className="col">
                                      <div className="row mt-1 mb-1" style={{ fontSize: "11.5px" }}>Style</div>
                                      <div className="row mt-1 mb-1" style={{ fontSize: "12.5px" }}>{selectedPlaceValue.allCleanAvg ? parseFloat(selectedPlaceValue.allStyleAvg.toFixed(1)) : null}</div>
                                    </div>
                                    {/* <div className="col-1"></div> */}
                                  </div>


                                  <div className="row js-fg my-1">
                                    <div className="col">

                                      <div className="row ai-fs"
                                        style={{
                                          height: "15px",
                                          WebkitOverflowScrolling: "touch",
                                          overflowY: "scroll",
                                          msOverflowY: "scroll",
                                          overflowX: "hidden",
                                          msOverflowX: "hidden",
                                        }}
                                      >
                                        <div
                                          id="commentsScroller"
                                          className="col jc-fs pt-1 "
                                          style={{
                                            overflowX: "hidden",
                                            msOverflowX: "hidden",
                                            overflowY: "hidden",
                                            msOverflowY: "hidden",
                                            backgroundColor: "#E0E0E0"
                                          }}
                                        >

                                          {
                                            selectedPlaceValue.allRecentReviews.map((review, i) => {
                                              return (
                                                <div className="row js-fg mb-1" key={"review" && i}>
                                                  <div className="col fc jc-fs ai-fs mx-1 bg-whitesmoke py-1 px-2 brdr-rad">
                                                    <p className=" ta-l" style={{ borderBottom: "0.5px solid grey", borderRight: "1px solid lightgrey" }}>&nbsp;
                                                      <span style={{ fontSize: "12px", fontStyle: "italic" }}>{parseFloat(review.scores.total.toFixed(1))}</span>
                                                      <span>&nbsp;&nbsp;</span>
                                                      <span style={{ fontSize: "9px", color: "grey" }}>
                                                        {
                                                          this.timeAgoInMin(review.reviewDatetime, review.basicInfo) < 60 ? this.timeAgoInMin(review.reviewDatetime, review.basicInfo) + " m" :
                                                            this.timeAgoInMin(review.reviewDatetime, review.basicInfo) < 1440 ? Math.floor(this.timeAgoInMin(review.reviewDatetime, review.basicInfo) / 60) + " h" :
                                                              this.timeAgoInMin(review.reviewDatetime, review.basicInfo) <= 10080 ? Math.floor(this.timeAgoInMin(review.reviewDatetime, review.basicInfo) / 1440) + " d" :
                                                                this.timeAgoInMin(review.reviewDatetime, review.basicInfo) <= 40320 ? Math.floor(this.timeAgoInMin(review.reviewDatetime, review.basicInfo) / 10080) + " w" :
                                                                  this.timeAgoInMin(review.reviewDatetime, review.basicInfo) <= 524160 ? Math.floor(this.timeAgoInMin(review.reviewDatetime, review.basicInfo) / 40320) + " m" :
                                                                    Math.floor(this.timeAgoInMin(review.reviewDatetime, review.basicInfo) / 524160) + " yr"
                                                        }
                                                      </span>&nbsp;</p>
                                                    <p className="ta-l mt-1">
                                                      <span style={{ fontSize: "19px", fontStyle: "italic" }}>{review.comments.length > 2 ? '"' : null}</span>&nbsp;
                                                      <span style={{ fontStyle: "italic", fontSize: "12.5px" }}>{review.comments.length > 2 ? review.comments : null}</span>&nbsp;
                                                      <span style={{ fontSize: "19px", fontStyle: "italic" }}>{review.comments.length > 2 ? '"' : null}</span>
                                                    </p>
                                                    <div className="row mt-2 mb-2">
                                                      {review.photos.length >= 1 ?
                                                        <div className="col">
                                                          <img src={review.photos[0].url} style={{ maxWidth: "calc(50vw - 30px)", maxHeight: "225px" }} />
                                                        </div>
                                                        : null}
                                                      {review.photos.length === 2 ?
                                                        <div className="col">
                                                          <img src={review.photos[1].url} style={{ maxWidth: "calc(50vw - 30px)", maxHeight: "225px" }} />
                                                        </div>
                                                        : null}
                                                    </div>
                                                  </div>
                                                </div>
                                              )

                                            })

                                          }
                                        </div>
                                      </div>

                                    </div>
                                  </div>

                                </div>

                              </div>
                            </>
                            : <p><em>No reviews to show...</em></p>
                          }

                          <div className="row mb-2">
                            <div className="col-2"></div>

                            {
                              this.props.userReviews1 && this.props.userReviews1.map(userReview => {
                                return userReview.locationID === selectedMarkerValue.store_place.placeID;
                              }).indexOf(true) >= 0 ? (
                                  <div className="col-8" onClick={e => this.editReviewClicked(e, selectedPlaceValue)}>
                                    <p><span style={{ fontSize: "14px", fontStyle: "italic", color: "#0abab5" }}><b>Edit Your Existing Review</b></span></p>
                                  </div>
                                ) : (
                                  <div className="col-8" onClick={e => this.addReviewClicked(e, selectedPlaceValue)}>
                                    <p><span style={{ fontSize: "14px", fontStyle: "italic", color: "#0abab5" }}>Add Review</span></p>
                                  </div>
                                )
                            }


                            <div className="col-2 jc-c ai-c ac-c">
                              {/* <div className="col-2 jc-c ai-c ac-c" onClick={e => this.favoriteClicked(e, selectedPlaceValue)}> */}
                              {/* <img src="https://img.icons8.com/material-outlined/21/383838/bookmark-ribbon--v1.png" /> */}
                              {/* <img src="https://img.icons8.com/material-two-tone/21/000000/bookmark-ribbon--v1.png"/> */}
                            </div>
                          </div>


                        </div>


                      </div>
                    ) : null
                  }





                  {
                    currentModal === "formLocationModal" ? (

                      this.props.foursquareValue === null ? <div className="fsLoader" /> : (
                        <React.Fragment>

                          <div className="row mt-1 "
                            style={{
                              minHeight: "45px",
                              maxHeight: "45px"
                            }}
                          >
                            <div className="col mx-3 ">
                              <LocationModal
                                data_border="0.5px solid #0abab5"
                                data_classname="skip"
                              />
                            </div>
                          </div>

                          <div className="row ai-fs my-2"
                            style={{
                              height: "calc(100% - (35px + 45px))",
                              // height: "calc(100% - (35px + 45px))",
                              WebkitOverflowScrolling: "touch",
                              overflowY: "scroll",
                              msOverflowY: "scroll",
                              overflowX: "hidden",
                              msOverflowX: "hidden",
                            }}
                          >
                            <div
                              id="fsReviewScroller"
                              className="col jc-fs pt-1"
                              style={{
                                overflowX: "hidden",
                                msOverflowX: "hidden",
                                overflowY: "hidden",
                                msOverflowY: "hidden",
                              }}
                            >
                              {foursquarePlaces}
                            </div>
                          </div>
                        </React.Fragment>
                      )

                    ) : null
                  }





                  {
                    currentModal !== "formLocationModal" && currentModal !== "placeModal" && (currentModal || formStepValue > 5) ? (

                      <div className="row" style={{ pointerEvents: "all" }}>
                        <div className="col jc-se">

                          <div className="row">
                            <div className="col">
                              {currentModal === "formResetModal" && !formProcessingValue && !formEditModeValue ? <p>Reset review form and start over?</p> : null}
                              {currentModal === "formResetModal" && !formProcessingValue && formEditModeValue ? <p>Exit edit of review?</p> : null}

                              {currentModal === "deleteModal" && !formProcessingValue && loginCredentialValue && formDeleteModeValue ? <p>Confirm deletion of review?</p> : null}
                              {currentModal === "deleteModal" && !formProcessingValue && loginCredentialValue && !formEditModeValue && !formDeleteModeValue ? <p>Your review has been deleted.</p> : null}
                              {currentModal === "deleteModal" && formProcessingValue && loginCredentialValue && !formEditModeValue && formDeleteModeValue ? <p>Processing deletion...  </p> : null}

                              {currentModal !== "formResetModal" && !formProcessingValue && !loginCredentialValue ? <p>Please sign in to submit review</p> : null}
                              {formStepValue === 6 && !formProcessingValue && loginCredentialValue && !formEditModeValue ? <p>Ok to submit review?</p> : null}
                              {formStepValue === 6 && !formProcessingValue && loginCredentialValue && formEditModeValue ? <p>Ok to submit edited review?</p> : null}

                              {formStepValue === 7 && formProcessingValue && loginCredentialValue && !formEditModeValue && !formDeleteModeValue ? <p>Saving review...   </p> : null}
                              {formStepValue === 7 && formProcessingValue && loginCredentialValue && formEditModeValue && !formDeleteModeValue ? <p>Saving edited review...  </p> : null}


                              {formStepValue === 7 && !formProcessingValue && loginCredentialValue && !formEditModeValue ? <p>Thank you for your review.</p> : null}

                              {/* {formStepValue === 7 && !formProcessingValue && loginCredentialValue && formEditModeValue ? <p>Thank you for editing your review.</p> : null} */}
                            </div>
                          </div>


                          {
                            currentModal !== "formResetModal" && formStepValue !== 7 && !loginCredentialValue && !formProcessingValue ? (
                              <div className="row">
                                <div className="col">
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
                                </div>
                              </div>
                            ) : null
                          }


                          <div className="row">
                            {
                              formStepValue !== 7 && !formProcessingValue && !(currentModal === "deleteModal" && !formProcessingValue && loginCredentialValue && !formEditModeValue && !formDeleteModeValue) ? (
                                <div className="col">
                                  <FormNavButton
                                    data_text={
                                      currentModal === "formResetModal" && !formProcessingValue ? "Cancel" :
                                        formDeleteModeValue ? "Cancel" :
                                          formStepValue === 6 && !formProcessingValue ? "Cancel" :
                                            null
                                    }
                                    data_classes="button-form-modal"
                                    data_width="100px"
                                    func_navcommand={
                                      currentModal === "formResetModal" && !formProcessingValue ? "cancel" :
                                        formDeleteModeValue ? "cancelDelete" :
                                          formStepValue === 6 && !formProcessingValue ? "prev" :
                                            null
                                    }
                                  />
                                </div>

                              ) : null
                            }

                            {
                              (currentModal === "formResetModal") || (this.props.loginCredentialValue && !formProcessingValue) ? (
                                <div className="col">
                                  <FormNavButton
                                    data_text={
                                      currentModal === "formResetModal" && !formProcessingValue && !formEditModeValue ? "Reset" :
                                        currentModal === "formResetModal" && !formProcessingValue && (formEditModeValue) ? "Exit" :
                                          currentModal === "deleteModal" && !formProcessingValue && (formDeleteModeValue) ? "Confirm" :
                                            formStepValue === 6 ? "Submit" :
                                              formStepValue === 7 && !formProcessingValue ? "Close" :
                                                currentModal === "deleteModal" && !formProcessingValue && loginCredentialValue && !formEditModeValue && !formDeleteModeValue ? "Close" :
                                                  null
                                    }
                                    data_classes="button-form-modal"
                                    data_width="100px"
                                    func_navcommand={
                                      currentModal === "formResetModal" && !formProcessingValue && (formEditModeValue) ? "exit" :
                                        currentModal === "formResetModal" && !formProcessingValue ? "reset" :
                                          formDeleteModeValue ? "confirmDelete" :
                                            formStepValue === 6 ? "submit" :
                                              formStepValue === 7 && !formProcessingValue ? "finish" :
                                                currentModal === "deleteModal" && !formProcessingValue && loginCredentialValue && !formEditModeValue && !formDeleteModeValue ? "reset" :
                                                  null
                                    }
                                  />
                                </div>
                              ) : null
                            }

                          </div>

                        </div>
                      </div>
                    ) : null
                  }






                </div>
              </div>
            </section>
          )
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log("mainwrapper state: ", state);
  return {
    // geolocationValue: state.geolocationState.geolocationValue,
    formStepValue: state.formState.formStepValue,
    formEditModeValue: state.formState.formEditModeValue,
    formProcessingValue: state.formState.formProcessingValue,
    modalState: state.modalState,
    currentModal: state.modalState.currentModal,
    centerLatValue: state.mapState.centerLatValue,
    centerLngValue: state.mapState.centerLngValue,
    selectedSectionValue: state.sectionState.selectedSectionValue,
    selectedPlaceValue: state.mapState.selectedPlaceValue,
    selectedMarkerValue: state.mapState.selectedMarkerValue,
    formRestroomTypeValue: state.formState.formRestroomTypeValue,
    // reviews: state.firestore.ordered.reviews,
    loginCredentialValue: state.auth.loginCredentialValue,
    foursquareValue: state.foursquareState.foursquareValue,
    formDeleteModeValue: state.formState.formDeleteModeValue,
    userReviews1: state.auth.userReviews,
    userReviews2: state.firestore.ordered.reviews,
    mapListGenderPreference: state.myStuffState.mapListGenderPreference,
    mapListGenderPreferenceUpdates: state.myStuffState.mapListGenderPreferenceUpdates,
    settingsGenderPreference: state.myStuffState.settingsGenderPreference
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // locationChosen: location => dispatch(locationChosen(location)),
    modalClosed: () => dispatch(modalClosed()),
    formNext: (step) => dispatch(formNext(step)),
    formPrev: () => dispatch(formPrev()),
    resetForm: () => dispatch(resetForm()),
    selectSection: (section) => dispatch(selectSection(section)),
    locationChosen: location => dispatch(locationChosen(location)),
    cancelReviewDelete: () => dispatch(cancelReviewDelete()),
    modalClosed: () => dispatch(modalClosed()),
    signIn: () => dispatch(signIn()),
    initiateReviewEdit: reviewData => dispatch(initiateReviewEdit(reviewData)),
    initiateReviewDelete: reviewToDelete => dispatch(initiateReviewDelete(reviewToDelete))
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
)(ModalContainer);
