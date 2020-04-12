import React, { Component } from 'react'
import MainSection from './MainSection/';
import BottomBar from './BottomBar/';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { GoogleApiWrapper } from "google-maps-react";
import { storeGoogleAPI } from '../../../store/actions/googleAPIActions';

import '../../../styling/reset/customReset.css';

// import '../../../styling/base.css';
// import '../../../styling/elements.css';
// import '../../../styling/styles.css';
// import '../../../styling/bootstrapGrid.css';

class MainWrapper extends Component {

  state = {
    windowHeight: [],
    max_windowHeight: function () {
      return Math.max(...this.windowHeight);
    },
    min_windowHeight: function () {
      return Math.min(...this.windowHeight);
    }
  }

  componentDidMount() {
    this.props.storeGoogleAPI(this.props.google.maps);
  }


  render() {

    const {
      mapListToggleValue,
      geolocationValue
    } = this.props;

    return (
      <div id="mainWrapper" className="container-fluid ai-c"
        style={{
          position: "fixed",
          bottom: "0",
          left: "0",
          right: "0",
          maxWidth: "720px",
          maxHeight: "1680px",
          alignSelf: "center",
          margin: "0 auto",
          // border: "0.5px solid lightgrey",
          boxShadow: "0 0 10px lightgrey"
        }}
      >

        <main
          id="mainSection"
          className="row animated fadeIn fast"
          style={{
            position: "relative",
            height: "calc(100% - 62.5px)"
          }}
        >
          <div className="col">
            < MainSection />
          </div>
        </main>

        <footer
          id="footer"
          className="row animated fadeIn faster"
          style={{
            position: "relative",
            height: "62.5px",
          }}
        >
          <nav id="bottomBar" className="col bg-primary">
            < BottomBar />
          </nav>
        </footer >

      </div>
    )

  }
}


// export default Main;


const mapStateToProps = (state) => {
  return {
    mapListToggleValue: state.mapListState.mapListToggleValue,
    boundsValue: state.boundsState.boundsValue,
    googleAPIValue: state.googleAPIState.googleAPIValue,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeGoogleAPI: api => dispatch(storeGoogleAPI(api))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  // firestoreConnect([
  //   {
  //     collection: 'reviews',
  //     orderBy: ['createdAt', 'desc']
  //   }
  // ]),

  GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GM_KEY,
    version: "3.30"
  })
)(MainWrapper);
