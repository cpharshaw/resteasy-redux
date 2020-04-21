import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';


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
      markerIcon: null
    }
  }

  componentDidUpdate() {

    // const fsPlacesUpdate = foursquareValue && (JSON.stringify(foursquareValue) !== JSON.stringify(prev_foursquareValue));

    // if (fsPlacesUpdate) {
    //   this.renderJunk(map, iconArr);
    // }



  }

  render() {

    const getRandomInt = (min, max) => {

      const minNum = Math.ceil(min);
      const maxNum = Math.floor(max);

      console.log("minNum: ", minNum)
      console.log("maxNum: ", maxNum)

      return Math.floor(Math.random() * (maxNum - minNum)) + minNum;
    }

    // const randomMarkerColor = iconArr[getRandomInt(0, colors.length)];

    // console.log(process.env);

    const displayValue = this.props.data_display ? null : "none";

    const {
      foursquareValue,
      selectedMarkerValue
    } = this.props;

    // console.log("all the props, ListSection: ", this.props);
    return (
      // <div
      // id="listSection"
      //   className="rs animated fadeIn faster"
      //   style={{
      //     display: displayValue,
      //   }}
      // >
      <div id="listSection" className="container-fluid animated fadeIn fast" style={{ display: displayValue }}>
        <div className="row">
          <div className="col py-2">

            <div className="row animated fadeIn slow px-1 py-1"
              style={{
                // position: "absolute",
                // left: "0",
                // right: "0",
                margin: "0 auto",
                // top: "12.5px",
                height: "72.5px",
                width: "95%",
                // maxWidth: "350px",
                borderRadius: "5px",
                backgroundColor: "rgba(255,255,255,0.5)",
                // backgroundColor: "white",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
                border: "0.5px solid lightgrey",
                // fontSize: "12.25px"
                // boxShadow: "0 0 12px #a2ddd9"
              }}
            >
              <div className="col-2">
                {/* rating icon */}
                <span>icon</span>
              </div>
              <div className="col-6 ">
                {/* key info */}
                <div className="row">
                  <div className="col">
                    <span>Stuff</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <span>Category - score</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <span>last line</span>
                  </div>
                </div>
              </div>
              <div className="col-3">
                {/* addl info */}
                <div className="row">
                  <div className="col">
                    <span>stuff</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <span>more stuff</span>
                  </div>
                </div>
              </div>
              <div className="col-1 ai-fe ac-fe ta-r">
                <span style={{ width: "fit-content", fontSize: "16px", fontWeight: "bold" }}>></span>
              </div>

            </div>

            <div className="row animated fadeIn slow px-1 py-1"
              style={{
                // position: "absolute",
                // left: "0",
                // right: "0",
                margin: "0 auto",
                // top: "12.5px",
                height: "72.5px",
                width: "95%",
                // maxWidth: "350px",
                borderRadius: "5px",
                backgroundColor: "rgba(255,255,255,0.5)",
                // backgroundColor: "white",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
                border: "0.5px solid lightgrey",
                // fontSize: "12.25px"
                // boxShadow: "0 0 12px #a2ddd9"
              }}
            >
              <div className="col-2">
                {/* rating icon */}
                <span>icon</span>
              </div>
              <div className="col-6 ">
                {/* key info */}
                <div className="row">
                  <div className="col">
                    <span>Stuff</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <span>Category - score</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <span>last line</span>
                  </div>
                </div>
              </div>
              <div className="col-3">
                {/* addl info */}
                <div className="row">
                  <div className="col">
                    <span>stuff</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <span>more stuff</span>
                  </div>
                </div>
              </div>
              <div className="col-1 ai-fe ac-fe ta-r">
                <span style={{ width: "fit-content", fontSize: "16px", fontWeight: "bold" }}>
                  <img src="https://img.icons8.com/ultraviolet/80/000000/chevron-right.png" />
                </span>
              </div>

            </div>



            <div className="row animated fadeIn slow px-1 py-1"
              style={{
                // position: "absolute",
                // left: "0",
                // right: "0",
                margin: "0 auto",
                // top: "12.5px",
                height: "72.5px",
                width: "95%",
                // maxWidth: "350px",
                borderRadius: "5px",
                backgroundColor: "rgba(255,255,255,0.5)",
                // backgroundColor: "white",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
                border: "0.5px solid lightgrey",
                // fontSize: "12.25px"
                // boxShadow: "0 0 12px #a2ddd9"
              }}
            >
              <div className="col-2">
                {/* rating icon */}
                <span>icon</span>
              </div>
              <div className="col-6 ">
                {/* key info */}
                <div className="row">
                  <div className="col">
                    <span>Stuff</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <span>Category - score</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <span>last line</span>
                  </div>
                </div>
              </div>
              <div className="col-3">
                {/* addl info */}
                <div className="row">
                  <div className="col">
                    <span>stuff</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <span>more stuff</span>
                  </div>
                </div>
              </div>
              <div className="col-1 ai-fe ac-fe ta-r">
                <span style={{ width: "fit-content", fontSize: "16px", fontWeight: "bold" }}>></span>
              </div>
            </div >




            <div className="row animated fadeIn slow px-1 py-1"
              style={{
                // position: "absolute",
                // left: "0",
                // right: "0",
                margin: "0 auto",
                // top: "12.5px",
                height: "72.5px",
                width: "95%",
                // maxWidth: "350px",
                borderRadius: "5px",
                backgroundColor: "rgba(255,255,255,0.5)",
                // backgroundColor: "white",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
                border: "0.5px solid lightgrey",
                // fontSize: "12.25px"
                // boxShadow: "0 0 12px #a2ddd9"
              }}
            >
              <div className="col-2">
                {/* rating icon */}
                <span>icon</span>
              </div>
              <div className="col-6 ">
                {/* key info */}
                <div className="row">
                  <div className="col">
                    <span>Stuff</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <span>Category - score</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <span>last line</span>
                  </div>
                </div>
              </div>
              <div className="col-3">
                {/* addl info */}
                <div className="row">
                  <div className="col">
                    <span>stuff</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <span>more stuff</span>
                  </div>
                </div>
              </div>
              <div className="col-1 ai-fe ac-fe ta-r">
                <span style={{ width: "fit-content", fontSize: "16px", fontWeight: "bold" }}>></span>
              </div>
            </div >



            <div className="row animated fadeIn slow px-1 py-1"
              style={{
                // position: "absolute",
                // left: "0",
                // right: "0",
                margin: "0 auto",
                // top: "12.5px",
                height: "72.5px",
                width: "95%",
                // maxWidth: "350px",
                borderRadius: "5px",
                backgroundColor: "rgba(255,255,255,0.5)",
                // backgroundColor: "white",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
                border: "0.5px solid lightgrey",
                // fontSize: "12.25px"
                // boxShadow: "0 0 12px #a2ddd9"
              }}
            >
              <div className="col-2">
                {/* rating icon */}
                <span>icon</span>
              </div>
              <div className="col-6 ">
                {/* key info */}
                <div className="row">
                  <div className="col">
                    <span>Stuff</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <span>Category - score</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <span>last line</span>
                  </div>
                </div>
              </div>
              <div className="col-3">
                {/* addl info */}
                <div className="row">
                  <div className="col">
                    <span>stuff</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <span>more stuff</span>
                  </div>
                </div>
              </div>
              <div className="col-1 ai-fe ac-fe ta-r">
                <span style={{ width: "fit-content", fontSize: "16px", fontWeight: "bold" }}>></span>
              </div>
            </div >


            <div className="row animated fadeIn slow px-1 py-1"
              style={{
                // position: "absolute",
                // left: "0",
                // right: "0",
                margin: "0 auto",
                // top: "12.5px",
                height: "72.5px",
                width: "95%",
                // maxWidth: "350px",
                borderRadius: "5px",
                backgroundColor: "rgba(255,255,255,0.825)",
                // backgroundColor: "white",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
                border: "0.5px solid lightgrey",
                // fontSize: "12.25px"
                // boxShadow: "0 0 12px #a2ddd9"
              }}
            >
              <div className="col-2">
                {/* rating icon */}
                <span>icon</span>
              </div>
              <div className="col-6 ">
                {/* key info */}
                <div className="row">
                  <div className="col">
                    <span>Stuff</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <span>Category - score</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <span>last line</span>
                  </div>
                </div>
              </div>
              <div className="col-3">
                {/* addl info */}
                <div className="row">
                  <div className="col">
                    <span>stuff</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <span>more stuff</span>
                  </div>
                </div>
              </div>
              <div className="col-1 ai-fe ac-fe ta-r">
                <span style={{ width: "fit-content", fontSize: "16px", fontWeight: "bold" }}>></span>
              </div>
            </div >

          </div >
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
    selectedMarkerValue: state.mapState.selectedMarkerValue
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