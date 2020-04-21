import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';

import greyMarker from '../../../../components/layout/MainWrapper/MainSection/MapListSection/MapListWrapper/greyMarker50.png';
import redMarker from '../../../../components/layout/MainWrapper/MainSection/MapListSection/MapListWrapper/redMarker50.png';
import orangeMarker from '../../../../components/layout/MainWrapper/MainSection/MapListSection/MapListWrapper/orangeMarker50.png';
import yellowMarker from '../../../../components/layout/MainWrapper/MainSection/MapListSection/MapListWrapper/yellowMarker50.png';
import chartreuseMarker from '../../../../components/layout/MainWrapper/MainSection/MapListSection/MapListWrapper/chartreuseMarker50.png';
import greenMarker from '../../../../components/layout/MainWrapper/MainSection/MapListSection/MapListWrapper/greenMarker50.png';


export class PlaceCard extends Component {


  assignPlaceIcon = (rating = null) => {
    switch (rating) {
      // case rating >= 4.85:
      //   return "STAR icon"
      case rating >= 4.5:
        return greenMarker;
      case rating >= 4:
        return chartreuseMarker;
      case rating >= 3:
        return yellowMarker;
      case rating >= 2:
        return orangeMarker;
      case rating > 0:
        return redMarker;
      // case rating >= 1.15:
      //   return "RADIOACTIVE icon";          
      default:
        return greyMarker;
    }
  };

  placeCardClicked = (e) => {
    e.preventDefault();
    console.log('clicked on placeCard')
  }


  render() {

    const {
      data_componentsource,
      data_placerating,
      data_placenumreviews,
      data_placename,
      data_placeaddress,
      data_placecategory,
      data_placedistance,
      data_userreviewed,
      data_userbookmarked,
    } = this.props;

    // const placeRating = data_placerating ? data_placerating : null;
    const placeCardPosition = data_componentsource === "map" ? ["absolute", "0"] : data_componentsource === "list" ? [null, null] : [null, null];

    return (

      <div className="row animated fadeIn slow px-1 py-1"
        style={{
          position: placeCardPosition[0],
          left: placeCardPosition[1],
          right: placeCardPosition[1],
          margin: "0 auto",
          top: "10px",
          height: "72.5px",
          width: "96%",
          borderRadius: "5px",
          backgroundColor: "rgba(250,250,250,.805)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          border: "0.5px solid lightgrey",
          boxShadow: "0 0 3px #a8a8a8",
        }}
      >

        <div className="col-2 ai-c">
          {/* rating icon */}
          <img className="markerIcon" height="45" width="45" src={this.assignPlaceIcon(data_placerating)} />
          <span style={{ fontSize: "9.5px", color: "grey" }}><em>{data_placerating} / 5</em></span>
          <span style={{ fontSize: "9.5px", color: "grey" }}><em>{data_placenumreviews} reviews</em></span>
        </div>

        <div className="col-7">
          {/* key info */}
          <div className="row">
            <div className="col">
              <span>{data_placename}</span>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <span>{data_placecategory}</span>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <span>{data_placeaddress}</span>
            </div>
          </div>
        </div>

        <div className="col-2">
          {/* addl info */}
          <div className="row">
            <div className="col">
              <span style={{ fontSize: "11px", color: "grey" }}>{data_placedistance} m</span>
            </div>
          </div>

          <div className="row">

            <div className="col">
              {
                data_userreviewed ? (
                  <img src="https://img.icons8.com/material-outlined/17/000000/checked.png" />
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                      width="19" height="19"
                      viewBox="0 0 172 172"
                      style={{ fill: "#000000" }}>
                      <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                        <path d="M0,172v-172h172v172z" fill="none" />
                        <g fill="#eeeeee">
                          <path d="M86,14.33333c-39.49552,0 -71.66667,32.17115 -71.66667,71.66667c0,39.49552 32.17115,71.66667 71.66667,71.66667c39.49552,0 71.66667,-32.17115 71.66667,-71.66667c0,-39.49552 -32.17115,-71.66667 -71.66667,-71.66667zM86,28.66667c31.74921,0 57.33333,25.58412 57.33333,57.33333c0,31.74921 -25.58412,57.33333 -57.33333,57.33333c-31.74921,0 -57.33333,-25.58412 -57.33333,-57.33333c0,-31.74921 25.58412,-57.33333 57.33333,-57.33333z" />
                        </g>
                      </g>
                    </svg>
                  )
              }

            </div>

            <div className="col">

              {
                data_userbookmarked ? (

                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="20" height="20"
                    viewBox="0 0 172 172"
                    style={{ fill: "#000000" }}>
                    <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                      <path d="M0,172v-172h172v172z" fill="none" />
                      <g fill="#f1c40f">
                        <path d="M136.16667,147.63333l-50.16667,-18.63333l-50.16667,18.63333v-118.96667c0,-3.58333 2.86667,-7.16667 7.16667,-7.16667h86c4.3,0 7.16667,2.86667 7.16667,7.16667z" opacity="0.3" />
                        <path d="M28.66667,157.66667v-129c0,-7.88333 6.45,-14.33333 14.33333,-14.33333h86c7.88333,0 14.33333,6.45 14.33333,14.33333v129l-57.33333,-21.5zM86,121.11667l43,16.48333v-108.93333h-86v108.21667z" />
                      </g>
                    </g>
                  </svg>

                ) : (

                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                      width="20" height="20"
                      viewBox="0 0 172 172"
                      style={{ fill: "#000000" }}>
                      <g fill="none" fill-rule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                        <path d="M0,172v-172h172v172z" fill="none" />
                        <g fill="#eeeeee">
                          <path d="M43.06999,14.33333c-7.85076,0 -14.33333,6.46862 -14.33333,14.31934l-0.06999,129.014l57.33333,-21.5l57.33333,21.5v-10.34407v-118.65593c0,-7.83362 -6.49972,-14.33333 -14.33333,-14.33333zM43.06999,28.66667h85.93001v108.31185l-43,-16.125l-42.986,16.125z" />
                        </g>
                      </g>
                    </svg>

                  )

              }

            </div>
          </div>
        </div>

        <div className="col-1 ai-fe ac-fe ta-r" onClick={this.placeCardClicked}>
          <img className="animated heartBeat slower" src="https://img.icons8.com/ios-glyphs/18/000000/chevron-right.png" />
        </div>

      </div>
    )
  }
}



const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  return {
    geolocation: state.geoLocation,
    mapListToggleValue: ownProps.display,
    selectedMarkerValue: state.mapState.selectedMarkerValue
    // reviews: state.firestore.ordered.reviews,
    // auth: state.firebase.auth
  }
}




const mapDispatchToProps = (dispatch) => {
  return {

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
)(PlaceCard);
