import React, { Component } from 'react'
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { getGeolocation } from '../../store/actions/geoActions';
import MainMap from '../MainMap/';
import MainList from '../MainList/';
import Toggler from '../Toggler/';
import SearchBox from '../SearchBox/';


import { connect } from 'react-redux';
import { compose } from 'redux';

// import { statement } from '@babel/template';

// import { firestoreConnect } from 'react-redux-firebase';
// import { Redirect } from 'react-router-dom';

class MainWrapper extends Component {


  componentWillMount() {
    // console.log("Wrapper bounds from store: ", this.props.boundsValue);
  }


  render() {

    const { mapListToggleValue, geolocationValue } = this.props;

    return (
      <div>
        < SearchBox />
        <div
          style={{
            position: "absolute",
            top: "7vh",
            height: "86vh",
            width: "100%"
          }}
        >
          < MainMap display={mapListToggleValue} />
          < MainList display={!mapListToggleValue} />
        </div>
        < Toggler />

      </div>

    )

  }
}

const mapStateToProps = (state) => {
  // console.log("mainwrapper state: ", state);
  return {
    mapListToggleValue: state.mapListState.mapListToggleValue,
    geolocationValue: state.geolocationState.geolocationValue,
    boundsValue: state.boundsState.boundsValue,
    // reviews: state.firestore.ordered.reviews,
    // auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // getGeolocation: () => dispatch(getGeolocation())
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(MainWrapper)




