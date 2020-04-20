import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';


// import { statement } from '@babel/template';

// import { firestoreConnect } from 'react-redux-firebase';

// import { Redirect } from 'react-router-dom';


class ListSection extends Component {
  
  constructor(props) {
    super(props);
    this.fsListings = null;
  }

  componentDidUpdate() {

    // const fsPlacesUpdate = foursquareValue && (JSON.stringify(foursquareValue) !== JSON.stringify(prev_foursquareValue));

    // if (fsPlacesUpdate) {
    //   this.renderJunk(map, iconArr);
    // }



  }

  render() {

    // console.log(process.env);

    const displayValue = this.props.data_display ? null : "none";
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
                  <img src="https://img.icons8.com/ultraviolet/80/000000/chevron-right.png"/>
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
    mapListToggleValue: ownProps.display
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