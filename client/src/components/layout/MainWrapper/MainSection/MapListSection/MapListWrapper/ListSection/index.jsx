import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import PlaceCard from './../../../../../../sharedComponents/mapListComponents/PlaceCard';
// import { statement } from '@babel/template';

// import { firestoreConnect } from 'react-redux-firebase';

// import { Redirect } from 'react-router-dom';

import greyMarker from '../../MapListWrapper/greyMarker50.png';
import redMarker from '../../MapListWrapper/redMarker50.png';
import orangeMarker from '../../MapListWrapper/orangeMarker50.png';
import yellowMarker from '../../MapListWrapper/yellowMarker50.png';
import chartreuseMarker from '../../MapListWrapper/chartreuseMarker50.png';
import greenMarker from '../../MapListWrapper/greenMarker50.png';

const iconArr = [greyMarker, redMarker, orangeMarker, yellowMarker, chartreuseMarker, greenMarker, redMarker, orangeMarker, yellowMarker, chartreuseMarker, greenMarker]


class ListSection extends Component {

  constructor(props) {
    super(props);
    this.fsListings = null;
    this.state = {
      markerIcon: null,
      placeArr: []
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

    const foursquareValue = this.props.foursquareValue;
    const prev_foursquareValue = prevProps.foursquareValue;

    const fsPlacesUpdate = foursquareValue && (JSON.stringify(foursquareValue) !== JSON.stringify(prev_foursquareValue));

    // console.log("prev_foursquareValue", prev_foursquareValue)
    // console.log("foursquareValue", fsPlacesUpdate)

    // console.log("fsPlacesUpdate", fsPlacesUpdate)

    if (fsPlacesUpdate) {


      // console.log("inside if state for fsPlacesUpdate")

      const tempArr = foursquareValue.map((place, i) => {

        // console.log("inside map fsPlacesUpdate")

        const getRandomInt = (min, max) => {

          const minNum = Math.ceil(min);
          const maxNum = Math.floor(max);

          // console.log("minNum: ", minNum)
          // console.log("maxNum: ", maxNum)

          return Math.floor(Math.random() * (maxNum - minNum)) + minNum;
        }

        // placeholders


        const placeName = place.name;
        const placeAddress = place.location ? place.location.address : "-";
        const placeCategory = place.categories ? (place.categories[0] ? place.categories[0].name : "-") : "-";
        const placeDistance = place.distance;
        const placeMarker = this.state.markerIcon;
        const placeNumReviews = 14;
        const userReviwed = getRandomInt(0, 10) === 2 ? true : false;
        const userBookmarked = getRandomInt(0, 10) === 3 ? true : false;

        return (
          <div className="row" key={i + "listFSkey"} >
            <div className="col py-1">
              <PlaceCard
                data_componentsource="list"

                data_placename={placeName}
                data_placeaddress={placeAddress}
                data_placecategory={placeCategory}
                data_placedistance={placeDistance}

                data_placemarker={placeMarker}
                // data_placerating={}
                data_placenumreviews={placeNumReviews}

                data_userreviewed={userReviwed}
                data_userbookmarked={userBookmarked}
              />
            </div>
          </div>
        )
      });

      this.setState({
        placeArr: tempArr
      })

    }
  }

  render() {

    const displayValue = this.props.data_display ? null : "none";

    const {
      foursquareValue,
      selectedMarkerValue
    } = this.props;

    return (
      <div className="row ai-fs animated fadeIn fast" id="listSection"
        style={{
          display: displayValue,
          height: "inherit",
          WebkitOverflowScrolling: "touch",
          overflowY: "scroll",
          msOverflowY: "scroll",
          overflowX: "hidden",
          msOverflowX: "hidden",
        }}
      >
        <div
          id=""
          className="col jc-fs py-2"
          style={{
            overflowX: "hidden",
            msOverflowX: "hidden",
            overflowY: "hidden",
            msOverflowY: "hidden",
          }}
        >
          {this.state.placeArr}
        </div >
      </div >
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  return {
    geolocation: state.geoLocation,
    mapListToggleValue: ownProps.display,
    selectedMarkerValue: state.mapState.selectedMarkerValue,
    foursquareValue: state.foursquareState.foursquareValue,
    // reviews: state.firestore.ordered.reviews,
    // auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps, null),
  // firestoreConnect([
  //   {
  //     collection: 'reviews',
  //     orderBy: ['createdAt', 'desc']
  //   }
  // ])
)(ListSection);