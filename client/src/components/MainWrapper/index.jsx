import React, { Component } from 'react'
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { getGeolocation } from '../../store/actions/geoActions';

// import TopBar from './TopBar/';
import MainSection from './MainSection/';
import BottomBar from './BottomBar/';

import { connect } from 'react-redux';
import { compose } from 'redux';
// import styles from '../../index.module.css';

// import { statement } from '@babel/template';

// import { firestoreConnect } from 'react-redux-firebase';
// import { Redirect } from 'react-router-dom';

class MainWrapper extends Component {


  componentDidMount() {

    // console.log("Wrapper bounds from store: ", this.props.boundsValue);
  }


  render() {

    const {
      mapListToggleValue,
      geolocationValue
    } = this.props;

    return (
      // <div
      //   fixed
      //   background="red"
      //   style={{
      //     background: "green !important"
      //   }}
      // >
      < div
        className="rs"
        style={{
          flexDirection: "column",
          // zIndex: "11"
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



const mapStateToProps = (state) => {
  // console.log("mainwrapper state: ", state);
  return {
    mapListToggleValue: state.mapListState.mapListToggleValue,
    // geolocationValue: state.geolocationState.geolocationValue,
    boundsValue: state.boundsState.boundsValue,
    // reviews: state.firestore.ordered.reviews,
    // auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(MainWrapper)
