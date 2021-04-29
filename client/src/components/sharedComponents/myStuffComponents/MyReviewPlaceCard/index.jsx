import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';

import greyMarker from '../../../../components/layout/MainWrapper/MainSection/MapListSection/MapListWrapper/greyMarker50.png';
import redMarker from '../../../../components/layout/MainWrapper/MainSection/MapListSection/MapListWrapper/redMarker50.png';
import orangeMarker from '../../../../components/layout/MainWrapper/MainSection/MapListSection/MapListWrapper/orangeMarker50.png';
import yellowMarker from '../../../../components/layout/MainWrapper/MainSection/MapListSection/MapListWrapper/yellowMarker50.png';
import chartreuseMarker from '../../../../components/layout/MainWrapper/MainSection/MapListSection/MapListWrapper/chartreuseMarker50.png';
import greenMarker from '../../../../components/layout/MainWrapper/MainSection/MapListSection/MapListWrapper/greenMarker50.png';
import { modalToggled } from '../../../../store/actions/modalActions';
import { storeSelectedPlace } from '../../../../store/actions/mapActions';
import { selectSection } from '../../../../store/actions/sectionActions';
import { initiateReviewEdit, initiateReviewDelete } from '../../../../store/actions/formActions';

export class MyReviewPlaceCard extends Component {

  assignPlaceIcon = (rating) => {
    // console.log("MyReviewPlaceCard, assignPlaceIcon ---> ", rating)
    if (rating > 4.50) {
      return greenMarker
    } else if (rating >= 4.00) {
      return chartreuseMarker;
    } else if (rating >= 3.00) {
      return yellowMarker;
    } else if (rating >= 2.00) {
      return orangeMarker;
    } else if (rating > 0) {
      return redMarker;
    } else {
      return greyMarker;
    }
  };

  assignPlaceScoreColor = (rating) => {
    // console.log("MyReviewPlaceCard, assignPlaceScoreColor ---> ", rating)
    if (rating > 4.50) {
      return "#57bb8a"
    } else if (rating >= 4.00) {
      return "#abc878";
    } else if (rating >= 3.00) {
      return "#fcd666";
    } else if (rating >= 2.00) {
      return "#f3a96c";
    } else if (rating > 0) {
      return "#e67c73";
    } else {
      return "#D5DBDB";
    }
  };




  placeCardClicked = (e, data_place) => {
    e.preventDefault();
    this.props.modalToggled("placeModal");
    // if (!this.props.mapListToggleValue) this.props.storeSelectedPlace(data_place);
  };


  editClicked = (e, data) => {

    e.preventDefault();

    // console.log("editClicked(data) ...");

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

      reviewDatetime: data.reviewDatetime,
      reviewEditDatetime: data.reviewEditDatetime
    }

