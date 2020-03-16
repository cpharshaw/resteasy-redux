import React, { Component } from 'react'
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { getGeolocation } from '../../store/actions/geoActions';

// import TopBar from './TopBar/';
import MainSection from './MainSection/';
import BottomBar from './BottomBar/';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { GoogleApiWrapper } from "google-maps-react";
import { storeGoogleAPI } from '../../store/actions/googleAPIActions';
// import styles from '../../index.module.css';

// import { statement } from '@babel/template';

// import { firestoreConnect } from 'react-redux-firebase';
// import { Redirect } from 'react-router-dom';

class MainWrapper extends Component {

  componentDidMount() {
    this.props.storeGoogleAPI(this.props.google.maps);
 
  }


  render() {

    const {
      mapListToggleValue,
      geolocationValue
    } = this.props;
    // console.log("GOOGLE PROPS: ", this.props.googleAPIValue)
    return (
      // <div
      //   fixed
      //   background="red"
      //   style={{
      //     background: "green !important"
      //   }}
      // >
      < div
        id="mainSection"
        className="rs"
        style={{
          flexDirection: "column",
          // zIndex: "11"
          height: "100vh"
        }}
      >
        {/* < TopBar /> */}
        < MainSection />
        < BottomBar />
      </ div >
      
      // </div>

    )

  }
}


// export default MainWrapper;


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
