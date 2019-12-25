import React, { Component } from 'react'
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { getGeolocation } from '../../store/actions/geoActions';

import TopBar from './TopBar/';
import MainSection from './MainSection/';
import BottomBar from './BottomBar/';


import { connect } from 'react-redux';
import { compose } from 'redux';

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
      <div
        style={
          {
            height: "100%",
            width: "100%"
          }
        }
      >
        < TopBar />
        < MainSection />
        < BottomBar />
        {/* < SearchBox /> */}
        <div
          style={
            {
              position: "absolute",
              top: "7vh",
              height: "86vh",
              maxHeight: "calc(86vh - 36px)",
              width: "100%"
            }
          }
        >
          {/* < AddReview display={mapListToggleValue} /> */}
          {/* < MainMap display={mapListToggleValue} />
          < MainList display={!mapListToggleValue} /> */}
        </div>

      </div>

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
