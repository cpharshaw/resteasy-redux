import React, { Component } from 'react'
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { getGeolocation } from '../../store/actions/geoActions';
import MainMap from '../MainMap/';
import MainList from '../MainList/';
import Toggler from '../Toggler/';

import { connect } from 'react-redux';
import { compose } from 'redux';

// import { statement } from '@babel/template';

// import { firestoreConnect } from 'react-redux-firebase';
// import { Redirect } from 'react-router-dom';

export class MainWrapper extends Component {


  componentWillMount() {
    this.props.getGeolocation();
  }

  render() {

    const { mapListToggleValue } = this.props;

    // TODO 
    // employ toggle for map and list

    console.log("all the props, MainWrapper: ", this.props);


    // const MapListSwitcher = mapListToggleValue ? < MainList display={} /> : < MainMap display={}/>

    // console.log("MainWrapper, this.props: ", this.props)
    return (
      <div>        
        < MainMap display={mapListToggleValue} />
        < MainList display={!mapListToggleValue} />
        < Toggler />
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  console.log("mainwrapper state: ", state);
  return {
    mapListToggleValue: state.mapListState.mapListToggleValue,
    geoLocationValue: state.geoLocationState.geoLocationValue
    // reviews: state.firestore.ordered.reviews,
    // auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getGeolocation: () => dispatch(getGeolocation())
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(MainWrapper)