    this.props.initiateReviewEdit(reviewToEdit);
    this.props.selectSection("review");
  };
  

  deleteClicked = (e, data) => {
    e.preventDefault();
    this.props.modalToggled("deleteModal");
    console.log("delete clicked, data ---> ", data);

    const deleteObj = {
      id: data.id,
      locationID: data.locationID,
      userID: data.userID
    }

    // const locationID = data.formLocationValue.id;
    // const userID = data.formLocationValue.id;
    this.props.initiateReviewDelete(deleteObj);
    // if (!this.props.mapListToggleValue) this.props.storeSelectedPlace(data_place);
  };


  render() {
    const {
      data
    } = this.props;

    //   {
    //     "id": "LpybHEg0BUgkUsd1xtRC",
    //     "basicInfo": {
    //         "locationCategory": "Middle Eastern Restaurant",
    //         "locationCity": "Philadelphia",
    //         "locationCountry": "United States",
    //         "locationName": "Al-Sham 5",
    //         "locationNotes": "",
    //         "locationValue": {
    //           "name": "Northern Liberties Rec Playground (The Cement Park)",
    //           "category": "Playground",
    //           "distance": 100,
    //           "address": "706 N 3rd St",
    //           "id": "55b5966d498e74c4440f1cbf",
    //           "city": "Philadelphia",
    //           "stateCode": "PA",
    //           "zip": "19123",
    //           "country": "United States"
    //         },
    //         "locationState": "PA",
    //         "locationZip": "19123",
    //         "outOfOrder": false,
    //         "restroomUsed": "Men's",
    //         "timeOfVisit": "Morning"
    //     },
    //     "comments": "",
    //     "features": {
    //         "accessible": true,
    //         "admission": "Free",
    //         "babyStation": false,
    //         "cleaningSchedule": false,
    //         "genderNeutral": false,
    //         "price": null
    //     },
    //     "locationID": "5f19c821bbb6d40e60dbb0fb",
    //     "photos": [],
    //     "reviewDatetime": {
    //         "seconds": 1616957660,
    //         "nanoseconds": 473000000
    //     },
    //     "scores": {
    //         "cleanliness": 3,
    //         "comfort": 4,
    //         "privacy": 4,
    //         "safety": 5,
    //         "style": 3,
    //         "total": "3.860"
    //     },
    //     "userID": "XvXpZCUG4zbGXQE8ejLuoxoSg7g1"
    // }    


    const placeName = data.basicInfo.locationName;
    const placeCategory = data.basicInfo.locationCategory;
    const placeAddress = data.basicInfo.locationValue.address;
    const reviewTime = new Date(Math.floor(data.reviewDatetime.seconds * 1000));

    const reviewMonth = (parseInt(reviewTime.getMonth()) + 1).toString();
    const reviewDate = reviewTime.getDate();
    const reviewYear = reviewTime.getFullYear();

    const reviewMMDDYY = reviewMonth.toString() + "/" + reviewDate.toString() + "/" + reviewYear.toString();

    const scoreTotal = parseFloat(data.scores.total.toFixed(3).substring(0,3));
    // const placeName = data.basicInfo.locationName;
    // const placeName = data.basicInfo.locationName;



    // const placeName = place.name;
    // const placeAddress = place.location ? place.location.address : "-";
    // const placeCategory = place.categories ? (place.categories[0] ? place.categories[0].name : "-") : "-";
    // const placeDistance = place.distance;
    // const placeMarker = this.state.markerIcon;
    // const placeNumReviews = 14;
    // const userReviwed = getRandomInt(0, 10) === 2 ? true : false;
    // const userBookmarked = getRandomInt(0, 10) === 3 ? true : false;


    // console.log("props - data ---> ", data);


    // const placeCardPosition = data_componentsource === "map" ? [null, "0"] : data_componentsource === "list" ? [null, null] : [null, null];

    return (

      <div className="row animated fadeIn faster px-1 py-1 my-1"
        style={{
          margin: "0 auto",
          height: "72.5px",
          width: "96%",
          borderRadius: "5px",
          backgroundColor: "rgba(250,250,250,.805)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          boxShadow: "0 0 3px #a8a8a8",
        }}
      >

        <div className="col-2 ai-c">
          {/* rating icon */}
          {/* <img className="markerIcon" height="45" width="45" src={scoreTotal ? this.assignPlaceIcon(scoreTotal) : greyMarker} /> */}
          {/* <span style={{ fontSize: "9px", color: "grey" }}><em>{scoreTotal}</em></span> */}
          <span
            style={{
              fontSize: "20px",
              fontStyle: "italic",
              color: this.assignPlaceScoreColor(data.scores.total)
            }}
          >
            {scoreTotal}
          </span>
          <span style={{ fontSize: "11px", color: "grey" }}>{reviewMMDDYY}</span>
        </div>

        <div className="col-8">
          {/* key info */}
          <div className="row">
            <div className="col">
              <span>{placeName}</span>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <span style={{ fontSize: "11px", color: "grey" }}>{placeCategory}</span>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <span style={{ fontSize: "11px", color: "grey" }}>{placeAddress}</span>
            </div>
          </div>
        </div>

        <div className="col-2">
          <span style={{ fontSize: "9px", fontStyle: "italic", color: "#808080" }}
            onClick={e => this.deleteClicked(e, data)}
          >Delete</span>
          <span style={{ fontSize: "13.5px", fontStyle: "italic" }}
            onClick={e => this.editClicked(e, data)}
          >Edit</span>
        </div>


        {/* <div className="col-1 ai-fe ac-fe ta-r" onClick={e => this.placeCardClicked(e, data)}>
          <img className="animated heartBeat slower" src="https://img.icons8.com/ios-glyphs/18/000000/chevron-right.png" />
        </div> */}

      </div>
    )
  }
}



const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  return {
    geolocation: state.geoLocation,
    mapListToggleValue: ownProps.display,
    selectedMarkerValue: state.mapState.selectedMarkerValue,
    mapListToggleValue: state.mapListState.mapListToggleValue
    // auth: state.firebase.auth
  }
}




const mapDispatchToProps = (dispatch) => {
  return {
    modalToggled: (selectedModal) => dispatch(modalToggled(selectedModal)),
    storeSelectedPlace: (place) => dispatch(storeSelectedPlace(place)),
    selectSection : section => dispatch(selectSection(section)),
    initiateReviewEdit: reviewData => dispatch(initiateReviewEdit(reviewData)),
    initiateReviewDelete: reviewToDelete => dispatch(initiateReviewDelete(reviewToDelete))
  }
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  // firestoreConnect([
  //   {
  //     collection: 'reviews',
  //     orderBy: ['createdAt', 'desc']
  //   }
  // ])
)(MyReviewPlaceCard);
